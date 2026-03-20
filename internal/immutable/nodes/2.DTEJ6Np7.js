import{a as U,f as _n,c as qe,t as Mn,k as $,e as W0,s as Z0,d as ml}from"../chunks/hftnnhOh.js";import{o as qd,a as X0}from"../chunks/CATz5q9G.js";import{h as zs,d as Y0,e as q0,q as P,r as j0,ac as K0,s as _h,f as vh,g as gl,i as Ra,aB as J0,aI as Q0,al as yh,M as $0,L as uc,b1 as tm,O as em,_ as nm,aP as im,aH as xu,b2 as rm,a8 as hc,b3 as sm,b4 as am,a3 as om,K as Sh,b5 as Xi,W as lm,G as jd,J as Kd,b6 as _l,b7 as cm,aF as um,N as hm,I as dm,aC as fm,U as yo,x as Ge,u as il,B as ue,C as he,z as We,F as Re,a6 as yt,y as He,am as En,aN as So,b8 as Jd,b0 as bu,a5 as dc,T as vl,A as pm}from"../chunks/DXIkkyZg.js";import{i as $t,r as An}from"../chunks/CGbUoO4w.js";import{g as wn,a as Tn,s as Qe,T as mm,S as Qd,l as fc,b as gm,c as _m}from"../chunks/Bodwl4jW.js";import{b as xh,c as vm}from"../chunks/Bo1Bc_tw.js";import{i as ym}from"../chunks/9a3fKgRb.js";function Sm(n,t){return t}function xm(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];Kd(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var d=n.outrogroups;pc(n,xu(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,h=c.parentNode;um(h),h.append(c),n.items.clear()}pc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function pc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Xi;const a=document.createDocumentFragment();hm(s,a)}else dm(t[r],e)}}var bh;function bm(n,t,e,i,r,s=null){var a=n,o=new Map;zs&&Y0();var l=null,c=nm(()=>{var m=e();return im(m)?m:m==null?[]:xu(m)}),h,p=new Map,d=!0;function _(m){(g.effect.f&lm)===0&&(g.pending.delete(m),g.fallback=l,Mm(g,h,a,t,i),l!==null&&(h.length===0?(l.f&Xi)===0?jd(l):(l.f^=Xi,Ks(l,null,a)):Kd(l,()=>{l=null})))}function v(m){g.pending.delete(m)}var M=q0(()=>{h=P(c);var m=h.length;let b=!1;if(zs){var A=j0(a)===K0;A!==(m===0)&&(a=_h(),vh(a),gl(!1),b=!0)}for(var u=new Set,f=$0,T=em(),I=0;I<m;I+=1){zs&&Ra.nodeType===J0&&Ra.data===Q0&&(a=Ra,b=!0,gl(!1));var S=h[I],E=i(S,I),Y=d?null:o.get(E);Y?(Y.v&&yh(Y.v,S),Y.i&&yh(Y.i,I),T&&f.unskip_effect(Y.e)):(Y=Em(o,d?a:bh??=Sh(),S,E,I,r,t,e),d||(Y.e.f|=Xi),o.set(E,Y)),u.add(E)}if(m===0&&s&&!l&&(d?l=uc(()=>s(a)):(l=uc(()=>s(bh??=Sh())),l.f|=Xi)),m>u.size&&tm(),zs&&m>0&&vh(_h()),!d)if(p.set(f,u),T){for(const[D,H]of o)u.has(D)||f.skip_effect(H.e);f.oncommit(_),f.ondiscard(v)}else _(f);b&&gl(!0),P(c)}),g={effect:M,items:o,pending:p,outrogroups:null,fallback:l};d=!1,zs&&(a=Ra)}function Hs(n){for(;n!==null&&(n.f&cm)===0;)n=n.next;return n}function Mm(n,t,e,i,r){var s=t.length,a=n.items,o=Hs(n.effect.first),l,c=null,h=[],p=[],d,_,v,M;for(M=0;M<s;M+=1){if(d=t[M],_=r(d,M),v=a.get(_).e,n.outrogroups!==null)for(const S of n.outrogroups)S.pending.delete(v),S.done.delete(v);if((v.f&_l)!==0&&jd(v),(v.f&Xi)!==0)if(v.f^=Xi,v===o)Ks(v,null,e);else{var g=c?c.next:o;v===n.effect.last&&(n.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),ar(n,c,v),ar(n,v,g),Ks(v,g,e),c=v,h=[],p=[],o=Hs(c.next);continue}if(v!==o){if(l!==void 0&&l.has(v)){if(h.length<p.length){var m=p[0],b;c=m.prev;var A=h[0],u=h[h.length-1];for(b=0;b<h.length;b+=1)Ks(h[b],m,e);for(b=0;b<p.length;b+=1)l.delete(p[b]);ar(n,A.prev,u.next),ar(n,c,A),ar(n,u,m),o=m,c=u,M-=1,h=[],p=[]}else l.delete(v),Ks(v,o,e),ar(n,v.prev,v.next),ar(n,v,c===null?n.effect.first:c.next),ar(n,c,v),c=v;continue}for(h=[],p=[];o!==null&&o!==v;)(l??=new Set).add(o),p.push(o),o=Hs(o.next);if(o===null)continue}(v.f&Xi)===0&&h.push(v),c=v,o=Hs(v.next)}if(n.outrogroups!==null){for(const S of n.outrogroups)S.pending.size===0&&(pc(n,xu(S.done)),n.outrogroups?.delete(S));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||l!==void 0){var f=[];if(l!==void 0)for(v of l)(v.f&_l)===0&&f.push(v);for(;o!==null;)(o.f&_l)===0&&o!==n.fallback&&f.push(o),o=Hs(o.next);var T=f.length;if(T>0){var I=null;xm(n,f,I)}}}function Em(n,t,e,i,r,s,a,o){var l=(a&sm)!==0?(a&am)===0?om(e,!1,!1):hc(e):null,c=(a&rm)!==0?hc(r):null;return{v:l,i:c,e:uc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function Ks(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Xi)===0?t.nodes.start:e;i!==null;){var a=fm(i);if(s.before(i),i===r)return;i=a}}function ar(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Am(n){var t=hc(0);return function(){return arguments.length===1?(yo(t,P(t)+1),arguments[0]):(P(t),n())}}class wm{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const de=new wm;class Tm{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){try{await this.compute.initialize()}catch{}try{await this.renderer.initialize(t)}catch{return}this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}setupMediatorHandlers(){de.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),de.emit("GRAPH_UPDATED",void 0),!0)),de.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),de.emit("GRAPH_UPDATED",void 0),!0)),de.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),de.emit("GRAPH_UPDATED",void 0),!0)),de.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),de.emit("GRAPH_UPDATED",void 0),!0)),de.handle("GET_CONTEXT",t=>null),de.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]}))}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,de.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,this.renderer.destroy(),this.compute.destroy()}}var Rm=_n('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function Im(n,t){Ge(t,!0);let e,i,r;il(()=>{if(!e||!i)return;(async()=>{r=new Tm(t.graph,t.renderer,t.compute),await r.boot(e);const c=window.devicePixelRatio||1;t.renderer.resize(i.clientWidth,i.clientHeight,c),t.pointer.initialize(i)})();const l=new ResizeObserver(c=>{for(const h of c){const{width:p,height:d}=h.contentRect;p>0&&d>0&&t.renderer.resize(p,d,window.devicePixelRatio||1)}});return l.observe(i),()=>{l.disconnect(),r&&r.shutdown(),t.pointer.destroy()}});var s=Rm(),a=ue(s);xh(a,o=>e=o,()=>e),he(s),xh(s,o=>i=o,()=>i),U(n,s),We()}var Cm=$('<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'),Dm=$('<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',1),Lm=$('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'),Pm=$('<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'),Fm=$('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'),Nm=$('<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'),Um=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Om(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Um();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=Cm();U(u,f)},v=u=>{var f=Dm();En(),U(u,f)},M=u=>{var f=Lm();U(u,f)},g=u=>{var f=Pm();U(u,f)},m=u=>{var f=Fm();U(u,f)},b=u=>{var f=Nm();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var Bm=$('<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>'),Vm=$('<path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path>',1),zm=$('<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Hm=$('<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>'),km=$('<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Gm=$('<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>'),Wm=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Zm(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Wm();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=Bm();U(u,f)},v=u=>{var f=Vm();En(),U(u,f)},M=u=>{var f=zm();U(u,f)},g=u=>{var f=Hm();U(u,f)},m=u=>{var f=km();U(u,f)},b=u=>{var f=Gm();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var Xm=$('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Ym=$('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),qm=$('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),jm=$('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Km=$('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Jm=$('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),Qm=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function $m(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Qm();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=Xm();U(u,f)},v=u=>{var f=Ym();En(),U(u,f)},M=u=>{var f=qm();U(u,f)},g=u=>{var f=jm();U(u,f)},m=u=>{var f=Km();U(u,f)},b=u=>{var f=Jm();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var tg=$('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),eg=$('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),ng=$('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),ig=$('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),rg=$('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),sg=$('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),ag=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function og(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=ag();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=tg();U(u,f)},v=u=>{var f=eg();En(),U(u,f)},M=u=>{var f=ng();U(u,f)},g=u=>{var f=ig();U(u,f)},m=u=>{var f=rg();U(u,f)},b=u=>{var f=sg();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var lg=$('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),cg=$('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),ug=$('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),hg=$('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),dg=$('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),fg=$('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),pg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function mg(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=pg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=lg();U(u,f)},v=u=>{var f=cg();En(),U(u,f)},M=u=>{var f=ug();U(u,f)},g=u=>{var f=hg();U(u,f)},m=u=>{var f=dg();U(u,f)},b=u=>{var f=fg();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var gg=$('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),_g=$('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),vg=$('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),yg=$('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),Sg=$('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),xg=$('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),bg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Mg(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=bg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=gg();U(u,f)},v=u=>{var f=_g();En(),U(u,f)},M=u=>{var f=vg();U(u,f)},g=u=>{var f=yg();U(u,f)},m=u=>{var f=Sg();U(u,f)},b=u=>{var f=xg();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var Eg=$('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),Ag=$('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),wg=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),Tg=$('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),Rg=$('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),Ig=$('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),Cg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dg(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Cg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=Eg();U(u,f)},v=u=>{var f=Ag();En(),U(u,f)},M=u=>{var f=wg();U(u,f)},g=u=>{var f=Tg();U(u,f)},m=u=>{var f=Rg();U(u,f)},b=u=>{var f=Ig();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var Lg=$('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),Pg=$('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),Fg=$('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),Ng=$('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),Ug=$('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),Og=$('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),Bg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Vg(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Bg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=Lg();U(u,f)},v=u=>{var f=Pg();En(),U(u,f)},M=u=>{var f=Fg();U(u,f)},g=u=>{var f=Ng();U(u,f)},m=u=>{var f=Ug();U(u,f)},b=u=>{var f=Og();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var zg=$('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),Hg=$('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),kg=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),Gg=$('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),Wg=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),Zg=$('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),Xg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Yg(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=Xg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=zg();U(u,f)},v=u=>{var f=Hg();En(),U(u,f)},M=u=>{var f=kg();U(u,f)},g=u=>{var f=Gg();U(u,f)},m=u=>{var f=Wg();U(u,f)},b=u=>{var f=Zg();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var qg=$('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),jg=$('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),Kg=$('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),Jg=$('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),Qg=$('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),$g=$('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),t_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function e_(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=t_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=qg();U(u,f)},v=u=>{var f=jg();En(),U(u,f)},M=u=>{var f=Kg();U(u,f)},g=u=>{var f=Jg();U(u,f)},m=u=>{var f=Qg();U(u,f)},b=u=>{var f=$g();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var n_=$('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),i_=$('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),r_=$('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),s_=$('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),a_=$('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),o_=$('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),l_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function c_(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=l_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=n_();U(u,f)},v=u=>{var f=i_();En(),U(u,f)},M=u=>{var f=r_();U(u,f)},g=u=>{var f=s_();U(u,f)},m=u=>{var f=a_();U(u,f)},b=u=>{var f=o_();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var u_=$('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),h_=$('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),d_=$('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),f_=$('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),p_=$('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),m_=$('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),g_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function __(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=g_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=u_();U(u,f)},v=u=>{var f=h_();En(),U(u,f)},M=u=>{var f=d_();U(u,f)},g=u=>{var f=f_();U(u,f)},m=u=>{var f=p_();U(u,f)},b=u=>{var f=m_();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var v_=$('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),y_=$('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),S_=$('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),x_=$('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),b_=$('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),M_=$('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),E_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function A_(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=E_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=v_();U(u,f)},v=u=>{var f=y_();En(),U(u,f)},M=u=>{var f=S_();U(u,f)},g=u=>{var f=x_();U(u,f)},m=u=>{var f=b_();U(u,f)},b=u=>{var f=M_();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var w_=$('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),T_=$('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),R_=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),I_=$('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),C_=$('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),D_=$('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),L_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Mh(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=L_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=w_();U(u,f)},v=u=>{var f=T_();En(),U(u,f)},M=u=>{var f=R_();U(u,f)},g=u=>{var f=I_();U(u,f)},m=u=>{var f=C_();U(u,f)},b=u=>{var f=D_();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var P_=$('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),F_=$('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),N_=$('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),U_=$('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),O_=$('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),B_=$('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),V_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function z_(n,t){Ge(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=yt(()=>t.weight??e.weight??"regular"),s=yt(()=>t.color??e.color??"currentColor"),a=yt(()=>t.size??e.size??"1em"),o=yt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:S,...E}=u;return E}var c=V_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:P(a),height:P(a),fill:P(s),transform:P(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ue(c);{var p=u=>{var f=qe(),T=He(f);Qe(T,()=>t.children),U(u,f)};$t(h,u=>{t.children&&u(p)})}var d=Re(h,2);{var _=u=>{var f=P_();U(u,f)},v=u=>{var f=F_();En(),U(u,f)},M=u=>{var f=N_();U(u,f)},g=u=>{var f=U_();U(u,f)},m=u=>{var f=O_();U(u,f)},b=u=>{var f=B_();U(u,f)},A=u=>{var f=Mn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};$t(d,u=>{P(r)==="bold"?u(_):P(r)==="duotone"?u(v,1):P(r)==="fill"?u(M,2):P(r)==="light"?u(g,3):P(r)==="regular"?u(m,4):P(r)==="thin"?u(b,5):u(A,-1)})}he(c),U(n,c),We()}var H_=_n('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function k_(n,t){var e=H_(),i=ue(e),r=ue(i);mm(r,{}),he(i);var s=Re(i,2),a=ue(s);Qe(a,()=>t.children),he(s);var o=Re(s,2),l=ue(o);Qe(l,()=>t.viewsPanel??So);var c=Re(l,2);Qe(c,()=>t.settingsPanel??So),he(o),he(e),U(n,e)}var yl=Am(()=>fc),G_=_n('<div class="views-content"></div>');function W_(n,t){Ge(t,!1),ym(),Qd(n,{get isOpen(){return yl().viewsOpen},onClose:()=>yl(yl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=G_();U(e,r)},$$slots:{default:!0}}),We()}var Z_=_n('<div class="settings-content"><!></div>');function X_(n,t){Ge(t,!0),Qd(n,{get isOpen(){return fc.settingsOpen},onClose:()=>fc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=Z_(),s=ue(r);{var a=o=>{var l=qe(),c=He(l);Qe(c,()=>t.children),U(o,l)};$t(s,o=>{t.children&&o(a)})}he(r),U(e,r)},$$slots:{default:!0}}),We()}class Y_{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;contextMap=new Map;renderPrimitives=[];inputBufferCache=[];hasInputIds(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputIds(t)&&(t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){this.nodes.delete(t),this.connections=this.connections.filter(e=>e.sourceId!==t&&e.targetId!==t);for(const[e,i]of this.nodes)this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t))}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.contextMap.clear(),this.nodeOutputs.clear(),this.contextMap.set("global",t);for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r){if(r.type==="source"){const s=r;this.nodeOutputs.set(r.id,s.getOutput())}else if(r.type==="processor"){const s=r;this.inputBufferCache.length=0;for(let a=0;a<s.inputIds.length;a++){const o=s.inputIds[a],l=this.nodeOutputs.get(o);l&&this.inputBufferCache.push(l)}this.nodeOutputs.set(r.id,s.process(this.inputBufferCache))}else if(r.type==="subject"){const s=r;this.inputBufferCache.length=0;for(let l=0;l<s.inputIds.length;l++){const c=s.inputIds[l],h=this.nodeOutputs.get(c);h&&this.inputBufferCache.push(h)}let a;for(let l=0;l<this.connections.length;l++){const c=this.connections[l];if(c.targetId===r.id){const h=this.nodes.get(c.sourceId);if(h&&h.type==="subject"){a=c.sourceId;break}}}const o=a?this.contextMap.get(a):this.contextMap.get("global");o&&this.contextMap.set(r.id,s.aggregate(o,this.inputBufferCache))}else if(r.type==="sink"){const s=r;let a;for(let l=0;l<this.connections.length;l++){const c=this.connections[l];if(c.targetId===r.id){const h=this.nodes.get(c.sourceId);if(h&&h.type==="subject"){a=c.sourceId;break}}}const o=a?this.contextMap.get(a):this.contextMap.get("global");if(o){const l=s.consume(o);if(l)for(let c=0;c<l.length;c++)this.renderPrimitives.push(l[c])}}}}return this.renderPrimitives}}class q_{id;type="subject";inputIds;cachedContext;constructor(t,e=[]){this.id=t,this.inputIds=e,this.cachedContext={id:this.id,globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}}}aggregate(t,e){this.cachedContext.globalTime=t.globalTime,this.cachedContext.spatialTransforms=t.spatialTransforms,this.cachedContext.buffers.clear();for(const[i,r]of t.buffers.entries())this.cachedContext.buffers.set(i,r);for(let i=0;i<e.length;i++)this.cachedContext.buffers.set(`${this.id}_input_${i}`,e[i]);return this.cachedContext}}function j_(n,t){Ge(t,!0),Jd("subject-parent",()=>{});var e=qe(),i=He(e);{var r=s=>{var a=qe(),o=He(a);Qe(o,()=>t.children),U(s,a)};$t(i,s=>{t.children&&s(r)})}U(n,e),We()}function K_(n,t){Ge(t,!0);const e=bu("subject-parent");il(()=>{const a=new q_(t.id);de.request("REGISTER_NODE",{node:a});const o=e?.();return o&&de.request("CONNECT_NODES",{sourceId:o,targetId:t.id}),()=>{de.emit("CONTEXT_UPDATED",{id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}})}}),Jd("subject-parent",()=>t.id);var i=qe(),r=He(i);{var s=a=>{var o=qe(),l=He(o);Qe(l,()=>t.children),U(a,o)};$t(r,a=>{t.children&&a(s)})}U(n,i),We()}var J_=_n('<div class="arrow left svelte-1u9gsyo"></div>'),Q_=_n('<div class="arrow right svelte-1u9gsyo"></div>'),$_=_n('<div class="v-line svelte-1u9gsyo"></div> <div class="h-line svelte-1u9gsyo"><!></div>',1),t1=_n('<button class="expand-btn svelte-1u9gsyo"><!></button>'),e1=_n('<div class="expand-spacer svelte-1u9gsyo"></div>'),n1=_n('<button class="action-btn svelte-1u9gsyo" title="Disconnect">✂</button>'),i1=_n('<div class="children-group svelte-1u9gsyo"><!></div>'),r1=_n('<div class="tree-item svelte-1u9gsyo"><!> <div class="node-row svelte-1u9gsyo"><div class="node-info svelte-1u9gsyo"><!> <span><!></span> <span class="node-id svelte-1u9gsyo"> </span></div> <div class="node-actions svelte-1u9gsyo"><!> <button class="action-btn danger svelte-1u9gsyo" title="Delete">✕</button></div></div> <!></div>'),s1=_n('<div class="editor svelte-1u9gsyo"><h3 class="svelte-1u9gsyo">Graph Editor</h3> <div class="tree svelte-1u9gsyo"><!></div></div>');function a1(n,t){Ge(t,!0);let e=dc(vl([])),i=dc(vl([])),r=vl({});function s(){const g=de.request("GET_GRAPH_STATE",void 0);g&&(yo(e,g.nodes,!0),yo(i,g.connections,!0))}qd(()=>{s(),de.on("GRAPH_UPDATED",s)}),X0(()=>{de.off("GRAPH_UPDATED",s)});function a(g){if(g.type==="source"||g.type==="processor")return P(i).find(b=>b.sourceId===g.id)?.targetId;if(g.type==="sink"||g.type==="subject")return P(i).find(b=>b.targetId===g.id&&P(e).find(A=>A.id===b.sourceId)?.type==="subject")?.sourceId}let o=yt(()=>P(e).filter(g=>!a(g)));function l(g){return P(e).filter(m=>a(m)===g)}function c(g){de.request("REMOVE_NODE",{id:g})}function h(g,m){const b=P(e).find(A=>A.id===m);b&&(b.type==="source"||b.type==="processor"?de.request("DISCONNECT_NODES",{sourceId:m,targetId:g}):de.request("DISCONNECT_NODES",{sourceId:g,targetId:m}))}function p(g){r[g]=r[g]===!1}function d(g){const m={subject:$m,source:c_,sink:mg,processor:z_},b=g.subType||g.id;return{"mouse-input":Vg,"keyboard-input":Mh,sprite:Yg,mesh:__,"sprite-atlas":A_,"transform-shader":e_,script:Mg,renderer:Dg,console:Mh,file:og}[b]||m[g.type]}var _=s1(),v=Re(ue(_),2);{const g=(m,b=So,A=So)=>{var u=qe(),f=He(u);bm(f,17,b,Sm,(T,I)=>{const S=yt(()=>l(P(I).id)),E=yt(()=>P(S).length>0),Y=yt(()=>r[P(I).id]!==!1),D=yt(()=>d(P(I)));var H=r1(),G=ue(H);{var X=mt=>{var xt=$_(),Ve=Re(He(xt),2),se=ue(Ve);{var fe=Wt=>{var ze=J_();U(Wt,ze)},ae=Wt=>{var ze=Q_();U(Wt,ze)};$t(se,Wt=>{P(I).type==="source"||P(I).type==="processor"?Wt(fe):P(I).type==="sink"&&Wt(ae,1)})}he(Ve),U(mt,xt)};$t(G,mt=>{A()&&mt(X)})}var W=Re(G,2),z=ue(W),V=ue(z);{var it=mt=>{var xt=t1(),Ve=ue(xt);{var se=ae=>{Om(ae,{size:12,weight:"bold"})},fe=ae=>{Zm(ae,{size:12,weight:"bold"})};$t(Ve,ae=>{P(Y)?ae(se):ae(fe,-1)})}he(xt),ml("click",xt,()=>p(P(I).id)),U(mt,xt)},tt=mt=>{var xt=e1();U(mt,xt)};$t(V,mt=>{P(E)?mt(it):mt(tt,-1)})}var ht=Re(V,2),St=ue(ht);vm(St,()=>P(D),(mt,xt)=>{xt(mt,{size:16,weight:"fill"})}),he(ht);var pt=Re(ht,2),jt=ue(pt,!0);he(pt),he(z);var Pe=Re(z,2),Ie=ue(Pe);{var J=mt=>{var xt=n1();ml("click",xt,()=>h(A(),P(I).id)),U(mt,xt)};$t(Ie,mt=>{A()&&mt(J)})}var at=Re(Ie,2);he(Pe),he(W);var ot=Re(W,2);{var qt=mt=>{var xt=i1(),Ve=ue(xt);g(Ve,()=>P(S),()=>P(I).id),he(xt),U(mt,xt)};$t(ot,mt=>{P(E)&&P(Y)&&mt(qt)})}he(H),pm(()=>{gm(ht,1,`type-icon ${P(I).type??""}`,"svelte-1u9gsyo"),_m(ht,"title",P(I).type),Z0(jt,P(I).id)}),ml("click",at,()=>c(P(I).id)),U(T,H)}),U(m,u)};var M=ue(v);g(M,()=>P(o),()=>{}),he(v)}he(_),U(n,_),We()}W0(["click"]);class o1{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){de.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),de.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),de.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),de.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),de.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}}class l1{id;type="source";ringBuffer;outputBuffer;constructor(t,e){this.id=t,this.ringBuffer=e,this.outputBuffer=new Float64Array(e.capacity)}getOutput(){const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return this.outputBuffer}}function Eh(n,t){Ge(t,!0);const e=bu("subject-parent");il(()=>{const i=de.request("GET_RING_BUFFER",{id:t.bufferId});if(!i)return;const r=new l1(t.id,i);de.request("REGISTER_NODE",{node:r});const s=e?.();s&&de.request("CONNECT_NODES",{sourceId:t.id,targetId:s})}),We()}class c1{id;type="sink";inputIds;textureId;primitiveCache=[];constructor(t,e,i=[]){this.id=t,this.textureId=e,this.inputIds=i}consume(t){const e=t.buffers.get(`${t.id}_input_0`),i=t.buffers.get(`${t.id}_input_1`);if(!e||!i)return null;const r=Math.min(e.length,i.length);for(;this.primitiveCache.length<r;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let s=0;s<this.primitiveCache.length;s++)if(s<r)if(e[s]===0&&i[s]===0)this.primitiveCache[s].opacity=0;else{const a=this.primitiveCache[s];a.x=e[s],a.y=i[s],a.opacity=1-s/r}else this.primitiveCache[s].opacity=0;return this.primitiveCache}}function u1(n,t){Ge(t,!0);const e=bu("subject-parent");il(()=>{const i=new c1(t.id,t.textureId);de.request("REGISTER_NODE",{node:i});const r=e?.();r&&de.request("CONNECT_NODES",{sourceId:r,targetId:t.id})}),We()}const Mu="183",h1=0,Ah=1,d1=2,eo=1,f1=2,Js=3,yr=0,Pn=1,si=2,qi=0,ys=1,wh=2,Th=3,Rh=4,p1=5,Nr=100,m1=101,g1=102,_1=103,v1=104,y1=200,S1=201,x1=202,b1=203,mc=204,gc=205,M1=206,E1=207,A1=208,w1=209,T1=210,R1=211,I1=212,C1=213,D1=214,_c=0,vc=1,yc=2,As=3,Sc=4,xc=5,bc=6,Mc=7,$d=0,L1=1,P1=2,Ai=0,tf=1,ef=2,nf=3,rf=4,sf=5,af=6,of=7,lf=300,Hr=301,ws=302,Sl=303,xl=304,rl=306,Ec=1e3,Yi=1001,Ac=1002,un=1003,F1=1004,Ia=1005,pn=1006,bl=1007,Or=1008,jn=1009,cf=1010,uf=1011,la=1012,Eu=1013,Ri=1014,xi=1015,Ji=1016,Au=1017,wu=1018,ca=1020,hf=35902,df=35899,ff=1021,pf=1022,oi=1023,Qi=1026,Br=1027,mf=1028,Tu=1029,Ts=1030,Ru=1031,Iu=1033,no=33776,io=33777,ro=33778,so=33779,wc=35840,Tc=35841,Rc=35842,Ic=35843,Cc=36196,Dc=37492,Lc=37496,Pc=37488,Fc=37489,Nc=37490,Uc=37491,Oc=37808,Bc=37809,Vc=37810,zc=37811,Hc=37812,kc=37813,Gc=37814,Wc=37815,Zc=37816,Xc=37817,Yc=37818,qc=37819,jc=37820,Kc=37821,Jc=36492,Qc=36494,$c=36495,tu=36283,eu=36284,nu=36285,iu=36286,N1=3200,U1=0,O1=1,_r="",Zn="srgb",Rs="srgb-linear",xo="linear",we="srgb",Yr=7680,Ih=519,B1=512,V1=513,z1=514,Cu=515,H1=516,k1=517,Du=518,G1=519,Ch=35044,Dh="300 es",bi=2e3,bo=2001;function W1(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z1(){const n=Mo("canvas");return n.style.display="block",n}const Lh={};function Ph(...n){const t="THREE."+n.shift();console.log(t,...n)}function gf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Yt(...n){n=gf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=gf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Eo(...n){const t=n.join(" ");t in Lh||(Lh[t]=!0,Yt(...n))}function X1(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Y1={[_c]:vc,[yc]:bc,[Sc]:Mc,[As]:xc,[vc]:_c,[bc]:yc,[Mc]:Sc,[xc]:As};class Ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,ru=180/Math.PI;function _a(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function le(n,t,e){return Math.max(t,Math.min(e,n))}function q1(n,t){return(n%t+t)%t}function El(n,t,e){return(1-e)*n+e*t}function ks(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function In(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Le{constructor(t=0,e=0){Le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Us{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],_=s[a+1],v=s[a+2],M=s[a+3];if(p!==M||l!==d||c!==_||h!==v){let g=l*d+c*_+h*v+p*M;g<0&&(d=-d,_=-_,v=-v,M=-M,g=-g);let m=1-o;if(g<.9995){const b=Math.acos(g),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,l=l*m+d*o,c=c*m+_*o,h=h*m+v*o,p=p*m+M*o}else{l=l*m+d*o,c=c*m+_*o,h=h*m+v*o,p=p*m+M*o;const b=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=b,c*=b,h*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],d=s[a+1],_=s[a+2],v=s[a+3];return t[e]=o*v+h*p+l*_-c*d,t[e+1]=l*v+h*d+c*p-o*_,t[e+2]=c*v+h*_+o*d-l*p,t[e+3]=h*v-o*p-l*d-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*p+c*_*v,this._y=c*_*p-d*h*v,this._z=c*h*v+d*_*p,this._w=c*h*p-d*_*v;break;case"YXZ":this._x=d*h*p+c*_*v,this._y=c*_*p-d*h*v,this._z=c*h*v-d*_*p,this._w=c*h*p+d*_*v;break;case"ZXY":this._x=d*h*p-c*_*v,this._y=c*_*p+d*h*v,this._z=c*h*v+d*_*p,this._w=c*h*p-d*_*v;break;case"ZYX":this._x=d*h*p-c*_*v,this._y=c*_*p+d*h*v,this._z=c*h*v-d*_*p,this._w=c*h*p+d*_*v;break;case"YZX":this._x=d*h*p+c*_*v,this._y=c*_*p+d*h*v,this._z=c*h*v-d*_*p,this._w=c*h*p-d*_*v;break;case"XZY":this._x=d*h*p-c*_*v,this._y=c*_*p-d*h*v,this._z=c*h*v+d*_*p,this._w=c*h*p+d*_*v;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=i+o+p;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new k,Fh=new Us;class Jt{constructor(t,e,i,r,s,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],_=i[5],v=i[8],M=r[0],g=r[3],m=r[6],b=r[1],A=r[4],u=r[7],f=r[2],T=r[5],I=r[8];return s[0]=a*M+o*b+l*f,s[3]=a*g+o*A+l*T,s[6]=a*m+o*u+l*I,s[1]=c*M+h*b+p*f,s[4]=c*g+h*A+p*T,s[7]=c*m+h*u+p*I,s[2]=d*M+_*b+v*f,s[5]=d*g+_*A+v*T,s[8]=d*m+_*u+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*s,_=c*s-a*l,v=e*p+i*d+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(r*c-h*i)*M,t[2]=(o*i-r*a)*M,t[3]=d*M,t[4]=(h*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=_*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wl.makeScale(t,e)),this}rotate(t){return this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new Jt,Nh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j1(){const n={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===we&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rs]:{primaries:t,whitePoint:i,transfer:xo,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:i,transfer:we,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),n}const pe=j1();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qr;class K1{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qr===void 0&&(qr=Mo("canvas")),qr.width=t.width,qr.height=t.height;const r=qr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=qr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J1=0;class Lu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=_a(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tl(r[a].image)):s.push(Tl(r[a]))}else s=Tl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let Q1=0;const Rl=new k;class bn extends Ns{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,i=Yi,r=Yi,s=pn,a=Or,o=oi,l=jn,c=bn.DEFAULT_ANISOTROPY,h=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=_a(),this.name="",this.source=new Lu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ec:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ec:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=lf;bn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,e=0,i=0,r=1){Ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],_=l[5],v=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,u=(_+1)/2,f=(m+1)/2,T=(h+d)/4,I=(p+M)/4,S=(v+g)/4;return A>u&&A>f?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=I/i):u>f?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=T/r,s=S/r):f<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(f),i=I/s,r=S/s),this.set(i,r,s,e),this}let b=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(p-M)/b,this.z=(d-h)/b,this.w=Math.acos((c+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $1 extends Ns{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new bn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Lu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends $1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class _f extends bn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends bn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t,e,i,r,s,a,o,l,c,h,p,d,_,v,M,g){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,p,d,_,v,M,g)}set(t,e,i,r,s,a,o,l,c,h,p,d,_,v,M,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=d,m[3]=_,m[7]=v,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/jr.setFromMatrixColumn(t,0).length(),s=1/jr.setFromMatrixColumn(t,1).length(),a=1/jr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const d=a*h,_=a*p,v=o*h,M=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,_=l*p,v=c*h,M=c*p;e[0]=d+M*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=_*o-v,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,_=l*p,v=c*h,M=c*p;e[0]=d-M*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,_=a*p,v=o*h,M=o*p;e[0]=l*h,e[4]=v*c-_,e[8]=d*c+M,e[1]=l*p,e[5]=M*c+d,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,_=a*c,v=o*l,M=o*c;e[0]=l*h,e[4]=M-d*p,e[8]=v*p+_,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*p+v,e[10]=d-M*p}else if(t.order==="XZY"){const d=a*l,_=a*c,v=o*l,M=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+M,e[5]=a*h,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*h,e[10]=M*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ev,t,nv)}lookAt(t,e,i){const r=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),or.crossVectors(i,On),or.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),or.crossVectors(i,On)),or.normalize(),Ca.crossVectors(On,or),r[0]=or.x,r[4]=Ca.x,r[8]=On.x,r[1]=or.y,r[5]=Ca.y,r[9]=On.y,r[2]=or.z,r[6]=Ca.z,r[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],_=i[13],v=i[2],M=i[6],g=i[10],m=i[14],b=i[3],A=i[7],u=i[11],f=i[15],T=r[0],I=r[4],S=r[8],E=r[12],Y=r[1],D=r[5],H=r[9],G=r[13],X=r[2],W=r[6],z=r[10],V=r[14],it=r[3],tt=r[7],ht=r[11],St=r[15];return s[0]=a*T+o*Y+l*X+c*it,s[4]=a*I+o*D+l*W+c*tt,s[8]=a*S+o*H+l*z+c*ht,s[12]=a*E+o*G+l*V+c*St,s[1]=h*T+p*Y+d*X+_*it,s[5]=h*I+p*D+d*W+_*tt,s[9]=h*S+p*H+d*z+_*ht,s[13]=h*E+p*G+d*V+_*St,s[2]=v*T+M*Y+g*X+m*it,s[6]=v*I+M*D+g*W+m*tt,s[10]=v*S+M*H+g*z+m*ht,s[14]=v*E+M*G+g*V+m*St,s[3]=b*T+A*Y+u*X+f*it,s[7]=b*I+A*D+u*W+f*tt,s[11]=b*S+A*H+u*z+f*ht,s[15]=b*E+A*G+u*V+f*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],_=t[14],v=t[3],M=t[7],g=t[11],m=t[15],b=l*_-c*d,A=o*_-c*p,u=o*d-l*p,f=a*_-c*h,T=a*d-l*h,I=a*p-o*h;return e*(M*b-g*A+m*u)-i*(v*b-g*f+m*T)+r*(v*A-M*f+m*I)-s*(v*u-M*T+g*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],_=t[11],v=t[12],M=t[13],g=t[14],m=t[15],b=e*o-i*a,A=e*l-r*a,u=e*c-s*a,f=i*l-r*o,T=i*c-s*o,I=r*c-s*l,S=h*M-p*v,E=h*g-d*v,Y=h*m-_*v,D=p*g-d*M,H=p*m-_*M,G=d*m-_*g,X=b*G-A*H+u*D+f*Y-T*E+I*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/X;return t[0]=(o*G-l*H+c*D)*W,t[1]=(r*H-i*G-s*D)*W,t[2]=(M*I-g*T+m*f)*W,t[3]=(d*T-p*I-_*f)*W,t[4]=(l*Y-a*G-c*E)*W,t[5]=(e*G-r*Y+s*E)*W,t[6]=(g*u-v*I-m*A)*W,t[7]=(h*I-d*u+_*A)*W,t[8]=(a*H-o*Y+c*S)*W,t[9]=(i*Y-e*H-s*S)*W,t[10]=(v*T-M*u+m*b)*W,t[11]=(p*u-h*T-_*b)*W,t[12]=(o*E-a*D-l*S)*W,t[13]=(e*D-i*E+r*S)*W,t[14]=(M*A-v*f-g*b)*W,t[15]=(h*f-p*A+d*b)*W,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,p=o+o,d=s*c,_=s*h,v=s*p,M=a*h,g=a*p,m=o*p,b=l*c,A=l*h,u=l*p,f=i.x,T=i.y,I=i.z;return r[0]=(1-(M+m))*f,r[1]=(_+u)*f,r[2]=(v-A)*f,r[3]=0,r[4]=(_-u)*T,r[5]=(1-(d+m))*T,r[6]=(g+b)*T,r[7]=0,r[8]=(v+A)*I,r[9]=(g-b)*I,r[10]=(1-(d+M))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),l=jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ti.copy(this);const c=1/a,h=1/o,p=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=p,ti.elements[9]*=p,ti.elements[10]*=p,e.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=bi,l=!1){const c=this.elements,h=2*s/(e-t),p=2*s/(i-r),d=(e+t)/(e-t),_=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===bi)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===bo)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=bi,l=!1){const c=this.elements,h=2/(e-t),p=2/(i-r),d=-(e+t)/(e-t),_=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===bi)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===bo)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const jr=new k,ti=new en,ev=new k(0,0,0),nv=new k(1,1,1),or=new k,Ca=new k,On=new k,Oh=new en,Bh=new Us;class $i{constructor(t=0,e=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iv=0;const Vh=new k,Kr=new Us,Ni=new en,Da=new k,Gs=new k,rv=new k,sv=new Us,zh=new k(1,0,0),Hh=new k(0,1,0),kh=new k(0,0,1),Gh={type:"added"},av={type:"removed"},Jr={type:"childadded",child:null},Il={type:"childremoved",child:null};class Hn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new k,e=new $i,i=new Us,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new Jt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Da.copy(t):Da.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Gs,Da,this.up):Ni.lookAt(Da,Gs,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Ni),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(av),Il.child=t,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,sv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Hn.DEFAULT_UP=new k(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class La extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ov={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,i),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&d>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ye{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=pe.workingColorSpace){if(t=q1(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Dl(a,s,t+1/3),this.g=Dl(a,s,t),this.b=Dl(a,s,t-1/3)}return pe.colorSpaceToWorking(this,r),this}setStyle(t,e=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){const i=yf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return pe.workingToColorSpace(fn.copy(this),t),Math.round(le(fn.r*255,0,255))*65536+Math.round(le(fn.g*255,0,255))*256+Math.round(le(fn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(fn.copy(this),e);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Zn){pe.workingToColorSpace(fn.copy(this),t);const e=fn.r,i=fn.g,r=fn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(Pa);const i=El(lr.h,Pa.h,e),r=El(lr.s,Pa.s,e),s=El(lr.l,Pa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ye;ye.NAMES=yf;class lv extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ei=new k,Ui=new k,Ll=new k,Oi=new k,Qr=new k,$r=new k,Wh=new k,Pl=new k,Fl=new k,Nl=new k,Ul=new Ke,Ol=new Ke,Bl=new Ke;class ai{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ei.subVectors(t,e),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ei.subVectors(r,e),Ui.subVectors(i,e),Ll.subVectors(t,e);const a=ei.dot(ei),o=ei.dot(Ui),l=ei.dot(Ll),c=Ui.dot(Ui),h=Ui.dot(Ll),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,_=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-_-v,v,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ul.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Ul.fromBufferAttribute(t,e),Ol.fromBufferAttribute(t,i),Bl.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ul,s.x),a.addScaledVector(Ol,s.y),a.addScaledVector(Bl,s.z),a}static isFrontFacing(t,e,i,r){return ei.subVectors(i,e),Ui.subVectors(t,e),ei.cross(Ui).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ei.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ai.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),$r.subVectors(s,i),Pl.subVectors(t,i);const l=Qr.dot(Pl),c=$r.dot(Pl);if(l<=0&&c<=0)return e.copy(i);Fl.subVectors(t,r);const h=Qr.dot(Fl),p=$r.dot(Fl);if(h>=0&&p<=h)return e.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Qr,a);Nl.subVectors(t,s);const _=Qr.dot(Nl),v=$r.dot(Nl);if(v>=0&&_<=v)return e.copy(s);const M=_*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector($r,o);const g=h*v-_*p;if(g<=0&&p-h>=0&&_-v>=0)return Wh.subVectors(s,r),o=(p-h)/(p-h+(_-v)),e.copy(r).addScaledVector(Wh,o);const m=1/(g+M+d);return a=M*m,o=d*m,e.copy(i).addScaledVector(Qr,a).addScaledVector($r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class va{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Na.subVectors(this.max,Ws),ts.subVectors(t.a,Ws),es.subVectors(t.b,Ws),ns.subVectors(t.c,Ws),cr.subVectors(es,ts),ur.subVectors(ns,es),Tr.subVectors(ts,ns);let e=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Tr.z,Tr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Tr.z,0,-Tr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Tr.y,Tr.x,0];return!Vl(e,ts,es,ns,Na)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,ts,es,ns,Na))?!1:(Ua.crossVectors(cr,ur),e=[Ua.x,Ua.y,Ua.z],Vl(e,ts,es,ns,Na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bi=[new k,new k,new k,new k,new k,new k,new k,new k],ni=new k,Fa=new va,ts=new k,es=new k,ns=new k,cr=new k,ur=new k,Tr=new k,Ws=new k,Na=new k,Ua=new k,Rr=new k;function Vl(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Rr.fromArray(n,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=t.dot(Rr),c=e.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tn=new k,Oa=new Le;let cv=0;class Ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ks(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),i=In(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),i=In(i,this.array),r=In(r,this.array),s=In(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ch&&(t.usage=this.usage),t}}class Sf extends Ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xf extends Ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ki extends Ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}const uv=new va,Zs=new k,zl=new k;class Pu{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):uv.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(zl)),this.expandByPoint(Zs.copy(t.center).sub(zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hv=0;const Gn=new en,Hl=new Hn,is=new k,Bn=new va,Xs=new va,ln=new k;class tr extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W1(t)?xf:Sf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return Hl.lookAt(t),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ki(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Bn.min,Xs.min),Bn.expandByPoint(ln),ln.addVectors(Bn.max,Xs.max),Bn.expandByPoint(ln)):(Bn.expandByPoint(Xs.min),Bn.expandByPoint(Xs.max))}Bn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ln.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ln));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),ln.add(is)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new k,l[S]=new k;const c=new k,h=new k,p=new k,d=new Le,_=new Le,v=new Le,M=new k,g=new k;function m(S,E,Y){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,Y),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,Y),h.sub(c),p.sub(c),_.sub(d),v.sub(d);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(D),g.copy(p).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(D),o[S].add(M),o[E].add(M),o[Y].add(M),l[S].add(g),l[E].add(g),l[Y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let S=0,E=b.length;S<E;++S){const Y=b[S],D=Y.start,H=Y.count;for(let G=D,X=D+H;G<X;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const A=new k,u=new k,f=new k,T=new k;function I(S){f.fromBufferAttribute(r,S),T.copy(f);const E=o[S];A.copy(E),A.sub(f.multiplyScalar(f.dot(E))).normalize(),u.crossVectors(T,E);const D=u.dot(l[S])<0?-1:1;a.setXYZW(S,A.x,A.y,A.z,D)}for(let S=0,E=b.length;S<E;++S){const Y=b[S],D=Y.start,H=Y.count;for(let G=D,X=D+H;G<X;G+=3)I(t.getX(G+0)),I(t.getX(G+1)),I(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,p=new k;if(t)for(let d=0,_=t.count;d<_;d+=3){const v=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,_=e.count;d<_;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let _=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?_=l[M]*o.data.stride+o.offset:_=l[M]*h;for(let m=0;m<h;m++)d[v++]=c[_++]}return new Ti(d,h,p)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],_=t(d,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const _=c[p];h.push(_.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,_=p.length;d<_;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dv=0;class sl extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ys,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vi=new k,kl=new k,Ba=new k,hr=new k,Gl=new k,Va=new k,Wl=new k;class fv{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){kl.copy(t).add(e).multiplyScalar(.5),Ba.copy(e).sub(t).normalize(),hr.copy(this.origin).sub(kl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ba),o=hr.dot(this.direction),l=-hr.dot(Ba),c=hr.lengthSq(),h=Math.abs(1-a*a);let p,d,_,v;if(h>0)if(p=a*l-o,d=a*o-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const M=1/h;p*=M,d*=M,_=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+d*(d+2*l)+c):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kl).addScaledVector(Ba,d),_}intersectSphere(t,e){Vi.subVectors(t.center,this.origin);const i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,r,s){Gl.subVectors(e,t),Va.subVectors(i,t),Wl.crossVectors(Gl,Va);let a=this.direction.dot(Wl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hr.subVectors(this.origin,t);const l=o*this.direction.dot(Va.crossVectors(hr,Va));if(l<0)return null;const c=o*this.direction.dot(Gl.cross(hr));if(c<0||l+c>a)return null;const h=-o*hr.dot(Wl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ao extends sl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zh=new en,Ir=new fv,za=new Pu,Xh=new k,Ha=new k,ka=new k,Ga=new k,Zl=new k,Wa=new k,Yh=new k,Za=new k;class ci extends Hn{constructor(t=new tr,e=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Zl.fromBufferAttribute(p,t),a?Wa.addScaledVector(Zl,h):Wa.addScaledVector(Zl.sub(e),h))}e.add(Wa)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),Ir.copy(t.ray).recast(t.near),!(za.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(za,Xh)===null||Ir.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Zh.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],m=a[g.materialIndex],b=Math.max(g.start,_.start),A=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let u=b,f=A;u<f;u+=3){const T=o.getX(u),I=o.getX(u+1),S=o.getX(u+2);r=Xa(this,m,t,i,c,h,p,T,I,S),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(o.count,_.start+_.count);for(let g=v,m=M;g<m;g+=3){const b=o.getX(g),A=o.getX(g+1),u=o.getX(g+2);r=Xa(this,a,t,i,c,h,p,b,A,u),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],m=a[g.materialIndex],b=Math.max(g.start,_.start),A=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let u=b,f=A;u<f;u+=3){const T=u,I=u+1,S=u+2;r=Xa(this,m,t,i,c,h,p,T,I,S),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(l.count,_.start+_.count);for(let g=v,m=M;g<m;g+=3){const b=g,A=g+1,u=g+2;r=Xa(this,a,t,i,c,h,p,b,A,u),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function pv(n,t,e,i,r,s,a,o){let l;if(t.side===Pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===yr,o),l===null)return null;Za.copy(o),Za.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Za);return c<e.near||c>e.far?null:{distance:c,point:Za.clone(),object:n}}function Xa(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ha),n.getVertexPosition(l,ka),n.getVertexPosition(c,Ga);const h=pv(n,t,e,i,Ha,ka,Ga,Yh);if(h){const p=new k;ai.getBarycoord(Yh,Ha,ka,Ga,p),r&&(h.uv=ai.getInterpolatedAttribute(r,o,l,c,p,new Le)),s&&(h.uv1=ai.getInterpolatedAttribute(s,o,l,c,p,new Le)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,p,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};ai.getNormal(Ha,ka,Ga,d.normal),h.face=d,h.barycoord=p}return h}class mv extends bn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=un,h=un,p,d){super(null,a,o,l,c,h,r,s,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new k,gv=new k,_v=new Jt;class Fr{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Xl.subVectors(i,e).cross(gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_v.getNormalMatrix(t),r=this.coplanarPoint(Xl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Pu,vv=new Le(.5,.5),Ya=new k;class bf{constructor(t=new Fr,e=new Fr,i=new Fr,r=new Fr,s=new Fr,a=new Fr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],d=s[6],_=s[7],v=s[8],M=s[9],g=s[10],m=s[11],b=s[12],A=s[13],u=s[14],f=s[15];if(r[0].setComponents(c-a,_-h,m-v,f-b).normalize(),r[1].setComponents(c+a,_+h,m+v,f+b).normalize(),r[2].setComponents(c+o,_+p,m+M,f+A).normalize(),r[3].setComponents(c-o,_-p,m-M,f-A).normalize(),i)r[4].setComponents(l,d,g,u).normalize(),r[5].setComponents(c-l,_-d,m-g,f-u).normalize();else if(r[4].setComponents(c-l,_-d,m-g,f-u).normalize(),e===bi)r[5].setComponents(c+l,_+d,m+g,f+u).normalize();else if(e===bo)r[5].setComponents(l,d,g,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);const e=vv.distanceTo(t.center);return Cr.radius=.7071067811865476+e,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ya.x=r.normal.x>0?t.max.x:t.min.x,Ya.y=r.normal.y>0?t.max.y:t.min.y,Ya.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mf extends bn{constructor(t=[],e=Hr,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ua extends bn{constructor(t,e,i=Ri,r,s,a,o=un,l=un,c,h=Qi,p=1){if(h!==Qi&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:p};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yv extends ua{constructor(t,e=Ri,i=Hr,r,s,a=un,o=un,l,c=Qi){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ef extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ya extends tr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,_=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(h,3)),this.setAttribute("uv",new Ki(p,2));function v(M,g,m,b,A,u,f,T,I,S,E){const Y=u/I,D=f/S,H=u/2,G=f/2,X=T/2,W=I+1,z=S+1;let V=0,it=0;const tt=new k;for(let ht=0;ht<z;ht++){const St=ht*D-G;for(let pt=0;pt<W;pt++){const jt=pt*Y-H;tt[M]=jt*b,tt[g]=St*A,tt[m]=X,c.push(tt.x,tt.y,tt.z),tt[M]=0,tt[g]=0,tt[m]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(pt/I),p.push(1-ht/S),V+=1}}for(let ht=0;ht<S;ht++)for(let St=0;St<I;St++){const pt=d+St+W*ht,jt=d+St+W*(ht+1),Pe=d+(St+1)+W*(ht+1),Ie=d+(St+1)+W*ht;l.push(pt,jt,Ie),l.push(jt,Pe,Ie),it+=6}o.addGroup(_,it,E),_+=it,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Sa extends tr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=t/o,d=e/l,_=[],v=[],M=[],g=[];for(let m=0;m<h;m++){const b=m*d-a;for(let A=0;A<c;A++){const u=A*p-s;v.push(u,-b,0),M.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const A=b+c*m,u=b+c*(m+1),f=b+1+c*(m+1),T=b+1+c*m;_.push(A,u,T),_.push(u,f,T)}this.setIndex(_),this.setAttribute("position",new Ki(v,3)),this.setAttribute("normal",new Ki(M,3)),this.setAttribute("uv",new Ki(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.width,t.height,t.widthSegments,t.heightSegments)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const r in i)t[r]=i[r]}return t}function Sv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Af(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const xv={clone:Is,merge:vn};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends sl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ev extends Ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Av extends sl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wv extends sl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qa=new k,ja=new Us,di=new k;class wf extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,ja,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,ja,di.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(qa,ja,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,ja,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dr=new k,qh=new Le,jh=new Le;class ri extends wf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ru*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,qh,jh),e.subVectors(jh,qh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ml*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fu extends wf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rs=-90,ss=1;class Tv extends Hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(rs,ss,t,e);r.layers=this.layers,this.add(r);const s=new ri(rs,ss,t,e);s.layers=this.layers,this.add(s);const a=new ri(rs,ss,t,e);a.layers=this.layers,this.add(a);const o=new ri(rs,ss,t,e);o.layers=this.layers,this.add(o);const l=new ri(rs,ss,t,e);l.layers=this.layers,this.add(l);const c=new ri(rs,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Rv extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Kh(n,t,e,i){const r=Iv(i);switch(e){case ff:return n*t;case mf:return n*t/r.components*r.byteLength;case Tu:return n*t/r.components*r.byteLength;case Ts:return n*t*2/r.components*r.byteLength;case Ru:return n*t*2/r.components*r.byteLength;case pf:return n*t*3/r.components*r.byteLength;case oi:return n*t*4/r.components*r.byteLength;case Iu:return n*t*4/r.components*r.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ro:case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Ic:return Math.max(n,16)*Math.max(t,8)/4;case wc:case Rc:return Math.max(n,8)*Math.max(t,8)/2;case Cc:case Dc:case Pc:case Fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Jc:case Qc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tu:case eu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case nu:case iu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iv(n){switch(n){case jn:case cf:return{byteLength:1,components:1};case la:case uf:case Ji:return{byteLength:2,components:1};case Au:case wu:return{byteLength:2,components:4};case Ri:case Eu:case xi:return{byteLength:4,components:1};case hf:case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);function Tf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Cv(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((_,v)=>_.start-v.start);let d=0;for(let _=1;_<p.length;_++){const v=p[d],M=p[_];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,p[d]=M)}p.length=d+1;for(let _=0,v=p.length;_<v;_++){const M=p[_];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
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
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vv=`#ifdef USE_BATCHING
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
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ty=`#define PI 3.141592653589793
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
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
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
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#endif`,Iy=`uniform sampler2D dfgLUT;
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
}`,Cy=`
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$y=`#ifdef USE_NORMALMAP
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
#endif`,t2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m2=`float getShadowMask() {
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
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,v2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y2=`#ifdef USE_SKINNING
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
#endif`,S2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E2=`#ifdef USE_TRANSMISSION
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
#endif`,A2=`#ifdef USE_TRANSMISSION
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D2=`uniform sampler2D t2D;
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
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`#include <common>
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
}`,O2=`#if DEPTH_PACKING == 3200
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
}`,B2=`#define DISTANCE
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
}`,V2=`#define DISTANCE
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
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`uniform float scale;
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
}`,G2=`uniform vec3 diffuse;
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
}`,W2=`#include <common>
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
}`,Z2=`uniform vec3 diffuse;
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
}`,X2=`#define LAMBERT
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
}`,Y2=`#define LAMBERT
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
}`,q2=`#define MATCAP
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
}`,j2=`#define MATCAP
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
}`,K2=`#define NORMAL
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
}`,J2=`#define NORMAL
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
}`,Q2=`#define PHONG
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
}`,$2=`#define PHONG
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
}`,tS=`#define STANDARD
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
}`,eS=`#define STANDARD
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
}`,nS=`#define TOON
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
}`,iS=`#define TOON
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
}`,rS=`uniform float size;
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
}`,sS=`uniform vec3 diffuse;
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
}`,aS=`#include <common>
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
}`,oS=`uniform vec3 color;
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
}`,lS=`uniform float rotation;
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
}`,cS=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Dv,alphahash_pars_fragment:Lv,alphamap_fragment:Pv,alphamap_pars_fragment:Fv,alphatest_fragment:Nv,alphatest_pars_fragment:Uv,aomap_fragment:Ov,aomap_pars_fragment:Bv,batching_pars_vertex:Vv,batching_vertex:zv,begin_vertex:Hv,beginnormal_vertex:kv,bsdfs:Gv,iridescence_fragment:Wv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:jv,color_fragment:Kv,color_pars_fragment:Jv,color_pars_vertex:Qv,color_vertex:$v,common:ty,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:ay,colorspace_fragment:oy,colorspace_pars_fragment:ly,envmap_fragment:cy,envmap_common_pars_fragment:uy,envmap_pars_fragment:hy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:My,envmap_vertex:fy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:_y,gradientmap_pars_fragment:vy,lightmap_pars_fragment:yy,lights_lambert_fragment:Sy,lights_lambert_pars_fragment:xy,lights_pars_begin:by,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ay,lights_phong_fragment:wy,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ry,lights_physical_pars_fragment:Iy,lights_fragment_begin:Cy,lights_fragment_maps:Dy,lights_fragment_end:Ly,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Uy,map_fragment:Oy,map_pars_fragment:By,map_particle_fragment:Vy,map_particle_pars_fragment:zy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:ky,morphinstance_vertex:Gy,morphcolor_vertex:Wy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Xy,morphtarget_vertex:Yy,normal_fragment_begin:qy,normal_fragment_maps:jy,normal_pars_fragment:Ky,normal_pars_vertex:Jy,normal_vertex:Qy,normalmap_pars_fragment:$y,clearcoat_normal_fragment_begin:t2,clearcoat_normal_fragment_maps:e2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:a2,project_vertex:o2,dithering_fragment:l2,dithering_pars_fragment:c2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:d2,shadowmap_pars_vertex:f2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:_2,skinning_vertex:v2,skinnormal_vertex:y2,specularmap_fragment:S2,specularmap_pars_fragment:x2,tonemapping_fragment:b2,tonemapping_pars_fragment:M2,transmission_fragment:E2,transmission_pars_fragment:A2,uv_pars_fragment:w2,uv_pars_vertex:T2,uv_vertex:R2,worldpos_vertex:I2,background_vert:C2,background_frag:D2,backgroundCube_vert:L2,backgroundCube_frag:P2,cube_vert:F2,cube_frag:N2,depth_vert:U2,depth_frag:O2,distance_vert:B2,distance_frag:V2,equirect_vert:z2,equirect_frag:H2,linedashed_vert:k2,linedashed_frag:G2,meshbasic_vert:W2,meshbasic_frag:Z2,meshlambert_vert:X2,meshlambert_frag:Y2,meshmatcap_vert:q2,meshmatcap_frag:j2,meshnormal_vert:K2,meshnormal_frag:J2,meshphong_vert:Q2,meshphong_frag:$2,meshphysical_vert:tS,meshphysical_frag:eS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:aS,shadow_frag:oS,sprite_vert:lS,sprite_frag:cS},ut={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},_i={basic:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:vn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:vn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:vn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:vn([ut.points,ut.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:vn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:vn([ut.common,ut.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:vn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:vn([ut.sprite,ut.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:vn([ut.common,ut.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:vn([ut.lights,ut.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Ka={r:0,b:0,g:0},Dr=new $i,uS=new en;function hS(n,t,e,i,r,s){const a=new ye(0);let o=r===!0?0:1,l,c,h=null,p=0,d=null;function _(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const u=b.backgroundBlurriness>0;A=t.get(A,u)}return A}function v(b){let A=!1;const u=_(b);u===null?g(a,o):u&&u.isColor&&(g(u,1),A=!0);const f=n.xr.getEnvironmentBlendMode();f==="additive"?e.buffers.color.setClear(0,0,0,1,s):f==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(b,A){const u=_(A);u&&(u.isCubeTexture||u.mapping===rl)?(c===void 0&&(c=new ci(new ya(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Is(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(f,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Dr.copy(A.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Dr)),c.material.toneMapped=pe.getTransfer(u.colorSpace)!==we,(h!==u||p!==u.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=u,p=u.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new ci(new Sa(2,2),new Ii({name:"BackgroundMaterial",uniforms:Is(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=pe.getTransfer(u.colorSpace)!==we,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(h!==u||p!==u.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=u,p=u.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,A){b.getRGB(Ka,Af(n)),e.buffers.color.setClear(Ka.r,Ka.g,Ka.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:v,addToRenderList:M,dispose:m}}function dS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,H,G,X,W){let z=!1;const V=p(D,X,G,H);s!==V&&(s=V,c(s.object)),z=_(D,X,G,W),z&&v(D,X,G,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,u(D,H,G,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function p(D,H,G,X){const W=X.wireframe===!0;let z=i[H.id];z===void 0&&(z={},i[H.id]=z);const V=D.isInstancedMesh===!0?D.id:0;let it=z[V];it===void 0&&(it={},z[V]=it);let tt=it[G.id];tt===void 0&&(tt={},it[G.id]=tt);let ht=tt[W];return ht===void 0&&(ht=d(l()),tt[W]=ht),ht}function d(D){const H=[],G=[],X=[];for(let W=0;W<e;W++)H[W]=0,G[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:X,object:D,attributes:{},index:null}}function _(D,H,G,X){const W=s.attributes,z=H.attributes;let V=0;const it=G.getAttributes();for(const tt in it)if(it[tt].location>=0){const St=W[tt];let pt=z[tt];if(pt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),St===void 0||St.attribute!==pt||pt&&St.data!==pt.data)return!0;V++}return s.attributesNum!==V||s.index!==X}function v(D,H,G,X){const W={},z=H.attributes;let V=0;const it=G.getAttributes();for(const tt in it)if(it[tt].location>=0){let St=z[tt];St===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(St=D.instanceColor));const pt={};pt.attribute=St,St&&St.data&&(pt.data=St.data),W[tt]=pt,V++}s.attributes=W,s.attributesNum=V,s.index=X}function M(){const D=s.newAttributes;for(let H=0,G=D.length;H<G;H++)D[H]=0}function g(D){m(D,0)}function m(D,H){const G=s.newAttributes,X=s.enabledAttributes,W=s.attributeDivisors;G[D]=1,X[D]===0&&(n.enableVertexAttribArray(D),X[D]=1),W[D]!==H&&(n.vertexAttribDivisor(D,H),W[D]=H)}function b(){const D=s.newAttributes,H=s.enabledAttributes;for(let G=0,X=H.length;G<X;G++)H[G]!==D[G]&&(n.disableVertexAttribArray(G),H[G]=0)}function A(D,H,G,X,W,z,V){V===!0?n.vertexAttribIPointer(D,H,G,W,z):n.vertexAttribPointer(D,H,G,X,W,z)}function u(D,H,G,X){M();const W=X.attributes,z=G.getAttributes(),V=H.defaultAttributeValues;for(const it in z){const tt=z[it];if(tt.location>=0){let ht=W[it];if(ht===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ht!==void 0){const St=ht.normalized,pt=ht.itemSize,jt=t.get(ht);if(jt===void 0)continue;const Pe=jt.buffer,Ie=jt.type,J=jt.bytesPerElement,at=Ie===n.INT||Ie===n.UNSIGNED_INT||ht.gpuType===Eu;if(ht.isInterleavedBufferAttribute){const ot=ht.data,qt=ot.stride,mt=ht.offset;if(ot.isInstancedInterleavedBuffer){for(let xt=0;xt<tt.locationSize;xt++)m(tt.location+xt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let xt=0;xt<tt.locationSize;xt++)g(tt.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let xt=0;xt<tt.locationSize;xt++)A(tt.location+xt,pt/tt.locationSize,Ie,St,qt*J,(mt+pt/tt.locationSize*xt)*J,at)}else{if(ht.isInstancedBufferAttribute){for(let ot=0;ot<tt.locationSize;ot++)m(tt.location+ot,ht.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ot=0;ot<tt.locationSize;ot++)g(tt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ot=0;ot<tt.locationSize;ot++)A(tt.location+ot,pt/tt.locationSize,Ie,St,pt*J,pt/tt.locationSize*ot*J,at)}}else if(V!==void 0){const St=V[it];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(tt.location,St);break;case 3:n.vertexAttrib3fv(tt.location,St);break;case 4:n.vertexAttrib4fv(tt.location,St);break;default:n.vertexAttrib1fv(tt.location,St)}}}}b()}function f(){E();for(const D in i){const H=i[D];for(const G in H){const X=H[G];for(const W in X){const z=X[W];for(const V in z)h(z[V].object),delete z[V];delete X[W]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const H=i[D.id];for(const G in H){const X=H[G];for(const W in X){const z=X[W];for(const V in z)h(z[V].object),delete z[V];delete X[W]}}delete i[D.id]}function I(D){for(const H in i){const G=i[H];for(const X in G){const W=G[X];if(W[D.id]===void 0)continue;const z=W[D.id];for(const V in z)h(z[V].object),delete z[V];delete W[D.id]}}}function S(D){for(const H in i){const G=i[H],X=D.isInstancedMesh===!0?D.id:0,W=G[X];if(W!==void 0){for(const z in W){const V=W[z];for(const it in V)h(V[it].object),delete V[it];delete W[z]}delete G[X],Object.keys(G).length===0&&delete i[H]}}}function E(){Y(),a=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:Y,dispose:f,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function fS(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let _=0;for(let v=0;v<p;v++)_+=h[v];e.update(_,i,1)}function l(c,h,p,d){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M]*d[M];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==oi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const S=I===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==jn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==xi&&!S)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:u,maxSamples:f,samples:T}}function mS(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Fr,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const _=p.length!==0||d||i!==0||r;return r=d,i=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,_){const v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const b=s?0:i,A=b*4;let u=m.clippingState||null;l.value=u,u=h(v,d,A,_);for(let f=0;f!==A;++f)u[f]=e[f];m.clippingState=u,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,d,_,v){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const m=_+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,u=_;A!==M;++A,u+=4)a.copy(p[A]).applyMatrix4(b,o),a.normal.toArray(g,u),g[u+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const vr=4,Jh=[.125,.215,.35,.446,.526,.582],Ur=20,gS=256,Ys=new Fu,Qh=new ye;let Yl=null,ql=0,jl=0,Kl=!1;const _S=new k;class $h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=_S}=s;Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,ql,jl),this._renderer.xr.enabled=Kl,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hr||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ji,format:oi,colorSpace:Rs,depthBuffer:!1},r=td(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vS(s)),this._blurMaterial=SS(s,t,e),this._ggxMaterial=yS(s,t,e)}return r}_compileMaterial(t){const e=new ci(new tr,t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,i,r,s){const l=new ri(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,_=p.toneMapping;p.getClearColor(Qh),p.toneMapping=Ai,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new ya,new Ao({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let m=!1;const b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(Qh),m=!0);for(let A=0;A<6;A++){const u=A%3;u===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):u===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const f=this._cubeSize;as(r,u*f,A>2?f:0,f,f),p.setRenderTarget(r),m&&p.render(M,l),p.render(t,l)}p.toneMapping=_,p.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Hr||t.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;as(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ys)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),d=0+c*1.25,_=p*d,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-vr?i-v+vr:0),m=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,as(s,g,m,3*M,2*M),r.setRenderTarget(s),r.render(o,Ys),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,as(t,g,m,3*M,2*M),r.setRenderTarget(t),r.render(o,Ys)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ge("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const d=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ur-1),M=s/v,g=isFinite(s)?1+Math.floor(h*M):Ur;g>Ur&&Yt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ur}`);const m=[];let b=0;for(let I=0;I<Ur;++I){const S=I/M,E=Math.exp(-S*S/2);m.push(E),I===0?b+=E:I<g&&(b+=2*E)}for(let I=0;I<m.length;I++)m[I]=m[I]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=v,d.mipInt.value=A-i;const u=this._sizeLods[r],f=3*u*(r>A-vr?r-A+vr:0),T=4*(this._cubeSize-u);as(e,f,T,3*u,2*u),l.setRenderTarget(e),l.render(p,Ys)}}function vS(n){const t=[],e=[],i=[];let r=n;const s=n-vr+1+Jh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vr?l=Jh[a-n+vr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,v=6,M=3,g=2,m=1,b=new Float32Array(M*v*_),A=new Float32Array(g*v*_),u=new Float32Array(m*v*_);for(let T=0;T<_;T++){const I=T%3*2/3-1,S=T>2?0:-1,E=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];b.set(E,M*v*T),A.set(d,g*v*T);const Y=[T,T,T,T,T,T];u.set(Y,m*v*T)}const f=new tr;f.setAttribute("position",new Ti(b,M)),f.setAttribute("uv",new Ti(A,g)),f.setAttribute("faceIndex",new Ti(u,m)),i.push(new ci(f,null)),r>vr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function td(n,t,e){const i=new wi(n,t,e);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function yS(n,t,e){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function SS(n,t,e){const i=new Float32Array(Ur),r=new k(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:al(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ed(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function nd(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}class Rf extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Mf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ya(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:qi});s.uniforms.tEquirect.value=e;const a=new ci(r,s),o=e.minFilter;return e.minFilter===Or&&(e.minFilter=pn),new Tv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function xS(n){let t=new WeakMap,e=new WeakMap,i=null;function r(d,_=!1){return d==null?null:_?a(d):s(d)}function s(d){if(d&&d.isTexture){const _=d.mapping;if(_===Sl||_===xl)if(t.has(d)){const v=t.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new Rf(v.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const _=d.mapping,v=_===Sl||_===xl,M=_===Hr||_===ws;if(v||M){let g=e.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new $h(n)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return v&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new $h(n)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,_){return _===Sl?d.mapping=Hr:_===xl&&(d.mapping=ws),d}function l(d){let _=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&_++;return _===v}function c(d){const _=d.target;_.removeEventListener("dispose",c);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function h(d){const _=d.target;_.removeEventListener("dispose",h);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function bS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Eo("WebGLRenderer: "+i+" extension not supported."),r}}}function MS(n,t,e,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(t.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER)}function c(p){const d=[],_=p.index,v=p.attributes.position;let M=0;if(v===void 0)return;if(_!==null){const b=_.array;M=_.version;for(let A=0,u=b.length;A<u;A+=3){const f=b[A+0],T=b[A+1],I=b[A+2];d.push(f,T,T,I,I,f)}}else{const b=v.array;M=v.version;for(let A=0,u=b.length/3-1;A<u;A+=3){const f=A+0,T=A+1,I=A+2;d.push(f,T,T,I,I,f)}}const g=new(v.count>=65535?xf:Sf)(d,1);g.version=M;const m=s.get(p);m&&t.remove(m),s.set(p,g)}function h(p){const d=s.get(p);if(d){const _=p.index;_!==null&&d.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function ES(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,_){n.drawElements(i,_,s,d*a),e.update(_,i,1)}function c(d,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,d*a,v),e.update(_,i,v))}function h(d,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,d,0,v);let g=0;for(let m=0;m<v;m++)g+=_[m];e.update(g,i,1)}function p(d,_,v,M){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,_[m],M[m]);else{g.multiDrawElementsInstancedWEBGL(i,_,0,s,d,0,M,0,v);let m=0;for(let b=0;b<v;b++)m+=_[b]*M[b];e.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function AS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function wS(n,t,e){const i=new WeakMap,r=new Ke;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let E=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let u=o.attributes.position.count*A,f=1;u>t.maxTextureSize&&(f=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const T=new Float32Array(u*f*4*p),I=new _f(T,u,f,p);I.type=xi,I.needsUpdate=!0;const S=A*4;for(let Y=0;Y<p;Y++){const D=g[Y],H=m[Y],G=b[Y],X=u*f*4*Y;for(let W=0;W<D.count;W++){const z=W*S;_===!0&&(r.fromBufferAttribute(D,W),T[X+z+0]=r.x,T[X+z+1]=r.y,T[X+z+2]=r.z,T[X+z+3]=0),v===!0&&(r.fromBufferAttribute(H,W),T[X+z+4]=r.x,T[X+z+5]=r.y,T[X+z+6]=r.z,T[X+z+7]=0),M===!0&&(r.fromBufferAttribute(G,W),T[X+z+8]=r.x,T[X+z+9]=r.y,T[X+z+10]=r.z,T[X+z+11]=G.itemSize===4?r.w:1)}}d={count:p,texture:I,size:new Le(u,f)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let M=0;M<c.length;M++)_+=c[M];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function TS(n,t,e,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,d=t.get(c,p);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const RS={[tf]:"LINEAR_TONE_MAPPING",[ef]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[af]:"AGX_TONE_MAPPING",[of]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function IS(n,t,e,i,r){const s=new wi(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new wi(t,e,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),o=new tr;o.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const l=new Ev({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ci(o,l),h=new Fu(-1,1,1,-1,0,1);let p=null,d=null,_=!1,v,M=null,g=[],m=!1;this.setSize=function(b,A){s.setSize(b,A),a.setSize(b,A);for(let u=0;u<g.length;u++){const f=g[u];f.setSize&&f.setSize(b,A)}},this.setEffects=function(b){g=b,m=g.length>0&&g[0].isRenderPass===!0;const A=s.width,u=s.height;for(let f=0;f<g.length;f++){const T=g[f];T.setSize&&T.setSize(A,u)}},this.begin=function(b,A){if(_||b.toneMapping===Ai&&g.length===0)return!1;if(M=A,A!==null){const u=A.width,f=A.height;(s.width!==u||s.height!==f)&&this.setSize(u,f)}return m===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=Ai,!0},this.hasRenderPass=function(){return m},this.end=function(b,A){b.toneMapping=v,_=!0;let u=s,f=a;for(let T=0;T<g.length;T++){const I=g[T];if(I.enabled!==!1&&(I.render(b,f,u,A),I.needsSwap!==!1)){const S=u;u=f,f=S}}if(p!==b.outputColorSpace||d!==b.toneMapping){p=b.outputColorSpace,d=b.toneMapping,l.defines={},pe.getTransfer(p)===we&&(l.defines.SRGB_TRANSFER="");const T=RS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,b.setRenderTarget(M),b.render(c,h),M=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const If=new bn,su=new ua(1,1),Cf=new _f,Df=new tv,Lf=new Mf,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Os(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=id[r];if(s===void 0&&(s=new Float32Array(r),id[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function an(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ol(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function CS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function DS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),an(e,t)}}function LS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),an(e,t)}}function PS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),an(e,t)}}function FS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),an(e,i)}}function NS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),an(e,i)}}function US(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;sd.set(i),n.uniformMatrix4fv(this.addr,!1,sd),an(e,i)}}function OS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function BS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),an(e,t)}}function VS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),an(e,t)}}function zS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),an(e,t)}}function HS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),an(e,t)}}function GS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),an(e,t)}}function WS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),an(e,t)}}function ZS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=e.isReversedDepthBuffer()?Du:Cu,s=su):s=If,e.setTexture2D(t||s,r)}function XS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Df,r)}function YS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Lf,r)}function qS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Cf,r)}function jS(n){switch(n){case 5126:return CS;case 35664:return DS;case 35665:return LS;case 35666:return PS;case 35674:return FS;case 35675:return NS;case 35676:return US;case 5124:case 35670:return OS;case 35667:case 35671:return BS;case 35668:case 35672:return VS;case 35669:case 35673:return zS;case 5125:return HS;case 36294:return kS;case 36295:return GS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}function KS(n,t){n.uniform1fv(this.addr,t)}function JS(n,t){const e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function QS(n,t){const e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function $S(n,t){const e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function tx(n,t){const e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ex(n,t){const e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nx(n,t){const e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ix(n,t){n.uniform1iv(this.addr,t)}function rx(n,t){n.uniform2iv(this.addr,t)}function sx(n,t){n.uniform3iv(this.addr,t)}function ax(n,t){n.uniform4iv(this.addr,t)}function ox(n,t){n.uniform1uiv(this.addr,t)}function lx(n,t){n.uniform2uiv(this.addr,t)}function cx(n,t){n.uniform3uiv(this.addr,t)}function ux(n,t){n.uniform4uiv(this.addr,t)}function hx(n,t,e){const i=this.cache,r=t.length,s=ol(e,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=su:a=If;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function dx(n,t,e){const i=this.cache,r=t.length,s=ol(e,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Df,s[a])}function fx(n,t,e){const i=this.cache,r=t.length,s=ol(e,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lf,s[a])}function px(n,t,e){const i=this.cache,r=t.length,s=ol(e,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cf,s[a])}function mx(n){switch(n){case 5126:return KS;case 35664:return JS;case 35665:return QS;case 35666:return $S;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jS(e.type)}}class _x{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}}class vx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function ld(n,t){n.seq.push(t),n.map[t.id]=t}function yx(n,t,e){const i=n.name,r=i.length;for(Jl.lastIndex=0;;){const s=Jl.exec(i),a=Jl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ld(e,c===void 0?new gx(o,n,t):new _x(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new vx(o),ld(e,p)),e=p}}}class ao{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);yx(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function cd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Sx=37297;let xx=0;function bx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ud=new Jt;function Mx(n){pe._getMatrix(ud,pe.workingColorSpace,n);const t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case xo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+bx(n.getShaderSource(t),o)}else return s}function Ex(n,t){const e=Mx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ax={[tf]:"Linear",[ef]:"Reinhard",[nf]:"Cineon",[rf]:"ACESFilmic",[af]:"AgX",[of]:"Neutral",[sf]:"Custom"};function wx(n,t){const e=Ax[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ja=new k;function Tx(){pe.getLuminanceCoefficients(Ja);const n=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Ix(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qs(n){return n!==""}function dd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(Dx,Px)}const Lx=new Map;function Px(n,t){let e=te[t];if(e===void 0){const i=Lx.get(t);if(i!==void 0)e=te[i],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return au(e)}const Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(Fx,Nx)}function Nx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function md(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ux={[eo]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Ox(n){return Ux[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bx={[Hr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function Vx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Bx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zx={[ws]:"ENVMAP_MODE_REFRACTION"};function Hx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kx={[$d]:"ENVMAP_BLENDING_MULTIPLY",[L1]:"ENVMAP_BLENDING_MIX",[P1]:"ENVMAP_BLENDING_ADD"};function Gx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kx[n.combine]||"ENVMAP_BLENDING_NONE"}function Wx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Zx(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ox(e),c=Vx(e),h=Hx(e),p=Gx(e),d=Wx(e),_=Rx(e),v=Ix(s),M=r.createProgram();let g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(g=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?te.tonemapping_pars_fragment:"",e.toneMapping!==Ai?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),Tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=au(a),a=dd(a,e),a=fd(a,e),o=au(o),o=dd(o,e),o=fd(o,e),a=pd(a),o=pd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=b+g+a,u=b+m+o,f=cd(r,r.VERTEX_SHADER,A),T=cd(r,r.FRAGMENT_SHADER,u);r.attachShader(M,f),r.attachShader(M,T),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(D){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(M)||"",G=r.getShaderInfoLog(f)||"",X=r.getShaderInfoLog(T)||"",W=H.trim(),z=G.trim(),V=X.trim();let it=!0,tt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,f,T);else{const ht=hd(r,f,"vertex"),St=hd(r,T,"fragment");ge("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ht+`
`+St)}else W!==""?Yt("WebGLProgram: Program Info Log:",W):(z===""||V==="")&&(tt=!1);tt&&(D.diagnostics={runnable:it,programLog:W,vertexShader:{log:z,prefix:g},fragmentShader:{log:V,prefix:m}})}r.deleteShader(f),r.deleteShader(T),S=new ao(r,M),E=Cx(r,M)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(M,Sx)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=f,this.fragmentShader=T,this}let Xx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qx(t),e.set(t,i)),i}}class qx{constructor(t){this.id=Xx++,this.code=t,this.usedTimes=0}}function jx(n,t,e,i,r,s){const a=new vf,o=new Yx,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,E,Y,D,H){const G=D.fog,X=H.geometry,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,V=t.get(S.envMap||W,z),it=V&&V.mapping===rl?V.image.height:null,tt=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Yt("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=ht!==void 0?ht.length:0;let pt=0;X.morphAttributes.position!==void 0&&(pt=1),X.morphAttributes.normal!==void 0&&(pt=2),X.morphAttributes.color!==void 0&&(pt=3);let jt,Pe,Ie,J;if(tt){const Me=_i[tt];jt=Me.vertexShader,Pe=Me.fragmentShader}else jt=S.vertexShader,Pe=S.fragmentShader,o.update(S),Ie=o.getVertexShaderID(S),J=o.getFragmentShaderID(S);const at=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),qt=H.isInstancedMesh===!0,mt=H.isBatchedMesh===!0,xt=!!S.map,Ve=!!S.matcap,se=!!V,fe=!!S.aoMap,ae=!!S.lightMap,Wt=!!S.bumpMap,ze=!!S.normalMap,C=!!S.displacementMap,$e=!!S.emissiveMap,ve=!!S.metalnessMap,Ue=!!S.roughnessMap,Tt=S.anisotropy>0,w=S.clearcoat>0,y=S.dispersion>0,F=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,j=Tt&&!!S.anisotropyMap,bt=w&&!!S.clearcoatMap,lt=w&&!!S.clearcoatNormalMap,Lt=w&&!!S.clearcoatRoughnessMap,kt=F&&!!S.iridescenceMap,et=F&&!!S.iridescenceThicknessMap,rt=K&&!!S.sheenColorMap,Mt=K&&!!S.sheenRoughnessMap,At=!!S.specularMap,gt=!!S.specularColorMap,ee=!!S.specularIntensityMap,L=Q&&!!S.transmissionMap,ct=Q&&!!S.thicknessMap,st=!!S.gradientMap,vt=!!S.alphaMap,nt=S.alphaTest>0,q=!!S.alphaHash,Et=!!S.extensions;let Xt=Ai;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Xt=n.toneMapping);const Oe={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:Pe,defines:S.defines,customVertexShaderID:Ie,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:mt,batchingColor:mt&&H._colorsTexture!==null,instancing:qt,instancingColor:qt&&H.instanceColor!==null,instancingMorph:qt&&H.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:xt,matcap:Ve,envMap:se,envMapMode:se&&V.mapping,envMapCubeUVHeight:it,aoMap:fe,lightMap:ae,bumpMap:Wt,normalMap:ze,displacementMap:C,emissiveMap:$e,normalMapObjectSpace:ze&&S.normalMapType===O1,normalMapTangentSpace:ze&&S.normalMapType===U1,metalnessMap:ve,roughnessMap:Ue,anisotropy:Tt,anisotropyMap:j,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Lt,dispersion:y,iridescence:F,iridescenceMap:kt,iridescenceThicknessMap:et,sheen:K,sheenColorMap:rt,sheenRoughnessMap:Mt,specularMap:At,specularColorMap:gt,specularIntensityMap:ee,transmission:Q,transmissionMap:L,thicknessMap:ct,gradientMap:st,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:nt,alphaHash:q,combine:S.combine,mapUv:xt&&v(S.map.channel),aoMapUv:fe&&v(S.aoMap.channel),lightMapUv:ae&&v(S.lightMap.channel),bumpMapUv:Wt&&v(S.bumpMap.channel),normalMapUv:ze&&v(S.normalMap.channel),displacementMapUv:C&&v(S.displacementMap.channel),emissiveMapUv:$e&&v(S.emissiveMap.channel),metalnessMapUv:ve&&v(S.metalnessMap.channel),roughnessMapUv:Ue&&v(S.roughnessMap.channel),anisotropyMapUv:j&&v(S.anisotropyMap.channel),clearcoatMapUv:bt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(S.sheenRoughnessMap.channel),specularMapUv:At&&v(S.specularMap.channel),specularColorMapUv:gt&&v(S.specularColorMap.channel),specularIntensityMapUv:ee&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:ct&&v(S.thicknessMap.channel),alphaMapUv:vt&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ze||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(xt||vt),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&ze===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ot,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:xt&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:$e&&S.emissiveMap.isVideoTexture===!0&&pe.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Et&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&S.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function g(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)E.push(Y),E.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(m(E,S),b(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function A(S){const E=_[S.type];let Y;if(E){const D=_i[E];Y=xv.clone(D.uniforms)}else Y=S.uniforms;return Y}function u(S,E){let Y=h.get(E);return Y!==void 0?++Y.usedTimes:(Y=new Zx(n,E,S,r),c.push(Y),h.set(E,Y)),Y}function f(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:A,acquireProgram:u,releaseProgram:f,releaseShaderCache:T,programs:c,dispose:I}}function Kx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Jx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function gd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _d(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,v,M,g,m){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:_,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:m},n[t]=b):(b.id=d.id,b.object=d,b.geometry=_,b.material=v,b.materialVariant=a(d),b.groupOrder=M,b.renderOrder=d.renderOrder,b.z=g,b.group=m),t++,b}function l(d,_,v,M,g,m){const b=o(d,_,v,M,g,m);v.transmission>0?i.push(b):v.transparent===!0?r.push(b):e.push(b)}function c(d,_,v,M,g,m){const b=o(d,_,v,M,g,m);v.transmission>0?i.unshift(b):v.transparent===!0?r.unshift(b):e.unshift(b)}function h(d,_){e.length>1&&e.sort(d||Jx),i.length>1&&i.sort(_||gd),r.length>1&&r.sort(_||gd)}function p(){for(let d=t,_=n.length;d<_;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function Qx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new _d,n.set(i,[a])):r>=s.length?(a=new _d,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function $x(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ye};break;case"SpotLight":e={position:new k,direction:new k,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function tb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let eb=0;function nb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ib(n){const t=new $x,e=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new en,a=new en;function o(c){let h=0,p=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let _=0,v=0,M=0,g=0,m=0,b=0,A=0,u=0,f=0,T=0,I=0;c.sort(nb);for(let E=0,Y=c.length;E<Y;E++){const D=c[E],H=D.color,G=D.intensity,X=D.distance;let W=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ts?W=D.shadow.map.texture:W=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*G,p+=H.g*G,d+=H.b*G;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],G);I++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,it=e.get(D);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=D.shadow.matrix,b++}i.directional[_]=z,_++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(H).multiplyScalar(G),z.distance=X,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[M]=z;const V=D.shadow;if(D.map&&(i.spotLightMap[f]=D.map,f++,V.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[M]=V.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=W,u++}M++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(H).multiplyScalar(G),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=z,g++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const V=D.shadow,it=e.get(D);it.shadowIntensity=V.intensity,it.shadowBias=V.bias,it.shadowNormalBias=V.normalBias,it.shadowRadius=V.radius,it.shadowMapSize=V.mapSize,it.shadowCameraNear=V.camera.near,it.shadowCameraFar=V.camera.far,i.pointShadow[v]=it,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=z,v++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(G),z.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[m]=z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==M||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==b||S.numPointShadows!==A||S.numSpotShadows!==u||S.numSpotMaps!==f||S.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=u+f-T,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,S.directionalLength=_,S.pointLength=v,S.spotLength=M,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=b,S.numPointShadows=A,S.numSpotShadows=u,S.numSpotMaps=f,S.numLightProbes=I,i.version=eb++)}function l(c,h){let p=0,d=0,_=0,v=0,M=0;const g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const A=c[m];if(A.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(g),p++}else if(A.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(g),u.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(g),_++}else if(A.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),u.halfWidth.set(A.width*.5,0,0),u.halfHeight.set(0,A.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const u=i.point[d];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const u=i.hemi[M];u.direction.setFromMatrixPosition(A.matrixWorld),u.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function vd(n){const t=new ib(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function rb(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new vd(n),t.set(r,[o])):s>=a.length?(o=new vd(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`,ob=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],lb=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],yd=new en,qs=new k,Ql=new k;function cb(n,t,e){let i=new bf;const r=new Le,s=new Le,a=new Ke,o=new Av,l=new wv,c={},h=e.maxTextureSize,p={[yr]:Pn,[Pn]:yr,[si]:si},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:sb,fragmentShader:ab}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const v=new tr;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ci(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let m=this.type;this.render=function(T,I,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===f1&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);const E=n.getRenderTarget(),Y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(qi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=m!==this.type;G&&I.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=T.length;X<W;X++){const z=T[X],V=z.shadow;if(V===void 0){Yt("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const it=V.getFrameExtents();r.multiply(it),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/it.x),r.x=s.x*it.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/it.y),r.y=s.y*it.y,V.mapSize.y=s.y));const tt=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=tt,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Js){if(z.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new wi(r.x,r.y,{format:Ts,type:Ji,minFilter:pn,magFilter:pn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new ua(r.x,r.y,xi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Qi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=un,V.map.depthTexture.magFilter=un}else z.isPointLight?(V.map=new Rf(r.x),V.map.depthTexture=new yv(r.x,Ri)):(V.map=new wi(r.x,r.y),V.map.depthTexture=new ua(r.x,r.y,Ri)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Qi,this.type===eo?(V.map.depthTexture.compareFunction=tt?Du:Cu,V.map.depthTexture.minFilter=pn,V.map.depthTexture.magFilter=pn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=un,V.map.depthTexture.magFilter=un);V.camera.updateProjectionMatrix()}const ht=V.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<ht;St++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,St),n.clear();else{St===0&&(n.setRenderTarget(V.map),n.clear());const pt=V.getViewport(St);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),H.viewport(a)}if(z.isPointLight){const pt=V.camera,jt=V.matrix,Pe=z.distance||pt.far;Pe!==pt.far&&(pt.far=Pe,pt.updateProjectionMatrix()),qs.setFromMatrixPosition(z.matrixWorld),pt.position.copy(qs),Ql.copy(pt.position),Ql.add(ob[St]),pt.up.copy(lb[St]),pt.lookAt(Ql),pt.updateMatrixWorld(),jt.makeTranslation(-qs.x,-qs.y,-qs.z),yd.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yd,pt.coordinateSystem,pt.reversedDepth)}else V.updateMatrices(z);i=V.getFrustum(),u(I,S,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===Js&&b(V,S),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,Y,D)};function b(T,I){const S=t.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wi(r.x,r.y,{format:Ts,type:Ji})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,S,d,M,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,S,_,M,null)}function A(T,I,S,E){let Y=null;const D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)Y=D;else if(Y=S.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=Y.uuid,G=I.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let W=X[G];W===void 0&&(W=Y.clone(),X[G]=W,I.addEventListener("dispose",f)),Y=W}if(Y.visible=I.visible,Y.wireframe=I.wireframe,E===Js?Y.side=I.shadowSide!==null?I.shadowSide:I.side:Y.side=I.shadowSide!==null?I.shadowSide:p[I.side],Y.alphaMap=I.alphaMap,Y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Y.map=I.map,Y.clipShadows=I.clipShadows,Y.clippingPlanes=I.clippingPlanes,Y.clipIntersection=I.clipIntersection,Y.displacementMap=I.displacementMap,Y.displacementScale=I.displacementScale,Y.displacementBias=I.displacementBias,Y.wireframeLinewidth=I.wireframeLinewidth,Y.linewidth=I.linewidth,S.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const H=n.properties.get(Y);H.light=S}return Y}function u(T,I,S,E,Y){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&Y===Js)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const G=t.update(T),X=T.material;if(Array.isArray(X)){const W=G.groups;for(let z=0,V=W.length;z<V;z++){const it=W[z],tt=X[it.materialIndex];if(tt&&tt.visible){const ht=A(T,tt,E,Y);T.onBeforeShadow(n,T,I,S,G,ht,it),n.renderBufferDirect(S,null,G,ht,T,it),T.onAfterShadow(n,T,I,S,G,ht,it)}}}else if(X.visible){const W=A(T,X,E,Y);T.onBeforeShadow(n,T,I,S,G,W,null),n.renderBufferDirect(S,null,G,W,T,null),T.onAfterShadow(n,T,I,S,G,W,null)}}const H=T.children;for(let G=0,X=H.length;G<X;G++)u(H[G],I,S,E,Y)}function f(T){T.target.removeEventListener("dispose",f);for(const S in c){const E=c[S],Y=T.target.uuid;Y in E&&(E[Y].dispose(),delete E[Y])}}}function ub(n,t){function e(){let L=!1;const ct=new Ke;let st=null;const vt=new Ke(0,0,0,0);return{setMask:function(nt){st!==nt&&!L&&(n.colorMask(nt,nt,nt,nt),st=nt)},setLocked:function(nt){L=nt},setClear:function(nt,q,Et,Xt,Oe){Oe===!0&&(nt*=Xt,q*=Xt,Et*=Xt),ct.set(nt,q,Et,Xt),vt.equals(ct)===!1&&(n.clearColor(nt,q,Et,Xt),vt.copy(ct))},reset:function(){L=!1,st=null,vt.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,st=null,vt=null,nt=null;return{setReversed:function(q){if(ct!==q){const Et=t.get("EXT_clip_control");q?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ct=q;const Xt=nt;nt=null,this.setClear(Xt)}},getReversed:function(){return ct},setTest:function(q){q?at(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(q){st!==q&&!L&&(n.depthMask(q),st=q)},setFunc:function(q){if(ct&&(q=Y1[q]),vt!==q){switch(q){case _c:n.depthFunc(n.NEVER);break;case vc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Sc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case bc:n.depthFunc(n.GREATER);break;case Mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=q}},setLocked:function(q){L=q},setClear:function(q){nt!==q&&(nt=q,ct&&(q=1-q),n.clearDepth(q))},reset:function(){L=!1,st=null,vt=null,nt=null,ct=!1}}}function r(){let L=!1,ct=null,st=null,vt=null,nt=null,q=null,Et=null,Xt=null,Oe=null;return{setTest:function(Me){L||(Me?at(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(Me){ct!==Me&&!L&&(n.stencilMask(Me),ct=Me)},setFunc:function(Me,Pi,Fi){(st!==Me||vt!==Pi||nt!==Fi)&&(n.stencilFunc(Me,Pi,Fi),st=Me,vt=Pi,nt=Fi)},setOp:function(Me,Pi,Fi){(q!==Me||Et!==Pi||Xt!==Fi)&&(n.stencilOp(Me,Pi,Fi),q=Me,Et=Pi,Xt=Fi)},setLocked:function(Me){L=Me},setClear:function(Me){Oe!==Me&&(n.clearStencil(Me),Oe=Me)},reset:function(){L=!1,ct=null,st=null,vt=null,nt=null,q=null,Et=null,Xt=null,Oe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},d=new WeakMap,_=[],v=null,M=!1,g=null,m=null,b=null,A=null,u=null,f=null,T=null,I=new ye(0,0,0),S=0,E=!1,Y=null,D=null,H=null,G=null,X=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(it)[1]),z=V>=1):it.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),z=V>=2);let tt=null,ht={};const St=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),jt=new Ke().fromArray(St),Pe=new Ke().fromArray(pt);function Ie(L,ct,st,vt){const nt=new Uint8Array(4),q=n.createTexture();n.bindTexture(L,q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<st;Et++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(ct+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return q}const J={};J[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(As),Wt(!1),ze(Ah),at(n.CULL_FACE),fe(qi);function at(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ot(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function qt(L,ct){return p[L]!==ct?(n.bindFramebuffer(L,ct),p[L]=ct,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function mt(L,ct){let st=_,vt=!1;if(L){st=d.get(ct),st===void 0&&(st=[],d.set(ct,st));const nt=L.textures;if(st.length!==nt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let q=0,Et=nt.length;q<Et;q++)st[q]=n.COLOR_ATTACHMENT0+q;st.length=nt.length,vt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,vt=!0);vt&&n.drawBuffers(st)}function xt(L){return v!==L?(n.useProgram(L),v=L,!0):!1}const Ve={[Nr]:n.FUNC_ADD,[m1]:n.FUNC_SUBTRACT,[g1]:n.FUNC_REVERSE_SUBTRACT};Ve[_1]=n.MIN,Ve[v1]=n.MAX;const se={[y1]:n.ZERO,[S1]:n.ONE,[x1]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[T1]:n.SRC_ALPHA_SATURATE,[A1]:n.DST_COLOR,[M1]:n.DST_ALPHA,[b1]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[w1]:n.ONE_MINUS_DST_COLOR,[E1]:n.ONE_MINUS_DST_ALPHA,[R1]:n.CONSTANT_COLOR,[I1]:n.ONE_MINUS_CONSTANT_COLOR,[C1]:n.CONSTANT_ALPHA,[D1]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(L,ct,st,vt,nt,q,Et,Xt,Oe,Me){if(L===qi){M===!0&&(ot(n.BLEND),M=!1);return}if(M===!1&&(at(n.BLEND),M=!0),L!==p1){if(L!==g||Me!==E){if((m!==Nr||u!==Nr)&&(n.blendEquation(n.FUNC_ADD),m=Nr,u=Nr),Me)switch(L){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFunc(n.ONE,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",L);break}else switch(L){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Th:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",L);break}b=null,A=null,f=null,T=null,I.set(0,0,0),S=0,g=L,E=Me}return}nt=nt||ct,q=q||st,Et=Et||vt,(ct!==m||nt!==u)&&(n.blendEquationSeparate(Ve[ct],Ve[nt]),m=ct,u=nt),(st!==b||vt!==A||q!==f||Et!==T)&&(n.blendFuncSeparate(se[st],se[vt],se[q],se[Et]),b=st,A=vt,f=q,T=Et),(Xt.equals(I)===!1||Oe!==S)&&(n.blendColor(Xt.r,Xt.g,Xt.b,Oe),I.copy(Xt),S=Oe),g=L,E=!1}function ae(L,ct){L.side===si?ot(n.CULL_FACE):at(n.CULL_FACE);let st=L.side===Pn;ct&&(st=!st),Wt(st),L.blending===ys&&L.transparent===!1?fe(qi):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const vt=L.stencilWrite;o.setTest(vt),vt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){Y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),Y=L)}function ze(L){L!==h1?(at(n.CULL_FACE),L!==D&&(L===Ah?n.cullFace(n.BACK):L===d1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),D=L}function C(L){L!==H&&(z&&n.lineWidth(L),H=L)}function $e(L,ct,st){L?(at(n.POLYGON_OFFSET_FILL),(G!==ct||X!==st)&&(G=ct,X=st,a.getReversed()&&(ct=-ct),n.polygonOffset(ct,st))):ot(n.POLYGON_OFFSET_FILL)}function ve(L){L?at(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function Ue(L){L===void 0&&(L=n.TEXTURE0+W-1),tt!==L&&(n.activeTexture(L),tt=L)}function Tt(L,ct,st){st===void 0&&(tt===null?st=n.TEXTURE0+W-1:st=tt);let vt=ht[st];vt===void 0&&(vt={type:void 0,texture:void 0},ht[st]=vt),(vt.type!==L||vt.texture!==ct)&&(tt!==st&&(n.activeTexture(st),tt=st),n.bindTexture(L,ct||J[L]),vt.type=L,vt.texture=ct)}function w(){const L=ht[tt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(L){ge("WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){ge("WebGLState:",L)}}function K(){try{n.texSubImage2D(...arguments)}catch(L){ge("WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){ge("WebGLState:",L)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(L){ge("WebGLState:",L)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){ge("WebGLState:",L)}}function lt(){try{n.texStorage2D(...arguments)}catch(L){ge("WebGLState:",L)}}function Lt(){try{n.texStorage3D(...arguments)}catch(L){ge("WebGLState:",L)}}function kt(){try{n.texImage2D(...arguments)}catch(L){ge("WebGLState:",L)}}function et(){try{n.texImage3D(...arguments)}catch(L){ge("WebGLState:",L)}}function rt(L){jt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),jt.copy(L))}function Mt(L){Pe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Pe.copy(L))}function At(L,ct){let st=c.get(ct);st===void 0&&(st=new WeakMap,c.set(ct,st));let vt=st.get(L);vt===void 0&&(vt=n.getUniformBlockIndex(ct,L.name),st.set(L,vt))}function gt(L,ct){const vt=c.get(ct).get(L);l.get(ct)!==vt&&(n.uniformBlockBinding(ct,vt,L.__bindingPointIndex),l.set(ct,vt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,ht={},p={},d=new WeakMap,_=[],v=null,M=!1,g=null,m=null,b=null,A=null,u=null,f=null,T=null,I=new ye(0,0,0),S=0,E=!1,Y=null,D=null,H=null,G=null,X=null,jt.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:ot,bindFramebuffer:qt,drawBuffers:mt,useProgram:xt,setBlending:fe,setMaterial:ae,setFlipSided:Wt,setCullFace:ze,setLineWidth:C,setPolygonOffset:$e,setScissorTest:ve,activeTexture:Ue,bindTexture:Tt,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:kt,texImage3D:et,updateUBOMapping:At,uniformBlockBinding:gt,texStorage2D:lt,texStorage3D:Lt,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:bt,scissor:rt,viewport:Mt,reset:ee}}function hb(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,y){return _?new OffscreenCanvas(w,y):Mo("canvas")}function M(w,y,F){let K=1;const Q=Tt(w);if((Q.width>F||Q.height>F)&&(K=F/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(K*Q.width),bt=Math.floor(K*Q.height);p===void 0&&(p=v(j,bt));const lt=y?v(j,bt):p;return lt.width=j,lt.height=bt,lt.getContext("2d").drawImage(w,0,0,j,bt),Yt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+bt+")."),lt}else return"data"in w&&Yt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(w,y,F,K,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=y;if(y===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),y===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const bt=Q?xo:pe.getTransfer(K);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=bt===we?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function u(w,y){let F;return w?y===null||y===Ri||y===ca?F=n.DEPTH24_STENCIL8:y===xi?F=n.DEPTH32F_STENCIL8:y===la&&(F=n.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===ca?F=n.DEPTH_COMPONENT24:y===xi?F=n.DEPTH_COMPONENT32F:y===la&&(F=n.DEPTH_COMPONENT16),F}function f(w,y){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function T(w){const y=w.target;y.removeEventListener("dispose",T),S(y),y.isVideoTexture&&h.delete(y)}function I(w){const y=w.target;y.removeEventListener("dispose",I),Y(y)}function S(w){const y=i.get(w);if(y.__webglInit===void 0)return;const F=w.source,K=d.get(F);if(K){const Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(K).length===0&&d.delete(F)}i.remove(w)}function E(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const F=w.source,K=d.get(F);delete K[y.__cacheKey],a.memory.textures--}function Y(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Q=0;Q<y.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=w.textures;for(let K=0,Q=F.length;K<Q;K++){const j=i.get(F[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(w)}let D=0;function H(){D=0}function G(){const w=D;return w>=r.maxTextures&&Yt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),D+=1,w}function X(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function W(w,y){const F=i.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,w,y);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function z(w,y){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){J(F,w,y);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function V(w,y){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){J(F,w,y);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function it(w,y){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){at(F,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const tt={[Ec]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},ht={[un]:n.NEAREST,[F1]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[bl]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},St={[B1]:n.NEVER,[G1]:n.ALWAYS,[V1]:n.LESS,[Cu]:n.LEQUAL,[z1]:n.EQUAL,[Du]:n.GEQUAL,[H1]:n.GREATER,[k1]:n.NOTEQUAL};function pt(w,y){if(y.type===xi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===bl||y.magFilter===Ia||y.magFilter===Or||y.minFilter===pn||y.minFilter===bl||y.minFilter===Ia||y.minFilter===Or)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,tt[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,tt[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,tt[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ht[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==Ia&&y.minFilter!==Or||y.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function jt(w,y){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const K=y.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const j=X(y);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[j].usedTimes++;const bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&E(y)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return F}function Pe(w,y,F){return Math.floor(Math.floor(w/F)/y)}function Ie(w,y,F,K){const j=w.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,F,K,y.data);else{j.sort((et,rt)=>et.start-rt.start);let bt=0;for(let et=1;et<j.length;et++){const rt=j[bt],Mt=j[et],At=rt.start+rt.count,gt=Pe(Mt.start,y.width,4),ee=Pe(rt.start,y.width,4);Mt.start<=At+1&&gt===ee&&Pe(Mt.start+Mt.count-1,y.width,4)===gt?rt.count=Math.max(rt.count,Mt.start+Mt.count-rt.start):(++bt,j[bt]=Mt)}j.length=bt+1;const lt=n.getParameter(n.UNPACK_ROW_LENGTH),Lt=n.getParameter(n.UNPACK_SKIP_PIXELS),kt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let et=0,rt=j.length;et<rt;et++){const Mt=j[et],At=Math.floor(Mt.start/4),gt=Math.ceil(Mt.count/4),ee=At%y.width,L=Math.floor(At/y.width),ct=gt,st=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,ee,L,ct,st,F,K,y.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,kt)}}function J(w,y,F){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const Q=jt(w,y),j=y.source;e.bindTexture(K,w.__webglTexture,n.TEXTURE0+F);const bt=i.get(j);if(j.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);const lt=pe.getPrimaries(pe.workingColorSpace),Lt=y.colorSpace===_r?null:pe.getPrimaries(y.colorSpace),kt=y.colorSpace===_r||lt===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let et=M(y.image,!1,r.maxTextureSize);et=Ue(y,et);const rt=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type);let At=A(y.internalFormat,rt,Mt,y.colorSpace,y.isVideoTexture);pt(K,y);let gt;const ee=y.mipmaps,L=y.isVideoTexture!==!0,ct=bt.__version===void 0||Q===!0,st=j.dataReady,vt=f(y,et);if(y.isDepthTexture)At=u(y.format===Br,y.type),ct&&(L?e.texStorage2D(n.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,At,et.width,et.height,0,rt,Mt,null));else if(y.isDataTexture)if(ee.length>0){L&&ct&&e.texStorage2D(n.TEXTURE_2D,vt,At,ee[0].width,ee[0].height);for(let nt=0,q=ee.length;nt<q;nt++)gt=ee[nt],L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,Mt,gt.data):e.texImage2D(n.TEXTURE_2D,nt,At,gt.width,gt.height,0,rt,Mt,gt.data);y.generateMipmaps=!1}else L?(ct&&e.texStorage2D(n.TEXTURE_2D,vt,At,et.width,et.height),st&&Ie(y,et,rt,Mt)):e.texImage2D(n.TEXTURE_2D,0,At,et.width,et.height,0,rt,Mt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,At,ee[0].width,ee[0].height,et.depth);for(let nt=0,q=ee.length;nt<q;nt++)if(gt=ee[nt],y.format!==oi)if(rt!==null)if(L){if(st)if(y.layerUpdates.size>0){const Et=Kh(gt.width,gt.height,y.format,y.type);for(const Xt of y.layerUpdates){const Oe=gt.data.subarray(Xt*Et/gt.data.BYTES_PER_ELEMENT,(Xt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Xt,gt.width,gt.height,1,rt,Oe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,rt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,At,gt.width,gt.height,et.depth,0,gt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?st&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,rt,Mt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,At,gt.width,gt.height,et.depth,0,rt,Mt,gt.data)}else{L&&ct&&e.texStorage2D(n.TEXTURE_2D,vt,At,ee[0].width,ee[0].height);for(let nt=0,q=ee.length;nt<q;nt++)gt=ee[nt],y.format!==oi?rt!==null?L?st&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,At,gt.width,gt.height,0,gt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,Mt,gt.data):e.texImage2D(n.TEXTURE_2D,nt,At,gt.width,gt.height,0,rt,Mt,gt.data)}else if(y.isDataArrayTexture)if(L){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,At,et.width,et.height,et.depth),st)if(y.layerUpdates.size>0){const nt=Kh(et.width,et.height,y.format,y.type);for(const q of y.layerUpdates){const Et=et.data.subarray(q*nt/et.data.BYTES_PER_ELEMENT,(q+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,et.width,et.height,1,rt,Mt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,rt,Mt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,rt,Mt,et.data);else if(y.isData3DTexture)L?(ct&&e.texStorage3D(n.TEXTURE_3D,vt,At,et.width,et.height,et.depth),st&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,rt,Mt,et.data)):e.texImage3D(n.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,rt,Mt,et.data);else if(y.isFramebufferTexture){if(ct)if(L)e.texStorage2D(n.TEXTURE_2D,vt,At,et.width,et.height);else{let nt=et.width,q=et.height;for(let Et=0;Et<vt;Et++)e.texImage2D(n.TEXTURE_2D,Et,At,nt,q,0,rt,Mt,null),nt>>=1,q>>=1}}else if(ee.length>0){if(L&&ct){const nt=Tt(ee[0]);e.texStorage2D(n.TEXTURE_2D,vt,At,nt.width,nt.height)}for(let nt=0,q=ee.length;nt<q;nt++)gt=ee[nt],L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,rt,Mt,gt):e.texImage2D(n.TEXTURE_2D,nt,At,rt,Mt,gt);y.generateMipmaps=!1}else if(L){if(ct){const nt=Tt(et);e.texStorage2D(n.TEXTURE_2D,vt,At,nt.width,nt.height)}st&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,Mt,et)}else e.texImage2D(n.TEXTURE_2D,0,At,rt,Mt,et);g(y)&&m(K),bt.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,F){if(y.image.length!==6)return;const K=jt(w,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const j=i.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const bt=pe.getPrimaries(pe.workingColorSpace),lt=y.colorSpace===_r?null:pe.getPrimaries(y.colorSpace),Lt=y.colorSpace===_r||bt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const kt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,rt=[];for(let q=0;q<6;q++)!kt&&!et?rt[q]=M(y.image[q],!0,r.maxCubemapSize):rt[q]=et?y.image[q].image:y.image[q],rt[q]=Ue(y,rt[q]);const Mt=rt[0],At=s.convert(y.format,y.colorSpace),gt=s.convert(y.type),ee=A(y.internalFormat,At,gt,y.colorSpace),L=y.isVideoTexture!==!0,ct=j.__version===void 0||K===!0,st=Q.dataReady;let vt=f(y,Mt);pt(n.TEXTURE_CUBE_MAP,y);let nt;if(kt){L&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,ee,Mt.width,Mt.height);for(let q=0;q<6;q++){nt=rt[q].mipmaps;for(let Et=0;Et<nt.length;Et++){const Xt=nt[Et];y.format!==oi?At!==null?L?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et,0,0,Xt.width,Xt.height,At,Xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et,ee,Xt.width,Xt.height,0,Xt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et,0,0,Xt.width,Xt.height,At,gt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et,ee,Xt.width,Xt.height,0,At,gt,Xt.data)}}}else{if(nt=y.mipmaps,L&&ct){nt.length>0&&vt++;const q=Tt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,ee,q.width,q.height)}for(let q=0;q<6;q++)if(et){L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,rt[q].width,rt[q].height,At,gt,rt[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,rt[q].width,rt[q].height,0,At,gt,rt[q].data);for(let Et=0;Et<nt.length;Et++){const Oe=nt[Et].image[q].image;L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et+1,0,0,Oe.width,Oe.height,At,gt,Oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et+1,ee,Oe.width,Oe.height,0,At,gt,Oe.data)}}else{L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,At,gt,rt[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ee,At,gt,rt[q]);for(let Et=0;Et<nt.length;Et++){const Xt=nt[Et];L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et+1,0,0,At,gt,Xt.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et+1,ee,At,gt,Xt.image[q])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ot(w,y,F,K,Q,j){const bt=s.convert(F.format,F.colorSpace),lt=s.convert(F.type),Lt=A(F.internalFormat,bt,lt,F.colorSpace),kt=i.get(y),et=i.get(F);if(et.__renderTarget=y,!kt.__hasExternalTextures){const rt=Math.max(1,y.width>>j),Mt=Math.max(1,y.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,Lt,rt,Mt,y.depth,0,bt,lt,null):e.texImage2D(Q,j,Lt,rt,Mt,0,bt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,et.__webglTexture,0,C(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,et.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(w,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=u(y.stencilBuffer,Q),bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(y),j,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(y),j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,w)}else{const K=y.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],bt=s.convert(j.format,j.colorSpace),lt=s.convert(j.type),Lt=A(j.internalFormat,bt,lt,j.colorSpace);$e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(y),Lt,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(y),Lt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Lt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(w,y,F){const K=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(n.TEXTURE_CUBE_MAP,y.depthTexture);const kt=s.convert(y.depthTexture.format),et=s.convert(y.depthTexture.type);let rt;y.depthTexture.format===Qi?rt=n.DEPTH_COMPONENT24:y.depthTexture.format===Br&&(rt=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,rt,y.width,y.height,0,kt,et,null)}}else W(y.depthTexture,0);const j=Q.__webglTexture,bt=C(y),lt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Lt=y.depthTexture.format===Br?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qi)$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Lt,lt,j,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,Lt,lt,j,0);else if(y.depthTexture.format===Br)$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Lt,lt,j,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,Lt,lt,j,0);else throw new Error("Unknown depthTexture format")}function xt(w){const y=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)mt(y.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?mt(y.__webglFramebuffer[0],w,0):mt(y.__webglFramebuffer,w,0)}else if(F){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),qt(y.__webglDepthbuffer[K],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),qt(y.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(w,y,F){const K=i.get(w);y!==void 0&&ot(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&xt(w)}function se(w){const y=w.texture,F=i.get(w),K=i.get(y);w.addEventListener("dispose",I);const Q=w.textures,j=w.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let Lt=0;Lt<y.mipmaps.length;Lt++)F.__webglFramebuffer[lt][Lt]=n.createFramebuffer()}else F.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)F.__webglFramebuffer[lt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(bt)for(let lt=0,Lt=Q.length;lt<Lt;lt++){const kt=i.get(Q[lt]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&$e(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const Lt=Q[lt];F.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const kt=s.convert(Lt.format,Lt.colorSpace),et=s.convert(Lt.type),rt=A(Lt.internalFormat,kt,et,Lt.colorSpace,w.isXRRenderTarget===!0),Mt=C(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,rt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),pt(n.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)ot(F.__webglFramebuffer[lt][Lt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt);else ot(F.__webglFramebuffer[lt],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(y)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,Lt=Q.length;lt<Lt;lt++){const kt=Q[lt],et=i.get(kt);let rt=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,et.__webglTexture),pt(rt,kt),ot(F.__webglFramebuffer,w,kt,n.COLOR_ATTACHMENT0+lt,rt,0),g(kt)&&m(rt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),pt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)ot(F.__webglFramebuffer[Lt],w,y,n.COLOR_ATTACHMENT0,lt,Lt);else ot(F.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,lt,0);g(y)&&m(lt),e.unbindTexture()}w.depthBuffer&&xt(w)}function fe(w){const y=w.textures;for(let F=0,K=y.length;F<K;F++){const Q=y[F];if(g(Q)){const j=b(w),bt=i.get(Q).__webglTexture;e.bindTexture(j,bt),m(j),e.unbindTexture()}}}const ae=[],Wt=[];function ze(w){if(w.samples>0){if($e(w)===!1){const y=w.textures,F=w.width,K=w.height;let Q=n.COLOR_BUFFER_BIT;const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(w),lt=y.length>1;if(lt)for(let kt=0;kt<y.length;kt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Lt=w.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let kt=0;kt<y.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[kt]);const et=i.get(y[kt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,Q,n.NEAREST),l===!0&&(ae.length=0,Wt.length=0,ae.push(n.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ae.push(j),Wt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let kt=0;kt<y.length;kt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[kt]);const et=i.get(y[kt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function C(w){return Math.min(r.maxSamples,w.samples)}function $e(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ue(w,y){const F=w.colorSpace,K=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Rs&&F!==_r&&(pe.getTransfer(F)===we?(K!==oi||Q!==jn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",F)),y}function Tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=it,this.rebindTextures=Ve,this.setupRenderTarget=se,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function db(n,t){function e(i,r=_r){let s;const a=pe.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===df)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cf)return n.BYTE;if(i===uf)return n.SHORT;if(i===la)return n.UNSIGNED_SHORT;if(i===Eu)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===pf)return n.RGB;if(i===oi)return n.RGBA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===mf)return n.RED;if(i===Tu)return n.RED_INTEGER;if(i===Ts)return n.RG;if(i===Ru)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(a===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Tc||i===Rc||i===Ic)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Dc||i===Lc||i===Pc||i===Fc||i===Nc||i===Uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cc||i===Dc)return a===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return s.COMPRESSED_R11_EAC;if(i===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return s.COMPRESSED_RG11_EAC;if(i===Uc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===Bc||i===Vc||i===zc||i===Hc||i===kc||i===Gc||i===Wc||i===Zc||i===Xc||i===Yc||i===qc||i===jc||i===Kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jc||i===Qc||i===$c)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Jc)return a===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tu||i===eu||i===nu||i===iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===tu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
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

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ef(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ii({vertexShader:fb,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ci(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends Ns{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,_=null,v=null;const M=typeof XRWebGLBinding<"u",g=new mb,m={},b=e.getContextAttributes();let A=null,u=null;const f=[],T=[],I=new Le;let S=null;const E=new ri;E.viewport=new Ke;const Y=new ri;Y.viewport=new Ke;const D=[E,Y],H=new Rv;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=f[J];return at===void 0&&(at=new Cl,f[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=f[J];return at===void 0&&(at=new Cl,f[J]=at),at.getGripSpace()},this.getHand=function(J){let at=f[J];return at===void 0&&(at=new Cl,f[J]=at),at.getHandSpace()};function W(J){const at=T.indexOf(J.inputSource);if(at===-1)return;const ot=f[at];ot!==void 0&&(ot.update(J.inputSource,J.frame,c||a),ot.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",V);for(let J=0;J<f.length;J++){const at=T[J];at!==null&&(T[J]=null,f[J].disconnect(at))}G=null,X=null,g.reset();for(const J in m)delete m[J];t.setRenderTarget(A),_=null,d=null,p=null,r=null,u=null,Ie.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",z),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,qt=null,mt=null;b.depth&&(mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?Br:Qi,qt=b.stencil?ca:Ri);const xt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(xt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new wi(d.textureWidth,d.textureHeight,{format:oi,type:jn,depthTexture:new ua(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new wi(_.framebufferWidth,_.framebufferHeight,{format:oi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(J){for(let at=0;at<J.removed.length;at++){const ot=J.removed[at],qt=T.indexOf(ot);qt>=0&&(T[qt]=null,f[qt].disconnect(ot))}for(let at=0;at<J.added.length;at++){const ot=J.added[at];let qt=T.indexOf(ot);if(qt===-1){for(let xt=0;xt<f.length;xt++)if(xt>=T.length){T.push(ot),qt=xt;break}else if(T[xt]===null){T[xt]=ot,qt=xt;break}if(qt===-1)break}const mt=f[qt];mt&&mt.connect(ot)}}const it=new k,tt=new k;function ht(J,at,ot){it.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(ot.matrixWorld);const qt=it.distanceTo(tt),mt=at.projectionMatrix.elements,xt=ot.projectionMatrix.elements,Ve=mt[14]/(mt[10]-1),se=mt[14]/(mt[10]+1),fe=(mt[9]+1)/mt[5],ae=(mt[9]-1)/mt[5],Wt=(mt[8]-1)/mt[0],ze=(xt[8]+1)/xt[0],C=Ve*Wt,$e=Ve*ze,ve=qt/(-Wt+ze),Ue=ve*-Wt;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),mt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Tt=Ve+ve,w=se+ve,y=C-Ue,F=$e+(qt-Ue),K=fe*se/w*Tt,Q=ae*se/w*Tt;J.projectionMatrix.makePerspective(y,F,K,Q,Tt,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let at=J.near,ot=J.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),H.near=Y.near=E.near=at,H.far=Y.far=E.far=ot,(G!==H.near||X!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,X=H.far),H.layers.mask=J.layers.mask|6,E.layers.mask=H.layers.mask&-5,Y.layers.mask=H.layers.mask&-3;const qt=J.parent,mt=H.cameras;St(H,qt);for(let xt=0;xt<mt.length;xt++)St(mt[xt],qt);mt.length===2?ht(H,E,Y):H.projectionMatrix.copy(E.projectionMatrix),pt(J,H,qt)};function pt(J,at,ot){ot===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ru*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(J){return m[J]};let jt=null;function Pe(J,at){if(h=at.getViewerPose(c||a),v=at,h!==null){const ot=h.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let qt=!1;ot.length!==H.cameras.length&&(H.cameras.length=0,qt=!0);for(let se=0;se<ot.length;se++){const fe=ot[se];let ae=null;if(_!==null)ae=_.getViewport(fe);else{const ze=p.getViewSubImage(d,fe);ae=ze.viewport,se===0&&(t.setRenderTargetTextures(u,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(u))}let Wt=D[se];Wt===void 0&&(Wt=new ri,Wt.layers.enable(se),Wt.viewport=new Ke,D[se]=Wt),Wt.matrix.fromArray(fe.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(fe.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ae.x,ae.y,ae.width,ae.height),se===0&&(H.matrix.copy(Wt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),qt===!0&&H.cameras.push(Wt)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const se=p.getDepthInformation(ot[0]);se&&se.isValid&&se.texture&&g.init(se,r.renderState)}if(mt&&mt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let se=0;se<ot.length;se++){const fe=ot[se].camera;if(fe){let ae=m[fe];ae||(ae=new Ef,m[fe]=ae);const Wt=p.getCameraImage(fe);ae.sourceTexture=Wt}}}}for(let ot=0;ot<f.length;ot++){const qt=T[ot],mt=f[ot];qt!==null&&mt!==void 0&&mt.update(qt,at,c||a)}jt&&jt(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),v=null}const Ie=new Tf;Ie.setAnimationLoop(Pe),this.setAnimationLoop=function(J){jt=J},this.dispose=function(){}}}const Lr=new $i,_b=new en;function vb(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Af(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,b,A,u){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),p(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&_(g,m,u)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),M(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=t.get(m),A=b.envMap,u=b.envMapRotation;A&&(g.envMap.value=A,Lr.copy(u),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),g.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(Lr)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=A*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){const b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const u=A.program;i.uniformBlockBinding(b,u)}function c(b,A){let u=r[b.id];u===void 0&&(v(b),u=h(b),r[b.id]=u,b.addEventListener("dispose",g));const f=A.program;i.updateUBOMapping(b,f);const T=t.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function h(b){const A=p();b.__bindingPointIndex=A;const u=n.createBuffer(),f=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,f,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,u),u}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const A=r[b.id],u=b.uniforms,f=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,I=u.length;T<I;T++){const S=Array.isArray(u[T])?u[T]:[u[T]];for(let E=0,Y=S.length;E<Y;E++){const D=S[E];if(_(D,T,E,f)===!0){const H=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let W=0;W<G.length;W++){const z=G[W],V=M(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,H+X,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(b,A,u,f){const T=b.value,I=A+"_"+u;if(f[I]===void 0)return typeof T=="number"||typeof T=="boolean"?f[I]=T:f[I]=T.clone(),!0;{const S=f[I];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return f[I]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function v(b){const A=b.uniforms;let u=0;const f=16;for(let I=0,S=A.length;I<S;I++){const E=Array.isArray(A[I])?A[I]:[A[I]];for(let Y=0,D=E.length;Y<D;Y++){const H=E[Y],G=Array.isArray(H.value)?H.value:[H.value];for(let X=0,W=G.length;X<W;X++){const z=G[X],V=M(z),it=u%f,tt=it%V.boundary,ht=it+tt;u+=tt,ht!==0&&f-ht<V.storage&&(u+=f-ht),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=u,u+=V.storage}}}const T=u%f;return T>0&&(u+=f-T),b.__size=u,b.__cache={},this}function M(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Yt("WebGLRenderer: Unsupported uniform value type.",b),A}function g(b){const A=b.target;A.removeEventListener("dispose",g);const u=a.indexOf(A.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function xb(){return fi===null&&(fi=new mv(Sb,16,16,Ts,Ji),fi.name="DFG_LUT",fi.minFilter=pn,fi.magFilter=pn,fi.wrapS=Yi,fi.wrapT=Yi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class bb{constructor(t={}){const{canvas:e=Z1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:_=jn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=_,g=new Set([Iu,Ru,Tu]),m=new Set([jn,Ri,la,ca,Au,wu]),b=new Uint32Array(4),A=new Int32Array(4);let u=null,f=null;const T=[],I=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let Y=!1;this._outputColorSpace=Zn;let D=0,H=0,G=null,X=-1,W=null;const z=new Ke,V=new Ke;let it=null;const tt=new ye(0);let ht=0,St=e.width,pt=e.height,jt=1,Pe=null,Ie=null;const J=new Ke(0,0,St,pt),at=new Ke(0,0,St,pt);let ot=!1;const qt=new bf;let mt=!1,xt=!1;const Ve=new en,se=new k,fe=new Ke,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ze(){return G===null?jt:1}let C=i;function $e(x,N){return e.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mu}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),C===null){const N="webgl2";if(C=$e(N,x),C===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw ge("WebGLRenderer: "+x.message),x}let ve,Ue,Tt,w,y,F,K,Q,j,bt,lt,Lt,kt,et,rt,Mt,At,gt,ee,L,ct,st,vt;function nt(){ve=new bS(C),ve.init(),ct=new db(C,ve),Ue=new pS(C,ve,t,ct),Tt=new ub(C,ve),Ue.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),w=new AS(C),y=new Kx,F=new hb(C,ve,Tt,y,Ue,ct,w),K=new xS(E),Q=new Cv(C),st=new dS(C,Q),j=new MS(C,Q,w,st),bt=new TS(C,j,Q,st,w),gt=new wS(C,Ue,F),rt=new mS(y),lt=new jx(E,K,ve,Ue,st,rt),Lt=new vb(E,y),kt=new Qx,et=new rb(ve),At=new hS(E,K,Tt,bt,v,l),Mt=new cb(E,bt,Ue),vt=new yb(C,w,Ue,Tt),ee=new fS(C,ve,w),L=new ES(C,ve,w),w.programs=lt.programs,E.capabilities=Ue,E.extensions=ve,E.properties=y,E.renderLists=kt,E.shadowMap=Mt,E.state=Tt,E.info=w}nt(),M!==jn&&(S=new IS(M,e.width,e.height,r,s));const q=new gb(E,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(x){x!==void 0&&(jt=x,this.setSize(St,pt,!1))},this.getSize=function(x){return x.set(St,pt)},this.setSize=function(x,N,Z=!0){if(q.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=x,pt=N,e.width=Math.floor(x*jt),e.height=Math.floor(N*jt),Z===!0&&(e.style.width=x+"px",e.style.height=N+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(St*jt,pt*jt).floor()},this.setDrawingBufferSize=function(x,N,Z){St=x,pt=N,jt=Z,e.width=Math.floor(x*Z),e.height=Math.floor(N*Z),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(M===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(z)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,N,Z,B){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,N,Z,B),Tt.viewport(z.copy(J).multiplyScalar(jt).round())},this.getScissor=function(x){return x.copy(at)},this.setScissor=function(x,N,Z,B){x.isVector4?at.set(x.x,x.y,x.z,x.w):at.set(x,N,Z,B),Tt.scissor(V.copy(at).multiplyScalar(jt).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(x){Tt.setScissorTest(ot=x)},this.setOpaqueSort=function(x){Pe=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,Z=!0){let B=0;if(x){let O=!1;if(G!==null){const dt=G.texture.format;O=g.has(dt)}if(O){const dt=G.texture.type,_t=m.has(dt),ft=At.getClearColor(),wt=At.getClearAlpha(),Ct=ft.r,Kt=ft.g,ne=ft.b;_t?(b[0]=Ct,b[1]=Kt,b[2]=ne,b[3]=wt,C.clearBufferuiv(C.COLOR,0,b)):(A[0]=Ct,A[1]=Kt,A[2]=ne,A[3]=wt,C.clearBufferiv(C.COLOR,0,A))}else B|=C.COLOR_BUFFER_BIT}N&&(B|=C.DEPTH_BUFFER_BIT),Z&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),At.dispose(),kt.dispose(),et.dispose(),y.dispose(),K.dispose(),bt.dispose(),st.dispose(),vt.dispose(),lt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ch),q.removeEventListener("sessionend",uh),Ar.stop()};function Et(x){x.preventDefault(),Ph("WebGLRenderer: Context Lost."),Y=!0}function Xt(){Ph("WebGLRenderer: Context Restored."),Y=!1;const x=w.autoReset,N=Mt.enabled,Z=Mt.autoUpdate,B=Mt.needsUpdate,O=Mt.type;nt(),w.autoReset=x,Mt.enabled=N,Mt.autoUpdate=Z,Mt.needsUpdate=B,Mt.type=O}function Oe(x){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Me(x){const N=x.target;N.removeEventListener("dispose",Me),Pi(N)}function Pi(x){Fi(x),y.remove(x)}function Fi(x){const N=y.get(x).programs;N!==void 0&&(N.forEach(function(Z){lt.releaseProgram(Z)}),x.isShaderMaterial&&lt.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,Z,B,O,dt){N===null&&(N=ae);const _t=O.isMesh&&O.matrixWorld.determinant()<0,ft=B0(x,N,Z,B,O);Tt.setMaterial(B,_t);let wt=Z.index,Ct=1;if(B.wireframe===!0){if(wt=j.getWireframeAttribute(Z),wt===void 0)return;Ct=2}const Kt=Z.drawRange,ne=Z.attributes.position;let Dt=Kt.start*Ct,Ce=(Kt.start+Kt.count)*Ct;dt!==null&&(Dt=Math.max(Dt,dt.start*Ct),Ce=Math.min(Ce,(dt.start+dt.count)*Ct)),wt!==null?(Dt=Math.max(Dt,0),Ce=Math.min(Ce,wt.count)):ne!=null&&(Dt=Math.max(Dt,0),Ce=Math.min(Ce,ne.count));const je=Ce-Dt;if(je<0||je===1/0)return;st.setup(O,B,ft,Z,wt);let Ye,De=ee;if(wt!==null&&(Ye=Q.get(wt),De=L,De.setIndex(Ye)),O.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*ze()),De.setMode(C.LINES)):De.setMode(C.TRIANGLES);else if(O.isLine){let hn=B.linewidth;hn===void 0&&(hn=1),Tt.setLineWidth(hn*ze()),O.isLineSegments?De.setMode(C.LINES):O.isLineLoop?De.setMode(C.LINE_LOOP):De.setMode(C.LINE_STRIP)}else O.isPoints?De.setMode(C.POINTS):O.isSprite&&De.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))De.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const hn=O._multiDrawStarts,Rt=O._multiDrawCounts,Un=O._multiDrawCount,me=wt?Q.get(wt).bytesPerElement:1,$n=y.get(B).currentProgram.getUniforms();for(let hi=0;hi<Un;hi++)$n.setValue(C,"_gl_DrawID",hi),De.render(hn[hi]/me,Rt[hi])}else if(O.isInstancedMesh)De.renderInstances(Dt,je,O.count);else if(Z.isInstancedBufferGeometry){const hn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Rt=Math.min(Z.instanceCount,hn);De.renderInstances(Dt,je,Rt)}else De.render(Dt,je)};function lh(x,N,Z){x.transparent===!0&&x.side===si&&x.forceSinglePass===!1?(x.side=Pn,x.needsUpdate=!0,Ta(x,N,Z),x.side=yr,x.needsUpdate=!0,Ta(x,N,Z),x.side=si):Ta(x,N,Z)}this.compile=function(x,N,Z=null){Z===null&&(Z=x),f=et.get(Z),f.init(N),I.push(f),Z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),x!==Z&&x.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const B=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let _t=0;_t<dt.length;_t++){const ft=dt[_t];lh(ft,Z,O),B.add(ft)}else lh(dt,Z,O),B.add(dt)}),f=I.pop(),B},this.compileAsync=function(x,N,Z=null){const B=this.compile(x,N,Z);return new Promise(O=>{function dt(){if(B.forEach(function(_t){y.get(_t).currentProgram.isReady()&&B.delete(_t)}),B.size===0){O(x);return}setTimeout(dt,10)}ve.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let fl=null;function O0(x){fl&&fl(x)}function ch(){Ar.stop()}function uh(){Ar.start()}const Ar=new Tf;Ar.setAnimationLoop(O0),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(x){fl=x,q.setAnimationLoop(x),x===null?Ar.stop():Ar.start()},q.addEventListener("sessionstart",ch),q.addEventListener("sessionend",uh),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const Z=q.enabled===!0&&q.isPresenting===!0,B=S!==null&&(G===null||Z)&&S.begin(E,G);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,N,G),f=et.get(x,I.length),f.init(N),I.push(f),Ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qt.setFromProjectionMatrix(Ve,bi,N.reversedDepth),xt=this.localClippingEnabled,mt=rt.init(this.clippingPlanes,xt),u=kt.get(x,T.length),u.init(),T.push(u),q.enabled===!0&&q.isPresenting===!0){const _t=E.xr.getDepthSensingMesh();_t!==null&&pl(_t,N,-1/0,E.sortObjects)}pl(x,N,0,E.sortObjects),u.finish(),E.sortObjects===!0&&u.sort(Pe,Ie),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&At.addToRenderList(u,x),this.info.render.frame++,mt===!0&&rt.beginShadows();const O=f.state.shadowsArray;if(Mt.render(O,x,N),mt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&S.hasRenderPass())===!1){const _t=u.opaque,ft=u.transmissive;if(f.setupLights(),N.isArrayCamera){const wt=N.cameras;if(ft.length>0)for(let Ct=0,Kt=wt.length;Ct<Kt;Ct++){const ne=wt[Ct];dh(_t,ft,x,ne)}Wt&&At.render(x);for(let Ct=0,Kt=wt.length;Ct<Kt;Ct++){const ne=wt[Ct];hh(u,x,ne,ne.viewport)}}else ft.length>0&&dh(_t,ft,x,N),Wt&&At.render(x),hh(u,x,N)}G!==null&&H===0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G)),B&&S.end(E),x.isScene===!0&&x.onAfterRender(E,x,N),st.resetDefaultState(),X=-1,W=null,I.pop(),I.length>0?(f=I[I.length-1],mt===!0&&rt.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?u=T[T.length-1]:u=null};function pl(x,N,Z,B){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)Z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||qt.intersectsSprite(x)){B&&fe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ve);const _t=bt.update(x),ft=x.material;ft.visible&&u.push(x,_t,ft,Z,fe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||qt.intersectsObject(x))){const _t=bt.update(x),ft=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),fe.copy(x.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),fe.copy(_t.boundingSphere.center)),fe.applyMatrix4(x.matrixWorld).applyMatrix4(Ve)),Array.isArray(ft)){const wt=_t.groups;for(let Ct=0,Kt=wt.length;Ct<Kt;Ct++){const ne=wt[Ct],Dt=ft[ne.materialIndex];Dt&&Dt.visible&&u.push(x,_t,Dt,Z,fe.z,ne)}}else ft.visible&&u.push(x,_t,ft,Z,fe.z,null)}}const dt=x.children;for(let _t=0,ft=dt.length;_t<ft;_t++)pl(dt[_t],N,Z,B)}function hh(x,N,Z,B){const{opaque:O,transmissive:dt,transparent:_t}=x;f.setupLightsView(Z),mt===!0&&rt.setGlobalState(E.clippingPlanes,Z),B&&Tt.viewport(z.copy(B)),O.length>0&&wa(O,N,Z),dt.length>0&&wa(dt,N,Z),_t.length>0&&wa(_t,N,Z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function dh(x,N,Z,B){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[B.id]===void 0){const Dt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");f.state.transmissionRenderTarget[B.id]=new wi(1,1,{generateMipmaps:!0,type:Dt?Ji:jn,minFilter:Or,samples:Math.max(4,Ue.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const dt=f.state.transmissionRenderTarget[B.id],_t=B.viewport||z;dt.setSize(_t.z*E.transmissionResolutionScale,_t.w*E.transmissionResolutionScale);const ft=E.getRenderTarget(),wt=E.getActiveCubeFace(),Ct=E.getActiveMipmapLevel();E.setRenderTarget(dt),E.getClearColor(tt),ht=E.getClearAlpha(),ht<1&&E.setClearColor(16777215,.5),E.clear(),Wt&&At.render(Z);const Kt=E.toneMapping;E.toneMapping=Ai;const ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),mt===!0&&rt.setGlobalState(E.clippingPlanes,B),wa(x,Z,B),F.updateMultisampleRenderTarget(dt),F.updateRenderTargetMipmap(dt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Ce=0,je=N.length;Ce<je;Ce++){const Ye=N[Ce],{object:De,geometry:hn,material:Rt,group:Un}=Ye;if(Rt.side===si&&De.layers.test(B.layers)){const me=Rt.side;Rt.side=Pn,Rt.needsUpdate=!0,fh(De,Z,B,hn,Rt,Un),Rt.side=me,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(F.updateMultisampleRenderTarget(dt),F.updateRenderTargetMipmap(dt))}E.setRenderTarget(ft,wt,Ct),E.setClearColor(tt,ht),ne!==void 0&&(B.viewport=ne),E.toneMapping=Kt}function wa(x,N,Z){const B=N.isScene===!0?N.overrideMaterial:null;for(let O=0,dt=x.length;O<dt;O++){const _t=x[O],{object:ft,geometry:wt,group:Ct}=_t;let Kt=_t.material;Kt.allowOverride===!0&&B!==null&&(Kt=B),ft.layers.test(Z.layers)&&fh(ft,N,Z,wt,Kt,Ct)}}function fh(x,N,Z,B,O,dt){x.onBeforeRender(E,N,Z,B,O,dt),x.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(E,N,Z,B,x,dt),O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=Pn,O.needsUpdate=!0,E.renderBufferDirect(Z,N,B,O,x,dt),O.side=yr,O.needsUpdate=!0,E.renderBufferDirect(Z,N,B,O,x,dt),O.side=si):E.renderBufferDirect(Z,N,B,O,x,dt),x.onAfterRender(E,N,Z,B,O,dt)}function Ta(x,N,Z){N.isScene!==!0&&(N=ae);const B=y.get(x),O=f.state.lights,dt=f.state.shadowsArray,_t=O.state.version,ft=lt.getParameters(x,O.state,dt,N,Z),wt=lt.getProgramCacheKey(ft);let Ct=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Kt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=K.get(x.envMap||B.environment,Kt),B.envMapRotation=B.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",Me),Ct=new Map,B.programs=Ct);let ne=Ct.get(wt);if(ne!==void 0){if(B.currentProgram===ne&&B.lightsStateVersion===_t)return mh(x,ft),ne}else ft.uniforms=lt.getUniforms(x),x.onBeforeCompile(ft,E),ne=lt.acquireProgram(ft,wt),Ct.set(wt,ne),B.uniforms=ft.uniforms;const Dt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),mh(x,ft),B.needsLights=z0(x),B.lightsStateVersion=_t,B.needsLights&&(Dt.ambientLightColor.value=O.state.ambient,Dt.lightProbe.value=O.state.probe,Dt.directionalLights.value=O.state.directional,Dt.directionalLightShadows.value=O.state.directionalShadow,Dt.spotLights.value=O.state.spot,Dt.spotLightShadows.value=O.state.spotShadow,Dt.rectAreaLights.value=O.state.rectArea,Dt.ltc_1.value=O.state.rectAreaLTC1,Dt.ltc_2.value=O.state.rectAreaLTC2,Dt.pointLights.value=O.state.point,Dt.pointLightShadows.value=O.state.pointShadow,Dt.hemisphereLights.value=O.state.hemi,Dt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Dt.spotLightMatrix.value=O.state.spotLightMatrix,Dt.spotLightMap.value=O.state.spotLightMap,Dt.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=ne,B.uniformsList=null,ne}function ph(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=ao.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function mh(x,N){const Z=y.get(x);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function B0(x,N,Z,B,O){N.isScene!==!0&&(N=ae),F.resetTextureUnits();const dt=N.fog,_t=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ft=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Rs,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=K.get(B.envMap||_t,wt),Kt=B.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ne=!!Z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Dt=!!Z.morphAttributes.position,Ce=!!Z.morphAttributes.normal,je=!!Z.morphAttributes.color;let Ye=Ai;B.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ye=E.toneMapping);const De=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,hn=De!==void 0?De.length:0,Rt=y.get(B),Un=f.state.lights;if(mt===!0&&(xt===!0||x!==W)){const on=x===W&&B.id===X;rt.setState(B,x,on)}let me=!1;B.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Un.state.version||Rt.outputColorSpace!==ft||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==Ct||B.fog===!0&&Rt.fog!==dt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==ne||Rt.morphTargets!==Dt||Rt.morphNormals!==Ce||Rt.morphColors!==je||Rt.toneMapping!==Ye||Rt.morphTargetsCount!==hn)&&(me=!0):(me=!0,Rt.__version=B.version);let $n=Rt.currentProgram;me===!0&&($n=Ta(B,N,O));let hi=!1,wr=!1,Zr=!1;const Fe=$n.getUniforms(),cn=Rt.uniforms;if(Tt.useProgram($n.program)&&(hi=!0,wr=!0,Zr=!0),B.id!==X&&(X=B.id,wr=!0),hi||W!==x){Tt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Fe.setValue(C,"projectionMatrix",x.projectionMatrix),Fe.setValue(C,"viewMatrix",x.matrixWorldInverse);const sr=Fe.map.cameraPosition;sr!==void 0&&sr.setValue(C,se.setFromMatrixPosition(x.matrixWorld)),Ue.logarithmicDepthBuffer&&Fe.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Fe.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),W!==x&&(W=x,wr=!0,Zr=!0)}if(Rt.needsLights&&(Un.state.directionalShadowMap.length>0&&Fe.setValue(C,"directionalShadowMap",Un.state.directionalShadowMap,F),Un.state.spotShadowMap.length>0&&Fe.setValue(C,"spotShadowMap",Un.state.spotShadowMap,F),Un.state.pointShadowMap.length>0&&Fe.setValue(C,"pointShadowMap",Un.state.pointShadowMap,F)),O.isSkinnedMesh){Fe.setOptional(C,O,"bindMatrix"),Fe.setOptional(C,O,"bindMatrixInverse");const on=O.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Fe.setValue(C,"boneTexture",on.boneTexture,F))}O.isBatchedMesh&&(Fe.setOptional(C,O,"batchingTexture"),Fe.setValue(C,"batchingTexture",O._matricesTexture,F),Fe.setOptional(C,O,"batchingIdTexture"),Fe.setValue(C,"batchingIdTexture",O._indirectTexture,F),Fe.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Fe.setValue(C,"batchingColorTexture",O._colorsTexture,F));const rr=Z.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&gt.update(O,Z,$n),(wr||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,Fe.setValue(C,"receiveShadow",O.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=xb()),wr&&(Fe.setValue(C,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights&&V0(cn,Zr),dt&&B.fog===!0&&Lt.refreshFogUniforms(cn,dt),Lt.refreshMaterialUniforms(cn,B,jt,pt,f.state.transmissionRenderTarget[x.id]),ao.upload(C,ph(Rt),cn,F)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ao.upload(C,ph(Rt),cn,F),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Fe.setValue(C,"center",O.center),Fe.setValue(C,"modelViewMatrix",O.modelViewMatrix),Fe.setValue(C,"normalMatrix",O.normalMatrix),Fe.setValue(C,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const on=B.uniformsGroups;for(let sr=0,Xr=on.length;sr<Xr;sr++){const gh=on[sr];vt.update(gh,$n),vt.bind(gh,$n)}}return $n}function V0(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function z0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(x,N,Z){const B=y.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),y.get(x.texture).__webglTexture=N,y.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const Z=y.get(x);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0};const H0=C.createFramebuffer();this.setRenderTarget=function(x,N=0,Z=0){G=x,D=N,H=Z;let B=null,O=!1,dt=!1;if(x){const ft=y.get(x);if(ft.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(C.FRAMEBUFFER,ft.__webglFramebuffer),z.copy(x.viewport),V.copy(x.scissor),it=x.scissorTest,Tt.viewport(z),Tt.scissor(V),Tt.setScissorTest(it),X=-1;return}else if(ft.__webglFramebuffer===void 0)F.setupRenderTarget(x);else if(ft.__hasExternalTextures)F.rebindTextures(x,y.get(x.texture).__webglTexture,y.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Kt=x.depthTexture;if(ft.__boundDepthTexture!==Kt){if(Kt!==null&&y.has(Kt)&&(x.width!==Kt.image.width||x.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(x)}}const wt=x.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(dt=!0);const Ct=y.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?B=Ct[N][Z]:B=Ct[N],O=!0):x.samples>0&&F.useMultisampledRTT(x)===!1?B=y.get(x).__webglMultisampledFramebuffer:Array.isArray(Ct)?B=Ct[Z]:B=Ct,z.copy(x.viewport),V.copy(x.scissor),it=x.scissorTest}else z.copy(J).multiplyScalar(jt).floor(),V.copy(at).multiplyScalar(jt).floor(),it=ot;if(Z!==0&&(B=H0),Tt.bindFramebuffer(C.FRAMEBUFFER,B)&&Tt.drawBuffers(x,B),Tt.viewport(z),Tt.scissor(V),Tt.setScissorTest(it),O){const ft=y.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,Z)}else if(dt){const ft=N;for(let wt=0;wt<x.textures.length;wt++){const Ct=y.get(x.textures[wt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,Z,ft)}}else if(x!==null&&Z!==0){const ft=y.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ft.__webglTexture,Z)}X=-1},this.readRenderTargetPixels=function(x,N,Z,B,O,dt,_t,ft=0){if(!(x&&x.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){Tt.bindFramebuffer(C.FRAMEBUFFER,wt);try{const Ct=x.textures[ft],Kt=Ct.format,ne=Ct.type;if(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),!Ue.textureFormatReadable(Kt)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ne)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-B&&Z>=0&&Z<=x.height-O&&C.readPixels(N,Z,B,O,ct.convert(Kt),ct.convert(ne),dt)}finally{const Ct=G!==null?y.get(G).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(x,N,Z,B,O,dt,_t,ft=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt)if(N>=0&&N<=x.width-B&&Z>=0&&Z<=x.height-O){Tt.bindFramebuffer(C.FRAMEBUFFER,wt);const Ct=x.textures[ft],Kt=Ct.format,ne=Ct.type;if(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),!Ue.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,dt.byteLength,C.STREAM_READ),C.readPixels(N,Z,B,O,ct.convert(Kt),ct.convert(ne),0);const Ce=G!==null?y.get(G).__webglFramebuffer:null;Tt.bindFramebuffer(C.FRAMEBUFFER,Ce);const je=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await X1(C,je,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,dt),C.deleteBuffer(Dt),C.deleteSync(je),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,Z=0){const B=Math.pow(2,-Z),O=Math.floor(x.image.width*B),dt=Math.floor(x.image.height*B),_t=N!==null?N.x:0,ft=N!==null?N.y:0;F.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,_t,ft,O,dt),Tt.unbindTexture()};const k0=C.createFramebuffer(),G0=C.createFramebuffer();this.copyTextureToTexture=function(x,N,Z=null,B=null,O=0,dt=0){let _t,ft,wt,Ct,Kt,ne,Dt,Ce,je;const Ye=x.isCompressedTexture?x.mipmaps[dt]:x.image;if(Z!==null)_t=Z.max.x-Z.min.x,ft=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ct=Z.min.x,Kt=Z.min.y,ne=Z.isBox3?Z.min.z:0;else{const cn=Math.pow(2,-O);_t=Math.floor(Ye.width*cn),ft=Math.floor(Ye.height*cn),x.isDataArrayTexture?wt=Ye.depth:x.isData3DTexture?wt=Math.floor(Ye.depth*cn):wt=1,Ct=0,Kt=0,ne=0}B!==null?(Dt=B.x,Ce=B.y,je=B.z):(Dt=0,Ce=0,je=0);const De=ct.convert(N.format),hn=ct.convert(N.type);let Rt;N.isData3DTexture?(F.setTexture3D(N,0),Rt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(F.setTexture2DArray(N,0),Rt=C.TEXTURE_2D_ARRAY):(F.setTexture2D(N,0),Rt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const Un=C.getParameter(C.UNPACK_ROW_LENGTH),me=C.getParameter(C.UNPACK_IMAGE_HEIGHT),$n=C.getParameter(C.UNPACK_SKIP_PIXELS),hi=C.getParameter(C.UNPACK_SKIP_ROWS),wr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ye.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ne);const Zr=x.isDataArrayTexture||x.isData3DTexture,Fe=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const cn=y.get(x),rr=y.get(N),on=y.get(cn.__renderTarget),sr=y.get(rr.__renderTarget);Tt.bindFramebuffer(C.READ_FRAMEBUFFER,on.__webglFramebuffer),Tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Xr=0;Xr<wt;Xr++)Zr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(x).__webglTexture,O,ne+Xr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(N).__webglTexture,dt,je+Xr)),C.blitFramebuffer(Ct,Kt,_t,ft,Dt,Ce,_t,ft,C.DEPTH_BUFFER_BIT,C.NEAREST);Tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||y.has(x)){const cn=y.get(x),rr=y.get(N);Tt.bindFramebuffer(C.READ_FRAMEBUFFER,k0),Tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,G0);for(let on=0;on<wt;on++)Zr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,cn.__webglTexture,O,ne+on):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,cn.__webglTexture,O),Fe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rr.__webglTexture,dt,je+on):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,rr.__webglTexture,dt),O!==0?C.blitFramebuffer(Ct,Kt,_t,ft,Dt,Ce,_t,ft,C.COLOR_BUFFER_BIT,C.NEAREST):Fe?C.copyTexSubImage3D(Rt,dt,Dt,Ce,je+on,Ct,Kt,_t,ft):C.copyTexSubImage2D(Rt,dt,Dt,Ce,Ct,Kt,_t,ft);Tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Fe?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Rt,dt,Dt,Ce,je,_t,ft,wt,De,hn,Ye.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Rt,dt,Dt,Ce,je,_t,ft,wt,De,Ye.data):C.texSubImage3D(Rt,dt,Dt,Ce,je,_t,ft,wt,De,hn,Ye):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,dt,Dt,Ce,_t,ft,De,hn,Ye.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,dt,Dt,Ce,Ye.width,Ye.height,De,Ye.data):C.texSubImage2D(C.TEXTURE_2D,dt,Dt,Ce,_t,ft,De,hn,Ye);C.pixelStorei(C.UNPACK_ROW_LENGTH,Un),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me),C.pixelStorei(C.UNPACK_SKIP_PIXELS,$n),C.pixelStorei(C.UNPACK_SKIP_ROWS,hi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wr),dt===0&&N.generateMipmaps&&C.generateMipmap(Rt),Tt.unbindTexture()},this.initRenderTarget=function(x){y.get(x).__webglFramebuffer===void 0&&F.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?F.setTextureCube(x,0):x.isData3DTexture?F.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?F.setTexture2DArray(x,0):F.setTexture2D(x,0),Tt.unbindTexture()},this.resetState=function(){D=0,H=0,G=null,Tt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class Mb{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new ye("#ffffff");async initialize(t){this.canvas=t,this.renderer=new bb({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new lv,this.camera=new Fu(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Sa(1,1);this.geometryCache.set("plane",e),this.updateThemeColors(),this.themeObserver=new MutationObserver(i=>{for(let r=0;r<i.length;r++)if(i[r].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize()}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new ye(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=0,this.camera.bottom=this.height,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Ao({color:16777215,transparent:!0,depthWrite:!1,side:si});e=new ci(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Ao({transparent:!0,depthWrite:!1,side:si});e=new ci(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function Zt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(h){try{c(i.next(h))}catch(p){a(p)}}function l(h){try{c(i.throw(h))}catch(p){a(p)}}function c(h){h.done?s(h.value):r(h.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Sd(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qt(n){return this instanceof Qt?(this.v=n,this):new Qt(n)}function Mi(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(v){return Promise.resolve(v).then(_,p)}}function o(_,v){i[_]&&(r[_]=function(M){return new Promise(function(g,m){s.push([_,M,g,m])>1||l(_,M)})},v&&(r[_]=v(r[_])))}function l(_,v){try{c(i[_](v))}catch(M){d(s[0][3],M)}}function c(_){_.value instanceof Qt?Promise.resolve(_.value.v).then(h,p):d(s[0][2],_)}function h(_){l("next",_)}function p(_){l("throw",_)}function d(_,v){_(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function oo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:Qt(n[r](a)),done:!1}:s?s(a):a}:s}}function zr(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Sd=="function"?Sd(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const Eb=new TextDecoder("utf-8"),ou=n=>Eb.decode(n),Ab=new TextEncoder,Nu=n=>Ab.encode(n),wb=n=>typeof n=="number",Pf=n=>typeof n=="boolean",nn=n=>typeof n=="function",Fn=n=>n!=null&&Object(n)===n,kr=n=>Fn(n)&&nn(n.then),xa=n=>Fn(n)&&nn(n[Symbol.iterator]),Bs=n=>Fn(n)&&nn(n[Symbol.asyncIterator]),lu=n=>Fn(n)&&Fn(n.schema),Ff=n=>Fn(n)&&"done"in n&&"value"in n,Nf=n=>Fn(n)&&nn(n.stat)&&wb(n.fd),Uf=n=>Fn(n)&&Uu(n.body),ll=n=>"_getDOMStream"in n&&"_getNodeStream"in n,Tb=n=>Fn(n)&&nn(n.abort)&&nn(n.getWriter)&&!ll(n),Uu=n=>Fn(n)&&nn(n.cancel)&&nn(n.getReader)&&!ll(n),Rb=n=>Fn(n)&&nn(n.end)&&nn(n.write)&&Pf(n.writable)&&!ll(n),Of=n=>Fn(n)&&nn(n.read)&&nn(n.pipe)&&Pf(n.readable)&&!ll(n),Ib=n=>Fn(n)&&nn(n.clear)&&nn(n.bytes)&&nn(n.position)&&nn(n.setPosition)&&nn(n.capacity)&&nn(n.getBufferIdentifier)&&nn(n.createLong),Ou=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function Cb(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,h=n.length;++l<h;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function xd(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Ci(n,t){const e=Cb(n),i=e.reduce((h,p)=>h+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const h=e.length;++l<h;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?xd(a,s,o):a=s;break}xd(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Te(n,t){let e=Ff(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=Nu(e)),e instanceof ArrayBuffer?new n(e):e instanceof Ou?new n(e):Ib(e)?Te(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const js=n=>Te(Int32Array,n),bd=n=>Te(BigInt64Array,n),oe=n=>Te(Uint8Array,n),cu=n=>(n.next(),n);function*Db(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof Ou?e(t):xa(t)?t:e(t);return yield*cu((function*(r){let s=null;do s=r.next(yield Te(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const Lb=n=>Db(Uint8Array,n);function Bf(n,t){return Mi(this,arguments,function*(){if(kr(t))return yield Qt(yield Qt(yield*oo(zr(Bf(n,yield Qt(t))))));const i=function(a){return Mi(this,arguments,function*(){yield yield Qt(yield Qt(a))})},r=function(a){return Mi(this,arguments,function*(){yield Qt(yield*oo(zr(cu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof Ou?i(t):xa(t)?r(t):Bs(t)?t:i(t);return yield Qt(yield*oo(zr(cu((function(a){return Mi(this,arguments,function*(){let o=null;do o=yield Qt(a.next(yield yield Qt(Te(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield Qt(new n)})}const Pb=n=>Bf(Uint8Array,n);function Vf(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function Fb(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const Xn={fromIterable(n){return Qa(Nb(n))},fromAsyncIterable(n){return Qa(Ub(n))},fromDOMStream(n){return Qa(Ob(n))},fromNodeStream(n){return Qa(Vb(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},Qa=n=>(n.next(),n);function*Nb(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Ci(i,a)[0]:([r,i,o]=Ci(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=Lb(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(h){(e=!0)&&typeof c.throw=="function"&&c.throw(h)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function Ub(n){return Mi(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Ci(r,o)[0]:([s,r,l]=Ci(r,o),s)}({cmd:a,size:o}=(yield yield Qt(null))||{cmd:"read",size:0});const h=Pb(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield Qt(h.next()):yield Qt(h.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield Qt(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof h.throw=="function"&&(yield Qt(h.throw(p)))}finally{i===!1&&typeof h.return=="function"&&(yield Qt(h.return(new Uint8Array(0))))}return yield Qt(null)})}function Ob(n){return Mi(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Ci(r,o)[0]:([s,r,l]=Ci(r,o),s)}({cmd:a,size:o}=(yield yield Qt(null))||{cmd:"read",size:0});const h=new Bb(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield Qt(h.read()):yield Qt(h.read(o-l)),!e&&s.byteLength>0&&(r.push(oe(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield Qt(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield Qt(h.cancel(p)))}finally{i===!1?yield Qt(h.cancel()):n.locked&&h.releaseLock()}return yield Qt(null)})}class Bb{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Zt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Zt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=oe(e)),e})}}const $l=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function Vb(n){return Mi(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],h;function p(){return a==="peek"?Ci(c,o)[0]:([h,c,l]=Ci(c,o),h)}if({cmd:a,size:o}=(yield yield Qt(null))||{cmd:"read",size:0},n.isTTY)return yield yield Qt(new Uint8Array(0)),yield Qt(null);try{e[0]=$l(n,"end"),e[1]=$l(n,"error");do{if(e[2]=$l(n,"readable"),[i,s]=yield Qt(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(h=oe(n.read(o-l)),h.byteLength<o-l&&(h=oe(n.read()))):h=oe(n.read()),h.byteLength>0&&(c.push(h),l+=h.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield Qt(p()));while(o<l)}while(!r)}finally{yield Qt(d(e,i==="error"?s:null))}return yield Qt(null);function d(_,v){return h=c=null,new Promise((M,g)=>{for(const[m,b]of _)n.off(m,b);try{const m=n.destroy;m&&m.call(n,v),v=void 0}catch(m){v=m||v}finally{v!=null?g(v):M()}})}})}var Je;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(Je||(Je={}));var gn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(gn||(gn={}));var mn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(mn||(mn={}));var Jn;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(Jn||(Jn={}));var Ot;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Ot||(Ot={}));var Di;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Di||(Di={}));const tc=2,vi=4,Wi=4,be=4,mr=new Int32Array(2),Md=new Float32Array(mr.buffer),Ed=new Float64Array(mr.buffer),$a=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var uu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(uu||(uu={}));let Cs=class zf{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new zf(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return mr[0]=this.readInt32(t),Md[0]}readFloat64(t){return mr[$a?0:1]=this.readInt32(t),mr[$a?1:0]=this.readInt32(t+4),Ed[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Md[0]=e,this.writeInt32(t,mr[0])}writeFloat64(t,e){Ed[0]=e,this.writeInt32(t,mr[$a?0:1]),this.writeInt32(t+4,mr[$a?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+vi+Wi)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<Wi;e++)t+=String.fromCharCode(this.readInt8(this.position_+vi+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=vi;const r=this.bytes_.subarray(t,t+i);return e===uu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+vi}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=Wi)throw new Error("FlatBuffers: file identifier must be length "+Wi);for(let e=0;e<Wi;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+vi+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},Hf=class kf{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Cs.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=kf.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Cs.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(vi,0),this.writeInt32(this.offset()-t+vi)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*tc;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=tc;c<s;c+=tc)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?be:0;if(e){const s=e;if(this.prep(this.minalign,vi+Wi+r),s.length!=Wi)throw new TypeError("FlatBuffers: file identifier must be length "+Wi);for(let a=Wi-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,vi+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(vi,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var wo;(function(n){n[n.BUFFER=0]="BUFFER"})(wo||(wo={}));var To;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(To||(To={}));class gr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new gr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+be),(e||new gr).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):To.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):wo.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,To.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,wo.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return gr.startBodyCompression(t),gr.addCodec(t,e),gr.addMethod(t,i),gr.endBodyCompression(t)}}class Gf{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let Wf=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},Hi=class hu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new hu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+be),(e||new hu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Wf).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Gf).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new gr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},ls=class du{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new du).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+be),(e||new du).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Hi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Ds;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Ds||(Ds={}));var Ro;(function(n){n[n.DenseArray=0]="DenseArray"})(Ro||(Ro={}));class zn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new zn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+be),(e||new zn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return zn.startInt(t),zn.addBitWidth(t,e),zn.addIsSigned(t,i),zn.endInt(t)}}class Zi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new Zi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+be),(e||new Zi).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new zn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Ro.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Ro.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class rn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new rn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+be),(e||new rn).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return rn.startKeyValue(t),rn.addKey(t,e),rn.addValue(t,i),rn.endKeyValue(t)}}let Ad=class $s{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new $s).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+be),(e||new $s).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return $s.startBinary(t),$s.endBinary(t)}},wd=class ta{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new ta).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+be),(e||new ta).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return ta.startBool(t),ta.endBool(t)}},lo=class cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+be),(e||new cs).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Jn.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Jn.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return cs.startDate(t),cs.addUnit(t,e),cs.endDate(t)}},us=class pr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new pr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+be),(e||new pr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return pr.startDecimal(t),pr.addPrecision(t,e),pr.addScale(t,i),pr.addBitWidth(t,r),pr.endDecimal(t)}},co=class hs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new hs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+be),(e||new hs).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ot.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Ot.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return hs.startDuration(t),hs.addUnit(t,e),hs.endDuration(t)}},uo=class ds{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new ds).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+be),(e||new ds).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return ds.startFixedSizeBinary(t),ds.addByteWidth(t,e),ds.endFixedSizeBinary(t)}},ho=class fs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new fs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+be),(e||new fs).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return fs.startFixedSizeList(t),fs.addListSize(t,e),fs.endFixedSizeList(t)}};class yi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new yi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+be),(e||new yi).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):mn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,mn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return yi.startFloatingPoint(t),yi.addPrecision(t,e),yi.endFloatingPoint(t)}}class Si{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Si).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+be),(e||new Si).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Di.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Di.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Si.startInterval(t),Si.addUnit(t,e),Si.endInterval(t)}}let Td=class ea{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new ea).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+be),(e||new ea).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return ea.startLargeBinary(t),ea.endLargeBinary(t)}},Rd=class na{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new na).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+be),(e||new na).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return na.startLargeUtf8(t),na.endLargeUtf8(t)}},Id=class ia{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new ia).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+be),(e||new ia).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return ia.startList(t),ia.endList(t)}},fo=class ps{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new ps).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+be),(e||new ps).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return ps.startMap(t),ps.addKeysSorted(t,e),ps.endMap(t)}},Cd=class ra{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new ra).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+be),(e||new ra).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return ra.startNull(t),ra.endNull(t)}};class Vr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new Vr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+be),(e||new Vr).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return Vr.startStruct_(t),Vr.endStruct_(t)}}class Yn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+be),(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ot.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Ot.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return Yn.startTime(t),Yn.addUnit(t,e),Yn.addBitWidth(t,i),Yn.endTime(t)}}class qn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+be),(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ot.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Ot.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return qn.startTimestamp(t),qn.addUnit(t,e),qn.addTimezone(t,i),qn.endTimestamp(t)}}class Dn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Dn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+be),(e||new Dn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):gn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,gn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Dn.startUnion(t),Dn.addMode(t,e),Dn.addTypeIds(t,i),Dn.endUnion(t)}}let Dd=class sa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new sa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+be),(e||new sa).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return sa.startUtf8(t),sa.endUtf8(t)}};var Be;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Be||(Be={}));let Wn=class po{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new po).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+be),(e||new po).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Be.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new Zi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new po).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new rn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Be.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},mi=class zi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new zi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+be),(e||new zi).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ds.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Wn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new rn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Ds.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return zi.startSchema(t),zi.addEndianness(t,e),zi.addFields(t,i),zi.addCustomMetadata(t,r),zi.addFeatures(t,s),zi.endSchema(t)}};var _e;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(_e||(_e={}));var R;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(R||(R={}));var ki;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(ki||(ki={}));const zb=void 0;function ha(n){if(n===null)return"null";if(n===zb)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>ha(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function Ne(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Zf(n,t){return Ne(n/t)+Ne(n%t)/Ne(t)}const Hb=Symbol.for("isArrowBigNum");function ui(n,...t){return t.length===0?Object.setPrototypeOf(Te(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}ui.prototype[Hb]=!0;ui.prototype.toJSON=function(){return`"${fa(this)}"`};ui.prototype.valueOf=function(n){return Xf(this,n)};ui.prototype.toString=function(){return fa(this)};ui.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return Xf(this);case"string":return fa(this);case"default":return Wb(this)}return fa(this)};function xs(...n){return ui.apply(this,n)}function bs(...n){return ui.apply(this,n)}function da(...n){return ui.apply(this,n)}Object.setPrototypeOf(xs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(bs.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(da.prototype,Object.create(Uint32Array.prototype));Object.assign(xs.prototype,ui.prototype,{constructor:xs,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(bs.prototype,ui.prototype,{constructor:bs,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(da.prototype,ui.prototype,{constructor:da,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const kb=BigInt(4294967296)*BigInt(4294967296),Gb=kb-BigInt(1);function Xf(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const h of a)l|=(h^Gb)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const h of a)l|=h*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const h=BigInt(Math.pow(10,t)),p=l/h,d=l%h;return Ne(p)+Ne(d)/Ne(h)}return Ne(l)}function fa(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return ec(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return ec(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${ec(t)}`}function Wb(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:fa(n)}function ec(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class Bu{static new(t,e){switch(e){case!0:return new xs(t);case!1:return new bs(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new xs(t)}return t.byteLength===16?new da(t):new bs(t)}static signed(t){return new xs(t)}static unsigned(t){return new bs(t)}static decimal(t){return new da(t)}constructor(t,e){return Bu.new(t,e)}}var Yf,qf,jf,Kf,Jf,Qf,$f,tp,ep,np,ip,rp,sp,ap,op,lp,cp,up,hp,dp,fp,pp;class It{static isNull(t){return t?.typeId===R.Null}static isInt(t){return t?.typeId===R.Int}static isFloat(t){return t?.typeId===R.Float}static isBinary(t){return t?.typeId===R.Binary}static isLargeBinary(t){return t?.typeId===R.LargeBinary}static isUtf8(t){return t?.typeId===R.Utf8}static isLargeUtf8(t){return t?.typeId===R.LargeUtf8}static isBool(t){return t?.typeId===R.Bool}static isDecimal(t){return t?.typeId===R.Decimal}static isDate(t){return t?.typeId===R.Date}static isTime(t){return t?.typeId===R.Time}static isTimestamp(t){return t?.typeId===R.Timestamp}static isInterval(t){return t?.typeId===R.Interval}static isDuration(t){return t?.typeId===R.Duration}static isList(t){return t?.typeId===R.List}static isStruct(t){return t?.typeId===R.Struct}static isUnion(t){return t?.typeId===R.Union}static isFixedSizeBinary(t){return t?.typeId===R.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===R.FixedSizeList}static isMap(t){return t?.typeId===R.Map}static isDictionary(t){return t?.typeId===R.Dictionary}static isDenseUnion(t){return It.isUnion(t)&&t.mode===gn.Dense}static isSparseUnion(t){return It.isUnion(t)&&t.mode===gn.Sparse}constructor(t){this.typeId=t}}Yf=Symbol.toStringTag;It[Yf]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(It.prototype);class Sr extends It{constructor(){super(R.Null)}toString(){return"Null"}}qf=Symbol.toStringTag;Sr[qf]=(n=>n[Symbol.toStringTag]="Null")(Sr.prototype);class Gr extends It{constructor(t,e){super(R.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}jf=Symbol.toStringTag;Gr[jf]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(Gr.prototype);class pa extends Gr{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(pa.prototype,"ArrayType",{value:Int32Array});class Io extends It{constructor(t){super(R.Float),this.precision=t}get ArrayType(){switch(this.precision){case mn.HALF:return Uint16Array;case mn.SINGLE:return Float32Array;case mn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Kf=Symbol.toStringTag;Io[Kf]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Io.prototype);class Co extends It{constructor(){super(R.Binary)}toString(){return"Binary"}}Jf=Symbol.toStringTag;Co[Jf]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(Co.prototype);class Do extends It{constructor(){super(R.LargeBinary)}toString(){return"LargeBinary"}}Qf=Symbol.toStringTag;Do[Qf]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(Do.prototype);class Lo extends It{constructor(){super(R.Utf8)}toString(){return"Utf8"}}$f=Symbol.toStringTag;Lo[$f]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(Lo.prototype);class Po extends It{constructor(){super(R.LargeUtf8)}toString(){return"LargeUtf8"}}tp=Symbol.toStringTag;Po[tp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(Po.prototype);class Fo extends It{constructor(){super(R.Bool)}toString(){return"Bool"}}ep=Symbol.toStringTag;Fo[ep]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(Fo.prototype);class No extends It{constructor(t,e,i=128){super(R.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}np=Symbol.toStringTag;No[np]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(No.prototype);class Uo extends It{constructor(t){super(R.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${Jn[this.unit]}>`}get ArrayType(){return this.unit===Jn.DAY?Int32Array:BigInt64Array}}ip=Symbol.toStringTag;Uo[ip]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(Uo.prototype);class Oo extends It{constructor(t,e){super(R.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Ot[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}rp=Symbol.toStringTag;Oo[rp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(Oo.prototype);class Bo extends It{constructor(t,e){super(R.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Ot[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}sp=Symbol.toStringTag;Bo[sp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(Bo.prototype);class Vo extends It{constructor(t){super(R.Interval),this.unit=t}toString(){return`Interval<${Di[this.unit]}>`}}ap=Symbol.toStringTag;Vo[ap]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(Vo.prototype);class zo extends It{constructor(t){super(R.Duration),this.unit=t}toString(){return`Duration<${Ot[this.unit]}>`}}op=Symbol.toStringTag;zo[op]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(zo.prototype);class Ho extends It{constructor(t){super(R.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}lp=Symbol.toStringTag;Ho[lp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(Ho.prototype);class Sn extends It{constructor(t){super(R.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}cp=Symbol.toStringTag;Sn[cp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Sn.prototype);class ko extends It{constructor(t,e,i){super(R.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}up=Symbol.toStringTag;ko[up]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(ko.prototype);class Go extends It{constructor(t){super(R.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}hp=Symbol.toStringTag;Go[hp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(Go.prototype);class Wo extends It{constructor(t,e){super(R.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}dp=Symbol.toStringTag;Wo[dp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(Wo.prototype);class Zo extends It{constructor(t,e=!1){var i,r,s;if(super(R.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}fp=Symbol.toStringTag;Zo[fp]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(Zo.prototype);const Zb=(n=>()=>++n)(-1);class Ls extends It{constructor(t,e,i,r){super(R.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?Zb():Ne(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}pp=Symbol.toStringTag;Ls[pp]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Ls.prototype);function Gi(n){const t=n;switch(n.typeId){case R.Decimal:return n.bitWidth/32;case R.Interval:return 1+t.unit;case R.FixedSizeList:return t.listSize;case R.FixedSizeBinary:return t.byteWidth;default:return 1}}class ie{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return Xb(this,t,e)}getVisitFnByTypeId(t,e=!0){return ms(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function Xb(n,t,e=!0){return typeof t=="number"?ms(n,t,e):typeof t=="string"&&t in R?ms(n,R[t],e):t&&t instanceof It?ms(n,Ld(t),e):t?.type&&t.type instanceof It?ms(n,Ld(t.type),e):ms(n,R.NONE,e)}function ms(n,t,e=!0){let i=null;switch(t){case R.Null:i=n.visitNull;break;case R.Bool:i=n.visitBool;break;case R.Int:i=n.visitInt;break;case R.Int8:i=n.visitInt8||n.visitInt;break;case R.Int16:i=n.visitInt16||n.visitInt;break;case R.Int32:i=n.visitInt32||n.visitInt;break;case R.Int64:i=n.visitInt64||n.visitInt;break;case R.Uint8:i=n.visitUint8||n.visitInt;break;case R.Uint16:i=n.visitUint16||n.visitInt;break;case R.Uint32:i=n.visitUint32||n.visitInt;break;case R.Uint64:i=n.visitUint64||n.visitInt;break;case R.Float:i=n.visitFloat;break;case R.Float16:i=n.visitFloat16||n.visitFloat;break;case R.Float32:i=n.visitFloat32||n.visitFloat;break;case R.Float64:i=n.visitFloat64||n.visitFloat;break;case R.Utf8:i=n.visitUtf8;break;case R.LargeUtf8:i=n.visitLargeUtf8;break;case R.Binary:i=n.visitBinary;break;case R.LargeBinary:i=n.visitLargeBinary;break;case R.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case R.Date:i=n.visitDate;break;case R.DateDay:i=n.visitDateDay||n.visitDate;break;case R.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case R.Timestamp:i=n.visitTimestamp;break;case R.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case R.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case R.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case R.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case R.Time:i=n.visitTime;break;case R.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case R.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case R.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case R.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case R.Decimal:i=n.visitDecimal;break;case R.List:i=n.visitList;break;case R.Struct:i=n.visitStruct;break;case R.Union:i=n.visitUnion;break;case R.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case R.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case R.Dictionary:i=n.visitDictionary;break;case R.Interval:i=n.visitInterval;break;case R.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case R.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case R.Duration:i=n.visitDuration;break;case R.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case R.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case R.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case R.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case R.FixedSizeList:i=n.visitFixedSizeList;break;case R.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${R[t]}'`)}function Ld(n){switch(n.typeId){case R.Null:return R.Null;case R.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?R.Int8:R.Uint8;case 16:return e?R.Int16:R.Uint16;case 32:return e?R.Int32:R.Uint32;case 64:return e?R.Int64:R.Uint64}return R.Int}case R.Float:switch(n.precision){case mn.HALF:return R.Float16;case mn.SINGLE:return R.Float32;case mn.DOUBLE:return R.Float64}return R.Float;case R.Binary:return R.Binary;case R.LargeBinary:return R.LargeBinary;case R.Utf8:return R.Utf8;case R.LargeUtf8:return R.LargeUtf8;case R.Bool:return R.Bool;case R.Decimal:return R.Decimal;case R.Time:switch(n.unit){case Ot.SECOND:return R.TimeSecond;case Ot.MILLISECOND:return R.TimeMillisecond;case Ot.MICROSECOND:return R.TimeMicrosecond;case Ot.NANOSECOND:return R.TimeNanosecond}return R.Time;case R.Timestamp:switch(n.unit){case Ot.SECOND:return R.TimestampSecond;case Ot.MILLISECOND:return R.TimestampMillisecond;case Ot.MICROSECOND:return R.TimestampMicrosecond;case Ot.NANOSECOND:return R.TimestampNanosecond}return R.Timestamp;case R.Date:switch(n.unit){case Jn.DAY:return R.DateDay;case Jn.MILLISECOND:return R.DateMillisecond}return R.Date;case R.Interval:switch(n.unit){case Di.DAY_TIME:return R.IntervalDayTime;case Di.YEAR_MONTH:return R.IntervalYearMonth}return R.Interval;case R.Duration:switch(n.unit){case Ot.SECOND:return R.DurationSecond;case Ot.MILLISECOND:return R.DurationMillisecond;case Ot.MICROSECOND:return R.DurationMicrosecond;case Ot.NANOSECOND:return R.DurationNanosecond}return R.Duration;case R.Map:return R.Map;case R.List:return R.List;case R.Struct:return R.Struct;case R.Union:switch(n.mode){case gn.Dense:return R.DenseUnion;case gn.Sparse:return R.SparseUnion}return R.Union;case R.FixedSizeBinary:return R.FixedSizeBinary;case R.FixedSizeList:return R.FixedSizeList;case R.Dictionary:return R.Dictionary}throw new Error(`Unrecognized type '${R[n.typeId]}'`)}ie.prototype.visitInt8=null;ie.prototype.visitInt16=null;ie.prototype.visitInt32=null;ie.prototype.visitInt64=null;ie.prototype.visitUint8=null;ie.prototype.visitUint16=null;ie.prototype.visitUint32=null;ie.prototype.visitUint64=null;ie.prototype.visitFloat16=null;ie.prototype.visitFloat32=null;ie.prototype.visitFloat64=null;ie.prototype.visitDateDay=null;ie.prototype.visitDateMillisecond=null;ie.prototype.visitTimestampSecond=null;ie.prototype.visitTimestampMillisecond=null;ie.prototype.visitTimestampMicrosecond=null;ie.prototype.visitTimestampNanosecond=null;ie.prototype.visitTimeSecond=null;ie.prototype.visitTimeMillisecond=null;ie.prototype.visitTimeMicrosecond=null;ie.prototype.visitTimeNanosecond=null;ie.prototype.visitDenseUnion=null;ie.prototype.visitSparseUnion=null;ie.prototype.visitIntervalDayTime=null;ie.prototype.visitIntervalYearMonth=null;ie.prototype.visitDuration=null;ie.prototype.visitDurationSecond=null;ie.prototype.visitDurationMillisecond=null;ie.prototype.visitDurationMicrosecond=null;ie.prototype.visitDurationNanosecond=null;const mp=new Float64Array(1),os=new Uint32Array(mp.buffer);function gp(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function Yb(n){if(n!==n)return 32256;mp[0]=n;const t=(os[1]&2147483648)>>16&65535;let e=os[1]&2146435072,i=0;return e>=1089470464?os[0]>0?e=31744:(e=(e&2080374784)>>16,i=(os[1]&1048575)>>10):e<=1056964608?(i=1048576+(os[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(os[1]&1048575)+512>>10),t|e|i&65535}class Bt extends ie{}function Ht(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const qb=(n,t,e)=>{n[t]=Math.floor(e/864e5)},_p=(n,t,e,i)=>{if(e+1<t.length){const r=Ne(t[e]),s=Ne(t[e+1]);n.set(i.subarray(0,s-r),r)}},jb=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},er=({values:n},t,e)=>{n[t]=e},Vu=({values:n},t,e)=>{n[t]=e},vp=({values:n},t,e)=>{n[t]=Yb(e)},Kb=(n,t,e)=>{switch(n.type.precision){case mn.HALF:return vp(n,t,e);case mn.SINGLE:case mn.DOUBLE:return Vu(n,t,e)}},yp=({values:n},t,e)=>{qb(n,t,e.valueOf())},Sp=({values:n},t,e)=>{n[t]=BigInt(e)},Jb=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},xp=({values:n,valueOffsets:t},e,i)=>_p(n,t,e,i),bp=({values:n,valueOffsets:t},e,i)=>_p(n,t,e,Nu(i)),Qb=(n,t,e)=>{n.type.unit===Jn.DAY?yp(n,t,e):Sp(n,t,e)},Mp=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},Ep=({values:n},t,e)=>{n[t]=BigInt(e)},Ap=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},wp=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},$b=(n,t,e)=>{switch(n.type.unit){case Ot.SECOND:return Mp(n,t,e);case Ot.MILLISECOND:return Ep(n,t,e);case Ot.MICROSECOND:return Ap(n,t,e);case Ot.NANOSECOND:return wp(n,t,e)}},Tp=({values:n},t,e)=>{n[t]=e},Rp=({values:n},t,e)=>{n[t]=e},Ip=({values:n},t,e)=>{n[t]=e},Cp=({values:n},t,e)=>{n[t]=e},tM=(n,t,e)=>{switch(n.type.unit){case Ot.SECOND:return Tp(n,t,e);case Ot.MILLISECOND:return Rp(n,t,e);case Ot.MICROSECOND:return Ip(n,t,e);case Ot.NANOSECOND:return Cp(n,t,e)}},eM=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},nM=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=Qn.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},iM=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=Qn.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},rM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),sM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),aM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),oM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),lM=(n,t,e)=>{const i=n.type.children.map(s=>Qn.getVisitFn(s.type)),r=e instanceof Map?aM(t,e):e instanceof Se?sM(t,e):Array.isArray(e)?rM(t,e):oM(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},cM=(n,t,e)=>{n.type.mode===gn.Dense?Dp(n,t,e):Lp(n,t,e)},Dp=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];Qn.visit(r,n.valueOffsets[t],e)},Lp=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];Qn.visit(r,t,e)},uM=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},hM=(n,t,e)=>{n.type.unit===Di.DAY_TIME?Pp(n,t,e):Fp(n,t,e)},Pp=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},Fp=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},Np=({values:n},t,e)=>{n[t]=e},Up=({values:n},t,e)=>{n[t]=e},Op=({values:n},t,e)=>{n[t]=e},Bp=({values:n},t,e)=>{n[t]=e},dM=(n,t,e)=>{switch(n.type.unit){case Ot.SECOND:return Np(n,t,e);case Ot.MILLISECOND:return Up(n,t,e);case Ot.MICROSECOND:return Op(n,t,e);case Ot.NANOSECOND:return Bp(n,t,e)}},fM=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=Qn.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Bt.prototype.visitBool=Ht(jb);Bt.prototype.visitInt=Ht(er);Bt.prototype.visitInt8=Ht(er);Bt.prototype.visitInt16=Ht(er);Bt.prototype.visitInt32=Ht(er);Bt.prototype.visitInt64=Ht(er);Bt.prototype.visitUint8=Ht(er);Bt.prototype.visitUint16=Ht(er);Bt.prototype.visitUint32=Ht(er);Bt.prototype.visitUint64=Ht(er);Bt.prototype.visitFloat=Ht(Kb);Bt.prototype.visitFloat16=Ht(vp);Bt.prototype.visitFloat32=Ht(Vu);Bt.prototype.visitFloat64=Ht(Vu);Bt.prototype.visitUtf8=Ht(bp);Bt.prototype.visitLargeUtf8=Ht(bp);Bt.prototype.visitBinary=Ht(xp);Bt.prototype.visitLargeBinary=Ht(xp);Bt.prototype.visitFixedSizeBinary=Ht(Jb);Bt.prototype.visitDate=Ht(Qb);Bt.prototype.visitDateDay=Ht(yp);Bt.prototype.visitDateMillisecond=Ht(Sp);Bt.prototype.visitTimestamp=Ht($b);Bt.prototype.visitTimestampSecond=Ht(Mp);Bt.prototype.visitTimestampMillisecond=Ht(Ep);Bt.prototype.visitTimestampMicrosecond=Ht(Ap);Bt.prototype.visitTimestampNanosecond=Ht(wp);Bt.prototype.visitTime=Ht(tM);Bt.prototype.visitTimeSecond=Ht(Tp);Bt.prototype.visitTimeMillisecond=Ht(Rp);Bt.prototype.visitTimeMicrosecond=Ht(Ip);Bt.prototype.visitTimeNanosecond=Ht(Cp);Bt.prototype.visitDecimal=Ht(eM);Bt.prototype.visitList=Ht(nM);Bt.prototype.visitStruct=Ht(lM);Bt.prototype.visitUnion=Ht(cM);Bt.prototype.visitDenseUnion=Ht(Dp);Bt.prototype.visitSparseUnion=Ht(Lp);Bt.prototype.visitDictionary=Ht(uM);Bt.prototype.visitInterval=Ht(hM);Bt.prototype.visitIntervalDayTime=Ht(Pp);Bt.prototype.visitIntervalYearMonth=Ht(Fp);Bt.prototype.visitDuration=Ht(dM);Bt.prototype.visitDurationSecond=Ht(Np);Bt.prototype.visitDurationMillisecond=Ht(Up);Bt.prototype.visitDurationMicrosecond=Ht(Op);Bt.prototype.visitDurationNanosecond=Ht(Bp);Bt.prototype.visitFixedSizeList=Ht(fM);Bt.prototype.visitMap=Ht(iM);const Qn=new Bt,ii=Symbol.for("parent"),Ms=Symbol.for("rowIndex");class zu{constructor(t,e){return this[ii]=t,this[Ms]=e,new Proxy(this,new mM)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ms],e=this[ii],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=Nn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${ha(t)}: ${ha(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new pM(this[ii],this[Ms])}}class pM{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,Nn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(zu.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[ii]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Ms]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class mM{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[ii].type.children.map(e=>e.name)}has(t,e){return t[ii].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[ii].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[ii].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=Nn.visit(t[ii].children[i],t[Ms]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[ii].type.children.findIndex(s=>s.name===e);return r!==-1?(Qn.visit(t[ii].children[r],t[Ms],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Pt extends ie{}function Vt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const gM=(n,t)=>864e5*n[t],_M=(n,t)=>null,Vp=(n,t,e)=>{if(e+1>=t.length)return null;const i=Ne(t[e]),r=Ne(t[e+1]);return n.subarray(i,r)},vM=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},zp=({values:n},t)=>gM(n,t),Hp=({values:n},t)=>Ne(n[t]),Er=({stride:n,values:t},e)=>t[n*e],yM=({stride:n,values:t},e)=>gp(t[n*e]),kp=({values:n},t)=>n[t],SM=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),Gp=({values:n,valueOffsets:t},e)=>Vp(n,t,e),Wp=({values:n,valueOffsets:t},e)=>{const i=Vp(n,t,e);return i!==null?ou(i):null},xM=({values:n},t)=>n[t],bM=({type:n,values:t},e)=>n.precision!==mn.HALF?t[e]:gp(t[e]),MM=(n,t)=>n.type.unit===Jn.DAY?zp(n,t):Hp(n,t),Zp=({values:n},t)=>1e3*Ne(n[t]),Xp=({values:n},t)=>Ne(n[t]),Yp=({values:n},t)=>Zf(n[t],BigInt(1e3)),qp=({values:n},t)=>Zf(n[t],BigInt(1e6)),EM=(n,t)=>{switch(n.type.unit){case Ot.SECOND:return Zp(n,t);case Ot.MILLISECOND:return Xp(n,t);case Ot.MICROSECOND:return Yp(n,t);case Ot.NANOSECOND:return qp(n,t)}},jp=({values:n},t)=>n[t],Kp=({values:n},t)=>n[t],Jp=({values:n},t)=>n[t],Qp=({values:n},t)=>n[t],AM=(n,t)=>{switch(n.type.unit){case Ot.SECOND:return jp(n,t);case Ot.MILLISECOND:return Kp(n,t);case Ot.MICROSECOND:return Jp(n,t);case Ot.NANOSECOND:return Qp(n,t)}},wM=({values:n,stride:t},e)=>Bu.decimal(n.subarray(t*e,t*(e+1))),TM=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new Se([l])},RM=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new Hu(a.slice(r,s-r))},IM=(n,t)=>new zu(n,t),CM=(n,t)=>n.type.mode===gn.Dense?$p(n,t):t0(n,t),$p=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Nn.visit(i,n.valueOffsets[t])},t0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Nn.visit(i,t)},DM=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},LM=(n,t)=>n.type.unit===Di.DAY_TIME?e0(n,t):n0(n,t),e0=({values:n},t)=>n.subarray(2*t,2*(t+1)),n0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},i0=({values:n},t)=>n[t],r0=({values:n},t)=>n[t],s0=({values:n},t)=>n[t],a0=({values:n},t)=>n[t],PM=(n,t)=>{switch(n.type.unit){case Ot.SECOND:return i0(n,t);case Ot.MILLISECOND:return r0(n,t);case Ot.MICROSECOND:return s0(n,t);case Ot.NANOSECOND:return a0(n,t)}},FM=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new Se([s])};Pt.prototype.visitNull=Vt(_M);Pt.prototype.visitBool=Vt(vM);Pt.prototype.visitInt=Vt(xM);Pt.prototype.visitInt8=Vt(Er);Pt.prototype.visitInt16=Vt(Er);Pt.prototype.visitInt32=Vt(Er);Pt.prototype.visitInt64=Vt(kp);Pt.prototype.visitUint8=Vt(Er);Pt.prototype.visitUint16=Vt(Er);Pt.prototype.visitUint32=Vt(Er);Pt.prototype.visitUint64=Vt(kp);Pt.prototype.visitFloat=Vt(bM);Pt.prototype.visitFloat16=Vt(yM);Pt.prototype.visitFloat32=Vt(Er);Pt.prototype.visitFloat64=Vt(Er);Pt.prototype.visitUtf8=Vt(Wp);Pt.prototype.visitLargeUtf8=Vt(Wp);Pt.prototype.visitBinary=Vt(Gp);Pt.prototype.visitLargeBinary=Vt(Gp);Pt.prototype.visitFixedSizeBinary=Vt(SM);Pt.prototype.visitDate=Vt(MM);Pt.prototype.visitDateDay=Vt(zp);Pt.prototype.visitDateMillisecond=Vt(Hp);Pt.prototype.visitTimestamp=Vt(EM);Pt.prototype.visitTimestampSecond=Vt(Zp);Pt.prototype.visitTimestampMillisecond=Vt(Xp);Pt.prototype.visitTimestampMicrosecond=Vt(Yp);Pt.prototype.visitTimestampNanosecond=Vt(qp);Pt.prototype.visitTime=Vt(AM);Pt.prototype.visitTimeSecond=Vt(jp);Pt.prototype.visitTimeMillisecond=Vt(Kp);Pt.prototype.visitTimeMicrosecond=Vt(Jp);Pt.prototype.visitTimeNanosecond=Vt(Qp);Pt.prototype.visitDecimal=Vt(wM);Pt.prototype.visitList=Vt(TM);Pt.prototype.visitStruct=Vt(IM);Pt.prototype.visitUnion=Vt(CM);Pt.prototype.visitDenseUnion=Vt($p);Pt.prototype.visitSparseUnion=Vt(t0);Pt.prototype.visitDictionary=Vt(DM);Pt.prototype.visitInterval=Vt(LM);Pt.prototype.visitIntervalDayTime=Vt(e0);Pt.prototype.visitIntervalYearMonth=Vt(n0);Pt.prototype.visitDuration=Vt(PM);Pt.prototype.visitDurationSecond=Vt(i0);Pt.prototype.visitDurationMillisecond=Vt(r0);Pt.prototype.visitDurationMicrosecond=Vt(s0);Pt.prototype.visitDurationNanosecond=Vt(a0);Pt.prototype.visitFixedSizeList=Vt(FM);Pt.prototype.visitMap=Vt(RM);const Nn=new Pt,gs=Symbol.for("keys"),Es=Symbol.for("vals"),_s=Symbol.for("kKeysAsStrings"),fu=Symbol.for("_kKeysAsStrings");class Hu{constructor(t){return this[gs]=new Se([t.children[0]]).memoize(),this[Es]=t.children[1],new Proxy(this,new UM)}get[_s](){return this[fu]||(this[fu]=Array.from(this[gs].toArray(),String))}[Symbol.iterator](){return new NM(this[gs],this[Es])}get size(){return this[gs].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[gs],e=this[Es],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=Nn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${ha(t)}: ${ha(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class NM{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),Nn.visit(this.vals,t)]})}}class UM{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[_s]}has(t,e){return t[_s].includes(e)}getOwnPropertyDescriptor(t,e){if(t[_s].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[_s].indexOf(e);if(i!==-1){const r=Nn.visit(Reflect.get(t,Es),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[_s].indexOf(e);return r!==-1?(Qn.visit(Reflect.get(t,Es),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(Hu.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[gs]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Es]:{writable:!0,enumerable:!1,configurable:!1,value:null},[fu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let Pd;function o0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(Pd=s,s=a,a=Pd),a>r&&(a=r),i?i(n,s,a):[s,a]}const ku=(n,t)=>n<0?t+n:n,Fd=n=>n!==n;function Vs(n){if(typeof n!=="object"||n===null)return Fd(n)?Fd:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?Fb(n,e):!1:n instanceof Map?BM(n):Array.isArray(n)?OM(n):n instanceof Se?VM(n):zM(n,!0)}function OM(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Vs(n[e]);return cl(t)}function BM(n){let t=-1;const e=[];for(const i of n.values())e[++t]=Vs(i);return cl(e)}function VM(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Vs(n.get(e));return cl(t)}function zM(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=Vs(n[e[r]]);return cl(i,e)}function cl(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return HM(n,e);case Map:return Nd(n,e,e.keys());case Hu:case zu:case Object:case void 0:return Nd(n,e,t||Object.keys(e))}return e instanceof Se?kM(n,e):!1}}function HM(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function kM(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function Nd(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),h=r.next();for(;a<o&&!c.done&&!h.done&&!l.done&&!(c.value!==h.value||!n[a](l.value));++a,c=i.next(),h=r.next(),l=s.next());return a===o&&c.done&&h.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function l0(n,t,e,i){return(e&1<<i)!==0}function GM(n,t,e,i){return(e&1<<i)>>i}function Xo(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):Yo(new Gu(e,n,t,null,l0)).subarray(0,i)),r}return e}function Yo(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class Gu{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function pu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new Gu(n,t,e-t,n,GM))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return pu(n,t,r)+pu(n,i,e)+WM(n,r>>3,i-r>>3)}function WM(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=nc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=nc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=nc(s.getUint8(r)),r+=1;return i}function nc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const ZM=-1;class Ee{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return It.isSparseUnion(t)?this.children.some(e=>e.nullable):It.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(It.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=ZM&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-pu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Ee?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=Gi(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(It.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===gn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(It.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===gn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,h=l>>3;(!s||s.byteLength<=h)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(Xo(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[h];i=(p&c)!==0,s[h]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Ee(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===R.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(Xo(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[ki.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[ki.TYPE])&&(a[ki.TYPE]=s.subarray(t,t+e)),(s=a[ki.OFFSET])&&(a[ki.OFFSET]=s.subarray(t,t+e+1))||(s=a[ki.DATA])&&(a[ki.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Ee.prototype.children=Object.freeze([]);class oa extends ie{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Ee(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),a=js(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),a=bd(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),a=js(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),a=bd(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=oe(t.nullBitmap),a=js(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=oe(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Te(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(It.isSparseUnion(e))return new Ee(e,i,a,o,[void 0,void 0,void 0,s],r);const l=js(t.valueOffsets);return new Ee(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.indices.ArrayType,t.data),{["dictionary"]:a=new Se([new oa().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=Te(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new oa().visit({type:e.valueType})}=t,s=oe(t.nullBitmap),{["length"]:a=r.length/Gi(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ee(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new oa().visit({type:e.childType})}=t,s=oe(t.nullBitmap),a=js(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ee(e,i,o,l,[a,void 0,s],[r])}}const XM=new oa;function re(n){return XM.visit(n)}class Ud{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function YM(n){return n.some(t=>t.nullable)}function c0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function u0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function h0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const h=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(h,p-h))}return r.length===0&&r.push(n[0].slice(0,0)),r}function Wu(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function Zu(n,t){return n.getValid(t)}function qo(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return Wu(i,this._offsets,e,t)}}function d0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=Wu(s,this._offsets,i,e);return t=void 0,a}}function f0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,h=i.length;++c<h;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):Wu(s,this._offsets,r,e);return t=void 0,a}}class Ft extends ie{}function qM(n,t){return t===null&&n.length>0?0:-1}function jM(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new Gu(e,n.offset+(t||0),n.length,e,l0)){if(!r)return i;++i}return-1}function Gt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case R.Union:break;case R.Dictionary:break;default:return jM(n,e)}const i=Nn.getVisitFn(n),r=Vs(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function p0(n,t,e){const i=Nn.getVisitFn(n),r=Vs(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Ft.prototype.visitNull=qM;Ft.prototype.visitBool=Gt;Ft.prototype.visitInt=Gt;Ft.prototype.visitInt8=Gt;Ft.prototype.visitInt16=Gt;Ft.prototype.visitInt32=Gt;Ft.prototype.visitInt64=Gt;Ft.prototype.visitUint8=Gt;Ft.prototype.visitUint16=Gt;Ft.prototype.visitUint32=Gt;Ft.prototype.visitUint64=Gt;Ft.prototype.visitFloat=Gt;Ft.prototype.visitFloat16=Gt;Ft.prototype.visitFloat32=Gt;Ft.prototype.visitFloat64=Gt;Ft.prototype.visitUtf8=Gt;Ft.prototype.visitLargeUtf8=Gt;Ft.prototype.visitBinary=Gt;Ft.prototype.visitLargeBinary=Gt;Ft.prototype.visitFixedSizeBinary=Gt;Ft.prototype.visitDate=Gt;Ft.prototype.visitDateDay=Gt;Ft.prototype.visitDateMillisecond=Gt;Ft.prototype.visitTimestamp=Gt;Ft.prototype.visitTimestampSecond=Gt;Ft.prototype.visitTimestampMillisecond=Gt;Ft.prototype.visitTimestampMicrosecond=Gt;Ft.prototype.visitTimestampNanosecond=Gt;Ft.prototype.visitTime=Gt;Ft.prototype.visitTimeSecond=Gt;Ft.prototype.visitTimeMillisecond=Gt;Ft.prototype.visitTimeMicrosecond=Gt;Ft.prototype.visitTimeNanosecond=Gt;Ft.prototype.visitDecimal=Gt;Ft.prototype.visitList=Gt;Ft.prototype.visitStruct=Gt;Ft.prototype.visitUnion=Gt;Ft.prototype.visitDenseUnion=p0;Ft.prototype.visitSparseUnion=p0;Ft.prototype.visitDictionary=Gt;Ft.prototype.visitInterval=Gt;Ft.prototype.visitIntervalDayTime=Gt;Ft.prototype.visitIntervalYearMonth=Gt;Ft.prototype.visitDuration=Gt;Ft.prototype.visitDurationSecond=Gt;Ft.prototype.visitDurationMillisecond=Gt;Ft.prototype.visitDurationMicrosecond=Gt;Ft.prototype.visitDurationNanosecond=Gt;Ft.prototype.visitFixedSizeList=Gt;Ft.prototype.visitMap=Gt;const jo=new Ft;class Nt extends ie{}function zt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(It.isInt(t)&&t.bitWidth!==64||It.isTime(t)&&t.bitWidth!==64||It.isFloat(t)&&t.precision!==mn.HALF))return new Ud(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new Ud(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new KM(a)})}class KM{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}Nt.prototype.visitNull=zt;Nt.prototype.visitBool=zt;Nt.prototype.visitInt=zt;Nt.prototype.visitInt8=zt;Nt.prototype.visitInt16=zt;Nt.prototype.visitInt32=zt;Nt.prototype.visitInt64=zt;Nt.prototype.visitUint8=zt;Nt.prototype.visitUint16=zt;Nt.prototype.visitUint32=zt;Nt.prototype.visitUint64=zt;Nt.prototype.visitFloat=zt;Nt.prototype.visitFloat16=zt;Nt.prototype.visitFloat32=zt;Nt.prototype.visitFloat64=zt;Nt.prototype.visitUtf8=zt;Nt.prototype.visitLargeUtf8=zt;Nt.prototype.visitBinary=zt;Nt.prototype.visitLargeBinary=zt;Nt.prototype.visitFixedSizeBinary=zt;Nt.prototype.visitDate=zt;Nt.prototype.visitDateDay=zt;Nt.prototype.visitDateMillisecond=zt;Nt.prototype.visitTimestamp=zt;Nt.prototype.visitTimestampSecond=zt;Nt.prototype.visitTimestampMillisecond=zt;Nt.prototype.visitTimestampMicrosecond=zt;Nt.prototype.visitTimestampNanosecond=zt;Nt.prototype.visitTime=zt;Nt.prototype.visitTimeSecond=zt;Nt.prototype.visitTimeMillisecond=zt;Nt.prototype.visitTimeMicrosecond=zt;Nt.prototype.visitTimeNanosecond=zt;Nt.prototype.visitDecimal=zt;Nt.prototype.visitList=zt;Nt.prototype.visitStruct=zt;Nt.prototype.visitUnion=zt;Nt.prototype.visitDenseUnion=zt;Nt.prototype.visitSparseUnion=zt;Nt.prototype.visitDictionary=zt;Nt.prototype.visitInterval=zt;Nt.prototype.visitIntervalDayTime=zt;Nt.prototype.visitIntervalYearMonth=zt;Nt.prototype.visitDuration=zt;Nt.prototype.visitDurationSecond=zt;Nt.prototype.visitDurationMillisecond=zt;Nt.prototype.visitDurationMicrosecond=zt;Nt.prototype.visitDurationNanosecond=zt;Nt.prototype.visitFixedSizeList=zt;Nt.prototype.visitMap=zt;const Xu=new Nt;var m0;const g0={},_0={};class Se{constructor(t){var e,i,r;const s=t[0]instanceof Se?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Ee)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=g0[a.typeId],h=s[0];this.isValid=p=>Zu(h,p),this.get=p=>o(h,p),this.set=(p,d)=>l(h,p,d),this.indexOf=p=>c(h,p),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,_0[a.typeId]),this._offsets=u0(s);break}this.data=s,this.type=a,this.stride=Gi(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return YM(this.data)}get nullCount(){return c0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${R[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(ku(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return Xu.visit(this)}concat(...t){return new Se(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new Se(o0(this,t,e,({data:i,_offsets:r},s,a)=>h0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case R.Int:case R.Float:case R.Decimal:case R.Time:case R.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new Se(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return It.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(It.isDictionary(this.type)){const t=new Ko(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Se(e)}return new Ko(this)}unmemoize(){if(It.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Se(e)}return this}}m0=Symbol.toStringTag;Se[m0]=(n=>{n.type=It.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(R).map(e=>R[e]).filter(e=>typeof e=="number"&&e!==R.NONE);for(const e of t){const i=Nn.getVisitFnByTypeId(e),r=Qn.getVisitFnByTypeId(e),s=jo.getVisitFnByTypeId(e);g0[e]={get:i,set:r,indexOf:s},_0[e]=Object.create(n,{isValid:{value:qo(Zu)},get:{value:qo(Nn.getVisitFnByTypeId(e))},set:{value:d0(Qn.getVisitFnByTypeId(e))},indexOf:{value:f0(jo.getVisitFnByTypeId(e))}})}return"Vector"})(Se.prototype);class Ko extends Se{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new Ko(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new Se(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class mu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Vn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Vn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+be),(e||new Vn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Je.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new mi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new mu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new mu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new rn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,Je.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class xe{constructor(t=[],e,i,r=Je.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=gu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new xe(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new xe(e,this.metadata)}assign(...t){const e=t[0]instanceof xe?t[0]:Array.isArray(t[0])?new xe(t[0]):new xe(t),i=[...this.fields],r=to(to(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:to(to(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=gu(s,new Map);return new xe([...i,...s],r,new Map([...this.dictionaries,...a]))}}xe.prototype.fields=null;xe.prototype.metadata=null;xe.prototype.dictionaries=null;class ke{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new ke(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],ke.new(e,i,r,s)}}ke.prototype.type=null;ke.prototype.name=null;ke.prototype.nullable=null;ke.prototype.metadata=null;function to(n,t){return new Map([...n||new Map,...t||new Map])}function gu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(It.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&gu(s.children,t)}return t}var JM=Hf,QM=Cs;class ma{static decode(t){t=new QM(oe(t));const e=Vn.getRootAsFooter(t),i=xe.decode(e.schema(),new Map,e.version());return new $M(i,e)}static encode(t){const e=new JM,i=xe.encode(e,t.schema);Vn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())xr.encode(e,a);const r=e.endVector();Vn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())xr.encode(e,a);const s=e.endVector();return Vn.startFooter(e),Vn.addSchema(e,i),Vn.addVersion(e,Je.V5),Vn.addRecordBatches(e,r),Vn.addDictionaries(e,s),Vn.finishFooterBuffer(e,Vn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=Je.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class $M extends ma{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return xr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return xr.decode(e)}return null}}class xr{static decode(t){return new xr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return mu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=Ne(i),this.bodyLength=Ne(e)}}const Ze=Object.freeze({done:!0,value:void 0});class Od{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class Yu{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class tE extends Yu{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Zt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ze);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return Xn.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return Xn.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Zt(this,void 0,void 0,function*(){return yield this.abort(t),Ze})}return(t){return Zt(this,void 0,void 0,function*(){return yield this.close(),Ze})}read(t){return Zt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Zt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ze)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class mo extends tE{write(t){if((t=oe(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?ou(this.toUint8Array(!0)):this.toUint8Array(!1).then(ou)}toUint8Array(t=!1){return t?Ci(this._values)[0]:Zt(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=zr(this),h;h=yield c.next(),e=h.done,!e;l=!0){s=h.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Ci(a,o)[0]})}}class Jo{constructor(t){t&&(this.source=new eE(Xn.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class Ps{constructor(t){t instanceof Ps?this.source=t.source:t instanceof mo?this.source=new Pr(Xn.fromAsyncIterable(t)):Of(t)?this.source=new Pr(Xn.fromNodeStream(t)):Uu(t)?this.source=new Pr(Xn.fromDOMStream(t)):Uf(t)?this.source=new Pr(Xn.fromDOMStream(t.body)):xa(t)?this.source=new Pr(Xn.fromIterable(t)):kr(t)?this.source=new Pr(Xn.fromAsyncIterable(t)):Bs(t)&&(this.source=new Pr(Xn.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class eE{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ze)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ze)}}class Pr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Zt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Zt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Zt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return Zt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return Zt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Ze;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Zt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Ze;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class Bd extends Jo{constructor(t,e){super(),this.position=0,this.buffer=oe(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class Qo extends Ps{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Zt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Zt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Zt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Zt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return Zt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Zt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Zt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Zt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const nE=65536;function vs(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const Fs=8,qu=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class v0{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?nE:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${vs(this.buffer[1])} ${vs(this.buffer[0])}`}}class Ae extends v0{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Ae.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Ae.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Ae(e);for(let s=0;s<i;){const a=Fs<i-s?Fs:i-s,o=new Ae(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Ae(new Uint32Array([qu[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Ae.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Ae(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ae(new Uint32Array(t.buffer)).plus(e)}}class Cn extends v0{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return Cn.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Cn.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new Cn(e);for(let a=i?1:0;a<r;){const o=Fs<r-a?Fs:r-a,l=new Cn(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new Cn(new Uint32Array([qu[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Cn.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Cn(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Cn(new Uint32Array(t.buffer)).plus(e)}}class gi{constructor(t){this.buffer=t}high(){return new Cn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Cn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Ae(new Uint32Array([this.buffer[3],0])),i=new Ae(new Uint32Array([this.buffer[2],0])),r=new Ae(new Uint32Array([this.buffer[1],0])),s=new Ae(new Uint32Array([this.buffer[0],0])),a=new Ae(new Uint32Array([t.buffer[3],0])),o=new Ae(new Uint32Array([t.buffer[2],0])),l=new Ae(new Uint32Array([t.buffer[1],0])),c=new Ae(new Uint32Array([t.buffer[0],0]));let h=Ae.multiply(s,c);this.buffer[0]=h.low();const p=new Ae(new Uint32Array([h.high(),0]));return h=Ae.multiply(r,c),p.plus(h),h=Ae.multiply(s,l),p.plus(h),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(h)?1:0,this.buffer[2]=p.high(),new Ae(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Ae.multiply(i,c)).plus(Ae.multiply(r,l)).plus(Ae.multiply(s,o)),this.buffer[3]+=Ae.multiply(e,c).plus(Ae.multiply(i,l)).plus(Ae.multiply(r,o)).plus(Ae.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${vs(this.buffer[3])} ${vs(this.buffer[2])} ${vs(this.buffer[1])} ${vs(this.buffer[0])}`}static multiply(t,e){return new gi(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new gi(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return gi.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return gi.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new gi(e);for(let a=i?1:0;a<r;){const o=Fs<r-a?Fs:r-a,l=new gi(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new gi(new Uint32Array([qu[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)gi.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class y0 extends ie{constructor(t,e,i,r,s=Je.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof ke?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return re({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<Je.V5&&this.readNullBitmap(t,i),t.mode===gn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return re({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class iE extends y0{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):Yo(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Te(Uint8Array,Te(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Te(Uint8Array,Te(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return It.isTimestamp(t)||(It.isInt(t)||It.isTime(t))&&t.bitWidth===64||It.isDuration(t)||It.isDate(t)&&t.unit===Jn.MILLISECOND?Te(Uint8Array,Cn.convertArray(i[e])):It.isDecimal(t)?Te(Uint8Array,gi.convertArray(i[e])):It.isBinary(t)||It.isLargeBinary(t)||It.isFixedSizeBinary(t)?rE(i[e]):It.isBool(t)?Yo(i[e]):It.isUtf8(t)||It.isLargeUtf8(t)?Nu(i[e].join("")):Te(Uint8Array,Te(t.ArrayType,i[e].map(r=>+r)))}}function rE(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Ut extends ie{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Rn(n,t){return t instanceof n.constructor}function Wr(n,t){return n===t||Rn(n,t)}function nr(n,t){return n===t||Rn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function ul(n,t){return n===t||Rn(n,t)&&n.precision===t.precision}function sE(n,t){return n===t||Rn(n,t)&&n.byteWidth===t.byteWidth}function ju(n,t){return n===t||Rn(n,t)&&n.unit===t.unit}function ba(n,t){return n===t||Rn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Ma(n,t){return n===t||Rn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function aE(n,t){return n===t||Rn(n,t)&&n.children.length===t.children.length&&br.compareManyFields(n.children,t.children)}function oE(n,t){return n===t||Rn(n,t)&&n.children.length===t.children.length&&br.compareManyFields(n.children,t.children)}function Ku(n,t){return n===t||Rn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&br.compareManyFields(n.children,t.children)}function lE(n,t){return n===t||Rn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&br.visit(n.indices,t.indices)&&br.visit(n.dictionary,t.dictionary)}function Ju(n,t){return n===t||Rn(n,t)&&n.unit===t.unit}function Ea(n,t){return n===t||Rn(n,t)&&n.unit===t.unit}function cE(n,t){return n===t||Rn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&br.compareManyFields(n.children,t.children)}function uE(n,t){return n===t||Rn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&br.compareManyFields(n.children,t.children)}Ut.prototype.visitNull=Wr;Ut.prototype.visitBool=Wr;Ut.prototype.visitInt=nr;Ut.prototype.visitInt8=nr;Ut.prototype.visitInt16=nr;Ut.prototype.visitInt32=nr;Ut.prototype.visitInt64=nr;Ut.prototype.visitUint8=nr;Ut.prototype.visitUint16=nr;Ut.prototype.visitUint32=nr;Ut.prototype.visitUint64=nr;Ut.prototype.visitFloat=ul;Ut.prototype.visitFloat16=ul;Ut.prototype.visitFloat32=ul;Ut.prototype.visitFloat64=ul;Ut.prototype.visitUtf8=Wr;Ut.prototype.visitLargeUtf8=Wr;Ut.prototype.visitBinary=Wr;Ut.prototype.visitLargeBinary=Wr;Ut.prototype.visitFixedSizeBinary=sE;Ut.prototype.visitDate=ju;Ut.prototype.visitDateDay=ju;Ut.prototype.visitDateMillisecond=ju;Ut.prototype.visitTimestamp=ba;Ut.prototype.visitTimestampSecond=ba;Ut.prototype.visitTimestampMillisecond=ba;Ut.prototype.visitTimestampMicrosecond=ba;Ut.prototype.visitTimestampNanosecond=ba;Ut.prototype.visitTime=Ma;Ut.prototype.visitTimeSecond=Ma;Ut.prototype.visitTimeMillisecond=Ma;Ut.prototype.visitTimeMicrosecond=Ma;Ut.prototype.visitTimeNanosecond=Ma;Ut.prototype.visitDecimal=Wr;Ut.prototype.visitList=aE;Ut.prototype.visitStruct=oE;Ut.prototype.visitUnion=Ku;Ut.prototype.visitDenseUnion=Ku;Ut.prototype.visitSparseUnion=Ku;Ut.prototype.visitDictionary=lE;Ut.prototype.visitInterval=Ju;Ut.prototype.visitIntervalDayTime=Ju;Ut.prototype.visitIntervalYearMonth=Ju;Ut.prototype.visitDuration=Ea;Ut.prototype.visitDurationSecond=Ea;Ut.prototype.visitDurationMillisecond=Ea;Ut.prototype.visitDurationMicrosecond=Ea;Ut.prototype.visitDurationNanosecond=Ea;Ut.prototype.visitFixedSizeList=cE;Ut.prototype.visitMap=uE;const br=new Ut;function _u(n,t){return br.compareSchemas(n,t)}function ic(n,t){return hE(n,t.map(e=>e.data.concat()))}function hE(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,d)=>Math.max(p,d.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,h=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)h[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(h=dE(e,a,h,t,r),a>0&&(i[s++]=re({type:new Sn(e),length:a,nullCount:0,children:h.slice()})))}return[n=n.assign(e),i.map(p=>new Ln(n,p))]}function dE(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],h=c?.length;if(h>=t)h===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,h-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:re({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var S0;class yn{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new xe([]),this._offsets=[0],this;let r,s;t[0]instanceof xe&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof Ln)return[l];if(l instanceof yn)return l.batches;if(l instanceof Ee){if(l.type instanceof Sn)return[new Ln(new xe(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),h=c.map(_=>new Se([l[_]])),p=r??new xe(c.map((_,v)=>new ke(String(_),h[v].type,h[v].nullable))),[,d]=ic(p,h);return d.length===0?[new Ln(l)]:d}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new xe([]),!(r instanceof xe))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof Ln))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!_u(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??u0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=c0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(ku(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?Xu.visit(new Se(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new yn(e,i.map(r=>new Ln(e,r)))}slice(t,e){const i=this.schema;[t,e]=o0({length:this.numRows},t,e);const r=h0(this.data,this._offsets,t,e);return new yn(i,r.map(s=>new Ln(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=re({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new Se(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new Se([re({type:new Sr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=ic(i,o)}return new yn(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new yn(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[h,p]=o,d=e.findIndex(_=>_.name===l.name);return~d?p[d]=c:h.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new yn(...ic(s,a))}}S0=Symbol.toStringTag;yn[S0]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=qo(Zu),n.get=qo(Nn.getVisitFn(R.Struct)),n.set=d0(Qn.getVisitFn(R.Struct)),n.indexOf=f0(jo.getVisitFn(R.Struct)),"Table"))(yn.prototype);var x0;let Ln=class aa{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof xe))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=re({nullCount:0,type:new Sn(this.schema.fields),children:this.schema.fields.map(e=>re({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Ee))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=Vd(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,h)=>(l.children[h]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[h]=ke.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new xe(i),o=re({type:new Sn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=Vd(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=b0(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return Nn.visit(this.data,t)}at(t){return this.get(ku(t,this.numRows))}set(t,e){return Qn.visit(this.data,t,e)}indexOf(t,e){return jo.visit(this.data,t,e)}[Symbol.iterator](){return Xu.visit(new Se([this.data]))}toArray(){return[...this]}concat(...t){return new yn(this.schema,[this,...t])}slice(t,e){const[i]=new Se([this.data]).slice(t,e).data;return new aa(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new Se([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new Se([re({type:new Sr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new xe(s,new Map(this.schema.metadata)),r=re({type:new Sn(s),children:a})}return new aa(i,r)}select(t){const e=this.schema.select(t),i=new Sn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new aa(e,re({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=re({type:new Sn(e.fields),length:this.numRows,children:i});return new aa(e,r)}};x0=Symbol.toStringTag;Ln[x0]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Ln.prototype);function Vd(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:re({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),re({type:new Sn(r),length:e,children:s})]}function b0(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])b0(o.children,c?.children,e);if(It.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class Qu extends Ln{constructor(t){const e=t.fields.map(r=>re({type:r.type})),i=re({type:new Sn(t.fields),nullCount:0,children:e});super(t,i)}}let fr=class pi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new pi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+be),(e||new pi).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Je.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):_e.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new rn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,Je.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,_e.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return pi.startMessage(t),pi.addVersion(t,e),pi.addHeaderType(t,i),pi.addHeader(t,r),pi.addBodyLength(t,s),pi.addCustomMetadata(t,a),pi.endMessage(t)}};class fE extends ie{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Cd.startNull(e),Cd.endNull(e)}visitInt(t,e){return zn.startInt(e),zn.addBitWidth(e,t.bitWidth),zn.addIsSigned(e,t.isSigned),zn.endInt(e)}visitFloat(t,e){return yi.startFloatingPoint(e),yi.addPrecision(e,t.precision),yi.endFloatingPoint(e)}visitBinary(t,e){return Ad.startBinary(e),Ad.endBinary(e)}visitLargeBinary(t,e){return Td.startLargeBinary(e),Td.endLargeBinary(e)}visitBool(t,e){return wd.startBool(e),wd.endBool(e)}visitUtf8(t,e){return Dd.startUtf8(e),Dd.endUtf8(e)}visitLargeUtf8(t,e){return Rd.startLargeUtf8(e),Rd.endLargeUtf8(e)}visitDecimal(t,e){return us.startDecimal(e),us.addScale(e,t.scale),us.addPrecision(e,t.precision),us.addBitWidth(e,t.bitWidth),us.endDecimal(e)}visitDate(t,e){return lo.startDate(e),lo.addUnit(e,t.unit),lo.endDate(e)}visitTime(t,e){return Yn.startTime(e),Yn.addUnit(e,t.unit),Yn.addBitWidth(e,t.bitWidth),Yn.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return qn.startTimestamp(e),qn.addUnit(e,t.unit),i!==void 0&&qn.addTimezone(e,i),qn.endTimestamp(e)}visitInterval(t,e){return Si.startInterval(e),Si.addUnit(e,t.unit),Si.endInterval(e)}visitDuration(t,e){return co.startDuration(e),co.addUnit(e,t.unit),co.endDuration(e)}visitList(t,e){return Id.startList(e),Id.endList(e)}visitStruct(t,e){return Vr.startStruct_(e),Vr.endStruct_(e)}visitUnion(t,e){Dn.startTypeIdsVector(e,t.typeIds.length);const i=Dn.createTypeIdsVector(e,t.typeIds);return Dn.startUnion(e),Dn.addMode(e,t.mode),Dn.addTypeIds(e,i),Dn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return Zi.startDictionaryEncoding(e),Zi.addId(e,BigInt(t.id)),Zi.addIsOrdered(e,t.isOrdered),i!==void 0&&Zi.addIndexType(e,i),Zi.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return uo.startFixedSizeBinary(e),uo.addByteWidth(e,t.byteWidth),uo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return ho.startFixedSizeList(e),ho.addListSize(e,t.listSize),ho.endFixedSizeList(e)}visitMap(t,e){return fo.startMap(e),fo.addKeysSorted(e,t.keysSorted),fo.endMap(e)}}const rc=new fE;function pE(n,t=new Map){return new xe(gE(n,t),go(n.metadata),t)}function M0(n){return new kn(n.count,E0(n.columns),A0(n.columns))}function mE(n){return new Li(M0(n.data),n.id,n.isDelta)}function gE(n,t){return(n.fields||[]).filter(Boolean).map(e=>ke.fromJSON(e,t))}function zd(n,t){return(n.children||[]).filter(Boolean).map(e=>ke.fromJSON(e,t))}function E0(n){return(n||[]).reduce((t,e)=>[...t,new Mr(e.count,_E(e.VALIDITY)),...E0(e.children)],[])}function A0(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Ei(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Ei(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Ei(t.length,r.OFFSET.length)),r.DATA&&t.push(new Ei(t.length,r.DATA.length)),t=A0(r.children,t)}return t}function _E(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function vE(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=kd(n,zd(n,t)),r=new ke(n.name,a,n.nullable,go(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?Hd(i):new pa,o=new Ls(t.get(e),i,e,s.isOrdered),r=new ke(n.name,o,n.nullable,go(n.metadata))):(i=(i=s.indexType)?Hd(i):new pa,t.set(e,a=kd(n,zd(n,t))),o=new Ls(a,i,e,s.isOrdered),r=new ke(n.name,o,n.nullable,go(n.metadata))),r||null}function go(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function Hd(n){return new Gr(n.isSigned,n.bitWidth)}function kd(n,t){const e=n.type.name;switch(e){case"NONE":return new Sr;case"null":return new Sr;case"binary":return new Co;case"largebinary":return new Do;case"utf8":return new Lo;case"largeutf8":return new Po;case"bool":return new Fo;case"list":return new Ho((t||[])[0]);case"struct":return new Sn(t||[]);case"struct_":return new Sn(t||[])}switch(e){case"int":{const i=n.type;return new Gr(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new Io(mn[i.precision])}case"decimal":{const i=n.type;return new No(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new Uo(Jn[i.unit])}case"time":{const i=n.type;return new Oo(Ot[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new Bo(Ot[i.unit],i.timezone)}case"interval":{const i=n.type;return new Vo(Di[i.unit])}case"duration":{const i=n.type;return new zo(Ot[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new ko(gn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new Go(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new Wo(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new Zo((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var yE=Hf,SE=Cs;class xn{static fromJSON(t,e){const i=new xn(0,Je.V5,e);return i._createHeader=xE(t,e),i}static decode(t){t=new SE(oe(t));const e=fr.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new xn(i,r,s);return a._createHeader=bE(e,s),a}static encode(t){const e=new yE;let i=-1;return t.isSchema()?i=xe.encode(e,t.header()):t.isRecordBatch()?i=kn.encode(e,t.header()):t.isDictionaryBatch()&&(i=Li.encode(e,t.header())),fr.startMessage(e),fr.addVersion(e,Je.V5),fr.addHeader(e,i),fr.addHeaderType(e,t.headerType),fr.addBodyLength(e,BigInt(t.bodyLength)),fr.finishMessageBuffer(e,fr.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof xe)return new xn(0,Je.V5,_e.Schema,t);if(t instanceof kn)return new xn(e,Je.V5,_e.RecordBatch,t);if(t instanceof Li)return new xn(e,Je.V5,_e.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===_e.Schema}isRecordBatch(){return this.headerType===_e.RecordBatch}isDictionaryBatch(){return this.headerType===_e.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=Ne(t)}}class kn{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=Ne(t)}}class Li{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=Ne(e)}}class Ei{constructor(t,e){this.offset=Ne(t),this.length=Ne(e)}}class Mr{constructor(t,e){this.length=Ne(t),this.nullCount=Ne(e)}}function xE(n,t){return(()=>{switch(t){case _e.Schema:return xe.fromJSON(n);case _e.RecordBatch:return kn.fromJSON(n);case _e.DictionaryBatch:return Li.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${_e[t]}, type: ${t} }`)})}function bE(n,t){return(()=>{switch(t){case _e.Schema:return xe.decode(n.header(new mi),new Map,n.version());case _e.RecordBatch:return kn.decode(n.header(new Hi),n.version());case _e.DictionaryBatch:return Li.decode(n.header(new ls),n.version())}throw new Error(`Unrecognized Message type: { name: ${_e[t]}, type: ${t} }`)})}ke.encode=PE;ke.decode=DE;ke.fromJSON=vE;xe.encode=LE;xe.decode=ME;xe.fromJSON=pE;kn.encode=FE;kn.decode=EE;kn.fromJSON=M0;Li.encode=NE;Li.decode=AE;Li.fromJSON=mE;Mr.encode=UE;Mr.decode=TE;Ei.encode=OE;Ei.decode=wE;function ME(n,t=new Map,e=Je.V5){const i=CE(n,t);return new xe(i,_o(n),t,e)}function EE(n,t=Je.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new kn(n.length(),RE(n),IE(n,t))}function AE(n,t=Je.V5){return new Li(kn.decode(n.data(),t),n.id(),n.isDelta())}function wE(n){return new Ei(n.offset(),n.length())}function TE(n){return new Mr(n.length(),n.nullCount())}function RE(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Mr.decode(e));return t}function IE(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<Je.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Ei.decode(i));return e}function CE(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=ke.decode(i,t));return e}function Gd(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=ke.decode(i,t));return e}function DE(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=Zd(n,Gd(n,t)),i=new ke(n.name(),r,n.nullable(),_o(n))):t.has(e=Ne(o.id()))?(s=(s=o.indexType())?Wd(s):new pa,a=new Ls(t.get(e),s,e,o.isOrdered()),i=new ke(n.name(),a,n.nullable(),_o(n))):(s=(s=o.indexType())?Wd(s):new pa,t.set(e,r=Zd(n,Gd(n,t))),a=new Ls(r,s,e,o.isOrdered()),i=new ke(n.name(),a,n.nullable(),_o(n))),i||null}function _o(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function Wd(n){return new Gr(n.isSigned(),n.bitWidth())}function Zd(n,t){const e=n.typeType();switch(e){case Be.NONE:return new Sr;case Be.Null:return new Sr;case Be.Binary:return new Co;case Be.LargeBinary:return new Do;case Be.Utf8:return new Lo;case Be.LargeUtf8:return new Po;case Be.Bool:return new Fo;case Be.List:return new Ho((t||[])[0]);case Be.Struct_:return new Sn(t||[])}switch(e){case Be.Int:{const i=n.type(new zn);return new Gr(i.isSigned(),i.bitWidth())}case Be.FloatingPoint:{const i=n.type(new yi);return new Io(i.precision())}case Be.Decimal:{const i=n.type(new us);return new No(i.scale(),i.precision(),i.bitWidth())}case Be.Date:{const i=n.type(new lo);return new Uo(i.unit())}case Be.Time:{const i=n.type(new Yn);return new Oo(i.unit(),i.bitWidth())}case Be.Timestamp:{const i=n.type(new qn);return new Bo(i.unit(),i.timezone())}case Be.Interval:{const i=n.type(new Si);return new Vo(i.unit())}case Be.Duration:{const i=n.type(new co);return new zo(i.unit())}case Be.Union:{const i=n.type(new Dn);return new ko(i.mode(),i.typeIdsArray()||[],t||[])}case Be.FixedSizeBinary:{const i=n.type(new uo);return new Go(i.byteWidth())}case Be.FixedSizeList:{const i=n.type(new ho);return new Wo(i.listSize(),(t||[])[0])}case Be.Map:{const i=n.type(new fo);return new Zo((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Be[e]}" (${e})`)}function LE(n,t){const e=t.fields.map(s=>ke.encode(n,s));mi.startFieldsVector(n,e.length);const i=mi.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?mi.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return rn.startKeyValue(n),rn.addKey(n,o),rn.addValue(n,l),rn.endKeyValue(n)})):-1;return mi.startSchema(n),mi.addFields(n,i),mi.addEndianness(n,BE?Ds.Little:Ds.Big),r!==-1&&mi.addCustomMetadata(n,r),mi.endSchema(n)}function PE(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;It.isDictionary(s)?(a=s.dictionary.typeId,r=rc.visit(s,n),i=rc.visit(s.dictionary,n)):i=rc.visit(s,n);const o=(s.children||[]).map(h=>ke.encode(n,h)),l=Wn.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?Wn.createCustomMetadataVector(n,[...t.metadata].map(([h,p])=>{const d=n.createString(`${h}`),_=n.createString(`${p}`);return rn.startKeyValue(n),rn.addKey(n,d),rn.addValue(n,_),rn.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),Wn.startField(n),Wn.addType(n,i),Wn.addTypeType(n,a),Wn.addChildren(n,l),Wn.addNullable(n,!!t.nullable),e!==-1&&Wn.addName(n,e),r!==-1&&Wn.addDictionary(n,r),c!==-1&&Wn.addCustomMetadata(n,c),Wn.endField(n)}function FE(n,t){const e=t.nodes||[],i=t.buffers||[];Hi.startNodesVector(n,e.length);for(const a of e.slice().reverse())Mr.encode(n,a);const r=n.endVector();Hi.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Ei.encode(n,a);const s=n.endVector();return Hi.startRecordBatch(n),Hi.addLength(n,BigInt(t.length)),Hi.addNodes(n,r),Hi.addBuffers(n,s),Hi.endRecordBatch(n)}function NE(n,t){const e=kn.encode(n,t.data);return ls.startDictionaryBatch(n),ls.addId(n,BigInt(t.id)),ls.addIsDelta(n,t.isDelta),ls.addData(n,e),ls.endDictionaryBatch(n)}function UE(n,t){return Wf.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function OE(n,t){return Gf.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const BE=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),$u=n=>`Expected ${_e[n]} Message in stream, but was null or length 0.`,th=n=>`Header pointer of flatbuffer-encoded ${_e[n]} Message is null or length 0.`,w0=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,T0=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class R0{constructor(t){this.source=t instanceof Jo?t:new Jo(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Ze:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error($u(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=oe(this.source.read(t));if(e.byteLength<t)throw new Error(T0(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=_e.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(th(e));return r}readMetadataLength(){const t=this.source.read(hl),e=t&&new Cs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Ze;if(e.byteLength<t)throw new Error(w0(t,e.byteLength));return{done:!1,value:xn.decode(e)}}}class VE{constructor(t,e){this.source=t instanceof Ps?t:Nf(t)?new Qo(t,e):new Ps(t)}[Symbol.asyncIterator](){return this}next(){return Zt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Ze:t})}throw(t){return Zt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Zt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Zt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error($u(t));return e.value})}readMessageBody(t){return Zt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=oe(yield this.source.read(t));if(e.byteLength<t)throw new Error(T0(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return Zt(this,arguments,void 0,function*(t=!1){const e=_e.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(th(e));return r})}readMetadataLength(){return Zt(this,void 0,void 0,function*(){const t=yield this.source.read(hl),e=t&&new Cs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return Zt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Ze;if(e.byteLength<t)throw new Error(w0(t,e.byteLength));return{done:!1,value:xn.decode(e)}})}}class zE extends R0{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof Od?t:new Od(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:xn.fromJSON(t.schema,_e.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:xn.fromJSON(e,_e.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:xn.fromJSON(e,_e.RecordBatch)}}return this._body=[],Ze}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error($u(t));return e.value}readSchema(){const t=_e.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(th(t));return i}}const hl=4,vu="ARROW1",ga=new Uint8Array(vu.length);for(let n=0;n<vu.length;n+=1)ga[n]=vu.codePointAt(n);function eh(n,t=0){for(let e=-1,i=ga.length;++e<i;)if(ga[e]!==n[t+e])return!1;return!0}const Aa=ga.length,I0=Aa+hl,HE=Aa*2+hl;class Kn extends Yu{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return kr(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return Xn.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return Xn.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof Kn?t:lu(t)?ZE(t):Nf(t)?qE(t):kr(t)?Zt(this,void 0,void 0,function*(){return yield Kn.from(yield t)}):Uf(t)||Uu(t)||Of(t)||Bs(t)?YE(new Ps(t)):XE(new Jo(t))}static readAll(t){return t instanceof Kn?t.isSync()?Xd(t):Yd(t):lu(t)||ArrayBuffer.isView(t)||xa(t)||Ff(t)?Xd(t):Yd(t)}}class $o extends Kn{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Mi(this,arguments,function*(){yield Qt(yield*oo(zr(this[Symbol.iterator]())))})}}class tl extends Kn{constructor(t){super(t),this._impl=t}readAll(){return Zt(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=zr(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class C0 extends $o{constructor(t){super(t),this._impl=t}}class kE extends tl{constructor(t){super(t),this._impl=t}}class D0{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=re({type:new Sn(this.schema.fields),length:t.length,children:i});return new Ln(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new Se(c)):new Se(c)).memoize()}_loadVectors(t,e,i){return new y0(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class el extends D0{constructor(t,e){super(e),this._reader=lu(t)?new zE(this._handle=t):new R0(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=P0(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ze}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ze}next(){if(this.closed)return Ze;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Qu(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class nl extends D0{constructor(t,e){super(e),this._reader=new VE(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Zt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Zt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=P0(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Zt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ze})}return(t){return Zt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ze})}next(){return Zt(this,void 0,void 0,function*(){if(this.closed)return Ze;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Qu(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Zt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class L0 extends el{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof Bd?t:new Bd(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(_e.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(_e.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-I0,i=t.readInt32(e),r=t.readAt(e-i,i);return ma.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class GE extends nl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof Qo?t:new Qo(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Zt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return Zt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(_e.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return Zt(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(_e.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return Zt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-I0,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return ma.decode(r)})}_readNextMessageAndValidate(t){return Zt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class WE extends el{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new iE(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function P0(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*Xd(n){const t=Kn.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function Yd(n){return Mi(this,arguments,function*(){const e=yield Qt(Kn.from(n));try{if(!(yield Qt(e.open({autoDestroy:!1}))).closed)do yield yield Qt(e);while(!(yield Qt(e.reset().open())).closed)}finally{yield Qt(e.cancel())}})}function ZE(n){return new $o(new WE(n))}function XE(n){const t=n.peek(Aa+7&-8);return t&&t.byteLength>=4?eh(t)?new C0(new L0(n.read())):new $o(new el(n)):new $o(new el((function*(){})()))}function YE(n){return Zt(this,void 0,void 0,function*(){const t=yield n.peek(Aa+7&-8);return t&&t.byteLength>=4?eh(t)?new C0(new L0(yield n.read())):new tl(new nl(n)):new tl(new nl((function(){return Mi(this,arguments,function*(){})})()))})}function qE(n){return Zt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new Qo(n,t);return t>=HE&&eh(yield e.readAt(0,Aa+7&-8))?new kE(new GE(e)):new tl(new nl(e))})}class Xe extends ie{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Ln?s.data.children:s.data),i=new Xe;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof Se)return this.visitMany(t.data),this;const{type:e}=t;if(!It.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(It.isUnion(e))this.nodes.push(new Mr(i,0));else{const{nullCount:r}=t;It.isNull(e)||li.call(this,r<=0?new Uint8Array(0):Xo(t.offset,i,t.nullBitmap)),this.nodes.push(new Mr(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function li(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Ei(this._byteLength,t)),this._byteLength+=t,this}function jE(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(li.call(this,r),e.mode===gn.Sparse)return yu.call(this,n);if(e.mode===gn.Dense){if(n.offset<=0)return li.call(this,s),yu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,h,p=-1;++p<i;)(c=r[p])!==void 0&&((h=o[c])===void 0&&(h=o[c]=s[p]),a[p]=s[p]-h,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);li.call(this,a),this.visitMany(n.children.map((c,h)=>{const p=e.typeIds[h],d=o[p],_=l[p];return c.slice(d,Math.min(i,_))}))}}return this}function KE(n){let t;return n.nullCount>=n.length?li.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?li.call(this,Xo(n.offset,n.length,t)):li.call(this,Yo(n.values))}function ir(n){return li.call(this,n.values.subarray(0,n.length*n.stride))}function dl(n){const{length:t,values:e,valueOffsets:i}=n,r=Ne(i[0]),s=Ne(i[t]),a=Math.min(s-r,e.byteLength-r);return li.call(this,Vf(-r,t+1,i)),li.call(this,e.subarray(r,r+a)),this}function nh(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return li.call(this,Vf(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function yu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Xe.prototype.visitBool=KE;Xe.prototype.visitInt=ir;Xe.prototype.visitFloat=ir;Xe.prototype.visitUtf8=dl;Xe.prototype.visitLargeUtf8=dl;Xe.prototype.visitBinary=dl;Xe.prototype.visitLargeBinary=dl;Xe.prototype.visitFixedSizeBinary=ir;Xe.prototype.visitDate=ir;Xe.prototype.visitTimestamp=ir;Xe.prototype.visitTime=ir;Xe.prototype.visitDecimal=ir;Xe.prototype.visitList=nh;Xe.prototype.visitStruct=yu;Xe.prototype.visitUnion=jE;Xe.prototype.visitInterval=ir;Xe.prototype.visitDuration=ir;Xe.prototype.visitFixedSizeList=nh;Xe.prototype.visitMap=nh;class F0 extends Yu{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new mo,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Fn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return kr(t)?t.then(e=>this.writeAll(e)):Bs(t)?ah(this,t):sh(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof mo?this._sink=t:(this._sink=new mo,t&&Tb(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&Rb(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!_u(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof yn&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Ln&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!_u(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Ln?t instanceof Qu||this._writeRecordBatch(t):t instanceof yn?this.writeAll(t.batches):xa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=xn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===_e.RecordBatch?this._recordBatchBlocks.push(new xr(o,t.bodyLength,this._position)):t.headerType===_e.DictionaryBatch&&this._dictionaryBlocks.push(new xr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=oe(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(xn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(ga)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Xe.assemble(t),a=new kn(t.numRows,i,r),o=xn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=Xe.assemble(new Se([t])),l=new kn(t.length,s,a),c=new Li(l,e,i),h=xn.from(c,r);return this._writeMessage(h)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,h]of a.entries())this._writeDictionaryBatch(h,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class ih extends F0{static writeAll(t,e){const i=new ih(e);return kr(t)?t.then(r=>i.writeAll(r)):Bs(t)?ah(i,t):sh(i,t)}}class rh extends F0{static writeAll(t){const e=new rh;return kr(t)?t.then(i=>e.writeAll(i)):Bs(t)?ah(e,t):sh(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=ma.encode(new ma(t,Je.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function sh(n,t){let e=t;t instanceof yn&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function ah(n,t){return Zt(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=zr(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function JE(n,t="stream"){return(t==="stream"?ih:rh).writeAll(n).toUint8Array(!0)}var QE=Object.create,N0=Object.defineProperty,$E=Object.getOwnPropertyDescriptor,tA=Object.getOwnPropertyNames,eA=Object.getPrototypeOf,nA=Object.prototype.hasOwnProperty,iA=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),rA=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of tA(t))!nA.call(n,r)&&r!==e&&N0(n,r,{get:()=>t[r],enumerable:!(i=$E(t,r))||i.enumerable});return n},sA=(n,t,e)=>(e=n!=null?QE(eA(n)):{},rA(!n||!n.__esModule?N0(e,"default",{value:n,enumerable:!0}):e,n)),aA=iA((n,t)=>{t.exports=Worker}),oA=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(oA||{}),lA=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(lA||{}),cA=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(cA||{}),uA=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(uA||{}),hA=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(hA||{}),dA=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(dA||{}),fA=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},pA=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(pA||{}),mA=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=Kn.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new yn(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new U0(this._bindings,this._conn,e),r=await Kn.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new gA(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=JE(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},U0=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},gA=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=Kn.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new yn(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new U0(this.bindings,this.connectionId,t),i=await Kn.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},_A=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(_A||{}),vA=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(vA||{}),ce=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function vo(n){switch(n.typeId){case R.Binary:return{sqlType:"binary"};case R.Bool:return{sqlType:"bool"};case R.Date:return{sqlType:"date"};case R.DateDay:return{sqlType:"date32[d]"};case R.DateMillisecond:return{sqlType:"date64[ms]"};case R.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case R.Float:return{sqlType:"float"};case R.Float16:return{sqlType:"float16"};case R.Float32:return{sqlType:"float32"};case R.Float64:return{sqlType:"float64"};case R.Int:return{sqlType:"int32"};case R.Int16:return{sqlType:"int16"};case R.Int32:return{sqlType:"int32"};case R.Int64:return{sqlType:"int64"};case R.Uint16:return{sqlType:"uint16"};case R.Uint32:return{sqlType:"uint32"};case R.Uint64:return{sqlType:"uint64"};case R.Uint8:return{sqlType:"uint8"};case R.IntervalDayTime:return{sqlType:"interval[dt]"};case R.IntervalYearMonth:return{sqlType:"interval[m]"};case R.List:return{sqlType:"list",valueType:vo(n.valueType)};case R.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case R.Null:return{sqlType:"null"};case R.Utf8:return{sqlType:"utf8"};case R.Struct:return{sqlType:"struct",fields:n.children.map(t=>Su(t.name,t.type))};case R.Map:{let t=n;return{sqlType:"map",keyType:vo(t.keyType),valueType:vo(t.valueType)}}case R.Time:return{sqlType:"time[s]"};case R.TimeMicrosecond:return{sqlType:"time[us]"};case R.TimeMillisecond:return{sqlType:"time[ms]"};case R.TimeNanosecond:return{sqlType:"time[ns]"};case R.TimeSecond:return{sqlType:"time[s]"};case R.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case R.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case R.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case R.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case R.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Su(n,t){let e=vo(t);return e.name=n,e}var yA=/'(opfs:\/\/\S*?)'/g,SA=/(opfs:\/\/\S*?)/g;function xA(n){return n.search(SA)>-1}function bA(n){return[...n.matchAll(yA)].map(t=>t[1])}var MA=new TextEncoder,EA=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new ce("RESET",null);return await this.postTask(n)}async ping(){let n=new ce("PING",null);await this.postTask(n)}async dropFile(n){let t=new ce("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new ce("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new ce("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new ce("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new ce("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new ce("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new ce("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new ce("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new ce("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new mA(this,n)}async disconnect(n){let t=new ce("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new ce("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new ce("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new ce("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new ce("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new ce("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new ce("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new ce("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new ce("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new ce("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new ce("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new ce("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=MA.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new ce("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new ce("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new ce("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new ce("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new ce("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new ce("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new ce("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new ce("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new ce("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Su(s,a))}e.columnsFlat=r,delete e.columns}let i=new ce("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Su(s,a))}e.columnsFlat=r,delete e.columns}let i=new ce("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return xA((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=bA(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function AA(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}AA();var wA=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(wA||{}),TA=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),RA=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),IA=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),CA=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),DA={version:"1.33.1-dev20.0"},oh=DA.version.split(".");oh[0];oh[1];oh[2];var LA=()=>typeof navigator>"u",sc=null,ac=null,oc=null,lc=null,cc=null;async function PA(){return sc==null&&(sc=typeof BigInt64Array<"u"),ac==null&&(ac=await RA()),oc==null&&(oc=await CA()),lc==null&&(lc=await IA()),cc==null&&(cc=await TA()),{bigInt64Array:sc,crossOriginIsolated:LA()||globalThis.crossOriginIsolated||!1,wasmExceptions:ac,wasmSIMD:lc,wasmThreads:oc,wasmBulkMemory:cc}}async function FA(n){let t=await PA();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}sA(aA());const NA=""+new URL("../assets/duckdb-mvp.BmFzQ2ix.wasm",import.meta.url).href,UA=""+new URL("../assets/duckdb-browser-mvp.worker.Do2wEevy.js",import.meta.url).href,OA=""+new URL("../assets/duckdb-eh.CDxYOdE3.wasm",import.meta.url).href,BA=""+new URL("../assets/duckdb-browser-eh.worker.oJzvuNBU.js",import.meta.url).href,VA=""+new URL("../assets/duckdb-coi.BnMEbEPb.wasm",import.meta.url).href,zA=""+new URL("../assets/duckdb-browser-coi.worker.DzkN1Ktv.js",import.meta.url).href,HA=""+new URL("../assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js",import.meta.url).href;class kA{db=null;connection=null;async initialize(){try{const e=await FA({mvp:{mainModule:NA,mainWorker:UA},eh:{mainModule:OA,mainWorker:BA},coi:{mainModule:VA,mainWorker:zA,pthreadWorker:HA}}),i=new Worker(e.mainWorker),r=new fA;this.db=new EA(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class GA{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;allocateBuffers(t=100){this.capacity=t,de.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),de.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=de.request("GET_RING_BUFFER",{id:this.xBufferId}),i=de.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.bindEvents()}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=a.clientY-e.top;this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}const WA=n=>{W_(n,{})};var ZA=_n("<!> <!> <!>",1),XA=_n('<div class="logic-tree svelte-1uha8ag"><!></div>'),YA=_n('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function nw(n,t){Ge(t,!0);const e=l=>{X_(l,{children:(c,h)=>{var p=qe(),d=He(p);{var _=v=>{a1(v,{})};$t(d,v=>{P(o)&&v(_)})}U(c,p)},$$slots:{default:!0}})};new o1;const i=new Y_,r=new Mb,s=new kA,a=new GA;let o=dc(!1);qd(()=>{a.allocateBuffers(100),yo(o,!0)}),k_(n,{get viewsPanel(){return WA},get settingsPanel(){return e},children:(l,c)=>{var h=YA(),p=He(h),d=ue(p);Im(d,{get graph(){return i},get renderer(){return r},get compute(){return s},get pointer(){return a}}),he(p);var _=Re(p,2);{var v=M=>{var g=XA(),m=ue(g);j_(m,{children:(b,A)=>{K_(b,{id:"mouse-trail",children:(u,f)=>{var T=ZA(),I=He(T);Eh(I,{id:"x-coords",bufferId:"pointer-x"});var S=Re(I,2);Eh(S,{id:"y-coords",bufferId:"pointer-y"});var E=Re(S,2);u1(E,{id:"trail-renderer",textureId:"white-box"}),U(u,T)},$$slots:{default:!0}})},$$slots:{default:!0}}),he(g),U(M,g)};$t(_,M=>{P(o)&&M(v)})}U(l,h)}}),We()}export{nw as component};
