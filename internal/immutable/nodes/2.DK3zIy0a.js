import{a as N,f as Pe,c as Ye,t as Sn,k as Q,e as vl,d as qe,s as Zi,l as mm}from"../chunks/sIUNMqdm.js";import{o as yl,a as uf}from"../chunks/wY5x-DWW.js";import{h as es,f as Dl,au as gm,K as Ll,d as _m,e as vm,q as T,r as ym,ac as Sm,s as Ph,g as Pl,i as ka,aC as xm,aJ as bm,al as Nh,M as Mm,L as wc,b1 as Em,O as Am,b2 as hf,_ as wm,aQ as Tm,aI as Bu,b3 as Rm,a8 as Tc,b4 as Im,b5 as Cm,a3 as Dm,b6 as Ai,W as Lm,G as df,J as ff,b7 as Nl,aa as Pm,b8 as Nm,b9 as Fm,aG as Um,N as Om,I as Bm,aD as Vm,j as zm,b as Hm,U as hi,x as Ne,b0 as Os,u as qs,z as Fe,B as mt,C as dt,F as Mt,a6 as St,y as we,am as tn,aO as Fh,ba as No,a5 as ir,A as Dn,T as Cs,bb as km}from"../chunks/_wvJSINQ.js";import{p as pf,i as Vt,r as xn}from"../chunks/BLyKpr9p.js";import{g as bn,a as Mn,s as Qe,T as Gm,S as mf,l as Rc,b as Ic,c as vs,X as Uh,t as Wm,d as ns,r as Zm,e as ta,f as Ga,h as Xm}from"../chunks/5tP63Txr.js";import{b as Fo,c as Ym}from"../chunks/CnIQd-Uc.js";import{i as qm}from"../chunks/BiojDM0N.js";function Er(n,t){return t}function jm(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];ff(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var f=n.outrogroups;Cc(n,Bu(s.done)),f.delete(s),f.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,h=c.parentNode;Um(h),h.append(c),n.items.clear()}Cc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Cc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Ai;const a=document.createDocumentFragment();Om(s,a)}else Bm(t[r],e)}}var Oh;function Ki(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&hf)!==0;if(l){var c=n;a=es?Dl(gm(c)):c.appendChild(Ll())}es&&_m();var h=null,p=wm(()=>{var A=e();return Tm(A)?A:A==null?[]:Bu(A)}),f,_=new Map,v=!0;function x(A){(b.effect.f&Lm)===0&&(b.pending.delete(A),b.fallback=h,Km(b,f,a,t,i),h!==null&&(f.length===0?(h.f&Ai)===0?df(h):(h.f^=Ai,ua(h,null,a)):ff(h,()=>{h=null})))}function m(A){b.pending.delete(A)}var g=vm(()=>{f=T(p);var A=f.length;let u=!1;if(es){var d=ym(a)===Sm;d!==(A===0)&&(a=Ph(),Dl(a),Pl(!1),u=!0)}for(var w=new Set,I=Mm,S=Am(),E=0;E<A;E+=1){es&&ka.nodeType===xm&&ka.data===bm&&(a=ka,u=!0,Pl(!1));var Y=f[E],D=i(Y,E),B=v?null:o.get(D);B?(B.v&&Nh(B.v,Y),B.i&&Nh(B.i,E),S&&I.unskip_effect(B.e)):(B=Jm(o,v?a:Oh??=Ll(),Y,D,E,r,t,e),v||(B.e.f|=Ai),o.set(D,B)),w.add(D)}if(A===0&&s&&!h&&(v?h=wc(()=>s(a)):(h=wc(()=>s(Oh??=Ll())),h.f|=Ai)),A>w.size&&Em(),es&&A>0&&Dl(Ph()),!v)if(_.set(I,w),S){for(const[z,Z]of o)w.has(z)||I.skip_effect(Z.e);I.oncommit(x),I.ondiscard(m)}else x(I);u&&Pl(!0),T(p)}),b={effect:g,items:o,pending:_,outrogroups:null,fallback:h};v=!1,es&&(a=ka)}function ea(n){for(;n!==null&&(n.f&Nm)===0;)n=n.next;return n}function Km(n,t,e,i,r){var s=(i&Fm)!==0,a=t.length,o=n.items,l=ea(n.effect.first),c,h=null,p,f=[],_=[],v,x,m,g;if(s)for(g=0;g<a;g+=1)v=t[g],x=r(v,g),m=o.get(x).e,(m.f&Ai)===0&&(m.nodes?.a?.measure(),(p??=new Set).add(m));for(g=0;g<a;g+=1){if(v=t[g],x=r(v,g),m=o.get(x).e,n.outrogroups!==null)for(const Y of n.outrogroups)Y.pending.delete(m),Y.done.delete(m);if((m.f&Nl)!==0&&(df(m),s&&(m.nodes?.a?.unfix(),(p??=new Set).delete(m))),(m.f&Ai)!==0)if(m.f^=Ai,m===l)ua(m,null,e);else{var b=h?h.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),fr(n,h,m),fr(n,m,b),ua(m,b,e),h=m,f=[],_=[],l=ea(h.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(f.length<_.length){var A=_[0],u;h=A.prev;var d=f[0],w=f[f.length-1];for(u=0;u<f.length;u+=1)ua(f[u],A,e);for(u=0;u<_.length;u+=1)c.delete(_[u]);fr(n,d.prev,w.next),fr(n,h,d),fr(n,w,A),l=A,h=w,g-=1,f=[],_=[]}else c.delete(m),ua(m,l,e),fr(n,m.prev,m.next),fr(n,m,h===null?n.effect.first:h.next),fr(n,h,m),h=m;continue}for(f=[],_=[];l!==null&&l!==m;)(c??=new Set).add(l),_.push(l),l=ea(l.next);if(l===null)continue}(m.f&Ai)===0&&f.push(m),h=m,l=ea(m.next)}if(n.outrogroups!==null){for(const Y of n.outrogroups)Y.pending.size===0&&(Cc(n,Bu(Y.done)),n.outrogroups?.delete(Y));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(m of c)(m.f&Nl)===0&&I.push(m);for(;l!==null;)(l.f&Nl)===0&&l!==n.fallback&&I.push(l),l=ea(l.next);var S=I.length;if(S>0){var E=(i&hf)!==0&&a===0?e:null;if(s){for(g=0;g<S;g+=1)I[g].nodes?.a?.measure();for(g=0;g<S;g+=1)I[g].nodes?.a?.fix()}jm(n,I,E)}}s&&Pm(()=>{if(p!==void 0)for(m of p)m.nodes?.a?.apply()})}function Jm(n,t,e,i,r,s,a,o){var l=(a&Im)!==0?(a&Cm)===0?Dm(e,!1,!1):Tc(e):null,c=(a&Rm)!==0?Tc(r):null;return{v:l,i:c,e:wc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function ua(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Ai)===0?t.nodes.start:e;i!==null;){var a=Vm(i);if(s.before(i),i===r)return;i=a}}function fr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Qm(n,t,e){zm(()=>{var i=Hm(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function $m(n){var t=Tc(0);return function(){return arguments.length===1?(hi(t,T(t)+1),arguments[0]):(T(t),n())}}class tg{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const te=new tg;class eg{id;type="source";subType="dummy";parentId;output=new Float64Array(0);constructor(t){this.id=t}getOutput(){return this.output}}class ng{id;type="processor";subType="dummy";inputIds=[];parentId;output=new Float64Array(0);constructor(t){this.id=t}process(){return this.output}}class ig{id;type="sink";subType="dummy";inputIds=[];parentId;constructor(t){this.id=t}consume(t){return null}}class gf{id;type="subject";subType="default";inputIds;parentId;constructor(t,e=[]){this.id=t,this.inputIds=e}}class rg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){te.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),te.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),te.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),te.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),te.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),te.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}}class _f{id;type="source";subType="ring-buffer";bufferId;parentId;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutput(){if(!this.ringBuffer)return this.outputBuffer;const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return this.outputBuffer}}class sg{id;type="source";subType="static-array";parentId;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutput(){return this.data}}class ag{id;type="source";subType="time";parentId;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutput(){return this.outputBuffer[0]=performance.now()/1e3,this.outputBuffer}}class og{id;type="source";subType="random";parentId;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutput(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return this.outputBuffer}}function Bh(n,t){Ne(t,!0);const e=Os("subject-parent");qs(()=>{const i=te.request("GET_RING_BUFFER",{id:t.bufferId})||null,r=new _f(t.id,i,t.bufferId);r.parentId=e?.(),te.request("REGISTER_NODE",{node:r})}),Fe()}class lg{id;type="processor";subType="math";inputIds=[];parentId;capacity;operation;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){if(t.length===0)return this.outputBuffer;const e=t[0],i=Math.min(e.length,this.outputBuffer.length);for(let r=0;r<i;r++){let s=e[r];for(let a=1;a<t.length;a++){const o=t[a],l=o.length>1?o[r]:o[0];this.operation==="add"?s+=l:this.operation==="multiply"&&(s*=l)}this.outputBuffer[r]=s}return this.outputBuffer}}class cg{id;type="processor";subType="motion";inputIds;parentId;capacity;outputBuffer;constructor(t,e,i){this.id=t,this.inputIds=e,this.capacity=i,this.outputBuffer=new Float64Array(i)}process(t){if(t.length<2)return this.outputBuffer;const e=t[0],i=t[1],r=Math.min(e.length,i.length,this.outputBuffer.length);for(let s=0;s<r;s++)this.outputBuffer[s]=e[s]+i[s];return this.outputBuffer}}class vf{id;type="sink";subType="sprite";textureId;inputIds;parentId;primitiveCache=[];constructor(t,e,i=[]){this.id=t,this.textureId=e,this.inputIds=i}consume(t){if(t.length<2)return null;let e=t[0],i=t[1];const r=Math.min(e.length,i.length);for(;this.primitiveCache.length<r;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let s=0;s<this.primitiveCache.length;s++)if(s<r)if(e[s]===0&&i[s]===0)this.primitiveCache[s].opacity=0;else{const a=this.primitiveCache[s];a.x=e[s],a.y=i[s],a.opacity=1-s/r}else this.primitiveCache[s].opacity=0;return this.primitiveCache}}class ug{id;type="sink";subType="mesh";textureId;inputIds;parentId;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s,a=[]){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.inputIds=a,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.inputIds.length===0?null:this.primitiveCache}}function hg(n,t){Ne(t,!0);let e=pf(t,"inputIds",19,()=>[]);const i=Os("subject-parent");qs(()=>{const r=new vf(t.id,t.textureId,e());r.parentId=i?.(),te.request("REGISTER_NODE",{node:r});for(let s=0;s<e().length;s++)te.request("CONNECT_NODES",{sourceId:e()[s],targetId:t.id})}),Fe()}class dg{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new eg(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new ag(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new og(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new sg(t,e?.data??[0]);return i.subType="static-array",i}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=te.request("GET_RING_BUFFER",{id:i})||null,s=new _f(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new ng(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new lg(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new cg(t,[],e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new ig(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new vf(t,e?.textureId??"white-box",e?.inputIds??[]);return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=new ug(t,e?.textureId??"white-box",e?.vertices??new Float32Array,e?.indices??new Uint16Array,e?.uvs??new Float32Array,e?.inputIds??[]);return i.subType="mesh",i}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new gf(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){try{await this.compute.initialize()}catch{}try{await this.renderer.initialize(t)}catch{return}this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}setupMediatorHandlers(){te.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),te.emit("GRAPH_UPDATED",void 0),!0)),te.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),te.emit("GRAPH_UPDATED",void 0),!0)),te.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),te.emit("GRAPH_UPDATED",void 0),!0)),te.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),te.emit("GRAPH_UPDATED",void 0),!0)),te.handle("GET_CONTEXT",t=>null),te.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),te.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),te.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,te.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,this.renderer.destroy(),this.compute.destroy()}}var fg=Pe('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function pg(n,t){Ne(t,!0);let e,i,r;qs(()=>{if(!e||!i)return;(async()=>{r=new dg(t.graph,t.renderer,t.compute),await r.boot(e);const c=window.devicePixelRatio||1;t.renderer.resize(i.clientWidth,i.clientHeight,c),t.pointer.initialize(i)})();const l=new ResizeObserver(c=>{for(const h of c){const{width:p,height:f}=h.contentRect;p>0&&f>0&&t.renderer.resize(p,f,window.devicePixelRatio||1)}});return l.observe(i),()=>{l.disconnect(),r&&r.shutdown(),t.pointer.destroy()}});var s=fg(),a=mt(s);Fo(a,o=>e=o,()=>e),dt(s),Fo(s,o=>i=o,()=>i),N(n,s),Fe()}var mg=Q('<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'),gg=Q('<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',1),_g=Q('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'),vg=Q('<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'),yg=Q('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'),Sg=Q('<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'),xg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function bg(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=xg();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=mg();N(u,d)},v=u=>{var d=gg();tn(),N(u,d)},x=u=>{var d=_g();N(u,d)},m=u=>{var d=vg();N(u,d)},g=u=>{var d=yg();N(u,d)},b=u=>{var d=Sg();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var Mg=Q('<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>'),Eg=Q('<path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path>',1),Ag=Q('<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),wg=Q('<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>'),Tg=Q('<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Rg=Q('<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>'),Ig=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Cg(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Ig();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=Mg();N(u,d)},v=u=>{var d=Eg();tn(),N(u,d)},x=u=>{var d=Ag();N(u,d)},m=u=>{var d=wg();N(u,d)},g=u=>{var d=Tg();N(u,d)},b=u=>{var d=Rg();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var Dg=Q('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Lg=Q('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),Pg=Q('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),Ng=Q('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Fg=Q('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Ug=Q('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),Og=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dc(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Og();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=Dg();N(u,d)},v=u=>{var d=Lg();tn(),N(u,d)},x=u=>{var d=Pg();N(u,d)},m=u=>{var d=Ng();N(u,d)},g=u=>{var d=Fg();N(u,d)},b=u=>{var d=Ug();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var Bg=Q('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),Vg=Q('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),zg=Q('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),Hg=Q('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),kg=Q('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),Gg=Q('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),Wg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Zg(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Wg();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=Bg();N(u,d)},v=u=>{var d=Vg();tn(),N(u,d)},x=u=>{var d=zg();N(u,d)},m=u=>{var d=Hg();N(u,d)},g=u=>{var d=kg();N(u,d)},b=u=>{var d=Gg();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var Xg=Q('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),Yg=Q('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),qg=Q('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),jg=Q('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),Kg=Q('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),Jg=Q('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),Qg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function yf(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Qg();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=Xg();N(u,d)},v=u=>{var d=Yg();tn(),N(u,d)},x=u=>{var d=qg();N(u,d)},m=u=>{var d=jg();N(u,d)},g=u=>{var d=Kg();N(u,d)},b=u=>{var d=Jg();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var $g=Q('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),t_=Q('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),e_=Q('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),n_=Q('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),i_=Q('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),r_=Q('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),s_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function a_(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=s_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=$g();N(u,d)},v=u=>{var d=t_();tn(),N(u,d)},x=u=>{var d=e_();N(u,d)},m=u=>{var d=n_();N(u,d)},g=u=>{var d=i_();N(u,d)},b=u=>{var d=r_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var o_=Q('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),l_=Q('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),c_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),u_=Q('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),h_=Q('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),d_=Q('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),f_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function p_(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=f_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=o_();N(u,d)},v=u=>{var d=l_();tn(),N(u,d)},x=u=>{var d=c_();N(u,d)},m=u=>{var d=u_();N(u,d)},g=u=>{var d=h_();N(u,d)},b=u=>{var d=d_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var m_=Q('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),g_=Q('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),__=Q('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),v_=Q('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),y_=Q('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),S_=Q('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),x_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function b_(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=x_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=m_();N(u,d)},v=u=>{var d=g_();tn(),N(u,d)},x=u=>{var d=__();N(u,d)},m=u=>{var d=v_();N(u,d)},g=u=>{var d=y_();N(u,d)},b=u=>{var d=S_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var M_=Q('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),E_=Q('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),A_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),w_=Q('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),T_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),R_=Q('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),I_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function C_(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=I_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=M_();N(u,d)},v=u=>{var d=E_();tn(),N(u,d)},x=u=>{var d=A_();N(u,d)},m=u=>{var d=w_();N(u,d)},g=u=>{var d=T_();N(u,d)},b=u=>{var d=R_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var D_=Q('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),L_=Q('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),P_=Q('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),N_=Q('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),F_=Q('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),U_=Q('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),O_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function B_(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=O_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=D_();N(u,d)},v=u=>{var d=L_();tn(),N(u,d)},x=u=>{var d=P_();N(u,d)},m=u=>{var d=N_();N(u,d)},g=u=>{var d=F_();N(u,d)},b=u=>{var d=U_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var V_=Q('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),z_=Q('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),H_=Q('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),k_=Q('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),G_=Q('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),W_=Q('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),Z_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Sf(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Z_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=V_();N(u,d)},v=u=>{var d=z_();tn(),N(u,d)},x=u=>{var d=H_();N(u,d)},m=u=>{var d=k_();N(u,d)},g=u=>{var d=G_();N(u,d)},b=u=>{var d=W_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var X_=Q('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),Y_=Q('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),q_=Q('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),j_=Q('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),K_=Q('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),J_=Q('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),Q_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function xf(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=Q_();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=X_();N(u,d)},v=u=>{var d=Y_();tn(),N(u,d)},x=u=>{var d=q_();N(u,d)},m=u=>{var d=j_();N(u,d)},g=u=>{var d=K_();N(u,d)},b=u=>{var d=J_();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var $_=Q('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),t1=Q('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),e1=Q('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),n1=Q('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),i1=Q('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),r1=Q('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),s1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function a1(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=s1();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=$_();N(u,d)},v=u=>{var d=t1();tn(),N(u,d)},x=u=>{var d=e1();N(u,d)},m=u=>{var d=n1();N(u,d)},g=u=>{var d=i1();N(u,d)},b=u=>{var d=r1();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var o1=Q('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),l1=Q('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),c1=Q('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),u1=Q('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),h1=Q('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),d1=Q('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),f1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function p1(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=f1();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=o1();N(u,d)},v=u=>{var d=l1();tn(),N(u,d)},x=u=>{var d=c1();N(u,d)},m=u=>{var d=u1();N(u,d)},g=u=>{var d=h1();N(u,d)},b=u=>{var d=d1();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var m1=Q('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),g1=Q('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),_1=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),v1=Q('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),y1=Q('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),S1=Q('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),x1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Vh(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=x1();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=m1();N(u,d)},v=u=>{var d=g1();tn(),N(u,d)},x=u=>{var d=_1();N(u,d)},m=u=>{var d=v1();N(u,d)},g=u=>{var d=y1();N(u,d)},b=u=>{var d=S1();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var b1=Q('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),M1=Q('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),E1=Q('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),A1=Q('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),w1=Q('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),T1=Q('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),R1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function bf(n,t){Ne(t,!0);const e=bn();let i=xn(t,["$$slots","$$events","$$legacy","children"]),r=St(()=>t.weight??e.weight??"regular"),s=St(()=>t.color??e.color??"currentColor"),a=St(()=>t.size??e.size??"1em"),o=St(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:d,color:w,size:I,mirrored:S,...E}=u;return E}var c=R1();Mn(c,(u,d)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:T(a),height:T(a),fill:T(s),transform:T(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...d}),[()=>l(e),()=>l(i)]);var h=mt(c);{var p=u=>{var d=Ye(),w=we(d);Qe(w,()=>t.children),N(u,d)};Vt(h,u=>{t.children&&u(p)})}var f=Mt(h,2);{var _=u=>{var d=b1();N(u,d)},v=u=>{var d=M1();tn(),N(u,d)},x=u=>{var d=E1();N(u,d)},m=u=>{var d=A1();N(u,d)},g=u=>{var d=w1();N(u,d)},b=u=>{var d=T1();N(u,d)},A=u=>{var d=Sn();d.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,d)};Vt(f,u=>{T(r)==="bold"?u(_):T(r)==="duotone"?u(v,1):T(r)==="fill"?u(x,2):T(r)==="light"?u(m,3):T(r)==="regular"?u(g,4):T(r)==="thin"?u(b,5):u(A,-1)})}dt(c),N(n,c),Fe()}var I1=Pe('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function C1(n,t){var e=I1(),i=mt(e),r=mt(i);Gm(r,{}),dt(i);var s=Mt(i,2),a=mt(s);Qe(a,()=>t.children),dt(s);var o=Mt(s,2),l=mt(o);Qe(l,()=>t.viewsPanel??Fh);var c=Mt(l,2);Qe(c,()=>t.settingsPanel??Fh),dt(o),dt(e),N(n,e)}var Fl=$m(()=>Rc),D1=Pe('<div class="views-content"></div>');function L1(n,t){Ne(t,!1),qm(),mf(n,{get isOpen(){return Fl().viewsOpen},onClose:()=>Fl(Fl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=D1();N(e,r)},$$slots:{default:!0}}),Fe()}var P1=Pe('<div class="settings-content"><!></div>');function N1(n,t){Ne(t,!0),mf(n,{get isOpen(){return Rc.settingsOpen},onClose:()=>Rc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=P1(),s=mt(r);{var a=o=>{var l=Ye(),c=we(l);Qe(c,()=>t.children),N(o,l)};Vt(s,o=>{t.children&&o(a)})}dt(r),N(e,r)},$$slots:{default:!0}}),Fe()}class F1{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];inputBufferCache=[];hasInputIds(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputIds(t)&&(t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){this.nodes.delete(t),this.connections=this.connections.filter(e=>e.sourceId!==t&&e.targetId!==t);for(const[e,i]of this.nodes)this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t))}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r)if(r.type==="source"){const a=r.getOutput();this.nodeOutputs.set(r.id,a)}else if(r.type==="processor"){const s=r;this.inputBufferCache.length=0;for(let o=0;o<s.inputIds.length;o++){const l=s.inputIds[o],c=this.nodeOutputs.get(l);c&&this.inputBufferCache.push(c)}const a=s.process(this.inputBufferCache);this.nodeOutputs.set(r.id,a)}else{if(r.type==="subject")continue;if(r.type==="sink"){const s=r;this.inputBufferCache.length=0;for(let o=0;o<s.inputIds.length;o++){const l=s.inputIds[o],c=this.nodeOutputs.get(l);c&&this.inputBufferCache.push(c)}const a=s.consume(this.inputBufferCache);if(a)for(let o=0;o<a.length;o++)this.renderPrimitives.push(a[o])}}}return this.renderPrimitives}}function U1(n,t){Ne(t,!0),No("subject-parent",()=>{});var e=Ye(),i=we(e);{var r=s=>{var a=Ye(),o=we(a);Qe(o,()=>t.children),N(s,a)};Vt(i,s=>{t.children&&s(r)})}N(n,e),Fe()}function O1(n,t){Ne(t,!0);const e=Os("subject-parent");qs(()=>{const a=new gf(t.id);a.parentId=e?.(),te.request("REGISTER_NODE",{node:a})}),No("subject-parent",()=>t.id);var i=Ye(),r=we(i);{var s=a=>{var o=Ye(),l=we(o);Qe(l,()=>t.children),N(a,o)};Vt(r,a=>{t.children&&a(s)})}N(n,i),Fe()}function B1(n,t){return t.filter(e=>e.parentId===n)}var V1=Pe("<button><!> Subject</button>"),z1=Pe("<button><!> Source</button> <button><!> Processor</button> <button><!> Subject</button> <button><!> Sink</button>",1),H1=Pe('<div class="inline-palette"><!></div>');function Mf(n,t){Ne(t,!0);let e=pf(t,"isRoot",3,!1);var i=Ye(),r=we(i);{var s=a=>{var o=H1(),l=mt(o);{var c=p=>{var f=V1(),_=mt(f);Dc(_,{size:14,weight:"fill",style:"color: var(--color-info)"}),tn(),dt(f),qe("click",f,()=>t.onAdd("subject")),N(p,f)},h=p=>{var f=z1(),_=we(f),v=mt(_);Sf(v,{size:14,weight:"fill",style:"color: var(--color-success)"}),tn(),dt(_);var x=Mt(_,2),m=mt(x);bf(m,{size:14,weight:"fill",style:"color: var(--color-warning)"}),tn(),dt(x);var g=Mt(x,2),b=mt(g);Dc(b,{size:14,weight:"fill",style:"color: var(--color-info)"}),tn(),dt(g);var A=Mt(g,2),u=mt(A);yf(u,{size:14,weight:"fill",style:"color: var(--color-error)"}),tn(),dt(A),qe("click",_,()=>t.onAdd("source")),qe("click",x,()=>t.onAdd("processor")),qe("click",g,()=>t.onAdd("subject")),qe("click",A,()=>t.onAdd("sink")),N(p,f)};Vt(l,p=>{e()?p(c):p(h,-1)})}dt(o),N(a,o)};Vt(r,a=>{t.show&&a(s)})}N(n,i),Fe()}vl(["click"]);class k1{#t=ir(null);get selectedNodeId(){return T(this.#t)}set selectedNodeId(t){hi(this.#t,t,!0)}nodeElements=new Map}const kn=new k1;var G1=Pe('<button class="expand-btn"><!></button>'),W1=Pe('<div class="palette-container"><button class="action-btn" title="Add Child Node"><!></button> <!></div>'),Z1=Pe('<div class="children-group"></div>'),X1=Pe('<div class="tree-item"><div role="button" tabindex="0"><div class="node-info"><!> <span><!></span> <span class="node-id"> </span></div> <div class="node-actions"><!> <button class="action-btn danger" title="Delete">✕</button></div></div> <!></div>');function Ef(n,t){Ne(t,!0);const e=Os("graph-actions"),i=Os("palette-state");let r=ir(!0),s=St(()=>i.activeId===t.node.id),a=St(()=>B1(t.node.id,t.nodes)),o=St(()=>T(a).length>0),l=ir(void 0);qs(()=>(T(l)&&kn.nodeElements.set(t.node.id,T(l)),()=>{kn.nodeElements.get(t.node.id)===T(l)&&kn.nodeElements.delete(t.node.id)}));function c(F){F.stopPropagation(),hi(r,!T(r))}function h(F){F.stopPropagation(),i.activeId=T(s)?null:t.node.id}function p(F){e.addNode(t.node.id,F),hi(r,!0)}function f(F){F.stopPropagation(),e.removeNode(t.node.id)}function _(F){F.stopPropagation(),kn.selectedNodeId=t.node.id}function v(F){(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),kn.selectedNodeId=t.node.id)}function x(F){const tt={subject:Dc,source:Sf,sink:yf,processor:bf},et=F.subType||F.id;return{"mouse-input":b_,"keyboard-input":Vh,sprite:C_,mesh:a1,"sprite-atlas":p1,"transform-shader":B_,script:a_,renderer:p_,console:Vh,file:Zg}[et]||tt[F.type]}let m=St(()=>x(t.node));var g=X1(),b=mt(g);let A;var u=mt(b),d=mt(u);{var w=F=>{var tt=G1(),et=mt(tt);{var ct=lt=>{bg(lt,{size:12,weight:"bold"})},_t=lt=>{Cg(lt,{size:12,weight:"bold"})};Vt(et,lt=>{T(r)?lt(ct):lt(_t,-1)})}dt(tt),qe("click",tt,c),N(F,tt)};Vt(d,F=>{T(o)&&F(w)})}var I=Mt(d,2),S=mt(I);Ym(S,()=>T(m),(F,tt)=>{tt(F,{size:16,weight:"fill"})}),dt(I);var E=Mt(I,2),Y=mt(E,!0);dt(E),dt(u);var D=Mt(u,2),B=mt(D);{var z=F=>{var tt=W1(),et=mt(tt),ct=mt(et);xf(ct,{size:10,weight:"bold"}),dt(et);var _t=Mt(et,2);Mf(_t,{get show(){return T(s)},onAdd:p}),dt(tt),qe("click",et,h),N(F,tt)};Vt(B,F=>{t.node.type==="subject"&&F(z)})}var Z=Mt(B,2);dt(D),dt(b),Fo(b,F=>hi(l,F),()=>T(l));var G=Mt(b,2);{var H=F=>{var tt=Z1();Ki(tt,21,()=>T(a),Er,(et,ct)=>{var _t=Ye(),lt=we(_t);Ef(lt,{get node(){return T(ct)},get nodes(){return t.nodes}}),N(et,_t)}),dt(tt),N(F,tt)};Vt(G,F=>{T(o)&&T(r)&&F(H)})}dt(g),Dn(()=>{A=Ic(b,1,"node-row",null,A,{selected:kn.selectedNodeId===t.node.id}),Ic(I,1,`type-icon ${t.node.type??""}`),vs(I,"title",t.node.type),Zi(Y,t.node.id)}),qe("click",b,_),qe("keydown",b,v),qe("click",Z,f),N(n,g),Fe()}vl(["click","keydown"]);var Y1=Pe("<option> </option>"),q1=Pe('<div class="input-group"><label>Implementation</label> <select class="unified-input"></select></div>'),j1=Pe("<option> </option>"),K1=Pe('<div class="input-group"><label>Target Buffer ID</label> <select class="unified-input"><option disabled="">Select a buffer...</option><!></select></div>'),J1=Pe('<div class="input-group"><label>Capacity</label> <input type="number" min="1" step="1" class="unified-input"/></div>'),Q1=Pe('<div class="input-group"><label>Operation</label> <select class="unified-input"><option>Add</option><option>Multiply</option></select></div>'),$1=Pe('<div class="input-group"><label>Data (comma separated)</label> <textarea class="unified-input" rows="3"></textarea></div>'),tv=Pe("<option> </option>"),ev=Pe('<div class="input-group"><label>Texture ID</label> <select class="unified-input"></select></div>'),nv=Pe('<div class="input-group"><label>Vertices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>Indices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>UVs</label> <textarea class="unified-input" rows="2"></textarea></div>',1),iv=Pe('<div class="connection-item"><span class="conn-id"><span style="color: var(--text-muted); margin-right: 4px; font-weight: 700;"> </span> </span> <button class="btn-icon danger"><!></button></div>'),rv=Pe("<option> </option>"),sv=Pe('<div class="divider"></div> <div class="input-group"><label>Input Connections</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="" selected="">+ Connect Node...</option><!></select></div></div>',1),av=Pe('<div class="node-properties" style="height: 320px;"><div class="resize-handle"></div> <div class="props-header"><div class="header-title"><h4> </h4> <span> </span></div> <button class="btn-icon"><!></button></div> <div class="props-content"><!> <div class="divider"></div> <!> <!> <!> <!> <!> <!> <!></div></div>');function ov(n,t){Ne(t,!0);const e=Os("graph-actions");let i=St(()=>t.nodes.find(x=>x.id===kn.selectedNodeId)),r=ir(Cs({})),s=ir(Cs([])),a=["white-box","circle","triangle","star","particle"];function o(x){let m=!1,g=0,b=0;function A(w){m=!0,g=w.clientY,b=x.parentElement.clientHeight,x.setPointerCapture(w.pointerId)}function u(w){if(!m)return;const I=g-w.clientY,S=Math.max(150,Math.min(b+I,window.innerHeight-100));x.parentElement.style.height=`${S}px`}function d(w){m=!1,x.releasePointerCapture(w.pointerId)}return x.addEventListener("pointerdown",A),x.addEventListener("pointermove",u),x.addEventListener("pointerup",d),x.addEventListener("pointercancel",d),{destroy(){x.removeEventListener("pointerdown",A),x.removeEventListener("pointermove",u),x.removeEventListener("pointerup",d),x.removeEventListener("pointercancel",d)}}}function l(){T(i)&&T(i).subType==="ring-buffer"&&hi(s,te.request("GET_AVAILABLE_BUFFERS",void 0),!0)}yl(()=>{hi(r,te.request("GET_NODE_FACTORIES",void 0),!0),te.on("GRAPH_UPDATED",l)}),uf(()=>{te.off("GRAPH_UPDATED",l)}),qs(()=>{l()});function c(x){if(!T(i))return;const m=x.target,g=m.value;g&&(e.connectInput(T(i).id,g),m.value="")}function h(x,m){if(x==="sprite"){if(m===0)return"X:";if(m===1)return"Y:"}else if(x==="motion"){if(m===0)return"POS:";if(m===1)return"VEL:"}return`IN ${m}:`}let p=St(()=>T(i)?t.nodes.filter(x=>(x.type==="source"||x.type==="processor"||x.type==="subject")&&x.id!==T(i).id&&!(T(i).inputIds||[]).includes(x.id)):[]);var f=Ye(),_=we(f);{var v=x=>{const m=St(()=>T(i).type==="subject"?"info":T(i).type==="source"?"success":T(i).type==="processor"?"warning":"error");var g=av(),b=mt(g);Qm(b,$=>o?.($));var A=Mt(b,2),u=mt(A),d=mt(u),w=mt(d,!0);dt(d);var I=Mt(d,2),S=mt(I,!0);dt(I),dt(u);var E=Mt(u,2),Y=mt(E);Uh(Y,{size:14,weight:"bold"}),dt(E),dt(A);var D=Mt(A,2),B=mt(D);{var z=$=>{var xt=q1(),ft=Mt(mt(xt),2);Ki(ft,21,()=>T(r)[T(i).type],Er,(pt,ne)=>{var wt=Y1(),$t=mt(wt,!0);dt(wt);var Jt={};Dn(()=>{ns(wt,T(i).subType===T(ne).subType||T(i).subType===void 0&&T(ne).subType==="dummy"),Zi($t,T(ne).label),Jt!==(Jt=T(ne).subType)&&(wt.value=(wt.__value=T(ne).subType)??"")}),N(pt,wt)}),dt(ft),dt(xt),qe("change",ft,pt=>e.changeNodeSubType(T(i),pt.currentTarget.value)),N($,xt)};Vt(B,$=>{T(r)[T(i).type]&&T(r)[T(i).type].length>0&&$(z)})}var Z=Mt(B,4);{var G=$=>{var xt=K1(),ft=Mt(mt(xt),2),pt=mt(ft);pt.value=pt.__value="";var ne=Mt(pt);Ki(ne,17,()=>T(s),Er,(wt,$t)=>{var Jt=j1(),Bt=mt(Jt,!0);dt(Jt);var le={};Dn(()=>{ns(Jt,T(i).bufferId===T($t)),Zi(Bt,T($t)),le!==(le=T($t))&&(Jt.value=(Jt.__value=T($t))??"")}),N(wt,Jt)}),dt(ft),dt(xt),Dn(()=>ns(pt,!T(i).bufferId)),qe("change",ft,wt=>e.updateNodeConfig(T(i),{bufferId:wt.currentTarget.value})),N($,xt)};Vt(Z,$=>{T(i).subType==="ring-buffer"&&$(G)})}var H=Mt(Z,2);{var F=$=>{var xt=J1(),ft=Mt(mt(xt),2);Zm(ft),dt(xt),Dn(()=>ta(ft,T(i).capacity||100)),qe("change",ft,pt=>e.updateNodeConfig(T(i),{capacity:parseInt(pt.currentTarget.value)||100})),N($,xt)};Vt(H,$=>{(T(i).subType==="random"||T(i).subType==="math"||T(i).subType==="motion")&&$(F)})}var tt=Mt(H,2);{var et=$=>{var xt=Q1(),ft=Mt(mt(xt),2),pt=mt(ft);pt.value=pt.__value="add";var ne=Mt(pt);ne.value=ne.__value="multiply",dt(ft),dt(xt),Dn(()=>{ns(pt,T(i).operation==="add"),ns(ne,T(i).operation==="multiply")}),qe("change",ft,wt=>e.updateNodeConfig(T(i),{operation:wt.currentTarget.value})),N($,xt)};Vt(tt,$=>{T(i).subType==="math"&&$(et)})}var ct=Mt(tt,2);{var _t=$=>{var xt=$1(),ft=Mt(mt(xt),2);Ga(ft),dt(xt),Dn(pt=>ta(ft,pt),[()=>(T(i).data?Array.from(T(i).data):[]).join(", ")]),qe("change",ft,pt=>e.updateNodeConfig(T(i),{data:pt.currentTarget.value.split(",").map(ne=>parseFloat(ne.trim())||0)})),N($,xt)};Vt(ct,$=>{T(i).subType==="static-array"&&$(_t)})}var lt=Mt(ct,2);{var ee=$=>{var xt=ev(),ft=Mt(mt(xt),2);Ki(ft,21,()=>a,Er,(pt,ne)=>{var wt=tv(),$t=mt(wt,!0);dt(wt);var Jt={};Dn(()=>{ns(wt,T(i).textureId===T(ne)),Zi($t,T(ne)),Jt!==(Jt=T(ne))&&(wt.value=(wt.__value=T(ne))??"")}),N(pt,wt)}),dt(ft),dt(xt),qe("change",ft,pt=>e.updateNodeConfig(T(i),{textureId:pt.currentTarget.value})),N($,xt)};Vt(lt,$=>{(T(i).subType==="sprite"||T(i).subType==="mesh")&&$(ee)})}var Ve=Mt(lt,2);{var ze=$=>{var xt=nv(),ft=we(xt),pt=Mt(mt(ft),2);Ga(pt),dt(ft);var ne=Mt(ft,2),wt=Mt(mt(ne),2);Ga(wt),dt(ne);var $t=Mt(ne,2),Jt=Mt(mt($t),2);Ga(Jt),dt($t),Dn((Bt,le,L)=>{ta(pt,Bt),ta(wt,le),ta(Jt,L)},[()=>(T(i).vertices?Array.from(T(i).vertices):[]).join(", "),()=>(T(i).indices?Array.from(T(i).indices):[]).join(", "),()=>(T(i).uvs?Array.from(T(i).uvs):[]).join(", ")]),qe("change",pt,Bt=>e.updateNodeConfig(T(i),{vertices:new Float32Array(Bt.currentTarget.value.split(",").map(le=>parseFloat(le.trim())||0))})),qe("change",wt,Bt=>e.updateNodeConfig(T(i),{indices:new Uint16Array(Bt.currentTarget.value.split(",").map(le=>parseInt(le.trim())||0))})),qe("change",Jt,Bt=>e.updateNodeConfig(T(i),{uvs:new Float32Array(Bt.currentTarget.value.split(",").map(le=>parseFloat(le.trim())||0))})),N($,xt)};Vt(Ve,$=>{T(i).subType==="mesh"&&$(ze)})}var J=Mt(Ve,2);{var ot=$=>{var xt=sv(),ft=Mt(we(xt),2),pt=Mt(mt(ft),2),ne=mt(pt);Ki(ne,17,()=>T(i).inputIds,Er,(Bt,le,L)=>{var Ge=iv(),pe=mt(Ge),be=mt(pe),Tt=mt(be,!0);dt(be);var R=Mt(be);dt(pe);var y=Mt(pe,2),U=mt(y);Uh(U,{size:12,weight:"bold"}),dt(y),dt(Ge),Dn(K=>{Zi(Tt,K),Zi(R,` ${T(le)??""}`)},[()=>h(T(i).subType,L)]),qe("click",y,()=>e.disconnectInput(T(i).id,T(le))),N(Bt,Ge)});var wt=Mt(ne,2),$t=mt(wt);$t.value=$t.__value="";var Jt=Mt($t);Ki(Jt,17,()=>T(p),Er,(Bt,le)=>{var L=rv(),Ge=mt(L);dt(L);var pe={};Dn(()=>{Zi(Ge,`${T(le).id??""} (${T(le).type??""})`),pe!==(pe=T(le).id)&&(L.value=(L.__value=T(le).id)??"")}),N(Bt,L)}),dt(wt),dt(pt),dt(ft),qe("change",wt,c),N($,xt)};Vt(J,$=>{T(i).inputIds!==void 0&&$(ot)})}dt(D),dt(g),Dn(()=>{Zi(w,T(i).id),Ic(I,1,`badge ${T(m)??""}`),Zi(S,T(i).type)}),qe("click",E,()=>kn.selectedNodeId=null),Wm(3,g,()=>Xm,()=>({y:50,duration:250})),N(x,g)};Vt(_,x=>{T(i)&&x(v)})}N(n,f),Fe()}vl(["click","change"]);var lv=Q('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),cv=Q('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path"></path>'),uv=Q('<svg class="data-connections-layer" style="pointer-events: none; z-index: 1;"><defs></defs><!></svg>');function hv(n,t){Ne(t,!0);let e,i=ir(Cs([]));const r=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4"];function s(){if(!e)return;const c=e.getBoundingClientRect();if(c.width===0||c.height===0)return;const h=new Map;for(let u=0;u<t.connections.length;u++){const d=t.connections[u];h.has(d.sourceId)||h.set(d.sourceId,[]),h.get(d.sourceId).push(d.targetId)}const p=[];for(let u=0;u<t.nodes.length;u++){const d=t.nodes[u],w=[d.id],I=new Set,S=new Set;for(;w.length>0;){const E=w.shift(),Y=h.get(E)||[];for(let D=0;D<Y.length;D++){const B=Y[D];if(I.has(B))continue;I.add(B);const z=t.nodes.find(Z=>Z.id===B);z&&(z.type==="subject"?w.push(B):S.add(B))}}for(const E of S)p.push({sourceId:d.id,targetId:E})}const f=new Map;for(let u=0;u<p.length;u++){const d=p[u],w=d.sourceId+"->"+d.targetId;f.set(w,d)}const v=Array.from(f.values()).sort((u,d)=>u.sourceId.localeCompare(d.sourceId)),x=new Map,m=new Map;for(let u=0;u<v.length;u++){const d=v[u];x.set(d.sourceId,(x.get(d.sourceId)||0)+1),m.set(d.targetId,(m.get(d.targetId)||0)+1)}const g=new Map,b=new Map,A=[];for(let u=0;u<v.length;u++){const d=v[u],w=kn.nodeElements.get(d.sourceId),I=kn.nodeElements.get(d.targetId);if(w&&I){const S=w.getBoundingClientRect(),E=I.getBoundingClientRect(),Y=x.get(d.sourceId)||1,D=g.get(d.sourceId)||0;g.set(d.sourceId,D+1);const B=m.get(d.targetId)||1,z=b.get(d.targetId)||0;b.set(d.targetId,z+1);const Z=(D-(Y-1)/2)*4,G=(z-(B-1)/2)*4,H=S.top+S.height/2-c.top+Z,F=S.left-c.left-2,tt=E.top+E.height/2-c.top+G,et=E.left-c.left-2,ct=Math.min(F,et)-12-u*4,_t=`M ${F} ${H} L ${ct} ${H} L ${ct} ${tt} L ${et} ${tt}`,lt=u%r.length,ee=r[lt];A.push({id:`${d.sourceId}-${d.targetId}-${u}`,path:_t,color:ee,markerId:`arrow-${lt}`})}}hi(i,A,!0)}yl(()=>{const c=new ResizeObserver(s);c.observe(document.body),window.addEventListener("scroll",s,!0);const h=setInterval(s,100);return()=>{c.disconnect(),window.removeEventListener("scroll",s,!0),clearInterval(h)}});var a=uv(),o=mt(a);Ki(o,21,()=>r,Er,(c,h,p)=>{var f=lv();vs(f,"id",`arrow-${p}`);var _=mt(f);dt(f),Dn(()=>vs(_,"fill",T(h))),N(c,f)}),dt(o);var l=Mt(o);Ki(l,17,()=>T(i),c=>c.id,(c,h)=>{var p=cv();Dn(()=>{vs(p,"d",T(h).path),vs(p,"stroke",T(h).color),vs(p,"marker-end",`url(#${T(h).markerId??""})`)}),N(c,p)}),dt(a),Fo(a,c=>e=c,()=>e),N(n,a),Fe()}var dv=Pe('<div class="editor"><div class="editor-content"><div class="editor-header"><h3>Graph Editor</h3> <div class="palette-container"><button class="btn-action" title="Add Root Node"><!></button> <!></div></div> <div class="tree-wrapper"><!> <div class="tree"></div></div></div> <!></div>');function fv(n,t){Ne(t,!0);let e=ir(Cs([])),i=ir(Cs([]));const r=Cs({activeId:null});No("palette-state",r);let s=St(()=>r.activeId==="root"),a=St(()=>T(e).filter(d=>!d.parentId));function o(){const d=te.request("GET_GRAPH_STATE",void 0);d&&(hi(e,d.nodes,!0),hi(i,d.connections,!0))}yl(()=>{o(),te.on("GRAPH_UPDATED",o)}),uf(()=>{te.off("GRAPH_UPDATED",o)});function l(d){d.stopPropagation(),r.activeId=T(s)?null:"root"}const c={removeNode:d=>{te.request("REMOVE_NODE",{id:d}),kn.selectedNodeId===d&&(kn.selectedNodeId=null)},addNode:(d,w)=>{const I=w+"-"+Math.random().toString(36).substring(2,6),S=w==="subject"?"default":"dummy",E=te.request("CREATE_NODE",{id:I,type:w,subType:S,parentId:d||void 0});E&&(te.request("REGISTER_NODE",{node:E}),r.activeId=null,kn.selectedNodeId=I)},updateNodeConfig:(d,w)=>{const I={capacity:d.capacity,operation:d.operation,textureId:d.textureId,bufferId:d.bufferId,data:d.data?Array.from(d.data):void 0,vertices:d.vertices,indices:d.indices,uvs:d.uvs,xInputId:d.xInputId,yInputId:d.yInputId,...w},S=te.request("CREATE_NODE",{id:d.id,type:d.type,subType:d.subType||"dummy",parentId:d.parentId,config:I});S&&("inputIds"in d&&"inputIds"in S&&(S.inputIds=[...d.inputIds]),te.request("REGISTER_NODE",{node:S}))},changeNodeSubType:(d,w)=>{const I=te.request("CREATE_NODE",{id:d.id,type:d.type,subType:w,parentId:d.parentId,config:{}});I&&("inputIds"in d&&"inputIds"in I&&(I.inputIds=[...d.inputIds]),te.request("REGISTER_NODE",{node:I}))},connectInput:(d,w)=>{te.request("CONNECT_NODES",{sourceId:w,targetId:d})},disconnectInput:(d,w)=>{te.request("DISCONNECT_NODES",{sourceId:w,targetId:d})}};No("graph-actions",c);var h=dv();mm("click",km,()=>r.activeId=null);var p=mt(h),f=mt(p),_=Mt(mt(f),2),v=mt(_),x=mt(v);xf(x,{size:12,weight:"bold"}),dt(v);var m=Mt(v,2);Mf(m,{get show(){return T(s)},isRoot:!0,onAdd:d=>c.addNode(null,d)}),dt(_),dt(f);var g=Mt(f,2),b=mt(g);hv(b,{get connections(){return T(i)},get nodes(){return T(e)}});var A=Mt(b,2);Ki(A,21,()=>T(a),Er,(d,w)=>{Ef(d,{get node(){return T(w)},get nodes(){return T(e)}})}),dt(A),dt(g),dt(p);var u=Mt(p,2);ov(u,{get nodes(){return T(e)}}),dt(h),qe("click",v,l),N(n,h),Fe()}vl(["click"]);const Vu="183",pv=0,zh=1,mv=2,_o=1,gv=2,ha=3,Tr=0,Fn=1,li=2,tr=0,Ds=1,Hh=2,kh=3,Gh=4,_v=5,Gr=100,vv=101,yv=102,Sv=103,xv=104,bv=200,Mv=201,Ev=202,Av=203,Lc=204,Pc=205,wv=206,Tv=207,Rv=208,Iv=209,Cv=210,Dv=211,Lv=212,Pv=213,Nv=214,Nc=0,Fc=1,Uc=2,Bs=3,Oc=4,Bc=5,Vc=6,zc=7,Af=0,Fv=1,Uv=2,Ci=0,wf=1,Tf=2,Rf=3,If=4,Cf=5,Df=6,Lf=7,Pf=300,jr=301,Vs=302,Ul=303,Ol=304,Sl=306,Hc=1e3,$i=1001,kc=1002,fn=1003,Ov=1004,Wa=1005,_n=1006,Bl=1007,Zr=1008,Qn=1009,Nf=1010,Ff=1011,ba=1012,zu=1013,Pi=1014,wi=1015,rr=1016,Hu=1017,ku=1018,Ma=1020,Uf=35902,Of=35899,Bf=1021,Vf=1022,ui=1023,sr=1026,Xr=1027,zf=1028,Gu=1029,zs=1030,Wu=1031,Zu=1033,vo=33776,yo=33777,So=33778,xo=33779,Gc=35840,Wc=35841,Zc=35842,Xc=35843,Yc=36196,qc=37492,jc=37496,Kc=37488,Jc=37489,Qc=37490,$c=37491,tu=37808,eu=37809,nu=37810,iu=37811,ru=37812,su=37813,au=37814,ou=37815,lu=37816,cu=37817,uu=37818,hu=37819,du=37820,fu=37821,pu=36492,mu=36494,gu=36495,_u=36283,vu=36284,yu=36285,Su=36286,Bv=3200,Vv=0,zv=1,Ar="",qn="srgb",Hs="srgb-linear",Uo="linear",De="srgb",is=7680,Wh=519,Hv=512,kv=513,Gv=514,Xu=515,Wv=516,Zv=517,Yu=518,Xv=519,Zh=35044,Xh="300 es",Ti=2e3,Oo=2001;function Yv(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qv(){const n=Bo("canvas");return n.style.display="block",n}const Yh={};function qh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Hf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function re(...n){n=Hf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Se(...n){n=Hf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Vo(...n){const t=n.join(" ");t in Yh||(Yh[t]=!0,re(...n))}function jv(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Kv={[Nc]:Fc,[Uc]:Vc,[Oc]:zc,[Bs]:Bc,[Fc]:Nc,[Vc]:Uc,[zc]:Oc,[Bc]:Bs};class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,xu=180/Math.PI;function Da(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function ge(n,t,e){return Math.max(t,Math.min(e,n))}function Jv(n,t){return(n%t+t)%t}function zl(n,t,e){return(1-e)*n+e*t}function na(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(t=0,e=0){Be.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],_=s[a+1],v=s[a+2],x=s[a+3];if(p!==x||l!==f||c!==_||h!==v){let m=l*f+c*_+h*v+p*x;m<0&&(f=-f,_=-_,v=-v,x=-x,m=-m);let g=1-o;if(m<.9995){const b=Math.acos(m),A=Math.sin(b);g=Math.sin(g*b)/A,o=Math.sin(o*b)/A,l=l*g+f*o,c=c*g+_*o,h=h*g+v*o,p=p*g+x*o}else{l=l*g+f*o,c=c*g+_*o,h=h*g+v*o,p=p*g+x*o;const b=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=b,c*=b,h*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return t[e]=o*v+h*p+l*_-c*f,t[e+1]=l*v+h*f+c*p-o*_,t[e+2]=c*v+h*_+o*f-l*p,t[e+3]=h*v-o*p-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*_*v,this._y=c*_*p-f*h*v,this._z=c*h*v+f*_*p,this._w=c*h*p-f*_*v;break;case"YXZ":this._x=f*h*p+c*_*v,this._y=c*_*p-f*h*v,this._z=c*h*v-f*_*p,this._w=c*h*p+f*_*v;break;case"ZXY":this._x=f*h*p-c*_*v,this._y=c*_*p+f*h*v,this._z=c*h*v+f*_*p,this._w=c*h*p-f*_*v;break;case"ZYX":this._x=f*h*p-c*_*v,this._y=c*_*p+f*h*v,this._z=c*h*v-f*_*p,this._w=c*h*p+f*_*v;break;case"YZX":this._x=f*h*p+c*_*v,this._y=c*_*p+f*h*v,this._z=c*h*v-f*_*p,this._w=c*h*p-f*_*v;break;case"XZY":this._x=f*h*p-c*_*v,this._y=c*_*p-f*h*v,this._z=c*h*v+f*_*p,this._w=c*h*p+f*_*v;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=i+o+p;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new W,jh=new Ks;class ae{constructor(t,e,i,r,s,a,o,l,c){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],_=i[5],v=i[8],x=r[0],m=r[3],g=r[6],b=r[1],A=r[4],u=r[7],d=r[2],w=r[5],I=r[8];return s[0]=a*x+o*b+l*d,s[3]=a*m+o*A+l*w,s[6]=a*g+o*u+l*I,s[1]=c*x+h*b+p*d,s[4]=c*m+h*A+p*w,s[7]=c*g+h*u+p*I,s[2]=f*x+_*b+v*d,s[5]=f*m+_*A+v*w,s[8]=f*g+_*u+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,f=o*l-h*s,_=c*s-a*l,v=e*p+i*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=p*x,t[1]=(r*c-h*i)*x,t[2]=(o*i-r*a)*x,t[3]=f*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=_*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new ae,Kh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qv(){const n={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===De&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hs]:{primaries:t,whitePoint:i,transfer:Uo,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const ve=Qv();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class $v{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=Bo("canvas")),rs.width=t.width,rs.height=t.height;const r=rs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(er(e[i]/255)*255):e[i]=er(e[i]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ty=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Da(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gl(r[a].image)):s.push(Gl(r[a]))}else s=Gl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let ey=0;const Wl=new W;class Rn extends js{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,i=$i,r=$i,s=_n,a=Zr,o=ui,l=Qn,c=Rn.DEFAULT_ANISOTROPY,h=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Da(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Pf;Rn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,e=0,i=0,r=1){en.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],_=l[5],v=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,u=(_+1)/2,d=(g+1)/2,w=(h+f)/4,I=(p+x)/4,S=(v+m)/4;return A>u&&A>d?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=w/i,s=I/i):u>d?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=w/r,s=S/r):d<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(d),i=I/s,r=S/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-v)*(m-v)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(p-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+_+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ny extends js{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new qu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends ny{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kf extends Rn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iy extends Rn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t,e,i,r,s,a,o,l,c,h,p,f,_,v,x,m){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,p,f,_,v,x,m)}set(t,e,i,r,s,a,o,l,c,h,p,f,_,v,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=f,g[3]=_,g[7]=v,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const f=a*h,_=a*p,v=o*h,x=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,_=l*p,v=c*h,x=c*p;e[0]=f+x*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=_*o-v,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,_=l*p,v=c*h,x=c*p;e[0]=f-x*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,_=a*p,v=o*h,x=o*p;e[0]=l*h,e[4]=v*c-_,e[8]=f*c+x,e[1]=l*p,e[5]=x*c+f,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,_=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=x-f*p,e[8]=v*p+_,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*p+v,e[10]=f-x*p}else if(t.order==="XZY"){const f=a*l,_=a*c,v=o*l,x=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+x,e[5]=a*h,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*h,e[10]=x*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ry,t,sy)}lookAt(t,e,i){const r=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),pr.crossVectors(i,Vn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),pr.crossVectors(i,Vn)),pr.normalize(),Za.crossVectors(Vn,pr),r[0]=pr.x,r[4]=Za.x,r[8]=Vn.x,r[1]=pr.y,r[5]=Za.y,r[9]=Vn.y,r[2]=pr.z,r[6]=Za.z,r[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],_=i[13],v=i[2],x=i[6],m=i[10],g=i[14],b=i[3],A=i[7],u=i[11],d=i[15],w=r[0],I=r[4],S=r[8],E=r[12],Y=r[1],D=r[5],B=r[9],z=r[13],Z=r[2],G=r[6],H=r[10],F=r[14],tt=r[3],et=r[7],ct=r[11],_t=r[15];return s[0]=a*w+o*Y+l*Z+c*tt,s[4]=a*I+o*D+l*G+c*et,s[8]=a*S+o*B+l*H+c*ct,s[12]=a*E+o*z+l*F+c*_t,s[1]=h*w+p*Y+f*Z+_*tt,s[5]=h*I+p*D+f*G+_*et,s[9]=h*S+p*B+f*H+_*ct,s[13]=h*E+p*z+f*F+_*_t,s[2]=v*w+x*Y+m*Z+g*tt,s[6]=v*I+x*D+m*G+g*et,s[10]=v*S+x*B+m*H+g*ct,s[14]=v*E+x*z+m*F+g*_t,s[3]=b*w+A*Y+u*Z+d*tt,s[7]=b*I+A*D+u*G+d*et,s[11]=b*S+A*B+u*H+d*ct,s[15]=b*E+A*z+u*F+d*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],_=t[14],v=t[3],x=t[7],m=t[11],g=t[15],b=l*_-c*f,A=o*_-c*p,u=o*f-l*p,d=a*_-c*h,w=a*f-l*h,I=a*p-o*h;return e*(x*b-m*A+g*u)-i*(v*b-m*d+g*w)+r*(v*A-x*d+g*I)-s*(v*u-x*w+m*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],_=t[11],v=t[12],x=t[13],m=t[14],g=t[15],b=e*o-i*a,A=e*l-r*a,u=e*c-s*a,d=i*l-r*o,w=i*c-s*o,I=r*c-s*l,S=h*x-p*v,E=h*m-f*v,Y=h*g-_*v,D=p*m-f*x,B=p*g-_*x,z=f*g-_*m,Z=b*z-A*B+u*D+d*Y-w*E+I*S;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/Z;return t[0]=(o*z-l*B+c*D)*G,t[1]=(r*B-i*z-s*D)*G,t[2]=(x*I-m*w+g*d)*G,t[3]=(f*w-p*I-_*d)*G,t[4]=(l*Y-a*z-c*E)*G,t[5]=(e*z-r*Y+s*E)*G,t[6]=(m*u-v*I-g*A)*G,t[7]=(h*I-f*u+_*A)*G,t[8]=(a*B-o*Y+c*S)*G,t[9]=(i*Y-e*B-s*S)*G,t[10]=(v*w-x*u+g*b)*G,t[11]=(p*u-h*w-_*b)*G,t[12]=(o*E-a*D-l*S)*G,t[13]=(e*D-i*E+r*S)*G,t[14]=(x*A-v*d-m*b)*G,t[15]=(h*d-p*A+f*b)*G,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,p=o+o,f=s*c,_=s*h,v=s*p,x=a*h,m=a*p,g=o*p,b=l*c,A=l*h,u=l*p,d=i.x,w=i.y,I=i.z;return r[0]=(1-(x+g))*d,r[1]=(_+u)*d,r[2]=(v-A)*d,r[3]=0,r[4]=(_-u)*w,r[5]=(1-(f+g))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(v+A)*I,r[9]=(m-b)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),l=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ii.copy(this);const c=1/a,h=1/o,p=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=p,ii.elements[9]*=p,ii.elements[10]*=p,e.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Ti,l=!1){const c=this.elements,h=2*s/(e-t),p=2*s/(i-r),f=(e+t)/(e-t),_=(i+r)/(i-r);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===Ti)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Oo)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ti,l=!1){const c=this.elements,h=2/(e-t),p=2/(i-r),f=-(e+t)/(e-t),_=-(i+r)/(i-r);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===Ti)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===Oo)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ss=new W,ii=new sn,ry=new W(0,0,0),sy=new W(1,1,1),pr=new W,Za=new W,Vn=new W,Qh=new sn,$h=new Ks;class ar{constructor(t=0,e=0,i=0,r=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ay=0;const td=new W,as=new Ks,zi=new sn,Xa=new W,ia=new W,oy=new W,ly=new Ks,ed=new W(1,0,0),nd=new W(0,1,0),id=new W(0,0,1),rd={type:"added"},cy={type:"removed"},os={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Wn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new W,e=new ar,i=new Ks,r=new W(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new ae}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xa.copy(t):Xa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ia,Xa,this.up):zi.lookAt(Xa,ia,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(zi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),os.child=t,this.dispatchEvent(os),os.child=null):Se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cy),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,oy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),f=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Wn.DEFAULT_UP=new W(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ya extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Me{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ve.workingColorSpace){return this.r=t,this.g=e,this.b=i,ve.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ve.workingColorSpace){if(t=Jv(t,1),e=ge(e,0,1),i=ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Yl(a,s,t+1/3),this.g=Yl(a,s,t),this.b=Yl(a,s,t-1/3)}return ve.colorSpaceToWorking(this,r),this}setStyle(t,e=qn){function i(s){s!==void 0&&parseFloat(s)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){const i=Wf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return ve.workingToColorSpace(gn.copy(this),t),Math.round(ge(gn.r*255,0,255))*65536+Math.round(ge(gn.g*255,0,255))*256+Math.round(ge(gn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(gn.copy(this),e);const i=gn.r,r=gn.g,s=gn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=qn){ve.workingToColorSpace(gn.copy(this),t);const e=gn.r,i=gn.g,r=gn.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(mr),this.setHSL(mr.h+t,mr.s+e,mr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mr),t.getHSL(qa);const i=zl(mr.h,qa.h,e),r=zl(mr.s,qa.s,e),s=zl(mr.l,qa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Me;Me.NAMES=Wf;class hy extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ri=new W,Hi=new W,ql=new W,ki=new W,ls=new W,cs=new W,sd=new W,jl=new W,Kl=new W,Jl=new W,Ql=new en,$l=new en,tc=new en;class ci{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ri.subVectors(t,e),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ri.subVectors(r,e),Hi.subVectors(i,e),ql.subVectors(t,e);const a=ri.dot(ri),o=ri.dot(Hi),l=ri.dot(ql),c=Hi.dot(Hi),h=Hi.dot(ql),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,_=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ql.setScalar(0),$l.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ql,s.x),a.addScaledVector($l,s.y),a.addScaledVector(tc,s.z),a}static isFrontFacing(t,e,i,r){return ri.subVectors(i,e),Hi.subVectors(t,e),ri.cross(Hi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ri.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ci.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),jl.subVectors(t,i);const l=ls.dot(jl),c=cs.dot(jl);if(l<=0&&c<=0)return e.copy(i);Kl.subVectors(t,r);const h=ls.dot(Kl),p=cs.dot(Kl);if(h>=0&&p<=h)return e.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ls,a);Jl.subVectors(t,s);const _=ls.dot(Jl),v=cs.dot(Jl);if(v>=0&&_<=v)return e.copy(s);const x=_*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(cs,o);const m=h*v-_*p;if(m<=0&&p-h>=0&&_-v>=0)return sd.subVectors(s,r),o=(p-h)/(p-h+(_-v)),e.copy(r).addScaledVector(sd,o);const g=1/(m+x+f);return a=x*g,o=f*g,e.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class La{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),Ka.subVectors(this.max,ra),us.subVectors(t.a,ra),hs.subVectors(t.b,ra),ds.subVectors(t.c,ra),gr.subVectors(hs,us),_r.subVectors(ds,hs),Fr.subVectors(us,ds);let e=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Fr.z,Fr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Fr.z,0,-Fr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Fr.y,Fr.x,0];return!ec(e,us,hs,ds,Ka)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,us,hs,ds,Ka))?!1:(Ja.crossVectors(gr,_r),e=[Ja.x,Ja.y,Ja.z],ec(e,us,hs,ds,Ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gi=[new W,new W,new W,new W,new W,new W,new W,new W],si=new W,ja=new La,us=new W,hs=new W,ds=new W,gr=new W,_r=new W,Fr=new W,ra=new W,Ka=new W,Ja=new W,Ur=new W;function ec(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ur.fromArray(n,s);const o=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=t.dot(Ur),c=e.dot(Ur),h=i.dot(Ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rn=new W,Qa=new Be;let dy=0;class Li{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=na(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=na(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=na(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=na(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=na(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),r=Cn(r,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),t}}class Zf extends Li{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Xf extends Li{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class nr extends Li{constructor(t,e,i){super(new Float32Array(t),e,i)}}const fy=new La,sa=new W,nc=new W;class ju{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fy.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);const e=sa.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(nc)),this.expandByPoint(sa.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let py=0;const Xn=new sn,ic=new Wn,fs=new W,zn=new La,aa=new La,hn=new W;class or extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yv(t)?Xf:Zf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ae().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nr(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(zn.min,aa.min),zn.expandByPoint(hn),hn.addVectors(zn.max,aa.max),zn.expandByPoint(hn)):(zn.expandByPoint(aa.min),zn.expandByPoint(aa.max))}zn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)hn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(hn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),hn.add(fs)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new W,l[S]=new W;const c=new W,h=new W,p=new W,f=new Be,_=new Be,v=new Be,x=new W,m=new W;function g(S,E,Y){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,Y),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,Y),h.sub(c),p.sub(c),_.sub(f),v.sub(f);const D=1/(_.x*v.y-v.x*_.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(D),m.copy(p).multiplyScalar(_.x).addScaledVector(h,-v.x).multiplyScalar(D),o[S].add(x),o[E].add(x),o[Y].add(x),l[S].add(m),l[E].add(m),l[Y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let S=0,E=b.length;S<E;++S){const Y=b[S],D=Y.start,B=Y.count;for(let z=D,Z=D+B;z<Z;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const A=new W,u=new W,d=new W,w=new W;function I(S){d.fromBufferAttribute(r,S),w.copy(d);const E=o[S];A.copy(E),A.sub(d.multiplyScalar(d.dot(E))).normalize(),u.crossVectors(w,E);const D=u.dot(l[S])<0?-1:1;a.setXYZW(S,A.x,A.y,A.z,D)}for(let S=0,E=b.length;S<E;++S){const Y=b[S],D=Y.start,B=Y.count;for(let z=D,Z=D+B;z<Z;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,h=new W,p=new W;if(t)for(let f=0,_=t.count;f<_;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let _=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?_=l[x]*o.data.stride+o.offset:_=l[x]*h;for(let g=0;g<h;g++)f[v++]=c[_++]}return new Li(f,h,p)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new or,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],_=t(f,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const _=c[p];h.push(_.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,_=p.length;f<_;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let my=0;class xl extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Ds,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Pc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==Pc&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wi=new W,rc=new W,$a=new W,vr=new W,sc=new W,to=new W,ac=new W;class gy{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){rc.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(rc);const s=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=vr.dot(this.direction),l=-vr.dot($a),c=vr.lengthSq(),h=Math.abs(1-a*a);let p,f,_,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const x=1/h;p*=x,f*=x,_=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(rc).addScaledVector($a,f),_}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,r,s){sc.subVectors(e,t),to.subVectors(i,t),ac.crossVectors(sc,to);let a=this.direction.dot(ac),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vr.subVectors(this.origin,t);const l=o*this.direction.dot(to.crossVectors(vr,to));if(l<0)return null;const c=o*this.direction.dot(sc.cross(vr));if(c<0||l+c>a)return null;const h=-o*vr.dot(ac);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zo extends xl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ad=new sn,Or=new gy,eo=new ju,od=new W,no=new W,io=new W,ro=new W,oc=new W,so=new W,ld=new W,ao=new W;class fi extends Wn{constructor(t=new or,e=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(oc.fromBufferAttribute(p,t),a?so.addScaledVector(oc,h):so.addScaledVector(oc.sub(e),h))}e.add(so)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),Or.copy(t.ray).recast(t.near),!(eo.containsPoint(Or.origin)===!1&&(Or.intersectSphere(eo,od)===null||Or.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(ad.copy(s).invert(),Or.copy(t.ray).applyMatrix4(ad),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Or)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],g=a[m.materialIndex],b=Math.max(m.start,_.start),A=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let u=b,d=A;u<d;u+=3){const w=o.getX(u),I=o.getX(u+1),S=o.getX(u+2);r=oo(this,g,t,i,c,h,p,w,I,S),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let m=v,g=x;m<g;m+=3){const b=o.getX(m),A=o.getX(m+1),u=o.getX(m+2);r=oo(this,a,t,i,c,h,p,b,A,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],g=a[m.materialIndex],b=Math.max(m.start,_.start),A=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let u=b,d=A;u<d;u+=3){const w=u,I=u+1,S=u+2;r=oo(this,g,t,i,c,h,p,w,I,S),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let m=v,g=x;m<g;m+=3){const b=m,A=m+1,u=m+2;r=oo(this,a,t,i,c,h,p,b,A,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function _y(n,t,e,i,r,s,a,o){let l;if(t.side===Fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Tr,o),l===null)return null;ao.copy(o),ao.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ao);return c<e.near||c>e.far?null:{distance:c,point:ao.clone(),object:n}}function oo(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,no),n.getVertexPosition(l,io),n.getVertexPosition(c,ro);const h=_y(n,t,e,i,no,io,ro,ld);if(h){const p=new W;ci.getBarycoord(ld,no,io,ro,p),r&&(h.uv=ci.getInterpolatedAttribute(r,o,l,c,p,new Be)),s&&(h.uv1=ci.getInterpolatedAttribute(s,o,l,c,p,new Be)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,p,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};ci.getNormal(no,io,ro,f.normal),h.face=f,h.barycoord=p}return h}class vy extends Rn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=fn,h=fn,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new W,yy=new W,Sy=new ae;class kr{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=lc.subVectors(i,e).cross(yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sy.getNormalMatrix(t),r=this.coplanarPoint(lc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new ju,xy=new Be(.5,.5),lo=new W;class Yf{constructor(t=new kr,e=new kr,i=new kr,r=new kr,s=new kr,a=new kr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ti,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],_=s[7],v=s[8],x=s[9],m=s[10],g=s[11],b=s[12],A=s[13],u=s[14],d=s[15];if(r[0].setComponents(c-a,_-h,g-v,d-b).normalize(),r[1].setComponents(c+a,_+h,g+v,d+b).normalize(),r[2].setComponents(c+o,_+p,g+x,d+A).normalize(),r[3].setComponents(c-o,_-p,g-x,d-A).normalize(),i)r[4].setComponents(l,f,m,u).normalize(),r[5].setComponents(c-l,_-f,g-m,d-u).normalize();else if(r[4].setComponents(c-l,_-f,g-m,d-u).normalize(),e===Ti)r[5].setComponents(c+l,_+f,g+m,d+u).normalize();else if(e===Oo)r[5].setComponents(l,f,m,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){Br.center.set(0,0,0);const e=xy.distanceTo(t.center);return Br.radius=.7071067811865476+e,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(lo.x=r.normal.x>0?t.max.x:t.min.x,lo.y=r.normal.y>0?t.max.y:t.min.y,lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qf extends Rn{constructor(t=[],e=jr,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ea extends Rn{constructor(t,e,i=Pi,r,s,a,o=fn,l=fn,c,h=sr,p=1){if(h!==sr&&h!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class by extends Ea{constructor(t,e=Pi,i=jr,r,s,a=fn,o=fn,l,c=sr){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jf extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pa extends or{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,_=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nr(c,3)),this.setAttribute("normal",new nr(h,3)),this.setAttribute("uv",new nr(p,2));function v(x,m,g,b,A,u,d,w,I,S,E){const Y=u/I,D=d/S,B=u/2,z=d/2,Z=w/2,G=I+1,H=S+1;let F=0,tt=0;const et=new W;for(let ct=0;ct<H;ct++){const _t=ct*D-z;for(let lt=0;lt<G;lt++){const ee=lt*Y-B;et[x]=ee*b,et[m]=_t*A,et[g]=Z,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[g]=w>0?1:-1,h.push(et.x,et.y,et.z),p.push(lt/I),p.push(1-ct/S),F+=1}}for(let ct=0;ct<S;ct++)for(let _t=0;_t<I;_t++){const lt=f+_t+G*ct,ee=f+_t+G*(ct+1),Ve=f+(_t+1)+G*(ct+1),ze=f+(_t+1)+G*ct;l.push(lt,ee,ze),l.push(ee,Ve,ze),tt+=6}o.addGroup(_,tt,E),_+=tt,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Na extends or{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=t/o,f=e/l,_=[],v=[],x=[],m=[];for(let g=0;g<h;g++){const b=g*f-a;for(let A=0;A<c;A++){const u=A*p-s;v.push(u,-b,0),x.push(0,0,1),m.push(A/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const A=b+c*g,u=b+c*(g+1),d=b+1+c*(g+1),w=b+1+c*g;_.push(A,u,w),_.push(u,d,w)}this.setIndex(_),this.setAttribute("position",new nr(v,3)),this.setAttribute("normal",new nr(x,3)),this.setAttribute("uv",new nr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.width,t.height,t.widthSegments,t.heightSegments)}}function ks(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function En(n){const t={};for(let e=0;e<n.length;e++){const i=ks(n[e]);for(const r in i)t[r]=i[r]}return t}function My(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Ey={clone:ks,merge:En};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends xl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=My(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ty extends Ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ry extends xl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iy extends xl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const co=new W,uo=new Ks,gi=new W;class Jf extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(co,uo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,uo,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(co,uo,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,uo,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yr=new W,cd=new Be,ud=new Be;class oi extends Jf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xu*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,e){return this.getViewBounds(t,cd,ud),e.subVectors(ud,cd)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ku extends Jf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=-90,ms=1;class Cy extends Wn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(ps,ms,t,e);r.layers=this.layers,this.add(r);const s=new oi(ps,ms,t,e);s.layers=this.layers,this.add(s);const a=new oi(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new oi(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new oi(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new oi(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function hd(n,t,e,i){const r=Ly(i);switch(e){case Bf:return n*t;case zf:return n*t/r.components*r.byteLength;case Gu:return n*t/r.components*r.byteLength;case zs:return n*t*2/r.components*r.byteLength;case Wu:return n*t*2/r.components*r.byteLength;case Vf:return n*t*3/r.components*r.byteLength;case ui:return n*t*4/r.components*r.byteLength;case Zu:return n*t*4/r.components*r.byteLength;case vo:case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case So:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wc:case Xc:return Math.max(n,16)*Math.max(t,8)/4;case Gc:case Zc:return Math.max(n,8)*Math.max(t,8)/2;case Yc:case qc:case Kc:case Jc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jc:case Qc:case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case iu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case au:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case lu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case pu:case mu:case gu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _u:case vu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yu:case Su:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ly(n){switch(n){case Qn:case Nf:return{byteLength:1,components:1};case ba:case Ff:case rr:return{byteLength:2,components:1};case Hu:case ku:return{byteLength:2,components:4};case Pi:case zu:case wi:return{byteLength:4,components:1};case Uf:case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);function Qf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Py(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<p.length;_++){const v=p[f],x=p[_];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,p[f]=x)}p.length=f+1;for(let _=0,v=p.length;_<v;_++){const x=p[_];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
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
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
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
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,qy=`#ifdef USE_BUMPMAP
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,i2=`#define PI 3.141592653589793
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
} // validated`,r2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s2=`vec3 transformedNormal = objectNormal;
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
#endif`,a2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u2="gl_FragColor = linearToOutputTexel( gl_FragColor );",h2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p2=`#ifdef USE_ENVMAP
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
#endif`,m2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g2=`#ifdef USE_ENVMAP
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
#endif`,_2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x2=`#ifdef USE_GRADIENTMAP
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
}`,b2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A2=`uniform bool receiveShadow;
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
#endif`,w2=`#ifdef USE_ENVMAP
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
#endif`,T2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D2=`PhysicalMaterial material;
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
#endif`,L2=`uniform sampler2D dfgLUT;
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
}`,P2=`
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
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
#endif`,F2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G2=`#if defined( USE_POINTS_UV )
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
#endif`,W2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`#ifdef USE_MORPHTARGETS
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
#endif`,K2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
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
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vS=`float getShadowMask() {
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
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`#include <common>
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
}`,zS=`#if DEPTH_PACKING == 3200
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
}`,HS=`#define DISTANCE
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
}`,kS=`#define DISTANCE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`uniform float scale;
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
}`,XS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,qS=`uniform vec3 diffuse;
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
}`,jS=`#define LAMBERT
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
}`,KS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,QS=`#define MATCAP
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
}`,$S=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,sx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
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
}`,dx=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Ny,alphahash_pars_fragment:Fy,alphamap_fragment:Uy,alphamap_pars_fragment:Oy,alphatest_fragment:By,alphatest_pars_fragment:Vy,aomap_fragment:zy,aomap_pars_fragment:Hy,batching_pars_vertex:ky,batching_vertex:Gy,begin_vertex:Wy,beginnormal_vertex:Zy,bsdfs:Xy,iridescence_fragment:Yy,bumpmap_pars_fragment:qy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Qy,color_fragment:$y,color_pars_fragment:t2,color_pars_vertex:e2,color_vertex:n2,common:i2,cube_uv_reflection_fragment:r2,defaultnormal_vertex:s2,displacementmap_pars_vertex:a2,displacementmap_vertex:o2,emissivemap_fragment:l2,emissivemap_pars_fragment:c2,colorspace_fragment:u2,colorspace_pars_fragment:h2,envmap_fragment:d2,envmap_common_pars_fragment:f2,envmap_pars_fragment:p2,envmap_pars_vertex:m2,envmap_physical_pars_fragment:w2,envmap_vertex:g2,fog_vertex:_2,fog_pars_vertex:v2,fog_fragment:y2,fog_pars_fragment:S2,gradientmap_pars_fragment:x2,lightmap_pars_fragment:b2,lights_lambert_fragment:M2,lights_lambert_pars_fragment:E2,lights_pars_begin:A2,lights_toon_fragment:T2,lights_toon_pars_fragment:R2,lights_phong_fragment:I2,lights_phong_pars_fragment:C2,lights_physical_fragment:D2,lights_physical_pars_fragment:L2,lights_fragment_begin:P2,lights_fragment_maps:N2,lights_fragment_end:F2,logdepthbuf_fragment:U2,logdepthbuf_pars_fragment:O2,logdepthbuf_pars_vertex:B2,logdepthbuf_vertex:V2,map_fragment:z2,map_pars_fragment:H2,map_particle_fragment:k2,map_particle_pars_fragment:G2,metalnessmap_fragment:W2,metalnessmap_pars_fragment:Z2,morphinstance_vertex:X2,morphcolor_vertex:Y2,morphnormal_vertex:q2,morphtarget_pars_vertex:j2,morphtarget_vertex:K2,normal_fragment_begin:J2,normal_fragment_maps:Q2,normal_pars_fragment:$2,normal_pars_vertex:tS,normal_vertex:eS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:aS,opaque_fragment:oS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:hS,dithering_pars_fragment:dS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:_S,shadowmask_pars_fragment:vS,skinbase_vertex:yS,skinning_pars_vertex:SS,skinning_vertex:xS,skinnormal_vertex:bS,specularmap_fragment:MS,specularmap_pars_fragment:ES,tonemapping_fragment:AS,tonemapping_pars_fragment:wS,transmission_fragment:TS,transmission_pars_fragment:RS,uv_pars_fragment:IS,uv_pars_vertex:CS,uv_vertex:DS,worldpos_vertex:LS,background_vert:PS,background_frag:NS,backgroundCube_vert:FS,backgroundCube_frag:US,cube_vert:OS,cube_frag:BS,depth_vert:VS,depth_frag:zS,distance_vert:HS,distance_frag:kS,equirect_vert:GS,equirect_frag:WS,linedashed_vert:ZS,linedashed_frag:XS,meshbasic_vert:YS,meshbasic_frag:qS,meshlambert_vert:jS,meshlambert_frag:KS,meshmatcap_vert:JS,meshmatcap_frag:QS,meshnormal_vert:$S,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:rx,meshtoon_vert:sx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:ux,sprite_vert:hx,sprite_frag:dx},gt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},xi={basic:{uniforms:En([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:En([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:En([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:En([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:En([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:En([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:En([gt.points,gt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:En([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:En([gt.common,gt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:En([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:En([gt.sprite,gt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:En([gt.common,gt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:En([gt.lights,gt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};xi.physical={uniforms:En([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const ho={r:0,b:0,g:0},Vr=new ar,fx=new sn;function px(n,t,e,i,r,s){const a=new Me(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function _(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const u=b.backgroundBlurriness>0;A=t.get(A,u)}return A}function v(b){let A=!1;const u=_(b);u===null?m(a,o):u&&u.isColor&&(m(u,1),A=!0);const d=n.xr.getEnvironmentBlendMode();d==="additive"?e.buffers.color.setClear(0,0,0,1,s):d==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,A){const u=_(A);u&&(u.isCubeTexture||u.mapping===Sl)?(c===void 0&&(c=new fi(new Pa(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:ks(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(d,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Vr.copy(A.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Vr)),c.material.toneMapped=ve.getTransfer(u.colorSpace)!==De,(h!==u||p!==u.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=u,p=u.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new fi(new Na(2,2),new Ni({name:"BackgroundMaterial",uniforms:ks(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ve.getTransfer(u.colorSpace)!==De,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(h!==u||p!==u.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=u,p=u.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(ho,Kf(n)),e.buffers.color.setClear(ho.r,ho.g,ho.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:v,addToRenderList:x,dispose:g}}function mx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,B,z,Z,G){let H=!1;const F=p(D,Z,z,B);s!==F&&(s=F,c(s.object)),H=_(D,Z,z,G),H&&v(D,Z,z,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,u(D,B,z,Z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function p(D,B,z,Z){const G=Z.wireframe===!0;let H=i[B.id];H===void 0&&(H={},i[B.id]=H);const F=D.isInstancedMesh===!0?D.id:0;let tt=H[F];tt===void 0&&(tt={},H[F]=tt);let et=tt[z.id];et===void 0&&(et={},tt[z.id]=et);let ct=et[G];return ct===void 0&&(ct=f(l()),et[G]=ct),ct}function f(D){const B=[],z=[],Z=[];for(let G=0;G<e;G++)B[G]=0,z[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:Z,object:D,attributes:{},index:null}}function _(D,B,z,Z){const G=s.attributes,H=B.attributes;let F=0;const tt=z.getAttributes();for(const et in tt)if(tt[et].location>=0){const _t=G[et];let lt=H[et];if(lt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),_t===void 0||_t.attribute!==lt||lt&&_t.data!==lt.data)return!0;F++}return s.attributesNum!==F||s.index!==Z}function v(D,B,z,Z){const G={},H=B.attributes;let F=0;const tt=z.getAttributes();for(const et in tt)if(tt[et].location>=0){let _t=H[et];_t===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(_t=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(_t=D.instanceColor));const lt={};lt.attribute=_t,_t&&_t.data&&(lt.data=_t.data),G[et]=lt,F++}s.attributes=G,s.attributesNum=F,s.index=Z}function x(){const D=s.newAttributes;for(let B=0,z=D.length;B<z;B++)D[B]=0}function m(D){g(D,0)}function g(D,B){const z=s.newAttributes,Z=s.enabledAttributes,G=s.attributeDivisors;z[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),G[D]!==B&&(n.vertexAttribDivisor(D,B),G[D]=B)}function b(){const D=s.newAttributes,B=s.enabledAttributes;for(let z=0,Z=B.length;z<Z;z++)B[z]!==D[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function A(D,B,z,Z,G,H,F){F===!0?n.vertexAttribIPointer(D,B,z,G,H):n.vertexAttribPointer(D,B,z,Z,G,H)}function u(D,B,z,Z){x();const G=Z.attributes,H=z.getAttributes(),F=B.defaultAttributeValues;for(const tt in H){const et=H[tt];if(et.location>=0){let ct=G[tt];if(ct===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),ct!==void 0){const _t=ct.normalized,lt=ct.itemSize,ee=t.get(ct);if(ee===void 0)continue;const Ve=ee.buffer,ze=ee.type,J=ee.bytesPerElement,ot=ze===n.INT||ze===n.UNSIGNED_INT||ct.gpuType===zu;if(ct.isInterleavedBufferAttribute){const $=ct.data,xt=$.stride,ft=ct.offset;if($.isInstancedInterleavedBuffer){for(let pt=0;pt<et.locationSize;pt++)g(et.location+pt,$.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pt=0;pt<et.locationSize;pt++)m(et.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let pt=0;pt<et.locationSize;pt++)A(et.location+pt,lt/et.locationSize,ze,_t,xt*J,(ft+lt/et.locationSize*pt)*J,ot)}else{if(ct.isInstancedBufferAttribute){for(let $=0;$<et.locationSize;$++)g(et.location+$,ct.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let $=0;$<et.locationSize;$++)m(et.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let $=0;$<et.locationSize;$++)A(et.location+$,lt/et.locationSize,ze,_t,lt*J,lt/et.locationSize*$*J,ot)}}else if(F!==void 0){const _t=F[tt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(et.location,_t);break;case 3:n.vertexAttrib3fv(et.location,_t);break;case 4:n.vertexAttrib4fv(et.location,_t);break;default:n.vertexAttrib1fv(et.location,_t)}}}}b()}function d(){E();for(const D in i){const B=i[D];for(const z in B){const Z=B[z];for(const G in Z){const H=Z[G];for(const F in H)h(H[F].object),delete H[F];delete Z[G]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const z in B){const Z=B[z];for(const G in Z){const H=Z[G];for(const F in H)h(H[F].object),delete H[F];delete Z[G]}}delete i[D.id]}function I(D){for(const B in i){const z=i[B];for(const Z in z){const G=z[Z];if(G[D.id]===void 0)continue;const H=G[D.id];for(const F in H)h(H[F].object),delete H[F];delete G[D.id]}}}function S(D){for(const B in i){const z=i[B],Z=D.isInstancedMesh===!0?D.id:0,G=z[Z];if(G!==void 0){for(const H in G){const F=G[H];for(const tt in F)h(F[tt].object),delete F[tt];delete G[H]}delete z[Z],Object.keys(z).length===0&&delete i[B]}}}function E(){Y(),a=!0,s!==r&&(s=r,c(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:Y,dispose:d,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function gx(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let _=0;for(let v=0;v<p;v++)_+=h[v];e.update(_,i,1)}function l(c,h,p,f){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let v=0;for(let x=0;x<p;x++)v+=h[x]*f[x];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _x(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==ui&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const S=I===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Qn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wi&&!S)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),d=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:u,maxSamples:d,samples:w}}function vx(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new kr,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const _=p.length!==0||f||i!==0||r;return r=f,i=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,_){const v=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,g=n.get(p);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const b=s?0:i,A=b*4;let u=g.clippingState||null;l.value=u,u=h(v,f,A,_);for(let d=0;d!==A;++d)u[d]=e[d];g.clippingState=u,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,_,v){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const g=_+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,u=_;A!==x;++A,u+=4)a.copy(p[A]).applyMatrix4(b,o),a.normal.toArray(m,u),m[u+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const wr=4,dd=[.125,.215,.35,.446,.526,.582],Wr=20,yx=256,oa=new Ku,fd=new Me;let cc=null,uc=0,hc=0,dc=!1;const Sx=new W;class pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Sx}=s;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=dc,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:rr,format:ui,colorSpace:Hs,depthBuffer:!1},r=md(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xx(s)),this._blurMaterial=Mx(s,t,e),this._ggxMaterial=bx(s,t,e)}return r}_compileMaterial(t){const e=new fi(new or,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,i,r,s){const l=new oi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,_=p.toneMapping;p.getClearColor(fd),p.toneMapping=Ci,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Pa,new zo({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,g=!0):(m.color.copy(fd),g=!0);for(let A=0;A<6;A++){const u=A%3;u===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):u===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const d=this._cubeSize;gs(r,u*d,A>2?d:0,d,d),p.setRenderTarget(r),g&&p.render(x,l),p.render(t,l)}p.toneMapping=_,p.autoClear=f,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===jr||t.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,oa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=0+c*1.25,_=p*f,{_lodMax:v}=this,x=this._sizeLods[i],m=3*x*(i>v-wr?i-v+wr:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,gs(s,m,g,3*x,2*x),r.setRenderTarget(s),r.render(o,oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,gs(t,m,g,3*x,2*x),r.setRenderTarget(t),r.render(o,oa)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Se("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const f=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Wr-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):Wr;m>Wr&&re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const g=[];let b=0;for(let I=0;I<Wr;++I){const S=I/x,E=Math.exp(-S*S/2);g.push(E),I===0?b+=E:I<m&&(b+=2*E)}for(let I=0;I<g.length;I++)g[I]=g[I]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-i;const u=this._sizeLods[r],d=3*u*(r>A-wr?r-A+wr:0),w=4*(this._cubeSize-u);gs(e,d,w,3*u,2*u),l.setRenderTarget(e),l.render(p,oa)}}function xx(n){const t=[],e=[],i=[];let r=n;const s=n-wr+1+dd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-wr?l=dd[a-n+wr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,v=6,x=3,m=2,g=1,b=new Float32Array(x*v*_),A=new Float32Array(m*v*_),u=new Float32Array(g*v*_);for(let w=0;w<_;w++){const I=w%3*2/3-1,S=w>2?0:-1,E=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];b.set(E,x*v*w),A.set(f,m*v*w);const Y=[w,w,w,w,w,w];u.set(Y,g*v*w)}const d=new or;d.setAttribute("position",new Li(b,x)),d.setAttribute("uv",new Li(A,m)),d.setAttribute("faceIndex",new Li(u,g)),i.push(new fi(d,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function md(n,t,e){const i=new Di(n,t,e);return i.texture.mapping=Sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function bx(n,t,e){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Mx(n,t,e){const i=new Float32Array(Wr),r=new W(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function gd(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function _d(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}class $f extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new qf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pa(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:tr});s.uniforms.tEquirect.value=e;const a=new fi(r,s),o=e.minFilter;return e.minFilter===Zr&&(e.minFilter=_n),new Cy(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function Ex(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,_=!1){return f==null?null:_?a(f):s(f)}function s(f){if(f&&f.isTexture){const _=f.mapping;if(_===Ul||_===Ol)if(t.has(f)){const v=t.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const x=new $f(v.height);return x.fromEquirectangularTexture(n,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const _=f.mapping,v=_===Ul||_===Ol,x=_===jr||_===Vs;if(v||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new pd(n)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return v&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new pd(n)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,_){return _===Ul?f.mapping=jr:_===Ol&&(f.mapping=Vs),f}function l(f){let _=0;const v=6;for(let x=0;x<v;x++)f[x]!==void 0&&_++;return _===v}function c(f){const _=f.target;_.removeEventListener("dispose",c);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function h(f){const _=f.target;_.removeEventListener("dispose",h);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Ax(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Vo("WebGLRenderer: "+i+" extension not supported."),r}}}function wx(n,t,e,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(t.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER)}function c(p){const f=[],_=p.index,v=p.attributes.position;let x=0;if(v===void 0)return;if(_!==null){const b=_.array;x=_.version;for(let A=0,u=b.length;A<u;A+=3){const d=b[A+0],w=b[A+1],I=b[A+2];f.push(d,w,w,I,I,d)}}else{const b=v.array;x=v.version;for(let A=0,u=b.length/3-1;A<u;A+=3){const d=A+0,w=A+1,I=A+2;f.push(d,w,w,I,I,d)}}const m=new(v.count>=65535?Xf:Zf)(f,1);m.version=x;const g=s.get(p);g&&t.remove(g),s.set(p,m)}function h(p){const f=s.get(p);if(f){const _=p.index;_!==null&&f.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Tx(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,_){n.drawElements(i,_,s,f*a),e.update(_,i,1)}function c(f,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,f*a,v),e.update(_,i,v))}function h(f,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,f,0,v);let m=0;for(let g=0;g<v;g++)m+=_[g];e.update(m,i,1)}function p(f,_,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/a,_[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,f,0,x,0,v);let g=0;for(let b=0;b<v;b++)g+=_[b]*x[b];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Rx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Se("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ix(n,t,e){const i=new WeakMap,r=new en;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let E=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;_===!0&&(A=1),v===!0&&(A=2),x===!0&&(A=3);let u=o.attributes.position.count*A,d=1;u>t.maxTextureSize&&(d=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const w=new Float32Array(u*d*4*p),I=new kf(w,u,d,p);I.type=wi,I.needsUpdate=!0;const S=A*4;for(let Y=0;Y<p;Y++){const D=m[Y],B=g[Y],z=b[Y],Z=u*d*4*Y;for(let G=0;G<D.count;G++){const H=G*S;_===!0&&(r.fromBufferAttribute(D,G),w[Z+H+0]=r.x,w[Z+H+1]=r.y,w[Z+H+2]=r.z,w[Z+H+3]=0),v===!0&&(r.fromBufferAttribute(B,G),w[Z+H+4]=r.x,w[Z+H+5]=r.y,w[Z+H+6]=r.z,w[Z+H+7]=0),x===!0&&(r.fromBufferAttribute(z,G),w[Z+H+8]=r.x,w[Z+H+9]=r.y,w[Z+H+10]=r.z,w[Z+H+11]=z.itemSize===4?r.w:1)}}f={count:p,texture:I,size:new Be(u,d)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Cx(n,t,e,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=t.get(c,p);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Dx={[wf]:"LINEAR_TONE_MAPPING",[Tf]:"REINHARD_TONE_MAPPING",[Rf]:"CINEON_TONE_MAPPING",[If]:"ACES_FILMIC_TONE_MAPPING",[Df]:"AGX_TONE_MAPPING",[Lf]:"NEUTRAL_TONE_MAPPING",[Cf]:"CUSTOM_TONE_MAPPING"};function Lx(n,t,e,i,r){const s=new Di(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Di(t,e,{type:rr,depthBuffer:!1,stencilBuffer:!1}),o=new or;o.setAttribute("position",new nr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new nr([0,2,0,0,2,0],2));const l=new Ty({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new fi(o,l),h=new Ku(-1,1,1,-1,0,1);let p=null,f=null,_=!1,v,x=null,m=[],g=!1;this.setSize=function(b,A){s.setSize(b,A),a.setSize(b,A);for(let u=0;u<m.length;u++){const d=m[u];d.setSize&&d.setSize(b,A)}},this.setEffects=function(b){m=b,g=m.length>0&&m[0].isRenderPass===!0;const A=s.width,u=s.height;for(let d=0;d<m.length;d++){const w=m[d];w.setSize&&w.setSize(A,u)}},this.begin=function(b,A){if(_||b.toneMapping===Ci&&m.length===0)return!1;if(x=A,A!==null){const u=A.width,d=A.height;(s.width!==u||s.height!==d)&&this.setSize(u,d)}return g===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=Ci,!0},this.hasRenderPass=function(){return g},this.end=function(b,A){b.toneMapping=v,_=!0;let u=s,d=a;for(let w=0;w<m.length;w++){const I=m[w];if(I.enabled!==!1&&(I.render(b,d,u,A),I.needsSwap!==!1)){const S=u;u=d,d=S}}if(p!==b.outputColorSpace||f!==b.toneMapping){p=b.outputColorSpace,f=b.toneMapping,l.defines={},ve.getTransfer(p)===De&&(l.defines.SRGB_TRANSFER="");const w=Dx[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,b.setRenderTarget(x),b.render(c,h),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const tp=new Rn,bu=new Ea(1,1),ep=new kf,np=new iy,ip=new qf,vd=[],yd=[],Sd=new Float32Array(16),xd=new Float32Array(9),bd=new Float32Array(4);function Js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=vd[r];if(s===void 0&&(s=new Float32Array(r),vd[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ml(n,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Px(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function Ox(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;bd.set(i),n.uniformMatrix2fv(this.addr,!1,bd),cn(e,i)}}function Bx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;xd.set(i),n.uniformMatrix3fv(this.addr,!1,xd),cn(e,i)}}function Vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Sd.set(i),n.uniformMatrix4fv(this.addr,!1,Sd),cn(e,i)}}function zx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function Wx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function qx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(bu.compareFunction=e.isReversedDepthBuffer()?Yu:Xu,s=bu):s=tp,e.setTexture2D(t||s,r)}function jx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||np,r)}function Kx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ip,r)}function Jx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ep,r)}function Qx(n){switch(n){case 5126:return Px;case 35664:return Nx;case 35665:return Fx;case 35666:return Ux;case 35674:return Ox;case 35675:return Bx;case 35676:return Vx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Zx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Jx}}function $x(n,t){n.uniform1fv(this.addr,t)}function tb(n,t){const e=Js(t,this.size,2);n.uniform2fv(this.addr,e)}function eb(n,t){const e=Js(t,this.size,3);n.uniform3fv(this.addr,e)}function nb(n,t){const e=Js(t,this.size,4);n.uniform4fv(this.addr,e)}function ib(n,t){const e=Js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function rb(n,t){const e=Js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sb(n,t){const e=Js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ab(n,t){n.uniform1iv(this.addr,t)}function ob(n,t){n.uniform2iv(this.addr,t)}function lb(n,t){n.uniform3iv(this.addr,t)}function cb(n,t){n.uniform4iv(this.addr,t)}function ub(n,t){n.uniform1uiv(this.addr,t)}function hb(n,t){n.uniform2uiv(this.addr,t)}function db(n,t){n.uniform3uiv(this.addr,t)}function fb(n,t){n.uniform4uiv(this.addr,t)}function pb(n,t,e){const i=this.cache,r=t.length,s=Ml(e,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=bu:a=tp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function mb(n,t,e){const i=this.cache,r=t.length,s=Ml(e,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||np,s[a])}function gb(n,t,e){const i=this.cache,r=t.length,s=Ml(e,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ip,s[a])}function _b(n,t,e){const i=this.cache,r=t.length,s=Ml(e,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ep,s[a])}function vb(n){switch(n){case 5126:return $x;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ab;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return hb;case 36295:return db;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}class yb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qx(e.type)}}class Sb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vb(e.type)}}class xb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Md(n,t){n.seq.push(t),n.map[t.id]=t}function bb(n,t,e){const i=n.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Md(e,c===void 0?new yb(o,n,t):new Sb(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new xb(o),Md(e,p)),e=p}}}class bo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);bb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Ed(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Mb=37297;let Eb=0;function Ab(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ad=new ae;function wb(n){ve._getMatrix(Ad,ve.workingColorSpace,n);const t=`mat3( ${Ad.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case Uo:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Ab(n.getShaderSource(t),o)}else return s}function Tb(n,t){const e=wb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rb={[wf]:"Linear",[Tf]:"Reinhard",[Rf]:"Cineon",[If]:"ACESFilmic",[Df]:"AgX",[Lf]:"Neutral",[Cf]:"Custom"};function Ib(n,t){const e=Rb[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new W;function Cb(){ve.getLuminanceCoefficients(fo);const n=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Lb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Pb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function da(n){return n!==""}function Td(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(Nb,Ub)}const Fb=new Map;function Ub(n,t){let e=ce[t];if(e===void 0){const i=Fb.get(t);if(i!==void 0)e=ce[i],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mu(e)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(n){return n.replace(Ob,Bb)}function Bb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Vb={[_o]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function zb(n){return Vb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hb={[jr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Sl]:"ENVMAP_TYPE_CUBE_UV"};function kb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Hb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gb={[Vs]:"ENVMAP_MODE_REFRACTION"};function Wb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Gb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zb={[Af]:"ENVMAP_BLENDING_MULTIPLY",[Fv]:"ENVMAP_BLENDING_MIX",[Uv]:"ENVMAP_BLENDING_ADD"};function Xb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[n.combine]||"ENVMAP_BLENDING_NONE"}function Yb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qb(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zb(e),c=kb(e),h=Wb(e),p=Xb(e),f=Yb(e),_=Db(e),v=Lb(s),x=r.createProgram();let m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(da).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(da).join(`
`),g.length>0&&(g+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),g=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?ce.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Ib("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Tb("linearToOutputTexel",e.outputColorSpace),Cb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Mu(a),a=Td(a,e),a=Rd(a,e),o=Mu(o),o=Td(o,e),o=Rd(o,e),a=Id(a),o=Id(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=b+m+a,u=b+g+o,d=Ed(r,r.VERTEX_SHADER,A),w=Ed(r,r.FRAGMENT_SHADER,u);r.attachShader(x,d),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(D){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(d)||"",Z=r.getShaderInfoLog(w)||"",G=B.trim(),H=z.trim(),F=Z.trim();let tt=!0,et=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,d,w);else{const ct=wd(r,d,"vertex"),_t=wd(r,w,"fragment");Se("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ct+`
`+_t)}else G!==""?re("WebGLProgram: Program Info Log:",G):(H===""||F==="")&&(et=!1);et&&(D.diagnostics={runnable:tt,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:F,prefix:g}})}r.deleteShader(d),r.deleteShader(w),S=new bo(r,x),E=Pb(r,x)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(x,Mb)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=d,this.fragmentShader=w,this}let jb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jb(t),e.set(t,i)),i}}class Jb{constructor(t){this.id=jb++,this.code=t,this.usedTimes=0}}function Qb(n,t,e,i,r,s){const a=new Gf,o=new Kb,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,E,Y,D,B){const z=D.fog,Z=B.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,F=t.get(S.envMap||G,H),tt=F&&F.mapping===Sl?F.image.height:null,et=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&re("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=ct!==void 0?ct.length:0;let lt=0;Z.morphAttributes.position!==void 0&&(lt=1),Z.morphAttributes.normal!==void 0&&(lt=2),Z.morphAttributes.color!==void 0&&(lt=3);let ee,Ve,ze,J;if(et){const Re=xi[et];ee=Re.vertexShader,Ve=Re.fragmentShader}else ee=S.vertexShader,Ve=S.fragmentShader,o.update(S),ze=o.getVertexShaderID(S),J=o.getFragmentShaderID(S);const ot=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),xt=B.isInstancedMesh===!0,ft=B.isBatchedMesh===!0,pt=!!S.map,ne=!!S.matcap,wt=!!F,$t=!!S.aoMap,Jt=!!S.lightMap,Bt=!!S.bumpMap,le=!!S.normalMap,L=!!S.displacementMap,Ge=!!S.emissiveMap,pe=!!S.metalnessMap,be=!!S.roughnessMap,Tt=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,U=S.iridescence>0,K=S.sheen>0,nt=S.transmission>0,j=Tt&&!!S.anisotropyMap,Rt=R&&!!S.clearcoatMap,ut=R&&!!S.clearcoatNormalMap,Ot=R&&!!S.clearcoatRoughnessMap,jt=U&&!!S.iridescenceMap,it=U&&!!S.iridescenceThicknessMap,st=K&&!!S.sheenColorMap,It=K&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,bt=!!S.specularColorMap,ue=!!S.specularIntensityMap,P=nt&&!!S.transmissionMap,ht=nt&&!!S.thicknessMap,at=!!S.gradientMap,At=!!S.alphaMap,rt=S.alphaTest>0,q=!!S.alphaHash,Ct=!!S.extensions;let ie=Ci;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ie=n.toneMapping);const We={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:Ve,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ft,batchingColor:ft&&B._colorsTexture!==null,instancing:xt,instancingColor:xt&&B.instanceColor!==null,instancingMorph:xt&&B.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Hs,alphaToCoverage:!!S.alphaToCoverage,map:pt,matcap:ne,envMap:wt,envMapMode:wt&&F.mapping,envMapCubeUVHeight:tt,aoMap:$t,lightMap:Jt,bumpMap:Bt,normalMap:le,displacementMap:L,emissiveMap:Ge,normalMapObjectSpace:le&&S.normalMapType===zv,normalMapTangentSpace:le&&S.normalMapType===Vv,metalnessMap:pe,roughnessMap:be,anisotropy:Tt,anisotropyMap:j,clearcoat:R,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ot,dispersion:y,iridescence:U,iridescenceMap:jt,iridescenceThicknessMap:it,sheen:K,sheenColorMap:st,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:bt,specularIntensityMap:ue,transmission:nt,transmissionMap:P,thicknessMap:ht,gradientMap:at,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:rt,alphaHash:q,combine:S.combine,mapUv:pt&&v(S.map.channel),aoMapUv:$t&&v(S.aoMap.channel),lightMapUv:Jt&&v(S.lightMap.channel),bumpMapUv:Bt&&v(S.bumpMap.channel),normalMapUv:le&&v(S.normalMap.channel),displacementMapUv:L&&v(S.displacementMap.channel),emissiveMapUv:Ge&&v(S.emissiveMap.channel),metalnessMapUv:pe&&v(S.metalnessMap.channel),roughnessMapUv:be&&v(S.roughnessMap.channel),anisotropyMapUv:j&&v(S.anisotropyMap.channel),clearcoatMapUv:Rt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&v(S.sheenRoughnessMap.channel),specularMapUv:Dt&&v(S.specularMap.channel),specularColorMapUv:bt&&v(S.specularColorMap.channel),specularIntensityMapUv:ue&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:ht&&v(S.thicknessMap.channel),alphaMapUv:At&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(le||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(pt||At),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&le===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:$,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:pt&&S.map.isVideoTexture===!0&&ve.getTransfer(S.map.colorSpace)===De,decodeVideoTextureEmissive:Ge&&S.emissiveMap.isVideoTexture===!0&&ve.getTransfer(S.emissiveMap.colorSpace)===De,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)E.push(Y),E.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(g(E,S),b(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function A(S){const E=_[S.type];let Y;if(E){const D=xi[E];Y=Ey.clone(D.uniforms)}else Y=S.uniforms;return Y}function u(S,E){let Y=h.get(E);return Y!==void 0?++Y.usedTimes:(Y=new qb(n,E,S,r),c.push(Y),h.set(E,Y)),Y}function d(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){o.remove(S)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:u,releaseProgram:d,releaseShaderCache:w,programs:c,dispose:I}}function $b(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function tM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ld(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function o(f,_,v,x,m,g){let b=n[t];return b===void 0?(b={id:f.id,object:f,geometry:_,material:v,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[t]=b):(b.id=f.id,b.object=f,b.geometry=_,b.material=v,b.materialVariant=a(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=m,b.group=g),t++,b}function l(f,_,v,x,m,g){const b=o(f,_,v,x,m,g);v.transmission>0?i.push(b):v.transparent===!0?r.push(b):e.push(b)}function c(f,_,v,x,m,g){const b=o(f,_,v,x,m,g);v.transmission>0?i.unshift(b):v.transparent===!0?r.unshift(b):e.unshift(b)}function h(f,_){e.length>1&&e.sort(f||tM),i.length>1&&i.sort(_||Dd),r.length>1&&r.sort(_||Dd)}function p(){for(let f=t,_=n.length;f<_;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function eM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ld,n.set(i,[a])):r>=s.length?(a=new Ld,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function nM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Me};break;case"SpotLight":e={position:new W,direction:new W,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function iM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let rM=0;function sM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function aM(n){const t=new nM,e=iM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new sn,a=new sn;function o(c){let h=0,p=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let _=0,v=0,x=0,m=0,g=0,b=0,A=0,u=0,d=0,w=0,I=0;c.sort(sM);for(let E=0,Y=c.length;E<Y;E++){const D=c[E],B=D.color,z=D.intensity,Z=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zs?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*z,p+=B.g*z,f+=B.b*z;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],z);I++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,tt=e.get(D);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=D.shadow.matrix,b++}i.directional[_]=H,_++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(z),H.distance=Z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[x]=H;const F=D.shadow;if(D.map&&(i.spotLightMap[d]=D.map,d++,F.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=F.matrix,D.castShadow){const tt=e.get(D);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,i.spotShadow[x]=tt,i.spotShadowMap[x]=G,u++}x++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(B).multiplyScalar(z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const F=D.shadow,tt=e.get(D);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,i.pointShadow[v]=tt,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=H,v++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(z),H.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[g]=H,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==g||S.numDirectionalShadows!==b||S.numPointShadows!==A||S.numSpotShadows!==u||S.numSpotMaps!==d||S.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=u+d-w,i.spotLightMap.length=d,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,S.directionalLength=_,S.pointLength=v,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=g,S.numDirectionalShadows=b,S.numPointShadows=A,S.numSpotShadows=u,S.numSpotMaps=d,S.numLightProbes=I,i.version=rM++)}function l(c,h){let p=0,f=0,_=0,v=0,x=0;const m=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const A=c[g];if(A.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),p++}else if(A.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(m),u.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),_++}else if(A.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),u.halfWidth.set(A.width*.5,0,0),u.halfHeight.set(0,A.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const u=i.point[f];u.position.setFromMatrixPosition(A.matrixWorld),u.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const u=i.hemi[x];u.direction.setFromMatrixPosition(A.matrixWorld),u.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Pd(n){const t=new aM(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Pd(n),t.set(r,[o])):s>=a.length?(o=new Pd(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`,uM=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],hM=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Nd=new sn,la=new W,pc=new W;function dM(n,t,e){let i=new Yf;const r=new Be,s=new Be,a=new en,o=new Ry,l=new Iy,c={},h=e.maxTextureSize,p={[Tr]:Fn,[Fn]:Tr,[li]:li},f=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new or;v.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let g=this.type;this.render=function(w,I,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===gv&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_o);const E=n.getRenderTarget(),Y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(tr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=g!==this.type;z&&I.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(G=>G.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,G=w.length;Z<G;Z++){const H=w[Z],F=H.shadow;if(F===void 0){re("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const tt=F.getFrameExtents();r.multiply(tt),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,F.mapSize.y=s.y));const et=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=et,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ha){if(H.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Di(r.x,r.y,{format:zs,type:rr,minFilter:_n,magFilter:_n,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Ea(r.x,r.y,wi),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=sr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else H.isPointLight?(F.map=new $f(r.x),F.map.depthTexture=new by(r.x,Pi)):(F.map=new Di(r.x,r.y),F.map.depthTexture=new Ea(r.x,r.y,Pi)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=sr,this.type===_o?(F.map.depthTexture.compareFunction=et?Yu:Xu,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn);F.camera.updateProjectionMatrix()}const ct=F.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<ct;_t++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(F.map),n.clear());const lt=F.getViewport(_t);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),B.viewport(a)}if(H.isPointLight){const lt=F.camera,ee=F.matrix,Ve=H.distance||lt.far;Ve!==lt.far&&(lt.far=Ve,lt.updateProjectionMatrix()),la.setFromMatrixPosition(H.matrixWorld),lt.position.copy(la),pc.copy(lt.position),pc.add(uM[_t]),lt.up.copy(hM[_t]),lt.lookAt(pc),lt.updateMatrixWorld(),ee.makeTranslation(-la.x,-la.y,-la.z),Nd.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Nd,lt.coordinateSystem,lt.reversedDepth)}else F.updateMatrices(H);i=F.getFrustum(),u(I,S,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===ha&&b(F,S),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(E,Y,D)};function b(w,I){const S=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Di(r.x,r.y,{format:zs,type:rr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,S,f,x,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,S,_,x,null)}function A(w,I,S,E){let Y=null;const D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)Y=D;else if(Y=S.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=Y.uuid,z=I.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let G=Z[z];G===void 0&&(G=Y.clone(),Z[z]=G,I.addEventListener("dispose",d)),Y=G}if(Y.visible=I.visible,Y.wireframe=I.wireframe,E===ha?Y.side=I.shadowSide!==null?I.shadowSide:I.side:Y.side=I.shadowSide!==null?I.shadowSide:p[I.side],Y.alphaMap=I.alphaMap,Y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Y.map=I.map,Y.clipShadows=I.clipShadows,Y.clippingPlanes=I.clippingPlanes,Y.clipIntersection=I.clipIntersection,Y.displacementMap=I.displacementMap,Y.displacementScale=I.displacementScale,Y.displacementBias=I.displacementBias,Y.wireframeLinewidth=I.wireframeLinewidth,Y.linewidth=I.linewidth,S.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const B=n.properties.get(Y);B.light=S}return Y}function u(w,I,S,E,Y){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&Y===ha)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const z=t.update(w),Z=w.material;if(Array.isArray(Z)){const G=z.groups;for(let H=0,F=G.length;H<F;H++){const tt=G[H],et=Z[tt.materialIndex];if(et&&et.visible){const ct=A(w,et,E,Y);w.onBeforeShadow(n,w,I,S,z,ct,tt),n.renderBufferDirect(S,null,z,ct,w,tt),w.onAfterShadow(n,w,I,S,z,ct,tt)}}}else if(Z.visible){const G=A(w,Z,E,Y);w.onBeforeShadow(n,w,I,S,z,G,null),n.renderBufferDirect(S,null,z,G,w,null),w.onAfterShadow(n,w,I,S,z,G,null)}}const B=w.children;for(let z=0,Z=B.length;z<Z;z++)u(B[z],I,S,E,Y)}function d(w){w.target.removeEventListener("dispose",d);for(const S in c){const E=c[S],Y=w.target.uuid;Y in E&&(E[Y].dispose(),delete E[Y])}}}function fM(n,t){function e(){let P=!1;const ht=new en;let at=null;const At=new en(0,0,0,0);return{setMask:function(rt){at!==rt&&!P&&(n.colorMask(rt,rt,rt,rt),at=rt)},setLocked:function(rt){P=rt},setClear:function(rt,q,Ct,ie,We){We===!0&&(rt*=ie,q*=ie,Ct*=ie),ht.set(rt,q,Ct,ie),At.equals(ht)===!1&&(n.clearColor(rt,q,Ct,ie),At.copy(ht))},reset:function(){P=!1,at=null,At.set(-1,0,0,0)}}}function i(){let P=!1,ht=!1,at=null,At=null,rt=null;return{setReversed:function(q){if(ht!==q){const Ct=t.get("EXT_clip_control");q?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ht=q;const ie=rt;rt=null,this.setClear(ie)}},getReversed:function(){return ht},setTest:function(q){q?ot(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(q){at!==q&&!P&&(n.depthMask(q),at=q)},setFunc:function(q){if(ht&&(q=Kv[q]),At!==q){switch(q){case Nc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Uc:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Oc:n.depthFunc(n.EQUAL);break;case Bc:n.depthFunc(n.GEQUAL);break;case Vc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=q}},setLocked:function(q){P=q},setClear:function(q){rt!==q&&(rt=q,ht&&(q=1-q),n.clearDepth(q))},reset:function(){P=!1,at=null,At=null,rt=null,ht=!1}}}function r(){let P=!1,ht=null,at=null,At=null,rt=null,q=null,Ct=null,ie=null,We=null;return{setTest:function(Re){P||(Re?ot(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(Re){ht!==Re&&!P&&(n.stencilMask(Re),ht=Re)},setFunc:function(Re,Bi,Vi){(at!==Re||At!==Bi||rt!==Vi)&&(n.stencilFunc(Re,Bi,Vi),at=Re,At=Bi,rt=Vi)},setOp:function(Re,Bi,Vi){(q!==Re||Ct!==Bi||ie!==Vi)&&(n.stencilOp(Re,Bi,Vi),q=Re,Ct=Bi,ie=Vi)},setLocked:function(Re){P=Re},setClear:function(Re){We!==Re&&(n.clearStencil(Re),We=Re)},reset:function(){P=!1,ht=null,at=null,At=null,rt=null,q=null,Ct=null,ie=null,We=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},f=new WeakMap,_=[],v=null,x=!1,m=null,g=null,b=null,A=null,u=null,d=null,w=null,I=new Me(0,0,0),S=0,E=!1,Y=null,D=null,B=null,z=null,Z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=F>=1):tt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=F>=2);let et=null,ct={};const _t=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),ee=new en().fromArray(_t),Ve=new en().fromArray(lt);function ze(P,ht,at,At){const rt=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<at;Ct++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(ht+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return q}const J={};J[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(Bs),Bt(!1),le(zh),ot(n.CULL_FACE),$t(tr);function ot(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function $(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function xt(P,ht){return p[P]!==ht?(n.bindFramebuffer(P,ht),p[P]=ht,P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ht),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function ft(P,ht){let at=_,At=!1;if(P){at=f.get(ht),at===void 0&&(at=[],f.set(ht,at));const rt=P.textures;if(at.length!==rt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let q=0,Ct=rt.length;q<Ct;q++)at[q]=n.COLOR_ATTACHMENT0+q;at.length=rt.length,At=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,At=!0);At&&n.drawBuffers(at)}function pt(P){return v!==P?(n.useProgram(P),v=P,!0):!1}const ne={[Gr]:n.FUNC_ADD,[vv]:n.FUNC_SUBTRACT,[yv]:n.FUNC_REVERSE_SUBTRACT};ne[Sv]=n.MIN,ne[xv]=n.MAX;const wt={[bv]:n.ZERO,[Mv]:n.ONE,[Ev]:n.SRC_COLOR,[Lc]:n.SRC_ALPHA,[Cv]:n.SRC_ALPHA_SATURATE,[Rv]:n.DST_COLOR,[wv]:n.DST_ALPHA,[Av]:n.ONE_MINUS_SRC_COLOR,[Pc]:n.ONE_MINUS_SRC_ALPHA,[Iv]:n.ONE_MINUS_DST_COLOR,[Tv]:n.ONE_MINUS_DST_ALPHA,[Dv]:n.CONSTANT_COLOR,[Lv]:n.ONE_MINUS_CONSTANT_COLOR,[Pv]:n.CONSTANT_ALPHA,[Nv]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(P,ht,at,At,rt,q,Ct,ie,We,Re){if(P===tr){x===!0&&($(n.BLEND),x=!1);return}if(x===!1&&(ot(n.BLEND),x=!0),P!==_v){if(P!==m||Re!==E){if((g!==Gr||u!==Gr)&&(n.blendEquation(n.FUNC_ADD),g=Gr,u=Gr),Re)switch(P){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Se("WebGLState: Invalid blending: ",P);break}else switch(P){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kh:Se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:Se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Se("WebGLState: Invalid blending: ",P);break}b=null,A=null,d=null,w=null,I.set(0,0,0),S=0,m=P,E=Re}return}rt=rt||ht,q=q||at,Ct=Ct||At,(ht!==g||rt!==u)&&(n.blendEquationSeparate(ne[ht],ne[rt]),g=ht,u=rt),(at!==b||At!==A||q!==d||Ct!==w)&&(n.blendFuncSeparate(wt[at],wt[At],wt[q],wt[Ct]),b=at,A=At,d=q,w=Ct),(ie.equals(I)===!1||We!==S)&&(n.blendColor(ie.r,ie.g,ie.b,We),I.copy(ie),S=We),m=P,E=!1}function Jt(P,ht){P.side===li?$(n.CULL_FACE):ot(n.CULL_FACE);let at=P.side===Fn;ht&&(at=!at),Bt(at),P.blending===Ds&&P.transparent===!1?$t(tr):$t(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const At=P.stencilWrite;o.setTest(At),At&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){Y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),Y=P)}function le(P){P!==pv?(ot(n.CULL_FACE),P!==D&&(P===zh?n.cullFace(n.BACK):P===mv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),D=P}function L(P){P!==B&&(H&&n.lineWidth(P),B=P)}function Ge(P,ht,at){P?(ot(n.POLYGON_OFFSET_FILL),(z!==ht||Z!==at)&&(z=ht,Z=at,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,at))):$(n.POLYGON_OFFSET_FILL)}function pe(P){P?ot(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function be(P){P===void 0&&(P=n.TEXTURE0+G-1),et!==P&&(n.activeTexture(P),et=P)}function Tt(P,ht,at){at===void 0&&(et===null?at=n.TEXTURE0+G-1:at=et);let At=ct[at];At===void 0&&(At={type:void 0,texture:void 0},ct[at]=At),(At.type!==P||At.texture!==ht)&&(et!==at&&(n.activeTexture(at),et=at),n.bindTexture(P,ht||J[P]),At.type=P,At.texture=ht)}function R(){const P=ct[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(P){Se("WebGLState:",P)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(P){Se("WebGLState:",P)}}function K(){try{n.texSubImage2D(...arguments)}catch(P){Se("WebGLState:",P)}}function nt(){try{n.texSubImage3D(...arguments)}catch(P){Se("WebGLState:",P)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Se("WebGLState:",P)}}function Rt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Se("WebGLState:",P)}}function ut(){try{n.texStorage2D(...arguments)}catch(P){Se("WebGLState:",P)}}function Ot(){try{n.texStorage3D(...arguments)}catch(P){Se("WebGLState:",P)}}function jt(){try{n.texImage2D(...arguments)}catch(P){Se("WebGLState:",P)}}function it(){try{n.texImage3D(...arguments)}catch(P){Se("WebGLState:",P)}}function st(P){ee.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function It(P){Ve.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ve.copy(P))}function Dt(P,ht){let at=c.get(ht);at===void 0&&(at=new WeakMap,c.set(ht,at));let At=at.get(P);At===void 0&&(At=n.getUniformBlockIndex(ht,P.name),at.set(P,At))}function bt(P,ht){const At=c.get(ht).get(P);l.get(ht)!==At&&(n.uniformBlockBinding(ht,At,P.__bindingPointIndex),l.set(ht,At))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},et=null,ct={},p={},f=new WeakMap,_=[],v=null,x=!1,m=null,g=null,b=null,A=null,u=null,d=null,w=null,I=new Me(0,0,0),S=0,E=!1,Y=null,D=null,B=null,z=null,Z=null,ee.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:$,bindFramebuffer:xt,drawBuffers:ft,useProgram:pt,setBlending:$t,setMaterial:Jt,setFlipSided:Bt,setCullFace:le,setLineWidth:L,setPolygonOffset:Ge,setScissorTest:pe,activeTexture:be,bindTexture:Tt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:jt,texImage3D:it,updateUBOMapping:Dt,uniformBlockBinding:bt,texStorage2D:ut,texStorage3D:Ot,texSubImage2D:K,texSubImage3D:nt,compressedTexSubImage2D:j,compressedTexSubImage3D:Rt,scissor:st,viewport:It,reset:ue}}function pM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return _?new OffscreenCanvas(R,y):Bo("canvas")}function x(R,y,U){let K=1;const nt=Tt(R);if((nt.width>U||nt.height>U)&&(K=U/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*nt.width),Rt=Math.floor(K*nt.height);p===void 0&&(p=v(j,Rt));const ut=y?v(j,Rt):p;return ut.width=j,ut.height=Rt,ut.getContext("2d").drawImage(R,0,0,j,Rt),re("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Rt+")."),ut}else return"data"in R&&re("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,y,U,K,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),y===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGB8UI),U===n.UNSIGNED_SHORT&&(j=n.RGB16UI),U===n.UNSIGNED_INT&&(j=n.RGB32UI),U===n.BYTE&&(j=n.RGB8I),U===n.SHORT&&(j=n.RGB16I),U===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),U===n.UNSIGNED_INT&&(j=n.RGBA32UI),U===n.BYTE&&(j=n.RGBA8I),U===n.SHORT&&(j=n.RGBA16I),U===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const Rt=nt?Uo:ve.getTransfer(K);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=Rt===De?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function u(R,y){let U;return R?y===null||y===Pi||y===Ma?U=n.DEPTH24_STENCIL8:y===wi?U=n.DEPTH32F_STENCIL8:y===ba&&(U=n.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pi||y===Ma?U=n.DEPTH_COMPONENT24:y===wi?U=n.DEPTH_COMPONENT32F:y===ba&&(U=n.DEPTH_COMPONENT16),U}function d(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){const y=R.target;y.removeEventListener("dispose",w),S(y),y.isVideoTexture&&h.delete(y)}function I(R){const y=R.target;y.removeEventListener("dispose",I),Y(y)}function S(R){const y=i.get(R);if(y.__webglInit===void 0)return;const U=R.source,K=f.get(U);if(K){const nt=K[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(R),Object.keys(K).length===0&&f.delete(U)}i.remove(R)}function E(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const U=R.source,K=f.get(U);delete K[y.__cacheKey],a.memory.textures--}function Y(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let nt=0;nt<y.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=R.textures;for(let K=0,nt=U.length;K<nt;K++){const j=i.get(U[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(U[K])}i.remove(R)}let D=0;function B(){D=0}function z(){const R=D;return R>=r.maxTextures&&re("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function Z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function G(R,y){const U=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const K=R.image;if(K===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{J(U,R,y);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function H(R,y){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){J(U,R,y);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function F(R,y){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){J(U,R,y);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function tt(R,y){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){ot(U,R,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}const et={[Hc]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[kc]:n.MIRRORED_REPEAT},ct={[fn]:n.NEAREST,[Ov]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Zr]:n.LINEAR_MIPMAP_LINEAR},_t={[Hv]:n.NEVER,[Xv]:n.ALWAYS,[kv]:n.LESS,[Xu]:n.LEQUAL,[Gv]:n.EQUAL,[Yu]:n.GEQUAL,[Wv]:n.GREATER,[Zv]:n.NOTEQUAL};function lt(R,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===Bl||y.magFilter===Wa||y.magFilter===Zr||y.minFilter===_n||y.minFilter===Bl||y.minFilter===Wa||y.minFilter===Zr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,et[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,et[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,et[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ct[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ct[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,_t[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fn||y.minFilter!==Wa&&y.minFilter!==Zr||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ee(R,y){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));const K=y.source;let nt=f.get(K);nt===void 0&&(nt={},f.set(K,nt));const j=Z(y);if(j!==R.__cacheKey){nt[j]===void 0&&(nt[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),nt[j].usedTimes++;const Rt=nt[R.__cacheKey];Rt!==void 0&&(nt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(y)),R.__cacheKey=j,R.__webglTexture=nt[j].texture}return U}function Ve(R,y,U){return Math.floor(Math.floor(R/U)/y)}function ze(R,y,U,K){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,U,K,y.data);else{j.sort((it,st)=>it.start-st.start);let Rt=0;for(let it=1;it<j.length;it++){const st=j[Rt],It=j[it],Dt=st.start+st.count,bt=Ve(It.start,y.width,4),ue=Ve(st.start,y.width,4);It.start<=Dt+1&&bt===ue&&Ve(It.start+It.count-1,y.width,4)===bt?st.count=Math.max(st.count,It.start+It.count-st.start):(++Rt,j[Rt]=It)}j.length=Rt+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),Ot=n.getParameter(n.UNPACK_SKIP_PIXELS),jt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let it=0,st=j.length;it<st;it++){const It=j[it],Dt=Math.floor(It.start/4),bt=Math.ceil(It.count/4),ue=Dt%y.width,P=Math.floor(Dt/y.width),ht=bt,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,ue,P,ht,at,U,K,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,jt)}}function J(R,y,U){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const nt=ee(R,y),j=y.source;e.bindTexture(K,R.__webglTexture,n.TEXTURE0+U);const Rt=i.get(j);if(j.version!==Rt.__version||nt===!0){e.activeTexture(n.TEXTURE0+U);const ut=ve.getPrimaries(ve.workingColorSpace),Ot=y.colorSpace===Ar?null:ve.getPrimaries(y.colorSpace),jt=y.colorSpace===Ar||ut===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=x(y.image,!1,r.maxTextureSize);it=be(y,it);const st=s.convert(y.format,y.colorSpace),It=s.convert(y.type);let Dt=A(y.internalFormat,st,It,y.colorSpace,y.isVideoTexture);lt(K,y);let bt;const ue=y.mipmaps,P=y.isVideoTexture!==!0,ht=Rt.__version===void 0||nt===!0,at=j.dataReady,At=d(y,it);if(y.isDepthTexture)Dt=u(y.format===Xr,y.type),ht&&(P?e.texStorage2D(n.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Dt,it.width,it.height,0,st,It,null));else if(y.isDataTexture)if(ue.length>0){P&&ht&&e.texStorage2D(n.TEXTURE_2D,At,Dt,ue[0].width,ue[0].height);for(let rt=0,q=ue.length;rt<q;rt++)bt=ue[rt],P?at&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,st,It,bt.data):e.texImage2D(n.TEXTURE_2D,rt,Dt,bt.width,bt.height,0,st,It,bt.data);y.generateMipmaps=!1}else P?(ht&&e.texStorage2D(n.TEXTURE_2D,At,Dt,it.width,it.height),at&&ze(y,it,st,It)):e.texImage2D(n.TEXTURE_2D,0,Dt,it.width,it.height,0,st,It,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Dt,ue[0].width,ue[0].height,it.depth);for(let rt=0,q=ue.length;rt<q;rt++)if(bt=ue[rt],y.format!==ui)if(st!==null)if(P){if(at)if(y.layerUpdates.size>0){const Ct=hd(bt.width,bt.height,y.format,y.type);for(const ie of y.layerUpdates){const We=bt.data.subarray(ie*Ct/bt.data.BYTES_PER_ELEMENT,(ie+1)*Ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ie,bt.width,bt.height,1,st,We)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,bt.width,bt.height,it.depth,st,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Dt,bt.width,bt.height,it.depth,0,bt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,bt.width,bt.height,it.depth,st,It,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Dt,bt.width,bt.height,it.depth,0,st,It,bt.data)}else{P&&ht&&e.texStorage2D(n.TEXTURE_2D,At,Dt,ue[0].width,ue[0].height);for(let rt=0,q=ue.length;rt<q;rt++)bt=ue[rt],y.format!==ui?st!==null?P?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,st,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Dt,bt.width,bt.height,0,bt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?at&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,st,It,bt.data):e.texImage2D(n.TEXTURE_2D,rt,Dt,bt.width,bt.height,0,st,It,bt.data)}else if(y.isDataArrayTexture)if(P){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Dt,it.width,it.height,it.depth),at)if(y.layerUpdates.size>0){const rt=hd(it.width,it.height,y.format,y.type);for(const q of y.layerUpdates){const Ct=it.data.subarray(q*rt/it.data.BYTES_PER_ELEMENT,(q+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,it.width,it.height,1,st,It,Ct)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,st,It,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,st,It,it.data);else if(y.isData3DTexture)P?(ht&&e.texStorage3D(n.TEXTURE_3D,At,Dt,it.width,it.height,it.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,st,It,it.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,st,It,it.data);else if(y.isFramebufferTexture){if(ht)if(P)e.texStorage2D(n.TEXTURE_2D,At,Dt,it.width,it.height);else{let rt=it.width,q=it.height;for(let Ct=0;Ct<At;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Dt,rt,q,0,st,It,null),rt>>=1,q>>=1}}else if(ue.length>0){if(P&&ht){const rt=Tt(ue[0]);e.texStorage2D(n.TEXTURE_2D,At,Dt,rt.width,rt.height)}for(let rt=0,q=ue.length;rt<q;rt++)bt=ue[rt],P?at&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,st,It,bt):e.texImage2D(n.TEXTURE_2D,rt,Dt,st,It,bt);y.generateMipmaps=!1}else if(P){if(ht){const rt=Tt(it);e.texStorage2D(n.TEXTURE_2D,At,Dt,rt.width,rt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st,It,it)}else e.texImage2D(n.TEXTURE_2D,0,Dt,st,It,it);m(y)&&g(K),Rt.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ot(R,y,U){if(y.image.length!==6)return;const K=ee(R,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+U);const j=i.get(nt);if(nt.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+U);const Rt=ve.getPrimaries(ve.workingColorSpace),ut=y.colorSpace===Ar?null:ve.getPrimaries(y.colorSpace),Ot=y.colorSpace===Ar||Rt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,st=[];for(let q=0;q<6;q++)!jt&&!it?st[q]=x(y.image[q],!0,r.maxCubemapSize):st[q]=it?y.image[q].image:y.image[q],st[q]=be(y,st[q]);const It=st[0],Dt=s.convert(y.format,y.colorSpace),bt=s.convert(y.type),ue=A(y.internalFormat,Dt,bt,y.colorSpace),P=y.isVideoTexture!==!0,ht=j.__version===void 0||K===!0,at=nt.dataReady;let At=d(y,It);lt(n.TEXTURE_CUBE_MAP,y);let rt;if(jt){P&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ue,It.width,It.height);for(let q=0;q<6;q++){rt=st[q].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const ie=rt[Ct];y.format!==ui?Dt!==null?P?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct,0,0,ie.width,ie.height,Dt,ie.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct,ue,ie.width,ie.height,0,ie.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct,0,0,ie.width,ie.height,Dt,bt,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct,ue,ie.width,ie.height,0,Dt,bt,ie.data)}}}else{if(rt=y.mipmaps,P&&ht){rt.length>0&&At++;const q=Tt(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ue,q.width,q.height)}for(let q=0;q<6;q++)if(it){P?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,st[q].width,st[q].height,Dt,bt,st[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ue,st[q].width,st[q].height,0,Dt,bt,st[q].data);for(let Ct=0;Ct<rt.length;Ct++){const We=rt[Ct].image[q].image;P?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct+1,0,0,We.width,We.height,Dt,bt,We.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct+1,ue,We.width,We.height,0,Dt,bt,We.data)}}else{P?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Dt,bt,st[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ue,Dt,bt,st[q]);for(let Ct=0;Ct<rt.length;Ct++){const ie=rt[Ct];P?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct+1,0,0,Dt,bt,ie.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ct+1,ue,Dt,bt,ie.image[q])}}}m(y)&&g(n.TEXTURE_CUBE_MAP),j.__version=nt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function $(R,y,U,K,nt,j){const Rt=s.convert(U.format,U.colorSpace),ut=s.convert(U.type),Ot=A(U.internalFormat,Rt,ut,U.colorSpace),jt=i.get(y),it=i.get(U);if(it.__renderTarget=y,!jt.__hasExternalTextures){const st=Math.max(1,y.width>>j),It=Math.max(1,y.height>>j);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,Ot,st,It,y.depth,0,Rt,ut,null):e.texImage2D(nt,j,Ot,st,It,0,Rt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,it.__webglTexture,0,L(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,it.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(R,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const K=y.depthTexture,nt=K&&K.isDepthTexture?K.type:null,j=u(y.stencilBuffer,nt),Rt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ge(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(y),j,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(y),j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,R)}else{const K=y.textures;for(let nt=0;nt<K.length;nt++){const j=K[nt],Rt=s.convert(j.format,j.colorSpace),ut=s.convert(j.type),Ot=A(j.internalFormat,Rt,ut,j.colorSpace);Ge(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(y),Ot,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(y),Ot,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ot,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(R,y,U){const K=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(y.depthTexture);if(nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),lt(n.TEXTURE_CUBE_MAP,y.depthTexture);const jt=s.convert(y.depthTexture.format),it=s.convert(y.depthTexture.type);let st;y.depthTexture.format===sr?st=n.DEPTH_COMPONENT24:y.depthTexture.format===Xr&&(st=n.DEPTH24_STENCIL8);for(let It=0;It<6;It++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,st,y.width,y.height,0,jt,it,null)}}else G(y.depthTexture,0);const j=nt.__webglTexture,Rt=L(y),ut=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Ot=y.depthTexture.format===Xr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===sr)Ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ut,j,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ut,j,0);else if(y.depthTexture.format===Xr)Ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ut,j,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ut,j,0);else throw new Error("Unknown depthTexture format")}function pt(R){const y=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=K}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)ft(y.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?ft(y.__webglFramebuffer[0],R,0):ft(y.__webglFramebuffer,R,0)}else if(U){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),xt(y.__webglDepthbuffer[K],R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,j)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),xt(y.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,y,U){const K=i.get(R);y!==void 0&&$(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&pt(R)}function wt(R){const y=R.texture,U=i.get(R),K=i.get(y);R.addEventListener("dispose",I);const nt=R.textures,j=R.isWebGLCubeRenderTarget===!0,Rt=nt.length>1;if(Rt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ut]=[];for(let Ot=0;Ot<y.mipmaps.length;Ot++)U.__webglFramebuffer[ut][Ot]=n.createFramebuffer()}else U.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)U.__webglFramebuffer[ut]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ut=0,Ot=nt.length;ut<Ot;ut++){const jt=i.get(nt[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ge(R)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const Ot=nt[ut];U.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ut]);const jt=s.convert(Ot.format,Ot.colorSpace),it=s.convert(Ot.type),st=A(Ot.internalFormat,jt,it,Ot.colorSpace,R.isXRRenderTarget===!0),It=L(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,st,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,U.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),lt(n.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ot=0;Ot<y.mipmaps.length;Ot++)$(U.__webglFramebuffer[ut][Ot],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot);else $(U.__webglFramebuffer[ut],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,Ot=nt.length;ut<Ot;ut++){const jt=nt[ut],it=i.get(jt);let st=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,it.__webglTexture),lt(st,jt),$(U.__webglFramebuffer,R,jt,n.COLOR_ATTACHMENT0+ut,st,0),m(jt)&&g(st)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),lt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let Ot=0;Ot<y.mipmaps.length;Ot++)$(U.__webglFramebuffer[Ot],R,y,n.COLOR_ATTACHMENT0,ut,Ot);else $(U.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ut,0);m(y)&&g(ut),e.unbindTexture()}R.depthBuffer&&pt(R)}function $t(R){const y=R.textures;for(let U=0,K=y.length;U<K;U++){const nt=y[U];if(m(nt)){const j=b(R),Rt=i.get(nt).__webglTexture;e.bindTexture(j,Rt),g(j),e.unbindTexture()}}}const Jt=[],Bt=[];function le(R){if(R.samples>0){if(Ge(R)===!1){const y=R.textures,U=R.width,K=R.height;let nt=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(R),ut=y.length>1;if(ut)for(let jt=0;jt<y.length;jt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+jt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+jt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Ot=R.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let jt=0;jt<y.length;jt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[jt]);const it=i.get(y[jt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,nt,n.NEAREST),l===!0&&(Jt.length=0,Bt.length=0,Jt.push(n.COLOR_ATTACHMENT0+jt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Jt.push(j),Bt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let jt=0;jt<y.length;jt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+jt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[jt]);const it=i.get(y[jt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+jt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pe(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function be(R,y){const U=R.colorSpace,K=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Hs&&U!==Ar&&(ve.getTransfer(U)===De?(K!==ui||nt!==Qn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Se("WebGLTextures: Unsupported texture color space:",U)),y}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=tt,this.rebindTextures=ne,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function mM(n,t){function e(i,r=Ar){let s;const a=ve.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nf)return n.BYTE;if(i===Ff)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===zu)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===rr)return n.HALF_FLOAT;if(i===Bf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===ui)return n.RGBA;if(i===sr)return n.DEPTH_COMPONENT;if(i===Xr)return n.DEPTH_STENCIL;if(i===zf)return n.RED;if(i===Gu)return n.RED_INTEGER;if(i===zs)return n.RG;if(i===Wu)return n.RG_INTEGER;if(i===Zu)return n.RGBA_INTEGER;if(i===vo||i===yo||i===So||i===xo)if(a===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gc||i===Wc||i===Zc||i===Xc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===qc||i===jc||i===Kc||i===Jc||i===Qc||i===$c)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yc||i===qc)return a===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jc)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kc)return s.COMPRESSED_R11_EAC;if(i===Jc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qc)return s.COMPRESSED_RG11_EAC;if(i===$c)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tu||i===eu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===du||i===fu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===iu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===su)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===au)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===du)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fu)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pu||i===mu||i===gu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===pu)return a===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_u||i===vu||i===yu||i===Su)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===_u)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new jf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ni({vertexShader:gM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fi(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yM extends js{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,_=null,v=null;const x=typeof XRWebGLBinding<"u",m=new vM,g={},b=e.getContextAttributes();let A=null,u=null;const d=[],w=[],I=new Be;let S=null;const E=new oi;E.viewport=new en;const Y=new oi;Y.viewport=new en;const D=[E,Y],B=new Dy;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=d[J];return ot===void 0&&(ot=new Xl,d[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=d[J];return ot===void 0&&(ot=new Xl,d[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=d[J];return ot===void 0&&(ot=new Xl,d[J]=ot),ot.getHandSpace()};function G(J){const ot=w.indexOf(J.inputSource);if(ot===-1)return;const $=d[ot];$!==void 0&&($.update(J.inputSource,J.frame,c||a),$.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let J=0;J<d.length;J++){const ot=w[J];ot!==null&&(w[J]=null,d[J].disconnect(ot))}z=null,Z=null,m.reset();for(const J in g)delete g[J];t.setRenderTarget(A),_=null,f=null,p=null,r=null,u=null,ze.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,xt=null,ft=null;b.depth&&(ft=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=b.stencil?Xr:sr,xt=b.stencil?Ma:Pi);const pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(pt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Di(f.textureWidth,f.textureHeight,{format:ui,type:Qn,depthTexture:new Ea(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,$),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Di(_.framebufferWidth,_.framebufferHeight,{format:ui,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(J){for(let ot=0;ot<J.removed.length;ot++){const $=J.removed[ot],xt=w.indexOf($);xt>=0&&(w[xt]=null,d[xt].disconnect($))}for(let ot=0;ot<J.added.length;ot++){const $=J.added[ot];let xt=w.indexOf($);if(xt===-1){for(let pt=0;pt<d.length;pt++)if(pt>=w.length){w.push($),xt=pt;break}else if(w[pt]===null){w[pt]=$,xt=pt;break}if(xt===-1)break}const ft=d[xt];ft&&ft.connect($)}}const tt=new W,et=new W;function ct(J,ot,$){tt.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition($.matrixWorld);const xt=tt.distanceTo(et),ft=ot.projectionMatrix.elements,pt=$.projectionMatrix.elements,ne=ft[14]/(ft[10]-1),wt=ft[14]/(ft[10]+1),$t=(ft[9]+1)/ft[5],Jt=(ft[9]-1)/ft[5],Bt=(ft[8]-1)/ft[0],le=(pt[8]+1)/pt[0],L=ne*Bt,Ge=ne*le,pe=xt/(-Bt+le),be=pe*-Bt;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(be),J.translateZ(pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Tt=ne+pe,R=wt+pe,y=L-be,U=Ge+(xt-be),K=$t*wt/R*Tt,nt=Jt*wt/R*Tt;J.projectionMatrix.makePerspective(y,U,K,nt,Tt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ot=J.near,$=J.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&($=m.depthFar)),B.near=Y.near=E.near=ot,B.far=Y.far=E.far=$,(z!==B.near||Z!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,Z=B.far),B.layers.mask=J.layers.mask|6,E.layers.mask=B.layers.mask&-5,Y.layers.mask=B.layers.mask&-3;const xt=J.parent,ft=B.cameras;_t(B,xt);for(let pt=0;pt<ft.length;pt++)_t(ft[pt],xt);ft.length===2?ct(B,E,Y):B.projectionMatrix.copy(E.projectionMatrix),lt(J,B,xt)};function lt(J,ot,$){$===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy($.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return g[J]};let ee=null;function Ve(J,ot){if(h=ot.getViewerPose(c||a),v=ot,h!==null){const $=h.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let xt=!1;$.length!==B.cameras.length&&(B.cameras.length=0,xt=!0);for(let wt=0;wt<$.length;wt++){const $t=$[wt];let Jt=null;if(_!==null)Jt=_.getViewport($t);else{const le=p.getViewSubImage(f,$t);Jt=le.viewport,wt===0&&(t.setRenderTargetTextures(u,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(u))}let Bt=D[wt];Bt===void 0&&(Bt=new oi,Bt.layers.enable(wt),Bt.viewport=new en,D[wt]=Bt),Bt.matrix.fromArray($t.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray($t.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),wt===0&&(B.matrix.copy(Bt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),xt===!0&&B.cameras.push(Bt)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){p=i.getBinding();const wt=p.getDepthInformation($[0]);wt&&wt.isValid&&wt.texture&&m.init(wt,r.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),p=i.getBinding();for(let wt=0;wt<$.length;wt++){const $t=$[wt].camera;if($t){let Jt=g[$t];Jt||(Jt=new jf,g[$t]=Jt);const Bt=p.getCameraImage($t);Jt.sourceTexture=Bt}}}}for(let $=0;$<d.length;$++){const xt=w[$],ft=d[$];xt!==null&&ft!==void 0&&ft.update(xt,ot,c||a)}ee&&ee(J,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const ze=new Qf;ze.setAnimationLoop(Ve),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const zr=new ar,SM=new sn;function xM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Kf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,b,A,u){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),p(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&_(m,g,u)):g.isMeshMatcapMaterial?(s(m,g),v(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=t.get(g),A=b.envMap,u=b.envMapRotation;A&&(m.envMap.value=A,zr.copy(u),zr.x*=-1,zr.y*=-1,zr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(zr)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const u=A.program;i.uniformBlockBinding(b,u)}function c(b,A){let u=r[b.id];u===void 0&&(v(b),u=h(b),r[b.id]=u,b.addEventListener("dispose",m));const d=A.program;i.updateUBOMapping(b,d);const w=t.render.frame;s[b.id]!==w&&(f(b),s[b.id]=w)}function h(b){const A=p();b.__bindingPointIndex=A;const u=n.createBuffer(),d=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,d,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,u),u}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=r[b.id],u=b.uniforms,d=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let w=0,I=u.length;w<I;w++){const S=Array.isArray(u[w])?u[w]:[u[w]];for(let E=0,Y=S.length;E<Y;E++){const D=S[E];if(_(D,w,E,d)===!0){const B=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let G=0;G<z.length;G++){const H=z[G],F=x(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+Z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(b,A,u,d){const w=b.value,I=A+"_"+u;if(d[I]===void 0)return typeof w=="number"||typeof w=="boolean"?d[I]=w:d[I]=w.clone(),!0;{const S=d[I];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return d[I]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function v(b){const A=b.uniforms;let u=0;const d=16;for(let I=0,S=A.length;I<S;I++){const E=Array.isArray(A[I])?A[I]:[A[I]];for(let Y=0,D=E.length;Y<D;Y++){const B=E[Y],z=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,G=z.length;Z<G;Z++){const H=z[Z],F=x(H),tt=u%d,et=tt%F.boundary,ct=tt+et;u+=et,ct!==0&&d-ct<F.storage&&(u+=d-ct),B.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=u,u+=F.storage}}}const w=u%d;return w>0&&(u+=d-w),b.__size=u,b.__cache={},this}function x(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const u=a.indexOf(A.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function g(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const MM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function EM(){return _i===null&&(_i=new vy(MM,16,16,zs,rr),_i.name="DFG_LUT",_i.minFilter=_n,_i.magFilter=_n,_i.wrapS=$i,_i.wrapT=$i,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class AM{constructor(t={}){const{canvas:e=qv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:_=Qn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=_,m=new Set([Zu,Wu,Gu]),g=new Set([Qn,Pi,ba,Ma,Hu,ku]),b=new Uint32Array(4),A=new Int32Array(4);let u=null,d=null;const w=[],I=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let Y=!1;this._outputColorSpace=qn;let D=0,B=0,z=null,Z=-1,G=null;const H=new en,F=new en;let tt=null;const et=new Me(0);let ct=0,_t=e.width,lt=e.height,ee=1,Ve=null,ze=null;const J=new en(0,0,_t,lt),ot=new en(0,0,_t,lt);let $=!1;const xt=new Yf;let ft=!1,pt=!1;const ne=new sn,wt=new W,$t=new en,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function le(){return z===null?ee:1}let L=i;function Ge(M,O){return e.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",We,!1),L===null){const O="webgl2";if(L=Ge(O,M),L===null)throw Ge(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Se("WebGLRenderer: "+M.message),M}let pe,be,Tt,R,y,U,K,nt,j,Rt,ut,Ot,jt,it,st,It,Dt,bt,ue,P,ht,at,At;function rt(){pe=new Ax(L),pe.init(),ht=new mM(L,pe),be=new _x(L,pe,t,ht),Tt=new fM(L,pe),be.reversedDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),R=new Rx(L),y=new $b,U=new pM(L,pe,Tt,y,be,ht,R),K=new Ex(E),nt=new Py(L),at=new mx(L,nt),j=new wx(L,nt,R,at),Rt=new Cx(L,j,nt,at,R),bt=new Ix(L,be,U),st=new vx(y),ut=new Qb(E,K,pe,be,at,st),Ot=new xM(E,y),jt=new eM,it=new oM(pe),Dt=new px(E,K,Tt,Rt,v,l),It=new dM(E,Rt,be),At=new bM(L,R,be,Tt),ue=new gx(L,pe,R),P=new Tx(L,pe,R),R.programs=ut.programs,E.capabilities=be,E.extensions=pe,E.properties=y,E.renderLists=jt,E.shadowMap=It,E.state=Tt,E.info=R}rt(),x!==Qn&&(S=new Lx(x,e.width,e.height,r,s));const q=new yM(E,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(_t,lt,!1))},this.getSize=function(M){return M.set(_t,lt)},this.setSize=function(M,O,X=!0){if(q.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=M,lt=O,e.width=Math.floor(M*ee),e.height=Math.floor(O*ee),X===!0&&(e.style.width=M+"px",e.style.height=O+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(_t*ee,lt*ee).floor()},this.setDrawingBufferSize=function(M,O,X){_t=M,lt=O,ee=X,e.width=Math.floor(M*X),e.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(x===Qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,O,X,k){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,O,X,k),Tt.viewport(H.copy(J).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,O,X,k){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,O,X,k),Tt.scissor(F.copy(ot).multiplyScalar(ee).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(M){Tt.setScissorTest($=M)},this.setOpaqueSort=function(M){Ve=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,X=!0){let k=0;if(M){let V=!1;if(z!==null){const vt=z.texture.format;V=m.has(vt)}if(V){const vt=z.texture.type,Et=g.has(vt),yt=Dt.getClearColor(),Lt=Dt.getClearAlpha(),Ft=yt.r,se=yt.g,he=yt.b;Et?(b[0]=Ft,b[1]=se,b[2]=he,b[3]=Lt,L.clearBufferuiv(L.COLOR,0,b)):(A[0]=Ft,A[1]=se,A[2]=he,A[3]=Lt,L.clearBufferiv(L.COLOR,0,A))}else k|=L.COLOR_BUFFER_BIT}O&&(k|=L.DEPTH_BUFFER_BIT),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",We,!1),Dt.dispose(),jt.dispose(),it.dispose(),y.dispose(),K.dispose(),Rt.dispose(),at.dispose(),At.dispose(),ut.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ah),q.removeEventListener("sessionend",wh),Pr.stop()};function Ct(M){M.preventDefault(),qh("WebGLRenderer: Context Lost."),Y=!0}function ie(){qh("WebGLRenderer: Context Restored."),Y=!1;const M=R.autoReset,O=It.enabled,X=It.autoUpdate,k=It.needsUpdate,V=It.type;rt(),R.autoReset=M,It.enabled=O,It.autoUpdate=X,It.needsUpdate=k,It.type=V}function We(M){Se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Re(M){const O=M.target;O.removeEventListener("dispose",Re),Bi(O)}function Bi(M){Vi(M),y.remove(M)}function Vi(M){const O=y.get(M).programs;O!==void 0&&(O.forEach(function(X){ut.releaseProgram(X)}),M.isShaderMaterial&&ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,k,V,vt){O===null&&(O=Jt);const Et=V.isMesh&&V.matrixWorld.determinant()<0,yt=cm(M,O,X,k,V);Tt.setMaterial(k,Et);let Lt=X.index,Ft=1;if(k.wireframe===!0){if(Lt=j.getWireframeAttribute(X),Lt===void 0)return;Ft=2}const se=X.drawRange,he=X.attributes.position;let Ut=se.start*Ft,Ue=(se.start+se.count)*Ft;vt!==null&&(Ut=Math.max(Ut,vt.start*Ft),Ue=Math.min(Ue,(vt.start+vt.count)*Ft)),Lt!==null?(Ut=Math.max(Ut,0),Ue=Math.min(Ue,Lt.count)):he!=null&&(Ut=Math.max(Ut,0),Ue=Math.min(Ue,he.count));const $e=Ue-Ut;if($e<0||$e===1/0)return;at.setup(V,k,yt,X,Lt);let Je,Oe=ue;if(Lt!==null&&(Je=nt.get(Lt),Oe=P,Oe.setIndex(Je)),V.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*le()),Oe.setMode(L.LINES)):Oe.setMode(L.TRIANGLES);else if(V.isLine){let pn=k.linewidth;pn===void 0&&(pn=1),Tt.setLineWidth(pn*le()),V.isLineSegments?Oe.setMode(L.LINES):V.isLineLoop?Oe.setMode(L.LINE_LOOP):Oe.setMode(L.LINE_STRIP)}else V.isPoints?Oe.setMode(L.POINTS):V.isSprite&&Oe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const pn=V._multiDrawStarts,Pt=V._multiDrawCounts,Bn=V._multiDrawCount,ye=Lt?nt.get(Lt).bytesPerElement:1,ni=y.get(k).currentProgram.getUniforms();for(let mi=0;mi<Bn;mi++)ni.setValue(L,"_gl_DrawID",mi),Oe.render(pn[mi]/ye,Pt[mi])}else if(V.isInstancedMesh)Oe.renderInstances(Ut,$e,V.count);else if(X.isInstancedBufferGeometry){const pn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pt=Math.min(X.instanceCount,pn);Oe.renderInstances(Ut,$e,Pt)}else Oe.render(Ut,$e)};function Eh(M,O,X){M.transparent===!0&&M.side===li&&M.forceSinglePass===!1?(M.side=Fn,M.needsUpdate=!0,Ha(M,O,X),M.side=Tr,M.needsUpdate=!0,Ha(M,O,X),M.side=li):Ha(M,O,X)}this.compile=function(M,O,X=null){X===null&&(X=M),d=it.get(X),d.init(O),I.push(d),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const k=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const vt=V.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){const yt=vt[Et];Eh(yt,X,V),k.add(yt)}else Eh(vt,X,V),k.add(vt)}),d=I.pop(),k},this.compileAsync=function(M,O,X=null){const k=this.compile(M,O,X);return new Promise(V=>{function vt(){if(k.forEach(function(Et){y.get(Et).currentProgram.isReady()&&k.delete(Et)}),k.size===0){V(M);return}setTimeout(vt,10)}pe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Il=null;function lm(M){Il&&Il(M)}function Ah(){Pr.stop()}function wh(){Pr.start()}const Pr=new Qf;Pr.setAnimationLoop(lm),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(M){Il=M,q.setAnimationLoop(M),M===null?Pr.stop():Pr.start()},q.addEventListener("sessionstart",Ah),q.addEventListener("sessionend",wh),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,k=S!==null&&(z===null||X)&&S.begin(E,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,O,z),d=it.get(M,I.length),d.init(O),I.push(d),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),xt.setFromProjectionMatrix(ne,Ti,O.reversedDepth),pt=this.localClippingEnabled,ft=st.init(this.clippingPlanes,pt),u=jt.get(M,w.length),u.init(),w.push(u),q.enabled===!0&&q.isPresenting===!0){const Et=E.xr.getDepthSensingMesh();Et!==null&&Cl(Et,O,-1/0,E.sortObjects)}Cl(M,O,0,E.sortObjects),u.finish(),E.sortObjects===!0&&u.sort(Ve,ze),Bt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Bt&&Dt.addToRenderList(u,M),this.info.render.frame++,ft===!0&&st.beginShadows();const V=d.state.shadowsArray;if(It.render(V,M,O),ft===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&S.hasRenderPass())===!1){const Et=u.opaque,yt=u.transmissive;if(d.setupLights(),O.isArrayCamera){const Lt=O.cameras;if(yt.length>0)for(let Ft=0,se=Lt.length;Ft<se;Ft++){const he=Lt[Ft];Rh(Et,yt,M,he)}Bt&&Dt.render(M);for(let Ft=0,se=Lt.length;Ft<se;Ft++){const he=Lt[Ft];Th(u,M,he,he.viewport)}}else yt.length>0&&Rh(Et,yt,M,O),Bt&&Dt.render(M),Th(u,M,O)}z!==null&&B===0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),k&&S.end(E),M.isScene===!0&&M.onAfterRender(E,M,O),at.resetDefaultState(),Z=-1,G=null,I.pop(),I.length>0?(d=I[I.length-1],ft===!0&&st.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?u=w[w.length-1]:u=null};function Cl(M,O,X,k){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||xt.intersectsSprite(M)){k&&$t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const Et=Rt.update(M),yt=M.material;yt.visible&&u.push(M,Et,yt,X,$t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||xt.intersectsObject(M))){const Et=Rt.update(M),yt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$t.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$t.copy(Et.boundingSphere.center)),$t.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(yt)){const Lt=Et.groups;for(let Ft=0,se=Lt.length;Ft<se;Ft++){const he=Lt[Ft],Ut=yt[he.materialIndex];Ut&&Ut.visible&&u.push(M,Et,Ut,X,$t.z,he)}}else yt.visible&&u.push(M,Et,yt,X,$t.z,null)}}const vt=M.children;for(let Et=0,yt=vt.length;Et<yt;Et++)Cl(vt[Et],O,X,k)}function Th(M,O,X,k){const{opaque:V,transmissive:vt,transparent:Et}=M;d.setupLightsView(X),ft===!0&&st.setGlobalState(E.clippingPlanes,X),k&&Tt.viewport(H.copy(k)),V.length>0&&za(V,O,X),vt.length>0&&za(vt,O,X),Et.length>0&&za(Et,O,X),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Rh(M,O,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget[k.id]===void 0){const Ut=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");d.state.transmissionRenderTarget[k.id]=new Di(1,1,{generateMipmaps:!0,type:Ut?rr:Qn,minFilter:Zr,samples:Math.max(4,be.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const vt=d.state.transmissionRenderTarget[k.id],Et=k.viewport||H;vt.setSize(Et.z*E.transmissionResolutionScale,Et.w*E.transmissionResolutionScale);const yt=E.getRenderTarget(),Lt=E.getActiveCubeFace(),Ft=E.getActiveMipmapLevel();E.setRenderTarget(vt),E.getClearColor(et),ct=E.getClearAlpha(),ct<1&&E.setClearColor(16777215,.5),E.clear(),Bt&&Dt.render(X);const se=E.toneMapping;E.toneMapping=Ci;const he=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),ft===!0&&st.setGlobalState(E.clippingPlanes,k),za(M,X,k),U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ue=0,$e=O.length;Ue<$e;Ue++){const Je=O[Ue],{object:Oe,geometry:pn,material:Pt,group:Bn}=Je;if(Pt.side===li&&Oe.layers.test(k.layers)){const ye=Pt.side;Pt.side=Fn,Pt.needsUpdate=!0,Ih(Oe,X,k,pn,Pt,Bn),Pt.side=ye,Pt.needsUpdate=!0,Ut=!0}}Ut===!0&&(U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt))}E.setRenderTarget(yt,Lt,Ft),E.setClearColor(et,ct),he!==void 0&&(k.viewport=he),E.toneMapping=se}function za(M,O,X){const k=O.isScene===!0?O.overrideMaterial:null;for(let V=0,vt=M.length;V<vt;V++){const Et=M[V],{object:yt,geometry:Lt,group:Ft}=Et;let se=Et.material;se.allowOverride===!0&&k!==null&&(se=k),yt.layers.test(X.layers)&&Ih(yt,O,X,Lt,se,Ft)}}function Ih(M,O,X,k,V,vt){M.onBeforeRender(E,O,X,k,V,vt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(E,O,X,k,M,vt),V.transparent===!0&&V.side===li&&V.forceSinglePass===!1?(V.side=Fn,V.needsUpdate=!0,E.renderBufferDirect(X,O,k,V,M,vt),V.side=Tr,V.needsUpdate=!0,E.renderBufferDirect(X,O,k,V,M,vt),V.side=li):E.renderBufferDirect(X,O,k,V,M,vt),M.onAfterRender(E,O,X,k,V,vt)}function Ha(M,O,X){O.isScene!==!0&&(O=Jt);const k=y.get(M),V=d.state.lights,vt=d.state.shadowsArray,Et=V.state.version,yt=ut.getParameters(M,V.state,vt,O,X),Lt=ut.getProgramCacheKey(yt);let Ft=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=K.get(M.envMap||k.environment,se),k.envMapRotation=k.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Re),Ft=new Map,k.programs=Ft);let he=Ft.get(Lt);if(he!==void 0){if(k.currentProgram===he&&k.lightsStateVersion===Et)return Dh(M,yt),he}else yt.uniforms=ut.getUniforms(M),M.onBeforeCompile(yt,E),he=ut.acquireProgram(yt,Lt),Ft.set(Lt,he),k.uniforms=yt.uniforms;const Ut=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=st.uniform),Dh(M,yt),k.needsLights=hm(M),k.lightsStateVersion=Et,k.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=he,k.uniformsList=null,he}function Ch(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=bo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Dh(M,O){const X=y.get(M);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function cm(M,O,X,k,V){O.isScene!==!0&&(O=Jt),U.resetTextureUnits();const vt=O.fog,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,yt=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Hs,Lt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ft=K.get(k.envMap||Et,Lt),se=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,he=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ut=!!X.morphAttributes.position,Ue=!!X.morphAttributes.normal,$e=!!X.morphAttributes.color;let Je=Ci;k.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Je=E.toneMapping);const Oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pn=Oe!==void 0?Oe.length:0,Pt=y.get(k),Bn=d.state.lights;if(ft===!0&&(pt===!0||M!==G)){const un=M===G&&k.id===Z;st.setState(k,M,un)}let ye=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Bn.state.version||Pt.outputColorSpace!==yt||V.isBatchedMesh&&Pt.batching===!1||!V.isBatchedMesh&&Pt.batching===!0||V.isBatchedMesh&&Pt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pt.instancing===!1||!V.isInstancedMesh&&Pt.instancing===!0||V.isSkinnedMesh&&Pt.skinning===!1||!V.isSkinnedMesh&&Pt.skinning===!0||V.isInstancedMesh&&Pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pt.instancingMorph===!1&&V.morphTexture!==null||Pt.envMap!==Ft||k.fog===!0&&Pt.fog!==vt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==st.numPlanes||Pt.numIntersection!==st.numIntersection)||Pt.vertexAlphas!==se||Pt.vertexTangents!==he||Pt.morphTargets!==Ut||Pt.morphNormals!==Ue||Pt.morphColors!==$e||Pt.toneMapping!==Je||Pt.morphTargetsCount!==pn)&&(ye=!0):(ye=!0,Pt.__version=k.version);let ni=Pt.currentProgram;ye===!0&&(ni=Ha(k,O,V));let mi=!1,Nr=!1,$r=!1;const He=ni.getUniforms(),dn=Pt.uniforms;if(Tt.useProgram(ni.program)&&(mi=!0,Nr=!0,$r=!0),k.id!==Z&&(Z=k.id,Nr=!0),mi||G!==M){Tt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),He.setValue(L,"projectionMatrix",M.projectionMatrix),He.setValue(L,"viewMatrix",M.matrixWorldInverse);const dr=He.map.cameraPosition;dr!==void 0&&dr.setValue(L,wt.setFromMatrixPosition(M.matrixWorld)),be.logarithmicDepthBuffer&&He.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&He.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,Nr=!0,$r=!0)}if(Pt.needsLights&&(Bn.state.directionalShadowMap.length>0&&He.setValue(L,"directionalShadowMap",Bn.state.directionalShadowMap,U),Bn.state.spotShadowMap.length>0&&He.setValue(L,"spotShadowMap",Bn.state.spotShadowMap,U),Bn.state.pointShadowMap.length>0&&He.setValue(L,"pointShadowMap",Bn.state.pointShadowMap,U)),V.isSkinnedMesh){He.setOptional(L,V,"bindMatrix"),He.setOptional(L,V,"bindMatrixInverse");const un=V.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),He.setValue(L,"boneTexture",un.boneTexture,U))}V.isBatchedMesh&&(He.setOptional(L,V,"batchingTexture"),He.setValue(L,"batchingTexture",V._matricesTexture,U),He.setOptional(L,V,"batchingIdTexture"),He.setValue(L,"batchingIdTexture",V._indirectTexture,U),He.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&He.setValue(L,"batchingColorTexture",V._colorsTexture,U));const hr=X.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&bt.update(V,X,ni),(Nr||Pt.receiveShadow!==V.receiveShadow)&&(Pt.receiveShadow=V.receiveShadow,He.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=EM()),Nr&&(He.setValue(L,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&um(dn,$r),vt&&k.fog===!0&&Ot.refreshFogUniforms(dn,vt),Ot.refreshMaterialUniforms(dn,k,ee,lt,d.state.transmissionRenderTarget[M.id]),bo.upload(L,Ch(Pt),dn,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bo.upload(L,Ch(Pt),dn,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&He.setValue(L,"center",V.center),He.setValue(L,"modelViewMatrix",V.modelViewMatrix),He.setValue(L,"normalMatrix",V.normalMatrix),He.setValue(L,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const un=k.uniformsGroups;for(let dr=0,ts=un.length;dr<ts;dr++){const Lh=un[dr];At.update(Lh,ni),At.bind(Lh,ni)}}return ni}function um(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function hm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,O,X){const k=y.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),y.get(M.texture).__webglTexture=O,y.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const X=y.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const dm=L.createFramebuffer();this.setRenderTarget=function(M,O=0,X=0){z=M,D=O,B=X;let k=null,V=!1,vt=!1;if(M){const yt=y.get(M);if(yt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(L.FRAMEBUFFER,yt.__webglFramebuffer),H.copy(M.viewport),F.copy(M.scissor),tt=M.scissorTest,Tt.viewport(H),Tt.scissor(F),Tt.setScissorTest(tt),Z=-1;return}else if(yt.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(yt.__hasExternalTextures)U.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const se=M.depthTexture;if(yt.__boundDepthTexture!==se){if(se!==null&&y.has(se)&&(M.width!==se.image.width||M.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(vt=!0);const Ft=y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?k=Ft[O][X]:k=Ft[O],V=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?k=y.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[X]:k=Ft,H.copy(M.viewport),F.copy(M.scissor),tt=M.scissorTest}else H.copy(J).multiplyScalar(ee).floor(),F.copy(ot).multiplyScalar(ee).floor(),tt=$;if(X!==0&&(k=dm),Tt.bindFramebuffer(L.FRAMEBUFFER,k)&&Tt.drawBuffers(M,k),Tt.viewport(H),Tt.scissor(F),Tt.setScissorTest(tt),V){const yt=y.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,X)}else if(vt){const yt=O;for(let Lt=0;Lt<M.textures.length;Lt++){const Ft=y.get(M.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,X,yt)}}else if(M!==null&&X!==0){const yt=y.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,X)}Z=-1},this.readRenderTargetPixels=function(M,O,X,k,V,vt,Et,yt=0){if(!(M&&M.isWebGLRenderTarget)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){Tt.bindFramebuffer(L.FRAMEBUFFER,Lt);try{const Ft=M.textures[yt],se=Ft.format,he=Ft.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),!be.textureFormatReadable(se)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(he)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-k&&X>=0&&X<=M.height-V&&L.readPixels(O,X,k,V,ht.convert(se),ht.convert(he),vt)}finally{const Ft=z!==null?y.get(z).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,O,X,k,V,vt,Et,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt)if(O>=0&&O<=M.width-k&&X>=0&&X<=M.height-V){Tt.bindFramebuffer(L.FRAMEBUFFER,Lt);const Ft=M.textures[yt],se=Ft.format,he=Ft.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),!be.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(O,X,k,V,ht.convert(se),ht.convert(he),0);const Ue=z!==null?y.get(z).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,Ue);const $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jv(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(Ut),L.deleteSync($e),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,X=0){const k=Math.pow(2,-X),V=Math.floor(M.image.width*k),vt=Math.floor(M.image.height*k),Et=O!==null?O.x:0,yt=O!==null?O.y:0;U.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Et,yt,V,vt),Tt.unbindTexture()};const fm=L.createFramebuffer(),pm=L.createFramebuffer();this.copyTextureToTexture=function(M,O,X=null,k=null,V=0,vt=0){let Et,yt,Lt,Ft,se,he,Ut,Ue,$e;const Je=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(X!==null)Et=X.max.x-X.min.x,yt=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,se=X.min.y,he=X.isBox3?X.min.z:0;else{const dn=Math.pow(2,-V);Et=Math.floor(Je.width*dn),yt=Math.floor(Je.height*dn),M.isDataArrayTexture?Lt=Je.depth:M.isData3DTexture?Lt=Math.floor(Je.depth*dn):Lt=1,Ft=0,se=0,he=0}k!==null?(Ut=k.x,Ue=k.y,$e=k.z):(Ut=0,Ue=0,$e=0);const Oe=ht.convert(O.format),pn=ht.convert(O.type);let Pt;O.isData3DTexture?(U.setTexture3D(O,0),Pt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),Pt=L.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Bn=L.getParameter(L.UNPACK_ROW_LENGTH),ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ni=L.getParameter(L.UNPACK_SKIP_PIXELS),mi=L.getParameter(L.UNPACK_SKIP_ROWS),Nr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,he);const $r=M.isDataArrayTexture||M.isData3DTexture,He=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const dn=y.get(M),hr=y.get(O),un=y.get(dn.__renderTarget),dr=y.get(hr.__renderTarget);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let ts=0;ts<Lt;ts++)$r&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(M).__webglTexture,V,he+ts),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(O).__webglTexture,vt,$e+ts)),L.blitFramebuffer(Ft,se,Et,yt,Ut,Ue,Et,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||y.has(M)){const dn=y.get(M),hr=y.get(O);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,fm),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,pm);for(let un=0;un<Lt;un++)$r?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,V,he+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,V),He?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hr.__webglTexture,vt,$e+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hr.__webglTexture,vt),V!==0?L.blitFramebuffer(Ft,se,Et,yt,Ut,Ue,Et,yt,L.COLOR_BUFFER_BIT,L.NEAREST):He?L.copyTexSubImage3D(Pt,vt,Ut,Ue,$e+un,Ft,se,Et,yt):L.copyTexSubImage2D(Pt,vt,Ut,Ue,Ft,se,Et,yt);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else He?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Pt,vt,Ut,Ue,$e,Et,yt,Lt,Oe,pn,Je.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,vt,Ut,Ue,$e,Et,yt,Lt,Oe,Je.data):L.texSubImage3D(Pt,vt,Ut,Ue,$e,Et,yt,Lt,Oe,pn,Je):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Ut,Ue,Et,yt,Oe,pn,Je.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Ut,Ue,Je.width,Je.height,Oe,Je.data):L.texSubImage2D(L.TEXTURE_2D,vt,Ut,Ue,Et,yt,Oe,pn,Je);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ni),L.pixelStorei(L.UNPACK_SKIP_ROWS,mi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nr),vt===0&&O.generateMipmaps&&L.generateMipmap(Pt),Tt.unbindTexture()},this.initRenderTarget=function(M){y.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){D=0,B=0,z=null,Tt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}class wM{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Me("#ffffff");async initialize(t){this.canvas=t,this.renderer=new AM({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new hy,this.camera=new Ku(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Na(1,1);this.geometryCache.set("plane",e),this.updateThemeColors(),this.themeObserver=new MutationObserver(i=>{for(let r=0;r<i.length;r++)if(i[r].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize()}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Me(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=0,this.camera.bottom=this.height,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new zo({color:16777215,transparent:!0,depthWrite:!1,side:li});e=new fi(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new zo({transparent:!0,depthWrite:!1,side:li});e=new fi(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function Qt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(h){try{c(i.next(h))}catch(p){a(p)}}function l(h){try{c(i.throw(h))}catch(p){a(p)}}function c(h){h.done?s(h.value):r(h.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Fd(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function oe(n){return this instanceof oe?(this.v=n,this):new oe(n)}function Ri(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(v){return Promise.resolve(v).then(_,p)}}function o(_,v){i[_]&&(r[_]=function(x){return new Promise(function(m,g){s.push([_,x,m,g])>1||l(_,x)})},v&&(r[_]=v(r[_])))}function l(_,v){try{c(i[_](v))}catch(x){f(s[0][3],x)}}function c(_){_.value instanceof oe?Promise.resolve(_.value.v).then(h,p):f(s[0][2],_)}function h(_){l("next",_)}function p(_){l("throw",_)}function f(_,v){_(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Mo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:oe(n[r](a)),done:!1}:s?s(a):a}:s}}function qr(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Fd=="function"?Fd(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const TM=new TextDecoder("utf-8"),Eu=n=>TM.decode(n),RM=new TextEncoder,Ju=n=>RM.encode(n),IM=n=>typeof n=="number",rp=n=>typeof n=="boolean",an=n=>typeof n=="function",Un=n=>n!=null&&Object(n)===n,Kr=n=>Un(n)&&an(n.then),Fa=n=>Un(n)&&an(n[Symbol.iterator]),Qs=n=>Un(n)&&an(n[Symbol.asyncIterator]),Au=n=>Un(n)&&Un(n.schema),sp=n=>Un(n)&&"done"in n&&"value"in n,ap=n=>Un(n)&&an(n.stat)&&IM(n.fd),op=n=>Un(n)&&Qu(n.body),El=n=>"_getDOMStream"in n&&"_getNodeStream"in n,CM=n=>Un(n)&&an(n.abort)&&an(n.getWriter)&&!El(n),Qu=n=>Un(n)&&an(n.cancel)&&an(n.getReader)&&!El(n),DM=n=>Un(n)&&an(n.end)&&an(n.write)&&rp(n.writable)&&!El(n),lp=n=>Un(n)&&an(n.read)&&an(n.pipe)&&rp(n.readable)&&!El(n),LM=n=>Un(n)&&an(n.clear)&&an(n.bytes)&&an(n.position)&&an(n.setPosition)&&an(n.capacity)&&an(n.getBufferIdentifier)&&an(n.createLong),$u=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function PM(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,h=n.length;++l<h;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function Ud(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Fi(n,t){const e=PM(n),i=e.reduce((h,p)=>h+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const h=e.length;++l<h;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?Ud(a,s,o):a=s;break}Ud(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Le(n,t){let e=sp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=Ju(e)),e instanceof ArrayBuffer?new n(e):e instanceof $u?new n(e):LM(e)?Le(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const ca=n=>Le(Int32Array,n),Od=n=>Le(BigInt64Array,n),me=n=>Le(Uint8Array,n),wu=n=>(n.next(),n);function*NM(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof $u?e(t):Fa(t)?t:e(t);return yield*wu((function*(r){let s=null;do s=r.next(yield Le(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const FM=n=>NM(Uint8Array,n);function cp(n,t){return Ri(this,arguments,function*(){if(Kr(t))return yield oe(yield oe(yield*Mo(qr(cp(n,yield oe(t))))));const i=function(a){return Ri(this,arguments,function*(){yield yield oe(yield oe(a))})},r=function(a){return Ri(this,arguments,function*(){yield oe(yield*Mo(qr(wu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof $u?i(t):Fa(t)?r(t):Qs(t)?t:i(t);return yield oe(yield*Mo(qr(wu((function(a){return Ri(this,arguments,function*(){let o=null;do o=yield oe(a.next(yield yield oe(Le(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield oe(new n)})}const UM=n=>cp(Uint8Array,n);function up(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function OM(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const jn={fromIterable(n){return po(BM(n))},fromAsyncIterable(n){return po(VM(n))},fromDOMStream(n){return po(zM(n))},fromNodeStream(n){return po(kM(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},po=n=>(n.next(),n);function*BM(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Fi(i,a)[0]:([r,i,o]=Fi(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=FM(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(h){(e=!0)&&typeof c.throw=="function"&&c.throw(h)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function VM(n){return Ri(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Fi(r,o)[0]:([s,r,l]=Fi(r,o),s)}({cmd:a,size:o}=(yield yield oe(null))||{cmd:"read",size:0});const h=UM(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield oe(h.next()):yield oe(h.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield oe(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof h.throw=="function"&&(yield oe(h.throw(p)))}finally{i===!1&&typeof h.return=="function"&&(yield oe(h.return(new Uint8Array(0))))}return yield oe(null)})}function zM(n){return Ri(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Fi(r,o)[0]:([s,r,l]=Fi(r,o),s)}({cmd:a,size:o}=(yield yield oe(null))||{cmd:"read",size:0});const h=new HM(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield oe(h.read()):yield oe(h.read(o-l)),!e&&s.byteLength>0&&(r.push(me(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield oe(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield oe(h.cancel(p)))}finally{i===!1?yield oe(h.cancel()):n.locked&&h.releaseLock()}return yield oe(null)})}class HM{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Qt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Qt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=me(e)),e})}}const mc=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function kM(n){return Ri(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],h;function p(){return a==="peek"?Fi(c,o)[0]:([h,c,l]=Fi(c,o),h)}if({cmd:a,size:o}=(yield yield oe(null))||{cmd:"read",size:0},n.isTTY)return yield yield oe(new Uint8Array(0)),yield oe(null);try{e[0]=mc(n,"end"),e[1]=mc(n,"error");do{if(e[2]=mc(n,"readable"),[i,s]=yield oe(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(h=me(n.read(o-l)),h.byteLength<o-l&&(h=me(n.read()))):h=me(n.read()),h.byteLength>0&&(c.push(h),l+=h.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield oe(p()));while(o<l)}while(!r)}finally{yield oe(f(e,i==="error"?s:null))}return yield oe(null);function f(_,v){return h=c=null,new Promise((x,m)=>{for(const[g,b]of _)n.off(g,b);try{const g=n.destroy;g&&g.call(n,v),v=void 0}catch(g){v=g||v}finally{v!=null?m(v):x()}})}})}var nn;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(nn||(nn={}));var yn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(yn||(yn={}));var vn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(vn||(vn={}));var ti;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(ti||(ti={}));var Wt;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Wt||(Wt={}));var Ui;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Ui||(Ui={}));const gc=2,bi=4,Ji=4,Te=4,br=new Int32Array(2),Bd=new Float32Array(br.buffer),Vd=new Float64Array(br.buffer),mo=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Tu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Tu||(Tu={}));let Gs=class hp{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new hp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return br[0]=this.readInt32(t),Bd[0]}readFloat64(t){return br[mo?0:1]=this.readInt32(t),br[mo?1:0]=this.readInt32(t+4),Vd[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Bd[0]=e,this.writeInt32(t,br[0])}writeFloat64(t,e){Vd[0]=e,this.writeInt32(t,br[mo?0:1]),this.writeInt32(t+4,br[mo?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+bi+Ji)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<Ji;e++)t+=String.fromCharCode(this.readInt8(this.position_+bi+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=bi;const r=this.bytes_.subarray(t,t+i);return e===Tu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+bi}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=Ji)throw new Error("FlatBuffers: file identifier must be length "+Ji);for(let e=0;e<Ji;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+bi+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},dp=class fp{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Gs.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=fp.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Gs.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(bi,0),this.writeInt32(this.offset()-t+bi)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*gc;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=gc;c<s;c+=gc)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Te:0;if(e){const s=e;if(this.prep(this.minalign,bi+Ji+r),s.length!=Ji)throw new TypeError("FlatBuffers: file identifier must be length "+Ji);for(let a=Ji-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,bi+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(bi,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var Ho;(function(n){n[n.BUFFER=0]="BUFFER"})(Ho||(Ho={}));var ko;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(ko||(ko={}));class Mr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Mr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Te),(e||new Mr).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):ko.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Ho.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,ko.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Ho.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Mr.startBodyCompression(t),Mr.addCodec(t,e),Mr.addMethod(t,i),Mr.endBodyCompression(t)}}class pp{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let mp=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},Yi=class Ru{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Ru).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Te),(e||new Ru).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new mp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new pp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Mr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},ys=class Iu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Iu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Te),(e||new Iu).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Yi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Ws;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Ws||(Ws={}));var Go;(function(n){n[n.DenseArray=0]="DenseArray"})(Go||(Go={}));class Gn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new Gn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Te),(e||new Gn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return Gn.startInt(t),Gn.addBitWidth(t,e),Gn.addIsSigned(t,i),Gn.endInt(t)}}class Qi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new Qi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Te),(e||new Qi).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Gn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Go.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Go.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class on{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new on).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Te),(e||new on).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return on.startKeyValue(t),on.addKey(t,e),on.addValue(t,i),on.endKeyValue(t)}}let zd=class fa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Te),(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return fa.startBinary(t),fa.endBinary(t)}},Hd=class pa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new pa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Te),(e||new pa).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return pa.startBool(t),pa.endBool(t)}},Eo=class Ss{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new Ss).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Te),(e||new Ss).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):ti.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,ti.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return Ss.startDate(t),Ss.addUnit(t,e),Ss.endDate(t)}},xs=class xr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new xr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Te),(e||new xr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return xr.startDecimal(t),xr.addPrecision(t,e),xr.addScale(t,i),xr.addBitWidth(t,r),xr.endDecimal(t)}},Ao=class bs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new bs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Te),(e||new bs).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Wt.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Wt.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return bs.startDuration(t),bs.addUnit(t,e),bs.endDuration(t)}},wo=class Ms{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Ms).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Te),(e||new Ms).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Ms.startFixedSizeBinary(t),Ms.addByteWidth(t,e),Ms.endFixedSizeBinary(t)}},To=class Es{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new Es).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Te),(e||new Es).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return Es.startFixedSizeList(t),Es.addListSize(t,e),Es.endFixedSizeList(t)}};class Mi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new Mi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Te),(e||new Mi).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):vn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,vn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return Mi.startFloatingPoint(t),Mi.addPrecision(t,e),Mi.endFloatingPoint(t)}}class Ei{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Ei).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Te),(e||new Ei).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ui.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Ui.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Ei.startInterval(t),Ei.addUnit(t,e),Ei.endInterval(t)}}let kd=class ma{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new ma).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Te),(e||new ma).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return ma.startLargeBinary(t),ma.endLargeBinary(t)}},Gd=class ga{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Te),(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return ga.startLargeUtf8(t),ga.endLargeUtf8(t)}},Wd=class _a{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Te),(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return _a.startList(t),_a.endList(t)}},Ro=class As{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new As).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Te),(e||new As).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return As.startMap(t),As.addKeysSorted(t,e),As.endMap(t)}},Zd=class va{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Te),(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return va.startNull(t),va.endNull(t)}};class Yr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new Yr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Te),(e||new Yr).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return Yr.startStruct_(t),Yr.endStruct_(t)}}class Kn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new Kn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Te),(e||new Kn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Wt.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Wt.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return Kn.startTime(t),Kn.addUnit(t,e),Kn.addBitWidth(t,i),Kn.endTime(t)}}class Jn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new Jn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Te),(e||new Jn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Wt.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Wt.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return Jn.startTimestamp(t),Jn.addUnit(t,e),Jn.addTimezone(t,i),Jn.endTimestamp(t)}}class Pn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Pn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Te),(e||new Pn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):yn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,yn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Pn.startUnion(t),Pn.addMode(t,e),Pn.addTypeIds(t,i),Pn.endUnion(t)}}let Xd=class ya{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Te),(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return ya.startUtf8(t),ya.endUtf8(t)}};var Ze;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ze||(Ze={}));let Yn=class Io{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Io).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Te),(e||new Io).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ze.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new Qi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Io).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new on).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ze.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},yi=class Xi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new Xi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Te),(e||new Xi).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ws.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Yn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new on).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Ws.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return Xi.startSchema(t),Xi.addEndianness(t,e),Xi.addFields(t,i),Xi.addCustomMetadata(t,r),Xi.addFeatures(t,s),Xi.endSchema(t)}};var xe;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(xe||(xe={}));var C;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(C||(C={}));var qi;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(qi||(qi={}));const GM=void 0;function Aa(n){if(n===null)return"null";if(n===GM)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Aa(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function ke(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function gp(n,t){return ke(n/t)+ke(n%t)/ke(t)}const WM=Symbol.for("isArrowBigNum");function pi(n,...t){return t.length===0?Object.setPrototypeOf(Le(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}pi.prototype[WM]=!0;pi.prototype.toJSON=function(){return`"${Ta(this)}"`};pi.prototype.valueOf=function(n){return _p(this,n)};pi.prototype.toString=function(){return Ta(this)};pi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return _p(this);case"string":return Ta(this);case"default":return YM(this)}return Ta(this)};function Ps(...n){return pi.apply(this,n)}function Ns(...n){return pi.apply(this,n)}function wa(...n){return pi.apply(this,n)}Object.setPrototypeOf(Ps.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(Ns.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(wa.prototype,Object.create(Uint32Array.prototype));Object.assign(Ps.prototype,pi.prototype,{constructor:Ps,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(Ns.prototype,pi.prototype,{constructor:Ns,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(wa.prototype,pi.prototype,{constructor:wa,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const ZM=BigInt(4294967296)*BigInt(4294967296),XM=ZM-BigInt(1);function _p(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const h of a)l|=(h^XM)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const h of a)l|=h*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const h=BigInt(Math.pow(10,t)),p=l/h,f=l%h;return ke(p)+ke(f)/ke(h)}return ke(l)}function Ta(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return _c(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return _c(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${_c(t)}`}function YM(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Ta(n)}function _c(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class th{static new(t,e){switch(e){case!0:return new Ps(t);case!1:return new Ns(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new Ps(t)}return t.byteLength===16?new wa(t):new Ns(t)}static signed(t){return new Ps(t)}static unsigned(t){return new Ns(t)}static decimal(t){return new wa(t)}constructor(t,e){return th.new(t,e)}}var vp,yp,Sp,xp,bp,Mp,Ep,Ap,wp,Tp,Rp,Ip,Cp,Dp,Lp,Pp,Np,Fp,Up,Op,Bp,Vp;class Nt{static isNull(t){return t?.typeId===C.Null}static isInt(t){return t?.typeId===C.Int}static isFloat(t){return t?.typeId===C.Float}static isBinary(t){return t?.typeId===C.Binary}static isLargeBinary(t){return t?.typeId===C.LargeBinary}static isUtf8(t){return t?.typeId===C.Utf8}static isLargeUtf8(t){return t?.typeId===C.LargeUtf8}static isBool(t){return t?.typeId===C.Bool}static isDecimal(t){return t?.typeId===C.Decimal}static isDate(t){return t?.typeId===C.Date}static isTime(t){return t?.typeId===C.Time}static isTimestamp(t){return t?.typeId===C.Timestamp}static isInterval(t){return t?.typeId===C.Interval}static isDuration(t){return t?.typeId===C.Duration}static isList(t){return t?.typeId===C.List}static isStruct(t){return t?.typeId===C.Struct}static isUnion(t){return t?.typeId===C.Union}static isFixedSizeBinary(t){return t?.typeId===C.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===C.FixedSizeList}static isMap(t){return t?.typeId===C.Map}static isDictionary(t){return t?.typeId===C.Dictionary}static isDenseUnion(t){return Nt.isUnion(t)&&t.mode===yn.Dense}static isSparseUnion(t){return Nt.isUnion(t)&&t.mode===yn.Sparse}constructor(t){this.typeId=t}}vp=Symbol.toStringTag;Nt[vp]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Nt.prototype);class Rr extends Nt{constructor(){super(C.Null)}toString(){return"Null"}}yp=Symbol.toStringTag;Rr[yp]=(n=>n[Symbol.toStringTag]="Null")(Rr.prototype);class Jr extends Nt{constructor(t,e){super(C.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Sp=Symbol.toStringTag;Jr[Sp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(Jr.prototype);class Ra extends Jr{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ra.prototype,"ArrayType",{value:Int32Array});class Wo extends Nt{constructor(t){super(C.Float),this.precision=t}get ArrayType(){switch(this.precision){case vn.HALF:return Uint16Array;case vn.SINGLE:return Float32Array;case vn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}xp=Symbol.toStringTag;Wo[xp]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Wo.prototype);class Zo extends Nt{constructor(){super(C.Binary)}toString(){return"Binary"}}bp=Symbol.toStringTag;Zo[bp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(Zo.prototype);class Xo extends Nt{constructor(){super(C.LargeBinary)}toString(){return"LargeBinary"}}Mp=Symbol.toStringTag;Xo[Mp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(Xo.prototype);class Yo extends Nt{constructor(){super(C.Utf8)}toString(){return"Utf8"}}Ep=Symbol.toStringTag;Yo[Ep]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(Yo.prototype);class qo extends Nt{constructor(){super(C.LargeUtf8)}toString(){return"LargeUtf8"}}Ap=Symbol.toStringTag;qo[Ap]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(qo.prototype);class jo extends Nt{constructor(){super(C.Bool)}toString(){return"Bool"}}wp=Symbol.toStringTag;jo[wp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(jo.prototype);class Ko extends Nt{constructor(t,e,i=128){super(C.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}Tp=Symbol.toStringTag;Ko[Tp]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(Ko.prototype);class Jo extends Nt{constructor(t){super(C.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${ti[this.unit]}>`}get ArrayType(){return this.unit===ti.DAY?Int32Array:BigInt64Array}}Rp=Symbol.toStringTag;Jo[Rp]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(Jo.prototype);class Qo extends Nt{constructor(t,e){super(C.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Wt[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Ip=Symbol.toStringTag;Qo[Ip]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(Qo.prototype);class $o extends Nt{constructor(t,e){super(C.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Wt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Cp=Symbol.toStringTag;$o[Cp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))($o.prototype);class tl extends Nt{constructor(t){super(C.Interval),this.unit=t}toString(){return`Interval<${Ui[this.unit]}>`}}Dp=Symbol.toStringTag;tl[Dp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(tl.prototype);class el extends Nt{constructor(t){super(C.Duration),this.unit=t}toString(){return`Duration<${Wt[this.unit]}>`}}Lp=Symbol.toStringTag;el[Lp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(el.prototype);class nl extends Nt{constructor(t){super(C.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}Pp=Symbol.toStringTag;nl[Pp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(nl.prototype);class wn extends Nt{constructor(t){super(C.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Np=Symbol.toStringTag;wn[Np]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(wn.prototype);class il extends Nt{constructor(t,e,i){super(C.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}Fp=Symbol.toStringTag;il[Fp]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(il.prototype);class rl extends Nt{constructor(t){super(C.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}Up=Symbol.toStringTag;rl[Up]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(rl.prototype);class sl extends Nt{constructor(t,e){super(C.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}Op=Symbol.toStringTag;sl[Op]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(sl.prototype);class al extends Nt{constructor(t,e=!1){var i,r,s;if(super(C.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Bp=Symbol.toStringTag;al[Bp]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(al.prototype);const qM=(n=>()=>++n)(-1);class Zs extends Nt{constructor(t,e,i,r){super(C.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?qM():ke(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}Vp=Symbol.toStringTag;Zs[Vp]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Zs.prototype);function ji(n){const t=n;switch(n.typeId){case C.Decimal:return n.bitWidth/32;case C.Interval:return 1+t.unit;case C.FixedSizeList:return t.listSize;case C.FixedSizeBinary:return t.byteWidth;default:return 1}}class de{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return jM(this,t,e)}getVisitFnByTypeId(t,e=!0){return ws(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function jM(n,t,e=!0){return typeof t=="number"?ws(n,t,e):typeof t=="string"&&t in C?ws(n,C[t],e):t&&t instanceof Nt?ws(n,Yd(t),e):t?.type&&t.type instanceof Nt?ws(n,Yd(t.type),e):ws(n,C.NONE,e)}function ws(n,t,e=!0){let i=null;switch(t){case C.Null:i=n.visitNull;break;case C.Bool:i=n.visitBool;break;case C.Int:i=n.visitInt;break;case C.Int8:i=n.visitInt8||n.visitInt;break;case C.Int16:i=n.visitInt16||n.visitInt;break;case C.Int32:i=n.visitInt32||n.visitInt;break;case C.Int64:i=n.visitInt64||n.visitInt;break;case C.Uint8:i=n.visitUint8||n.visitInt;break;case C.Uint16:i=n.visitUint16||n.visitInt;break;case C.Uint32:i=n.visitUint32||n.visitInt;break;case C.Uint64:i=n.visitUint64||n.visitInt;break;case C.Float:i=n.visitFloat;break;case C.Float16:i=n.visitFloat16||n.visitFloat;break;case C.Float32:i=n.visitFloat32||n.visitFloat;break;case C.Float64:i=n.visitFloat64||n.visitFloat;break;case C.Utf8:i=n.visitUtf8;break;case C.LargeUtf8:i=n.visitLargeUtf8;break;case C.Binary:i=n.visitBinary;break;case C.LargeBinary:i=n.visitLargeBinary;break;case C.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case C.Date:i=n.visitDate;break;case C.DateDay:i=n.visitDateDay||n.visitDate;break;case C.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case C.Timestamp:i=n.visitTimestamp;break;case C.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case C.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case C.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case C.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case C.Time:i=n.visitTime;break;case C.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case C.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case C.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case C.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case C.Decimal:i=n.visitDecimal;break;case C.List:i=n.visitList;break;case C.Struct:i=n.visitStruct;break;case C.Union:i=n.visitUnion;break;case C.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case C.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case C.Dictionary:i=n.visitDictionary;break;case C.Interval:i=n.visitInterval;break;case C.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case C.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case C.Duration:i=n.visitDuration;break;case C.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case C.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case C.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case C.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case C.FixedSizeList:i=n.visitFixedSizeList;break;case C.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${C[t]}'`)}function Yd(n){switch(n.typeId){case C.Null:return C.Null;case C.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?C.Int8:C.Uint8;case 16:return e?C.Int16:C.Uint16;case 32:return e?C.Int32:C.Uint32;case 64:return e?C.Int64:C.Uint64}return C.Int}case C.Float:switch(n.precision){case vn.HALF:return C.Float16;case vn.SINGLE:return C.Float32;case vn.DOUBLE:return C.Float64}return C.Float;case C.Binary:return C.Binary;case C.LargeBinary:return C.LargeBinary;case C.Utf8:return C.Utf8;case C.LargeUtf8:return C.LargeUtf8;case C.Bool:return C.Bool;case C.Decimal:return C.Decimal;case C.Time:switch(n.unit){case Wt.SECOND:return C.TimeSecond;case Wt.MILLISECOND:return C.TimeMillisecond;case Wt.MICROSECOND:return C.TimeMicrosecond;case Wt.NANOSECOND:return C.TimeNanosecond}return C.Time;case C.Timestamp:switch(n.unit){case Wt.SECOND:return C.TimestampSecond;case Wt.MILLISECOND:return C.TimestampMillisecond;case Wt.MICROSECOND:return C.TimestampMicrosecond;case Wt.NANOSECOND:return C.TimestampNanosecond}return C.Timestamp;case C.Date:switch(n.unit){case ti.DAY:return C.DateDay;case ti.MILLISECOND:return C.DateMillisecond}return C.Date;case C.Interval:switch(n.unit){case Ui.DAY_TIME:return C.IntervalDayTime;case Ui.YEAR_MONTH:return C.IntervalYearMonth}return C.Interval;case C.Duration:switch(n.unit){case Wt.SECOND:return C.DurationSecond;case Wt.MILLISECOND:return C.DurationMillisecond;case Wt.MICROSECOND:return C.DurationMicrosecond;case Wt.NANOSECOND:return C.DurationNanosecond}return C.Duration;case C.Map:return C.Map;case C.List:return C.List;case C.Struct:return C.Struct;case C.Union:switch(n.mode){case yn.Dense:return C.DenseUnion;case yn.Sparse:return C.SparseUnion}return C.Union;case C.FixedSizeBinary:return C.FixedSizeBinary;case C.FixedSizeList:return C.FixedSizeList;case C.Dictionary:return C.Dictionary}throw new Error(`Unrecognized type '${C[n.typeId]}'`)}de.prototype.visitInt8=null;de.prototype.visitInt16=null;de.prototype.visitInt32=null;de.prototype.visitInt64=null;de.prototype.visitUint8=null;de.prototype.visitUint16=null;de.prototype.visitUint32=null;de.prototype.visitUint64=null;de.prototype.visitFloat16=null;de.prototype.visitFloat32=null;de.prototype.visitFloat64=null;de.prototype.visitDateDay=null;de.prototype.visitDateMillisecond=null;de.prototype.visitTimestampSecond=null;de.prototype.visitTimestampMillisecond=null;de.prototype.visitTimestampMicrosecond=null;de.prototype.visitTimestampNanosecond=null;de.prototype.visitTimeSecond=null;de.prototype.visitTimeMillisecond=null;de.prototype.visitTimeMicrosecond=null;de.prototype.visitTimeNanosecond=null;de.prototype.visitDenseUnion=null;de.prototype.visitSparseUnion=null;de.prototype.visitIntervalDayTime=null;de.prototype.visitIntervalYearMonth=null;de.prototype.visitDuration=null;de.prototype.visitDurationSecond=null;de.prototype.visitDurationMillisecond=null;de.prototype.visitDurationMicrosecond=null;de.prototype.visitDurationNanosecond=null;const zp=new Float64Array(1),_s=new Uint32Array(zp.buffer);function Hp(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function KM(n){if(n!==n)return 32256;zp[0]=n;const t=(_s[1]&2147483648)>>16&65535;let e=_s[1]&2146435072,i=0;return e>=1089470464?_s[0]>0?e=31744:(e=(e&2080374784)>>16,i=(_s[1]&1048575)>>10):e<=1056964608?(i=1048576+(_s[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(_s[1]&1048575)+512>>10),t|e|i&65535}class Zt extends de{}function qt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const JM=(n,t,e)=>{n[t]=Math.floor(e/864e5)},kp=(n,t,e,i)=>{if(e+1<t.length){const r=ke(t[e]),s=ke(t[e+1]);n.set(i.subarray(0,s-r),r)}},QM=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},lr=({values:n},t,e)=>{n[t]=e},eh=({values:n},t,e)=>{n[t]=e},Gp=({values:n},t,e)=>{n[t]=KM(e)},$M=(n,t,e)=>{switch(n.type.precision){case vn.HALF:return Gp(n,t,e);case vn.SINGLE:case vn.DOUBLE:return eh(n,t,e)}},Wp=({values:n},t,e)=>{JM(n,t,e.valueOf())},Zp=({values:n},t,e)=>{n[t]=BigInt(e)},tE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},Xp=({values:n,valueOffsets:t},e,i)=>kp(n,t,e,i),Yp=({values:n,valueOffsets:t},e,i)=>kp(n,t,e,Ju(i)),eE=(n,t,e)=>{n.type.unit===ti.DAY?Wp(n,t,e):Zp(n,t,e)},qp=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},jp=({values:n},t,e)=>{n[t]=BigInt(e)},Kp=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},Jp=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},nE=(n,t,e)=>{switch(n.type.unit){case Wt.SECOND:return qp(n,t,e);case Wt.MILLISECOND:return jp(n,t,e);case Wt.MICROSECOND:return Kp(n,t,e);case Wt.NANOSECOND:return Jp(n,t,e)}},Qp=({values:n},t,e)=>{n[t]=e},$p=({values:n},t,e)=>{n[t]=e},t0=({values:n},t,e)=>{n[t]=e},e0=({values:n},t,e)=>{n[t]=e},iE=(n,t,e)=>{switch(n.type.unit){case Wt.SECOND:return Qp(n,t,e);case Wt.MILLISECOND:return $p(n,t,e);case Wt.MICROSECOND:return t0(n,t,e);case Wt.NANOSECOND:return e0(n,t,e)}},rE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},sE=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=ei.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},aE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=ei.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},oE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),lE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),cE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),uE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),hE=(n,t,e)=>{const i=n.type.children.map(s=>ei.getVisitFn(s.type)),r=e instanceof Map?cE(t,e):e instanceof Ee?lE(t,e):Array.isArray(e)?oE(t,e):uE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},dE=(n,t,e)=>{n.type.mode===yn.Dense?n0(n,t,e):i0(n,t,e)},n0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ei.visit(r,n.valueOffsets[t],e)},i0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ei.visit(r,t,e)},fE=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},pE=(n,t,e)=>{n.type.unit===Ui.DAY_TIME?r0(n,t,e):s0(n,t,e)},r0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},s0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},a0=({values:n},t,e)=>{n[t]=e},o0=({values:n},t,e)=>{n[t]=e},l0=({values:n},t,e)=>{n[t]=e},c0=({values:n},t,e)=>{n[t]=e},mE=(n,t,e)=>{switch(n.type.unit){case Wt.SECOND:return a0(n,t,e);case Wt.MILLISECOND:return o0(n,t,e);case Wt.MICROSECOND:return l0(n,t,e);case Wt.NANOSECOND:return c0(n,t,e)}},gE=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=ei.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Zt.prototype.visitBool=qt(QM);Zt.prototype.visitInt=qt(lr);Zt.prototype.visitInt8=qt(lr);Zt.prototype.visitInt16=qt(lr);Zt.prototype.visitInt32=qt(lr);Zt.prototype.visitInt64=qt(lr);Zt.prototype.visitUint8=qt(lr);Zt.prototype.visitUint16=qt(lr);Zt.prototype.visitUint32=qt(lr);Zt.prototype.visitUint64=qt(lr);Zt.prototype.visitFloat=qt($M);Zt.prototype.visitFloat16=qt(Gp);Zt.prototype.visitFloat32=qt(eh);Zt.prototype.visitFloat64=qt(eh);Zt.prototype.visitUtf8=qt(Yp);Zt.prototype.visitLargeUtf8=qt(Yp);Zt.prototype.visitBinary=qt(Xp);Zt.prototype.visitLargeBinary=qt(Xp);Zt.prototype.visitFixedSizeBinary=qt(tE);Zt.prototype.visitDate=qt(eE);Zt.prototype.visitDateDay=qt(Wp);Zt.prototype.visitDateMillisecond=qt(Zp);Zt.prototype.visitTimestamp=qt(nE);Zt.prototype.visitTimestampSecond=qt(qp);Zt.prototype.visitTimestampMillisecond=qt(jp);Zt.prototype.visitTimestampMicrosecond=qt(Kp);Zt.prototype.visitTimestampNanosecond=qt(Jp);Zt.prototype.visitTime=qt(iE);Zt.prototype.visitTimeSecond=qt(Qp);Zt.prototype.visitTimeMillisecond=qt($p);Zt.prototype.visitTimeMicrosecond=qt(t0);Zt.prototype.visitTimeNanosecond=qt(e0);Zt.prototype.visitDecimal=qt(rE);Zt.prototype.visitList=qt(sE);Zt.prototype.visitStruct=qt(hE);Zt.prototype.visitUnion=qt(dE);Zt.prototype.visitDenseUnion=qt(n0);Zt.prototype.visitSparseUnion=qt(i0);Zt.prototype.visitDictionary=qt(fE);Zt.prototype.visitInterval=qt(pE);Zt.prototype.visitIntervalDayTime=qt(r0);Zt.prototype.visitIntervalYearMonth=qt(s0);Zt.prototype.visitDuration=qt(mE);Zt.prototype.visitDurationSecond=qt(a0);Zt.prototype.visitDurationMillisecond=qt(o0);Zt.prototype.visitDurationMicrosecond=qt(l0);Zt.prototype.visitDurationNanosecond=qt(c0);Zt.prototype.visitFixedSizeList=qt(gE);Zt.prototype.visitMap=qt(aE);const ei=new Zt,ai=Symbol.for("parent"),Fs=Symbol.for("rowIndex");class nh{constructor(t,e){return this[ai]=t,this[Fs]=e,new Proxy(this,new vE)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Fs],e=this[ai],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=On.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Aa(t)}: ${Aa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new _E(this[ai],this[Fs])}}class _E{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,On.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(nh.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[ai]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Fs]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class vE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[ai].type.children.map(e=>e.name)}has(t,e){return t[ai].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[ai].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[ai].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=On.visit(t[ai].children[i],t[Fs]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[ai].type.children.findIndex(s=>s.name===e);return r!==-1?(ei.visit(t[ai].children[r],t[Fs],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class zt extends de{}function Xt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const yE=(n,t)=>864e5*n[t],SE=(n,t)=>null,u0=(n,t,e)=>{if(e+1>=t.length)return null;const i=ke(t[e]),r=ke(t[e+1]);return n.subarray(i,r)},xE=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},h0=({values:n},t)=>yE(n,t),d0=({values:n},t)=>ke(n[t]),Lr=({stride:n,values:t},e)=>t[n*e],bE=({stride:n,values:t},e)=>Hp(t[n*e]),f0=({values:n},t)=>n[t],ME=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),p0=({values:n,valueOffsets:t},e)=>u0(n,t,e),m0=({values:n,valueOffsets:t},e)=>{const i=u0(n,t,e);return i!==null?Eu(i):null},EE=({values:n},t)=>n[t],AE=({type:n,values:t},e)=>n.precision!==vn.HALF?t[e]:Hp(t[e]),wE=(n,t)=>n.type.unit===ti.DAY?h0(n,t):d0(n,t),g0=({values:n},t)=>1e3*ke(n[t]),_0=({values:n},t)=>ke(n[t]),v0=({values:n},t)=>gp(n[t],BigInt(1e3)),y0=({values:n},t)=>gp(n[t],BigInt(1e6)),TE=(n,t)=>{switch(n.type.unit){case Wt.SECOND:return g0(n,t);case Wt.MILLISECOND:return _0(n,t);case Wt.MICROSECOND:return v0(n,t);case Wt.NANOSECOND:return y0(n,t)}},S0=({values:n},t)=>n[t],x0=({values:n},t)=>n[t],b0=({values:n},t)=>n[t],M0=({values:n},t)=>n[t],RE=(n,t)=>{switch(n.type.unit){case Wt.SECOND:return S0(n,t);case Wt.MILLISECOND:return x0(n,t);case Wt.MICROSECOND:return b0(n,t);case Wt.NANOSECOND:return M0(n,t)}},IE=({values:n,stride:t},e)=>th.decimal(n.subarray(t*e,t*(e+1))),CE=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new Ee([l])},DE=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new ih(a.slice(r,s-r))},LE=(n,t)=>new nh(n,t),PE=(n,t)=>n.type.mode===yn.Dense?E0(n,t):A0(n,t),E0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return On.visit(i,n.valueOffsets[t])},A0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return On.visit(i,t)},NE=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},FE=(n,t)=>n.type.unit===Ui.DAY_TIME?w0(n,t):T0(n,t),w0=({values:n},t)=>n.subarray(2*t,2*(t+1)),T0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},R0=({values:n},t)=>n[t],I0=({values:n},t)=>n[t],C0=({values:n},t)=>n[t],D0=({values:n},t)=>n[t],UE=(n,t)=>{switch(n.type.unit){case Wt.SECOND:return R0(n,t);case Wt.MILLISECOND:return I0(n,t);case Wt.MICROSECOND:return C0(n,t);case Wt.NANOSECOND:return D0(n,t)}},OE=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new Ee([s])};zt.prototype.visitNull=Xt(SE);zt.prototype.visitBool=Xt(xE);zt.prototype.visitInt=Xt(EE);zt.prototype.visitInt8=Xt(Lr);zt.prototype.visitInt16=Xt(Lr);zt.prototype.visitInt32=Xt(Lr);zt.prototype.visitInt64=Xt(f0);zt.prototype.visitUint8=Xt(Lr);zt.prototype.visitUint16=Xt(Lr);zt.prototype.visitUint32=Xt(Lr);zt.prototype.visitUint64=Xt(f0);zt.prototype.visitFloat=Xt(AE);zt.prototype.visitFloat16=Xt(bE);zt.prototype.visitFloat32=Xt(Lr);zt.prototype.visitFloat64=Xt(Lr);zt.prototype.visitUtf8=Xt(m0);zt.prototype.visitLargeUtf8=Xt(m0);zt.prototype.visitBinary=Xt(p0);zt.prototype.visitLargeBinary=Xt(p0);zt.prototype.visitFixedSizeBinary=Xt(ME);zt.prototype.visitDate=Xt(wE);zt.prototype.visitDateDay=Xt(h0);zt.prototype.visitDateMillisecond=Xt(d0);zt.prototype.visitTimestamp=Xt(TE);zt.prototype.visitTimestampSecond=Xt(g0);zt.prototype.visitTimestampMillisecond=Xt(_0);zt.prototype.visitTimestampMicrosecond=Xt(v0);zt.prototype.visitTimestampNanosecond=Xt(y0);zt.prototype.visitTime=Xt(RE);zt.prototype.visitTimeSecond=Xt(S0);zt.prototype.visitTimeMillisecond=Xt(x0);zt.prototype.visitTimeMicrosecond=Xt(b0);zt.prototype.visitTimeNanosecond=Xt(M0);zt.prototype.visitDecimal=Xt(IE);zt.prototype.visitList=Xt(CE);zt.prototype.visitStruct=Xt(LE);zt.prototype.visitUnion=Xt(PE);zt.prototype.visitDenseUnion=Xt(E0);zt.prototype.visitSparseUnion=Xt(A0);zt.prototype.visitDictionary=Xt(NE);zt.prototype.visitInterval=Xt(FE);zt.prototype.visitIntervalDayTime=Xt(w0);zt.prototype.visitIntervalYearMonth=Xt(T0);zt.prototype.visitDuration=Xt(UE);zt.prototype.visitDurationSecond=Xt(R0);zt.prototype.visitDurationMillisecond=Xt(I0);zt.prototype.visitDurationMicrosecond=Xt(C0);zt.prototype.visitDurationNanosecond=Xt(D0);zt.prototype.visitFixedSizeList=Xt(OE);zt.prototype.visitMap=Xt(DE);const On=new zt,Ts=Symbol.for("keys"),Us=Symbol.for("vals"),Rs=Symbol.for("kKeysAsStrings"),Cu=Symbol.for("_kKeysAsStrings");class ih{constructor(t){return this[Ts]=new Ee([t.children[0]]).memoize(),this[Us]=t.children[1],new Proxy(this,new VE)}get[Rs](){return this[Cu]||(this[Cu]=Array.from(this[Ts].toArray(),String))}[Symbol.iterator](){return new BE(this[Ts],this[Us])}get size(){return this[Ts].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ts],e=this[Us],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=On.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Aa(t)}: ${Aa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class BE{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),On.visit(this.vals,t)]})}}class VE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Rs]}has(t,e){return t[Rs].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Rs].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Rs].indexOf(e);if(i!==-1){const r=On.visit(Reflect.get(t,Us),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Rs].indexOf(e);return r!==-1?(ei.visit(Reflect.get(t,Us),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(ih.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Ts]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Us]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Cu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let qd;function L0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(qd=s,s=a,a=qd),a>r&&(a=r),i?i(n,s,a):[s,a]}const rh=(n,t)=>n<0?t+n:n,jd=n=>n!==n;function $s(n){if(typeof n!=="object"||n===null)return jd(n)?jd:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?OM(n,e):!1:n instanceof Map?HE(n):Array.isArray(n)?zE(n):n instanceof Ee?kE(n):GE(n,!0)}function zE(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=$s(n[e]);return Al(t)}function HE(n){let t=-1;const e=[];for(const i of n.values())e[++t]=$s(i);return Al(e)}function kE(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=$s(n.get(e));return Al(t)}function GE(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=$s(n[e[r]]);return Al(i,e)}function Al(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return WE(n,e);case Map:return Kd(n,e,e.keys());case ih:case nh:case Object:case void 0:return Kd(n,e,t||Object.keys(e))}return e instanceof Ee?ZE(n,e):!1}}function WE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function ZE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function Kd(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),h=r.next();for(;a<o&&!c.done&&!h.done&&!l.done&&!(c.value!==h.value||!n[a](l.value));++a,c=i.next(),h=r.next(),l=s.next());return a===o&&c.done&&h.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function P0(n,t,e,i){return(e&1<<i)!==0}function XE(n,t,e,i){return(e&1<<i)>>i}function ol(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):ll(new sh(e,n,t,null,P0)).subarray(0,i)),r}return e}function ll(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class sh{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Du(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new sh(n,t,e-t,n,XE))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Du(n,t,r)+Du(n,i,e)+YE(n,r>>3,i-r>>3)}function YE(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=vc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=vc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=vc(s.getUint8(r)),r+=1;return i}function vc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const qE=-1;class Ie{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Nt.isSparseUnion(t)?this.children.some(e=>e.nullable):Nt.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Nt.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=qE&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Du(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Ie?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=ji(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Nt.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===yn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Nt.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===yn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,h=l>>3;(!s||s.byteLength<=h)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(ol(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[h];i=(p&c)!==0,s[h]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Ie(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===C.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(ol(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[qi.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[qi.TYPE])&&(a[qi.TYPE]=s.subarray(t,t+e)),(s=a[qi.OFFSET])&&(a[qi.OFFSET]=s.subarray(t,t+e+1))||(s=a[qi.DATA])&&(a[qi.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Ie.prototype.children=Object.freeze([]);class xa extends de{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Ie(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=Od(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=Od(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=me(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=me(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Le(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Nt.isSparseUnion(e))return new Ie(e,i,a,o,[void 0,void 0,void 0,s],r);const l=ca(t.valueOffsets);return new Ie(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.indices.ArrayType,t.data),{["dictionary"]:a=new Ee([new xa().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Le(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new xa().visit({type:e.valueType})}=t,s=me(t.nullBitmap),{["length"]:a=r.length/ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ie(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new xa().visit({type:e.childType})}=t,s=me(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ie(e,i,o,l,[a,void 0,s],[r])}}const jE=new xa;function fe(n){return jE.visit(n)}class Jd{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function KE(n){return n.some(t=>t.nullable)}function N0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function F0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function U0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const h=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(h,p-h))}return r.length===0&&r.push(n[0].slice(0,0)),r}function ah(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function oh(n,t){return n.getValid(t)}function cl(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return ah(i,this._offsets,e,t)}}function O0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=ah(s,this._offsets,i,e);return t=void 0,a}}function B0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,h=i.length;++c<h;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):ah(s,this._offsets,r,e);return t=void 0,a}}class Ht extends de{}function JE(n,t){return t===null&&n.length>0?0:-1}function QE(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new sh(e,n.offset+(t||0),n.length,e,P0)){if(!r)return i;++i}return-1}function Kt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case C.Union:break;case C.Dictionary:break;default:return QE(n,e)}const i=On.getVisitFn(n),r=$s(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function V0(n,t,e){const i=On.getVisitFn(n),r=$s(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Ht.prototype.visitNull=JE;Ht.prototype.visitBool=Kt;Ht.prototype.visitInt=Kt;Ht.prototype.visitInt8=Kt;Ht.prototype.visitInt16=Kt;Ht.prototype.visitInt32=Kt;Ht.prototype.visitInt64=Kt;Ht.prototype.visitUint8=Kt;Ht.prototype.visitUint16=Kt;Ht.prototype.visitUint32=Kt;Ht.prototype.visitUint64=Kt;Ht.prototype.visitFloat=Kt;Ht.prototype.visitFloat16=Kt;Ht.prototype.visitFloat32=Kt;Ht.prototype.visitFloat64=Kt;Ht.prototype.visitUtf8=Kt;Ht.prototype.visitLargeUtf8=Kt;Ht.prototype.visitBinary=Kt;Ht.prototype.visitLargeBinary=Kt;Ht.prototype.visitFixedSizeBinary=Kt;Ht.prototype.visitDate=Kt;Ht.prototype.visitDateDay=Kt;Ht.prototype.visitDateMillisecond=Kt;Ht.prototype.visitTimestamp=Kt;Ht.prototype.visitTimestampSecond=Kt;Ht.prototype.visitTimestampMillisecond=Kt;Ht.prototype.visitTimestampMicrosecond=Kt;Ht.prototype.visitTimestampNanosecond=Kt;Ht.prototype.visitTime=Kt;Ht.prototype.visitTimeSecond=Kt;Ht.prototype.visitTimeMillisecond=Kt;Ht.prototype.visitTimeMicrosecond=Kt;Ht.prototype.visitTimeNanosecond=Kt;Ht.prototype.visitDecimal=Kt;Ht.prototype.visitList=Kt;Ht.prototype.visitStruct=Kt;Ht.prototype.visitUnion=Kt;Ht.prototype.visitDenseUnion=V0;Ht.prototype.visitSparseUnion=V0;Ht.prototype.visitDictionary=Kt;Ht.prototype.visitInterval=Kt;Ht.prototype.visitIntervalDayTime=Kt;Ht.prototype.visitIntervalYearMonth=Kt;Ht.prototype.visitDuration=Kt;Ht.prototype.visitDurationSecond=Kt;Ht.prototype.visitDurationMillisecond=Kt;Ht.prototype.visitDurationMicrosecond=Kt;Ht.prototype.visitDurationNanosecond=Kt;Ht.prototype.visitFixedSizeList=Kt;Ht.prototype.visitMap=Kt;const ul=new Ht;class kt extends de{}function Yt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Nt.isInt(t)&&t.bitWidth!==64||Nt.isTime(t)&&t.bitWidth!==64||Nt.isFloat(t)&&t.precision!==vn.HALF))return new Jd(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new Jd(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new $E(a)})}class $E{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}kt.prototype.visitNull=Yt;kt.prototype.visitBool=Yt;kt.prototype.visitInt=Yt;kt.prototype.visitInt8=Yt;kt.prototype.visitInt16=Yt;kt.prototype.visitInt32=Yt;kt.prototype.visitInt64=Yt;kt.prototype.visitUint8=Yt;kt.prototype.visitUint16=Yt;kt.prototype.visitUint32=Yt;kt.prototype.visitUint64=Yt;kt.prototype.visitFloat=Yt;kt.prototype.visitFloat16=Yt;kt.prototype.visitFloat32=Yt;kt.prototype.visitFloat64=Yt;kt.prototype.visitUtf8=Yt;kt.prototype.visitLargeUtf8=Yt;kt.prototype.visitBinary=Yt;kt.prototype.visitLargeBinary=Yt;kt.prototype.visitFixedSizeBinary=Yt;kt.prototype.visitDate=Yt;kt.prototype.visitDateDay=Yt;kt.prototype.visitDateMillisecond=Yt;kt.prototype.visitTimestamp=Yt;kt.prototype.visitTimestampSecond=Yt;kt.prototype.visitTimestampMillisecond=Yt;kt.prototype.visitTimestampMicrosecond=Yt;kt.prototype.visitTimestampNanosecond=Yt;kt.prototype.visitTime=Yt;kt.prototype.visitTimeSecond=Yt;kt.prototype.visitTimeMillisecond=Yt;kt.prototype.visitTimeMicrosecond=Yt;kt.prototype.visitTimeNanosecond=Yt;kt.prototype.visitDecimal=Yt;kt.prototype.visitList=Yt;kt.prototype.visitStruct=Yt;kt.prototype.visitUnion=Yt;kt.prototype.visitDenseUnion=Yt;kt.prototype.visitSparseUnion=Yt;kt.prototype.visitDictionary=Yt;kt.prototype.visitInterval=Yt;kt.prototype.visitIntervalDayTime=Yt;kt.prototype.visitIntervalYearMonth=Yt;kt.prototype.visitDuration=Yt;kt.prototype.visitDurationSecond=Yt;kt.prototype.visitDurationMillisecond=Yt;kt.prototype.visitDurationMicrosecond=Yt;kt.prototype.visitDurationNanosecond=Yt;kt.prototype.visitFixedSizeList=Yt;kt.prototype.visitMap=Yt;const lh=new kt;var z0;const H0={},k0={};class Ee{constructor(t){var e,i,r;const s=t[0]instanceof Ee?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Ie)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=H0[a.typeId],h=s[0];this.isValid=p=>oh(h,p),this.get=p=>o(h,p),this.set=(p,f)=>l(h,p,f),this.indexOf=p=>c(h,p),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,k0[a.typeId]),this._offsets=F0(s);break}this.data=s,this.type=a,this.stride=ji(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return KE(this.data)}get nullCount(){return N0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${C[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(rh(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return lh.visit(this)}concat(...t){return new Ee(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new Ee(L0(this,t,e,({data:i,_offsets:r},s,a)=>U0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case C.Int:case C.Float:case C.Decimal:case C.Time:case C.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new Ee(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Nt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Nt.isDictionary(this.type)){const t=new hl(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Ee(e)}return new hl(this)}unmemoize(){if(Nt.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Ee(e)}return this}}z0=Symbol.toStringTag;Ee[z0]=(n=>{n.type=Nt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(C).map(e=>C[e]).filter(e=>typeof e=="number"&&e!==C.NONE);for(const e of t){const i=On.getVisitFnByTypeId(e),r=ei.getVisitFnByTypeId(e),s=ul.getVisitFnByTypeId(e);H0[e]={get:i,set:r,indexOf:s},k0[e]=Object.create(n,{isValid:{value:cl(oh)},get:{value:cl(On.getVisitFnByTypeId(e))},set:{value:O0(ei.getVisitFnByTypeId(e))},indexOf:{value:B0(ul.getVisitFnByTypeId(e))}})}return"Vector"})(Ee.prototype);class hl extends Ee{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new hl(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new Ee(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class Lu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Hn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Hn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Te),(e||new Hn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):nn.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new yi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Lu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new Lu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new on).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,nn.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class Ae{constructor(t=[],e,i,r=nn.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=Pu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new Ae(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new Ae(e,this.metadata)}assign(...t){const e=t[0]instanceof Ae?t[0]:Array.isArray(t[0])?new Ae(t[0]):new Ae(t),i=[...this.fields],r=go(go(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:go(go(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=Pu(s,new Map);return new Ae([...i,...s],r,new Map([...this.dictionaries,...a]))}}Ae.prototype.fields=null;Ae.prototype.metadata=null;Ae.prototype.dictionaries=null;class Xe{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Xe(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Xe.new(e,i,r,s)}}Xe.prototype.type=null;Xe.prototype.name=null;Xe.prototype.nullable=null;Xe.prototype.metadata=null;function go(n,t){return new Map([...n||new Map,...t||new Map])}function Pu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Nt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Pu(s.children,t)}return t}var tA=dp,eA=Gs;class Ia{static decode(t){t=new eA(me(t));const e=Hn.getRootAsFooter(t),i=Ae.decode(e.schema(),new Map,e.version());return new nA(i,e)}static encode(t){const e=new tA,i=Ae.encode(e,t.schema);Hn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Ir.encode(e,a);const r=e.endVector();Hn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Ir.encode(e,a);const s=e.endVector();return Hn.startFooter(e),Hn.addSchema(e,i),Hn.addVersion(e,nn.V5),Hn.addRecordBatches(e,r),Hn.addDictionaries(e,s),Hn.finishFooterBuffer(e,Hn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=nn.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class nA extends Ia{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Ir.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Ir.decode(e)}return null}}class Ir{static decode(t){return new Ir(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return Lu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=ke(i),this.bodyLength=ke(e)}}const je=Object.freeze({done:!0,value:void 0});class Qd{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class ch{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class iA extends ch{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Qt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(je);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return jn.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return jn.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Qt(this,void 0,void 0,function*(){return yield this.abort(t),je})}return(t){return Qt(this,void 0,void 0,function*(){return yield this.close(),je})}read(t){return Qt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Qt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(je)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Co extends iA{write(t){if((t=me(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Eu(this.toUint8Array(!0)):this.toUint8Array(!1).then(Eu)}toUint8Array(t=!1){return t?Fi(this._values)[0]:Qt(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=qr(this),h;h=yield c.next(),e=h.done,!e;l=!0){s=h.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Fi(a,o)[0]})}}class dl{constructor(t){t&&(this.source=new rA(jn.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class Xs{constructor(t){t instanceof Xs?this.source=t.source:t instanceof Co?this.source=new Hr(jn.fromAsyncIterable(t)):lp(t)?this.source=new Hr(jn.fromNodeStream(t)):Qu(t)?this.source=new Hr(jn.fromDOMStream(t)):op(t)?this.source=new Hr(jn.fromDOMStream(t.body)):Fa(t)?this.source=new Hr(jn.fromIterable(t)):Kr(t)?this.source=new Hr(jn.fromAsyncIterable(t)):Qs(t)&&(this.source=new Hr(jn.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class rA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||je)}return(t){return Object.create(this.source.return&&this.source.return(t)||je)}}class Hr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Qt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Qt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Qt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return Qt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return Qt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||je;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Qt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||je;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class $d extends dl{constructor(t,e){super(),this.position=0,this.buffer=me(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class fl extends Xs{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Qt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Qt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Qt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Qt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return Qt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Qt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Qt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Qt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const sA=65536;function Is(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const Ys=8,uh=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class G0{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?sA:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Is(this.buffer[1])} ${Is(this.buffer[0])}`}}class Ce extends G0{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Ce.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Ce.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Ce(e);for(let s=0;s<i;){const a=Ys<i-s?Ys:i-s,o=new Ce(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Ce(new Uint32Array([uh[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Ce.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Ce(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ce(new Uint32Array(t.buffer)).plus(e)}}class Ln extends G0{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return Ln.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Ln.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new Ln(e);for(let a=i?1:0;a<r;){const o=Ys<r-a?Ys:r-a,l=new Ln(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new Ln(new Uint32Array([uh[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Ln.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Ln(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ln(new Uint32Array(t.buffer)).plus(e)}}class Si{constructor(t){this.buffer=t}high(){return new Ln(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Ln(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Ce(new Uint32Array([this.buffer[3],0])),i=new Ce(new Uint32Array([this.buffer[2],0])),r=new Ce(new Uint32Array([this.buffer[1],0])),s=new Ce(new Uint32Array([this.buffer[0],0])),a=new Ce(new Uint32Array([t.buffer[3],0])),o=new Ce(new Uint32Array([t.buffer[2],0])),l=new Ce(new Uint32Array([t.buffer[1],0])),c=new Ce(new Uint32Array([t.buffer[0],0]));let h=Ce.multiply(s,c);this.buffer[0]=h.low();const p=new Ce(new Uint32Array([h.high(),0]));return h=Ce.multiply(r,c),p.plus(h),h=Ce.multiply(s,l),p.plus(h),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(h)?1:0,this.buffer[2]=p.high(),new Ce(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Ce.multiply(i,c)).plus(Ce.multiply(r,l)).plus(Ce.multiply(s,o)),this.buffer[3]+=Ce.multiply(e,c).plus(Ce.multiply(i,l)).plus(Ce.multiply(r,o)).plus(Ce.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Is(this.buffer[3])} ${Is(this.buffer[2])} ${Is(this.buffer[1])} ${Is(this.buffer[0])}`}static multiply(t,e){return new Si(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Si(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return Si.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return Si.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new Si(e);for(let a=i?1:0;a<r;){const o=Ys<r-a?Ys:r-a,l=new Si(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new Si(new Uint32Array([uh[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)Si.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class W0 extends de{constructor(t,e,i,r,s=nn.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof Xe?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return fe({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<nn.V5&&this.readNullBitmap(t,i),t.mode===yn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return fe({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class aA extends W0{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):ll(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Le(Uint8Array,Le(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Le(Uint8Array,Le(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Nt.isTimestamp(t)||(Nt.isInt(t)||Nt.isTime(t))&&t.bitWidth===64||Nt.isDuration(t)||Nt.isDate(t)&&t.unit===ti.MILLISECOND?Le(Uint8Array,Ln.convertArray(i[e])):Nt.isDecimal(t)?Le(Uint8Array,Si.convertArray(i[e])):Nt.isBinary(t)||Nt.isLargeBinary(t)||Nt.isFixedSizeBinary(t)?oA(i[e]):Nt.isBool(t)?ll(i[e]):Nt.isUtf8(t)||Nt.isLargeUtf8(t)?Ju(i[e].join("")):Le(Uint8Array,Le(t.ArrayType,i[e].map(r=>+r)))}}function oA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Gt extends de{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function In(n,t){return t instanceof n.constructor}function Qr(n,t){return n===t||In(n,t)}function cr(n,t){return n===t||In(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function wl(n,t){return n===t||In(n,t)&&n.precision===t.precision}function lA(n,t){return n===t||In(n,t)&&n.byteWidth===t.byteWidth}function hh(n,t){return n===t||In(n,t)&&n.unit===t.unit}function Ua(n,t){return n===t||In(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Oa(n,t){return n===t||In(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function cA(n,t){return n===t||In(n,t)&&n.children.length===t.children.length&&Cr.compareManyFields(n.children,t.children)}function uA(n,t){return n===t||In(n,t)&&n.children.length===t.children.length&&Cr.compareManyFields(n.children,t.children)}function dh(n,t){return n===t||In(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Cr.compareManyFields(n.children,t.children)}function hA(n,t){return n===t||In(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Cr.visit(n.indices,t.indices)&&Cr.visit(n.dictionary,t.dictionary)}function fh(n,t){return n===t||In(n,t)&&n.unit===t.unit}function Ba(n,t){return n===t||In(n,t)&&n.unit===t.unit}function dA(n,t){return n===t||In(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Cr.compareManyFields(n.children,t.children)}function fA(n,t){return n===t||In(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Cr.compareManyFields(n.children,t.children)}Gt.prototype.visitNull=Qr;Gt.prototype.visitBool=Qr;Gt.prototype.visitInt=cr;Gt.prototype.visitInt8=cr;Gt.prototype.visitInt16=cr;Gt.prototype.visitInt32=cr;Gt.prototype.visitInt64=cr;Gt.prototype.visitUint8=cr;Gt.prototype.visitUint16=cr;Gt.prototype.visitUint32=cr;Gt.prototype.visitUint64=cr;Gt.prototype.visitFloat=wl;Gt.prototype.visitFloat16=wl;Gt.prototype.visitFloat32=wl;Gt.prototype.visitFloat64=wl;Gt.prototype.visitUtf8=Qr;Gt.prototype.visitLargeUtf8=Qr;Gt.prototype.visitBinary=Qr;Gt.prototype.visitLargeBinary=Qr;Gt.prototype.visitFixedSizeBinary=lA;Gt.prototype.visitDate=hh;Gt.prototype.visitDateDay=hh;Gt.prototype.visitDateMillisecond=hh;Gt.prototype.visitTimestamp=Ua;Gt.prototype.visitTimestampSecond=Ua;Gt.prototype.visitTimestampMillisecond=Ua;Gt.prototype.visitTimestampMicrosecond=Ua;Gt.prototype.visitTimestampNanosecond=Ua;Gt.prototype.visitTime=Oa;Gt.prototype.visitTimeSecond=Oa;Gt.prototype.visitTimeMillisecond=Oa;Gt.prototype.visitTimeMicrosecond=Oa;Gt.prototype.visitTimeNanosecond=Oa;Gt.prototype.visitDecimal=Qr;Gt.prototype.visitList=cA;Gt.prototype.visitStruct=uA;Gt.prototype.visitUnion=dh;Gt.prototype.visitDenseUnion=dh;Gt.prototype.visitSparseUnion=dh;Gt.prototype.visitDictionary=hA;Gt.prototype.visitInterval=fh;Gt.prototype.visitIntervalDayTime=fh;Gt.prototype.visitIntervalYearMonth=fh;Gt.prototype.visitDuration=Ba;Gt.prototype.visitDurationSecond=Ba;Gt.prototype.visitDurationMillisecond=Ba;Gt.prototype.visitDurationMicrosecond=Ba;Gt.prototype.visitDurationNanosecond=Ba;Gt.prototype.visitFixedSizeList=dA;Gt.prototype.visitMap=fA;const Cr=new Gt;function Nu(n,t){return Cr.compareSchemas(n,t)}function yc(n,t){return pA(n,t.map(e=>e.data.concat()))}function pA(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,f)=>Math.max(p,f.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,h=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)h[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(h=mA(e,a,h,t,r),a>0&&(i[s++]=fe({type:new wn(e),length:a,nullCount:0,children:h.slice()})))}return[n=n.assign(e),i.map(p=>new Nn(n,p))]}function mA(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],h=c?.length;if(h>=t)h===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,h-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:fe({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var Z0;class An{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new Ae([]),this._offsets=[0],this;let r,s;t[0]instanceof Ae&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof Nn)return[l];if(l instanceof An)return l.batches;if(l instanceof Ie){if(l.type instanceof wn)return[new Nn(new Ae(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),h=c.map(_=>new Ee([l[_]])),p=r??new Ae(c.map((_,v)=>new Xe(String(_),h[v].type,h[v].nullable))),[,f]=yc(p,h);return f.length===0?[new Nn(l)]:f}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new Ae([]),!(r instanceof Ae))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof Nn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Nu(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??F0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=N0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(rh(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?lh.visit(new Ee(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new An(e,i.map(r=>new Nn(e,r)))}slice(t,e){const i=this.schema;[t,e]=L0({length:this.numRows},t,e);const r=U0(this.data,this._offsets,t,e);return new An(i,r.map(s=>new Nn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=fe({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new Ee(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new Ee([fe({type:new Rr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=yc(i,o)}return new An(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new An(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[h,p]=o,f=e.findIndex(_=>_.name===l.name);return~f?p[f]=c:h.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new An(...yc(s,a))}}Z0=Symbol.toStringTag;An[Z0]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=cl(oh),n.get=cl(On.getVisitFn(C.Struct)),n.set=O0(ei.getVisitFn(C.Struct)),n.indexOf=B0(ul.getVisitFn(C.Struct)),"Table"))(An.prototype);var X0;let Nn=class Sa{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof Ae))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=fe({nullCount:0,type:new wn(this.schema.fields),children:this.schema.fields.map(e=>fe({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Ie))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=tf(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,h)=>(l.children[h]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[h]=Xe.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new Ae(i),o=fe({type:new wn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=tf(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=Y0(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return On.visit(this.data,t)}at(t){return this.get(rh(t,this.numRows))}set(t,e){return ei.visit(this.data,t,e)}indexOf(t,e){return ul.visit(this.data,t,e)}[Symbol.iterator](){return lh.visit(new Ee([this.data]))}toArray(){return[...this]}concat(...t){return new An(this.schema,[this,...t])}slice(t,e){const[i]=new Ee([this.data]).slice(t,e).data;return new Sa(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new Ee([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new Ee([fe({type:new Rr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new Ae(s,new Map(this.schema.metadata)),r=fe({type:new wn(s),children:a})}return new Sa(i,r)}select(t){const e=this.schema.select(t),i=new wn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new Sa(e,fe({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=fe({type:new wn(e.fields),length:this.numRows,children:i});return new Sa(e,r)}};X0=Symbol.toStringTag;Nn[X0]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Nn.prototype);function tf(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:fe({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),fe({type:new wn(r),length:e,children:s})]}function Y0(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])Y0(o.children,c?.children,e);if(Nt.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class ph extends Nn{constructor(t){const e=t.fields.map(r=>fe({type:r.type})),i=fe({type:new wn(t.fields),nullCount:0,children:e});super(t,i)}}let Sr=class vi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new vi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Te),(e||new vi).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):nn.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):xe.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new on).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,nn.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,xe.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return vi.startMessage(t),vi.addVersion(t,e),vi.addHeaderType(t,i),vi.addHeader(t,r),vi.addBodyLength(t,s),vi.addCustomMetadata(t,a),vi.endMessage(t)}};class gA extends de{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Zd.startNull(e),Zd.endNull(e)}visitInt(t,e){return Gn.startInt(e),Gn.addBitWidth(e,t.bitWidth),Gn.addIsSigned(e,t.isSigned),Gn.endInt(e)}visitFloat(t,e){return Mi.startFloatingPoint(e),Mi.addPrecision(e,t.precision),Mi.endFloatingPoint(e)}visitBinary(t,e){return zd.startBinary(e),zd.endBinary(e)}visitLargeBinary(t,e){return kd.startLargeBinary(e),kd.endLargeBinary(e)}visitBool(t,e){return Hd.startBool(e),Hd.endBool(e)}visitUtf8(t,e){return Xd.startUtf8(e),Xd.endUtf8(e)}visitLargeUtf8(t,e){return Gd.startLargeUtf8(e),Gd.endLargeUtf8(e)}visitDecimal(t,e){return xs.startDecimal(e),xs.addScale(e,t.scale),xs.addPrecision(e,t.precision),xs.addBitWidth(e,t.bitWidth),xs.endDecimal(e)}visitDate(t,e){return Eo.startDate(e),Eo.addUnit(e,t.unit),Eo.endDate(e)}visitTime(t,e){return Kn.startTime(e),Kn.addUnit(e,t.unit),Kn.addBitWidth(e,t.bitWidth),Kn.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return Jn.startTimestamp(e),Jn.addUnit(e,t.unit),i!==void 0&&Jn.addTimezone(e,i),Jn.endTimestamp(e)}visitInterval(t,e){return Ei.startInterval(e),Ei.addUnit(e,t.unit),Ei.endInterval(e)}visitDuration(t,e){return Ao.startDuration(e),Ao.addUnit(e,t.unit),Ao.endDuration(e)}visitList(t,e){return Wd.startList(e),Wd.endList(e)}visitStruct(t,e){return Yr.startStruct_(e),Yr.endStruct_(e)}visitUnion(t,e){Pn.startTypeIdsVector(e,t.typeIds.length);const i=Pn.createTypeIdsVector(e,t.typeIds);return Pn.startUnion(e),Pn.addMode(e,t.mode),Pn.addTypeIds(e,i),Pn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return Qi.startDictionaryEncoding(e),Qi.addId(e,BigInt(t.id)),Qi.addIsOrdered(e,t.isOrdered),i!==void 0&&Qi.addIndexType(e,i),Qi.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return wo.startFixedSizeBinary(e),wo.addByteWidth(e,t.byteWidth),wo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return To.startFixedSizeList(e),To.addListSize(e,t.listSize),To.endFixedSizeList(e)}visitMap(t,e){return Ro.startMap(e),Ro.addKeysSorted(e,t.keysSorted),Ro.endMap(e)}}const Sc=new gA;function _A(n,t=new Map){return new Ae(yA(n,t),Do(n.metadata),t)}function q0(n){return new Zn(n.count,j0(n.columns),K0(n.columns))}function vA(n){return new Oi(q0(n.data),n.id,n.isDelta)}function yA(n,t){return(n.fields||[]).filter(Boolean).map(e=>Xe.fromJSON(e,t))}function ef(n,t){return(n.children||[]).filter(Boolean).map(e=>Xe.fromJSON(e,t))}function j0(n){return(n||[]).reduce((t,e)=>[...t,new Dr(e.count,SA(e.VALIDITY)),...j0(e.children)],[])}function K0(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Ii(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Ii(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Ii(t.length,r.OFFSET.length)),r.DATA&&t.push(new Ii(t.length,r.DATA.length)),t=K0(r.children,t)}return t}function SA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function xA(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=rf(n,ef(n,t)),r=new Xe(n.name,a,n.nullable,Do(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?nf(i):new Ra,o=new Zs(t.get(e),i,e,s.isOrdered),r=new Xe(n.name,o,n.nullable,Do(n.metadata))):(i=(i=s.indexType)?nf(i):new Ra,t.set(e,a=rf(n,ef(n,t))),o=new Zs(a,i,e,s.isOrdered),r=new Xe(n.name,o,n.nullable,Do(n.metadata))),r||null}function Do(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function nf(n){return new Jr(n.isSigned,n.bitWidth)}function rf(n,t){const e=n.type.name;switch(e){case"NONE":return new Rr;case"null":return new Rr;case"binary":return new Zo;case"largebinary":return new Xo;case"utf8":return new Yo;case"largeutf8":return new qo;case"bool":return new jo;case"list":return new nl((t||[])[0]);case"struct":return new wn(t||[]);case"struct_":return new wn(t||[])}switch(e){case"int":{const i=n.type;return new Jr(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new Wo(vn[i.precision])}case"decimal":{const i=n.type;return new Ko(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new Jo(ti[i.unit])}case"time":{const i=n.type;return new Qo(Wt[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new $o(Wt[i.unit],i.timezone)}case"interval":{const i=n.type;return new tl(Ui[i.unit])}case"duration":{const i=n.type;return new el(Wt[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new il(yn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new rl(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new sl(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new al((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var bA=dp,MA=Gs;class Tn{static fromJSON(t,e){const i=new Tn(0,nn.V5,e);return i._createHeader=EA(t,e),i}static decode(t){t=new MA(me(t));const e=Sr.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Tn(i,r,s);return a._createHeader=AA(e,s),a}static encode(t){const e=new bA;let i=-1;return t.isSchema()?i=Ae.encode(e,t.header()):t.isRecordBatch()?i=Zn.encode(e,t.header()):t.isDictionaryBatch()&&(i=Oi.encode(e,t.header())),Sr.startMessage(e),Sr.addVersion(e,nn.V5),Sr.addHeader(e,i),Sr.addHeaderType(e,t.headerType),Sr.addBodyLength(e,BigInt(t.bodyLength)),Sr.finishMessageBuffer(e,Sr.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof Ae)return new Tn(0,nn.V5,xe.Schema,t);if(t instanceof Zn)return new Tn(e,nn.V5,xe.RecordBatch,t);if(t instanceof Oi)return new Tn(e,nn.V5,xe.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===xe.Schema}isRecordBatch(){return this.headerType===xe.RecordBatch}isDictionaryBatch(){return this.headerType===xe.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=ke(t)}}class Zn{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=ke(t)}}class Oi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=ke(e)}}class Ii{constructor(t,e){this.offset=ke(t),this.length=ke(e)}}class Dr{constructor(t,e){this.length=ke(t),this.nullCount=ke(e)}}function EA(n,t){return(()=>{switch(t){case xe.Schema:return Ae.fromJSON(n);case xe.RecordBatch:return Zn.fromJSON(n);case xe.DictionaryBatch:return Oi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${xe[t]}, type: ${t} }`)})}function AA(n,t){return(()=>{switch(t){case xe.Schema:return Ae.decode(n.header(new yi),new Map,n.version());case xe.RecordBatch:return Zn.decode(n.header(new Yi),n.version());case xe.DictionaryBatch:return Oi.decode(n.header(new ys),n.version())}throw new Error(`Unrecognized Message type: { name: ${xe[t]}, type: ${t} }`)})}Xe.encode=UA;Xe.decode=NA;Xe.fromJSON=xA;Ae.encode=FA;Ae.decode=wA;Ae.fromJSON=_A;Zn.encode=OA;Zn.decode=TA;Zn.fromJSON=q0;Oi.encode=BA;Oi.decode=RA;Oi.fromJSON=vA;Dr.encode=VA;Dr.decode=CA;Ii.encode=zA;Ii.decode=IA;function wA(n,t=new Map,e=nn.V5){const i=PA(n,t);return new Ae(i,Lo(n),t,e)}function TA(n,t=nn.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new Zn(n.length(),DA(n),LA(n,t))}function RA(n,t=nn.V5){return new Oi(Zn.decode(n.data(),t),n.id(),n.isDelta())}function IA(n){return new Ii(n.offset(),n.length())}function CA(n){return new Dr(n.length(),n.nullCount())}function DA(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Dr.decode(e));return t}function LA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<nn.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Ii.decode(i));return e}function PA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=Xe.decode(i,t));return e}function sf(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=Xe.decode(i,t));return e}function NA(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=of(n,sf(n,t)),i=new Xe(n.name(),r,n.nullable(),Lo(n))):t.has(e=ke(o.id()))?(s=(s=o.indexType())?af(s):new Ra,a=new Zs(t.get(e),s,e,o.isOrdered()),i=new Xe(n.name(),a,n.nullable(),Lo(n))):(s=(s=o.indexType())?af(s):new Ra,t.set(e,r=of(n,sf(n,t))),a=new Zs(r,s,e,o.isOrdered()),i=new Xe(n.name(),a,n.nullable(),Lo(n))),i||null}function Lo(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function af(n){return new Jr(n.isSigned(),n.bitWidth())}function of(n,t){const e=n.typeType();switch(e){case Ze.NONE:return new Rr;case Ze.Null:return new Rr;case Ze.Binary:return new Zo;case Ze.LargeBinary:return new Xo;case Ze.Utf8:return new Yo;case Ze.LargeUtf8:return new qo;case Ze.Bool:return new jo;case Ze.List:return new nl((t||[])[0]);case Ze.Struct_:return new wn(t||[])}switch(e){case Ze.Int:{const i=n.type(new Gn);return new Jr(i.isSigned(),i.bitWidth())}case Ze.FloatingPoint:{const i=n.type(new Mi);return new Wo(i.precision())}case Ze.Decimal:{const i=n.type(new xs);return new Ko(i.scale(),i.precision(),i.bitWidth())}case Ze.Date:{const i=n.type(new Eo);return new Jo(i.unit())}case Ze.Time:{const i=n.type(new Kn);return new Qo(i.unit(),i.bitWidth())}case Ze.Timestamp:{const i=n.type(new Jn);return new $o(i.unit(),i.timezone())}case Ze.Interval:{const i=n.type(new Ei);return new tl(i.unit())}case Ze.Duration:{const i=n.type(new Ao);return new el(i.unit())}case Ze.Union:{const i=n.type(new Pn);return new il(i.mode(),i.typeIdsArray()||[],t||[])}case Ze.FixedSizeBinary:{const i=n.type(new wo);return new rl(i.byteWidth())}case Ze.FixedSizeList:{const i=n.type(new To);return new sl(i.listSize(),(t||[])[0])}case Ze.Map:{const i=n.type(new Ro);return new al((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ze[e]}" (${e})`)}function FA(n,t){const e=t.fields.map(s=>Xe.encode(n,s));yi.startFieldsVector(n,e.length);const i=yi.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?yi.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return on.startKeyValue(n),on.addKey(n,o),on.addValue(n,l),on.endKeyValue(n)})):-1;return yi.startSchema(n),yi.addFields(n,i),yi.addEndianness(n,HA?Ws.Little:Ws.Big),r!==-1&&yi.addCustomMetadata(n,r),yi.endSchema(n)}function UA(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Nt.isDictionary(s)?(a=s.dictionary.typeId,r=Sc.visit(s,n),i=Sc.visit(s.dictionary,n)):i=Sc.visit(s,n);const o=(s.children||[]).map(h=>Xe.encode(n,h)),l=Yn.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?Yn.createCustomMetadataVector(n,[...t.metadata].map(([h,p])=>{const f=n.createString(`${h}`),_=n.createString(`${p}`);return on.startKeyValue(n),on.addKey(n,f),on.addValue(n,_),on.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),Yn.startField(n),Yn.addType(n,i),Yn.addTypeType(n,a),Yn.addChildren(n,l),Yn.addNullable(n,!!t.nullable),e!==-1&&Yn.addName(n,e),r!==-1&&Yn.addDictionary(n,r),c!==-1&&Yn.addCustomMetadata(n,c),Yn.endField(n)}function OA(n,t){const e=t.nodes||[],i=t.buffers||[];Yi.startNodesVector(n,e.length);for(const a of e.slice().reverse())Dr.encode(n,a);const r=n.endVector();Yi.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Ii.encode(n,a);const s=n.endVector();return Yi.startRecordBatch(n),Yi.addLength(n,BigInt(t.length)),Yi.addNodes(n,r),Yi.addBuffers(n,s),Yi.endRecordBatch(n)}function BA(n,t){const e=Zn.encode(n,t.data);return ys.startDictionaryBatch(n),ys.addId(n,BigInt(t.id)),ys.addIsDelta(n,t.isDelta),ys.addData(n,e),ys.endDictionaryBatch(n)}function VA(n,t){return mp.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function zA(n,t){return pp.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const HA=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),mh=n=>`Expected ${xe[n]} Message in stream, but was null or length 0.`,gh=n=>`Header pointer of flatbuffer-encoded ${xe[n]} Message is null or length 0.`,J0=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,Q0=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class $0{constructor(t){this.source=t instanceof dl?t:new dl(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?je:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(mh(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=me(this.source.read(t));if(e.byteLength<t)throw new Error(Q0(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=xe.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(gh(e));return r}readMetadataLength(){const t=this.source.read(Tl),e=t&&new Gs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return je;if(e.byteLength<t)throw new Error(J0(t,e.byteLength));return{done:!1,value:Tn.decode(e)}}}class kA{constructor(t,e){this.source=t instanceof Xs?t:ap(t)?new fl(t,e):new Xs(t)}[Symbol.asyncIterator](){return this}next(){return Qt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?je:t})}throw(t){return Qt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Qt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Qt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(mh(t));return e.value})}readMessageBody(t){return Qt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=me(yield this.source.read(t));if(e.byteLength<t)throw new Error(Q0(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return Qt(this,arguments,void 0,function*(t=!1){const e=xe.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(gh(e));return r})}readMetadataLength(){return Qt(this,void 0,void 0,function*(){const t=yield this.source.read(Tl),e=t&&new Gs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return Qt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return je;if(e.byteLength<t)throw new Error(J0(t,e.byteLength));return{done:!1,value:Tn.decode(e)}})}}class GA extends $0{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof Qd?t:new Qd(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Tn.fromJSON(t.schema,xe.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Tn.fromJSON(e,xe.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Tn.fromJSON(e,xe.RecordBatch)}}return this._body=[],je}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(mh(t));return e.value}readSchema(){const t=xe.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(gh(t));return i}}const Tl=4,Fu="ARROW1",Ca=new Uint8Array(Fu.length);for(let n=0;n<Fu.length;n+=1)Ca[n]=Fu.codePointAt(n);function _h(n,t=0){for(let e=-1,i=Ca.length;++e<i;)if(Ca[e]!==n[t+e])return!1;return!0}const Va=Ca.length,tm=Va+Tl,WA=Va*2+Tl;class $n extends ch{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return Kr(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return jn.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return jn.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof $n?t:Au(t)?qA(t):ap(t)?JA(t):Kr(t)?Qt(this,void 0,void 0,function*(){return yield $n.from(yield t)}):op(t)||Qu(t)||lp(t)||Qs(t)?KA(new Xs(t)):jA(new dl(t))}static readAll(t){return t instanceof $n?t.isSync()?lf(t):cf(t):Au(t)||ArrayBuffer.isView(t)||Fa(t)||sp(t)?lf(t):cf(t)}}class pl extends $n{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Ri(this,arguments,function*(){yield oe(yield*Mo(qr(this[Symbol.iterator]())))})}}class ml extends $n{constructor(t){super(t),this._impl=t}readAll(){return Qt(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=qr(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class em extends pl{constructor(t){super(t),this._impl=t}}class ZA extends ml{constructor(t){super(t),this._impl=t}}class nm{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=fe({type:new wn(this.schema.fields),length:t.length,children:i});return new Nn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new Ee(c)):new Ee(c)).memoize()}_loadVectors(t,e,i){return new W0(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class gl extends nm{constructor(t,e){super(e),this._reader=Au(t)?new GA(this._handle=t):new $0(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=rm(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):je}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):je}next(){if(this.closed)return je;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new ph(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class _l extends nm{constructor(t,e){super(e),this._reader=new kA(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Qt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Qt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=rm(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Qt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):je})}return(t){return Qt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):je})}next(){return Qt(this,void 0,void 0,function*(){if(this.closed)return je;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new ph(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Qt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class im extends gl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof $d?t:new $d(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(xe.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(xe.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-tm,i=t.readInt32(e),r=t.readAt(e-i,i);return Ia.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class XA extends _l{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof fl?t:new fl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Qt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return Qt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(xe.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return Qt(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(xe.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return Qt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-tm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Ia.decode(r)})}_readNextMessageAndValidate(t){return Qt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class YA extends gl{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new aA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function rm(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*lf(n){const t=$n.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function cf(n){return Ri(this,arguments,function*(){const e=yield oe($n.from(n));try{if(!(yield oe(e.open({autoDestroy:!1}))).closed)do yield yield oe(e);while(!(yield oe(e.reset().open())).closed)}finally{yield oe(e.cancel())}})}function qA(n){return new pl(new YA(n))}function jA(n){const t=n.peek(Va+7&-8);return t&&t.byteLength>=4?_h(t)?new em(new im(n.read())):new pl(new gl(n)):new pl(new gl((function*(){})()))}function KA(n){return Qt(this,void 0,void 0,function*(){const t=yield n.peek(Va+7&-8);return t&&t.byteLength>=4?_h(t)?new em(new im(yield n.read())):new ml(new _l(n)):new ml(new _l((function(){return Ri(this,arguments,function*(){})})()))})}function JA(n){return Qt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new fl(n,t);return t>=WA&&_h(yield e.readAt(0,Va+7&-8))?new ZA(new XA(e)):new ml(new _l(e))})}class Ke extends de{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Nn?s.data.children:s.data),i=new Ke;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof Ee)return this.visitMany(t.data),this;const{type:e}=t;if(!Nt.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Nt.isUnion(e))this.nodes.push(new Dr(i,0));else{const{nullCount:r}=t;Nt.isNull(e)||di.call(this,r<=0?new Uint8Array(0):ol(t.offset,i,t.nullBitmap)),this.nodes.push(new Dr(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function di(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Ii(this._byteLength,t)),this._byteLength+=t,this}function QA(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(di.call(this,r),e.mode===yn.Sparse)return Uu.call(this,n);if(e.mode===yn.Dense){if(n.offset<=0)return di.call(this,s),Uu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,h,p=-1;++p<i;)(c=r[p])!==void 0&&((h=o[c])===void 0&&(h=o[c]=s[p]),a[p]=s[p]-h,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);di.call(this,a),this.visitMany(n.children.map((c,h)=>{const p=e.typeIds[h],f=o[p],_=l[p];return c.slice(f,Math.min(i,_))}))}}return this}function $A(n){let t;return n.nullCount>=n.length?di.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?di.call(this,ol(n.offset,n.length,t)):di.call(this,ll(n.values))}function ur(n){return di.call(this,n.values.subarray(0,n.length*n.stride))}function Rl(n){const{length:t,values:e,valueOffsets:i}=n,r=ke(i[0]),s=ke(i[t]),a=Math.min(s-r,e.byteLength-r);return di.call(this,up(-r,t+1,i)),di.call(this,e.subarray(r,r+a)),this}function vh(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return di.call(this,up(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function Uu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Ke.prototype.visitBool=$A;Ke.prototype.visitInt=ur;Ke.prototype.visitFloat=ur;Ke.prototype.visitUtf8=Rl;Ke.prototype.visitLargeUtf8=Rl;Ke.prototype.visitBinary=Rl;Ke.prototype.visitLargeBinary=Rl;Ke.prototype.visitFixedSizeBinary=ur;Ke.prototype.visitDate=ur;Ke.prototype.visitTimestamp=ur;Ke.prototype.visitTime=ur;Ke.prototype.visitDecimal=ur;Ke.prototype.visitList=vh;Ke.prototype.visitStruct=Uu;Ke.prototype.visitUnion=QA;Ke.prototype.visitInterval=ur;Ke.prototype.visitDuration=ur;Ke.prototype.visitFixedSizeList=vh;Ke.prototype.visitMap=vh;class sm extends ch{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new Co,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Un(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return Kr(t)?t.then(e=>this.writeAll(e)):Qs(t)?bh(this,t):xh(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Co?this._sink=t:(this._sink=new Co,t&&CM(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&DM(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!Nu(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof An&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Nn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Nu(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Nn?t instanceof ph||this._writeRecordBatch(t):t instanceof An?this.writeAll(t.batches):Fa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Tn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===xe.RecordBatch?this._recordBatchBlocks.push(new Ir(o,t.bodyLength,this._position)):t.headerType===xe.DictionaryBatch&&this._dictionaryBlocks.push(new Ir(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=me(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Tn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Ca)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Ke.assemble(t),a=new Zn(t.numRows,i,r),o=Tn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=Ke.assemble(new Ee([t])),l=new Zn(t.length,s,a),c=new Oi(l,e,i),h=Tn.from(c,r);return this._writeMessage(h)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,h]of a.entries())this._writeDictionaryBatch(h,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class yh extends sm{static writeAll(t,e){const i=new yh(e);return Kr(t)?t.then(r=>i.writeAll(r)):Qs(t)?bh(i,t):xh(i,t)}}class Sh extends sm{static writeAll(t){const e=new Sh;return Kr(t)?t.then(i=>e.writeAll(i)):Qs(t)?bh(e,t):xh(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Ia.encode(new Ia(t,nn.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function xh(n,t){let e=t;t instanceof An&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function bh(n,t){return Qt(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=qr(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function tw(n,t="stream"){return(t==="stream"?yh:Sh).writeAll(n).toUint8Array(!0)}var ew=Object.create,am=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,iw=Object.getOwnPropertyNames,rw=Object.getPrototypeOf,sw=Object.prototype.hasOwnProperty,aw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),ow=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of iw(t))!sw.call(n,r)&&r!==e&&am(n,r,{get:()=>t[r],enumerable:!(i=nw(t,r))||i.enumerable});return n},lw=(n,t,e)=>(e=n!=null?ew(rw(n)):{},ow(!n||!n.__esModule?am(e,"default",{value:n,enumerable:!0}):e,n)),cw=aw((n,t)=>{t.exports=Worker}),uw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(uw||{}),hw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(hw||{}),dw=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(dw||{}),fw=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(fw||{}),pw=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(pw||{}),mw=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(mw||{}),gw=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},_w=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(_w||{}),vw=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=$n.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new An(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new om(this._bindings,this._conn,e),r=await $n.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new yw(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=tw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},om=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},yw=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=$n.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new An(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new om(this.bindings,this.connectionId,t),i=await $n.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},Sw=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(Sw||{}),xw=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(xw||{}),_e=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function Po(n){switch(n.typeId){case C.Binary:return{sqlType:"binary"};case C.Bool:return{sqlType:"bool"};case C.Date:return{sqlType:"date"};case C.DateDay:return{sqlType:"date32[d]"};case C.DateMillisecond:return{sqlType:"date64[ms]"};case C.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case C.Float:return{sqlType:"float"};case C.Float16:return{sqlType:"float16"};case C.Float32:return{sqlType:"float32"};case C.Float64:return{sqlType:"float64"};case C.Int:return{sqlType:"int32"};case C.Int16:return{sqlType:"int16"};case C.Int32:return{sqlType:"int32"};case C.Int64:return{sqlType:"int64"};case C.Uint16:return{sqlType:"uint16"};case C.Uint32:return{sqlType:"uint32"};case C.Uint64:return{sqlType:"uint64"};case C.Uint8:return{sqlType:"uint8"};case C.IntervalDayTime:return{sqlType:"interval[dt]"};case C.IntervalYearMonth:return{sqlType:"interval[m]"};case C.List:return{sqlType:"list",valueType:Po(n.valueType)};case C.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case C.Null:return{sqlType:"null"};case C.Utf8:return{sqlType:"utf8"};case C.Struct:return{sqlType:"struct",fields:n.children.map(t=>Ou(t.name,t.type))};case C.Map:{let t=n;return{sqlType:"map",keyType:Po(t.keyType),valueType:Po(t.valueType)}}case C.Time:return{sqlType:"time[s]"};case C.TimeMicrosecond:return{sqlType:"time[us]"};case C.TimeMillisecond:return{sqlType:"time[ms]"};case C.TimeNanosecond:return{sqlType:"time[ns]"};case C.TimeSecond:return{sqlType:"time[s]"};case C.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case C.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case C.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case C.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case C.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Ou(n,t){let e=Po(t);return e.name=n,e}var bw=/'(opfs:\/\/\S*?)'/g,Mw=/(opfs:\/\/\S*?)/g;function Ew(n){return n.search(Mw)>-1}function Aw(n){return[...n.matchAll(bw)].map(t=>t[1])}var ww=new TextEncoder,Tw=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new _e("RESET",null);return await this.postTask(n)}async ping(){let n=new _e("PING",null);await this.postTask(n)}async dropFile(n){let t=new _e("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new _e("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new _e("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new _e("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new _e("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new _e("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new _e("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new _e("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new _e("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new vw(this,n)}async disconnect(n){let t=new _e("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new _e("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new _e("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new _e("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new _e("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new _e("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new _e("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new _e("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new _e("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new _e("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new _e("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new _e("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=ww.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new _e("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new _e("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new _e("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new _e("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new _e("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new _e("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new _e("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new _e("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new _e("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Ou(s,a))}e.columnsFlat=r,delete e.columns}let i=new _e("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Ou(s,a))}e.columnsFlat=r,delete e.columns}let i=new _e("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return Ew((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=Aw(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function Rw(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}Rw();var Iw=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(Iw||{}),Cw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Dw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),Lw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),Pw=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),Nw={version:"1.33.1-dev20.0"},Mh=Nw.version.split(".");Mh[0];Mh[1];Mh[2];var Fw=()=>typeof navigator>"u",xc=null,bc=null,Mc=null,Ec=null,Ac=null;async function Uw(){return xc==null&&(xc=typeof BigInt64Array<"u"),bc==null&&(bc=await Dw()),Mc==null&&(Mc=await Pw()),Ec==null&&(Ec=await Lw()),Ac==null&&(Ac=await Cw()),{bigInt64Array:xc,crossOriginIsolated:Fw()||globalThis.crossOriginIsolated||!1,wasmExceptions:bc,wasmSIMD:Ec,wasmThreads:Mc,wasmBulkMemory:Ac}}async function Ow(n){let t=await Uw();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}lw(cw());const Bw="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",Vw="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",zw="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",Hw="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",kw="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",Gw="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",Ww="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js";class Zw{db=null;connection=null;async initialize(){try{const e=await Ow({mvp:{mainModule:Bw,mainWorker:Vw},eh:{mainModule:zw,mainWorker:Hw},coi:{mainModule:kw,mainWorker:Gw,pthreadWorker:Ww}}),i=new Worker(e.mainWorker),r=new gw;this.db=new Tw(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class Xw{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;allocateBuffers(t=100){this.capacity=t,te.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),te.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=te.request("GET_RING_BUFFER",{id:this.xBufferId}),i=te.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.bindEvents()}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=a.clientY-e.top;this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}const Yw=n=>{L1(n,{})};var qw=Pe("<!> <!> <!>",1),jw=Pe('<div class="logic-tree svelte-1uha8ag"><!></div>'),Kw=Pe('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function sT(n,t){Ne(t,!0);const e=l=>{N1(l,{children:(c,h)=>{var p=Ye(),f=we(p);{var _=v=>{fv(v,{})};Vt(f,v=>{T(o)&&v(_)})}N(c,p)},$$slots:{default:!0}})};new rg;const i=new F1,r=new wM,s=new Zw,a=new Xw;let o=ir(!1);yl(()=>{a.allocateBuffers(100),hi(o,!0)}),C1(n,{get viewsPanel(){return Yw},get settingsPanel(){return e},children:(l,c)=>{var h=Kw(),p=we(h),f=mt(p);pg(f,{get graph(){return i},get renderer(){return r},get compute(){return s},get pointer(){return a}}),dt(p);var _=Mt(p,2);{var v=x=>{var m=jw(),g=mt(m);U1(g,{children:(b,A)=>{O1(b,{id:"mouse-trail",children:(u,d)=>{var w=qw(),I=we(w);Bh(I,{id:"x-coords",bufferId:"pointer-x"});var S=Mt(I,2);Bh(S,{id:"y-coords",bufferId:"pointer-y"});var E=Mt(S,2);hg(E,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"]}),N(u,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt(m),N(x,m)};Vt(_,x=>{T(o)&&x(v)})}N(l,h)}}),Fe()}export{sT as component};
