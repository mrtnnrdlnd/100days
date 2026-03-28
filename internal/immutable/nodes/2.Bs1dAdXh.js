import{a as U,f as $e,c as st,t as Lt,k as Y,e as Ln,s as ln,d as Vt,l as En}from"../chunks/BW2-N9-6.js";import{o as gr,a as Xs}from"../chunks/rNRqKAN2.js";import{h as vi,d as Sl,b1 as Tc,e as El,q as E,r as wc,ac as Cc,s as xo,f as ha,g as fa,i as yr,aC as Rc,aJ as Ic,al as Mo,M as Pc,L as ja,b2 as Lc,O as Dc,_ as Uc,aQ as Nc,aI as qs,b3 as Fc,a8 as Ja,b4 as Oc,b5 as Bc,a3 as Vc,au as Hc,K as pa,b6 as An,b7 as yl,W as zc,G as Al,J as bl,b8 as ma,aa as Gc,b9 as kc,ba as Wc,aG as Zc,N as Xc,I as qc,aD as Yc,j as Kc,b as jc,U as Fe,x as He,u as li,B as ue,C as ce,z as ze,a5 as lt,F as me,a6 as K,y as Qe,am as St,aO as So,bb as ur,b0 as Kt,A as Rt,T as Gi,bc as Qa}from"../chunks/CX4c_s16.js";import{B as Jc,i as Re,r as Dt,p as cn}from"../chunks/Be8-uBeV.js";import{g as Ut,a as Nt,s as Mt,T as Qc,S as $c,l as ed,r as Tl,b as Ys,c as zt,i as td,d as nd,e as id,f as ra,h as wl,X as Ks,t as rd,j as ad,k as sd}from"../chunks/BAJIyXXo.js";import{b as hr,c as Cl}from"../chunks/CJQQATZU.js";import{i as od}from"../chunks/Mpj6Yu9S.js";const ld=Symbol("NaN");function cd(i,e,t){vi&&Sl();var n=new Jc(i),r=!Tc();El(()=>{var a=e();a!==a&&(a=ld),r&&a!==null&&typeof a=="object"&&(a={}),n.ensure(a,t)})}function si(i,e){return e}function dd(i,e,t){for(var n=[],r=e.length,a,s=e.length,l=0;l<r;l++){let g=e[l];bl(g,()=>{if(a){if(a.pending.delete(g),a.done.add(g),a.pending.size===0){var f=i.outrogroups;$a(i,qs(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&t!==null;if(u){var c=t,h=c.parentNode;Zc(h),h.append(c),i.items.clear()}$a(i,e,!u)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function $a(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const s of i.pending.values())for(const l of s)n.add(i.items.get(l).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=An;const s=document.createDocumentFragment();Xc(a,s)}else qc(e[r],t)}}var Eo;function Wn(i,e,t,n,r,a=null){var s=i,l=new Map,u=(e&yl)!==0;if(u){var c=i;s=vi?ha(Hc(c)):c.appendChild(pa())}vi&&Sl();var h=null,g=Uc(()=>{var T=t();return Nc(T)?T:T==null?[]:qs(T)}),f,v=new Map,x=!0;function b(T){(y.effect.f&zc)===0&&(y.pending.delete(T),y.fallback=h,ud(y,f,s,e,n),h!==null&&(f.length===0?(h.f&An)===0?Al(h):(h.f^=An,lr(h,null,s)):bl(h,()=>{h=null})))}function p(T){y.pending.delete(T)}var m=El(()=>{f=E(g);var T=f.length;let o=!1;if(vi){var d=wc(s)===Cc;d!==(T===0)&&(s=xo(),ha(s),fa(!1),o=!0)}for(var A=new Set,C=Pc,_=Dc(),S=0;S<T;S+=1){vi&&yr.nodeType===Rc&&yr.data===Ic&&(s=yr,o=!0,fa(!1));var D=f[S],R=n(D,S),O=x?null:l.get(R);O?(O.v&&Mo(O.v,D),O.i&&Mo(O.i,S),_&&C.unskip_effect(O.e)):(O=hd(l,x?s:Eo??=pa(),D,R,S,r,e,t),x||(O.e.f|=An),l.set(R,O)),A.add(R)}if(T===0&&a&&!h&&(x?h=ja(()=>a(s)):(h=ja(()=>a(Eo??=pa())),h.f|=An)),T>A.size&&Lc(),vi&&T>0&&ha(xo()),!x)if(v.set(C,A),_){for(const[N,L]of l)A.has(N)||C.skip_effect(L.e);C.oncommit(b),C.ondiscard(p)}else b(C);o&&fa(!0),E(g)}),y={effect:m,items:l,pending:v,outrogroups:null,fallback:h};x=!1,vi&&(s=yr)}function er(i){for(;i!==null&&(i.f&kc)===0;)i=i.next;return i}function ud(i,e,t,n,r){var a=(n&Wc)!==0,s=e.length,l=i.items,u=er(i.effect.first),c,h=null,g,f=[],v=[],x,b,p,m;if(a)for(m=0;m<s;m+=1)x=e[m],b=r(x,m),p=l.get(b).e,(p.f&An)===0&&(p.nodes?.a?.measure(),(g??=new Set).add(p));for(m=0;m<s;m+=1){if(x=e[m],b=r(x,m),p=l.get(b).e,i.outrogroups!==null)for(const D of i.outrogroups)D.pending.delete(p),D.done.delete(p);if((p.f&ma)!==0&&(Al(p),a&&(p.nodes?.a?.unfix(),(g??=new Set).delete(p))),(p.f&An)!==0)if(p.f^=An,p===u)lr(p,null,t);else{var y=h?h.next:u;p===i.effect.last&&(i.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Jn(i,h,p),Jn(i,p,y),lr(p,y,t),h=p,f=[],v=[],u=er(h.next);continue}if(p!==u){if(c!==void 0&&c.has(p)){if(f.length<v.length){var T=v[0],o;h=T.prev;var d=f[0],A=f[f.length-1];for(o=0;o<f.length;o+=1)lr(f[o],T,t);for(o=0;o<v.length;o+=1)c.delete(v[o]);Jn(i,d.prev,A.next),Jn(i,h,d),Jn(i,A,T),u=T,h=A,m-=1,f=[],v=[]}else c.delete(p),lr(p,u,t),Jn(i,p.prev,p.next),Jn(i,p,h===null?i.effect.first:h.next),Jn(i,h,p),h=p;continue}for(f=[],v=[];u!==null&&u!==p;)(c??=new Set).add(u),v.push(u),u=er(u.next);if(u===null)continue}(p.f&An)===0&&f.push(p),h=p,u=er(p.next)}if(i.outrogroups!==null){for(const D of i.outrogroups)D.pending.size===0&&($a(i,qs(D.done)),i.outrogroups?.delete(D));i.outrogroups.size===0&&(i.outrogroups=null)}if(u!==null||c!==void 0){var C=[];if(c!==void 0)for(p of c)(p.f&ma)===0&&C.push(p);for(;u!==null;)(u.f&ma)===0&&u!==i.fallback&&C.push(u),u=er(u.next);var _=C.length;if(_>0){var S=(n&yl)!==0&&s===0?t:null;if(a){for(m=0;m<_;m+=1)C[m].nodes?.a?.measure();for(m=0;m<_;m+=1)C[m].nodes?.a?.fix()}dd(i,C,S)}}a&&Gc(()=>{if(g!==void 0)for(p of g)p.nodes?.a?.apply()})}function hd(i,e,t,n,r,a,s,l){var u=(s&Oc)!==0?(s&Bc)===0?Vc(t,!1,!1):Ja(t):null,c=(s&Fc)!==0?Ja(r):null;return{v:u,i:c,e:ja(()=>(a(e,u??t,c??r,l),()=>{i.delete(n)}))}}function lr(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&An)===0?e.nodes.start:t;n!==null;){var s=Yc(n);if(a.before(n),n===r)return;n=s}}function Jn(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function aa(i,e,t){Kc(()=>{var n=jc(()=>e(i,t?.())||{});if(n?.destroy)return()=>n.destroy()})}function fd(i){var e=Ja(0);return function(){return arguments.length===1?(Fe(e,E(e)+1),arguments[0]):(E(e),i())}}class pd{listeners=new Map;handlers=new Map;on(e,t){let n=this.listeners.get(e);n||(n=[],this.listeners.set(e,n)),n.push(t)}off(e,t){const n=this.listeners.get(e);n&&this.listeners.set(e,n.filter(r=>r!==t))}emit(e,t){const n=this.listeners.get(e);if(n)for(let r=0;r<n.length;r++)n[r](t)}handle(e,t){this.handlers.set(e,t)}request(e,t){const n=this.handlers.get(e);if(!n)throw new Error(`Handler missing: ${e}`);return n(t)}}const Se=new pd;class md{graph;renderer;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};MAX_DELTA_TIME=100;animationFrameId=0;constructor(e,t){this.graph=e,this.renderer=t,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}}}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.animationFrameId=requestAnimationFrame(this.tick.bind(this)))}stop(){this.isRunning=!1,cancelAnimationFrame(this.animationFrameId)}tick(e){if(!this.isRunning)return;let t=e-this.lastTime;t>this.MAX_DELTA_TIME&&(t=16.66),this.tickEventPayload.deltaTime=t,this.tickEventPayload.time=e,this.lastTime=e,Se.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=e;const n=this.graph.execute(this.globalContext);this.renderer.clear(),n&&n.length>0&&this.renderer.render(n),this.animationFrameId=requestAnimationFrame(this.tick.bind(this))}}var gd=$e('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function vd(i,e){He(e,!0);let t=lt(void 0),n=lt(void 0);const r=new md(e.graph,e.renderer);li(()=>{if(!E(t)||!E(n))return;(async()=>{await e.renderer.initialize(E(t));const c=window.devicePixelRatio||1;e.renderer.resize(E(n).clientWidth,E(n).clientHeight,c),e.pointer.initialize(E(n)),r.start()})();const u=new ResizeObserver(c=>{for(const h of c){const{width:g,height:f}=h.contentRect;g>0&&f>0&&(e.renderer.resize(g,f,window.devicePixelRatio||1),e.pointer.updateBounds(g,f))}});return u.observe(E(n)),()=>{u.disconnect(),r.stop(),e.renderer.destroy(),e.pointer.destroy()}});var a=gd(),s=ue(a);hr(s,l=>Fe(t,l),()=>E(t)),ce(a),hr(a,l=>Fe(n,l),()=>E(n)),U(i,a),ze()}var _d=Y('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z"></path>'),xd=Y('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>',1),Md=Y('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),Sd=Y('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z"></path>'),Ed=Y('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>'),yd=Y('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z"></path>'),Ad=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function bd(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Ad();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=_d();U(o,d)},x=o=>{var d=xd();St(),U(o,d)},b=o=>{var d=Md();U(o,d)},p=o=>{var d=Sd();U(o,d)},m=o=>{var d=Ed();U(o,d)},y=o=>{var d=yd();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Td=Y('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z"></path>'),wd=Y('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>',1),Cd=Y('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z"></path>'),Rd=Y('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z"></path>'),Id=Y('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>'),Pd=Y('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z"></path>'),Ld=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dd(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Ld();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Td();U(o,d)},x=o=>{var d=wd();St(),U(o,d)},b=o=>{var d=Cd();U(o,d)},p=o=>{var d=Rd();U(o,d)},m=o=>{var d=Id();U(o,d)},y=o=>{var d=Pd();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Ud=Y('<path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>'),Nd=Y('<path d="M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" opacity="0.2"></path><path d="M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>',1),Fd=Y('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>'),Od=Y('<path d="M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"></path>'),Bd=Y('<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>'),Vd=Y('<path d="M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"></path>'),Hd=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function zd(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Hd();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Ud();U(o,d)},x=o=>{var d=Nd();St(),U(o,d)},b=o=>{var d=Fd();U(o,d)},p=o=>{var d=Od();U(o,d)},m=o=>{var d=Bd();U(o,d)},y=o=>{var d=Vd();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Gd=Y('<path d="M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z"></path>'),kd=Y('<path d="M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z" opacity="0.2"></path><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>',1),Wd=Y('<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"></path>'),Zd=Y('<path d="M200,34H162.83a45.91,45.91,0,0,0-69.66,0H56A14,14,0,0,0,42,48V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm-72-4a34,34,0,0,1,34,34v2H94V64A34,34,0,0,1,128,30Zm74,186a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H85.67A45.77,45.77,0,0,0,82,64v8a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V64a45.77,45.77,0,0,0-3.67-18H200a2,2,0,0,1,2,2Z"></path>'),Xd=Y('<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>'),qd=Y('<path d="M200,36H161.92a44,44,0,0,0-67.84,0H56A12,12,0,0,0,44,48V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm-72-8a36,36,0,0,1,36,36v4H92V64A36,36,0,0,1,128,28Zm76,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H88.83A43.71,43.71,0,0,0,84,64v8a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V64a43.71,43.71,0,0,0-4.83-20H200a4,4,0,0,1,4,4Z"></path>'),Yd=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Kd(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Yd();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Gd();U(o,d)},x=o=>{var d=kd();St(),U(o,d)},b=o=>{var d=Wd();U(o,d)},p=o=>{var d=Zd();U(o,d)},m=o=>{var d=Xd();U(o,d)},y=o=>{var d=qd();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var jd=Y('<path d="M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"></path>'),Jd=Y('<path d="M216,40V168H168V88H88V40Z" opacity="0.2"></path><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>',1),Qd=Y('<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>'),$d=Y('<path d="M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"></path>'),eu=Y('<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>'),tu=Y('<path d="M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"></path>'),nu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function iu(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=nu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=jd();U(o,d)},x=o=>{var d=Jd();St(),U(o,d)},b=o=>{var d=Qd();U(o,d)},p=o=>{var d=$d();U(o,d)},m=o=>{var d=eu();U(o,d)},y=o=>{var d=tu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var ru=Y('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),au=Y('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),su=Y('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),ou=Y('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),lu=Y('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),cu=Y('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),du=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Rl(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=du();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=ru();U(o,d)},x=o=>{var d=au();St(),U(o,d)},b=o=>{var d=su();U(o,d)},p=o=>{var d=ou();U(o,d)},m=o=>{var d=lu();U(o,d)},y=o=>{var d=cu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var uu=Y('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),hu=Y('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),fu=Y('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),pu=Y('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),mu=Y('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),gu=Y('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),vu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function _u(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=vu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=uu();U(o,d)},x=o=>{var d=hu();St(),U(o,d)},b=o=>{var d=fu();U(o,d)},p=o=>{var d=pu();U(o,d)},m=o=>{var d=mu();U(o,d)},y=o=>{var d=gu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var xu=Y('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),Mu=Y('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),Su=Y('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),Eu=Y('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),yu=Y('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),Au=Y('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),bu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Il(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=bu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=xu();U(o,d)},x=o=>{var d=Mu();St(),U(o,d)},b=o=>{var d=Su();U(o,d)},p=o=>{var d=Eu();U(o,d)},m=o=>{var d=yu();U(o,d)},y=o=>{var d=Au();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Tu=Y('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),wu=Y('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),Cu=Y('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),Ru=Y('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),Iu=Y('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),Pu=Y('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),Lu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Du(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Lu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Tu();U(o,d)},x=o=>{var d=wu();St(),U(o,d)},b=o=>{var d=Cu();U(o,d)},p=o=>{var d=Ru();U(o,d)},m=o=>{var d=Iu();U(o,d)},y=o=>{var d=Pu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Uu=Y('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),Nu=Y('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),Fu=Y('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),Ou=Y('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),Bu=Y('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),Vu=Y('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),Hu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function zu(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Hu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Uu();U(o,d)},x=o=>{var d=Nu();St(),U(o,d)},b=o=>{var d=Fu();U(o,d)},p=o=>{var d=Ou();U(o,d)},m=o=>{var d=Bu();U(o,d)},y=o=>{var d=Vu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Gu=Y('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),ku=Y('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),Wu=Y('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),Zu=Y('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),Xu=Y('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),qu=Y('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),Yu=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ku(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Yu();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Gu();U(o,d)},x=o=>{var d=ku();St(),U(o,d)},b=o=>{var d=Wu();U(o,d)},p=o=>{var d=Zu();U(o,d)},m=o=>{var d=Xu();U(o,d)},y=o=>{var d=qu();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var ju=Y('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),Ju=Y('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),Qu=Y('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),$u=Y('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),eh=Y('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),th=Y('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),nh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function ih(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=nh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=ju();U(o,d)},x=o=>{var d=Ju();St(),U(o,d)},b=o=>{var d=Qu();U(o,d)},p=o=>{var d=$u();U(o,d)},m=o=>{var d=eh();U(o,d)},y=o=>{var d=th();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var rh=Y('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),ah=Y('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),sh=Y('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),oh=Y('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),lh=Y('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),ch=Y('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),dh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function uh(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=dh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=rh();U(o,d)},x=o=>{var d=ah();St(),U(o,d)},b=o=>{var d=sh();U(o,d)},p=o=>{var d=oh();U(o,d)},m=o=>{var d=lh();U(o,d)},y=o=>{var d=ch();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var hh=Y('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),fh=Y('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),ph=Y('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),mh=Y('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),gh=Y('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),vh=Y('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),_h=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Pl(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=_h();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=hh();U(o,d)},x=o=>{var d=fh();St(),U(o,d)},b=o=>{var d=ph();U(o,d)},p=o=>{var d=mh();U(o,d)},m=o=>{var d=gh();U(o,d)},y=o=>{var d=vh();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var xh=Y('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),Mh=Y('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),Sh=Y('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),Eh=Y('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),yh=Y('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),Ah=Y('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),bh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ll(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=bh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=xh();U(o,d)},x=o=>{var d=Mh();St(),U(o,d)},b=o=>{var d=Sh();U(o,d)},p=o=>{var d=Eh();U(o,d)},m=o=>{var d=yh();U(o,d)},y=o=>{var d=Ah();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Th=Y('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),wh=Y('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),Ch=Y('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),Rh=Y('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),Ih=Y('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),Ph=Y('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),Lh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dh(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Lh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Th();U(o,d)},x=o=>{var d=wh();St(),U(o,d)},b=o=>{var d=Ch();U(o,d)},p=o=>{var d=Rh();U(o,d)},m=o=>{var d=Ih();U(o,d)},y=o=>{var d=Ph();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Uh=Y('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),Nh=Y('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),Fh=Y('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),Oh=Y('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),Bh=Y('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),Vh=Y('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),Hh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function zh(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Hh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Uh();U(o,d)},x=o=>{var d=Nh();St(),U(o,d)},b=o=>{var d=Fh();U(o,d)},p=o=>{var d=Oh();U(o,d)},m=o=>{var d=Bh();U(o,d)},y=o=>{var d=Vh();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Gh=Y('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),kh=Y('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),Wh=Y('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),Zh=Y('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),Xh=Y('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),qh=Y('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),Yh=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function yo(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=Yh();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Gh();U(o,d)},x=o=>{var d=kh();St(),U(o,d)},b=o=>{var d=Wh();U(o,d)},p=o=>{var d=Zh();U(o,d)},m=o=>{var d=Xh();U(o,d)},y=o=>{var d=qh();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var Kh=Y('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),jh=Y('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),Jh=Y('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),Qh=Y('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),$h=Y('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),ef=Y('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),tf=Y('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dl(i,e){He(e,!0);const t=Ut();let n=Dt(e,["$$slots","$$events","$$legacy","children"]),r=K(()=>e.weight??t.weight??"regular"),a=K(()=>e.color??t.color??"currentColor"),s=K(()=>e.size??t.size??"1em"),l=K(()=>e.mirrored??t.mirrored??!1);function u(o){let{weight:d,color:A,size:C,mirrored:_,...S}=o;return S}var c=tf();Nt(c,(o,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:E(s),height:E(s),fill:E(a),transform:E(l)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...o,...d}),[()=>u(t),()=>u(n)]);var h=ue(c);{var g=o=>{var d=st(),A=Qe(d);Mt(A,()=>e.children),U(o,d)};Re(h,o=>{e.children&&o(g)})}var f=me(h,2);{var v=o=>{var d=Kh();U(o,d)},x=o=>{var d=jh();St(),U(o,d)},b=o=>{var d=Jh();U(o,d)},p=o=>{var d=Qh();U(o,d)},m=o=>{var d=$h();U(o,d)},y=o=>{var d=ef();U(o,d)},T=o=>{var d=Lt();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(o,d)};Re(f,o=>{E(r)==="bold"?o(v):E(r)==="duotone"?o(x,1):E(r)==="fill"?o(b,2):E(r)==="light"?o(p,3):E(r)==="regular"?o(m,4):E(r)==="thin"?o(y,5):o(T,-1)})}ce(c),U(i,c),ze()}var nf=$e('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function rf(i,e){var t=nf(),n=ue(t),r=ue(n);Qc(r,{}),ce(n);var a=me(n,2),s=ue(a);Mt(s,()=>e.children),ce(a);var l=me(a,2),u=ue(l);Mt(u,()=>e.viewsPanel??So);var c=me(u,2);Mt(c,()=>e.settingsPanel??So),ce(l),ce(t),U(i,t)}var ga=fd(()=>ed),af=$e('<div class="views-content"></div>');function sf(i,e){He(e,!1),od(),$c(i,{get isOpen(){return ga().viewsOpen},onClose:()=>ga(ga().viewsOpen=!1),side:"left",children:(t,n)=>{var r=af();U(t,r)},$$slots:{default:!0}}),ze()}class of{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];hasInputs(e){return e.type==="processor"||e.type==="subject"||e.type==="sink"}addNode(e){this.nodes.set(e.id,e),this.needsSort=!0;for(let t=0;t<this.connections.length;t++){const n=this.connections[t];n.targetId===e.id&&this.hasInputs(e)&&(e.inputIds||(e.inputIds=[]),e.inputIds.includes(n.sourceId)||e.inputIds.push(n.sourceId))}}removeNode(e){const t=[];for(const[n,r]of this.nodes)r.parentId===e&&t.push(n);for(let n=0;n<t.length;n++)this.removeNode(t[n]);this.nodes.delete(e),this.connections=this.connections.filter(n=>n.sourceId!==e&&n.targetId!==e);for(const[n,r]of this.nodes)this.hasInputs(r)&&r.inputIds&&(r.inputIds=r.inputIds.filter(a=>a!==e));this.needsSort=!0}connect(e,t,n,r){const a=this.nodes.get(t);if(a&&this.hasInputs(a)){this.connections=this.connections.filter(s=>{const l=s.targetId===t,u=s.targetPortId===r;return a.type==="subject"&&!r?!0:!(l&&u)});for(let s=0;s<this.connections.length;s++){const l=this.connections[s];if(l.sourceId===e&&l.targetId===t&&l.sourcePortId===n&&l.targetPortId===r)return}this.connections.push({sourceId:e,targetId:t,sourcePortId:n,targetPortId:r}),this.needsSort=!0,this.hasInputs(a)&&(a.inputIds=this.connections.filter(s=>s.targetId===t).map(s=>s.sourceId),a.inputIds=Array.from(new Set(a.inputIds)))}}disconnect(e,t,n,r){this.connections=this.connections.filter(s=>!(s.sourceId===e&&s.targetId===t&&s.sourcePortId===n&&s.targetPortId===r)),this.needsSort=!0;const a=this.nodes.get(t);a&&this.hasInputs(a)&&(a.inputIds=this.connections.filter(s=>s.targetId===t).map(s=>s.sourceId),a.inputIds=Array.from(new Set(a.inputIds)))}reorderNode(e,t,n){if(e===t)return;const r=this.nodes.get(e);if(!r)return;const a=Array.from(this.nodes.entries()),s=a.findIndex(([u])=>u===e);s!==-1&&a.splice(s,1);let l=a.findIndex(([u])=>u===t);l===-1?a.push([e,r]):(n==="after"&&l++,a.splice(l,0,[e,r])),this.nodes.clear();for(let u=0;u<a.length;u++)this.nodes.set(a[u][0],a[u][1]);this.needsSort=!0}resolveOrder(){const e=new Map,t=new Map;for(const[a]of this.nodes)e.set(a,0),t.set(a,[]);for(let a=0;a<this.connections.length;a++){const s=this.connections[a],l=t.get(s.sourceId),u=e.get(s.targetId);l!==void 0&&u!==void 0&&(l.push(s.targetId),e.set(s.targetId,u+1))}const n=[];for(const[a,s]of e)s===0&&n.push(a);const r=[];for(;n.length>0;){const a=n.shift();r.push(a);const s=t.get(a);if(s)for(let l=0;l<s.length;l++){const u=s[l],c=e.get(u)-1;e.set(u,c),c===0&&n.push(u)}}return r}execute(e){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let t=0;t<this.sortedIds.length;t++){const n=this.sortedIds[t],r=this.nodes.get(n);if(r){if(r.type==="source"){const a=r;this.nodeOutputs.set(n,a.getOutputs())}else if(r.type==="processor"||r.type==="sink"){const a={};for(let s=0;s<this.connections.length;s++){const l=this.connections[s];if(l.targetId===n){const u=this.nodeOutputs.get(l.sourceId);if(u){const c=l.sourcePortId||"out",h=l.targetPortId||"in";u[c]&&(a[h]||(a[h]=[]),a[h].push(u[c]))}}}if(r.type==="processor"){const s=r;this.nodeOutputs.set(n,s.process(a))}else if(r.type==="sink"){const l=r.consume(a);if(l)for(let u=0;u<l.length;u++)this.renderPrimitives.push(l[u])}}}}return this.renderPrimitives}}class lf{graph;constructor(e){this.graph=e,this.setupMediatorHandlers()}setupMediatorHandlers(){Se.handle("REGISTER_NODE",e=>(this.graph.addNode(e.node),Se.emit("GRAPH_UPDATED",void 0),!0)),Se.handle("REMOVE_NODE",e=>(this.graph.removeNode(e.id),Se.emit("GRAPH_UPDATED",void 0),!0)),Se.handle("CONNECT_NODES",e=>(this.graph.connect(e.sourceId,e.targetId,e.sourcePortId,e.targetPortId),Se.emit("GRAPH_UPDATED",void 0),!0)),Se.handle("DISCONNECT_NODES",e=>(this.graph.disconnect(e.sourceId,e.targetId,e.sourcePortId,e.targetPortId),Se.emit("GRAPH_UPDATED",void 0),!0)),Se.handle("REORDER_NODE",e=>{const t=this.graph.nodes.get(e.nodeId),n=this.graph.nodes.get(e.targetId);return t&&n&&(t.parentId=n.parentId,this.graph.reorderNode(e.nodeId,e.targetId,e.position),Se.emit("GRAPH_UPDATED",void 0)),!0}),Se.handle("GET_CONTEXT",e=>null),Se.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]}))}}class cf{saveTimeout=null;boundSaveGraphState=this.triggerSave.bind(this);initialize(){Se.on("GRAPH_UPDATED",this.boundSaveGraphState)}destroy(){this.saveTimeout&&clearTimeout(this.saveTimeout),Se.off("GRAPH_UPDATED",this.boundSaveGraphState)}initDB(){return new Promise((e,t)=>{const n=indexedDB.open("AppDatabase",1);n.onupgradeneeded=r=>{const a=r.target.result;a.objectStoreNames.contains("graph")||a.createObjectStore("graph")},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}triggerSave(){this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.saveGraphState()},500)}async saveGraphState(){const e=Se.request("GET_GRAPH_STATE",void 0),t=e.nodes.map(n=>{const r=n;return{id:n.id,type:n.type,subType:n.subType,parentId:n.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,lat:r.lat,lon:r.lon,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[]}}});try{(await this.initDB()).transaction("graph","readwrite").objectStore("graph").put({nodes:t,connections:e.connections},"state")}catch{}}async loadGraphState(){try{const n=(await this.initDB()).transaction("graph","readonly").objectStore("graph").get("state");return new Promise(r=>{n.onsuccess=()=>{const a=n.result;if(a){for(let s=0;s<a.nodes.length;s++){const l=a.nodes[s],u=Se.request("CREATE_NODE",{id:l.id,type:l.type,subType:l.subType,parentId:l.parentId,config:l.config});u&&Se.request("REGISTER_NODE",{node:u})}for(let s=0;s<a.connections.length;s++){const l=a.connections[s];Se.request("CONNECT_NODES",{sourceId:l.sourceId,targetId:l.targetId,sourcePortId:l.sourcePortId,targetPortId:l.targetPortId})}}r()},n.onerror=()=>r()})}catch{}}}class Ul{id;type="subject";subType="default";parentId;constructor(e,t){this.id=e,t&&Object.assign(this,t)}}function df(i,e){He(e,!0),ur("subject-parent",()=>{});var t=st(),n=Qe(t);{var r=a=>{var s=st(),l=Qe(s);Mt(l,()=>e.children),U(a,s)};Re(n,a=>{e.children&&a(r)})}U(i,t),ze()}function uf(i,e){He(e,!0);const t=Kt("subject-parent");li(()=>{const s=new Ul(e.id);return s.parentId=t?.(),Se.request("REGISTER_NODE",{node:s}),()=>{Se.request("REMOVE_NODE",{id:e.id})}}),ur("subject-parent",()=>e.id);var n=st(),r=Qe(n);{var a=s=>{var l=st(),u=Qe(l);Mt(u,()=>e.children),U(s,l)};Re(r,s=>{e.children&&s(a)})}U(i,n),ze()}function hf(i,e){return e.filter(t=>t.parentId===i)}function ff(i){return i.type==="source"?[]:i.subType==="motion"?[{id:"pos",label:"POS"},{id:"vel",label:"VEL"}]:i.subType==="sprite"?[{id:"x",label:"X"},{id:"y",label:"Y"}]:[{id:"in",label:"IN"}]}function pf(i){if(i.type==="sink")return[];if(i.subType==="api"){const e=i.availableKeys||[];if(e.length>0)return e.map(t=>({id:t,label:t}))}return[{id:"out",label:"OUT"}]}class mf{#e=lt(null);get selectedNodeId(){return E(this.#e)}set selectedNodeId(e){Fe(this.#e,e,!0)}nodeElements=new Map;#t=lt(null);get dragConnectionSourceId(){return E(this.#t)}set dragConnectionSourceId(e){Fe(this.#t,e,!0)}#n=lt(null);get dragConnectionSourcePortId(){return E(this.#n)}set dragConnectionSourcePortId(e){Fe(this.#n,e,!0)}#i=lt(null);get dragConnectionTargetId(){return E(this.#i)}set dragConnectionTargetId(e){Fe(this.#i,e,!0)}#r=lt(null);get dragConnectionTargetPortId(){return E(this.#r)}set dragConnectionTargetPortId(e){Fe(this.#r,e,!0)}#a=lt(0);get dragStartX(){return E(this.#a)}set dragStartX(e){Fe(this.#a,e,!0)}#s=lt(0);get dragStartY(){return E(this.#s)}set dragStartY(e){Fe(this.#s,e,!0)}#o=lt(null);get draggedNodeId(){return E(this.#o)}set draggedNodeId(e){Fe(this.#o,e,!0)}}const xe=new mf;var gf=$e('<div class="input-group svelte-zce5x2"><label class="svelte-zce5x2"> </label> <input type="number" class="unified-input svelte-zce5x2"/></div>');function js(i,e){He(e,!0);var t=gf(),n=ue(t),r=ue(n,!0);ce(n);var a=me(n,2);Tl(a),ce(t),Rt(()=>{ln(r,e.label),Ys(a,e.value),zt(a,"min",e.min),zt(a,"step",e.step)}),Vt("change",a,s=>e.onchange(parseFloat(s.currentTarget.value)||0)),U(i,t),ze()}Ln(["change"]);var vf=$e('<option disabled=""> </option>'),_f=$e("<option> </option>"),xf=$e('<div class="input-group svelte-1oo6fx3"><label class="svelte-1oo6fx3"> </label> <select class="unified-input svelte-1oo6fx3"><!><!></select></div>');function yn(i,e){He(e,!0);var t=xf(),n=ue(t),r=ue(n,!0);ce(n);var a=me(n,2),s=ue(a);{var l=h=>{var g=vf(),f=ue(g,!0);ce(g),g.value=g.__value="",Rt(()=>ln(f,e.disabledPlaceholder)),U(h,g)};Re(s,h=>{e.disabledPlaceholder&&h(l)})}var u=me(s);Wn(u,17,()=>e.options,si,(h,g)=>{var f=_f(),v=ue(f,!0);ce(f);var x={};Rt(()=>{ln(v,E(g).label),x!==(x=E(g).value)&&(f.value=(f.__value=E(g).value)??"")}),U(h,f)}),ce(a);var c;td(a),ce(t),Rt(()=>{ln(r,e.label),c!==(c=e.value)&&(a.value=(a.__value=e.value)??"",nd(a,e.value))}),Vt("change",a,h=>e.onchange(h.currentTarget.value)),U(i,t),ze()}Ln(["change"]);var Mf=$e('<div class="input-group"><label> </label> <input type="text" class="unified-input"/></div>');function Nl(i,e){He(e,!0);let t=cn(e,"placeholder",3,"");var n=Mf(),r=ue(n),a=ue(r,!0);ce(r);var s=me(r,2);Tl(s),ce(n),Rt(()=>{ln(a,e.label),Ys(s,e.value),zt(s,"placeholder",t())}),Vt("change",s,l=>e.onchange(l.currentTarget.value)),U(i,n),ze()}Ln(["change"]);var Sf=$e('<div class="input-group"><label> </label> <textarea class="unified-input"></textarea></div>');function qr(i,e){He(e,!0);let t=cn(e,"rows",3,3);var n=Sf(),r=ue(n),a=ue(r,!0);ce(r);var s=me(r,2);id(s),ce(n),Rt(()=>{ln(a,e.label),zt(s,"rows",t()),Ys(s,e.value)}),Vt("change",s,l=>e.onchange(l.currentTarget.value)),U(i,n),ze()}Ln(["change"]);var Ef=$e("<button><!></button>");function Zi(i,e){let t=cn(e,"variant",3,"default");var n=Ef(),r=ue(n);Mt(r,()=>e.children),ce(n),Rt(()=>{ra(n,1,`icon-btn ${t()??""}`,"svelte-db4pd2"),zt(n,"title",e.title)}),Vt("click",n,function(...a){e.onclick?.apply(this,a)}),U(i,n)}Ln(["click"]);function yf(i,e){let t=cn(e,"size",3,16);function n(l){const u={subject:Rl,source:Pl,sink:Il,processor:Dl},c=l.subType||l.id;return{"mouse-input":Ku,"keyboard-input":yo,sprite:ih,mesh:Dh,"sprite-atlas":zh,"transform-shader":uh,script:Du,renderer:zu,console:yo,file:_u}[c]||u[l.type]}let r=K(()=>n(e.node));var a=st(),s=Qe(a);Cl(s,()=>E(r),(l,u)=>{u(l,{get size(){return t()},weight:"fill"})}),U(i,a)}var Af=$e('<div class="chevron-wrapper svelte-1airrze"><!></div>'),bf=$e('<div class="port-dot in-port svelte-1airrze"></div>'),Tf=$e('<div class="port-dot out-port svelte-1airrze"></div>'),wf=$e('<div class="dots-container svelte-1airrze"><!> <!></div>'),Cf=$e('<div role="button" tabindex="0"><!> <span class="type-icon svelte-1airrze"><!></span></div>');function Rf(i,e){He(e,!0);let t=cn(e,"isExpanded",3,!1),n=cn(e,"portSize",3,5),r=cn(e,"portSpacing",3,1),a=K(()=>ff(e.node)),s=K(()=>pf(e.node)),l=K(()=>e.node.type==="subject"||E(s).length>0),u=K(()=>e.node.type==="subject"||E(a).length>0),c=K(()=>xe.dragConnectionSourceId===e.node.id),h=K(()=>xe.dragConnectionSourceId!==null&&xe.dragConnectionSourceId!==e.node.id&&E(u)),g=K(()=>xe.dragConnectionTargetId===e.node.id),f=K(()=>xe.selectedNodeId===e.node.id),v=K(()=>xe.dragConnectionSourceId===null&&!E(l)||xe.dragConnectionSourceId!==null&&!E(h)&&!E(c)),x=K(()=>e.node.type==="source"?"var(--color-success)":e.node.type==="processor"?"var(--color-warning)":e.node.type==="sink"?"var(--color-error)":"var(--color-info)"),b=0,p=0,m=0,y=null;function T(L){const F=L.getBoundingClientRect();xe.dragConnectionSourceId=e.node.id,xe.dragStartX=F.left+F.width/2,xe.dragStartY=F.top+F.height/2}function o(L){if(!E(l))return;const P=L.target.closest(".out-port");P?xe.dragConnectionSourcePortId=P.getAttribute("data-port-id"):xe.dragConnectionSourcePortId=null,b=L.clientX,p=L.clientY,m=Date.now();const V=L.currentTarget;e.node.type==="subject"?y=setTimeout(()=>{T(V)},300):T(V)}function d(L){if(y){const F=L.clientX-b,P=L.clientY-p;Math.sqrt(F*F+P*P)>5&&(clearTimeout(y),y=null)}}function A(L){y&&(clearTimeout(y),y=null);const F=L.clientX-b,P=L.clientY-p,V=Math.sqrt(F*F+P*P),Z=Date.now()-m;e.node.type==="subject"&&V<5&&Z<300&&e.onToggle&&e.onToggle(L)}var C=Cf();let _;var S=ue(C);{var D=L=>{var F=Af(),P=ue(F);{var V=j=>{bd(j,{size:14,weight:"bold"})},Z=j=>{Dd(j,{size:14,weight:"bold"})};Re(P,j=>{t()?j(V):j(Z,-1)})}ce(F),U(L,F)},R=L=>{var F=wf(),P=ue(F);Wn(P,17,()=>E(a),si,(Z,j)=>{var ne=bf();Rt(()=>zt(ne,"data-port-id",E(j).id)),U(Z,ne)});var V=me(P,2);Wn(V,17,()=>E(s),si,(Z,j)=>{var ne=Tf();Rt(()=>zt(ne,"data-port-id",E(j).id)),U(Z,ne)}),ce(F),U(L,F)};Re(S,L=>{e.node.type==="subject"?L(D):L(R,-1)})}var O=me(S,2),N=ue(O);yf(N,{get node(){return e.node},size:16}),ce(O),ce(C),Rt(()=>{_=ra(C,1,"connection-port svelte-1airrze",null,_,{"is-chevron":e.node.type==="subject",active:E(c),selected:E(f),"valid-target":E(g),disabled:E(v)}),zt(C,"data-node-id",e.node.id),wl(C,`--port-color: ${E(x)??""}; --port-size: ${n()??""}px; --port-spacing: ${r()??""}px;`),zt(O,"title",e.node.type)}),Vt("pointerdown",C,o),Vt("pointermove",C,d),Vt("pointerup",C,A),U(i,C),ze()}Ln(["pointerdown","pointermove","pointerup"]);var If=$e('<div class="palette-container"><!></div>'),Pf=$e('<div class="children-group svelte-phufrx"></div>'),Lf=$e('<div class="tree-item svelte-phufrx"><div role="button" tabindex="0"><!> <div class="node-part-right svelte-phufrx"><span class="node-id svelte-phufrx"> </span> <div class="node-actions svelte-phufrx"><!> <!></div></div></div> <!></div>');function Fl(i,e){He(e,!0);const t=Kt("graph-actions"),n=Kt("palette-state");let r=lt(!0),a=lt(null),s=K(()=>hf(e.node.id,e.nodes)),l=K(()=>E(s).length>0),u=lt(void 0);li(()=>(E(u)&&xe.nodeElements.set(e.node.id,E(u)),()=>{xe.nodeElements.get(e.node.id)===E(u)&&xe.nodeElements.delete(e.node.id)}));function c(P){P.stopPropagation(),Fe(r,!E(r))}function h(P){P.stopPropagation();const V=P.currentTarget.getBoundingClientRect();n.activeId===e.node.id?n.activeId=null:(n.activeId=e.node.id,n.x=V.left,n.y=V.bottom+4)}function g(P){P.stopPropagation(),t.removeNode(e.node.id)}function f(P){P.stopPropagation(),xe.selectedNodeId=e.node.id}function v(P){(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),xe.selectedNodeId=e.node.id)}function x(P){P.dataTransfer&&(P.dataTransfer.setData("text/plain",e.node.id),xe.draggedNodeId=e.node.id,P.stopPropagation())}function b(P){if(xe.draggedNodeId===e.node.id)return;P.preventDefault(),P.stopPropagation();const V=P.currentTarget.getBoundingClientRect(),Z=P.clientY-V.top,j=6;Z<j?Fe(a,"before"):Z>V.height-j?Fe(a,"after"):e.node.type==="subject"?Fe(a,"inside"):Fe(a,Z<V.height/2?"before":"after",!0)}function p(P){Fe(a,null)}function m(P){P.preventDefault(),P.stopPropagation();const V=P.dataTransfer?.getData("text/plain"),Z=E(a);if(Fe(a,null),!V||V===e.node.id){xe.draggedNodeId=null;return}Z==="inside"&&e.node.type==="subject"?t.reparentNode(V,e.node.id):(Z==="before"||Z==="after")&&t.reorderNode(V,e.node.id,Z),xe.draggedNodeId=null}function y(){xe.draggedNodeId=null,Fe(a,null)}var T=Lf(),o=ue(T);let d;var A=ue(o);Rf(A,{get node(){return e.node},get isExpanded(){return E(r)},onToggle:c});var C=me(A,2),_=ue(C),S=ue(_,!0);ce(_);var D=me(_,2),R=ue(D);{var O=P=>{var V=If(),Z=ue(V);Zi(Z,{title:"Add Child Node",onclick:h,children:(j,ne)=>{Ll(j,{size:12,weight:"bold"})},$$slots:{default:!0}}),ce(V),U(P,V)};Re(R,P=>{e.node.type==="subject"&&P(O)})}var N=me(R,2);Zi(N,{variant:"danger",title:"Delete",onclick:g,children:(P,V)=>{Ks(P,{size:12,weight:"bold"})},$$slots:{default:!0}}),ce(D),ce(C),ce(o),hr(o,P=>Fe(u,P),()=>E(u));var L=me(o,2);{var F=P=>{var V=Pf();Wn(V,21,()=>E(s),si,(Z,j)=>{var ne=st(),pe=Qe(ne);Fl(pe,{get node(){return E(j)},get nodes(){return e.nodes}}),U(Z,ne)}),ce(V),U(P,V)};Re(L,P=>{E(l)&&E(r)&&P(F)})}ce(T),Rt(()=>{d=ra(o,1,"node-row svelte-phufrx",null,d,{selected:xe.selectedNodeId===e.node.id,"drop-before":E(a)==="before","drop-after":E(a)==="after","drop-inside":E(a)==="inside","is-dragging":xe.draggedNodeId===e.node.id,"is-subject":e.node.type==="subject"}),zt(o,"data-node-id",e.node.id),zt(C,"draggable",xe.dragConnectionSourceId===null?"true":"false"),ln(S,e.node.name||e.node.id)}),Vt("click",o,f),Vt("keydown",o,v),En("dragover",o,b),En("dragleave",o,p),En("drop",o,m),En("dragstart",C,x),En("dragend",C,y),U(i,T),ze()}Ln(["click","keydown"]);var Df=$e('<div style="height: 1px; background: var(--border-color); margin: 2px 0;"></div> <button class="svelte-1ea37n5"><!> Klistra in JSON</button>',1),Uf=$e('<div class="inline-palette svelte-1ea37n5" role="presentation"><button class="svelte-1ea37n5"><!> Source</button> <button class="svelte-1ea37n5"><!> Processor</button> <button class="svelte-1ea37n5"><!> Subject</button> <button class="svelte-1ea37n5"><!> Sink</button> <!></div>');function Nf(i,e){He(e,!0);let t=cn(e,"x",3,0),n=cn(e,"y",3,0),r=lt(void 0),a=lt(0),s=lt(0);li(()=>{if(e.show&&E(r)){const f=E(r).getBoundingClientRect();let v=t(),x=n();v+f.width>window.innerWidth&&(v=window.innerWidth-f.width-8),x+f.height>window.innerHeight&&(x=n()-f.height-8),Fe(a,v,!0),Fe(s,x,!0)}else Fe(a,t()),Fe(s,n())});function l(f,v){v.stopPropagation(),e.onAdd(f)}function u(f){return document.body.appendChild(f),{destroy(){f.parentNode&&f.parentNode.removeChild(f)}}}var c=st(),h=Qe(c);{var g=f=>{var v=Uf(),x=ue(v),b=ue(x);Pl(b,{size:14,weight:"fill",style:"color: var(--color-success)"}),St(),ce(x);var p=me(x,2),m=ue(p);Dl(m,{size:14,weight:"fill",style:"color: var(--color-warning)"}),St(),ce(p);var y=me(p,2),T=ue(y);Rl(T,{size:14,weight:"fill",style:"color: var(--color-info)"}),St(),ce(y);var o=me(y,2),d=ue(o);Il(d,{size:14,weight:"fill",style:"color: var(--color-error)"}),St(),ce(o);var A=me(o,2);{var C=_=>{var S=Df(),D=me(Qe(S),2),R=ue(D);Kd(R,{size:14,weight:"fill",style:"color: var(--text-muted)"}),St(),ce(D),Vt("click",D,O=>{O.stopPropagation(),e.onImport()}),U(_,S)};Re(A,_=>{e.onImport&&_(C)})}ce(v),aa(v,_=>u?.(_)),hr(v,_=>Fe(r,_),()=>E(r)),Rt(()=>wl(v,`top: ${E(s)??""}px; left: ${E(a)??""}px;`)),Vt("click",v,_=>_.stopPropagation()),Vt("click",x,_=>l("source",_)),Vt("click",p,_=>l("processor",_)),Vt("click",y,_=>l("subject",_)),Vt("click",o,_=>l("sink",_)),U(f,v)};Re(h,f=>{e.show&&f(g)})}U(i,c),ze()}Ln(["click"]);function Ff(i){let e=!1,t=0,n=0;function r(l){e=!0,t=l.clientY,n=i.parentElement.clientHeight,i.setPointerCapture(l.pointerId)}function a(l){if(!e)return;const u=t-l.clientY,c=Math.max(150,Math.min(n+u,window.innerHeight-100));i.parentElement.style.height=`${c}px`}function s(l){e=!1,i.releasePointerCapture(l.pointerId)}return i.addEventListener("pointerdown",r),i.addEventListener("pointermove",a),i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),{destroy(){i.removeEventListener("pointerdown",r),i.removeEventListener("pointermove",a),i.removeEventListener("pointerup",s),i.removeEventListener("pointercancel",s)}}}var Of=$e('<span class="port-label svelte-6279m"> </span>'),Bf=$e('<div class="connection-item"><span class="conn-id"> <!></span> <!></div>'),Vf=$e("<option> </option>"),Hf=$e('<div class="input-group"><label>Connected Sources</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="">+ Connect Node...</option><!></select></div></div>');function zf(i,e){He(e,!0);function t(c){const h=c.target,g=h.value;g&&(e.graphActions.connectInput(e.activeNode.id,g),h.value="")}var n=Hf(),r=me(ue(n),2),a=ue(r);Wn(a,17,()=>e.connections.filter(c=>c.targetId===e.activeNode.id),si,(c,h)=>{const g=K(()=>e.nodes.find(T=>T.id===E(h).sourceId)),f=K(()=>E(g)||{});var v=Bf(),x=ue(v),b=ue(x),p=me(b);{var m=T=>{var o=Of(),d=ue(o);ce(o),Rt(()=>ln(d,`(${(E(h).sourcePortId||"OUT")??""} → ${(E(h).targetPortId||"IN")??""})`)),U(T,o)};Re(p,T=>{(E(h).sourcePortId||E(h).targetPortId)&&T(m)})}ce(x);var y=me(x,2);Zi(y,{variant:"danger",onclick:()=>e.graphActions.disconnectInput(e.activeNode.id,E(h).sourceId,E(h).targetPortId,E(h).sourcePortId),children:(T,o)=>{Ks(T,{size:12,weight:"bold"})},$$slots:{default:!0}}),ce(v),Rt(()=>ln(b,`${(E(g)?E(f).name||E(g).id:E(h).sourceId)??""} `)),U(c,v)});var s=me(a,2),l=ue(s);l.value=l.__value="";var u=me(l);Wn(u,17,()=>e.availableInputs,si,(c,h)=>{const g=K(()=>E(h));var f=Vf(),v=ue(f);ce(f);var x={};Rt(()=>{ln(v,`${(E(g).name||E(h).id)??""} (${E(h).type??""})`),x!==(x=E(h).id)&&(f.value=(f.__value=E(h).id)??"")}),U(c,f)}),ce(s),s.value=s.__value="",ce(r),ce(n),Vt("change",s,t),U(i,n),ze()}Ln(["change"]);var Gf=$e('<span style="font-size: 10px; color: var(--color-success); margin-right: 6px; font-weight: 600;">Kopierad!</span>'),kf=$e('<div style="display: flex; align-items: center;"><!> <!></div>'),Wf=$e('<div class="divider"></div> <!>',1),Zf=$e('<div class="props-content svelte-1hotla4"><!> <!> <div class="divider"></div> <!> <!></div>'),Xf=$e('<div class="node-properties svelte-1hotla4" style="height: 320px;"><div class="resize-handle svelte-1hotla4"></div> <div class="props-header svelte-1hotla4"><div class="header-title svelte-1hotla4"><h4 class="svelte-1hotla4"> </h4> <span> </span></div> <div style="display: flex; gap: 4px; align-items: center;"><!> <!></div></div> <!></div>');function qf(i,e){He(e,!0);const t=Kt("graph-actions"),n=Kt("settings-registry")||{};let r=K(()=>e.nodes.find(x=>x.id===xe.selectedNodeId)),a=K(()=>E(r)||{}),s=lt(Gi({})),l=lt(!1);gr(()=>{Fe(s,Se.request("GET_NODE_FACTORIES",void 0),!0)});let u=K(()=>E(r)?e.nodes.filter(x=>(x.type==="source"||x.type==="processor"||x.type==="subject")&&x.id!==E(r).id&&!(E(a).inputIds||[]).includes(x.id)):[]),c=K(()=>E(r)&&E(r).subType?n[E(r).subType]:null);async function h(){E(r)&&(await t.exportSubject(E(r).id),Fe(l,!0),setTimeout(()=>Fe(l,!1),2e3))}var g=st(),f=Qe(g);{var v=x=>{const b=K(()=>E(r).type==="subject"?"info":E(r).type==="source"?"success":E(r).type==="processor"?"warning":"error");var p=Xf(),m=ue(p);aa(m,N=>Ff?.(N));var y=me(m,2),T=ue(y),o=ue(T),d=ue(o,!0);ce(o);var A=me(o,2),C=ue(A,!0);ce(A),ce(T);var _=me(T,2),S=ue(_);{var D=N=>{var L=kf(),F=ue(L);{var P=Z=>{var j=Gf();U(Z,j)};Re(F,Z=>{E(l)&&Z(P)})}var V=me(F,2);Zi(V,{onclick:h,children:(Z,j)=>{var ne=st(),pe=Qe(ne);{var ie=Xe=>{zd(Xe,{size:14,weight:"bold",style:"color: var(--color-success)"})},Ie=Xe=>{iu(Xe,{size:14,weight:"bold"})};Re(pe,Xe=>{E(l)?Xe(ie):Xe(Ie,-1)})}U(Z,ne)},$$slots:{default:!0}}),ce(L),U(N,L)};Re(S,N=>{E(r).type==="subject"&&N(D)})}var R=me(S,2);Zi(R,{onclick:()=>xe.selectedNodeId=null,children:(N,L)=>{Ks(N,{size:14,weight:"bold"})},$$slots:{default:!0}}),ce(_),ce(y);var O=me(y,2);cd(O,()=>E(r).id,N=>{var L=Zf(),F=ue(L);{let ie=K(()=>E(a).name||"");Nl(F,{label:"Display Name",get value(){return E(ie)},get placeholder(){return E(r).id},onchange:Ie=>t.updateNodeConfig(E(r),{name:Ie})})}var P=me(F,2);{var V=ie=>{{let Ie=K(()=>E(r).subType||"dummy"),Xe=K(()=>E(s)[E(r).type].map(tt=>({value:tt.subType,label:tt.label})));yn(ie,{label:"Implementation",get value(){return E(Ie)},get options(){return E(Xe)},onchange:tt=>t.changeNodeSubType(E(r),tt)})}};Re(P,ie=>{E(s)[E(r).type]&&E(s)[E(r).type].length>0&&ie(V)})}var Z=me(P,4);{var j=ie=>{var Ie=st(),Xe=Qe(Ie);Cl(Xe,()=>E(c),(tt,$)=>{$(tt,{get node(){return E(r)}})}),U(ie,Ie)};Re(Z,ie=>{E(c)&&ie(j)})}var ne=me(Z,2);{var pe=ie=>{var Ie=Wf(),Xe=me(Qe(Ie),2);zf(Xe,{get activeNode(){return E(r)},get connections(){return e.connections},get availableInputs(){return E(u)},get nodes(){return e.nodes},get graphActions(){return t}}),U(ie,Ie)};Re(ne,ie=>{E(r).type!=="source"&&ie(pe)})}ce(L),U(N,L)}),ce(p),Rt(()=>{ln(d,E(a).name||E(r).id),ra(A,1,`badge ${E(b)??""}`,"svelte-1hotla4"),ln(C,E(r).type)}),rd(3,p,()=>ad,()=>({y:50,duration:250})),U(x,p)};Re(f,x=>{E(r)&&x(v)})}U(i,g),ze()}const Hi=["rgba(59, 130, 246, 0.75)","rgba(16, 185, 129, 0.75)","rgba(245, 158, 11, 0.75)","rgba(239, 68, 68, 0.75)","rgba(139, 92, 246, 0.75)","rgba(6, 182, 212, 0.75)"];function Yf(i,e,t,n,r=4){if(n.width===0||n.height===0)return[];const a=new Map;for(let d=0;d<i.length;d++){const A=i[d],C=`${A.sourceId}:${A.sourcePortId||""}->${A.targetId}:${A.targetPortId||""}`;a.has(C)||a.set(C,A)}const s=Array.from(a.values());s.sort((d,A)=>{const C=d.sourceId.localeCompare(A.sourceId);return C!==0?C:d.targetId.localeCompare(A.targetId)});const l=[],u=[];for(let d=0;d<s.length;d++){const A=s[d],C=e.find(R=>R.id===A.sourceId),_=e.find(R=>R.id===A.targetId),S=C?.type==="subject"&&_?.parentId===C?.id,D=_?.type==="subject"&&C?.parentId===_?.id;S||D?l.push(A):u.push(A)}const c=new Map,h=new Map;for(const d of u)c.set(d.sourceId,(c.get(d.sourceId)||0)+1),c.set(d.targetId,(c.get(d.targetId)||0)+1);for(const d of l){const A=e.find(S=>S.id===d.sourceId),C=e.find(S=>S.id===d.targetId);A?.type==="subject"&&C?.parentId===A?.id?(h.set(d.sourceId,(h.get(d.sourceId)||0)+1),c.set(d.targetId,(c.get(d.targetId)||0)+1)):(c.set(d.sourceId,(c.get(d.sourceId)||0)+1),h.set(d.targetId,(h.get(d.targetId)||0)+1))}const g=new Map,f=new Map,v=new Map,x=new Map,b=[];let p=0;const m=(d,A,C,_,S,D)=>{if(C){const F=d.querySelector(`.port-dot.${A}-port[data-port-id="${C}"]`);if(F){const P=F.getBoundingClientRect();return P.top+P.height/2}}const R=d.querySelectorAll(`.port-dot.${A}-port`);if(R.length>0){const P=R[Math.min(S,R.length-1)].getBoundingClientRect();return P.top+P.height/2}const O=d.querySelector(".port-capsule")||d.querySelector(".chevron-wrapper")||d.querySelector(".connection-port"),N=O?O.getBoundingClientRect():d.getBoundingClientRect(),L=(_-(D-1)/2)*r;return N.top+N.height/2+L},y=(d,A,C,_)=>{if(C){const O=d.querySelector(`.port-dot.${A}-port[data-port-id="${C}"]`);if(O)return O.getBoundingClientRect().left}const S=d.querySelectorAll(`.port-dot.${A}-port`);if(S.length>0)return S[Math.min(_,S.length-1)].getBoundingClientRect().left;const D=d.querySelector(".port-capsule")||d.querySelector(".chevron-wrapper")||d.querySelector(".connection-port");return(D?D.getBoundingClientRect():d.getBoundingClientRect()).left},T=d=>{const A=d.querySelector(".chevron-wrapper")||d.querySelector(".connection-port");return A?A.getBoundingClientRect():d.getBoundingClientRect()};for(let d=0;d<l.length;d++){const A=l[d],C=e.find(R=>R.id===A.sourceId),_=e.find(R=>R.id===A.targetId),S=t.get(A.sourceId),D=t.get(A.targetId);if(S&&D){const R=C?.type==="subject"&&_?.parentId===C?.id,O=p%Hi.length;if(p++,R){const N=T(S),L=h.get(A.sourceId)||1,F=x.get(A.sourceId)||0;x.set(A.sourceId,F+1);const P=(F-(L-1)/2)*r,V=c.get(A.targetId)||1,Z=g.get(A.targetId)||0;g.set(A.targetId,Z+1);const j=f.get(A.targetId)||0;f.set(A.targetId,j+1);const ne=N.left+N.width/2-n.left+P,pe=N.bottom-n.top,ie=y(D,"in",A.targetPortId,j)-n.left-2,Ie=m(D,"in",A.targetPortId,Z,j,V)-n.top;b.push({id:`${A.sourceId}-${A.sourcePortId||"any"}-${A.targetId}-${A.targetPortId||"any"}-child`,path:`M ${ne} ${pe} L ${ne} ${Ie} L ${ie} ${Ie}`,color:Hi[O],markerId:`arrow-${O}`})}else{const N=T(D),L=c.get(A.sourceId)||1,F=g.get(A.sourceId)||0;g.set(A.sourceId,F+1);const P=v.get(A.sourceId)||0;v.set(A.sourceId,P+1);const V=h.get(A.targetId)||1,Z=x.get(A.targetId)||0;x.set(A.targetId,Z+1);const j=(Z-(V-1)/2)*r,ne=y(S,"out",A.sourcePortId,P)-n.left-2,pe=m(S,"out",A.sourcePortId,F,P,L)-n.top,ie=N.left+N.width/2-n.left+j,Ie=N.bottom-n.top;b.push({id:`${A.sourceId}-${A.sourcePortId||"any"}-${A.targetId}-${A.targetPortId||"any"}-child`,path:`M ${ne} ${pe} L ${ie} ${pe} L ${ie} ${Ie}`,color:Hi[O],markerId:`arrow-${O}`})}}}const o=new Map;for(let d=0;d<u.length;d++){const A=u[d],C=e.find(D=>D.id===A.sourceId),_=e.find(D=>D.id===A.targetId);let S="root";C?.parentId&&C.parentId===_?.parentId&&(S=C.parentId),o.has(S)||o.set(S,[]),o.get(S).push(A)}for(const[d,A]of o.entries()){const C=[];let _=1/0;const S=d!=="root"?t.get(d):null;if(S){const N=T(S);_=N.left+N.width/2-n.left}else{let N=1/0;for(let L=0;L<A.length;L++){const F=A[L],P=t.get(F.sourceId),V=t.get(F.targetId);P&&(N=Math.min(N,y(P,"out",F.sourcePortId,0)-n.left)),V&&(N=Math.min(N,y(V,"in",F.targetPortId,0)-n.left))}_=N!==1/0?N-12:10}for(let N=0;N<A.length;N++){const L=A[N],F=t.get(L.sourceId),P=t.get(L.targetId);if(F&&P){const V=c.get(L.sourceId)||1,Z=g.get(L.sourceId)||0;g.set(L.sourceId,Z+1);const j=v.get(L.sourceId)||0;v.set(L.sourceId,j+1);const ne=c.get(L.targetId)||1,pe=g.get(L.targetId)||0;g.set(L.targetId,pe+1);const ie=f.get(L.targetId)||0;f.set(L.targetId,ie+1);const Ie=y(F,"out",L.sourcePortId,j)-n.left-2,Xe=m(F,"out",L.sourcePortId,Z,j,V)-n.top,tt=y(P,"in",L.targetPortId,ie)-n.left-2,$=m(P,"in",L.targetPortId,pe,ie,ne)-n.top,se=Math.min(Xe,$),de=Math.max(Xe,$),We=de-se;C.push({id:`${L.sourceId}-${L.sourcePortId||"any"}-${L.targetId}-${L.targetPortId||"any"}-bus`,startX:Ie,startY:Xe,endX:tt,endY:$,minY:se,maxY:de,length:We,colorIndex:p%Hi.length,trackIndex:0}),p++}}C.sort((N,L)=>N.length-L.length);const D=[];for(let N=0;N<C.length;N++){const L=C[N];let F=!1;for(let P=0;P<D.length;P++){const V=D[P];let Z=!1;for(let j=0;j<V.length;j++){const ne=V[j];if(L.minY-2<ne.maxY&&L.maxY+2>ne.minY){Z=!0;break}}if(!Z){V.push({minY:L.minY,maxY:L.maxY}),L.trackIndex=P,F=!0;break}}F||(D.push([{minY:L.minY,maxY:L.maxY}]),L.trackIndex=D.length-1)}const R=h.get(d)||0,O=R%2===0;for(let N=0;N<C.length;N++){const L=C[N];let F=0;if(d!=="root")if(R===0)if(L.trackIndex===0)F=_;else{const V=Math.ceil(L.trackIndex/2),Z=L.trackIndex%2===1?-1:1;F=_+Z*V*r}else if(O){const V=Math.floor(L.trackIndex/2)+R/2+.5,Z=L.trackIndex%2===0?-1:1;F=_+Z*V*r}else{const V=Math.floor(L.trackIndex/2)+Math.floor(R/2)+1,Z=L.trackIndex%2===0?-1:1;F=_+Z*V*r}else F=_-L.trackIndex*r;let P="";Math.abs(L.startY-L.endY)<2?P=`M ${L.startX} ${L.startY} L ${L.endX} ${L.endY}`:P=`M ${L.startX} ${L.startY} L ${F} ${L.startY} L ${F} ${L.endY} L ${L.endX} ${L.endY}`,b.push({id:L.id,path:P,color:Hi[L.colorIndex],markerId:`arrow-${L.colorIndex}`})}}return b}var Kf=Y('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),jf=Y('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path svelte-1f7lbxv"></path>'),Jf=Y('<svg class="data-connections-layer svelte-1f7lbxv" style="pointer-events: none; z-index: 10;"><defs></defs><!></svg>');function Qf(i,e){He(e,!0);let t,n=lt(Gi([])),r;function a(){if(!t)return;const c=t.getBoundingClientRect();Fe(n,Yf(e.connections,e.nodes,xe.nodeElements,c),!0)}li(()=>{e.connections,e.nodes,a()}),gr(()=>{const c=new ResizeObserver(a);c.observe(document.body),window.addEventListener("scroll",a,!0);function h(){(xe.draggedNodeId||xe.selectedNodeId)&&a(),r=requestAnimationFrame(h)}return h(),()=>{c.disconnect(),window.removeEventListener("scroll",a,!0),cancelAnimationFrame(r)}});var s=Jf(),l=ue(s);Wn(l,21,()=>Hi,si,(c,h,g)=>{var f=Kf();zt(f,"id",`arrow-${g}`);var v=ue(f);ce(f),Rt(()=>zt(v,"fill",E(h))),U(c,f)}),ce(l);var u=me(l);Wn(u,17,()=>E(n),c=>c.id,(c,h)=>{var g=jf();Rt(()=>{zt(g,"d",E(h).path),zt(g,"stroke",E(h).color),zt(g,"marker-end",`url(#${E(h).markerId??""})`)}),U(c,g)}),ce(s),hr(s,c=>t=c,()=>t),U(i,s),ze()}function Ol(i){return document.body.appendChild(i),{destroy(){i.parentNode&&i.parentNode.removeChild(i)}}}var $f=Y('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>');function e0(i,e){He(e,!0);const t=40,n=40,r=Kt("graph-actions");let a=lt(0),s=lt(0),l=lt(!1),u=lt(null),c=lt(null),h=lt(null),g=K(()=>E(l)?n:t);li(()=>{xe.dragConnectionSourceId!==E(u)&&(xe.dragConnectionSourceId&&(Fe(a,xe.dragStartX,!0),Fe(s,xe.dragStartY,!0)),Fe(u,xe.dragConnectionSourceId,!0))});function f(y,T,o){const d=y.querySelectorAll(o);if(d.length===0)return null;let A=1/0,C=null,_=0,S=0;for(let D=0;D<d.length;D++){const R=d[D].getBoundingClientRect(),O=R.top+R.height/2,N=Math.abs(T-O);N<A&&(A=N,_=O,S=R.left-2,C=d[D].getAttribute("data-port-id"))}return{bestPortId:C,bestX:S,bestY:_}}function v(y){if(xe.dragConnectionSourceId){Fe(l,y.pointerType==="touch"),Fe(a,y.clientX,!0),Fe(s,y.clientY,!0);const o=document.elementFromPoint(y.clientX,y.clientY)?.closest(".node-row");if(o){const d=o.getAttribute("data-node-id");if(d&&d!==xe.dragConnectionSourceId){const A=f(o,y.clientY,".in-port");if(A)xe.dragConnectionTargetId=d,Fe(c,A.bestX,!0),Fe(h,A.bestY,!0),xe.dragConnectionTargetPortId=A.bestPortId;else{const C=o.querySelector(".connection-port");if(C&&C.classList.contains("is-chevron")){xe.dragConnectionTargetId=d;const _=C.getBoundingClientRect();Fe(c,_.left-2),Fe(h,_.top+_.height/2),xe.dragConnectionTargetPortId=null}else xe.dragConnectionTargetId=null,xe.dragConnectionTargetPortId=null,Fe(c,null),Fe(h,null)}}else d===xe.dragConnectionSourceId&&xe.dragConnectionTargetId!==null&&(xe.dragConnectionTargetId=null,xe.dragConnectionTargetPortId=null,Fe(c,null),Fe(h,null))}else xe.dragConnectionTargetId!==null&&(xe.dragConnectionTargetId=null,xe.dragConnectionTargetPortId=null,Fe(c,null),Fe(h,null))}}function x(y){if(xe.dragConnectionSourceId){Fe(l,y.pointerType==="touch");let T=xe.dragConnectionTargetId,o=xe.dragConnectionTargetPortId;if(!T){const A=document.elementFromPoint(y.clientX,y.clientY)?.closest(".node-row");if(A){const C=A.getAttribute("data-node-id");if(C&&C!==xe.dragConnectionSourceId){const _=f(A,y.clientY,".in-port");if(_)T=C,o=_.bestPortId;else{const S=A.querySelector(".connection-port");S&&S.classList.contains("is-chevron")&&(T=C,o=null)}}}}T&&T!==xe.dragConnectionSourceId&&r.connectInput(T,xe.dragConnectionSourceId,o||void 0,xe.dragConnectionSourcePortId||void 0),xe.dragConnectionSourceId=null,xe.dragConnectionSourcePortId=null,xe.dragConnectionTargetId=null,xe.dragConnectionTargetPortId=null,Fe(c,null),Fe(h,null)}}var b=st();En("pointermove",Qa,v),En("pointerup",Qa,x);var p=Qe(b);{var m=y=>{const T=K(()=>xe.dragStartX),o=K(()=>xe.dragStartY),d=K(()=>E(a)-E(g)),A=K(()=>E(s)),C=K(()=>E(c)!==null?E(c):E(d)),_=K(()=>E(h)!==null?E(h):E(A)),S=K(()=>Math.min(E(T),E(C))-20);var D=$f(),R=me(ue(D));ce(D),aa(D,O=>Ol?.(O)),Rt(()=>zt(R,"d",`M ${E(T)} ${E(o)} L ${E(S)} ${E(o)} L ${E(S)} ${E(_)} L ${E(C)} ${E(_)}`)),U(y,D)};Re(p,y=>{xe.dragConnectionSourceId&&y(m)})}U(i,b),ze()}var t0=$e('<div class="palette-overlay svelte-15d5wgw" role="presentation"></div>'),n0=$e('<div class="editor svelte-15d5wgw"><div class="editor-content"><div class="editor-header svelte-15d5wgw"><h3 class="svelte-15d5wgw">Graph Editor</h3> <div class="palette-container svelte-15d5wgw"><!></div></div> <div class="tree-wrapper svelte-15d5wgw" role="presentation"><!> <div class="tree svelte-15d5wgw"></div> <!></div></div> <!> <!> <!></div>');function i0(i,e){He(e,!0);let t=lt(Gi([])),n=lt(Gi([]));const r=Gi({activeId:null,x:0,y:0});ur("palette-state",r);let a=K(()=>E(t).filter(_=>!_.parentId));function s(){const _=Se.request("GET_GRAPH_STATE",void 0);_&&(Fe(t,_.nodes,!0),Fe(n,_.connections,!0))}gr(()=>{s(),Se.on("GRAPH_UPDATED",s)}),Xs(()=>{Se.off("GRAPH_UPDATED",s)});function l(_){_.stopPropagation();const S=_.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=S.left,r.y=S.bottom+4)}const u={removeNode:_=>{Se.request("REMOVE_NODE",{id:_}),xe.selectedNodeId===_&&(xe.selectedNodeId=null)},addNode:(_,S)=>{const D=S+"-"+crypto.randomUUID().split("-")[0],R=S==="subject"?"default":"dummy",O=Se.request("CREATE_NODE",{id:D,type:S,subType:R,parentId:_||void 0});O&&(Se.request("REGISTER_NODE",{node:O}),r.activeId=null,xe.selectedNodeId=D)},updateNodeConfig:(_,S)=>{const D=_,R={name:D.name,capacity:D.capacity,operation:D.operation,textureId:D.textureId,bufferId:D.bufferId,url:D.url,dataPath:D.dataPath,timeKey:D.timeKey,unpackArray:D.unpackArray,unpackKey:D.unpackKey,unpackValue:D.unpackValue,data:D.data?Array.from(D.data):void 0,vertices:D.vertices,indices:D.indices,uvs:D.uvs,inputIds:D.inputIds?[...D.inputIds]:[],...S},O=Se.request("CREATE_NODE",{id:_.id,type:_.type,subType:_.subType||"dummy",parentId:_.parentId,config:R});O&&Se.request("REGISTER_NODE",{node:O})},changeNodeSubType:(_,S)=>{const D=_,R={inputIds:D.inputIds?[...D.inputIds]:[]},O=Se.request("CREATE_NODE",{id:_.id,type:_.type,subType:S,parentId:_.parentId,config:R});O&&Se.request("REGISTER_NODE",{node:O})},connectInput:(_,S,D,R)=>{Se.request("CONNECT_NODES",{sourceId:S,targetId:_,sourcePortId:R,targetPortId:D})},disconnectInput:(_,S,D,R)=>{Se.request("DISCONNECT_NODES",{sourceId:S,targetId:_,sourcePortId:R,targetPortId:D})},reparentNode:(_,S)=>{const D=E(t).find(R=>R.id===_);if(D){let R=S,O=!1;for(;R;){if(R===_){O=!0;break}const N=E(t).find(L=>L.id===R);R=N&&N.parentId||null}O||(D.parentId=S||void 0,Se.emit("GRAPH_UPDATED",void 0))}},reorderNode:(_,S,D)=>{Se.request("REORDER_NODE",{nodeId:_,targetId:S,position:D})},exportSubject:async _=>{const S=Se.request("GET_GRAPH_STATE",void 0),D=new Map,R=L=>{const F=S.nodes.find(Z=>Z.id===L);if(!F)return;const P=F;D.set(L,{id:F.id,type:F.type,subType:F.subType,parentId:F.id===_?void 0:F.parentId,config:{name:P.name,capacity:P.capacity,operation:P.operation,textureId:P.textureId,bufferId:P.bufferId,url:P.url,lat:P.lat,lon:P.lon,data:P.data?Array.from(P.data):void 0,vertices:P.vertices?Array.from(P.vertices):void 0,indices:P.indices?Array.from(P.indices):void 0,uvs:P.uvs?Array.from(P.uvs):void 0,inputIds:P.inputIds?[...P.inputIds]:[],exportMap:P.exportMap?{...P.exportMap}:void 0,inputMap:P.inputMap?{...P.inputMap}:void 0}});const V=S.nodes.filter(Z=>Z.parentId===L);for(let Z=0;Z<V.length;Z++)R(V[Z].id)};R(_);const O=S.connections.filter(L=>D.has(L.sourceId)&&D.has(L.targetId)),N={nodes:Array.from(D.values()),connections:O};try{await navigator.clipboard.writeText(JSON.stringify(N,null,2))}catch{}},importSubject:(_,S)=>{try{const D=JSON.parse(S);if(!D.nodes||!Array.isArray(D.nodes))return;const R=new Map;for(let O=0;O<D.nodes.length;O++){const N=D.nodes[O],L=N.type+"-"+crypto.randomUUID().split("-")[0];R.set(N.id,L)}for(let O=0;O<D.nodes.length;O++){const N=D.nodes[O],L=R.get(N.id),F=N.parentId?R.get(N.parentId):_,P={...N.config};P.inputIds&&(P.inputIds=P.inputIds.map(Z=>R.get(Z)||Z));const V=Se.request("CREATE_NODE",{id:L,type:N.type,subType:N.subType,parentId:F||void 0,config:P});V&&Se.request("REGISTER_NODE",{node:V})}if(D.connections&&Array.isArray(D.connections))for(let O=0;O<D.connections.length;O++){const N=D.connections[O],L=R.get(N.sourceId),F=R.get(N.targetId);L&&F&&Se.request("CONNECT_NODES",{sourceId:L,targetId:F,sourcePortId:N.sourcePortId,targetPortId:N.targetPortId})}}catch{}}};ur("graph-actions",u);function c(_){const S=r.activeId==="root"?null:r.activeId;u.addNode(S,_)}async function h(){try{const _=await navigator.clipboard.readText(),S=r.activeId==="root"?null:r.activeId;u.importSubject(S,_),r.activeId=null}catch{}}var g=n0();En("click",Qa,()=>r.activeId=null);var f=ue(g),v=ue(f),x=me(ue(v),2),b=ue(x);Zi(b,{title:"Add Root Node",onclick:l,children:(_,S)=>{Ll(_,{size:12,weight:"bold"})},$$slots:{default:!0}}),ce(x),ce(v);var p=me(v,2),m=ue(p);Qf(m,{get connections(){return E(n)},get nodes(){return E(t)}});var y=me(m,2);Wn(y,21,()=>E(a),si,(_,S)=>{Fl(_,{get node(){return E(S)},get nodes(){return E(t)}})}),ce(y);var T=me(y,2);{var o=_=>{var S=t0();aa(S,D=>Ol?.(D)),Vt("click",S,()=>r.activeId=null),U(_,S)};Re(T,_=>{r.activeId&&_(o)})}ce(p),ce(f);var d=me(f,2);qf(d,{get nodes(){return E(t)},get connections(){return E(n)}});var A=me(d,2);{let _=K(()=>r.activeId!==null);Nf(A,{get show(){return E(_)},get x(){return r.x},get y(){return r.y},onAdd:c,onImport:h})}var C=me(A,2);e0(C,{}),ce(g),En("dragover",p,_=>{xe.draggedNodeId&&_.preventDefault()}),En("drop",p,_=>{if(xe.draggedNodeId){_.preventDefault();const S=_.dataTransfer?.getData("text/plain");S&&u.reparentNode(S,null),xe.draggedNodeId=null}}),U(i,g),ze()}Ln(["click"]);class r0{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Se.handle("ALLOCATE_BUFFER",e=>{const t=e.id||crypto.randomUUID();return e.shared?this.allocateSharedRingBuffer(t,e.size):this.allocateColumnarBuffer(t,e.size),t}),Se.handle("FREE_BUFFER",e=>{let t=!1;return this.columnarBuffers.has(e.id)&&(this.columnarBuffers.delete(e.id),t=!0),this.ringBuffers.has(e.id)&&(this.ringBuffers.delete(e.id),t=!0),t&&Se.emit("MEMORY_FREED",{bufferId:e.id}),t}),Se.handle("GET_RING_BUFFER",e=>this.ringBuffers.get(e.id)),Se.handle("GET_COLUMNAR_BUFFER",e=>this.columnarBuffers.get(e.id)),Se.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(e,t){const n=new Float64Array(t);this.columnarBuffers.set(e,{id:e,capacity:t,length:0,data:n}),Se.emit("MEMORY_ALLOCATED",{bufferId:e,size:n.byteLength})}allocateSharedRingBuffer(e,t){const n=Int32Array.BYTES_PER_ELEMENT,r=t*Float32Array.BYTES_PER_ELEMENT,a=n+r,s=new SharedArrayBuffer(a),l=new Int32Array(s,0,1),u=new Float32Array(s,n,t);this.ringBuffers.set(e,{id:e,capacity:t,head:l,data:s,view:u}),Se.emit("MEMORY_ALLOCATED",{bufferId:e,size:a})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}destroy(){this.clear()}}class Bl{id;type="source";subType="ring-buffer";bufferId;parentId;exportMap;ringBuffer;outputBuffer;constructor(e,t,n){this.id=e,this.ringBuffer=t,this.bufferId=n,this.outputBuffer=new Float64Array(t?t.capacity:0)}getOutputs(){if(!this.ringBuffer)return{out:this.outputBuffer};const e=this.ringBuffer.head[0],t=this.ringBuffer.capacity,n=this.ringBuffer.view;for(let r=0;r<t;r++){const a=(e-r-1+t)%t;this.outputBuffer[r]=n[a]}return{out:this.outputBuffer}}}class a0{id;type="source";subType="static-array";parentId;exportMap;data;constructor(e,t){this.id=e,this.data=new Float64Array(t)}getOutputs(){return{out:this.data}}}class s0{id;type="source";subType="time";parentId;exportMap;outputBuffer;constructor(e){this.id=e,this.outputBuffer=new Float64Array(1)}getOutputs(){return this.outputBuffer[0]=performance.now()/1e3,{out:this.outputBuffer}}}class o0{id;type="source";subType="random";parentId;exportMap;capacity;outputBuffer;constructor(e,t){this.id=e,this.capacity=t,this.outputBuffer=new Float64Array(t)}getOutputs(){for(let e=0;e<this.outputBuffer.length;e++)this.outputBuffer[e]=Math.random();return{out:this.outputBuffer}}}class Mn{id;type="source";parentId;exportMap;capacity;url;outputBuffers={};static fetchCache=new Map;static MAX_CACHE_SIZE=20;constructor(e,t,n){this.id=e,this.capacity=t,this.url=n}async load(){if(this.url)try{const e=Date.now();for(const[r,a]of Mn.fetchCache.entries())e-a.time>6e4&&Mn.fetchCache.delete(r);let t=Mn.fetchCache.get(this.url);if(!t||e-t.time>6e4){if(Mn.fetchCache.size>=Mn.MAX_CACHE_SIZE){const a=Mn.fetchCache.keys().next().value;a&&Mn.fetchCache.delete(a)}t={promise:fetch(this.url).then(a=>a.json()),time:e},Mn.fetchCache.set(this.url,t)}const n=await t.promise;this.outputBuffers=this.parseResponse(n),Se.emit("GRAPH_UPDATED",void 0)}catch{this.outputBuffers={}}}createBuffer(){return new Float64Array(this.capacity)}getOutputs(){return this.outputBuffers}}class l0 extends Mn{subType="smhi-weather";constructor(e,t,n,r){const a=`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${r}/lat/${n}/data.json`;super(e,t,a),this.load()}parseResponse(e){const t={},n=e?.timeSeries;if(!Array.isArray(n))return t;const r=Math.min(n.length,this.capacity),a=this.createBuffer();t.time=a;for(let s=0;s<r;s++){const l=n[s];if(l.validTime&&(a[s]=new Date(l.validTime).getTime()/1e3),Array.isArray(l.parameters))for(const u of l.parameters)t[u.name]||(t[u.name]=this.createBuffer()),t[u.name][s]=u.values[0]}return t}}function Ao(i,e){He(e,!0);let t=cn(e,"exportMap",19,()=>({}));const n=Kt("subject-parent");li(()=>{const r=Se.request("GET_RING_BUFFER",{id:e.bufferId})||null,a=new Bl(e.id,r,e.bufferId);return a.parentId=n?.(),a.exportMap=t(),Se.request("REGISTER_NODE",{node:a}),()=>{Se.request("REMOVE_NODE",{id:e.id})}}),ze()}class Vl{id;type="sink";subType="sprite";textureId;parentId;inputMap;primitiveCache=[];constructor(e,t){this.id=e,this.textureId=t}consume(e){const t=e.x||[],n=e.y||[];if(t.length===0||n.length===0)return null;let r=t[0],a=n[0];const s=Math.min(r.length,a.length);for(;this.primitiveCache.length<s;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let l=0;l<this.primitiveCache.length;l++)if(l<s)if(r[l]===0&&a[l]===0)this.primitiveCache[l].opacity=0;else{const u=this.primitiveCache[l];u.x=r[l],u.y=a[l],u.opacity=1-l/s}else this.primitiveCache[l].opacity=0;return this.primitiveCache}}class c0{id;type="sink";subType="mesh";textureId;parentId;inputMap;vertices;indices;uvs;primitiveCache;constructor(e,t,n,r,a){this.id=e,this.textureId=t,this.vertices=n,this.indices=r,this.uvs=a,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(e){return this.primitiveCache}}function d0(i,e){He(e,!0);let t=cn(e,"inputIds",19,()=>[]),n=cn(e,"inputMap",19,()=>({}));const r=Kt("subject-parent");li(()=>{const a=new Vl(e.id,e.textureId);a.parentId=r?.(),a.inputMap=n(),Se.request("REGISTER_NODE",{node:a});for(let s=0;s<t().length;s++)Se.request("CONNECT_NODES",{sourceId:t()[s],targetId:e.id});return()=>{Se.request("REMOVE_NODE",{id:e.id})}}),ze()}const Js="183",u0=0,bo=1,h0=2,Yr=1,f0=2,cr=3,oi=0,Jt=1,tn=2,zn=0,ki=1,To=2,wo=3,Co=4,p0=5,xi=100,m0=101,g0=102,v0=103,_0=104,x0=200,M0=201,S0=202,E0=203,es=204,ts=205,y0=206,A0=207,b0=208,T0=209,w0=210,C0=211,R0=212,I0=213,P0=214,ns=0,is=1,rs=2,Xi=3,as=4,ss=5,os=6,ls=7,Hl=0,L0=1,D0=2,wn=0,zl=1,Gl=2,kl=3,Wl=4,Zl=5,Xl=6,ql=7,Yl=300,yi=301,qi=302,va=303,_a=304,sa=306,cs=1e3,Hn=1001,ds=1002,Gt=1003,U0=1004,Ar=1005,Xt=1006,xa=1007,Si=1008,on=1009,Kl=1010,jl=1011,fr=1012,Qs=1013,In=1014,bn=1015,Zn=1016,$s=1017,eo=1018,pr=1020,Jl=35902,Ql=35899,$l=1021,ec=1022,gn=1023,Xn=1026,Ei=1027,tc=1028,to=1029,Yi=1030,no=1031,io=1033,Kr=33776,jr=33777,Jr=33778,Qr=33779,us=35840,hs=35841,fs=35842,ps=35843,ms=36196,gs=37492,vs=37496,_s=37488,xs=37489,Ms=37490,Ss=37491,Es=37808,ys=37809,As=37810,bs=37811,Ts=37812,ws=37813,Cs=37814,Rs=37815,Is=37816,Ps=37817,Ls=37818,Ds=37819,Us=37820,Ns=37821,Fs=36492,Os=36494,Bs=36495,Vs=36283,Hs=36284,zs=36285,Gs=36286,N0=3200,F0=0,O0=1,ri="",sn="srgb",Ki="srgb-linear",ea="linear",ht="srgb",Ti=7680,Ro=519,B0=512,V0=513,H0=514,ro=515,z0=516,G0=517,ao=518,k0=519,Io=35044,Po="300 es",Tn=2e3,ta=2001;function W0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Z0(){const i=na("canvas");return i.style.display="block",i}const Lo={};function Do(...i){const e="THREE."+i.shift();console.log(e,...i)}function nc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=nc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=nc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ia(...i){const e=i.join(" ");e in Lo||(Lo[e]=!0,ke(...i))}function X0(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const q0={[ns]:is,[rs]:os,[as]:ls,[Xi]:ss,[is]:ns,[os]:rs,[ls]:as,[ss]:Xi};class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,ks=180/Math.PI;function vr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Y0(i,e){return(i%e+e)%e}function Sa(i,e,t){return(1-t)*i+t*e}function tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,l){let u=n[r+0],c=n[r+1],h=n[r+2],g=n[r+3],f=a[s+0],v=a[s+1],x=a[s+2],b=a[s+3];if(g!==b||u!==f||c!==v||h!==x){let p=u*f+c*v+h*x+g*b;p<0&&(f=-f,v=-v,x=-x,b=-b,p=-p);let m=1-l;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);m=Math.sin(m*y)/T,l=Math.sin(l*y)/T,u=u*m+f*l,c=c*m+v*l,h=h*m+x*l,g=g*m+b*l}else{u=u*m+f*l,c=c*m+v*l,h=h*m+x*l,g=g*m+b*l;const y=1/Math.sqrt(u*u+c*c+h*h+g*g);u*=y,c*=y,h*=y,g*=y}}e[t]=u,e[t+1]=c,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,s){const l=n[r],u=n[r+1],c=n[r+2],h=n[r+3],g=a[s],f=a[s+1],v=a[s+2],x=a[s+3];return e[t]=l*x+h*g+u*v-c*f,e[t+1]=u*x+h*f+c*g-l*v,e[t+2]=c*x+h*v+l*f-u*g,e[t+3]=h*x-l*g-u*f-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,l=Math.cos,u=Math.sin,c=l(n/2),h=l(r/2),g=l(a/2),f=u(n/2),v=u(r/2),x=u(a/2);switch(s){case"XYZ":this._x=f*h*g+c*v*x,this._y=c*v*g-f*h*x,this._z=c*h*x+f*v*g,this._w=c*h*g-f*v*x;break;case"YXZ":this._x=f*h*g+c*v*x,this._y=c*v*g-f*h*x,this._z=c*h*x-f*v*g,this._w=c*h*g+f*v*x;break;case"ZXY":this._x=f*h*g-c*v*x,this._y=c*v*g+f*h*x,this._z=c*h*x+f*v*g,this._w=c*h*g-f*v*x;break;case"ZYX":this._x=f*h*g-c*v*x,this._y=c*v*g+f*h*x,this._z=c*h*x-f*v*g,this._w=c*h*g+f*v*x;break;case"YZX":this._x=f*h*g+c*v*x,this._y=c*v*g+f*h*x,this._z=c*h*x-f*v*g,this._w=c*h*g-f*v*x;break;case"XZY":this._x=f*h*g-c*v*x,this._y=c*v*g-f*h*x,this._z=c*h*x+f*v*g,this._w=c*h*g+f*v*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],l=t[5],u=t[9],c=t[2],h=t[6],g=t[10],f=n+l+g;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(h-u)*v,this._y=(a-c)*v,this._z=(s-r)*v}else if(n>l&&n>g){const v=2*Math.sqrt(1+n-l-g);this._w=(h-u)/v,this._x=.25*v,this._y=(r+s)/v,this._z=(a+c)/v}else if(l>g){const v=2*Math.sqrt(1+l-n-g);this._w=(a-c)/v,this._x=(r+s)/v,this._y=.25*v,this._z=(u+h)/v}else{const v=2*Math.sqrt(1+g-n-l);this._w=(s-r)/v,this._x=(a+c)/v,this._y=(u+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,l=t._x,u=t._y,c=t._z,h=t._w;return this._x=n*h+s*l+r*c-a*u,this._y=r*h+s*u+a*l-n*c,this._z=a*h+s*c+n*u-r*l,this._w=s*h-n*l-r*u-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,a=-a,s=-s,l=-l);let u=1-t;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);u=Math.sin(u*c)/h,t=Math.sin(t*c)/h,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+s*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,l=e.z,u=e.w,c=2*(s*r-l*n),h=2*(l*t-a*r),g=2*(a*n-s*t);return this.x=t+u*c+s*g-l*h,this.y=n+u*h+l*c-a*g,this.z=r+u*g+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,l=t.y,u=t.z;return this.x=r*u-a*l,this.y=a*s-n*u,this.z=n*l-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new X,Uo=new Qi;class qe{constructor(e,t,n,r,a,s,l,u,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,l,u,c)}set(e,t,n,r,a,s,l,u,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=a,h[5]=u,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],l=n[3],u=n[6],c=n[1],h=n[4],g=n[7],f=n[2],v=n[5],x=n[8],b=r[0],p=r[3],m=r[6],y=r[1],T=r[4],o=r[7],d=r[2],A=r[5],C=r[8];return a[0]=s*b+l*y+u*d,a[3]=s*p+l*T+u*A,a[6]=s*m+l*o+u*C,a[1]=c*b+h*y+g*d,a[4]=c*p+h*T+g*A,a[7]=c*m+h*o+g*C,a[2]=f*b+v*y+x*d,a[5]=f*p+v*T+x*A,a[8]=f*m+v*o+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8];return t*s*h-t*l*c-n*a*h+n*l*u+r*a*c-r*s*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8],g=h*s-l*c,f=l*u-h*a,v=c*a-s*u,x=t*g+n*f+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=g*b,e[1]=(r*c-h*n)*b,e[2]=(l*n-r*s)*b,e[3]=f*b,e[4]=(h*t-r*u)*b,e[5]=(r*a-l*t)*b,e[6]=v*b,e[7]=(n*u-c*t)*b,e[8]=(s*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,l){const u=Math.cos(a),c=Math.sin(a);return this.set(n*u,n*c,-n*(u*s+c*l)+s+e,-r*c,r*u,-r*(-c*s+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new qe,No=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K0(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ht&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ht&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const it=K0();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class j0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=na("canvas")),wi.width=e.width,wi.height=e.height;const r=wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Gn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J0=0;class so{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?a.push(Aa(r[s].image)):a.push(Aa(r[s]))}else a=Aa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Q0=0;const ba=new X;class Yt extends Ji{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Hn,r=Hn,a=Xt,s=Si,l=gn,u=on,c=Yt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=vr(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=u,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Yl;Yt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const u=e.elements,c=u[0],h=u[4],g=u[8],f=u[1],v=u[5],x=u[9],b=u[2],p=u[6],m=u[10];if(Math.abs(h-f)<.01&&Math.abs(g-b)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(g+b)<.1&&Math.abs(x+p)<.1&&Math.abs(c+v+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,o=(v+1)/2,d=(m+1)/2,A=(h+f)/4,C=(g+b)/4,_=(x+p)/4;return T>o&&T>d?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=A/n,a=C/n):o>d?o<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(o),n=A/r,a=_/r):d<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(d),n=C/a,r=_/a),this.set(n,r,a,t),this}let y=Math.sqrt((p-x)*(p-x)+(g-b)*(g-b)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(g-b)/y,this.z=(f-h)/y,this.w=Math.acos((c+v+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Yt(r),s=n.count;for(let l=0;l<s;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new so(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends $0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ic extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e,t,n,r,a,s,l,u,c,h,g,f,v,x,b,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,l,u,c,h,g,f,v,x,b,p)}set(e,t,n,r,a,s,l,u,c,h,g,f,v,x,b,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=s,m[9]=l,m[13]=u,m[2]=c,m[6]=h,m[10]=g,m[14]=f,m[3]=v,m[7]=x,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),a=1/Ci.setFromMatrixColumn(e,1).length(),s=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),l=Math.sin(n),u=Math.cos(r),c=Math.sin(r),h=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const f=s*h,v=s*g,x=l*h,b=l*g;t[0]=u*h,t[4]=-u*g,t[8]=c,t[1]=v+x*c,t[5]=f-b*c,t[9]=-l*u,t[2]=b-f*c,t[6]=x+v*c,t[10]=s*u}else if(e.order==="YXZ"){const f=u*h,v=u*g,x=c*h,b=c*g;t[0]=f+b*l,t[4]=x*l-v,t[8]=s*c,t[1]=s*g,t[5]=s*h,t[9]=-l,t[2]=v*l-x,t[6]=b+f*l,t[10]=s*u}else if(e.order==="ZXY"){const f=u*h,v=u*g,x=c*h,b=c*g;t[0]=f-b*l,t[4]=-s*g,t[8]=x+v*l,t[1]=v+x*l,t[5]=s*h,t[9]=b-f*l,t[2]=-s*c,t[6]=l,t[10]=s*u}else if(e.order==="ZYX"){const f=s*h,v=s*g,x=l*h,b=l*g;t[0]=u*h,t[4]=x*c-v,t[8]=f*c+b,t[1]=u*g,t[5]=b*c+f,t[9]=v*c-x,t[2]=-c,t[6]=l*u,t[10]=s*u}else if(e.order==="YZX"){const f=s*u,v=s*c,x=l*u,b=l*c;t[0]=u*h,t[4]=b-f*g,t[8]=x*g+v,t[1]=g,t[5]=s*h,t[9]=-l*h,t[2]=-c*h,t[6]=v*g+x,t[10]=f-b*g}else if(e.order==="XZY"){const f=s*u,v=s*c,x=l*u,b=l*c;t[0]=u*h,t[4]=-g,t[8]=c*h,t[1]=f*g+b,t[5]=s*h,t[9]=v*g-x,t[2]=x*g-v,t[6]=l*h,t[10]=b*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,n){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Qn.crossVectors(n,$t),Qn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Qn.crossVectors(n,$t)),Qn.normalize(),br.crossVectors($t,Qn),r[0]=Qn.x,r[4]=br.x,r[8]=$t.x,r[1]=Qn.y,r[5]=br.y,r[9]=$t.y,r[2]=Qn.z,r[6]=br.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],l=n[4],u=n[8],c=n[12],h=n[1],g=n[5],f=n[9],v=n[13],x=n[2],b=n[6],p=n[10],m=n[14],y=n[3],T=n[7],o=n[11],d=n[15],A=r[0],C=r[4],_=r[8],S=r[12],D=r[1],R=r[5],O=r[9],N=r[13],L=r[2],F=r[6],P=r[10],V=r[14],Z=r[3],j=r[7],ne=r[11],pe=r[15];return a[0]=s*A+l*D+u*L+c*Z,a[4]=s*C+l*R+u*F+c*j,a[8]=s*_+l*O+u*P+c*ne,a[12]=s*S+l*N+u*V+c*pe,a[1]=h*A+g*D+f*L+v*Z,a[5]=h*C+g*R+f*F+v*j,a[9]=h*_+g*O+f*P+v*ne,a[13]=h*S+g*N+f*V+v*pe,a[2]=x*A+b*D+p*L+m*Z,a[6]=x*C+b*R+p*F+m*j,a[10]=x*_+b*O+p*P+m*ne,a[14]=x*S+b*N+p*V+m*pe,a[3]=y*A+T*D+o*L+d*Z,a[7]=y*C+T*R+o*F+d*j,a[11]=y*_+T*O+o*P+d*ne,a[15]=y*S+T*N+o*V+d*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],l=e[5],u=e[9],c=e[13],h=e[2],g=e[6],f=e[10],v=e[14],x=e[3],b=e[7],p=e[11],m=e[15],y=u*v-c*f,T=l*v-c*g,o=l*f-u*g,d=s*v-c*h,A=s*f-u*h,C=s*g-l*h;return t*(b*y-p*T+m*o)-n*(x*y-p*d+m*A)+r*(x*T-b*d+m*C)-a*(x*o-b*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],h=e[8],g=e[9],f=e[10],v=e[11],x=e[12],b=e[13],p=e[14],m=e[15],y=t*l-n*s,T=t*u-r*s,o=t*c-a*s,d=n*u-r*l,A=n*c-a*l,C=r*c-a*u,_=h*b-g*x,S=h*p-f*x,D=h*m-v*x,R=g*p-f*b,O=g*m-v*b,N=f*m-v*p,L=y*N-T*O+o*R+d*D-A*S+C*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(l*N-u*O+c*R)*F,e[1]=(r*O-n*N-a*R)*F,e[2]=(b*C-p*A+m*d)*F,e[3]=(f*A-g*C-v*d)*F,e[4]=(u*D-s*N-c*S)*F,e[5]=(t*N-r*D+a*S)*F,e[6]=(p*o-x*C-m*T)*F,e[7]=(h*C-f*o+v*T)*F,e[8]=(s*O-l*D+c*_)*F,e[9]=(n*D-t*O-a*_)*F,e[10]=(x*A-b*o+m*y)*F,e[11]=(g*o-h*A-v*y)*F,e[12]=(l*S-s*R-u*_)*F,e[13]=(t*R-n*S+r*_)*F,e[14]=(b*T-x*d-p*y)*F,e[15]=(h*d-g*T+f*y)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,l=e.y,u=e.z,c=a*s,h=a*l;return this.set(c*s+n,c*l-r*u,c*u+r*l,0,c*l+r*u,h*l+n,h*u-r*s,0,c*u-r*l,h*u+r*s,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,l=t._z,u=t._w,c=a+a,h=s+s,g=l+l,f=a*c,v=a*h,x=a*g,b=s*h,p=s*g,m=l*g,y=u*c,T=u*h,o=u*g,d=n.x,A=n.y,C=n.z;return r[0]=(1-(b+m))*d,r[1]=(v+o)*d,r[2]=(x-T)*d,r[3]=0,r[4]=(v-o)*A,r[5]=(1-(f+m))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(x+T)*C,r[9]=(p-y)*C,r[10]=(1-(f+b))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Ci.set(r[0],r[1],r[2]).length();const l=Ci.set(r[4],r[5],r[6]).length(),u=Ci.set(r[8],r[9],r[10]).length();a<0&&(s=-s),un.copy(this);const c=1/s,h=1/l,g=1/u;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=g,un.elements[9]*=g,un.elements[10]*=g,t.setFromRotationMatrix(un),n.x=s,n.y=l,n.z=u,this}makePerspective(e,t,n,r,a,s,l=Tn,u=!1){const c=this.elements,h=2*a/(t-e),g=2*a/(n-r),f=(t+e)/(t-e),v=(n+r)/(n-r);let x,b;if(u)x=a/(s-a),b=s*a/(s-a);else if(l===Tn)x=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(l===ta)x=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=v,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,l=Tn,u=!1){const c=this.elements,h=2/(t-e),g=2/(n-r),f=-(t+e)/(t-e),v=-(n+r)/(n-r);let x,b;if(u)x=1/(s-a),b=s/(s-a);else if(l===Tn)x=-2/(s-a),b=-(s+a)/(s-a);else if(l===ta)x=-1/(s-a),b=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=v,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new X,un=new Ct,tp=new X(0,0,0),np=new X(1,1,1),Qn=new X,br=new X,$t=new X,Oo=new Ct,Bo=new Qi;class qn{constructor(e=0,t=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],l=r[8],u=r[1],c=r[5],h=r[9],g=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,v),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ip=0;const Vo=new X,Ri=new Qi,Nn=new Ct,Tr=new X,nr=new X,rp=new X,ap=new Qi,Ho=new X(1,0,0),zo=new X(0,1,0),Go=new X(0,0,1),ko={type:"added"},sp={type:"removed"},Ii={type:"childadded",child:null},Ta={type:"childremoved",child:null};class rn extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new X,t=new qn,n=new Qi,r=new X(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(nr,Tr,this.up):Nn.lookAt(Tr,nr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ko),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ko),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const g=u[c];a(e.shapes,g)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,c=this.material.length;u<c;u++)l.push(a(e.materials,this.material[u]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(a(e.animations,u))}}if(t){const l=s(e.geometries),u=s(e.materials),c=s(e.textures),h=s(e.images),g=s(e.shapes),f=s(e.skeletons),v=s(e.animations),x=s(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new X(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wr extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const l=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const p=t.getJointPose(b,n),m=this._getHandJoint(c,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=h.position.distanceTo(g.position),v=.02,x=.005;c.inputState.pinching&&f>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(op)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Y0(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ca(s,a,e+1/3),this.g=Ca(s,a,e),this.b=Ca(s,a,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function n(a){a!==void 0&&parseFloat(a)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=ac[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return it.workingToColorSpace(Zt.copy(this),e),Math.round(et(Zt.r*255,0,255))*65536+Math.round(et(Zt.g*255,0,255))*256+Math.round(et(Zt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,a=Zt.b,s=Math.max(n,r,a),l=Math.min(n,r,a);let u,c;const h=(l+s)/2;if(l===s)u=0,c=0;else{const g=s-l;switch(c=h<=.5?g/(s+l):g/(2-s-l),s){case n:u=(r-a)/g+(r<a?6:0);break;case r:u=(a-n)/g+2;break;case a:u=(n-r)/g+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=sn){it.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Cr);const n=Sa($n.h,Cr.h,t),r=Sa($n.s,Cr.s,t),a=Sa($n.l,Cr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ct;ct.NAMES=ac;class lp extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new X,Fn=new X,Ra=new X,On=new X,Pi=new X,Li=new X,Wo=new X,Ia=new X,Pa=new X,La=new X,Da=new bt,Ua=new bt,Na=new bt;class mn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){hn.subVectors(r,t),Fn.subVectors(n,t),Ra.subVectors(e,t);const s=hn.dot(hn),l=hn.dot(Fn),u=hn.dot(Ra),c=Fn.dot(Fn),h=Fn.dot(Ra),g=s*c-l*l;if(g===0)return a.set(0,0,0),null;const f=1/g,v=(c*u-l*h)*f,x=(s*h-l*u)*f;return a.set(1-v-x,x,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,r,a,s,l,u){return this.getBarycoord(e,t,n,r,On)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,On.x),u.addScaledVector(s,On.y),u.addScaledVector(l,On.z),u)}static getInterpolatedAttribute(e,t,n,r,a,s){return Da.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Da,a.x),s.addScaledVector(Ua,a.y),s.addScaledVector(Na,a.z),s}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,l;Pi.subVectors(r,n),Li.subVectors(a,n),Ia.subVectors(e,n);const u=Pi.dot(Ia),c=Li.dot(Ia);if(u<=0&&c<=0)return t.copy(n);Pa.subVectors(e,r);const h=Pi.dot(Pa),g=Li.dot(Pa);if(h>=0&&g<=h)return t.copy(r);const f=u*g-h*c;if(f<=0&&u>=0&&h<=0)return s=u/(u-h),t.copy(n).addScaledVector(Pi,s);La.subVectors(e,a);const v=Pi.dot(La),x=Li.dot(La);if(x>=0&&v<=x)return t.copy(a);const b=v*c-u*x;if(b<=0&&c>=0&&x<=0)return l=c/(c-x),t.copy(n).addScaledVector(Li,l);const p=h*x-v*g;if(p<=0&&g-h>=0&&v-x>=0)return Wo.subVectors(a,r),l=(g-h)/(g-h+(v-x)),t.copy(r).addScaledVector(Wo,l);const m=1/(p+b+f);return s=b*m,l=f*m,t.copy(n).addScaledVector(Pi,s).addScaledVector(Li,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _r{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=a.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,fn):fn.fromBufferAttribute(a,s),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Ir.subVectors(this.max,ir),Di.subVectors(e.a,ir),Ui.subVectors(e.b,ir),Ni.subVectors(e.c,ir),ei.subVectors(Ui,Di),ti.subVectors(Ni,Ui),ui.subVectors(Di,Ni);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-ui.z,ui.y,ei.z,0,-ei.x,ti.z,0,-ti.x,ui.z,0,-ui.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-ui.y,ui.x,0];return!Fa(t,Di,Ui,Ni,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Di,Ui,Ni,Ir))?!1:(Pr.crossVectors(ei,ti),t=[Pr.x,Pr.y,Pr.z],Fa(t,Di,Ui,Ni,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new X,new X,new X,new X,new X,new X,new X,new X],fn=new X,Rr=new _r,Di=new X,Ui=new X,Ni=new X,ei=new X,ti=new X,ui=new X,ir=new X,Ir=new X,Pr=new X,hi=new X;function Fa(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){hi.fromArray(i,a);const l=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),u=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>l)return!1}return!0}const wt=new X,Lr=new mt;let cp=0;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),a=jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class sc extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const dp=new _r,rr=new X,Oa=new X;class oo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(rr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Oa)),this.expandByPoint(rr.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let up=0;const an=new Ct,Ba=new rn,Fi=new X,en=new _r,ar=new _r,Bt=new X;class Yn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?oc:sc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new kn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];en.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];ar.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(en.min,ar.min),en.expandByPoint(Bt),Bt.addVectors(en.max,ar.max),en.expandByPoint(Bt)):(en.expandByPoint(ar.min),en.expandByPoint(ar.max))}en.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Bt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let a=0,s=t.length;a<s;a++){const l=t[a],u=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Bt.fromBufferAttribute(l,c),u&&(Fi.fromBufferAttribute(e,c),Bt.add(Fi)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),l=[],u=[];for(let _=0;_<n.count;_++)l[_]=new X,u[_]=new X;const c=new X,h=new X,g=new X,f=new mt,v=new mt,x=new mt,b=new X,p=new X;function m(_,S,D){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),g.fromBufferAttribute(n,D),f.fromBufferAttribute(a,_),v.fromBufferAttribute(a,S),x.fromBufferAttribute(a,D),h.sub(c),g.sub(c),v.sub(f),x.sub(f);const R=1/(v.x*x.y-x.x*v.y);isFinite(R)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(g,-v.y).multiplyScalar(R),p.copy(g).multiplyScalar(v.x).addScaledVector(h,-x.x).multiplyScalar(R),l[_].add(b),l[S].add(b),l[D].add(b),u[_].add(p),u[S].add(p),u[D].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,S=y.length;_<S;++_){const D=y[_],R=D.start,O=D.count;for(let N=R,L=R+O;N<L;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const T=new X,o=new X,d=new X,A=new X;function C(_){d.fromBufferAttribute(r,_),A.copy(d);const S=l[_];T.copy(S),T.sub(d.multiplyScalar(d.dot(S))).normalize(),o.crossVectors(A,S);const R=o.dot(u[_])<0?-1:1;s.setXYZW(_,T.x,T.y,T.z,R)}for(let _=0,S=y.length;_<S;++_){const D=y[_],R=D.start,O=D.count;for(let N=R,L=R+O;N<L;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new X,a=new X,s=new X,l=new X,u=new X,c=new X,h=new X,g=new X;if(e)for(let f=0,v=e.count;f<v;f+=3){const x=e.getX(f+0),b=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,p),h.subVectors(s,a),g.subVectors(r,a),h.cross(g),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),l.add(h),u.add(h),c.add(h),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),g.subVectors(r,a),h.cross(g),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,u){const c=l.array,h=l.itemSize,g=l.normalized,f=new c.constructor(u.length*h);let v=0,x=0;for(let b=0,p=u.length;b<p;b++){l.isInterleavedBufferAttribute?v=u[b]*l.data.stride+l.offset:v=u[b]*h;for(let m=0;m<h;m++)f[x++]=c[v++]}return new Rn(f,h,g)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],c=e(u,n);t.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const u=[],c=a[l];for(let h=0,g=c.length;h<g;h++){const f=c[h],v=e(f,n);u.push(v)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,u=s.length;l<u;l++){const c=s[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let a=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let g=0,f=c.length;g<f;g++){const v=c[g];h.push(v.toJSON(e.data))}h.length>0&&(r[u]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],g=a[c];for(let f=0,v=g.length;f<v;f++)h.push(g[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const g=s[c];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hp=0;class oa extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=ki,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ts,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==es&&(n.blendSrc=this.blendSrc),this.blendDst!==ts&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const l in a){const u=a[l];delete u.metadata,s.push(u)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new X,Va=new X,Dr=new X,ni=new X,Ha=new X,Ur=new X,za=new X;class fp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Va.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Va);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Dr),l=ni.dot(this.direction),u=-ni.dot(Dr),c=ni.lengthSq(),h=Math.abs(1-s*s);let g,f,v,x;if(h>0)if(g=s*u-l,f=s*l-u,x=a*h,g>=0)if(f>=-x)if(f<=x){const b=1/h;g*=b,f*=b,v=g*(g+s*f+2*l)+f*(s*g+f+2*u)+c}else f=a,g=Math.max(0,-(s*f+l)),v=-g*g+f*(f+2*u)+c;else f=-a,g=Math.max(0,-(s*f+l)),v=-g*g+f*(f+2*u)+c;else f<=-x?(g=Math.max(0,-(-s*a+l)),f=g>0?-a:Math.min(Math.max(-a,-u),a),v=-g*g+f*(f+2*u)+c):f<=x?(g=0,f=Math.min(Math.max(-a,-u),a),v=f*(f+2*u)+c):(g=Math.max(0,-(s*a+l)),f=g>0?a:Math.min(Math.max(-a,-u),a),v=-g*g+f*(f+2*u)+c);else f=s>0?-a:a,g=Math.max(0,-(s*f+l)),v=-g*g+f*(f+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Va).addScaledVector(Dr,f),v}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),l=n-s,u=n+s;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,l,u;const c=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),g>=0?(l=(e.min.z-f.z)*g,u=(e.max.z-f.z)*g):(l=(e.max.z-f.z)*g,u=(e.min.z-f.z)*g),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,r,a){Ha.subVectors(t,e),Ur.subVectors(n,e),za.crossVectors(Ha,Ur);let s=this.direction.dot(za),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;ni.subVectors(this.origin,e);const u=l*this.direction.dot(Ur.crossVectors(ni,Ur));if(u<0)return null;const c=l*this.direction.dot(Ha.cross(ni));if(c<0||u+c>s)return null;const h=-l*ni.dot(za);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zi extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zo=new Ct,fi=new fp,Nr=new oo,Xo=new X,Fr=new X,Or=new X,Br=new X,Ga=new X,Vr=new X,qo=new X,Hr=new X;class nn extends rn{constructor(e=new Yn,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Vr.set(0,0,0);for(let u=0,c=a.length;u<c;u++){const h=l[u],g=a[u];h!==0&&(Ga.fromBufferAttribute(g,e),s?Vr.addScaledVector(Ga,h):Vr.addScaledVector(Ga.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(a),fi.copy(e.ray).recast(e.near),!(Nr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Nr,Xo)===null||fi.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Zo.copy(a).invert(),fi.copy(e.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,l=a.index,u=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,g=a.attributes.normal,f=a.groups,v=a.drawRange;if(l!==null)if(Array.isArray(s))for(let x=0,b=f.length;x<b;x++){const p=f[x],m=s[p.materialIndex],y=Math.max(p.start,v.start),T=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let o=y,d=T;o<d;o+=3){const A=l.getX(o),C=l.getX(o+1),_=l.getX(o+2);r=zr(this,m,e,n,c,h,g,A,C,_),r&&(r.faceIndex=Math.floor(o/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),b=Math.min(l.count,v.start+v.count);for(let p=x,m=b;p<m;p+=3){const y=l.getX(p),T=l.getX(p+1),o=l.getX(p+2);r=zr(this,s,e,n,c,h,g,y,T,o),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(s))for(let x=0,b=f.length;x<b;x++){const p=f[x],m=s[p.materialIndex],y=Math.max(p.start,v.start),T=Math.min(u.count,Math.min(p.start+p.count,v.start+v.count));for(let o=y,d=T;o<d;o+=3){const A=o,C=o+1,_=o+2;r=zr(this,m,e,n,c,h,g,A,C,_),r&&(r.faceIndex=Math.floor(o/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),b=Math.min(u.count,v.start+v.count);for(let p=x,m=b;p<m;p+=3){const y=p,T=p+1,o=p+2;r=zr(this,s,e,n,c,h,g,y,T,o),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function pp(i,e,t,n,r,a,s,l){let u;if(e.side===Jt?u=n.intersectTriangle(s,a,r,!0,l):u=n.intersectTriangle(r,a,s,e.side===oi,l),u===null)return null;Hr.copy(l),Hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function zr(i,e,t,n,r,a,s,l,u,c){i.getVertexPosition(l,Fr),i.getVertexPosition(u,Or),i.getVertexPosition(c,Br);const h=pp(i,e,t,n,Fr,Or,Br,qo);if(h){const g=new X;mn.getBarycoord(qo,Fr,Or,Br,g),r&&(h.uv=mn.getInterpolatedAttribute(r,l,u,c,g,new mt)),a&&(h.uv1=mn.getInterpolatedAttribute(a,l,u,c,g,new mt)),s&&(h.normal=mn.getInterpolatedAttribute(s,l,u,c,g,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:u,c,normal:new X,materialIndex:0};mn.getNormal(Fr,Or,Br,f.normal),h.face=f,h.barycoord=g}return h}class mp extends Yt{constructor(e=null,t=1,n=1,r,a,s,l,u,c=Gt,h=Gt,g,f){super(null,s,l,u,c,h,r,a,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=new X,gp=new X,vp=new qe;class _i{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ka.subVectors(n,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vp.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new oo,_p=new mt(.5,.5),Gr=new X;class lc{constructor(e=new _i,t=new _i,n=new _i,r=new _i,a=new _i,s=new _i){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const r=this.planes,a=e.elements,s=a[0],l=a[1],u=a[2],c=a[3],h=a[4],g=a[5],f=a[6],v=a[7],x=a[8],b=a[9],p=a[10],m=a[11],y=a[12],T=a[13],o=a[14],d=a[15];if(r[0].setComponents(c-s,v-h,m-x,d-y).normalize(),r[1].setComponents(c+s,v+h,m+x,d+y).normalize(),r[2].setComponents(c+l,v+g,m+b,d+T).normalize(),r[3].setComponents(c-l,v-g,m-b,d-T).normalize(),n)r[4].setComponents(u,f,p,o).normalize(),r[5].setComponents(c-u,v-f,m-p,d-o).normalize();else if(r[4].setComponents(c-u,v-f,m-p,d-o).normalize(),t===Tn)r[5].setComponents(c+u,v+f,m+p,d+o).normalize();else if(t===ta)r[5].setComponents(u,f,p,o).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=_p.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Gr.x=r.normal.x>0?e.max.x:e.min.x,Gr.y=r.normal.y>0?e.max.y:e.min.y,Gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends Yt{constructor(e=[],t=yi,n,r,a,s,l,u,c,h){super(e,t,n,r,a,s,l,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mr extends Yt{constructor(e,t,n=In,r,a,s,l=Gt,u=Gt,c,h=Xn,g=1){if(h!==Xn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:g};super(f,r,a,s,l,u,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xp extends mr{constructor(e,t=In,n=yi,r,a,s=Gt,l=Gt,u,c=Xn){const h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,r,a,s,l,u,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dc extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xr extends Yn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const l=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const u=[],c=[],h=[],g=[];let f=0,v=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(g,2));function x(b,p,m,y,T,o,d,A,C,_,S){const D=o/C,R=d/_,O=o/2,N=d/2,L=A/2,F=C+1,P=_+1;let V=0,Z=0;const j=new X;for(let ne=0;ne<P;ne++){const pe=ne*R-N;for(let ie=0;ie<F;ie++){const Ie=ie*D-O;j[b]=Ie*y,j[p]=pe*T,j[m]=L,c.push(j.x,j.y,j.z),j[b]=0,j[p]=0,j[m]=A>0?1:-1,h.push(j.x,j.y,j.z),g.push(ie/C),g.push(1-ne/_),V+=1}}for(let ne=0;ne<_;ne++)for(let pe=0;pe<C;pe++){const ie=f+pe+F*ne,Ie=f+pe+F*(ne+1),Xe=f+(pe+1)+F*(ne+1),tt=f+(pe+1)+F*ne;u.push(ie,Ie,tt),u.push(Ie,Xe,tt),Z+=6}l.addGroup(v,Z,S),v+=Z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mr extends Yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,l=Math.floor(n),u=Math.floor(r),c=l+1,h=u+1,g=e/l,f=t/u,v=[],x=[],b=[],p=[];for(let m=0;m<h;m++){const y=m*f-s;for(let T=0;T<c;T++){const o=T*g-a;x.push(o,-y,0),b.push(0,0,1),p.push(T/l),p.push(1-m/u)}}for(let m=0;m<u;m++)for(let y=0;y<l;y++){const T=y+c*m,o=y+c*(m+1),d=y+1+c*(m+1),A=y+1+c*m;v.push(T,o,A),v.push(o,d,A)}this.setIndex(v),this.setAttribute("position",new kn(x,3)),this.setAttribute("normal",new kn(b,3)),this.setAttribute("uv",new kn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const r in n)e[r]=n[r]}return e}function Mp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Sp={clone:ji,merge:qt};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ap extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bp extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kr=new X,Wr=new Qi,_n=new X;class hc extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kr,Wr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Wr,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kr,Wr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Wr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new X,Yo=new mt,Ko=new mt;class pn extends hc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Ko),t.subVectors(Ko,Yo)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/u,t-=s.offsetY*n/c,r*=s.width/u,n*=s.height/c}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lo extends hc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=-90,Bi=1;class wp extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const a=new pn(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const s=new pn(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const l=new pn(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const u=new pn(Oi,Bi,e,t);u.layers=this.layers,this.add(u);const c=new pn(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,l,u]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,l,u,c,h]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,f,v),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Cp extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function jo(i,e,t,n){const r=Rp(n);switch(t){case $l:return i*e;case tc:return i*e/r.components*r.byteLength;case to:return i*e/r.components*r.byteLength;case Yi:return i*e*2/r.components*r.byteLength;case no:return i*e*2/r.components*r.byteLength;case ec:return i*e*3/r.components*r.byteLength;case gn:return i*e*4/r.components*r.byteLength;case io:return i*e*4/r.components*r.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hs:case ps:return Math.max(i,16)*Math.max(e,8)/4;case us:case fs:return Math.max(i,8)*Math.max(e,8)/2;case ms:case gs:case _s:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vs:case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case As:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fs:case Os:case Bs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vs:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zs:case Gs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(i){switch(i){case on:case Kl:return{byteLength:1,components:1};case fr:case jl:case Zn:return{byteLength:2,components:1};case $s:case eo:return{byteLength:2,components:4};case In:case Qs:case bn:return{byteLength:4,components:1};case Jl:case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);function fc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ip(i){const e=new WeakMap;function t(l,u){const c=l.array,h=l.usage,g=c.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,c,h),l.onUploadCallback();let v;if(c instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)v=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=i.SHORT;else if(c instanceof Uint32Array)v=i.UNSIGNED_INT;else if(c instanceof Int32Array)v=i.INT;else if(c instanceof Int8Array)v=i.BYTE;else if(c instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,u,c){const h=u.array,g=u.updateRanges;if(i.bindBuffer(c,l),g.length===0)i.bufferSubData(c,0,h);else{g.sort((v,x)=>v.start-x.start);let f=0;for(let v=1;v<g.length;v++){const x=g[f],b=g[v];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,g[f]=b)}g.length=f+1;for(let v=0,x=g.length;v<x;v++){const b=g[v];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function s(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,u));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,u),c.version=l.version}}return{get:r,remove:a,update:s}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Up,alphatest_fragment:Np,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:Vp,batching_vertex:Hp,begin_vertex:zp,beginnormal_vertex:Gp,bsdfs:kp,iridescence_fragment:Wp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Kp,color_fragment:jp,color_pars_fragment:Jp,color_pars_vertex:Qp,color_vertex:$p,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:am,emissivemap_pars_fragment:sm,colorspace_fragment:om,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:dm,envmap_pars_fragment:um,envmap_pars_vertex:hm,envmap_physical_pars_fragment:ym,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:vm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:Sm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:bm,lights_phong_fragment:Tm,lights_phong_pars_fragment:wm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Im,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Gm,morphinstance_vertex:km,morphcolor_vertex:Wm,morphnormal_vertex:Zm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Jm,normal_vertex:Qm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:r1,packing:a1,premultiplied_alpha_fragment:s1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:f1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:v1,skinning_vertex:_1,skinnormal_vertex:x1,specularmap_fragment:M1,specularmap_pars_fragment:S1,tonemapping_fragment:E1,tonemapping_pars_fragment:y1,transmission_fragment:A1,transmission_pars_fragment:b1,uv_pars_fragment:T1,uv_pars_vertex:w1,uv_vertex:C1,worldpos_vertex:R1,background_vert:I1,background_frag:P1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:U1,cube_frag:N1,depth_vert:F1,depth_frag:O1,distance_vert:B1,distance_frag:V1,equirect_vert:H1,equirect_frag:z1,linedashed_vert:G1,linedashed_frag:k1,meshbasic_vert:W1,meshbasic_frag:Z1,meshlambert_vert:X1,meshlambert_frag:q1,meshmatcap_vert:Y1,meshmatcap_frag:K1,meshnormal_vert:j1,meshnormal_frag:J1,meshphong_vert:Q1,meshphong_frag:$1,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:rg,points_frag:ag,shadow_vert:sg,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},ge={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Sn={basic:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:qt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:qt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:qt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:qt([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:qt([ge.lights,ge.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Sn.physical={uniforms:qt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Zr={r:0,b:0,g:0},mi=new qn,dg=new Ct;function ug(i,e,t,n,r,a){const s=new ct(0);let l=r===!0?0:1,u,c,h=null,g=0,f=null;function v(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const o=y.backgroundBlurriness>0;T=e.get(T,o)}return T}function x(y){let T=!1;const o=v(y);o===null?p(s,l):o&&o.isColor&&(p(o,1),T=!0);const d=i.xr.getEnvironmentBlendMode();d==="additive"?t.buffers.color.setClear(0,0,0,1,a):d==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,T){const o=v(T);o&&(o.isCubeTexture||o.mapping===sa)?(c===void 0&&(c=new nn(new xr(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ji(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(d,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),mi.copy(T.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=o,c.material.uniforms.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(mi)),c.material.toneMapped=it.getTransfer(o.colorSpace)!==ht,(h!==o||g!==o.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=o,g=o.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):o&&o.isTexture&&(u===void 0&&(u=new nn(new Mr(2,2),new Pn({name:"BackgroundMaterial",uniforms:ji(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=o,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=it.getTransfer(o.colorSpace)!==ht,o.matrixAutoUpdate===!0&&o.updateMatrix(),u.material.uniforms.uvTransform.value.copy(o.matrix),(h!==o||g!==o.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=o,g=o.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,T){y.getRGB(Zr,uc(i)),t.buffers.color.setClear(Zr.r,Zr.g,Zr.b,T,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,T=1){s.set(y),l=T,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(s,l)},render:x,addToRenderList:b,dispose:m}}function hg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function l(R,O,N,L,F){let P=!1;const V=g(R,L,N,O);a!==V&&(a=V,c(a.object)),P=v(R,L,N,F),P&&x(R,L,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(P||s)&&(s=!1,o(R,O,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function u(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function g(R,O,N,L){const F=L.wireframe===!0;let P=n[O.id];P===void 0&&(P={},n[O.id]=P);const V=R.isInstancedMesh===!0?R.id:0;let Z=P[V];Z===void 0&&(Z={},P[V]=Z);let j=Z[N.id];j===void 0&&(j={},Z[N.id]=j);let ne=j[F];return ne===void 0&&(ne=f(u()),j[F]=ne),ne}function f(R){const O=[],N=[],L=[];for(let F=0;F<t;F++)O[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:L,object:R,attributes:{},index:null}}function v(R,O,N,L){const F=a.attributes,P=O.attributes;let V=0;const Z=N.getAttributes();for(const j in Z)if(Z[j].location>=0){const pe=F[j];let ie=P[j];if(ie===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),pe===void 0||pe.attribute!==ie||ie&&pe.data!==ie.data)return!0;V++}return a.attributesNum!==V||a.index!==L}function x(R,O,N,L){const F={},P=O.attributes;let V=0;const Z=N.getAttributes();for(const j in Z)if(Z[j].location>=0){let pe=P[j];pe===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const ie={};ie.attribute=pe,pe&&pe.data&&(ie.data=pe.data),F[j]=ie,V++}a.attributes=F,a.attributesNum=V,a.index=L}function b(){const R=a.newAttributes;for(let O=0,N=R.length;O<N;O++)R[O]=0}function p(R){m(R,0)}function m(R,O){const N=a.newAttributes,L=a.enabledAttributes,F=a.attributeDivisors;N[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),F[R]!==O&&(i.vertexAttribDivisor(R,O),F[R]=O)}function y(){const R=a.newAttributes,O=a.enabledAttributes;for(let N=0,L=O.length;N<L;N++)O[N]!==R[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function T(R,O,N,L,F,P,V){V===!0?i.vertexAttribIPointer(R,O,N,F,P):i.vertexAttribPointer(R,O,N,L,F,P)}function o(R,O,N,L){b();const F=L.attributes,P=N.getAttributes(),V=O.defaultAttributeValues;for(const Z in P){const j=P[Z];if(j.location>=0){let ne=F[Z];if(ne===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const pe=ne.normalized,ie=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;const Xe=Ie.buffer,tt=Ie.type,$=Ie.bytesPerElement,se=tt===i.INT||tt===i.UNSIGNED_INT||ne.gpuType===Qs;if(ne.isInterleavedBufferAttribute){const de=ne.data,We=de.stride,Oe=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<j.locationSize;Ve++)m(j.location+Ve,de.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)p(j.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ve=0;Ve<j.locationSize;Ve++)T(j.location+Ve,ie/j.locationSize,tt,pe,We*$,(Oe+ie/j.locationSize*Ve)*$,se)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)m(j.location+de,ne.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<j.locationSize;de++)p(j.location+de);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let de=0;de<j.locationSize;de++)T(j.location+de,ie/j.locationSize,tt,pe,ie*$,ie/j.locationSize*de*$,se)}}else if(V!==void 0){const pe=V[Z];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(j.location,pe);break;case 3:i.vertexAttrib3fv(j.location,pe);break;case 4:i.vertexAttrib4fv(j.location,pe);break;default:i.vertexAttrib1fv(j.location,pe)}}}}y()}function d(){S();for(const R in n){const O=n[R];for(const N in O){const L=O[N];for(const F in L){const P=L[F];for(const V in P)h(P[V].object),delete P[V];delete L[F]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const O=n[R.id];for(const N in O){const L=O[N];for(const F in L){const P=L[F];for(const V in P)h(P[V].object),delete P[V];delete L[F]}}delete n[R.id]}function C(R){for(const O in n){const N=n[O];for(const L in N){const F=N[L];if(F[R.id]===void 0)continue;const P=F[R.id];for(const V in P)h(P[V].object),delete P[V];delete F[R.id]}}}function _(R){for(const O in n){const N=n[O],L=R.isInstancedMesh===!0?R.id:0,F=N[L];if(F!==void 0){for(const P in F){const V=F[P];for(const Z in V)h(V[Z].object),delete V[Z];delete F[P]}delete N[L],Object.keys(N).length===0&&delete n[O]}}}function S(){D(),s=!0,a!==r&&(a=r,c(a.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:S,resetDefaultState:D,dispose:d,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:p,disableUnusedAttributes:y}}function fg(i,e,t){let n;function r(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,g){g!==0&&(i.drawArraysInstanced(n,c,h,g),t.update(h,n,g))}function l(c,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];t.update(v,n,1)}function u(c,h,g,f){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<c.length;x++)s(c[x],h[x],f[x]);else{v.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,g);let x=0;for(let b=0;b<g;b++)x+=h[b]*f[b];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function pg(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const _=C===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!_)}function u(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=u(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const g=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),o=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),d=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:s,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:o,maxSamples:d,samples:A}}function mg(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new _i,l=new qe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){const v=g.length!==0||f||n!==0||r;return r=f,n=g.length,v},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,f){t=h(g,f,0)},this.setState=function(g,f,v){const x=g.clippingPlanes,b=g.clipIntersection,p=g.clipShadows,m=i.get(g);if(!r||x===null||x.length===0||a&&!p)a?h(null):c();else{const y=a?0:n,T=y*4;let o=m.clippingState||null;u.value=o,o=h(x,f,T,v);for(let d=0;d!==T;++d)o[d]=t[d];m.clippingState=o,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,f,v,x){const b=g!==null?g.length:0;let p=null;if(b!==0){if(p=u.value,x!==!0||p===null){const m=v+b*4,y=f.matrixWorldInverse;l.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,o=v;T!==b;++T,o+=4)s.copy(g[T]).applyMatrix4(y,l),s.normal.toArray(p,o),p[o+3]=s.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}const ai=4,Jo=[.125,.215,.35,.446,.526,.582],Mi=20,gg=256,sr=new lo,Qo=new ct;let Wa=null,Za=0,Xa=0,qa=!1;const vg=new X;class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:l=vg}=a;Wa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Za,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Zn,format:gn,colorSpace:Ki,depthBuffer:!1},r=el(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_g(a)),this._blurMaterial=Mg(a,e,t),this._ggxMaterial=xg(a,e,t)}return r}_compileMaterial(e){const t=new nn(new Yn,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,n,r,a){const u=new pn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,v=g.toneMapping;g.getClearColor(Qo),g.toneMapping=wn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new xr,new zi({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,p=b.material;let m=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Qo),m=!0);for(let T=0;T<6;T++){const o=T%3;o===0?(u.up.set(0,c[T],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+h[T],a.y,a.z)):o===1?(u.up.set(0,0,c[T]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+h[T],a.z)):(u.up.set(0,c[T],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+h[T]));const d=this._cubeSize;Vi(r,o*d,T>2?d:0,d,d),g.setRenderTarget(r),m&&g.render(b,u),g.render(e,u)}g.toneMapping=v,g.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const l=a.uniforms;l.envMap.value=e;const u=this._cubeSize;Vi(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(s,sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,l=this._lodMeshes[n];l.material=s;const u=s.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-h*h),f=0+c*1.25,v=g*f,{_lodMax:x}=this,b=this._sizeLods[n],p=3*b*(n>x-ai?n-x+ai:0),m=4*(this._cubeSize-b);u.envMap.value=e.texture,u.roughness.value=v,u.mipInt.value=x-t,Vi(a,p,m,3*b,2*b),r.setRenderTarget(a),r.render(l,sr),u.envMap.value=a.texture,u.roughness.value=0,u.mipInt.value=x-n,Vi(e,p,m,3*b,2*b),r.setRenderTarget(e),r.render(l,sr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,l){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const h=3,g=this._lodMeshes[r];g.material=c;const f=c.uniforms,v=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Mi-1),b=a/x,p=isFinite(a)?1+Math.floor(h*b):Mi;p>Mi&&ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const m=[];let y=0;for(let C=0;C<Mi;++C){const _=C/b,S=Math.exp(-_*_/2);m.push(S),C===0?y+=S:C<p&&(y+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-n;const o=this._sizeLods[r],d=3*o*(r>T-ai?r-T+ai:0),A=4*(this._cubeSize-o);Vi(t,d,A,3*o,2*o),u.setRenderTarget(t),u.render(g,sr)}}function _g(i){const e=[],t=[],n=[];let r=i;const a=i-ai+1+Jo.length;for(let s=0;s<a;s++){const l=Math.pow(2,r);e.push(l);let u=1/l;s>i-ai?u=Jo[s-i+ai-1]:s===0&&(u=0),t.push(u);const c=1/(l-2),h=-c,g=1+c,f=[h,h,g,h,g,g,h,h,g,g,h,g],v=6,x=6,b=3,p=2,m=1,y=new Float32Array(b*x*v),T=new Float32Array(p*x*v),o=new Float32Array(m*x*v);for(let A=0;A<v;A++){const C=A%3*2/3-1,_=A>2?0:-1,S=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(S,b*x*A),T.set(f,p*x*A);const D=[A,A,A,A,A,A];o.set(D,m*x*A)}const d=new Yn;d.setAttribute("position",new Rn(y,b)),d.setAttribute("uv",new Rn(T,p)),d.setAttribute("faceIndex",new Rn(o,m)),n.push(new nn(d,null)),r>ai&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function el(i,e,t){const n=new Cn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xg(i,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mg(i,e,t){const n=new Float32Array(Mi),r=new X(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tl(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function nl(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pc extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xr(5,5,5),a=new Pn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:zn});a.uniforms.tEquirect.value=t;const s=new nn(r,a),l=t.minFilter;return t.minFilter===Si&&(t.minFilter=Xt),new wp(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function Sg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,v=!1){return f==null?null:v?s(f):a(f)}function a(f){if(f&&f.isTexture){const v=f.mapping;if(v===va||v===_a)if(e.has(f)){const x=e.get(f).texture;return l(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const b=new pc(x.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",c),l(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const v=f.mapping,x=v===va||v===_a,b=v===yi||v===qi;if(x||b){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new $o(i)),p=x?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const y=f.image;return x&&y&&y.height>0||b&&y&&u(y)?(n===null&&(n=new $o(i)),p=x?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function l(f,v){return v===va?f.mapping=yi:v===_a&&(f.mapping=qi),f}function u(f){let v=0;const x=6;for(let b=0;b<x;b++)f[b]!==void 0&&v++;return v===x}function c(f){const v=f.target;v.removeEventListener("dispose",c);const x=e.get(v);x!==void 0&&(e.delete(v),x.dispose())}function h(f){const v=f.target;v.removeEventListener("dispose",h);const x=t.get(v);x!==void 0&&(t.delete(v),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Eg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ia("WebGLRenderer: "+n+" extension not supported."),r}}}function yg(i,e,t,n){const r={},a=new WeakMap;function s(g){const f=g.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(g,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function u(g){const f=g.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER)}function c(g){const f=[],v=g.index,x=g.attributes.position;let b=0;if(x===void 0)return;if(v!==null){const y=v.array;b=v.version;for(let T=0,o=y.length;T<o;T+=3){const d=y[T+0],A=y[T+1],C=y[T+2];f.push(d,A,A,C,C,d)}}else{const y=x.array;b=x.version;for(let T=0,o=y.length/3-1;T<o;T+=3){const d=T+0,A=T+1,C=T+2;f.push(d,A,A,C,C,d)}}const p=new(x.count>=65535?oc:sc)(f,1);p.version=b;const m=a.get(g);m&&e.remove(m),a.set(g,p)}function h(g){const f=a.get(g);if(f){const v=g.index;v!==null&&f.version<v.version&&c(g)}else c(g);return a.get(g)}return{get:l,update:u,getWireframeAttribute:h}}function Ag(i,e,t){let n;function r(f){n=f}let a,s;function l(f){a=f.type,s=f.bytesPerElement}function u(f,v){i.drawElements(n,v,a,f*s),t.update(v,n,1)}function c(f,v,x){x!==0&&(i.drawElementsInstanced(n,v,a,f*s,x),t.update(v,n,x))}function h(f,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,f,0,x);let p=0;for(let m=0;m<x;m++)p+=v[m];t.update(p,n,1)}function g(f,v,x,b){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/s,v[m],b[m]);else{p.multiDrawElementsInstancedWEBGL(n,v,0,a,f,0,b,0,x);let m=0;for(let y=0;y<x;y++)m+=v[y]*b[y];t.update(m,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function bg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,l){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:at("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tg(i,e,t){const n=new WeakMap,r=new bt;function a(s,l,u){const c=s.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==g){let S=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let T=0;v===!0&&(T=1),x===!0&&(T=2),b===!0&&(T=3);let o=l.attributes.position.count*T,d=1;o>e.maxTextureSize&&(d=Math.ceil(o/e.maxTextureSize),o=e.maxTextureSize);const A=new Float32Array(o*d*4*g),C=new ic(A,o,d,g);C.type=bn,C.needsUpdate=!0;const _=T*4;for(let D=0;D<g;D++){const R=p[D],O=m[D],N=y[D],L=o*d*4*D;for(let F=0;F<R.count;F++){const P=F*_;v===!0&&(r.fromBufferAttribute(R,F),A[L+P+0]=r.x,A[L+P+1]=r.y,A[L+P+2]=r.z,A[L+P+3]=0),x===!0&&(r.fromBufferAttribute(O,F),A[L+P+4]=r.x,A[L+P+5]=r.y,A[L+P+6]=r.z,A[L+P+7]=0),b===!0&&(r.fromBufferAttribute(N,F),A[L+P+8]=r.x,A[L+P+9]=r.y,A[L+P+10]=r.z,A[L+P+11]=N.itemSize===4?r.w:1)}}f={count:g,texture:C,size:new mt(o,d)},n.set(l,f),l.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let b=0;b<c.length;b++)v+=c[b];const x=l.morphTargetsRelative?1:1-v;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function wg(i,e,t,n,r){let a=new WeakMap;function s(c){const h=r.render.frame,g=c.geometry,f=e.get(c,g);if(a.get(f)!==h&&(e.update(f),a.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const v=c.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return f}function l(){a=new WeakMap}function u(c){const h=c.target;h.removeEventListener("dispose",u),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:l}}const Cg={[zl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[kl]:"CINEON_TONE_MAPPING",[Wl]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function Rg(i,e,t,n,r){const a=new Cn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),s=new Cn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new Yn;l.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new kn([0,2,0,0,2,0],2));const u=new Ap({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new nn(l,u),h=new lo(-1,1,1,-1,0,1);let g=null,f=null,v=!1,x,b=null,p=[],m=!1;this.setSize=function(y,T){a.setSize(y,T),s.setSize(y,T);for(let o=0;o<p.length;o++){const d=p[o];d.setSize&&d.setSize(y,T)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;const T=a.width,o=a.height;for(let d=0;d<p.length;d++){const A=p[d];A.setSize&&A.setSize(T,o)}},this.begin=function(y,T){if(v||y.toneMapping===wn&&p.length===0)return!1;if(b=T,T!==null){const o=T.width,d=T.height;(a.width!==o||a.height!==d)&&this.setSize(o,d)}return m===!1&&y.setRenderTarget(a),x=y.toneMapping,y.toneMapping=wn,!0},this.hasRenderPass=function(){return m},this.end=function(y,T){y.toneMapping=x,v=!0;let o=a,d=s;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(y,d,o,T),C.needsSwap!==!1)){const _=o;o=d,d=_}}if(g!==y.outputColorSpace||f!==y.toneMapping){g=y.outputColorSpace,f=y.toneMapping,u.defines={},it.getTransfer(g)===ht&&(u.defines.SRGB_TRANSFER="");const A=Cg[f];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=o.texture,y.setRenderTarget(b),y.render(c,h),b=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),s.dispose(),l.dispose(),u.dispose()}}const mc=new Yt,Ws=new mr(1,1),gc=new ic,vc=new ep,_c=new cc,il=[],rl=[],al=new Float32Array(16),sl=new Float32Array(9),ol=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=il[r];if(a===void 0&&(a=new Float32Array(r),il[r]=a),e!==0){n.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=t,i[s].toArray(a,l)}return a}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),Pt(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),Pt(t,n)}}function Fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Pt(t,n)}}function Og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function zg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Zg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ws.compareFunction=t.isReversedDepthBuffer()?ao:ro,a=Ws):a=mc,t.setTexture2D(e||a,r)}function Xg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vc,r)}function qg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_c,r)}function Yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gc,r)}function Kg(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return zg;case 36294:return Gg;case 36295:return kg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function jg(i,e){i.uniform1fv(this.addr,e)}function Jg(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function Qg(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function $g(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function ev(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tv(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nv(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iv(i,e){i.uniform1iv(this.addr,e)}function rv(i,e){i.uniform2iv(this.addr,e)}function av(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function ov(i,e){i.uniform1uiv(this.addr,e)}function lv(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function dv(i,e){i.uniform4uiv(this.addr,e)}function uv(i,e,t){const n=this.cache,r=e.length,a=ca(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=Ws:s=mc;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||s,a[l])}function hv(i,e,t){const n=this.cache,r=e.length,a=ca(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||vc,a[s])}function fv(i,e,t){const n=this.cache,r=e.length,a=ca(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||_c,a[s])}function pv(i,e,t){const n=this.cache,r=e.length,a=ca(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Pt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||gc,a[s])}function mv(i){switch(i){case 5126:return jg;case 35664:return Jg;case 35665:return Qg;case 35666:return $g;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return av;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}}class vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mv(t.type)}}class _v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function ll(i,e){i.seq.push(e),i.map[e.id]=e}function xv(i,e,t){const n=i.name,r=n.length;for(Ya.lastIndex=0;;){const a=Ya.exec(n),s=Ya.lastIndex;let l=a[1];const u=a[2]==="]",c=a[3];if(u&&(l=l|0),c===void 0||c==="["&&s+2===r){ll(t,c===void 0?new gv(l,i,e):new vv(l,i,e));break}else{let g=t.map[l];g===void 0&&(g=new _v(l),ll(t,g)),t=g}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const l=e.getActiveUniform(t,s),u=e.getUniformLocation(t,l.name);xv(l,u,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const l=t[a],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mv=37297;let Sv=0;function Ev(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const l=s+1;n.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return n.join(`
`)}const dl=new qe;function yv(i){it._getMatrix(dl,it.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Ev(i.getShaderSource(e),l)}else return a}function Av(i,e){const t=yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bv={[zl]:"Linear",[Gl]:"Reinhard",[kl]:"Cineon",[Wl]:"ACESFilmic",[Xl]:"AgX",[ql]:"Neutral",[Zl]:"Custom"};function Tv(i,e){const t=bv[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new X;function wv(){it.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Rv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:l}}return t}function dr(i){return i!==""}function hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(i){return i.replace(Pv,Dv)}const Lv=new Map;function Dv(i,e){let t=Ye[e];if(t===void 0){const n=Lv.get(e);if(n!==void 0)t=Ye[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zs(t)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(Uv,Nv)}function Nv(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fv={[Yr]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function Ov(i){return Fv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bv={[yi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function Vv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Bv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hv={[qi]:"ENVMAP_MODE_REFRACTION"};function zv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gv={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[L0]:"ENVMAP_BLENDING_MIX",[D0]:"ENVMAP_BLENDING_ADD"};function kv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[i.combine]||"ENVMAP_BLENDING_NONE"}function Wv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zv(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,l=t.fragmentShader;const u=Ov(t),c=Vv(t),h=zv(t),g=kv(t),f=Wv(t),v=Cv(t),x=Rv(a),b=r.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(p=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==wn?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Av("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),s=Zs(s),s=hl(s,t),s=fl(s,t),l=Zs(l),l=hl(l,t),l=fl(l,t),s=pl(s),l=pl(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+p+s,o=y+m+l,d=cl(r,r.VERTEX_SHADER,T),A=cl(r,r.FRAGMENT_SHADER,o);r.attachShader(b,d),r.attachShader(b,A),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(R){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(b)||"",N=r.getShaderInfoLog(d)||"",L=r.getShaderInfoLog(A)||"",F=O.trim(),P=N.trim(),V=L.trim();let Z=!0,j=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,d,A);else{const ne=ul(r,d,"vertex"),pe=ul(r,A,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ne+`
`+pe)}else F!==""?ke("WebGLProgram: Program Info Log:",F):(P===""||V==="")&&(j=!1);j&&(R.diagnostics={runnable:Z,programLog:F,vertexShader:{log:P,prefix:p},fragmentShader:{log:V,prefix:m}})}r.deleteShader(d),r.deleteShader(A),_=new $r(r,b),S=Iv(r,b)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(b,Mv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=d,this.fragmentShader=A,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Kv(i,e,t,n,r,a){const s=new rc,l=new qv,u=new Set,c=[],h=new Map,g=n.logarithmicDepthBuffer;let f=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return u.add(_),_===0?"uv":`uv${_}`}function b(_,S,D,R,O){const N=R.fog,L=O.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||F,P),Z=V&&V.mapping===sa?V.image.height:null,j=v[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,pe=ne!==void 0?ne.length:0;let ie=0;L.morphAttributes.position!==void 0&&(ie=1),L.morphAttributes.normal!==void 0&&(ie=2),L.morphAttributes.color!==void 0&&(ie=3);let Ie,Xe,tt,$;if(j){const ut=Sn[j];Ie=ut.vertexShader,Xe=ut.fragmentShader}else Ie=_.vertexShader,Xe=_.fragmentShader,l.update(_),tt=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);const se=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),We=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,Ve=!!_.map,Ft=!!_.matcap,nt=!!V,dt=!!_.aoMap,gt=!!_.lightMap,Ke=!!_.bumpMap,yt=!!_.normalMap,B=!!_.displacementMap,Tt=!!_.emissiveMap,ot=!!_.metalnessMap,_t=!!_.roughnessMap,Pe=_.anisotropy>0,I=_.clearcoat>0,M=_.dispersion>0,z=_.iridescence>0,ee=_.sheen>0,te=_.transmission>0,Q=Pe&&!!_.anisotropyMap,Ae=I&&!!_.clearcoatMap,he=I&&!!_.clearcoatNormalMap,Ne=I&&!!_.clearcoatRoughnessMap,Be=z&&!!_.iridescenceMap,re=z&&!!_.iridescenceThicknessMap,oe=ee&&!!_.sheenColorMap,be=ee&&!!_.sheenRoughnessMap,we=!!_.specularMap,Me=!!_.specularColorMap,je=!!_.specularIntensityMap,H=te&&!!_.transmissionMap,fe=te&&!!_.thicknessMap,le=!!_.gradientMap,ye=!!_.alphaMap,ae=_.alphaTest>0,J=!!_.alphaHash,Te=!!_.extensions;let Ge=wn;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const xt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:Xe,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:We,instancingColor:We&&O.instanceColor!==null,instancingMorph:We&&O.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ki,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Ft,envMap:nt,envMapMode:nt&&V.mapping,envMapCubeUVHeight:Z,aoMap:dt,lightMap:gt,bumpMap:Ke,normalMap:yt,displacementMap:B,emissiveMap:Tt,normalMapObjectSpace:yt&&_.normalMapType===O0,normalMapTangentSpace:yt&&_.normalMapType===F0,metalnessMap:ot,roughnessMap:_t,anisotropy:Pe,anisotropyMap:Q,clearcoat:I,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Ne,dispersion:M,iridescence:z,iridescenceMap:Be,iridescenceThicknessMap:re,sheen:ee,sheenColorMap:oe,sheenRoughnessMap:be,specularMap:we,specularColorMap:Me,specularIntensityMap:je,transmission:te,transmissionMap:H,thicknessMap:fe,gradientMap:le,opaque:_.transparent===!1&&_.blending===ki&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:ae,alphaHash:J,combine:_.combine,mapUv:Ve&&x(_.map.channel),aoMapUv:dt&&x(_.aoMap.channel),lightMapUv:gt&&x(_.lightMap.channel),bumpMapUv:Ke&&x(_.bumpMap.channel),normalMapUv:yt&&x(_.normalMap.channel),displacementMapUv:B&&x(_.displacementMap.channel),emissiveMapUv:Tt&&x(_.emissiveMap.channel),metalnessMapUv:ot&&x(_.metalnessMap.channel),roughnessMapUv:_t&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:Ae&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(_.sheenRoughnessMap.channel),specularMapUv:we&&x(_.specularMap.channel),specularColorMapUv:Me&&x(_.specularColorMap.channel),specularIntensityMapUv:je&&x(_.specularIntensityMap.channel),transmissionMapUv:H&&x(_.transmissionMap.channel),thicknessMapUv:fe&&x(_.thicknessMap.channel),alphaMapUv:ye&&x(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||Pe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Ve||ye),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:Tt&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function p(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)S.push(D),S.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),_.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),_.push(s.mask)}function T(_){const S=v[_.type];let D;if(S){const R=Sn[S];D=Sp.clone(R.uniforms)}else D=_.uniforms;return D}function o(_,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new Zv(i,S,_,r),c.push(D),h.set(S,D)),D}function d(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){l.remove(_)}function C(){l.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:T,acquireProgram:o,releaseProgram:d,releaseShaderCache:A,programs:c,dispose:C}}function jv(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let l=i.get(s);return l===void 0&&(l={},i.set(s,l)),l}function n(s){i.delete(s)}function r(s,l,u){i.get(s)[l]=u}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function l(f,v,x,b,p,m){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:v,material:x,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:p,group:m},i[e]=y):(y.id=f.id,y.object=f,y.geometry=v,y.material=x,y.materialVariant=s(f),y.groupOrder=b,y.renderOrder=f.renderOrder,y.z=p,y.group=m),e++,y}function u(f,v,x,b,p,m){const y=l(f,v,x,b,p,m);x.transmission>0?n.push(y):x.transparent===!0?r.push(y):t.push(y)}function c(f,v,x,b,p,m){const y=l(f,v,x,b,p,m);x.transmission>0?n.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}function h(f,v){t.length>1&&t.sort(f||Jv),n.length>1&&n.sort(v||gl),r.length>1&&r.sort(v||gl)}function g(){for(let f=e,v=i.length;f<v;f++){const x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:c,finish:g,sort:h}}function Qv(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new vl,i.set(n,[s])):r>=a.length?(s=new vl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function $v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ct};break;case"SpotLight":t={position:new X,direction:new X,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new $v,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,a=new Ct,s=new Ct;function l(c){let h=0,g=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let v=0,x=0,b=0,p=0,m=0,y=0,T=0,o=0,d=0,A=0,C=0;c.sort(n_);for(let S=0,D=c.length;S<D;S++){const R=c[S],O=R.color,N=R.intensity,L=R.distance;let F=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Yi?F=R.shadow.map.texture:F=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*N,g+=O.g*N,f+=O.b*N;else if(R.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(R.sh.coefficients[P],N);C++}else if(R.isDirectionalLight){const P=e.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.directionalShadow[v]=Z,n.directionalShadowMap[v]=F,n.directionalShadowMatrix[v]=R.shadow.matrix,y++}n.directional[v]=P,v++}else if(R.isSpotLight){const P=e.get(R);P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(O).multiplyScalar(N),P.distance=L,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,n.spot[b]=P;const V=R.shadow;if(R.map&&(n.spotLightMap[d]=R.map,d++,V.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[b]=V.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.spotShadow[b]=Z,n.spotShadowMap[b]=F,o++}b++}else if(R.isRectAreaLight){const P=e.get(R);P.color.copy(O).multiplyScalar(N),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=P,p++}else if(R.isPointLight){const P=e.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),P.distance=R.distance,P.decay=R.decay,R.castShadow){const V=R.shadow,Z=t.get(R);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=F,n.pointShadowMatrix[x]=R.shadow.matrix,T++}n.point[x]=P,x++}else if(R.isHemisphereLight){const P=e.get(R);P.skyColor.copy(R.color).multiplyScalar(N),P.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=P,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=f;const _=n.hash;(_.directionalLength!==v||_.pointLength!==x||_.spotLength!==b||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==y||_.numPointShadows!==T||_.numSpotShadows!==o||_.numSpotMaps!==d||_.numLightProbes!==C)&&(n.directional.length=v,n.spot.length=b,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=o,n.spotShadowMap.length=o,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=o+d-A,n.spotLightMap.length=d,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,_.directionalLength=v,_.pointLength=x,_.spotLength=b,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=y,_.numPointShadows=T,_.numSpotShadows=o,_.numSpotMaps=d,_.numLightProbes=C,n.version=t_++)}function u(c,h){let g=0,f=0,v=0,x=0,b=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const T=c[m];if(T.isDirectionalLight){const o=n.directional[g];o.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(r),o.direction.transformDirection(p),g++}else if(T.isSpotLight){const o=n.spot[v];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),o.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),o.direction.sub(r),o.direction.transformDirection(p),v++}else if(T.isRectAreaLight){const o=n.rectArea[x];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),s.identity(),a.copy(T.matrixWorld),a.premultiply(p),s.extractRotation(a),o.halfWidth.set(T.width*.5,0,0),o.halfHeight.set(0,T.height*.5,0),o.halfWidth.applyMatrix4(s),o.halfHeight.applyMatrix4(s),x++}else if(T.isPointLight){const o=n.point[f];o.position.setFromMatrixPosition(T.matrixWorld),o.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const o=n.hemi[b];o.direction.setFromMatrixPosition(T.matrixWorld),o.direction.transformDirection(p),b++}}}return{setup:l,setupView:u,state:n}}function _l(i){const e=new i_(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:s}}function r_(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new _l(i),e.set(r,[l])):a>=s.length?(l=new _l(i),s.push(l)):l=s[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o_=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],l_=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],xl=new Ct,or=new X,Ka=new X;function c_(i,e,t){let n=new lc;const r=new mt,a=new mt,s=new bt,l=new bp,u=new Tp,c={},h=t.maxTextureSize,g={[oi]:Jt,[Jt]:oi,[tn]:tn},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:a_,fragmentShader:s_}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const x=new Yn;x.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new nn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(A,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===f0&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yr);const S=i.getRenderTarget(),D=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==this.type;N&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=A.length;L<F;L++){const P=A[L],V=P.shadow;if(V===void 0){ke("WebGLShadowMap:",P,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Z=V.getFrameExtents();r.multiply(Z),a.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/Z.x),r.x=a.x*Z.x,V.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/Z.y),r.y=a.y*Z.y,V.mapSize.y=a.y));const j=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cr){if(P.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Cn(r.x,r.y,{format:Yi,type:Zn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=P.name+".shadowMap",V.map.depthTexture=new mr(r.x,r.y,bn),V.map.depthTexture.name=P.name+".shadowMapDepth",V.map.depthTexture.format=Xn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt}else P.isPointLight?(V.map=new pc(r.x),V.map.depthTexture=new xp(r.x,In)):(V.map=new Cn(r.x,r.y),V.map.depthTexture=new mr(r.x,r.y,In)),V.map.depthTexture.name=P.name+".shadowMap",V.map.depthTexture.format=Xn,this.type===Yr?(V.map.depthTexture.compareFunction=j?ao:ro,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt);V.camera.updateProjectionMatrix()}const ne=V.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ne;pe++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(V.map),i.clear());const ie=V.getViewport(pe);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),O.viewport(s)}if(P.isPointLight){const ie=V.camera,Ie=V.matrix,Xe=P.distance||ie.far;Xe!==ie.far&&(ie.far=Xe,ie.updateProjectionMatrix()),or.setFromMatrixPosition(P.matrixWorld),ie.position.copy(or),Ka.copy(ie.position),Ka.add(o_[pe]),ie.up.copy(l_[pe]),ie.lookAt(Ka),ie.updateMatrixWorld(),Ie.makeTranslation(-or.x,-or.y,-or.z),xl.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xl,ie.coordinateSystem,ie.reversedDepth)}else V.updateMatrices(P);n=V.getFrustum(),o(C,_,V.camera,P,this.type)}V.isPointLightShadow!==!0&&this.type===cr&&y(V,_),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,D,R)};function y(A,C){const _=e.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(r.x,r.y,{format:Yi,type:Zn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,_,f,b,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,_,v,b,null)}function T(A,C,_,S){let D=null;const R=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)D=R;else if(D=_.isPointLight===!0?u:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=D.uuid,N=C.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let F=L[N];F===void 0&&(F=D.clone(),L[N]=F,C.addEventListener("dispose",d)),D=F}if(D.visible=C.visible,D.wireframe=C.wireframe,S===cr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:g[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=_}return D}function o(A,C,_,S,D){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===cr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const N=e.update(A),L=A.material;if(Array.isArray(L)){const F=N.groups;for(let P=0,V=F.length;P<V;P++){const Z=F[P],j=L[Z.materialIndex];if(j&&j.visible){const ne=T(A,j,S,D);A.onBeforeShadow(i,A,C,_,N,ne,Z),i.renderBufferDirect(_,null,N,ne,A,Z),A.onAfterShadow(i,A,C,_,N,ne,Z)}}}else if(L.visible){const F=T(A,L,S,D);A.onBeforeShadow(i,A,C,_,N,F,null),i.renderBufferDirect(_,null,N,F,A,null),A.onAfterShadow(i,A,C,_,N,F,null)}}const O=A.children;for(let N=0,L=O.length;N<L;N++)o(O[N],C,_,S,D)}function d(A){A.target.removeEventListener("dispose",d);for(const _ in c){const S=c[_],D=A.target.uuid;D in S&&(S[D].dispose(),delete S[D])}}}function d_(i,e){function t(){let H=!1;const fe=new bt;let le=null;const ye=new bt(0,0,0,0);return{setMask:function(ae){le!==ae&&!H&&(i.colorMask(ae,ae,ae,ae),le=ae)},setLocked:function(ae){H=ae},setClear:function(ae,J,Te,Ge,xt){xt===!0&&(ae*=Ge,J*=Ge,Te*=Ge),fe.set(ae,J,Te,Ge),ye.equals(fe)===!1&&(i.clearColor(ae,J,Te,Ge),ye.copy(fe))},reset:function(){H=!1,le=null,ye.set(-1,0,0,0)}}}function n(){let H=!1,fe=!1,le=null,ye=null,ae=null;return{setReversed:function(J){if(fe!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),fe=J;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return fe},setTest:function(J){J?se(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(J){le!==J&&!H&&(i.depthMask(J),le=J)},setFunc:function(J){if(fe&&(J=q0[J]),ye!==J){switch(J){case ns:i.depthFunc(i.NEVER);break;case is:i.depthFunc(i.ALWAYS);break;case rs:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case as:i.depthFunc(i.EQUAL);break;case ss:i.depthFunc(i.GEQUAL);break;case os:i.depthFunc(i.GREATER);break;case ls:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=J}},setLocked:function(J){H=J},setClear:function(J){ae!==J&&(ae=J,fe&&(J=1-J),i.clearDepth(J))},reset:function(){H=!1,le=null,ye=null,ae=null,fe=!1}}}function r(){let H=!1,fe=null,le=null,ye=null,ae=null,J=null,Te=null,Ge=null,xt=null;return{setTest:function(ut){H||(ut?se(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ut){fe!==ut&&!H&&(i.stencilMask(ut),fe=ut)},setFunc:function(ut,Dn,Un){(le!==ut||ye!==Dn||ae!==Un)&&(i.stencilFunc(ut,Dn,Un),le=ut,ye=Dn,ae=Un)},setOp:function(ut,Dn,Un){(J!==ut||Te!==Dn||Ge!==Un)&&(i.stencilOp(ut,Dn,Un),J=ut,Te=Dn,Ge=Un)},setLocked:function(ut){H=ut},setClear:function(ut){xt!==ut&&(i.clearStencil(ut),xt=ut)},reset:function(){H=!1,fe=null,le=null,ye=null,ae=null,J=null,Te=null,Ge=null,xt=null}}}const a=new t,s=new n,l=new r,u=new WeakMap,c=new WeakMap;let h={},g={},f=new WeakMap,v=[],x=null,b=!1,p=null,m=null,y=null,T=null,o=null,d=null,A=null,C=new ct(0,0,0),_=0,S=!1,D=null,R=null,O=null,N=null,L=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,V=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=V>=2);let j=null,ne={};const pe=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Ie=new bt().fromArray(pe),Xe=new bt().fromArray(ie);function tt(H,fe,le,ye){const ae=new Uint8Array(4),J=i.createTexture();i.bindTexture(H,J),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<le;Te++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(fe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return J}const $={};$[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),l.setClear(0),se(i.DEPTH_TEST),s.setFunc(Xi),Ke(!1),yt(bo),se(i.CULL_FACE),dt(zn);function se(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function de(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function We(H,fe){return g[H]!==fe?(i.bindFramebuffer(H,fe),g[H]=fe,H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=fe),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(H,fe){let le=v,ye=!1;if(H){le=f.get(fe),le===void 0&&(le=[],f.set(fe,le));const ae=H.textures;if(le.length!==ae.length||le[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Te=ae.length;J<Te;J++)le[J]=i.COLOR_ATTACHMENT0+J;le.length=ae.length,ye=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,ye=!0);ye&&i.drawBuffers(le)}function Ve(H){return x!==H?(i.useProgram(H),x=H,!0):!1}const Ft={[xi]:i.FUNC_ADD,[m0]:i.FUNC_SUBTRACT,[g0]:i.FUNC_REVERSE_SUBTRACT};Ft[v0]=i.MIN,Ft[_0]=i.MAX;const nt={[x0]:i.ZERO,[M0]:i.ONE,[S0]:i.SRC_COLOR,[es]:i.SRC_ALPHA,[w0]:i.SRC_ALPHA_SATURATE,[b0]:i.DST_COLOR,[y0]:i.DST_ALPHA,[E0]:i.ONE_MINUS_SRC_COLOR,[ts]:i.ONE_MINUS_SRC_ALPHA,[T0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[R0]:i.ONE_MINUS_CONSTANT_COLOR,[I0]:i.CONSTANT_ALPHA,[P0]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(H,fe,le,ye,ae,J,Te,Ge,xt,ut){if(H===zn){b===!0&&(de(i.BLEND),b=!1);return}if(b===!1&&(se(i.BLEND),b=!0),H!==p0){if(H!==p||ut!==S){if((m!==xi||o!==xi)&&(i.blendEquation(i.FUNC_ADD),m=xi,o=xi),ut)switch(H){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",H);break}else switch(H){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wo:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Co:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",H);break}y=null,T=null,d=null,A=null,C.set(0,0,0),_=0,p=H,S=ut}return}ae=ae||fe,J=J||le,Te=Te||ye,(fe!==m||ae!==o)&&(i.blendEquationSeparate(Ft[fe],Ft[ae]),m=fe,o=ae),(le!==y||ye!==T||J!==d||Te!==A)&&(i.blendFuncSeparate(nt[le],nt[ye],nt[J],nt[Te]),y=le,T=ye,d=J,A=Te),(Ge.equals(C)===!1||xt!==_)&&(i.blendColor(Ge.r,Ge.g,Ge.b,xt),C.copy(Ge),_=xt),p=H,S=!1}function gt(H,fe){H.side===tn?de(i.CULL_FACE):se(i.CULL_FACE);let le=H.side===Jt;fe&&(le=!le),Ke(le),H.blending===ki&&H.transparent===!1?dt(zn):dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),a.setMask(H.colorWrite);const ye=H.stencilWrite;l.setTest(ye),ye&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function yt(H){H!==u0?(se(i.CULL_FACE),H!==R&&(H===bo?i.cullFace(i.BACK):H===h0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),R=H}function B(H){H!==O&&(P&&i.lineWidth(H),O=H)}function Tt(H,fe,le){H?(se(i.POLYGON_OFFSET_FILL),(N!==fe||L!==le)&&(N=fe,L=le,s.getReversed()&&(fe=-fe),i.polygonOffset(fe,le))):de(i.POLYGON_OFFSET_FILL)}function ot(H){H?se(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function _t(H){H===void 0&&(H=i.TEXTURE0+F-1),j!==H&&(i.activeTexture(H),j=H)}function Pe(H,fe,le){le===void 0&&(j===null?le=i.TEXTURE0+F-1:le=j);let ye=ne[le];ye===void 0&&(ye={type:void 0,texture:void 0},ne[le]=ye),(ye.type!==H||ye.texture!==fe)&&(j!==le&&(i.activeTexture(le),j=le),i.bindTexture(H,fe||$[H]),ye.type=H,ye.texture=fe)}function I(){const H=ne[j];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function ee(){try{i.texSubImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function te(){try{i.texSubImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function he(){try{i.texStorage2D(...arguments)}catch(H){at("WebGLState:",H)}}function Ne(){try{i.texStorage3D(...arguments)}catch(H){at("WebGLState:",H)}}function Be(){try{i.texImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function re(){try{i.texImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function oe(H){Ie.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function be(H){Xe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function we(H,fe){let le=c.get(fe);le===void 0&&(le=new WeakMap,c.set(fe,le));let ye=le.get(H);ye===void 0&&(ye=i.getUniformBlockIndex(fe,H.name),le.set(H,ye))}function Me(H,fe){const ye=c.get(fe).get(H);u.get(fe)!==ye&&(i.uniformBlockBinding(fe,ye,H.__bindingPointIndex),u.set(fe,ye))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ne={},g={},f=new WeakMap,v=[],x=null,b=!1,p=null,m=null,y=null,T=null,o=null,d=null,A=null,C=new ct(0,0,0),_=0,S=!1,D=null,R=null,O=null,N=null,L=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),l.reset()}return{buffers:{color:a,depth:s,stencil:l},enable:se,disable:de,bindFramebuffer:We,drawBuffers:Oe,useProgram:Ve,setBlending:dt,setMaterial:gt,setFlipSided:Ke,setCullFace:yt,setLineWidth:B,setPolygonOffset:Tt,setScissorTest:ot,activeTexture:_t,bindTexture:Pe,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Be,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:Me,texStorage2D:he,texStorage3D:Ne,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ae,scissor:oe,viewport:be,reset:je}}function u_(i,e,t,n,r,a,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let g;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,M){return v?new OffscreenCanvas(I,M):na("canvas")}function b(I,M,z){let ee=1;const te=Pe(I);if((te.width>z||te.height>z)&&(ee=z/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(ee*te.width),Ae=Math.floor(ee*te.height);g===void 0&&(g=x(Q,Ae));const he=M?x(Q,Ae):g;return he.width=Q,he.height=Ae,he.getContext("2d").drawImage(I,0,0,Q,Ae),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Ae+")."),he}else return"data"in I&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,M,z,ee,te=!1){if(I!==null){if(i[I]!==void 0)return i[I];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=M;if(M===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),M===i.RGBA){const Ae=te?ea:it.getTransfer(ee);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=Ae===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function o(I,M){let z;return I?M===null||M===In||M===pr?z=i.DEPTH24_STENCIL8:M===bn?z=i.DEPTH32F_STENCIL8:M===fr&&(z=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===In||M===pr?z=i.DEPTH_COMPONENT24:M===bn?z=i.DEPTH_COMPONENT32F:M===fr&&(z=i.DEPTH_COMPONENT16),z}function d(I,M){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gt&&I.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function A(I){const M=I.target;M.removeEventListener("dispose",A),_(M),M.isVideoTexture&&h.delete(M)}function C(I){const M=I.target;M.removeEventListener("dispose",C),D(M)}function _(I){const M=n.get(I);if(M.__webglInit===void 0)return;const z=I.source,ee=f.get(z);if(ee){const te=ee[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(I),Object.keys(ee).length===0&&f.delete(z)}n.remove(I)}function S(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const z=I.source,ee=f.get(z);delete ee[M.__cacheKey],s.memory.textures--}function D(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let te=0;te<M.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=I.textures;for(let ee=0,te=z.length;ee<te;ee++){const Q=n.get(z[ee]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove(z[ee])}n.remove(I)}let R=0;function O(){R=0}function N(){const I=R;return I>=r.maxTextures&&ke("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),R+=1,I}function L(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function F(I,M){const z=n.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const ee=I.image;if(ee===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,I,M);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function P(I,M){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){$(z,I,M);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function V(I,M){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){$(z,I,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Z(I,M){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){se(z,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const j={[cs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},ne={[Gt]:i.NEAREST,[U0]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},pe={[B0]:i.NEVER,[k0]:i.ALWAYS,[V0]:i.LESS,[ro]:i.LEQUAL,[H0]:i.EQUAL,[ao]:i.GEQUAL,[z0]:i.GREATER,[G0]:i.NOTEQUAL};function ie(I,M){if(M.type===bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===xa||M.magFilter===Ar||M.magFilter===Si||M.minFilter===Xt||M.minFilter===xa||M.minFilter===Ar||M.minFilter===Si)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,j[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ne[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Ar&&M.minFilter!==Si||M.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(I,M){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const Q=L(M);if(Q!==I.__cacheKey){te[Q]===void 0&&(te[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),te[Q].usedTimes++;const Ae=te[I.__cacheKey];Ae!==void 0&&(te[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(M)),I.__cacheKey=Q,I.__webglTexture=te[Q].texture}return z}function Xe(I,M,z){return Math.floor(Math.floor(I/z)/M)}function tt(I,M,z,ee){const Q=I.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,ee,M.data);else{Q.sort((re,oe)=>re.start-oe.start);let Ae=0;for(let re=1;re<Q.length;re++){const oe=Q[Ae],be=Q[re],we=oe.start+oe.count,Me=Xe(be.start,M.width,4),je=Xe(oe.start,M.width,4);be.start<=we+1&&Me===je&&Xe(be.start+be.count-1,M.width,4)===Me?oe.count=Math.max(oe.count,be.start+be.count-oe.start):(++Ae,Q[Ae]=be)}Q.length=Ae+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let re=0,oe=Q.length;re<oe;re++){const be=Q[re],we=Math.floor(be.start/4),Me=Math.ceil(be.count/4),je=we%M.width,H=Math.floor(we/M.width),fe=Me,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,je,H,fe,le,z,ee,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function $(I,M,z){let ee=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=i.TEXTURE_3D);const te=Ie(I,M),Q=M.source;t.bindTexture(ee,I.__webglTexture,i.TEXTURE0+z);const Ae=n.get(Q);if(Q.version!==Ae.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const he=it.getPrimaries(it.workingColorSpace),Ne=M.colorSpace===ri?null:it.getPrimaries(M.colorSpace),Be=M.colorSpace===ri||he===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let re=b(M.image,!1,r.maxTextureSize);re=_t(M,re);const oe=a.convert(M.format,M.colorSpace),be=a.convert(M.type);let we=T(M.internalFormat,oe,be,M.colorSpace,M.isVideoTexture);ie(ee,M);let Me;const je=M.mipmaps,H=M.isVideoTexture!==!0,fe=Ae.__version===void 0||te===!0,le=Q.dataReady,ye=d(M,re);if(M.isDepthTexture)we=o(M.format===Ei,M.type),fe&&(H?t.texStorage2D(i.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,we,re.width,re.height,0,oe,be,null));else if(M.isDataTexture)if(je.length>0){H&&fe&&t.texStorage2D(i.TEXTURE_2D,ye,we,je[0].width,je[0].height);for(let ae=0,J=je.length;ae<J;ae++)Me=je[ae],H?le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,oe,be,Me.data):t.texImage2D(i.TEXTURE_2D,ae,we,Me.width,Me.height,0,oe,be,Me.data);M.generateMipmaps=!1}else H?(fe&&t.texStorage2D(i.TEXTURE_2D,ye,we,re.width,re.height),le&&tt(M,re,oe,be)):t.texImage2D(i.TEXTURE_2D,0,we,re.width,re.height,0,oe,be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,je[0].width,je[0].height,re.depth);for(let ae=0,J=je.length;ae<J;ae++)if(Me=je[ae],M.format!==gn)if(oe!==null)if(H){if(le)if(M.layerUpdates.size>0){const Te=jo(Me.width,Me.height,M.format,M.type);for(const Ge of M.layerUpdates){const xt=Me.data.subarray(Ge*Te/Me.data.BYTES_PER_ELEMENT,(Ge+1)*Te/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ge,Me.width,Me.height,1,oe,xt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,oe,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,we,Me.width,Me.height,re.depth,0,Me.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,re.depth,oe,be,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,we,Me.width,Me.height,re.depth,0,oe,be,Me.data)}else{H&&fe&&t.texStorage2D(i.TEXTURE_2D,ye,we,je[0].width,je[0].height);for(let ae=0,J=je.length;ae<J;ae++)Me=je[ae],M.format!==gn?oe!==null?H?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,we,Me.width,Me.height,0,Me.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me.width,Me.height,oe,be,Me.data):t.texImage2D(i.TEXTURE_2D,ae,we,Me.width,Me.height,0,oe,be,Me.data)}else if(M.isDataArrayTexture)if(H){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,re.width,re.height,re.depth),le)if(M.layerUpdates.size>0){const ae=jo(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const Te=re.data.subarray(J*ae/re.data.BYTES_PER_ELEMENT,(J+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,oe,be,Te)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,be,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,oe,be,re.data);else if(M.isData3DTexture)H?(fe&&t.texStorage3D(i.TEXTURE_3D,ye,we,re.width,re.height,re.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,be,re.data)):t.texImage3D(i.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,oe,be,re.data);else if(M.isFramebufferTexture){if(fe)if(H)t.texStorage2D(i.TEXTURE_2D,ye,we,re.width,re.height);else{let ae=re.width,J=re.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,we,ae,J,0,oe,be,null),ae>>=1,J>>=1}}else if(je.length>0){if(H&&fe){const ae=Pe(je[0]);t.texStorage2D(i.TEXTURE_2D,ye,we,ae.width,ae.height)}for(let ae=0,J=je.length;ae<J;ae++)Me=je[ae],H?le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,oe,be,Me):t.texImage2D(i.TEXTURE_2D,ae,we,oe,be,Me);M.generateMipmaps=!1}else if(H){if(fe){const ae=Pe(re);t.texStorage2D(i.TEXTURE_2D,ye,we,ae.width,ae.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,be,re)}else t.texImage2D(i.TEXTURE_2D,0,we,oe,be,re);p(M)&&m(ee),Ae.__version=Q.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function se(I,M,z){if(M.image.length!==6)return;const ee=Ie(I,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);const Q=n.get(te);if(te.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const Ae=it.getPrimaries(it.workingColorSpace),he=M.colorSpace===ri?null:it.getPrimaries(M.colorSpace),Ne=M.colorSpace===ri||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!Be&&!re?oe[J]=b(M.image[J],!0,r.maxCubemapSize):oe[J]=re?M.image[J].image:M.image[J],oe[J]=_t(M,oe[J]);const be=oe[0],we=a.convert(M.format,M.colorSpace),Me=a.convert(M.type),je=T(M.internalFormat,we,Me,M.colorSpace),H=M.isVideoTexture!==!0,fe=Q.__version===void 0||ee===!0,le=te.dataReady;let ye=d(M,be);ie(i.TEXTURE_CUBE_MAP,M);let ae;if(Be){H&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,je,be.width,be.height);for(let J=0;J<6;J++){ae=oe[J].mipmaps;for(let Te=0;Te<ae.length;Te++){const Ge=ae[Te];M.format!==gn?we!==null?H?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,je,Ge.width,Ge.height,0,Ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ge.width,Ge.height,we,Me,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,je,Ge.width,Ge.height,0,we,Me,Ge.data)}}}else{if(ae=M.mipmaps,H&&fe){ae.length>0&&ye++;const J=Pe(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,je,J.width,J.height)}for(let J=0;J<6;J++)if(re){H?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,we,Me,oe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,oe[J].width,oe[J].height,0,we,Me,oe[J].data);for(let Te=0;Te<ae.length;Te++){const xt=ae[Te].image[J].image;H?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,xt.width,xt.height,we,Me,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,je,xt.width,xt.height,0,we,Me,xt.data)}}else{H?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,Me,oe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,we,Me,oe[J]);for(let Te=0;Te<ae.length;Te++){const Ge=ae[Te];H?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,we,Me,Ge.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,je,we,Me,Ge.image[J])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function de(I,M,z,ee,te,Q){const Ae=a.convert(z.format,z.colorSpace),he=a.convert(z.type),Ne=T(z.internalFormat,Ae,he,z.colorSpace),Be=n.get(M),re=n.get(z);if(re.__renderTarget=M,!Be.__hasExternalTextures){const oe=Math.max(1,M.width>>Q),be=Math.max(1,M.height>>Q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Ne,oe,be,M.depth,0,Ae,he,null):t.texImage2D(te,Q,Ne,oe,be,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Tt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,re.__webglTexture,0,B(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,re.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const ee=M.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,Q=o(M.stencilBuffer,te),Ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),Q,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,I)}else{const ee=M.textures;for(let te=0;te<ee.length;te++){const Q=ee[te],Ae=a.convert(Q.format,Q.colorSpace),he=a.convert(Q.type),Ne=T(Q.internalFormat,Ae,he,Q.colorSpace);Tt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),Ne,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),Ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(I,M,z){const ee=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ie(i.TEXTURE_CUBE_MAP,M.depthTexture);const Be=a.convert(M.depthTexture.format),re=a.convert(M.depthTexture.type);let oe;M.depthTexture.format===Xn?oe=i.DEPTH_COMPONENT24:M.depthTexture.format===Ei&&(oe=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,oe,M.width,M.height,0,Be,re,null)}}else F(M.depthTexture,0);const Q=te.__webglTexture,Ae=B(M),he=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ne=M.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xn)Tt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,he,Q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,he,Q,0);else if(M.depthTexture.format===Ei)Tt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,he,Q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,he,Q,0);else throw new Error("Unknown depthTexture format")}function Ve(I){const M=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=ee}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let ee=0;ee<6;ee++)Oe(M.__webglFramebuffer[ee],I,ee);else{const ee=I.texture.mipmaps;ee&&ee.length>0?Oe(M.__webglFramebuffer[0],I,0):Oe(M.__webglFramebuffer,I,0)}else if(z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=i.createRenderbuffer(),We(M.__webglDepthbuffer[ee],I,!1);else{const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Q)}}else{const ee=I.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),We(M.__webglDepthbuffer,I,!1);else{const te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(I,M,z){const ee=n.get(I);M!==void 0&&de(ee.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ve(I)}function nt(I){const M=I.texture,z=n.get(I),ee=n.get(M);I.addEventListener("dispose",C);const te=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=M.version,s.memory.textures++),Q){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)z.__webglFramebuffer[he][Ne]=i.createFramebuffer()}else z.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)z.__webglFramebuffer[he]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,Ne=te.length;he<Ne;he++){const Be=n.get(te[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),s.memory.textures++)}if(I.samples>0&&Tt(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Ne=te[he];z.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Be=a.convert(Ne.format,Ne.colorSpace),re=a.convert(Ne.type),oe=T(Ne.internalFormat,Be,re,Ne.colorSpace,I.isXRRenderTarget===!0),be=B(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,oe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,z.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),We(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)de(z.__webglFramebuffer[he][Ne],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne);else de(z.__webglFramebuffer[he],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,Ne=te.length;he<Ne;he++){const Be=te[he],re=n.get(Be);let oe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),ie(oe,Be),de(z.__webglFramebuffer,I,Be,i.COLOR_ATTACHMENT0+he,oe,0),p(Be)&&m(oe)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),ie(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)de(z.__webglFramebuffer[Ne],I,M,i.COLOR_ATTACHMENT0,he,Ne);else de(z.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,he,0);p(M)&&m(he),t.unbindTexture()}I.depthBuffer&&Ve(I)}function dt(I){const M=I.textures;for(let z=0,ee=M.length;z<ee;z++){const te=M[z];if(p(te)){const Q=y(I),Ae=n.get(te).__webglTexture;t.bindTexture(Q,Ae),m(Q),t.unbindTexture()}}}const gt=[],Ke=[];function yt(I){if(I.samples>0){if(Tt(I)===!1){const M=I.textures,z=I.width,ee=I.height;let te=i.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(I),he=M.length>1;if(he)for(let Be=0;Be<M.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ne=I.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Be]);const re=n.get(M[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,z,ee,0,0,z,ee,te,i.NEAREST),u===!0&&(gt.length=0,Ke.length=0,gt.push(i.COLOR_ATTACHMENT0+Be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(gt.push(Q),Ke.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Be=0;Be<M.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Be]);const re=n.get(M[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function B(I){return Math.min(r.maxSamples,I.samples)}function Tt(I){const M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(I){const M=s.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function _t(I,M){const z=I.colorSpace,ee=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Ki&&z!==ri&&(it.getTransfer(z)===ht?(ee!==gn||te!==on)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",z)),M}function Pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=P,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function h_(i,e){function t(n,r=ri){let a;const s=it.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===$s)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===jl)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Qs)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===ec)return i.RGB;if(n===gn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===to)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Jr||n===Qr)if(s===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===us||n===hs||n===fs||n===ps)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===us)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ps)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ms||n===gs||n===vs||n===_s||n===xs||n===Ms||n===Ss)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ms||n===gs)return s===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===vs)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===_s)return a.COMPRESSED_R11_EAC;if(n===xs)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ms)return a.COMPRESSED_RG11_EAC;if(n===Ss)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Es||n===ys||n===As||n===bs||n===Ts||n===ws||n===Cs||n===Rs||n===Is||n===Ps||n===Ls||n===Ds||n===Us||n===Ns)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Es)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ys)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===As)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bs)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ts)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ws)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cs)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rs)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Is)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ps)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ds)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Us)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ns)return s===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===Os||n===Bs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Fs)return s===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Os)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vs||n===Hs||n===zs||n===Gs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Ji{constructor(e,t){super();const n=this;let r=null,a=1,s=null,l="local-floor",u=1,c=null,h=null,g=null,f=null,v=null,x=null;const b=typeof XRWebGLBinding<"u",p=new m_,m={},y=t.getContextAttributes();let T=null,o=null;const d=[],A=[],C=new mt;let _=null;const S=new pn;S.viewport=new bt;const D=new pn;D.viewport=new bt;const R=[S,D],O=new Cp;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=d[$];return se===void 0&&(se=new wa,d[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=d[$];return se===void 0&&(se=new wa,d[$]=se),se.getGripSpace()},this.getHand=function($){let se=d[$];return se===void 0&&(se=new wa,d[$]=se),se.getHandSpace()};function F($){const se=A.indexOf($.inputSource);if(se===-1)return;const de=d[se];de!==void 0&&(de.update($.inputSource,$.frame,c||s),de.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",V);for(let $=0;$<d.length;$++){const se=A[$];se!==null&&(A[$]=null,d[$].disconnect(se))}N=null,L=null,p.reset();for(const $ in m)delete m[$];e.setRenderTarget(T),v=null,f=null,g=null,r=null,o=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",P),r.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,We=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Ei:Xn,We=y.stencil?pr:In);const Ve={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:a};g=this.getBinding(),f=g.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),o=new Cn(f.textureWidth,f.textureHeight,{format:gn,type:on,depthTexture:new mr(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),o=new Cn(v.framebufferWidth,v.framebufferHeight,{format:gn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}o.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await r.requestReferenceSpace(l),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V($){for(let se=0;se<$.removed.length;se++){const de=$.removed[se],We=A.indexOf(de);We>=0&&(A[We]=null,d[We].disconnect(de))}for(let se=0;se<$.added.length;se++){const de=$.added[se];let We=A.indexOf(de);if(We===-1){for(let Ve=0;Ve<d.length;Ve++)if(Ve>=A.length){A.push(de),We=Ve;break}else if(A[Ve]===null){A[Ve]=de,We=Ve;break}if(We===-1)break}const Oe=d[We];Oe&&Oe.connect(de)}}const Z=new X,j=new X;function ne($,se,de){Z.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const We=Z.distanceTo(j),Oe=se.projectionMatrix.elements,Ve=de.projectionMatrix.elements,Ft=Oe[14]/(Oe[10]-1),nt=Oe[14]/(Oe[10]+1),dt=(Oe[9]+1)/Oe[5],gt=(Oe[9]-1)/Oe[5],Ke=(Oe[8]-1)/Oe[0],yt=(Ve[8]+1)/Ve[0],B=Ft*Ke,Tt=Ft*yt,ot=We/(-Ke+yt),_t=ot*-Ke;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Pe=Ft+ot,I=nt+ot,M=B-_t,z=Tt+(We-_t),ee=dt*nt/I*Pe,te=gt*nt/I*Pe;$.projectionMatrix.makePerspective(M,z,ee,te,Pe,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,de=$.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(de=p.depthFar)),O.near=D.near=S.near=se,O.far=D.far=S.far=de,(N!==O.near||L!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,L=O.far),O.layers.mask=$.layers.mask|6,S.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const We=$.parent,Oe=O.cameras;pe(O,We);for(let Ve=0;Ve<Oe.length;Ve++)pe(Oe[Ve],We);Oe.length===2?ne(O,S,D):O.projectionMatrix.copy(S.projectionMatrix),ie($,O,We)};function ie($,se,de){de===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&v===null))return u},this.setFoveation=function($){u=$,f!==null&&(f.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function($){return m[$]};let Ie=null;function Xe($,se){if(h=se.getViewerPose(c||s),x=se,h!==null){const de=h.views;v!==null&&(e.setRenderTargetFramebuffer(o,v.framebuffer),e.setRenderTarget(o));let We=!1;de.length!==O.cameras.length&&(O.cameras.length=0,We=!0);for(let nt=0;nt<de.length;nt++){const dt=de[nt];let gt=null;if(v!==null)gt=v.getViewport(dt);else{const yt=g.getViewSubImage(f,dt);gt=yt.viewport,nt===0&&(e.setRenderTargetTextures(o,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(o))}let Ke=R[nt];Ke===void 0&&(Ke=new pn,Ke.layers.enable(nt),Ke.viewport=new bt,R[nt]=Ke),Ke.matrix.fromArray(dt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(dt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(gt.x,gt.y,gt.width,gt.height),nt===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),We===!0&&O.cameras.push(Ke)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){g=n.getBinding();const nt=g.getDepthInformation(de[0]);nt&&nt.isValid&&nt.texture&&p.init(nt,r.renderState)}if(Oe&&Oe.includes("camera-access")&&b){e.state.unbindTexture(),g=n.getBinding();for(let nt=0;nt<de.length;nt++){const dt=de[nt].camera;if(dt){let gt=m[dt];gt||(gt=new dc,m[dt]=gt);const Ke=g.getCameraImage(dt);gt.sourceTexture=Ke}}}}for(let de=0;de<d.length;de++){const We=A[de],Oe=d[de];We!==null&&Oe!==void 0&&Oe.update(We,se,c||s)}Ie&&Ie($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),x=null}const tt=new fc;tt.setAnimationLoop(Xe),this.setAnimationLoop=function($){Ie=$},this.dispose=function(){}}}const gi=new qn,v_=new Ct;function __(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,uc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,T,o){m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),g(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&v(p,m,o)):m.isMeshMatcapMaterial?(a(p,m),x(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),b(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&l(p,m)):m.isPointsMaterial?u(p,m,y,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),T=y.envMap,o=y.envMapRotation;T&&(p.envMap.value=T,gi.copy(o),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(gi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function l(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function u(p,m,y,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function g(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function v(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x_(i,e,t,n){let r={},a={},s=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(y,T){const o=T.program;n.uniformBlockBinding(y,o)}function c(y,T){let o=r[y.id];o===void 0&&(x(y),o=h(y),r[y.id]=o,y.addEventListener("dispose",p));const d=T.program;n.updateUBOMapping(y,d);const A=e.render.frame;a[y.id]!==A&&(f(y),a[y.id]=A)}function h(y){const T=g();y.__bindingPointIndex=T;const o=i.createBuffer(),d=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,o),i.bufferData(i.UNIFORM_BUFFER,d,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,o),o}function g(){for(let y=0;y<l;y++)if(s.indexOf(y)===-1)return s.push(y),y;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=r[y.id],o=y.uniforms,d=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,C=o.length;A<C;A++){const _=Array.isArray(o[A])?o[A]:[o[A]];for(let S=0,D=_.length;S<D;S++){const R=_[S];if(v(R,A,S,d)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let F=0;F<N.length;F++){const P=N[F],V=b(P);typeof P=="number"||typeof P=="boolean"?(R.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,O+L,R.__data)):P.isMatrix3?(R.__data[0]=P.elements[0],R.__data[1]=P.elements[1],R.__data[2]=P.elements[2],R.__data[3]=0,R.__data[4]=P.elements[3],R.__data[5]=P.elements[4],R.__data[6]=P.elements[5],R.__data[7]=0,R.__data[8]=P.elements[6],R.__data[9]=P.elements[7],R.__data[10]=P.elements[8],R.__data[11]=0):(P.toArray(R.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(y,T,o,d){const A=y.value,C=T+"_"+o;if(d[C]===void 0)return typeof A=="number"||typeof A=="boolean"?d[C]=A:d[C]=A.clone(),!0;{const _=d[C];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return d[C]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function x(y){const T=y.uniforms;let o=0;const d=16;for(let C=0,_=T.length;C<_;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let D=0,R=S.length;D<R;D++){const O=S[D],N=Array.isArray(O.value)?O.value:[O.value];for(let L=0,F=N.length;L<F;L++){const P=N[L],V=b(P),Z=o%d,j=Z%V.boundary,ne=Z+j;o+=j,ne!==0&&d-ne<V.storage&&(o+=d-ne),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=o,o+=V.storage}}}const A=o%d;return A>0&&(o+=d-A),y.__size=o,y.__cache={},this}function b(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const o=s.indexOf(T.__bindingPointIndex);s.splice(o,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:u,update:c,dispose:m}}const M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function S_(){return xn===null&&(xn=new mp(M_,16,16,Yi,Zn),xn.name="DFG_LUT",xn.minFilter=Xt,xn.magFilter=Xt,xn.wrapS=Hn,xn.wrapT=Hn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class E_{constructor(e={}){const{canvas:t=Z0(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:v=on}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;const b=v,p=new Set([io,no,to]),m=new Set([on,In,fr,pr,$s,eo]),y=new Uint32Array(4),T=new Int32Array(4);let o=null,d=null;const A=[],C=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=sn;let R=0,O=0,N=null,L=-1,F=null;const P=new bt,V=new bt;let Z=null;const j=new ct(0);let ne=0,pe=t.width,ie=t.height,Ie=1,Xe=null,tt=null;const $=new bt(0,0,pe,ie),se=new bt(0,0,pe,ie);let de=!1;const We=new lc;let Oe=!1,Ve=!1;const Ft=new Ct,nt=new X,dt=new bt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function yt(){return N===null?Ie:1}let B=n;function Tt(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",xt,!1),B===null){const G="webgl2";if(B=Tt(G,w),B===null)throw Tt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw at("WebGLRenderer: "+w.message),w}let ot,_t,Pe,I,M,z,ee,te,Q,Ae,he,Ne,Be,re,oe,be,we,Me,je,H,fe,le,ye;function ae(){ot=new Eg(B),ot.init(),fe=new h_(B,ot),_t=new pg(B,ot,e,fe),Pe=new d_(B,ot),_t.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),I=new bg(B),M=new jv,z=new u_(B,ot,Pe,M,_t,fe,I),ee=new Sg(S),te=new Ip(B),le=new hg(B,te),Q=new yg(B,te,I,le),Ae=new wg(B,Q,te,le,I),Me=new Tg(B,_t,z),oe=new mg(M),he=new Kv(S,ee,ot,_t,le,oe),Ne=new __(S,M),Be=new Qv,re=new r_(ot),we=new ug(S,ee,Pe,Ae,x,u),be=new c_(S,Ae,_t),ye=new x_(B,I,_t,Pe),je=new fg(B,ot,I),H=new Ag(B,ot,I),I.programs=he.programs,S.capabilities=_t,S.extensions=ot,S.properties=M,S.renderLists=Be,S.shadowMap=be,S.state=Pe,S.info=I}ae(),b!==on&&(_=new Rg(b,t.width,t.height,r,a));const J=new g_(S,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(w){w!==void 0&&(Ie=w,this.setSize(pe,ie,!1))},this.getSize=function(w){return w.set(pe,ie)},this.setSize=function(w,G,q=!0){if(J.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=w,ie=G,t.width=Math.floor(w*Ie),t.height=Math.floor(G*Ie),q===!0&&(t.style.width=w+"px",t.style.height=G+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(pe*Ie,ie*Ie).floor()},this.setDrawingBufferSize=function(w,G,q){pe=w,ie=G,Ie=q,t.width=Math.floor(w*q),t.height=Math.floor(G*q),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(b===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,G,q,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,G,q,W),Pe.viewport(P.copy($).multiplyScalar(Ie).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,G,q,W){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,G,q,W),Pe.scissor(V.copy(se).multiplyScalar(Ie).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){Pe.setScissorTest(de=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,q=!0){let W=0;if(w){let k=!1;if(N!==null){const ve=N.texture.format;k=p.has(ve)}if(k){const ve=N.texture.type,Ee=m.has(ve),_e=we.getClearColor(),Ce=we.getClearAlpha(),De=_e.r,Ze=_e.g,Je=_e.b;Ee?(y[0]=De,y[1]=Ze,y[2]=Je,y[3]=Ce,B.clearBufferuiv(B.COLOR,0,y)):(T[0]=De,T[1]=Ze,T[2]=Je,T[3]=Ce,B.clearBufferiv(B.COLOR,0,T))}else W|=B.COLOR_BUFFER_BIT}G&&(W|=B.DEPTH_BUFFER_BIT),q&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),we.dispose(),Be.dispose(),re.dispose(),M.dispose(),ee.dispose(),Ae.dispose(),le.dispose(),ye.dispose(),he.dispose(),J.dispose(),J.removeEventListener("sessionstart",uo),J.removeEventListener("sessionend",ho),ci.stop()};function Te(w){w.preventDefault(),Do("WebGLRenderer: Context Lost."),D=!0}function Ge(){Do("WebGLRenderer: Context Restored."),D=!1;const w=I.autoReset,G=be.enabled,q=be.autoUpdate,W=be.needsUpdate,k=be.type;ae(),I.autoReset=w,be.enabled=G,be.autoUpdate=q,be.needsUpdate=W,be.type=k}function xt(w){at("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const G=w.target;G.removeEventListener("dispose",ut),Dn(G)}function Dn(w){Un(w),M.remove(w)}function Un(w){const G=M.get(w).programs;G!==void 0&&(G.forEach(function(q){he.releaseProgram(q)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,q,W,k,ve){G===null&&(G=gt);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,_e=Mc(w,G,q,W,k);Pe.setMaterial(W,Ee);let Ce=q.index,De=1;if(W.wireframe===!0){if(Ce=Q.getWireframeAttribute(q),Ce===void 0)return;De=2}const Ze=q.drawRange,Je=q.attributes.position;let Ue=Ze.start*De,ft=(Ze.start+Ze.count)*De;ve!==null&&(Ue=Math.max(Ue,ve.start*De),ft=Math.min(ft,(ve.start+ve.count)*De)),Ce!==null?(Ue=Math.max(Ue,0),ft=Math.min(ft,Ce.count)):Je!=null&&(Ue=Math.max(Ue,0),ft=Math.min(ft,Je.count));const At=ft-Ue;if(At<0||At===1/0)return;le.setup(k,W,_e,q,Ce);let Et,pt=je;if(Ce!==null&&(Et=te.get(Ce),pt=H,pt.setIndex(Et)),k.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*yt()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(k.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),Pe.setLineWidth(kt*yt()),k.isLineSegments?pt.setMode(B.LINES):k.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else k.isPoints?pt.setMode(B.POINTS):k.isSprite&&pt.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const kt=k._multiDrawStarts,Le=k._multiDrawCounts,Qt=k._multiDrawCount,rt=Ce?te.get(Ce).bytesPerElement:1,dn=M.get(W).currentProgram.getUniforms();for(let vn=0;vn<Qt;vn++)dn.setValue(B,"_gl_DrawID",vn),pt.render(kt[vn]/rt,Le[vn])}else if(k.isInstancedMesh)pt.renderInstances(Ue,At,k.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,kt);pt.renderInstances(Ue,At,Le)}else pt.render(Ue,At)};function co(w,G,q){w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Er(w,G,q),w.side=oi,w.needsUpdate=!0,Er(w,G,q),w.side=tn):Er(w,G,q)}this.compile=function(w,G,q=null){q===null&&(q=w),d=re.get(q),d.init(G),C.push(d),q.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),w!==q&&w.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const W=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ve=k.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const _e=ve[Ee];co(_e,q,k),W.add(_e)}else co(ve,q,k),W.add(ve)}),d=C.pop(),W},this.compileAsync=function(w,G,q=null){const W=this.compile(w,G,q);return new Promise(k=>{function ve(){if(W.forEach(function(Ee){M.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){k(w);return}setTimeout(ve,10)}ot.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let da=null;function xc(w){da&&da(w)}function uo(){ci.stop()}function ho(){ci.start()}const ci=new fc;ci.setAnimationLoop(xc),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(w){da=w,J.setAnimationLoop(w),w===null?ci.stop():ci.start()},J.addEventListener("sessionstart",uo),J.addEventListener("sessionend",ho),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const q=J.enabled===!0&&J.isPresenting===!0,W=_!==null&&(N===null||q)&&_.begin(S,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(G),G=J.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,G,N),d=re.get(w,C.length),d.init(G),C.push(d),Ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),We.setFromProjectionMatrix(Ft,Tn,G.reversedDepth),Ve=this.localClippingEnabled,Oe=oe.init(this.clippingPlanes,Ve),o=Be.get(w,A.length),o.init(),A.push(o),J.enabled===!0&&J.isPresenting===!0){const Ee=S.xr.getDepthSensingMesh();Ee!==null&&ua(Ee,G,-1/0,S.sortObjects)}ua(w,G,0,S.sortObjects),o.finish(),S.sortObjects===!0&&o.sort(Xe,tt),Ke=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ke&&we.addToRenderList(o,w),this.info.render.frame++,Oe===!0&&oe.beginShadows();const k=d.state.shadowsArray;if(be.render(k,w,G),Oe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&_.hasRenderPass())===!1){const Ee=o.opaque,_e=o.transmissive;if(d.setupLights(),G.isArrayCamera){const Ce=G.cameras;if(_e.length>0)for(let De=0,Ze=Ce.length;De<Ze;De++){const Je=Ce[De];po(Ee,_e,w,Je)}Ke&&we.render(w);for(let De=0,Ze=Ce.length;De<Ze;De++){const Je=Ce[De];fo(o,w,Je,Je.viewport)}}else _e.length>0&&po(Ee,_e,w,G),Ke&&we.render(w),fo(o,w,G)}N!==null&&O===0&&(z.updateMultisampleRenderTarget(N),z.updateRenderTargetMipmap(N)),W&&_.end(S),w.isScene===!0&&w.onAfterRender(S,w,G),le.resetDefaultState(),L=-1,F=null,C.pop(),C.length>0?(d=C[C.length-1],Oe===!0&&oe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?o=A[A.length-1]:o=null};function ua(w,G,q,W){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){W&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);const Ee=Ae.update(w),_e=w.material;_e.visible&&o.push(w,Ee,_e,q,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){const Ee=Ae.update(w),_e=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),dt.copy(Ee.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(_e)){const Ce=Ee.groups;for(let De=0,Ze=Ce.length;De<Ze;De++){const Je=Ce[De],Ue=_e[Je.materialIndex];Ue&&Ue.visible&&o.push(w,Ee,Ue,q,dt.z,Je)}}else _e.visible&&o.push(w,Ee,_e,q,dt.z,null)}}const ve=w.children;for(let Ee=0,_e=ve.length;Ee<_e;Ee++)ua(ve[Ee],G,q,W)}function fo(w,G,q,W){const{opaque:k,transmissive:ve,transparent:Ee}=w;d.setupLightsView(q),Oe===!0&&oe.setGlobalState(S.clippingPlanes,q),W&&Pe.viewport(P.copy(W)),k.length>0&&Sr(k,G,q),ve.length>0&&Sr(ve,G,q),Ee.length>0&&Sr(Ee,G,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function po(w,G,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget[W.id]===void 0){const Ue=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");d.state.transmissionRenderTarget[W.id]=new Cn(1,1,{generateMipmaps:!0,type:Ue?Zn:on,minFilter:Si,samples:Math.max(4,_t.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const ve=d.state.transmissionRenderTarget[W.id],Ee=W.viewport||P;ve.setSize(Ee.z*S.transmissionResolutionScale,Ee.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),Ce=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(ve),S.getClearColor(j),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Ke&&we.render(q);const Ze=S.toneMapping;S.toneMapping=wn;const Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),Oe===!0&&oe.setGlobalState(S.clippingPlanes,W),Sr(w,q,W),z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ft=0,At=G.length;ft<At;ft++){const Et=G[ft],{object:pt,geometry:kt,material:Le,group:Qt}=Et;if(Le.side===tn&&pt.layers.test(W.layers)){const rt=Le.side;Le.side=Jt,Le.needsUpdate=!0,mo(pt,q,W,kt,Le,Qt),Le.side=rt,Le.needsUpdate=!0,Ue=!0}}Ue===!0&&(z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve))}S.setRenderTarget(_e,Ce,De),S.setClearColor(j,ne),Je!==void 0&&(W.viewport=Je),S.toneMapping=Ze}function Sr(w,G,q){const W=G.isScene===!0?G.overrideMaterial:null;for(let k=0,ve=w.length;k<ve;k++){const Ee=w[k],{object:_e,geometry:Ce,group:De}=Ee;let Ze=Ee.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),_e.layers.test(q.layers)&&mo(_e,G,q,Ce,Ze,De)}}function mo(w,G,q,W,k,ve){w.onBeforeRender(S,G,q,W,k,ve),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(S,G,q,W,w,ve),k.transparent===!0&&k.side===tn&&k.forceSinglePass===!1?(k.side=Jt,k.needsUpdate=!0,S.renderBufferDirect(q,G,W,k,w,ve),k.side=oi,k.needsUpdate=!0,S.renderBufferDirect(q,G,W,k,w,ve),k.side=tn):S.renderBufferDirect(q,G,W,k,w,ve),w.onAfterRender(S,G,q,W,k,ve)}function Er(w,G,q){G.isScene!==!0&&(G=gt);const W=M.get(w),k=d.state.lights,ve=d.state.shadowsArray,Ee=k.state.version,_e=he.getParameters(w,k.state,ve,G,q),Ce=he.getProgramCacheKey(_e);let De=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,W.fog=G.fog;const Ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=ee.get(w.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",ut),De=new Map,W.programs=De);let Je=De.get(Ce);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Ee)return vo(w,_e),Je}else _e.uniforms=he.getUniforms(w),w.onBeforeCompile(_e,S),Je=he.acquireProgram(_e,Ce),De.set(Ce,Je),W.uniforms=_e.uniforms;const Ue=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=oe.uniform),vo(w,_e),W.needsLights=Ec(w),W.lightsStateVersion=Ee,W.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function go(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=$r.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function vo(w,G){const q=M.get(w);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Mc(w,G,q,W,k){G.isScene!==!0&&(G=gt),z.resetTextureUnits();const ve=G.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?G.environment:null,_e=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ki,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=ee.get(W.envMap||Ee,Ce),Ze=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let Et=wn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=S.toneMapping);const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,kt=pt!==void 0?pt.length:0,Le=M.get(W),Qt=d.state.lights;if(Oe===!0&&(Ve===!0||w!==F)){const Ot=w===F&&W.id===L;oe.setState(W,w,Ot)}let rt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Qt.state.version||Le.outputColorSpace!==_e||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==De||W.fog===!0&&Le.fog!==ve||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Ze||Le.vertexTangents!==Je||Le.morphTargets!==Ue||Le.morphNormals!==ft||Le.morphColors!==At||Le.toneMapping!==Et||Le.morphTargetsCount!==kt)&&(rt=!0):(rt=!0,Le.__version=W.version);let dn=Le.currentProgram;rt===!0&&(dn=Er(W,G,k));let vn=!1,di=!1,Ai=!1;const vt=dn.getUniforms(),Ht=Le.uniforms;if(Pe.useProgram(dn.program)&&(vn=!0,di=!0,Ai=!0),W.id!==L&&(L=W.id,di=!0),vn||F!==w){Pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",w.projectionMatrix),vt.setValue(B,"viewMatrix",w.matrixWorldInverse);const jn=vt.map.cameraPosition;jn!==void 0&&jn.setValue(B,nt.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,di=!0,Ai=!0)}if(Le.needsLights&&(Qt.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Qt.state.directionalShadowMap,z),Qt.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Qt.state.spotShadowMap,z),Qt.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Qt.state.pointShadowMap,z)),k.isSkinnedMesh){vt.setOptional(B,k,"bindMatrix"),vt.setOptional(B,k,"bindMatrixInverse");const Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(B,"boneTexture",Ot.boneTexture,z))}k.isBatchedMesh&&(vt.setOptional(B,k,"batchingTexture"),vt.setValue(B,"batchingTexture",k._matricesTexture,z),vt.setOptional(B,k,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",k._indirectTexture,z),vt.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",k._colorsTexture,z));const Kn=q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Me.update(k,q,dn),(di||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,vt.setValue(B,"receiveShadow",k.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&G.environment!==null&&(Ht.envMapIntensity.value=G.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=S_()),di&&(vt.setValue(B,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&Sc(Ht,Ai),ve&&W.fog===!0&&Ne.refreshFogUniforms(Ht,ve),Ne.refreshMaterialUniforms(Ht,W,Ie,ie,d.state.transmissionRenderTarget[w.id]),$r.upload(B,go(Le),Ht,z)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($r.upload(B,go(Le),Ht,z),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(B,"center",k.center),vt.setValue(B,"modelViewMatrix",k.modelViewMatrix),vt.setValue(B,"normalMatrix",k.normalMatrix),vt.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ot=W.uniformsGroups;for(let jn=0,bi=Ot.length;jn<bi;jn++){const _o=Ot[jn];ye.update(_o,dn),ye.bind(_o,dn)}}return dn}function Sc(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Ec(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,G,q){const W=M.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=G,M.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const q=M.get(w);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const yc=B.createFramebuffer();this.setRenderTarget=function(w,G=0,q=0){N=w,R=G,O=q;let W=null,k=!1,ve=!1;if(w){const _e=M.get(w);if(_e.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),P.copy(w.viewport),V.copy(w.scissor),Z=w.scissorTest,Pe.viewport(P),Pe.scissor(V),Pe.setScissorTest(Z),L=-1;return}else if(_e.__webglFramebuffer===void 0)z.setupRenderTarget(w);else if(_e.__hasExternalTextures)z.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(_e.__boundDepthTexture!==Ze){if(Ze!==null&&M.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ve=!0);const De=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[G])?W=De[G][q]:W=De[G],k=!0):w.samples>0&&z.useMultisampledRTT(w)===!1?W=M.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[q]:W=De,P.copy(w.viewport),V.copy(w.scissor),Z=w.scissorTest}else P.copy($).multiplyScalar(Ie).floor(),V.copy(se).multiplyScalar(Ie).floor(),Z=de;if(q!==0&&(W=yc),Pe.bindFramebuffer(B.FRAMEBUFFER,W)&&Pe.drawBuffers(w,W),Pe.viewport(P),Pe.scissor(V),Pe.setScissorTest(Z),k){const _e=M.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,q)}else if(ve){const _e=G;for(let Ce=0;Ce<w.textures.length;Ce++){const De=M.get(w.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,De.__webglTexture,q,_e)}}else if(w!==null&&q!==0){const _e=M.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,q)}L=-1},this.readRenderTargetPixels=function(w,G,q,W,k,ve,Ee,_e=0){if(!(w&&w.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Pe.bindFramebuffer(B.FRAMEBUFFER,Ce);try{const De=w.textures[_e],Ze=De.format,Je=De.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!_t.textureFormatReadable(Ze)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Je)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-W&&q>=0&&q<=w.height-k&&B.readPixels(G,q,W,k,fe.convert(Ze),fe.convert(Je),ve)}finally{const De=N!==null?M.get(N).__webglFramebuffer:null;Pe.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,G,q,W,k,ve,Ee,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(G>=0&&G<=w.width-W&&q>=0&&q<=w.height-k){Pe.bindFramebuffer(B.FRAMEBUFFER,Ce);const De=w.textures[_e],Ze=De.format,Je=De.type;if(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!_t.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ue),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(G,q,W,k,fe.convert(Ze),fe.convert(Je),0);const ft=N!==null?M.get(N).__webglFramebuffer:null;Pe.bindFramebuffer(B.FRAMEBUFFER,ft);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await X0(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ue),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.deleteBuffer(Ue),B.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,q=0){const W=Math.pow(2,-q),k=Math.floor(w.image.width*W),ve=Math.floor(w.image.height*W),Ee=G!==null?G.x:0,_e=G!==null?G.y:0;z.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Ee,_e,k,ve),Pe.unbindTexture()};const Ac=B.createFramebuffer(),bc=B.createFramebuffer();this.copyTextureToTexture=function(w,G,q=null,W=null,k=0,ve=0){let Ee,_e,Ce,De,Ze,Je,Ue,ft,At;const Et=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(q!==null)Ee=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ze=q.min.y,Je=q.isBox3?q.min.z:0;else{const Ht=Math.pow(2,-k);Ee=Math.floor(Et.width*Ht),_e=Math.floor(Et.height*Ht),w.isDataArrayTexture?Ce=Et.depth:w.isData3DTexture?Ce=Math.floor(Et.depth*Ht):Ce=1,De=0,Ze=0,Je=0}W!==null?(Ue=W.x,ft=W.y,At=W.z):(Ue=0,ft=0,At=0);const pt=fe.convert(G.format),kt=fe.convert(G.type);let Le;G.isData3DTexture?(z.setTexture3D(G,0),Le=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),Le=B.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Qt=B.getParameter(B.UNPACK_ROW_LENGTH),rt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),dn=B.getParameter(B.UNPACK_SKIP_PIXELS),vn=B.getParameter(B.UNPACK_SKIP_ROWS),di=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,De),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const Ai=w.isDataArrayTexture||w.isData3DTexture,vt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Ht=M.get(w),Kn=M.get(G),Ot=M.get(Ht.__renderTarget),jn=M.get(Kn.__renderTarget);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let bi=0;bi<Ce;bi++)Ai&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(w).__webglTexture,k,Je+bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(G).__webglTexture,ve,At+bi)),B.blitFramebuffer(De,Ze,Ee,_e,Ue,ft,Ee,_e,B.DEPTH_BUFFER_BIT,B.NEAREST);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||M.has(w)){const Ht=M.get(w),Kn=M.get(G);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,Ac),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,bc);for(let Ot=0;Ot<Ce;Ot++)Ai?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.__webglTexture,k,Je+Ot):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ht.__webglTexture,k),vt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kn.__webglTexture,ve,At+Ot):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Kn.__webglTexture,ve),k!==0?B.blitFramebuffer(De,Ze,Ee,_e,Ue,ft,Ee,_e,B.COLOR_BUFFER_BIT,B.NEAREST):vt?B.copyTexSubImage3D(Le,ve,Ue,ft,At+Ot,De,Ze,Ee,_e):B.copyTexSubImage2D(Le,ve,Ue,ft,De,Ze,Ee,_e);Pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Le,ve,Ue,ft,At,Ee,_e,Ce,pt,kt,Et.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,ve,Ue,ft,At,Ee,_e,Ce,pt,Et.data):B.texSubImage3D(Le,ve,Ue,ft,At,Ee,_e,Ce,pt,kt,Et):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Ue,ft,Ee,_e,pt,kt,Et.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Ue,ft,Et.width,Et.height,pt,Et.data):B.texSubImage2D(B.TEXTURE_2D,ve,Ue,ft,Ee,_e,pt,kt,Et);B.pixelStorei(B.UNPACK_ROW_LENGTH,Qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,vn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,di),ve===0&&G.generateMipmaps&&B.generateMipmap(Le),Pe.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?z.setTextureCube(w,0):w.isData3DTexture?z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?z.setTexture2DArray(w,0):z.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){R=0,O=0,N=null,Pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class y_{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new ct("#ffffff");async initialize(e){this.canvas=e,this.renderer=new E_({canvas:e,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new lp,this.camera=new lo(0,100,100,0,.1,1e3),this.camera.position.z=10;const t=new Mr(1,1);this.geometryCache.set("plane",t);const n=new zi({color:16777215,transparent:!0,depthWrite:!1,side:tn}),r=new nn(t,n);r.visible=!1,this.scene.add(r),this.spritePool.push(r);const a=new zi({transparent:!0,depthWrite:!1,side:tn}),s=new nn(t,a);s.visible=!1,this.scene.add(s),this.rectPool.push(s),this.updateThemeColors(),this.themeObserver=new MutationObserver(l=>{for(let u=0;u<l.length;u++)if(l[u].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize(),this.canvas.addEventListener("webglcontextlost",this.handleContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.handleContextRestored,!1),setTimeout(()=>{this.renderer&&this.scene&&this.camera&&this.renderer.compile(this.scene,this.camera)},50)}handleContextLost=e=>{e.preventDefault(),this.renderer?.clear()};handleContextRestored=()=>{this.renderer&&this.scene&&this.camera&&this.renderer.compile(this.scene,this.camera)};updateThemeColors(){if(!this.scene)return;const e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new ct(t);const n=e.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(n)}resize(e,t,n){this.width=e,this.height=t,this.pixelRatio=n,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=this.height,this.camera.bottom=0,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(e){if(!(!this.renderer||!this.scene||!this.camera)){for(let t=0;t<e.length;t++){const n=e[t];n.type==="sprite"?this.renderSprite(n):n.type==="rect"&&this.renderRect(n)}for(let t=this.activeSprites;t<this.spritePool.length;t++)this.spritePool[t].visible=!1;for(let t=this.activeRects;t<this.rectPool.length;t++)this.rectPool[t].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(e){if(!this.scene)return;let t;if(this.activeSprites<this.spritePool.length)t=this.spritePool[this.activeSprites];else{const a=this.geometryCache.get("plane"),s=new zi({color:16777215,transparent:!0,depthWrite:!1,side:tn});t=new nn(a,s),this.scene.add(t),this.spritePool.push(t)}t.visible=!0,t.position.set(e.x,e.y,1);const n=10*e.scale;t.scale.set(n,n,1);const r=t.material;r.color.copy(this.primaryColor),r.opacity=e.opacity,this.activeSprites++}renderRect(e){if(!this.scene)return;let t;if(this.activeRects<this.rectPool.length)t=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),a=new zi({transparent:!0,depthWrite:!1,side:tn});t=new nn(r,a),this.scene.add(t),this.rectPool.push(t)}t.visible=!0,t.position.set(e.x,e.y,0),t.scale.set(e.width,e.height,1),t.rotation.z=-e.rotation;const n=t.material;n.color.setStyle(e.color),n.opacity=e.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.canvas&&(this.canvas.removeEventListener("webglcontextlost",this.handleContextLost),this.canvas.removeEventListener("webglcontextrestored",this.handleContextRestored)),this.renderer&&this.renderer.dispose();for(let e=0;e<this.spritePool.length;e++)this.spritePool[e].material.dispose();for(let e=0;e<this.rectPool.length;e++)this.rectPool[e].material.dispose();for(const e of this.geometryCache.values())e.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}class A_{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;height=0;allocateBuffers(e=100){this.capacity=e,Se.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Se.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const t=Se.request("GET_RING_BUFFER",{id:this.xBufferId}),n=Se.request("GET_RING_BUFFER",{id:this.yBufferId});t&&n&&(this.xHead=t.head,this.xView=t.view,this.yHead=n.head,this.yView=n.view)}initialize(e){this.element=e,this.height=e.clientHeight,this.bindEvents()}updateBounds(e,t){this.height=t}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=e=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const t=this.element.getBoundingClientRect(),n=e.getCoalescedEvents?e.getCoalescedEvents():[e];let r=Atomics.load(this.xHead,0);for(let a=0;a<n.length;a++){const s=n[a],l=s.clientX-t.left,u=this.height-(s.clientY-t.top);this.xView[r]=l,this.yView[r]=u,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}class b_{id;type="source";subType="dummy";parentId;output=new Float64Array(0);constructor(e,t){this.id=e,t&&Object.assign(this,t)}getOutputs(){return{out:this.output}}}class T_{id;type="processor";subType="dummy";parentId;output=new Float64Array(0);constructor(e,t){this.id=e,t&&Object.assign(this,t)}process(){return{out:this.output}}}class w_{id;type="sink";subType="dummy";parentId;constructor(e,t){this.id=e,t&&Object.assign(this,t)}consume(){return null}}class C_{id;type="processor";subType="math";parentId;capacity;operation;inputMap;exportMap;outputBuffer;constructor(e,t,n){this.id=e,this.capacity=t,this.operation=n,this.outputBuffer=new Float64Array(t)}process(e){const t=e.in||[];if(t.length===0)return{out:this.outputBuffer};const n=t[0],r=Math.min(n.length,this.outputBuffer.length);for(let a=0;a<r;a++){let s=n[a];for(let l=1;l<t.length;l++){const u=t[l],c=u.length>1?u[a]:u[0];this.operation==="add"?s+=c:this.operation==="multiply"&&(s*=c)}this.outputBuffer[a]=s}return{out:this.outputBuffer}}}class R_{id;type="processor";subType="motion";parentId;capacity;inputMap;exportMap;outputBuffer;constructor(e,t){this.id=e,this.capacity=t,this.outputBuffer=new Float64Array(t)}process(e){const t=e.pos||[],n=e.vel||[];if(t.length===0||n.length===0)return{out:this.outputBuffer};const r=t[0],a=n[0],s=Math.min(r.length,a.length,this.outputBuffer.length);for(let l=0;l<s;l++)this.outputBuffer[l]=r[l]+a[l];return{out:this.outputBuffer}}}class I_{nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:e=>{const t=new b_(e);return t.subType="dummy",t}},{subType:"time",label:"Time Source",create:e=>{const t=new s0(e);return t.subType="time",t}},{subType:"random",label:"Random Source",create:(e,t)=>{const n=new o0(e,t?.capacity??100);return n.subType="random",n}},{subType:"static-array",label:"Static Array",create:(e,t)=>{const n=new a0(e,t?.data?Array.from(t.data):[0]);return n.subType="static-array",n}},{subType:"smhi-weather",label:"SMHI Weather",create:(e,t)=>{const n=t?.lat??59.3293,r=t?.lon??18.0686;return new l0(e,t?.capacity??100,n,r)}},{subType:"ring-buffer",label:"Ring Buffer",create:(e,t)=>{const n=t?.bufferId??"pointer-x",r=Se.request("GET_RING_BUFFER",{id:n})||null,a=new Bl(e,r,n);return a.subType="ring-buffer",a}}],processor:[{subType:"dummy",label:"Dummy Processor",create:e=>{const t=new T_(e);return t.subType="dummy",t}},{subType:"math",label:"Math Processor",create:(e,t)=>{const n=new C_(e,t?.capacity??100,t?.operation??"add");return n.subType="math",n}},{subType:"motion",label:"Motion Processor",create:(e,t)=>{const n=new R_(e,t?.capacity??100);return n.subType="motion",n}}],sink:[{subType:"dummy",label:"Dummy Sink",create:e=>{const t=new w_(e);return t.subType="dummy",t}},{subType:"sprite",label:"Sprite Renderer",create:(e,t)=>{const n=new Vl(e,t?.textureId??"white-box");return n.subType="sprite",n}},{subType:"mesh",label:"Mesh Renderer",create:(e,t)=>{const n=t?.vertices?new Float32Array(t.vertices):new Float32Array,r=t?.indices?new Uint16Array(t.indices):new Uint16Array,a=t?.uvs?new Float32Array(t.uvs):new Float32Array,s=new c0(e,t?.textureId??"white-box",n,r,a);return s.subType="mesh",s}}],subject:[{subType:"default",label:"Subject Hub",create:e=>{const t=new Ul(e);return t.subType="default",t}}]};initialize(){Se.handle("GET_NODE_FACTORIES",()=>{const e={};for(const t in this.nodeRegistry)e[t]=this.nodeRegistry[t].map(n=>({subType:n.subType,label:n.label}));return e}),Se.handle("CREATE_NODE",e=>{const t=this.nodeRegistry[e.type];if(!t)return null;const n=t.find(a=>a.subType===e.subType);if(!n)return null;const r=n.create(e.id,e.config);return r&&(r.parentId=e.parentId,e.config&&(e.config.name!==void 0&&(r.name=e.config.name),e.config.inputIds&&(r.inputIds=[...e.config.inputIds]))),r})}}function P_(i,e){He(e,!0);const t=Kt("graph-actions"),n=["white-box","circle","triangle","star","particle"];{let r=K(()=>e.node.textureId||n[0]),a=K(()=>n.map(s=>({value:s,label:s})));yn(i,{label:"Texture ID",get value(){return E(r)},get options(){return E(a)},onchange:s=>t.updateNodeConfig(e.node,{textureId:s})})}ze()}var L_=$e("<!> <!> <!> <!>",1);function D_(i,e){He(e,!0);const t=Kt("graph-actions"),n=["white-box","circle","triangle","star","particle"];var r=L_(),a=Qe(r);{let c=K(()=>e.node.textureId||n[0]),h=K(()=>n.map(g=>({value:g,label:g})));yn(a,{label:"Texture ID",get value(){return E(c)},get options(){return E(h)},onchange:g=>t.updateNodeConfig(e.node,{textureId:g})})}var s=me(a,2);{let c=K(()=>(e.node.vertices?Array.from(e.node.vertices):[]).join(", "));qr(s,{label:"Vertices",rows:2,get value(){return E(c)},onchange:h=>t.updateNodeConfig(e.node,{vertices:new Float32Array(h.split(",").map(g=>parseFloat(g.trim())||0))})})}var l=me(s,2);{let c=K(()=>(e.node.indices?Array.from(e.node.indices):[]).join(", "));qr(l,{label:"Indices",rows:2,get value(){return E(c)},onchange:h=>t.updateNodeConfig(e.node,{indices:new Uint16Array(h.split(",").map(g=>parseInt(g.trim())||0))})})}var u=me(l,2);{let c=K(()=>(e.node.uvs?Array.from(e.node.uvs):[]).join(", "));qr(u,{label:"UVs",rows:2,get value(){return E(c)},onchange:h=>t.updateNodeConfig(e.node,{uvs:new Float32Array(h.split(",").map(g=>parseFloat(g.trim())||0))})})}U(i,r),ze()}var U_=$e("<!> <!>",1);function N_(i,e){He(e,!0);const t=Kt("graph-actions"),n=[{value:"add",label:"Add"},{value:"multiply",label:"Multiply"}];var r=U_(),a=Qe(r);{let l=K(()=>e.node.capacity||100);js(a,{label:"Capacity",min:1,step:1,get value(){return E(l)},onchange:u=>t.updateNodeConfig(e.node,{capacity:u})})}var s=me(a,2);{let l=K(()=>e.node.operation||"add");yn(s,{label:"Operation",get value(){return E(l)},get options(){return n},onchange:u=>t.updateNodeConfig(e.node,{operation:u})})}U(i,r),ze()}function F_(i,e){He(e,!0);const t=Kt("graph-actions");let n=lt(Gi([]));function r(){Fe(n,Se.request("GET_AVAILABLE_BUFFERS",void 0),!0)}gr(()=>{r(),Se.on("GRAPH_UPDATED",r),Se.on("MEMORY_ALLOCATED",r)}),Xs(()=>{Se.off("GRAPH_UPDATED",r),Se.off("MEMORY_ALLOCATED",r)});{let a=K(()=>e.node.bufferId||""),s=K(()=>E(n).map(l=>({value:l,label:l})));yn(i,{label:"Target Buffer ID",get value(){return E(a)},disabledPlaceholder:"Select a buffer...",get options(){return E(s)},onchange:l=>t.updateNodeConfig(e.node,{bufferId:l})})}ze()}function O_(i,e){He(e,!0);const t=Kt("graph-actions");{let n=K(()=>(e.node.data?Array.from(e.node.data):[]).join(", "));qr(i,{label:"Data (comma separated)",rows:3,get value(){return E(n)},onchange:r=>t.updateNodeConfig(e.node,{data:r.split(",").map(a=>parseFloat(a.trim())||0)})})}ze()}function B_(i,e){He(e,!0);const t=Kt("graph-actions");{let n=K(()=>e.node.capacity||100);js(i,{label:"Capacity",min:1,step:1,get value(){return E(n)},onchange:r=>t.updateNodeConfig(e.node,{capacity:r})})}ze()}var V_=$e('<div style="display: flex; gap: 6px;"><div style="flex: 1;"><!></div> <div style="flex: 1;"><!></div></div>'),H_=$e('<!> <!> <div class="port-section"><div class="port-label-header">Data Parser Tuning</div> <div style="margin-top: 6px;"><!></div> <!> <!> <!></div>',1);function Ml(i,e){He(e,!0);const t=Kt("graph-actions");var n=H_(),r=Qe(n);{let v=K(()=>e.node.capacity||100);js(r,{label:"Capacity",min:1,step:1,get value(){return E(v)},onchange:x=>t.updateNodeConfig(e.node,{capacity:x})})}var a=me(r,2);{let v=K(()=>e.node.url||"");Nl(a,{label:"API URL",get value(){return E(v)},placeholder:"https://api.example.com/data.json",onchange:x=>t.updateNodeConfig(e.node,{url:x})})}var s=me(a,2),l=me(ue(s),2),u=ue(l);{let v=K(()=>e.node.dataPath||""),x=K(()=>[{value:"",label:"Auto-detect"},...(e.node.availableDataPaths||[]).map(b=>({value:b,label:b==="root"?"(Root Level)":b}))]);yn(u,{label:"Target Array",get value(){return E(v)},get options(){return E(x)},onchange:b=>t.updateNodeConfig(e.node,{dataPath:b})})}ce(l);var c=me(l,2);{let v=K(()=>e.node.timeKey||""),x=K(()=>[{value:"",label:"-- None --"},...(e.node.availableColumns||[]).map(b=>({value:b,label:b}))]);yn(c,{label:"Time/X-Axis Column",get value(){return E(v)},get options(){return E(x)},onchange:b=>t.updateNodeConfig(e.node,{timeKey:b})})}var h=me(c,2);{let v=K(()=>e.node.unpackArray||""),x=K(()=>[{value:"",label:"-- None --"},...(e.node.availableNestedArrays||[]).map(b=>({value:b,label:b}))]);yn(h,{label:"Unpack Inner Array (EAV)",get value(){return E(v)},get options(){return E(x)},onchange:b=>t.updateNodeConfig(e.node,{unpackArray:b})})}var g=me(h,2);{var f=v=>{var x=V_(),b=ue(x),p=ue(b);{let T=K(()=>e.node.unpackKey||""),o=K(()=>[{value:"",label:"-- Select --"},...(e.node.availableInnerColumns||[]).map(d=>({value:d,label:d}))]);yn(p,{label:"Key Column",get value(){return E(T)},get options(){return E(o)},onchange:d=>t.updateNodeConfig(e.node,{unpackKey:d})})}ce(b);var m=me(b,2),y=ue(m);{let T=K(()=>e.node.unpackValue||""),o=K(()=>[{value:"",label:"-- Select --"},...(e.node.availableInnerColumns||[]).map(d=>({value:d,label:d}))]);yn(y,{label:"Value Column",get value(){return E(T)},get options(){return E(o)},onchange:d=>t.updateNodeConfig(e.node,{unpackValue:d})})}ce(m),ce(x),U(v,x)};Re(g,v=>{e.node.unpackArray&&v(f)})}ce(s),U(i,n),ze()}const z_=i=>{sf(i,{})};var G_=$e("<!> <!> <!>",1),k_=$e('<div class="logic-tree svelte-1uha8ag"><!></div>'),W_=$e('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function Q_(i,e){He(e,!0);const t=f=>{sd(f,{children:(v,x)=>{var b=st(),p=Qe(b);{var m=y=>{i0(y,{})};Re(p,y=>{E(h)&&y(m)})}U(v,b)},$$slots:{default:!0}})};ur("settings-registry",{sprite:P_,mesh:D_,math:N_,"ring-buffer":F_,"static-array":O_,motion:B_,api:Ml,"smhi-weather":Ml});const r=new I_,a=new r0,s=new of;new lf(s);const l=new cf,u=new y_,c=new A_;let h=lt(!1),g=lt(!1);gr(async()=>{r.initialize(),c.allocateBuffers(100),l.initialize(),await l.loadGraphState(),Fe(g,s.nodes.size>0),Fe(h,!0)}),Xs(()=>{a.destroy(),l.destroy()}),rf(i,{get viewsPanel(){return z_},get settingsPanel(){return t},children:(f,v)=>{var x=W_(),b=Qe(x),p=ue(b);vd(p,{get graph(){return s},get renderer(){return u},get pointer(){return c}}),ce(b);var m=me(b,2);{var y=T=>{var o=k_(),d=ue(o);df(d,{children:(A,C)=>{uf(A,{id:"mouse-trail",children:(_,S)=>{var D=G_(),R=Qe(D);Ao(R,{id:"x-coords",bufferId:"pointer-x"});var O=me(R,2);Ao(O,{id:"y-coords",bufferId:"pointer-y"});var N=me(O,2);d0(N,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"]}),U(_,D)},$$slots:{default:!0}})},$$slots:{default:!0}}),ce(o),U(T,o)};Re(m,T=>{E(h)&&!E(g)&&T(y)})}U(f,x)}}),ze()}export{Q_ as component};
