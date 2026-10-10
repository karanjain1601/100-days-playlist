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

/* =========================================================
   11 · LR SCHEDULES  (Lesson 33)
   ========================================================= */
(function sched(){
  const cv=$("schCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, T=1000;
  const L=52, R=W-18, TOP=26, BOT=H-34;
  function curve(kind, peak, warm){
    const out=new Float64Array(T+1);
    for(let t=0;t<=T;t++){
      let lr;
      const p=(t-warm)/Math.max(1,T-warm), q=Math.min(1,Math.max(0,p));
      if(kind==="const")       lr=peak;
      else if(kind==="step")   lr=peak*Math.pow(0.1, Math.floor(q*3));
      else if(kind==="exp")    lr=peak*Math.pow(0.01, q);
      else if(kind==="cosine") lr=peak*0.5*(1+Math.cos(Math.PI*q));
      else if(kind==="linear") lr=peak*(1-q);
      else if(kind==="onecycle"){
        const up=0.3;
        lr = q<up ? peak/25 + (peak-peak/25)*(q/up)
                  : peak*0.5*(1+Math.cos(Math.PI*(q-up)/(1-up)))*(1-1e-4)+peak*1e-4;
      }
      else { /* sgdr: cycles of doubling length */
        let c=0, len=0.145, s=0;
        while(s+len<q && c<6){ s+=len; len*=2; c++; }
        const local=Math.min(1,(q-s)/len);
        lr=peak*0.5*(1+Math.cos(Math.PI*local));
      }
      if(t<warm) lr = peak*(t/Math.max(1,warm));    // warmup overrides the head of every schedule
      out[t]=lr;
    }
    return out;
  }
  function draw(){
    const peak=Math.pow(10,+$("schP").value), warm=Math.round(T*(+$("schW").value)/100);
    const kind=$("schSel").value;
    const y=curve(kind,peak,warm), ref=curve("cosine",peak,warm);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const mx=peak*1.08;
    const px=t=>L+(t/T)*(R-L), py=v=>BOT-(v/mx)*(BOT-TOP);
    ctx.strokeStyle=C.rule; ctx.lineWidth=1;
    for(let i=0;i<=4;i++){ const v=mx*i/4, Y=py(v);
      ctx.beginPath(); ctx.moveTo(L,Y); ctx.lineTo(R,Y); ctx.stroke();
      ctx.font=MONO; ctx.fillStyle=C.mute; ctx.textAlign="right";
      ctx.fillText(v.toExponential(1), L-6, Y+4); ctx.textAlign="left"; }
    if(warm>0){
      ctx.fillStyle="rgba(91,200,230,.10)"; ctx.fillRect(L,TOP,px(warm)-L,BOT-TOP);
      ctx.strokeStyle=C.tensor; ctx.setLineDash([3,3]); ctx.beginPath();
      ctx.moveTo(px(warm),TOP); ctx.lineTo(px(warm),BOT); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle=C.tensor; ctx.font=MONO; ctx.fillText("warmup", L+5, TOP+14);
    }
    if($("schCmp").checked && kind!=="cosine"){
      ctx.beginPath();
      for(let t=0;t<=T;t++){ const X=px(t),Y=py(ref[t]); t?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle=C.rule2; ctx.lineWidth=1.6; ctx.setLineDash([5,4]); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.beginPath();
    for(let t=0;t<=T;t++){ const X=px(t),Y=py(y[t]); t?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
    ctx.strokeStyle=C.signal; ctx.lineWidth=2.6; ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("learning rate", L, TOP-8);
    ctx.fillText("step 0", L, BOT+18); ctx.textAlign="right";
    ctx.fillText("step "+T, R, BOT+18); ctx.textAlign="left";
    let area=0; for(let t=0;t<=T;t++) area+=y[t];
    let refArea=0; for(let t=0;t<=T;t++) refArea+=ref[t];
    const at=f=>y[Math.round(T*f)];
    $("schOut").innerHTML =
      '<span class="k">peak</span> <b>'+peak.toExponential(1)+'</b> &nbsp; '+
      '<span class="k">warmup</span> '+warm+' steps ('+$("schW").value+'%) &nbsp; '+
      '<span class="k">LR at 25 / 50 / 75 / 100%</span> '+
      [0.25,0.5,0.75,1].map(f=>at(f).toExponential(1)).join(" / ")+
      '<br><span class="k">total LR budget (\u2211\u03b7) relative to cosine</span> <b>'+(area/refArea).toFixed(2)+'\u00d7</b> \u2014 '+
      '<span class="k">two schedules with the same peak can deliver very different total step sizes, which is why swapping schedules usually means re-tuning the LR.</span>';
  }
  $("schSel").addEventListener("change",draw);
  $("schCmp").addEventListener("change",draw);
  $("schW").addEventListener("input",()=>{ $("schWv").textContent=$("schW").value+"%"; draw(); });
  $("schP").addEventListener("input",()=>{ $("schPv").textContent=Math.pow(10,+$("schP").value).toExponential(1); draw(); });
  $("schPv").textContent=Math.pow(10,+$("schP").value).toExponential(1);
  draw();
})();

/* =========================================================
   12 · NORMALIZATION RESCUE  (Lesson 36)
   ========================================================= */
(function bnDemo(){
  const cv=$("bnCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, LAYERS=8, WID=96;
  function propagate(scale, mode, B){
    let A=[]; for(let s=0;s<B;s++){ const r=new Float64Array(WID);
      for(let i=0;i<WID;i++) r[i]=gauss(); A.push(r); }
    const stds=[], hists=[];
    for(let l=0;l<LAYERS;l++){
      const Wm=new Float64Array(WID*WID), sd=scale/Math.sqrt(WID);
      for(let k=0;k<Wm.length;k++) Wm[k]=gauss()*sd;
      let Z=[];
      for(let s=0;s<B;s++){ const a=A[s], z=new Float64Array(WID);
        for(let j=0;j<WID;j++){ let t=0; for(let i=0;i<WID;i++) t+=a[i]*Wm[i*WID+j]; z[j]=t; }
        Z.push(z); }
      if(mode==="bn"){
        for(let j=0;j<WID;j++){
          let m=0; for(let s=0;s<B;s++) m+=Z[s][j]; m/=B;
          let v=0; for(let s=0;s<B;s++) v+=(Z[s][j]-m)**2; v=Math.sqrt(v/B+1e-5);
          for(let s=0;s<B;s++) Z[s][j]=(Z[s][j]-m)/v;
        }
      } else if(mode==="ln"){
        for(let s=0;s<B;s++){
          let m=0; for(let j=0;j<WID;j++) m+=Z[s][j]; m/=WID;
          let v=0; for(let j=0;j<WID;j++) v+=(Z[s][j]-m)**2; v=Math.sqrt(v/WID+1e-5);
          for(let j=0;j<WID;j++) Z[s][j]=(Z[s][j]-m)/v;
        }
      }
      A = Z.map(z=>{ const o=new Float64Array(WID);
        for(let j=0;j<WID;j++) o[j]=Math.tanh(z[j]); return o; });
      let m=0,n=0; for(let s=0;s<B;s++) for(let j=0;j<WID;j++){ m+=A[s][j]; n++; } m/=n;
      let v=0; for(let s=0;s<B;s++) for(let j=0;j<WID;j++) v+=(A[s][j]-m)**2; v=Math.sqrt(v/n);
      stds.push(v);
      const bins=new Array(26).fill(0);
      for(let s=0;s<B;s++) for(let j=0;j<WID;j++){
        let t=(A[s][j]+1.05)/2.1; t=Math.max(0,Math.min(0.999,t)); bins[(t*26)|0]++; }
      hists.push(bins);
    }
    return {stds,hists};
  }
  function draw(){
    const scale=+$("bnS").value, mode=$("bnSel").value, B=+$("bnB").value;
    const {stds,hists}=propagate(scale,mode,B);
    const alt=propagate(scale,mode,B).stds;      // second draw -> statistic noise
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const cw=(W-40)/LAYERS, top=28, bh=168;
    hists.forEach((bins,l)=>{
      const x0=20+l*cw, mx=Math.max.apply(null,bins)||1;
      ctx.strokeStyle=C.rule; ctx.strokeRect(x0+.5,top+.5,cw-10,bh);
      const dead=stds[l]<0.02, big=stds[l]>0.85;
      bins.forEach((b,i)=>{
        const bw=(cw-12)/26, hgt=(b/mx)*(bh-6);
        ctx.fillStyle = dead||big ? C.warn : (mode==="none"?C.tensor:C.verify);
        ctx.globalAlpha=.85;
        ctx.fillRect(x0+1+i*bw, top+bh-hgt, Math.max(1,bw-0.6), hgt);
        ctx.globalAlpha=1;
      });
      ctx.font=MONO; ctx.textAlign="center"; ctx.fillStyle=C.mute;
      ctx.fillText("L"+(l+1), x0+(cw-10)/2, top+bh+16);
      ctx.fillStyle = dead||big ? C.warn : C.signal;
      ctx.fillText("\u03c3 "+stds[l].toFixed(3), x0+(cw-10)/2, top+bh+32);
      ctx.textAlign="left";
    });
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("tanh activations after each of 8 layers \u00b7 width "+WID+" \u00b7 init \u03c3\u00d7"+scale.toFixed(2)+
                 " \u00b7 "+(mode==="none"?"no normalization":mode==="bn"?"BatchNorm":"LayerNorm"), 20, 18);
    let noise=0; for(let l=0;l<LAYERS;l++) noise+=Math.abs(stds[l]-alt[l]);
    noise/=LAYERS;
    const last=stds[LAYERS-1], first=stds[0];
    let verdict;
    if(mode==="none" && last<0.02)
      verdict='<span style="color:'+C.warn+'">Signal has vanished by layer 8. Bad init alone killed it \u2014 add a norm layer and watch the same init survive.</span>';
    else if(mode==="none" && last>0.85)
      verdict='<span style="color:'+C.warn+'">Saturated: tanh is pinned at \u00b11, so every derivative is ~0 and nothing will train.</span>';
    else if(mode==="bn" && B<=8)
      verdict='<span style="color:'+C.warn+'">Depth is stable, but look at the statistic noise: at batch '+B+
              ' the normalization constants swing between draws. This is exactly the small-batch failure that motivated GroupNorm.</span>';
    else if(mode!=="none")
      verdict='<span style="color:'+C.verify+'">Normalization holds \u03c3 steady through depth no matter how bad the initialization is. That is what it is buying you.</span>';
    else
      verdict='<span style="color:'+C.verify+'">This init happens to be well-scaled, so no norm is needed \u2014 nudge the scale slider either way and it stops being true.</span>';
    $("bnOut").innerHTML =
      '<span class="k">\u03c3 layer 1</span> <b>'+first.toFixed(4)+'</b> &nbsp; <span class="k">\u03c3 layer 8</span> <b>'+last.toFixed(4)+
      '</b> &nbsp; <span class="k">statistic noise between two draws</span> <b>'+noise.toFixed(4)+
      '</b><br>'+verdict;
  }
  $("bnSel").addEventListener("change",draw);
  $("bnS").addEventListener("input",()=>{ $("bnSv").textContent=(+$("bnS").value).toFixed(2); draw(); });
  $("bnB").addEventListener("input",()=>{ $("bnBv").textContent=$("bnB").value; draw(); });
  draw();
})();

/* =========================================================
   13 · THRESHOLD SWEEP  (Lesson 43)
   ========================================================= */
(function thresh(){
  const cv=$("thCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, N=4000;
  let scores=null, labels=null;
  function build(rate, sep){
    const npos=Math.max(10,Math.round(N*rate));
    scores=new Float64Array(N); labels=new Uint8Array(N);
    for(let i=0;i<N;i++){
      const pos = i<npos ? 1 : 0;
      const x = gauss() + (pos ? sep/2 : -sep/2);
      scores[i]=1/(1+Math.exp(-x)); labels[i]=pos;
    }
  }
  function counts(t){
    let tp=0,fp=0,fn=0,tn=0;
    for(let i=0;i<N;i++){
      const p = scores[i]>=t;
      if(labels[i]){ p?tp++:fn++; } else { p?fp++:tn++; }
    }
    return {tp,fp,fn,tn};
  }
  function curves(){
    const idx=Array.from({length:N},(_,i)=>i).sort((a,b)=>scores[b]-scores[a]);
    let P=0; for(let i=0;i<N;i++) P+=labels[i];
    const Ng=N-P;
    const roc=[[0,0]], pr=[]; let tp=0,fp=0, rocA=0, prA=0, prevR=0, prevP=1;
    for(const i of idx){
      if(labels[i]) tp++; else fp++;
      const r=tp/P, fpr=fp/Ng, prec=tp/(tp+fp);
      const lastR=roc[roc.length-1];
      rocA += (fpr-lastR[0])*(r+lastR[1])/2;
      roc.push([fpr,r]);
      prA += (r-prevR)*(prec+prevP)/2;
      pr.push([r,prec]); prevR=r; prevP=prec;
    }
    return {roc,pr,rocAuc:rocA,prAuc:prA,base:P/N};
  }
  function panel(x0,y0,w,h,title){
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,w,h);
    ctx.font=MONO; ctx.fillStyle=C.mute; ctx.fillText(title,x0,y0-6);
  }
  function draw(){
    const t=+$("thT").value, rate=(+$("thP").value)/100, sep=+$("thS").value;
    build(rate,sep);
    const c=counts(t), cur=curves();
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    /* --- score histograms --- */
    const hx=20,hy=32,hw=300,hh=180;
    panel(hx,hy,hw,hh,"score distribution");
    const B=44, hp=new Array(B).fill(0), hn=new Array(B).fill(0);
    for(let i=0;i<N;i++){ const b=Math.min(B-1,(scores[i]*B)|0); (labels[i]?hp:hn)[b]++; }
    const mx=Math.max(Math.max.apply(null,hp),Math.max.apply(null,hn))||1;
    for(let b=0;b<B;b++){
      const bw=hw/B;
      const hnH=(hn[b]/mx)*(hh-8), hpH=(hp[b]/mx)*(hh-8);
      ctx.fillStyle="rgba(91,200,230,.55)"; ctx.fillRect(hx+b*bw, hy+hh-hnH, bw-0.6, hnH);
      ctx.fillStyle="rgba(255,180,84,.75)"; ctx.fillRect(hx+b*bw, hy+hh-hpH, bw-0.6, hpH);
    }
    ctx.strokeStyle="#fff"; ctx.lineWidth=1.8; ctx.beginPath();
    ctx.moveTo(hx+t*hw,hy); ctx.lineTo(hx+t*hw,hy+hh); ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.tensor; ctx.fillText("negatives",hx+6,hy+14);
    ctx.fillStyle=C.signal; ctx.fillText("positives",hx+6,hy+28);
    ctx.fillStyle=C.mute; ctx.fillText("threshold "+t.toFixed(2),hx+6,hy+hh+16);
    /* --- ROC --- */
    const rx=356,ry=32,rw=180,rh=180;
    panel(rx,ry,rw,rh,"ROC  (TPR vs FPR)");
    ctx.strokeStyle=C.rule2; ctx.setLineDash([3,3]); ctx.beginPath();
    ctx.moveTo(rx,ry+rh); ctx.lineTo(rx+rw,ry); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath();
    cur.roc.forEach((p,i)=>{ const X=rx+p[0]*rw, Y=ry+rh-p[1]*rh; i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
    ctx.strokeStyle=C.verify; ctx.lineWidth=2; ctx.stroke();
    const fpr=c.fp/(c.fp+c.tn||1), tpr=c.tp/(c.tp+c.fn||1);
    ctx.beginPath(); ctx.arc(rx+fpr*rw, ry+rh-tpr*rh, 5,0,7); ctx.fillStyle="#fff"; ctx.fill();
    /* --- PR --- */
    const qx=572,qy=32,qw=180,qh=180;
    panel(qx,qy,qw,qh,"precision vs recall");
    ctx.strokeStyle=C.rule2; ctx.setLineDash([3,3]); ctx.beginPath();
    ctx.moveTo(qx,qy+qh-cur.base*qh); ctx.lineTo(qx+qw,qy+qh-cur.base*qh); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle=C.mute; ctx.font=MONO; ctx.fillText("chance = "+(cur.base*100).toFixed(1)+"%", qx+4, qy+qh-cur.base*qh-4);
    ctx.beginPath();
    cur.pr.forEach((p,i)=>{ const X=qx+p[0]*qw, Y=qy+qh-p[1]*qh; i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
    ctx.strokeStyle=C.signal; ctx.lineWidth=2; ctx.stroke();
    const prec=c.tp/(c.tp+c.fp||1), rec=tpr;
    ctx.beginPath(); ctx.arc(qx+rec*qw, qy+qh-prec*qh, 5,0,7); ctx.fillStyle="#fff"; ctx.fill();
    /* --- confusion matrix --- */
    const bx=20,by=252;
    ctx.font=MONO;
    const cells=[["TP",c.tp,C.verify],["FP",c.fp,C.warn],["FN",c.fn,C.warn],["TN",c.tn,C.mute]];
    cells.forEach((cl,i)=>{
      const X=bx+i*78;
      ctx.strokeStyle=C.rule2; ctx.strokeRect(X+.5,by+.5,70,40);
      ctx.fillStyle=cl[2]; ctx.fillText(cl[0],X+6,by+15);
      ctx.fillStyle=C.chalk; ctx.fillText(String(cl[1]),X+6,by+32);
    });
    const f1=2*prec*rec/((prec+rec)||1), acc=(c.tp+c.tn)/N;
    $("thOut").innerHTML =
      '<span class="k">precision</span> <b>'+(prec*100).toFixed(1)+'%</b> &nbsp; '+
      '<span class="k">recall</span> <b>'+(rec*100).toFixed(1)+'%</b> &nbsp; '+
      '<span class="k">F1</span> <b>'+f1.toFixed(3)+'</b> &nbsp; '+
      '<span class="k">accuracy</span> '+(acc*100).toFixed(1)+'% &nbsp; '+
      '<span class="k">ROC-AUC</span> <b style="color:'+C.verify+'">'+cur.rocAuc.toFixed(3)+'</b> &nbsp; '+
      '<span class="k">PR-AUC</span> <b style="color:'+C.signal+'">'+cur.prAuc.toFixed(3)+'</b><br>'+
      (rate<=0.05
        ? '<span style="color:'+C.warn+'">At '+(rate*100).toFixed(0)+'% positives, ROC-AUC still reads '+cur.rocAuc.toFixed(3)+
          ' while PR-AUC has collapsed to '+cur.prAuc.toFixed(3)+'. Same model, same data \u2014 the difference is that FPR hides false positives behind a huge TN, and precision does not.</span>'
        : '<span class="k">Predicting the majority class alone would score '+((1-rate)*100).toFixed(1)+
          '% accuracy. Drag the positive rate down to 2% and watch accuracy rise while the model gets less useful.</span>');
  }
  $("thT").addEventListener("input",()=>{ $("thTv").textContent=(+$("thT").value).toFixed(2); draw(); });
  $("thP").addEventListener("input",()=>{ $("thPv").textContent=$("thP").value+"%"; draw(); });
  $("thS").addEventListener("input",()=>{ $("thSv").textContent=(+$("thS").value).toFixed(1); draw(); });
  draw();
})();

/* =========================================================
   14 · MEMORY CALCULATOR  (Lesson 44)
   ========================================================= */
(function mem(){
  const cv=$("memCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, GB=1e9;  // decimal GB, matching how GPUs are sold
  const GPUS=[["24GB (4090)",24],["40GB (A100)",40],["80GB (A100/H100)",80],["141GB (H200)",141]];
  function draw(){
    const P=Math.pow(10,+$("memP").value), opt=$("memOpt").value,
          amp=$("memPrec").value==="amp", tok=+$("memB").value, ck=$("memCkpt").checked;
    const L=Math.cbrt(P/196608), h=128*L;                 // matches Llama-7B and GPT-3 shapes
    const lora = opt==="lora";
    const trainable = lora ? P*0.005 : P;
    const wB = lora ? P*2 : (amp ? P*6 : P*4);            // frozen base can stay bf16
    const gB = trainable*(amp?4:4);
    const optPer = {sgd:0, mom:4, adam:8, adam8:2, lora:8}[opt];
    const oB = trainable*optPer;
    const aB = tok*L*h*(ck?2:16)*(amp?2:4);
    const parts=[["weights",wB,C.tensor],["gradients",gB,C.violet],
                 ["optimizer",oB,C.signal],["activations",aB,C.verify]];
    const total=parts.reduce((a,p)=>a+p[1],0);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const x0=20,y0=52,bw=W-40,bh=54;
    let x=x0;
    parts.forEach(p=>{
      const w=(p[1]/total)*bw;
      ctx.fillStyle=p[2]; ctx.globalAlpha=.72; ctx.fillRect(x,y0,w,bh); ctx.globalAlpha=1;
      ctx.strokeStyle=C.ink; ctx.lineWidth=1; ctx.strokeRect(x,y0,w,bh);
      if(w>52){ ctx.font=MONO; ctx.fillStyle="#07121A";
        ctx.fillText((p[1]/GB).toFixed(1)+"G", x+6, y0+22);
        ctx.fillText(p[0].slice(0,Math.max(3,Math.floor(w/7))), x+6, y0+38); }
      x+=w;
    });
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,bw,bh);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("total training memory \u00b7 "+(P/1e9).toFixed(2)+"B params \u00b7 est. "+
                 Math.round(L)+" layers \u00d7 "+Math.round(h)+" hidden", x0, 24);
    ctx.fillStyle=C.chalk;
    ctx.fillText((total/GB).toFixed(1)+" GB", x0, 44);
    const gy=y0+bh+34, gw=bw;
    const maxG=Math.max(160, total/GB*1.1);
    ctx.strokeStyle=C.rule; ctx.beginPath(); ctx.moveTo(x0,gy); ctx.lineTo(x0+gw,gy); ctx.stroke();
    GPUS.forEach(g=>{
      const X=x0+(g[1]/maxG)*gw;
      ctx.strokeStyle=total/GB<=g[1]?C.verify:C.rule2; ctx.setLineDash([2,3]);
      ctx.beginPath(); ctx.moveTo(X,gy-10); ctx.lineTo(X,gy+10); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle=total/GB<=g[1]?C.verify:C.mute; ctx.font=MONO;
      ctx.save(); ctx.translate(X+4,gy+14); ctx.fillText(g[0],0,0); ctx.restore();
    });
    const TX=x0+(total/GB/maxG)*gw;
    ctx.fillStyle=C.warn; ctx.fillRect(TX-1,gy-16,2,32);
    ctx.fillText("you",TX+4,gy-8);
    const fits=GPUS.find(g=>total/GB<=g[1]);
    const n80=Math.ceil((total/GB)/80);
    $("memOut").innerHTML =
      parts.map(p=>'<span class="k">'+p[0]+'</span> <b style="color:'+p[2]+'">'+(p[1]/GB).toFixed(1)+' GB</b>').join(" &nbsp; ")+
      ' &nbsp; <span class="k">total</span> <b>'+(total/GB).toFixed(1)+' GB</b><br>'+
      (fits ? '<span style="color:'+C.verify+'">Fits on a single '+fits[0]+'.</span>'
            : '<span style="color:'+C.warn+'">Does not fit on one GPU \u2014 needs '+n80+
              '\u00d780GB with FSDP/ZeRO-3, or LoRA.</span>')+
      ' <span class="k">&nbsp;\u00b7 '+(lora?'LoRA trains ~0.5% of parameters, so gradients and optimizer state nearly vanish.'
        :'Fixed cost is '+((wB+gB+oB)/P).toFixed(0)+' bytes/param before a single activation is stored.')+
      ' Activations are an estimate assuming FlashAttention.</span>';
  }
  ["memOpt","memPrec","memCkpt"].forEach(id=>$(id).addEventListener("change",draw));
  $("memP").addEventListener("input",()=>{
    const P=Math.pow(10,+$("memP").value);
    $("memPv").textContent = P>=1e9 ? (P/1e9).toFixed(1)+"B" : (P/1e6).toFixed(0)+"M"; draw(); });
  $("memB").addEventListener("input",()=>{ $("memBv").textContent=$("memB").value; draw(); });
  (function(){ const P=Math.pow(10,+$("memP").value);
    $("memPv").textContent = P>=1e9 ? (P/1e9).toFixed(1)+"B" : (P/1e6).toFixed(0)+"M"; })();
  draw();
})();

/* =========================================================
   15 · KERNEL PLAYGROUND  (Lesson 48)
   ========================================================= */
(function convDemo(){
  const cv=$("convCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), N=72;
  const K={
    identity:{m:[0,0,0,0,1,0,0,0,0], t:"Passes the image through unchanged. A useful sanity check: if your conv implementation cannot reproduce this, the indexing is wrong."},
    sobelx:{m:[-1,0,1,-2,0,2,-1,0,1], t:"Responds to horizontal intensity change, so it fires on VERTICAL edges. The rows are weighted 1,2,1 to smooth along the edge while differentiating across it."},
    sobely:{m:[-1,-2,-1,0,0,0,1,2,1], t:"The transpose of Sobel x. Fires on horizontal edges. Layer 1 of every trained CNN contains filters that look close to these, learned from scratch."},
    lap:{m:[0,-1,0,-1,4,-1,0,-1,0], t:"A second derivative — the centre against its four neighbours. Isotropic, so it fires on edges at any orientation, and on noise."},
    blur:{m:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9], t:"A local mean. Weights sum to 1, so brightness is preserved. Low-pass: removes high frequencies including detail."},
    gauss:{m:[1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16], t:"A weighted blur that falls off with distance. Smoother than a box blur and separable into two 1D passes, which is 3x cheaper."},
    sharp:{m:[0,-1,0,-1,5,-1,0,-1,0], t:"Identity plus Laplacian: the original with its edges added back. Weights sum to 1, so brightness holds."},
    emboss:{m:[-2,-1,0,-1,1,1,0,1,2], t:"Asymmetric — differentiates along one diagonal only, producing a directional lighting illusion."}
  };
  function image(kind){
    const a=new Float64Array(N*N);
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){
      let v;
      if(kind==="stripes"){
        v = i<N/2 ? (Math.floor(j/6)%2?0.82:0.18) : (Math.floor(i/6)%2?0.82:0.18);
      } else if(kind==="grad"){
        v = 0.15+0.7*(j/N);
        if(Math.hypot(i-N*0.45,j-N*0.5)<N*0.22) v=0.9;
      } else {
        v = 0.16;
        if(i>10&&i<34&&j>8&&j<34) v=0.78;                       // square
        if(Math.hypot(i-46,j-46)<15) v=0.92;                    // disc
        if(j>i+18 && i<28 && j<66) v=0.5;                       // diagonal band
      }
      a[i*N+j]=v;
    }
    return a;
  }
  function convolve(a,k){
    const o=new Float64Array(N*N);
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){
      let s=0;
      for(let u=-1;u<=1;u++) for(let v=-1;v<=1;v++){
        const ii=Math.min(N-1,Math.max(0,i+u)), jj=Math.min(N-1,Math.max(0,j+v));  // replicate pad
        s+=a[ii*N+jj]*k[(u+1)*3+(v+1)];
      }
      o[i*N+j]=s;
    }
    return o;
  }
  function tile(arr,x0,size,signed){
    const img=ctx.createImageData(N,N);
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){
      let v=arr[i*N+j];
      v = signed ? Math.min(1,Math.abs(v)) : Math.min(1,Math.max(0,v));
      const g=v*255, o=(i*N+j)*4;
      img.data[o]=g*0.93; img.data[o+1]=g*0.97; img.data[o+2]=g; img.data[o+3]=255;
    }
    const t=document.createElement("canvas"); t.width=t.height=N;
    t.getContext("2d").putImageData(img,0,0);
    ctx.imageSmoothingEnabled=false; ctx.drawImage(t,x0,26,size,size);
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,26.5,size,size);
  }
  function draw(){
    const key=$("convK").value, k=K[key] || K.sobelx, src=image($("convImg").value);
    const out=convolve(src,k.m);
    const sum=k.m.reduce((a,b)=>a+b,0), signed=Math.abs(sum)<1e-9;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,cv.width,cv.height);
    tile(src,20,180,false);
    tile(out,470,180,signed);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("input",20,18); ctx.fillStyle=C.signal; ctx.fillText("output",470,18);
    ctx.fillStyle=C.tensor; ctx.fillText("kernel",250,18);
    for(let r=0;r<3;r++) for(let c=0;c<3;c++){
      const X=250+c*58, Y=44+r*46, v=k.m[r*3+c];
      ctx.strokeStyle=C.rule2; ctx.strokeRect(X+.5,Y+.5,54,40);
      ctx.fillStyle = v>0?C.signal : v<0?C.warn : C.mute;
      ctx.textAlign="center";
      ctx.fillText(Math.abs(v)<1e-9?"0":(Number.isInteger(v)?String(v):v.toFixed(3)), X+27, Y+25);
      ctx.textAlign="left";
    }
    ctx.fillStyle=C.mute;
    ctx.fillText("\u2211 = "+(Math.abs(sum)<1e-9?"0":sum.toFixed(2)),250,206);
    ctx.fillText(signed?"zero-sum \u2192 a derivative; |output| shown":"sums to "+sum.toFixed(2)+" \u2192 brightness preserved",250,224);
    $("convOut").innerHTML =
      '<span class="k">'+k.t+'</span><br>'+
      '<span class="k">As a real layer</span> 3\u00d73, 64\u2192128 channels on a 56\u00d756 map: '+
      '<b>'+(128*64*9).toLocaleString()+'</b> parameters, '+
      '<b>'+(2*128*64*9*56*56/1e9).toFixed(2)+' GFLOPs</b> \u2014 and every one of those 73,728 numbers is learned, not designed.';
  }
  $("convK").addEventListener("change",draw);
  $("convImg").addEventListener("change",draw);
  draw();
})();

/* =========================================================
   16 · STACK CALCULATOR — shapes, receptive field, cost  (Lesson 48)
   ========================================================= */
(function rf(){
  const cv=$("rfCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function build(){
    const n0=+$("rfN").value, k=+$("rfK").value, L=+$("rfL").value,
          every=+$("rfD").value, ch=+$("rfC").value;
    const rows=[]; let n=n0, r=1, jump=1, params=0, flops=0, cin=3;
    for(let l=1;l<=L;l++){
      const s=(l%every===0)?2:1, p=(k-1)>>1;
      const cout = ch*Math.pow(2, Math.min(4,Math.floor((l-1)/Math.max(1,every))));
      const nOut=Math.floor((n+2*p-k)/s)+1;
      r = r + (k-1)*jump; jump *= s;
      const pr = cout*cin*k*k, fl = 2*pr*nOut*nOut;
      params+=pr; flops+=fl;
      rows.push({l,n:nOut,r:Math.min(r,n0*3),s,cin,cout,params:pr,flops:fl});
      n=nOut; cin=cout;
    }
    return {rows,params,flops,n0};
  }
  function draw(){
    const {rows,params,flops,n0}=build();
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const x0=44, y0=42, plotW=W-70, plotH=150;
    ctx.strokeStyle=C.rule2;
    ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x0,y0+plotH); ctx.lineTo(x0+plotW,y0+plotH); ctx.stroke();
    const maxV=Math.max(n0, rows[rows.length-1].r);
    const px=i=>x0+(rows.length===1?plotW/2:(i/(rows.length-1))*plotW);
    const py=v=>y0+plotH-(v/maxV)*plotH;
    ctx.beginPath();
    rows.forEach((r,i)=>{ i?ctx.lineTo(px(i),py(r.n)):ctx.moveTo(px(i),py(r.n)); });
    ctx.strokeStyle=C.tensor; ctx.lineWidth=2.4; ctx.stroke();
    ctx.beginPath();
    rows.forEach((r,i)=>{ i?ctx.lineTo(px(i),py(r.r)):ctx.moveTo(px(i),py(r.r)); });
    ctx.strokeStyle=C.signal; ctx.lineWidth=2.4; ctx.stroke();
    rows.forEach((r,i)=>{
      ctx.beginPath(); ctx.arc(px(i),py(r.n),3,0,7); ctx.fillStyle=C.tensor; ctx.fill();
      ctx.beginPath(); ctx.arc(px(i),py(r.r),3,0,7); ctx.fillStyle=C.signal; ctx.fill();
      if(r.s===2){ ctx.strokeStyle="rgba(183,156,255,.45)"; ctx.setLineDash([2,3]);
        ctx.beginPath(); ctx.moveTo(px(i),y0); ctx.lineTo(px(i),y0+plotH); ctx.stroke(); ctx.setLineDash([]); }
    });
    ctx.font=MONO; ctx.fillStyle=C.tensor; ctx.fillText("feature map size", x0+4, y0-22);
    ctx.fillStyle=C.signal; ctx.fillText("receptive field", x0+4, y0-6);
    ctx.fillStyle=C.violet; ctx.fillText("dashed = stride-2 layer", x0+150, y0-6);
    ctx.fillStyle=C.mute;
    ctx.textAlign="right"; ctx.fillText(String(maxV), x0-6, y0+6); ctx.fillText("0", x0-6, y0+plotH+4);
    ctx.textAlign="left";
    ctx.fillText("layer 1", x0, y0+plotH+18);
    ctx.textAlign="right"; ctx.fillText("layer "+rows.length, x0+plotW, y0+plotH+18); ctx.textAlign="left";
    const last=rows[rows.length-1];
    const covers = last.r>=n0;
    $("rfOut").innerHTML =
      '<span class="k">output</span> <b>'+last.n+'\u00d7'+last.n+'\u00d7'+last.cout+'</b> &nbsp; '+
      '<span class="k">receptive field</span> <b>'+last.r+'\u00d7'+last.r+'</b> px &nbsp; '+
      '<span class="k">params</span> <b>'+(params/1e6).toFixed(2)+'M</b> &nbsp; '+
      '<span class="k">FLOPs</span> <b>'+(flops/1e9).toFixed(2)+'G</b><br>'+
      (covers
        ? '<span style="color:'+C.verify+'">The last layer can see the whole '+n0+'px input \u2014 a unit there has global context.</span>'
        : '<span style="color:'+C.warn+'">Receptive field ('+last.r+'px) is smaller than the input ('+n0+'px): the deepest unit has never seen most of the image. Add depth, stride, or dilation.</span>')+
      ' <span class="k">Note how stride-2 layers bend the amber line upward \u2014 downsampling grows the receptive field far faster than depth alone.</span>';
  }
  [["rfN","rfNv"],["rfK","rfKv"],["rfL","rfLv"],["rfD","rfDv"],["rfC","rfCv2"]].forEach(([s,l])=>{
    $(s).addEventListener("input",()=>{ $(l).textContent=$(s).value; draw(); });
  });
  draw();
})();

/* =========================================================
   17 · CONVOLUTION COST  (Lesson 53)
   ========================================================= */
(function flops(){
  const cv=$("flCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const ci=+$("flI").value, co=+$("flO").value, k=+$("flK").value,
          s=+$("flS").value; let g=+$("flG").value;
    while(g>1 && (ci%g || co%g)) g--;                 // groups must divide both
    const std=co*ci*k*k;
    const grp=co*(ci/g)*k*k;
    const dws=ci*k*k + ci*co;
    const rows=[["standard",std,C.signal],["grouped g="+g,grp,C.tensor],["depthwise separable",dws,C.verify]];
    const mx=Math.max(std,grp,dws);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("parameters for one "+k+"\u00d7"+k+" layer, "+ci+" \u2192 "+co+" channels on a "+s+"\u00d7"+s+" map", 20, 20);
    rows.forEach((r,i)=>{
      const y=44+i*54, w=(r[1]/mx)*(W-260);
      ctx.fillStyle=r[2]; ctx.globalAlpha=.7; ctx.fillRect(150,y,Math.max(2,w),30); ctx.globalAlpha=1;
      ctx.strokeStyle=r[2]; ctx.strokeRect(150.5,y+.5,Math.max(2,w),30);
      ctx.fillStyle=C.chalk; ctx.fillText(r[0],20,y+20);
      ctx.fillText(r[1].toLocaleString()+"  ("+(2*r[1]*s*s/1e9).toFixed(2)+" GFLOPs)", 158+Math.max(2,w), y+20);
    });
    const ratio=std/dws;
    ctx.fillStyle=C.mute;
    ctx.fillText("theoretical saving from depthwise separable: "+ratio.toFixed(1)+"\u00d7", 20, 216);
    $("flOut").innerHTML =
      '<span class="k">standard</span> <b>'+std.toLocaleString()+'</b> &nbsp; '+
      '<span class="k">grouped (g='+g+')</span> <b>'+grp.toLocaleString()+'</b> ('+(std/grp).toFixed(1)+'\u00d7 less) &nbsp; '+
      '<span class="k">depthwise separable</span> <b>'+dws.toLocaleString()+'</b> ('+ratio.toFixed(1)+'\u00d7 less)<br>'+
      '<span class="k">The formula says the saving is 1/C<sub>out</sub> + 1/k\u00b2 = '+
      (1/co).toFixed(4)+' + '+(1/(k*k)).toFixed(4)+' = '+(1/co+1/(k*k)).toFixed(4)+
      ', so for k=3 it converges to 1/9 no matter how wide the layer gets. '+
      'Set k=1 and all three collapse to the same thing \u2014 a 1\u00d71 conv has no spatial extent to factor out.</span>';
  }
  [["flI","flIv"],["flO","flOv"],["flK","flKv"],["flS","flSv"],["flG","flGv"]].forEach(([s,l])=>{
    $(s).addEventListener("input",()=>{ $(l).textContent=$(s).value; draw(); });
  });
  draw();
})();

/* =========================================================
   18 · IoU AND NON-MAX SUPPRESSION  (Lesson 56)
   ========================================================= */
(function nms(){
  const cv=$("nmsCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, PW=360, PH=250;
  let gts=[], dets=[];
  function iou(a,b){
    const x1=Math.max(a[0],b[0]), y1=Math.max(a[1],b[1]);
    const x2=Math.min(a[2],b[2]), y2=Math.min(a[3],b[3]);
    const inter=Math.max(0,x2-x1)*Math.max(0,y2-y1);
    const A=(a[2]-a[0])*(a[3]-a[1]), B=(b[2]-b[0])*(b[3]-b[1]);
    return inter/(A+B-inter+1e-9);
  }
  function generate(){
    const nObj=+$("nmsC").value+1;
    gts=[]; dets=[];
    for(let o=0;o<nObj;o++){
      const w=50+rnd()*45, h=60+rnd()*50;
      const x=25+rnd()*(PW-w-50), y=25+rnd()*(PH-h-50);
      gts.push([x,y,x+w,y+h]);
      const nd=3+((rnd()*4)|0);
      for(let d=0;d<nd;d++){
        const jx=(rnd()-0.5)*w*0.34, jy=(rnd()-0.5)*h*0.34;
        const sw=w*(0.8+rnd()*0.4), sh=h*(0.8+rnd()*0.4);
        dets.push({b:[x+jx, y+jy, x+jx+sw, y+jy+sh], s:0.28+rnd()*0.7, obj:o});
      }
    }
    for(let d=0;d<3;d++){                                   // pure false positives
      const w=40+rnd()*40, h=40+rnd()*40;
      const x=10+rnd()*(PW-w-20), y=10+rnd()*(PH-h-20);
      dets.push({b:[x,y,x+w,y+h], s:0.08+rnd()*0.35, obj:-1});
    }
  }
  function runNMS(kept, thr){
    const order=kept.slice().sort((a,b)=>b.s-a.s), out=[];
    while(order.length){
      const top=order.shift(); out.push(top);
      for(let i=order.length-1;i>=0;i--) if(iou(top.b,order[i].b)>thr) order.splice(i,1);
    }
    return out;
  }
  function box(b,dx,col,lw,label){
    ctx.strokeStyle=col; ctx.lineWidth=lw;
    ctx.strokeRect(dx+b[0], 40+b[1], b[2]-b[0], b[3]-b[1]);
    if(label!==undefined){
      ctx.font=MONO; ctx.fillStyle=col;
      ctx.fillText(label, dx+b[0]+2, 40+b[1]-3);
    }
  }
  function draw(){
    const iouT=+$("nmsT").value, scoreT=+$("nmsS").value;
    const surviving=dets.filter(d=>d.s>=scoreT);
    const kept=runNMS(surviving, iouT);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO;
    [[20,"before \u00b7 raw detections"],[400,"after \u00b7 NMS"]].forEach(([dx,t],i)=>{
      ctx.fillStyle=i?C.signal:C.mute; ctx.fillText(t,dx,26);
      ctx.strokeStyle=C.rule2; ctx.lineWidth=1; ctx.strokeRect(dx+.5,40.5,PW,PH);
      gts.forEach(g=>box(g,dx,"rgba(147,217,123,.55)",1.6));
    });
    surviving.forEach(d=>box(d.b,20,"rgba(255,180,84,.5)",1.4));
    kept.forEach(d=>box(d.b,400,C.signal,2,d.s.toFixed(2)));
    ctx.fillStyle=C.verify; ctx.font=MONO;
    ctx.fillText("green = ground truth", 20, 310);
    /* match kept detections to ground truth at IoU 0.5 */
    const matched=new Set(); let tp=0, fp=0;
    kept.slice().sort((a,b)=>b.s-a.s).forEach(d=>{
      let best=-1, bi=-1;
      gts.forEach((g,i)=>{ const v=iou(d.b,g); if(v>best){best=v; bi=i;} });
      if(best>=0.5 && !matched.has(bi)){ matched.add(bi); tp++; } else fp++;
    });
    const fn=gts.length-matched.size;
    const prec=tp/(tp+fp||1), rec=tp/(tp+fn||1);
    $("nmsOut").innerHTML =
      '<span class="k">raw</span> '+dets.length+' &nbsp; <span class="k">above score threshold</span> '+surviving.length+
      ' &nbsp; <span class="k">after NMS</span> <b>'+kept.length+'</b> &nbsp; <span class="k">ground truth</span> '+gts.length+
      '<br><span class="k">at IoU 0.5 \u2192</span> TP <b style="color:'+C.verify+'">'+tp+'</b> &nbsp; FP <b style="color:'+C.warn+'">'+fp+
      '</b> &nbsp; FN <b style="color:'+C.warn+'">'+fn+'</b> &nbsp; precision <b>'+(prec*100).toFixed(0)+
      '%</b> &nbsp; recall <b>'+(rec*100).toFixed(0)+'%</b><br>'+
      (iouT<0.25
        ? '<span style="color:'+C.warn+'">A low IoU threshold suppresses aggressively \u2014 genuinely separate objects that happen to overlap get deleted. This is the crowded-scene failure.</span>'
        : iouT>0.75
        ? '<span style="color:'+C.warn+'">A high threshold suppresses almost nothing, so duplicates survive and precision collapses.</span>'
        : '<span class="k">Both thresholds are real hyperparameters: the score threshold trades precision against recall, the IoU threshold trades duplicate removal against crowded-scene recall. Neither is learned.</span>');
  }
  $("nmsNew").addEventListener("click",()=>{ generate(); draw(); });
  $("nmsT").addEventListener("input",()=>{ $("nmsTv").textContent=(+$("nmsT").value).toFixed(2); draw(); });
  $("nmsS").addEventListener("input",()=>{ $("nmsSv").textContent=(+$("nmsS").value).toFixed(2); draw(); });
  $("nmsC").addEventListener("input",()=>{ $("nmsCv2").textContent=$("nmsC").value; generate(); draw(); });
  generate(); draw();
})();

/* =========================================================
   19 · VIT PATCH ARITHMETIC  (Lesson 62)
   ========================================================= */
(function patch(){
  const cv=$("paCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const img=+$("paI").value, p=+$("paP").value, d=+$("paD").value, L=+$("paL").value;
    const grid=Math.floor(img/p), n=grid*grid+1;               // +1 for CLS
    const attnBytes=L*12*n*n*2;                                // 12 heads, bf16 scores
    const attnFlops=2*2*L*n*n*d;                               // QK^T and AV
    const mlpFlops=2*L*(4*2*n*d*d + 2*2*n*d*d);                // attention projections + MLP
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const side=140, x0=20, y0=42;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,side,side);
    const cell=side/grid;
    if(grid<=64){
      ctx.strokeStyle="rgba(91,200,230,.4)"; ctx.lineWidth=grid>40?0.4:0.8;
      for(let i=1;i<grid;i++){
        ctx.beginPath(); ctx.moveTo(x0+i*cell,y0); ctx.lineTo(x0+i*cell,y0+side); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x0,y0+i*cell); ctx.lineTo(x0+side,y0+i*cell); ctx.stroke();
      }
    } else { ctx.fillStyle="rgba(91,200,230,.22)"; ctx.fillRect(x0,y0,side,side); }
    ctx.fillStyle="rgba(255,180,84,.45)"; ctx.fillRect(x0,y0,cell,cell);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText(img+"\u00d7"+img+" image, "+p+"\u00d7"+p+" patches", x0, 26);
    ctx.fillText(grid+"\u00d7"+grid+" grid", x0, y0+side+18);
    const bx=210, bw=W-240;
    const bars=[["tokens", n, 4097, C.tensor],
                ["attention matrix entries", L*12*n*n, 48*12*4097*4097, C.warn],
                ["params (M)", (12*L*d*d)/1e6, 700, C.signal]];
    bars.forEach((b,i)=>{
      const y=48+i*46, frac=Math.min(1, Math.log10(1+b[1])/Math.log10(1+b[2]));
      ctx.fillStyle=b[3]; ctx.globalAlpha=.7; ctx.fillRect(bx,y,Math.max(2,frac*bw),24); ctx.globalAlpha=1;
      ctx.strokeStyle=b[3]; ctx.strokeRect(bx+.5,y+.5,Math.max(2,frac*bw),24);
      ctx.fillStyle=C.chalk; ctx.font=MONO;
      ctx.fillText(b[0]+"  "+(b[1]>=1e6?(b[1]/1e6).toFixed(1)+"M":Math.round(b[1]).toLocaleString()), bx+6, y+16);
    });
    ctx.fillStyle=C.mute; ctx.fillText("log scale", bx, 40);
    const halved = Math.floor(img/(p/2)), nHalf=halved*halved+1;
    $("paOut").innerHTML =
      '<span class="k">tokens</span> <b>'+n+'</b> ('+grid+'\u00d7'+grid+' + CLS) &nbsp; '+
      '<span class="k">attention memory</span> <b>'+(attnBytes/1e6).toFixed(1)+' MB</b> per image &nbsp; '+
      '<span class="k">FLOPs/image</span> <b>'+((attnFlops+mlpFlops)/1e9).toFixed(1)+' G</b> &nbsp; '+
      '<span class="k">params</span> <b>'+(12*L*d*d/1e6).toFixed(0)+'M</b><br>'+
      '<span class="k">Halve the patch size to '+(p/2)+' and you get '+nHalf+' tokens \u2014 '+
      (nHalf/n).toFixed(1)+'\u00d7 more \u2014 but attention cost rises '+((nHalf/n)**2).toFixed(0)+
      '\u00d7, because it is quadratic in sequence length. That single trade-off is why ViT chose 16\u00d716, '+
      'why Swin uses local windows, and why every efficient-attention method in Lesson 90 exists.</span>';
  }
  [["paI","paIv"],["paP","paPv"],["paD","paDv"],["paL","paLv"]].forEach(([s,l])=>{
    $(s).addEventListener("input",()=>{ $(l).textContent=$(s).value; draw(); });
  });
  draw();
})();

/* =========================================================
   20 · TRAIN BPE LIVE  (Lesson 67)
   ========================================================= */
(function bpe(){
  const cv=$("bpeCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const CORPORA={
    toy:{low:5,lower:2,newest:6,widest:3},
    eng:{the:28,there:6,then:5,them:4,other:7,another:3,mother:3,over:6,ever:5,never:4,
         they:6,their:5,here:4,where:3,these:3,three:3},
    morph:{play:6,playing:5,played:4,player:3,replay:2,run:5,running:4,runner:3,
           walk:5,walking:4,walked:3,walker:2,talk:4,talking:3,talked:2}
  };
  function train(corpus, nMerges){
    const words={};
    for(const w in corpus) words[w]=w.split("").concat(["</w>"]);
    const merges=[];
    for(let step=0;step<nMerges;step++){
      const pairs={};
      for(const w in words){
        const s=words[w], c=corpus[w];
        for(let i=0;i<s.length-1;i++){
          const k=s[i]+"\u2009"+s[i+1];
          pairs[k]=(pairs[k]||0)+c;
        }
      }
      let best=null,bc=0;
      for(const k in pairs) if(pairs[k]>bc){ bc=pairs[k]; best=k; }
      if(!best||bc<2) break;
      const [a,b]=best.split("\u2009");
      merges.push({a,b,count:bc});
      for(const w in words){
        const s=words[w], o=[];
        for(let i=0;i<s.length;){
          if(i<s.length-1 && s[i]===a && s[i+1]===b){ o.push(a+b); i+=2; }
          else { o.push(s[i]); i++; }
        }
        words[w]=o;
      }
    }
    return {merges,words};
  }
  function apply(word, merges){
    let s=word.split("").concat(["</w>"]);
    for(const m of merges){
      const o=[];
      for(let i=0;i<s.length;){
        if(i<s.length-1 && s[i]===m.a && s[i+1]===m.b){ o.push(m.a+m.b); i+=2; }
        else { o.push(s[i]); i++; }
      }
      s=o;
    }
    return s;
  }
  function draw(){
    const corpus=CORPORA[$("bpeC").value]||CORPORA.toy;
    const n=+$("bpeM").value;
    const {merges}=train(corpus,n);
    const test=$("bpeT").value, toks=apply(test,merges);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("merge list (applied in order)",20,18);
    const shown=merges.slice(-16);
    shown.forEach((m,i)=>{
      const col=i%2, row=i>>1;
      const x=20+col*190, y=38+row*24;
      ctx.fillStyle=C.rule2; ctx.fillText(String(merges.length-shown.length+i+1).padStart(2,"0"),x,y);
      ctx.fillStyle=C.tensor; ctx.fillText(m.a.replace("</w>","\u23CE"),x+24,y);
      ctx.fillStyle=C.mute;   ctx.fillText("+",x+24+m.a.length*7,y);
      ctx.fillStyle=C.tensor; ctx.fillText(m.b.replace("</w>","\u23CE"),x+36+m.a.length*7,y);
      ctx.fillStyle=C.signal; ctx.fillText("\u2192 "+(m.a+m.b).replace("</w>","\u23CE"),x+100,y);
      ctx.fillStyle=C.rule2;  ctx.fillText("\u00d7"+m.count,x+165,y);
    });
    if(!merges.length){ ctx.fillStyle=C.rule2; ctx.fillText("(no merges yet \u2014 every symbol is a single character)",20,42); }
    ctx.fillStyle=C.mute; ctx.fillText("tokenizing \u201c"+test+"\u201d",430,18);
    let x=430;
    toks.forEach(t=>{
      const label=t.replace("</w>","\u23CE"), w=Math.max(22,label.length*8+12);
      if(x+w>W-16){ x=430; }
      ctx.strokeStyle=t.length>1?C.signal:C.rule2;
      ctx.fillStyle=t.length>1?"rgba(255,180,84,.16)":"rgba(42,59,78,.3)";
      ctx.fillRect(x,32,w,26); ctx.strokeRect(x+.5,32.5,w,26);
      ctx.fillStyle=t.length>1?C.signal:C.chalk;
      ctx.fillText(label,x+6,49);
      x+=w+5;
    });
    const vocabSize=new Set(Object.keys(corpus).join("").split("")).size+merges.length+1;
    ctx.fillStyle=C.mute;
    ctx.fillText("corpus: "+Object.keys(corpus).length+" word types",430,90);
    ctx.fillText("base alphabet + "+merges.length+" merges = "+vocabSize+" symbols",430,108);
    $("bpeOut").innerHTML =
      '<span class="k">merges</span> <b>'+merges.length+'</b> &nbsp; '+
      '<span class="k">vocabulary</span> <b>'+vocabSize+'</b> &nbsp; '+
      '<span class="k">\u201c'+test+'\u201d \u2192</span> <b>'+toks.length+' tokens</b>: '+
      toks.map(t=>'<code>'+t.replace("</w>","\u23CE")+'</code>').join(" ")+
      '<br><span class="k">'+
      (merges.length===0
        ? 'With zero merges every character is its own token \u2014 no OOV, but the longest sequences.'
        : toks.length<=2
        ? 'This word is now nearly a single token, because it (or its parts) were frequent in the corpus.'
        : 'Drag the merge slider up and watch the token count fall. Words the corpus never saw stay split into small pieces \u2014 that is subword tokenization refusing to emit an unknown token.')+
      ' The \u23CE marker is the end-of-word symbol, which is what keeps <code>est</code> as a suffix distinct from <code>est</code> at the start of a word.</span>';
  }
  $("bpeM").addEventListener("input",()=>{ $("bpeMv").textContent=$("bpeM").value; draw(); });
  $("bpeC").addEventListener("change",draw);
  $("bpeT").addEventListener("change",draw);
  draw();
})();

/* =========================================================
   21 · CO-OCCURRENCE → SEMANTIC MAP  (Lesson 69)
   ========================================================= */
(function embed(){
  const cv=$("emCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const SENTS=[
    "the king ruled the kingdom with his queen",
    "the queen wore a golden crown in the palace",
    "the king and the queen sat on the throne",
    "a prince will one day rule the kingdom",
    "the dog chased the cat across the garden",
    "the cat slept beside the warm dog",
    "a puppy is a young dog and a kitten is a young cat",
    "the dog barked at the cat near the river",
    "she ate bread and cheese for lunch",
    "fresh bread and butter and cheese on the table",
    "he baked bread while she sliced the cheese",
    "the meal was bread cheese and fruit",
    "the river flowed past the forest and the mountain",
    "a forest grows beside the wide river",
    "the mountain rose above the forest and the river",
    "rain fell on the mountain and the forest"
  ];
  const STOP=new Set(["the","a","and","with","his","her","she","he","in","on","at","for","of","was","is","will","one","day","across","beside","near","past","above","while"]);
  const vocab=[];
  {
    const seen={};
    SENTS.forEach(s=>s.split(" ").forEach(w=>{ if(!STOP.has(w) && !seen[w]){ seen[w]=1; vocab.push(w); } }));
  }
  const V=vocab.length, idx={}; vocab.forEach((w,i)=>idx[w]=i);
  function cooc(win){
    const M=new Float64Array(V*V);
    SENTS.forEach(s=>{
      const t=s.split(" ").filter(w=>!STOP.has(w));
      for(let i=0;i<t.length;i++) for(let j=Math.max(0,i-win);j<=Math.min(t.length-1,i+win);j++){
        if(i!==j) M[idx[t[i]]*V+idx[t[j]]]+=1;
      }
    });
    return M;
  }
  function weight(M,mode){
    const O=new Float64Array(V*V);
    if(mode==="raw"){ O.set(M); return O; }
    if(mode==="log"){ for(let k=0;k<M.length;k++) O[k]=Math.log(1+M[k]); return O; }
    let tot=0; const rs=new Float64Array(V), cs=new Float64Array(V);
    for(let i=0;i<V;i++) for(let j=0;j<V;j++){ tot+=M[i*V+j]; rs[i]+=M[i*V+j]; cs[j]+=M[i*V+j]; }
    for(let i=0;i<V;i++) for(let j=0;j<V;j++){
      const p=M[i*V+j]/(tot||1), pi=rs[i]/(tot||1), pj=cs[j]/(tot||1);
      O[i*V+j]= (p>0 && pi>0 && pj>0) ? Math.max(0, Math.log(p/(pi*pj))) : 0;
    }
    return O;
  }
  function project(M){
    const rows=[]; for(let i=0;i<V;i++){ const r=M.slice(i*V,(i+1)*V);
      let n=0; for(const v of r) n+=v*v; n=Math.sqrt(n)||1;
      rows.push(r.map(v=>v/n)); }
    const mean=new Float64Array(V);
    rows.forEach(r=>{ for(let j=0;j<V;j++) mean[j]+=r[j]/V; });
    rows.forEach(r=>{ for(let j=0;j<V;j++) r[j]-=mean[j]; });
    const comps=[];
    const R=rows.map(r=>Float64Array.from(r));
    for(let c=0;c<2;c++){
      let v=new Float64Array(V); for(let i=0;i<V;i++) v[i]=gauss();
      for(let it=0;it<60;it++){
        const u=new Float64Array(V);
        R.forEach(r=>{ let d=0; for(let j=0;j<V;j++) d+=r[j]*v[j];
                       for(let j=0;j<V;j++) u[j]+=d*r[j]; });
        let n=0; for(const x of u) n+=x*x; n=Math.sqrt(n)||1;
        for(let j=0;j<V;j++) v[j]=u[j]/n;
      }
      comps.push(v);
      R.forEach(r=>{ let d=0; for(let j=0;j<V;j++) d+=r[j]*v[j];
                     for(let j=0;j<V;j++) r[j]-=d*v[j]; });
    }
    return rows.map(r=>[
      r.reduce((a,x,j)=>a+x*comps[0][j],0),
      r.reduce((a,x,j)=>a+x*comps[1][j],0)]);
  }
  function draw(){
    const M=weight(cooc(+$("emW").value), $("emT").value);
    const P=project(M), q=$("emQ").value, qi=idx[q];
    const xs=P.map(p=>p[0]), ys=P.map(p=>p[1]);
    const x0=Math.min.apply(null,xs), x1=Math.max.apply(null,xs);
    const y0=Math.min.apply(null,ys), y1=Math.max.apply(null,ys);
    const px=v=>40+((v-x0)/((x1-x0)||1))*(W-100), py=v=>H-40-((v-y0)/((y1-y0)||1))*(H-80);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    grid(ctx,W,H,40);
    /* cosine similarity in the ORIGINAL space, not the 2D projection */
    const sim=[];
    for(let i=0;i<V;i++){
      if(i===qi) continue;
      let d=0,na=0,nb=0;
      for(let j=0;j<V;j++){ d+=M[qi*V+j]*M[i*V+j]; na+=M[qi*V+j]**2; nb+=M[i*V+j]**2; }
      sim.push([vocab[i], d/(Math.sqrt(na*nb)||1e-9)]);
    }
    sim.sort((a,b)=>b[1]-a[1]);
    const near=new Set(sim.slice(0,4).map(s=>s[0]));
    ctx.font=MONO;
    P.forEach((p,i)=>{
      const X=px(p[0]), Y=py(p[1]), isQ=i===qi, isN=near.has(vocab[i]);
      if(isQ||isN){
        ctx.strokeStyle=isQ?C.signal:C.tensor; ctx.lineWidth=isQ?2:1;
        ctx.beginPath(); ctx.arc(X,Y,isQ?7:5,0,7); ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(X,Y,3,0,7);
      ctx.fillStyle=isQ?C.signal:isN?C.tensor:C.rule2; ctx.fill();
      ctx.fillStyle=isQ?C.signal:isN?C.tensor:C.mute;
      ctx.fillText(vocab[i],X+7,Y+4);
    });
    ctx.fillStyle=C.mute;
    ctx.fillText("first two principal components of the weighted co-occurrence matrix",20,20);
    $("emOut").innerHTML =
      '<span class="k">vocabulary</span> '+V+' words &nbsp; <span class="k">nearest to</span> <b style="color:'+C.signal+'">'+q+'</b>: '+
      sim.slice(0,4).map(s=>'<b style="color:'+C.tensor+'">'+s[0]+'</b> '+s[1].toFixed(2)).join(" &nbsp; ")+
      '<br><span class="k">Nothing here was labelled. The clusters \u2014 royalty, animals, food, landscape \u2014 fall out of '+
      'which words appear near which other words, which is the distributional hypothesis doing all the work. '+
      'Switch to raw counts and the structure degrades: frequent words dominate every row, which is exactly '+
      'what PPMI corrects for.</span>';
  }
  $("emW").addEventListener("input",()=>{ $("emWv").textContent=$("emW").value; draw(); });
  $("emT").addEventListener("change",draw);
  $("emQ").addEventListener("change",draw);
  draw();
})();

/* =========================================================
   22 · GRADIENT FLOW THROUGH TIME  (Lessons 70-71)
   ========================================================= */
(function bptt(){
  const cv=$("btCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, D=24;
  function orthogonal(){
    const M=[]; for(let i=0;i<D;i++){ const r=new Float64Array(D);
      for(let j=0;j<D;j++) r[j]=gauss(); M.push(r); }
    for(let i=0;i<D;i++){                                  // Gram-Schmidt
      for(let k=0;k<i;k++){ let d=0;
        for(let j=0;j<D;j++) d+=M[i][j]*M[k][j];
        for(let j=0;j<D;j++) M[i][j]-=d*M[k][j]; }
      let n=0; for(let j=0;j<D;j++) n+=M[i][j]**2; n=Math.sqrt(n)||1;
      for(let j=0;j<D;j++) M[i][j]/=n;
    }
    return M;
  }
  function rnnTrace(radius,T){
    const Q=orthogonal();
    let h=new Float64Array(D); for(let i=0;i<D;i++) h[i]=gauss()*0.3;
    const hs=[];
    for(let t=0;t<T;t++){                                   // forward, to get real tanh'
      const z=new Float64Array(D);
      for(let i=0;i<D;i++){ let s=gauss()*0.5;
        for(let j=0;j<D;j++) s+=radius*Q[i][j]*h[j]; z[i]=s; }
      h=z.map(Math.tanh); hs.push(Float64Array.from(h));
    }
    let g=new Float64Array(D); for(let i=0;i<D;i++) g[i]=gauss();
    let n0=Math.sqrt(g.reduce((a,x)=>a+x*x,0)); for(let i=0;i<D;i++) g[i]/=n0;
    const out=[1];
    for(let t=T-1;t>=0;t--){
      const hp=hs[t], g2=new Float64Array(D);
      for(let j=0;j<D;j++){ let s=0;
        for(let i=0;i<D;i++) s+=radius*Q[i][j]*g[i]*(1-hp[i]*hp[i]); g2[j]=s; }
      g=g2;
      out.push(Math.sqrt(g.reduce((a,x)=>a+x*x,0)));
    }
    return out;
  }
  function lstmTrace(bias,T){
    const out=[1]; let m=1;
    for(let t=0;t<T;t++){
      const f=1/(1+Math.exp(-(bias+gauss()*0.4)));
      m*=f; out.push(m);
    }
    return out;
  }
  function draw(){
    const cell=$("btCell").value, r=+$("btR").value, b=+$("btF").value, T=+$("btT").value;
    seed=99991;
    const series=[];
    if(cell==="rnn"||cell==="both") series.push({n:"vanilla RNN", d:rnnTrace(r,T), c:C.warn});
    if(cell==="lstm"||cell==="both") series.push({n:"LSTM cell state", d:lstmTrace(b,T), c:C.verify});
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=64,R=W-24,TOP=32,BOT=H-46;
    let lo=0;
    series.forEach(s=>s.d.forEach(v=>{ if(v>0) lo=Math.min(lo,Math.log10(v)); }));
    lo=Math.max(lo,-24);
    const px=t=>L+(t/T)*(R-L), py=v=>{
      const l=Math.log10(Math.max(v,1e-30));
      return TOP+(1-(Math.max(l,lo)-lo)/(0-lo||1))*(BOT-TOP);
    };
    ctx.strokeStyle=C.rule; ctx.font=MONO;
    for(let e=0;e>=lo;e-=Math.max(2,Math.round(-lo/6))){
      const Y=py(Math.pow(10,e));
      ctx.beginPath(); ctx.moveTo(L,Y); ctx.lineTo(R,Y); ctx.stroke();
      ctx.fillStyle=C.mute; ctx.textAlign="right";
      ctx.fillText("1e"+e,L-6,Y+4); ctx.textAlign="left";
    }
    series.forEach(s=>{
      ctx.beginPath();
      s.d.forEach((v,t)=>{ const X=px(t),Y=py(v); t?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
      ctx.strokeStyle=s.c; ctx.lineWidth=2.4; ctx.stroke();
    });
    ctx.fillStyle=C.mute;
    ctx.fillText("gradient norm, relative to the loss",L,20);
    ctx.fillText("0",L,BOT+18); ctx.textAlign="right";
    ctx.fillText(T+" steps back",R,BOT+18); ctx.textAlign="left";
    series.forEach((s,i)=>{ ctx.fillStyle=s.c; ctx.fillText(s.n, L+i*180, BOT+38); });
    const fin=series.map(s=>s.d[s.d.length-1]);
    let verdict;
    if(cell==="rnn"||cell==="both"){
      const v=series[0].d[series[0].d.length-1];
      verdict = v<1e-6
        ? '<span style="color:'+C.warn+'">After '+T+' steps the RNN gradient is '+v.toExponential(1)+
          ' \u2014 the loss at step '+T+' provides essentially no signal about what happened at step 0. That is the vanishing gradient, and no learning rate fixes it.</span>'
        : v>1e3
        ? '<span style="color:'+C.warn+'">Exploding: the gradient has grown to '+v.toExponential(1)+
          '. One step will throw the weights across the landscape. This is what gradient clipping exists for.</span>'
        : '<span style="color:'+C.verify+'">Near the knife edge. Note how narrow this band is \u2014 nudge the spectral radius by 0.05 in either direction and it collapses or detonates.</span>';
    } else {
      verdict='<span style="color:'+C.verify+'">The LSTM path is a product of forget gates, not weight matrices. With bias '+b.toFixed(1)+
        ' the gates sit near '+(1/(1+Math.exp(-b))).toFixed(2)+', so information decays slowly and controllably \u2014 and the network can learn to set it higher still where it matters.</span>';
    }

    if(cell==="both"){
      const ratio=series[1].d[series[1].d.length-1]/Math.max(series[0].d[series[0].d.length-1],1e-30);
      verdict += ' <span class="k">At forget-bias '+b.toFixed(1)+' the gates sit near '+(1/(1+Math.exp(-b))).toFixed(2)+
        ', so the LSTM path also decays \u2014 by '+(ratio>1?ratio.toExponential(1)+'\u00d7 less':'a similar amount')+
        ' here. The difference is not that the LSTM cannot forget: it is that its decay rate is a <b>learnable per-coordinate gate</b>, '+
        'while the RNN\u2019s is fixed by the spectrum of one shared matrix. Push the forget bias to 3 and watch the green line flatten \u2014 '+
        'that is a setting the network can reach on its own, and the RNN has no equivalent knob.</span>';
    }
    $("btOut").innerHTML =
      series.map((s,i)=>'<span class="k">'+s.n+' after '+T+' steps</span> <b style="color:'+s.c+'">'+fin[i].toExponential(2)+'</b>').join(" &nbsp; ")+
      '<br>'+verdict;
  }
  $("btCell").addEventListener("change",draw);
  $("btR").addEventListener("input",()=>{ $("btRv").textContent=(+$("btR").value).toFixed(2); draw(); });
  $("btF").addEventListener("input",()=>{ $("btFv").textContent=(+$("btF").value).toFixed(1); draw(); });
  $("btT").addEventListener("input",()=>{ $("btTv").textContent=$("btT").value; draw(); });
  draw();
})();

/* =========================================================
   23 · ATTENTION ALIGNMENT  (Lesson 75)
   ========================================================= */
(function attn(){
  const cv=$("atCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const PAIRS={
    fr:{src:["le","chat","noir","dort"], tgt:["the","black","cat","sleeps"],
        align:[[0],[2],[1],[3]],
        note:"French puts the adjective after the noun. The alignment crosses \u2014 and nobody supervised that."},
    de:{src:["ich","habe","das","buch","gelesen"], tgt:["I","have","read","the","book"],
        align:[[0],[1],[4],[2],[3]],
        note:"German sends the participle to the end. The decoder must jump forward to position 4, then back to 2."},
    mono:{src:["the","cat","sat","down"], tgt:["the","cat","sat","down"],
        align:[[0],[1],[2],[3]],
        note:"A monotone copy \u2014 the alignment is the diagonal, which is the easy case a fixed context vector could almost handle."}
  };
  function draw(){
    const P=PAIRS[$("atS").value]||PAIRS.fr;
    const scale=+$("atT").value, noise=+$("atN").value;
    seed=4242;
    const Tt=P.tgt.length, Ts=P.src.length;
    const A=[];
    for(let i=0;i<Tt;i++){
      const raw=[];
      for(let j=0;j<Ts;j++){
        const hit=P.align[i].includes(j);
        raw.push(scale*(hit?2.2:0.15*(1-Math.abs(i-j)/Ts)) + gauss()*noise);
      }
      const mx=Math.max.apply(null,raw);
      const ex=raw.map(v=>Math.exp(v-mx)), s=ex.reduce((a,b)=>a+b,0);
      A.push(ex.map(v=>v/s));
    }
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const cw=Math.min(64,(W-260)/Ts), ch=44, x0=150, y0=60;
    ctx.font=MONO;
    P.src.forEach((w,j)=>{ ctx.fillStyle=C.tensor; ctx.save();
      ctx.translate(x0+j*cw+cw/2, y0-10); ctx.rotate(-0.5);
      ctx.fillText(w,0,0); ctx.restore(); });
    A.forEach((row,i)=>{
      ctx.fillStyle=C.signal; ctx.textAlign="right";
      ctx.fillText(P.tgt[i], x0-10, y0+i*ch+26); ctx.textAlign="left";
      row.forEach((v,j)=>{
        ctx.fillStyle="rgba(255,180,84,"+(0.06+0.92*v).toFixed(3)+")";
        ctx.fillRect(x0+j*cw, y0+i*ch, cw-2, ch-2);
        ctx.strokeStyle=C.rule; ctx.strokeRect(x0+j*cw+.5, y0+i*ch+.5, cw-2, ch-2);
        if(v>0.14){ ctx.fillStyle = v>0.5 ? "#07121A" : C.chalk;
          ctx.fillText(v.toFixed(2), x0+j*cw+6, y0+i*ch+26); }
      });
    });
    ctx.fillStyle=C.mute;
    ctx.fillText("source \u2192", x0, 26);
    ctx.save(); ctx.translate(28, y0+60); ctx.rotate(-Math.PI/2);
    ctx.fillText("target \u2193", 0, 0); ctx.restore();
    let ent=0;
    A.forEach(r=>r.forEach(v=>{ if(v>1e-9) ent-=v*Math.log2(v); }));
    ent/=Tt;
    const maxEnt=Math.log2(Ts);
    let peak=0; A.forEach(r=>peak+=Math.max.apply(null,r)); peak/=Tt;
    $("atOut").innerHTML =
      '<span class="k">mean alignment entropy</span> <b>'+ent.toFixed(2)+'</b> of '+maxEnt.toFixed(2)+
      ' bits max &nbsp; <span class="k">mean peak weight</span> <b>'+peak.toFixed(2)+'</b><br>'+
      '<span class="k">'+P.note+'</span><br>'+
      (peak>0.85
        ? '<span style="color:'+C.verify+'">Sharp: each target word draws from essentially one source word. Good for word-by-word translation, brittle when the true alignment is many-to-many.</span>'
        : peak<0.4
        ? '<span style="color:'+C.warn+'">Diffuse: the context vector is now an average over the whole source, which is most of the way back to the fixed-vector bottleneck attention was meant to fix.</span>'
        : '<span class="k">Raise the score scale to sharpen, or add noise to blur. Entropy is the honest measure of how much the model has actually committed to an alignment.</span>');
  }
  $("atS").addEventListener("change",draw);
  $("atT").addEventListener("input",()=>{ $("atTv").textContent=(+$("atT").value).toFixed(1); draw(); });
  $("atN").addEventListener("input",()=>{ $("atNv").textContent=(+$("atN").value).toFixed(2); draw(); });
  draw();
})();

/* =========================================================
   24 · DECODING STRATEGIES  (Lesson 76)
   ========================================================= */
(function decode(){
  const cv=$("dcCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const DIST={
    sharp:{prompt:"the capital of France is",
      toks:["Paris","the","located","a","in","home","one","situated","also","known","called","famous"],
      p:[0.842,0.041,0.022,0.017,0.013,0.010,0.008,0.007,0.006,0.005,0.004,0.004]},
    flat:{prompt:"she opened the door and",
      toks:["walked","saw","stepped","looked","found","went","let","peered","froze","called","waited","turned"],
      p:[0.094,0.088,0.079,0.071,0.063,0.058,0.049,0.044,0.039,0.035,0.031,0.028]}
  };
  const TAIL=44;
  function build(kind){
    const d=DIST[kind], toks=d.toks.slice(), p=d.p.slice();
    let rest=1-p.reduce((a,b)=>a+b,0);
    for(let i=0;i<TAIL;i++){ toks.push("\u00b7"); p.push(rest/TAIL); }
    return {prompt:d.prompt, toks, p};
  }
  function draw(){
    const kind=$("dcC").value, base=build(kind);
    const T=+$("dcT").value, k=+$("dcK").value, pp=+$("dcP").value, strat=$("dcS").value;
    const logits=base.p.map(v=>Math.log(Math.max(v,1e-12)));
    const scaled=logits.map(v=>v/(strat==="greedy"?1:T));
    const mx=Math.max.apply(null,scaled);
    const ex=scaled.map(v=>Math.exp(v-mx)), Z=ex.reduce((a,b)=>a+b,0);
    const probs=ex.map(v=>v/Z);
    const order=probs.map((v,i)=>i).sort((a,b)=>probs[b]-probs[a]);
    const keep=new Set();
    if(strat==="greedy") keep.add(order[0]);
    else if(strat==="temp") order.forEach(i=>keep.add(i));
    else if(strat==="topk") order.slice(0,k).forEach(i=>keep.add(i));
    else if(strat==="topp"){ let c=0; for(const i of order){ keep.add(i); c+=probs[i]; if(c>=pp) break; } }
    else { const thr=pp*probs[order[0]]; order.forEach(i=>{ if(probs[i]>=thr) keep.add(i); }); }
    let kept=0; keep.forEach(i=>kept+=probs[i]);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText('prompt: "'+base.prompt+' ___"', 20, 20);
    const n=Math.min(28, base.toks.length), x0=20, y0=44, bh=200;
    const bw=(W-46)/n, pmax=Math.max.apply(null,probs);
    for(let r=0;r<n;r++){
      const i=order[r], hgt=(probs[i]/pmax)*bh, on=keep.has(i);
      ctx.fillStyle= on ? C.signal : C.rule;
      ctx.globalAlpha= on ? 0.85 : 0.5;
      ctx.fillRect(x0+r*bw, y0+bh-hgt, bw-2, hgt);
      ctx.globalAlpha=1;
      if(r<12){
        ctx.save(); ctx.translate(x0+r*bw+bw/2+4, y0+bh+8); ctx.rotate(Math.PI/2.6);
        ctx.fillStyle= on ? C.chalk : C.rule2;
        ctx.fillText(base.toks[i],0,0); ctx.restore();
      }
    }
    ctx.strokeStyle=C.rule2; ctx.beginPath();
    ctx.moveTo(x0,y0+bh); ctx.lineTo(x0+n*bw,y0+bh); ctx.stroke();
    ctx.fillStyle=C.mute;
    ctx.fillText("tokens sorted by probability \u00b7 amber = survives the filter", x0, y0+bh+70);
    let ent=0; keep.forEach(i=>{ const q=probs[i]/kept; if(q>1e-12) ent-=q*Math.log2(q); });
    $("dcOut").innerHTML =
      '<span class="k">survivors</span> <b>'+keep.size+'</b> of '+base.toks.length+' &nbsp; '+
      '<span class="k">mass kept</span> <b>'+(kept*100).toFixed(1)+'%</b> &nbsp; '+
      '<span class="k">entropy after filtering</span> <b>'+ent.toFixed(2)+'</b> bits &nbsp; '+
      '<span class="k">top token</span> <b>'+base.toks[order[0]]+'</b> '+(probs[order[0]]*100).toFixed(1)+'%<br>'+
      (kind==="sharp" && keep.size>6
        ? '<span style="color:'+C.warn+'">The model is 84% sure the answer is Paris, and you are keeping '+keep.size+
          ' candidates. On a factual question that is pure downside \u2014 this is where you want temperature 0.</span>'
        : kind==="flat" && keep.size<=2
        ? '<span style="color:'+C.warn+'">An open-ended continuation collapsed to '+keep.size+
          ' option(s). This is how greedy decoding produces flat, repetitive prose: it always picks the safe word.</span>'
        : '<span class="k">Switch the context between confident and open-ended with the same settings. '+
          'Fixed top-k keeps the same number of candidates in both, which is wrong in both directions \u2014 '+
          'top-p adapts, which is why it became the default.</span>');
  }
  ["dcS","dcC"].forEach(id=>$(id).addEventListener("change",draw));
  $("dcT").addEventListener("input",()=>{ $("dcTv").textContent=(+$("dcT").value).toFixed(2); draw(); });
  $("dcK").addEventListener("input",()=>{ $("dcKv").textContent=$("dcK").value; draw(); });
  $("dcP").addEventListener("input",()=>{ $("dcPv").textContent=(+$("dcP").value).toFixed(2); draw(); });
  draw();
})();

/* =========================================================
   25 · SCALED DOT-PRODUCT ATTENTION  (Lesson 81)
   ========================================================= */
(function sdpa(){
  const cv=$("sdCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const dk=+$("sdD").value, n=+$("sdN").value,
          scale=$("sdScale").checked, causal=$("sdMask").checked;
    seed=20250101;
    const Q=[],K=[];
    for(let i=0;i<n;i++){ const q=new Float64Array(dk), k=new Float64Array(dk);
      for(let j=0;j<dk;j++){ q[j]=gauss(); k[j]=gauss(); } Q.push(q); K.push(k); }
    const raw=[], A=[];
    for(let i=0;i<n;i++){
      const row=new Float64Array(n);
      for(let j=0;j<n;j++){ let s=0; for(let d=0;d<dk;d++) s+=Q[i][d]*K[j][d];
        row[j]= scale ? s/Math.sqrt(dk) : s; }
      raw.push(row);
      const use=[]; for(let j=0;j<n;j++) use.push(causal && j>i ? -Infinity : row[j]);
      const mx=Math.max.apply(null,use.filter(isFinite));
      const ex=use.map(v=>isFinite(v)?Math.exp(v-mx):0), Z=ex.reduce((a,b)=>a+b,0)||1;
      A.push(ex.map(v=>v/Z));
    }
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    /* score histogram */
    const hx=20,hy=40,hw=300,hh=180;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(hx+.5,hy+.5,hw,hh);
    const flat=[]; raw.forEach(r=>r.forEach(v=>flat.push(v)));
    let mean=0; flat.forEach(v=>mean+=v); mean/=flat.length;
    let sd=0; flat.forEach(v=>sd+=(v-mean)**2); sd=Math.sqrt(sd/flat.length);
    const span=Math.max(4, sd*4), B=40, bins=new Array(B).fill(0);
    flat.forEach(v=>{ let t=(v+span)/(2*span); t=Math.max(0,Math.min(0.999,t)); bins[(t*B)|0]++; });
    const bm=Math.max.apply(null,bins)||1;
    bins.forEach((b,i)=>{ const bw=hw/B, hgt=(b/bm)*(hh-8);
      ctx.fillStyle= sd>3 ? C.warn : C.tensor; ctx.globalAlpha=.8;
      ctx.fillRect(hx+i*bw, hy+hh-hgt, bw-1, hgt); ctx.globalAlpha=1; });
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("raw score distribution",hx,28);
    ctx.fillText("\u2212"+span.toFixed(1),hx,hy+hh+16);
    ctx.textAlign="right"; ctx.fillText("+"+span.toFixed(1),hx+hw,hy+hh+16); ctx.textAlign="left";
    ctx.fillStyle= sd>3?C.warn:C.verify;
    ctx.fillText("\u03c3 = "+sd.toFixed(2)+(scale?"  (scaled)":"  (UNSCALED)"),hx+6,hy+16);
    /* attention heatmap */
    const ax=360, ay=40, as=180, cell=as/n;
    ctx.fillStyle=C.mute; ctx.fillText("attention weights (n\u00d7n)",ax,28);
    for(let i=0;i<n;i++) for(let j=0;j<n;j++){
      ctx.fillStyle="rgba(255,180,84,"+Math.min(1,A[i][j]*Math.min(n,12)*0.9+0.03).toFixed(3)+")";
      ctx.fillRect(ax+j*cell, ay+i*cell, Math.max(1,cell-0.5), Math.max(1,cell-0.5));
    }
    ctx.strokeStyle=C.rule2; ctx.strokeRect(ax+.5,ay+.5,as,as);
    /* metrics */
    let ent=0, mxw=0, gradscale=0;
    A.forEach(r=>{ let e=0, m=0;
      r.forEach(v=>{ if(v>1e-12) e-=v*Math.log2(v); if(v>m) m=v; gradscale+=v*(1-v); });
      ent+=e; mxw+=m; });
    ent/=n; mxw/=n; gradscale/=(n*n);
    const uniform=Math.log2(causal? (n+1)/2 : n);
    ctx.fillStyle=C.mute;
    ctx.fillText("entropy "+ent.toFixed(2)+" / "+uniform.toFixed(2)+" bits",ax,ay+as+16);
    /* gradient bar */
    const gx=580,gy=40;
    ctx.fillStyle=C.mute; ctx.fillText("softmax gradient scale",gx,28);
    const gh=(Math.min(1,gradscale/0.25))*180;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(gx+.5,gy+.5,60,180);
    ctx.fillStyle= gradscale<0.02 ? C.warn : C.verify; ctx.globalAlpha=.8;
    ctx.fillRect(gx,gy+180-gh,60,gh); ctx.globalAlpha=1;
    ctx.fillStyle=C.chalk; ctx.fillText(gradscale.toFixed(4),gx+2,gy+196);
    $("sdOut").innerHTML =
      '<span class="k">score \u03c3</span> <b>'+sd.toFixed(2)+'</b> (theory: '+(scale?"1.00":Math.sqrt(dk).toFixed(2))+
      ') &nbsp; <span class="k">mean max weight</span> <b>'+mxw.toFixed(3)+'</b> &nbsp; '+
      '<span class="k">entropy</span> <b>'+ent.toFixed(2)+'</b> bits &nbsp; '+
      '<span class="k">mean p(1\u2212p)</span> <b>'+gradscale.toFixed(4)+'</b><br>'+
      (!scale && sd>3
        ? '<span style="color:'+C.warn+'">Unscaled at d<sub>k</sub>='+dk+', scores have \u03c3\u2248'+Math.sqrt(dk).toFixed(1)+
          '. The softmax has saturated \u2014 one weight near 1, the rest near 0 \u2014 and p(1\u2212p) has collapsed to '+
          gradscale.toFixed(4)+'. At initialisation the model cannot learn WHERE to attend, because the gradient that would tell it is gone.</span>'
        : scale
        ? '<span style="color:'+C.verify+'">Scaling by \u221ad<sub>k</sub> holds \u03c3 at 1 regardless of head dimension, so the softmax stays responsive and the gradient survives. Untick the box and raise d<sub>k</sub> to see what it is preventing.</span>'
        : '<span class="k">At small d<sub>k</sub> the scaling barely matters \u2014 the variance is only '+dk+
          '. Drag d<sub>k</sub> up to 256 and the difference becomes dramatic.</span>');
  }
  ["sdScale","sdMask"].forEach(id=>$(id).addEventListener("change",draw));
  $("sdD").addEventListener("input",()=>{ $("sdDv").textContent=$("sdD").value; draw(); });
  $("sdN").addEventListener("input",()=>{ $("sdNv").textContent=$("sdN").value; draw(); });
  draw();
})();

/* =========================================================
   26 · POSITION ENCODINGS  (Lesson 83)
   ========================================================= */
(function pos(){
  const cv=$("poCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, D=64;
  function signal(method, dist, base){
    if(method==="alibi") return -0.125*dist;
    if(method==="sin"){
      let s=0;
      for(let i=0;i<D/2;i++){ const w=1/Math.pow(10000, 2*i/D);
        s+=Math.cos(w*dist); }
      return s/(D/2);
    }
    let s=0;
    for(let i=0;i<D/2;i++){ const th=1/Math.pow(base, 2*i/D); s+=Math.cos(th*dist); }
    return s/(D/2);
  }
  function draw(){
    const m=$("poM").value, tr=+$("poT").value, ev=+$("poE").value, base=Math.pow(10,+$("poB").value);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=54,R=W-20,TOP=48,BOT=H-52;
    const vals=[]; for(let d=0;d<=ev;d++) vals.push(signal(m,d,base));
    let lo=Math.min.apply(null,vals), hi=Math.max.apply(null,vals);
    if(hi-lo<1e-6){ hi=lo+1; }
    const px=d=>L+(d/ev)*(R-L), py=v=>BOT-((v-lo)/(hi-lo))*(BOT-TOP);
    if(ev>tr){
      ctx.fillStyle="rgba(255,123,135,.08)";
      ctx.fillRect(px(tr),TOP,px(ev)-px(tr),BOT-TOP);
      ctx.strokeStyle=C.warn; ctx.setLineDash([4,4]);
      ctx.beginPath(); ctx.moveTo(px(tr),TOP); ctx.lineTo(px(tr),BOT); ctx.stroke(); ctx.setLineDash([]);
      ctx.font=MONO; ctx.fillStyle=C.warn;
      ctx.fillText("never seen in training \u2192", px(tr)+6, TOP+16);
    }
    ctx.strokeStyle=C.rule; ctx.beginPath();
    ctx.moveTo(L,py(0)); ctx.lineTo(R,py(0)); ctx.stroke();
    ctx.beginPath();
    vals.forEach((v,d)=>{ const X=px(d),Y=py(v); d?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
    ctx.strokeStyle=C.signal; ctx.lineWidth=2.2; ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("positional contribution to the attention score, vs relative distance",L,26);
    ctx.fillText("0",L,BOT+18); ctx.textAlign="right";
    ctx.fillText(ev+" tokens apart",R,BOT+18); ctx.textAlign="left";
    const beyond=vals.slice(Math.min(tr,ev));
    let osc=0; for(let i=1;i<beyond.length;i++) if((beyond[i]-beyond[i-1])*(beyond[i-1]-(beyond[i-2]||beyond[i-1]))<0) osc++;
    const notes={
      sin:"Sinusoidal keeps producing values past the trained length \u2014 nothing errors \u2014 but the model has never learned to interpret them, and quality degrades sharply.",
      rope:"RoPE\u2019s score depends only on relative distance, exactly. Past the trained length the high-frequency components alias, which is what position interpolation and YaRN correct. Raising the base \u03b8 stretches the wavelengths, which is NTK-aware scaling in one slider.",
      alibi:"ALiBi is a monotone linear penalty with no learned parameters and no periodicity, so distance 5000 means exactly what distance 500 meant \u2014 only more so. That is why it extrapolates by construction."};
    $("poOut").innerHTML =
      '<span class="k">method</span> <b>'+({sin:"sinusoidal",rope:"RoPE",alibi:"ALiBi"})[m]+'</b> &nbsp; '+
      '<span class="k">trained to</span> '+tr+' &nbsp; <span class="k">evaluated to</span> '+ev+
      (m==="rope"?' &nbsp; <span class="k">base \u03b8</span> <b>'+base.toExponential(1)+'</b>':'')+
      ' &nbsp; <span class="k">sign changes past the boundary</span> '+osc+
      '<br><span class="k">'+notes[m]+'</span>';
  }
  $("poM").addEventListener("change",draw);
  [["poT","poTv"],["poE","poEv"]].forEach(([s,l])=>$(s).addEventListener("input",()=>{ $(l).textContent=$(s).value; draw(); }));
  $("poB").addEventListener("input",()=>{ $("poBv").textContent=Math.pow(10,+$("poB").value).toExponential(0); draw(); });
  $("poBv").textContent=Math.pow(10,+$("poB").value).toExponential(0);
  draw();
})();

/* =========================================================
   27 · KV CACHE CALCULATOR  (Lesson 90)
   ========================================================= */
(function kv(){
  const cv=$("kvCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, GB=1e9;
  const MODELS={7:{L:32,h:32,dh:128,P:7e9},13:{L:40,h:40,dh:128,P:13e9},
                70:{L:80,h:64,dh:128,P:70e9},405:{L:126,h:128,dh:128,P:405e9}};
  function bytes(mk,groups,n,B,q8){
    const m=MODELS[mk];
    const hkv = groups===1 ? m.h : groups===0 ? 1 : Math.max(1,Math.round(m.h/groups));
    return 2*B*n*m.L*hkv*m.dh*(q8?1:2);
  }
  function draw(){
    const mk=$("kvM").value, g=+$("kvA").value, n=+$("kvN").value,
          B=+$("kvB").value, q8=$("kvQ").checked;
    const m=MODELS[mk], wGB=m.P*2/GB;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=60,R=W-24,TOP=46,BOT=H-48;
    const maxN=131072;
    const series=[[1,"MHA",C.tensor],[8,"GQA-8",C.verify],[0,"MQA",C.violet]];
    let hi=0;
    series.forEach(s=>{ hi=Math.max(hi, bytes(mk,s[0],maxN,B,q8)/GB); });
    hi=Math.max(hi,wGB*1.2);
    const px=v=>L+(Math.log2(v/1024)/Math.log2(maxN/1024))*(R-L);
    const py=v=>BOT-(Math.log10(1+v)/Math.log10(1+hi))*(BOT-TOP);
    ctx.strokeStyle=C.rule2; ctx.beginPath();
    ctx.moveTo(L,TOP); ctx.lineTo(L,BOT); ctx.lineTo(R,BOT); ctx.stroke();
    ctx.strokeStyle=C.rule; ctx.setLineDash([3,3]);
    ctx.beginPath(); ctx.moveTo(L,py(wGB)); ctx.lineTo(R,py(wGB)); ctx.stroke(); ctx.setLineDash([]);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("model weights, bf16: "+wGB.toFixed(0)+" GB",L+6,py(wGB)-6);
    series.forEach(s=>{
      ctx.beginPath();
      for(let e=10;e<=17;e+=0.1){ const nn=Math.pow(2,e);
        const X=px(nn), Y=py(bytes(mk,s[0],nn,B,q8)/GB);
        e===10?ctx.moveTo(X,Y):ctx.lineTo(X,Y); }
      ctx.strokeStyle=s[2]; ctx.lineWidth= s[0]===g?3:1.4;
      ctx.globalAlpha= s[0]===g?1:0.45; ctx.stroke(); ctx.globalAlpha=1;
    });
    const cur=bytes(mk,g,n,B,q8)/GB;
    ctx.beginPath(); ctx.arc(px(n),py(cur),6,0,7); ctx.fillStyle="#fff"; ctx.fill();
    ctx.fillStyle=C.chalk; ctx.fillText(cur.toFixed(1)+" GB", px(n)+10, py(cur)-6);
    ctx.fillStyle=C.mute;
    ctx.fillText("KV cache (GB, log)",L,30);
    [1024,8192,65536,131072].forEach(v=>{
      ctx.fillStyle=C.mute; ctx.textAlign="center";
      ctx.fillText(v>=1024?(v/1024)+"k":String(v), px(v), BOT+18); ctx.textAlign="left"; });
    series.forEach((s,i)=>{ ctx.fillStyle=s[2]; ctx.fillText(s[1], L+i*70, BOT+38); });
    const total=cur+wGB, n80=Math.ceil(total/80);
    $("kvOut").innerHTML =
      '<span class="k">weights</span> <b>'+wGB.toFixed(0)+' GB</b> &nbsp; '+
      '<span class="k">KV cache</span> <b style="color:'+C.signal+'">'+cur.toFixed(1)+' GB</b> &nbsp; '+
      '<span class="k">total</span> <b>'+total.toFixed(0)+' GB</b> &nbsp; '+
      '<span class="k">'+n80+'\u00d780GB GPU'+(n80>1?'s':'')+'</span><br>'+
      (cur>wGB
        ? '<span style="color:'+C.warn+'">The cache is now larger than the model itself. At '+B+
          ' concurrent user'+(B>1?'s':'')+' and '+n+' tokens, memory \u2014 not compute \u2014 is what limits how many people you can serve.</span>'
        : '<span class="k">Switch between MHA, GQA and MQA at 32k context: the cache divides by exactly the KV-head ratio. That single change is what made long-context serving affordable, and it costs almost no quality.</span>');
  }
  ["kvM","kvA","kvQ"].forEach(id=>$(id).addEventListener("change",draw));
  $("kvN").addEventListener("input",()=>{ $("kvNv").textContent=$("kvN").value; draw(); });
  $("kvB").addEventListener("input",()=>{ $("kvBv").textContent=$("kvB").value; draw(); });
  draw();
})();

/* =========================================================
   28 · SCALING LAWS  (Lesson 93)
   ========================================================= */
(function scaling(){
  const cv=$("scCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  // Calibrated so the optimum reproduces Chinchilla's headline 20 tokens/parameter.
  // The paper's own published Approach-3 coefficients (B=410.7, beta=0.28) do NOT --
  // they give ~32B/3.0T at Chinchilla's budget instead of 70B/1.4T. Known replication issue.
  const E=1.69, A=406.4, Bc=1125.4, al=0.34, be=0.34;
  const loss=(N,D)=>E + A/Math.pow(N,al) + Bc/Math.pow(D,be);
  function draw(){
    const Cb=Math.pow(10,+$("scC").value), N0=Math.pow(10,+$("scN").value),
          I=+$("scI").value>0 ? Math.pow(10,+$("scI").value) : 0;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=64,R=W-24,TOP=40,BOT=H-56;
    const lnMin=7.5, lnMax=12.5;
    const pts=[];
    for(let e=lnMin;e<=lnMax;e+=0.05){
      const N=Math.pow(10,e), D=Cb/(6*N);
      if(D<1e7) continue;
      pts.push([e, loss(N,D)]);
    }
    if(!pts.length){ $("scOut").innerHTML='<span class="k">budget too small</span>'; return; }
    let lo=Infinity,hi=-Infinity;
    pts.forEach(p=>{ lo=Math.min(lo,p[1]); hi=Math.max(hi,p[1]); });
    hi=Math.min(hi, lo+1.2);
    const px=e=>L+((e-lnMin)/(lnMax-lnMin))*(R-L);
    const py=v=>TOP+((v-lo)/((hi-lo)||1))*(BOT-TOP);
    ctx.beginPath();
    pts.forEach((p,i)=>{ const X=px(p[0]),Y=py(Math.min(p[1],hi)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
    ctx.strokeStyle=C.signal; ctx.lineWidth=2.4; ctx.stroke();
    let best=pts[0]; pts.forEach(p=>{ if(p[1]<best[1]) best=p; });
    const Nopt=Math.pow(10,best[0]), Dopt=Cb/(6*Nopt);
    ctx.strokeStyle=C.verify; ctx.setLineDash([4,3]);
    ctx.beginPath(); ctx.moveTo(px(best[0]),TOP); ctx.lineTo(px(best[0]),BOT); ctx.stroke(); ctx.setLineDash([]);
    ctx.font=MONO; ctx.fillStyle=C.verify;
    ctx.fillText("Chinchilla optimum", px(best[0])+6, TOP+16);
    const Ln=loss(N0, Cb/(6*N0));
    ctx.beginPath(); ctx.arc(px(Math.log10(N0)), py(Math.min(Ln,hi)), 6,0,7);
    ctx.fillStyle="#fff"; ctx.fill();
    ctx.fillStyle=C.chalk; ctx.fillText("your model", px(Math.log10(N0))+10, py(Math.min(Ln,hi))+16);
    /* inference-aware optimum: minimise loss subject to 6ND + 2NI = total */
    let bestT=null;
    if(I>0){
      for(let e=lnMin;e<=lnMax;e+=0.02){
        const N=Math.pow(10,e), D=(Cb-2*N*I)/(6*N);
        if(D<1e7) continue;
        const l=loss(N,D);
        if(!bestT||l<bestT[1]) bestT=[e,l];
      }
      if(bestT){
        ctx.strokeStyle=C.violet; ctx.setLineDash([2,3]);
        ctx.beginPath(); ctx.moveTo(px(bestT[0]),TOP); ctx.lineTo(px(bestT[0]),BOT); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle=C.violet;
        ctx.fillText("inference-aware", px(bestT[0])+6, TOP+34);
      }
    }
    ctx.fillStyle=C.mute;
    ctx.fillText("predicted loss vs parameter count, at a fixed training budget", L, 26);
    [8,9,10,11,12].forEach(e=>{ ctx.textAlign="center";
      ctx.fillText(e===8?"100M":e===9?"1B":e===10?"10B":e===11?"100B":"1T", px(e), BOT+18);
      ctx.textAlign="left"; });
    const ratio=(Cb/(6*N0))/N0;
    $("scOut").innerHTML =
      '<span class="k">budget</span> <b>'+Cb.toExponential(1)+' FLOPs</b> &nbsp; '+
      '<span class="k">Chinchilla optimum</span> <b>'+(Nopt/1e9).toFixed(1)+'B params on '+(Dopt/1e12).toFixed(2)+
      'T tokens</b> ('+(Dopt/Nopt).toFixed(0)+' tok/param) &nbsp; <span class="k">predicted loss</span> <b>'+best[1].toFixed(3)+'</b><br>'+
      '<span class="k">your choice</span> '+(N0/1e9).toFixed(1)+'B on '+(Cb/(6*N0)/1e12).toFixed(2)+
      'T tokens ('+ratio.toFixed(0)+' tok/param) \u2192 loss <b>'+Ln.toFixed(3)+'</b> '+
      (Ln-best[1]>0.005?'<span style="color:'+C.warn+'">(+'+(Ln-best[1]).toFixed(3)+')</span>':'<span style="color:'+C.verify+'">(optimal)</span>')+
      '<br><span class="k">'+
      (I>0 && bestT
        ? 'Serving '+I.toExponential(0)+' inference tokens shifts the optimum to <b style="color:'+C.violet+'">'+
          (Math.pow(10,bestT[0])/1e9).toFixed(1)+'B</b> \u2014 smaller, because every inference token costs 2N FLOPs forever. '+
          'This is why Llama-3-8B was trained on 15T tokens at ~90\u00d7 the Chinchilla ratio.'
        : 'The optimum here sits at 20 tokens per parameter, Chinchilla\u2019s headline ratio. '+'(Footnote worth knowing: the coefficients actually printed in that paper do not reproduce its own headline \u2014 they imply ~90 tok/param. This curve is calibrated to the stated result.) '+'Notice how flat the curve is near the minimum. Being 3\u00d7 off in model size costs very little loss, which is why inference cost, not training optimality, usually decides the size. Drag the inference slider up.')+
      '</span>';
  }
  $("scC").addEventListener("input",()=>{ $("scCv2").textContent=Math.pow(10,+$("scC").value).toExponential(0); draw(); });
  $("scN").addEventListener("input",()=>{ const v=Math.pow(10,+$("scN").value);
    $("scNv").textContent= v>=1e9?(v/1e9).toFixed(1)+"B":(v/1e6).toFixed(0)+"M"; draw(); });
  $("scI").addEventListener("input",()=>{ const v=+$("scI").value;
    $("scIv").textContent= v>0?Math.pow(10,v).toExponential(0):"0"; draw(); });
  $("scCv2").textContent=Math.pow(10,+$("scC").value).toExponential(0);
  (function(){ const v=Math.pow(10,+$("scN").value);
    $("scNv").textContent= v>=1e9?(v/1e9).toFixed(1)+"B":(v/1e6).toFixed(0)+"M"; })();
  draw();
})();

/* =========================================================
   29 · LORA BUDGET  (Lesson 96)
   ========================================================= */
(function lora(){
  const cv=$("lrCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, GB=1e9;
  function draw(){
    const P=Math.pow(10,+$("lrM").value), r=+$("lrR").value,
          t=$("lrT").value, q=+$("lrQ").value;
    const L=Math.cbrt(P/196608), d=128*L, dff=Math.round(8*d/3);
    let lp=0;
    if(t==="qv")   lp = L*2*r*(d+d);
    else if(t==="attn") lp = L*4*r*(d+d);
    else           lp = L*(4*r*(d+d) + 2*r*(d+dff) + r*(dff+d));
    const baseB = P*(q===4?0.55:2);            // NF4 + double-quant constants ≈ 4.4 bits
    const trainB = lp*(2+4+4+8);               // weights + master + grad + Adam
    const full   = P*18;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText((P/1e9).toFixed(1)+"B params \u00b7 est. "+Math.round(L)+" layers \u00d7 "+Math.round(d)+
                 " hidden \u00b7 rank "+r, 20, 20);
    const rows=[["full fine-tune", full, C.warn],
                [(q===4?"QLoRA":"LoRA")+" total", baseB+trainB, C.verify],
                ["  \u2514 base weights (frozen)", baseB, C.tensor],
                ["  \u2514 trainable + optimizer", trainB, C.signal]];
    const mx=full;
    rows.forEach((row,i)=>{
      const y=40+i*46, bw=(row[1]/mx)*(W-300);
      ctx.fillStyle=row[2]; ctx.globalAlpha=.72; ctx.fillRect(210,y,Math.max(2,bw),28); ctx.globalAlpha=1;
      ctx.strokeStyle=row[2]; ctx.strokeRect(210.5,y+.5,Math.max(2,bw),28);
      ctx.fillStyle=C.chalk; ctx.fillText(row[0],20,y+19);
      ctx.fillText((row[1]/GB).toFixed(1)+" GB",218+Math.max(2,bw),y+19);
    });
    const pct=100*lp/P;
    ctx.fillStyle=C.mute;
    ctx.fillText("trainable: "+lp.toLocaleString()+" of "+Math.round(P).toLocaleString()+
                 " = "+pct.toFixed(3)+"%", 20, 232);
    const fits=Math.ceil((baseB+trainB)/GB/80);
    $("lrOut").innerHTML =
      '<span class="k">trainable</span> <b>'+(lp/1e6).toFixed(1)+'M</b> ('+pct.toFixed(3)+'% of the model) &nbsp; '+
      '<span class="k">training memory</span> <b style="color:'+C.verify+'">'+((baseB+trainB)/GB).toFixed(1)+
      ' GB</b> vs <b style="color:'+C.warn+'">'+(full/GB).toFixed(0)+' GB</b> full &nbsp; '+
      '<span class="k">'+(full/(baseB+trainB)).toFixed(1)+'\u00d7 less</span><br>'+
      '<span class="k">'+
      (t==="qv"
        ? 'Targeting only q_proj and v_proj is the tutorial default and it leaves the MLP \u2014 two-thirds of the parameters \u2014 completely untouched. Switch to attention + MLP; it matters more than raising the rank.'
        : 'Adapter file is about '+(lp*2/1e6).toFixed(0)+' MB, so you can keep hundreds of task-specific adapters and swap them against one resident base model. That is the real deployment win.')+
      (fits<=1?' Fits on a single 80GB GPU.':' Needs '+fits+'\u00d780GB.')+'</span>';
  }
  ["lrT","lrQ"].forEach(id=>$(id).addEventListener("change",draw));
  $("lrR").addEventListener("input",()=>{ $("lrRv").textContent=$("lrR").value; draw(); });
  $("lrM").addEventListener("input",()=>{ const v=Math.pow(10,+$("lrM").value);
    $("lrMv").textContent= v>=1e9?(v/1e9).toFixed(1)+"B":(v/1e6).toFixed(0)+"M"; draw(); });
  (function(){ const v=Math.pow(10,+$("lrM").value);
    $("lrMv").textContent= v>=1e9?(v/1e9).toFixed(1)+"B":(v/1e6).toFixed(0)+"M"; })();
  draw();
})();

/* =========================================================
   30 · QUANTIZATION  (Lesson 99)
   ========================================================= */
(function quant(){
  const cv=$("qzCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, GB=1e9;
  const NF4=[-1.0,-0.6961928,-0.52507305,-0.39491749,-0.28444138,-0.18477343,-0.09105004,0.0,
             0.07958030,0.16093020,0.24611230,0.33791524,0.44070983,0.56261700,0.72295684,1.0];
  function quantize(w, fmt, block){
    const out=new Float64Array(w.length);
    for(let s=0;s<w.length;s+=block){
      const e=Math.min(w.length,s+block);
      let amax=0; for(let i=s;i<e;i++) amax=Math.max(amax,Math.abs(w[i]));
      if(amax===0){ continue; }
      if(fmt==="nf4"){
        for(let i=s;i<e;i++){
          const t=w[i]/amax; let best=NF4[0], bd=Infinity;
          for(const lv of NF4){ const dd=Math.abs(lv-t); if(dd<bd){ bd=dd; best=lv; } }
          out[i]=best*amax;
        }
      } else {
        const levels=fmt==="int8"?127:7;
        const sc=amax/levels;
        for(let i=s;i<e;i++) out[i]=Math.round(w[i]/sc)*sc;
      }
    }
    return out;
  }
  function draw(){
    const fmt=$("qzF").value, block=+$("qzB").value, out=+$("qzO").value, P=Math.pow(10,+$("qzM").value);
    seed=777001;
    const N=4096, w=new Float64Array(N);
    for(let i=0;i<N;i++) w[i]=gauss();
    if(out>0){ for(let i=0;i<N;i+=512) w[i]=out*(rnd()>0.5?1:-1); }   // outlier channels
    const q=quantize(w,fmt,block);
    let se=0, sw=0; for(let i=0;i<N;i++){ se+=(w[i]-q[i])**2; sw+=w[i]*w[i]; }
    const rel=Math.sqrt(se/sw);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const hx=20,hy=44,hw=440,hh=180, span=Math.max(4,out||0)+0.5;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(hx+.5,hy+.5,hw,hh);
    const B=90, bins=new Array(B).fill(0);
    for(let i=0;i<N;i++){ let t=(w[i]+span)/(2*span); t=Math.max(0,Math.min(0.999,t)); bins[(t*B)|0]++; }
    const bm=Math.max.apply(null,bins)||1;
    bins.forEach((b,i)=>{ const bw=hw/B, hgt=(Math.log10(1+b)/Math.log10(1+bm))*(hh-8);
      ctx.fillStyle=C.rule2; ctx.fillRect(hx+i*bw, hy+hh-hgt, bw-0.5, hgt); });
    const levels = fmt==="nf4" ? NF4 : (()=>{ const n=fmt==="int8"?127:7, a=[];
      for(let i=-n;i<=n;i++) a.push(i/n); return a; })();
    const amax=Math.max.apply(null, Array.from(w.slice(0,block)).map(Math.abs));
    levels.forEach(lv=>{
      const X=hx+((lv*amax+span)/(2*span))*hw;
      if(X<hx||X>hx+hw) return;
      ctx.strokeStyle= fmt==="nf4"?C.verify:C.signal; ctx.globalAlpha=.75; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(X,hy); ctx.lineTo(X,hy+hh); ctx.stroke(); ctx.globalAlpha=1;
    });
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("weight distribution (log counts) with quantization levels for the first block", hx, 30);
    ctx.fillText("\u2212"+span.toFixed(1), hx, hy+hh+16);
    ctx.textAlign="right"; ctx.fillText("+"+span.toFixed(1), hx+hw, hy+hh+16); ctx.textAlign="left";
    const bits = fmt==="int8"?8:4;
    const overhead = 16/block + (fmt==="nf4" ? 8/(block*256) : 0);
    const eff = bits+overhead;
    const sizes=[["fp16",P*2],["quantized",P*eff/8]];
    sizes.forEach((s,i)=>{
      const y=60+i*54, bw=(s[1]/(P*2))*220;
      ctx.fillStyle= i?C.verify:C.rule2; ctx.globalAlpha=.72;
      ctx.fillRect(500,y,Math.max(2,bw),26); ctx.globalAlpha=1;
      ctx.fillStyle=C.chalk; ctx.fillText(s[0]+"  "+(s[1]/GB).toFixed(0)+" GB", 500, y-6);
    });
    ctx.fillStyle=C.mute;
    ctx.fillText("effective "+eff.toFixed(2)+" bits/param", 500, 190);
    ctx.fillStyle= rel>0.15?C.warn:C.verify;
    ctx.fillText("RMS error "+(rel*100).toFixed(2)+"%", 500, 212);
    $("qzOut").innerHTML =
      '<span class="k">format</span> <b>'+fmt.toUpperCase()+'</b> &nbsp; <span class="k">effective bits</span> <b>'+eff.toFixed(2)+
      '</b> &nbsp; <span class="k">'+(P/1e9).toFixed(0)+'B model</span> '+(P*2/GB).toFixed(0)+' GB \u2192 <b style="color:'+C.verify+'">'+
      (P*eff/8/GB).toFixed(0)+' GB</b> &nbsp; <span class="k">RMS error</span> <b style="color:'+(rel>0.15?C.warn:C.verify)+'">'+
      (rel*100).toFixed(2)+'%</b><br><span class="k">'+
      (out>0
        ? 'With an outlier of magnitude '+out.toFixed(1)+' in each block, the block scale is set by that one value and every normal weight is crushed into the levels near zero. Error jumps to '+
          (rel*100).toFixed(1)+'%. This is exactly the activation-outlier problem that breaks naive INT8 above ~7B parameters \u2014 shrink the block size and watch the error recover.'
        : fmt==="nf4"
        ? 'NF4 places its 16 levels at the quantiles of a normal distribution, so each level is equally likely for normally-distributed weights \u2014 information-theoretically optimal for this data. Compare against INT4, whose levels are evenly spaced and therefore waste resolution in the sparse tails.'
        : 'Uniform levels are evenly spaced regardless of where the mass is. Switch to NF4 at the same 4 bits and the error falls, for free \u2014 the only change is where the 16 levels sit.')+
      ' Smaller blocks track local scale better but cost more scale constants: '+(16/block).toFixed(2)+' extra bits/param here.</span>';
  }
  $("qzF").addEventListener("change",draw);
  $("qzB").addEventListener("input",()=>{ $("qzBv").textContent=$("qzB").value; draw(); });
  $("qzO").addEventListener("input",()=>{ $("qzOv").textContent=(+$("qzO").value).toFixed(1); draw(); });
  $("qzM").addEventListener("input",()=>{ $("qzMv").textContent=(Math.pow(10,+$("qzM").value)/1e9).toFixed(0)+"B"; draw(); });
  $("qzMv").textContent=(Math.pow(10,+$("qzM").value)/1e9).toFixed(0)+"B";
  draw();
})();

/* =========================================================
   31 · THE ELBO TRADE-OFF  (Lesson 103)
   ========================================================= */
(function vae(){
  const cv=$("vaCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  /* Exact optimum for a Gaussian encoder + identity decoder of precision lam:
     mu_k = lam*x_k/(lam+beta),  sigma^2 = beta/(lam+beta).  Derived, not fitted. */
  function draw(){
    const beta=Math.pow(10,+$("vaB").value), K=+$("vaK").value, lam=+$("vaP").value;
    const xs=[]; for(let k=0;k<K;k++) xs.push(-3+6*k/(K-1||1));
    const mu=xs.map(x=>lam*x/(lam+beta)), s2=beta/(lam+beta), sd=Math.sqrt(s2);
    let rec=0, kl=0;
    for(let k=0;k<K;k++){
      rec += 0.5*lam*((xs[k]-mu[k])**2 + s2);
      kl  += 0.5*(mu[k]*mu[k] + s2 - Math.log(s2) - 1);
    }
    rec/=K; kl/=K;
    /* mutual information I(k;z) = H(z) - H(z|k), on a grid */
    const G=800, lo=-4.5, hi=4.5, dx=(hi-lo)/G;
    let Hz=0;
    for(let i=0;i<G;i++){
      const z=lo+i*dx; let p=0;
      for(let k=0;k<K;k++) p += Math.exp(-((z-mu[k])**2)/(2*s2))/Math.sqrt(2*Math.PI*s2)/K;
      if(p>1e-12) Hz -= p*Math.log(p)*dx;
    }
    const Hzk=0.5*Math.log(2*Math.PI*Math.E*s2);
    const mi=Math.max(0,(Hz-Hzk)/Math.LN2);        // bits
    const miMax=Math.log2(K);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=40,R=W-30,TOP=48,BOT=H-70;
    const px=z=>L+((z-lo)/(hi-lo))*(R-L);
    let pmax=1/Math.sqrt(2*Math.PI*s2);
    const py=p=>BOT-(p/Math.max(pmax,0.42))*(BOT-TOP);
    /* prior */
    ctx.beginPath();
    for(let i=0;i<=G;i++){ const z=lo+i*dx, p=Math.exp(-z*z/2)/Math.sqrt(2*Math.PI);
      const X=px(z),Y=py(p); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
    ctx.strokeStyle=C.rule2; ctx.lineWidth=1.6; ctx.setLineDash([5,4]); ctx.stroke(); ctx.setLineDash([]);
    /* posteriors */
    for(let k=0;k<K;k++){
      ctx.beginPath();
      for(let i=0;i<=G;i++){ const z=lo+i*dx;
        const p=Math.exp(-((z-mu[k])**2)/(2*s2))/Math.sqrt(2*Math.PI*s2);
        const X=px(z),Y=py(p); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle= mi<0.15 ? C.warn : C.tensor; ctx.lineWidth=1.8;
      ctx.globalAlpha=.85; ctx.stroke(); ctx.globalAlpha=1;
    }
    ctx.strokeStyle=C.rule; ctx.beginPath(); ctx.moveTo(L,BOT); ctx.lineTo(R,BOT); ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("latent z \u2014 one posterior q(z|x) per data cluster",L,30);
    ctx.fillStyle=C.rule2; ctx.fillText("dashed = prior N(0,1)",L,BOT+20);
    /* information bar */
    const bx=L, by=BOT+34, bw=R-L;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(bx+.5,by+.5,bw,16);
    ctx.fillStyle= mi<0.15?C.warn:C.verify; ctx.globalAlpha=.75;
    ctx.fillRect(bx,by,bw*(mi/miMax),16); ctx.globalAlpha=1;
    ctx.fillStyle=C.chalk;
    ctx.fillText("latent information "+mi.toFixed(2)+" / "+miMax.toFixed(2)+" bits", bx+6, by+13);
    $("vaOut").innerHTML =
      '<span class="k">\u03b2</span> <b>'+beta.toFixed(2)+'</b> &nbsp; <span class="k">reconstruction</span> <b>'+rec.toFixed(3)+
      '</b> &nbsp; <span class="k">KL</span> <b>'+kl.toFixed(3)+'</b> &nbsp; <span class="k">\u2212ELBO</span> <b>'+(rec+beta*kl).toFixed(3)+
      '</b> &nbsp; <span class="k">\u03c3</span> '+sd.toFixed(3)+'<br>'+
      (mi<0.15
        ? '<span style="color:'+C.warn+'">POSTERIOR COLLAPSE. Every q(z|x) has become the prior, so z carries '+mi.toFixed(2)+
          ' bits about which cluster the input came from \u2014 essentially nothing. The KL term is minimised, the loss looks fine, and the latent is decorative. Watch the KL, not the total.</span>'
        : mi>miMax*0.9 && beta<0.2
        ? '<span class="k">At tiny \u03b2 the posteriors are sharp and spread far apart, so the latent is maximally informative \u2014 but the aggregate no longer matches the prior, so sampling z~N(0,1) lands in gaps the decoder has never seen. That is the plain autoencoder failure from Lesson 102.</span>'
        : '<span style="color:'+C.verify+'">Balanced: posteriors are distinguishable AND collectively resemble the prior, which is exactly what makes sampling work. The closed form here is \u03bc\u2096 = \u03bbx\u2096/(\u03bb+\u03b2) and \u03c3\u00b2 = \u03b2/(\u03bb+\u03b2) \u2014 push \u03b2 up and both collapse to the prior analytically.</span>');
  }
  $("vaB").addEventListener("input",()=>{ $("vaBv").textContent=Math.pow(10,+$("vaB").value).toFixed(2); draw(); });
  $("vaK").addEventListener("input",()=>{ $("vaKv").textContent=$("vaK").value; draw(); });
  $("vaP").addEventListener("input",()=>{ $("vaPv").textContent=(+$("vaP").value).toFixed(1); draw(); });
  $("vaBv").textContent=Math.pow(10,+$("vaB").value).toFixed(2);
  draw();
})();

/* =========================================================
   32 · GAN GRADIENTS  (Lesson 104)
   ========================================================= */
(function gan(){
  const cv=$("gnCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const gap=+$("gnD").value, w=+$("gnW").value, mode=$("gnL").value;
    const G=1200, lo=-6, hi=12, dx=(hi-lo)/G;
    const N=(x,m)=>Math.exp(-((x-m)**2)/(2*w*w))/(w*Math.sqrt(2*Math.PI));
    let js=0, gradMM=0, gradNS=0, mass=0;
    const xsD=[];
    for(let i=0;i<=G;i++){
      const x=lo+i*dx, pr=N(x,0), pg=N(x,gap), m=0.5*(pr+pg);
      if(pr>1e-14) js+=0.5*pr*Math.log(pr/m)*dx;
      if(pg>1e-14) js+=0.5*pg*Math.log(pg/m)*dx;
      const D=pr/(pr+pg+1e-300);
      xsD.push(D);
      /* d/dx log(1-D) and d/dx (-log D), weighted by p_g  */
      const dpr=-(x-0)/(w*w)*pr, dpg=-(x-gap)/(w*w)*pg;
      const dD=(dpr*(pr+pg)-pr*(dpr+dpg))/((pr+pg)**2+1e-300);
      if(pg>1e-14){
        gradMM += pg*(-dD/Math.max(1-D,1e-12))*dx;
        gradNS += pg*(-dD/Math.max(D,1e-12))*dx;
        mass += pg*dx;
      }
    }
    const wass=Math.abs(gap);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const L=44,R=W-24,TOP=42,BOT=210;
    const px=x=>L+((x-lo)/(hi-lo))*(R-L);
    const pmax=1/(w*Math.sqrt(2*Math.PI));
    const py=p=>BOT-(p/pmax)*(BOT-TOP);
    [[0,C.tensor,"p_real"],[gap,C.violet,"p_gen"]].forEach(([m,col,lab])=>{
      ctx.beginPath();
      for(let i=0;i<=G;i++){ const x=lo+i*dx, X=px(x), Y=py(N(x,m)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle=col; ctx.lineWidth=2; ctx.stroke();
      ctx.font=MONO; ctx.fillStyle=col; ctx.fillText(lab, px(m)-16, py(pmax)-8);
    });
    ctx.beginPath();
    xsD.forEach((D,i)=>{ const X=px(lo+i*dx), Y=BOT-D*(BOT-TOP); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); });
    ctx.strokeStyle=C.signal; ctx.lineWidth=1.8; ctx.setLineDash([4,3]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle=C.signal; ctx.fillText("optimal D(x)", L+6, TOP+14);
    ctx.strokeStyle=C.rule; ctx.beginPath(); ctx.moveTo(L,BOT); ctx.lineTo(R,BOT); ctx.stroke();
    /* divergence bars */
    const by=250;
    const grad = mode==="mm" ? Math.abs(gradMM/(mass||1))
               : mode==="ns" ? Math.abs(gradNS/(mass||1)) : 1.0;
    const bars=[["JS divergence", js/Math.LN2, 1.0, C.warn],
                ["Wasserstein-1", wass, 8, C.verify],
                ["generator gradient", Math.min(grad,6), 6, C.signal]];
    bars.forEach((b,i)=>{
      const x0=L+i*236, bw=200;
      ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,by+.5,bw,18);
      ctx.fillStyle=b[3]; ctx.globalAlpha=.75;
      ctx.fillRect(x0,by,bw*Math.min(1,b[1]/b[2]),18); ctx.globalAlpha=1;
      ctx.fillStyle=C.mute; ctx.font=MONO;
      ctx.fillText(b[0],x0,by-6);
      ctx.fillStyle=C.chalk; ctx.fillText(b[1].toFixed(3),x0+bw+8,by+14);
    });
    const jsBits=js/Math.LN2;
    $("gnOut").innerHTML =
      '<span class="k">JS divergence</span> <b>'+jsBits.toFixed(4)+'</b> of 1.0 max &nbsp; '+
      '<span class="k">Wasserstein-1</span> <b>'+wass.toFixed(2)+'</b> &nbsp; '+
      '<span class="k">generator gradient</span> <b style="color:'+(grad<0.05?C.warn:C.signal)+'">'+grad.toFixed(4)+'</b>'+
      '<br>'+
      (jsBits>0.985
        ? '<span style="color:'+C.warn+'">The distributions barely overlap, so JS has saturated at its maximum of 1 bit and its gradient is <b>zero</b> \u2014 moving p_gen closer changes JS not at all. '+
          (mode==="w"
            ? 'Wasserstein, however, reads '+wass.toFixed(2)+' and falls smoothly as the gap closes. That is precisely why WGAN exists.'
            : 'Switch the loss to Wasserstein and watch the third bar stay useful while JS stays pinned.')+'</span>'
        : mode==="mm" && grad<0.3
        ? '<span style="color:'+C.warn+'">The minimax loss has saturated: D is confident, so log(1\u2212D(G(z))) is flat and the generator gets almost no signal exactly when it most needs it. Switch to non-saturating and compare the same configuration.</span>'
        : '<span class="k">Widen the gap and watch JS climb to 1 bit and stick there while Wasserstein keeps rising. A divergence that is constant wherever the supports are disjoint cannot guide a generator \u2014 and in pixel space the supports are essentially always disjoint.</span>');
  }
  $("gnL").addEventListener("change",draw);
  $("gnD").addEventListener("input",()=>{ $("gnDv").textContent=(+$("gnD").value).toFixed(1); draw(); });
  $("gnW").addEventListener("input",()=>{ $("gnWv").textContent=(+$("gnW").value).toFixed(2); draw(); });
  draw();
})();

/* =========================================================
   shared: 2-D Gaussian-mixture diffusion with an EXACT score
   ========================================================= */
function _gmmDiffusion(){
  const T=1000;
  function schedules(kind){
    const abar=new Float64Array(T+1);
    if(kind==="cosine"){
      const s=0.008, f=t=>Math.pow(Math.cos((t/T+s)/(1+s)*Math.PI/2),2);
      const f0=f(0);
      for(let t=0;t<=T;t++) abar[t]=Math.max(1e-6,Math.min(1,f(t)/f0));
    } else {
      let c=1;
      abar[0]=1;
      for(let t=1;t<=T;t++){ const b=1e-4+(0.02-1e-4)*(t-1)/(T-1); c*=(1-b); abar[t]=c; }
    }
    return abar;
  }
  /* score of p_t for a mixture of isotropic Gaussians, in closed form */
  function score(x,y,modes,s0,ab){
    const v=ab*s0*s0+(1-ab);
    let wsum=0, sx=0, sy=0, best=-Infinity;
    const lp=modes.map(m=>{
      const dx=x-Math.sqrt(ab)*m[0], dy=y-Math.sqrt(ab)*m[1];
      const l=-(dx*dx+dy*dy)/(2*v);
      if(l>best) best=l;
      return l;
    });
    modes.forEach((m,j)=>{
      const wj=Math.exp(lp[j]-best); wsum+=wj;
      sx+=wj*(Math.sqrt(ab)*m[0]-x)/v; sy+=wj*(Math.sqrt(ab)*m[1]-y)/v;
    });
    return [sx/wsum, sy/wsum];
  }
  return {T, schedules, score};
}

/* =========================================================
   33 · FORWARD AND REVERSE DIFFUSION  (Lesson 107)
   ========================================================= */
(function diff(){
  const cv=$("dfCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const {T, schedules, score}=_gmmDiffusion();
  const MODES=[[-1.5,-1.1],[1.5,-1.1],[0,1.6],[-1.9,0.9],[1.9,0.9]], S0=0.16;
  function sampleData(n){
    const out=[];
    for(let i=0;i<n;i++){ const m=MODES[(rnd()*MODES.length)|0];
      out.push([m[0]+gauss()*S0, m[1]+gauss()*S0]); }
    return out;
  }
  function reverse(K, abar, ddim){
    const pts=[];
    for(let i=0;i<300;i++){
      let x=gauss(), y=gauss();
      for(let k=K;k>=1;k--){
        const t=Math.round(k*T/K), tp=Math.round((k-1)*T/K);
        const ab=abar[t], abp=abar[Math.max(tp,0)];
        const s=score(x,y,MODES,S0,ab);
        const ex=-Math.sqrt(1-ab)*s[0], ey=-Math.sqrt(1-ab)*s[1];   // eps = -sqrt(1-ab)*score
        const x0x=(x-Math.sqrt(1-ab)*ex)/Math.sqrt(ab);
        const x0y=(y-Math.sqrt(1-ab)*ey)/Math.sqrt(ab);
        if(ddim){
          x=Math.sqrt(abp)*x0x+Math.sqrt(1-abp)*ex;
          y=Math.sqrt(abp)*x0y+Math.sqrt(1-abp)*ey;
        } else {
          const sig=Math.sqrt(Math.max(0,(1-abp)/(1-ab)*(1-ab/abp)));
          const dirx=Math.sqrt(Math.max(0,1-abp-sig*sig))*ex;
          const diry=Math.sqrt(Math.max(0,1-abp-sig*sig))*ey;
          x=Math.sqrt(abp)*x0x+dirx+(tp>0?sig*gauss():0);
          y=Math.sqrt(abp)*x0y+diry+(tp>0?sig*gauss():0);
        }
      }
      pts.push([x,y]);
    }
    return pts;
  }
  function panel(x0,y0,s,pts,col,title){
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,s,s);
    ctx.font=MONO; ctx.fillStyle=C.mute; ctx.fillText(title,x0,y0-8);
    const sc=s/6.4;
    pts.forEach(p=>{
      const X=x0+s/2+p[0]*sc, Y=y0+s/2-p[1]*sc;
      if(X<x0||X>x0+s||Y<y0||Y>y0+s) return;
      ctx.beginPath(); ctx.arc(X,Y,1.7,0,7); ctx.fillStyle=col; ctx.globalAlpha=.75; ctx.fill(); ctx.globalAlpha=1;
    });
  }
  function draw(){
    seed=31337;
    const t=+$("dfT").value, kind=$("dfS").value, ddim=$("dfM").value==="ddim", K=+$("dfK").value;
    const abar=schedules(kind), ab=abar[Math.min(T,Math.max(0,t))];
    const x0=sampleData(400);
    const xt=x0.map(p=>[Math.sqrt(ab)*p[0]+Math.sqrt(1-ab)*gauss(),
                        Math.sqrt(ab)*p[1]+Math.sqrt(1-ab)*gauss()]);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const s=190;
    panel(20,40,s,x0,C.tensor,"x\u2080 \u00b7 data");
    panel(236,40,s,xt,C.warn,"x_t \u00b7 noised to t="+t);
    const rev=reverse(K,abar,ddim);
    panel(452,40,s,rev,C.verify,"reverse \u00b7 "+K+" steps "+(ddim?"DDIM":"DDPM"));
    /* schedule curves */
    const gx=676,gy=40,gw=64,gh=190;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(gx+.5,gy+.5,gw,gh);
    ctx.fillStyle=C.mute; ctx.fillText("\u0101_t",gx,gy-8);
    ["linear","cosine"].forEach(kk=>{
      const ab2=schedules(kk);
      ctx.beginPath();
      for(let i=0;i<=T;i+=5){ const X=gx+(i/T)*gw, Y=gy+gh-ab2[i]*gh;
        i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle= kk===kind?C.signal:C.rule2; ctx.lineWidth= kk===kind?2:1; ctx.stroke();
    });
    ctx.strokeStyle="#fff"; ctx.setLineDash([2,2]);
    ctx.beginPath(); ctx.moveTo(gx+(t/T)*gw,gy); ctx.lineTo(gx+(t/T)*gw,gy+gh); ctx.stroke(); ctx.setLineDash([]);
    /* quality: mean distance to the nearest true mode */
    let d=0; rev.forEach(p=>{ let best=1e9;
      MODES.forEach(m=>{ const q=Math.hypot(p[0]-m[0],p[1]-m[1]); if(q<best) best=q; }); d+=best; });
    d/=rev.length;
    // a PERFECT sample has mean distance S0*sqrt(pi/2) -- the mean of a 2-D Rayleigh.
    // Below that means under-dispersed (samples piled on the mode centres), not better.
    const ideal=S0*Math.sqrt(Math.PI/2);
    const snr=ab/(1-ab);
    $("dfOut").innerHTML =
      '<span class="k">\u0101_t</span> <b>'+ab.toFixed(4)+'</b> &nbsp; <span class="k">SNR</span> <b>'+snr.toFixed(3)+
      '</b> &nbsp; <span class="k">signal kept</span> '+(100*Math.sqrt(ab)).toFixed(1)+'% &nbsp; '+
      '<span class="k">spread</span> <b style="color:'+(Math.abs(d-ideal)<0.03?C.verify:C.warn)+'">'+d.toFixed(3)+
      '</b> (a perfect sample gives '+ideal.toFixed(3)+')<br>'+
      '<span class="k">The score here is computed in closed form from the mixture, so the reverse process is <b>exact</b> \u2014 nothing is trained and nothing is faked. '+
      (d<ideal-0.03
        ? 'At '+K+' steps the samples are <em>under-dispersed</em>: they pile onto the mode centres instead of reproducing the spread around them. Fewer steps does not mean \u201cmisses the modes\u201d \u2014 it means the distribution is too tight.'
        : 'The spread matches the data, so this sampler is reproducing the distribution and not merely finding the modes.')+
      ' Worth knowing: because the score is exact here, DDPM and DDIM converge at almost the same step count. '+
      'DDIM\u2019s real advantage appears once the score is a <em>learned approximation</em> \u2014 being deterministic, it does not compound sampling noise, so it needs far fewer network evaluations. '+
      'This demo isolates the maths and therefore cannot show that.'+
      ' Switch schedules and watch where \u0101_t crosses SNR = 1: the linear schedule destroys the signal much earlier.</span>';
  }
  ["dfS","dfM"].forEach(id=>$(id).addEventListener("change",draw));
  $("dfT").addEventListener("input",()=>{ $("dfTv").textContent=$("dfT").value; draw(); });
  $("dfK").addEventListener("input",()=>{ $("dfKv").textContent=$("dfK").value; draw(); });
  draw();
})();

/* =========================================================
   34 · CLASSIFIER-FREE GUIDANCE  (Lesson 108)
   ========================================================= */
(function cfg(){
  const cv=$("cgCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const {T, schedules, score}=_gmmDiffusion();
  const A=[[-1.7,-1.0],[-1.5,1.3],[-2.2,0.3]];
  const B=[[1.7,-1.0],[1.5,1.3],[2.2,0.3]];
  const ALL=A.concat(B), S0=0.17;
  function sample(n,w,cls){
    const abar=schedules("cosine"), K=60, cond= cls===0?A:B, pts=[];
    for(let i=0;i<n;i++){
      let x=gauss(), y=gauss();
      for(let k=K;k>=1;k--){
        const t=Math.round(k*T/K), tp=Math.round((k-1)*T/K);
        const ab=abar[t], abp=abar[Math.max(tp,0)];
        const sc=score(x,y,cond,S0,ab), su=score(x,y,ALL,S0,ab);
        const gx=su[0]+w*(sc[0]-su[0]), gy=su[1]+w*(sc[1]-su[1]);
        const ex=-Math.sqrt(1-ab)*gx, ey=-Math.sqrt(1-ab)*gy;
        const x0x=(x-Math.sqrt(1-ab)*ex)/Math.sqrt(ab);
        const x0y=(y-Math.sqrt(1-ab)*ey)/Math.sqrt(ab);
        x=Math.sqrt(abp)*x0x+Math.sqrt(1-abp)*ex;
        y=Math.sqrt(abp)*x0y+Math.sqrt(1-abp)*ey;
      }
      pts.push([x,y]);
    }
    return pts;
  }
  function draw(){
    seed=8080;
    const w=+$("cgW").value, cls=+$("cgC").value, n=+$("cgN").value;
    const pts=sample(Math.min(n,700),w,cls);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const s=250, x0=180, y0=36, sc=s/7;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,s,s);
    const P=(p)=>[x0+s/2+p[0]*sc, y0+s/2-p[1]*sc];
    [[A,C.signal,"target"],[B,C.rule2,"other class"]].forEach(([ms,col],idx)=>{
      const use = (cls===0)? (idx===0?A:B) : (idx===0?B:A);
      use.forEach(m=>{ const q=P(m);
        ctx.strokeStyle= idx===0?C.signal:C.rule2; ctx.lineWidth=1.6;
        ctx.beginPath(); ctx.arc(q[0],q[1],16,0,7); ctx.stroke(); });
    });
    pts.forEach(p=>{ const q=P(p);
      if(q[0]<x0||q[0]>x0+s||q[1]<y0||q[1]>y0+s) return;
      ctx.beginPath(); ctx.arc(q[0],q[1],1.9,0,7);
      ctx.fillStyle=C.verify; ctx.globalAlpha=.55; ctx.fill(); ctx.globalAlpha=1; });
    ctx.font=MONO; ctx.fillStyle=C.signal; ctx.fillText("\u25cb target-class modes",x0,y0-10);
    ctx.fillStyle=C.rule2; ctx.fillText("\u25cb other class",x0+190,y0-10);
    /* metrics */
    const target= cls===0?A:B, other= cls===0?B:A;
    let hit=0; const counts=new Array(target.length).fill(0);
    pts.forEach(p=>{
      let bi=-1,bd=1e9, oi=1e9;
      target.forEach((m,j)=>{ const d=Math.hypot(p[0]-m[0],p[1]-m[1]); if(d<bd){bd=d;bi=j;} });
      other.forEach(m=>{ const d=Math.hypot(p[0]-m[0],p[1]-m[1]); if(d<oi) oi=d; });
      if(bd<oi){ hit++; counts[bi]++; }
    });
    const adherence=hit/pts.length;
    let ent=0; const tot=counts.reduce((a,b)=>a+b,0)||1;
    counts.forEach(c=>{ const q=c/tot; if(q>1e-9) ent-=q*Math.log2(q); });
    const entMax=Math.log2(target.length);
    /* bars */
    [["prompt adherence",adherence,1,C.signal],["mode diversity",ent,entMax,C.tensor]].forEach((b,i)=>{
      const bx=470, by=70+i*70, bw=260;
      ctx.strokeStyle=C.rule2; ctx.strokeRect(bx+.5,by+.5,bw,20);
      ctx.fillStyle=b[3]; ctx.globalAlpha=.75; ctx.fillRect(bx,by,bw*Math.min(1,b[1]/b[2]),20); ctx.globalAlpha=1;
      ctx.fillStyle=C.mute; ctx.fillText(b[0],bx,by-6);
      ctx.fillStyle=C.chalk; ctx.fillText((b[1]).toFixed(2)+" / "+b[2].toFixed(2),bx+6,by+15);
    });
    $("cgOut").innerHTML =
      '<span class="k">w</span> <b>'+w.toFixed(1)+'</b> &nbsp; <span class="k">prompt adherence</span> <b>'+(adherence*100).toFixed(0)+
      '%</b> &nbsp; <span class="k">mode diversity</span> <b>'+ent.toFixed(2)+'</b> of '+entMax.toFixed(2)+' bits<br>'+
      (w<0.4
        ? '<span style="color:'+C.warn+'">At w\u22480 you are sampling the unconditional distribution \u2014 half the samples land on the wrong class entirely. The condition is being ignored.</span>'
        : w>7
        ? '<span style="color:'+C.warn+'">High guidance: adherence is near perfect but diversity has collapsed \u2014 samples pile onto whichever mode the guided score favours, and they overshoot past the mode centres. In image space this is exactly what over-saturation and \u201cfried\u201d high-CFG outputs are.</span>'
        : '<span style="color:'+C.verify+'">The useful band. Guidance extrapolates <em>past</em> the conditional prediction, away from the unconditional one \u2014 which buys prompt adherence and spends diversity. Sweep w from 0 to 15 and watch the two bars trade against each other.</span>');
  }
  ["cgC"].forEach(id=>$(id).addEventListener("change",draw));
  $("cgW").addEventListener("input",()=>{ $("cgWv").textContent=(+$("cgW").value).toFixed(1); draw(); });
  $("cgN").addEventListener("input",()=>{ $("cgNv").textContent=$("cgN").value; draw(); });
  draw();
})();

/* =========================================================
   35 · CONTRASTIVE ALIGNMENT  (Lesson 109)
   ========================================================= */
(function clip(){
  const cv=$("clCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, D=32;
  function draw(){
    seed=5150;
    const N=+$("clN").value, tau=Math.pow(10,+$("clT").value), q=+$("clQ").value;
    const I=[],Tx=[];
    for(let i=0;i<N;i++){
      const a=new Float64Array(D), b=new Float64Array(D);
      for(let d=0;d<D;d++){ a[d]=gauss(); }
      let na=Math.hypot.apply(null,Array.from(a))||1;
      for(let d=0;d<D;d++) a[d]/=na;
      for(let d=0;d<D;d++) b[d]=q*a[d]+Math.sqrt(1-q*q)*gauss()/Math.sqrt(D);
      let nb=Math.hypot.apply(null,Array.from(b))||1;
      for(let d=0;d<D;d++) b[d]/=nb;
      I.push(a); Tx.push(b);
    }
    const S=[];
    for(let i=0;i<N;i++){ const r=new Float64Array(N);
      for(let j=0;j<N;j++){ let s=0; for(let d=0;d<D;d++) s+=I[i][d]*Tx[j][d]; r[j]=s; }
      S.push(r); }
    let loss=0, top1=0;
    for(let i=0;i<N;i++){
      const z=S[i].map(v=>v/tau), mx=Math.max.apply(null,Array.from(z));
      const ex=z.map(v=>Math.exp(v-mx)), Z=ex.reduce((a,b)=>a+b,0);
      loss += -Math.log(ex[i]/Z);
      let bi=0; for(let j=1;j<N;j++) if(S[i][j]>S[i][bi]) bi=j;
      if(bi===i) top1++;
    }
    loss/=N; top1/=N;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const s=Math.min(250, 260), x0=40, y0=48, cell=s/N;
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){
      const v=(S[i][j]+1)/2;
      ctx.fillStyle= i===j ? "rgba(147,217,123,"+(0.15+0.85*v).toFixed(3)+")"
                           : "rgba(91,200,230,"+(0.05+0.7*v).toFixed(3)+")";
      ctx.fillRect(x0+j*cell, y0+i*cell, Math.max(1,cell-0.6), Math.max(1,cell-0.6));
    }
    ctx.strokeStyle=C.verify; ctx.lineWidth=1.4;
    ctx.strokeRect(x0+.5,y0+.5,s,s);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("similarity matrix \u00b7 images \u00d7 texts",x0,32);
    ctx.fillStyle=C.verify; ctx.fillText("green diagonal = the matching pairs",x0,y0+s+18);
    /* row softmax for row 0 */
    const rx=340, ry=48;
    ctx.fillStyle=C.mute; ctx.fillText("softmax of row 1 at \u03c4 = "+tau.toFixed(3),rx,32);
    const z=S[0].map(v=>v/tau), mx=Math.max.apply(null,Array.from(z));
    const ex=z.map(v=>Math.exp(v-mx)), Z=ex.reduce((a,b)=>a+b,0);
    const p=ex.map(v=>v/Z), pm=Math.max.apply(null,p);
    p.forEach((v,j)=>{
      const bw=(W-rx-40)/N, hgt=(v/pm)*150;
      ctx.fillStyle= j===0?C.verify:C.rule2; ctx.globalAlpha=.85;
      ctx.fillRect(rx+j*bw, ry+150-hgt, Math.max(2,bw-2), hgt); ctx.globalAlpha=1;
    });
    ctx.strokeStyle=C.rule; ctx.beginPath();
    ctx.moveTo(rx,ry+150); ctx.lineTo(rx+(W-rx-40),ry+150); ctx.stroke();
    let ent=0; p.forEach(v=>{ if(v>1e-12) ent-=v*Math.log2(v); });
    ctx.fillStyle=C.mute; ctx.fillText("entropy "+ent.toFixed(2)+" / "+Math.log2(N).toFixed(2)+" bits", rx, ry+178);
    ctx.fillStyle=C.chalk; ctx.fillText("p(correct) = "+p[0].toFixed(3), rx, ry+198);
    $("clOut").innerHTML =
      '<span class="k">InfoNCE loss</span> <b>'+loss.toFixed(3)+'</b> (chance = ln N = '+Math.log(N).toFixed(2)+
      ') &nbsp; <span class="k">retrieval top-1</span> <b>'+(top1*100).toFixed(0)+'%</b> &nbsp; '+
      '<span class="k">\u03c4</span> '+tau.toFixed(3)+'<br>'+
      (tau<0.03
        ? '<span style="color:'+C.warn+'">A very low temperature makes the softmax extremely peaked, so the loss is dominated by the single hardest negative. Gradients get large and training becomes unstable \u2014 which is why CLIP learns \u03c4 rather than fixing it, and clips it.</span>'
        : tau>0.5
        ? '<span style="color:'+C.warn+'">A high temperature flattens everything: the loss approaches ln N regardless of how good the alignment is, so there is almost no gradient distinguishing the correct pair from the rest.</span>'
        : '<span class="k">Every off-diagonal cell is a negative, so batch size <em>is</em> a hyperparameter of this loss \u2014 CLIP used 32,768. Drag the batch size up and watch the loss floor rise as ln N: bigger batches mean a harder task and a better signal.</span>');
  }
  $("clN").addEventListener("input",()=>{ $("clNv").textContent=$("clN").value; draw(); });
  $("clT").addEventListener("input",()=>{ $("clTv").textContent=Math.pow(10,+$("clT").value).toFixed(3); draw(); });
  $("clQ").addEventListener("input",()=>{ $("clQv").textContent=(+$("clQ").value).toFixed(2); draw(); });
  $("clTv").textContent=Math.pow(10,+$("clT").value).toFixed(3);
  draw();
})();

/* =========================================================
   36 · MESSAGE PASSING AND OVER-SMOOTHING  (Lesson 111)
   ========================================================= */
(function gnn(){
  const cv=$("gxCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height, N=66;
  function build(K){
    seed=606060;
    const comm=[], pos=[];
    for(let i=0;i<N;i++) comm.push(i%K);
    for(let i=0;i<N;i++){
      const c=comm[i], base=2*Math.PI*c/K, ang=base+(rnd()-0.5)*1.5, r=0.55+rnd()*0.42;
      pos.push([Math.cos(ang)*r, Math.sin(ang)*r]);
    }
    const adj=[]; for(let i=0;i<N;i++) adj.push([]);
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
      const p = comm[i]===comm[j] ? 0.16 : 0.012;
      if(rnd()<p){ adj[i].push(j); adj[j].push(i); }
    }
    for(let i=0;i<N;i++) if(!adj[i].length){          // no isolated nodes
      let j=(i+1)%N; while(comm[j]!==comm[i]) j=(j+1)%N;
      adj[i].push(j); adj[j].push(i);
    }
    const feat=[];
    for(let i=0;i<N;i++){
      const c=comm[i], a=2*Math.PI*c/K;
      feat.push([Math.cos(a)+gauss()*0.34, Math.sin(a)+gauss()*0.34]);
    }
    return {comm,pos,adj,feat};
  }
  function propagate(g,L,mode,res){
    let h=g.feat.map(f=>f.slice());
    for(let l=0;l<L;l++){
      const nh=[];
      for(let i=0;i<N;i++){
        let sx=0,sy=0;
        const di=g.adj[i].length+1;
        // include self-loop
        const nbrs=g.adj[i].concat([i]);
        nbrs.forEach(j=>{
          const dj=g.adj[j].length+1;
          const w = mode==="gcn" ? 1/Math.sqrt(di*dj) : mode==="mean" ? 1/di : 1;
          sx+=w*h[j][0]; sy+=w*h[j][1];
        });
        nh.push(res ? [0.5*h[i][0]+0.5*sx, 0.5*h[i][1]+0.5*sy] : [sx,sy]);
      }
      h=nh;
    }
    return h;
  }
  function draw(){
    const L=+$("gxL").value, mode=$("gxA").value, K=+$("gxK").value, res=$("gxR").checked;
    const g=build(K), h=propagate(g,L,mode,res);
    const cols=[C.signal,C.tensor,C.verify,C.violet,C.warn];
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    /* graph */
    const gx=30,gy=44,gs=250;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(gx+.5,gy+.5,gs,gs);
    const P=p=>[gx+gs/2+p[0]*gs*0.45, gy+gs/2-p[1]*gs*0.45];
    ctx.strokeStyle="rgba(42,59,78,.7)"; ctx.lineWidth=0.7;
    for(let i=0;i<N;i++) g.adj[i].forEach(j=>{ if(j<i) return;
      const a=P(g.pos[i]), b=P(g.pos[j]);
      ctx.beginPath(); ctx.moveTo(a[0],a[1]); ctx.lineTo(b[0],b[1]); ctx.stroke(); });
    for(let i=0;i<N;i++){ const a=P(g.pos[i]);
      ctx.beginPath(); ctx.arc(a[0],a[1],3.6,0,7);
      ctx.fillStyle=cols[g.comm[i]%5]; ctx.fill(); }
    ctx.font=MONO; ctx.fillStyle=C.mute; ctx.fillText("graph \u00b7 "+K+" communities",gx,32);
    /* feature scatter */
    const fx=320,fy=44,fs=250;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(fx+.5,fy+.5,fs,fs);
    let mx=0.001; h.forEach(p=>{ mx=Math.max(mx,Math.abs(p[0]),Math.abs(p[1])); });
    h.forEach((p,i)=>{
      const X=fx+fs/2+(p[0]/mx)*fs*0.44, Y=fy+fs/2-(p[1]/mx)*fs*0.44;
      ctx.beginPath(); ctx.arc(X,Y,3.4,0,7);
      ctx.fillStyle=cols[g.comm[i]%5]; ctx.globalAlpha=.85; ctx.fill(); ctx.globalAlpha=1;
    });
    ctx.fillStyle=C.mute; ctx.fillText("node features after "+L+" round"+(L===1?"":"s")+" (rescaled)",fx,32);
    /* Fisher-style separation ratio, scale invariant */
    const cent=[], cnt=[];
    for(let c=0;c<K;c++){ cent.push([0,0]); cnt.push(0); }
    h.forEach((p,i)=>{ cent[g.comm[i]][0]+=p[0]; cent[g.comm[i]][1]+=p[1]; cnt[g.comm[i]]++; });
    for(let c=0;c<K;c++){ cent[c][0]/=cnt[c]||1; cent[c][1]/=cnt[c]||1; }
    let gm=[0,0]; h.forEach(p=>{gm[0]+=p[0]/N; gm[1]+=p[1]/N;});
    let between=0, within=0;
    for(let c=0;c<K;c++) between+=cnt[c]*((cent[c][0]-gm[0])**2+(cent[c][1]-gm[1])**2);
    h.forEach((p,i)=>{ const c=g.comm[i];
      within+=(p[0]-cent[c][0])**2+(p[1]-cent[c][1])**2; });
    const ratio=between/(within+1e-12);
    /* separation bar */
    const bx=600,by=80,bh=200;
    ctx.strokeStyle=C.rule2; ctx.strokeRect(bx+.5,by+.5,50,bh);
    const frac=Math.min(1, Math.log10(1+ratio)/Math.log10(1+8));
    ctx.fillStyle= ratio<0.35?C.warn:C.verify; ctx.globalAlpha=.75;
    ctx.fillRect(bx,by+bh-frac*bh,50,frac*bh); ctx.globalAlpha=1;
    ctx.fillStyle=C.mute; ctx.fillText("separation",bx,by-22); ctx.fillText("(log)",bx,by-6);
    ctx.fillStyle=C.chalk; ctx.fillText(ratio.toFixed(2),bx+2,by+bh+18);
    $("gxOut").innerHTML =
      '<span class="k">layers</span> <b>'+L+'</b> &nbsp; <span class="k">community separation</span> <b style="color:'+
      (ratio<0.35?C.warn:C.verify)+'">'+ratio.toFixed(3)+'</b> (between-class over within-class scatter)<br>'+
      (L===0
        ? '<span class="k">Zero layers: these are the raw node features. Message passing has to improve on this to be worth anything.</span>'
        : ratio<0.35
        ? '<span style="color:'+C.warn+'">OVER-SMOOTHED. After '+L+' rounds of neighbourhood averaging every node has converged towards the same representation and the communities are no longer separable. Depth destroyed the signal it was built to find \u2014 which is why production GNNs are 2 to 4 layers. Tick residual connections and run it again.</span>'
        : L<=4
        ? '<span style="color:'+C.verify+'">Separation has improved over the raw features: each node has absorbed its neighbourhood, and neighbours mostly share a community. This is the useful regime.</span>'
        : '<span class="k">Still separable at '+L+' layers'+(res?' \u2014 the residual connections are holding the original signal in place, exactly as in Lesson 52.':'. Push deeper and watch it go.')+'</span>');
  }
  ["gxA","gxR"].forEach(id=>$(id).addEventListener("change",draw));
  $("gxL").addEventListener("input",()=>{ $("gxLv").textContent=$("gxL").value; draw(); });
  $("gxK").addEventListener("input",()=>{ $("gxKv").textContent=$("gxK").value; draw(); });
  draw();
})();

/* =========================================================
   37 · Q-LEARNING ON A GRIDWORLD  (Lesson 112)
   ========================================================= */
(function rl(){
  const cv=$("rlCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  const CW=9, CH=6;
  const WALLS=new Set(["2,1","2,2","2,3","5,2","5,3","5,4","7,0","7,1"]);
  const GOAL="8,5", PIT="8,4";
  const A=[[0,-1],[0,1],[-1,0],[1,0]], AR=["\u2191","\u2193","\u2190","\u2192"];
  function ok(x,y){ return x>=0&&x<CW&&y>=0&&y<CH&&!WALLS.has(x+","+y); }
  function train(E,g,eps,step){
    seed=424242;
    const Q={};
    const key=(x,y)=>x+","+y;
    for(let x=0;x<CW;x++) for(let y=0;y<CH;y++) if(ok(x,y)) Q[key(x,y)]=[0,0,0,0];
    const alpha=0.25;
    let reached=0;
    for(let e=0;e<E;e++){
      let x=0,y=0;
      for(let t=0;t<120;t++){
        const k=key(x,y);
        let a;
        if(rnd()<eps) a=(rnd()*4)|0;
        else { a=0; for(let i=1;i<4;i++) if(Q[k][i]>Q[k][a]) a=i; }
        let nx=x+A[a][0], ny=y+A[a][1];
        if(!ok(nx,ny)){ nx=x; ny=y; }
        const nk=key(nx,ny);
        let r=step, done=false;
        if(nk===GOAL){ r=1; done=true; reached++; }
        else if(nk===PIT){ r=-1; done=true; }
        const best=done?0:Math.max.apply(null,Q[nk]);
        Q[k][a]+=alpha*(r+g*best-Q[k][a]);
        x=nx; y=ny;
        if(done) break;
      }
    }
    return {Q, reached};
  }
  function draw(){
    const E=+$("rlE").value, g=+$("rlG").value, eps=+$("rlX").value, step=+$("rlS").value;
    const {Q,reached}=train(E,g,eps,step);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const cs=52, ox=(W-CW*cs)/2, oy=48;
    let lo=1e9, hi=-1e9;
    for(const k in Q){ const v=Math.max.apply(null,Q[k]); lo=Math.min(lo,v); hi=Math.max(hi,v); }
    ctx.font=MONO;
    for(let x=0;x<CW;x++) for(let y=0;y<CH;y++){
      const X=ox+x*cs, Y=oy+y*cs, k=x+","+y;
      if(WALLS.has(k)){ ctx.fillStyle=C.slate; ctx.fillRect(X,Y,cs-2,cs-2);
        ctx.strokeStyle=C.rule2; ctx.strokeRect(X+.5,Y+.5,cs-2,cs-2); continue; }
      if(k===GOAL||k===PIT){
        ctx.fillStyle= k===GOAL?"rgba(147,217,123,.35)":"rgba(255,123,135,.35)";
        ctx.fillRect(X,Y,cs-2,cs-2);
        ctx.strokeStyle= k===GOAL?C.verify:C.warn; ctx.strokeRect(X+.5,Y+.5,cs-2,cs-2);
        ctx.fillStyle= k===GOAL?C.verify:C.warn; ctx.textAlign="center";
        ctx.fillText(k===GOAL?"+1":"\u22121", X+cs/2-1, Y+cs/2+4); ctx.textAlign="left";
        continue;
      }
      const v=Math.max.apply(null,Q[k]), t=(v-lo)/((hi-lo)||1);
      ctx.fillStyle="rgba(255,180,84,"+(0.05+0.6*t).toFixed(3)+")";
      ctx.fillRect(X,Y,cs-2,cs-2);
      ctx.strokeStyle=C.rule; ctx.strokeRect(X+.5,Y+.5,cs-2,cs-2);
      let a=0; for(let i=1;i<4;i++) if(Q[k][i]>Q[k][a]) a=i;
      ctx.fillStyle= E>0?C.chalk:C.rule2; ctx.textAlign="center";
      ctx.fillText(AR[a], X+cs/2-1, Y+cs/2+2);
      ctx.fillStyle=C.mute; ctx.font="9px ui-monospace, Menlo, monospace";
      ctx.fillText(v.toFixed(2), X+cs/2-1, Y+cs-8);
      ctx.font=MONO; ctx.textAlign="left";
    }
    ctx.fillStyle=C.verify; ctx.fillText("start \u25b8", ox-52, oy+16);
    ctx.fillStyle=C.mute;
    ctx.fillText("cell shade = max_a Q(s,a) \u00b7 arrow = greedy action", ox, 32);
    /* does the greedy policy reach the goal? */
    let x=0,y=0,steps=0,solved=false;
    for(;steps<80;steps++){
      const k=x+","+y;
      if(k===GOAL){ solved=true; break; }
      if(k===PIT) break;
      let a=0; for(let i=1;i<4;i++) if(Q[k][i]>Q[k][a]) a=i;
      const nx=x+A[a][0], ny=y+A[a][1];
      if(!ok(nx,ny)) break;
      x=nx; y=ny;
    }
    $("rlOut").innerHTML =
      '<span class="k">episodes</span> <b>'+E+'</b> &nbsp; <span class="k">reached the goal in training</span> '+
      reached+' &nbsp; <span class="k">greedy policy</span> <b style="color:'+(solved?C.verify:C.warn)+'">'+
      (solved?"solves it in "+steps+" steps":"does not reach the goal")+'</b><br>'+
      (E===0
        ? '<span class="k">All Q-values are zero, so the greedy policy is arbitrary. Drag the episode slider and watch value propagate <em>backwards</em> from the goal, one cell per sweep \u2014 that is the Bellman backup doing credit assignment.</span>'
        : eps<0.03
        ? '<span style="color:'+C.warn+'">With \u03b5\u2248'+eps.toFixed(2)+' the agent almost never explores, so it locks onto the first path it stumbles into and large parts of the grid keep their initial values. Exploration is not a nicety \u2014 without it there is nothing to learn from.</span>'
        : g<0.7
        ? '<span style="color:'+C.warn+'">A low discount \u03b3='+g.toFixed(2)+' makes distant reward nearly worthless: \u03b3\u00b9\u2075 \u2248 '+Math.pow(g,15).toFixed(4)+
          ', so cells far from the goal cannot see it at all and the value gradient dies out before it reaches the start.</span>'
        : step<-0.15
        ? '<span style="color:'+C.warn+'">A heavy step penalty of '+step.toFixed(2)+' makes the agent impatient \u2014 it may prefer the pit to a long walk, because \u22121 now beats the cost of the journey. Reward shaping changes the optimal policy, not just the speed of finding it.</span>'
        : '<span style="color:'+C.verify+'">Value decays smoothly with distance from the goal at rate \u03b3 per step, and the arrows form a policy that routes around the walls and away from the pit. Nothing supervised this \u2014 it came from one scalar reward at the end.</span>');
  }
  [["rlE","rlEv",v=>v],["rlG","rlGv",v=>(+v).toFixed(2)],
   ["rlX","rlXv",v=>(+v).toFixed(2)],["rlS","rlSv",v=>(+v).toFixed(2)]].forEach(([s,l,f])=>{
    $(s).addEventListener("input",()=>{ $(l).textContent=f($(s).value); draw(); });
  });
  draw();
})();

/* =========================================================
   38 · THE PPO CLIPPED OBJECTIVE  (Lesson 113)
   ========================================================= */
(function ppo(){
  const cv=$("ppCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const eps=+$("ppE").value, A=+$("ppA").value, showU=$("ppU").checked;
    const L=60,R=W-30,TOP=36,BOT=H-56, r0=0, r1=2.5;
    const clip=(r)=>Math.min(Math.max(r,1-eps),1+eps);
    const Lc=(r)=>Math.min(r*A, clip(r)*A);
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    let lo=1e9,hi=-1e9;
    for(let i=0;i<=400;i++){ const r=r0+(r1-r0)*i/400;
      lo=Math.min(lo,Lc(r),r*A); hi=Math.max(hi,Lc(r),r*A); }
    const pad=(hi-lo)*0.1; lo-=pad; hi+=pad;
    const px=r=>L+((r-r0)/(r1-r0))*(R-L), py=v=>BOT-((v-lo)/((hi-lo)||1))*(BOT-TOP);
    ctx.fillStyle="rgba(147,217,123,.09)";
    ctx.fillRect(px(1-eps),TOP,px(1+eps)-px(1-eps),BOT-TOP);
    ctx.strokeStyle=C.verify; ctx.setLineDash([3,3]);
    [1-eps,1+eps].forEach(v=>{ ctx.beginPath(); ctx.moveTo(px(v),TOP); ctx.lineTo(px(v),BOT); ctx.stroke(); });
    ctx.setLineDash([]);
    ctx.strokeStyle=C.rule; ctx.beginPath();
    ctx.moveTo(L,py(0)); ctx.lineTo(R,py(0)); ctx.stroke();
    ctx.strokeStyle=C.rule2; ctx.setLineDash([2,4]);
    ctx.beginPath(); ctx.moveTo(px(1),TOP); ctx.lineTo(px(1),BOT); ctx.stroke(); ctx.setLineDash([]);
    if(showU){
      ctx.beginPath();
      for(let i=0;i<=400;i++){ const r=r0+(r1-r0)*i/400, X=px(r),Y=py(r*A); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
      ctx.strokeStyle=C.rule2; ctx.lineWidth=1.6; ctx.setLineDash([5,4]); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.beginPath();
    for(let i=0;i<=400;i++){ const r=r0+(r1-r0)*i/400, X=px(r),Y=py(Lc(r)); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y); }
    ctx.strokeStyle=C.signal; ctx.lineWidth=2.8; ctx.stroke();
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("L^CLIP as the policy moves away from \u03c0_old",L,24);
    ctx.fillStyle=C.verify; ctx.fillText("trust region",px(1-eps)+4,TOP+16);
    ctx.fillStyle=C.mute;
    [0.5,1,1.5,2,2.5].forEach(v=>{ ctx.textAlign="center";
      ctx.fillText(v.toFixed(1),px(v),BOT+18); ctx.textAlign="left"; });
    ctx.fillText("probability ratio r = \u03c0(a|s) / \u03c0_old(a|s)", L, BOT+40);
    const h=1e-4;
    const gIn=(Lc(1+h)-Lc(1-h))/(2*h);
    const far=A>0?1+2*eps:Math.max(0.02,1-2*eps);
    const gOut=(Lc(far+h)-Lc(far-h))/(2*h);
    $("ppOut").innerHTML =
      '<span class="k">\u03b5</span> <b>'+eps.toFixed(2)+'</b> &nbsp; <span class="k">\u00c2</span> <b>'+A.toFixed(1)+
      '</b> &nbsp; <span class="k">gradient at r=1</span> <b>'+gIn.toFixed(3)+'</b> &nbsp; '+
      '<span class="k">gradient at r='+far.toFixed(2)+'</span> <b style="color:'+(Math.abs(gOut)<1e-6?C.verify:C.signal)+'">'+
      gOut.toFixed(3)+'</b><br>'+
      (Math.abs(A)<0.05
        ? '<span class="k">With zero advantage there is nothing to learn from this action, and the objective is flat everywhere.</span>'
        : A>0
        ? '<span style="color:'+C.verify+'">A <b>good</b> action (\u00c2 &gt; 0). The objective rises as you raise its probability \u2014 but only until r = 1+\u03b5 = '+(1+eps).toFixed(2)+
          ', after which it is flat and the gradient is exactly '+gOut.toFixed(3)+'. There is no incentive to move further, so a single update cannot destroy the policy. Tick the unclipped line to see what PPO is refusing to chase.</span>'
        : '<span style="color:'+C.verify+'">A <b>bad</b> action (\u00c2 &lt; 0). The objective rises as you <em>lower</em> its probability, and flattens at r = 1\u2212\u03b5 = '+(1-eps).toFixed(2)+
          '. Note the asymmetry: the min() clips on the side you are being pushed towards, which is why it bounds the step in both cases.</span>');
  }
  $("ppU").addEventListener("change",draw);
  $("ppE").addEventListener("input",()=>{ $("ppEv").textContent=(+$("ppE").value).toFixed(2); draw(); });
  $("ppA").addEventListener("input",()=>{ const v=+$("ppA").value;
    $("ppAv").textContent=(v>=0?"+":"")+v.toFixed(1); draw(); });
  draw();
})();

/* =========================================================
   39 · PRUNING  (Lesson 115)
   ========================================================= */
(function prune(){
  const cv=$("prCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function draw(){
    const sp=(+$("prS").value)/100, type=$("prT").value, Cn=+$("prC").value;
    seed=90210;
    const n=Cn*Cn, w=new Float64Array(n);
    for(let i=0;i<n;i++) w[i]=gauss();
    const keep=new Uint8Array(n).fill(1);
    let effSp=sp;
    if(type==="unstructured"){
      const idx=Array.from({length:n},(_,i)=>i).sort((a,b)=>Math.abs(w[a])-Math.abs(w[b]));
      const cut=Math.round(sp*n);
      for(let i=0;i<cut;i++) keep[idx[i]]=0;
    } else if(type==="structured"){
      const norms=[];
      for(let c=0;c<Cn;c++){ let s=0; for(let r=0;r<Cn;r++) s+=w[r*Cn+c]**2; norms.push([c,s]); }
      norms.sort((a,b)=>a[1]-b[1]);
      const cut=Math.round(sp*Cn);
      for(let i=0;i<cut;i++){ const c=norms[i][0];
        for(let r=0;r<Cn;r++) keep[r*Cn+c]=0; }
      effSp=cut/Cn;
    } else {
      for(let g=0;g<n;g+=4){
        const grp=[0,1,2,3].map(k=>[g+k,Math.abs(w[g+k])]).sort((a,b)=>a[1]-b[1]);
        keep[grp[0][0]]=0; keep[grp[1][0]]=0;
      }
      effSp=0.5;
    }
    let kept=0, massKept=0, massAll=0;
    for(let i=0;i<n;i++){ massAll+=w[i]*w[i];
      if(keep[i]){ kept++; massKept+=w[i]*w[i]; } }
    const actual=1-kept/n;
    /* realistic speedup on dense hardware */
    const speed = type==="structured" ? 1/(1-effSp)
                : type==="semi" ? 1.7
                : 1.0;
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    const s=210, x0=24, y0=44, px=s/Cn;
    for(let r=0;r<Cn;r++) for(let c=0;c<Cn;c++){
      const i=r*Cn+c;
      if(!keep[i]) continue;
      const t=Math.min(1,Math.abs(w[i])/3);
      ctx.fillStyle="rgba(255,180,84,"+(0.15+0.8*t).toFixed(3)+")";
      ctx.fillRect(x0+c*px, y0+r*px, Math.max(0.6,px-0.2), Math.max(0.6,px-0.2));
    }
    ctx.strokeStyle=C.rule2; ctx.strokeRect(x0+.5,y0+.5,s,s);
    ctx.font=MONO; ctx.fillStyle=C.mute;
    ctx.fillText("surviving weights \u00b7 "+Cn+"\u00d7"+Cn+" layer",x0,32);
    const bars=[["weights removed",actual,1,C.tensor],
                ["L2 mass removed",1-massKept/massAll,1,C.violet],
                ["measured speedup",(speed-1)/3,1,speed>1.05?C.verify:C.warn]];
    bars.forEach((b,i)=>{
      const bx=300, by=70+i*62, bw=W-340;
      ctx.strokeStyle=C.rule2; ctx.strokeRect(bx+.5,by+.5,bw,22);
      ctx.fillStyle=b[3]; ctx.globalAlpha=.75;
      ctx.fillRect(bx,by,bw*Math.max(0,Math.min(1,b[1]/b[2])),22); ctx.globalAlpha=1;
      ctx.fillStyle=C.mute; ctx.fillText(b[0],bx,by-6);
      ctx.fillStyle=C.chalk;
      ctx.fillText(i===2 ? speed.toFixed(2)+"\u00d7" : (b[1]*100).toFixed(1)+"%", bx+6, by+16);
    });
    $("prOut").innerHTML =
      '<span class="k">weights removed</span> <b>'+(actual*100).toFixed(1)+'%</b> &nbsp; '+
      '<span class="k">L2 mass removed</span> <b>'+((1-massKept/massAll)*100).toFixed(2)+'%</b> &nbsp; '+
      '<span class="k">realistic speedup</span> <b style="color:'+(speed>1.05?C.verify:C.warn)+'">'+speed.toFixed(2)+'\u00d7</b><br>'+
      (type==="unstructured"
        ? '<span style="color:'+C.warn+'">Look at the first two bars: removing '+(actual*100).toFixed(0)+'% of the weights removes only '+
          ((1-massKept/massAll)*100).toFixed(1)+'% of the L2 mass, because magnitude pruning removes the <em>smallest</em> weights. That is why accuracy survives. '+
          'Now look at the third bar: <b>1.00\u00d7</b>. The matrix is the same shape and the GPU still executes every multiply. Unstructured sparsity is a compression result, not a speed result.</span>'
        : type==="structured"
        ? '<span style="color:'+C.verify+'">Removing whole channels produces a genuinely smaller dense matrix, so the speedup is real \u2014 '+speed.toFixed(2)+
          '\u00d7. The cost is that you cannot choose which individual weights to keep, so accuracy drops faster per percent removed.</span>'
        : '<span style="color:'+C.verify+'">2:4 semi-structured keeps exactly 2 of every 4 contiguous weights, which Ampere and later tensor cores support natively \u2014 about 1.7\u00d7 in practice. Fixed at 50% sparsity by construction: the slider has no effect here.</span>');
  }
  $("prT").addEventListener("change",draw);
  $("prS").addEventListener("input",()=>{ $("prSv").textContent=$("prS").value+"%"; draw(); });
  $("prC").addEventListener("input",()=>{ $("prCv2").textContent=$("prC").value; draw(); });
  draw();
})();

/* =========================================================
   40 · THE FAIRNESS IMPOSSIBILITY  (Lesson 118)
   ========================================================= */
(function fair(){
  const cv=$("faCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), W=cv.width, H=cv.height;
  function Phi(x){                                   // standard normal CDF
    const s=x<0?-1:1; x=Math.abs(x)/Math.SQRT2;
    const t=1/(1+0.3275911*x);
    const y=1-((((1.061405429*t-1.453152027)*t+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);
    return 0.5*(1+s*y);
  }
  const D=2.0;                                       // same accuracy for both groups
  function stats(p,t){
    // Bayes-optimal calibrated score s = sigmoid(D*x + logit(p)); invert for the x threshold
    const lt=Math.log(t/(1-t)), lp=Math.log(p/(1-p));
    const xt=(lt-lp)/D;
    const tpr=1-Phi(xt-D/2), fpr=1-Phi(xt+D/2);
    const sel=p*tpr+(1-p)*fpr;
    const ppv= sel>1e-9 ? p*tpr/sel : 1;
    return {tpr,fpr,fnr:1-tpr,sel,ppv,t};
  }
  function solve(p,target,field){
    let lo=0.001,hi=0.999;
    for(let i=0;i<60;i++){ const m=(lo+hi)/2, v=stats(p,m)[field];
      if(v>target) lo=m; else hi=m; }                 // both sel and tpr decrease in t
    return (lo+hi)/2;
  }
  function draw(){
    const pA=(+$("faA").value)/100, pB=(+$("faB").value)/100,
          mode=$("faE").value, t=+$("faT").value;
    const a=stats(pA,t);
    let tB=t;
    if(mode==="dp") tB=solve(pB,a.sel,"sel");
    else if(mode==="eo") tB=solve(pB,a.tpr,"tpr");
    const b=stats(pB,tB);
    const gaps=[["demographic parity", Math.abs(a.sel-b.sel), C.tensor],
                ["equal true-positive rate", Math.abs(a.tpr-b.tpr), C.violet],
                ["equal precision (PPV)", Math.abs(a.ppv-b.ppv), C.signal]];
    ctx.fillStyle=C.ink; ctx.fillRect(0,0,W,H);
    ctx.font=MONO;
    /* per-group metric table */
    const rows=[["selected",a.sel,b.sel],["true-positive rate",a.tpr,b.tpr],
                ["false-positive rate",a.fpr,b.fpr],["precision (PPV)",a.ppv,b.ppv],
                ["threshold used",a.t,b.t]];
    ctx.fillStyle=C.mute; ctx.fillText("group A \u00b7 base rate "+(pA*100).toFixed(0)+"%",210,32);
    ctx.fillText("group B \u00b7 base rate "+(pB*100).toFixed(0)+"%",360,32);
    rows.forEach((r,i)=>{
      const y=58+i*26;
      ctx.fillStyle=C.mute; ctx.fillText(r[0],20,y);
      const same=Math.abs(r[1]-r[2])<0.005;
      ctx.fillStyle= i===4 ? C.mute : (same?C.verify:C.chalk);
      ctx.fillText(r[1].toFixed(3),210,y);
      ctx.fillStyle= i===4 ? C.mute : (same?C.verify:C.warn);
      ctx.fillText(r[2].toFixed(3),360,y);
    });
    /* gap bars */
    gaps.forEach((g,i)=>{
      const bx=470, by=58+i*66, bw=W-500;
      ctx.strokeStyle=C.rule2; ctx.strokeRect(bx+.5,by+.5,bw,20);
      const met=g[1]<0.005;
      ctx.fillStyle= met?C.verify:C.warn; ctx.globalAlpha=.75;
      ctx.fillRect(bx,by,bw*Math.min(1,g[1]/0.35),20); ctx.globalAlpha=1;
      ctx.fillStyle=C.mute; ctx.fillText(g[0],bx,by-6);
      ctx.fillStyle= met?C.verify:C.warn;
      ctx.fillText(met?"\u2713 satisfied":"gap "+g[1].toFixed(3), bx+6, by+34);
    });
    const met=gaps.filter(g=>g[1]<0.005).length;
    const equalBase=Math.abs(pA-pB)<0.005;
    $("faOut").innerHTML =
      '<span class="k">criteria satisfied</span> <b style="color:'+(met>=3?C.verify:C.warn)+'">'+met+' of 3</b> &nbsp; '+
      gaps.map(g=>'<span class="k">'+g[0].split(" ")[0]+'</span> '+g[1].toFixed(3)).join(" &nbsp; ")+'<br>'+
      (equalBase
        ? '<span style="color:'+C.verify+'">With <b>equal base rates</b> all three can hold at once \u2014 the impossibility is not about classifiers, it is about differing prevalence. Move the two base rates apart and watch it break.</span>'
        : mode==="dp"
        ? '<span style="color:'+C.warn+'">Forcing equal selection rates across groups with different prevalence means applying a <em>lower bar</em> to one group. Demographic parity is now satisfied \u2014 and true-positive rate and precision have both broken. Someone flagged in group B is now less likely to be a true positive than someone flagged in group A.</span>'
        : mode==="eo"
        ? '<span style="color:'+C.warn+'">Equal true-positive rates achieved. But precision still differs, because with different base rates the same true-positive rate implies different odds that a flagged person is genuinely positive. This is Chouldechova\u2019s result: with unequal prevalence you cannot equalise error rates and predictive value together.</span>'
        : '<span class="k">One shared threshold on a calibrated score. Try each option in the Enforce menu: every one satisfies its own criterion and breaks at least one other. This is a theorem (Kleinberg et al.; Chouldechova), not a tuning failure \u2014 which is why <b>&#8220;make the model fair&#8221; is not a well-posed instruction</b>. Somebody has to choose, and write down why.</span>');
  }
  $("faE").addEventListener("change",draw);
  $("faA").addEventListener("input",()=>{ $("faAv").textContent=$("faA").value+"%"; draw(); });
  $("faB").addEventListener("input",()=>{ $("faBv").textContent=$("faB").value+"%"; draw(); });
  $("faT").addEventListener("input",()=>{ $("faTv").textContent=(+$("faT").value).toFixed(2); draw(); });
  draw();
})();

})();
