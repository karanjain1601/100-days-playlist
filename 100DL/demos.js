(function(){
"use strict";
const C = { ink:"#070C12", slate:"#0F1822", rule:"#1C2836", rule2:"#2A3B4E",
            chalk:"#DCE6F0", mute:"#8095AA", signal:"#FFB454", tensor:"#5BC8E6",
            verify:"#93D97B", warn:"#FF7B87", violet:"#B79CFF" };
const MONO = '11px ui-monospace, Menlo, Consolas, monospace';
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
let seed = 1234567;
function rnd(){ seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
function gauss(){ let u=0,v=0; while(!u) u=rnd(); while(!v) v=rnd();
  return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); }
function fmt(x, d){ d = d===undefined?3:d;
  if(!isFinite(x)) return (x>0?"+":"")+"\u221e";
  if(Number.isNaN(x)) return "NaN";
  return (Math.abs(x)<1e-4 && x!==0) ? x.toExponential(2) : x.toFixed(d); }
function grid(ctx,w,h,step){
  ctx.strokeStyle = C.rule; ctx.lineWidth = 1; ctx.beginPath();
  for(let x=0;x<=w;x+=step){ ctx.moveTo(x+.5,0); ctx.lineTo(x+.5,h); }
  for(let y=0;y<=h;y+=step){ ctx.moveTo(0,y+.5); ctx.lineTo(w,y+.5); }
  ctx.stroke();
}

/* =========================================================
   1 · HERO — two spirals, live MLP
   ========================================================= */
(function hero(){
  const bc = $("heroBoundary"), lc = $("heroLoss");
  if(!bc || !lc) return;
  const bx = bc.getContext("2d"), lx = lc.getContext("2d");
  const off = document.createElement("canvas"); off.width = off.height = 72;
  const ox = off.getContext("2d");
  const NPC = 190;
  let X=[], Y=[], net=null, losses=[], step=0, running=!REDUCED, frame=0;

  function makeData(){
    X=[];Y=[];
    for(let c=0;c<2;c++) for(let i=0;i<NPC;i++){
      const r = i/NPC*0.92 + 0.06;
      const t = c*Math.PI + i/NPC*3.4 + gauss()*0.13;
      X.push([r*Math.sin(t), r*Math.cos(t)]); Y.push(c);
    }
  }
  const ACT = {
    relu: z => z>0?z:0,           drelu: z => z>0?1:0,
    tanh: z => Math.tanh(z),      dtanh: z => 1-Math.tanh(z)**2,
    sig:  z => 1/(1+Math.exp(-z)),dsig:  z => { const s=1/(1+Math.exp(-z)); return s*(1-s); }
  };
  function build(width, depth, actName){
    const sizes=[2]; for(let i=0;i<depth;i++) sizes.push(width); sizes.push(1);
    const Ws=[],Bs=[];
    for(let l=0;l<sizes.length-1;l++){
      const ni=sizes[l], no=sizes[l+1], w=new Float64Array(ni*no);
      const s = actName==="relu" ? Math.sqrt(2/ni) : Math.sqrt(1/ni);
      for(let k=0;k<w.length;k++) w[k]=gauss()*s;
      Ws.push(w); Bs.push(new Float64Array(no));
    }
    return {Ws,Bs,sizes,actName};
  }
  function fwd(n,x){
    const acts=[x], zs=[]; let a=x;
    for(let l=0;l<n.Ws.length;l++){
      const ni=n.sizes[l], no=n.sizes[l+1], z=new Float64Array(no);
      for(let j=0;j<no;j++){ let s=n.Bs[l][j];
        for(let i=0;i<ni;i++) s+=a[i]*n.Ws[l][i*no+j]; z[j]=s; }
      zs.push(z);
      const o=new Float64Array(no), last = l===n.Ws.length-1;
      for(let j=0;j<no;j++) o[j] = last ? ACT.sig(z[j]) : ACT[n.actName](z[j]);
      acts.push(o); a=o;
    }
    return {acts,zs};
  }
  function trainStep(n, lr, bs){
    const L=n.Ws.length;
    const gW=n.Ws.map(w=>new Float64Array(w.length)), gB=n.Bs.map(b=>new Float64Array(b.length));
    let loss=0;
    for(let s=0;s<bs;s++){
      const k=(rnd()*X.length)|0, {acts,zs}=fwd(n,X[k]), p=acts[L][0], y=Y[k];
      loss += -(y*Math.log(p+1e-9)+(1-y)*Math.log(1-p+1e-9));
      let delta=new Float64Array([ (p-y)/bs ]);
      for(let l=L-1;l>=0;l--){
        const ni=n.sizes[l], no=n.sizes[l+1], a=acts[l];
        for(let j=0;j<no;j++){ gB[l][j]+=delta[j];
          for(let i=0;i<ni;i++) gW[l][i*no+j]+=a[i]*delta[j]; }
        if(l>0){
          const nd=new Float64Array(ni), d = "d"+n.actName;
          for(let i=0;i<ni;i++){ let s=0;
            for(let j=0;j<no;j++) s+=n.Ws[l][i*no+j]*delta[j];
            nd[i]=s*ACT[d](zs[l-1][i]); }
          delta=nd;
        }
      }
    }
    for(let l=0;l<L;l++){
      for(let k=0;k<n.Ws[l].length;k++) n.Ws[l][k]-=lr*gW[l][k];
      for(let k=0;k<n.Bs[l].length;k++) n.Bs[l][k]-=lr*gB[l][k];
    }
    return loss/bs;
  }
  function drawBoundary(){
    const R=off.width, img=ox.createImageData(R,R);
    for(let iy=0;iy<R;iy++) for(let ix=0;ix<R;ix++){
      const x=(ix/(R-1))*2.4-1.2, y=1.2-(iy/(R-1))*2.4;
      const p=fwd(net,[x,y]).acts[net.Ws.length][0], o=(iy*R+ix)*4;
      const t=Math.min(1,Math.max(0,(p-0.5)*2.6+0.5));
      img.data[o]   = 12 + t*243;
      img.data[o+1] = 24 + t*156;
      img.data[o+2] = 40 + (1-t)*190;
      img.data[o+3] = 78;
    }
    ox.putImageData(img,0,0);
    const W=bc.width,H=bc.height;
    bx.clearRect(0,0,W,H);
    bx.fillStyle=C.ink; bx.fillRect(0,0,W,H);
    bx.imageSmoothingEnabled=true; bx.drawImage(off,0,0,W,H);
    grid(bx,W,H,W/12);
    for(let i=0;i<X.length;i++){
      const px=(X[i][0]+1.2)/2.4*W, py=(1.2-X[i][1])/2.4*H;
      bx.beginPath(); bx.arc(px,py,3.1,0,7);
      bx.fillStyle = Y[i] ? C.signal : C.tensor; bx.fill();
      bx.strokeStyle="rgba(7,12,18,.85)"; bx.lineWidth=1; bx.stroke();
    }
  }
  function drawLoss(){
    const W=lc.width,H=lc.height;
    lx.clearRect(0,0,W,H); lx.fillStyle=C.ink; lx.fillRect(0,0,W,H);
    grid(lx,W,H,50);
    if(losses.length<2) return;
    const mx=Math.max(0.72, Math.max.apply(null,losses));
    lx.beginPath();
    for(let i=0;i<losses.length;i++){
      const px=i/(losses.length-1)*(W-30)+20, py=H-16-(losses[i]/mx)*(H-40);
      i?lx.lineTo(px,py):lx.moveTo(px,py);
    }
    lx.strokeStyle=C.signal; lx.lineWidth=2; lx.stroke();
    lx.font=MONO; lx.fillStyle=C.mute;
    lx.fillText("BCE loss",22,20); lx.fillText(fmt(mx,2),W-46,20);
    lx.fillText("0",22,H-4); lx.fillText("step "+step,W-92,H-4);
  }
  function acc(){
    let ok=0, L=net.Ws.length;
    for(let i=0;i<X.length;i++) if((fwd(net,X[i]).acts[L][0]>0.5?1:0)===Y[i]) ok++;
    return ok/X.length;
  }
  function reset(){
    seed=(Date.now()%100000)+7; makeData();
    net=build(+$("hw").value, +$("hd").value, $("hact").value);
    losses=[]; step=0; drawBoundary(); drawLoss();
  }
  function loop(){
    if(running && net){
      const lr=Math.pow(10,+$("hlr").value);
      let l=0; for(let i=0;i<6;i++){ l=trainStep(net,lr,64); step++; }
      if(step%12<6) losses.push(Math.min(l,3));
      if(losses.length>300) losses.shift();
      frame++;
      if(frame%(REDUCED?18:4)===0) drawBoundary();
      drawLoss();
      $("heroOut1").innerHTML='<span class="k">step</span> <b>'+step+'</b> &nbsp; <span class="k">train accuracy</span> <b>'+(acc()*100).toFixed(1)+'%</b>';
      $("heroOut2").innerHTML='<span class="k">loss</span> <b>'+fmt(l,4)+'</b> &nbsp; <span class="k">params</span> <b>'+
        net.Ws.reduce((a,w,i)=>a+w.length+net.Bs[i].length,0)+'</b> &nbsp; <span class="k">lr</span> <b>'+fmt(Math.pow(10,+$("hlr").value),3)+'</b>';
    }
    requestAnimationFrame(loop);
  }
  ["hw","hd"].forEach(id=>$(id).addEventListener("input",()=>{
    $(id==="hw"?"hwv":"hdv").textContent=$(id).value; reset(); }));
  $("hlr").addEventListener("input",()=>{ $("hlrv").textContent=fmt(Math.pow(10,+$("hlr").value),3); });
  $("hact").addEventListener("change",reset);
  $("hreset").addEventListener("click",reset);
  $("hpause").addEventListener("click",e=>{ running=!running; e.target.textContent=running?"Pause":"Resume"; });
  $("hlrv").textContent=fmt(Math.pow(10,+$("hlr").value),3);
  if(REDUCED) $("hpause").textContent="Start";
  reset(); loop();
})();

/* =========================================================
   2 · BROADCASTING RESOLVER
   ========================================================= */
(function bcast(){
  const out=$("bcOut"); if(!out) return;
  function parse(s){ return s.split(/[,\sx*]+/).filter(Boolean).map(Number); }
  function run(){
    const a=parse($("bcA").value), b=parse($("bcB").value);
    if(!a.length||!b.length||a.concat(b).some(v=>!(v>0)||v%1)){
      out.innerHTML='<span style="color:'+C.warn+'">Enter positive integers, e.g. 32,1,128</span>'; return;
    }
    const n=Math.max(a.length,b.length);
    const pa=Array(n-a.length).fill(1).concat(a), pb=Array(n-b.length).fill(1).concat(b);
    const res=[]; let ok=true; const rows=[];
    for(let i=0;i<n;i++){
      const x=pa[i], y=pb[i];
      let note, r;
      if(x===y){ r=x; note="equal"; }
      else if(x===1){ r=y; note="A stretched "+y+"\u00d7 (free)"; }
      else if(y===1){ r=x; note="B stretched "+x+"\u00d7 (free)"; }
      else { r="\u2717"; note="INCOMPATIBLE"; ok=false; }
      res.push(r);
      rows.push('<div><span class="k">axis '+i+'</span> &nbsp;'+x+' vs '+y+' &nbsp;\u2192 &nbsp;<b>'+r+'</b> &nbsp;<span class="k">'+note+'</span></div>');
    }
    out.innerHTML =
      '<div><span class="k">padded</span> ('+pa.join(", ")+') &nbsp; and &nbsp; ('+pb.join(", ")+')</div>'+
      rows.join("")+
      (ok ? '<div style="margin-top:6px;color:'+C.verify+'">result shape ('+res.join(", ")+') &nbsp; \u2014 '+
              res.reduce((p,v)=>p*v,1).toLocaleString()+' elements</div>'
          : '<div style="margin-top:6px;color:'+C.warn+'">ValueError: operands could not be broadcast together</div>');
  }
  $("bcRun").addEventListener("click",run);
  ["bcA","bcB"].forEach(id=>$(id).addEventListener("keydown",e=>{ if(e.key==="Enter") run(); }));
  run();
})();

/* =========================================================
   3 · DOT PRODUCT — drag two vectors
   ========================================================= */
(function dot(){
  const cv=$("dotCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, ox=W/2, oy=H/2, S=62;
  let a={x:2.4,y:1.2}, b={x:1.1,y:-2.0}, drag=null;
  const toPx=v=>({x:ox+v.x*S, y:oy-v.y*S});
  function arrow(v,col,lbl){
    const p=toPx(v);
    ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=2.4;
    ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(p.x,p.y); ctx.stroke();
    const ang=Math.atan2(p.y-oy,p.x-ox);
    ctx.beginPath();
    ctx.moveTo(p.x,p.y);
    ctx.lineTo(p.x-11*Math.cos(ang-0.4), p.y-11*Math.sin(ang-0.4));
    ctx.lineTo(p.x-11*Math.cos(ang+0.4), p.y-11*Math.sin(ang+0.4));
    ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.arc(p.x,p.y,7,0,7); ctx.globalAlpha=.22; ctx.fill(); ctx.globalAlpha=1;
    ctx.font=MONO; ctx.fillText(lbl, p.x+10, p.y-8);
  }
  function draw(){
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    grid(ctx,W,H,S/2);
    ctx.strokeStyle=C.rule2; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(0,oy); ctx.lineTo(W,oy); ctx.moveTo(ox,0); ctx.lineTo(ox,H); ctx.stroke();
    const bl=Math.hypot(b.x,b.y), d=a.x*b.x+a.y*b.y;
    if(bl>1e-6){
      const t=d/(bl*bl), pr={x:b.x*t, y:b.y*t}, pp=toPx(pr), ap=toPx(a);
      ctx.strokeStyle=C.violet; ctx.lineWidth=1.4; ctx.setLineDash([4,4]);
      ctx.beginPath(); ctx.moveTo(ap.x,ap.y); ctx.lineTo(pp.x,pp.y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle=C.violet; ctx.lineWidth=5; ctx.globalAlpha=.5;
      ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(pp.x,pp.y); ctx.stroke(); ctx.globalAlpha=1;
      ctx.fillStyle=C.violet; ctx.font=MONO;
      ctx.fillText("projection of a onto b", pp.x+8, pp.y+18);
    }
    arrow(b,C.tensor,"b"); arrow(a,C.signal,"a");
    const cos = d/((Math.hypot(a.x,a.y)*bl)||1e-9);
    $("dotOut").innerHTML =
      '<span class="k">a</span> = ('+fmt(a.x,2)+', '+fmt(a.y,2)+') &nbsp; <span class="k">b</span> = ('+fmt(b.x,2)+', '+fmt(b.y,2)+')<br>'+
      '<span class="k">a\u00b7b</span> = <b>'+fmt(d,3)+'</b> &nbsp; <span class="k">|a|</span> '+fmt(Math.hypot(a.x,a.y),2)+
      ' &nbsp; <span class="k">|b|</span> '+fmt(bl,2)+' &nbsp; <span class="k">cos\u03b8</span> <b>'+fmt(cos,3)+
      '</b> &nbsp; <span class="k">\u03b8</span> '+fmt(Math.acos(Math.max(-1,Math.min(1,cos)))*180/Math.PI,1)+'\u00b0<br>'+
      '<span class="k">'+(d>0.001?"positive \u2014 same general direction; a neuron with weights b would fire":
                          d<-0.001?"negative \u2014 opposing directions; the neuron is inhibited":
                          "orthogonal \u2014 b learns nothing from a")+'</span>';
  }
  function pos(e){
    const r=cv.getBoundingClientRect(), t=e.touches?e.touches[0]:e;
    return {x:((t.clientX-r.left)*cv.width/r.width-ox)/S, y:-((t.clientY-r.top)*cv.height/r.height-oy)/S};
  }
  function down(e){
    const p=pos(e);
    drag = Math.hypot(p.x-a.x,p.y-a.y)<0.5 ? "a" : Math.hypot(p.x-b.x,p.y-b.y)<0.5 ? "b" : null;
    if(drag) e.preventDefault();
  }
  function move(e){ if(!drag) return; e.preventDefault();
    const p=pos(e); (drag==="a"?a:b).x=p.x; (drag==="a"?a:b).y=p.y; draw(); }
  cv.addEventListener("mousedown",down); addEventListener("mousemove",move);
  addEventListener("mouseup",()=>drag=null);
  cv.addEventListener("touchstart",down,{passive:false});
  cv.addEventListener("touchmove",move,{passive:false});
  addEventListener("touchend",()=>drag=null);
  draw();
})();

/* =========================================================
   4 · LOW-RANK RECONSTRUCTION (power iteration SVD)
   ========================================================= */
(function svd(){
  const cv=$("svdCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), N=64, KMAX=48;
  const A=new Float64Array(N*N);
  for(let i=0;i<N;i++) for(let j=0;j<N;j++){
    const dx=i-26, dy=j-38, r=Math.hypot(dx,dy);
    let v = 0.35 + 0.3*Math.sin(j*0.28) + 0.22*(i/N);
    if(r<15) v += 0.55;
    if(Math.abs(i-j)<4) v += 0.3;
    if(i>44 && j>40) v = 0.9;
    A[i*N+j]=v;
  }
  const U=[],V=[],SG=[], R=Float64Array.from(A);
  (function decompose(){
    for(let k=0;k<KMAX;k++){
      let v=new Float64Array(N); for(let i=0;i<N;i++) v[i]=gauss();
      let u=new Float64Array(N), s=0;
      for(let it=0;it<80;it++){
        for(let i=0;i<N;i++){ let t=0; for(let j=0;j<N;j++) t+=R[i*N+j]*v[j]; u[i]=t; }
        let nu=Math.hypot.apply(null,Array.from(u))||1e-12;
        for(let i=0;i<N;i++) u[i]/=nu;
        for(let j=0;j<N;j++){ let t=0; for(let i=0;i<N;i++) t+=R[i*N+j]*u[i]; v[j]=t; }
        s=Math.hypot.apply(null,Array.from(v))||1e-12;
        for(let j=0;j<N;j++) v[j]/=s;
      }
      U.push(u.slice()); V.push(v.slice()); SG.push(s);
      for(let i=0;i<N;i++) for(let j=0;j<N;j++) R[i*N+j]-=s*u[i]*v[j];
    }
  })();
  const total=SG.reduce((p,c)=>p+c*c,0);
  function tile(dst,x0,size){
    const img=ctx.createImageData(N,N);
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){
      const g=Math.max(0,Math.min(1,dst[i*N+j]))*255, o=(i*N+j)*4;
      img.data[o]=g*0.92; img.data[o+1]=g*0.97; img.data[o+2]=g; img.data[o+3]=255;
    }
    const tmp=document.createElement("canvas"); tmp.width=tmp.height=N;
    tmp.getContext("2d").putImageData(img,0,0);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(tmp,x0,14,size,size);
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,14.5,size,size);
  }
  function draw(){
    const k=+$("svdK").value;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,cv.width,cv.height);
    const rec=new Float64Array(N*N);
    for(let t=0;t<k;t++){ const u=U[t],v=V[t],s=SG[t];
      for(let i=0;i<N;i++) for(let j=0;j<N;j++) rec[i*N+j]+=s*u[i]*v[j]; }
    tile(A,20,200); tile(rec,250,200);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("original  rank "+KMAX+"+",20,228);
    ctx.fillStyle=C.signal; ctx.fillText("rank "+k+" reconstruction",250,228);
    const x0=490,y0=24,w=190,h=170;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,w,h);
    const lmax=Math.log10(SG[0]+1e-9), lmin=Math.log10(SG[KMAX-1]+1e-9);
    ctx.beginPath();
    for(let t=0;t<KMAX;t++){
      const px=x0+t/(KMAX-1)*w, py=y0+h-(Math.log10(SG[t]+1e-9)-lmin)/((lmax-lmin)||1)*h;
      t?ctx.lineTo(px,py):ctx.moveTo(px,py);
    }
    ctx.strokeStyle=C.tensor; ctx.lineWidth=1.8; ctx.stroke();
    const kx=x0+(k-1)/(KMAX-1)*w;
    ctx.strokeStyle=C.signal; ctx.setLineDash([3,3]); ctx.beginPath();
    ctx.moveTo(kx,y0); ctx.lineTo(kx,y0+h); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle=C.mute; ctx.fillText("singular values (log)",x0,y0-6);
    ctx.fillText("1",x0,y0+h+14); ctx.fillText(String(KMAX),x0+w-14,y0+h+14);
    let kept=0; for(let t=0;t<k;t++) kept+=SG[t]*SG[t];
    const store=k*(2*N+1), full=N*N;
    $("svdOut").innerHTML =
      '<span class="k">energy kept</span> <b>'+(kept/total*100).toFixed(2)+'%</b> &nbsp; '+
      '<span class="k">storage</span> <b>'+store.toLocaleString()+'</b> of '+full.toLocaleString()+
      ' numbers (<b>'+(store/full*100).toFixed(1)+'%</b>) &nbsp; '+
      '<span class="k">\u03c3\u2081/\u03c3\u2096</span> '+fmt(SG[0]/SG[k-1],1)+
      '<br><span class="k">The spectrum falls off fast \u2014 that is what makes low-rank approximation, PCA and LoRA all work.</span>';
  }
  $("svdK").addEventListener("input",()=>{ $("svdKv").textContent=$("svdK").value; draw(); });
  draw();
})();

/* =========================================================
   5 · GRADIENT DESCENT (1D)
   ========================================================= */
(function gd(){
  const cv=$("gdCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, X0=-3.2, X1=3.2;
  const F={
    quad:{ f:x=>0.5*x*x,                          g:x=>x,                              name:"f = ½x²" },
    bumpy:{f:x=>0.15*x**4-0.9*x*x+0.15*x+1.35,    g:x=>0.6*x**3-1.8*x+0.15,            name:"f = 0.15x⁴ − 0.9x² + 0.15x" },
    ravine:{f:x=>3*x*x+0.6*Math.cos(9*x),         g:x=>6*x-5.4*Math.sin(9*x),          name:"f = 3x² + 0.6cos(9x)" }
  };
  let path=[];
  const px=x=>(x-X0)/(X1-X0)*(W-60)+40;
  function bounds(f){ let lo=1e9,hi=-1e9;
    for(let i=0;i<=200;i++){ const v=f(X0+(X1-X0)*i/200); lo=Math.min(lo,v); hi=Math.max(hi,v); }
    return [lo,hi]; }
  function draw(){
    const key=$("gdFn").value, {f,g,name}=F[key], [lo,hi]=bounds(f);
    const py=v=>H-30-(v-lo)/((hi-lo)||1)*(H-70);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H); grid(ctx,W,H,40);
    ctx.beginPath();
    for(let i=0;i<=400;i++){ const x=X0+(X1-X0)*i/400; i?ctx.lineTo(px(x),py(f(x))):ctx.moveTo(px(x),py(f(x))); }
    ctx.strokeStyle=C.rule2; ctx.lineWidth=2.2; ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute; ctx.fillText(name,42,22);
    if(path.length){
      ctx.strokeStyle="rgba(255,180,84,.42)"; ctx.lineWidth=1.2; ctx.beginPath();
      path.forEach((x,i)=>{ const X=px(x),Y=py(f(x)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
      ctx.stroke();
      path.forEach((x,i)=>{
        if(Math.abs(x)>60) return;
        const X=px(x), Y=py(Math.min(f(x),hi));
        ctx.beginPath(); ctx.arc(X,Y,i===path.length-1?5.5:3.2,0,7);
        ctx.fillStyle = i===path.length-1 ? "#fff" : (i===0?C.tensor:C.signal);
        ctx.globalAlpha = i===0||i===path.length-1 ? 1 : 0.25+0.75*i/path.length;
        ctx.fill(); ctx.globalAlpha=1;
      });
    }
    const last=path[path.length-1];
    $("gdOut").innerHTML = path.length
      ? '<span class="k">steps</span> <b>'+(path.length-1)+'</b> &nbsp; <span class="k">final x</span> <b>'+fmt(last,4)+
        '</b> &nbsp; <span class="k">f(x)</span> <b>'+fmt(f(last),4)+'</b> &nbsp; <span class="k">|f\u2032(x)|</span> '+fmt(Math.abs(g(last)),4)+
        (Math.abs(last)>50 ? ' &nbsp; <span style="color:'+C.warn+'">DIVERGED \u2014 \u03b7 exceeded 2/\u03bb</span>' : '')
      : '<span class="k">Press Run. Watch the step size, not just the endpoint.</span>';
  }
  function run(){
    const {g}=F[$("gdFn").value], lr=+$("gdLr").value;
    let x=+$("gdX0").value; path=[x];
    for(let i=0;i<60;i++){
      x -= lr*g(x);
      if(!isFinite(x) || Math.abs(x)>1e6){ path.push(Math.sign(x||1)*1e6); break; }
      path.push(x);
    }
    draw();
  }
  $("gdLr").addEventListener("input",()=>{ $("gdLrv").textContent=(+$("gdLr").value).toFixed(3); run(); });
  $("gdX0").addEventListener("input",()=>{ $("gdX0v").textContent=(+$("gdX0").value).toFixed(2); run(); });
  $("gdFn").addEventListener("change",run);
  $("gdRun").addEventListener("click",run);
  run();
})();

/* =========================================================
   6 · NUMERICAL STABILITY — naive vs stable softmax
   ========================================================= */
(function num(){
  const out=$("numOut"); if(!out) return;
  function f32(x){ const v=Math.fround(x); return Math.abs(v)>3.4028235e38 ? Infinity*Math.sign(v) : v; }
  function draw(){
    const m=+$("numM").value, z=[m, m-1, m-2];
    const en=z.map(v=>f32(Math.exp(v))), sn=f32(en.reduce((a,b)=>a+b,0));
    const naive=en.map(v=>f32(v/sn));
    const mx=Math.max.apply(null,z), es=z.map(v=>f32(Math.exp(v-mx))), ss=f32(es.reduce((a,b)=>a+b,0));
    const stable=es.map(v=>f32(v/ss));
    const bad=naive.some(v=>!isFinite(v)||Number.isNaN(v));
    const col=v=>(!isFinite(v)||Number.isNaN(v))?C.warn:C.chalk;
    out.innerHTML =
      '<span class="k">logits</span> ['+z.join(", ")+']<br>'+
      '<span class="k">naive&nbsp; exp(z)</span> &nbsp;'+en.map(v=>'<span style="color:'+col(v)+'">'+fmt(v,2)+'</span>').join(", ")+
      ' &nbsp;\u2192 softmax '+naive.map(v=>'<span style="color:'+col(v)+'">'+fmt(v,4)+'</span>').join(", ")+'<br>'+
      '<span class="k">stable exp(z\u2212max)</span> '+es.map(v=>fmt(v,4)).join(", ")+
      ' &nbsp;\u2192 softmax <b>'+stable.map(v=>fmt(v,4)).join(", ")+'</b><br>'+
      (bad ? '<span style="color:'+C.warn+'">float32 overflowed at z \u2248 88.7 (exp(88.7) \u2248 3.4e38). Every downstream number is now NaN.</span>'
           : m < -95 ? '<span style="color:'+C.signal+'">Underflow territory: naive exp(z) flushes to 0, so 0/0 = NaN. The stable form is unaffected.</span>'
           : '<span class="k">Both agree here. Raise the slider past 89 or below \u221295 and only one survives.</span>');
  }
  $("numM").addEventListener("input",()=>{ $("numMv").textContent=$("numM").value; draw(); });
  draw();
})();

/* =========================================================
   7 · ACTIVATION PLOTTER
   ========================================================= */
(function act(){
  const cv=$("actCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, XR=5, YR=2.2;
  const erf=x=>{ const s=Math.sign(x); x=Math.abs(x);
    const t=1/(1+0.3275911*x);
    const y=1-((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t*t*Math.exp(-x*x)+0;
    return s*(1-(((((1.061405429*t-1.453152027)*t+1.421413741)*t-0.284496736)*t+0.254829592)*t)*Math.exp(-x*x)); };
  const Phi=x=>0.5*(1+erf(x/Math.SQRT2));
  const sp=x=>Math.log1p(Math.exp(-Math.abs(x)))+Math.max(x,0);
  const A={
    sigmoid:{f:x=>1/(1+Math.exp(-x)), d:x=>{const s=1/(1+Math.exp(-x));return s*(1-s);}, note:"Max derivative 0.25 at x=0. Saturates both tails \u2014 the vanishing-gradient machine."},
    tanh:{f:Math.tanh, d:x=>1-Math.tanh(x)**2, note:"Zero-centred and max derivative 1, but still saturates. Survives inside LSTM/GRU cells."},
    relu:{f:x=>Math.max(0,x), d:x=>x>0?1:0, note:"Derivative is exactly 1 for x>0 \u2014 no shrinkage through depth. Dead for x<0, forever."},
    lrelu:{f:x=>x>0?x:0.01*x, d:x=>x>0?1:0.01, note:"A 0.01 slope on the left keeps units recoverable. Cheap insurance."},
    elu:{f:x=>x>0?x:Math.exp(x)-1, d:x=>x>0?1:Math.exp(x), note:"Smooth, negative saturation near \u22121 pushes the mean towards zero. Costs an exp."},
    gelu:{f:x=>x*Phi(x), d:x=>Phi(x)+x*Math.exp(-x*x/2)/Math.sqrt(2*Math.PI), note:"The transformer default. Note the small dip below zero \u2014 it is not monotonic."},
    silu:{f:x=>x/(1+Math.exp(-x)), d:x=>{const s=1/(1+Math.exp(-x));return s*(1+x*(1-s));}, note:"Nearly identical to GELU, one exp cheaper. Used in EfficientNet, YOLO, Llama's SwiGLU."},
    mish:{f:x=>x*Math.tanh(sp(x)), d:x=>{const h=1e-4;return (x+h)*Math.tanh(sp(x+h))-(x-h)*Math.tanh(sp(x-h));}, note:"Smoother still. Marginal gains for a real compute cost."},
    softplus:{f:sp, d:x=>1/(1+Math.exp(-x)), note:"A smooth ReLU whose derivative is exactly the sigmoid. Useful when you need positivity and differentiability."}
  };
  const px=x=>(x+XR)/(2*XR)*(W-60)+40, py=y=>H/2-y*((H-60)/(2*YR));
  function curve(fn,col,dash,wid){
    ctx.beginPath();
    for(let i=0;i<=600;i++){ const x=-XR+2*XR*i/600, y=fn(x);
      const X=px(x), Y=py(Math.max(-YR,Math.min(YR,y)));
      i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
    ctx.setLineDash(dash||[]); ctx.strokeStyle=col; ctx.lineWidth=wid||2.2; ctx.stroke(); ctx.setLineDash([]);
  }
  function draw(){
    const k=$("actSel").value, a=A[k];
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H); grid(ctx,W,H,40);
    ctx.strokeStyle=C.rule2; ctx.lineWidth=1; ctx.beginPath();
    ctx.moveTo(40,py(0)); ctx.lineTo(W-20,py(0)); ctx.moveTo(px(0),20); ctx.lineTo(px(0),H-20); ctx.stroke();
    if($("actCmp").checked && k!=="relu") curve(A.relu.f, C.rule2, [4,4], 1.6);
    curve(a.d, C.tensor, [5,4], 1.8);
    curve(a.f, C.signal, [], 2.6);
    ctx.font=MONO;
    ctx.fillStyle=C.signal; ctx.fillText("f(x)", W-70, 32);
    ctx.fillStyle=C.tensor; ctx.fillText("f\u2032(x)", W-70, 50);
    ctx.fillStyle=C.mute;
    ctx.fillText("\u22125",px(-5)-6,py(0)+16); ctx.fillText("5",px(5)-4,py(0)+16);
    ctx.fillText("1",px(0)+6,py(1)+4); ctx.fillText("\u22121",px(0)+6,py(-1)+4);
    let mx=0; for(let i=0;i<=400;i++){ mx=Math.max(mx, Math.abs(a.d(-XR+2*XR*i/400))); }
    $("actOut").innerHTML='<span class="k">max |f\u2032|</span> <b>'+fmt(mx,3)+'</b> &nbsp; '+
      '<span class="k">f\u2032(0)</span> '+fmt(a.d(0.0001),3)+' &nbsp; <span class="k">f(\u22123)</span> '+fmt(a.f(-3),3)+
      '<br><span class="k">'+a.note+'</span>';
  }
  $("actSel").addEventListener("change",draw);
  $("actCmp").addEventListener("change",draw);
  draw();
})();

/* =========================================================
   8 · BACKPROP 2-2-1, live
   ========================================================= */
(function bp(){
  const cv=$("bpCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const x=[0.05,0.10], y=1;
  let W1,b1,W2,b2,hist;
  function reset(){ W1=[[0.15,0.20],[0.25,0.30]]; b1=[0.35,0.35]; W2=[0.40,0.45]; b2=0.60; hist=[]; render(compute()); }
  const sig=z=>1/(1+Math.exp(-z));
  function compute(){
    const z1=[W1[0][0]*x[0]+W1[0][1]*x[1]+b1[0], W1[1][0]*x[0]+W1[1][1]*x[1]+b1[1]];
    const h=[sig(z1[0]),sig(z1[1])];
    const z2=W2[0]*h[0]+W2[1]*h[1]+b2, p=sig(z2), L=-Math.log(p);
    const dz2=p-y;
    const gW2=[dz2*h[0], dz2*h[1]], gb2=dz2;
    const dh=[dz2*W2[0], dz2*W2[1]];
    const dz1=[dh[0]*h[0]*(1-h[0]), dh[1]*h[1]*(1-h[1])];
    const gW1=[[dz1[0]*x[0],dz1[0]*x[1]],[dz1[1]*x[0],dz1[1]*x[1]]];
    return {z1,h,z2,p,L,dz2,gW2,gb2,dh,dz1,gW1,gb1:dz1};
  }
  function step(){
    const s=compute(), lr=+$("bpLr").value;
    W2[0]-=lr*s.gW2[0]; W2[1]-=lr*s.gW2[1]; b2-=lr*s.gb2;
    for(let i=0;i<2;i++){ for(let j=0;j<2;j++) W1[i][j]-=lr*s.gW1[i][j]; b1[i]-=lr*s.gb1[i]; }
    hist.push(s.L); if(hist.length>90) hist.shift();
    render(compute());
  }
  function node(cx,cy,r,fill,stroke,top,bot){
    ctx.beginPath(); ctx.arc(cx,cy,r,0,7); ctx.fillStyle=fill; ctx.fill();
    ctx.strokeStyle=stroke; ctx.lineWidth=1.6; ctx.stroke();
    ctx.font=MONO; ctx.textAlign="center";
    ctx.fillStyle=C.chalk; ctx.fillText(top,cx,cy-1);
    if(bot!==undefined){ ctx.fillStyle=C.warn; ctx.fillText(bot,cx,cy+13); }
    ctx.textAlign="left";
  }
  function edge(x1,y1,x2,y2,w,g){
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
    ctx.strokeStyle = w>=0 ? "rgba(91,200,230,.75)" : "rgba(255,123,135,.75)";
    ctx.lineWidth = Math.min(6, 0.6+Math.abs(w)*3.2); ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText(fmt(w,3), (x1+x2)/2-16, (y1+y2)/2-6);
    ctx.fillStyle=C.warn;
    ctx.fillText(fmt(g,4), (x1+x2)/2-16, (y1+y2)/2+8);
  }
  function render(s){
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("value",22,20); ctx.fillStyle=C.warn; ctx.fillText("gradient",70,20);
    edge(90,80,240,80,W1[0][0],s.gW1[0][0]); edge(90,80,240,180,W1[1][0],s.gW1[1][0]);
    edge(90,180,240,80,W1[0][1],s.gW1[0][1]); edge(90,180,240,180,W1[1][1],s.gW1[1][1]);
    edge(280,80,420,130,W2[0],s.gW2[0]); edge(280,180,420,130,W2[1],s.gW2[1]);
    node(70,80,24,C.slate,C.rule2,fmt(x[0],2));
    node(70,180,24,C.slate,C.rule2,fmt(x[1],2));
    node(260,80,28,C.slate,C.tensor,fmt(s.h[0],4),fmt(s.dz1[0],4));
    node(260,180,28,C.slate,C.tensor,fmt(s.h[1],4),fmt(s.dz1[1],4));
    node(440,130,30,C.slate,C.signal,fmt(s.p,4),fmt(s.dz2,4));
    ctx.fillStyle=C.mute; ctx.fillText("x",64,124); ctx.fillText("hidden (sigmoid)",212,44);
    ctx.fillStyle=C.signal; ctx.fillText("p\u0302",436,180);
    const gx=520,gy=40,gw=180,gh=200;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(gx+.5,gy+.5,gw,gh);
    ctx.fillStyle=C.mute; ctx.fillText("loss history",gx,gy-6);
    if(hist.length>1){
      const mx=Math.max.apply(null,hist), mn=Math.min.apply(null,hist);
      ctx.beginPath();
      hist.forEach((v,i)=>{ const X=gx+i/(hist.length-1)*gw, Y=gy+gh-(v-mn)/((mx-mn)||1)*(gh-10)-5;
        i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
      ctx.strokeStyle=C.signal; ctx.lineWidth=2; ctx.stroke();
      ctx.fillStyle=C.mute; ctx.fillText(fmt(mx,3),gx+2,gy+12); ctx.fillText(fmt(mn,3),gx+2,gy+gh-4);
    }
    const ratio = Math.abs(s.dz2)/(Math.abs(s.dz1[0])||1e-12);
    $("bpOut").innerHTML =
      '<span class="k">loss</span> <b>'+fmt(s.L,6)+'</b> &nbsp; <span class="k">p\u0302</span> '+fmt(s.p,6)+
      ' &nbsp; <span class="k">steps taken</span> '+hist.length+'<br>'+
      '<span class="k">output-layer gradient</span> '+fmt(Math.abs(s.dz2),6)+
      ' &nbsp; <span class="k">hidden-layer gradient</span> '+fmt(Math.abs(s.dz1[0]),6)+
      ' &nbsp; <span class="k">ratio</span> <b>'+ratio.toFixed(1)+'\u00d7 smaller</b>'+
      '<br><span class="k">After one hidden layer the gradient has already shrunk by two orders of magnitude. Now imagine thirty layers.</span>';
  }
  $("bpLr").addEventListener("input",()=>{ $("bpLrv").textContent=(+$("bpLr").value).toFixed(2); });
  $("bpStep").addEventListener("click",step);
  $("bpTen").addEventListener("click",()=>{ for(let i=0;i<10;i++) step(); });
  $("bpReset").addEventListener("click",reset);
  reset();
})();

/* =========================================================
   9 · INITIALIZATION — activation histograms through depth
   ========================================================= */
(function init(){
  const cv=$("initCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, LAYERS=8, NS=90;
  function draw(){
    const width=+$("initW").value, scheme=$("initSel").value, an=$("initAct").value;
    const f = an==="relu" ? (z=>z>0?z:0) : Math.tanh;
    let A=[]; for(let s=0;s<NS;s++){ const row=new Float64Array(width);
      for(let i=0;i<width;i++) row[i]=gauss(); A.push(row); }
    const stds=[], hists=[];
    for(let l=0;l<LAYERS;l++){
      let sd;
      if(scheme==="small") sd=0.01;
      else if(scheme==="big") sd=1.0;
      else if(scheme==="xavier") sd=Math.sqrt(2/(width+width));
      else sd=Math.sqrt(2/width);
      const Wm=new Float64Array(width*width);
      for(let k=0;k<Wm.length;k++) Wm[k]=gauss()*sd;
      const B=[];
      for(let s=0;s<NS;s++){
        const a=A[s], o=new Float64Array(width);
        for(let j=0;j<width;j++){ let t=0;
          for(let i=0;i<width;i++) t+=a[i]*Wm[i*width+j]; o[j]=f(t); }
        B.push(o);
      }
      A=B;
      let m=0,v=0,n=0;
      const bins=new Array(26).fill(0);
      for(let s=0;s<NS;s++) for(let i=0;i<width;i++){ const val=A[s][i]; m+=val; n++; }
      m/=n;
      for(let s=0;s<NS;s++) for(let i=0;i<width;i++) v+=(A[s][i]-m)**2;
      v=Math.sqrt(v/n); stds.push(v);
      const span = an==="relu" ? [0, Math.max(1e-9, m+3*v)] : [-1.05,1.05];
      for(let s=0;s<NS;s++) for(let i=0;i<width;i++){
        let t=(A[s][i]-span[0])/((span[1]-span[0])||1);
        t=Math.max(0,Math.min(0.999,t)); bins[(t*26)|0]++;
      }
      hists.push(bins);
    }
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const cw=(W-40)/LAYERS, top=30, bh=170;
    hists.forEach((bins,l)=>{
      const x0=20+l*cw, mx=Math.max.apply(null,bins)||1;
      ctx.strokeStyle=C.rule; ctx.strokeRect(x0+.5,top+.5,cw-10,bh);
      bins.forEach((b,i)=>{
        const bw=(cw-12)/26, hgt=(b/mx)*(bh-6);
        ctx.fillStyle = stds[l]<1e-3 ? C.warn : (stds[l]>6 ? C.warn : C.tensor);
        ctx.globalAlpha=0.85;
        ctx.fillRect(x0+1+i*bw, top+bh-hgt, Math.max(1,bw-0.6), hgt);
        ctx.globalAlpha=1;
      });
      ctx.font=MONO; ctx.fillStyle=C.mute; ctx.textAlign="center";
      ctx.fillText("L"+(l+1), x0+(cw-10)/2, top+bh+16);
      ctx.fillStyle = stds[l]<1e-3||stds[l]>6 ? C.warn : C.signal;
      ctx.fillText("\u03c3 "+ (stds[l]<1e-3? stds[l].toExponential(0) : stds[l].toFixed(2)), x0+(cw-10)/2, top+bh+32);
      ctx.textAlign="left";
    });
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("activation distribution after each of 8 layers \u2014 "+width+" units, "+an, 20, 20);
    const first=stds[0], last=stds[LAYERS-1], ratio=last/(first||1e-12);
    let verdict;
    if(last<1e-3) verdict='<span style="color:'+C.warn+'">Signal has collapsed to zero. No gradient reaches the early layers \u2014 training is dead on arrival.</span>';
    else if(last>6) verdict='<span style="color:'+C.warn+'">Signal is exploding. Expect NaN within a few steps.</span>';
    else verdict='<span style="color:'+C.verify+'">Healthy: variance is roughly preserved through depth, which is exactly what the derivation asks for.</span>';
    $("initOut").innerHTML =
      '<span class="k">\u03c3 layer 1</span> <b>'+fmt(first,4)+'</b> &nbsp; <span class="k">\u03c3 layer 8</span> <b>'+fmt(last,4)+
      '</b> &nbsp; <span class="k">ratio</span> '+(ratio<1e-3||ratio>1e3?ratio.toExponential(1):ratio.toFixed(3))+'<br>'+verdict;
  }
  $("initSel").addEventListener("change",draw);
  $("initAct").addEventListener("change",draw);
  $("initW").addEventListener("input",()=>{ $("initWv").textContent=$("initW").value; draw(); });
  draw();
})();

/* =========================================================
   10 · OPTIMIZER RACE
   ========================================================= */
(function opt(){
  const cv=$("optCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const SURF={
    ravine:{ f:(x,y)=>x*x+30*y*y, g:(x,y)=>[2*x,60*y], dom:[-5,5,-2.4,2.4], start:[-4.3,1.7], name:"f = x² + 30y²  (κ = 30)" },
    beale:{ f:(x,y)=>Math.pow(1.5-x+x*y,2)+Math.pow(2.25-x+x*y*y,2)+Math.pow(2.625-x+x*y*y*y,2),
            g:(x,y)=>{ const a=1.5-x+x*y, b=2.25-x+x*y*y, c=2.625-x+x*y*y*y;
              return [2*(a*(y-1)+b*(y*y-1)+c*(y*y*y-1)), 2*(a*x+2*b*x*y+3*c*x*y*y)]; },
            dom:[-4.2,4.2,-2.2,2.2], start:[-3.2,-1.4], name:"Beale  (min at 3, 0.5)" },
    saddle:{ f:(x,y)=>x*x-y*y+0.12*y*y*y*y, g:(x,y)=>[2*x,-2*y+0.48*y*y*y],
             dom:[-2.4,2.4,-2.4,2.4], start:[-1.9,0.02], name:"saddle  f = x² − y² + 0.12y⁴" }
  };
  const RUNS=[
    {n:"SGD",           c:C.mute},
    {n:"Momentum 0.9",  c:C.tensor},
    {n:"Nesterov",      c:C.violet},
    {n:"RMSProp",       c:C.verify},
    {n:"Adam",          c:C.signal}
  ];
  let paths=null;
  function px(x,d){ return (x-d[0])/(d[1]-d[0])*(W-20)+10; }
  function py(y,d){ return H-10-((y-d[2])/(d[3]-d[2])*(H-20)); }
  function heat(S){
    const d=S.dom, RW=180, RH=Math.round(180*H/W);
    const tmp=document.createElement("canvas"); tmp.width=RW; tmp.height=RH;
    const tc=tmp.getContext("2d"), img=tc.createImageData(RW,RH);
    let lo=1e18,hi=-1e18, vals=new Float64Array(RW*RH);
    for(let j=0;j<RH;j++) for(let i=0;i<RW;i++){
      const x=d[0]+(d[1]-d[0])*i/(RW-1), y=d[3]-(d[3]-d[2])*j/(RH-1);
      const v=Math.log1p(Math.max(0,S.f(x,y))); vals[j*RW+i]=v;
      lo=Math.min(lo,v); hi=Math.max(hi,v);
    }
    for(let k=0;k<vals.length;k++){
      const t=(vals[k]-lo)/((hi-lo)||1), band=(Math.sin(t*46)*0.5+0.5)*0.24, o=k*4;
      img.data[o]  = 10+t*46+band*120;
      img.data[o+1]= 20+t*70+band*130;
      img.data[o+2]= 32+t*96+band*140;
      img.data[o+3]= 255;
    }
    tc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=true; ctx.drawImage(tmp,0,0,W,H);
  }
  function race(){
    const S=SURF[$("optFn").value], lr=Math.pow(10,+$("optLr").value);
    const alr=Math.max(0.03, lr*6), N=260;
    paths=[]; const finals=[];
    RUNS.forEach((r,idx)=>{
      let x=S.start[0], y=S.start[1];
      let vx=0,vy=0,sx=0,sy=0,mx=0,my=0;
      const p=[[x,y]];
      for(let t=1;t<=N;t++){
        let gx,gy;
        if(idx===2){ const g=S.g(x-0.9*lr*vx, y-0.9*lr*vy); gx=g[0]; gy=g[1]; }
        else { const g=S.g(x,y); gx=g[0]; gy=g[1]; }
        if(idx===0){ x-=lr*gx; y-=lr*gy; }
        else if(idx===1||idx===2){ vx=0.9*vx+gx; vy=0.9*vy+gy; x-=lr*vx; y-=lr*vy; }
        else if(idx===3){ sx=0.9*sx+0.1*gx*gx; sy=0.9*sy+0.1*gy*gy;
                          x-=alr*gx/(Math.sqrt(sx)+1e-8); y-=alr*gy/(Math.sqrt(sy)+1e-8); }
        else { mx=0.9*mx+0.1*gx; my=0.9*my+0.1*gy; sx=0.999*sx+0.001*gx*gx; sy=0.999*sy+0.001*gy*gy;
               const mh1=mx/(1-Math.pow(0.9,t)), mh2=my/(1-Math.pow(0.9,t));
               const vh1=sx/(1-Math.pow(0.999,t)), vh2=sy/(1-Math.pow(0.999,t));
               x-=alr*mh1/(Math.sqrt(vh1)+1e-8); y-=alr*mh2/(Math.sqrt(vh2)+1e-8); }
        if(!isFinite(x)||!isFinite(y)||Math.abs(x)>1e5||Math.abs(y)>1e5){ finals.push(null); break; }
        p.push([x,y]);
      }
      if(finals.length<=idx) finals.push(S.f(p[p.length-1][0], p[p.length-1][1]));
      paths.push(p);
    });
    draw(S,finals,lr,alr);
  }
  function draw(S,finals,lr,alr){
    const d=S.dom;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    heat(S);
    paths.forEach((p,i)=>{
      ctx.beginPath();
      p.forEach((q,k)=>{ const X=px(q[0],d),Y=py(q[1],d); k?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
      ctx.strokeStyle=RUNS[i].c; ctx.lineWidth=2; ctx.globalAlpha=.92; ctx.stroke(); ctx.globalAlpha=1;
      const last=p[p.length-1];
      ctx.beginPath(); ctx.arc(px(last[0],d),py(last[1],d),4.6,0,7);
      ctx.fillStyle=RUNS[i].c; ctx.fill();
    });
    const s0=paths[0][0];
    ctx.beginPath(); ctx.arc(px(s0[0],d),py(s0[1],d),6,0,7);
    ctx.strokeStyle="#fff"; ctx.lineWidth=2; ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.chalk; ctx.fillText("start", px(s0[0],d)+9, py(s0[1],d)-8);
    ctx.fillStyle=C.mute; ctx.fillText(S.name, 14, 20);
    RUNS.forEach((r,i)=>{
      const y=H-14-i*17;
      ctx.fillStyle=r.c; ctx.fillRect(W-172,y-8,10,3);
      ctx.fillStyle=C.chalk; ctx.fillText(r.n, W-156, y-3);
    });
    $("optOut").innerHTML =
      '<span class="k">final loss after 260 steps &nbsp;\u00b7&nbsp;</span> ' +
      RUNS.map((r,i)=>'<span style="color:'+r.c+'">'+r.n+'</span> '+(finals[i]===null?"diverged":fmt(finals[i],4))).join(" &nbsp; ") +
      '<br><span class="k">SGD-family LR = '+fmt(lr,4)+'; adaptive methods use '+fmt(alr,3)+
      ', because they normalise by gradient magnitude and would otherwise crawl. Change the surface \u2014 no optimizer wins on all three.</span>';
  }
  $("optLr").addEventListener("input",()=>{ $("optLrv").textContent=fmt(Math.pow(10,+$("optLr").value),3); race(); });
  $("optFn").addEventListener("change",race);
  $("optRun").addEventListener("click",race);
  $("optClr").addEventListener("click",()=>{ const S=SURF[$("optFn").value];
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H); heat(S); paths=null; });
  $("optLrv").textContent=fmt(Math.pow(10,+$("optLr").value),3);
  race();
})();

})();
