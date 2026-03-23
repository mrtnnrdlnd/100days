import{a as U,f as De,c as qe,t as En,k as Q,e as Sl,s as yi,d as ke,l as Sa}from"../chunks/sIUNMqdm.js";import{o as bl,a as pf}from"../chunks/wY5x-DWW.js";import{h as ss,f as Nl,au as vm,K as Fl,d as ym,e as xm,q as A,r as Sm,ac as bm,s as Oh,g as Ul,i as Wa,aC as Mm,aJ as Em,al as Bh,M as Am,L as Dc,b1 as wm,O as Tm,b2 as mf,_ as Im,aQ as Rm,aI as ku,b3 as Cm,a8 as Lc,b4 as Dm,b5 as Lm,a3 as Pm,b6 as Ii,W as Nm,G as gf,J as _f,b7 as Ol,aa as Fm,b8 as Um,b9 as Om,aG as Bm,N as Vm,I as zm,aD as Hm,j as km,b as Gm,U as $e,x as Be,b0 as Vs,u as es,z as Ve,B as ft,C as at,F as pt,a6 as ht,y as Te,am as an,aO as Vh,ba as Oo,a5 as un,A as mn,T as Ls,bb as Bl}from"../chunks/_wvJSINQ.js";import{p as Pc,i as kt,r as An}from"../chunks/BLyKpr9p.js";import{g as wn,a as Tn,s as tn,T as Wm,S as vf,l as Nc,b as yo,c as wr,d as Zm,X as zh,r as Vl,e as Or,t as Xm,f as pr,h as Za,i as Ym}from"../chunks/MatrHBAz.js";import{b as Ma,c as qm}from"../chunks/CnIQd-Uc.js";import{i as jm}from"../chunks/BiojDM0N.js";function Qi(n,t){return t}function Km(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];_f(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var d=n.outrogroups;Fc(n,ku(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,h=c.parentNode;Bm(h),h.append(c),n.items.clear()}Fc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Fc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Ii;const a=document.createDocumentFragment();Vm(s,a)}else zm(t[r],e)}}var Hh;function Mi(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&mf)!==0;if(l){var c=n;a=ss?Nl(vm(c)):c.appendChild(Fl())}ss&&ym();var h=null,p=Im(()=>{var w=e();return Rm(w)?w:w==null?[]:ku(w)}),d,_=new Map,y=!0;function S(w){(E.effect.f&Nm)===0&&(E.pending.delete(w),E.fallback=h,Jm(E,d,a,t,i),h!==null&&(d.length===0?(h.f&Ii)===0?gf(h):(h.f^=Ii,ua(h,null,a)):_f(h,()=>{h=null})))}function m(w){E.pending.delete(w)}var g=xm(()=>{d=A(p);var w=d.length;let u=!1;if(ss){var f=Sm(a)===bm;f!==(w===0)&&(a=Oh(),Nl(a),Ul(!1),u=!0)}for(var T=new Set,R=Am,v=Tm(),M=0;M<w;M+=1){ss&&Wa.nodeType===Mm&&Wa.data===Em&&(a=Wa,u=!0,Ul(!1));var W=d[M],D=i(W,M),V=y?null:o.get(D);V?(V.v&&Bh(V.v,W),V.i&&Bh(V.i,M),v&&R.unskip_effect(V.e)):(V=Qm(o,y?a:Hh??=Fl(),W,D,M,r,t,e),y||(V.e.f|=Ii),o.set(D,V)),T.add(D)}if(w===0&&s&&!h&&(y?h=Dc(()=>s(a)):(h=Dc(()=>s(Hh??=Fl())),h.f|=Ii)),w>T.size&&wm(),ss&&w>0&&Nl(Oh()),!y)if(_.set(R,T),v){for(const[L,B]of o)T.has(L)||R.skip_effect(B.e);R.oncommit(S),R.ondiscard(m)}else S(R);u&&Ul(!0),A(p)}),E={effect:g,items:o,pending:_,outrogroups:null,fallback:h};y=!1,ss&&(a=Wa)}function ea(n){for(;n!==null&&(n.f&Um)===0;)n=n.next;return n}function Jm(n,t,e,i,r){var s=(i&Om)!==0,a=t.length,o=n.items,l=ea(n.effect.first),c,h=null,p,d=[],_=[],y,S,m,g;if(s)for(g=0;g<a;g+=1)y=t[g],S=r(y,g),m=o.get(S).e,(m.f&Ii)===0&&(m.nodes?.a?.measure(),(p??=new Set).add(m));for(g=0;g<a;g+=1){if(y=t[g],S=r(y,g),m=o.get(S).e,n.outrogroups!==null)for(const W of n.outrogroups)W.pending.delete(m),W.done.delete(m);if((m.f&Ol)!==0&&(gf(m),s&&(m.nodes?.a?.unfix(),(p??=new Set).delete(m))),(m.f&Ii)!==0)if(m.f^=Ii,m===l)ua(m,null,e);else{var E=h?h.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),mr(n,h,m),mr(n,m,E),ua(m,E,e),h=m,d=[],_=[],l=ea(h.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(d.length<_.length){var w=_[0],u;h=w.prev;var f=d[0],T=d[d.length-1];for(u=0;u<d.length;u+=1)ua(d[u],w,e);for(u=0;u<_.length;u+=1)c.delete(_[u]);mr(n,f.prev,T.next),mr(n,h,f),mr(n,T,w),l=w,h=T,g-=1,d=[],_=[]}else c.delete(m),ua(m,l,e),mr(n,m.prev,m.next),mr(n,m,h===null?n.effect.first:h.next),mr(n,h,m),h=m;continue}for(d=[],_=[];l!==null&&l!==m;)(c??=new Set).add(l),_.push(l),l=ea(l.next);if(l===null)continue}(m.f&Ii)===0&&d.push(m),h=m,l=ea(m.next)}if(n.outrogroups!==null){for(const W of n.outrogroups)W.pending.size===0&&(Fc(n,ku(W.done)),n.outrogroups?.delete(W));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&Ol)===0&&R.push(m);for(;l!==null;)(l.f&Ol)===0&&l!==n.fallback&&R.push(l),l=ea(l.next);var v=R.length;if(v>0){var M=(i&mf)!==0&&a===0?e:null;if(s){for(g=0;g<v;g+=1)R[g].nodes?.a?.measure();for(g=0;g<v;g+=1)R[g].nodes?.a?.fix()}Km(n,R,M)}}s&&Fm(()=>{if(p!==void 0)for(m of p)m.nodes?.a?.apply()})}function Qm(n,t,e,i,r,s,a,o){var l=(a&Dm)!==0?(a&Lm)===0?Pm(e,!1,!1):Lc(e):null,c=(a&Cm)!==0?Lc(r):null;return{v:l,i:c,e:Dc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function ua(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Ii)===0?t.nodes.start:e;i!==null;){var a=Hm(i);if(s.before(i),i===r)return;i=a}}function mr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function $m(n,t,e){km(()=>{var i=Gm(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function tg(n){var t=Lc(0);return function(){return arguments.length===1?($e(t,A(t)+1),arguments[0]):(A(t),n())}}class eg{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const Wt=new eg;class ng{id;type="source";subType="dummy";parentId;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}getOutput(){return this.output}}class ig{id;type="processor";subType="dummy";inputIds=[];parentId;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}process(){return this.output}}class rg{id;type="sink";subType="dummy";inputIds=[];parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}consume(t){return null}}class yf{id;type="subject";subType="default";inputIds;parentId;constructor(t,e=[],i){this.id=t,this.inputIds=e,i&&Object.assign(this,i)}}class sg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Wt.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),Wt.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),Wt.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),Wt.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),Wt.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),Wt.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}}class xf{id;type="source";subType="ring-buffer";bufferId;parentId;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutput(){if(!this.ringBuffer)return this.outputBuffer;const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return this.outputBuffer}}class ag{id;type="source";subType="static-array";parentId;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutput(){return this.data}}class og{id;type="source";subType="time";parentId;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutput(){return this.outputBuffer[0]=performance.now()/1e3,this.outputBuffer}}class lg{id;type="source";subType="random";parentId;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutput(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return this.outputBuffer}}class Bo{id;type="source";subType="api";parentId;url;capacity;extractKey;availableKeys=[];outputBuffer;static fetchCache=new Map;constructor(t,e,i,r=""){this.id=t,this.capacity=e,this.url=i,this.extractKey=r,this.outputBuffer=new Float64Array(e),this.url&&this.loadData()}async loadData(){try{const t=Date.now();let e=Bo.fetchCache.get(this.url);(!e||t-e.time>6e4)&&(e={promise:fetch(this.url).then(o=>o.json()),time:t},Bo.fetchCache.set(this.url,e));const i=await e.promise;this.availableKeys=this.findAvailableKeys(i),Wt.emit("GRAPH_UPDATED",void 0);const r=this.extractNumbers(i),s=Math.min(r.length,this.capacity);for(let a=0;a<s;a++)this.outputBuffer[a]=r[a]}catch{}}findAvailableKeys(t){const e=new Set,i=r=>{if(r){if(typeof r=="object"&&!Array.isArray(r)){typeof r.name=="string"&&Array.isArray(r.values)&&e.add(r.name),r.validTime&&e.add("validTime");for(const s in r)typeof r[s]=="number"?e.add(s):i(r[s])}else if(Array.isArray(r))for(let s=0;s<r.length;s++)i(r[s])}};return i(t),Array.from(e).sort()}extractNumbers(t){const e=[],i=r=>{if(r){if(this.extractKey==="validTime"&&r.validTime){const s=new Date(r.validTime).getTime()/1e3;isNaN(s)||e.push(s)}if(this.extractKey&&r.name===this.extractKey&&Array.isArray(r.values)){typeof r.values[0]=="number"&&e.push(r.values[0]);return}if(Array.isArray(r))for(let s=0;s<r.length;s++)i(r[s]);else if(typeof r=="object")for(const s in r)this.extractKey&&s===this.extractKey&&typeof r[s]=="number"||!this.extractKey&&typeof r[s]=="number"?e.push(r[s]):i(r[s])}};return i(t),e}getOutput(){return this.outputBuffer}}function kh(n,t){Be(t,!0);const e=Vs("subject-parent");es(()=>{const i=Wt.request("GET_RING_BUFFER",{id:t.bufferId})||null,r=new xf(t.id,i,t.bufferId);r.parentId=e?.(),Wt.request("REGISTER_NODE",{node:r})}),Ve()}class cg{id;type="processor";subType="math";inputIds=[];parentId;capacity;operation;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){if(t.length===0)return this.outputBuffer;const e=t[0],i=Math.min(e.length,this.outputBuffer.length);for(let r=0;r<i;r++){let s=e[r];for(let a=1;a<t.length;a++){const o=t[a],l=o.length>1?o[r]:o[0];this.operation==="add"?s+=l:this.operation==="multiply"&&(s*=l)}this.outputBuffer[r]=s}return this.outputBuffer}}class ug{id;type="processor";subType="motion";inputIds;parentId;capacity;outputBuffer;constructor(t,e,i){this.id=t,this.inputIds=e,this.capacity=i,this.outputBuffer=new Float64Array(i)}process(t){if(t.length<2)return this.outputBuffer;const e=t[0],i=t[1],r=Math.min(e.length,i.length,this.outputBuffer.length);for(let s=0;s<r;s++)this.outputBuffer[s]=e[s]+i[s];return this.outputBuffer}}class Sf{id;type="sink";subType="sprite";textureId;inputIds;parentId;primitiveCache=[];constructor(t,e,i=[]){this.id=t,this.textureId=e,this.inputIds=i}consume(t){if(t.length<2)return null;let e=t[0],i=t[1];const r=Math.min(e.length,i.length);for(;this.primitiveCache.length<r;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let s=0;s<this.primitiveCache.length;s++)if(s<r)if(e[s]===0&&i[s]===0)this.primitiveCache[s].opacity=0;else{const a=this.primitiveCache[s];a.x=e[s],a.y=i[s],a.opacity=1-s/r}else this.primitiveCache[s].opacity=0;return this.primitiveCache}}class hg{id;type="sink";subType="mesh";textureId;inputIds;parentId;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s,a=[]){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.inputIds=a,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.inputIds.length===0?null:this.primitiveCache}}function dg(n,t){Be(t,!0);let e=Pc(t,"inputIds",19,()=>[]);const i=Vs("subject-parent");es(()=>{const r=new Sf(t.id,t.textureId,e());r.parentId=i?.(),Wt.request("REGISTER_NODE",{node:r});for(let s=0;s<e().length;s++)Wt.request("CONNECT_NODES",{sourceId:e()[s],targetId:t.id})}),Ve()}class fg{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};boundSaveGraphState=this.saveGraphState.bind(this);nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new ng(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new og(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new lg(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new ag(t,e?.data??[0]);return i.subType="static-array",i}},{subType:"api",label:"API Source",create:(t,e)=>{const i=new Bo(t,e?.capacity??100,e?.url??"",e?.extractKey??"");return i.subType="api",i}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=Wt.request("GET_RING_BUFFER",{id:i})||null,s=new xf(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new ig(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new cg(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new ug(t,[],e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new rg(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new Sf(t,e?.textureId??"white-box",e?.inputIds??[]);return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=new hg(t,e?.textureId??"white-box",e?.vertices??new Float32Array,e?.indices??new Uint16Array,e?.uvs??new Float32Array,e?.inputIds??[]);return i.subType="mesh",i}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new yf(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){try{await this.compute.initialize()}catch{}try{await this.renderer.initialize(t)}catch{return}this.loadGraphState(),Wt.on("GRAPH_UPDATED",this.boundSaveGraphState),this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}saveGraphState(){const t=Wt.request("GET_GRAPH_STATE",void 0),e=t.nodes.map(i=>{const r=i;return{id:i.id,type:i.type,subType:i.subType,parentId:i.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,extractKey:r.extractKey,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[]}}});localStorage.setItem("graph-state",JSON.stringify({nodes:e,connections:t.connections}))}loadGraphState(){const t=localStorage.getItem("graph-state");if(t)try{const e=JSON.parse(t);for(let i=0;i<e.nodes.length;i++){const r=e.nodes[i],s=Wt.request("CREATE_NODE",{id:r.id,type:r.type,subType:r.subType,parentId:r.parentId,config:r.config});s&&(r.config&&r.config.inputIds&&(s.inputIds=[...r.config.inputIds]),Wt.request("REGISTER_NODE",{node:s}))}for(let i=0;i<e.connections.length;i++){const r=e.connections[i];Wt.request("CONNECT_NODES",{sourceId:r.sourceId,targetId:r.targetId})}}catch{}}setupMediatorHandlers(){Wt.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),Wt.emit("GRAPH_UPDATED",void 0),!0)),Wt.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),Wt.emit("GRAPH_UPDATED",void 0),!0)),Wt.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),Wt.emit("GRAPH_UPDATED",void 0),!0)),Wt.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),Wt.emit("GRAPH_UPDATED",void 0),!0)),Wt.handle("GET_CONTEXT",t=>null),Wt.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),Wt.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),Wt.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId,t.config&&t.config.name!==void 0&&(r.name=t.config.name)),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,Wt.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,Wt.off("GRAPH_UPDATED",this.boundSaveGraphState),this.renderer.destroy(),this.compute.destroy()}}var pg=De('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function mg(n,t){Be(t,!0);let e,i,r;es(()=>{if(!e||!i)return;(async()=>{r=new fg(t.graph,t.renderer,t.compute),await r.boot(e);const c=window.devicePixelRatio||1;t.renderer.resize(i.clientWidth,i.clientHeight,c),t.pointer.initialize(i)})();const l=new ResizeObserver(c=>{for(const h of c){const{width:p,height:d}=h.contentRect;p>0&&d>0&&t.renderer.resize(p,d,window.devicePixelRatio||1)}});return l.observe(i),()=>{l.disconnect(),r&&r.shutdown(),t.pointer.destroy()}});var s=pg(),a=ft(s);Ma(a,o=>e=o,()=>e),at(s),Ma(s,o=>i=o,()=>i),U(n,s),Ve()}var gg=Q('<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'),_g=Q('<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',1),vg=Q('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'),yg=Q('<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'),xg=Q('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'),Sg=Q('<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'),bg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Mg(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=bg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=gg();U(u,f)},y=u=>{var f=_g();an(),U(u,f)},S=u=>{var f=vg();U(u,f)},m=u=>{var f=yg();U(u,f)},g=u=>{var f=xg();U(u,f)},E=u=>{var f=Sg();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var Eg=Q('<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>'),Ag=Q('<path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path>',1),wg=Q('<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Tg=Q('<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>'),Ig=Q('<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Rg=Q('<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>'),Cg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dg(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=Cg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=Eg();U(u,f)},y=u=>{var f=Ag();an(),U(u,f)},S=u=>{var f=wg();U(u,f)},m=u=>{var f=Tg();U(u,f)},g=u=>{var f=Ig();U(u,f)},E=u=>{var f=Rg();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var Lg=Q('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Pg=Q('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),Ng=Q('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),Fg=Q('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Ug=Q('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Og=Q('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),Bg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function bf(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=Bg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=Lg();U(u,f)},y=u=>{var f=Pg();an(),U(u,f)},S=u=>{var f=Ng();U(u,f)},m=u=>{var f=Fg();U(u,f)},g=u=>{var f=Ug();U(u,f)},E=u=>{var f=Og();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var Vg=Q('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),zg=Q('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),Hg=Q('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),kg=Q('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),Gg=Q('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),Wg=Q('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),Zg=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Xg(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=Zg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=Vg();U(u,f)},y=u=>{var f=zg();an(),U(u,f)},S=u=>{var f=Hg();U(u,f)},m=u=>{var f=kg();U(u,f)},g=u=>{var f=Gg();U(u,f)},E=u=>{var f=Wg();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var Yg=Q('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),qg=Q('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),jg=Q('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),Kg=Q('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),Jg=Q('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),Qg=Q('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),$g=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Mf(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=$g();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=Yg();U(u,f)},y=u=>{var f=qg();an(),U(u,f)},S=u=>{var f=jg();U(u,f)},m=u=>{var f=Kg();U(u,f)},g=u=>{var f=Jg();U(u,f)},E=u=>{var f=Qg();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var t_=Q('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),e_=Q('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),n_=Q('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),i_=Q('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),r_=Q('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),s_=Q('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),a_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function o_(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=a_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=t_();U(u,f)},y=u=>{var f=e_();an(),U(u,f)},S=u=>{var f=n_();U(u,f)},m=u=>{var f=i_();U(u,f)},g=u=>{var f=r_();U(u,f)},E=u=>{var f=s_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var l_=Q('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),c_=Q('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),u_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),h_=Q('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),d_=Q('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),f_=Q('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),p_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function m_(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=p_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=l_();U(u,f)},y=u=>{var f=c_();an(),U(u,f)},S=u=>{var f=u_();U(u,f)},m=u=>{var f=h_();U(u,f)},g=u=>{var f=d_();U(u,f)},E=u=>{var f=f_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var g_=Q('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),__=Q('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),v_=Q('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),y_=Q('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),x_=Q('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),S_=Q('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),b_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function M_(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=b_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=g_();U(u,f)},y=u=>{var f=__();an(),U(u,f)},S=u=>{var f=v_();U(u,f)},m=u=>{var f=y_();U(u,f)},g=u=>{var f=x_();U(u,f)},E=u=>{var f=S_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var E_=Q('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),A_=Q('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),w_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),T_=Q('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),I_=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),R_=Q('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),C_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function D_(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=C_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=E_();U(u,f)},y=u=>{var f=A_();an(),U(u,f)},S=u=>{var f=w_();U(u,f)},m=u=>{var f=T_();U(u,f)},g=u=>{var f=I_();U(u,f)},E=u=>{var f=R_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var L_=Q('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),P_=Q('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),N_=Q('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),F_=Q('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),U_=Q('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),O_=Q('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),B_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function V_(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=B_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=L_();U(u,f)},y=u=>{var f=P_();an(),U(u,f)},S=u=>{var f=N_();U(u,f)},m=u=>{var f=F_();U(u,f)},g=u=>{var f=U_();U(u,f)},E=u=>{var f=O_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var z_=Q('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),H_=Q('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),k_=Q('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),G_=Q('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),W_=Q('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),Z_=Q('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),X_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ef(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=X_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=z_();U(u,f)},y=u=>{var f=H_();an(),U(u,f)},S=u=>{var f=k_();U(u,f)},m=u=>{var f=G_();U(u,f)},g=u=>{var f=W_();U(u,f)},E=u=>{var f=Z_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var Y_=Q('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),q_=Q('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),j_=Q('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),K_=Q('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),J_=Q('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),Q_=Q('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),$_=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Af(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=$_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=Y_();U(u,f)},y=u=>{var f=q_();an(),U(u,f)},S=u=>{var f=j_();U(u,f)},m=u=>{var f=K_();U(u,f)},g=u=>{var f=J_();U(u,f)},E=u=>{var f=Q_();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var t1=Q('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),e1=Q('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),n1=Q('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),i1=Q('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),r1=Q('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),s1=Q('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),a1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function o1(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=a1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=t1();U(u,f)},y=u=>{var f=e1();an(),U(u,f)},S=u=>{var f=n1();U(u,f)},m=u=>{var f=i1();U(u,f)},g=u=>{var f=r1();U(u,f)},E=u=>{var f=s1();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var l1=Q('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),c1=Q('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),u1=Q('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),h1=Q('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),d1=Q('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),f1=Q('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),p1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function m1(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=p1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=l1();U(u,f)},y=u=>{var f=c1();an(),U(u,f)},S=u=>{var f=u1();U(u,f)},m=u=>{var f=h1();U(u,f)},g=u=>{var f=d1();U(u,f)},E=u=>{var f=f1();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var g1=Q('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),_1=Q('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),v1=Q('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),y1=Q('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),x1=Q('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),S1=Q('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),b1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Gh(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=b1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=g1();U(u,f)},y=u=>{var f=_1();an(),U(u,f)},S=u=>{var f=v1();U(u,f)},m=u=>{var f=y1();U(u,f)},g=u=>{var f=x1();U(u,f)},E=u=>{var f=S1();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var M1=Q('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),E1=Q('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),A1=Q('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),w1=Q('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),T1=Q('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),I1=Q('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),R1=Q('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function wf(n,t){Be(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=ht(()=>t.weight??e.weight??"regular"),s=ht(()=>t.color??e.color??"currentColor"),a=ht(()=>t.size??e.size??"1em"),o=ht(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:v,...M}=u;return M}var c=R1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var h=ft(c);{var p=u=>{var f=qe(),T=Te(f);tn(T,()=>t.children),U(u,f)};kt(h,u=>{t.children&&u(p)})}var d=pt(h,2);{var _=u=>{var f=M1();U(u,f)},y=u=>{var f=E1();an(),U(u,f)},S=u=>{var f=A1();U(u,f)},m=u=>{var f=w1();U(u,f)},g=u=>{var f=T1();U(u,f)},E=u=>{var f=I1();U(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,f)};kt(d,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(y,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(w,-1)})}at(c),U(n,c),Ve()}var C1=De('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function D1(n,t){var e=C1(),i=ft(e),r=ft(i);Wm(r,{}),at(i);var s=pt(i,2),a=ft(s);tn(a,()=>t.children),at(s);var o=pt(s,2),l=ft(o);tn(l,()=>t.viewsPanel??Vh);var c=pt(l,2);tn(c,()=>t.settingsPanel??Vh),at(o),at(e),U(n,e)}var zl=tg(()=>Nc),L1=De('<div class="views-content"></div>');function P1(n,t){Be(t,!1),jm(),vf(n,{get isOpen(){return zl().viewsOpen},onClose:()=>zl(zl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=L1();U(e,r)},$$slots:{default:!0}}),Ve()}var N1=De('<div class="settings-content"><!></div>');function F1(n,t){Be(t,!0),vf(n,{get isOpen(){return Nc.settingsOpen},onClose:()=>Nc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=N1(),s=ft(r);{var a=o=>{var l=qe(),c=Te(l);tn(c,()=>t.children),U(o,l)};kt(s,o=>{t.children&&o(a)})}at(r),U(e,r)},$$slots:{default:!0}}),Ve()}class U1{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];inputBufferCache=[];hasInputIds(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputIds(t)&&(t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){this.nodes.delete(t),this.connections=this.connections.filter(e=>e.sourceId!==t&&e.targetId!==t);for(const[e,i]of this.nodes)this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputIds(i)&&(i.inputIds=i.inputIds.filter(r=>r!==t))}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r)if(r.type==="source"){const a=r.getOutput();this.nodeOutputs.set(r.id,a)}else if(r.type==="processor"){const s=r;this.inputBufferCache.length=0;for(let o=0;o<s.inputIds.length;o++){const l=s.inputIds[o],c=this.nodeOutputs.get(l);c&&this.inputBufferCache.push(c)}const a=s.process(this.inputBufferCache);this.nodeOutputs.set(r.id,a)}else{if(r.type==="subject")continue;if(r.type==="sink"){const s=r;this.inputBufferCache.length=0;for(let o=0;o<s.inputIds.length;o++){const l=s.inputIds[o],c=this.nodeOutputs.get(l);c&&this.inputBufferCache.push(c)}const a=s.consume(this.inputBufferCache);if(a)for(let o=0;o<a.length;o++)this.renderPrimitives.push(a[o])}}}return this.renderPrimitives}}function O1(n,t){Be(t,!0),Oo("subject-parent",()=>{});var e=qe(),i=Te(e);{var r=s=>{var a=qe(),o=Te(a);tn(o,()=>t.children),U(s,a)};kt(i,s=>{t.children&&s(r)})}U(n,e),Ve()}function B1(n,t){Be(t,!0);const e=Vs("subject-parent");es(()=>{const a=new yf(t.id);a.parentId=e?.(),Wt.request("REGISTER_NODE",{node:a})}),Oo("subject-parent",()=>t.id);var i=qe(),r=Te(i);{var s=a=>{var o=qe(),l=Te(o);tn(l,()=>t.children),U(a,o)};kt(r,a=>{t.children&&a(s)})}U(n,i),Ve()}function V1(n,t){return t.filter(e=>e.parentId===n)}class z1{#t=un(null);get selectedNodeId(){return A(this.#t)}set selectedNodeId(t){$e(this.#t,t,!0)}nodeElements=new Map;#e=un(null);get dragConnectionSourceId(){return A(this.#e)}set dragConnectionSourceId(t){$e(this.#e,t,!0)}#n=un(null);get dragConnectionTargetId(){return A(this.#n)}set dragConnectionTargetId(t){$e(this.#n,t,!0)}#i=un(0);get dragStartX(){return A(this.#i)}set dragStartX(t){$e(this.#i,t,!0)}#r=un(0);get dragStartY(){return A(this.#r)}set dragStartY(t){$e(this.#r,t,!0)}}const ye=new z1;var H1=De('<button class="expand-btn"><!></button>'),k1=De('<div class="palette-container"><button class="action-btn" title="Add Child Node"><!></button></div>'),G1=De('<div class="children-group"></div>'),W1=De('<div class="tree-item"><div role="button" tabindex="0"><div class="node-info"><!> <div role="button" tabindex="0"></div> <span><!></span> <span class="node-id"> </span></div> <div class="node-actions"><!> <button class="action-btn danger" title="Delete">✕</button></div></div> <!></div>');function Tf(n,t){Be(t,!0);const e=Vs("graph-actions"),i=Vs("palette-state");let r=un(!0),s=ht(()=>V1(t.node.id,t.nodes)),a=ht(()=>A(s).length>0),o=un(void 0),l=ht(()=>t.node.type==="source"||t.node.type==="processor"||t.node.type==="subject"),c=ht(()=>t.node.type==="processor"||t.node.type==="sink"||t.node.type==="subject"),h=ht(()=>ye.dragConnectionSourceId===t.node.id),p=ht(()=>ye.dragConnectionSourceId!==null&&ye.dragConnectionSourceId!==t.node.id&&A(c)),d=ht(()=>ye.dragConnectionTargetId===t.node.id),_=ht(()=>ye.dragConnectionSourceId===null&&!A(l)||ye.dragConnectionSourceId!==null&&!A(p)&&!A(h));es(()=>(A(o)&&ye.nodeElements.set(t.node.id,A(o)),()=>{ye.nodeElements.get(t.node.id)===A(o)&&ye.nodeElements.delete(t.node.id)}));function y(ut){ut.stopPropagation(),$e(r,!A(r))}function S(ut){ut.stopPropagation();const zt=ut.currentTarget.getBoundingClientRect();i.activeId===t.node.id?i.activeId=null:(i.activeId=t.node.id,i.x=zt.left,i.y=zt.bottom+4)}function m(ut){ut.stopPropagation(),e.removeNode(t.node.id)}function g(ut){ut.stopPropagation(),ye.selectedNodeId=t.node.id}function E(ut){(ut.key==="Enter"||ut.key===" ")&&(ut.preventDefault(),ye.selectedNodeId=t.node.id)}function w(ut){const zt={subject:bf,source:Ef,sink:Mf,processor:wf},pe=ut.subType||ut.id;return{"mouse-input":M_,"keyboard-input":Gh,sprite:D_,mesh:o1,"sprite-atlas":m1,"transform-shader":V_,script:o_,renderer:m_,console:Gh,file:Xg}[pe]||zt[ut.type]}let u=ht(()=>w(t.node));var f=W1(),T=ft(f);let R;var v=ft(T),M=ft(v);{var W=ut=>{var zt=H1(),pe=ft(zt);{var j=nt=>{Mg(nt,{size:12,weight:"bold"})},st=nt=>{Dg(nt,{size:12,weight:"bold"})};kt(pe,nt=>{A(r)?nt(j):nt(st,-1)})}at(zt),ke("click",zt,y),U(ut,zt)};kt(M,ut=>{A(a)&&ut(W)})}var D=pt(M,2);let V;var L=pt(D,2),B=ft(L);qm(B,()=>A(u),(ut,zt)=>{zt(ut,{size:16,weight:"fill"})}),at(L);var z=pt(L,2),H=ft(z,!0);at(z),at(v);var k=pt(v,2),et=ft(k);{var tt=ut=>{var zt=k1(),pe=ft(zt),j=ft(pe);Af(j,{size:12,weight:"bold"}),at(pe),at(zt),ke("click",pe,S),U(ut,zt)};kt(et,ut=>{t.node.type==="subject"&&ut(tt)})}var mt=pt(et,2);at(k),at(T),Ma(T,ut=>$e(o,ut),()=>A(o));var St=pt(T,2);{var gt=ut=>{var zt=G1();Mi(zt,21,()=>A(s),Qi,(pe,j)=>{var st=qe(),nt=Te(st);Tf(nt,{get node(){return A(j)},get nodes(){return t.nodes}}),U(pe,st)}),at(zt),U(ut,zt)};kt(St,ut=>{A(a)&&A(r)&&ut(gt)})}at(f),mn(()=>{R=yo(T,1,"node-row",null,R,{selected:ye.selectedNodeId===t.node.id}),V=yo(D,1,"connection-port",null,V,{active:A(h),"valid-target":A(d),disabled:A(_)}),yo(L,1,`type-icon ${t.node.type??""}`),wr(L,"title",t.node.type),yi(H,t.node.name||t.node.id)}),ke("click",T,g),ke("keydown",T,E),ke("pointerdown",D,ut=>{if(!A(l))return;ut.stopPropagation(),ut.preventDefault();const zt=ut.currentTarget.getBoundingClientRect();ye.dragConnectionSourceId=t.node.id,ye.dragStartX=zt.left+zt.width/2,ye.dragStartY=zt.top+zt.height/2}),Sa("pointerenter",D,()=>{A(p)&&(ye.dragConnectionTargetId=t.node.id)}),Sa("pointerleave",D,()=>{ye.dragConnectionTargetId===t.node.id&&(ye.dragConnectionTargetId=null)}),ke("click",mt,m),U(n,f),Ve()}Sl(["click","keydown","pointerdown"]);var Z1=De('<div class="inline-palette" role="presentation"><button><!> Source</button> <button><!> Processor</button> <button><!> Subject</button> <button><!> Sink</button></div>');function X1(n,t){Be(t,!0);let e=Pc(t,"x",3,0),i=Pc(t,"y",3,0),r=un(void 0),s=un(0),a=un(0);es(()=>{if(t.show&&A(r)){const p=A(r).getBoundingClientRect();let d=e(),_=i();d+p.width>window.innerWidth&&(d=window.innerWidth-p.width-8),_+p.height>window.innerHeight&&(_=i()-p.height-8),$e(s,d,!0),$e(a,_,!0)}else $e(s,e()),$e(a,i())});function o(p,d){d.stopPropagation(),t.onAdd(p)}var l=qe(),c=Te(l);{var h=p=>{var d=Z1(),_=ft(d),y=ft(_);Ef(y,{size:14,weight:"fill",style:"color: var(--color-success)"}),an(),at(_);var S=pt(_,2),m=ft(S);wf(m,{size:14,weight:"fill",style:"color: var(--color-warning)"}),an(),at(S);var g=pt(S,2),E=ft(g);bf(E,{size:14,weight:"fill",style:"color: var(--color-info)"}),an(),at(g);var w=pt(g,2),u=ft(w);Mf(u,{size:14,weight:"fill",style:"color: var(--color-error)"}),an(),at(w),at(d),Ma(d,f=>$e(r,f),()=>A(r)),mn(()=>Zm(d,`top: ${A(a)??""}px; left: ${A(s)??""}px;`)),ke("click",d,f=>f.stopPropagation()),ke("click",_,f=>o("source",f)),ke("click",S,f=>o("processor",f)),ke("click",g,f=>o("subject",f)),ke("click",w,f=>o("sink",f)),U(p,d)};kt(c,p=>{t.show&&p(h)})}U(n,l),Ve()}Sl(["click"]);var Y1=De("<option> </option>"),q1=De('<div class="input-group"><label>Implementation</label> <select class="unified-input"></select></div>'),j1=De("<option> </option>"),K1=De('<div class="input-group"><label>API URL</label> <input type="text" class="unified-input" placeholder="https://api.smhi.se/..."/></div> <div class="input-group"><label>Extract Variable</label> <select class="unified-input"><option>Alla numeriska värden</option><!></select></div>',1),J1=De("<option> </option>"),Q1=De('<div class="input-group"><label>Target Buffer ID</label> <select class="unified-input"><option disabled="">Select a buffer...</option><!></select></div>'),$1=De('<div class="input-group"><label>Capacity</label> <input type="number" min="1" step="1" class="unified-input"/></div>'),tv=De('<div class="input-group"><label>Operation</label> <select class="unified-input"><option>Add</option><option>Multiply</option></select></div>'),ev=De('<div class="input-group"><label>Data (comma separated)</label> <textarea class="unified-input" rows="3"></textarea></div>'),nv=De("<option> </option>"),iv=De('<div class="input-group"><label>Texture ID</label> <select class="unified-input"></select></div>'),rv=De('<div class="input-group"><label>Vertices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>Indices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>UVs</label> <textarea class="unified-input" rows="2"></textarea></div>',1),sv=De('<div class="connection-item"><span class="conn-id"><span style="color: var(--text-muted); margin-right: 4px; font-weight: 700;"> </span> </span> <button class="btn-icon danger"><!></button></div>'),av=De("<option> </option>"),ov=De('<div class="divider"></div> <div class="input-group"><label>Input Connections</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="" selected="">+ Connect Node...</option><!></select></div></div>',1),lv=De('<div class="node-properties" style="height: 320px;"><div class="resize-handle"></div> <div class="props-header"><div class="header-title"><h4> </h4> <span> </span></div> <button class="btn-icon"><!></button></div> <div class="props-content"><div class="input-group"><label>Display Name</label> <input type="text" class="unified-input"/></div> <!> <div class="divider"></div> <!> <!> <!> <!> <!> <!> <!> <!></div></div>');function cv(n,t){Be(t,!0);const e=Vs("graph-actions");let i=ht(()=>t.nodes.find(S=>S.id===ye.selectedNodeId)),r=un(Ls({})),s=un(Ls([])),a=["white-box","circle","triangle","star","particle"];function o(S){let m=!1,g=0,E=0;function w(T){m=!0,g=T.clientY,E=S.parentElement.clientHeight,S.setPointerCapture(T.pointerId)}function u(T){if(!m)return;const R=g-T.clientY,v=Math.max(150,Math.min(E+R,window.innerHeight-100));S.parentElement.style.height=`${v}px`}function f(T){m=!1,S.releasePointerCapture(T.pointerId)}return S.addEventListener("pointerdown",w),S.addEventListener("pointermove",u),S.addEventListener("pointerup",f),S.addEventListener("pointercancel",f),{destroy(){S.removeEventListener("pointerdown",w),S.removeEventListener("pointermove",u),S.removeEventListener("pointerup",f),S.removeEventListener("pointercancel",f)}}}function l(){A(i)&&A(i).subType==="ring-buffer"&&$e(s,Wt.request("GET_AVAILABLE_BUFFERS",void 0),!0)}bl(()=>{$e(r,Wt.request("GET_NODE_FACTORIES",void 0),!0),Wt.on("GRAPH_UPDATED",l)}),pf(()=>{Wt.off("GRAPH_UPDATED",l)}),es(()=>{l()});function c(S){if(!A(i))return;const m=S.target,g=m.value;g&&(e.connectInput(A(i).id,g),m.value="")}function h(S,m){if(S==="sprite"){if(m===0)return"X:";if(m===1)return"Y:"}else if(S==="motion"){if(m===0)return"POS:";if(m===1)return"VEL:"}return`IN ${m}:`}let p=ht(()=>A(i)?t.nodes.filter(S=>(S.type==="source"||S.type==="processor"||S.type==="subject")&&S.id!==A(i).id&&!(A(i).inputIds||[]).includes(S.id)):[]);var d=qe(),_=Te(d);{var y=S=>{const m=ht(()=>A(i).type==="subject"?"info":A(i).type==="source"?"success":A(i).type==="processor"?"warning":"error");var g=lv(),E=ft(g);$m(E,Ut=>o?.(Ut));var w=pt(E,2),u=ft(w),f=ft(u),T=ft(f,!0);at(f);var R=pt(f,2),v=ft(R,!0);at(R),at(u);var M=pt(u,2),W=ft(M);zh(W,{size:14,weight:"bold"}),at(M),at(w);var D=pt(w,2),V=ft(D),L=pt(ft(V),2);Vl(L),at(V);var B=pt(V,2);{var z=Ut=>{var Et=q1(),It=pt(ft(Et),2);Mi(It,21,()=>A(r)[A(i).type],Qi,(Rt,bt)=>{var Gt=Y1(),C=ft(Gt,!0);at(Gt);var ue={};mn(()=>{pr(Gt,A(i).subType===A(bt).subType||A(i).subType===void 0&&A(bt).subType==="dummy"),yi(C,A(bt).label),ue!==(ue=A(bt).subType)&&(Gt.value=(Gt.__value=A(bt).subType)??"")}),U(Rt,Gt)}),at(It),at(Et),ke("change",It,Rt=>e.changeNodeSubType(A(i),Rt.currentTarget.value)),U(Ut,Et)};kt(B,Ut=>{A(r)[A(i).type]&&A(r)[A(i).type].length>0&&Ut(z)})}var H=pt(B,4);{var k=Ut=>{var Et=K1(),It=Te(Et),Rt=pt(ft(It),2);Vl(Rt),at(It);var bt=pt(It,2),Gt=pt(ft(bt),2),C=ft(Gt);C.value=C.__value="";var ue=pt(C);{var re=Ht=>{var xt=qe(),I=Te(xt);Mi(I,17,()=>A(i).availableKeys,Qi,(x,N)=>{var q=j1(),$=ft(q,!0);at(q);var K={};mn(()=>{pr(q,A(i).extractKey===A(N)),yi($,A(N)),K!==(K=A(N))&&(q.value=(q.__value=A(N))??"")}),U(x,q)}),U(Ht,xt)};kt(ue,Ht=>{A(i).availableKeys&&A(i).availableKeys.length>0&&Ht(re)})}at(Gt),at(bt),mn(()=>{Or(Rt,A(i).url||""),pr(C,!A(i).extractKey)}),ke("change",Rt,Ht=>e.updateNodeConfig(A(i),{url:Ht.currentTarget.value})),ke("change",Gt,Ht=>e.updateNodeConfig(A(i),{extractKey:Ht.currentTarget.value})),U(Ut,Et)};kt(H,Ut=>{A(i).subType==="api"&&Ut(k)})}var et=pt(H,2);{var tt=Ut=>{var Et=Q1(),It=pt(ft(Et),2),Rt=ft(It);Rt.value=Rt.__value="";var bt=pt(Rt);Mi(bt,17,()=>A(s),Qi,(Gt,C)=>{var ue=J1(),re=ft(ue,!0);at(ue);var Ht={};mn(()=>{pr(ue,A(i).bufferId===A(C)),yi(re,A(C)),Ht!==(Ht=A(C))&&(ue.value=(ue.__value=A(C))??"")}),U(Gt,ue)}),at(It),at(Et),mn(()=>pr(Rt,!A(i).bufferId)),ke("change",It,Gt=>e.updateNodeConfig(A(i),{bufferId:Gt.currentTarget.value})),U(Ut,Et)};kt(et,Ut=>{A(i).subType==="ring-buffer"&&Ut(tt)})}var mt=pt(et,2);{var St=Ut=>{var Et=$1(),It=pt(ft(Et),2);Vl(It),at(Et),mn(()=>Or(It,A(i).capacity||100)),ke("change",It,Rt=>e.updateNodeConfig(A(i),{capacity:parseInt(Rt.currentTarget.value)||100})),U(Ut,Et)};kt(mt,Ut=>{(A(i).subType==="random"||A(i).subType==="math"||A(i).subType==="motion"||A(i).subType==="api")&&Ut(St)})}var gt=pt(mt,2);{var ut=Ut=>{var Et=tv(),It=pt(ft(Et),2),Rt=ft(It);Rt.value=Rt.__value="add";var bt=pt(Rt);bt.value=bt.__value="multiply",at(It),at(Et),mn(()=>{pr(Rt,A(i).operation==="add"),pr(bt,A(i).operation==="multiply")}),ke("change",It,Gt=>e.updateNodeConfig(A(i),{operation:Gt.currentTarget.value})),U(Ut,Et)};kt(gt,Ut=>{A(i).subType==="math"&&Ut(ut)})}var zt=pt(gt,2);{var pe=Ut=>{var Et=ev(),It=pt(ft(Et),2);Za(It),at(Et),mn(Rt=>Or(It,Rt),[()=>(A(i).data?Array.from(A(i).data):[]).join(", ")]),ke("change",It,Rt=>e.updateNodeConfig(A(i),{data:Rt.currentTarget.value.split(",").map(bt=>parseFloat(bt.trim())||0)})),U(Ut,Et)};kt(zt,Ut=>{A(i).subType==="static-array"&&Ut(pe)})}var j=pt(zt,2);{var st=Ut=>{var Et=iv(),It=pt(ft(Et),2);Mi(It,21,()=>a,Qi,(Rt,bt)=>{var Gt=nv(),C=ft(Gt,!0);at(Gt);var ue={};mn(()=>{pr(Gt,A(i).textureId===A(bt)),yi(C,A(bt)),ue!==(ue=A(bt))&&(Gt.value=(Gt.__value=A(bt))??"")}),U(Rt,Gt)}),at(It),at(Et),ke("change",It,Rt=>e.updateNodeConfig(A(i),{textureId:Rt.currentTarget.value})),U(Ut,Et)};kt(j,Ut=>{(A(i).subType==="sprite"||A(i).subType==="mesh")&&Ut(st)})}var nt=pt(j,2);{var le=Ut=>{var Et=rv(),It=Te(Et),Rt=pt(ft(It),2);Za(Rt),at(It);var bt=pt(It,2),Gt=pt(ft(bt),2);Za(Gt),at(bt);var C=pt(bt,2),ue=pt(ft(C),2);Za(ue),at(C),mn((re,Ht,xt)=>{Or(Rt,re),Or(Gt,Ht),Or(ue,xt)},[()=>(A(i).vertices?Array.from(A(i).vertices):[]).join(", "),()=>(A(i).indices?Array.from(A(i).indices):[]).join(", "),()=>(A(i).uvs?Array.from(A(i).uvs):[]).join(", ")]),ke("change",Rt,re=>e.updateNodeConfig(A(i),{vertices:new Float32Array(re.currentTarget.value.split(",").map(Ht=>parseFloat(Ht.trim())||0))})),ke("change",Gt,re=>e.updateNodeConfig(A(i),{indices:new Uint16Array(re.currentTarget.value.split(",").map(Ht=>parseInt(Ht.trim())||0))})),ke("change",ue,re=>e.updateNodeConfig(A(i),{uvs:new Float32Array(re.currentTarget.value.split(",").map(Ht=>parseFloat(Ht.trim())||0))})),U(Ut,Et)};kt(nt,Ut=>{A(i).subType==="mesh"&&Ut(le)})}var Zt=pt(nt,2);{var ne=Ut=>{var Et=ov(),It=pt(Te(Et),2),Rt=pt(ft(It),2),bt=ft(Rt);Mi(bt,17,()=>A(i).inputIds,Qi,(re,Ht,xt)=>{const I=ht(()=>t.nodes.find(Ot=>Ot.id===A(Ht)));var x=sv(),N=ft(x),q=ft(N),$=ft(q,!0);at(q);var K=pt(q);at(N);var wt=pt(N,2),ct=ft(wt);zh(ct,{size:12,weight:"bold"}),at(wt),at(x),mn(Ot=>{yi($,Ot),yi(K,` ${(A(I)?A(I).name||A(I).id:A(Ht))??""}`)},[()=>h(A(i).subType,xt)]),ke("click",wt,()=>e.disconnectInput(A(i).id,A(Ht))),U(re,x)});var Gt=pt(bt,2),C=ft(Gt);C.value=C.__value="";var ue=pt(C);Mi(ue,17,()=>A(p),Qi,(re,Ht)=>{var xt=av(),I=ft(xt);at(xt);var x={};mn(()=>{yi(I,`${(A(Ht).name||A(Ht).id)??""} (${A(Ht).type??""})`),x!==(x=A(Ht).id)&&(xt.value=(xt.__value=A(Ht).id)??"")}),U(re,xt)}),at(Gt),at(Rt),at(It),ke("change",Gt,c),U(Ut,Et)};kt(Zt,Ut=>{A(i).inputIds!==void 0&&Ut(ne)})}at(D),at(g),mn(()=>{yi(T,A(i).name||A(i).id),yo(R,1,`badge ${A(m)??""}`),yi(v,A(i).type),Or(L,A(i).name||""),wr(L,"placeholder",A(i).id)}),ke("click",M,()=>ye.selectedNodeId=null),ke("change",L,Ut=>e.updateNodeConfig(A(i),{name:Ut.currentTarget.value})),Xm(3,g,()=>Ym,()=>({y:50,duration:250})),U(S,g)};kt(_,S=>{A(i)&&S(y)})}U(n,d),Ve()}Sl(["click","change"]);var uv=Q('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),hv=Q('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path"></path>'),dv=Q('<svg class="data-connections-layer" style="pointer-events: none; z-index: 1;"><defs></defs><!></svg>');function fv(n,t){Be(t,!0);let e,i=un(Ls([]));const r=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4"];function s(){if(!e)return;const c=e.getBoundingClientRect();if(c.width===0||c.height===0)return;const h=new Map;for(let R=0;R<t.connections.length;R++){const v=t.connections[R];h.has(v.sourceId)||h.set(v.sourceId,[]),h.get(v.sourceId).push(v.targetId)}const p=[];for(let R=0;R<t.nodes.length;R++){const v=t.nodes[R],M=[v.id],W=new Set,D=new Set;for(;M.length>0;){const V=M.shift(),L=h.get(V)||[];for(let B=0;B<L.length;B++){const z=L[B];if(W.has(z))continue;W.add(z);const H=t.nodes.find(k=>k.id===z);H&&(H.type==="subject"?M.push(z):D.add(z))}}for(const V of D)p.push({sourceId:v.id,targetId:V})}const d=new Map;for(let R=0;R<p.length;R++){const v=p[R],M=v.sourceId+"->"+v.targetId;d.set(M,v)}const y=Array.from(d.values()).sort((R,v)=>R.sourceId.localeCompare(v.sourceId)),S=new Map,m=new Map;for(let R=0;R<y.length;R++){const v=y[R];S.set(v.sourceId,(S.get(v.sourceId)||0)+1),m.set(v.targetId,(m.get(v.targetId)||0)+1)}const g=new Map,E=new Map,w=[];let u=1/0;for(let R=0;R<y.length;R++){const v=y[R],M=ye.nodeElements.get(v.sourceId),W=ye.nodeElements.get(v.targetId);if(M&&W){const D=M.getBoundingClientRect(),V=W.getBoundingClientRect(),L=S.get(v.sourceId)||1,B=g.get(v.sourceId)||0;g.set(v.sourceId,B+1);const z=m.get(v.targetId)||1,H=E.get(v.targetId)||0;E.set(v.targetId,H+1);const k=(B-(L-1)/2)*4,et=(H-(z-1)/2)*4,tt=D.top+D.height/2-c.top+k,mt=D.left-c.left-2,St=V.top+V.height/2-c.top+et,gt=V.left-c.left-2,ut=Math.min(tt,St),zt=Math.max(tt,St),pe=zt-ut,j=Math.min(mt,gt)-12;j<u&&(u=j),w.push({id:`${v.sourceId}-${v.targetId}-${R}`,startX:mt,startY:tt,endX:gt,endY:St,minY:ut,maxY:zt,length:pe,baseX:j,colorIndex:R%r.length,trackIndex:0})}}u===1/0&&(u=0),w.sort((R,v)=>R.length-v.length);const f=[];for(let R=0;R<w.length;R++){const v=w[R];let M=!1;for(let W=0;W<f.length;W++){const D=f[W];let V=!1;for(let L=0;L<D.length;L++){const B=D[L];if(v.minY+1<B.maxY&&v.maxY-1>B.minY){V=!0;break}}if(!V){D.push({minY:v.minY,maxY:v.maxY}),v.trackIndex=W,M=!0;break}}M||(f.push([{minY:v.minY,maxY:v.maxY}]),v.trackIndex=f.length-1)}const T=[];for(let R=0;R<w.length;R++){const v=w[R],M=u-v.trackIndex*6;let W="";Math.abs(v.startY-v.endY)<2?W=`M ${v.startX} ${v.startY} L ${v.endX} ${v.endY}`:W=`M ${v.startX} ${v.startY} L ${M} ${v.startY} L ${M} ${v.endY} L ${v.endX} ${v.endY}`,T.push({id:v.id,path:W,color:r[v.colorIndex],markerId:`arrow-${v.colorIndex}`})}$e(i,T,!0)}bl(()=>{const c=new ResizeObserver(s);c.observe(document.body),window.addEventListener("scroll",s,!0);const h=setInterval(s,100);return()=>{c.disconnect(),window.removeEventListener("scroll",s,!0),clearInterval(h)}});var a=dv(),o=ft(a);Mi(o,21,()=>r,Qi,(c,h,p)=>{var d=uv();wr(d,"id",`arrow-${p}`);var _=ft(d);at(d),mn(()=>wr(_,"fill",A(h))),U(c,d)}),at(o);var l=pt(o);Mi(l,17,()=>A(i),c=>c.id,(c,h)=>{var p=hv();mn(()=>{wr(p,"d",A(h).path),wr(p,"stroke",A(h).color),wr(p,"marker-end",`url(#${A(h).markerId??""})`)}),U(c,p)}),at(a),Ma(a,c=>e=c,()=>e),U(n,a),Ve()}var pv=De('<div class="palette-overlay" role="presentation"></div>'),mv=Q('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>'),gv=De('<div class="editor"><div class="editor-content"><div class="editor-header"><h3>Graph Editor</h3> <div class="palette-container"><button class="action-btn" title="Add Root Node"><!></button></div></div> <div class="tree-wrapper"><!> <div class="tree"></div> <!></div></div> <!> <!> <!></div>');function _v(n,t){Be(t,!0);let e=un(Ls([])),i=un(Ls([]));const r=Ls({activeId:null,x:0,y:0});Oo("palette-state",r);let s=ht(()=>A(e).filter(L=>!L.parentId)),a=un(0),o=un(0);function l(){const L=Wt.request("GET_GRAPH_STATE",void 0);L&&($e(e,L.nodes,!0),$e(i,L.connections,!0))}bl(()=>{l(),Wt.on("GRAPH_UPDATED",l)}),pf(()=>{Wt.off("GRAPH_UPDATED",l)});function c(L){L.stopPropagation();const B=L.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=B.left,r.y=B.bottom+4)}const h={removeNode:L=>{Wt.request("REMOVE_NODE",{id:L}),ye.selectedNodeId===L&&(ye.selectedNodeId=null)},addNode:(L,B)=>{const z=B+"-"+Math.random().toString(36).substring(2,6),H=B==="subject"?"default":"dummy",k=Wt.request("CREATE_NODE",{id:z,type:B,subType:H,parentId:L||void 0});k&&(Wt.request("REGISTER_NODE",{node:k}),r.activeId=null,ye.selectedNodeId=z)},updateNodeConfig:(L,B)=>{const z={name:L.name,capacity:L.capacity,operation:L.operation,textureId:L.textureId,bufferId:L.bufferId,url:L.url,data:L.data?Array.from(L.data):void 0,vertices:L.vertices,indices:L.indices,uvs:L.uvs,xInputId:L.xInputId,yInputId:L.yInputId,...B},H=Wt.request("CREATE_NODE",{id:L.id,type:L.type,subType:L.subType||"dummy",parentId:L.parentId,config:z});H&&("inputIds"in L&&"inputIds"in H&&(H.inputIds=[...L.inputIds]),Wt.request("REGISTER_NODE",{node:H}))},changeNodeSubType:(L,B)=>{const z=Wt.request("CREATE_NODE",{id:L.id,type:L.type,subType:B,parentId:L.parentId,config:{}});z&&("inputIds"in L&&"inputIds"in z&&(z.inputIds=[...L.inputIds]),Wt.request("REGISTER_NODE",{node:z}))},connectInput:(L,B)=>{Wt.request("CONNECT_NODES",{sourceId:B,targetId:L})},disconnectInput:(L,B)=>{Wt.request("DISCONNECT_NODES",{sourceId:B,targetId:L})}};Oo("graph-actions",h);function p(L){const B=r.activeId==="root"?null:r.activeId;h.addNode(B,L)}function d(L){ye.dragConnectionSourceId&&($e(a,L.clientX,!0),$e(o,L.clientY,!0))}function _(L){ye.dragConnectionSourceId&&(ye.dragConnectionTargetId&&ye.dragConnectionTargetId!==ye.dragConnectionSourceId&&h.connectInput(ye.dragConnectionTargetId,ye.dragConnectionSourceId),ye.dragConnectionSourceId=null,ye.dragConnectionTargetId=null)}var y=gv();Sa("click",Bl,()=>r.activeId=null),Sa("pointermove",Bl,d),Sa("pointerup",Bl,_);var S=ft(y),m=ft(S),g=pt(ft(m),2),E=ft(g),w=ft(E);Af(w,{size:12,weight:"bold"}),at(E),at(g),at(m);var u=pt(m,2),f=ft(u);fv(f,{get connections(){return A(i)},get nodes(){return A(e)}});var T=pt(f,2);Mi(T,21,()=>A(s),Qi,(L,B)=>{Tf(L,{get node(){return A(B)},get nodes(){return A(e)}})}),at(T);var R=pt(T,2);{var v=L=>{var B=pv();ke("click",B,()=>r.activeId=null),U(L,B)};kt(R,L=>{r.activeId&&L(v)})}at(u),at(S);var M=pt(S,2);cv(M,{get nodes(){return A(e)}});var W=pt(M,2);{let L=ht(()=>r.activeId!==null);X1(W,{get show(){return A(L)},get x(){return r.x},get y(){return r.y},onAdd:p})}var D=pt(W,2);{var V=L=>{const B=ht(()=>ye.dragStartX),z=ht(()=>ye.dragStartY),H=ht(()=>Math.min(A(B),A(a))-20);var k=mv(),et=pt(ft(k));at(k),mn(()=>wr(et,"d",`M ${A(B)} ${A(z)} L ${A(H)} ${A(z)} L ${A(H)} ${A(o)} L ${A(a)} ${A(o)}`)),U(L,k)};kt(D,L=>{ye.dragConnectionSourceId&&L(V)})}at(y),ke("click",E,c),U(n,y),Ve()}Sl(["click"]);const Gu="183",vv=0,Wh=1,yv=2,xo=1,xv=2,ha=3,Rr=0,Bn=1,ui=2,nr=0,Ps=1,Zh=2,Xh=3,Yh=4,Sv=5,Xr=100,bv=101,Mv=102,Ev=103,Av=104,wv=200,Tv=201,Iv=202,Rv=203,Uc=204,Oc=205,Cv=206,Dv=207,Lv=208,Pv=209,Nv=210,Fv=211,Uv=212,Ov=213,Bv=214,Bc=0,Vc=1,zc=2,zs=3,Hc=4,kc=5,Gc=6,Wc=7,If=0,Vv=1,zv=2,Pi=0,Rf=1,Cf=2,Df=3,Lf=4,Pf=5,Nf=6,Ff=7,Uf=300,Qr=301,Hs=302,Hl=303,kl=304,Ml=306,Zc=1e3,er=1001,Xc=1002,_n=1003,Hv=1004,Xa=1005,Sn=1006,Gl=1007,qr=1008,ti=1009,Of=1010,Bf=1011,Ea=1012,Wu=1013,Ui=1014,Ri=1015,sr=1016,Zu=1017,Xu=1018,Aa=1020,Vf=35902,zf=35899,Hf=1021,kf=1022,di=1023,ar=1026,jr=1027,Gf=1028,Yu=1029,ks=1030,qu=1031,ju=1033,So=33776,bo=33777,Mo=33778,Eo=33779,Yc=35840,qc=35841,jc=35842,Kc=35843,Jc=36196,Qc=37492,$c=37496,tu=37488,eu=37489,nu=37490,iu=37491,ru=37808,su=37809,au=37810,ou=37811,lu=37812,cu=37813,uu=37814,hu=37815,du=37816,fu=37817,pu=37818,mu=37819,gu=37820,_u=37821,vu=36492,yu=36494,xu=36495,Su=36283,bu=36284,Mu=36285,Eu=36286,kv=3200,Gv=0,Wv=1,Tr="",Kn="srgb",Gs="srgb-linear",Vo="linear",Ue="srgb",as=7680,qh=519,Zv=512,Xv=513,Yv=514,Ku=515,qv=516,jv=517,Ju=518,Kv=519,jh=35044,Kh="300 es",Ci=2e3,zo=2001;function Jv(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qv(){const n=Ho("canvas");return n.style.display="block",n}const Jh={};function Qh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Wf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function oe(...n){n=Wf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ae(...n){n=Wf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ko(...n){const t=n.join(" ");t in Jh||(Jh[t]=!0,oe(...n))}function $v(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const ty={[Bc]:Vc,[zc]:Gc,[Hc]:Wc,[zs]:kc,[Vc]:Bc,[Gc]:zc,[Wc]:Hc,[kc]:zs};class Ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=Math.PI/180,Au=180/Math.PI;function Pa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function ey(n,t){return(n%t+t)%t}function Zl(n,t,e){return(1-e)*n+e*t}function na(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(t=0,e=0){Ge.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Js{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],_=s[a+1],y=s[a+2],S=s[a+3];if(p!==S||l!==d||c!==_||h!==y){let m=l*d+c*_+h*y+p*S;m<0&&(d=-d,_=-_,y=-y,S=-S,m=-m);let g=1-o;if(m<.9995){const E=Math.acos(m),w=Math.sin(E);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w,l=l*g+d*o,c=c*g+_*o,h=h*g+y*o,p=p*g+S*o}else{l=l*g+d*o,c=c*g+_*o,h=h*g+y*o,p=p*g+S*o;const E=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=E,c*=E,h*=E,p*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],d=s[a+1],_=s[a+2],y=s[a+3];return t[e]=o*y+h*p+l*_-c*d,t[e+1]=l*y+h*d+c*p-o*_,t[e+2]=c*y+h*_+o*d-l*p,t[e+3]=h*y-o*p-l*d-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),_=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*h*p+c*_*y,this._y=c*_*p-d*h*y,this._z=c*h*y+d*_*p,this._w=c*h*p-d*_*y;break;case"YXZ":this._x=d*h*p+c*_*y,this._y=c*_*p-d*h*y,this._z=c*h*y-d*_*p,this._w=c*h*p+d*_*y;break;case"ZXY":this._x=d*h*p-c*_*y,this._y=c*_*p+d*h*y,this._z=c*h*y+d*_*p,this._w=c*h*p-d*_*y;break;case"ZYX":this._x=d*h*p-c*_*y,this._y=c*_*p+d*h*y,this._z=c*h*y-d*_*p,this._w=c*h*p+d*_*y;break;case"YZX":this._x=d*h*p+c*_*y,this._y=c*_*p+d*h*y,this._z=c*h*y-d*_*p,this._w=c*h*p-d*_*y;break;case"XZY":this._x=d*h*p-c*_*y,this._y=c*_*p-d*h*y,this._z=c*h*y+d*_*p,this._w=c*h*p+d*_*y;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=i+o+p;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new X,$h=new Js;class he{constructor(t,e,i,r,s,a,o,l,c){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],_=i[5],y=i[8],S=r[0],m=r[3],g=r[6],E=r[1],w=r[4],u=r[7],f=r[2],T=r[5],R=r[8];return s[0]=a*S+o*E+l*f,s[3]=a*m+o*w+l*T,s[6]=a*g+o*u+l*R,s[1]=c*S+h*E+p*f,s[4]=c*m+h*w+p*T,s[7]=c*g+h*u+p*R,s[2]=d*S+_*E+y*f,s[5]=d*m+_*w+y*T,s[8]=d*g+_*u+y*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*s,_=c*s-a*l,y=e*p+i*d+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return t[0]=p*S,t[1]=(r*c-h*i)*S,t[2]=(o*i-r*a)*S,t[3]=d*S,t[4]=(h*e-r*l)*S,t[5]=(r*s-o*e)*S,t[6]=_*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new he,td=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const n={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ue&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ue&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?Vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gs]:{primaries:t,whitePoint:i,transfer:Vo,toXYZ:td,fromXYZ:ed,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:td,fromXYZ:ed,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),n}const Me=ny();function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class iy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=Ho("canvas")),os.width=t.width,os.height=t.height;const r=os.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=os}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ho("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ir(e[i]/255)*255):e[i]=ir(e[i]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ry=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Pa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ql(r[a].image)):s.push(ql(r[a]))}else s=ql(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let sy=0;const jl=new X;class Ln extends Ks{constructor(t=Ln.DEFAULT_IMAGE,e=Ln.DEFAULT_MAPPING,i=er,r=er,s=Sn,a=qr,o=di,l=ti,c=Ln.DEFAULT_ANISOTROPY,h=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Pa(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zc:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case Xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zc:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case Xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Uf;Ln.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,e=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],_=l[5],y=l[9],S=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-S)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+S)<.1&&Math.abs(y+m)<.1&&Math.abs(c+_+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,u=(_+1)/2,f=(g+1)/2,T=(h+d)/4,R=(p+S)/4,v=(y+m)/4;return w>u&&w>f?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=R/i):u>f?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=T/r,s=v/r):f<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(f),i=R/s,r=v/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-y)*(m-y)+(p-S)*(p-S)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-y)/E,this.y=(p-S)/E,this.z=(d-h)/E,this.w=Math.acos((c+_+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ay extends Ks{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Ln(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Qu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends ay{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zf extends Ln{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Ln{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t,e,i,r,s,a,o,l,c,h,p,d,_,y,S,m){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,p,d,_,y,S,m)}set(t,e,i,r,s,a,o,l,c,h,p,d,_,y,S,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=d,g[3]=_,g[7]=y,g[11]=S,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const d=a*h,_=a*p,y=o*h,S=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=_+y*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=y+_*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,_=l*p,y=c*h,S=c*p;e[0]=d+S*o,e[4]=y*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=_*o-y,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,_=l*p,y=c*h,S=c*p;e[0]=d-S*o,e[4]=-a*p,e[8]=y+_*o,e[1]=_+y*o,e[5]=a*h,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,_=a*p,y=o*h,S=o*p;e[0]=l*h,e[4]=y*c-_,e[8]=d*c+S,e[1]=l*p,e[5]=S*c+d,e[9]=_*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,_=a*c,y=o*l,S=o*c;e[0]=l*h,e[4]=S-d*p,e[8]=y*p+_,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*p+y,e[10]=d-S*p}else if(t.order==="XZY"){const d=a*l,_=a*c,y=o*l,S=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+S,e[5]=a*h,e[9]=_*p-y,e[2]=y*p-_,e[6]=o*h,e[10]=S*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ly,t,cy)}lookAt(t,e,i){const r=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),gr.crossVectors(i,kn),gr.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),gr.crossVectors(i,kn)),gr.normalize(),Ya.crossVectors(kn,gr),r[0]=gr.x,r[4]=Ya.x,r[8]=kn.x,r[1]=gr.y,r[5]=Ya.y,r[9]=kn.y,r[2]=gr.z,r[6]=Ya.z,r[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],_=i[13],y=i[2],S=i[6],m=i[10],g=i[14],E=i[3],w=i[7],u=i[11],f=i[15],T=r[0],R=r[4],v=r[8],M=r[12],W=r[1],D=r[5],V=r[9],L=r[13],B=r[2],z=r[6],H=r[10],k=r[14],et=r[3],tt=r[7],mt=r[11],St=r[15];return s[0]=a*T+o*W+l*B+c*et,s[4]=a*R+o*D+l*z+c*tt,s[8]=a*v+o*V+l*H+c*mt,s[12]=a*M+o*L+l*k+c*St,s[1]=h*T+p*W+d*B+_*et,s[5]=h*R+p*D+d*z+_*tt,s[9]=h*v+p*V+d*H+_*mt,s[13]=h*M+p*L+d*k+_*St,s[2]=y*T+S*W+m*B+g*et,s[6]=y*R+S*D+m*z+g*tt,s[10]=y*v+S*V+m*H+g*mt,s[14]=y*M+S*L+m*k+g*St,s[3]=E*T+w*W+u*B+f*et,s[7]=E*R+w*D+u*z+f*tt,s[11]=E*v+w*V+u*H+f*mt,s[15]=E*M+w*L+u*k+f*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],_=t[14],y=t[3],S=t[7],m=t[11],g=t[15],E=l*_-c*d,w=o*_-c*p,u=o*d-l*p,f=a*_-c*h,T=a*d-l*h,R=a*p-o*h;return e*(S*E-m*w+g*u)-i*(y*E-m*f+g*T)+r*(y*w-S*f+g*R)-s*(y*u-S*T+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],_=t[11],y=t[12],S=t[13],m=t[14],g=t[15],E=e*o-i*a,w=e*l-r*a,u=e*c-s*a,f=i*l-r*o,T=i*c-s*o,R=r*c-s*l,v=h*S-p*y,M=h*m-d*y,W=h*g-_*y,D=p*m-d*S,V=p*g-_*S,L=d*g-_*m,B=E*L-w*V+u*D+f*W-T*M+R*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=(o*L-l*V+c*D)*z,t[1]=(r*V-i*L-s*D)*z,t[2]=(S*R-m*T+g*f)*z,t[3]=(d*T-p*R-_*f)*z,t[4]=(l*W-a*L-c*M)*z,t[5]=(e*L-r*W+s*M)*z,t[6]=(m*u-y*R-g*w)*z,t[7]=(h*R-d*u+_*w)*z,t[8]=(a*V-o*W+c*v)*z,t[9]=(i*W-e*V-s*v)*z,t[10]=(y*T-S*u+g*E)*z,t[11]=(p*u-h*T-_*E)*z,t[12]=(o*M-a*D-l*v)*z,t[13]=(e*D-i*M+r*v)*z,t[14]=(S*w-y*f-m*E)*z,t[15]=(h*f-p*w+d*E)*z,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,p=o+o,d=s*c,_=s*h,y=s*p,S=a*h,m=a*p,g=o*p,E=l*c,w=l*h,u=l*p,f=i.x,T=i.y,R=i.z;return r[0]=(1-(S+g))*f,r[1]=(_+u)*f,r[2]=(y-w)*f,r[3]=0,r[4]=(_-u)*T,r[5]=(1-(d+g))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(y+w)*R,r[9]=(m-E)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),si.copy(this);const c=1/a,h=1/o,p=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=p,si.elements[9]*=p,si.elements[10]*=p,e.setFromRotationMatrix(si),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Ci,l=!1){const c=this.elements,h=2*s/(e-t),p=2*s/(i-r),d=(e+t)/(e-t),_=(i+r)/(i-r);let y,S;if(l)y=s/(a-s),S=a*s/(a-s);else if(o===Ci)y=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===zo)y=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ci,l=!1){const c=this.elements,h=2/(e-t),p=2/(i-r),d=-(e+t)/(e-t),_=-(i+r)/(i-r);let y,S;if(l)y=1/(a-s),S=a/(a-s);else if(o===Ci)y=-2/(a-s),S=-(a+s)/(a-s);else if(o===zo)y=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ls=new X,si=new on,ly=new X(0,0,0),cy=new X(1,1,1),gr=new X,Ya=new X,kn=new X,nd=new on,id=new Js;class or{constructor(t=0,e=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uy=0;const rd=new X,cs=new Js,Gi=new on,qa=new X,ia=new X,hy=new X,dy=new Js,sd=new X(1,0,0),ad=new X(0,1,0),od=new X(0,0,1),ld={type:"added"},fy={type:"removed"},us={type:"childadded",child:null},Kl={type:"childremoved",child:null};class Xn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new X,e=new or,i=new Js,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new he}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(ad,t)}rotateZ(t){return this.rotateOnAxis(od,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(ad,t)}translateZ(t){return this.translateOnAxis(od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qa.copy(t):qa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ia,qa,this.up):Gi.lookAt(qa,ia,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Gi),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),us.child=t,this.dispatchEvent(us),us.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fy),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,dy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),_=a(t.animations),y=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Xn.DEFAULT_UP=new X(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ja extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),g=this._getHandJoint(c,S);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),_=.02,y=.005;c.inputState.pinching&&d>_+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=_-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(py)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Ql(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Me.workingColorSpace){if(t=ey(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ql(a,s,t+1/3),this.g=Ql(a,s,t),this.b=Ql(a,s,t-1/3)}return Me.colorSpaceToWorking(this,r),this}setStyle(t,e=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){const i=Yf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Me.workingToColorSpace(xn.copy(this),t),Math.round(Se(xn.r*255,0,255))*65536+Math.round(Se(xn.g*255,0,255))*256+Math.round(Se(xn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(xn.copy(this),e);const i=xn.r,r=xn.g,s=xn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Kn){Me.workingToColorSpace(xn.copy(this),t);const e=xn.r,i=xn.g,r=xn.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+e,_r.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_r),t.getHSL(Ka);const i=Zl(_r.h,Ka.h,e),r=Zl(_r.s,Ka.s,e),s=Zl(_r.l,Ka.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ie;Ie.NAMES=Yf;class my extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ai=new X,Wi=new X,$l=new X,Zi=new X,hs=new X,ds=new X,cd=new X,tc=new X,ec=new X,nc=new X,ic=new nn,rc=new nn,sc=new nn;class hi{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ai.subVectors(t,e),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ai.subVectors(r,e),Wi.subVectors(i,e),$l.subVectors(t,e);const a=ai.dot(ai),o=ai.dot(Wi),l=ai.dot($l),c=Wi.dot(Wi),h=Wi.dot($l),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,_=(c*l-o*h)*d,y=(a*h-o*l)*d;return s.set(1-_-y,y,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ic.setScalar(0),rc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ic,s.x),a.addScaledVector(rc,s.y),a.addScaledVector(sc,s.z),a}static isFrontFacing(t,e,i,r){return ai.subVectors(i,e),Wi.subVectors(t,e),ai.cross(Wi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ai.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;hs.subVectors(r,i),ds.subVectors(s,i),tc.subVectors(t,i);const l=hs.dot(tc),c=ds.dot(tc);if(l<=0&&c<=0)return e.copy(i);ec.subVectors(t,r);const h=hs.dot(ec),p=ds.dot(ec);if(h>=0&&p<=h)return e.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(hs,a);nc.subVectors(t,s);const _=hs.dot(nc),y=ds.dot(nc);if(y>=0&&_<=y)return e.copy(s);const S=_*c-l*y;if(S<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(i).addScaledVector(ds,o);const m=h*y-_*p;if(m<=0&&p-h>=0&&_-y>=0)return cd.subVectors(s,r),o=(p-h)/(p-h+(_-y)),e.copy(r).addScaledVector(cd,o);const g=1/(m+S+d);return a=S*g,o=d*g,e.copy(i).addScaledVector(hs,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Na{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ja.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(t.matrixWorld),this.union(Ja)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ra),Qa.subVectors(this.max,ra),fs.subVectors(t.a,ra),ps.subVectors(t.b,ra),ms.subVectors(t.c,ra),vr.subVectors(ps,fs),yr.subVectors(ms,ps),Br.subVectors(fs,ms);let e=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-Br.z,Br.y,vr.z,0,-vr.x,yr.z,0,-yr.x,Br.z,0,-Br.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-Br.y,Br.x,0];return!ac(e,fs,ps,ms,Qa)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,fs,ps,ms,Qa))?!1:($a.crossVectors(vr,yr),e=[$a.x,$a.y,$a.z],ac(e,fs,ps,ms,Qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xi=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,Ja=new Na,fs=new X,ps=new X,ms=new X,vr=new X,yr=new X,Br=new X,ra=new X,Qa=new X,$a=new X,Vr=new X;function ac(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vr.fromArray(n,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=t.dot(Vr),c=e.dot(Vr),h=i.dot(Vr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const sn=new X,to=new Ge;let gy=0;class Fi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=na(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=na(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=na(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=na(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=na(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),i=Nn(i,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jh&&(t.usage=this.usage),t}}class qf extends Fi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class jf extends Fi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class rr extends Fi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const _y=new Na,sa=new X,oc=new X;class $u{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_y.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);const e=sa.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(oc)),this.expandByPoint(sa.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vy=0;const qn=new on,lc=new Xn,gs=new X,Gn=new Na,aa=new Na,pn=new X;class lr extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jv(t)?jf:qf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new he().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rr(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Gn.min,aa.min),Gn.expandByPoint(pn),pn.addVectors(Gn.max,aa.max),Gn.expandByPoint(pn)):(Gn.expandByPoint(aa.min),Gn.expandByPoint(aa.max))}Gn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)pn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pn.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),pn.add(gs)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new X,l[v]=new X;const c=new X,h=new X,p=new X,d=new Ge,_=new Ge,y=new Ge,S=new X,m=new X;function g(v,M,W){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,M),p.fromBufferAttribute(i,W),d.fromBufferAttribute(s,v),_.fromBufferAttribute(s,M),y.fromBufferAttribute(s,W),h.sub(c),p.sub(c),_.sub(d),y.sub(d);const D=1/(_.x*y.y-y.x*_.y);isFinite(D)&&(S.copy(h).multiplyScalar(y.y).addScaledVector(p,-_.y).multiplyScalar(D),m.copy(p).multiplyScalar(_.x).addScaledVector(h,-y.x).multiplyScalar(D),o[v].add(S),o[M].add(S),o[W].add(S),l[v].add(m),l[M].add(m),l[W].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,M=E.length;v<M;++v){const W=E[v],D=W.start,V=W.count;for(let L=D,B=D+V;L<B;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new X,u=new X,f=new X,T=new X;function R(v){f.fromBufferAttribute(r,v),T.copy(f);const M=o[v];w.copy(M),w.sub(f.multiplyScalar(f.dot(M))).normalize(),u.crossVectors(T,M);const D=u.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,D)}for(let v=0,M=E.length;v<M;++v){const W=E[v],D=W.start,V=W.count;for(let L=D,B=D+V;L<B;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,h=new X,p=new X;if(t)for(let d=0,_=t.count;d<_;d+=3){const y=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=e.count;d<_;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h);let _=0,y=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?_=l[S]*o.data.stride+o.offset:_=l[S]*h;for(let g=0;g<h;g++)d[y++]=c[_++]}return new Fi(d,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new lr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const d=c[h],_=t(d,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const _=c[p];h.push(_.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,_=p.length;d<_;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yy=0;class El extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Ps,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Oc,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Yi=new X,cc=new X,eo=new X,xr=new X,uc=new X,no=new X,hc=new X;class xy{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){cc.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(cc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(eo),o=xr.dot(this.direction),l=-xr.dot(eo),c=xr.lengthSq(),h=Math.abs(1-a*a);let p,d,_,y;if(h>0)if(p=a*l-o,d=a*o-l,y=s*h,p>=0)if(d>=-y)if(d<=y){const S=1/h;p*=S,d*=S,_=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;else d<=-y?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+d*(d+2*l)+c):d<=y?(p=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),_=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(cc).addScaledVector(eo,d),_}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,i,r,s){uc.subVectors(e,t),no.subVectors(i,t),hc.crossVectors(uc,no);let a=this.direction.dot(hc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xr.subVectors(this.origin,t);const l=o*this.direction.dot(no.crossVectors(xr,no));if(l<0)return null;const c=o*this.direction.dot(uc.cross(xr));if(c<0||l+c>a)return null;const h=-o*xr.dot(hc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Go extends El{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ud=new on,zr=new xy,io=new $u,hd=new X,ro=new X,so=new X,ao=new X,dc=new X,oo=new X,dd=new X,lo=new X;class pi extends Xn{constructor(t=new lr,e=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(dc.fromBufferAttribute(p,t),a?oo.addScaledVector(dc,h):oo.addScaledVector(dc.sub(e),h))}e.add(oo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),zr.copy(t.ray).recast(t.near),!(io.containsPoint(zr.origin)===!1&&(zr.intersectSphere(io,hd)===null||zr.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(ud.copy(s).invert(),zr.copy(t.ray).applyMatrix4(ud),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,S=d.length;y<S;y++){const m=d[y],g=a[m.materialIndex],E=Math.max(m.start,_.start),w=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let u=E,f=w;u<f;u+=3){const T=o.getX(u),R=o.getX(u+1),v=o.getX(u+2);r=co(this,g,t,i,c,h,p,T,R,v),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,_.start),S=Math.min(o.count,_.start+_.count);for(let m=y,g=S;m<g;m+=3){const E=o.getX(m),w=o.getX(m+1),u=o.getX(m+2);r=co(this,a,t,i,c,h,p,E,w,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,S=d.length;y<S;y++){const m=d[y],g=a[m.materialIndex],E=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let u=E,f=w;u<f;u+=3){const T=u,R=u+1,v=u+2;r=co(this,g,t,i,c,h,p,T,R,v),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let m=y,g=S;m<g;m+=3){const E=m,w=m+1,u=m+2;r=co(this,a,t,i,c,h,p,E,w,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Sy(n,t,e,i,r,s,a,o){let l;if(t.side===Bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Rr,o),l===null)return null;lo.copy(o),lo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(lo);return c<e.near||c>e.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ro),n.getVertexPosition(l,so),n.getVertexPosition(c,ao);const h=Sy(n,t,e,i,ro,so,ao,dd);if(h){const p=new X;hi.getBarycoord(dd,ro,so,ao,p),r&&(h.uv=hi.getInterpolatedAttribute(r,o,l,c,p,new Ge)),s&&(h.uv1=hi.getInterpolatedAttribute(s,o,l,c,p,new Ge)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};hi.getNormal(ro,so,ao,d.normal),h.face=d,h.barycoord=p}return h}class by extends Ln{constructor(t=null,e=1,i=1,r,s,a,o,l,c=_n,h=_n,p,d){super(null,a,o,l,c,h,r,s,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=new X,My=new X,Ey=new he;class Zr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=fc.subVectors(i,e).cross(My.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ey.getNormalMatrix(t),r=this.coplanarPoint(fc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new $u,Ay=new Ge(.5,.5),uo=new X;class Kf{constructor(t=new Zr,e=new Zr,i=new Zr,r=new Zr,s=new Zr,a=new Zr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],d=s[6],_=s[7],y=s[8],S=s[9],m=s[10],g=s[11],E=s[12],w=s[13],u=s[14],f=s[15];if(r[0].setComponents(c-a,_-h,g-y,f-E).normalize(),r[1].setComponents(c+a,_+h,g+y,f+E).normalize(),r[2].setComponents(c+o,_+p,g+S,f+w).normalize(),r[3].setComponents(c-o,_-p,g-S,f-w).normalize(),i)r[4].setComponents(l,d,m,u).normalize(),r[5].setComponents(c-l,_-d,g-m,f-u).normalize();else if(r[4].setComponents(c-l,_-d,g-m,f-u).normalize(),e===Ci)r[5].setComponents(c+l,_+d,g+m,f+u).normalize();else if(e===zo)r[5].setComponents(l,d,m,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){Hr.center.set(0,0,0);const e=Ay.distanceTo(t.center);return Hr.radius=.7071067811865476+e,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(uo.x=r.normal.x>0?t.max.x:t.min.x,uo.y=r.normal.y>0?t.max.y:t.min.y,uo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jf extends Ln{constructor(t=[],e=Qr,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wa extends Ln{constructor(t,e,i=Ui,r,s,a,o=_n,l=_n,c,h=ar,p=1){if(h!==ar&&h!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:p};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wy extends wa{constructor(t,e=Ui,i=Qr,r,s,a=_n,o=_n,l,c=ar){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qf extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fa extends lr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let d=0,_=0;y("z","y","x",-1,-1,i,e,t,a,s,0),y("z","y","x",1,-1,i,e,-t,a,s,1),y("x","z","y",1,1,t,i,e,r,a,2),y("x","z","y",1,-1,t,i,-e,r,a,3),y("x","y","z",1,-1,t,e,i,r,s,4),y("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rr(c,3)),this.setAttribute("normal",new rr(h,3)),this.setAttribute("uv",new rr(p,2));function y(S,m,g,E,w,u,f,T,R,v,M){const W=u/R,D=f/v,V=u/2,L=f/2,B=T/2,z=R+1,H=v+1;let k=0,et=0;const tt=new X;for(let mt=0;mt<H;mt++){const St=mt*D-L;for(let gt=0;gt<z;gt++){const ut=gt*W-V;tt[S]=ut*E,tt[m]=St*w,tt[g]=B,c.push(tt.x,tt.y,tt.z),tt[S]=0,tt[m]=0,tt[g]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(gt/R),p.push(1-mt/v),k+=1}}for(let mt=0;mt<v;mt++)for(let St=0;St<R;St++){const gt=d+St+z*mt,ut=d+St+z*(mt+1),zt=d+(St+1)+z*(mt+1),pe=d+(St+1)+z*mt;l.push(gt,ut,pe),l.push(ut,zt,pe),et+=6}o.addGroup(_,et,M),_+=et,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ua extends lr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=t/o,d=e/l,_=[],y=[],S=[],m=[];for(let g=0;g<h;g++){const E=g*d-a;for(let w=0;w<c;w++){const u=w*p-s;y.push(u,-E,0),S.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<o;E++){const w=E+c*g,u=E+c*(g+1),f=E+1+c*(g+1),T=E+1+c*g;_.push(w,u,T),_.push(u,f,T)}this.setIndex(_),this.setAttribute("position",new rr(y,3)),this.setAttribute("normal",new rr(S,3)),this.setAttribute("uv",new rr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ws(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function In(n){const t={};for(let e=0;e<n.length;e++){const i=Ws(n[e]);for(const r in i)t[r]=i[r]}return t}function Ty(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $f(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const Iy={clone:Ws,merge:In};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends El{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Ty(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Dy extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ly extends El{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Py extends El{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ho=new X,fo=new Js,_i=new X;class tp extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ho,fo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ho,fo,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new X,fd=new Ge,pd=new Ge;class ci extends tp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Au*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Au*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class th extends tp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=-90,vs=1;class Ny extends Xn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(_s,vs,t,e);r.layers=this.layers,this.add(r);const s=new ci(_s,vs,t,e);s.layers=this.layers,this.add(s);const a=new ci(_s,vs,t,e);a.layers=this.layers,this.add(a);const o=new ci(_s,vs,t,e);o.layers=this.layers,this.add(o);const l=new ci(_s,vs,t,e);l.layers=this.layers,this.add(l);const c=new ci(_s,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,_),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Fy extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function md(n,t,e,i){const r=Uy(i);switch(e){case Hf:return n*t;case Gf:return n*t/r.components*r.byteLength;case Yu:return n*t/r.components*r.byteLength;case ks:return n*t*2/r.components*r.byteLength;case qu:return n*t*2/r.components*r.byteLength;case kf:return n*t*3/r.components*r.byteLength;case di:return n*t*4/r.components*r.byteLength;case ju:return n*t*4/r.components*r.byteLength;case So:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mo:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qc:case Kc:return Math.max(n,16)*Math.max(t,8)/4;case Yc:case jc:return Math.max(n,8)*Math.max(t,8)/2;case Jc:case Qc:case tu:case eu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $c:case nu:case iu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case du:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vu:case yu:case xu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Su:case bu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mu:case Eu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uy(n){switch(n){case ti:case Of:return{byteLength:1,components:1};case Ea:case Bf:case sr:return{byteLength:2,components:1};case Zu:case Xu:return{byteLength:2,components:4};case Ui:case Wu:case Ri:return{byteLength:4,components:1};case Vf:case zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);function ep(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Oy(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((_,y)=>_.start-y.start);let d=0;for(let _=1;_<p.length;_++){const y=p[d],S=p[_];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++d,p[d]=S)}p.length=d+1;for(let _=0,y=p.length;_<y;_++){const S=p[_];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
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
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
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
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o2=`#define PI 3.141592653589793
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
} // validated`,l2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c2=`vec3 transformedNormal = objectNormal;
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
#endif`,u2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p2="gl_FragColor = linearToOutputTexel( gl_FragColor );",m2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g2=`#ifdef USE_ENVMAP
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
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
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
#endif`,y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,S2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A2=`#ifdef USE_GRADIENTMAP
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
}`,w2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R2=`uniform bool receiveShadow;
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
#endif`,C2=`#ifdef USE_ENVMAP
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
#endif`,D2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F2=`PhysicalMaterial material;
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
#endif`,U2=`uniform sampler2D dfgLUT;
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
}`,O2=`
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
#endif`,B2=`#if defined( RE_IndirectDiffuse )
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
#endif`,V2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y2=`#if defined( USE_POINTS_UV )
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
#endif`,q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bx=`float getShadowMask() {
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
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,tS=`#define LAMBERT
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
}`,eS=`#define MATCAP
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
}`,nS=`#define MATCAP
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
}`,iS=`#define NORMAL
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
}`,rS=`#define NORMAL
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
}`,sS=`#define PHONG
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
}`,aS=`#define PHONG
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
}`,oS=`#define STANDARD
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
}`,lS=`#define STANDARD
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
}`,cS=`#define TOON
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
}`,uS=`#define TOON
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
}`,hS=`uniform float size;
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,pS=`uniform vec3 color;
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
}`,mS=`uniform float rotation;
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
}`,gS=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:By,alphahash_pars_fragment:Vy,alphamap_fragment:zy,alphamap_pars_fragment:Hy,alphatest_fragment:ky,alphatest_pars_fragment:Gy,aomap_fragment:Wy,aomap_pars_fragment:Zy,batching_pars_vertex:Xy,batching_vertex:Yy,begin_vertex:qy,beginnormal_vertex:jy,bsdfs:Ky,iridescence_fragment:Jy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:e2,clipping_planes_vertex:n2,color_fragment:i2,color_pars_fragment:r2,color_pars_vertex:s2,color_vertex:a2,common:o2,cube_uv_reflection_fragment:l2,defaultnormal_vertex:c2,displacementmap_pars_vertex:u2,displacementmap_vertex:h2,emissivemap_fragment:d2,emissivemap_pars_fragment:f2,colorspace_fragment:p2,colorspace_pars_fragment:m2,envmap_fragment:g2,envmap_common_pars_fragment:_2,envmap_pars_fragment:v2,envmap_pars_vertex:y2,envmap_physical_pars_fragment:C2,envmap_vertex:x2,fog_vertex:S2,fog_pars_vertex:b2,fog_fragment:M2,fog_pars_fragment:E2,gradientmap_pars_fragment:A2,lightmap_pars_fragment:w2,lights_lambert_fragment:T2,lights_lambert_pars_fragment:I2,lights_pars_begin:R2,lights_toon_fragment:D2,lights_toon_pars_fragment:L2,lights_phong_fragment:P2,lights_phong_pars_fragment:N2,lights_physical_fragment:F2,lights_physical_pars_fragment:U2,lights_fragment_begin:O2,lights_fragment_maps:B2,lights_fragment_end:V2,logdepthbuf_fragment:z2,logdepthbuf_pars_fragment:H2,logdepthbuf_pars_vertex:k2,logdepthbuf_vertex:G2,map_fragment:W2,map_pars_fragment:Z2,map_particle_fragment:X2,map_particle_pars_fragment:Y2,metalnessmap_fragment:q2,metalnessmap_pars_fragment:j2,morphinstance_vertex:K2,morphcolor_vertex:J2,morphnormal_vertex:Q2,morphtarget_pars_vertex:$2,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:rx,normal_vertex:sx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:hx,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:xx,shadowmap_vertex:Sx,shadowmask_pars_fragment:bx,skinbase_vertex:Mx,skinning_pars_vertex:Ex,skinning_vertex:Ax,skinnormal_vertex:wx,specularmap_fragment:Tx,specularmap_pars_fragment:Ix,tonemapping_fragment:Rx,tonemapping_pars_fragment:Cx,transmission_fragment:Dx,transmission_pars_fragment:Lx,uv_pars_fragment:Px,uv_pars_vertex:Nx,uv_vertex:Fx,worldpos_vertex:Ux,background_vert:Ox,background_frag:Bx,backgroundCube_vert:Vx,backgroundCube_frag:zx,cube_vert:Hx,cube_frag:kx,depth_vert:Gx,depth_frag:Wx,distance_vert:Zx,distance_frag:Xx,equirect_vert:Yx,equirect_frag:qx,linedashed_vert:jx,linedashed_frag:Kx,meshbasic_vert:Jx,meshbasic_frag:Qx,meshlambert_vert:$x,meshlambert_frag:tS,meshmatcap_vert:eS,meshmatcap_frag:nS,meshnormal_vert:iS,meshnormal_frag:rS,meshphong_vert:sS,meshphong_frag:aS,meshphysical_vert:oS,meshphysical_frag:lS,meshtoon_vert:cS,meshtoon_frag:uS,points_vert:hS,points_frag:dS,shadow_vert:fS,shadow_frag:pS,sprite_vert:mS,sprite_frag:gS},_t={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ei={basic:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:In([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:In([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ie(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:In([_t.points,_t.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:In([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:In([_t.common,_t.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:In([_t.sprite,_t.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:In([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:In([_t.lights,_t.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ei.physical={uniforms:In([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const po={r:0,b:0,g:0},kr=new or,_S=new on;function vS(n,t,e,i,r,s){const a=new Ie(0);let o=r===!0?0:1,l,c,h=null,p=0,d=null;function _(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const u=E.backgroundBlurriness>0;w=t.get(w,u)}return w}function y(E){let w=!1;const u=_(E);u===null?m(a,o):u&&u.isColor&&(m(u,1),w=!0);const f=n.xr.getEnvironmentBlendMode();f==="additive"?e.buffers.color.setClear(0,0,0,1,s):f==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,w){const u=_(w);u&&(u.isCubeTexture||u.mapping===Ml)?(c===void 0&&(c=new pi(new Fa(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ws(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(f,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),kr.copy(w.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_S.makeRotationFromEuler(kr)),c.material.toneMapped=Me.getTransfer(u.colorSpace)!==Ue,(h!==u||p!==u.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=u,p=u.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new pi(new Ua(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ws(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Me.getTransfer(u.colorSpace)!==Ue,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(h!==u||p!==u.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=u,p=u.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,w){E.getRGB(po,$f(n)),e.buffers.color.setClear(po.r,po.g,po.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:y,addToRenderList:S,dispose:g}}function yS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,V,L,B,z){let H=!1;const k=p(D,B,L,V);s!==k&&(s=k,c(s.object)),H=_(D,B,L,z),H&&y(D,B,L,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,u(D,V,L,B),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function p(D,V,L,B){const z=B.wireframe===!0;let H=i[V.id];H===void 0&&(H={},i[V.id]=H);const k=D.isInstancedMesh===!0?D.id:0;let et=H[k];et===void 0&&(et={},H[k]=et);let tt=et[L.id];tt===void 0&&(tt={},et[L.id]=tt);let mt=tt[z];return mt===void 0&&(mt=d(l()),tt[z]=mt),mt}function d(D){const V=[],L=[],B=[];for(let z=0;z<e;z++)V[z]=0,L[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:L,attributeDivisors:B,object:D,attributes:{},index:null}}function _(D,V,L,B){const z=s.attributes,H=V.attributes;let k=0;const et=L.getAttributes();for(const tt in et)if(et[tt].location>=0){const St=z[tt];let gt=H[tt];if(gt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),St===void 0||St.attribute!==gt||gt&&St.data!==gt.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function y(D,V,L,B){const z={},H=V.attributes;let k=0;const et=L.getAttributes();for(const tt in et)if(et[tt].location>=0){let St=H[tt];St===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(St=D.instanceColor));const gt={};gt.attribute=St,St&&St.data&&(gt.data=St.data),z[tt]=gt,k++}s.attributes=z,s.attributesNum=k,s.index=B}function S(){const D=s.newAttributes;for(let V=0,L=D.length;V<L;V++)D[V]=0}function m(D){g(D,0)}function g(D,V){const L=s.newAttributes,B=s.enabledAttributes,z=s.attributeDivisors;L[D]=1,B[D]===0&&(n.enableVertexAttribArray(D),B[D]=1),z[D]!==V&&(n.vertexAttribDivisor(D,V),z[D]=V)}function E(){const D=s.newAttributes,V=s.enabledAttributes;for(let L=0,B=V.length;L<B;L++)V[L]!==D[L]&&(n.disableVertexAttribArray(L),V[L]=0)}function w(D,V,L,B,z,H,k){k===!0?n.vertexAttribIPointer(D,V,L,z,H):n.vertexAttribPointer(D,V,L,B,z,H)}function u(D,V,L,B){S();const z=B.attributes,H=L.getAttributes(),k=V.defaultAttributeValues;for(const et in H){const tt=H[et];if(tt.location>=0){let mt=z[et];if(mt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){const St=mt.normalized,gt=mt.itemSize,ut=t.get(mt);if(ut===void 0)continue;const zt=ut.buffer,pe=ut.type,j=ut.bytesPerElement,st=pe===n.INT||pe===n.UNSIGNED_INT||mt.gpuType===Wu;if(mt.isInterleavedBufferAttribute){const nt=mt.data,le=nt.stride,Zt=mt.offset;if(nt.isInstancedInterleavedBuffer){for(let ne=0;ne<tt.locationSize;ne++)g(tt.location+ne,nt.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ne=0;ne<tt.locationSize;ne++)m(tt.location+ne);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let ne=0;ne<tt.locationSize;ne++)w(tt.location+ne,gt/tt.locationSize,pe,St,le*j,(Zt+gt/tt.locationSize*ne)*j,st)}else{if(mt.isInstancedBufferAttribute){for(let nt=0;nt<tt.locationSize;nt++)g(tt.location+nt,mt.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let nt=0;nt<tt.locationSize;nt++)m(tt.location+nt);n.bindBuffer(n.ARRAY_BUFFER,zt);for(let nt=0;nt<tt.locationSize;nt++)w(tt.location+nt,gt/tt.locationSize,pe,St,gt*j,gt/tt.locationSize*nt*j,st)}}else if(k!==void 0){const St=k[et];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(tt.location,St);break;case 3:n.vertexAttrib3fv(tt.location,St);break;case 4:n.vertexAttrib4fv(tt.location,St);break;default:n.vertexAttrib1fv(tt.location,St)}}}}E()}function f(){M();for(const D in i){const V=i[D];for(const L in V){const B=V[L];for(const z in B){const H=B[z];for(const k in H)h(H[k].object),delete H[k];delete B[z]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const V=i[D.id];for(const L in V){const B=V[L];for(const z in B){const H=B[z];for(const k in H)h(H[k].object),delete H[k];delete B[z]}}delete i[D.id]}function R(D){for(const V in i){const L=i[V];for(const B in L){const z=L[B];if(z[D.id]===void 0)continue;const H=z[D.id];for(const k in H)h(H[k].object),delete H[k];delete z[D.id]}}}function v(D){for(const V in i){const L=i[V],B=D.isInstancedMesh===!0?D.id:0,z=L[B];if(z!==void 0){for(const H in z){const k=z[H];for(const et in k)h(k[et].object),delete k[et];delete z[H]}delete L[B],Object.keys(L).length===0&&delete i[V]}}}function M(){W(),a=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:W,dispose:f,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function xS(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=h[y];e.update(_,i,1)}function l(c,h,p,d){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<c.length;y++)a(c[y],h[y],d[y]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,p);let y=0;for(let S=0;S<p;S++)y+=h[S]*d[S];e.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function SS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==di&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ri&&!v)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:u,maxSamples:f,samples:T}}function bS(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Zr,o=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const _=p.length!==0||d||i!==0||r;return r=d,i=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,_){const y=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,g=n.get(p);if(!r||y===null||y.length===0||s&&!m)s?h(null):c();else{const E=s?0:i,w=E*4;let u=g.clippingState||null;l.value=u,u=h(y,d,w,_);for(let f=0;f!==w;++f)u[f]=e[f];g.clippingState=u,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,d,_,y){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,y!==!0||m===null){const g=_+S*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,u=_;w!==S;++w,u+=4)a.copy(p[w]).applyMatrix4(E,o),a.normal.toArray(m,u),m[u+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Ir=4,gd=[.125,.215,.35,.446,.526,.582],Yr=20,MS=256,oa=new th,_d=new Ie;let pc=null,mc=0,gc=0,_c=!1;const ES=new X;class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=ES}=s;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qr||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:sr,format:di,colorSpace:Gs,depthBuffer:!1},r=yd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AS(s)),this._blurMaterial=TS(s,t,e),this._ggxMaterial=wS(s,t,e)}return r}_compileMaterial(t){const e=new pi(new lr,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,i,r,s){const l=new ci(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,_=p.toneMapping;p.getClearColor(_d),p.toneMapping=Pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Fa,new Go({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let g=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,g=!0):(m.color.copy(_d),g=!0);for(let w=0;w<6;w++){const u=w%3;u===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):u===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const f=this._cubeSize;ys(r,u*f,w>2?f:0,f,f),p.setRenderTarget(r),g&&p.render(S,l),p.render(t,l)}p.toneMapping=_,p.autoClear=d,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Qr||t.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,oa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),d=0+c*1.25,_=p*d,{_lodMax:y}=this,S=this._sizeLods[i],m=3*S*(i>y-Ir?i-y+Ir:0),g=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=y-e,ys(s,m,g,3*S,2*S),r.setRenderTarget(s),r.render(o,oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,ys(t,m,g,3*S,2*S),r.setRenderTarget(t),r.render(o,oa)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const d=c.uniforms,_=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Yr-1),S=s/y,m=isFinite(s)?1+Math.floor(h*S):Yr;m>Yr&&oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const g=[];let E=0;for(let R=0;R<Yr;++R){const v=R/S,M=Math.exp(-v*v/2);g.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<g.length;R++)g[R]=g[R]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=y,d.mipInt.value=w-i;const u=this._sizeLods[r],f=3*u*(r>w-Ir?r-w+Ir:0),T=4*(this._cubeSize-u);ys(e,f,T,3*u,2*u),l.setRenderTarget(e),l.render(p,oa)}}function AS(n){const t=[],e=[],i=[];let r=n;const s=n-Ir+1+gd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ir?l=gd[a-n+Ir-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,y=6,S=3,m=2,g=1,E=new Float32Array(S*y*_),w=new Float32Array(m*y*_),u=new Float32Array(g*y*_);for(let T=0;T<_;T++){const R=T%3*2/3-1,v=T>2?0:-1,M=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];E.set(M,S*y*T),w.set(d,m*y*T);const W=[T,T,T,T,T,T];u.set(W,g*y*T)}const f=new lr;f.setAttribute("position",new Fi(E,S)),f.setAttribute("uv",new Fi(w,m)),f.setAttribute("faceIndex",new Fi(u,g)),i.push(new pi(f,null)),r>Ir&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function yd(n,t,e){const i=new Ni(n,t,e);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function wS(n,t,e){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function TS(n,t,e){const i=new Float32Array(Yr),r=new X(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Al(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function xd(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Sd(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}class np extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Jf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:nr});s.uniforms.tEquirect.value=e;const a=new pi(r,s),o=e.minFilter;return e.minFilter===qr&&(e.minFilter=Sn),new Ny(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function IS(n){let t=new WeakMap,e=new WeakMap,i=null;function r(d,_=!1){return d==null?null:_?a(d):s(d)}function s(d){if(d&&d.isTexture){const _=d.mapping;if(_===Hl||_===kl)if(t.has(d)){const y=t.get(d).texture;return o(y,d.mapping)}else{const y=d.image;if(y&&y.height>0){const S=new np(y.height);return S.fromEquirectangularTexture(n,d),t.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const _=d.mapping,y=_===Hl||_===kl,S=_===Qr||_===Hs;if(y||S){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new vd(n)),m=y?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const E=d.image;return y&&E&&E.height>0||S&&E&&l(E)?(i===null&&(i=new vd(n)),m=y?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,_){return _===Hl?d.mapping=Qr:_===kl&&(d.mapping=Hs),d}function l(d){let _=0;const y=6;for(let S=0;S<y;S++)d[S]!==void 0&&_++;return _===y}function c(d){const _=d.target;_.removeEventListener("dispose",c);const y=t.get(_);y!==void 0&&(t.delete(_),y.dispose())}function h(d){const _=d.target;_.removeEventListener("dispose",h);const y=e.get(_);y!==void 0&&(e.delete(_),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function RS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ko("WebGLRenderer: "+i+" extension not supported."),r}}}function CS(n,t,e,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&t.remove(d.index);for(const y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(t.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER)}function c(p){const d=[],_=p.index,y=p.attributes.position;let S=0;if(y===void 0)return;if(_!==null){const E=_.array;S=_.version;for(let w=0,u=E.length;w<u;w+=3){const f=E[w+0],T=E[w+1],R=E[w+2];d.push(f,T,T,R,R,f)}}else{const E=y.array;S=y.version;for(let w=0,u=E.length/3-1;w<u;w+=3){const f=w+0,T=w+1,R=w+2;d.push(f,T,T,R,R,f)}}const m=new(y.count>=65535?jf:qf)(d,1);m.version=S;const g=s.get(p);g&&t.remove(g),s.set(p,m)}function h(p){const d=s.get(p);if(d){const _=p.index;_!==null&&d.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function DS(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,_){n.drawElements(i,_,s,d*a),e.update(_,i,1)}function c(d,_,y){y!==0&&(n.drawElementsInstanced(i,_,s,d*a,y),e.update(_,i,y))}function h(d,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,d,0,y);let m=0;for(let g=0;g<y;g++)m+=_[g];e.update(m,i,1)}function p(d,_,y,S){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,_[g],S[g]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,d,0,S,0,y);let g=0;for(let E=0;E<y;E++)g+=_[E]*S[E];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function LS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Ae("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function PS(n,t,e){const i=new WeakMap,r=new nn;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let u=o.attributes.position.count*w,f=1;u>t.maxTextureSize&&(f=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const T=new Float32Array(u*f*4*p),R=new Zf(T,u,f,p);R.type=Ri,R.needsUpdate=!0;const v=w*4;for(let W=0;W<p;W++){const D=m[W],V=g[W],L=E[W],B=u*f*4*W;for(let z=0;z<D.count;z++){const H=z*v;_===!0&&(r.fromBufferAttribute(D,z),T[B+H+0]=r.x,T[B+H+1]=r.y,T[B+H+2]=r.z,T[B+H+3]=0),y===!0&&(r.fromBufferAttribute(V,z),T[B+H+4]=r.x,T[B+H+5]=r.y,T[B+H+6]=r.z,T[B+H+7]=0),S===!0&&(r.fromBufferAttribute(L,z),T[B+H+8]=r.x,T[B+H+9]=r.y,T[B+H+10]=r.z,T[B+H+11]=L.itemSize===4?r.w:1)}}d={count:p,texture:R,size:new Ge(u,f)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let S=0;S<c.length;S++)_+=c[S];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function NS(n,t,e,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,d=t.get(c,p);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const FS={[Rf]:"LINEAR_TONE_MAPPING",[Cf]:"REINHARD_TONE_MAPPING",[Df]:"CINEON_TONE_MAPPING",[Lf]:"ACES_FILMIC_TONE_MAPPING",[Nf]:"AGX_TONE_MAPPING",[Ff]:"NEUTRAL_TONE_MAPPING",[Pf]:"CUSTOM_TONE_MAPPING"};function US(n,t,e,i,r){const s=new Ni(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Ni(t,e,{type:sr,depthBuffer:!1,stencilBuffer:!1}),o=new lr;o.setAttribute("position",new rr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new rr([0,2,0,0,2,0],2));const l=new Dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pi(o,l),h=new th(-1,1,1,-1,0,1);let p=null,d=null,_=!1,y,S=null,m=[],g=!1;this.setSize=function(E,w){s.setSize(E,w),a.setSize(E,w);for(let u=0;u<m.length;u++){const f=m[u];f.setSize&&f.setSize(E,w)}},this.setEffects=function(E){m=E,g=m.length>0&&m[0].isRenderPass===!0;const w=s.width,u=s.height;for(let f=0;f<m.length;f++){const T=m[f];T.setSize&&T.setSize(w,u)}},this.begin=function(E,w){if(_||E.toneMapping===Pi&&m.length===0)return!1;if(S=w,w!==null){const u=w.width,f=w.height;(s.width!==u||s.height!==f)&&this.setSize(u,f)}return g===!1&&E.setRenderTarget(s),y=E.toneMapping,E.toneMapping=Pi,!0},this.hasRenderPass=function(){return g},this.end=function(E,w){E.toneMapping=y,_=!0;let u=s,f=a;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(E,f,u,w),R.needsSwap!==!1)){const v=u;u=f,f=v}}if(p!==E.outputColorSpace||d!==E.toneMapping){p=E.outputColorSpace,d=E.toneMapping,l.defines={},Me.getTransfer(p)===Ue&&(l.defines.SRGB_TRANSFER="");const T=FS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,E.setRenderTarget(S),E.render(c,h),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ip=new Ln,wu=new wa(1,1),rp=new Zf,sp=new oy,ap=new Jf,bd=[],Md=[],Ed=new Float32Array(16),Ad=new Float32Array(9),wd=new Float32Array(4);function Qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=bd[r];if(s===void 0&&(s=new Float32Array(r),bd[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wl(n,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function OS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function BS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2fv(this.addr,t),dn(e,t)}}function VS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;n.uniform3fv(this.addr,t),dn(e,t)}}function zS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4fv(this.addr,t),dn(e,t)}}function HS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(hn(e,i))return;wd.set(i),n.uniformMatrix2fv(this.addr,!1,wd),dn(e,i)}}function kS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(hn(e,i))return;Ad.set(i),n.uniformMatrix3fv(this.addr,!1,Ad),dn(e,i)}}function GS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(hn(e,i))return;Ed.set(i),n.uniformMatrix4fv(this.addr,!1,Ed),dn(e,i)}}function WS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ZS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2iv(this.addr,t),dn(e,t)}}function XS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3iv(this.addr,t),dn(e,t)}}function YS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4iv(this.addr,t),dn(e,t)}}function qS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;n.uniform2uiv(this.addr,t),dn(e,t)}}function KS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;n.uniform3uiv(this.addr,t),dn(e,t)}}function JS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;n.uniform4uiv(this.addr,t),dn(e,t)}}function QS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=e.isReversedDepthBuffer()?Ju:Ku,s=wu):s=ip,e.setTexture2D(t||s,r)}function $S(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||sp,r)}function tb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ap,r)}function eb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||rp,r)}function nb(n){switch(n){case 5126:return OS;case 35664:return BS;case 35665:return VS;case 35666:return zS;case 35674:return HS;case 35675:return kS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return ZS;case 35668:case 35672:return XS;case 35669:case 35673:return YS;case 5125:return qS;case 36294:return jS;case 36295:return KS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(n,t){n.uniform1fv(this.addr,t)}function rb(n,t){const e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function sb(n,t){const e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function ab(n,t){const e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function ob(n,t){const e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function lb(n,t){const e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cb(n,t){const e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ub(n,t){n.uniform1iv(this.addr,t)}function hb(n,t){n.uniform2iv(this.addr,t)}function db(n,t){n.uniform3iv(this.addr,t)}function fb(n,t){n.uniform4iv(this.addr,t)}function pb(n,t){n.uniform1uiv(this.addr,t)}function mb(n,t){n.uniform2uiv(this.addr,t)}function gb(n,t){n.uniform3uiv(this.addr,t)}function _b(n,t){n.uniform4uiv(this.addr,t)}function vb(n,t,e){const i=this.cache,r=t.length,s=wl(e,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=wu:a=ip;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function yb(n,t,e){const i=this.cache,r=t.length,s=wl(e,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||sp,s[a])}function xb(n,t,e){const i=this.cache,r=t.length,s=wl(e,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ap,s[a])}function Sb(n,t,e){const i=this.cache,r=t.length,s=wl(e,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||rp,s[a])}function bb(n){switch(n){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Mb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=nb(e.type)}}class Eb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bb(e.type)}}class Ab{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Td(n,t){n.seq.push(t),n.map[t.id]=t}function wb(n,t,e){const i=n.name,r=i.length;for(vc.lastIndex=0;;){const s=vc.exec(i),a=vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Td(e,c===void 0?new Mb(o,n,t):new Eb(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Ab(o),Td(e,p)),e=p}}}class Ao{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);wb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Id(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Tb=37297;let Ib=0;function Rb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Rd=new he;function Cb(n){Me._getMatrix(Rd,Me.workingColorSpace,n);const t=`mat3( ${Rd.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case Vo:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Rb(n.getShaderSource(t),o)}else return s}function Db(n,t){const e=Cb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Lb={[Rf]:"Linear",[Cf]:"Reinhard",[Df]:"Cineon",[Lf]:"ACESFilmic",[Nf]:"AgX",[Ff]:"Neutral",[Pf]:"Custom"};function Pb(n,t){const e=Lb[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new X;function Nb(){Me.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Ub(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ob(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function da(n){return n!==""}function Dd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(n){return n.replace(Bb,zb)}const Vb=new Map;function zb(n,t){let e=fe[t];if(e===void 0){const i=Vb.get(t);if(i!==void 0)e=fe[i],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Tu(e)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(n){return n.replace(Hb,kb)}function kb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Gb={[xo]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function Wb(n){return Gb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zb={[Qr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function Xb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yb={[Hs]:"ENVMAP_MODE_REFRACTION"};function qb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jb={[If]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[zv]:"ENVMAP_BLENDING_ADD"};function Kb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":jb[n.combine]||"ENVMAP_BLENDING_NONE"}function Jb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Qb(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Wb(e),c=Xb(e),h=qb(e),p=Kb(e),d=Jb(e),_=Fb(e),y=Ub(s),S=r.createProgram();let m,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(da).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(da).join(`
`),g.length>0&&(g+=`
`)):(m=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),g=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?fe.tonemapping_pars_fragment:"",e.toneMapping!==Pi?Pb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Db("linearToOutputTexel",e.outputColorSpace),Nb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Tu(a),a=Dd(a,e),a=Ld(a,e),o=Tu(o),o=Dd(o,e),o=Ld(o,e),a=Pd(a),o=Pd(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=E+m+a,u=E+g+o,f=Id(r,r.VERTEX_SHADER,w),T=Id(r,r.FRAGMENT_SHADER,u);r.attachShader(S,f),r.attachShader(S,T),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(D){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",L=r.getShaderInfoLog(f)||"",B=r.getShaderInfoLog(T)||"",z=V.trim(),H=L.trim(),k=B.trim();let et=!0,tt=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,f,T);else{const mt=Cd(r,f,"vertex"),St=Cd(r,T,"fragment");Ae("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+mt+`
`+St)}else z!==""?oe("WebGLProgram: Program Info Log:",z):(H===""||k==="")&&(tt=!1);tt&&(D.diagnostics={runnable:et,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:g}})}r.deleteShader(f),r.deleteShader(T),v=new Ao(r,S),M=Ob(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(S,Tb)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ib++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=f,this.fragmentShader=T,this}let $b=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new eM(t),e.set(t,i)),i}}class eM{constructor(t){this.id=$b++,this.code=t,this.usedTimes=0}}function nM(n,t,e,i,r,s){const a=new Xf,o=new tM,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,M,W,D,V){const L=D.fog,B=V.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||z,H),et=k&&k.mapping===Ml?k.image.height:null,tt=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&oe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,St=mt!==void 0?mt.length:0;let gt=0;B.morphAttributes.position!==void 0&&(gt=1),B.morphAttributes.normal!==void 0&&(gt=2),B.morphAttributes.color!==void 0&&(gt=3);let ut,zt,pe,j;if(tt){const Pe=Ei[tt];ut=Pe.vertexShader,zt=Pe.fragmentShader}else ut=v.vertexShader,zt=v.fragmentShader,o.update(v),pe=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const st=n.getRenderTarget(),nt=n.state.buffers.depth.getReversed(),le=V.isInstancedMesh===!0,Zt=V.isBatchedMesh===!0,ne=!!v.map,Ut=!!v.matcap,Et=!!k,It=!!v.aoMap,Rt=!!v.lightMap,bt=!!v.bumpMap,Gt=!!v.normalMap,C=!!v.displacementMap,ue=!!v.emissiveMap,re=!!v.metalnessMap,Ht=!!v.roughnessMap,xt=v.anisotropy>0,I=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,q=v.sheen>0,$=v.transmission>0,K=xt&&!!v.anisotropyMap,wt=I&&!!v.clearcoatMap,ct=I&&!!v.clearcoatNormalMap,Ot=I&&!!v.clearcoatRoughnessMap,ee=N&&!!v.iridescenceMap,it=N&&!!v.iridescenceThicknessMap,ot=q&&!!v.sheenColorMap,Ct=q&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,Mt=!!v.specularColorMap,me=!!v.specularIntensityMap,F=$&&!!v.transmissionMap,dt=$&&!!v.thicknessMap,lt=!!v.gradientMap,Tt=!!v.alphaMap,rt=v.alphaTest>0,J=!!v.alphaHash,Dt=!!v.extensions;let ae=Pi;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Xe={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:ut,fragmentShader:zt,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Zt,batchingColor:Zt&&V._colorsTexture!==null,instancing:le,instancingColor:le&&V.instanceColor!==null,instancingMorph:le&&V.morphTexture!==null,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Gs,alphaToCoverage:!!v.alphaToCoverage,map:ne,matcap:Ut,envMap:Et,envMapMode:Et&&k.mapping,envMapCubeUVHeight:et,aoMap:It,lightMap:Rt,bumpMap:bt,normalMap:Gt,displacementMap:C,emissiveMap:ue,normalMapObjectSpace:Gt&&v.normalMapType===Wv,normalMapTangentSpace:Gt&&v.normalMapType===Gv,metalnessMap:re,roughnessMap:Ht,anisotropy:xt,anisotropyMap:K,clearcoat:I,clearcoatMap:wt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ot,dispersion:x,iridescence:N,iridescenceMap:ee,iridescenceThicknessMap:it,sheen:q,sheenColorMap:ot,sheenRoughnessMap:Ct,specularMap:Lt,specularColorMap:Mt,specularIntensityMap:me,transmission:$,transmissionMap:F,thicknessMap:dt,gradientMap:lt,opaque:v.transparent===!1&&v.blending===Ps&&v.alphaToCoverage===!1,alphaMap:Tt,alphaTest:rt,alphaHash:J,combine:v.combine,mapUv:ne&&y(v.map.channel),aoMapUv:It&&y(v.aoMap.channel),lightMapUv:Rt&&y(v.lightMap.channel),bumpMapUv:bt&&y(v.bumpMap.channel),normalMapUv:Gt&&y(v.normalMap.channel),displacementMapUv:C&&y(v.displacementMap.channel),emissiveMapUv:ue&&y(v.emissiveMap.channel),metalnessMapUv:re&&y(v.metalnessMap.channel),roughnessMapUv:Ht&&y(v.roughnessMap.channel),anisotropyMapUv:K&&y(v.anisotropyMap.channel),clearcoatMapUv:wt&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&y(v.sheenRoughnessMap.channel),specularMapUv:Lt&&y(v.specularMap.channel),specularColorMapUv:Mt&&y(v.specularColorMap.channel),specularIntensityMapUv:me&&y(v.specularIntensityMap.channel),transmissionMapUv:F&&y(v.transmissionMap.channel),thicknessMapUv:dt&&y(v.thicknessMap.channel),alphaMapUv:Tt&&y(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Gt||xt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(ne||Tt),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&Gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:nt,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:ne&&v.map.isVideoTexture===!0&&Me.getTransfer(v.map.colorSpace)===Ue,decodeVideoTextureEmissive:ue&&v.emissiveMap.isVideoTexture===!0&&Me.getTransfer(v.emissiveMap.colorSpace)===Ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ui,flipSided:v.side===Bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&v.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)M.push(W),M.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(g(M,v),E(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function w(v){const M=_[v.type];let W;if(M){const D=Ei[M];W=Iy.clone(D.uniforms)}else W=v.uniforms;return W}function u(v,M){let W=h.get(M);return W!==void 0?++W.usedTimes:(W=new Qb(n,M,v,r),c.push(W),h.set(M,W)),W}function f(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:u,releaseProgram:f,releaseShaderCache:T,programs:c,dispose:R}}function iM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function rM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ud(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,y,S,m,g){let E=n[t];return E===void 0?(E={id:d.id,object:d,geometry:_,material:y,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:g},n[t]=E):(E.id=d.id,E.object=d,E.geometry=_,E.material=y,E.materialVariant=a(d),E.groupOrder=S,E.renderOrder=d.renderOrder,E.z=m,E.group=g),t++,E}function l(d,_,y,S,m,g){const E=o(d,_,y,S,m,g);y.transmission>0?i.push(E):y.transparent===!0?r.push(E):e.push(E)}function c(d,_,y,S,m,g){const E=o(d,_,y,S,m,g);y.transmission>0?i.unshift(E):y.transparent===!0?r.unshift(E):e.unshift(E)}function h(d,_){e.length>1&&e.sort(d||rM),i.length>1&&i.sort(_||Fd),r.length>1&&r.sort(_||Fd)}function p(){for(let d=t,_=n.length;d<_;d++){const y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function sM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ud,n.set(i,[a])):r>=s.length?(a=new Ud,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function aM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Ie};break;case"SpotLight":e={position:new X,direction:new X,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":e={color:new Ie,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function oM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lM=0;function cM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function uM(n){const t=new aM,e=oM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new on,a=new on;function o(c){let h=0,p=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let _=0,y=0,S=0,m=0,g=0,E=0,w=0,u=0,f=0,T=0,R=0;c.sort(cM);for(let M=0,W=c.length;M<W;M++){const D=c[M],V=D.color,L=D.intensity,B=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ks?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*L,p+=V.g*L,d+=V.b*L;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],L);R++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,et=e.get(D);et.shadowIntensity=k.intensity,et.shadowBias=k.bias,et.shadowNormalBias=k.normalBias,et.shadowRadius=k.radius,et.shadowMapSize=k.mapSize,i.directionalShadow[_]=et,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=D.shadow.matrix,E++}i.directional[_]=H,_++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(V).multiplyScalar(L),H.distance=B,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[S]=H;const k=D.shadow;if(D.map&&(i.spotLightMap[f]=D.map,f++,k.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[S]=k.matrix,D.castShadow){const et=e.get(D);et.shadowIntensity=k.intensity,et.shadowBias=k.bias,et.shadowNormalBias=k.normalBias,et.shadowRadius=k.radius,et.shadowMapSize=k.mapSize,i.spotShadow[S]=et,i.spotShadowMap[S]=z,u++}S++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(V).multiplyScalar(L),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const k=D.shadow,et=e.get(D);et.shadowIntensity=k.intensity,et.shadowBias=k.bias,et.shadowNormalBias=k.normalBias,et.shadowRadius=k.radius,et.shadowMapSize=k.mapSize,et.shadowCameraNear=k.camera.near,et.shadowCameraFar=k.camera.far,i.pointShadow[y]=et,i.pointShadowMap[y]=z,i.pointShadowMatrix[y]=D.shadow.matrix,w++}i.point[y]=H,y++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(L),H.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[g]=H,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==_||v.pointLength!==y||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==g||v.numDirectionalShadows!==E||v.numPointShadows!==w||v.numSpotShadows!==u||v.numSpotMaps!==f||v.numLightProbes!==R)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=m,i.point.length=y,i.hemi.length=g,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=u+f-T,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,v.directionalLength=_,v.pointLength=y,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=g,v.numDirectionalShadows=E,v.numPointShadows=w,v.numSpotShadows=u,v.numSpotMaps=f,v.numLightProbes=R,i.version=lM++)}function l(c,h){let p=0,d=0,_=0,y=0,S=0;const m=h.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){const w=c[g];if(w.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),p++}else if(w.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const u=i.rectArea[y];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),u.halfWidth.set(w.width*.5,0,0),u.halfHeight.set(0,w.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const u=i.point[d];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const u=i.hemi[S];u.direction.setFromMatrixPosition(w.matrixWorld),u.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Od(n){const t=new uM(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function hM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Od(n),t.set(r,[o])):s>=a.length?(o=new Od(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`,pM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],mM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Bd=new on,la=new X,yc=new X;function gM(n,t,e){let i=new Kf;const r=new Ge,s=new Ge,a=new nn,o=new Ly,l=new Py,c={},h=e.maxTextureSize,p={[Rr]:Bn,[Bn]:Rr,[ui]:ui},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:dM,fragmentShader:fM}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const y=new lr;y.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new pi(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let g=this.type;this.render=function(T,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===xv&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xo);const M=n.getRenderTarget(),W=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(nr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const L=g!==this.type;L&&R.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(z=>z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,z=T.length;B<z;B++){const H=T[B],k=H.shadow;if(k===void 0){oe("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const et=k.getFrameExtents();r.multiply(et),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,k.mapSize.y=s.y));const tt=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=tt,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ha){if(H.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ni(r.x,r.y,{format:ks,type:sr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new wa(r.x,r.y,Ri),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ar,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n}else H.isPointLight?(k.map=new np(r.x),k.map.depthTexture=new wy(r.x,Ui)):(k.map=new Ni(r.x,r.y),k.map.depthTexture=new wa(r.x,r.y,Ui)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ar,this.type===xo?(k.map.depthTexture.compareFunction=tt?Ju:Ku,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n);k.camera.updateProjectionMatrix()}const mt=k.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<mt;St++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,St),n.clear();else{St===0&&(n.setRenderTarget(k.map),n.clear());const gt=k.getViewport(St);a.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),V.viewport(a)}if(H.isPointLight){const gt=k.camera,ut=k.matrix,zt=H.distance||gt.far;zt!==gt.far&&(gt.far=zt,gt.updateProjectionMatrix()),la.setFromMatrixPosition(H.matrixWorld),gt.position.copy(la),yc.copy(gt.position),yc.add(pM[St]),gt.up.copy(mM[St]),gt.lookAt(yc),gt.updateMatrixWorld(),ut.makeTranslation(-la.x,-la.y,-la.z),Bd.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Bd,gt.coordinateSystem,gt.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),u(R,v,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===ha&&E(k,v),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(M,W,D)};function E(T,R){const v=t.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(r.x,r.y,{format:ks,type:sr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,v,d,S,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,v,_,S,null)}function w(T,R,v,M){let W=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)W=D;else if(W=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=W.uuid,L=R.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let z=B[L];z===void 0&&(z=W.clone(),B[L]=z,R.addEventListener("dispose",f)),W=z}if(W.visible=R.visible,W.wireframe=R.wireframe,M===ha?W.side=R.shadowSide!==null?R.shadowSide:R.side:W.side=R.shadowSide!==null?R.shadowSide:p[R.side],W.alphaMap=R.alphaMap,W.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,W.map=R.map,W.clipShadows=R.clipShadows,W.clippingPlanes=R.clippingPlanes,W.clipIntersection=R.clipIntersection,W.displacementMap=R.displacementMap,W.displacementScale=R.displacementScale,W.displacementBias=R.displacementBias,W.wireframeLinewidth=R.wireframeLinewidth,W.linewidth=R.linewidth,v.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const V=n.properties.get(W);V.light=v}return W}function u(T,R,v,M,W){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&W===ha)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const L=t.update(T),B=T.material;if(Array.isArray(B)){const z=L.groups;for(let H=0,k=z.length;H<k;H++){const et=z[H],tt=B[et.materialIndex];if(tt&&tt.visible){const mt=w(T,tt,M,W);T.onBeforeShadow(n,T,R,v,L,mt,et),n.renderBufferDirect(v,null,L,mt,T,et),T.onAfterShadow(n,T,R,v,L,mt,et)}}}else if(B.visible){const z=w(T,B,M,W);T.onBeforeShadow(n,T,R,v,L,z,null),n.renderBufferDirect(v,null,L,z,T,null),T.onAfterShadow(n,T,R,v,L,z,null)}}const V=T.children;for(let L=0,B=V.length;L<B;L++)u(V[L],R,v,M,W)}function f(T){T.target.removeEventListener("dispose",f);for(const v in c){const M=c[v],W=T.target.uuid;W in M&&(M[W].dispose(),delete M[W])}}}function _M(n,t){function e(){let F=!1;const dt=new nn;let lt=null;const Tt=new nn(0,0,0,0);return{setMask:function(rt){lt!==rt&&!F&&(n.colorMask(rt,rt,rt,rt),lt=rt)},setLocked:function(rt){F=rt},setClear:function(rt,J,Dt,ae,Xe){Xe===!0&&(rt*=ae,J*=ae,Dt*=ae),dt.set(rt,J,Dt,ae),Tt.equals(dt)===!1&&(n.clearColor(rt,J,Dt,ae),Tt.copy(dt))},reset:function(){F=!1,lt=null,Tt.set(-1,0,0,0)}}}function i(){let F=!1,dt=!1,lt=null,Tt=null,rt=null;return{setReversed:function(J){if(dt!==J){const Dt=t.get("EXT_clip_control");J?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const ae=rt;rt=null,this.setClear(ae)}},getReversed:function(){return dt},setTest:function(J){J?st(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(J){lt!==J&&!F&&(n.depthMask(J),lt=J)},setFunc:function(J){if(dt&&(J=ty[J]),Tt!==J){switch(J){case Bc:n.depthFunc(n.NEVER);break;case Vc:n.depthFunc(n.ALWAYS);break;case zc:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Hc:n.depthFunc(n.EQUAL);break;case kc:n.depthFunc(n.GEQUAL);break;case Gc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=J}},setLocked:function(J){F=J},setClear:function(J){rt!==J&&(rt=J,dt&&(J=1-J),n.clearDepth(J))},reset:function(){F=!1,lt=null,Tt=null,rt=null,dt=!1}}}function r(){let F=!1,dt=null,lt=null,Tt=null,rt=null,J=null,Dt=null,ae=null,Xe=null;return{setTest:function(Pe){F||(Pe?st(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(Pe){dt!==Pe&&!F&&(n.stencilMask(Pe),dt=Pe)},setFunc:function(Pe,Hi,ki){(lt!==Pe||Tt!==Hi||rt!==ki)&&(n.stencilFunc(Pe,Hi,ki),lt=Pe,Tt=Hi,rt=ki)},setOp:function(Pe,Hi,ki){(J!==Pe||Dt!==Hi||ae!==ki)&&(n.stencilOp(Pe,Hi,ki),J=Pe,Dt=Hi,ae=ki)},setLocked:function(Pe){F=Pe},setClear:function(Pe){Xe!==Pe&&(n.clearStencil(Pe),Xe=Pe)},reset:function(){F=!1,dt=null,lt=null,Tt=null,rt=null,J=null,Dt=null,ae=null,Xe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},d=new WeakMap,_=[],y=null,S=!1,m=null,g=null,E=null,w=null,u=null,f=null,T=null,R=new Ie(0,0,0),v=0,M=!1,W=null,D=null,V=null,L=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(et)[1]),H=k>=1):et.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),H=k>=2);let tt=null,mt={};const St=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),ut=new nn().fromArray(St),zt=new nn().fromArray(gt);function pe(F,dt,lt,Tt){const rt=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<lt;Dt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(dt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return J}const j={};j[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(zs),bt(!1),Gt(Wh),st(n.CULL_FACE),It(nr);function st(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function nt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function le(F,dt){return p[F]!==dt?(n.bindFramebuffer(F,dt),p[F]=dt,F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Zt(F,dt){let lt=_,Tt=!1;if(F){lt=d.get(dt),lt===void 0&&(lt=[],d.set(dt,lt));const rt=F.textures;if(lt.length!==rt.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Dt=rt.length;J<Dt;J++)lt[J]=n.COLOR_ATTACHMENT0+J;lt.length=rt.length,Tt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(lt)}function ne(F){return y!==F?(n.useProgram(F),y=F,!0):!1}const Ut={[Xr]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Mv]:n.FUNC_REVERSE_SUBTRACT};Ut[Ev]=n.MIN,Ut[Av]=n.MAX;const Et={[wv]:n.ZERO,[Tv]:n.ONE,[Iv]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[Nv]:n.SRC_ALPHA_SATURATE,[Lv]:n.DST_COLOR,[Cv]:n.DST_ALPHA,[Rv]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[Pv]:n.ONE_MINUS_DST_COLOR,[Dv]:n.ONE_MINUS_DST_ALPHA,[Fv]:n.CONSTANT_COLOR,[Uv]:n.ONE_MINUS_CONSTANT_COLOR,[Ov]:n.CONSTANT_ALPHA,[Bv]:n.ONE_MINUS_CONSTANT_ALPHA};function It(F,dt,lt,Tt,rt,J,Dt,ae,Xe,Pe){if(F===nr){S===!0&&(nt(n.BLEND),S=!1);return}if(S===!1&&(st(n.BLEND),S=!0),F!==Sv){if(F!==m||Pe!==M){if((g!==Xr||u!==Xr)&&(n.blendEquation(n.FUNC_ADD),g=Xr,u=Xr),Pe)switch(F){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFunc(n.ONE,n.ONE);break;case Xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ae("WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xh:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",F);break}E=null,w=null,f=null,T=null,R.set(0,0,0),v=0,m=F,M=Pe}return}rt=rt||dt,J=J||lt,Dt=Dt||Tt,(dt!==g||rt!==u)&&(n.blendEquationSeparate(Ut[dt],Ut[rt]),g=dt,u=rt),(lt!==E||Tt!==w||J!==f||Dt!==T)&&(n.blendFuncSeparate(Et[lt],Et[Tt],Et[J],Et[Dt]),E=lt,w=Tt,f=J,T=Dt),(ae.equals(R)===!1||Xe!==v)&&(n.blendColor(ae.r,ae.g,ae.b,Xe),R.copy(ae),v=Xe),m=F,M=!1}function Rt(F,dt){F.side===ui?nt(n.CULL_FACE):st(n.CULL_FACE);let lt=F.side===Bn;dt&&(lt=!lt),bt(lt),F.blending===Ps&&F.transparent===!1?It(nr):It(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Tt=F.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(F){W!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),W=F)}function Gt(F){F!==vv?(st(n.CULL_FACE),F!==D&&(F===Wh?n.cullFace(n.BACK):F===yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),D=F}function C(F){F!==V&&(H&&n.lineWidth(F),V=F)}function ue(F,dt,lt){F?(st(n.POLYGON_OFFSET_FILL),(L!==dt||B!==lt)&&(L=dt,B=lt,a.getReversed()&&(dt=-dt),n.polygonOffset(dt,lt))):nt(n.POLYGON_OFFSET_FILL)}function re(F){F?st(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function Ht(F){F===void 0&&(F=n.TEXTURE0+z-1),tt!==F&&(n.activeTexture(F),tt=F)}function xt(F,dt,lt){lt===void 0&&(tt===null?lt=n.TEXTURE0+z-1:lt=tt);let Tt=mt[lt];Tt===void 0&&(Tt={type:void 0,texture:void 0},mt[lt]=Tt),(Tt.type!==F||Tt.texture!==dt)&&(tt!==lt&&(n.activeTexture(lt),tt=lt),n.bindTexture(F,dt||j[F]),Tt.type=F,Tt.texture=dt)}function I(){const F=mt[tt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){Ae("WebGLState:",F)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(F){Ae("WebGLState:",F)}}function q(){try{n.texSubImage2D(...arguments)}catch(F){Ae("WebGLState:",F)}}function $(){try{n.texSubImage3D(...arguments)}catch(F){Ae("WebGLState:",F)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Ae("WebGLState:",F)}}function wt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Ae("WebGLState:",F)}}function ct(){try{n.texStorage2D(...arguments)}catch(F){Ae("WebGLState:",F)}}function Ot(){try{n.texStorage3D(...arguments)}catch(F){Ae("WebGLState:",F)}}function ee(){try{n.texImage2D(...arguments)}catch(F){Ae("WebGLState:",F)}}function it(){try{n.texImage3D(...arguments)}catch(F){Ae("WebGLState:",F)}}function ot(F){ut.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ut.copy(F))}function Ct(F){zt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function Lt(F,dt){let lt=c.get(dt);lt===void 0&&(lt=new WeakMap,c.set(dt,lt));let Tt=lt.get(F);Tt===void 0&&(Tt=n.getUniformBlockIndex(dt,F.name),lt.set(F,Tt))}function Mt(F,dt){const Tt=c.get(dt).get(F);l.get(dt)!==Tt&&(n.uniformBlockBinding(dt,Tt,F.__bindingPointIndex),l.set(dt,Tt))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,mt={},p={},d=new WeakMap,_=[],y=null,S=!1,m=null,g=null,E=null,w=null,u=null,f=null,T=null,R=new Ie(0,0,0),v=0,M=!1,W=null,D=null,V=null,L=null,B=null,ut.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:nt,bindFramebuffer:le,drawBuffers:Zt,useProgram:ne,setBlending:It,setMaterial:Rt,setFlipSided:bt,setCullFace:Gt,setLineWidth:C,setPolygonOffset:ue,setScissorTest:re,activeTexture:Ht,bindTexture:xt,unbindTexture:I,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:ee,texImage3D:it,updateUBOMapping:Lt,uniformBlockBinding:Mt,texStorage2D:ct,texStorage3D:Ot,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:wt,scissor:ot,viewport:Ct,reset:me}}function vM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,x){return _?new OffscreenCanvas(I,x):Ho("canvas")}function S(I,x,N){let q=1;const $=xt(I);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(q*$.width),wt=Math.floor(q*$.height);p===void 0&&(p=y(K,wt));const ct=x?y(K,wt):p;return ct.width=K,ct.height=wt,ct.getContext("2d").drawImage(I,0,0,K,wt),oe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+wt+")."),ct}else return"data"in I&&oe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){n.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,x,N,q,$=!1){if(I!==null){if(n[I]!==void 0)return n[I];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=x;if(x===n.RED&&(N===n.FLOAT&&(K=n.R32F),N===n.HALF_FLOAT&&(K=n.R16F),N===n.UNSIGNED_BYTE&&(K=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.R8UI),N===n.UNSIGNED_SHORT&&(K=n.R16UI),N===n.UNSIGNED_INT&&(K=n.R32UI),N===n.BYTE&&(K=n.R8I),N===n.SHORT&&(K=n.R16I),N===n.INT&&(K=n.R32I)),x===n.RG&&(N===n.FLOAT&&(K=n.RG32F),N===n.HALF_FLOAT&&(K=n.RG16F),N===n.UNSIGNED_BYTE&&(K=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RG8UI),N===n.UNSIGNED_SHORT&&(K=n.RG16UI),N===n.UNSIGNED_INT&&(K=n.RG32UI),N===n.BYTE&&(K=n.RG8I),N===n.SHORT&&(K=n.RG16I),N===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RGB8UI),N===n.UNSIGNED_SHORT&&(K=n.RGB16UI),N===n.UNSIGNED_INT&&(K=n.RGB32UI),N===n.BYTE&&(K=n.RGB8I),N===n.SHORT&&(K=n.RGB16I),N===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),N===n.UNSIGNED_INT&&(K=n.RGBA32UI),N===n.BYTE&&(K=n.RGBA8I),N===n.SHORT&&(K=n.RGBA16I),N===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const wt=$?Vo:Me.getTransfer(q);N===n.FLOAT&&(K=n.RGBA32F),N===n.HALF_FLOAT&&(K=n.RGBA16F),N===n.UNSIGNED_BYTE&&(K=wt===Ue?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function u(I,x){let N;return I?x===null||x===Ui||x===Aa?N=n.DEPTH24_STENCIL8:x===Ri?N=n.DEPTH32F_STENCIL8:x===Ea&&(N=n.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===Aa?N=n.DEPTH_COMPONENT24:x===Ri?N=n.DEPTH_COMPONENT32F:x===Ea&&(N=n.DEPTH_COMPONENT16),N}function f(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==_n&&I.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function T(I){const x=I.target;x.removeEventListener("dispose",T),v(x),x.isVideoTexture&&h.delete(x)}function R(I){const x=I.target;x.removeEventListener("dispose",R),W(x)}function v(I){const x=i.get(I);if(x.__webglInit===void 0)return;const N=I.source,q=d.get(N);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(I),Object.keys(q).length===0&&d.delete(N)}i.remove(I)}function M(I){const x=i.get(I);n.deleteTexture(x.__webglTexture);const N=I.source,q=d.get(N);delete q[x.__cacheKey],a.memory.textures--}function W(I){const x=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[q][$]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=I.textures;for(let q=0,$=N.length;q<$;q++){const K=i.get(N[q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(I)}let D=0;function V(){D=0}function L(){const I=D;return I>=r.maxTextures&&oe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),D+=1,I}function B(I){const x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function z(I,x){const N=i.get(I);if(I.isVideoTexture&&re(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&N.__version!==I.version){const q=I.image;if(q===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,I,x);return}}else I.isExternalTexture&&(N.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function H(I,x){const N=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){j(N,I,x);return}else I.isExternalTexture&&(N.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function k(I,x){const N=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){j(N,I,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function et(I,x){const N=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&N.__version!==I.version){st(N,I,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const tt={[Zc]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[Xc]:n.MIRRORED_REPEAT},mt={[_n]:n.NEAREST,[Hv]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[qr]:n.LINEAR_MIPMAP_LINEAR},St={[Zv]:n.NEVER,[Kv]:n.ALWAYS,[Xv]:n.LESS,[Ku]:n.LEQUAL,[Yv]:n.EQUAL,[Ju]:n.GEQUAL,[qv]:n.GREATER,[jv]:n.NOTEQUAL};function gt(I,x){if(x.type===Ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Gl||x.magFilter===Xa||x.magFilter===qr||x.minFilter===Sn||x.minFilter===Gl||x.minFilter===Xa||x.minFilter===qr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,tt[x.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,tt[x.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,tt[x.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==Xa&&x.minFilter!==qr||x.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ut(I,x){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",T));const q=x.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const K=B(x);if(K!==I.__cacheKey){$[K]===void 0&&($[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[K].usedTimes++;const wt=$[I.__cacheKey];wt!==void 0&&($[I.__cacheKey].usedTimes--,wt.usedTimes===0&&M(x)),I.__cacheKey=K,I.__webglTexture=$[K].texture}return N}function zt(I,x,N){return Math.floor(Math.floor(I/N)/x)}function pe(I,x,N,q){const K=I.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,N,q,x.data);else{K.sort((it,ot)=>it.start-ot.start);let wt=0;for(let it=1;it<K.length;it++){const ot=K[wt],Ct=K[it],Lt=ot.start+ot.count,Mt=zt(Ct.start,x.width,4),me=zt(ot.start,x.width,4);Ct.start<=Lt+1&&Mt===me&&zt(Ct.start+Ct.count-1,x.width,4)===Mt?ot.count=Math.max(ot.count,Ct.start+Ct.count-ot.start):(++wt,K[wt]=Ct)}K.length=wt+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),Ot=n.getParameter(n.UNPACK_SKIP_PIXELS),ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let it=0,ot=K.length;it<ot;it++){const Ct=K[it],Lt=Math.floor(Ct.start/4),Mt=Math.ceil(Ct.count/4),me=Lt%x.width,F=Math.floor(Lt/x.width),dt=Mt,lt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,me),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,me,F,dt,lt,N,q,x.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,ee)}}function j(I,x,N){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const $=ut(I,x),K=x.source;e.bindTexture(q,I.__webglTexture,n.TEXTURE0+N);const wt=i.get(K);if(K.version!==wt.__version||$===!0){e.activeTexture(n.TEXTURE0+N);const ct=Me.getPrimaries(Me.workingColorSpace),Ot=x.colorSpace===Tr?null:Me.getPrimaries(x.colorSpace),ee=x.colorSpace===Tr||ct===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=S(x.image,!1,r.maxTextureSize);it=Ht(x,it);const ot=s.convert(x.format,x.colorSpace),Ct=s.convert(x.type);let Lt=w(x.internalFormat,ot,Ct,x.colorSpace,x.isVideoTexture);gt(q,x);let Mt;const me=x.mipmaps,F=x.isVideoTexture!==!0,dt=wt.__version===void 0||$===!0,lt=K.dataReady,Tt=f(x,it);if(x.isDepthTexture)Lt=u(x.format===jr,x.type),dt&&(F?e.texStorage2D(n.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,Ct,null));else if(x.isDataTexture)if(me.length>0){F&&dt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,me[0].width,me[0].height);for(let rt=0,J=me.length;rt<J;rt++)Mt=me[rt],F?lt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,ot,Ct,Mt.data):e.texImage2D(n.TEXTURE_2D,rt,Lt,Mt.width,Mt.height,0,ot,Ct,Mt.data);x.generateMipmaps=!1}else F?(dt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,it.width,it.height),lt&&pe(x,it,ot,Ct)):e.texImage2D(n.TEXTURE_2D,0,Lt,it.width,it.height,0,ot,Ct,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Lt,me[0].width,me[0].height,it.depth);for(let rt=0,J=me.length;rt<J;rt++)if(Mt=me[rt],x.format!==di)if(ot!==null)if(F){if(lt)if(x.layerUpdates.size>0){const Dt=md(Mt.width,Mt.height,x.format,x.type);for(const ae of x.layerUpdates){const Xe=Mt.data.subarray(ae*Dt/Mt.data.BYTES_PER_ELEMENT,(ae+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ae,Mt.width,Mt.height,1,ot,Xe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,it.depth,ot,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Lt,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,it.depth,ot,Ct,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Lt,Mt.width,Mt.height,it.depth,0,ot,Ct,Mt.data)}else{F&&dt&&e.texStorage2D(n.TEXTURE_2D,Tt,Lt,me[0].width,me[0].height);for(let rt=0,J=me.length;rt<J;rt++)Mt=me[rt],x.format!==di?ot!==null?F?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,ot,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Lt,Mt.width,Mt.height,0,Mt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?lt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,ot,Ct,Mt.data):e.texImage2D(n.TEXTURE_2D,rt,Lt,Mt.width,Mt.height,0,ot,Ct,Mt.data)}else if(x.isDataArrayTexture)if(F){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,Lt,it.width,it.height,it.depth),lt)if(x.layerUpdates.size>0){const rt=md(it.width,it.height,x.format,x.type);for(const J of x.layerUpdates){const Dt=it.data.subarray(J*rt/it.data.BYTES_PER_ELEMENT,(J+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,ot,Ct,Dt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Ct,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,ot,Ct,it.data);else if(x.isData3DTexture)F?(dt&&e.texStorage3D(n.TEXTURE_3D,Tt,Lt,it.width,it.height,it.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Ct,it.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,ot,Ct,it.data);else if(x.isFramebufferTexture){if(dt)if(F)e.texStorage2D(n.TEXTURE_2D,Tt,Lt,it.width,it.height);else{let rt=it.width,J=it.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Lt,rt,J,0,ot,Ct,null),rt>>=1,J>>=1}}else if(me.length>0){if(F&&dt){const rt=xt(me[0]);e.texStorage2D(n.TEXTURE_2D,Tt,Lt,rt.width,rt.height)}for(let rt=0,J=me.length;rt<J;rt++)Mt=me[rt],F?lt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ot,Ct,Mt):e.texImage2D(n.TEXTURE_2D,rt,Lt,ot,Ct,Mt);x.generateMipmaps=!1}else if(F){if(dt){const rt=xt(it);e.texStorage2D(n.TEXTURE_2D,Tt,Lt,rt.width,rt.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Ct,it)}else e.texImage2D(n.TEXTURE_2D,0,Lt,ot,Ct,it);m(x)&&g(q),wt.__version=K.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function st(I,x,N){if(x.image.length!==6)return;const q=ut(I,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+N);const K=i.get($);if($.version!==K.__version||q===!0){e.activeTexture(n.TEXTURE0+N);const wt=Me.getPrimaries(Me.workingColorSpace),ct=x.colorSpace===Tr?null:Me.getPrimaries(x.colorSpace),Ot=x.colorSpace===Tr||wt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const ee=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let J=0;J<6;J++)!ee&&!it?ot[J]=S(x.image[J],!0,r.maxCubemapSize):ot[J]=it?x.image[J].image:x.image[J],ot[J]=Ht(x,ot[J]);const Ct=ot[0],Lt=s.convert(x.format,x.colorSpace),Mt=s.convert(x.type),me=w(x.internalFormat,Lt,Mt,x.colorSpace),F=x.isVideoTexture!==!0,dt=K.__version===void 0||q===!0,lt=$.dataReady;let Tt=f(x,Ct);gt(n.TEXTURE_CUBE_MAP,x);let rt;if(ee){F&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,me,Ct.width,Ct.height);for(let J=0;J<6;J++){rt=ot[J].mipmaps;for(let Dt=0;Dt<rt.length;Dt++){const ae=rt[Dt];x.format!==di?Lt!==null?F?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt,0,0,ae.width,ae.height,Lt,ae.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt,me,ae.width,ae.height,0,ae.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt,0,0,ae.width,ae.height,Lt,Mt,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt,me,ae.width,ae.height,0,Lt,Mt,ae.data)}}}else{if(rt=x.mipmaps,F&&dt){rt.length>0&&Tt++;const J=xt(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,me,J.width,J.height)}for(let J=0;J<6;J++)if(it){F?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ot[J].width,ot[J].height,Lt,Mt,ot[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,me,ot[J].width,ot[J].height,0,Lt,Mt,ot[J].data);for(let Dt=0;Dt<rt.length;Dt++){const Xe=rt[Dt].image[J].image;F?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt+1,0,0,Xe.width,Xe.height,Lt,Mt,Xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt+1,me,Xe.width,Xe.height,0,Lt,Mt,Xe.data)}}else{F?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,Mt,ot[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,me,Lt,Mt,ot[J]);for(let Dt=0;Dt<rt.length;Dt++){const ae=rt[Dt];F?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt+1,0,0,Lt,Mt,ae.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Dt+1,me,Lt,Mt,ae.image[J])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),K.__version=$.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function nt(I,x,N,q,$,K){const wt=s.convert(N.format,N.colorSpace),ct=s.convert(N.type),Ot=w(N.internalFormat,wt,ct,N.colorSpace),ee=i.get(x),it=i.get(N);if(it.__renderTarget=x,!ee.__hasExternalTextures){const ot=Math.max(1,x.width>>K),Ct=Math.max(1,x.height>>K);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,K,Ot,ot,Ct,x.depth,0,wt,ct,null):e.texImage2D($,K,Ot,ot,Ct,0,wt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,it.__webglTexture,0,C(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,it.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(I,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,I),x.depthBuffer){const q=x.depthTexture,$=q&&q.isDepthTexture?q.type:null,K=u(x.stencilBuffer,$),wt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),K,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,I)}else{const q=x.textures;for(let $=0;$<q.length;$++){const K=q[$],wt=s.convert(K.format,K.colorSpace),ct=s.convert(K.type),Ot=w(K.internalFormat,wt,ct,K.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),Ot,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),Ot,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ot,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Zt(I,x,N){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),gt(n.TEXTURE_CUBE_MAP,x.depthTexture);const ee=s.convert(x.depthTexture.format),it=s.convert(x.depthTexture.type);let ot;x.depthTexture.format===ar?ot=n.DEPTH_COMPONENT24:x.depthTexture.format===jr&&(ot=n.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,ot,x.width,x.height,0,ee,it,null)}}else z(x.depthTexture,0);const K=$.__webglTexture,wt=C(x),ct=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Ot=x.depthTexture.format===jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ar)ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ct,K,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ct,K,0);else if(x.depthTexture.format===jr)ue(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ct,K,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ct,K,0);else throw new Error("Unknown depthTexture format")}function ne(I){const x=i.get(I),N=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=q}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Zt(x.__webglFramebuffer[q],I,q);else{const q=I.texture.mipmaps;q&&q.length>0?Zt(x.__webglFramebuffer[0],I,0):Zt(x.__webglFramebuffer,I,0)}else if(N){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),le(x.__webglDepthbuffer[q],I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),le(x.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(I,x,N){const q=i.get(I);x!==void 0&&nt(q.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ne(I)}function Et(I){const x=I.texture,N=i.get(I),q=i.get(x);I.addEventListener("dispose",R);const $=I.textures,K=I.isWebGLCubeRenderTarget===!0,wt=$.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ct]=[];for(let Ot=0;Ot<x.mipmaps.length;Ot++)N.__webglFramebuffer[ct][Ot]=n.createFramebuffer()}else N.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)N.__webglFramebuffer[ct]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ct=0,Ot=$.length;ct<Ot;ct++){const ee=i.get($[ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&ue(I)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<$.length;ct++){const Ot=$[ct];N.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const ee=s.convert(Ot.format,Ot.colorSpace),it=s.convert(Ot.type),ot=w(Ot.internalFormat,ee,it,Ot.colorSpace,I.isXRRenderTarget===!0),Ct=C(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,ot,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),le(N.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),gt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ot=0;Ot<x.mipmaps.length;Ot++)nt(N.__webglFramebuffer[ct][Ot],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot);else nt(N.__webglFramebuffer[ct],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,Ot=$.length;ct<Ot;ct++){const ee=$[ct],it=i.get(ee);let ot=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ot=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,it.__webglTexture),gt(ot,ee),nt(N.__webglFramebuffer,I,ee,n.COLOR_ATTACHMENT0+ct,ot,0),m(ee)&&g(ot)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ct=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),gt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let Ot=0;Ot<x.mipmaps.length;Ot++)nt(N.__webglFramebuffer[Ot],I,x,n.COLOR_ATTACHMENT0,ct,Ot);else nt(N.__webglFramebuffer,I,x,n.COLOR_ATTACHMENT0,ct,0);m(x)&&g(ct),e.unbindTexture()}I.depthBuffer&&ne(I)}function It(I){const x=I.textures;for(let N=0,q=x.length;N<q;N++){const $=x[N];if(m($)){const K=E(I),wt=i.get($).__webglTexture;e.bindTexture(K,wt),g(K),e.unbindTexture()}}}const Rt=[],bt=[];function Gt(I){if(I.samples>0){if(ue(I)===!1){const x=I.textures,N=I.width,q=I.height;let $=n.COLOR_BUFFER_BIT;const K=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(I),ct=x.length>1;if(ct)for(let ee=0;ee<x.length;ee++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Ot=I.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ee=0;ee<x.length;ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ee]);const it=i.get(x[ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,$,n.NEAREST),l===!0&&(Rt.length=0,bt.length=0,Rt.push(n.COLOR_ATTACHMENT0+ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Rt.push(K),bt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ee=0;ee<x.length;ee++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ee]);const it=i.get(x[ee]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const x=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function C(I){return Math.min(r.maxSamples,I.samples)}function ue(I){const x=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(I){const x=a.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function Ht(I,x){const N=I.colorSpace,q=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==Gs&&N!==Tr&&(Me.getTransfer(N)===Ue?(q!==di||$!==ti)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",N)),x}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=et,this.rebindTextures=Ut,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function yM(n,t){function e(i,r=Tr){let s;const a=Me.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Zu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Of)return n.BYTE;if(i===Bf)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===Wu)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===Hf)return n.ALPHA;if(i===kf)return n.RGB;if(i===di)return n.RGBA;if(i===ar)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Gf)return n.RED;if(i===Yu)return n.RED_INTEGER;if(i===ks)return n.RG;if(i===qu)return n.RG_INTEGER;if(i===ju)return n.RGBA_INTEGER;if(i===So||i===bo||i===Mo||i===Eo)if(a===Ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===qc||i===jc||i===Kc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===Qc||i===$c||i===tu||i===eu||i===nu||i===iu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jc||i===Qc)return a===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$c)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tu)return s.COMPRESSED_R11_EAC;if(i===eu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nu)return s.COMPRESSED_RG11_EAC;if(i===iu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu||i===gu||i===_u)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ru)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===su)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===au)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===du)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gu)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return a===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vu||i===yu||i===xu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===vu)return a===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Su||i===bu||i===Mu||i===Eu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`;class bM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Qf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Oi({vertexShader:xM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pi(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MM extends Ks{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,_=null,y=null;const S=typeof XRWebGLBinding<"u",m=new bM,g={},E=e.getContextAttributes();let w=null,u=null;const f=[],T=[],R=new Ge;let v=null;const M=new ci;M.viewport=new nn;const W=new ci;W.viewport=new nn;const D=[M,W],V=new Fy;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=f[j];return st===void 0&&(st=new Jl,f[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=f[j];return st===void 0&&(st=new Jl,f[j]=st),st.getGripSpace()},this.getHand=function(j){let st=f[j];return st===void 0&&(st=new Jl,f[j]=st),st.getHandSpace()};function z(j){const st=T.indexOf(j.inputSource);if(st===-1)return;const nt=f[st];nt!==void 0&&(nt.update(j.inputSource,j.frame,c||a),nt.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let j=0;j<f.length;j++){const st=T[j];st!==null&&(T[j]=null,f[j].disconnect(st))}L=null,B=null,m.reset();for(const j in g)delete g[j];t.setRenderTarget(w),_=null,d=null,p=null,r=null,u=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,le=null,Zt=null;E.depth&&(Zt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=E.stencil?jr:ar,le=E.stencil?Aa:Ui);const ne={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(ne),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new Ni(d.textureWidth,d.textureHeight,{format:di,type:ti,depthTexture:new wa(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Ni(_.framebufferWidth,_.framebufferHeight,{format:di,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let st=0;st<j.removed.length;st++){const nt=j.removed[st],le=T.indexOf(nt);le>=0&&(T[le]=null,f[le].disconnect(nt))}for(let st=0;st<j.added.length;st++){const nt=j.added[st];let le=T.indexOf(nt);if(le===-1){for(let ne=0;ne<f.length;ne++)if(ne>=T.length){T.push(nt),le=ne;break}else if(T[ne]===null){T[ne]=nt,le=ne;break}if(le===-1)break}const Zt=f[le];Zt&&Zt.connect(nt)}}const et=new X,tt=new X;function mt(j,st,nt){et.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(nt.matrixWorld);const le=et.distanceTo(tt),Zt=st.projectionMatrix.elements,ne=nt.projectionMatrix.elements,Ut=Zt[14]/(Zt[10]-1),Et=Zt[14]/(Zt[10]+1),It=(Zt[9]+1)/Zt[5],Rt=(Zt[9]-1)/Zt[5],bt=(Zt[8]-1)/Zt[0],Gt=(ne[8]+1)/ne[0],C=Ut*bt,ue=Ut*Gt,re=le/(-bt+Gt),Ht=re*-bt;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ht),j.translateZ(re),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Zt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const xt=Ut+re,I=Et+re,x=C-Ht,N=ue+(le-Ht),q=It*Et/I*xt,$=Rt*Et/I*xt;j.projectionMatrix.makePerspective(x,N,q,$,xt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function St(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let st=j.near,nt=j.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),V.near=W.near=M.near=st,V.far=W.far=M.far=nt,(L!==V.near||B!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,B=V.far),V.layers.mask=j.layers.mask|6,M.layers.mask=V.layers.mask&-5,W.layers.mask=V.layers.mask&-3;const le=j.parent,Zt=V.cameras;St(V,le);for(let ne=0;ne<Zt.length;ne++)St(Zt[ne],le);Zt.length===2?mt(V,M,W):V.projectionMatrix.copy(M.projectionMatrix),gt(j,V,le)};function gt(j,st,nt){nt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(nt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Au*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return g[j]};let ut=null;function zt(j,st){if(h=st.getViewerPose(c||a),y=st,h!==null){const nt=h.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let le=!1;nt.length!==V.cameras.length&&(V.cameras.length=0,le=!0);for(let Et=0;Et<nt.length;Et++){const It=nt[Et];let Rt=null;if(_!==null)Rt=_.getViewport(It);else{const Gt=p.getViewSubImage(d,It);Rt=Gt.viewport,Et===0&&(t.setRenderTargetTextures(u,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(u))}let bt=D[Et];bt===void 0&&(bt=new ci,bt.layers.enable(Et),bt.viewport=new nn,D[Et]=bt),bt.matrix.fromArray(It.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(It.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Et===0&&(V.matrix.copy(bt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),le===!0&&V.cameras.push(bt)}const Zt=r.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const Et=p.getDepthInformation(nt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,r.renderState)}if(Zt&&Zt.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let Et=0;Et<nt.length;Et++){const It=nt[Et].camera;if(It){let Rt=g[It];Rt||(Rt=new Qf,g[It]=Rt);const bt=p.getCameraImage(It);Rt.sourceTexture=bt}}}}for(let nt=0;nt<f.length;nt++){const le=T[nt],Zt=f[nt];le!==null&&Zt!==void 0&&Zt.update(le,st,c||a)}ut&&ut(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),y=null}const pe=new ep;pe.setAnimationLoop(zt),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}}const Gr=new or,EM=new on;function AM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,$f(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,E,w,u){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),p(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&_(m,g,u)):g.isMeshMatcapMaterial?(s(m,g),y(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),S(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,E,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const E=t.get(g),w=E.envMap,u=E.envMapRotation;w&&(m.envMap.value=w,Gr.copy(u),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),m.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Gr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,E,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,E){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function S(m,g){const E=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const u=w.program;i.uniformBlockBinding(E,u)}function c(E,w){let u=r[E.id];u===void 0&&(y(E),u=h(E),r[E.id]=u,E.addEventListener("dispose",m));const f=w.program;i.updateUBOMapping(E,f);const T=t.render.frame;s[E.id]!==T&&(d(E),s[E.id]=T)}function h(E){const w=p();E.__bindingPointIndex=w;const u=n.createBuffer(),f=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,f,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,u),u}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=r[E.id],u=E.uniforms,f=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,R=u.length;T<R;T++){const v=Array.isArray(u[T])?u[T]:[u[T]];for(let M=0,W=v.length;M<W;M++){const D=v[M];if(_(D,T,M,f)===!0){const V=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let z=0;z<L.length;z++){const H=L[z],k=S(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,V+B,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(E,w,u,f){const T=E.value,R=w+"_"+u;if(f[R]===void 0)return typeof T=="number"||typeof T=="boolean"?f[R]=T:f[R]=T.clone(),!0;{const v=f[R];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return f[R]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function y(E){const w=E.uniforms;let u=0;const f=16;for(let R=0,v=w.length;R<v;R++){const M=Array.isArray(w[R])?w[R]:[w[R]];for(let W=0,D=M.length;W<D;W++){const V=M[W],L=Array.isArray(V.value)?V.value:[V.value];for(let B=0,z=L.length;B<z;B++){const H=L[B],k=S(H),et=u%f,tt=et%k.boundary,mt=et+tt;u+=tt,mt!==0&&f-mt<k.storage&&(u+=f-mt),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=u,u+=k.storage}}}const T=u%f;return T>0&&(u+=f-T),E.__size=u,E.__cache={},this}function S(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const u=a.indexOf(w.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const TM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function IM(){return vi===null&&(vi=new by(TM,16,16,ks,sr),vi.name="DFG_LUT",vi.minFilter=Sn,vi.magFilter=Sn,vi.wrapS=er,vi.wrapT=er,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class RM{constructor(t={}){const{canvas:e=Qv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:_=ti}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const S=_,m=new Set([ju,qu,Yu]),g=new Set([ti,Ui,Ea,Aa,Zu,Xu]),E=new Uint32Array(4),w=new Int32Array(4);let u=null,f=null;const T=[],R=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let W=!1;this._outputColorSpace=Kn;let D=0,V=0,L=null,B=-1,z=null;const H=new nn,k=new nn;let et=null;const tt=new Ie(0);let mt=0,St=e.width,gt=e.height,ut=1,zt=null,pe=null;const j=new nn(0,0,St,gt),st=new nn(0,0,St,gt);let nt=!1;const le=new Kf;let Zt=!1,ne=!1;const Ut=new on,Et=new X,It=new nn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Gt(){return L===null?ut:1}let C=i;function ue(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gu}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),C===null){const O="webgl2";if(C=ue(O,b),C===null)throw ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ae("WebGLRenderer: "+b.message),b}let re,Ht,xt,I,x,N,q,$,K,wt,ct,Ot,ee,it,ot,Ct,Lt,Mt,me,F,dt,lt,Tt;function rt(){re=new RS(C),re.init(),dt=new yM(C,re),Ht=new SS(C,re,t,dt),xt=new _M(C,re),Ht.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),I=new LS(C),x=new iM,N=new vM(C,re,xt,x,Ht,dt,I),q=new IS(M),$=new Oy(C),lt=new yS(C,$),K=new CS(C,$,I,lt),wt=new NS(C,K,$,lt,I),Mt=new PS(C,Ht,N),ot=new bS(x),ct=new nM(M,q,re,Ht,lt,ot),Ot=new AM(M,x),ee=new sM,it=new hM(re),Lt=new vS(M,q,xt,wt,y,l),Ct=new gM(M,wt,Ht),Tt=new wM(C,I,Ht,xt),me=new xS(C,re,I),F=new DS(C,re,I),I.programs=ct.programs,M.capabilities=Ht,M.extensions=re,M.properties=x,M.renderLists=ee,M.shadowMap=Ct,M.state=xt,M.info=I}rt(),S!==ti&&(v=new US(S,e.width,e.height,r,s));const J=new MM(M,C);this.xr=J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(b){b!==void 0&&(ut=b,this.setSize(St,gt,!1))},this.getSize=function(b){return b.set(St,gt)},this.setSize=function(b,O,Y=!0){if(J.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}St=b,gt=O,e.width=Math.floor(b*ut),e.height=Math.floor(O*ut),Y===!0&&(e.style.width=b+"px",e.style.height=O+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(St*ut,gt*ut).floor()},this.setDrawingBufferSize=function(b,O,Y){St=b,gt=O,ut=Y,e.width=Math.floor(b*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(S===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,O,Y,Z){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,O,Y,Z),xt.viewport(H.copy(j).multiplyScalar(ut).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,O,Y,Z){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,O,Y,Z),xt.scissor(k.copy(st).multiplyScalar(ut).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){xt.setScissorTest(nt=b)},this.setOpaqueSort=function(b){zt=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let Z=0;if(b){let G=!1;if(L!==null){const vt=L.texture.format;G=m.has(vt)}if(G){const vt=L.texture.type,At=g.has(vt),yt=Lt.getClearColor(),Pt=Lt.getClearAlpha(),Bt=yt.r,ce=yt.g,ge=yt.b;At?(E[0]=Bt,E[1]=ce,E[2]=ge,E[3]=Pt,C.clearBufferuiv(C.COLOR,0,E)):(w[0]=Bt,w[1]=ce,w[2]=ge,w[3]=Pt,C.clearBufferiv(C.COLOR,0,w))}else Z|=C.COLOR_BUFFER_BIT}O&&(Z|=C.DEPTH_BUFFER_BIT),Y&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),Lt.dispose(),ee.dispose(),it.dispose(),x.dispose(),q.dispose(),wt.dispose(),lt.dispose(),Tt.dispose(),ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",Rh),J.removeEventListener("sessionend",Ch),Fr.stop()};function Dt(b){b.preventDefault(),Qh("WebGLRenderer: Context Lost."),W=!0}function ae(){Qh("WebGLRenderer: Context Restored."),W=!1;const b=I.autoReset,O=Ct.enabled,Y=Ct.autoUpdate,Z=Ct.needsUpdate,G=Ct.type;rt(),I.autoReset=b,Ct.enabled=O,Ct.autoUpdate=Y,Ct.needsUpdate=Z,Ct.type=G}function Xe(b){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const O=b.target;O.removeEventListener("dispose",Pe),Hi(O)}function Hi(b){ki(b),x.remove(b)}function ki(b){const O=x.get(b).programs;O!==void 0&&(O.forEach(function(Y){ct.releaseProgram(Y)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,Z,G,vt){O===null&&(O=Rt);const At=G.isMesh&&G.matrixWorld.determinant()<0,yt=dm(b,O,Y,Z,G);xt.setMaterial(Z,At);let Pt=Y.index,Bt=1;if(Z.wireframe===!0){if(Pt=K.getWireframeAttribute(Y),Pt===void 0)return;Bt=2}const ce=Y.drawRange,ge=Y.attributes.position;let Vt=ce.start*Bt,ze=(ce.start+ce.count)*Bt;vt!==null&&(Vt=Math.max(Vt,vt.start*Bt),ze=Math.min(ze,(vt.start+vt.count)*Bt)),Pt!==null?(Vt=Math.max(Vt,0),ze=Math.min(ze,Pt.count)):ge!=null&&(Vt=Math.max(Vt,0),ze=Math.min(ze,ge.count));const en=ze-Vt;if(en<0||en===1/0)return;lt.setup(G,Z,yt,Y,Pt);let Qe,He=me;if(Pt!==null&&(Qe=$.get(Pt),He=F,He.setIndex(Qe)),G.isMesh)Z.wireframe===!0?(xt.setLineWidth(Z.wireframeLinewidth*Gt()),He.setMode(C.LINES)):He.setMode(C.TRIANGLES);else if(G.isLine){let vn=Z.linewidth;vn===void 0&&(vn=1),xt.setLineWidth(vn*Gt()),G.isLineSegments?He.setMode(C.LINES):G.isLineLoop?He.setMode(C.LINE_LOOP):He.setMode(C.LINE_STRIP)}else G.isPoints?He.setMode(C.POINTS):G.isSprite&&He.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))He.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const vn=G._multiDrawStarts,Nt=G._multiDrawCounts,Hn=G._multiDrawCount,Ee=Pt?$.get(Pt).bytesPerElement:1,ri=x.get(Z).currentProgram.getUniforms();for(let gi=0;gi<Hn;gi++)ri.setValue(C,"_gl_DrawID",gi),He.render(vn[gi]/Ee,Nt[gi])}else if(G.isInstancedMesh)He.renderInstances(Vt,en,G.count);else if(Y.isInstancedBufferGeometry){const vn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,vn);He.renderInstances(Vt,en,Nt)}else He.render(Vt,en)};function Ih(b,O,Y){b.transparent===!0&&b.side===ui&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,Ga(b,O,Y),b.side=Rr,b.needsUpdate=!0,Ga(b,O,Y),b.side=ui):Ga(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),f=it.get(Y),f.init(O),R.push(f),Y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){const yt=vt[At];Ih(yt,Y,G),Z.add(yt)}else Ih(vt,Y,G),Z.add(vt)}),f=R.pop(),Z},this.compileAsync=function(b,O,Y=null){const Z=this.compile(b,O,Y);return new Promise(G=>{function vt(){if(Z.forEach(function(At){x.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){G(b);return}setTimeout(vt,10)}re.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ll=null;function hm(b){Ll&&Ll(b)}function Rh(){Fr.stop()}function Ch(){Fr.start()}const Fr=new ep;Fr.setAnimationLoop(hm),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(b){Ll=b,J.setAnimationLoop(b),b===null?Fr.stop():Fr.start()},J.addEventListener("sessionstart",Rh),J.addEventListener("sessionend",Ch),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const Y=J.enabled===!0&&J.isPresenting===!0,Z=v!==null&&(L===null||Y)&&v.begin(M,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,L),f=it.get(b,R.length),f.init(O),R.push(f),Ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le.setFromProjectionMatrix(Ut,Ci,O.reversedDepth),ne=this.localClippingEnabled,Zt=ot.init(this.clippingPlanes,ne),u=ee.get(b,T.length),u.init(),T.push(u),J.enabled===!0&&J.isPresenting===!0){const At=M.xr.getDepthSensingMesh();At!==null&&Pl(At,O,-1/0,M.sortObjects)}Pl(b,O,0,M.sortObjects),u.finish(),M.sortObjects===!0&&u.sort(zt,pe),bt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,bt&&Lt.addToRenderList(u,b),this.info.render.frame++,Zt===!0&&ot.beginShadows();const G=f.state.shadowsArray;if(Ct.render(G,b,O),Zt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&v.hasRenderPass())===!1){const At=u.opaque,yt=u.transmissive;if(f.setupLights(),O.isArrayCamera){const Pt=O.cameras;if(yt.length>0)for(let Bt=0,ce=Pt.length;Bt<ce;Bt++){const ge=Pt[Bt];Lh(At,yt,b,ge)}bt&&Lt.render(b);for(let Bt=0,ce=Pt.length;Bt<ce;Bt++){const ge=Pt[Bt];Dh(u,b,ge,ge.viewport)}}else yt.length>0&&Lh(At,yt,b,O),bt&&Lt.render(b),Dh(u,b,O)}L!==null&&V===0&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),Z&&v.end(M),b.isScene===!0&&b.onAfterRender(M,b,O),lt.resetDefaultState(),B=-1,z=null,R.pop(),R.length>0?(f=R[R.length-1],Zt===!0&&ot.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?u=T[T.length-1]:u=null};function Pl(b,O,Y,Z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){Z&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ut);const At=wt.update(b),yt=b.material;yt.visible&&u.push(b,At,yt,Y,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){const At=wt.update(b),yt=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Ut)),Array.isArray(yt)){const Pt=At.groups;for(let Bt=0,ce=Pt.length;Bt<ce;Bt++){const ge=Pt[Bt],Vt=yt[ge.materialIndex];Vt&&Vt.visible&&u.push(b,At,Vt,Y,It.z,ge)}}else yt.visible&&u.push(b,At,yt,Y,It.z,null)}}const vt=b.children;for(let At=0,yt=vt.length;At<yt;At++)Pl(vt[At],O,Y,Z)}function Dh(b,O,Y,Z){const{opaque:G,transmissive:vt,transparent:At}=b;f.setupLightsView(Y),Zt===!0&&ot.setGlobalState(M.clippingPlanes,Y),Z&&xt.viewport(H.copy(Z)),G.length>0&&ka(G,O,Y),vt.length>0&&ka(vt,O,Y),At.length>0&&ka(At,O,Y),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Lh(b,O,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[Z.id]===void 0){const Vt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");f.state.transmissionRenderTarget[Z.id]=new Ni(1,1,{generateMipmaps:!0,type:Vt?sr:ti,minFilter:qr,samples:Math.max(4,Ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace})}const vt=f.state.transmissionRenderTarget[Z.id],At=Z.viewport||H;vt.setSize(At.z*M.transmissionResolutionScale,At.w*M.transmissionResolutionScale);const yt=M.getRenderTarget(),Pt=M.getActiveCubeFace(),Bt=M.getActiveMipmapLevel();M.setRenderTarget(vt),M.getClearColor(tt),mt=M.getClearAlpha(),mt<1&&M.setClearColor(16777215,.5),M.clear(),bt&&Lt.render(Y);const ce=M.toneMapping;M.toneMapping=Pi;const ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),Zt===!0&&ot.setGlobalState(M.clippingPlanes,Z),ka(b,Y,Z),N.updateMultisampleRenderTarget(vt),N.updateRenderTargetMipmap(vt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ze=0,en=O.length;ze<en;ze++){const Qe=O[ze],{object:He,geometry:vn,material:Nt,group:Hn}=Qe;if(Nt.side===ui&&He.layers.test(Z.layers)){const Ee=Nt.side;Nt.side=Bn,Nt.needsUpdate=!0,Ph(He,Y,Z,vn,Nt,Hn),Nt.side=Ee,Nt.needsUpdate=!0,Vt=!0}}Vt===!0&&(N.updateMultisampleRenderTarget(vt),N.updateRenderTargetMipmap(vt))}M.setRenderTarget(yt,Pt,Bt),M.setClearColor(tt,mt),ge!==void 0&&(Z.viewport=ge),M.toneMapping=ce}function ka(b,O,Y){const Z=O.isScene===!0?O.overrideMaterial:null;for(let G=0,vt=b.length;G<vt;G++){const At=b[G],{object:yt,geometry:Pt,group:Bt}=At;let ce=At.material;ce.allowOverride===!0&&Z!==null&&(ce=Z),yt.layers.test(Y.layers)&&Ph(yt,O,Y,Pt,ce,Bt)}}function Ph(b,O,Y,Z,G,vt){b.onBeforeRender(M,O,Y,Z,G,vt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(M,O,Y,Z,b,vt),G.transparent===!0&&G.side===ui&&G.forceSinglePass===!1?(G.side=Bn,G.needsUpdate=!0,M.renderBufferDirect(Y,O,Z,G,b,vt),G.side=Rr,G.needsUpdate=!0,M.renderBufferDirect(Y,O,Z,G,b,vt),G.side=ui):M.renderBufferDirect(Y,O,Z,G,b,vt),b.onAfterRender(M,O,Y,Z,G,vt)}function Ga(b,O,Y){O.isScene!==!0&&(O=Rt);const Z=x.get(b),G=f.state.lights,vt=f.state.shadowsArray,At=G.state.version,yt=ct.getParameters(b,G.state,vt,O,Y),Pt=ct.getProgramCacheKey(yt);let Bt=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;const ce=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=q.get(b.envMap||Z.environment,ce),Z.envMapRotation=Z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",Pe),Bt=new Map,Z.programs=Bt);let ge=Bt.get(Pt);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===At)return Fh(b,yt),ge}else yt.uniforms=ct.getUniforms(b),b.onBeforeCompile(yt,M),ge=ct.acquireProgram(yt,Pt),Bt.set(Pt,ge),Z.uniforms=yt.uniforms;const Vt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=ot.uniform),Fh(b,yt),Z.needsLights=pm(b),Z.lightsStateVersion=At,Z.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=ge,Z.uniformsList=null,ge}function Nh(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ao.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Fh(b,O){const Y=x.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function dm(b,O,Y,Z,G){O.isScene!==!0&&(O=Rt),N.resetTextureUnits();const vt=O.fog,At=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,yt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gs,Pt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Bt=q.get(Z.envMap||At,Pt),ce=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ge=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Vt=!!Y.morphAttributes.position,ze=!!Y.morphAttributes.normal,en=!!Y.morphAttributes.color;let Qe=Pi;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Qe=M.toneMapping);const He=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vn=He!==void 0?He.length:0,Nt=x.get(Z),Hn=f.state.lights;if(Zt===!0&&(ne===!0||b!==z)){const fn=b===z&&Z.id===B;ot.setState(Z,b,fn)}let Ee=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Hn.state.version||Nt.outputColorSpace!==yt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Bt||Z.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==ce||Nt.vertexTangents!==ge||Nt.morphTargets!==Vt||Nt.morphNormals!==ze||Nt.morphColors!==en||Nt.toneMapping!==Qe||Nt.morphTargetsCount!==vn)&&(Ee=!0):(Ee=!0,Nt.__version=Z.version);let ri=Nt.currentProgram;Ee===!0&&(ri=Ga(Z,O,G));let gi=!1,Ur=!1,is=!1;const We=ri.getUniforms(),gn=Nt.uniforms;if(xt.useProgram(ri.program)&&(gi=!0,Ur=!0,is=!0),Z.id!==B&&(B=Z.id,Ur=!0),gi||z!==b){xt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),We.setValue(C,"projectionMatrix",b.projectionMatrix),We.setValue(C,"viewMatrix",b.matrixWorldInverse);const fr=We.map.cameraPosition;fr!==void 0&&fr.setValue(C,Et.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&We.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&We.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,Ur=!0,is=!0)}if(Nt.needsLights&&(Hn.state.directionalShadowMap.length>0&&We.setValue(C,"directionalShadowMap",Hn.state.directionalShadowMap,N),Hn.state.spotShadowMap.length>0&&We.setValue(C,"spotShadowMap",Hn.state.spotShadowMap,N),Hn.state.pointShadowMap.length>0&&We.setValue(C,"pointShadowMap",Hn.state.pointShadowMap,N)),G.isSkinnedMesh){We.setOptional(C,G,"bindMatrix"),We.setOptional(C,G,"bindMatrixInverse");const fn=G.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),We.setValue(C,"boneTexture",fn.boneTexture,N))}G.isBatchedMesh&&(We.setOptional(C,G,"batchingTexture"),We.setValue(C,"batchingTexture",G._matricesTexture,N),We.setOptional(C,G,"batchingIdTexture"),We.setValue(C,"batchingIdTexture",G._indirectTexture,N),We.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&We.setValue(C,"batchingColorTexture",G._colorsTexture,N));const dr=Y.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Mt.update(G,Y,ri),(Ur||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,We.setValue(C,"receiveShadow",G.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=IM()),Ur&&(We.setValue(C,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&fm(gn,is),vt&&Z.fog===!0&&Ot.refreshFogUniforms(gn,vt),Ot.refreshMaterialUniforms(gn,Z,ut,gt,f.state.transmissionRenderTarget[b.id]),Ao.upload(C,Nh(Nt),gn,N)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ao.upload(C,Nh(Nt),gn,N),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&We.setValue(C,"center",G.center),We.setValue(C,"modelViewMatrix",G.modelViewMatrix),We.setValue(C,"normalMatrix",G.normalMatrix),We.setValue(C,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let fr=0,rs=fn.length;fr<rs;fr++){const Uh=fn[fr];Tt.update(Uh,ri),Tt.bind(Uh,ri)}}return ri}function fm(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function pm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,O,Y){const Z=x.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=O,x.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Y=x.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const mm=C.createFramebuffer();this.setRenderTarget=function(b,O=0,Y=0){L=b,D=O,V=Y;let Z=null,G=!1,vt=!1;if(b){const yt=x.get(b);if(yt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(C.FRAMEBUFFER,yt.__webglFramebuffer),H.copy(b.viewport),k.copy(b.scissor),et=b.scissorTest,xt.viewport(H),xt.scissor(k),xt.setScissorTest(et),B=-1;return}else if(yt.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(yt.__hasExternalTextures)N.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ce=b.depthTexture;if(yt.__boundDepthTexture!==ce){if(ce!==null&&x.has(ce)&&(b.width!==ce.image.width||b.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(vt=!0);const Bt=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?Z=Bt[O][Y]:Z=Bt[O],G=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?Z=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?Z=Bt[Y]:Z=Bt,H.copy(b.viewport),k.copy(b.scissor),et=b.scissorTest}else H.copy(j).multiplyScalar(ut).floor(),k.copy(st).multiplyScalar(ut).floor(),et=nt;if(Y!==0&&(Z=mm),xt.bindFramebuffer(C.FRAMEBUFFER,Z)&&xt.drawBuffers(b,Z),xt.viewport(H),xt.scissor(k),xt.setScissorTest(et),G){const yt=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,Y)}else if(vt){const yt=O;for(let Pt=0;Pt<b.textures.length;Pt++){const Bt=x.get(b.textures[Pt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pt,Bt.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){const yt=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,yt.__webglTexture,Y)}B=-1},this.readRenderTargetPixels=function(b,O,Y,Z,G,vt,At,yt=0){if(!(b&&b.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){xt.bindFramebuffer(C.FRAMEBUFFER,Pt);try{const Bt=b.textures[yt],ce=Bt.format,ge=Bt.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+yt),!Ht.textureFormatReadable(ce)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(ge)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Z&&Y>=0&&Y<=b.height-G&&C.readPixels(O,Y,Z,G,dt.convert(ce),dt.convert(ge),vt)}finally{const Bt=L!==null?x.get(L).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,Z,G,vt,At,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(O>=0&&O<=b.width-Z&&Y>=0&&Y<=b.height-G){xt.bindFramebuffer(C.FRAMEBUFFER,Pt);const Bt=b.textures[yt],ce=Bt.format,ge=Bt.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+yt),!Ht.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(O,Y,Z,G,dt.convert(ce),dt.convert(ge),0);const ze=L!==null?x.get(L).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,ze);const en=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $v(C,en,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Vt),C.deleteSync(en),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){const Z=Math.pow(2,-Y),G=Math.floor(b.image.width*Z),vt=Math.floor(b.image.height*Z),At=O!==null?O.x:0,yt=O!==null?O.y:0;N.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,At,yt,G,vt),xt.unbindTexture()};const gm=C.createFramebuffer(),_m=C.createFramebuffer();this.copyTextureToTexture=function(b,O,Y=null,Z=null,G=0,vt=0){let At,yt,Pt,Bt,ce,ge,Vt,ze,en;const Qe=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(Y!==null)At=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Bt=Y.min.x,ce=Y.min.y,ge=Y.isBox3?Y.min.z:0;else{const gn=Math.pow(2,-G);At=Math.floor(Qe.width*gn),yt=Math.floor(Qe.height*gn),b.isDataArrayTexture?Pt=Qe.depth:b.isData3DTexture?Pt=Math.floor(Qe.depth*gn):Pt=1,Bt=0,ce=0,ge=0}Z!==null?(Vt=Z.x,ze=Z.y,en=Z.z):(Vt=0,ze=0,en=0);const He=dt.convert(O.format),vn=dt.convert(O.type);let Nt;O.isData3DTexture?(N.setTexture3D(O,0),Nt=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),Nt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),Nt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const Hn=C.getParameter(C.UNPACK_ROW_LENGTH),Ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ri=C.getParameter(C.UNPACK_SKIP_PIXELS),gi=C.getParameter(C.UNPACK_SKIP_ROWS),Ur=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ge);const is=b.isDataArrayTexture||b.isData3DTexture,We=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const gn=x.get(b),dr=x.get(O),fn=x.get(gn.__renderTarget),fr=x.get(dr.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,fn.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let rs=0;rs<Pt;rs++)is&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(b).__webglTexture,G,ge+rs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(O).__webglTexture,vt,en+rs)),C.blitFramebuffer(Bt,ce,At,yt,Vt,ze,At,yt,C.DEPTH_BUFFER_BIT,C.NEAREST);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||x.has(b)){const gn=x.get(b),dr=x.get(O);xt.bindFramebuffer(C.READ_FRAMEBUFFER,gm),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,_m);for(let fn=0;fn<Pt;fn++)is?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gn.__webglTexture,G,ge+fn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,gn.__webglTexture,G),We?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dr.__webglTexture,vt,en+fn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dr.__webglTexture,vt),G!==0?C.blitFramebuffer(Bt,ce,At,yt,Vt,ze,At,yt,C.COLOR_BUFFER_BIT,C.NEAREST):We?C.copyTexSubImage3D(Nt,vt,Vt,ze,en+fn,Bt,ce,At,yt):C.copyTexSubImage2D(Nt,vt,Vt,ze,Bt,ce,At,yt);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else We?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Nt,vt,Vt,ze,en,At,yt,Pt,He,vn,Qe.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,vt,Vt,ze,en,At,yt,Pt,He,Qe.data):C.texSubImage3D(Nt,vt,Vt,ze,en,At,yt,Pt,He,vn,Qe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,Vt,ze,At,yt,He,vn,Qe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,Vt,ze,Qe.width,Qe.height,He,Qe.data):C.texSubImage2D(C.TEXTURE_2D,vt,Vt,ze,At,yt,He,vn,Qe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Hn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ri),C.pixelStorei(C.UNPACK_SKIP_ROWS,gi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ur),vt===0&&O.generateMipmaps&&C.generateMipmap(Nt),xt.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){D=0,V=0,L=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class CM{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Ie("#ffffff");async initialize(t){this.canvas=t,this.renderer=new RM({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new my,this.camera=new th(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Ua(1,1);this.geometryCache.set("plane",e),this.updateThemeColors(),this.themeObserver=new MutationObserver(i=>{for(let r=0;r<i.length;r++)if(i[r].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize()}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Ie(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=0,this.camera.bottom=this.height,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Go({color:16777215,transparent:!0,depthWrite:!1,side:ui});e=new pi(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Go({transparent:!0,depthWrite:!1,side:ui});e=new pi(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function se(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(h){try{c(i.next(h))}catch(p){a(p)}}function l(h){try{c(i.throw(h))}catch(p){a(p)}}function c(h){h.done?s(h.value):r(h.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Vd(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function de(n){return this instanceof de?(this.v=n,this):new de(n)}function Di(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(y){return Promise.resolve(y).then(_,p)}}function o(_,y){i[_]&&(r[_]=function(S){return new Promise(function(m,g){s.push([_,S,m,g])>1||l(_,S)})},y&&(r[_]=y(r[_])))}function l(_,y){try{c(i[_](y))}catch(S){d(s[0][3],S)}}function c(_){_.value instanceof de?Promise.resolve(_.value.v).then(h,p):d(s[0][2],_)}function h(_){l("next",_)}function p(_){l("throw",_)}function d(_,y){_(y),s.shift(),s.length&&l(s[0][0],s[0][1])}}function wo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:de(n[r](a)),done:!1}:s?s(a):a}:s}}function Jr(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Vd=="function"?Vd(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const DM=new TextDecoder("utf-8"),Iu=n=>DM.decode(n),LM=new TextEncoder,eh=n=>LM.encode(n),PM=n=>typeof n=="number",op=n=>typeof n=="boolean",ln=n=>typeof n=="function",Vn=n=>n!=null&&Object(n)===n,$r=n=>Vn(n)&&ln(n.then),Oa=n=>Vn(n)&&ln(n[Symbol.iterator]),$s=n=>Vn(n)&&ln(n[Symbol.asyncIterator]),Ru=n=>Vn(n)&&Vn(n.schema),lp=n=>Vn(n)&&"done"in n&&"value"in n,cp=n=>Vn(n)&&ln(n.stat)&&PM(n.fd),up=n=>Vn(n)&&nh(n.body),Tl=n=>"_getDOMStream"in n&&"_getNodeStream"in n,NM=n=>Vn(n)&&ln(n.abort)&&ln(n.getWriter)&&!Tl(n),nh=n=>Vn(n)&&ln(n.cancel)&&ln(n.getReader)&&!Tl(n),FM=n=>Vn(n)&&ln(n.end)&&ln(n.write)&&op(n.writable)&&!Tl(n),hp=n=>Vn(n)&&ln(n.read)&&ln(n.pipe)&&op(n.readable)&&!Tl(n),UM=n=>Vn(n)&&ln(n.clear)&&ln(n.bytes)&&ln(n.position)&&ln(n.setPosition)&&ln(n.capacity)&&ln(n.getBufferIdentifier)&&ln(n.createLong),ih=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function OM(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,h=n.length;++l<h;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function zd(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Bi(n,t){const e=OM(n),i=e.reduce((h,p)=>h+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const h=e.length;++l<h;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?zd(a,s,o):a=s;break}zd(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Oe(n,t){let e=lp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=eh(e)),e instanceof ArrayBuffer?new n(e):e instanceof ih?new n(e):UM(e)?Oe(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const ca=n=>Oe(Int32Array,n),Hd=n=>Oe(BigInt64Array,n),xe=n=>Oe(Uint8Array,n),Cu=n=>(n.next(),n);function*BM(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof ih?e(t):Oa(t)?t:e(t);return yield*Cu((function*(r){let s=null;do s=r.next(yield Oe(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const VM=n=>BM(Uint8Array,n);function dp(n,t){return Di(this,arguments,function*(){if($r(t))return yield de(yield de(yield*wo(Jr(dp(n,yield de(t))))));const i=function(a){return Di(this,arguments,function*(){yield yield de(yield de(a))})},r=function(a){return Di(this,arguments,function*(){yield de(yield*wo(Jr(Cu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof ih?i(t):Oa(t)?r(t):$s(t)?t:i(t);return yield de(yield*wo(Jr(Cu((function(a){return Di(this,arguments,function*(){let o=null;do o=yield de(a.next(yield yield de(Oe(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield de(new n)})}const zM=n=>dp(Uint8Array,n);function fp(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function HM(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const Jn={fromIterable(n){return go(kM(n))},fromAsyncIterable(n){return go(GM(n))},fromDOMStream(n){return go(WM(n))},fromNodeStream(n){return go(XM(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},go=n=>(n.next(),n);function*kM(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Bi(i,a)[0]:([r,i,o]=Bi(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=VM(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(h){(e=!0)&&typeof c.throw=="function"&&c.throw(h)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function GM(n){return Di(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Bi(r,o)[0]:([s,r,l]=Bi(r,o),s)}({cmd:a,size:o}=(yield yield de(null))||{cmd:"read",size:0});const h=zM(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield de(h.next()):yield de(h.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield de(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof h.throw=="function"&&(yield de(h.throw(p)))}finally{i===!1&&typeof h.return=="function"&&(yield de(h.return(new Uint8Array(0))))}return yield de(null)})}function WM(n){return Di(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Bi(r,o)[0]:([s,r,l]=Bi(r,o),s)}({cmd:a,size:o}=(yield yield de(null))||{cmd:"read",size:0});const h=new ZM(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield de(h.read()):yield de(h.read(o-l)),!e&&s.byteLength>0&&(r.push(xe(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield de(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield de(h.cancel(p)))}finally{i===!1?yield de(h.cancel()):n.locked&&h.releaseLock()}return yield de(null)})}class ZM{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return se(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return se(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=xe(e)),e})}}const xc=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function XM(n){return Di(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],h;function p(){return a==="peek"?Bi(c,o)[0]:([h,c,l]=Bi(c,o),h)}if({cmd:a,size:o}=(yield yield de(null))||{cmd:"read",size:0},n.isTTY)return yield yield de(new Uint8Array(0)),yield de(null);try{e[0]=xc(n,"end"),e[1]=xc(n,"error");do{if(e[2]=xc(n,"readable"),[i,s]=yield de(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(h=xe(n.read(o-l)),h.byteLength<o-l&&(h=xe(n.read()))):h=xe(n.read()),h.byteLength>0&&(c.push(h),l+=h.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield de(p()));while(o<l)}while(!r)}finally{yield de(d(e,i==="error"?s:null))}return yield de(null);function d(_,y){return h=c=null,new Promise((S,m)=>{for(const[g,E]of _)n.off(g,E);try{const g=n.destroy;g&&g.call(n,y),y=void 0}catch(g){y=g||y}finally{y!=null?m(y):S()}})}})}var rn;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(rn||(rn={}));var Mn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(Mn||(Mn={}));var bn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(bn||(bn={}));var ni;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(ni||(ni={}));var Kt;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Kt||(Kt={}));var Vi;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Vi||(Vi={}));const Sc=2,Ai=4,$i=4,Le=4,Er=new Int32Array(2),kd=new Float32Array(Er.buffer),Gd=new Float64Array(Er.buffer),_o=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Du;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Du||(Du={}));let Zs=class pp{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new pp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Er[0]=this.readInt32(t),kd[0]}readFloat64(t){return Er[_o?0:1]=this.readInt32(t),Er[_o?1:0]=this.readInt32(t+4),Gd[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){kd[0]=e,this.writeInt32(t,Er[0])}writeFloat64(t,e){Gd[0]=e,this.writeInt32(t,Er[_o?0:1]),this.writeInt32(t+4,Er[_o?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+Ai+$i)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<$i;e++)t+=String.fromCharCode(this.readInt8(this.position_+Ai+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=Ai;const r=this.bytes_.subarray(t,t+i);return e===Du.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+Ai}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=$i)throw new Error("FlatBuffers: file identifier must be length "+$i);for(let e=0;e<$i;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+Ai+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},mp=class gp{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Zs.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=gp.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Zs.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(Ai,0),this.writeInt32(this.offset()-t+Ai)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*Sc;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=Sc;c<s;c+=Sc)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Le:0;if(e){const s=e;if(this.prep(this.minalign,Ai+$i+r),s.length!=$i)throw new TypeError("FlatBuffers: file identifier must be length "+$i);for(let a=$i-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,Ai+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(Ai,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var Wo;(function(n){n[n.BUFFER=0]="BUFFER"})(Wo||(Wo={}));var Zo;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(Zo||(Zo={}));class Ar{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Ar).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Le),(e||new Ar).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):Zo.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Wo.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,Zo.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Wo.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Ar.startBodyCompression(t),Ar.addCodec(t,e),Ar.addMethod(t,i),Ar.endBodyCompression(t)}}class _p{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let vp=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},ji=class Lu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Lu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Le),(e||new Lu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new vp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new _p).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Ar).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},Ss=class Pu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Pu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Le),(e||new Pu).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new ji).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Xs;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Xs||(Xs={}));var Xo;(function(n){n[n.DenseArray=0]="DenseArray"})(Xo||(Xo={}));class Zn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new Zn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Le),(e||new Zn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return Zn.startInt(t),Zn.addBitWidth(t,e),Zn.addIsSigned(t,i),Zn.endInt(t)}}class tr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new tr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Le),(e||new tr).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Zn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Xo.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Xo.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class cn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new cn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Le),(e||new cn).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return cn.startKeyValue(t),cn.addKey(t,e),cn.addValue(t,i),cn.endKeyValue(t)}}let Wd=class fa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Le),(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return fa.startBinary(t),fa.endBinary(t)}},Zd=class pa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new pa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Le),(e||new pa).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return pa.startBool(t),pa.endBool(t)}},To=class bs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new bs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Le),(e||new bs).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):ni.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,ni.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return bs.startDate(t),bs.addUnit(t,e),bs.endDate(t)}},Ms=class Mr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new Mr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Le),(e||new Mr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return Mr.startDecimal(t),Mr.addPrecision(t,e),Mr.addScale(t,i),Mr.addBitWidth(t,r),Mr.endDecimal(t)}},Io=class Es{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new Es).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Le),(e||new Es).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Kt.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Kt.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return Es.startDuration(t),Es.addUnit(t,e),Es.endDuration(t)}},Ro=class As{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new As).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Le),(e||new As).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return As.startFixedSizeBinary(t),As.addByteWidth(t,e),As.endFixedSizeBinary(t)}},Co=class ws{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Le),(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return ws.startFixedSizeList(t),ws.addListSize(t,e),ws.endFixedSizeList(t)}};class wi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new wi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Le),(e||new wi).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):bn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,bn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return wi.startFloatingPoint(t),wi.addPrecision(t,e),wi.endFloatingPoint(t)}}class Ti{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Le),(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Vi.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Vi.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Ti.startInterval(t),Ti.addUnit(t,e),Ti.endInterval(t)}}let Xd=class ma{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new ma).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Le),(e||new ma).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return ma.startLargeBinary(t),ma.endLargeBinary(t)}},Yd=class ga{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Le),(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return ga.startLargeUtf8(t),ga.endLargeUtf8(t)}},qd=class _a{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Le),(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return _a.startList(t),_a.endList(t)}},Do=class Ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Le),(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return Ts.startMap(t),Ts.addKeysSorted(t,e),Ts.endMap(t)}},jd=class va{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Le),(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return va.startNull(t),va.endNull(t)}};class Kr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new Kr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Le),(e||new Kr).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return Kr.startStruct_(t),Kr.endStruct_(t)}}class Qn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new Qn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Le),(e||new Qn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Kt.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Kt.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return Qn.startTime(t),Qn.addUnit(t,e),Qn.addBitWidth(t,i),Qn.endTime(t)}}class $n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new $n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Le),(e||new $n).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Kt.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Kt.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return $n.startTimestamp(t),$n.addUnit(t,e),$n.addTimezone(t,i),$n.endTimestamp(t)}}class Un{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Un).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Le),(e||new Un).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Mn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,Mn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Un.startUnion(t),Un.addMode(t,e),Un.addTypeIds(t,i),Un.endUnion(t)}}let Kd=class ya{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Le),(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return ya.startUtf8(t),ya.endUtf8(t)}};var Ye;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ye||(Ye={}));let jn=class Lo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Lo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Le),(e||new Lo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ye.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new tr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Lo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ye.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Si=class qi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new qi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Le),(e||new qi).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Xs.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new jn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Xs.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return qi.startSchema(t),qi.addEndianness(t,e),qi.addFields(t,i),qi.addCustomMetadata(t,r),qi.addFeatures(t,s),qi.endSchema(t)}};var we;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(we||(we={}));var P;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(P||(P={}));var Ki;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(Ki||(Ki={}));const YM=void 0;function Ta(n){if(n===null)return"null";if(n===YM)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Ta(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function Ze(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function yp(n,t){return Ze(n/t)+Ze(n%t)/Ze(t)}const qM=Symbol.for("isArrowBigNum");function mi(n,...t){return t.length===0?Object.setPrototypeOf(Oe(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}mi.prototype[qM]=!0;mi.prototype.toJSON=function(){return`"${Ra(this)}"`};mi.prototype.valueOf=function(n){return xp(this,n)};mi.prototype.toString=function(){return Ra(this)};mi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return xp(this);case"string":return Ra(this);case"default":return JM(this)}return Ra(this)};function Fs(...n){return mi.apply(this,n)}function Us(...n){return mi.apply(this,n)}function Ia(...n){return mi.apply(this,n)}Object.setPrototypeOf(Fs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(Us.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Ia.prototype,Object.create(Uint32Array.prototype));Object.assign(Fs.prototype,mi.prototype,{constructor:Fs,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(Us.prototype,mi.prototype,{constructor:Us,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Ia.prototype,mi.prototype,{constructor:Ia,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const jM=BigInt(4294967296)*BigInt(4294967296),KM=jM-BigInt(1);function xp(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const h of a)l|=(h^KM)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const h of a)l|=h*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const h=BigInt(Math.pow(10,t)),p=l/h,d=l%h;return Ze(p)+Ze(d)/Ze(h)}return Ze(l)}function Ra(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return bc(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return bc(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${bc(t)}`}function JM(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Ra(n)}function bc(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class rh{static new(t,e){switch(e){case!0:return new Fs(t);case!1:return new Us(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new Fs(t)}return t.byteLength===16?new Ia(t):new Us(t)}static signed(t){return new Fs(t)}static unsigned(t){return new Us(t)}static decimal(t){return new Ia(t)}constructor(t,e){return rh.new(t,e)}}var Sp,bp,Mp,Ep,Ap,wp,Tp,Ip,Rp,Cp,Dp,Lp,Pp,Np,Fp,Up,Op,Bp,Vp,zp,Hp,kp;class Ft{static isNull(t){return t?.typeId===P.Null}static isInt(t){return t?.typeId===P.Int}static isFloat(t){return t?.typeId===P.Float}static isBinary(t){return t?.typeId===P.Binary}static isLargeBinary(t){return t?.typeId===P.LargeBinary}static isUtf8(t){return t?.typeId===P.Utf8}static isLargeUtf8(t){return t?.typeId===P.LargeUtf8}static isBool(t){return t?.typeId===P.Bool}static isDecimal(t){return t?.typeId===P.Decimal}static isDate(t){return t?.typeId===P.Date}static isTime(t){return t?.typeId===P.Time}static isTimestamp(t){return t?.typeId===P.Timestamp}static isInterval(t){return t?.typeId===P.Interval}static isDuration(t){return t?.typeId===P.Duration}static isList(t){return t?.typeId===P.List}static isStruct(t){return t?.typeId===P.Struct}static isUnion(t){return t?.typeId===P.Union}static isFixedSizeBinary(t){return t?.typeId===P.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===P.FixedSizeList}static isMap(t){return t?.typeId===P.Map}static isDictionary(t){return t?.typeId===P.Dictionary}static isDenseUnion(t){return Ft.isUnion(t)&&t.mode===Mn.Dense}static isSparseUnion(t){return Ft.isUnion(t)&&t.mode===Mn.Sparse}constructor(t){this.typeId=t}}Sp=Symbol.toStringTag;Ft[Sp]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Ft.prototype);class Cr extends Ft{constructor(){super(P.Null)}toString(){return"Null"}}bp=Symbol.toStringTag;Cr[bp]=(n=>n[Symbol.toStringTag]="Null")(Cr.prototype);class ts extends Ft{constructor(t,e){super(P.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Mp=Symbol.toStringTag;ts[Mp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(ts.prototype);class Ca extends ts{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ca.prototype,"ArrayType",{value:Int32Array});class Yo extends Ft{constructor(t){super(P.Float),this.precision=t}get ArrayType(){switch(this.precision){case bn.HALF:return Uint16Array;case bn.SINGLE:return Float32Array;case bn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Ep=Symbol.toStringTag;Yo[Ep]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Yo.prototype);class qo extends Ft{constructor(){super(P.Binary)}toString(){return"Binary"}}Ap=Symbol.toStringTag;qo[Ap]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(qo.prototype);class jo extends Ft{constructor(){super(P.LargeBinary)}toString(){return"LargeBinary"}}wp=Symbol.toStringTag;jo[wp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(jo.prototype);class Ko extends Ft{constructor(){super(P.Utf8)}toString(){return"Utf8"}}Tp=Symbol.toStringTag;Ko[Tp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(Ko.prototype);class Jo extends Ft{constructor(){super(P.LargeUtf8)}toString(){return"LargeUtf8"}}Ip=Symbol.toStringTag;Jo[Ip]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(Jo.prototype);class Qo extends Ft{constructor(){super(P.Bool)}toString(){return"Bool"}}Rp=Symbol.toStringTag;Qo[Rp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(Qo.prototype);class $o extends Ft{constructor(t,e,i=128){super(P.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}Cp=Symbol.toStringTag;$o[Cp]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))($o.prototype);class tl extends Ft{constructor(t){super(P.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${ni[this.unit]}>`}get ArrayType(){return this.unit===ni.DAY?Int32Array:BigInt64Array}}Dp=Symbol.toStringTag;tl[Dp]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(tl.prototype);class el extends Ft{constructor(t,e){super(P.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Kt[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Lp=Symbol.toStringTag;el[Lp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(el.prototype);class nl extends Ft{constructor(t,e){super(P.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Kt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Pp=Symbol.toStringTag;nl[Pp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(nl.prototype);class il extends Ft{constructor(t){super(P.Interval),this.unit=t}toString(){return`Interval<${Vi[this.unit]}>`}}Np=Symbol.toStringTag;il[Np]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(il.prototype);class rl extends Ft{constructor(t){super(P.Duration),this.unit=t}toString(){return`Duration<${Kt[this.unit]}>`}}Fp=Symbol.toStringTag;rl[Fp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(rl.prototype);class sl extends Ft{constructor(t){super(P.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}Up=Symbol.toStringTag;sl[Up]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(sl.prototype);class Cn extends Ft{constructor(t){super(P.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Op=Symbol.toStringTag;Cn[Op]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Cn.prototype);class al extends Ft{constructor(t,e,i){super(P.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}Bp=Symbol.toStringTag;al[Bp]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(al.prototype);class ol extends Ft{constructor(t){super(P.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}Vp=Symbol.toStringTag;ol[Vp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(ol.prototype);class ll extends Ft{constructor(t,e){super(P.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}zp=Symbol.toStringTag;ll[zp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(ll.prototype);class cl extends Ft{constructor(t,e=!1){var i,r,s;if(super(P.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Hp=Symbol.toStringTag;cl[Hp]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(cl.prototype);const QM=(n=>()=>++n)(-1);class Ys extends Ft{constructor(t,e,i,r){super(P.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?QM():Ze(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}kp=Symbol.toStringTag;Ys[kp]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Ys.prototype);function Ji(n){const t=n;switch(n.typeId){case P.Decimal:return n.bitWidth/32;case P.Interval:return 1+t.unit;case P.FixedSizeList:return t.listSize;case P.FixedSizeBinary:return t.byteWidth;default:return 1}}class _e{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return $M(this,t,e)}getVisitFnByTypeId(t,e=!0){return Is(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function $M(n,t,e=!0){return typeof t=="number"?Is(n,t,e):typeof t=="string"&&t in P?Is(n,P[t],e):t&&t instanceof Ft?Is(n,Jd(t),e):t?.type&&t.type instanceof Ft?Is(n,Jd(t.type),e):Is(n,P.NONE,e)}function Is(n,t,e=!0){let i=null;switch(t){case P.Null:i=n.visitNull;break;case P.Bool:i=n.visitBool;break;case P.Int:i=n.visitInt;break;case P.Int8:i=n.visitInt8||n.visitInt;break;case P.Int16:i=n.visitInt16||n.visitInt;break;case P.Int32:i=n.visitInt32||n.visitInt;break;case P.Int64:i=n.visitInt64||n.visitInt;break;case P.Uint8:i=n.visitUint8||n.visitInt;break;case P.Uint16:i=n.visitUint16||n.visitInt;break;case P.Uint32:i=n.visitUint32||n.visitInt;break;case P.Uint64:i=n.visitUint64||n.visitInt;break;case P.Float:i=n.visitFloat;break;case P.Float16:i=n.visitFloat16||n.visitFloat;break;case P.Float32:i=n.visitFloat32||n.visitFloat;break;case P.Float64:i=n.visitFloat64||n.visitFloat;break;case P.Utf8:i=n.visitUtf8;break;case P.LargeUtf8:i=n.visitLargeUtf8;break;case P.Binary:i=n.visitBinary;break;case P.LargeBinary:i=n.visitLargeBinary;break;case P.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case P.Date:i=n.visitDate;break;case P.DateDay:i=n.visitDateDay||n.visitDate;break;case P.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case P.Timestamp:i=n.visitTimestamp;break;case P.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case P.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case P.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case P.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case P.Time:i=n.visitTime;break;case P.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case P.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case P.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case P.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case P.Decimal:i=n.visitDecimal;break;case P.List:i=n.visitList;break;case P.Struct:i=n.visitStruct;break;case P.Union:i=n.visitUnion;break;case P.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case P.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case P.Dictionary:i=n.visitDictionary;break;case P.Interval:i=n.visitInterval;break;case P.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case P.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case P.Duration:i=n.visitDuration;break;case P.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case P.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case P.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case P.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case P.FixedSizeList:i=n.visitFixedSizeList;break;case P.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${P[t]}'`)}function Jd(n){switch(n.typeId){case P.Null:return P.Null;case P.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?P.Int8:P.Uint8;case 16:return e?P.Int16:P.Uint16;case 32:return e?P.Int32:P.Uint32;case 64:return e?P.Int64:P.Uint64}return P.Int}case P.Float:switch(n.precision){case bn.HALF:return P.Float16;case bn.SINGLE:return P.Float32;case bn.DOUBLE:return P.Float64}return P.Float;case P.Binary:return P.Binary;case P.LargeBinary:return P.LargeBinary;case P.Utf8:return P.Utf8;case P.LargeUtf8:return P.LargeUtf8;case P.Bool:return P.Bool;case P.Decimal:return P.Decimal;case P.Time:switch(n.unit){case Kt.SECOND:return P.TimeSecond;case Kt.MILLISECOND:return P.TimeMillisecond;case Kt.MICROSECOND:return P.TimeMicrosecond;case Kt.NANOSECOND:return P.TimeNanosecond}return P.Time;case P.Timestamp:switch(n.unit){case Kt.SECOND:return P.TimestampSecond;case Kt.MILLISECOND:return P.TimestampMillisecond;case Kt.MICROSECOND:return P.TimestampMicrosecond;case Kt.NANOSECOND:return P.TimestampNanosecond}return P.Timestamp;case P.Date:switch(n.unit){case ni.DAY:return P.DateDay;case ni.MILLISECOND:return P.DateMillisecond}return P.Date;case P.Interval:switch(n.unit){case Vi.DAY_TIME:return P.IntervalDayTime;case Vi.YEAR_MONTH:return P.IntervalYearMonth}return P.Interval;case P.Duration:switch(n.unit){case Kt.SECOND:return P.DurationSecond;case Kt.MILLISECOND:return P.DurationMillisecond;case Kt.MICROSECOND:return P.DurationMicrosecond;case Kt.NANOSECOND:return P.DurationNanosecond}return P.Duration;case P.Map:return P.Map;case P.List:return P.List;case P.Struct:return P.Struct;case P.Union:switch(n.mode){case Mn.Dense:return P.DenseUnion;case Mn.Sparse:return P.SparseUnion}return P.Union;case P.FixedSizeBinary:return P.FixedSizeBinary;case P.FixedSizeList:return P.FixedSizeList;case P.Dictionary:return P.Dictionary}throw new Error(`Unrecognized type '${P[n.typeId]}'`)}_e.prototype.visitInt8=null;_e.prototype.visitInt16=null;_e.prototype.visitInt32=null;_e.prototype.visitInt64=null;_e.prototype.visitUint8=null;_e.prototype.visitUint16=null;_e.prototype.visitUint32=null;_e.prototype.visitUint64=null;_e.prototype.visitFloat16=null;_e.prototype.visitFloat32=null;_e.prototype.visitFloat64=null;_e.prototype.visitDateDay=null;_e.prototype.visitDateMillisecond=null;_e.prototype.visitTimestampSecond=null;_e.prototype.visitTimestampMillisecond=null;_e.prototype.visitTimestampMicrosecond=null;_e.prototype.visitTimestampNanosecond=null;_e.prototype.visitTimeSecond=null;_e.prototype.visitTimeMillisecond=null;_e.prototype.visitTimeMicrosecond=null;_e.prototype.visitTimeNanosecond=null;_e.prototype.visitDenseUnion=null;_e.prototype.visitSparseUnion=null;_e.prototype.visitIntervalDayTime=null;_e.prototype.visitIntervalYearMonth=null;_e.prototype.visitDuration=null;_e.prototype.visitDurationSecond=null;_e.prototype.visitDurationMillisecond=null;_e.prototype.visitDurationMicrosecond=null;_e.prototype.visitDurationNanosecond=null;const Gp=new Float64Array(1),xs=new Uint32Array(Gp.buffer);function Wp(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function tE(n){if(n!==n)return 32256;Gp[0]=n;const t=(xs[1]&2147483648)>>16&65535;let e=xs[1]&2146435072,i=0;return e>=1089470464?xs[0]>0?e=31744:(e=(e&2080374784)>>16,i=(xs[1]&1048575)>>10):e<=1056964608?(i=1048576+(xs[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(xs[1]&1048575)+512>>10),t|e|i&65535}class Jt extends _e{}function te(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const eE=(n,t,e)=>{n[t]=Math.floor(e/864e5)},Zp=(n,t,e,i)=>{if(e+1<t.length){const r=Ze(t[e]),s=Ze(t[e+1]);n.set(i.subarray(0,s-r),r)}},nE=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},cr=({values:n},t,e)=>{n[t]=e},sh=({values:n},t,e)=>{n[t]=e},Xp=({values:n},t,e)=>{n[t]=tE(e)},iE=(n,t,e)=>{switch(n.type.precision){case bn.HALF:return Xp(n,t,e);case bn.SINGLE:case bn.DOUBLE:return sh(n,t,e)}},Yp=({values:n},t,e)=>{eE(n,t,e.valueOf())},qp=({values:n},t,e)=>{n[t]=BigInt(e)},rE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},jp=({values:n,valueOffsets:t},e,i)=>Zp(n,t,e,i),Kp=({values:n,valueOffsets:t},e,i)=>Zp(n,t,e,eh(i)),sE=(n,t,e)=>{n.type.unit===ni.DAY?Yp(n,t,e):qp(n,t,e)},Jp=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},Qp=({values:n},t,e)=>{n[t]=BigInt(e)},$p=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},t0=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},aE=(n,t,e)=>{switch(n.type.unit){case Kt.SECOND:return Jp(n,t,e);case Kt.MILLISECOND:return Qp(n,t,e);case Kt.MICROSECOND:return $p(n,t,e);case Kt.NANOSECOND:return t0(n,t,e)}},e0=({values:n},t,e)=>{n[t]=e},n0=({values:n},t,e)=>{n[t]=e},i0=({values:n},t,e)=>{n[t]=e},r0=({values:n},t,e)=>{n[t]=e},oE=(n,t,e)=>{switch(n.type.unit){case Kt.SECOND:return e0(n,t,e);case Kt.MILLISECOND:return n0(n,t,e);case Kt.MICROSECOND:return i0(n,t,e);case Kt.NANOSECOND:return r0(n,t,e)}},lE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},cE=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=ii.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},uE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=ii.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},hE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),dE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),fE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),pE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),mE=(n,t,e)=>{const i=n.type.children.map(s=>ii.getVisitFn(s.type)),r=e instanceof Map?fE(t,e):e instanceof Re?dE(t,e):Array.isArray(e)?hE(t,e):pE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},gE=(n,t,e)=>{n.type.mode===Mn.Dense?s0(n,t,e):a0(n,t,e)},s0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ii.visit(r,n.valueOffsets[t],e)},a0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ii.visit(r,t,e)},_E=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},vE=(n,t,e)=>{n.type.unit===Vi.DAY_TIME?o0(n,t,e):l0(n,t,e)},o0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},l0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},c0=({values:n},t,e)=>{n[t]=e},u0=({values:n},t,e)=>{n[t]=e},h0=({values:n},t,e)=>{n[t]=e},d0=({values:n},t,e)=>{n[t]=e},yE=(n,t,e)=>{switch(n.type.unit){case Kt.SECOND:return c0(n,t,e);case Kt.MILLISECOND:return u0(n,t,e);case Kt.MICROSECOND:return h0(n,t,e);case Kt.NANOSECOND:return d0(n,t,e)}},xE=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=ii.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Jt.prototype.visitBool=te(nE);Jt.prototype.visitInt=te(cr);Jt.prototype.visitInt8=te(cr);Jt.prototype.visitInt16=te(cr);Jt.prototype.visitInt32=te(cr);Jt.prototype.visitInt64=te(cr);Jt.prototype.visitUint8=te(cr);Jt.prototype.visitUint16=te(cr);Jt.prototype.visitUint32=te(cr);Jt.prototype.visitUint64=te(cr);Jt.prototype.visitFloat=te(iE);Jt.prototype.visitFloat16=te(Xp);Jt.prototype.visitFloat32=te(sh);Jt.prototype.visitFloat64=te(sh);Jt.prototype.visitUtf8=te(Kp);Jt.prototype.visitLargeUtf8=te(Kp);Jt.prototype.visitBinary=te(jp);Jt.prototype.visitLargeBinary=te(jp);Jt.prototype.visitFixedSizeBinary=te(rE);Jt.prototype.visitDate=te(sE);Jt.prototype.visitDateDay=te(Yp);Jt.prototype.visitDateMillisecond=te(qp);Jt.prototype.visitTimestamp=te(aE);Jt.prototype.visitTimestampSecond=te(Jp);Jt.prototype.visitTimestampMillisecond=te(Qp);Jt.prototype.visitTimestampMicrosecond=te($p);Jt.prototype.visitTimestampNanosecond=te(t0);Jt.prototype.visitTime=te(oE);Jt.prototype.visitTimeSecond=te(e0);Jt.prototype.visitTimeMillisecond=te(n0);Jt.prototype.visitTimeMicrosecond=te(i0);Jt.prototype.visitTimeNanosecond=te(r0);Jt.prototype.visitDecimal=te(lE);Jt.prototype.visitList=te(cE);Jt.prototype.visitStruct=te(mE);Jt.prototype.visitUnion=te(gE);Jt.prototype.visitDenseUnion=te(s0);Jt.prototype.visitSparseUnion=te(a0);Jt.prototype.visitDictionary=te(_E);Jt.prototype.visitInterval=te(vE);Jt.prototype.visitIntervalDayTime=te(o0);Jt.prototype.visitIntervalYearMonth=te(l0);Jt.prototype.visitDuration=te(yE);Jt.prototype.visitDurationSecond=te(c0);Jt.prototype.visitDurationMillisecond=te(u0);Jt.prototype.visitDurationMicrosecond=te(h0);Jt.prototype.visitDurationNanosecond=te(d0);Jt.prototype.visitFixedSizeList=te(xE);Jt.prototype.visitMap=te(uE);const ii=new Jt,li=Symbol.for("parent"),Os=Symbol.for("rowIndex");class ah{constructor(t,e){return this[li]=t,this[Os]=e,new Proxy(this,new bE)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Os],e=this[li],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=zn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Ta(t)}: ${Ta(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new SE(this[li],this[Os])}}class SE{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,zn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(ah.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[li]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Os]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class bE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[li].type.children.map(e=>e.name)}has(t,e){return t[li].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[li].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[li].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=zn.visit(t[li].children[i],t[Os]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[li].type.children.findIndex(s=>s.name===e);return r!==-1?(ii.visit(t[li].children[r],t[Os],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Xt extends _e{}function Qt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const ME=(n,t)=>864e5*n[t],EE=(n,t)=>null,f0=(n,t,e)=>{if(e+1>=t.length)return null;const i=Ze(t[e]),r=Ze(t[e+1]);return n.subarray(i,r)},AE=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},p0=({values:n},t)=>ME(n,t),m0=({values:n},t)=>Ze(n[t]),Nr=({stride:n,values:t},e)=>t[n*e],wE=({stride:n,values:t},e)=>Wp(t[n*e]),g0=({values:n},t)=>n[t],TE=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),_0=({values:n,valueOffsets:t},e)=>f0(n,t,e),v0=({values:n,valueOffsets:t},e)=>{const i=f0(n,t,e);return i!==null?Iu(i):null},IE=({values:n},t)=>n[t],RE=({type:n,values:t},e)=>n.precision!==bn.HALF?t[e]:Wp(t[e]),CE=(n,t)=>n.type.unit===ni.DAY?p0(n,t):m0(n,t),y0=({values:n},t)=>1e3*Ze(n[t]),x0=({values:n},t)=>Ze(n[t]),S0=({values:n},t)=>yp(n[t],BigInt(1e3)),b0=({values:n},t)=>yp(n[t],BigInt(1e6)),DE=(n,t)=>{switch(n.type.unit){case Kt.SECOND:return y0(n,t);case Kt.MILLISECOND:return x0(n,t);case Kt.MICROSECOND:return S0(n,t);case Kt.NANOSECOND:return b0(n,t)}},M0=({values:n},t)=>n[t],E0=({values:n},t)=>n[t],A0=({values:n},t)=>n[t],w0=({values:n},t)=>n[t],LE=(n,t)=>{switch(n.type.unit){case Kt.SECOND:return M0(n,t);case Kt.MILLISECOND:return E0(n,t);case Kt.MICROSECOND:return A0(n,t);case Kt.NANOSECOND:return w0(n,t)}},PE=({values:n,stride:t},e)=>rh.decimal(n.subarray(t*e,t*(e+1))),NE=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new Re([l])},FE=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new oh(a.slice(r,s-r))},UE=(n,t)=>new ah(n,t),OE=(n,t)=>n.type.mode===Mn.Dense?T0(n,t):I0(n,t),T0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return zn.visit(i,n.valueOffsets[t])},I0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return zn.visit(i,t)},BE=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},VE=(n,t)=>n.type.unit===Vi.DAY_TIME?R0(n,t):C0(n,t),R0=({values:n},t)=>n.subarray(2*t,2*(t+1)),C0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},D0=({values:n},t)=>n[t],L0=({values:n},t)=>n[t],P0=({values:n},t)=>n[t],N0=({values:n},t)=>n[t],zE=(n,t)=>{switch(n.type.unit){case Kt.SECOND:return D0(n,t);case Kt.MILLISECOND:return L0(n,t);case Kt.MICROSECOND:return P0(n,t);case Kt.NANOSECOND:return N0(n,t)}},HE=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new Re([s])};Xt.prototype.visitNull=Qt(EE);Xt.prototype.visitBool=Qt(AE);Xt.prototype.visitInt=Qt(IE);Xt.prototype.visitInt8=Qt(Nr);Xt.prototype.visitInt16=Qt(Nr);Xt.prototype.visitInt32=Qt(Nr);Xt.prototype.visitInt64=Qt(g0);Xt.prototype.visitUint8=Qt(Nr);Xt.prototype.visitUint16=Qt(Nr);Xt.prototype.visitUint32=Qt(Nr);Xt.prototype.visitUint64=Qt(g0);Xt.prototype.visitFloat=Qt(RE);Xt.prototype.visitFloat16=Qt(wE);Xt.prototype.visitFloat32=Qt(Nr);Xt.prototype.visitFloat64=Qt(Nr);Xt.prototype.visitUtf8=Qt(v0);Xt.prototype.visitLargeUtf8=Qt(v0);Xt.prototype.visitBinary=Qt(_0);Xt.prototype.visitLargeBinary=Qt(_0);Xt.prototype.visitFixedSizeBinary=Qt(TE);Xt.prototype.visitDate=Qt(CE);Xt.prototype.visitDateDay=Qt(p0);Xt.prototype.visitDateMillisecond=Qt(m0);Xt.prototype.visitTimestamp=Qt(DE);Xt.prototype.visitTimestampSecond=Qt(y0);Xt.prototype.visitTimestampMillisecond=Qt(x0);Xt.prototype.visitTimestampMicrosecond=Qt(S0);Xt.prototype.visitTimestampNanosecond=Qt(b0);Xt.prototype.visitTime=Qt(LE);Xt.prototype.visitTimeSecond=Qt(M0);Xt.prototype.visitTimeMillisecond=Qt(E0);Xt.prototype.visitTimeMicrosecond=Qt(A0);Xt.prototype.visitTimeNanosecond=Qt(w0);Xt.prototype.visitDecimal=Qt(PE);Xt.prototype.visitList=Qt(NE);Xt.prototype.visitStruct=Qt(UE);Xt.prototype.visitUnion=Qt(OE);Xt.prototype.visitDenseUnion=Qt(T0);Xt.prototype.visitSparseUnion=Qt(I0);Xt.prototype.visitDictionary=Qt(BE);Xt.prototype.visitInterval=Qt(VE);Xt.prototype.visitIntervalDayTime=Qt(R0);Xt.prototype.visitIntervalYearMonth=Qt(C0);Xt.prototype.visitDuration=Qt(zE);Xt.prototype.visitDurationSecond=Qt(D0);Xt.prototype.visitDurationMillisecond=Qt(L0);Xt.prototype.visitDurationMicrosecond=Qt(P0);Xt.prototype.visitDurationNanosecond=Qt(N0);Xt.prototype.visitFixedSizeList=Qt(HE);Xt.prototype.visitMap=Qt(FE);const zn=new Xt,Rs=Symbol.for("keys"),Bs=Symbol.for("vals"),Cs=Symbol.for("kKeysAsStrings"),Nu=Symbol.for("_kKeysAsStrings");class oh{constructor(t){return this[Rs]=new Re([t.children[0]]).memoize(),this[Bs]=t.children[1],new Proxy(this,new GE)}get[Cs](){return this[Nu]||(this[Nu]=Array.from(this[Rs].toArray(),String))}[Symbol.iterator](){return new kE(this[Rs],this[Bs])}get size(){return this[Rs].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Rs],e=this[Bs],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=zn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Ta(t)}: ${Ta(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class kE{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),zn.visit(this.vals,t)]})}}class GE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Cs]}has(t,e){return t[Cs].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Cs].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Cs].indexOf(e);if(i!==-1){const r=zn.visit(Reflect.get(t,Bs),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Cs].indexOf(e);return r!==-1?(ii.visit(Reflect.get(t,Bs),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(oh.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Rs]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Bs]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Nu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let Qd;function F0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(Qd=s,s=a,a=Qd),a>r&&(a=r),i?i(n,s,a):[s,a]}const lh=(n,t)=>n<0?t+n:n,$d=n=>n!==n;function ta(n){if(typeof n!=="object"||n===null)return $d(n)?$d:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?HM(n,e):!1:n instanceof Map?ZE(n):Array.isArray(n)?WE(n):n instanceof Re?XE(n):YE(n,!0)}function WE(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ta(n[e]);return Il(t)}function ZE(n){let t=-1;const e=[];for(const i of n.values())e[++t]=ta(i);return Il(e)}function XE(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ta(n.get(e));return Il(t)}function YE(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=ta(n[e[r]]);return Il(i,e)}function Il(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return qE(n,e);case Map:return tf(n,e,e.keys());case oh:case ah:case Object:case void 0:return tf(n,e,t||Object.keys(e))}return e instanceof Re?jE(n,e):!1}}function qE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function jE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function tf(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),h=r.next();for(;a<o&&!c.done&&!h.done&&!l.done&&!(c.value!==h.value||!n[a](l.value));++a,c=i.next(),h=r.next(),l=s.next());return a===o&&c.done&&h.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function U0(n,t,e,i){return(e&1<<i)!==0}function KE(n,t,e,i){return(e&1<<i)>>i}function ul(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):hl(new ch(e,n,t,null,U0)).subarray(0,i)),r}return e}function hl(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class ch{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Fu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new ch(n,t,e-t,n,KE))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Fu(n,t,r)+Fu(n,i,e)+JE(n,r>>3,i-r>>3)}function JE(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=Mc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=Mc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=Mc(s.getUint8(r)),r+=1;return i}function Mc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const QE=-1;class Ne{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Ft.isSparseUnion(t)?this.children.some(e=>e.nullable):Ft.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Ft.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=QE&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Fu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Ne?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=Ji(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Ft.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===Mn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Ft.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===Mn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,h=l>>3;(!s||s.byteLength<=h)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(ul(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[h];i=(p&c)!==0,s[h]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Ne(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===P.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(ul(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[Ki.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[Ki.TYPE])&&(a[Ki.TYPE]=s.subarray(t,t+e)),(s=a[Ki.OFFSET])&&(a[Ki.OFFSET]=s.subarray(t,t+e+1))||(s=a[Ki.DATA])&&(a[Ki.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Ne.prototype.children=Object.freeze([]);class ba extends _e{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Ne(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.data),s=xe(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.data),s=xe(t.nullBitmap),a=Hd(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.data),s=xe(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.data),s=xe(t.nullBitmap),a=Hd(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=xe(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=xe(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Oe(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Ft.isSparseUnion(e))return new Ne(e,i,a,o,[void 0,void 0,void 0,s],r);const l=ca(t.valueOffsets);return new Ne(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.indices.ArrayType,t.data),{["dictionary"]:a=new Re([new ba().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=xe(t.nullBitmap),s=Oe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new ba().visit({type:e.valueType})}=t,s=xe(t.nullBitmap),{["length"]:a=r.length/Ji(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ne(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new ba().visit({type:e.childType})}=t,s=xe(t.nullBitmap),a=ca(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ne(e,i,o,l,[a,void 0,s],[r])}}const $E=new ba;function ve(n){return $E.visit(n)}class ef{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function tA(n){return n.some(t=>t.nullable)}function O0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function B0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function V0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const h=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(h,p-h))}return r.length===0&&r.push(n[0].slice(0,0)),r}function uh(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function hh(n,t){return n.getValid(t)}function dl(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return uh(i,this._offsets,e,t)}}function z0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=uh(s,this._offsets,i,e);return t=void 0,a}}function H0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,h=i.length;++c<h;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):uh(s,this._offsets,r,e);return t=void 0,a}}class Yt extends _e{}function eA(n,t){return t===null&&n.length>0?0:-1}function nA(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new ch(e,n.offset+(t||0),n.length,e,U0)){if(!r)return i;++i}return-1}function ie(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case P.Union:break;case P.Dictionary:break;default:return nA(n,e)}const i=zn.getVisitFn(n),r=ta(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function k0(n,t,e){const i=zn.getVisitFn(n),r=ta(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Yt.prototype.visitNull=eA;Yt.prototype.visitBool=ie;Yt.prototype.visitInt=ie;Yt.prototype.visitInt8=ie;Yt.prototype.visitInt16=ie;Yt.prototype.visitInt32=ie;Yt.prototype.visitInt64=ie;Yt.prototype.visitUint8=ie;Yt.prototype.visitUint16=ie;Yt.prototype.visitUint32=ie;Yt.prototype.visitUint64=ie;Yt.prototype.visitFloat=ie;Yt.prototype.visitFloat16=ie;Yt.prototype.visitFloat32=ie;Yt.prototype.visitFloat64=ie;Yt.prototype.visitUtf8=ie;Yt.prototype.visitLargeUtf8=ie;Yt.prototype.visitBinary=ie;Yt.prototype.visitLargeBinary=ie;Yt.prototype.visitFixedSizeBinary=ie;Yt.prototype.visitDate=ie;Yt.prototype.visitDateDay=ie;Yt.prototype.visitDateMillisecond=ie;Yt.prototype.visitTimestamp=ie;Yt.prototype.visitTimestampSecond=ie;Yt.prototype.visitTimestampMillisecond=ie;Yt.prototype.visitTimestampMicrosecond=ie;Yt.prototype.visitTimestampNanosecond=ie;Yt.prototype.visitTime=ie;Yt.prototype.visitTimeSecond=ie;Yt.prototype.visitTimeMillisecond=ie;Yt.prototype.visitTimeMicrosecond=ie;Yt.prototype.visitTimeNanosecond=ie;Yt.prototype.visitDecimal=ie;Yt.prototype.visitList=ie;Yt.prototype.visitStruct=ie;Yt.prototype.visitUnion=ie;Yt.prototype.visitDenseUnion=k0;Yt.prototype.visitSparseUnion=k0;Yt.prototype.visitDictionary=ie;Yt.prototype.visitInterval=ie;Yt.prototype.visitIntervalDayTime=ie;Yt.prototype.visitIntervalYearMonth=ie;Yt.prototype.visitDuration=ie;Yt.prototype.visitDurationSecond=ie;Yt.prototype.visitDurationMillisecond=ie;Yt.prototype.visitDurationMicrosecond=ie;Yt.prototype.visitDurationNanosecond=ie;Yt.prototype.visitFixedSizeList=ie;Yt.prototype.visitMap=ie;const fl=new Yt;class qt extends _e{}function $t(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Ft.isInt(t)&&t.bitWidth!==64||Ft.isTime(t)&&t.bitWidth!==64||Ft.isFloat(t)&&t.precision!==bn.HALF))return new ef(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new ef(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new iA(a)})}class iA{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}qt.prototype.visitNull=$t;qt.prototype.visitBool=$t;qt.prototype.visitInt=$t;qt.prototype.visitInt8=$t;qt.prototype.visitInt16=$t;qt.prototype.visitInt32=$t;qt.prototype.visitInt64=$t;qt.prototype.visitUint8=$t;qt.prototype.visitUint16=$t;qt.prototype.visitUint32=$t;qt.prototype.visitUint64=$t;qt.prototype.visitFloat=$t;qt.prototype.visitFloat16=$t;qt.prototype.visitFloat32=$t;qt.prototype.visitFloat64=$t;qt.prototype.visitUtf8=$t;qt.prototype.visitLargeUtf8=$t;qt.prototype.visitBinary=$t;qt.prototype.visitLargeBinary=$t;qt.prototype.visitFixedSizeBinary=$t;qt.prototype.visitDate=$t;qt.prototype.visitDateDay=$t;qt.prototype.visitDateMillisecond=$t;qt.prototype.visitTimestamp=$t;qt.prototype.visitTimestampSecond=$t;qt.prototype.visitTimestampMillisecond=$t;qt.prototype.visitTimestampMicrosecond=$t;qt.prototype.visitTimestampNanosecond=$t;qt.prototype.visitTime=$t;qt.prototype.visitTimeSecond=$t;qt.prototype.visitTimeMillisecond=$t;qt.prototype.visitTimeMicrosecond=$t;qt.prototype.visitTimeNanosecond=$t;qt.prototype.visitDecimal=$t;qt.prototype.visitList=$t;qt.prototype.visitStruct=$t;qt.prototype.visitUnion=$t;qt.prototype.visitDenseUnion=$t;qt.prototype.visitSparseUnion=$t;qt.prototype.visitDictionary=$t;qt.prototype.visitInterval=$t;qt.prototype.visitIntervalDayTime=$t;qt.prototype.visitIntervalYearMonth=$t;qt.prototype.visitDuration=$t;qt.prototype.visitDurationSecond=$t;qt.prototype.visitDurationMillisecond=$t;qt.prototype.visitDurationMicrosecond=$t;qt.prototype.visitDurationNanosecond=$t;qt.prototype.visitFixedSizeList=$t;qt.prototype.visitMap=$t;const dh=new qt;var G0;const W0={},Z0={};class Re{constructor(t){var e,i,r;const s=t[0]instanceof Re?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Ne)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=W0[a.typeId],h=s[0];this.isValid=p=>hh(h,p),this.get=p=>o(h,p),this.set=(p,d)=>l(h,p,d),this.indexOf=p=>c(h,p),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,Z0[a.typeId]),this._offsets=B0(s);break}this.data=s,this.type=a,this.stride=Ji(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return tA(this.data)}get nullCount(){return O0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${P[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(lh(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return dh.visit(this)}concat(...t){return new Re(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new Re(F0(this,t,e,({data:i,_offsets:r},s,a)=>V0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case P.Int:case P.Float:case P.Decimal:case P.Time:case P.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new Re(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Ft.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Ft.isDictionary(this.type)){const t=new pl(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Re(e)}return new pl(this)}unmemoize(){if(Ft.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Re(e)}return this}}G0=Symbol.toStringTag;Re[G0]=(n=>{n.type=Ft.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(P).map(e=>P[e]).filter(e=>typeof e=="number"&&e!==P.NONE);for(const e of t){const i=zn.getVisitFnByTypeId(e),r=ii.getVisitFnByTypeId(e),s=fl.getVisitFnByTypeId(e);W0[e]={get:i,set:r,indexOf:s},Z0[e]=Object.create(n,{isValid:{value:dl(hh)},get:{value:dl(zn.getVisitFnByTypeId(e))},set:{value:z0(ii.getVisitFnByTypeId(e))},indexOf:{value:H0(fl.getVisitFnByTypeId(e))}})}return"Vector"})(Re.prototype);class pl extends Re{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new pl(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new Re(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class Uu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Wn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Wn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Le),(e||new Wn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):rn.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Si).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Uu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new Uu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,rn.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class Ce{constructor(t=[],e,i,r=rn.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=Ou(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new Ce(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new Ce(e,this.metadata)}assign(...t){const e=t[0]instanceof Ce?t[0]:Array.isArray(t[0])?new Ce(t[0]):new Ce(t),i=[...this.fields],r=vo(vo(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:vo(vo(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=Ou(s,new Map);return new Ce([...i,...s],r,new Map([...this.dictionaries,...a]))}}Ce.prototype.fields=null;Ce.prototype.metadata=null;Ce.prototype.dictionaries=null;class je{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new je(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],je.new(e,i,r,s)}}je.prototype.type=null;je.prototype.name=null;je.prototype.nullable=null;je.prototype.metadata=null;function vo(n,t){return new Map([...n||new Map,...t||new Map])}function Ou(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Ft.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Ou(s.children,t)}return t}var rA=mp,sA=Zs;class Da{static decode(t){t=new sA(xe(t));const e=Wn.getRootAsFooter(t),i=Ce.decode(e.schema(),new Map,e.version());return new aA(i,e)}static encode(t){const e=new rA,i=Ce.encode(e,t.schema);Wn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Dr.encode(e,a);const r=e.endVector();Wn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Dr.encode(e,a);const s=e.endVector();return Wn.startFooter(e),Wn.addSchema(e,i),Wn.addVersion(e,rn.V5),Wn.addRecordBatches(e,r),Wn.addDictionaries(e,s),Wn.finishFooterBuffer(e,Wn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=rn.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class aA extends Da{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Dr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Dr.decode(e)}return null}}class Dr{static decode(t){return new Dr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return Uu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=Ze(i),this.bodyLength=Ze(e)}}const Ke=Object.freeze({done:!0,value:void 0});class nf{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class fh{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class oA extends fh{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return se(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ke);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return Jn.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return Jn.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return se(this,void 0,void 0,function*(){return yield this.abort(t),Ke})}return(t){return se(this,void 0,void 0,function*(){return yield this.close(),Ke})}read(t){return se(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return se(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ke)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Po extends oA{write(t){if((t=xe(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Iu(this.toUint8Array(!0)):this.toUint8Array(!1).then(Iu)}toUint8Array(t=!1){return t?Bi(this._values)[0]:se(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=Jr(this),h;h=yield c.next(),e=h.done,!e;l=!0){s=h.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Bi(a,o)[0]})}}class ml{constructor(t){t&&(this.source=new lA(Jn.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class qs{constructor(t){t instanceof qs?this.source=t.source:t instanceof Po?this.source=new Wr(Jn.fromAsyncIterable(t)):hp(t)?this.source=new Wr(Jn.fromNodeStream(t)):nh(t)?this.source=new Wr(Jn.fromDOMStream(t)):up(t)?this.source=new Wr(Jn.fromDOMStream(t.body)):Oa(t)?this.source=new Wr(Jn.fromIterable(t)):$r(t)?this.source=new Wr(Jn.fromAsyncIterable(t)):$s(t)&&(this.source=new Wr(Jn.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class lA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ke)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ke)}}class Wr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return se(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return se(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return se(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return se(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return se(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Ke;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return se(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Ke;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class rf extends ml{constructor(t,e){super(),this.position=0,this.buffer=xe(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class gl extends qs{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=se(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return se(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return se(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return se(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return se(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return se(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return se(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return se(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const cA=65536;function Ds(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const js=8,ph=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class X0{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?cA:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Ds(this.buffer[1])} ${Ds(this.buffer[0])}`}}class Fe extends X0{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Fe.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Fe.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Fe(e);for(let s=0;s<i;){const a=js<i-s?js:i-s,o=new Fe(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Fe(new Uint32Array([ph[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Fe.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Fe(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Fe(new Uint32Array(t.buffer)).plus(e)}}class Fn extends X0{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return Fn.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Fn.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new Fn(e);for(let a=i?1:0;a<r;){const o=js<r-a?js:r-a,l=new Fn(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new Fn(new Uint32Array([ph[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Fn.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Fn(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Fn(new Uint32Array(t.buffer)).plus(e)}}class bi{constructor(t){this.buffer=t}high(){return new Fn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Fn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Fe(new Uint32Array([this.buffer[3],0])),i=new Fe(new Uint32Array([this.buffer[2],0])),r=new Fe(new Uint32Array([this.buffer[1],0])),s=new Fe(new Uint32Array([this.buffer[0],0])),a=new Fe(new Uint32Array([t.buffer[3],0])),o=new Fe(new Uint32Array([t.buffer[2],0])),l=new Fe(new Uint32Array([t.buffer[1],0])),c=new Fe(new Uint32Array([t.buffer[0],0]));let h=Fe.multiply(s,c);this.buffer[0]=h.low();const p=new Fe(new Uint32Array([h.high(),0]));return h=Fe.multiply(r,c),p.plus(h),h=Fe.multiply(s,l),p.plus(h),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(h)?1:0,this.buffer[2]=p.high(),new Fe(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Fe.multiply(i,c)).plus(Fe.multiply(r,l)).plus(Fe.multiply(s,o)),this.buffer[3]+=Fe.multiply(e,c).plus(Fe.multiply(i,l)).plus(Fe.multiply(r,o)).plus(Fe.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Ds(this.buffer[3])} ${Ds(this.buffer[2])} ${Ds(this.buffer[1])} ${Ds(this.buffer[0])}`}static multiply(t,e){return new bi(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new bi(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return bi.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return bi.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new bi(e);for(let a=i?1:0;a<r;){const o=js<r-a?js:r-a,l=new bi(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new bi(new Uint32Array([ph[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)bi.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class Y0 extends _e{constructor(t,e,i,r,s=rn.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof je?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return ve({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<rn.V5&&this.readNullBitmap(t,i),t.mode===Mn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class uA extends Y0{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):hl(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Oe(Uint8Array,Oe(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Oe(Uint8Array,Oe(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Ft.isTimestamp(t)||(Ft.isInt(t)||Ft.isTime(t))&&t.bitWidth===64||Ft.isDuration(t)||Ft.isDate(t)&&t.unit===ni.MILLISECOND?Oe(Uint8Array,Fn.convertArray(i[e])):Ft.isDecimal(t)?Oe(Uint8Array,bi.convertArray(i[e])):Ft.isBinary(t)||Ft.isLargeBinary(t)||Ft.isFixedSizeBinary(t)?hA(i[e]):Ft.isBool(t)?hl(i[e]):Ft.isUtf8(t)||Ft.isLargeUtf8(t)?eh(i[e].join("")):Oe(Uint8Array,Oe(t.ArrayType,i[e].map(r=>+r)))}}function hA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class jt extends _e{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Pn(n,t){return t instanceof n.constructor}function ns(n,t){return n===t||Pn(n,t)}function ur(n,t){return n===t||Pn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Rl(n,t){return n===t||Pn(n,t)&&n.precision===t.precision}function dA(n,t){return n===t||Pn(n,t)&&n.byteWidth===t.byteWidth}function mh(n,t){return n===t||Pn(n,t)&&n.unit===t.unit}function Ba(n,t){return n===t||Pn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Va(n,t){return n===t||Pn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function fA(n,t){return n===t||Pn(n,t)&&n.children.length===t.children.length&&Lr.compareManyFields(n.children,t.children)}function pA(n,t){return n===t||Pn(n,t)&&n.children.length===t.children.length&&Lr.compareManyFields(n.children,t.children)}function gh(n,t){return n===t||Pn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Lr.compareManyFields(n.children,t.children)}function mA(n,t){return n===t||Pn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Lr.visit(n.indices,t.indices)&&Lr.visit(n.dictionary,t.dictionary)}function _h(n,t){return n===t||Pn(n,t)&&n.unit===t.unit}function za(n,t){return n===t||Pn(n,t)&&n.unit===t.unit}function gA(n,t){return n===t||Pn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Lr.compareManyFields(n.children,t.children)}function _A(n,t){return n===t||Pn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Lr.compareManyFields(n.children,t.children)}jt.prototype.visitNull=ns;jt.prototype.visitBool=ns;jt.prototype.visitInt=ur;jt.prototype.visitInt8=ur;jt.prototype.visitInt16=ur;jt.prototype.visitInt32=ur;jt.prototype.visitInt64=ur;jt.prototype.visitUint8=ur;jt.prototype.visitUint16=ur;jt.prototype.visitUint32=ur;jt.prototype.visitUint64=ur;jt.prototype.visitFloat=Rl;jt.prototype.visitFloat16=Rl;jt.prototype.visitFloat32=Rl;jt.prototype.visitFloat64=Rl;jt.prototype.visitUtf8=ns;jt.prototype.visitLargeUtf8=ns;jt.prototype.visitBinary=ns;jt.prototype.visitLargeBinary=ns;jt.prototype.visitFixedSizeBinary=dA;jt.prototype.visitDate=mh;jt.prototype.visitDateDay=mh;jt.prototype.visitDateMillisecond=mh;jt.prototype.visitTimestamp=Ba;jt.prototype.visitTimestampSecond=Ba;jt.prototype.visitTimestampMillisecond=Ba;jt.prototype.visitTimestampMicrosecond=Ba;jt.prototype.visitTimestampNanosecond=Ba;jt.prototype.visitTime=Va;jt.prototype.visitTimeSecond=Va;jt.prototype.visitTimeMillisecond=Va;jt.prototype.visitTimeMicrosecond=Va;jt.prototype.visitTimeNanosecond=Va;jt.prototype.visitDecimal=ns;jt.prototype.visitList=fA;jt.prototype.visitStruct=pA;jt.prototype.visitUnion=gh;jt.prototype.visitDenseUnion=gh;jt.prototype.visitSparseUnion=gh;jt.prototype.visitDictionary=mA;jt.prototype.visitInterval=_h;jt.prototype.visitIntervalDayTime=_h;jt.prototype.visitIntervalYearMonth=_h;jt.prototype.visitDuration=za;jt.prototype.visitDurationSecond=za;jt.prototype.visitDurationMillisecond=za;jt.prototype.visitDurationMicrosecond=za;jt.prototype.visitDurationNanosecond=za;jt.prototype.visitFixedSizeList=gA;jt.prototype.visitMap=_A;const Lr=new jt;function Bu(n,t){return Lr.compareSchemas(n,t)}function Ec(n,t){return vA(n,t.map(e=>e.data.concat()))}function vA(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,d)=>Math.max(p,d.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,h=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)h[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(h=yA(e,a,h,t,r),a>0&&(i[s++]=ve({type:new Cn(e),length:a,nullCount:0,children:h.slice()})))}return[n=n.assign(e),i.map(p=>new On(n,p))]}function yA(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],h=c?.length;if(h>=t)h===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,h-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:ve({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var q0;class Rn{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new Ce([]),this._offsets=[0],this;let r,s;t[0]instanceof Ce&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof On)return[l];if(l instanceof Rn)return l.batches;if(l instanceof Ne){if(l.type instanceof Cn)return[new On(new Ce(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),h=c.map(_=>new Re([l[_]])),p=r??new Ce(c.map((_,y)=>new je(String(_),h[y].type,h[y].nullable))),[,d]=Ec(p,h);return d.length===0?[new On(l)]:d}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new Ce([]),!(r instanceof Ce))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof On))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Bu(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??B0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=O0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(lh(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?dh.visit(new Re(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Rn(e,i.map(r=>new On(e,r)))}slice(t,e){const i=this.schema;[t,e]=F0({length:this.numRows},t,e);const r=V0(this.data,this._offsets,t,e);return new Rn(i,r.map(s=>new On(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=ve({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new Re(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new Re([ve({type:new Cr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=Ec(i,o)}return new Rn(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Rn(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[h,p]=o,d=e.findIndex(_=>_.name===l.name);return~d?p[d]=c:h.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new Rn(...Ec(s,a))}}q0=Symbol.toStringTag;Rn[q0]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=dl(hh),n.get=dl(zn.getVisitFn(P.Struct)),n.set=z0(ii.getVisitFn(P.Struct)),n.indexOf=H0(fl.getVisitFn(P.Struct)),"Table"))(Rn.prototype);var j0;let On=class xa{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof Ce))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=ve({nullCount:0,type:new Cn(this.schema.fields),children:this.schema.fields.map(e=>ve({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Ne))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=sf(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,h)=>(l.children[h]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[h]=je.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new Ce(i),o=ve({type:new Cn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=sf(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=K0(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return zn.visit(this.data,t)}at(t){return this.get(lh(t,this.numRows))}set(t,e){return ii.visit(this.data,t,e)}indexOf(t,e){return fl.visit(this.data,t,e)}[Symbol.iterator](){return dh.visit(new Re([this.data]))}toArray(){return[...this]}concat(...t){return new Rn(this.schema,[this,...t])}slice(t,e){const[i]=new Re([this.data]).slice(t,e).data;return new xa(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new Re([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new Re([ve({type:new Cr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new Ce(s,new Map(this.schema.metadata)),r=ve({type:new Cn(s),children:a})}return new xa(i,r)}select(t){const e=this.schema.select(t),i=new Cn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new xa(e,ve({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=ve({type:new Cn(e.fields),length:this.numRows,children:i});return new xa(e,r)}};j0=Symbol.toStringTag;On[j0]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(On.prototype);function sf(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:ve({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),ve({type:new Cn(r),length:e,children:s})]}function K0(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])K0(o.children,c?.children,e);if(Ft.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class vh extends On{constructor(t){const e=t.fields.map(r=>ve({type:r.type})),i=ve({type:new Cn(t.fields),nullCount:0,children:e});super(t,i)}}let br=class xi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new xi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Le),(e||new xi).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):rn.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):we.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,rn.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,we.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return xi.startMessage(t),xi.addVersion(t,e),xi.addHeaderType(t,i),xi.addHeader(t,r),xi.addBodyLength(t,s),xi.addCustomMetadata(t,a),xi.endMessage(t)}};class xA extends _e{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return jd.startNull(e),jd.endNull(e)}visitInt(t,e){return Zn.startInt(e),Zn.addBitWidth(e,t.bitWidth),Zn.addIsSigned(e,t.isSigned),Zn.endInt(e)}visitFloat(t,e){return wi.startFloatingPoint(e),wi.addPrecision(e,t.precision),wi.endFloatingPoint(e)}visitBinary(t,e){return Wd.startBinary(e),Wd.endBinary(e)}visitLargeBinary(t,e){return Xd.startLargeBinary(e),Xd.endLargeBinary(e)}visitBool(t,e){return Zd.startBool(e),Zd.endBool(e)}visitUtf8(t,e){return Kd.startUtf8(e),Kd.endUtf8(e)}visitLargeUtf8(t,e){return Yd.startLargeUtf8(e),Yd.endLargeUtf8(e)}visitDecimal(t,e){return Ms.startDecimal(e),Ms.addScale(e,t.scale),Ms.addPrecision(e,t.precision),Ms.addBitWidth(e,t.bitWidth),Ms.endDecimal(e)}visitDate(t,e){return To.startDate(e),To.addUnit(e,t.unit),To.endDate(e)}visitTime(t,e){return Qn.startTime(e),Qn.addUnit(e,t.unit),Qn.addBitWidth(e,t.bitWidth),Qn.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return $n.startTimestamp(e),$n.addUnit(e,t.unit),i!==void 0&&$n.addTimezone(e,i),$n.endTimestamp(e)}visitInterval(t,e){return Ti.startInterval(e),Ti.addUnit(e,t.unit),Ti.endInterval(e)}visitDuration(t,e){return Io.startDuration(e),Io.addUnit(e,t.unit),Io.endDuration(e)}visitList(t,e){return qd.startList(e),qd.endList(e)}visitStruct(t,e){return Kr.startStruct_(e),Kr.endStruct_(e)}visitUnion(t,e){Un.startTypeIdsVector(e,t.typeIds.length);const i=Un.createTypeIdsVector(e,t.typeIds);return Un.startUnion(e),Un.addMode(e,t.mode),Un.addTypeIds(e,i),Un.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return tr.startDictionaryEncoding(e),tr.addId(e,BigInt(t.id)),tr.addIsOrdered(e,t.isOrdered),i!==void 0&&tr.addIndexType(e,i),tr.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Ro.startFixedSizeBinary(e),Ro.addByteWidth(e,t.byteWidth),Ro.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Co.startFixedSizeList(e),Co.addListSize(e,t.listSize),Co.endFixedSizeList(e)}visitMap(t,e){return Do.startMap(e),Do.addKeysSorted(e,t.keysSorted),Do.endMap(e)}}const Ac=new xA;function SA(n,t=new Map){return new Ce(MA(n,t),No(n.metadata),t)}function J0(n){return new Yn(n.count,Q0(n.columns),$0(n.columns))}function bA(n){return new zi(J0(n.data),n.id,n.isDelta)}function MA(n,t){return(n.fields||[]).filter(Boolean).map(e=>je.fromJSON(e,t))}function af(n,t){return(n.children||[]).filter(Boolean).map(e=>je.fromJSON(e,t))}function Q0(n){return(n||[]).reduce((t,e)=>[...t,new Pr(e.count,EA(e.VALIDITY)),...Q0(e.children)],[])}function $0(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Li(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Li(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Li(t.length,r.OFFSET.length)),r.DATA&&t.push(new Li(t.length,r.DATA.length)),t=$0(r.children,t)}return t}function EA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function AA(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=lf(n,af(n,t)),r=new je(n.name,a,n.nullable,No(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?of(i):new Ca,o=new Ys(t.get(e),i,e,s.isOrdered),r=new je(n.name,o,n.nullable,No(n.metadata))):(i=(i=s.indexType)?of(i):new Ca,t.set(e,a=lf(n,af(n,t))),o=new Ys(a,i,e,s.isOrdered),r=new je(n.name,o,n.nullable,No(n.metadata))),r||null}function No(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function of(n){return new ts(n.isSigned,n.bitWidth)}function lf(n,t){const e=n.type.name;switch(e){case"NONE":return new Cr;case"null":return new Cr;case"binary":return new qo;case"largebinary":return new jo;case"utf8":return new Ko;case"largeutf8":return new Jo;case"bool":return new Qo;case"list":return new sl((t||[])[0]);case"struct":return new Cn(t||[]);case"struct_":return new Cn(t||[])}switch(e){case"int":{const i=n.type;return new ts(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new Yo(bn[i.precision])}case"decimal":{const i=n.type;return new $o(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new tl(ni[i.unit])}case"time":{const i=n.type;return new el(Kt[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new nl(Kt[i.unit],i.timezone)}case"interval":{const i=n.type;return new il(Vi[i.unit])}case"duration":{const i=n.type;return new rl(Kt[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new al(Mn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new ol(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new ll(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new cl((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var wA=mp,TA=Zs;class Dn{static fromJSON(t,e){const i=new Dn(0,rn.V5,e);return i._createHeader=IA(t,e),i}static decode(t){t=new TA(xe(t));const e=br.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Dn(i,r,s);return a._createHeader=RA(e,s),a}static encode(t){const e=new wA;let i=-1;return t.isSchema()?i=Ce.encode(e,t.header()):t.isRecordBatch()?i=Yn.encode(e,t.header()):t.isDictionaryBatch()&&(i=zi.encode(e,t.header())),br.startMessage(e),br.addVersion(e,rn.V5),br.addHeader(e,i),br.addHeaderType(e,t.headerType),br.addBodyLength(e,BigInt(t.bodyLength)),br.finishMessageBuffer(e,br.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof Ce)return new Dn(0,rn.V5,we.Schema,t);if(t instanceof Yn)return new Dn(e,rn.V5,we.RecordBatch,t);if(t instanceof zi)return new Dn(e,rn.V5,we.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===we.Schema}isRecordBatch(){return this.headerType===we.RecordBatch}isDictionaryBatch(){return this.headerType===we.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=Ze(t)}}class Yn{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=Ze(t)}}class zi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=Ze(e)}}class Li{constructor(t,e){this.offset=Ze(t),this.length=Ze(e)}}class Pr{constructor(t,e){this.length=Ze(t),this.nullCount=Ze(e)}}function IA(n,t){return(()=>{switch(t){case we.Schema:return Ce.fromJSON(n);case we.RecordBatch:return Yn.fromJSON(n);case we.DictionaryBatch:return zi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${we[t]}, type: ${t} }`)})}function RA(n,t){return(()=>{switch(t){case we.Schema:return Ce.decode(n.header(new Si),new Map,n.version());case we.RecordBatch:return Yn.decode(n.header(new ji),n.version());case we.DictionaryBatch:return zi.decode(n.header(new Ss),n.version())}throw new Error(`Unrecognized Message type: { name: ${we[t]}, type: ${t} }`)})}je.encode=zA;je.decode=BA;je.fromJSON=AA;Ce.encode=VA;Ce.decode=CA;Ce.fromJSON=SA;Yn.encode=HA;Yn.decode=DA;Yn.fromJSON=J0;zi.encode=kA;zi.decode=LA;zi.fromJSON=bA;Pr.encode=GA;Pr.decode=NA;Li.encode=WA;Li.decode=PA;function CA(n,t=new Map,e=rn.V5){const i=OA(n,t);return new Ce(i,Fo(n),t,e)}function DA(n,t=rn.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new Yn(n.length(),FA(n),UA(n,t))}function LA(n,t=rn.V5){return new zi(Yn.decode(n.data(),t),n.id(),n.isDelta())}function PA(n){return new Li(n.offset(),n.length())}function NA(n){return new Pr(n.length(),n.nullCount())}function FA(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Pr.decode(e));return t}function UA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<rn.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Li.decode(i));return e}function OA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=je.decode(i,t));return e}function cf(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=je.decode(i,t));return e}function BA(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=hf(n,cf(n,t)),i=new je(n.name(),r,n.nullable(),Fo(n))):t.has(e=Ze(o.id()))?(s=(s=o.indexType())?uf(s):new Ca,a=new Ys(t.get(e),s,e,o.isOrdered()),i=new je(n.name(),a,n.nullable(),Fo(n))):(s=(s=o.indexType())?uf(s):new Ca,t.set(e,r=hf(n,cf(n,t))),a=new Ys(r,s,e,o.isOrdered()),i=new je(n.name(),a,n.nullable(),Fo(n))),i||null}function Fo(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function uf(n){return new ts(n.isSigned(),n.bitWidth())}function hf(n,t){const e=n.typeType();switch(e){case Ye.NONE:return new Cr;case Ye.Null:return new Cr;case Ye.Binary:return new qo;case Ye.LargeBinary:return new jo;case Ye.Utf8:return new Ko;case Ye.LargeUtf8:return new Jo;case Ye.Bool:return new Qo;case Ye.List:return new sl((t||[])[0]);case Ye.Struct_:return new Cn(t||[])}switch(e){case Ye.Int:{const i=n.type(new Zn);return new ts(i.isSigned(),i.bitWidth())}case Ye.FloatingPoint:{const i=n.type(new wi);return new Yo(i.precision())}case Ye.Decimal:{const i=n.type(new Ms);return new $o(i.scale(),i.precision(),i.bitWidth())}case Ye.Date:{const i=n.type(new To);return new tl(i.unit())}case Ye.Time:{const i=n.type(new Qn);return new el(i.unit(),i.bitWidth())}case Ye.Timestamp:{const i=n.type(new $n);return new nl(i.unit(),i.timezone())}case Ye.Interval:{const i=n.type(new Ti);return new il(i.unit())}case Ye.Duration:{const i=n.type(new Io);return new rl(i.unit())}case Ye.Union:{const i=n.type(new Un);return new al(i.mode(),i.typeIdsArray()||[],t||[])}case Ye.FixedSizeBinary:{const i=n.type(new Ro);return new ol(i.byteWidth())}case Ye.FixedSizeList:{const i=n.type(new Co);return new ll(i.listSize(),(t||[])[0])}case Ye.Map:{const i=n.type(new Do);return new cl((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ye[e]}" (${e})`)}function VA(n,t){const e=t.fields.map(s=>je.encode(n,s));Si.startFieldsVector(n,e.length);const i=Si.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Si.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return cn.startKeyValue(n),cn.addKey(n,o),cn.addValue(n,l),cn.endKeyValue(n)})):-1;return Si.startSchema(n),Si.addFields(n,i),Si.addEndianness(n,ZA?Xs.Little:Xs.Big),r!==-1&&Si.addCustomMetadata(n,r),Si.endSchema(n)}function zA(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Ft.isDictionary(s)?(a=s.dictionary.typeId,r=Ac.visit(s,n),i=Ac.visit(s.dictionary,n)):i=Ac.visit(s,n);const o=(s.children||[]).map(h=>je.encode(n,h)),l=jn.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?jn.createCustomMetadataVector(n,[...t.metadata].map(([h,p])=>{const d=n.createString(`${h}`),_=n.createString(`${p}`);return cn.startKeyValue(n),cn.addKey(n,d),cn.addValue(n,_),cn.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),jn.startField(n),jn.addType(n,i),jn.addTypeType(n,a),jn.addChildren(n,l),jn.addNullable(n,!!t.nullable),e!==-1&&jn.addName(n,e),r!==-1&&jn.addDictionary(n,r),c!==-1&&jn.addCustomMetadata(n,c),jn.endField(n)}function HA(n,t){const e=t.nodes||[],i=t.buffers||[];ji.startNodesVector(n,e.length);for(const a of e.slice().reverse())Pr.encode(n,a);const r=n.endVector();ji.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Li.encode(n,a);const s=n.endVector();return ji.startRecordBatch(n),ji.addLength(n,BigInt(t.length)),ji.addNodes(n,r),ji.addBuffers(n,s),ji.endRecordBatch(n)}function kA(n,t){const e=Yn.encode(n,t.data);return Ss.startDictionaryBatch(n),Ss.addId(n,BigInt(t.id)),Ss.addIsDelta(n,t.isDelta),Ss.addData(n,e),Ss.endDictionaryBatch(n)}function GA(n,t){return vp.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function WA(n,t){return _p.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const ZA=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),yh=n=>`Expected ${we[n]} Message in stream, but was null or length 0.`,xh=n=>`Header pointer of flatbuffer-encoded ${we[n]} Message is null or length 0.`,tm=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,em=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class nm{constructor(t){this.source=t instanceof ml?t:new ml(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Ke:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(yh(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=xe(this.source.read(t));if(e.byteLength<t)throw new Error(em(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=we.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(xh(e));return r}readMetadataLength(){const t=this.source.read(Cl),e=t&&new Zs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Ke;if(e.byteLength<t)throw new Error(tm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}}}class XA{constructor(t,e){this.source=t instanceof qs?t:cp(t)?new gl(t,e):new qs(t)}[Symbol.asyncIterator](){return this}next(){return se(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Ke:t})}throw(t){return se(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return se(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return se(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(yh(t));return e.value})}readMessageBody(t){return se(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=xe(yield this.source.read(t));if(e.byteLength<t)throw new Error(em(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return se(this,arguments,void 0,function*(t=!1){const e=we.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(xh(e));return r})}readMetadataLength(){return se(this,void 0,void 0,function*(){const t=yield this.source.read(Cl),e=t&&new Zs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return se(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Ke;if(e.byteLength<t)throw new Error(tm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}})}}class YA extends nm{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof nf?t:new nf(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Dn.fromJSON(t.schema,we.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Dn.fromJSON(e,we.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Dn.fromJSON(e,we.RecordBatch)}}return this._body=[],Ke}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(yh(t));return e.value}readSchema(){const t=we.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(xh(t));return i}}const Cl=4,Vu="ARROW1",La=new Uint8Array(Vu.length);for(let n=0;n<Vu.length;n+=1)La[n]=Vu.codePointAt(n);function Sh(n,t=0){for(let e=-1,i=La.length;++e<i;)if(La[e]!==n[t+e])return!1;return!0}const Ha=La.length,im=Ha+Cl,qA=Ha*2+Cl;class ei extends fh{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return $r(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return Jn.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return Jn.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof ei?t:Ru(t)?QA(t):cp(t)?ew(t):$r(t)?se(this,void 0,void 0,function*(){return yield ei.from(yield t)}):up(t)||nh(t)||hp(t)||$s(t)?tw(new qs(t)):$A(new ml(t))}static readAll(t){return t instanceof ei?t.isSync()?df(t):ff(t):Ru(t)||ArrayBuffer.isView(t)||Oa(t)||lp(t)?df(t):ff(t)}}class _l extends ei{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Di(this,arguments,function*(){yield de(yield*wo(Jr(this[Symbol.iterator]())))})}}class vl extends ei{constructor(t){super(t),this._impl=t}readAll(){return se(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=Jr(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class rm extends _l{constructor(t){super(t),this._impl=t}}class jA extends vl{constructor(t){super(t),this._impl=t}}class sm{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=ve({type:new Cn(this.schema.fields),length:t.length,children:i});return new On(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new Re(c)):new Re(c)).memoize()}_loadVectors(t,e,i){return new Y0(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class yl extends sm{constructor(t,e){super(e),this._reader=Ru(t)?new YA(this._handle=t):new nm(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=om(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ke}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ke}next(){if(this.closed)return Ke;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new vh(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class xl extends sm{constructor(t,e){super(e),this._reader=new XA(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return se(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return se(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=om(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return se(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ke})}return(t){return se(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ke})}next(){return se(this,void 0,void 0,function*(){if(this.closed)return Ke;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new vh(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return se(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class am extends yl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof rf?t:new rf(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(we.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(we.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-im,i=t.readInt32(e),r=t.readAt(e-i,i);return Da.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class KA extends xl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof gl?t:new gl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return se(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return se(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(we.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return se(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(we.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return se(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-im,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Da.decode(r)})}_readNextMessageAndValidate(t){return se(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class JA extends yl{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new uA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function om(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*df(n){const t=ei.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function ff(n){return Di(this,arguments,function*(){const e=yield de(ei.from(n));try{if(!(yield de(e.open({autoDestroy:!1}))).closed)do yield yield de(e);while(!(yield de(e.reset().open())).closed)}finally{yield de(e.cancel())}})}function QA(n){return new _l(new JA(n))}function $A(n){const t=n.peek(Ha+7&-8);return t&&t.byteLength>=4?Sh(t)?new rm(new am(n.read())):new _l(new yl(n)):new _l(new yl((function*(){})()))}function tw(n){return se(this,void 0,void 0,function*(){const t=yield n.peek(Ha+7&-8);return t&&t.byteLength>=4?Sh(t)?new rm(new am(yield n.read())):new vl(new xl(n)):new vl(new xl((function(){return Di(this,arguments,function*(){})})()))})}function ew(n){return se(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new gl(n,t);return t>=qA&&Sh(yield e.readAt(0,Ha+7&-8))?new jA(new KA(e)):new vl(new xl(e))})}class Je extends _e{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof On?s.data.children:s.data),i=new Je;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof Re)return this.visitMany(t.data),this;const{type:e}=t;if(!Ft.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Ft.isUnion(e))this.nodes.push(new Pr(i,0));else{const{nullCount:r}=t;Ft.isNull(e)||fi.call(this,r<=0?new Uint8Array(0):ul(t.offset,i,t.nullBitmap)),this.nodes.push(new Pr(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function fi(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Li(this._byteLength,t)),this._byteLength+=t,this}function nw(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(fi.call(this,r),e.mode===Mn.Sparse)return zu.call(this,n);if(e.mode===Mn.Dense){if(n.offset<=0)return fi.call(this,s),zu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,h,p=-1;++p<i;)(c=r[p])!==void 0&&((h=o[c])===void 0&&(h=o[c]=s[p]),a[p]=s[p]-h,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);fi.call(this,a),this.visitMany(n.children.map((c,h)=>{const p=e.typeIds[h],d=o[p],_=l[p];return c.slice(d,Math.min(i,_))}))}}return this}function iw(n){let t;return n.nullCount>=n.length?fi.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?fi.call(this,ul(n.offset,n.length,t)):fi.call(this,hl(n.values))}function hr(n){return fi.call(this,n.values.subarray(0,n.length*n.stride))}function Dl(n){const{length:t,values:e,valueOffsets:i}=n,r=Ze(i[0]),s=Ze(i[t]),a=Math.min(s-r,e.byteLength-r);return fi.call(this,fp(-r,t+1,i)),fi.call(this,e.subarray(r,r+a)),this}function bh(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return fi.call(this,fp(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function zu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Je.prototype.visitBool=iw;Je.prototype.visitInt=hr;Je.prototype.visitFloat=hr;Je.prototype.visitUtf8=Dl;Je.prototype.visitLargeUtf8=Dl;Je.prototype.visitBinary=Dl;Je.prototype.visitLargeBinary=Dl;Je.prototype.visitFixedSizeBinary=hr;Je.prototype.visitDate=hr;Je.prototype.visitTimestamp=hr;Je.prototype.visitTime=hr;Je.prototype.visitDecimal=hr;Je.prototype.visitList=bh;Je.prototype.visitStruct=zu;Je.prototype.visitUnion=nw;Je.prototype.visitInterval=hr;Je.prototype.visitDuration=hr;Je.prototype.visitFixedSizeList=bh;Je.prototype.visitMap=bh;class lm extends fh{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new Po,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Vn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return $r(t)?t.then(e=>this.writeAll(e)):$s(t)?wh(this,t):Ah(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Po?this._sink=t:(this._sink=new Po,t&&NM(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&FM(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!Bu(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Rn&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof On&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Bu(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof On?t instanceof vh||this._writeRecordBatch(t):t instanceof Rn?this.writeAll(t.batches):Oa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Dn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===we.RecordBatch?this._recordBatchBlocks.push(new Dr(o,t.bodyLength,this._position)):t.headerType===we.DictionaryBatch&&this._dictionaryBlocks.push(new Dr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=xe(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Dn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(La)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Je.assemble(t),a=new Yn(t.numRows,i,r),o=Dn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=Je.assemble(new Re([t])),l=new Yn(t.length,s,a),c=new zi(l,e,i),h=Dn.from(c,r);return this._writeMessage(h)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,h]of a.entries())this._writeDictionaryBatch(h,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class Mh extends lm{static writeAll(t,e){const i=new Mh(e);return $r(t)?t.then(r=>i.writeAll(r)):$s(t)?wh(i,t):Ah(i,t)}}class Eh extends lm{static writeAll(t){const e=new Eh;return $r(t)?t.then(i=>e.writeAll(i)):$s(t)?wh(e,t):Ah(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Da.encode(new Da(t,rn.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Ah(n,t){let e=t;t instanceof Rn&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function wh(n,t){return se(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=Jr(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function rw(n,t="stream"){return(t==="stream"?Mh:Eh).writeAll(n).toUint8Array(!0)}var sw=Object.create,cm=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,ow=Object.getOwnPropertyNames,lw=Object.getPrototypeOf,cw=Object.prototype.hasOwnProperty,uw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),hw=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ow(t))!cw.call(n,r)&&r!==e&&cm(n,r,{get:()=>t[r],enumerable:!(i=aw(t,r))||i.enumerable});return n},dw=(n,t,e)=>(e=n!=null?sw(lw(n)):{},hw(!n||!n.__esModule?cm(e,"default",{value:n,enumerable:!0}):e,n)),fw=uw((n,t)=>{t.exports=Worker}),pw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(pw||{}),mw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(mw||{}),gw=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(gw||{}),_w=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(_w||{}),vw=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(vw||{}),yw=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(yw||{}),xw=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},Sw=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(Sw||{}),bw=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=ei.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new Rn(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new um(this._bindings,this._conn,e),r=await ei.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new Mw(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=rw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},um=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},Mw=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=ei.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new Rn(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new um(this.bindings,this.connectionId,t),i=await ei.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},Ew=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(Ew||{}),Aw=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(Aw||{}),be=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function Uo(n){switch(n.typeId){case P.Binary:return{sqlType:"binary"};case P.Bool:return{sqlType:"bool"};case P.Date:return{sqlType:"date"};case P.DateDay:return{sqlType:"date32[d]"};case P.DateMillisecond:return{sqlType:"date64[ms]"};case P.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case P.Float:return{sqlType:"float"};case P.Float16:return{sqlType:"float16"};case P.Float32:return{sqlType:"float32"};case P.Float64:return{sqlType:"float64"};case P.Int:return{sqlType:"int32"};case P.Int16:return{sqlType:"int16"};case P.Int32:return{sqlType:"int32"};case P.Int64:return{sqlType:"int64"};case P.Uint16:return{sqlType:"uint16"};case P.Uint32:return{sqlType:"uint32"};case P.Uint64:return{sqlType:"uint64"};case P.Uint8:return{sqlType:"uint8"};case P.IntervalDayTime:return{sqlType:"interval[dt]"};case P.IntervalYearMonth:return{sqlType:"interval[m]"};case P.List:return{sqlType:"list",valueType:Uo(n.valueType)};case P.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case P.Null:return{sqlType:"null"};case P.Utf8:return{sqlType:"utf8"};case P.Struct:return{sqlType:"struct",fields:n.children.map(t=>Hu(t.name,t.type))};case P.Map:{let t=n;return{sqlType:"map",keyType:Uo(t.keyType),valueType:Uo(t.valueType)}}case P.Time:return{sqlType:"time[s]"};case P.TimeMicrosecond:return{sqlType:"time[us]"};case P.TimeMillisecond:return{sqlType:"time[ms]"};case P.TimeNanosecond:return{sqlType:"time[ns]"};case P.TimeSecond:return{sqlType:"time[s]"};case P.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case P.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case P.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case P.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case P.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Hu(n,t){let e=Uo(t);return e.name=n,e}var ww=/'(opfs:\/\/\S*?)'/g,Tw=/(opfs:\/\/\S*?)/g;function Iw(n){return n.search(Tw)>-1}function Rw(n){return[...n.matchAll(ww)].map(t=>t[1])}var Cw=new TextEncoder,Dw=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new be("RESET",null);return await this.postTask(n)}async ping(){let n=new be("PING",null);await this.postTask(n)}async dropFile(n){let t=new be("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new be("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new be("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new be("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new be("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new be("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new be("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new be("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new be("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new bw(this,n)}async disconnect(n){let t=new be("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new be("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new be("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new be("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new be("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new be("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new be("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new be("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new be("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new be("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new be("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new be("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=Cw.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new be("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new be("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new be("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new be("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new be("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new be("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new be("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new be("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new be("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Hu(s,a))}e.columnsFlat=r,delete e.columns}let i=new be("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Hu(s,a))}e.columnsFlat=r,delete e.columns}let i=new be("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return Iw((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=Rw(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function Lw(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}Lw();var Pw=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(Pw||{}),Nw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Fw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),Uw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),Ow=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),Bw={version:"1.33.1-dev20.0"},Th=Bw.version.split(".");Th[0];Th[1];Th[2];var Vw=()=>typeof navigator>"u",wc=null,Tc=null,Ic=null,Rc=null,Cc=null;async function zw(){return wc==null&&(wc=typeof BigInt64Array<"u"),Tc==null&&(Tc=await Fw()),Ic==null&&(Ic=await Ow()),Rc==null&&(Rc=await Uw()),Cc==null&&(Cc=await Nw()),{bigInt64Array:wc,crossOriginIsolated:Vw()||globalThis.crossOriginIsolated||!1,wasmExceptions:Tc,wasmSIMD:Rc,wasmThreads:Ic,wasmBulkMemory:Cc}}async function Hw(n){let t=await zw();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}dw(fw());const kw="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",Gw="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",Ww="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",Zw="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",Xw="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",Yw="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",qw="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js";class jw{db=null;connection=null;async initialize(){try{const e=await Hw({mvp:{mainModule:kw,mainWorker:Gw},eh:{mainModule:Ww,mainWorker:Zw},coi:{mainModule:Xw,mainWorker:Yw,pthreadWorker:qw}}),i=new Worker(e.mainWorker),r=new xw;this.db=new Dw(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class Kw{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;allocateBuffers(t=100){this.capacity=t,Wt.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Wt.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=Wt.request("GET_RING_BUFFER",{id:this.xBufferId}),i=Wt.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.bindEvents()}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=a.clientY-e.top;this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}const Jw=n=>{P1(n,{})};var Qw=De("<!> <!> <!>",1),$w=De('<div class="logic-tree svelte-1uha8ag"><!></div>'),tT=De('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function cT(n,t){Be(t,!0);const e=c=>{F1(c,{children:(h,p)=>{var d=qe(),_=Te(d);{var y=S=>{_v(S,{})};kt(_,S=>{A(o)&&S(y)})}U(h,d)},$$slots:{default:!0}})};new sg;const i=new U1,r=new CM,s=new jw,a=new Kw;let o=un(!1),l=un(!1);bl(()=>{$e(l,!!localStorage.getItem("graph-state")),a.allocateBuffers(100),$e(o,!0)}),D1(n,{get viewsPanel(){return Jw},get settingsPanel(){return e},children:(c,h)=>{var p=tT(),d=Te(p),_=ft(d);mg(_,{get graph(){return i},get renderer(){return r},get compute(){return s},get pointer(){return a}}),at(d);var y=pt(d,2);{var S=m=>{var g=$w(),E=ft(g);O1(E,{children:(w,u)=>{B1(w,{id:"mouse-trail",children:(f,T)=>{var R=Qw(),v=Te(R);kh(v,{id:"x-coords",bufferId:"pointer-x"});var M=pt(v,2);kh(M,{id:"y-coords",bufferId:"pointer-y"});var W=pt(M,2);dg(W,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"]}),U(f,R)},$$slots:{default:!0}})},$$slots:{default:!0}}),at(g),U(m,g)};kt(y,m=>{A(o)&&!A(l)&&m(S)})}U(c,p)}}),Ve()}export{cT as component};
