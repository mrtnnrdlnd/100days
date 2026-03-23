import{a as N,f as ie,c as qe,t as Tn,k as et,e as bi,s as _n,d as ce,l as Aa}from"../chunks/DcLtDJIC.js";import{o as Va,a as vf}from"../chunks/DXdYLJDf.js";import{h as qr,d as yf,b1 as Em,e as xf,f as Bl,au as Am,K as Vl,q as b,r as wm,ac as Tm,s as Hd,g as zl,i as Ja,aC as Im,aJ as Rm,al as kd,M as Cm,L as Fc,b2 as Dm,O as Lm,b3 as Sf,_ as Pm,aQ as Nm,aI as Zu,b4 as Fm,a8 as Uc,b5 as Um,b6 as Om,a3 as Bm,b7 as Ni,W as Vm,G as bf,J as Mf,b8 as Hl,aa as zm,b9 as Hm,ba as km,aG as Gm,N as Wm,I as Zm,aD as Xm,j as Ym,b as qm,U as Ge,x as Se,b0 as kn,u as as,z as be,B as nt,C as $,F as at,a6 as dt,y as we,am as on,aO as Gd,bb as Ta,a5 as rn,A as Ce,T as Os,bc as jm,bd as kl}from"../chunks/DUX5LY6E.js";import{B as Km,p as Ia,i as Ht,r as In}from"../chunks/BTFzu6dB.js";import{g as Rn,a as Cn,s as en,T as Jm,S as Ef,l as Oc,b as Ao,c as Cr,d as Qm,X as Gl,t as $m,r as es,e as xi,i as ai,f as oi,h as tg,j as wo}from"../chunks/pX0zkX-P.js";import{b as Ra,c as Af}from"../chunks/DMJPQAzT.js";import{i as eg}from"../chunks/RXbD_XiJ.js";const ng=Symbol("NaN");function ig(n,t,e){qr&&yf();var i=new Km(n),r=!Em();xf(()=>{var s=t();s!==s&&(s=ng),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,e)})}function vn(n,t){return t}function rg(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];Mf(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var h=n.outrogroups;Bc(n,Zu(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,d=c.parentNode;Gm(d),d.append(c),n.items.clear()}Bc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Bc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Ni;const a=document.createDocumentFragment();Wm(s,a)}else Zm(t[r],e)}}var Wd;function un(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&Sf)!==0;if(l){var c=n;a=qr?Bl(Am(c)):c.appendChild(Vl())}qr&&yf();var d=null,p=Pm(()=>{var w=e();return Nm(w)?w:w==null?[]:Zu(w)}),h,_=new Map,v=!0;function M(w){(S.effect.f&Vm)===0&&(S.pending.delete(w),S.fallback=d,sg(S,h,a,t,i),d!==null&&(h.length===0?(d.f&Ni)===0?bf(d):(d.f^=Ni,pa(d,null,a)):Mf(d,()=>{d=null})))}function m(w){S.pending.delete(w)}var g=xf(()=>{h=b(p);var w=h.length;let u=!1;if(qr){var f=wm(a)===Tm;f!==(w===0)&&(a=Hd(),Bl(a),zl(!1),u=!0)}for(var T=new Set,R=Cm,y=Lm(),E=0;E<w;E+=1){qr&&Ja.nodeType===Im&&Ja.data===Rm&&(a=Ja,u=!0,zl(!1));var H=h[E],C=i(H,E),U=v?null:o.get(C);U?(U.v&&kd(U.v,H),U.i&&kd(U.i,E),y&&R.unskip_effect(U.e)):(U=ag(o,v?a:Wd??=Vl(),H,C,E,r,t,e),v||(U.e.f|=Ni),o.set(C,U)),T.add(C)}if(w===0&&s&&!d&&(v?d=Fc(()=>s(a)):(d=Fc(()=>s(Wd??=Vl())),d.f|=Ni)),w>T.size&&Dm(),qr&&w>0&&Bl(Hd()),!v)if(_.set(R,T),y){for(const[k,P]of o)T.has(k)||R.skip_effect(P.e);R.oncommit(M),R.ondiscard(m)}else M(R);u&&zl(!0),b(p)}),S={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1,qr&&(a=Ja)}function sa(n){for(;n!==null&&(n.f&Hm)===0;)n=n.next;return n}function sg(n,t,e,i,r){var s=(i&km)!==0,a=t.length,o=n.items,l=sa(n.effect.first),c,d=null,p,h=[],_=[],v,M,m,g;if(s)for(g=0;g<a;g+=1)v=t[g],M=r(v,g),m=o.get(M).e,(m.f&Ni)===0&&(m.nodes?.a?.measure(),(p??=new Set).add(m));for(g=0;g<a;g+=1){if(v=t[g],M=r(v,g),m=o.get(M).e,n.outrogroups!==null)for(const H of n.outrogroups)H.pending.delete(m),H.done.delete(m);if((m.f&Hl)!==0&&(bf(m),s&&(m.nodes?.a?.unfix(),(p??=new Set).delete(m))),(m.f&Ni)!==0)if(m.f^=Ni,m===l)pa(m,null,e);else{var S=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),yr(n,d,m),yr(n,m,S),pa(m,S,e),d=m,h=[],_=[],l=sa(d.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(h.length<_.length){var w=_[0],u;d=w.prev;var f=h[0],T=h[h.length-1];for(u=0;u<h.length;u+=1)pa(h[u],w,e);for(u=0;u<_.length;u+=1)c.delete(_[u]);yr(n,f.prev,T.next),yr(n,d,f),yr(n,T,w),l=w,d=T,g-=1,h=[],_=[]}else c.delete(m),pa(m,l,e),yr(n,m.prev,m.next),yr(n,m,d===null?n.effect.first:d.next),yr(n,d,m),d=m;continue}for(h=[],_=[];l!==null&&l!==m;)(c??=new Set).add(l),_.push(l),l=sa(l.next);if(l===null)continue}(m.f&Ni)===0&&h.push(m),d=m,l=sa(m.next)}if(n.outrogroups!==null){for(const H of n.outrogroups)H.pending.size===0&&(Bc(n,Zu(H.done)),n.outrogroups?.delete(H));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&Hl)===0&&R.push(m);for(;l!==null;)(l.f&Hl)===0&&l!==n.fallback&&R.push(l),l=sa(l.next);var y=R.length;if(y>0){var E=(i&Sf)!==0&&a===0?e:null;if(s){for(g=0;g<y;g+=1)R[g].nodes?.a?.measure();for(g=0;g<y;g+=1)R[g].nodes?.a?.fix()}rg(n,R,E)}}s&&zm(()=>{if(p!==void 0)for(m of p)m.nodes?.a?.apply()})}function ag(n,t,e,i,r,s,a,o){var l=(a&Um)!==0?(a&Om)===0?Bm(e,!1,!1):Uc(e):null,c=(a&Fm)!==0?Uc(r):null;return{v:l,i:c,e:Fc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function pa(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Ni)===0?t.nodes.start:e;i!==null;){var a=Xm(i);if(s.before(i),i===r)return;i=a}}function yr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Wo(n,t,e){Ym(()=>{var i=qm(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function og(n){var t=Uc(0);return function(){return arguments.length===1?(Ge(t,b(t)+1),arguments[0]):(b(t),n())}}class lg{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const Vt=new lg;class cg{id;type="source";subType="dummy";parentId;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}getOutputs(){return{out:this.output}}}class ug{id;type="processor";subType="dummy";parentId;inputMap;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}process(){return{out:this.output}}}class dg{id;type="sink";subType="dummy";parentId;inputMap;constructor(t,e){this.id=t,e&&Object.assign(this,e)}consume(){return null}}class wf{id;type="subject";subType="default";parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}}class hg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Vt.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),Vt.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),Vt.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),Vt.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),Vt.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),Vt.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}}class Tf{id;type="source";subType="ring-buffer";bufferId;parentId;exportMap;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutputs(){if(!this.ringBuffer)return{out:this.outputBuffer};const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return{out:this.outputBuffer}}}class fg{id;type="source";subType="static-array";parentId;exportMap;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutputs(){return{out:this.data}}}class pg{id;type="source";subType="time";parentId;exportMap;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutputs(){return this.outputBuffer[0]=performance.now()/1e3,{out:this.outputBuffer}}}class mg{id;type="source";subType="random";parentId;exportMap;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutputs(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return{out:this.outputBuffer}}}class Zo{id;type="source";parentId;exportMap;capacity;url;outputBuffers={};static fetchCache=new Map;constructor(t,e,i){this.id=t,this.capacity=e,this.url=i}async load(){if(this.url)try{const t=Date.now();let e=Zo.fetchCache.get(this.url);(!e||t-e.time>6e4)&&(e={promise:fetch(this.url).then(s=>s.json()),time:t},Zo.fetchCache.set(this.url,e));const i=await e.promise;this.outputBuffers=this.parseResponse(i),Vt.emit("GRAPH_UPDATED",void 0)}catch{this.outputBuffers={}}}createBuffer(){return new Float64Array(this.capacity)}getOutputs(){return this.outputBuffers}}class gg extends Zo{subType="smhi-weather";constructor(t,e,i,r){const s=`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${r}/lat/${i}/data.json`;super(t,e,s),this.load()}parseResponse(t){const e={},i=t?.timeSeries;if(!Array.isArray(i))return e;const r=Math.min(i.length,this.capacity),s=this.createBuffer();e.time=s;for(let a=0;a<r;a++){const o=i[a];if(o.validTime&&(s[a]=new Date(o.validTime).getTime()/1e3),Array.isArray(o.parameters))for(const l of o.parameters)e[l.name]||(e[l.name]=this.createBuffer()),e[l.name][a]=l.values[0]}return e}}function Zd(n,t){Se(t,!0);let e=Ia(t,"exportMap",19,()=>({}));const i=kn("subject-parent");as(()=>{const r=Vt.request("GET_RING_BUFFER",{id:t.bufferId})||null,s=new Tf(t.id,r,t.bufferId);s.parentId=i?.(),s.exportMap=e(),Vt.request("REGISTER_NODE",{node:s})}),be()}class _g{id;type="processor";subType="math";parentId;capacity;operation;inputMap;exportMap;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){const e=t.in||[];if(e.length===0)return{out:this.outputBuffer};const i=e[0],r=Math.min(i.length,this.outputBuffer.length);for(let s=0;s<r;s++){let a=i[s];for(let o=1;o<e.length;o++){const l=e[o],c=l.length>1?l[s]:l[0];this.operation==="add"?a+=c:this.operation==="multiply"&&(a*=c)}this.outputBuffer[s]=a}return{out:this.outputBuffer}}}class vg{id;type="processor";subType="motion";parentId;capacity;inputMap;exportMap;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}process(t){const e=t.pos||[],i=t.vel||[];if(e.length===0||i.length===0)return{out:this.outputBuffer};const r=e[0],s=i[0],a=Math.min(r.length,s.length,this.outputBuffer.length);for(let o=0;o<a;o++)this.outputBuffer[o]=r[o]+s[o];return{out:this.outputBuffer}}}class If{id;type="sink";subType="sprite";textureId;parentId;inputMap;primitiveCache=[];constructor(t,e){this.id=t,this.textureId=e}consume(t){const e=t.x||[],i=t.y||[];if(e.length===0||i.length===0)return null;let r=e[0],s=i[0];const a=Math.min(r.length,s.length);for(;this.primitiveCache.length<a;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let o=0;o<this.primitiveCache.length;o++)if(o<a)if(r[o]===0&&s[o]===0)this.primitiveCache[o].opacity=0;else{const l=this.primitiveCache[o];l.x=r[o],l.y=s[o],l.opacity=1-o/a}else this.primitiveCache[o].opacity=0;return this.primitiveCache}}class yg{id;type="sink";subType="mesh";textureId;parentId;inputMap;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.primitiveCache}}function xg(n,t){Se(t,!0);let e=Ia(t,"inputIds",19,()=>[]),i=Ia(t,"inputMap",19,()=>({}));const r=kn("subject-parent");as(()=>{const s=new If(t.id,t.textureId);s.parentId=r?.(),s.inputMap=i(),Vt.request("REGISTER_NODE",{node:s});for(let a=0;a<e().length;a++)Vt.request("CONNECT_NODES",{sourceId:e()[a],targetId:t.id})}),be()}class Sg{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};boundSaveGraphState=this.saveGraphState.bind(this);nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new cg(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new pg(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new mg(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new fg(t,e?.data??[0]);return i.subType="static-array",i}},{subType:"smhi-weather",label:"SMHI Weather",create:(t,e)=>{const i=e?.lat??59.3293,r=e?.lon??18.0686;return new gg(t,e?.capacity??100,i,r)}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=Vt.request("GET_RING_BUFFER",{id:i})||null,s=new Tf(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new ug(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new _g(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new vg(t,e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new dg(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new If(t,e?.textureId??"white-box");return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=new yg(t,e?.textureId??"white-box",e?.vertices??new Float32Array,e?.indices??new Uint16Array,e?.uvs??new Float32Array);return i.subType="mesh",i}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new wf(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){await Promise.all([this.compute.initialize().catch(()=>{}),this.renderer.initialize(t).catch(()=>{})]),this.loadGraphState(),Vt.on("GRAPH_UPDATED",this.boundSaveGraphState),this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}saveGraphState(){const t=Vt.request("GET_GRAPH_STATE",void 0),e=t.nodes.map(i=>{const r=i;return{id:i.id,type:i.type,subType:i.subType,parentId:i.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,lat:r.lat,lon:r.lon,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[],exportMap:r.exportMap?JSON.parse(JSON.stringify(r.exportMap)):void 0,inputMap:r.inputMap?JSON.parse(JSON.stringify(r.inputMap)):void 0}}});localStorage.setItem("graph-state",JSON.stringify({nodes:e,connections:t.connections}))}loadGraphState(){const t=localStorage.getItem("graph-state");if(t)try{const e=JSON.parse(t);for(let i=0;i<e.nodes.length;i++){const r=e.nodes[i],s=Vt.request("CREATE_NODE",{id:r.id,type:r.type,subType:r.subType,parentId:r.parentId,config:r.config});s&&Vt.request("REGISTER_NODE",{node:s})}for(let i=0;i<e.connections.length;i++){const r=e.connections[i];Vt.request("CONNECT_NODES",{sourceId:r.sourceId,targetId:r.targetId})}}catch{}}setupMediatorHandlers(){Vt.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),Vt.emit("GRAPH_UPDATED",void 0),!0)),Vt.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),Vt.emit("GRAPH_UPDATED",void 0),!0)),Vt.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),Vt.emit("GRAPH_UPDATED",void 0),!0)),Vt.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),Vt.emit("GRAPH_UPDATED",void 0),!0)),Vt.handle("GET_CONTEXT",t=>null),Vt.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),Vt.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),Vt.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId,t.config&&(t.config.name!==void 0&&(r.name=t.config.name),t.config.exportMap&&(r.exportMap=t.config.exportMap),t.config.inputMap&&(r.inputMap=t.config.inputMap),t.config.inputIds&&(r.inputIds=[...t.config.inputIds]))),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,Vt.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,Vt.off("GRAPH_UPDATED",this.boundSaveGraphState),this.renderer.destroy(),this.compute.destroy()}}var bg=ie('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function Mg(n,t){Se(t,!0);let e,i,r;as(()=>{if(!e||!i)return;(async()=>{r=new Sg(t.graph,t.renderer,t.compute),await r.boot(e);const c=window.devicePixelRatio||1;t.renderer.resize(i.clientWidth,i.clientHeight,c),t.pointer.initialize(i)})();const l=new ResizeObserver(c=>{for(const d of c){const{width:p,height:h}=d.contentRect;p>0&&h>0&&t.renderer.resize(p,h,window.devicePixelRatio||1)}});return l.observe(i),()=>{l.disconnect(),r&&r.shutdown(),t.pointer.destroy()}});var s=bg(),a=nt(s);Ra(a,o=>e=o,()=>e),$(s),Ra(s,o=>i=o,()=>i),N(n,s),be()}var Eg=et('<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'),Ag=et('<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',1),wg=et('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'),Tg=et('<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'),Ig=et('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'),Rg=et('<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'),Cg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Dg(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=Cg();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=Eg();N(u,f)},v=u=>{var f=Ag();on(),N(u,f)},M=u=>{var f=wg();N(u,f)},m=u=>{var f=Tg();N(u,f)},g=u=>{var f=Ig();N(u,f)},S=u=>{var f=Rg();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var Lg=et('<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>'),Pg=et('<path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path>',1),Ng=et('<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Fg=et('<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>'),Ug=et('<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Og=et('<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>'),Bg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Vg(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=Bg();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=Lg();N(u,f)},v=u=>{var f=Pg();on(),N(u,f)},M=u=>{var f=Ng();N(u,f)},m=u=>{var f=Fg();N(u,f)},g=u=>{var f=Ug();N(u,f)},S=u=>{var f=Og();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var zg=et('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Hg=et('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),kg=et('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),Gg=et('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Wg=et('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Zg=et('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),Xg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Rf(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=Xg();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=zg();N(u,f)},v=u=>{var f=Hg();on(),N(u,f)},M=u=>{var f=kg();N(u,f)},m=u=>{var f=Gg();N(u,f)},g=u=>{var f=Wg();N(u,f)},S=u=>{var f=Zg();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var Yg=et('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),qg=et('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),jg=et('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),Kg=et('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),Jg=et('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),Qg=et('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),$g=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function t_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=$g();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=Yg();N(u,f)},v=u=>{var f=qg();on(),N(u,f)},M=u=>{var f=jg();N(u,f)},m=u=>{var f=Kg();N(u,f)},g=u=>{var f=Jg();N(u,f)},S=u=>{var f=Qg();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var e_=et('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),n_=et('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),i_=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),r_=et('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),s_=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),a_=et('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),o_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Cf(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=o_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=e_();N(u,f)},v=u=>{var f=n_();on(),N(u,f)},M=u=>{var f=i_();N(u,f)},m=u=>{var f=r_();N(u,f)},g=u=>{var f=s_();N(u,f)},S=u=>{var f=a_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var l_=et('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),c_=et('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),u_=et('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),d_=et('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),h_=et('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),f_=et('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),p_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function m_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=p_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=l_();N(u,f)},v=u=>{var f=c_();on(),N(u,f)},M=u=>{var f=u_();N(u,f)},m=u=>{var f=d_();N(u,f)},g=u=>{var f=h_();N(u,f)},S=u=>{var f=f_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var g_=et('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),__=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),v_=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),y_=et('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),x_=et('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),S_=et('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),b_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function M_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=b_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=g_();N(u,f)},v=u=>{var f=__();on(),N(u,f)},M=u=>{var f=v_();N(u,f)},m=u=>{var f=y_();N(u,f)},g=u=>{var f=x_();N(u,f)},S=u=>{var f=S_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var E_=et('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),A_=et('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),w_=et('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),T_=et('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),I_=et('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),R_=et('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),C_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function D_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=C_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=E_();N(u,f)},v=u=>{var f=A_();on(),N(u,f)},M=u=>{var f=w_();N(u,f)},m=u=>{var f=T_();N(u,f)},g=u=>{var f=I_();N(u,f)},S=u=>{var f=R_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var L_=et('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),P_=et('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),N_=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),F_=et('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),U_=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),O_=et('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),B_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function V_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=B_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=L_();N(u,f)},v=u=>{var f=P_();on(),N(u,f)},M=u=>{var f=N_();N(u,f)},m=u=>{var f=F_();N(u,f)},g=u=>{var f=U_();N(u,f)},S=u=>{var f=O_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var z_=et('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),H_=et('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),k_=et('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),G_=et('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),W_=et('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),Z_=et('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),X_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Y_(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=X_();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=z_();N(u,f)},v=u=>{var f=H_();on(),N(u,f)},M=u=>{var f=k_();N(u,f)},m=u=>{var f=G_();N(u,f)},g=u=>{var f=W_();N(u,f)},S=u=>{var f=Z_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var q_=et('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),j_=et('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),K_=et('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),J_=et('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),Q_=et('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),$_=et('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),t1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Df(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=t1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=q_();N(u,f)},v=u=>{var f=j_();on(),N(u,f)},M=u=>{var f=K_();N(u,f)},m=u=>{var f=J_();N(u,f)},g=u=>{var f=Q_();N(u,f)},S=u=>{var f=$_();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var e1=et('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),n1=et('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),i1=et('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),r1=et('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),s1=et('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),a1=et('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),o1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Xu(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=o1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=e1();N(u,f)},v=u=>{var f=n1();on(),N(u,f)},M=u=>{var f=i1();N(u,f)},m=u=>{var f=r1();N(u,f)},g=u=>{var f=s1();N(u,f)},S=u=>{var f=a1();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var l1=et('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),c1=et('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),u1=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),d1=et('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),h1=et('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),f1=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),p1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function m1(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=p1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=l1();N(u,f)},v=u=>{var f=c1();on(),N(u,f)},M=u=>{var f=u1();N(u,f)},m=u=>{var f=d1();N(u,f)},g=u=>{var f=h1();N(u,f)},S=u=>{var f=f1();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var g1=et('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),_1=et('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),v1=et('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),y1=et('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),x1=et('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),S1=et('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),b1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function M1(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=b1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=g1();N(u,f)},v=u=>{var f=_1();on(),N(u,f)},M=u=>{var f=v1();N(u,f)},m=u=>{var f=y1();N(u,f)},g=u=>{var f=x1();N(u,f)},S=u=>{var f=S1();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var E1=et('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),A1=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),w1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),T1=et('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),I1=et('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),R1=et('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),C1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Xd(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=C1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=E1();N(u,f)},v=u=>{var f=A1();on(),N(u,f)},M=u=>{var f=w1();N(u,f)},m=u=>{var f=T1();N(u,f)},g=u=>{var f=I1();N(u,f)},S=u=>{var f=R1();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var D1=et('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),L1=et('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),P1=et('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),N1=et('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),F1=et('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),U1=et('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),O1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Lf(n,t){Se(t,!0);const e=Rn();let i=In(t,["$$slots","$$events","$$legacy","children"]),r=dt(()=>t.weight??e.weight??"regular"),s=dt(()=>t.color??e.color??"currentColor"),a=dt(()=>t.size??e.size??"1em"),o=dt(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:R,mirrored:y,...E}=u;return E}var c=O1();Cn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:b(a),height:b(a),fill:b(s),transform:b(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=nt(c);{var p=u=>{var f=qe(),T=we(f);en(T,()=>t.children),N(u,f)};Ht(d,u=>{t.children&&u(p)})}var h=at(d,2);{var _=u=>{var f=D1();N(u,f)},v=u=>{var f=L1();on(),N(u,f)},M=u=>{var f=P1();N(u,f)},m=u=>{var f=N1();N(u,f)},g=u=>{var f=F1();N(u,f)},S=u=>{var f=U1();N(u,f)},w=u=>{var f=Tn();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Ht(h,u=>{b(r)==="bold"?u(_):b(r)==="duotone"?u(v,1):b(r)==="fill"?u(M,2):b(r)==="light"?u(m,3):b(r)==="regular"?u(g,4):b(r)==="thin"?u(S,5):u(w,-1)})}$(c),N(n,c),be()}var B1=ie('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function V1(n,t){var e=B1(),i=nt(e),r=nt(i);Jm(r,{}),$(i);var s=at(i,2),a=nt(s);en(a,()=>t.children),$(s);var o=at(s,2),l=nt(o);en(l,()=>t.viewsPanel??Gd);var c=at(l,2);en(c,()=>t.settingsPanel??Gd),$(o),$(e),N(n,e)}var Wl=og(()=>Oc),z1=ie('<div class="views-content"></div>');function H1(n,t){Se(t,!1),eg(),Ef(n,{get isOpen(){return Wl().viewsOpen},onClose:()=>Wl(Wl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=z1();N(e,r)},$$slots:{default:!0}}),be()}var k1=ie('<div class="settings-content"><!></div>');function G1(n,t){Se(t,!0),Ef(n,{get isOpen(){return Oc.settingsOpen},onClose:()=>Oc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=k1(),s=nt(r);{var a=o=>{var l=qe(),c=we(l);en(c,()=>t.children),N(o,l)};Ht(s,o=>{t.children&&o(a)})}$(r),N(e,r)},$$slots:{default:!0}}),be()}class W1{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];hasInputs(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputs(t)&&(t.inputIds||(t.inputIds=[]),t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){const e=[];for(const[i,r]of this.nodes)r.parentId===t&&e.push(i);for(let i=0;i<e.length;i++)this.removeNode(e[i]);this.nodes.delete(t),this.connections=this.connections.filter(i=>i.sourceId!==t&&i.targetId!==t);for(const[i,r]of this.nodes)this.hasInputs(r)&&r.inputIds&&(r.inputIds=r.inputIds.filter(s=>s!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&(i.inputIds||(i.inputIds=[]),i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&i.inputIds&&(i.inputIds=i.inputIds.filter(r=>r!==t))}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r){if(r.type==="source"){const a=r.getOutputs(),o={};if(r.exportMap)for(const l in a)l in r.exportMap&&(o[r.exportMap[l]]=a[l]);this.nodeOutputs.set(i,o)}else if(r.type==="processor"||r.type==="sink"){const s={};for(let o=0;o<this.connections.length;o++){const l=this.connections[o];if(l.targetId===i){const c=this.nodeOutputs.get(l.sourceId);if(c)for(const d in c)s[d]||(s[d]=[]),s[d].push(c[d])}}const a={};for(const o in s)a[o]=s[o];if(r.inputMap)for(const o in r.inputMap){const l=r.inputMap[o];l&&s[l]?a[o]=s[l]:l&&(a[o]=[])}if(r.type==="processor"){const l=r.process(a),c={};if(r.exportMap)for(const d in l)d in r.exportMap&&(c[r.exportMap[d]]=l[d]);this.nodeOutputs.set(i,c)}else if(r.type==="sink"){const l=r.consume(a);if(l)for(let c=0;c<l.length;c++)this.renderPrimitives.push(l[c])}}}}return this.renderPrimitives}}function Z1(n,t){Se(t,!0),Ta("subject-parent",()=>{});var e=qe(),i=we(e);{var r=s=>{var a=qe(),o=we(a);en(o,()=>t.children),N(s,a)};Ht(i,s=>{t.children&&s(r)})}N(n,e),be()}function X1(n,t){Se(t,!0);const e=kn("subject-parent");as(()=>{const a=new wf(t.id);a.parentId=e?.(),Vt.request("REGISTER_NODE",{node:a})}),Ta("subject-parent",()=>t.id);var i=qe(),r=we(i);{var s=a=>{var o=qe(),l=we(o);en(l,()=>t.children),N(a,o)};Ht(r,a=>{t.children&&a(s)})}N(n,i),be()}function Y1(n,t){return t.filter(e=>e.parentId===n)}function q1(n){return n.type==="source"?[]:n.subType==="motion"?[{id:"pos",label:"POS"},{id:"vel",label:"VEL"}]:n.subType==="sprite"?[{id:"x",label:"X"},{id:"y",label:"Y"}]:[{id:"in",label:"IN"}]}function j1(n){if(n.type==="sink")return[];if(n.subType==="api"){const t=n.availableKeys||[];if(t.length>0)return t.map(e=>({id:e,label:e}))}return[{id:"out",label:"OUT"}]}class K1{#t=rn(null);get selectedNodeId(){return b(this.#t)}set selectedNodeId(t){Ge(this.#t,t,!0)}nodeElements=new Map;#e=rn(null);get dragConnectionSourceId(){return b(this.#e)}set dragConnectionSourceId(t){Ge(this.#e,t,!0)}#n=rn(null);get dragConnectionTargetId(){return b(this.#n)}set dragConnectionTargetId(t){Ge(this.#n,t,!0)}#i=rn(0);get dragStartX(){return b(this.#i)}set dragStartX(t){Ge(this.#i,t,!0)}#r=rn(0);get dragStartY(){return b(this.#r)}set dragStartY(t){Ge(this.#r,t,!0)}}const ye=new K1;var J1=ie('<button class="expand-btn"><!></button>'),Q1=ie('<div class="palette-container"><button class="action-btn" title="Add Child Node"><!></button></div>'),$1=ie('<div class="children-group"></div>'),tv=ie('<div class="tree-item"><div role="button" tabindex="0"><div class="node-info"><!> <div role="button" tabindex="0"></div> <span><!></span> <span class="node-id"> </span></div> <div class="node-actions"><!> <button class="action-btn danger" title="Delete">✕</button></div></div> <!></div>');function Pf(n,t){Se(t,!0);const e=kn("graph-actions"),i=kn("palette-state");let r=rn(!0),s=dt(()=>Y1(t.node.id,t.nodes)),a=dt(()=>b(s).length>0),o=rn(void 0),l=dt(()=>t.node.type==="source"||t.node.type==="processor"||t.node.type==="subject"),c=dt(()=>t.node.type==="processor"||t.node.type==="sink"||t.node.type==="subject"),d=dt(()=>ye.dragConnectionSourceId===t.node.id),p=dt(()=>ye.dragConnectionSourceId!==null&&ye.dragConnectionSourceId!==t.node.id&&b(c)),h=dt(()=>ye.dragConnectionTargetId===t.node.id),_=dt(()=>ye.dragConnectionSourceId===null&&!b(l)||ye.dragConnectionSourceId!==null&&!b(p)&&!b(d));as(()=>(b(o)&&ye.nodeElements.set(t.node.id,b(o)),()=>{ye.nodeElements.get(t.node.id)===b(o)&&ye.nodeElements.delete(t.node.id)}));function v(lt){lt.stopPropagation(),Ge(r,!b(r))}function M(lt){lt.stopPropagation();const Et=lt.currentTarget.getBoundingClientRect();i.activeId===t.node.id?i.activeId=null:(i.activeId=t.node.id,i.x=Et.left,i.y=Et.bottom+4)}function m(lt){lt.stopPropagation(),e.removeNode(t.node.id)}function g(lt){lt.stopPropagation(),ye.selectedNodeId=t.node.id}function S(lt){(lt.key==="Enter"||lt.key===" ")&&(lt.preventDefault(),ye.selectedNodeId=t.node.id)}function w(lt){const Et={subject:Rf,source:Df,sink:Cf,processor:Lf},re=lt.subType||lt.id;return{"mouse-input":D_,"keyboard-input":Xd,sprite:V_,mesh:m1,"sprite-atlas":M1,"transform-shader":Y_,script:m_,renderer:M_,console:Xd,file:t_}[re]||Et[lt.type]}let u=dt(()=>w(t.node));var f=tv(),T=nt(f);let R;var y=nt(T),E=nt(y);{var H=lt=>{var Et=J1(),re=nt(Et);{var K=st=>{Dg(st,{size:12,weight:"bold"})},rt=st=>{Vg(st,{size:12,weight:"bold"})};Ht(re,st=>{b(r)?st(K):st(rt,-1)})}$(Et),ce("click",Et,v),N(lt,Et)};Ht(E,lt=>{b(a)&&lt(H)})}var C=at(E,2);let U;var k=at(C,2),P=nt(k);Af(P,()=>b(u),(lt,Et)=>{Et(lt,{size:16,weight:"fill"})}),$(k);var V=at(k,2),B=nt(V,!0);$(V),$(y);var G=at(y,2),tt=nt(G);{var it=lt=>{var Et=Q1(),re=nt(Et),K=nt(re);Xu(K,{size:12,weight:"bold"}),$(re),$(Et),ce("click",re,M),N(lt,Et)};Ht(tt,lt=>{t.node.type==="subject"&&lt(it)})}var _t=at(tt,2);$(G),$(T),Ra(T,lt=>Ge(o,lt),()=>b(o));var yt=at(T,2);{var pt=lt=>{var Et=$1();un(Et,21,()=>b(s),vn,(re,K)=>{var rt=qe(),st=we(rt);Pf(st,{get node(){return b(K)},get nodes(){return t.nodes}}),N(re,rt)}),$(Et),N(lt,Et)};Ht(yt,lt=>{b(a)&&b(r)&&lt(pt)})}$(f),Ce(()=>{R=Ao(T,1,"node-row",null,R,{selected:ye.selectedNodeId===t.node.id}),U=Ao(C,1,"connection-port",null,U,{active:b(d),"valid-target":b(h),disabled:b(_)}),Ao(k,1,`type-icon ${t.node.type??""}`),Cr(k,"title",t.node.type),_n(B,t.node.name||t.node.id)}),ce("click",T,g),ce("keydown",T,S),ce("pointerdown",C,lt=>{if(!b(l))return;lt.stopPropagation(),lt.preventDefault();const Et=lt.currentTarget.getBoundingClientRect();ye.dragConnectionSourceId=t.node.id,ye.dragStartX=Et.left+Et.width/2,ye.dragStartY=Et.top+Et.height/2}),Aa("pointerenter",C,()=>{b(p)&&(ye.dragConnectionTargetId=t.node.id)}),Aa("pointerleave",C,()=>{ye.dragConnectionTargetId===t.node.id&&(ye.dragConnectionTargetId=null)}),ce("click",_t,m),N(n,f),be()}bi(["click","keydown","pointerdown"]);var ev=ie('<div class="inline-palette" role="presentation"><button><!> Source</button> <button><!> Processor</button> <button><!> Subject</button> <button><!> Sink</button></div>');function nv(n,t){Se(t,!0);let e=Ia(t,"x",3,0),i=Ia(t,"y",3,0),r=rn(void 0),s=rn(0),a=rn(0);as(()=>{if(t.show&&b(r)){const h=b(r).getBoundingClientRect();let _=e(),v=i();_+h.width>window.innerWidth&&(_=window.innerWidth-h.width-8),v+h.height>window.innerHeight&&(v=i()-h.height-8),Ge(s,_,!0),Ge(a,v,!0)}else Ge(s,e()),Ge(a,i())});function o(h,_){_.stopPropagation(),t.onAdd(h)}function l(h){return document.body.appendChild(h),{destroy(){h.parentNode&&h.parentNode.removeChild(h)}}}var c=qe(),d=we(c);{var p=h=>{var _=ev(),v=nt(_),M=nt(v);Df(M,{size:14,weight:"fill",style:"color: var(--color-success)"}),on(),$(v);var m=at(v,2),g=nt(m);Lf(g,{size:14,weight:"fill",style:"color: var(--color-warning)"}),on(),$(m);var S=at(m,2),w=nt(S);Rf(w,{size:14,weight:"fill",style:"color: var(--color-info)"}),on(),$(S);var u=at(S,2),f=nt(u);Cf(f,{size:14,weight:"fill",style:"color: var(--color-error)"}),on(),$(u),$(_),Wo(_,T=>l?.(T)),Ra(_,T=>Ge(r,T),()=>b(r)),Ce(()=>Qm(_,`top: ${b(a)??""}px; left: ${b(s)??""}px;`)),ce("click",_,T=>T.stopPropagation()),ce("click",v,T=>o("source",T)),ce("click",m,T=>o("processor",T)),ce("click",S,T=>o("subject",T)),ce("click",u,T=>o("sink",T)),N(h,_)};Ht(d,h=>{t.show&&h(p)})}N(n,c),be()}bi(["click"]);var iv=ie("<option> </option>"),rv=ie('<div class="input-group"><label>Implementation</label> <select class="unified-input"></select></div>'),sv=ie('<div class="connection-item"><div class="conn-id-group"><input type="text" class="unified-input port-input" placeholder="Export name"/> <span class="conn-separator">←</span> <span class="badge success"> </span></div> <button class="btn-icon danger"><!></button></div>'),av=ie("<option> </option>"),ov=ie('<div class="add-export-row"><select class="unified-input port-select"><option disabled="">Select port...</option><!></select> <input type="text" class="unified-input port-input" placeholder="Export name"/> <button class="action-btn export-add-btn"><!></button></div>'),lv=ie('<div style="font-size: 10px; color: var(--text-muted); font-style: italic; padding: 4px;">All available ports exported</div>'),cv=ie('<div class="input-group"><label>Export Variables</label> <div class="connection-list"><!> <!></div></div> <div class="divider"></div>',1),uv=ie("<option> </option>"),dv=ie('<div class="input-row"><span> </span> <span class="conn-separator">←</span> <select class="unified-input"><option disabled="">-- Select --</option><!></select></div>'),hv=ie('<div class="connection-item"><span class="conn-id"> </span> <button class="btn-icon danger"><!></button></div>'),fv=ie("<option> </option>"),pv=ie('<div class="divider"></div> <div class="input-group"><label>Map Inputs from Pool</label> <div class="connection-list"></div></div> <div class="divider"></div> <div class="input-group"><label>Connected Sources</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="">+ Connect Node...</option><!></select></div></div>',1),mv=ie('<div class="props-content"><div class="input-group"><label>Display Name</label> <input type="text" class="unified-input"/></div> <!> <div class="divider"></div> <!> <!> <!></div>'),gv=ie('<div class="node-properties" style="height: 320px;"><div class="resize-handle"></div> <div class="props-header"><div class="header-title"><h4> </h4> <span> </span></div> <button class="btn-icon"><!></button></div> <!></div>');function _v(n,t){Se(t,!0);const e=kn("graph-actions"),i=kn("settings-registry")||{};let r=dt(()=>t.nodes.find(S=>S.id===ye.selectedNodeId)),s=dt(()=>b(r)||{}),a=rn(Os({})),o=rn(""),l=rn("");function c(S){let w=!1,u=0,f=0;function T(E){w=!0,u=E.clientY,f=S.parentElement.clientHeight,S.setPointerCapture(E.pointerId)}function R(E){if(!w)return;const H=u-E.clientY,C=Math.max(150,Math.min(f+H,window.innerHeight-100));S.parentElement.style.height=`${C}px`}function y(E){w=!1,S.releasePointerCapture(E.pointerId)}return S.addEventListener("pointerdown",T),S.addEventListener("pointermove",R),S.addEventListener("pointerup",y),S.addEventListener("pointercancel",y),{destroy(){S.removeEventListener("pointerdown",T),S.removeEventListener("pointermove",R),S.removeEventListener("pointerup",y),S.removeEventListener("pointercancel",y)}}}Va(()=>{Ge(a,Vt.request("GET_NODE_FACTORIES",void 0),!0)}),as(()=>{b(r)&&(Ge(o,""),Ge(l,""))});function d(S){if(!b(r))return;const w=S.target,u=w.value;u&&(e.connectInput(b(r).id,u),w.value="")}let p=dt(()=>b(r)?t.nodes.filter(S=>(S.type==="source"||S.type==="processor"||S.type==="subject")&&S.id!==b(r).id&&!(b(s).inputIds||[]).includes(S.id)):[]),h=dt(()=>{if(!b(r))return[];const S=new Set,w=t.connections.filter(u=>u.targetId===b(r).id);for(const u of w){const f=t.nodes.find(T=>T.id===u.sourceId);if(f&&f.exportMap)for(const T in f.exportMap)S.add(f.exportMap[T])}return Array.from(S)}),_=dt(()=>b(r)?j1(b(r)).filter(S=>!(b(r).exportMap||{})[S.id]):[]),v=dt(()=>b(r)&&b(r).subType?i[b(r).subType]:null);var M=qe(),m=we(M);{var g=S=>{const w=dt(()=>b(r).type==="subject"?"info":b(r).type==="source"?"success":b(r).type==="processor"?"warning":"error");var u=gv(),f=nt(u);Wo(f,V=>c?.(V));var T=at(f,2),R=nt(T),y=nt(R),E=nt(y,!0);$(y);var H=at(y,2),C=nt(H,!0);$(H),$(R);var U=at(R,2),k=nt(U);Gl(k,{size:14,weight:"bold"}),$(U),$(T);var P=at(T,2);ig(P,()=>b(r).id,V=>{var B=mv(),G=nt(B),tt=at(nt(G),2);es(tt),$(G);var it=at(G,2);{var _t=rt=>{var st=rv(),Nt=at(nt(st),2);un(Nt,21,()=>b(a)[b(r).type],vn,(Ft,Ze)=>{var te=iv(),fe=nt(te,!0);$(te);var xe={};Ce(()=>{_n(fe,b(Ze).label),xe!==(xe=b(Ze).subType)&&(te.value=(te.__value=b(Ze).subType)??"")}),N(Ft,te)}),$(Nt);var Rt;ai(Nt),$(st),Ce(()=>{Rt!==(Rt=b(r).subType||"dummy")&&(Nt.value=(Nt.__value=b(r).subType||"dummy")??"",oi(Nt,b(r).subType||"dummy"))}),ce("change",Nt,Ft=>e.changeNodeSubType(b(r),Ft.currentTarget.value)),N(rt,st)};Ht(it,rt=>{b(a)[b(r).type]&&b(a)[b(r).type].length>0&&rt(_t)})}var yt=at(it,4);{var pt=rt=>{var st=cv(),Nt=we(st),Rt=at(nt(Nt),2),Ft=nt(Rt);{var Ze=de=>{var D=qe(),oe=we(D);un(oe,17,()=>Object.entries(b(r).exportMap),vn,(Jt,_e)=>{var gt=dt(()=>jm(b(_e),2));let I=()=>b(gt)[0],x=()=>b(gt)[1];var F=sv(),Y=nt(F),Q=nt(Y);es(Q);var j=at(Q,4),Mt=nt(j,!0);$(j),$(Y);var ct=at(Y,2),Ot=nt(ct);Gl(Ot,{size:12,weight:"bold"}),$(ct),$(F),Ce(()=>{xi(Q,x()),_n(Mt,I())}),ce("change",Q,zt=>{const ot={...b(r).exportMap};ot[I()]=zt.currentTarget.value||I(),e.updateNodeConfig(b(r),{exportMap:ot})}),ce("click",ct,()=>{const zt={...b(r).exportMap};delete zt[I()],e.updateNodeConfig(b(r),{exportMap:zt})}),N(Jt,F)}),N(de,D)},te=dt(()=>b(r).exportMap&&Object.keys(b(r).exportMap).length>0);Ht(Ft,de=>{b(te)&&de(Ze)})}var fe=at(Ft,2);{var xe=de=>{var D=ov(),oe=nt(D),Jt=nt(oe);Jt.value=Jt.__value="";var _e=at(Jt);un(_e,17,()=>b(_),vn,(Y,Q)=>{var j=av(),Mt=nt(j,!0);$(j);var ct={};Ce(()=>{_n(Mt,b(Q).label),ct!==(ct=b(Q).id)&&(j.value=(j.__value=b(Q).id)??"")}),N(Y,j)}),$(oe);var gt;ai(oe);var I=at(oe,2);es(I);var x=at(I,2),F=nt(x);Xu(F,{size:12,weight:"bold"}),$(x),$(D),Ce(()=>{gt!==(gt=b(o))&&(oe.value=(oe.__value=b(o))??"",oi(oe,b(o))),xi(I,b(l))}),ce("change",oe,Y=>Ge(o,Y.currentTarget.value,!0)),ce("input",I,Y=>Ge(l,Y.currentTarget.value,!0)),ce("click",x,()=>{if(b(o)&&b(l)){const Y={...b(r).exportMap||{}};Y[b(o)]=b(l),e.updateNodeConfig(b(r),{exportMap:Y}),Ge(o,""),Ge(l,"")}}),N(de,D)},se=de=>{var D=lv();N(de,D)};Ht(fe,de=>{b(_).length>0?de(xe):de(se,-1)})}$(Rt),$(Nt),on(2),N(rt,st)};Ht(yt,rt=>{b(r).type!=="sink"&&rt(pt)})}var lt=at(yt,2);{var Et=rt=>{var st=qe(),Nt=we(st);Af(Nt,()=>b(v),(Rt,Ft)=>{Ft(Rt,{get node(){return b(r)}})}),N(rt,st)};Ht(lt,rt=>{b(v)&&rt(Et)})}var re=at(lt,2);{var K=rt=>{var st=pv(),Nt=at(we(st),2),Rt=at(nt(Nt),2);un(Rt,21,()=>q1(b(r)),vn,(de,D)=>{var oe=dv(),Jt=nt(oe),_e=nt(Jt,!0);$(Jt);var gt=at(Jt,4),I=nt(gt);I.value=I.__value="";var x=at(I);un(x,17,()=>b(h),vn,(Y,Q)=>{var j=uv(),Mt=nt(j,!0);$(j);var ct={};Ce(()=>{_n(Mt,b(Q)),ct!==(ct=b(Q))&&(j.value=(j.__value=b(Q))??"")}),N(Y,j)}),$(gt);var F;ai(gt),$(oe),Ce(Y=>{_n(_e,b(D).label),F!==(F=Y)&&(gt.value=(gt.__value=Y)??"",oi(gt,Y))},[()=>b(r).inputMap?.[b(D).id]||(b(h).includes(b(D).id)?b(D).id:"")]),ce("change",gt,Y=>{const Q={...b(r).inputMap||{}};Q[b(D).id]=Y.currentTarget.value,e.updateNodeConfig(b(r),{inputMap:Q})}),N(de,oe)}),$(Rt),$(Nt);var Ft=at(Nt,4),Ze=at(nt(Ft),2),te=nt(Ze);un(te,17,()=>t.connections.filter(de=>de.targetId===b(r).id),vn,(de,D)=>{const oe=dt(()=>t.nodes.find(Y=>Y.id===b(D).sourceId)),Jt=dt(()=>b(oe)||{});var _e=hv(),gt=nt(_e),I=nt(gt,!0);$(gt);var x=at(gt,2),F=nt(x);Gl(F,{size:12,weight:"bold"}),$(x),$(_e),Ce(()=>_n(I,b(oe)?b(Jt).name||b(oe).id:b(D).sourceId)),ce("click",x,()=>e.disconnectInput(b(r).id,b(D).sourceId)),N(de,_e)});var fe=at(te,2),xe=nt(fe);xe.value=xe.__value="";var se=at(xe);un(se,17,()=>b(p),vn,(de,D)=>{const oe=dt(()=>b(D));var Jt=fv(),_e=nt(Jt);$(Jt);var gt={};Ce(()=>{_n(_e,`${(b(oe).name||b(D).id)??""} (${b(D).type??""})`),gt!==(gt=b(D).id)&&(Jt.value=(Jt.__value=b(D).id)??"")}),N(de,Jt)}),$(fe),fe.value=fe.__value="",$(Ze),$(Ft),ce("change",fe,d),N(rt,st)};Ht(re,rt=>{b(r).type!=="source"&&rt(K)})}$(B),Ce(()=>{xi(tt,b(s).name||""),Cr(tt,"placeholder",b(r).id)}),ce("change",tt,rt=>e.updateNodeConfig(b(r),{name:rt.currentTarget.value})),N(V,B)}),$(u),Ce(()=>{_n(E,b(s).name||b(r).id),Ao(H,1,`badge ${b(w)??""}`),_n(C,b(r).type)}),ce("click",U,()=>ye.selectedNodeId=null),$m(3,u,()=>tg,()=>({y:50,duration:250})),N(S,u)};Ht(m,S=>{b(r)&&S(g)})}N(n,M),be()}bi(["click","change","input"]);var vv=et('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),yv=et('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path"></path>'),xv=et('<svg class="data-connections-layer" style="pointer-events: none; z-index: 1;"><defs></defs><!></svg>');function Sv(n,t){Se(t,!0);let e,i=rn(Os([]));const r=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4"];function s(){if(!e)return;const c=e.getBoundingClientRect();if(c.width===0||c.height===0)return;const d=new Map;for(let R=0;R<t.connections.length;R++){const y=t.connections[R];d.has(y.sourceId)||d.set(y.sourceId,[]),d.get(y.sourceId).push(y.targetId)}const p=[];for(let R=0;R<t.nodes.length;R++){const y=t.nodes[R],E=[y.id],H=new Set,C=new Set;for(;E.length>0;){const U=E.shift(),k=d.get(U)||[];for(let P=0;P<k.length;P++){const V=k[P];if(H.has(V))continue;H.add(V);const B=t.nodes.find(G=>G.id===V);B&&(B.type==="subject"?E.push(V):C.add(V))}}for(const U of C)p.push({sourceId:y.id,targetId:U})}const h=new Map;for(let R=0;R<p.length;R++){const y=p[R],E=y.sourceId+"->"+y.targetId;h.set(E,y)}const v=Array.from(h.values()).sort((R,y)=>R.sourceId.localeCompare(y.sourceId)),M=new Map,m=new Map;for(let R=0;R<v.length;R++){const y=v[R];M.set(y.sourceId,(M.get(y.sourceId)||0)+1),m.set(y.targetId,(m.get(y.targetId)||0)+1)}const g=new Map,S=new Map,w=[];let u=1/0;for(let R=0;R<v.length;R++){const y=v[R],E=ye.nodeElements.get(y.sourceId),H=ye.nodeElements.get(y.targetId);if(E&&H){const C=E.getBoundingClientRect(),U=H.getBoundingClientRect(),k=M.get(y.sourceId)||1,P=g.get(y.sourceId)||0;g.set(y.sourceId,P+1);const V=m.get(y.targetId)||1,B=S.get(y.targetId)||0;S.set(y.targetId,B+1);const G=(P-(k-1)/2)*4,tt=(B-(V-1)/2)*4,it=C.top+C.height/2-c.top+G,_t=C.left-c.left-2,yt=U.top+U.height/2-c.top+tt,pt=U.left-c.left-2,lt=Math.min(it,yt),Et=Math.max(it,yt),re=Et-lt,K=Math.min(_t,pt)-12;K<u&&(u=K),w.push({id:`${y.sourceId}-${y.targetId}-${R}`,startX:_t,startY:it,endX:pt,endY:yt,minY:lt,maxY:Et,length:re,baseX:K,colorIndex:R%r.length,trackIndex:0})}}u===1/0&&(u=0),w.sort((R,y)=>R.length-y.length);const f=[];for(let R=0;R<w.length;R++){const y=w[R];let E=!1;for(let H=0;H<f.length;H++){const C=f[H];let U=!1;for(let k=0;k<C.length;k++){const P=C[k];if(y.minY+1<P.maxY&&y.maxY-1>P.minY){U=!0;break}}if(!U){C.push({minY:y.minY,maxY:y.maxY}),y.trackIndex=H,E=!0;break}}E||(f.push([{minY:y.minY,maxY:y.maxY}]),y.trackIndex=f.length-1)}const T=[];for(let R=0;R<w.length;R++){const y=w[R],E=u-y.trackIndex*6;let H="";Math.abs(y.startY-y.endY)<2?H=`M ${y.startX} ${y.startY} L ${y.endX} ${y.endY}`:H=`M ${y.startX} ${y.startY} L ${E} ${y.startY} L ${E} ${y.endY} L ${y.endX} ${y.endY}`,T.push({id:y.id,path:H,color:r[y.colorIndex],markerId:`arrow-${y.colorIndex}`})}Ge(i,T,!0)}Va(()=>{const c=new ResizeObserver(s);c.observe(document.body),window.addEventListener("scroll",s,!0);const d=setInterval(s,100);return()=>{c.disconnect(),window.removeEventListener("scroll",s,!0),clearInterval(d)}});var a=xv(),o=nt(a);un(o,21,()=>r,vn,(c,d,p)=>{var h=vv();Cr(h,"id",`arrow-${p}`);var _=nt(h);$(h),Ce(()=>Cr(_,"fill",b(d))),N(c,h)}),$(o);var l=at(o);un(l,17,()=>b(i),c=>c.id,(c,d)=>{var p=yv();Ce(()=>{Cr(p,"d",b(d).path),Cr(p,"stroke",b(d).color),Cr(p,"marker-end",`url(#${b(d).markerId??""})`)}),N(c,p)}),$(a),Ra(a,c=>e=c,()=>e),N(n,a),be()}var bv=ie('<div class="palette-overlay" role="presentation"></div>'),Mv=et('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>'),Ev=ie('<div class="editor"><div class="editor-content"><div class="editor-header"><h3>Graph Editor</h3> <div class="palette-container"><button class="action-btn" title="Add Root Node"><!></button></div></div> <div class="tree-wrapper"><!> <div class="tree"></div> <!></div></div> <!> <!> <!></div>');function Av(n,t){Se(t,!0);let e=rn(Os([])),i=rn(Os([]));const r=Os({activeId:null,x:0,y:0});Ta("palette-state",r);let s=dt(()=>b(e).filter(P=>!P.parentId)),a=rn(0),o=rn(0);function l(){const P=Vt.request("GET_GRAPH_STATE",void 0);P&&(Ge(e,P.nodes,!0),Ge(i,P.connections,!0))}Va(()=>{l(),Vt.on("GRAPH_UPDATED",l)}),vf(()=>{Vt.off("GRAPH_UPDATED",l)});function c(P){P.stopPropagation();const V=P.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=V.left,r.y=V.bottom+4)}const d={removeNode:P=>{Vt.request("REMOVE_NODE",{id:P}),ye.selectedNodeId===P&&(ye.selectedNodeId=null)},addNode:(P,V)=>{const B=V+"-"+Math.random().toString(36).substring(2,6),G=V==="subject"?"default":"dummy",tt=Vt.request("CREATE_NODE",{id:B,type:V,subType:G,parentId:P||void 0});tt&&(Vt.request("REGISTER_NODE",{node:tt}),r.activeId=null,ye.selectedNodeId=B)},updateNodeConfig:(P,V)=>{const B=P,G={name:B.name,capacity:B.capacity,operation:B.operation,textureId:B.textureId,bufferId:B.bufferId,url:B.url,dataPath:B.dataPath,timeKey:B.timeKey,unpackArray:B.unpackArray,unpackKey:B.unpackKey,unpackValue:B.unpackValue,data:B.data?Array.from(B.data):void 0,vertices:B.vertices,indices:B.indices,uvs:B.uvs,inputIds:B.inputIds?[...B.inputIds]:[],exportMap:P.exportMap?JSON.parse(JSON.stringify(P.exportMap)):void 0,inputMap:P.inputMap?JSON.parse(JSON.stringify(P.inputMap)):void 0,...V},tt=Vt.request("CREATE_NODE",{id:P.id,type:P.type,subType:P.subType||"dummy",parentId:P.parentId,config:G});tt&&Vt.request("REGISTER_NODE",{node:tt})},changeNodeSubType:(P,V)=>{const B=P,G={inputIds:B.inputIds?[...B.inputIds]:[]},tt=Vt.request("CREATE_NODE",{id:P.id,type:P.type,subType:V,parentId:P.parentId,config:G});tt&&Vt.request("REGISTER_NODE",{node:tt})},connectInput:(P,V)=>{Vt.request("CONNECT_NODES",{sourceId:V,targetId:P})},disconnectInput:(P,V)=>{Vt.request("DISCONNECT_NODES",{sourceId:V,targetId:P})}};Ta("graph-actions",d);function p(P){const V=r.activeId==="root"?null:r.activeId;d.addNode(V,P)}function h(P){ye.dragConnectionSourceId&&(Ge(a,P.clientX,!0),Ge(o,P.clientY,!0))}function _(P){ye.dragConnectionSourceId&&(ye.dragConnectionTargetId&&ye.dragConnectionTargetId!==ye.dragConnectionSourceId&&d.connectInput(ye.dragConnectionTargetId,ye.dragConnectionSourceId),ye.dragConnectionSourceId=null,ye.dragConnectionTargetId=null)}function v(P){return document.body.appendChild(P),{destroy(){P.parentNode&&P.parentNode.removeChild(P)}}}var M=Ev();Aa("click",kl,()=>r.activeId=null),Aa("pointermove",kl,h),Aa("pointerup",kl,_);var m=nt(M),g=nt(m),S=at(nt(g),2),w=nt(S),u=nt(w);Xu(u,{size:12,weight:"bold"}),$(w),$(S),$(g);var f=at(g,2),T=nt(f);Sv(T,{get connections(){return b(i)},get nodes(){return b(e)}});var R=at(T,2);un(R,21,()=>b(s),vn,(P,V)=>{Pf(P,{get node(){return b(V)},get nodes(){return b(e)}})}),$(R);var y=at(R,2);{var E=P=>{var V=bv();Wo(V,B=>v?.(B)),ce("click",V,()=>r.activeId=null),N(P,V)};Ht(y,P=>{r.activeId&&P(E)})}$(f),$(m);var H=at(m,2);_v(H,{get nodes(){return b(e)},get connections(){return b(i)}});var C=at(H,2);{let P=dt(()=>r.activeId!==null);nv(C,{get show(){return b(P)},get x(){return r.x},get y(){return r.y},onAdd:p})}var U=at(C,2);{var k=P=>{const V=dt(()=>ye.dragStartX),B=dt(()=>ye.dragStartY),G=dt(()=>Math.min(b(V),b(a))-20);var tt=Mv(),it=at(nt(tt));$(tt),Wo(tt,_t=>v?.(_t)),Ce(()=>Cr(it,"d",`M ${b(V)} ${b(B)} L ${b(G)} ${b(B)} L ${b(G)} ${b(o)} L ${b(a)} ${b(o)}`)),N(P,tt)};Ht(U,P=>{ye.dragConnectionSourceId&&P(k)})}$(M),ce("click",w,c),N(n,M),be()}bi(["click"]);const Yu="183",wv=0,Yd=1,Tv=2,To=1,Iv=2,ma=3,Pr=0,Hn=1,Kn=2,or=0,Bs=1,qd=2,jd=3,Kd=4,Rv=5,Kr=100,Cv=101,Dv=102,Lv=103,Pv=104,Nv=200,Fv=201,Uv=202,Ov=203,Vc=204,zc=205,Bv=206,Vv=207,zv=208,Hv=209,kv=210,Gv=211,Wv=212,Zv=213,Xv=214,Hc=0,kc=1,Gc=2,Ws=3,Wc=4,Zc=5,Xc=6,Yc=7,Nf=0,Yv=1,qv=2,Vi=0,Ff=1,Uf=2,Of=3,Bf=4,Vf=5,zf=6,Hf=7,kf=300,is=301,Zs=302,Zl=303,Xl=304,Tl=306,qc=1e3,ar=1001,jc=1002,xn=1003,jv=1004,Qa=1005,En=1006,Yl=1007,Qr=1008,li=1009,Gf=1010,Wf=1011,Ca=1012,qu=1013,ki=1014,Fi=1015,ur=1016,ju=1017,Ku=1018,Da=1020,Zf=35902,Xf=35899,Yf=1021,qf=1022,yi=1023,dr=1026,$r=1027,jf=1028,Ju=1029,Xs=1030,Qu=1031,$u=1033,Io=33776,Ro=33777,Co=33778,Do=33779,Kc=35840,Jc=35841,Qc=35842,$c=35843,tu=36196,eu=37492,nu=37496,iu=37488,ru=37489,su=37490,au=37491,ou=37808,lu=37809,cu=37810,uu=37811,du=37812,hu=37813,fu=37814,pu=37815,mu=37816,gu=37817,_u=37818,vu=37819,yu=37820,xu=37821,Su=36492,bu=36494,Mu=36495,Eu=36283,Au=36284,wu=36285,Tu=36286,Kv=3200,Jv=0,Qv=1,Dr="",ni="srgb",Ys="srgb-linear",Xo="linear",Ve="srgb",us=7680,Jd=519,$v=512,ty=513,ey=514,td=515,ny=516,iy=517,ed=518,ry=519,Qd=35044,$d="300 es",Ui=2e3,Yo=2001;function sy(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ay(){const n=qo("canvas");return n.style.display="block",n}const th={};function eh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Kf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ne(...n){n=Kf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Re(...n){n=Kf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function jo(...n){const t=n.join(" ");t in th||(th[t]=!0,ne(...n))}function oy(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const ly={[Hc]:kc,[Gc]:Xc,[Wc]:Yc,[Ws]:Zc,[kc]:Hc,[Xc]:Gc,[Yc]:Wc,[Zc]:Ws};class ta{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Iu=180/Math.PI;function za(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Ee(n,t,e){return Math.max(t,Math.min(e,n))}function cy(n,t){return(n%t+t)%t}function jl(n,t,e){return(1-e)*n+e*t}function aa(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(t=0,e=0){We.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ea{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3],h=s[a+0],_=s[a+1],v=s[a+2],M=s[a+3];if(p!==M||l!==h||c!==_||d!==v){let m=l*h+c*_+d*v+p*M;m<0&&(h=-h,_=-_,v=-v,M=-M,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w,l=l*g+h*o,c=c*g+_*o,d=d*g+v*o,p=p*g+M*o}else{l=l*g+h*o,c=c*g+_*o,d=d*g+v*o,p=p*g+M*o;const S=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=S,c*=S,d*=S,p*=S}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[a],h=s[a+1],_=s[a+2],v=s[a+3];return t[e]=o*v+d*p+l*_-c*h,t[e+1]=l*v+d*h+c*p-o*_,t[e+2]=c*v+d*_+o*h-l*p,t[e+3]=d*v-o*p-l*h-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),p=o(s/2),h=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*d*p+c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p-h*_*v;break;case"YXZ":this._x=h*d*p+c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p+h*_*v;break;case"ZXY":this._x=h*d*p-c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p-h*_*v;break;case"ZYX":this._x=h*d*p-c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p+h*_*v;break;case"YZX":this._x=h*d*p+c*_*v,this._y=c*_*p+h*d*v,this._z=c*d*v-h*_*p,this._w=c*d*p-h*_*v;break;case"XZY":this._x=h*d*p-c*_*v,this._y=c*_*p-h*d*v,this._z=c*d*v+h*_*p,this._w=c*d*p+h*_*v;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],h=i+o+p;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(d-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),d=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*d,this.y=i+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new X,nh=new ea;class le{constructor(t,e,i,r,s,a,o,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],_=i[5],v=i[8],M=r[0],m=r[3],g=r[6],S=r[1],w=r[4],u=r[7],f=r[2],T=r[5],R=r[8];return s[0]=a*M+o*S+l*f,s[3]=a*m+o*w+l*T,s[6]=a*g+o*u+l*R,s[1]=c*M+d*S+p*f,s[4]=c*m+d*w+p*T,s[7]=c*g+d*u+p*R,s[2]=h*M+_*S+v*f,s[5]=h*m+_*w+v*T,s[8]=h*g+_*u+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,h=o*l-d*s,_=c*s-a*l,v=e*p+i*h+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=p*M,t[1]=(r*c-d*i)*M,t[2]=(o*i-r*a)*M,t[3]=h*M,t[4]=(d*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=_*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new le,ih=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const n={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ve&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ve&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ys]:{primaries:t,whitePoint:i,transfer:Xo,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),n}const Te=uy();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class dy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ds===void 0&&(ds=qo("canvas")),ds.width=t.width,ds.height=t.height;const r=ds.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(lr(e[i]/255)*255):e[i]=lr(e[i]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hy=0;class nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ql(r[a].image)):s.push(Ql(r[a]))}else s=Ql(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let fy=0;const $l=new X;class Fn extends ta{constructor(t=Fn.DEFAULT_IMAGE,e=Fn.DEFAULT_MAPPING,i=ar,r=ar,s=En,a=Qr,o=yi,l=li,c=Fn.DEFAULT_ANISOTROPY,d=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=za(),this.name="",this.source=new nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qc:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qc:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=kf;Fn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,e=0,i=0,r=1){sn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],d=l[4],p=l[8],h=l[1],_=l[5],v=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,u=(_+1)/2,f=(g+1)/2,T=(d+h)/4,R=(p+M)/4,y=(v+m)/4;return w>u&&w>f?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=R/i):u>f?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=T/r,s=y/r):f<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(f),i=R/s,r=y/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-v)*(m-v)+(p-M)*(p-M)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(p-M)/S,this.z=(h-d)/S,this.w=Math.acos((c+_+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends ta{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Fn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new nd(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends py{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Jf extends Fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(t,e,i,r,s,a,o,l,c,d,p,h,_,v,M,m){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,d,p,h,_,v,M,m)}set(t,e,i,r,s,a,o,l,c,d,p,h,_,v,M,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=p,g[14]=h,g[3]=_,g[7]=v,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const h=a*d,_=a*p,v=o*d,M=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,_=l*p,v=c*d,M=c*p;e[0]=h+M*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=_*o-v,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,_=l*p,v=c*d,M=c*p;e[0]=h-M*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,_=a*p,v=o*d,M=o*p;e[0]=l*d,e[4]=v*c-_,e[8]=h*c+M,e[1]=l*p,e[5]=M*c+h,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,_=a*c,v=o*l,M=o*c;e[0]=l*d,e[4]=M-h*p,e[8]=v*p+_,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=_*p+v,e[10]=h-M*p}else if(t.order==="XZY"){const h=a*l,_=a*c,v=o*l,M=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=h*p+M,e[5]=a*d,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*d,e[10]=M*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gy,t,_y)}lookAt(t,e,i){const r=this.elements;return Xn.subVectors(t,e),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),xr.crossVectors(i,Xn),xr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),xr.crossVectors(i,Xn)),xr.normalize(),$a.crossVectors(Xn,xr),r[0]=xr.x,r[4]=$a.x,r[8]=Xn.x,r[1]=xr.y,r[5]=$a.y,r[9]=Xn.y,r[2]=xr.z,r[6]=$a.z,r[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],_=i[13],v=i[2],M=i[6],m=i[10],g=i[14],S=i[3],w=i[7],u=i[11],f=i[15],T=r[0],R=r[4],y=r[8],E=r[12],H=r[1],C=r[5],U=r[9],k=r[13],P=r[2],V=r[6],B=r[10],G=r[14],tt=r[3],it=r[7],_t=r[11],yt=r[15];return s[0]=a*T+o*H+l*P+c*tt,s[4]=a*R+o*C+l*V+c*it,s[8]=a*y+o*U+l*B+c*_t,s[12]=a*E+o*k+l*G+c*yt,s[1]=d*T+p*H+h*P+_*tt,s[5]=d*R+p*C+h*V+_*it,s[9]=d*y+p*U+h*B+_*_t,s[13]=d*E+p*k+h*G+_*yt,s[2]=v*T+M*H+m*P+g*tt,s[6]=v*R+M*C+m*V+g*it,s[10]=v*y+M*U+m*B+g*_t,s[14]=v*E+M*k+m*G+g*yt,s[3]=S*T+w*H+u*P+f*tt,s[7]=S*R+w*C+u*V+f*it,s[11]=S*y+w*U+u*B+f*_t,s[15]=S*E+w*k+u*G+f*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],h=t[10],_=t[14],v=t[3],M=t[7],m=t[11],g=t[15],S=l*_-c*h,w=o*_-c*p,u=o*h-l*p,f=a*_-c*d,T=a*h-l*d,R=a*p-o*d;return e*(M*S-m*w+g*u)-i*(v*S-m*f+g*T)+r*(v*w-M*f+g*R)-s*(v*u-M*T+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],h=t[10],_=t[11],v=t[12],M=t[13],m=t[14],g=t[15],S=e*o-i*a,w=e*l-r*a,u=e*c-s*a,f=i*l-r*o,T=i*c-s*o,R=r*c-s*l,y=d*M-p*v,E=d*m-h*v,H=d*g-_*v,C=p*m-h*M,U=p*g-_*M,k=h*g-_*m,P=S*k-w*U+u*C+f*H-T*E+R*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return t[0]=(o*k-l*U+c*C)*V,t[1]=(r*U-i*k-s*C)*V,t[2]=(M*R-m*T+g*f)*V,t[3]=(h*T-p*R-_*f)*V,t[4]=(l*H-a*k-c*E)*V,t[5]=(e*k-r*H+s*E)*V,t[6]=(m*u-v*R-g*w)*V,t[7]=(d*R-h*u+_*w)*V,t[8]=(a*U-o*H+c*y)*V,t[9]=(i*H-e*U-s*y)*V,t[10]=(v*T-M*u+g*S)*V,t[11]=(p*u-d*T-_*S)*V,t[12]=(o*E-a*C-l*y)*V,t[13]=(e*C-i*E+r*y)*V,t[14]=(M*w-v*f-m*S)*V,t[15]=(d*f-p*w+h*S)*V,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,p=o+o,h=s*c,_=s*d,v=s*p,M=a*d,m=a*p,g=o*p,S=l*c,w=l*d,u=l*p,f=i.x,T=i.y,R=i.z;return r[0]=(1-(M+g))*f,r[1]=(_+u)*f,r[2]=(v-w)*f,r[3]=0,r[4]=(_-u)*T,r[5]=(1-(h+g))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(v+w)*R,r[9]=(m-S)*R,r[10]=(1-(h+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),l=hs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fi.copy(this);const c=1/a,d=1/o,p=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=d,fi.elements[5]*=d,fi.elements[6]*=d,fi.elements[8]*=p,fi.elements[9]*=p,fi.elements[10]*=p,e.setFromRotationMatrix(fi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Ui,l=!1){const c=this.elements,d=2*s/(e-t),p=2*s/(i-r),h=(e+t)/(e-t),_=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===Ui)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Yo)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ui,l=!1){const c=this.elements,d=2/(e-t),p=2/(i-r),h=-(e+t)/(e-t),_=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===Ui)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Yo)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new X,fi=new cn,gy=new X(0,0,0),_y=new X(1,1,1),xr=new X,$a=new X,Xn=new X,sh=new cn,ah=new ea;class hr{constructor(t=0,e=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],h=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vy=0;const oh=new X,fs=new ea,ji=new cn,to=new X,oa=new X,yy=new X,xy=new ea,lh=new X(1,0,0),ch=new X(0,1,0),uh=new X(0,0,1),dh={type:"added"},Sy={type:"removed"},ps={type:"childadded",child:null},tc={type:"childremoved",child:null};class Qn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const t=new X,e=new hr,i=new ea,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new le}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(oa,to,this.up):ji.lookAt(to,oa,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(ji),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),ps.child=t,this.dispatchEvent(ps),ps.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sy),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,xy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),h=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Qn.DEFAULT_UP=new X(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class eo extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&h>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(by)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},no={h:0,s:0,l:0};function nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Le{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Te.workingColorSpace){if(t=cy(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=nc(a,s,t+1/3),this.g=nc(a,s,t),this.b=nc(a,s,t-1/3)}return Te.colorSpaceToWorking(this,r),this}setStyle(t,e=ni){function i(s){s!==void 0&&parseFloat(s)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){const i=$f[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Te.workingToColorSpace(Mn.copy(this),t),Math.round(Ee(Mn.r*255,0,255))*65536+Math.round(Ee(Mn.g*255,0,255))*256+Math.round(Ee(Mn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,s=Mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ni){Te.workingToColorSpace(Mn.copy(this),t);const e=Mn.r,i=Mn.g,r=Mn.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL(no);const i=jl(Sr.h,no.h,e),r=jl(Sr.s,no.s,e),s=jl(Sr.l,no.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Le;Le.NAMES=$f;class My extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const pi=new X,Ki=new X,ic=new X,Ji=new X,ms=new X,gs=new X,hh=new X,rc=new X,sc=new X,ac=new X,oc=new sn,lc=new sn,cc=new sn;class vi{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),pi.subVectors(t,e),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){pi.subVectors(r,e),Ki.subVectors(i,e),ic.subVectors(t,e);const a=pi.dot(pi),o=pi.dot(Ki),l=pi.dot(ic),c=Ki.dot(Ki),d=Ki.dot(ic),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,_=(c*l-o*d)*h,v=(a*d-o*l)*h;return s.set(1-_-v,v,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,i),cc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(t,e,i,r){return pi.subVectors(i,e),Ki.subVectors(t,e),pi.cross(Ki).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),pi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return vi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),rc.subVectors(t,i);const l=ms.dot(rc),c=gs.dot(rc);if(l<=0&&c<=0)return e.copy(i);sc.subVectors(t,r);const d=ms.dot(sc),p=gs.dot(sc);if(d>=0&&p<=d)return e.copy(r);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(ms,a);ac.subVectors(t,s);const _=ms.dot(ac),v=gs.dot(ac);if(v>=0&&_<=v)return e.copy(s);const M=_*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(gs,o);const m=d*v-_*p;if(m<=0&&p-d>=0&&_-v>=0)return hh.subVectors(s,r),o=(p-d)/(p-d+(_-v)),e.copy(r).addScaledVector(hh,o);const g=1/(m+M+h);return a=M*g,o=h*g,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ha{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),ro.subVectors(this.max,la),_s.subVectors(t.a,la),vs.subVectors(t.b,la),ys.subVectors(t.c,la),br.subVectors(vs,_s),Mr.subVectors(ys,vs),Hr.subVectors(_s,ys);let e=[0,-br.z,br.y,0,-Mr.z,Mr.y,0,-Hr.z,Hr.y,br.z,0,-br.x,Mr.z,0,-Mr.x,Hr.z,0,-Hr.x,-br.y,br.x,0,-Mr.y,Mr.x,0,-Hr.y,Hr.x,0];return!uc(e,_s,vs,ys,ro)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,_s,vs,ys,ro))?!1:(so.crossVectors(br,Mr),e=[so.x,so.y,so.z],uc(e,_s,vs,ys,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,io=new Ha,_s=new X,vs=new X,ys=new X,br=new X,Mr=new X,Hr=new X,la=new X,ro=new X,so=new X,kr=new X;function uc(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kr.fromArray(n,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),d=i.dot(kr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ln=new X,ao=new We;let Ey=0;class Hi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ey++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=aa(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=aa(e,this.array)),e}setX(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=aa(e,this.array)),e}setY(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=aa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=aa(e,this.array)),e}setW(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),i=On(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),i=On(i,this.array),r=On(r,this.array),s=On(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qd&&(t.usage=this.usage),t}}class tp extends Hi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ep extends Hi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class cr extends Hi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Ay=new Ha,ca=new X,dc=new X;class id{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ay.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);const e=ca.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(dc)),this.expandByPoint(ca.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wy=0;const ti=new cn,hc=new Qn,xs=new X,Yn=new Ha,ua=new Ha,gn=new X;class fr extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sy(t)?ep:tp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new le().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cr(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new id);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Yn.min,ua.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,ua.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(ua.min),Yn.expandByPoint(ua.max))}Yn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)gn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(gn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)gn.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),gn.add(xs)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new X,l[y]=new X;const c=new X,d=new X,p=new X,h=new We,_=new We,v=new We,M=new X,m=new X;function g(y,E,H){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,H),h.fromBufferAttribute(s,y),_.fromBufferAttribute(s,E),v.fromBufferAttribute(s,H),d.sub(c),p.sub(c),_.sub(h),v.sub(h);const C=1/(_.x*v.y-v.x*_.y);isFinite(C)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(C),m.copy(p).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(C),o[y].add(M),o[E].add(M),o[H].add(M),l[y].add(m),l[E].add(m),l[H].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,E=S.length;y<E;++y){const H=S[y],C=H.start,U=H.count;for(let k=C,P=C+U;k<P;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new X,u=new X,f=new X,T=new X;function R(y){f.fromBufferAttribute(r,y),T.copy(f);const E=o[y];w.copy(E),w.sub(f.multiplyScalar(f.dot(E))).normalize(),u.crossVectors(T,E);const C=u.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,C)}for(let y=0,E=S.length;y<E;++y){const H=S[y],C=H.start,U=H.count;for(let k=C,P=C+U;k<P;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,d=new X,p=new X;if(t)for(let h=0,_=t.count;h<_;h+=3){const v=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,_=e.count;h<_;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let _=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?_=l[M]*o.data.stride+o.offset:_=l[M]*d;for(let g=0;g<d;g++)h[v++]=c[_++]}return new Hi(h,d,p)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],_=t(h,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const _=c[p];d.push(_.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let h=0,_=p.length;h<_;h++)d.push(p[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ty=0;class Il extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Bs,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=zc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vc&&(i.blendSrc=this.blendSrc),this.blendDst!==zc&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const $i=new X,fc=new X,oo=new X,Er=new X,pc=new X,lo=new X,mc=new X;class Iy{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){fc.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Er.copy(this.origin).sub(fc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(oo),o=Er.dot(this.direction),l=-Er.dot(oo),c=Er.lengthSq(),d=Math.abs(1-a*a);let p,h,_,v;if(d>0)if(p=a*l-o,h=a*o-l,v=s*d,p>=0)if(h>=-v)if(h<=v){const M=1/d;p*=M,h*=M,_=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),_=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(fc).addScaledVector(oo,h),_}intersectSphere(t,e){$i.subVectors(t.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,i,r,s){pc.subVectors(e,t),lo.subVectors(i,t),mc.crossVectors(pc,lo);let a=this.direction.dot(mc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Er.subVectors(this.origin,t);const l=o*this.direction.dot(lo.crossVectors(Er,lo));if(l<0)return null;const c=o*this.direction.dot(pc.cross(Er));if(c<0||l+c>a)return null;const d=-o*Er.dot(mc);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fs extends Il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fh=new cn,Gr=new Iy,co=new id,ph=new X,uo=new X,ho=new X,fo=new X,gc=new X,po=new X,mh=new X,mo=new X;class Jn extends Qn{constructor(t=new fr,e=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(gc.fromBufferAttribute(p,t),a?po.addScaledVector(gc,d):po.addScaledVector(gc.sub(e),d))}e.add(po)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),Gr.copy(t.ray).recast(t.near),!(co.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(co,ph)===null||Gr.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const m=h[v],g=a[m.materialIndex],S=Math.max(m.start,_.start),w=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let u=S,f=w;u<f;u+=3){const T=o.getX(u),R=o.getX(u+1),y=o.getX(u+2);r=go(this,g,t,i,c,d,p,T,R,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(o.count,_.start+_.count);for(let m=v,g=M;m<g;m+=3){const S=o.getX(m),w=o.getX(m+1),u=o.getX(m+2);r=go(this,a,t,i,c,d,p,S,w,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const m=h[v],g=a[m.materialIndex],S=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let u=S,f=w;u<f;u+=3){const T=u,R=u+1,y=u+2;r=go(this,g,t,i,c,d,p,T,R,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),M=Math.min(l.count,_.start+_.count);for(let m=v,g=M;m<g;m+=3){const S=m,w=m+1,u=m+2;r=go(this,a,t,i,c,d,p,S,w,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Ry(n,t,e,i,r,s,a,o){let l;if(t.side===Hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Pr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,uo),n.getVertexPosition(l,ho),n.getVertexPosition(c,fo);const d=Ry(n,t,e,i,uo,ho,fo,mh);if(d){const p=new X;vi.getBarycoord(mh,uo,ho,fo,p),r&&(d.uv=vi.getInterpolatedAttribute(r,o,l,c,p,new We)),s&&(d.uv1=vi.getInterpolatedAttribute(s,o,l,c,p,new We)),a&&(d.normal=vi.getInterpolatedAttribute(a,o,l,c,p,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};vi.getNormal(uo,ho,fo,h.normal),d.face=h,d.barycoord=p}return d}class Cy extends Fn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=xn,d=xn,p,h){super(null,a,o,l,c,d,r,s,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=new X,Dy=new X,Ly=new le;class jr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=_c.subVectors(i,e).cross(Dy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ly.getNormalMatrix(t),r=this.coplanarPoint(_c).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new id,Py=new We(.5,.5),_o=new X;class np{constructor(t=new jr,e=new jr,i=new jr,r=new jr,s=new jr,a=new jr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ui,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],h=s[6],_=s[7],v=s[8],M=s[9],m=s[10],g=s[11],S=s[12],w=s[13],u=s[14],f=s[15];if(r[0].setComponents(c-a,_-d,g-v,f-S).normalize(),r[1].setComponents(c+a,_+d,g+v,f+S).normalize(),r[2].setComponents(c+o,_+p,g+M,f+w).normalize(),r[3].setComponents(c-o,_-p,g-M,f-w).normalize(),i)r[4].setComponents(l,h,m,u).normalize(),r[5].setComponents(c-l,_-h,g-m,f-u).normalize();else if(r[4].setComponents(c-l,_-h,g-m,f-u).normalize(),e===Ui)r[5].setComponents(c+l,_+h,g+m,f+u).normalize();else if(e===Yo)r[5].setComponents(l,h,m,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const e=Py.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(_o.x=r.normal.x>0?t.max.x:t.min.x,_o.y=r.normal.y>0?t.max.y:t.min.y,_o.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ip extends Fn{constructor(t=[],e=is,i,r,s,a,o,l,c,d){super(t,e,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class La extends Fn{constructor(t,e,i=ki,r,s,a,o=xn,l=xn,c,d=dr,p=1){if(d!==dr&&d!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:p};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ny extends La{constructor(t,e=ki,i=is,r,s,a=xn,o=xn,l,c=dr){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rp extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ka extends fr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,_=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cr(c,3)),this.setAttribute("normal",new cr(d,3)),this.setAttribute("uv",new cr(p,2));function v(M,m,g,S,w,u,f,T,R,y,E){const H=u/R,C=f/y,U=u/2,k=f/2,P=T/2,V=R+1,B=y+1;let G=0,tt=0;const it=new X;for(let _t=0;_t<B;_t++){const yt=_t*C-k;for(let pt=0;pt<V;pt++){const lt=pt*H-U;it[M]=lt*S,it[m]=yt*w,it[g]=P,c.push(it.x,it.y,it.z),it[M]=0,it[m]=0,it[g]=T>0?1:-1,d.push(it.x,it.y,it.z),p.push(pt/R),p.push(1-_t/y),G+=1}}for(let _t=0;_t<y;_t++)for(let yt=0;yt<R;yt++){const pt=h+yt+V*_t,lt=h+yt+V*(_t+1),Et=h+(yt+1)+V*(_t+1),re=h+(yt+1)+V*_t;l.push(pt,lt,re),l.push(lt,Et,re),tt+=6}o.addGroup(_,tt,E),_+=tt,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ga extends fr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,p=t/o,h=e/l,_=[],v=[],M=[],m=[];for(let g=0;g<d;g++){const S=g*h-a;for(let w=0;w<c;w++){const u=w*p-s;v.push(u,-S,0),M.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const w=S+c*g,u=S+c*(g+1),f=S+1+c*(g+1),T=S+1+c*g;_.push(w,u,T),_.push(u,f,T)}this.setIndex(_),this.setAttribute("position",new cr(v,3)),this.setAttribute("normal",new cr(M,3)),this.setAttribute("uv",new cr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}function qs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Dn(n){const t={};for(let e=0;e<n.length;e++){const i=qs(n[e]);for(const r in i)t[r]=i[r]}return t}function Fy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Uy={clone:qs,merge:Dn};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,By=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=By,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Fy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vy extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zy extends Il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hy extends Il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vo=new X,yo=new ea,Ai=new X;class ap extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vo,yo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(vo,yo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new X,gh=new We,_h=new We;class _i extends ap{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Iu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z)}getViewSize(t,e){return this.getViewBounds(t,gh,_h),e.subVectors(_h,gh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ql*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class rd extends ap{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=-90,bs=1;class ky extends Qn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(Ss,bs,t,e);r.layers=this.layers,this.add(r);const s=new _i(Ss,bs,t,e);s.layers=this.layers,this.add(s);const a=new _i(Ss,bs,t,e);a.layers=this.layers,this.add(a);const o=new _i(Ss,bs,t,e);o.layers=this.layers,this.add(o);const l=new _i(Ss,bs,t,e);l.layers=this.layers,this.add(l);const c=new _i(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,h,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Gy extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function vh(n,t,e,i){const r=Wy(i);switch(e){case Yf:return n*t;case jf:return n*t/r.components*r.byteLength;case Ju:return n*t/r.components*r.byteLength;case Xs:return n*t*2/r.components*r.byteLength;case Qu:return n*t*2/r.components*r.byteLength;case qf:return n*t*3/r.components*r.byteLength;case yi:return n*t*4/r.components*r.byteLength;case $u:return n*t*4/r.components*r.byteLength;case Io:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:case $c:return Math.max(n,16)*Math.max(t,8)/4;case Kc:case Qc:return Math.max(n,8)*Math.max(t,8)/2;case tu:case eu:case iu:case ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nu:case su:case au:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ou:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case gu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _u:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Su:case bu:case Mu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Eu:case Au:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wu:case Tu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wy(n){switch(n){case li:case Gf:return{byteLength:1,components:1};case Ca:case Wf:case ur:return{byteLength:2,components:1};case ju:case Ku:return{byteLength:2,components:4};case ki:case qu:case Fi:return{byteLength:4,components:1};case Zf:case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);function op(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Zy(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((_,v)=>_.start-v.start);let h=0;for(let _=1;_<p.length;_++){const v=p[h],M=p[_];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,p[h]=M)}p.length=h+1;for(let _=0,v=p.length;_<v;_++){const M=p[_];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t2=`#ifdef USE_BATCHING
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
#endif`,e2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s2=`#ifdef USE_IRIDESCENCE
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
#endif`,a2=`#ifdef USE_BUMPMAP
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
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,m2=`#define PI 3.141592653589793
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
} // validated`,g2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_2=`vec3 transformedNormal = objectNormal;
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
#endif`,v2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b2="gl_FragColor = linearToOutputTexel( gl_FragColor );",M2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E2=`#ifdef USE_ENVMAP
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
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w2=`#ifdef USE_ENVMAP
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
#endif`,T2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I2=`#ifdef USE_ENVMAP
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
#endif`,R2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P2=`#ifdef USE_GRADIENTMAP
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
}`,N2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O2=`uniform bool receiveShadow;
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
#endif`,B2=`#ifdef USE_ENVMAP
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
#endif`,V2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G2=`PhysicalMaterial material;
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
#endif`,W2=`uniform sampler2D dfgLUT;
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
}`,Z2=`
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
#endif`,X2=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,tS=`#define DISTANCE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
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
}`,rS=`uniform vec3 diffuse;
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
}`,sS=`#include <common>
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#define LAMBERT
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
}`,lS=`#define LAMBERT
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
}`,cS=`#define MATCAP
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
}`,uS=`#define MATCAP
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
}`,dS=`#define NORMAL
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
}`,hS=`#define NORMAL
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
}`,fS=`#define PHONG
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
}`,pS=`#define PHONG
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
}`,mS=`#define STANDARD
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
}`,gS=`#define STANDARD
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
}`,_S=`#define TOON
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
}`,vS=`#define TOON
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
}`,yS=`uniform float size;
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
}`,xS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,MS=`uniform float rotation;
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
}`,ES=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Xy,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:jy,alphatest_fragment:Ky,alphatest_pars_fragment:Jy,aomap_fragment:Qy,aomap_pars_fragment:$y,batching_pars_vertex:t2,batching_vertex:e2,begin_vertex:n2,beginnormal_vertex:i2,bsdfs:r2,iridescence_fragment:s2,bumpmap_pars_fragment:a2,clipping_planes_fragment:o2,clipping_planes_pars_fragment:l2,clipping_planes_pars_vertex:c2,clipping_planes_vertex:u2,color_fragment:d2,color_pars_fragment:h2,color_pars_vertex:f2,color_vertex:p2,common:m2,cube_uv_reflection_fragment:g2,defaultnormal_vertex:_2,displacementmap_pars_vertex:v2,displacementmap_vertex:y2,emissivemap_fragment:x2,emissivemap_pars_fragment:S2,colorspace_fragment:b2,colorspace_pars_fragment:M2,envmap_fragment:E2,envmap_common_pars_fragment:A2,envmap_pars_fragment:w2,envmap_pars_vertex:T2,envmap_physical_pars_fragment:B2,envmap_vertex:I2,fog_vertex:R2,fog_pars_vertex:C2,fog_fragment:D2,fog_pars_fragment:L2,gradientmap_pars_fragment:P2,lightmap_pars_fragment:N2,lights_lambert_fragment:F2,lights_lambert_pars_fragment:U2,lights_pars_begin:O2,lights_toon_fragment:V2,lights_toon_pars_fragment:z2,lights_phong_fragment:H2,lights_phong_pars_fragment:k2,lights_physical_fragment:G2,lights_physical_pars_fragment:W2,lights_fragment_begin:Z2,lights_fragment_maps:X2,lights_fragment_end:Y2,logdepthbuf_fragment:q2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:K2,logdepthbuf_vertex:J2,map_fragment:Q2,map_pars_fragment:$2,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:rx,morphcolor_vertex:sx,morphnormal_vertex:ax,morphtarget_pars_vertex:ox,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:hx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:vx,opaque_fragment:yx,packing:xx,premultiplied_alpha_fragment:Sx,project_vertex:bx,dithering_fragment:Mx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Dx,skinning_pars_vertex:Lx,skinning_vertex:Px,skinnormal_vertex:Nx,specularmap_fragment:Fx,specularmap_pars_fragment:Ux,tonemapping_fragment:Ox,tonemapping_pars_fragment:Bx,transmission_fragment:Vx,transmission_pars_fragment:zx,uv_pars_fragment:Hx,uv_pars_vertex:kx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:Zx,background_frag:Xx,backgroundCube_vert:Yx,backgroundCube_frag:qx,cube_vert:jx,cube_frag:Kx,depth_vert:Jx,depth_frag:Qx,distance_vert:$x,distance_frag:tS,equirect_vert:eS,equirect_frag:nS,linedashed_vert:iS,linedashed_frag:rS,meshbasic_vert:sS,meshbasic_frag:aS,meshlambert_vert:oS,meshlambert_frag:lS,meshmatcap_vert:cS,meshmatcap_frag:uS,meshnormal_vert:dS,meshnormal_frag:hS,meshphong_vert:fS,meshphong_frag:pS,meshphysical_vert:mS,meshphysical_frag:gS,meshtoon_vert:_S,meshtoon_frag:vS,points_vert:yS,points_frag:xS,shadow_vert:SS,shadow_frag:bS,sprite_vert:MS,sprite_frag:ES},vt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ci={basic:{uniforms:Dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Dn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Dn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Dn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Le(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Dn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Dn([vt.points,vt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Dn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Dn([vt.common,vt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Dn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Dn([vt.sprite,vt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Dn([vt.common,vt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Dn([vt.lights,vt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ci.physical={uniforms:Dn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const xo={r:0,b:0,g:0},Zr=new hr,AS=new cn;function wS(n,t,e,i,r,s){const a=new Le(0);let o=r===!0?0:1,l,c,d=null,p=0,h=null;function _(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const u=S.backgroundBlurriness>0;w=t.get(w,u)}return w}function v(S){let w=!1;const u=_(S);u===null?m(a,o):u&&u.isColor&&(m(u,1),w=!0);const f=n.xr.getEnvironmentBlendMode();f==="additive"?e.buffers.color.setClear(0,0,0,1,s):f==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,w){const u=_(w);u&&(u.isCubeTexture||u.mapping===Tl)?(c===void 0&&(c=new Jn(new ka(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:qs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(f,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Zr.copy(w.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Zr)),c.material.toneMapped=Te.getTransfer(u.colorSpace)!==Ve,(d!==u||p!==u.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=u,p=u.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new Jn(new Ga(2,2),new Gi({name:"BackgroundMaterial",uniforms:qs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Te.getTransfer(u.colorSpace)!==Ve,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(d!==u||p!==u.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=u,p=u.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(xo,sp(n)),e.buffers.color.setClear(xo.r,xo.g,xo.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:v,addToRenderList:M,dispose:g}}function TS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,U,k,P,V){let B=!1;const G=p(C,P,k,U);s!==G&&(s=G,c(s.object)),B=_(C,P,k,V),B&&v(C,P,k,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,u(C,U,k,P),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function p(C,U,k,P){const V=P.wireframe===!0;let B=i[U.id];B===void 0&&(B={},i[U.id]=B);const G=C.isInstancedMesh===!0?C.id:0;let tt=B[G];tt===void 0&&(tt={},B[G]=tt);let it=tt[k.id];it===void 0&&(it={},tt[k.id]=it);let _t=it[V];return _t===void 0&&(_t=h(l()),it[V]=_t),_t}function h(C){const U=[],k=[],P=[];for(let V=0;V<e;V++)U[V]=0,k[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:P,object:C,attributes:{},index:null}}function _(C,U,k,P){const V=s.attributes,B=U.attributes;let G=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){const yt=V[it];let pt=B[it];if(pt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),yt===void 0||yt.attribute!==pt||pt&&yt.data!==pt.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function v(C,U,k,P){const V={},B=U.attributes;let G=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){let yt=B[it];yt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const pt={};pt.attribute=yt,yt&&yt.data&&(pt.data=yt.data),V[it]=pt,G++}s.attributes=V,s.attributesNum=G,s.index=P}function M(){const C=s.newAttributes;for(let U=0,k=C.length;U<k;U++)C[U]=0}function m(C){g(C,0)}function g(C,U){const k=s.newAttributes,P=s.enabledAttributes,V=s.attributeDivisors;k[C]=1,P[C]===0&&(n.enableVertexAttribArray(C),P[C]=1),V[C]!==U&&(n.vertexAttribDivisor(C,U),V[C]=U)}function S(){const C=s.newAttributes,U=s.enabledAttributes;for(let k=0,P=U.length;k<P;k++)U[k]!==C[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function w(C,U,k,P,V,B,G){G===!0?n.vertexAttribIPointer(C,U,k,V,B):n.vertexAttribPointer(C,U,k,P,V,B)}function u(C,U,k,P){M();const V=P.attributes,B=k.getAttributes(),G=U.defaultAttributeValues;for(const tt in B){const it=B[tt];if(it.location>=0){let _t=V[tt];if(_t===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const yt=_t.normalized,pt=_t.itemSize,lt=t.get(_t);if(lt===void 0)continue;const Et=lt.buffer,re=lt.type,K=lt.bytesPerElement,rt=re===n.INT||re===n.UNSIGNED_INT||_t.gpuType===qu;if(_t.isInterleavedBufferAttribute){const st=_t.data,Nt=st.stride,Rt=_t.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<it.locationSize;Ft++)g(it.location+Ft,st.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<it.locationSize;Ft++)m(it.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Ft=0;Ft<it.locationSize;Ft++)w(it.location+Ft,pt/it.locationSize,re,yt,Nt*K,(Rt+pt/it.locationSize*Ft)*K,rt)}else{if(_t.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)g(it.location+st,_t.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let st=0;st<it.locationSize;st++)m(it.location+st);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let st=0;st<it.locationSize;st++)w(it.location+st,pt/it.locationSize,re,yt,pt*K,pt/it.locationSize*st*K,rt)}}else if(G!==void 0){const yt=G[tt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(it.location,yt);break;case 3:n.vertexAttrib3fv(it.location,yt);break;case 4:n.vertexAttrib4fv(it.location,yt);break;default:n.vertexAttrib1fv(it.location,yt)}}}}S()}function f(){E();for(const C in i){const U=i[C];for(const k in U){const P=U[k];for(const V in P){const B=P[V];for(const G in B)d(B[G].object),delete B[G];delete P[V]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const k in U){const P=U[k];for(const V in P){const B=P[V];for(const G in B)d(B[G].object),delete B[G];delete P[V]}}delete i[C.id]}function R(C){for(const U in i){const k=i[U];for(const P in k){const V=k[P];if(V[C.id]===void 0)continue;const B=V[C.id];for(const G in B)d(B[G].object),delete B[G];delete V[C.id]}}}function y(C){for(const U in i){const k=i[U],P=C.isInstancedMesh===!0?C.id:0,V=k[P];if(V!==void 0){for(const B in V){const G=V[B];for(const tt in G)d(G[tt].object),delete G[tt];delete V[B]}delete k[P],Object.keys(k).length===0&&delete i[U]}}}function E(){H(),a=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:H,dispose:f,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function IS(n,t,e){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),e.update(d,i,p))}function o(c,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let _=0;for(let v=0;v<p;v++)_+=d[v];e.update(_,i,1)}function l(c,d,p,h){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],d[v],h[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M]*h[M];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function RS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==yi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==li&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fi&&!y)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:u,maxSamples:f,samples:T}}function CS(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new jr,o=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const _=p.length!==0||h||i!==0||r;return r=h,i=p.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){e=d(p,h,0)},this.setState=function(p,h,_){const v=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,g=n.get(p);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const S=s?0:i,w=S*4;let u=g.clippingState||null;l.value=u,u=d(v,h,w,_);for(let f=0;f!==w;++f)u[f]=e[f];g.clippingState=u,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,h,_,v){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const g=_+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,u=_;w!==M;++w,u+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(m,u),m[u+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Lr=4,yh=[.125,.215,.35,.446,.526,.582],Jr=20,DS=256,da=new rd,xh=new Le;let vc=null,yc=0,xc=0,Sc=!1;const LS=new X;class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=LS}=s;vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,yc,xc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:ur,format:yi,colorSpace:Ys,depthBuffer:!1},r=bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PS(s)),this._blurMaterial=FS(s,t,e),this._ggxMaterial=NS(s,t,e)}return r}_compileMaterial(t){const e=new Jn(new fr,t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,i,r,s){const l=new _i(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,_=p.toneMapping;p.getClearColor(xh),p.toneMapping=Vi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new ka,new Fs({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let g=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(xh),g=!0);for(let w=0;w<6;w++){const u=w%3;u===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[w],s.y,s.z)):u===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[w]));const f=this._cubeSize;Ms(r,u*f,w>2?f:0,f,f),p.setRenderTarget(r),g&&p.render(M,l),p.render(t,l)}p.toneMapping=_,p.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===is||t.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=0+c*1.25,_=p*h,{_lodMax:v}=this,M=this._sizeLods[i],m=3*M*(i>v-Lr?i-v+Lr:0),g=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,Ms(s,m,g,3*M,2*M),r.setRenderTarget(s),r.render(o,da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ms(t,m,g,3*M,2*M),r.setRenderTarget(t),r.render(o,da)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const h=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Jr-1),M=s/v,m=isFinite(s)?1+Math.floor(d*M):Jr;m>Jr&&ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const g=[];let S=0;for(let R=0;R<Jr;++R){const y=R/M,E=Math.exp(-y*y/2);g.push(E),R===0?S+=E:R<m&&(S+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-i;const u=this._sizeLods[r],f=3*u*(r>w-Lr?r-w+Lr:0),T=4*(this._cubeSize-u);Ms(e,f,T,3*u,2*u),l.setRenderTarget(e),l.render(p,da)}}function PS(n){const t=[],e=[],i=[];let r=n;const s=n-Lr+1+yh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=yh[a-n+Lr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,v=6,M=3,m=2,g=1,S=new Float32Array(M*v*_),w=new Float32Array(m*v*_),u=new Float32Array(g*v*_);for(let T=0;T<_;T++){const R=T%3*2/3-1,y=T>2?0:-1,E=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];S.set(E,M*v*T),w.set(h,m*v*T);const H=[T,T,T,T,T,T];u.set(H,g*v*T)}const f=new fr;f.setAttribute("position",new Hi(S,M)),f.setAttribute("uv",new Hi(w,m)),f.setAttribute("faceIndex",new Hi(u,g)),i.push(new Jn(f,null)),r>Lr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function bh(n,t,e){const i=new zi(n,t,e);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function NS(n,t,e){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function FS(n,t,e){const i=new Float32Array(Jr),r=new X(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Mh(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Eh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}class lp extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ip(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:or});s.uniforms.tEquirect.value=e;const a=new Jn(r,s),o=e.minFilter;return e.minFilter===Qr&&(e.minFilter=En),new ky(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function US(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,_=!1){return h==null?null:_?a(h):s(h)}function s(h){if(h&&h.isTexture){const _=h.mapping;if(_===Zl||_===Xl)if(t.has(h)){const v=t.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const M=new lp(v.height);return M.fromEquirectangularTexture(n,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const _=h.mapping,v=_===Zl||_===Xl,M=_===is||_===Zs;if(v||M){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Sh(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return v&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new Sh(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,_){return _===Zl?h.mapping=is:_===Xl&&(h.mapping=Zs),h}function l(h){let _=0;const v=6;for(let M=0;M<v;M++)h[M]!==void 0&&_++;return _===v}function c(h){const _=h.target;_.removeEventListener("dispose",c);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function d(h){const _=h.target;_.removeEventListener("dispose",d);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function OS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&jo("WebGLRenderer: "+i+" extension not supported."),r}}}function BS(n,t,e,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const _=s.get(h);_&&(t.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(p){const h=p.attributes;for(const _ in h)t.update(h[_],n.ARRAY_BUFFER)}function c(p){const h=[],_=p.index,v=p.attributes.position;let M=0;if(v===void 0)return;if(_!==null){const S=_.array;M=_.version;for(let w=0,u=S.length;w<u;w+=3){const f=S[w+0],T=S[w+1],R=S[w+2];h.push(f,T,T,R,R,f)}}else{const S=v.array;M=v.version;for(let w=0,u=S.length/3-1;w<u;w+=3){const f=w+0,T=w+1,R=w+2;h.push(f,T,T,R,R,f)}}const m=new(v.count>=65535?ep:tp)(h,1);m.version=M;const g=s.get(p);g&&t.remove(g),s.set(p,m)}function d(p){const h=s.get(p);if(h){const _=p.index;_!==null&&h.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function VS(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,_){n.drawElements(i,_,s,h*a),e.update(_,i,1)}function c(h,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,h*a,v),e.update(_,i,v))}function d(h,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,h,0,v);let m=0;for(let g=0;g<v;g++)m+=_[g];e.update(m,i,1)}function p(h,_,v,M){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,_[g],M[g]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,h,0,M,0,v);let g=0;for(let S=0;S<v;S++)g+=_[S]*M[S];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function zS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Re("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function HS(n,t,e){const i=new WeakMap,r=new sn;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),M===!0&&(w=3);let u=o.attributes.position.count*w,f=1;u>t.maxTextureSize&&(f=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const T=new Float32Array(u*f*4*p),R=new Jf(T,u,f,p);R.type=Fi,R.needsUpdate=!0;const y=w*4;for(let H=0;H<p;H++){const C=m[H],U=g[H],k=S[H],P=u*f*4*H;for(let V=0;V<C.count;V++){const B=V*y;_===!0&&(r.fromBufferAttribute(C,V),T[P+B+0]=r.x,T[P+B+1]=r.y,T[P+B+2]=r.z,T[P+B+3]=0),v===!0&&(r.fromBufferAttribute(U,V),T[P+B+4]=r.x,T[P+B+5]=r.y,T[P+B+6]=r.z,T[P+B+7]=0),M===!0&&(r.fromBufferAttribute(k,V),T[P+B+8]=r.x,T[P+B+9]=r.y,T[P+B+10]=r.z,T[P+B+11]=k.itemSize===4?r.w:1)}}h={count:p,texture:R,size:new We(u,f)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let M=0;M<c.length;M++)_+=c[M];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function kS(n,t,e,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,p=c.geometry,h=t.get(c,p);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const GS={[Ff]:"LINEAR_TONE_MAPPING",[Uf]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[Bf]:"ACES_FILMIC_TONE_MAPPING",[zf]:"AGX_TONE_MAPPING",[Hf]:"NEUTRAL_TONE_MAPPING",[Vf]:"CUSTOM_TONE_MAPPING"};function WS(n,t,e,i,r){const s=new zi(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new zi(t,e,{type:ur,depthBuffer:!1,stencilBuffer:!1}),o=new fr;o.setAttribute("position",new cr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new cr([0,2,0,0,2,0],2));const l=new Vy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Jn(o,l),d=new rd(-1,1,1,-1,0,1);let p=null,h=null,_=!1,v,M=null,m=[],g=!1;this.setSize=function(S,w){s.setSize(S,w),a.setSize(S,w);for(let u=0;u<m.length;u++){const f=m[u];f.setSize&&f.setSize(S,w)}},this.setEffects=function(S){m=S,g=m.length>0&&m[0].isRenderPass===!0;const w=s.width,u=s.height;for(let f=0;f<m.length;f++){const T=m[f];T.setSize&&T.setSize(w,u)}},this.begin=function(S,w){if(_||S.toneMapping===Vi&&m.length===0)return!1;if(M=w,w!==null){const u=w.width,f=w.height;(s.width!==u||s.height!==f)&&this.setSize(u,f)}return g===!1&&S.setRenderTarget(s),v=S.toneMapping,S.toneMapping=Vi,!0},this.hasRenderPass=function(){return g},this.end=function(S,w){S.toneMapping=v,_=!0;let u=s,f=a;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(S,f,u,w),R.needsSwap!==!1)){const y=u;u=f,f=y}}if(p!==S.outputColorSpace||h!==S.toneMapping){p=S.outputColorSpace,h=S.toneMapping,l.defines={},Te.getTransfer(p)===Ve&&(l.defines.SRGB_TRANSFER="");const T=GS[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,S.setRenderTarget(M),S.render(c,d),M=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const cp=new Fn,Ru=new La(1,1),up=new Jf,dp=new my,hp=new ip,Ah=[],wh=[],Th=new Float32Array(16),Ih=new Float32Array(9),Rh=new Float32Array(4);function na(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function fn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Cl(n,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ZS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function XS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2fv(this.addr,t),pn(e,t)}}function YS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;n.uniform3fv(this.addr,t),pn(e,t)}}function qS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4fv(this.addr,t),pn(e,t)}}function jS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),pn(e,i)}}function KS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),pn(e,i)}}function JS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,i))return;Th.set(i),n.uniformMatrix4fv(this.addr,!1,Th),pn(e,i)}}function QS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2iv(this.addr,t),pn(e,t)}}function tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;n.uniform3iv(this.addr,t),pn(e,t)}}function eb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4iv(this.addr,t),pn(e,t)}}function nb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ib(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;n.uniform2uiv(this.addr,t),pn(e,t)}}function rb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;n.uniform3uiv(this.addr,t),pn(e,t)}}function sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;n.uniform4uiv(this.addr,t),pn(e,t)}}function ab(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ru.compareFunction=e.isReversedDepthBuffer()?ed:td,s=Ru):s=cp,e.setTexture2D(t||s,r)}function ob(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||dp,r)}function lb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||hp,r)}function cb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||up,r)}function ub(n){switch(n){case 5126:return ZS;case 35664:return XS;case 35665:return YS;case 35666:return qS;case 35674:return jS;case 35675:return KS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return $S;case 35668:case 35672:return tb;case 35669:case 35673:return eb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function db(n,t){n.uniform1fv(this.addr,t)}function hb(n,t){const e=na(t,this.size,2);n.uniform2fv(this.addr,e)}function fb(n,t){const e=na(t,this.size,3);n.uniform3fv(this.addr,e)}function pb(n,t){const e=na(t,this.size,4);n.uniform4fv(this.addr,e)}function mb(n,t){const e=na(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gb(n,t){const e=na(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _b(n,t){const e=na(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vb(n,t){n.uniform1iv(this.addr,t)}function yb(n,t){n.uniform2iv(this.addr,t)}function xb(n,t){n.uniform3iv(this.addr,t)}function Sb(n,t){n.uniform4iv(this.addr,t)}function bb(n,t){n.uniform1uiv(this.addr,t)}function Mb(n,t){n.uniform2uiv(this.addr,t)}function Eb(n,t){n.uniform3uiv(this.addr,t)}function Ab(n,t){n.uniform4uiv(this.addr,t)}function wb(n,t,e){const i=this.cache,r=t.length,s=Cl(e,r);fn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ru:a=cp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Tb(n,t,e){const i=this.cache,r=t.length,s=Cl(e,r);fn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||dp,s[a])}function Ib(n,t,e){const i=this.cache,r=t.length,s=Cl(e,r);fn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||hp,s[a])}function Rb(n,t,e){const i=this.cache,r=t.length,s=Cl(e,r);fn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||up,s[a])}function Cb(n){switch(n){case 5126:return db;case 35664:return hb;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return bb;case 36294:return Mb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Rb}}class Db{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ub(e.type)}}class Lb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cb(e.type)}}class Pb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Ch(n,t){n.seq.push(t),n.map[t.id]=t}function Nb(n,t,e){const i=n.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),a=bc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ch(e,c===void 0?new Db(o,n,t):new Lb(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Pb(o),Ch(e,p)),e=p}}}class Lo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Nb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Dh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Fb=37297;let Ub=0;function Ob(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Lh=new le;function Bb(n){Te._getMatrix(Lh,Te.workingColorSpace,n);const t=`mat3( ${Lh.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case Xo:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ph(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Ob(n.getShaderSource(t),o)}else return s}function Vb(n,t){const e=Bb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const zb={[Ff]:"Linear",[Uf]:"Reinhard",[Of]:"Cineon",[Bf]:"ACESFilmic",[zf]:"AgX",[Hf]:"Neutral",[Vf]:"Custom"};function Hb(n,t){const e=zb[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new X;function kb(){Te.getLuminanceCoefficients(So);const n=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Wb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ga(n){return n!==""}function Nh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(Xb,qb)}const Yb=new Map;function qb(n,t){let e=he[t];if(e===void 0){const i=Yb.get(t);if(i!==void 0)e=he[i],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cu(e)}const jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(jb,Kb)}function Kb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Jb={[To]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function Qb(n){return Jb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $b={[is]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Tl]:"ENVMAP_TYPE_CUBE_UV"};function tM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$b[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const eM={[Zs]:"ENVMAP_MODE_REFRACTION"};function nM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":eM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iM={[Nf]:"ENVMAP_BLENDING_MULTIPLY",[Yv]:"ENVMAP_BLENDING_MIX",[qv]:"ENVMAP_BLENDING_ADD"};function rM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iM[n.combine]||"ENVMAP_BLENDING_NONE"}function sM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function aM(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qb(e),c=tM(e),d=nM(e),p=rM(e),h=sM(e),_=Gb(e),v=Wb(s),M=r.createProgram();let m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ga).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ga).join(`
`),g.length>0&&(g+=`
`)):(m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),g=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?he.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Hb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Vb("linearToOutputTexel",e.outputColorSpace),kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),a=Cu(a),a=Nh(a,e),a=Fh(a,e),o=Cu(o),o=Nh(o,e),o=Fh(o,e),a=Uh(a),o=Uh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=S+m+a,u=S+g+o,f=Dh(r,r.VERTEX_SHADER,w),T=Dh(r,r.FRAGMENT_SHADER,u);r.attachShader(M,f),r.attachShader(M,T),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(M)||"",k=r.getShaderInfoLog(f)||"",P=r.getShaderInfoLog(T)||"",V=U.trim(),B=k.trim(),G=P.trim();let tt=!0,it=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,f,T);else{const _t=Ph(r,f,"vertex"),yt=Ph(r,T,"fragment");Re("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+_t+`
`+yt)}else V!==""?ne("WebGLProgram: Program Info Log:",V):(B===""||G==="")&&(it=!1);it&&(C.diagnostics={runnable:tt,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:g}})}r.deleteShader(f),r.deleteShader(T),y=new Lo(r,M),E=Zb(r,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(M,Fb)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ub++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=f,this.fragmentShader=T,this}let oM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cM(t),e.set(t,i)),i}}class cM{constructor(t){this.id=oM++,this.code=t,this.usedTimes=0}}function uM(n,t,e,i,r,s){const a=new Qf,o=new lM,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,E,H,C,U){const k=C.fog,P=U.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=t.get(y.envMap||V,B),tt=G&&G.mapping===Tl?G.image.height:null,it=_[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&ne("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const _t=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,yt=_t!==void 0?_t.length:0;let pt=0;P.morphAttributes.position!==void 0&&(pt=1),P.morphAttributes.normal!==void 0&&(pt=2),P.morphAttributes.color!==void 0&&(pt=3);let lt,Et,re,K;if(it){const Ue=Ci[it];lt=Ue.vertexShader,Et=Ue.fragmentShader}else lt=y.vertexShader,Et=y.fragmentShader,o.update(y),re=o.getVertexShaderID(y),K=o.getFragmentShaderID(y);const rt=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,Rt=U.isBatchedMesh===!0,Ft=!!y.map,Ze=!!y.matcap,te=!!G,fe=!!y.aoMap,xe=!!y.lightMap,se=!!y.bumpMap,de=!!y.normalMap,D=!!y.displacementMap,oe=!!y.emissiveMap,Jt=!!y.metalnessMap,_e=!!y.roughnessMap,gt=y.anisotropy>0,I=y.clearcoat>0,x=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,Q=y.transmission>0,j=gt&&!!y.anisotropyMap,Mt=I&&!!y.clearcoatMap,ct=I&&!!y.clearcoatNormalMap,Ot=I&&!!y.clearcoatRoughnessMap,zt=F&&!!y.iridescenceMap,ot=F&&!!y.iridescenceThicknessMap,ht=Y&&!!y.sheenColorMap,Tt=Y&&!!y.sheenRoughnessMap,Ct=!!y.specularMap,bt=!!y.specularColorMap,pe=!!y.specularIntensityMap,O=Q&&!!y.transmissionMap,mt=Q&&!!y.thicknessMap,ft=!!y.gradientMap,wt=!!y.alphaMap,ut=y.alphaTest>0,J=!!y.alphaHash,It=!!y.extensions;let ee=Vi;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ee=n.toneMapping);const je={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:lt,fragmentShader:Et,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Rt,batchingColor:Rt&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ys,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:Ze,envMap:te,envMapMode:te&&G.mapping,envMapCubeUVHeight:tt,aoMap:fe,lightMap:xe,bumpMap:se,normalMap:de,displacementMap:D,emissiveMap:oe,normalMapObjectSpace:de&&y.normalMapType===Qv,normalMapTangentSpace:de&&y.normalMapType===Jv,metalnessMap:Jt,roughnessMap:_e,anisotropy:gt,anisotropyMap:j,clearcoat:I,clearcoatMap:Mt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ot,dispersion:x,iridescence:F,iridescenceMap:zt,iridescenceThicknessMap:ot,sheen:Y,sheenColorMap:ht,sheenRoughnessMap:Tt,specularMap:Ct,specularColorMap:bt,specularIntensityMap:pe,transmission:Q,transmissionMap:O,thicknessMap:mt,gradientMap:ft,opaque:y.transparent===!1&&y.blending===Bs&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:ut,alphaHash:J,combine:y.combine,mapUv:Ft&&v(y.map.channel),aoMapUv:fe&&v(y.aoMap.channel),lightMapUv:xe&&v(y.lightMap.channel),bumpMapUv:se&&v(y.bumpMap.channel),normalMapUv:de&&v(y.normalMap.channel),displacementMapUv:D&&v(y.displacementMap.channel),emissiveMapUv:oe&&v(y.emissiveMap.channel),metalnessMapUv:Jt&&v(y.metalnessMap.channel),roughnessMapUv:_e&&v(y.roughnessMap.channel),anisotropyMapUv:j&&v(y.anisotropyMap.channel),clearcoatMapUv:Mt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(y.sheenRoughnessMap.channel),specularMapUv:Ct&&v(y.specularMap.channel),specularColorMapUv:bt&&v(y.specularColorMap.channel),specularIntensityMapUv:pe&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:mt&&v(y.thicknessMap.channel),alphaMapUv:wt&&v(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(de||gt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Ft||wt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:st,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&Te.getTransfer(y.map.colorSpace)===Ve,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&Te.getTransfer(y.emissiveMap.colorSpace)===Ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)E.push(H),E.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(g(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const E=_[y.type];let H;if(E){const C=Ci[E];H=Uy.clone(C.uniforms)}else H=y.uniforms;return H}function u(y,E){let H=d.get(E);return H!==void 0?++H.usedTimes:(H=new aM(n,E,y,r),c.push(H),d.set(E,H)),H}function f(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:u,releaseProgram:f,releaseShaderCache:T,programs:c,dispose:R}}function dM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function hM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Bh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,v,M,m,g){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:_,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:g},n[t]=S):(S.id=h.id,S.object=h,S.geometry=_,S.material=v,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=g),t++,S}function l(h,_,v,M,m,g){const S=o(h,_,v,M,m,g);v.transmission>0?i.push(S):v.transparent===!0?r.push(S):e.push(S)}function c(h,_,v,M,m,g){const S=o(h,_,v,M,m,g);v.transmission>0?i.unshift(S):v.transparent===!0?r.unshift(S):e.unshift(S)}function d(h,_){e.length>1&&e.sort(h||hM),i.length>1&&i.sort(_||Bh),r.length>1&&r.sort(_||Bh)}function p(){for(let h=t,_=n.length;h<_;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:d}}function fM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vh,n.set(i,[a])):r>=s.length?(a=new Vh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function pM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Le};break;case"SpotLight":e={position:new X,direction:new X,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":e={color:new Le,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function mM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let gM=0;function _M(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vM(n){const t=new pM,e=mM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new cn,a=new cn;function o(c){let d=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let _=0,v=0,M=0,m=0,g=0,S=0,w=0,u=0,f=0,T=0,R=0;c.sort(_M);for(let E=0,H=c.length;E<H;E++){const C=c[E],U=C.color,k=C.intensity,P=C.distance;let V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Xs?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*k,p+=U.g*k,h+=U.b*k;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],k);R++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,tt=e.get(C);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=C.shadow.matrix,S++}i.directional[_]=B,_++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=P,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[M]=B;const G=C.shadow;if(C.map&&(i.spotLightMap[f]=C.map,f++,G.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[M]=G.matrix,C.castShadow){const tt=e.get(C);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,i.spotShadow[M]=tt,i.spotShadowMap[M]=V,u++}M++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const G=C.shadow,tt=e.get(C);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,tt.shadowCameraNear=G.camera.near,tt.shadowCameraFar=G.camera.far,i.pointShadow[v]=tt,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=C.shadow.matrix,w++}i.point[v]=B,v++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(k),B.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==_||y.pointLength!==v||y.spotLength!==M||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==u||y.numSpotMaps!==f||y.numLightProbes!==R)&&(i.directional.length=_,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=u+f-T,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,y.directionalLength=_,y.pointLength=v,y.spotLength=M,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=u,y.numSpotMaps=f,y.numLightProbes=R,i.version=gM++)}function l(c,d){let p=0,h=0,_=0,v=0,M=0;const m=d.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const w=c[g];if(w.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),p++}else if(w.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),u.halfWidth.set(w.width*.5,0,0),u.halfHeight.set(0,w.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const u=i.point[h];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const u=i.hemi[M];u.direction.setFromMatrixPosition(w.matrixWorld),u.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function zh(n){const t=new vM(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new zh(n),t.set(r,[o])):s>=a.length?(o=new zh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
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
}`,bM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],MM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Hh=new cn,ha=new X,Mc=new X;function EM(n,t,e){let i=new np;const r=new We,s=new We,a=new sn,o=new zy,l=new Hy,c={},d=e.maxTextureSize,p={[Pr]:Hn,[Hn]:Pr,[Kn]:Kn},h=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:xM,fragmentShader:SM}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const v=new fr;v.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Jn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let g=this.type;this.render=function(T,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Iv&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=To);const E=n.getRenderTarget(),H=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(or),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=g!==this.type;k&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){const B=T[P],G=B.shadow;if(G===void 0){ne("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const tt=G.getFrameExtents();r.multiply(tt),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/tt.x),r.x=s.x*tt.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/tt.y),r.y=s.y*tt.y,G.mapSize.y=s.y));const it=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=it,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ma){if(B.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new zi(r.x,r.y,{format:Xs,type:ur,minFilter:En,magFilter:En,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new La(r.x,r.y,Fi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=dr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn}else B.isPointLight?(G.map=new lp(r.x),G.map.depthTexture=new Ny(r.x,ki)):(G.map=new zi(r.x,r.y),G.map.depthTexture=new La(r.x,r.y,ki)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=dr,this.type===To?(G.map.depthTexture.compareFunction=it?ed:td,G.map.depthTexture.minFilter=En,G.map.depthTexture.magFilter=En):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn);G.camera.updateProjectionMatrix()}const _t=G.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<_t;yt++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,yt),n.clear();else{yt===0&&(n.setRenderTarget(G.map),n.clear());const pt=G.getViewport(yt);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),U.viewport(a)}if(B.isPointLight){const pt=G.camera,lt=G.matrix,Et=B.distance||pt.far;Et!==pt.far&&(pt.far=Et,pt.updateProjectionMatrix()),ha.setFromMatrixPosition(B.matrixWorld),pt.position.copy(ha),Mc.copy(pt.position),Mc.add(bM[yt]),pt.up.copy(MM[yt]),pt.lookAt(Mc),pt.updateMatrixWorld(),lt.makeTranslation(-ha.x,-ha.y,-ha.z),Hh.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hh,pt.coordinateSystem,pt.reversedDepth)}else G.updateMatrices(B);i=G.getFrustum(),u(R,y,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===ma&&S(G,y),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(E,H,C)};function S(T,R){const y=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zi(r.x,r.y,{format:Xs,type:ur})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,y,h,M,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,y,_,M,null)}function w(T,R,y,E){let H=null;const C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)H=C;else if(H=y.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=H.uuid,k=R.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let V=P[k];V===void 0&&(V=H.clone(),P[k]=V,R.addEventListener("dispose",f)),H=V}if(H.visible=R.visible,H.wireframe=R.wireframe,E===ma?H.side=R.shadowSide!==null?R.shadowSide:R.side:H.side=R.shadowSide!==null?R.shadowSide:p[R.side],H.alphaMap=R.alphaMap,H.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,H.map=R.map,H.clipShadows=R.clipShadows,H.clippingPlanes=R.clippingPlanes,H.clipIntersection=R.clipIntersection,H.displacementMap=R.displacementMap,H.displacementScale=R.displacementScale,H.displacementBias=R.displacementBias,H.wireframeLinewidth=R.wireframeLinewidth,H.linewidth=R.linewidth,y.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const U=n.properties.get(H);U.light=y}return H}function u(T,R,y,E,H){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===ma)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const k=t.update(T),P=T.material;if(Array.isArray(P)){const V=k.groups;for(let B=0,G=V.length;B<G;B++){const tt=V[B],it=P[tt.materialIndex];if(it&&it.visible){const _t=w(T,it,E,H);T.onBeforeShadow(n,T,R,y,k,_t,tt),n.renderBufferDirect(y,null,k,_t,T,tt),T.onAfterShadow(n,T,R,y,k,_t,tt)}}}else if(P.visible){const V=w(T,P,E,H);T.onBeforeShadow(n,T,R,y,k,V,null),n.renderBufferDirect(y,null,k,V,T,null),T.onAfterShadow(n,T,R,y,k,V,null)}}const U=T.children;for(let k=0,P=U.length;k<P;k++)u(U[k],R,y,E,H)}function f(T){T.target.removeEventListener("dispose",f);for(const y in c){const E=c[y],H=T.target.uuid;H in E&&(E[H].dispose(),delete E[H])}}}function AM(n,t){function e(){let O=!1;const mt=new sn;let ft=null;const wt=new sn(0,0,0,0);return{setMask:function(ut){ft!==ut&&!O&&(n.colorMask(ut,ut,ut,ut),ft=ut)},setLocked:function(ut){O=ut},setClear:function(ut,J,It,ee,je){je===!0&&(ut*=ee,J*=ee,It*=ee),mt.set(ut,J,It,ee),wt.equals(mt)===!1&&(n.clearColor(ut,J,It,ee),wt.copy(mt))},reset:function(){O=!1,ft=null,wt.set(-1,0,0,0)}}}function i(){let O=!1,mt=!1,ft=null,wt=null,ut=null;return{setReversed:function(J){if(mt!==J){const It=t.get("EXT_clip_control");J?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),mt=J;const ee=ut;ut=null,this.setClear(ee)}},getReversed:function(){return mt},setTest:function(J){J?rt(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(J){ft!==J&&!O&&(n.depthMask(J),ft=J)},setFunc:function(J){if(mt&&(J=ly[J]),wt!==J){switch(J){case Hc:n.depthFunc(n.NEVER);break;case kc:n.depthFunc(n.ALWAYS);break;case Gc:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Wc:n.depthFunc(n.EQUAL);break;case Zc:n.depthFunc(n.GEQUAL);break;case Xc:n.depthFunc(n.GREATER);break;case Yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=J}},setLocked:function(J){O=J},setClear:function(J){ut!==J&&(ut=J,mt&&(J=1-J),n.clearDepth(J))},reset:function(){O=!1,ft=null,wt=null,ut=null,mt=!1}}}function r(){let O=!1,mt=null,ft=null,wt=null,ut=null,J=null,It=null,ee=null,je=null;return{setTest:function(Ue){O||(Ue?rt(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(Ue){mt!==Ue&&!O&&(n.stencilMask(Ue),mt=Ue)},setFunc:function(Ue,Yi,qi){(ft!==Ue||wt!==Yi||ut!==qi)&&(n.stencilFunc(Ue,Yi,qi),ft=Ue,wt=Yi,ut=qi)},setOp:function(Ue,Yi,qi){(J!==Ue||It!==Yi||ee!==qi)&&(n.stencilOp(Ue,Yi,qi),J=Ue,It=Yi,ee=qi)},setLocked:function(Ue){O=Ue},setClear:function(Ue){je!==Ue&&(n.clearStencil(Ue),je=Ue)},reset:function(){O=!1,mt=null,ft=null,wt=null,ut=null,J=null,It=null,ee=null,je=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},h=new WeakMap,_=[],v=null,M=!1,m=null,g=null,S=null,w=null,u=null,f=null,T=null,R=new Le(0,0,0),y=0,E=!1,H=null,C=null,U=null,k=null,P=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),B=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),B=G>=2);let it=null,_t={};const yt=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),lt=new sn().fromArray(yt),Et=new sn().fromArray(pt);function re(O,mt,ft,wt){const ut=new Uint8Array(4),J=n.createTexture();n.bindTexture(O,J),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<ft;It++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(mt+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return J}const K={};K[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Ws),se(!1),de(Yd),rt(n.CULL_FACE),fe(or);function rt(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function st(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Nt(O,mt){return p[O]!==mt?(n.bindFramebuffer(O,mt),p[O]=mt,O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=mt),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Rt(O,mt){let ft=_,wt=!1;if(O){ft=h.get(mt),ft===void 0&&(ft=[],h.set(mt,ft));const ut=O.textures;if(ft.length!==ut.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let J=0,It=ut.length;J<It;J++)ft[J]=n.COLOR_ATTACHMENT0+J;ft.length=ut.length,wt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,wt=!0);wt&&n.drawBuffers(ft)}function Ft(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const Ze={[Kr]:n.FUNC_ADD,[Cv]:n.FUNC_SUBTRACT,[Dv]:n.FUNC_REVERSE_SUBTRACT};Ze[Lv]=n.MIN,Ze[Pv]=n.MAX;const te={[Nv]:n.ZERO,[Fv]:n.ONE,[Uv]:n.SRC_COLOR,[Vc]:n.SRC_ALPHA,[kv]:n.SRC_ALPHA_SATURATE,[zv]:n.DST_COLOR,[Bv]:n.DST_ALPHA,[Ov]:n.ONE_MINUS_SRC_COLOR,[zc]:n.ONE_MINUS_SRC_ALPHA,[Hv]:n.ONE_MINUS_DST_COLOR,[Vv]:n.ONE_MINUS_DST_ALPHA,[Gv]:n.CONSTANT_COLOR,[Wv]:n.ONE_MINUS_CONSTANT_COLOR,[Zv]:n.CONSTANT_ALPHA,[Xv]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(O,mt,ft,wt,ut,J,It,ee,je,Ue){if(O===or){M===!0&&(st(n.BLEND),M=!1);return}if(M===!1&&(rt(n.BLEND),M=!0),O!==Rv){if(O!==m||Ue!==E){if((g!==Kr||u!==Kr)&&(n.blendEquation(n.FUNC_ADD),g=Kr,u=Kr),Ue)switch(O){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qd:n.blendFunc(n.ONE,n.ONE);break;case jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Re("WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jd:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",O);break}S=null,w=null,f=null,T=null,R.set(0,0,0),y=0,m=O,E=Ue}return}ut=ut||mt,J=J||ft,It=It||wt,(mt!==g||ut!==u)&&(n.blendEquationSeparate(Ze[mt],Ze[ut]),g=mt,u=ut),(ft!==S||wt!==w||J!==f||It!==T)&&(n.blendFuncSeparate(te[ft],te[wt],te[J],te[It]),S=ft,w=wt,f=J,T=It),(ee.equals(R)===!1||je!==y)&&(n.blendColor(ee.r,ee.g,ee.b,je),R.copy(ee),y=je),m=O,E=!1}function xe(O,mt){O.side===Kn?st(n.CULL_FACE):rt(n.CULL_FACE);let ft=O.side===Hn;mt&&(ft=!ft),se(ft),O.blending===Bs&&O.transparent===!1?fe(or):fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const wt=O.stencilWrite;o.setTest(wt),wt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),oe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(O){H!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),H=O)}function de(O){O!==wv?(rt(n.CULL_FACE),O!==C&&(O===Yd?n.cullFace(n.BACK):O===Tv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),C=O}function D(O){O!==U&&(B&&n.lineWidth(O),U=O)}function oe(O,mt,ft){O?(rt(n.POLYGON_OFFSET_FILL),(k!==mt||P!==ft)&&(k=mt,P=ft,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,ft))):st(n.POLYGON_OFFSET_FILL)}function Jt(O){O?rt(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function _e(O){O===void 0&&(O=n.TEXTURE0+V-1),it!==O&&(n.activeTexture(O),it=O)}function gt(O,mt,ft){ft===void 0&&(it===null?ft=n.TEXTURE0+V-1:ft=it);let wt=_t[ft];wt===void 0&&(wt={type:void 0,texture:void 0},_t[ft]=wt),(wt.type!==O||wt.texture!==mt)&&(it!==ft&&(n.activeTexture(ft),it=ft),n.bindTexture(O,mt||K[O]),wt.type=O,wt.texture=mt)}function I(){const O=_t[it];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function Y(){try{n.texSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function ct(){try{n.texStorage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function Ot(){try{n.texStorage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function zt(){try{n.texImage2D(...arguments)}catch(O){Re("WebGLState:",O)}}function ot(){try{n.texImage3D(...arguments)}catch(O){Re("WebGLState:",O)}}function ht(O){lt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function Tt(O){Et.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Et.copy(O))}function Ct(O,mt){let ft=c.get(mt);ft===void 0&&(ft=new WeakMap,c.set(mt,ft));let wt=ft.get(O);wt===void 0&&(wt=n.getUniformBlockIndex(mt,O.name),ft.set(O,wt))}function bt(O,mt){const wt=c.get(mt).get(O);l.get(mt)!==wt&&(n.uniformBlockBinding(mt,wt,O.__bindingPointIndex),l.set(mt,wt))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},it=null,_t={},p={},h=new WeakMap,_=[],v=null,M=!1,m=null,g=null,S=null,w=null,u=null,f=null,T=null,R=new Le(0,0,0),y=0,E=!1,H=null,C=null,U=null,k=null,P=null,lt.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:st,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Ft,setBlending:fe,setMaterial:xe,setFlipSided:se,setCullFace:de,setLineWidth:D,setPolygonOffset:oe,setScissorTest:Jt,activeTexture:_e,bindTexture:gt,unbindTexture:I,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:zt,texImage3D:ot,updateUBOMapping:Ct,uniformBlockBinding:bt,texStorage2D:ct,texStorage3D:Ot,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Mt,scissor:ht,viewport:Tt,reset:pe}}function wM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,x){return _?new OffscreenCanvas(I,x):qo("canvas")}function M(I,x,F){let Y=1;const Q=gt(I);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(Y*Q.width),Mt=Math.floor(Y*Q.height);p===void 0&&(p=v(j,Mt));const ct=x?v(j,Mt):p;return ct.width=j,ct.height=Mt,ct.getContext("2d").drawImage(I,0,0,j,Mt),ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Mt+")."),ct}else return"data"in I&&ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){n.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,x,F,Y,Q=!1){if(I!==null){if(n[I]!==void 0)return n[I];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=x;if(x===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),x===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){const Mt=Q?Xo:Te.getTransfer(Y);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=Mt===Ve?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function u(I,x){let F;return I?x===null||x===ki||x===Da?F=n.DEPTH24_STENCIL8:x===Fi?F=n.DEPTH32F_STENCIL8:x===Ca&&(F=n.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===Da?F=n.DEPTH_COMPONENT24:x===Fi?F=n.DEPTH_COMPONENT32F:x===Ca&&(F=n.DEPTH_COMPONENT16),F}function f(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==xn&&I.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function T(I){const x=I.target;x.removeEventListener("dispose",T),y(x),x.isVideoTexture&&d.delete(x)}function R(I){const x=I.target;x.removeEventListener("dispose",R),H(x)}function y(I){const x=i.get(I);if(x.__webglInit===void 0)return;const F=I.source,Y=h.get(F);if(Y){const Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(I),Object.keys(Y).length===0&&h.delete(F)}i.remove(I)}function E(I){const x=i.get(I);n.deleteTexture(x.__webglTexture);const F=I.source,Y=h.get(F);delete Y[x.__cacheKey],a.memory.textures--}function H(I){const x=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=I.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const j=i.get(F[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(I)}let C=0;function U(){C=0}function k(){const I=C;return I>=r.maxTextures&&ne("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),C+=1,I}function P(I){const x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function V(I,x){const F=i.get(I);if(I.isVideoTexture&&Jt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&F.__version!==I.version){const Y=I.image;if(Y===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,I,x);return}}else I.isExternalTexture&&(F.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function B(I,x){const F=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){K(F,I,x);return}else I.isExternalTexture&&(F.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function G(I,x){const F=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){K(F,I,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function tt(I,x){const F=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&F.__version!==I.version){rt(F,I,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const it={[qc]:n.REPEAT,[ar]:n.CLAMP_TO_EDGE,[jc]:n.MIRRORED_REPEAT},_t={[xn]:n.NEAREST,[jv]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},yt={[$v]:n.NEVER,[ry]:n.ALWAYS,[ty]:n.LESS,[td]:n.LEQUAL,[ey]:n.EQUAL,[ed]:n.GEQUAL,[ny]:n.GREATER,[iy]:n.NOTEQUAL};function pt(I,x){if(x.type===Fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===Yl||x.magFilter===Qa||x.magFilter===Qr||x.minFilter===En||x.minFilter===Yl||x.minFilter===Qa||x.minFilter===Qr)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,it[x.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,it[x.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,it[x.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,_t[x.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==Qa&&x.minFilter!==Qr||x.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function lt(I,x){let F=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",T));const Y=x.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const j=P(x);if(j!==I.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[j].usedTimes++;const Mt=Q[I.__cacheKey];Mt!==void 0&&(Q[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(x)),I.__cacheKey=j,I.__webglTexture=Q[j].texture}return F}function Et(I,x,F){return Math.floor(Math.floor(I/F)/x)}function re(I,x,F,Y){const j=I.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{j.sort((ot,ht)=>ot.start-ht.start);let Mt=0;for(let ot=1;ot<j.length;ot++){const ht=j[Mt],Tt=j[ot],Ct=ht.start+ht.count,bt=Et(Tt.start,x.width,4),pe=Et(ht.start,x.width,4);Tt.start<=Ct+1&&bt===pe&&Et(Tt.start+Tt.count-1,x.width,4)===bt?ht.count=Math.max(ht.count,Tt.start+Tt.count-ht.start):(++Mt,j[Mt]=Tt)}j.length=Mt+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),Ot=n.getParameter(n.UNPACK_SKIP_PIXELS),zt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ot=0,ht=j.length;ot<ht;ot++){const Tt=j[ot],Ct=Math.floor(Tt.start/4),bt=Math.ceil(Tt.count/4),pe=Ct%x.width,O=Math.floor(Ct/x.width),mt=bt,ft=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,pe,O,mt,ft,F,Y,x.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,zt)}}function K(I,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=lt(I,x),j=x.source;e.bindTexture(Y,I.__webglTexture,n.TEXTURE0+F);const Mt=i.get(j);if(j.version!==Mt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);const ct=Te.getPrimaries(Te.workingColorSpace),Ot=x.colorSpace===Dr?null:Te.getPrimaries(x.colorSpace),zt=x.colorSpace===Dr||ct===Ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ot=M(x.image,!1,r.maxTextureSize);ot=_e(x,ot);const ht=s.convert(x.format,x.colorSpace),Tt=s.convert(x.type);let Ct=w(x.internalFormat,ht,Tt,x.colorSpace,x.isVideoTexture);pt(Y,x);let bt;const pe=x.mipmaps,O=x.isVideoTexture!==!0,mt=Mt.__version===void 0||Q===!0,ft=j.dataReady,wt=f(x,ot);if(x.isDepthTexture)Ct=u(x.format===$r,x.type),mt&&(O?e.texStorage2D(n.TEXTURE_2D,1,Ct,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Ct,ot.width,ot.height,0,ht,Tt,null));else if(x.isDataTexture)if(pe.length>0){O&&mt&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,pe[0].width,pe[0].height);for(let ut=0,J=pe.length;ut<J;ut++)bt=pe[ut],O?ft&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ht,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,bt.width,bt.height,0,ht,Tt,bt.data);x.generateMipmaps=!1}else O?(mt&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,ot.width,ot.height),ft&&re(x,ot,ht,Tt)):e.texImage2D(n.TEXTURE_2D,0,Ct,ot.width,ot.height,0,ht,Tt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ct,pe[0].width,pe[0].height,ot.depth);for(let ut=0,J=pe.length;ut<J;ut++)if(bt=pe[ut],x.format!==yi)if(ht!==null)if(O){if(ft)if(x.layerUpdates.size>0){const It=vh(bt.width,bt.height,x.format,x.type);for(const ee of x.layerUpdates){const je=bt.data.subarray(ee*It/bt.data.BYTES_PER_ELEMENT,(ee+1)*It/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,ee,bt.width,bt.height,1,ht,je)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ot.depth,ht,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,bt.width,bt.height,ot.depth,0,bt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ft&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ot.depth,ht,Tt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Ct,bt.width,bt.height,ot.depth,0,ht,Tt,bt.data)}else{O&&mt&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,pe[0].width,pe[0].height);for(let ut=0,J=pe.length;ut<J;ut++)bt=pe[ut],x.format!==yi?ht!==null?O?ft&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ht,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Ct,bt.width,bt.height,0,bt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ft&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt.width,bt.height,ht,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,ut,Ct,bt.width,bt.height,0,ht,Tt,bt.data)}else if(x.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ct,ot.width,ot.height,ot.depth),ft)if(x.layerUpdates.size>0){const ut=vh(ot.width,ot.height,x.format,x.type);for(const J of x.layerUpdates){const It=ot.data.subarray(J*ut/ot.data.BYTES_PER_ELEMENT,(J+1)*ut/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ot.width,ot.height,1,ht,Tt,It)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ht,Tt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,ot.width,ot.height,ot.depth,0,ht,Tt,ot.data);else if(x.isData3DTexture)O?(mt&&e.texStorage3D(n.TEXTURE_3D,wt,Ct,ot.width,ot.height,ot.depth),ft&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ht,Tt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,ot.width,ot.height,ot.depth,0,ht,Tt,ot.data);else if(x.isFramebufferTexture){if(mt)if(O)e.texStorage2D(n.TEXTURE_2D,wt,Ct,ot.width,ot.height);else{let ut=ot.width,J=ot.height;for(let It=0;It<wt;It++)e.texImage2D(n.TEXTURE_2D,It,Ct,ut,J,0,ht,Tt,null),ut>>=1,J>>=1}}else if(pe.length>0){if(O&&mt){const ut=gt(pe[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ct,ut.width,ut.height)}for(let ut=0,J=pe.length;ut<J;ut++)bt=pe[ut],O?ft&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,ht,Tt,bt):e.texImage2D(n.TEXTURE_2D,ut,Ct,ht,Tt,bt);x.generateMipmaps=!1}else if(O){if(mt){const ut=gt(ot);e.texStorage2D(n.TEXTURE_2D,wt,Ct,ut.width,ut.height)}ft&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Tt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Ct,ht,Tt,ot);m(x)&&g(Y),Mt.__version=j.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function rt(I,x,F){if(x.image.length!==6)return;const Y=lt(I,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+F);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const Mt=Te.getPrimaries(Te.workingColorSpace),ct=x.colorSpace===Dr?null:Te.getPrimaries(x.colorSpace),Ot=x.colorSpace===Dr||Mt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const zt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let J=0;J<6;J++)!zt&&!ot?ht[J]=M(x.image[J],!0,r.maxCubemapSize):ht[J]=ot?x.image[J].image:x.image[J],ht[J]=_e(x,ht[J]);const Tt=ht[0],Ct=s.convert(x.format,x.colorSpace),bt=s.convert(x.type),pe=w(x.internalFormat,Ct,bt,x.colorSpace),O=x.isVideoTexture!==!0,mt=j.__version===void 0||Y===!0,ft=Q.dataReady;let wt=f(x,Tt);pt(n.TEXTURE_CUBE_MAP,x);let ut;if(zt){O&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,pe,Tt.width,Tt.height);for(let J=0;J<6;J++){ut=ht[J].mipmaps;for(let It=0;It<ut.length;It++){const ee=ut[It];x.format!==yi?Ct!==null?O?ft&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It,0,0,ee.width,ee.height,Ct,ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It,pe,ee.width,ee.height,0,ee.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It,0,0,ee.width,ee.height,Ct,bt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It,pe,ee.width,ee.height,0,Ct,bt,ee.data)}}}else{if(ut=x.mipmaps,O&&mt){ut.length>0&&wt++;const J=gt(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,pe,J.width,J.height)}for(let J=0;J<6;J++)if(ot){O?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ht[J].width,ht[J].height,Ct,bt,ht[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,ht[J].width,ht[J].height,0,Ct,bt,ht[J].data);for(let It=0;It<ut.length;It++){const je=ut[It].image[J].image;O?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It+1,0,0,je.width,je.height,Ct,bt,je.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It+1,pe,je.width,je.height,0,Ct,bt,je.data)}}else{O?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,bt,ht[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,Ct,bt,ht[J]);for(let It=0;It<ut.length;It++){const ee=ut[It];O?ft&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It+1,0,0,Ct,bt,ee.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,It+1,pe,Ct,bt,ee.image[J])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function st(I,x,F,Y,Q,j){const Mt=s.convert(F.format,F.colorSpace),ct=s.convert(F.type),Ot=w(F.internalFormat,Mt,ct,F.colorSpace),zt=i.get(x),ot=i.get(F);if(ot.__renderTarget=x,!zt.__hasExternalTextures){const ht=Math.max(1,x.width>>j),Tt=Math.max(1,x.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,Ot,ht,Tt,x.depth,0,Mt,ct,null):e.texImage2D(Q,j,Ot,ht,Tt,0,Mt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ot.__webglTexture,0,D(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ot.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(I,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,I),x.depthBuffer){const Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=u(x.stencilBuffer,Q),Mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),j,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,I)}else{const Y=x.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],Mt=s.convert(j.format,j.colorSpace),ct=s.convert(j.type),Ot=w(j.internalFormat,Mt,ct,j.colorSpace);oe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),Ot,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),Ot,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ot,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(I,x,F){const Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(n.TEXTURE_CUBE_MAP,x.depthTexture);const zt=s.convert(x.depthTexture.format),ot=s.convert(x.depthTexture.type);let ht;x.depthTexture.format===dr?ht=n.DEPTH_COMPONENT24:x.depthTexture.format===$r&&(ht=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ht,x.width,x.height,0,zt,ot,null)}}else V(x.depthTexture,0);const j=Q.__webglTexture,Mt=D(x),ct=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ot=x.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===dr)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ct,j,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ct,j,0);else if(x.depthTexture.format===$r)oe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ot,ct,j,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Ot,ct,j,0);else throw new Error("Unknown depthTexture format")}function Ft(I){const x=i.get(I),F=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(I.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)Rt(x.__webglFramebuffer[Y],I,Y);else{const Y=I.texture.mipmaps;Y&&Y.length>0?Rt(x.__webglFramebuffer[0],I,0):Rt(x.__webglFramebuffer,I,0)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Nt(x.__webglDepthbuffer[Y],I,!1);else{const Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Nt(x.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(I,x,F){const Y=i.get(I);x!==void 0&&st(Y.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ft(I)}function te(I){const x=I.texture,F=i.get(I),Y=i.get(x);I.addEventListener("dispose",R);const Q=I.textures,j=I.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let Ot=0;Ot<x.mipmaps.length;Ot++)F.__webglFramebuffer[ct][Ot]=n.createFramebuffer()}else F.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)F.__webglFramebuffer[ct]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ct=0,Ot=Q.length;ct<Ot;ct++){const zt=i.get(Q[ct]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&oe(I)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const Ot=Q[ct];F.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const zt=s.convert(Ot.format,Ot.colorSpace),ot=s.convert(Ot.type),ht=w(Ot.internalFormat,zt,ot,Ot.colorSpace,I.isXRRenderTarget===!0),Tt=D(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ht,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ot=0;Ot<x.mipmaps.length;Ot++)st(F.__webglFramebuffer[ct][Ot],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot);else st(F.__webglFramebuffer[ct],I,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,Ot=Q.length;ct<Ot;ct++){const zt=Q[ct],ot=i.get(zt);let ht=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,ot.__webglTexture),pt(ht,zt),st(F.__webglFramebuffer,I,zt,n.COLOR_ATTACHMENT0+ct,ht,0),m(zt)&&g(ht)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ct=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),pt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let Ot=0;Ot<x.mipmaps.length;Ot++)st(F.__webglFramebuffer[Ot],I,x,n.COLOR_ATTACHMENT0,ct,Ot);else st(F.__webglFramebuffer,I,x,n.COLOR_ATTACHMENT0,ct,0);m(x)&&g(ct),e.unbindTexture()}I.depthBuffer&&Ft(I)}function fe(I){const x=I.textures;for(let F=0,Y=x.length;F<Y;F++){const Q=x[F];if(m(Q)){const j=S(I),Mt=i.get(Q).__webglTexture;e.bindTexture(j,Mt),g(j),e.unbindTexture()}}}const xe=[],se=[];function de(I){if(I.samples>0){if(oe(I)===!1){const x=I.textures,F=I.width,Y=I.height;let Q=n.COLOR_BUFFER_BIT;const j=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(I),ct=x.length>1;if(ct)for(let zt=0;zt<x.length;zt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Ot=I.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let zt=0;zt<x.length;zt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[zt]);const ot=i.get(x[zt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,n.NEAREST),l===!0&&(xe.length=0,se.length=0,xe.push(n.COLOR_ATTACHMENT0+zt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xe.push(j),se.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let zt=0;zt<x.length;zt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[zt]);const ot=i.get(x[zt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const x=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function D(I){return Math.min(r.maxSamples,I.samples)}function oe(I){const x=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Jt(I){const x=a.render.frame;d.get(I)!==x&&(d.set(I,x),I.update())}function _e(I,x){const F=I.colorSpace,Y=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||F!==Ys&&F!==Dr&&(Te.getTransfer(F)===Ve?(Y!==yi||Q!==li)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",F)),x}function gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Ze,this.setupRenderTarget=te,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=st,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function TM(n,t){function e(i,r=Dr){let s;const a=Te.getTransfer(r);if(i===li)return n.UNSIGNED_BYTE;if(i===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===qu)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===ur)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===qf)return n.RGB;if(i===yi)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===jf)return n.RED;if(i===Ju)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===Qu)return n.RG_INTEGER;if(i===$u)return n.RGBA_INTEGER;if(i===Io||i===Ro||i===Co||i===Do)if(a===Ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===Jc||i===Qc||i===$c)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===eu||i===nu||i===iu||i===ru||i===su||i===au)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tu||i===eu)return a===Ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===iu)return s.COMPRESSED_R11_EAC;if(i===ru)return s.COMPRESSED_SIGNED_R11_EAC;if(i===su)return s.COMPRESSED_RG11_EAC;if(i===au)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ou||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===yu||i===xu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ou)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===du)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_u)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xu)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Su||i===bu||i===Mu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Su)return a===Ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Au||i===wu||i===Tu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`;class CM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new rp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Gi({vertexShader:IM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jn(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends ta{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,_=null,v=null;const M=typeof XRWebGLBinding<"u",m=new CM,g={},S=e.getContextAttributes();let w=null,u=null;const f=[],T=[],R=new We;let y=null;const E=new _i;E.viewport=new sn;const H=new _i;H.viewport=new sn;const C=[E,H],U=new Gy;let k=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=f[K];return rt===void 0&&(rt=new ec,f[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=f[K];return rt===void 0&&(rt=new ec,f[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=f[K];return rt===void 0&&(rt=new ec,f[K]=rt),rt.getHandSpace()};function V(K){const rt=T.indexOf(K.inputSource);if(rt===-1)return;const st=f[rt];st!==void 0&&(st.update(K.inputSource,K.frame,c||a),st.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let K=0;K<f.length;K++){const rt=T[K];rt!==null&&(T[K]=null,f[K].disconnect(rt))}k=null,P=null,m.reset();for(const K in g)delete g[K];t.setRenderTarget(w),_=null,h=null,p=null,r=null,u=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Nt=null,Rt=null;S.depth&&(Rt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=S.stencil?$r:dr,Nt=S.stencil?Da:ki);const Ft={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ft),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),u=new zi(h.textureWidth,h.textureHeight,{format:yi,type:li,depthTexture:new La(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const st={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new zi(_.framebufferWidth,_.framebufferHeight,{format:yi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let rt=0;rt<K.removed.length;rt++){const st=K.removed[rt],Nt=T.indexOf(st);Nt>=0&&(T[Nt]=null,f[Nt].disconnect(st))}for(let rt=0;rt<K.added.length;rt++){const st=K.added[rt];let Nt=T.indexOf(st);if(Nt===-1){for(let Ft=0;Ft<f.length;Ft++)if(Ft>=T.length){T.push(st),Nt=Ft;break}else if(T[Ft]===null){T[Ft]=st,Nt=Ft;break}if(Nt===-1)break}const Rt=f[Nt];Rt&&Rt.connect(st)}}const tt=new X,it=new X;function _t(K,rt,st){tt.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(st.matrixWorld);const Nt=tt.distanceTo(it),Rt=rt.projectionMatrix.elements,Ft=st.projectionMatrix.elements,Ze=Rt[14]/(Rt[10]-1),te=Rt[14]/(Rt[10]+1),fe=(Rt[9]+1)/Rt[5],xe=(Rt[9]-1)/Rt[5],se=(Rt[8]-1)/Rt[0],de=(Ft[8]+1)/Ft[0],D=Ze*se,oe=Ze*de,Jt=Nt/(-se+de),_e=Jt*-se;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(Jt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Rt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const gt=Ze+Jt,I=te+Jt,x=D-_e,F=oe+(Nt-_e),Y=fe*te/I*gt,Q=xe*te/I*gt;K.projectionMatrix.makePerspective(x,F,Y,Q,gt,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function yt(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let rt=K.near,st=K.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(st=m.depthFar)),U.near=H.near=E.near=rt,U.far=H.far=E.far=st,(k!==U.near||P!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,P=U.far),U.layers.mask=K.layers.mask|6,E.layers.mask=U.layers.mask&-5,H.layers.mask=U.layers.mask&-3;const Nt=K.parent,Rt=U.cameras;yt(U,Nt);for(let Ft=0;Ft<Rt.length;Ft++)yt(Rt[Ft],Nt);Rt.length===2?_t(U,E,H):U.projectionMatrix.copy(E.projectionMatrix),pt(K,U,Nt)};function pt(K,rt,st){st===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(st.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Iu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return g[K]};let lt=null;function Et(K,rt){if(d=rt.getViewerPose(c||a),v=rt,d!==null){const st=d.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let Nt=!1;st.length!==U.cameras.length&&(U.cameras.length=0,Nt=!0);for(let te=0;te<st.length;te++){const fe=st[te];let xe=null;if(_!==null)xe=_.getViewport(fe);else{const de=p.getViewSubImage(h,fe);xe=de.viewport,te===0&&(t.setRenderTargetTextures(u,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(u))}let se=C[te];se===void 0&&(se=new _i,se.layers.enable(te),se.viewport=new sn,C[te]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(xe.x,xe.y,xe.width,xe.height),te===0&&(U.matrix.copy(se.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Nt===!0&&U.cameras.push(se)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const te=p.getDepthInformation(st[0]);te&&te.isValid&&te.texture&&m.init(te,r.renderState)}if(Rt&&Rt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let te=0;te<st.length;te++){const fe=st[te].camera;if(fe){let xe=g[fe];xe||(xe=new rp,g[fe]=xe);const se=p.getCameraImage(fe);xe.sourceTexture=se}}}}for(let st=0;st<f.length;st++){const Nt=T[st],Rt=f[st];Nt!==null&&Rt!==void 0&&Rt.update(Nt,rt,c||a)}lt&&lt(K,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),v=null}const re=new op;re.setAnimationLoop(Et),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}}const Xr=new hr,LM=new cn;function PM(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,sp(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,S,w,u){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),p(m,g)):g.isMeshPhongMaterial?(s(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&_(m,g,u)):g.isMeshMatcapMaterial?(s(m,g),v(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),M(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),w=S.envMap,u=S.envMapRotation;w&&(m.envMap.value=w,Xr.copy(u),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Xr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const u=w.program;i.uniformBlockBinding(S,u)}function c(S,w){let u=r[S.id];u===void 0&&(v(S),u=d(S),r[S.id]=u,S.addEventListener("dispose",m));const f=w.program;i.updateUBOMapping(S,f);const T=t.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function d(S){const w=p();S.__bindingPointIndex=w;const u=n.createBuffer(),f=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,f,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,u),u}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const w=r[S.id],u=S.uniforms,f=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,R=u.length;T<R;T++){const y=Array.isArray(u[T])?u[T]:[u[T]];for(let E=0,H=y.length;E<H;E++){const C=y[E];if(_(C,T,E,f)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let V=0;V<k.length;V++){const B=k[V],G=M(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+P,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,w,u,f){const T=S.value,R=w+"_"+u;if(f[R]===void 0)return typeof T=="number"||typeof T=="boolean"?f[R]=T:f[R]=T.clone(),!0;{const y=f[R];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return f[R]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function v(S){const w=S.uniforms;let u=0;const f=16;for(let R=0,y=w.length;R<y;R++){const E=Array.isArray(w[R])?w[R]:[w[R]];for(let H=0,C=E.length;H<C;H++){const U=E[H],k=Array.isArray(U.value)?U.value:[U.value];for(let P=0,V=k.length;P<V;P++){const B=k[P],G=M(B),tt=u%f,it=tt%G.boundary,_t=tt+it;u+=it,_t!==0&&f-_t<G.storage&&(u+=f-_t),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=u,u+=G.storage}}}const T=u%f;return T>0&&(u+=f-T),S.__size=u,S.__cache={},this}function M(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const u=a.indexOf(w.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const FM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function UM(){return wi===null&&(wi=new Cy(FM,16,16,Xs,ur),wi.name="DFG_LUT",wi.minFilter=En,wi.magFilter=En,wi.wrapS=ar,wi.wrapT=ar,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class OM{constructor(t={}){const{canvas:e=ay(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:_=li}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=_,m=new Set([$u,Qu,Ju]),g=new Set([li,ki,Ca,Da,ju,Ku]),S=new Uint32Array(4),w=new Int32Array(4);let u=null,f=null;const T=[],R=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let H=!1;this._outputColorSpace=ni;let C=0,U=0,k=null,P=-1,V=null;const B=new sn,G=new sn;let tt=null;const it=new Le(0);let _t=0,yt=e.width,pt=e.height,lt=1,Et=null,re=null;const K=new sn(0,0,yt,pt),rt=new sn(0,0,yt,pt);let st=!1;const Nt=new np;let Rt=!1,Ft=!1;const Ze=new cn,te=new X,fe=new sn,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function de(){return k===null?lt:1}let D=i;function oe(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yu}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",je,!1),D===null){const z="webgl2";if(D=oe(z,A),D===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Re("WebGLRenderer: "+A.message),A}let Jt,_e,gt,I,x,F,Y,Q,j,Mt,ct,Ot,zt,ot,ht,Tt,Ct,bt,pe,O,mt,ft,wt;function ut(){Jt=new OS(D),Jt.init(),mt=new TM(D,Jt),_e=new RS(D,Jt,t,mt),gt=new AM(D,Jt),_e.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),I=new zS(D),x=new dM,F=new wM(D,Jt,gt,x,_e,mt,I),Y=new US(E),Q=new Zy(D),ft=new TS(D,Q),j=new BS(D,Q,I,ft),Mt=new kS(D,j,Q,ft,I),bt=new HS(D,_e,F),ht=new CS(x),ct=new uM(E,Y,Jt,_e,ft,ht),Ot=new PM(E,x),zt=new fM,ot=new yM(Jt),Ct=new wS(E,Y,gt,Mt,v,l),Tt=new EM(E,Mt,_e),wt=new NM(D,I,_e,gt),pe=new IS(D,Jt,I),O=new VS(D,Jt,I),I.programs=ct.programs,E.capabilities=_e,E.extensions=Jt,E.properties=x,E.renderLists=zt,E.shadowMap=Tt,E.state=gt,E.info=I}ut(),M!==li&&(y=new WS(M,e.width,e.height,r,s));const J=new DM(E,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(A){A!==void 0&&(lt=A,this.setSize(yt,pt,!1))},this.getSize=function(A){return A.set(yt,pt)},this.setSize=function(A,z,q=!0){if(J.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=A,pt=z,e.width=Math.floor(A*lt),e.height=Math.floor(z*lt),q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(yt*lt,pt*lt).floor()},this.setDrawingBufferSize=function(A,z,q){yt=A,pt=z,lt=q,e.width=Math.floor(A*q),e.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(M===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,z,q,Z){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,z,q,Z),gt.viewport(B.copy(K).multiplyScalar(lt).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,z,q,Z){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,z,q,Z),gt.scissor(G.copy(rt).multiplyScalar(lt).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){gt.setScissorTest(st=A)},this.setOpaqueSort=function(A){Et=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let Z=0;if(A){let W=!1;if(k!==null){const xt=k.texture.format;W=m.has(xt)}if(W){const xt=k.texture.type,At=g.has(xt),St=Ct.getClearColor(),Dt=Ct.getClearAlpha(),Ut=St.r,ae=St.g,me=St.b;At?(S[0]=Ut,S[1]=ae,S[2]=me,S[3]=Dt,D.clearBufferuiv(D.COLOR,0,S)):(w[0]=Ut,w[1]=ae,w[2]=me,w[3]=Dt,D.clearBufferiv(D.COLOR,0,w))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),q&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Ct.dispose(),zt.dispose(),ot.dispose(),x.dispose(),Y.dispose(),Mt.dispose(),ft.dispose(),wt.dispose(),ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",Pd),J.removeEventListener("sessionend",Nd),Vr.stop()};function It(A){A.preventDefault(),eh("WebGLRenderer: Context Lost."),H=!0}function ee(){eh("WebGLRenderer: Context Restored."),H=!1;const A=I.autoReset,z=Tt.enabled,q=Tt.autoUpdate,Z=Tt.needsUpdate,W=Tt.type;ut(),I.autoReset=A,Tt.enabled=z,Tt.autoUpdate=q,Tt.needsUpdate=Z,Tt.type=W}function je(A){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){const z=A.target;z.removeEventListener("dispose",Ue),Yi(z)}function Yi(A){qi(A),x.remove(A)}function qi(A){const z=x.get(A).programs;z!==void 0&&(z.forEach(function(q){ct.releaseProgram(q)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,Z,W,xt){z===null&&(z=xe);const At=W.isMesh&&W.matrixWorld.determinant()<0,St=vm(A,z,q,Z,W);gt.setMaterial(Z,At);let Dt=q.index,Ut=1;if(Z.wireframe===!0){if(Dt=j.getWireframeAttribute(q),Dt===void 0)return;Ut=2}const ae=q.drawRange,me=q.attributes.position;let Bt=ae.start*Ut,He=(ae.start+ae.count)*Ut;xt!==null&&(Bt=Math.max(Bt,xt.start*Ut),He=Math.min(He,(xt.start+xt.count)*Ut)),Dt!==null?(Bt=Math.max(Bt,0),He=Math.min(He,Dt.count)):me!=null&&(Bt=Math.max(Bt,0),He=Math.min(He,me.count));const nn=He-Bt;if(nn<0||nn===1/0)return;ft.setup(W,Z,St,q,Dt);let tn,ke=pe;if(Dt!==null&&(tn=Q.get(Dt),ke=O,ke.setIndex(tn)),W.isMesh)Z.wireframe===!0?(gt.setLineWidth(Z.wireframeLinewidth*de()),ke.setMode(D.LINES)):ke.setMode(D.TRIANGLES);else if(W.isLine){let Sn=Z.linewidth;Sn===void 0&&(Sn=1),gt.setLineWidth(Sn*de()),W.isLineSegments?ke.setMode(D.LINES):W.isLineLoop?ke.setMode(D.LINE_LOOP):ke.setMode(D.LINE_STRIP)}else W.isPoints?ke.setMode(D.POINTS):W.isSprite&&ke.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ke.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Sn=W._multiDrawStarts,Lt=W._multiDrawCounts,Zn=W._multiDrawCount,Ie=Dt?Q.get(Dt).bytesPerElement:1,hi=x.get(Z).currentProgram.getUniforms();for(let Ei=0;Ei<Zn;Ei++)hi.setValue(D,"_gl_DrawID",Ei),ke.render(Sn[Ei]/Ie,Lt[Ei])}else if(W.isInstancedMesh)ke.renderInstances(Bt,nn,W.count);else if(q.isInstancedBufferGeometry){const Sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Lt=Math.min(q.instanceCount,Sn);ke.renderInstances(Bt,nn,Lt)}else ke.render(Bt,nn)};function Ld(A,z,q){A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ka(A,z,q),A.side=Pr,A.needsUpdate=!0,Ka(A,z,q),A.side=Kn):Ka(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),f=ot.get(q),f.init(z),R.push(f),q.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();const Z=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xt=W.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){const St=xt[At];Ld(St,q,W),Z.add(St)}else Ld(xt,q,W),Z.add(xt)}),f=R.pop(),Z},this.compileAsync=function(A,z,q=null){const Z=this.compile(A,z,q);return new Promise(W=>{function xt(){if(Z.forEach(function(At){x.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){W(A);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ul=null;function _m(A){Ul&&Ul(A)}function Pd(){Vr.stop()}function Nd(){Vr.start()}const Vr=new op;Vr.setAnimationLoop(_m),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(A){Ul=A,J.setAnimationLoop(A),A===null?Vr.stop():Vr.start()},J.addEventListener("sessionstart",Pd),J.addEventListener("sessionend",Nd),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const q=J.enabled===!0&&J.isPresenting===!0,Z=y!==null&&(k===null||q)&&y.begin(E,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,z,k),f=ot.get(A,R.length),f.init(z),R.push(f),Ze.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Nt.setFromProjectionMatrix(Ze,Ui,z.reversedDepth),Ft=this.localClippingEnabled,Rt=ht.init(this.clippingPlanes,Ft),u=zt.get(A,T.length),u.init(),T.push(u),J.enabled===!0&&J.isPresenting===!0){const At=E.xr.getDepthSensingMesh();At!==null&&Ol(At,z,-1/0,E.sortObjects)}Ol(A,z,0,E.sortObjects),u.finish(),E.sortObjects===!0&&u.sort(Et,re),se=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,se&&Ct.addToRenderList(u,A),this.info.render.frame++,Rt===!0&&ht.beginShadows();const W=f.state.shadowsArray;if(Tt.render(W,A,z),Rt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&y.hasRenderPass())===!1){const At=u.opaque,St=u.transmissive;if(f.setupLights(),z.isArrayCamera){const Dt=z.cameras;if(St.length>0)for(let Ut=0,ae=Dt.length;Ut<ae;Ut++){const me=Dt[Ut];Ud(At,St,A,me)}se&&Ct.render(A);for(let Ut=0,ae=Dt.length;Ut<ae;Ut++){const me=Dt[Ut];Fd(u,A,me,me.viewport)}}else St.length>0&&Ud(At,St,A,z),se&&Ct.render(A),Fd(u,A,z)}k!==null&&U===0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k)),Z&&y.end(E),A.isScene===!0&&A.onAfterRender(E,A,z),ft.resetDefaultState(),P=-1,V=null,R.pop(),R.length>0?(f=R[R.length-1],Rt===!0&&ht.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?u=T[T.length-1]:u=null};function Ol(A,z,q,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Nt.intersectsSprite(A)){Z&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ze);const At=Mt.update(A),St=A.material;St.visible&&u.push(A,At,St,q,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Nt.intersectsObject(A))){const At=Mt.update(A),St=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),fe.copy(At.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(Ze)),Array.isArray(St)){const Dt=At.groups;for(let Ut=0,ae=Dt.length;Ut<ae;Ut++){const me=Dt[Ut],Bt=St[me.materialIndex];Bt&&Bt.visible&&u.push(A,At,Bt,q,fe.z,me)}}else St.visible&&u.push(A,At,St,q,fe.z,null)}}const xt=A.children;for(let At=0,St=xt.length;At<St;At++)Ol(xt[At],z,q,Z)}function Fd(A,z,q,Z){const{opaque:W,transmissive:xt,transparent:At}=A;f.setupLightsView(q),Rt===!0&&ht.setGlobalState(E.clippingPlanes,q),Z&&gt.viewport(B.copy(Z)),W.length>0&&ja(W,z,q),xt.length>0&&ja(xt,z,q),At.length>0&&ja(At,z,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Ud(A,z,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[Z.id]===void 0){const Bt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");f.state.transmissionRenderTarget[Z.id]=new zi(1,1,{generateMipmaps:!0,type:Bt?ur:li,minFilter:Qr,samples:Math.max(4,_e.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const xt=f.state.transmissionRenderTarget[Z.id],At=Z.viewport||B;xt.setSize(At.z*E.transmissionResolutionScale,At.w*E.transmissionResolutionScale);const St=E.getRenderTarget(),Dt=E.getActiveCubeFace(),Ut=E.getActiveMipmapLevel();E.setRenderTarget(xt),E.getClearColor(it),_t=E.getClearAlpha(),_t<1&&E.setClearColor(16777215,.5),E.clear(),se&&Ct.render(q);const ae=E.toneMapping;E.toneMapping=Vi;const me=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),Rt===!0&&ht.setGlobalState(E.clippingPlanes,Z),ja(A,q,Z),F.updateMultisampleRenderTarget(xt),F.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let He=0,nn=z.length;He<nn;He++){const tn=z[He],{object:ke,geometry:Sn,material:Lt,group:Zn}=tn;if(Lt.side===Kn&&ke.layers.test(Z.layers)){const Ie=Lt.side;Lt.side=Hn,Lt.needsUpdate=!0,Od(ke,q,Z,Sn,Lt,Zn),Lt.side=Ie,Lt.needsUpdate=!0,Bt=!0}}Bt===!0&&(F.updateMultisampleRenderTarget(xt),F.updateRenderTargetMipmap(xt))}E.setRenderTarget(St,Dt,Ut),E.setClearColor(it,_t),me!==void 0&&(Z.viewport=me),E.toneMapping=ae}function ja(A,z,q){const Z=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xt=A.length;W<xt;W++){const At=A[W],{object:St,geometry:Dt,group:Ut}=At;let ae=At.material;ae.allowOverride===!0&&Z!==null&&(ae=Z),St.layers.test(q.layers)&&Od(St,z,q,Dt,ae,Ut)}}function Od(A,z,q,Z,W,xt){A.onBeforeRender(E,z,q,Z,W,xt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(E,z,q,Z,A,xt),W.transparent===!0&&W.side===Kn&&W.forceSinglePass===!1?(W.side=Hn,W.needsUpdate=!0,E.renderBufferDirect(q,z,Z,W,A,xt),W.side=Pr,W.needsUpdate=!0,E.renderBufferDirect(q,z,Z,W,A,xt),W.side=Kn):E.renderBufferDirect(q,z,Z,W,A,xt),A.onAfterRender(E,z,q,Z,W,xt)}function Ka(A,z,q){z.isScene!==!0&&(z=xe);const Z=x.get(A),W=f.state.lights,xt=f.state.shadowsArray,At=W.state.version,St=ct.getParameters(A,W.state,xt,z,q),Dt=ct.getProgramCacheKey(St);let Ut=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;const ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=Y.get(A.envMap||Z.environment,ae),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",Ue),Ut=new Map,Z.programs=Ut);let me=Ut.get(Dt);if(me!==void 0){if(Z.currentProgram===me&&Z.lightsStateVersion===At)return Vd(A,St),me}else St.uniforms=ct.getUniforms(A),A.onBeforeCompile(St,E),me=ct.acquireProgram(St,Dt),Ut.set(Dt,me),Z.uniforms=St.uniforms;const Bt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),Vd(A,St),Z.needsLights=xm(A),Z.lightsStateVersion=At,Z.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=me,Z.uniformsList=null,me}function Bd(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Lo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Vd(A,z){const q=x.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function vm(A,z,q,Z,W){z.isScene!==!0&&(z=xe),F.resetTextureUnits();const xt=z.fog,At=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,St=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ys,Dt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ut=Y.get(Z.envMap||At,Dt),ae=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,me=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!q.morphAttributes.position,He=!!q.morphAttributes.normal,nn=!!q.morphAttributes.color;let tn=Vi;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(tn=E.toneMapping);const ke=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Sn=ke!==void 0?ke.length:0,Lt=x.get(Z),Zn=f.state.lights;if(Rt===!0&&(Ft===!0||A!==V)){const mn=A===V&&Z.id===P;ht.setState(Z,A,mn)}let Ie=!1;Z.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Zn.state.version||Lt.outputColorSpace!==St||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Ut||Z.fog===!0&&Lt.fog!==xt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ht.numPlanes||Lt.numIntersection!==ht.numIntersection)||Lt.vertexAlphas!==ae||Lt.vertexTangents!==me||Lt.morphTargets!==Bt||Lt.morphNormals!==He||Lt.morphColors!==nn||Lt.toneMapping!==tn||Lt.morphTargetsCount!==Sn)&&(Ie=!0):(Ie=!0,Lt.__version=Z.version);let hi=Lt.currentProgram;Ie===!0&&(hi=Ka(Z,z,W));let Ei=!1,zr=!1,ls=!1;const Xe=hi.getUniforms(),yn=Lt.uniforms;if(gt.useProgram(hi.program)&&(Ei=!0,zr=!0,ls=!0),Z.id!==P&&(P=Z.id,zr=!0),Ei||V!==A){gt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xe.setValue(D,"projectionMatrix",A.projectionMatrix),Xe.setValue(D,"viewMatrix",A.matrixWorldInverse);const vr=Xe.map.cameraPosition;vr!==void 0&&vr.setValue(D,te.setFromMatrixPosition(A.matrixWorld)),_e.logarithmicDepthBuffer&&Xe.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Xe.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,zr=!0,ls=!0)}if(Lt.needsLights&&(Zn.state.directionalShadowMap.length>0&&Xe.setValue(D,"directionalShadowMap",Zn.state.directionalShadowMap,F),Zn.state.spotShadowMap.length>0&&Xe.setValue(D,"spotShadowMap",Zn.state.spotShadowMap,F),Zn.state.pointShadowMap.length>0&&Xe.setValue(D,"pointShadowMap",Zn.state.pointShadowMap,F)),W.isSkinnedMesh){Xe.setOptional(D,W,"bindMatrix"),Xe.setOptional(D,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Xe.setValue(D,"boneTexture",mn.boneTexture,F))}W.isBatchedMesh&&(Xe.setOptional(D,W,"batchingTexture"),Xe.setValue(D,"batchingTexture",W._matricesTexture,F),Xe.setOptional(D,W,"batchingIdTexture"),Xe.setValue(D,"batchingIdTexture",W._indirectTexture,F),Xe.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Xe.setValue(D,"batchingColorTexture",W._colorsTexture,F));const _r=q.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&bt.update(W,q,hi),(zr||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,Xe.setValue(D,"receiveShadow",W.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(yn.envMapIntensity.value=z.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=UM()),zr&&(Xe.setValue(D,"toneMappingExposure",E.toneMappingExposure),Lt.needsLights&&ym(yn,ls),xt&&Z.fog===!0&&Ot.refreshFogUniforms(yn,xt),Ot.refreshMaterialUniforms(yn,Z,lt,pt,f.state.transmissionRenderTarget[A.id]),Lo.upload(D,Bd(Lt),yn,F)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Lo.upload(D,Bd(Lt),yn,F),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Xe.setValue(D,"center",W.center),Xe.setValue(D,"modelViewMatrix",W.modelViewMatrix),Xe.setValue(D,"normalMatrix",W.normalMatrix),Xe.setValue(D,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let vr=0,cs=mn.length;vr<cs;vr++){const zd=mn[vr];wt.update(zd,hi),wt.bind(zd,hi)}}return hi}function ym(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function xm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,z,q){const Z=x.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=z,x.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=x.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Sm=D.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){k=A,C=z,U=q;let Z=null,W=!1,xt=!1;if(A){const St=x.get(A);if(St.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(D.FRAMEBUFFER,St.__webglFramebuffer),B.copy(A.viewport),G.copy(A.scissor),tt=A.scissorTest,gt.viewport(B),gt.scissor(G),gt.setScissorTest(tt),P=-1;return}else if(St.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(St.__hasExternalTextures)F.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(St.__boundDepthTexture!==ae){if(ae!==null&&x.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const Dt=A.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(xt=!0);const Ut=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?Z=Ut[z][q]:Z=Ut[z],W=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?Z=x.get(A).__webglMultisampledFramebuffer:Array.isArray(Ut)?Z=Ut[q]:Z=Ut,B.copy(A.viewport),G.copy(A.scissor),tt=A.scissorTest}else B.copy(K).multiplyScalar(lt).floor(),G.copy(rt).multiplyScalar(lt).floor(),tt=st;if(q!==0&&(Z=Sm),gt.bindFramebuffer(D.FRAMEBUFFER,Z)&&gt.drawBuffers(A,Z),gt.viewport(B),gt.scissor(G),gt.setScissorTest(tt),W){const St=x.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,St.__webglTexture,q)}else if(xt){const St=z;for(let Dt=0;Dt<A.textures.length;Dt++){const Ut=x.get(A.textures[Dt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Dt,Ut.__webglTexture,q,St)}}else if(A!==null&&q!==0){const St=x.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,q)}P=-1},this.readRenderTargetPixels=function(A,z,q,Z,W,xt,At,St=0){if(!(A&&A.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){gt.bindFramebuffer(D.FRAMEBUFFER,Dt);try{const Ut=A.textures[St],ae=Ut.format,me=Ut.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),!_e.textureFormatReadable(ae)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(me)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&q>=0&&q<=A.height-W&&D.readPixels(z,q,Z,W,mt.convert(ae),mt.convert(me),xt)}finally{const Ut=k!==null?x.get(k).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,Z,W,xt,At,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt)if(z>=0&&z<=A.width-Z&&q>=0&&q<=A.height-W){gt.bindFramebuffer(D.FRAMEBUFFER,Dt);const Ut=A.textures[St],ae=Ut.format,me=Ut.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),!_e.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,xt.byteLength,D.STREAM_READ),D.readPixels(z,q,Z,W,mt.convert(ae),mt.convert(me),0);const He=k!==null?x.get(k).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,He);const nn=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await oy(D,nn,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xt),D.deleteBuffer(Bt),D.deleteSync(nn),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const Z=Math.pow(2,-q),W=Math.floor(A.image.width*Z),xt=Math.floor(A.image.height*Z),At=z!==null?z.x:0,St=z!==null?z.y:0;F.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,At,St,W,xt),gt.unbindTexture()};const bm=D.createFramebuffer(),Mm=D.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,Z=null,W=0,xt=0){let At,St,Dt,Ut,ae,me,Bt,He,nn;const tn=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(q!==null)At=q.max.x-q.min.x,St=q.max.y-q.min.y,Dt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,ae=q.min.y,me=q.isBox3?q.min.z:0;else{const yn=Math.pow(2,-W);At=Math.floor(tn.width*yn),St=Math.floor(tn.height*yn),A.isDataArrayTexture?Dt=tn.depth:A.isData3DTexture?Dt=Math.floor(tn.depth*yn):Dt=1,Ut=0,ae=0,me=0}Z!==null?(Bt=Z.x,He=Z.y,nn=Z.z):(Bt=0,He=0,nn=0);const ke=mt.convert(z.format),Sn=mt.convert(z.type);let Lt;z.isData3DTexture?(F.setTexture3D(z,0),Lt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),Lt=D.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Zn=D.getParameter(D.UNPACK_ROW_LENGTH),Ie=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ei=D.getParameter(D.UNPACK_SKIP_ROWS),zr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,tn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,me);const ls=A.isDataArrayTexture||A.isData3DTexture,Xe=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const yn=x.get(A),_r=x.get(z),mn=x.get(yn.__renderTarget),vr=x.get(_r.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let cs=0;cs<Dt;cs++)ls&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(A).__webglTexture,W,me+cs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(z).__webglTexture,xt,nn+cs)),D.blitFramebuffer(Ut,ae,At,St,Bt,He,At,St,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||x.has(A)){const yn=x.get(A),_r=x.get(z);gt.bindFramebuffer(D.READ_FRAMEBUFFER,bm),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mm);for(let mn=0;mn<Dt;mn++)ls?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,W,me+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,W),Xe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_r.__webglTexture,xt,nn+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_r.__webglTexture,xt),W!==0?D.blitFramebuffer(Ut,ae,At,St,Bt,He,At,St,D.COLOR_BUFFER_BIT,D.NEAREST):Xe?D.copyTexSubImage3D(Lt,xt,Bt,He,nn+mn,Ut,ae,At,St):D.copyTexSubImage2D(Lt,xt,Bt,He,Ut,ae,At,St);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xe?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Lt,xt,Bt,He,nn,At,St,Dt,ke,Sn,tn.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,xt,Bt,He,nn,At,St,Dt,ke,tn.data):D.texSubImage3D(Lt,xt,Bt,He,nn,At,St,Dt,ke,Sn,tn):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xt,Bt,He,At,St,ke,Sn,tn.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xt,Bt,He,tn.width,tn.height,ke,tn.data):D.texSubImage2D(D.TEXTURE_2D,xt,Bt,He,At,St,ke,Sn,tn);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ie),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ei),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zr),xt===0&&z.generateMipmaps&&D.generateMipmap(Lt),gt.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),gt.unbindTexture()},this.resetState=function(){C=0,U=0,k=null,gt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}class BM{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Le("#ffffff");async initialize(t){this.canvas=t,this.renderer=new OM({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new My,this.camera=new rd(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Ga(1,1);this.geometryCache.set("plane",e);const i=new Fs({color:16777215,transparent:!0,depthWrite:!1,side:Kn}),r=new Jn(e,i);r.visible=!1,this.scene.add(r),this.spritePool.push(r);const s=new Fs({transparent:!0,depthWrite:!1,side:Kn}),a=new Jn(e,s);a.visible=!1,this.scene.add(a),this.rectPool.push(a),this.updateThemeColors(),this.themeObserver=new MutationObserver(o=>{for(let l=0;l<o.length;l++)if(o[l].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize(),this.renderer.compile(this.scene,this.camera)}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Le(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=0,this.camera.bottom=this.height,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Fs({color:16777215,transparent:!0,depthWrite:!1,side:Kn});e=new Jn(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Fs({transparent:!0,depthWrite:!1,side:Kn});e=new Jn(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function $t(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(p){a(p)}}function l(d){try{c(i.throw(d))}catch(p){a(p)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function kh(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ue(n){return this instanceof ue?(this.v=n,this):new ue(n)}function Oi(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(v){return Promise.resolve(v).then(_,p)}}function o(_,v){i[_]&&(r[_]=function(M){return new Promise(function(m,g){s.push([_,M,m,g])>1||l(_,M)})},v&&(r[_]=v(r[_])))}function l(_,v){try{c(i[_](v))}catch(M){h(s[0][3],M)}}function c(_){_.value instanceof ue?Promise.resolve(_.value.v).then(d,p):h(s[0][2],_)}function d(_){l("next",_)}function p(_){l("throw",_)}function h(_,v){_(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Po(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:ue(n[r](a)),done:!1}:s?s(a):a}:s}}function ns(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof kh=="function"?kh(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const VM=new TextDecoder("utf-8"),Du=n=>VM.decode(n),zM=new TextEncoder,sd=n=>zM.encode(n),HM=n=>typeof n=="number",fp=n=>typeof n=="boolean",dn=n=>typeof n=="function",Gn=n=>n!=null&&Object(n)===n,rs=n=>Gn(n)&&dn(n.then),Wa=n=>Gn(n)&&dn(n[Symbol.iterator]),ia=n=>Gn(n)&&dn(n[Symbol.asyncIterator]),Lu=n=>Gn(n)&&Gn(n.schema),pp=n=>Gn(n)&&"done"in n&&"value"in n,mp=n=>Gn(n)&&dn(n.stat)&&HM(n.fd),gp=n=>Gn(n)&&ad(n.body),Dl=n=>"_getDOMStream"in n&&"_getNodeStream"in n,kM=n=>Gn(n)&&dn(n.abort)&&dn(n.getWriter)&&!Dl(n),ad=n=>Gn(n)&&dn(n.cancel)&&dn(n.getReader)&&!Dl(n),GM=n=>Gn(n)&&dn(n.end)&&dn(n.write)&&fp(n.writable)&&!Dl(n),_p=n=>Gn(n)&&dn(n.read)&&dn(n.pipe)&&fp(n.readable)&&!Dl(n),WM=n=>Gn(n)&&dn(n.clear)&&dn(n.bytes)&&dn(n.position)&&dn(n.setPosition)&&dn(n.capacity)&&dn(n.getBufferIdentifier)&&dn(n.createLong),od=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function ZM(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,d=n.length;++l<d;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function Gh(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Wi(n,t){const e=ZM(n),i=e.reduce((d,p)=>d+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const d=e.length;++l<d;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?Gh(a,s,o):a=s;break}Gh(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function ze(n,t){let e=pp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=sd(e)),e instanceof ArrayBuffer?new n(e):e instanceof od?new n(e):WM(e)?ze(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const fa=n=>ze(Int32Array,n),Wh=n=>ze(BigInt64Array,n),Me=n=>ze(Uint8Array,n),Pu=n=>(n.next(),n);function*XM(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof od?e(t):Wa(t)?t:e(t);return yield*Pu((function*(r){let s=null;do s=r.next(yield ze(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const YM=n=>XM(Uint8Array,n);function vp(n,t){return Oi(this,arguments,function*(){if(rs(t))return yield ue(yield ue(yield*Po(ns(vp(n,yield ue(t))))));const i=function(a){return Oi(this,arguments,function*(){yield yield ue(yield ue(a))})},r=function(a){return Oi(this,arguments,function*(){yield ue(yield*Po(ns(Pu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof od?i(t):Wa(t)?r(t):ia(t)?t:i(t);return yield ue(yield*Po(ns(Pu((function(a){return Oi(this,arguments,function*(){let o=null;do o=yield ue(a.next(yield yield ue(ze(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield ue(new n)})}const qM=n=>vp(Uint8Array,n);function yp(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function jM(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const ii={fromIterable(n){return bo(KM(n))},fromAsyncIterable(n){return bo(JM(n))},fromDOMStream(n){return bo(QM(n))},fromNodeStream(n){return bo(tE(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},bo=n=>(n.next(),n);function*KM(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Wi(i,a)[0]:([r,i,o]=Wi(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=YM(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(d){(e=!0)&&typeof c.throw=="function"&&c.throw(d)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function JM(n){return Oi(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Wi(r,o)[0]:([s,r,l]=Wi(r,o),s)}({cmd:a,size:o}=(yield yield ue(null))||{cmd:"read",size:0});const d=qM(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ue(d.next()):yield ue(d.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ue(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof d.throw=="function"&&(yield ue(d.throw(p)))}finally{i===!1&&typeof d.return=="function"&&(yield ue(d.return(new Uint8Array(0))))}return yield ue(null)})}function QM(n){return Oi(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Wi(r,o)[0]:([s,r,l]=Wi(r,o),s)}({cmd:a,size:o}=(yield yield ue(null))||{cmd:"read",size:0});const d=new $M(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ue(d.read()):yield ue(d.read(o-l)),!e&&s.byteLength>0&&(r.push(Me(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ue(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield ue(d.cancel(p)))}finally{i===!1?yield ue(d.cancel()):n.locked&&d.releaseLock()}return yield ue(null)})}class $M{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return $t(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return $t(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=Me(e)),e})}}const Ec=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function tE(n){return Oi(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],d;function p(){return a==="peek"?Wi(c,o)[0]:([d,c,l]=Wi(c,o),d)}if({cmd:a,size:o}=(yield yield ue(null))||{cmd:"read",size:0},n.isTTY)return yield yield ue(new Uint8Array(0)),yield ue(null);try{e[0]=Ec(n,"end"),e[1]=Ec(n,"error");do{if(e[2]=Ec(n,"readable"),[i,s]=yield ue(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(d=Me(n.read(o-l)),d.byteLength<o-l&&(d=Me(n.read()))):d=Me(n.read()),d.byteLength>0&&(c.push(d),l+=d.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield ue(p()));while(o<l)}while(!r)}finally{yield ue(h(e,i==="error"?s:null))}return yield ue(null);function h(_,v){return d=c=null,new Promise((M,m)=>{for(const[g,S]of _)n.off(g,S);try{const g=n.destroy;g&&g.call(n,v),v=void 0}catch(g){v=g||v}finally{v!=null?m(v):M()}})}})}var an;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(an||(an={}));var wn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(wn||(wn={}));var An;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(An||(An={}));var ui;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(ui||(ui={}));var Xt;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Xt||(Xt={}));var Zi;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Zi||(Zi={}));const Ac=2,Di=4,rr=4,Fe=4,Ir=new Int32Array(2),Zh=new Float32Array(Ir.buffer),Xh=new Float64Array(Ir.buffer),Mo=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Nu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Nu||(Nu={}));let js=class xp{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new xp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Ir[0]=this.readInt32(t),Zh[0]}readFloat64(t){return Ir[Mo?0:1]=this.readInt32(t),Ir[Mo?1:0]=this.readInt32(t+4),Xh[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Zh[0]=e,this.writeInt32(t,Ir[0])}writeFloat64(t,e){Xh[0]=e,this.writeInt32(t,Ir[Mo?0:1]),this.writeInt32(t+4,Ir[Mo?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+Di+rr)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<rr;e++)t+=String.fromCharCode(this.readInt8(this.position_+Di+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=Di;const r=this.bytes_.subarray(t,t+i);return e===Nu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+Di}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=rr)throw new Error("FlatBuffers: file identifier must be length "+rr);for(let e=0;e<rr;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+Di+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},Sp=class bp{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=js.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=bp.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=js.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(Di,0),this.writeInt32(this.offset()-t+Di)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*Ac;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=Ac;c<s;c+=Ac)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Fe:0;if(e){const s=e;if(this.prep(this.minalign,Di+rr+r),s.length!=rr)throw new TypeError("FlatBuffers: file identifier must be length "+rr);for(let a=rr-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,Di+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(Di,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var Ko;(function(n){n[n.BUFFER=0]="BUFFER"})(Ko||(Ko={}));var Jo;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(Jo||(Jo={}));class Rr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Fe),(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):Jo.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Ko.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,Jo.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Ko.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Rr.startBodyCompression(t),Rr.addCodec(t,e),Rr.addMethod(t,i),Rr.endBodyCompression(t)}}class Mp{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let Ep=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},er=class Fu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Fu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Fe),(e||new Fu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Ep).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Mp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Rr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},As=class Uu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Fe),(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new er).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Ks;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Ks||(Ks={}));var Qo;(function(n){n[n.DenseArray=0]="DenseArray"})(Qo||(Qo={}));class jn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new jn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Fe),(e||new jn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return jn.startInt(t),jn.addBitWidth(t,e),jn.addIsSigned(t,i),jn.endInt(t)}}class sr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new sr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Fe),(e||new sr).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new jn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Qo.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Qo.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class hn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Fe),(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return hn.startKeyValue(t),hn.addKey(t,e),hn.addValue(t,i),hn.endKeyValue(t)}}let Yh=class _a{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Fe),(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return _a.startBinary(t),_a.endBinary(t)}},qh=class va{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Fe),(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return va.startBool(t),va.endBool(t)}},No=class ws{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Fe),(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):ui.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,ui.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return ws.startDate(t),ws.addUnit(t,e),ws.endDate(t)}},Ts=class Tr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Fe),(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return Tr.startDecimal(t),Tr.addPrecision(t,e),Tr.addScale(t,i),Tr.addBitWidth(t,r),Tr.endDecimal(t)}},Fo=class Is{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Fe),(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Xt.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Xt.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return Is.startDuration(t),Is.addUnit(t,e),Is.endDuration(t)}},Uo=class Rs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Fe),(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Rs.startFixedSizeBinary(t),Rs.addByteWidth(t,e),Rs.endFixedSizeBinary(t)}},Oo=class Cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Fe),(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return Cs.startFixedSizeList(t),Cs.addListSize(t,e),Cs.endFixedSizeList(t)}};class Li{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new Li).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Fe),(e||new Li).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):An.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,An.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return Li.startFloatingPoint(t),Li.addPrecision(t,e),Li.endFloatingPoint(t)}}class Pi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Pi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Fe),(e||new Pi).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Zi.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Zi.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Pi.startInterval(t),Pi.addUnit(t,e),Pi.endInterval(t)}}let jh=class ya{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Fe),(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return ya.startLargeBinary(t),ya.endLargeBinary(t)}},Kh=class xa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Fe),(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return xa.startLargeUtf8(t),xa.endLargeUtf8(t)}},Jh=class Sa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Fe),(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return Sa.startList(t),Sa.endList(t)}},Bo=class Ds{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Fe),(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return Ds.startMap(t),Ds.addKeysSorted(t,e),Ds.endMap(t)}},Qh=class ba{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Fe),(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return ba.startNull(t),ba.endNull(t)}};class ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Fe),(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return ts.startStruct_(t),ts.endStruct_(t)}}class ri{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new ri).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Fe),(e||new ri).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Xt.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Xt.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return ri.startTime(t),ri.addUnit(t,e),ri.addBitWidth(t,i),ri.endTime(t)}}class si{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new si).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Fe),(e||new si).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Xt.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Xt.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return si.startTimestamp(t),si.addUnit(t,e),si.addTimezone(t,i),si.endTimestamp(t)}}class Vn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Vn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Fe),(e||new Vn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):wn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,wn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Vn.startUnion(t),Vn.addMode(t,e),Vn.addTypeIds(t,i),Vn.endUnion(t)}}let $h=class Ma{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Fe),(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return Ma.startUtf8(t),Ma.endUtf8(t)}};var Ke;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ke||(Ke={}));let ei=class Vo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Vo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Fe),(e||new Vo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ke.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new sr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Vo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new hn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ke.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Ii=class tr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new tr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Fe),(e||new tr).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ks.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new ei).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new hn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Ks.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return tr.startSchema(t),tr.addEndianness(t,e),tr.addFields(t,i),tr.addCustomMetadata(t,r),tr.addFeatures(t,s),tr.endSchema(t)}};var De;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(De||(De={}));var L;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(L||(L={}));var nr;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(nr||(nr={}));const eE=void 0;function Pa(n){if(n===null)return"null";if(n===eE)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Pa(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function Ye(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Ap(n,t){return Ye(n/t)+Ye(n%t)/Ye(t)}const nE=Symbol.for("isArrowBigNum");function Mi(n,...t){return t.length===0?Object.setPrototypeOf(ze(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}Mi.prototype[nE]=!0;Mi.prototype.toJSON=function(){return`"${Fa(this)}"`};Mi.prototype.valueOf=function(n){return wp(this,n)};Mi.prototype.toString=function(){return Fa(this)};Mi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return wp(this);case"string":return Fa(this);case"default":return sE(this)}return Fa(this)};function zs(...n){return Mi.apply(this,n)}function Hs(...n){return Mi.apply(this,n)}function Na(...n){return Mi.apply(this,n)}Object.setPrototypeOf(zs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(Hs.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Na.prototype,Object.create(Uint32Array.prototype));Object.assign(zs.prototype,Mi.prototype,{constructor:zs,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(Hs.prototype,Mi.prototype,{constructor:Hs,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Na.prototype,Mi.prototype,{constructor:Na,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const iE=BigInt(4294967296)*BigInt(4294967296),rE=iE-BigInt(1);function wp(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const d of a)l|=(d^rE)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const d of a)l|=d*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const d=BigInt(Math.pow(10,t)),p=l/d,h=l%d;return Ye(p)+Ye(h)/Ye(d)}return Ye(l)}function Fa(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return wc(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return wc(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${wc(t)}`}function sE(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Fa(n)}function wc(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class ld{static new(t,e){switch(e){case!0:return new zs(t);case!1:return new Hs(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new zs(t)}return t.byteLength===16?new Na(t):new Hs(t)}static signed(t){return new zs(t)}static unsigned(t){return new Hs(t)}static decimal(t){return new Na(t)}constructor(t,e){return ld.new(t,e)}}var Tp,Ip,Rp,Cp,Dp,Lp,Pp,Np,Fp,Up,Op,Bp,Vp,zp,Hp,kp,Gp,Wp,Zp,Xp,Yp,qp;class Pt{static isNull(t){return t?.typeId===L.Null}static isInt(t){return t?.typeId===L.Int}static isFloat(t){return t?.typeId===L.Float}static isBinary(t){return t?.typeId===L.Binary}static isLargeBinary(t){return t?.typeId===L.LargeBinary}static isUtf8(t){return t?.typeId===L.Utf8}static isLargeUtf8(t){return t?.typeId===L.LargeUtf8}static isBool(t){return t?.typeId===L.Bool}static isDecimal(t){return t?.typeId===L.Decimal}static isDate(t){return t?.typeId===L.Date}static isTime(t){return t?.typeId===L.Time}static isTimestamp(t){return t?.typeId===L.Timestamp}static isInterval(t){return t?.typeId===L.Interval}static isDuration(t){return t?.typeId===L.Duration}static isList(t){return t?.typeId===L.List}static isStruct(t){return t?.typeId===L.Struct}static isUnion(t){return t?.typeId===L.Union}static isFixedSizeBinary(t){return t?.typeId===L.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===L.FixedSizeList}static isMap(t){return t?.typeId===L.Map}static isDictionary(t){return t?.typeId===L.Dictionary}static isDenseUnion(t){return Pt.isUnion(t)&&t.mode===wn.Dense}static isSparseUnion(t){return Pt.isUnion(t)&&t.mode===wn.Sparse}constructor(t){this.typeId=t}}Tp=Symbol.toStringTag;Pt[Tp]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Pt.prototype);class Nr extends Pt{constructor(){super(L.Null)}toString(){return"Null"}}Ip=Symbol.toStringTag;Nr[Ip]=(n=>n[Symbol.toStringTag]="Null")(Nr.prototype);class ss extends Pt{constructor(t,e){super(L.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Rp=Symbol.toStringTag;ss[Rp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(ss.prototype);class Ua extends ss{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ua.prototype,"ArrayType",{value:Int32Array});class $o extends Pt{constructor(t){super(L.Float),this.precision=t}get ArrayType(){switch(this.precision){case An.HALF:return Uint16Array;case An.SINGLE:return Float32Array;case An.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Cp=Symbol.toStringTag;$o[Cp]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))($o.prototype);class tl extends Pt{constructor(){super(L.Binary)}toString(){return"Binary"}}Dp=Symbol.toStringTag;tl[Dp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(tl.prototype);class el extends Pt{constructor(){super(L.LargeBinary)}toString(){return"LargeBinary"}}Lp=Symbol.toStringTag;el[Lp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(el.prototype);class nl extends Pt{constructor(){super(L.Utf8)}toString(){return"Utf8"}}Pp=Symbol.toStringTag;nl[Pp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(nl.prototype);class il extends Pt{constructor(){super(L.LargeUtf8)}toString(){return"LargeUtf8"}}Np=Symbol.toStringTag;il[Np]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(il.prototype);class rl extends Pt{constructor(){super(L.Bool)}toString(){return"Bool"}}Fp=Symbol.toStringTag;rl[Fp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(rl.prototype);class sl extends Pt{constructor(t,e,i=128){super(L.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}Up=Symbol.toStringTag;sl[Up]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(sl.prototype);class al extends Pt{constructor(t){super(L.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${ui[this.unit]}>`}get ArrayType(){return this.unit===ui.DAY?Int32Array:BigInt64Array}}Op=Symbol.toStringTag;al[Op]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(al.prototype);class ol extends Pt{constructor(t,e){super(L.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Xt[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Bp=Symbol.toStringTag;ol[Bp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(ol.prototype);class ll extends Pt{constructor(t,e){super(L.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Xt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Vp=Symbol.toStringTag;ll[Vp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(ll.prototype);class cl extends Pt{constructor(t){super(L.Interval),this.unit=t}toString(){return`Interval<${Zi[this.unit]}>`}}zp=Symbol.toStringTag;cl[zp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(cl.prototype);class ul extends Pt{constructor(t){super(L.Duration),this.unit=t}toString(){return`Duration<${Xt[this.unit]}>`}}Hp=Symbol.toStringTag;ul[Hp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(ul.prototype);class dl extends Pt{constructor(t){super(L.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}kp=Symbol.toStringTag;dl[kp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(dl.prototype);class Pn extends Pt{constructor(t){super(L.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Gp=Symbol.toStringTag;Pn[Gp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Pn.prototype);class hl extends Pt{constructor(t,e,i){super(L.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}Wp=Symbol.toStringTag;hl[Wp]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(hl.prototype);class fl extends Pt{constructor(t){super(L.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}Zp=Symbol.toStringTag;fl[Zp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(fl.prototype);class pl extends Pt{constructor(t,e){super(L.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}Xp=Symbol.toStringTag;pl[Xp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(pl.prototype);class ml extends Pt{constructor(t,e=!1){var i,r,s;if(super(L.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Yp=Symbol.toStringTag;ml[Yp]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(ml.prototype);const aE=(n=>()=>++n)(-1);class Js extends Pt{constructor(t,e,i,r){super(L.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?aE():Ye(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}qp=Symbol.toStringTag;Js[qp]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Js.prototype);function ir(n){const t=n;switch(n.typeId){case L.Decimal:return n.bitWidth/32;case L.Interval:return 1+t.unit;case L.FixedSizeList:return t.listSize;case L.FixedSizeBinary:return t.byteWidth;default:return 1}}class ge{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return oE(this,t,e)}getVisitFnByTypeId(t,e=!0){return Ls(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function oE(n,t,e=!0){return typeof t=="number"?Ls(n,t,e):typeof t=="string"&&t in L?Ls(n,L[t],e):t&&t instanceof Pt?Ls(n,tf(t),e):t?.type&&t.type instanceof Pt?Ls(n,tf(t.type),e):Ls(n,L.NONE,e)}function Ls(n,t,e=!0){let i=null;switch(t){case L.Null:i=n.visitNull;break;case L.Bool:i=n.visitBool;break;case L.Int:i=n.visitInt;break;case L.Int8:i=n.visitInt8||n.visitInt;break;case L.Int16:i=n.visitInt16||n.visitInt;break;case L.Int32:i=n.visitInt32||n.visitInt;break;case L.Int64:i=n.visitInt64||n.visitInt;break;case L.Uint8:i=n.visitUint8||n.visitInt;break;case L.Uint16:i=n.visitUint16||n.visitInt;break;case L.Uint32:i=n.visitUint32||n.visitInt;break;case L.Uint64:i=n.visitUint64||n.visitInt;break;case L.Float:i=n.visitFloat;break;case L.Float16:i=n.visitFloat16||n.visitFloat;break;case L.Float32:i=n.visitFloat32||n.visitFloat;break;case L.Float64:i=n.visitFloat64||n.visitFloat;break;case L.Utf8:i=n.visitUtf8;break;case L.LargeUtf8:i=n.visitLargeUtf8;break;case L.Binary:i=n.visitBinary;break;case L.LargeBinary:i=n.visitLargeBinary;break;case L.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case L.Date:i=n.visitDate;break;case L.DateDay:i=n.visitDateDay||n.visitDate;break;case L.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case L.Timestamp:i=n.visitTimestamp;break;case L.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case L.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case L.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case L.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case L.Time:i=n.visitTime;break;case L.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case L.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case L.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case L.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case L.Decimal:i=n.visitDecimal;break;case L.List:i=n.visitList;break;case L.Struct:i=n.visitStruct;break;case L.Union:i=n.visitUnion;break;case L.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case L.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case L.Dictionary:i=n.visitDictionary;break;case L.Interval:i=n.visitInterval;break;case L.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case L.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case L.Duration:i=n.visitDuration;break;case L.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case L.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case L.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case L.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case L.FixedSizeList:i=n.visitFixedSizeList;break;case L.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${L[t]}'`)}function tf(n){switch(n.typeId){case L.Null:return L.Null;case L.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?L.Int8:L.Uint8;case 16:return e?L.Int16:L.Uint16;case 32:return e?L.Int32:L.Uint32;case 64:return e?L.Int64:L.Uint64}return L.Int}case L.Float:switch(n.precision){case An.HALF:return L.Float16;case An.SINGLE:return L.Float32;case An.DOUBLE:return L.Float64}return L.Float;case L.Binary:return L.Binary;case L.LargeBinary:return L.LargeBinary;case L.Utf8:return L.Utf8;case L.LargeUtf8:return L.LargeUtf8;case L.Bool:return L.Bool;case L.Decimal:return L.Decimal;case L.Time:switch(n.unit){case Xt.SECOND:return L.TimeSecond;case Xt.MILLISECOND:return L.TimeMillisecond;case Xt.MICROSECOND:return L.TimeMicrosecond;case Xt.NANOSECOND:return L.TimeNanosecond}return L.Time;case L.Timestamp:switch(n.unit){case Xt.SECOND:return L.TimestampSecond;case Xt.MILLISECOND:return L.TimestampMillisecond;case Xt.MICROSECOND:return L.TimestampMicrosecond;case Xt.NANOSECOND:return L.TimestampNanosecond}return L.Timestamp;case L.Date:switch(n.unit){case ui.DAY:return L.DateDay;case ui.MILLISECOND:return L.DateMillisecond}return L.Date;case L.Interval:switch(n.unit){case Zi.DAY_TIME:return L.IntervalDayTime;case Zi.YEAR_MONTH:return L.IntervalYearMonth}return L.Interval;case L.Duration:switch(n.unit){case Xt.SECOND:return L.DurationSecond;case Xt.MILLISECOND:return L.DurationMillisecond;case Xt.MICROSECOND:return L.DurationMicrosecond;case Xt.NANOSECOND:return L.DurationNanosecond}return L.Duration;case L.Map:return L.Map;case L.List:return L.List;case L.Struct:return L.Struct;case L.Union:switch(n.mode){case wn.Dense:return L.DenseUnion;case wn.Sparse:return L.SparseUnion}return L.Union;case L.FixedSizeBinary:return L.FixedSizeBinary;case L.FixedSizeList:return L.FixedSizeList;case L.Dictionary:return L.Dictionary}throw new Error(`Unrecognized type '${L[n.typeId]}'`)}ge.prototype.visitInt8=null;ge.prototype.visitInt16=null;ge.prototype.visitInt32=null;ge.prototype.visitInt64=null;ge.prototype.visitUint8=null;ge.prototype.visitUint16=null;ge.prototype.visitUint32=null;ge.prototype.visitUint64=null;ge.prototype.visitFloat16=null;ge.prototype.visitFloat32=null;ge.prototype.visitFloat64=null;ge.prototype.visitDateDay=null;ge.prototype.visitDateMillisecond=null;ge.prototype.visitTimestampSecond=null;ge.prototype.visitTimestampMillisecond=null;ge.prototype.visitTimestampMicrosecond=null;ge.prototype.visitTimestampNanosecond=null;ge.prototype.visitTimeSecond=null;ge.prototype.visitTimeMillisecond=null;ge.prototype.visitTimeMicrosecond=null;ge.prototype.visitTimeNanosecond=null;ge.prototype.visitDenseUnion=null;ge.prototype.visitSparseUnion=null;ge.prototype.visitIntervalDayTime=null;ge.prototype.visitIntervalYearMonth=null;ge.prototype.visitDuration=null;ge.prototype.visitDurationSecond=null;ge.prototype.visitDurationMillisecond=null;ge.prototype.visitDurationMicrosecond=null;ge.prototype.visitDurationNanosecond=null;const jp=new Float64Array(1),Es=new Uint32Array(jp.buffer);function Kp(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function lE(n){if(n!==n)return 32256;jp[0]=n;const t=(Es[1]&2147483648)>>16&65535;let e=Es[1]&2146435072,i=0;return e>=1089470464?Es[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Es[1]&1048575)>>10):e<=1056964608?(i=1048576+(Es[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Es[1]&1048575)+512>>10),t|e|i&65535}class Yt extends ge{}function Kt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const cE=(n,t,e)=>{n[t]=Math.floor(e/864e5)},Jp=(n,t,e,i)=>{if(e+1<t.length){const r=Ye(t[e]),s=Ye(t[e+1]);n.set(i.subarray(0,s-r),r)}},uE=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},pr=({values:n},t,e)=>{n[t]=e},cd=({values:n},t,e)=>{n[t]=e},Qp=({values:n},t,e)=>{n[t]=lE(e)},dE=(n,t,e)=>{switch(n.type.precision){case An.HALF:return Qp(n,t,e);case An.SINGLE:case An.DOUBLE:return cd(n,t,e)}},$p=({values:n},t,e)=>{cE(n,t,e.valueOf())},t0=({values:n},t,e)=>{n[t]=BigInt(e)},hE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},e0=({values:n,valueOffsets:t},e,i)=>Jp(n,t,e,i),n0=({values:n,valueOffsets:t},e,i)=>Jp(n,t,e,sd(i)),fE=(n,t,e)=>{n.type.unit===ui.DAY?$p(n,t,e):t0(n,t,e)},i0=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},r0=({values:n},t,e)=>{n[t]=BigInt(e)},s0=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},a0=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},pE=(n,t,e)=>{switch(n.type.unit){case Xt.SECOND:return i0(n,t,e);case Xt.MILLISECOND:return r0(n,t,e);case Xt.MICROSECOND:return s0(n,t,e);case Xt.NANOSECOND:return a0(n,t,e)}},o0=({values:n},t,e)=>{n[t]=e},l0=({values:n},t,e)=>{n[t]=e},c0=({values:n},t,e)=>{n[t]=e},u0=({values:n},t,e)=>{n[t]=e},mE=(n,t,e)=>{switch(n.type.unit){case Xt.SECOND:return o0(n,t,e);case Xt.MILLISECOND:return l0(n,t,e);case Xt.MICROSECOND:return c0(n,t,e);case Xt.NANOSECOND:return u0(n,t,e)}},gE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},_E=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=di.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},vE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=di.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},yE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),xE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),SE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),bE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),ME=(n,t,e)=>{const i=n.type.children.map(s=>di.getVisitFn(s.type)),r=e instanceof Map?SE(t,e):e instanceof Pe?xE(t,e):Array.isArray(e)?yE(t,e):bE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},EE=(n,t,e)=>{n.type.mode===wn.Dense?d0(n,t,e):h0(n,t,e)},d0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];di.visit(r,n.valueOffsets[t],e)},h0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];di.visit(r,t,e)},AE=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},wE=(n,t,e)=>{n.type.unit===Zi.DAY_TIME?f0(n,t,e):p0(n,t,e)},f0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},p0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},m0=({values:n},t,e)=>{n[t]=e},g0=({values:n},t,e)=>{n[t]=e},_0=({values:n},t,e)=>{n[t]=e},v0=({values:n},t,e)=>{n[t]=e},TE=(n,t,e)=>{switch(n.type.unit){case Xt.SECOND:return m0(n,t,e);case Xt.MILLISECOND:return g0(n,t,e);case Xt.MICROSECOND:return _0(n,t,e);case Xt.NANOSECOND:return v0(n,t,e)}},IE=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=di.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Yt.prototype.visitBool=Kt(uE);Yt.prototype.visitInt=Kt(pr);Yt.prototype.visitInt8=Kt(pr);Yt.prototype.visitInt16=Kt(pr);Yt.prototype.visitInt32=Kt(pr);Yt.prototype.visitInt64=Kt(pr);Yt.prototype.visitUint8=Kt(pr);Yt.prototype.visitUint16=Kt(pr);Yt.prototype.visitUint32=Kt(pr);Yt.prototype.visitUint64=Kt(pr);Yt.prototype.visitFloat=Kt(dE);Yt.prototype.visitFloat16=Kt(Qp);Yt.prototype.visitFloat32=Kt(cd);Yt.prototype.visitFloat64=Kt(cd);Yt.prototype.visitUtf8=Kt(n0);Yt.prototype.visitLargeUtf8=Kt(n0);Yt.prototype.visitBinary=Kt(e0);Yt.prototype.visitLargeBinary=Kt(e0);Yt.prototype.visitFixedSizeBinary=Kt(hE);Yt.prototype.visitDate=Kt(fE);Yt.prototype.visitDateDay=Kt($p);Yt.prototype.visitDateMillisecond=Kt(t0);Yt.prototype.visitTimestamp=Kt(pE);Yt.prototype.visitTimestampSecond=Kt(i0);Yt.prototype.visitTimestampMillisecond=Kt(r0);Yt.prototype.visitTimestampMicrosecond=Kt(s0);Yt.prototype.visitTimestampNanosecond=Kt(a0);Yt.prototype.visitTime=Kt(mE);Yt.prototype.visitTimeSecond=Kt(o0);Yt.prototype.visitTimeMillisecond=Kt(l0);Yt.prototype.visitTimeMicrosecond=Kt(c0);Yt.prototype.visitTimeNanosecond=Kt(u0);Yt.prototype.visitDecimal=Kt(gE);Yt.prototype.visitList=Kt(_E);Yt.prototype.visitStruct=Kt(ME);Yt.prototype.visitUnion=Kt(EE);Yt.prototype.visitDenseUnion=Kt(d0);Yt.prototype.visitSparseUnion=Kt(h0);Yt.prototype.visitDictionary=Kt(AE);Yt.prototype.visitInterval=Kt(wE);Yt.prototype.visitIntervalDayTime=Kt(f0);Yt.prototype.visitIntervalYearMonth=Kt(p0);Yt.prototype.visitDuration=Kt(TE);Yt.prototype.visitDurationSecond=Kt(m0);Yt.prototype.visitDurationMillisecond=Kt(g0);Yt.prototype.visitDurationMicrosecond=Kt(_0);Yt.prototype.visitDurationNanosecond=Kt(v0);Yt.prototype.visitFixedSizeList=Kt(IE);Yt.prototype.visitMap=Kt(vE);const di=new Yt,gi=Symbol.for("parent"),ks=Symbol.for("rowIndex");class ud{constructor(t,e){return this[gi]=t,this[ks]=e,new Proxy(this,new CE)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[ks],e=this[gi],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=Wn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Pa(t)}: ${Pa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new RE(this[gi],this[ks])}}class RE{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,Wn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(ud.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[gi]:{writable:!0,enumerable:!1,configurable:!1,value:null},[ks]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class CE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[gi].type.children.map(e=>e.name)}has(t,e){return t[gi].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[gi].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[gi].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=Wn.visit(t[gi].children[i],t[ks]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[gi].type.children.findIndex(s=>s.name===e);return r!==-1?(di.visit(t[gi].children[r],t[ks],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class kt extends ge{}function qt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const DE=(n,t)=>864e5*n[t],LE=(n,t)=>null,y0=(n,t,e)=>{if(e+1>=t.length)return null;const i=Ye(t[e]),r=Ye(t[e+1]);return n.subarray(i,r)},PE=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},x0=({values:n},t)=>DE(n,t),S0=({values:n},t)=>Ye(n[t]),Br=({stride:n,values:t},e)=>t[n*e],NE=({stride:n,values:t},e)=>Kp(t[n*e]),b0=({values:n},t)=>n[t],FE=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),M0=({values:n,valueOffsets:t},e)=>y0(n,t,e),E0=({values:n,valueOffsets:t},e)=>{const i=y0(n,t,e);return i!==null?Du(i):null},UE=({values:n},t)=>n[t],OE=({type:n,values:t},e)=>n.precision!==An.HALF?t[e]:Kp(t[e]),BE=(n,t)=>n.type.unit===ui.DAY?x0(n,t):S0(n,t),A0=({values:n},t)=>1e3*Ye(n[t]),w0=({values:n},t)=>Ye(n[t]),T0=({values:n},t)=>Ap(n[t],BigInt(1e3)),I0=({values:n},t)=>Ap(n[t],BigInt(1e6)),VE=(n,t)=>{switch(n.type.unit){case Xt.SECOND:return A0(n,t);case Xt.MILLISECOND:return w0(n,t);case Xt.MICROSECOND:return T0(n,t);case Xt.NANOSECOND:return I0(n,t)}},R0=({values:n},t)=>n[t],C0=({values:n},t)=>n[t],D0=({values:n},t)=>n[t],L0=({values:n},t)=>n[t],zE=(n,t)=>{switch(n.type.unit){case Xt.SECOND:return R0(n,t);case Xt.MILLISECOND:return C0(n,t);case Xt.MICROSECOND:return D0(n,t);case Xt.NANOSECOND:return L0(n,t)}},HE=({values:n,stride:t},e)=>ld.decimal(n.subarray(t*e,t*(e+1))),kE=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new Pe([l])},GE=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new dd(a.slice(r,s-r))},WE=(n,t)=>new ud(n,t),ZE=(n,t)=>n.type.mode===wn.Dense?P0(n,t):N0(n,t),P0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Wn.visit(i,n.valueOffsets[t])},N0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Wn.visit(i,t)},XE=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},YE=(n,t)=>n.type.unit===Zi.DAY_TIME?F0(n,t):U0(n,t),F0=({values:n},t)=>n.subarray(2*t,2*(t+1)),U0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},O0=({values:n},t)=>n[t],B0=({values:n},t)=>n[t],V0=({values:n},t)=>n[t],z0=({values:n},t)=>n[t],qE=(n,t)=>{switch(n.type.unit){case Xt.SECOND:return O0(n,t);case Xt.MILLISECOND:return B0(n,t);case Xt.MICROSECOND:return V0(n,t);case Xt.NANOSECOND:return z0(n,t)}},jE=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new Pe([s])};kt.prototype.visitNull=qt(LE);kt.prototype.visitBool=qt(PE);kt.prototype.visitInt=qt(UE);kt.prototype.visitInt8=qt(Br);kt.prototype.visitInt16=qt(Br);kt.prototype.visitInt32=qt(Br);kt.prototype.visitInt64=qt(b0);kt.prototype.visitUint8=qt(Br);kt.prototype.visitUint16=qt(Br);kt.prototype.visitUint32=qt(Br);kt.prototype.visitUint64=qt(b0);kt.prototype.visitFloat=qt(OE);kt.prototype.visitFloat16=qt(NE);kt.prototype.visitFloat32=qt(Br);kt.prototype.visitFloat64=qt(Br);kt.prototype.visitUtf8=qt(E0);kt.prototype.visitLargeUtf8=qt(E0);kt.prototype.visitBinary=qt(M0);kt.prototype.visitLargeBinary=qt(M0);kt.prototype.visitFixedSizeBinary=qt(FE);kt.prototype.visitDate=qt(BE);kt.prototype.visitDateDay=qt(x0);kt.prototype.visitDateMillisecond=qt(S0);kt.prototype.visitTimestamp=qt(VE);kt.prototype.visitTimestampSecond=qt(A0);kt.prototype.visitTimestampMillisecond=qt(w0);kt.prototype.visitTimestampMicrosecond=qt(T0);kt.prototype.visitTimestampNanosecond=qt(I0);kt.prototype.visitTime=qt(zE);kt.prototype.visitTimeSecond=qt(R0);kt.prototype.visitTimeMillisecond=qt(C0);kt.prototype.visitTimeMicrosecond=qt(D0);kt.prototype.visitTimeNanosecond=qt(L0);kt.prototype.visitDecimal=qt(HE);kt.prototype.visitList=qt(kE);kt.prototype.visitStruct=qt(WE);kt.prototype.visitUnion=qt(ZE);kt.prototype.visitDenseUnion=qt(P0);kt.prototype.visitSparseUnion=qt(N0);kt.prototype.visitDictionary=qt(XE);kt.prototype.visitInterval=qt(YE);kt.prototype.visitIntervalDayTime=qt(F0);kt.prototype.visitIntervalYearMonth=qt(U0);kt.prototype.visitDuration=qt(qE);kt.prototype.visitDurationSecond=qt(O0);kt.prototype.visitDurationMillisecond=qt(B0);kt.prototype.visitDurationMicrosecond=qt(V0);kt.prototype.visitDurationNanosecond=qt(z0);kt.prototype.visitFixedSizeList=qt(jE);kt.prototype.visitMap=qt(GE);const Wn=new kt,Ps=Symbol.for("keys"),Gs=Symbol.for("vals"),Ns=Symbol.for("kKeysAsStrings"),Ou=Symbol.for("_kKeysAsStrings");class dd{constructor(t){return this[Ps]=new Pe([t.children[0]]).memoize(),this[Gs]=t.children[1],new Proxy(this,new JE)}get[Ns](){return this[Ou]||(this[Ou]=Array.from(this[Ps].toArray(),String))}[Symbol.iterator](){return new KE(this[Ps],this[Gs])}get size(){return this[Ps].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ps],e=this[Gs],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=Wn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Pa(t)}: ${Pa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class KE{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),Wn.visit(this.vals,t)]})}}class JE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Ns]}has(t,e){return t[Ns].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Ns].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Ns].indexOf(e);if(i!==-1){const r=Wn.visit(Reflect.get(t,Gs),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Ns].indexOf(e);return r!==-1?(di.visit(Reflect.get(t,Gs),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(dd.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Ps]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Gs]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Ou]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let ef;function H0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(ef=s,s=a,a=ef),a>r&&(a=r),i?i(n,s,a):[s,a]}const hd=(n,t)=>n<0?t+n:n,nf=n=>n!==n;function ra(n){if(typeof n!=="object"||n===null)return nf(n)?nf:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?jM(n,e):!1:n instanceof Map?$E(n):Array.isArray(n)?QE(n):n instanceof Pe?tA(n):eA(n,!0)}function QE(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ra(n[e]);return Ll(t)}function $E(n){let t=-1;const e=[];for(const i of n.values())e[++t]=ra(i);return Ll(e)}function tA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ra(n.get(e));return Ll(t)}function eA(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=ra(n[e[r]]);return Ll(i,e)}function Ll(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return nA(n,e);case Map:return rf(n,e,e.keys());case dd:case ud:case Object:case void 0:return rf(n,e,t||Object.keys(e))}return e instanceof Pe?iA(n,e):!1}}function nA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function iA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function rf(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),d=r.next();for(;a<o&&!c.done&&!d.done&&!l.done&&!(c.value!==d.value||!n[a](l.value));++a,c=i.next(),d=r.next(),l=s.next());return a===o&&c.done&&d.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function k0(n,t,e,i){return(e&1<<i)!==0}function rA(n,t,e,i){return(e&1<<i)>>i}function gl(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):_l(new fd(e,n,t,null,k0)).subarray(0,i)),r}return e}function _l(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class fd{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Bu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new fd(n,t,e-t,n,rA))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Bu(n,t,r)+Bu(n,i,e)+sA(n,r>>3,i-r>>3)}function sA(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=Tc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=Tc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=Tc(s.getUint8(r)),r+=1;return i}function Tc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const aA=-1;class Oe{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Pt.isSparseUnion(t)?this.children.some(e=>e.nullable):Pt.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Pt.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=aA&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Bu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Oe?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=ir(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Pt.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===wn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Pt.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===wn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,d=l>>3;(!s||s.byteLength<=d)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(gl(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[d];i=(p&c)!==0,s[d]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Oe(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===L.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(gl(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[nr.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[nr.TYPE])&&(a[nr.TYPE]=s.subarray(t,t+e)),(s=a[nr.OFFSET])&&(a[nr.OFFSET]=s.subarray(t,t+e+1))||(s=a[nr.DATA])&&(a[nr.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Oe.prototype.children=Object.freeze([]);class wa extends ge{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Oe(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.data),s=Me(t.nullBitmap),a=fa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.data),s=Me(t.nullBitmap),a=Wh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.data),s=Me(t.nullBitmap),a=fa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.data),s=Me(t.nullBitmap),a=Wh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=Me(t.nullBitmap),a=fa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Me(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=ze(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Pt.isSparseUnion(e))return new Oe(e,i,a,o,[void 0,void 0,void 0,s],r);const l=fa(t.valueOffsets);return new Oe(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.indices.ArrayType,t.data),{["dictionary"]:a=new Pe([new wa().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=Me(t.nullBitmap),s=ze(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new wa().visit({type:e.valueType})}=t,s=Me(t.nullBitmap),{["length"]:a=r.length/ir(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Oe(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new wa().visit({type:e.childType})}=t,s=Me(t.nullBitmap),a=fa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Oe(e,i,o,l,[a,void 0,s],[r])}}const oA=new wa;function ve(n){return oA.visit(n)}class sf{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function lA(n){return n.some(t=>t.nullable)}function G0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function W0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function Z0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const d=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(d,p-d))}return r.length===0&&r.push(n[0].slice(0,0)),r}function pd(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function md(n,t){return n.getValid(t)}function vl(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return pd(i,this._offsets,e,t)}}function X0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=pd(s,this._offsets,i,e);return t=void 0,a}}function Y0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,d=i.length;++c<d;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):pd(s,this._offsets,r,e);return t=void 0,a}}class Gt extends ge{}function cA(n,t){return t===null&&n.length>0?0:-1}function uA(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new fd(e,n.offset+(t||0),n.length,e,k0)){if(!r)return i;++i}return-1}function Qt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case L.Union:break;case L.Dictionary:break;default:return uA(n,e)}const i=Wn.getVisitFn(n),r=ra(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function q0(n,t,e){const i=Wn.getVisitFn(n),r=ra(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Gt.prototype.visitNull=cA;Gt.prototype.visitBool=Qt;Gt.prototype.visitInt=Qt;Gt.prototype.visitInt8=Qt;Gt.prototype.visitInt16=Qt;Gt.prototype.visitInt32=Qt;Gt.prototype.visitInt64=Qt;Gt.prototype.visitUint8=Qt;Gt.prototype.visitUint16=Qt;Gt.prototype.visitUint32=Qt;Gt.prototype.visitUint64=Qt;Gt.prototype.visitFloat=Qt;Gt.prototype.visitFloat16=Qt;Gt.prototype.visitFloat32=Qt;Gt.prototype.visitFloat64=Qt;Gt.prototype.visitUtf8=Qt;Gt.prototype.visitLargeUtf8=Qt;Gt.prototype.visitBinary=Qt;Gt.prototype.visitLargeBinary=Qt;Gt.prototype.visitFixedSizeBinary=Qt;Gt.prototype.visitDate=Qt;Gt.prototype.visitDateDay=Qt;Gt.prototype.visitDateMillisecond=Qt;Gt.prototype.visitTimestamp=Qt;Gt.prototype.visitTimestampSecond=Qt;Gt.prototype.visitTimestampMillisecond=Qt;Gt.prototype.visitTimestampMicrosecond=Qt;Gt.prototype.visitTimestampNanosecond=Qt;Gt.prototype.visitTime=Qt;Gt.prototype.visitTimeSecond=Qt;Gt.prototype.visitTimeMillisecond=Qt;Gt.prototype.visitTimeMicrosecond=Qt;Gt.prototype.visitTimeNanosecond=Qt;Gt.prototype.visitDecimal=Qt;Gt.prototype.visitList=Qt;Gt.prototype.visitStruct=Qt;Gt.prototype.visitUnion=Qt;Gt.prototype.visitDenseUnion=q0;Gt.prototype.visitSparseUnion=q0;Gt.prototype.visitDictionary=Qt;Gt.prototype.visitInterval=Qt;Gt.prototype.visitIntervalDayTime=Qt;Gt.prototype.visitIntervalYearMonth=Qt;Gt.prototype.visitDuration=Qt;Gt.prototype.visitDurationSecond=Qt;Gt.prototype.visitDurationMillisecond=Qt;Gt.prototype.visitDurationMicrosecond=Qt;Gt.prototype.visitDurationNanosecond=Qt;Gt.prototype.visitFixedSizeList=Qt;Gt.prototype.visitMap=Qt;const yl=new Gt;class Wt extends ge{}function jt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Pt.isInt(t)&&t.bitWidth!==64||Pt.isTime(t)&&t.bitWidth!==64||Pt.isFloat(t)&&t.precision!==An.HALF))return new sf(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new sf(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new dA(a)})}class dA{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}Wt.prototype.visitNull=jt;Wt.prototype.visitBool=jt;Wt.prototype.visitInt=jt;Wt.prototype.visitInt8=jt;Wt.prototype.visitInt16=jt;Wt.prototype.visitInt32=jt;Wt.prototype.visitInt64=jt;Wt.prototype.visitUint8=jt;Wt.prototype.visitUint16=jt;Wt.prototype.visitUint32=jt;Wt.prototype.visitUint64=jt;Wt.prototype.visitFloat=jt;Wt.prototype.visitFloat16=jt;Wt.prototype.visitFloat32=jt;Wt.prototype.visitFloat64=jt;Wt.prototype.visitUtf8=jt;Wt.prototype.visitLargeUtf8=jt;Wt.prototype.visitBinary=jt;Wt.prototype.visitLargeBinary=jt;Wt.prototype.visitFixedSizeBinary=jt;Wt.prototype.visitDate=jt;Wt.prototype.visitDateDay=jt;Wt.prototype.visitDateMillisecond=jt;Wt.prototype.visitTimestamp=jt;Wt.prototype.visitTimestampSecond=jt;Wt.prototype.visitTimestampMillisecond=jt;Wt.prototype.visitTimestampMicrosecond=jt;Wt.prototype.visitTimestampNanosecond=jt;Wt.prototype.visitTime=jt;Wt.prototype.visitTimeSecond=jt;Wt.prototype.visitTimeMillisecond=jt;Wt.prototype.visitTimeMicrosecond=jt;Wt.prototype.visitTimeNanosecond=jt;Wt.prototype.visitDecimal=jt;Wt.prototype.visitList=jt;Wt.prototype.visitStruct=jt;Wt.prototype.visitUnion=jt;Wt.prototype.visitDenseUnion=jt;Wt.prototype.visitSparseUnion=jt;Wt.prototype.visitDictionary=jt;Wt.prototype.visitInterval=jt;Wt.prototype.visitIntervalDayTime=jt;Wt.prototype.visitIntervalYearMonth=jt;Wt.prototype.visitDuration=jt;Wt.prototype.visitDurationSecond=jt;Wt.prototype.visitDurationMillisecond=jt;Wt.prototype.visitDurationMicrosecond=jt;Wt.prototype.visitDurationNanosecond=jt;Wt.prototype.visitFixedSizeList=jt;Wt.prototype.visitMap=jt;const gd=new Wt;var j0;const K0={},J0={};class Pe{constructor(t){var e,i,r;const s=t[0]instanceof Pe?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Oe)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=K0[a.typeId],d=s[0];this.isValid=p=>md(d,p),this.get=p=>o(d,p),this.set=(p,h)=>l(d,p,h),this.indexOf=p=>c(d,p),this._offsets=[0,d.length];break}default:Object.setPrototypeOf(this,J0[a.typeId]),this._offsets=W0(s);break}this.data=s,this.type=a,this.stride=ir(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return lA(this.data)}get nullCount(){return G0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${L[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(hd(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return gd.visit(this)}concat(...t){return new Pe(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new Pe(H0(this,t,e,({data:i,_offsets:r},s,a)=>Z0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case L.Int:case L.Float:case L.Decimal:case L.Time:case L.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new Pe(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Pt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Pt.isDictionary(this.type)){const t=new xl(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Pe(e)}return new xl(this)}unmemoize(){if(Pt.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Pe(e)}return this}}j0=Symbol.toStringTag;Pe[j0]=(n=>{n.type=Pt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(L).map(e=>L[e]).filter(e=>typeof e=="number"&&e!==L.NONE);for(const e of t){const i=Wn.getVisitFnByTypeId(e),r=di.getVisitFnByTypeId(e),s=yl.getVisitFnByTypeId(e);K0[e]={get:i,set:r,indexOf:s},J0[e]=Object.create(n,{isValid:{value:vl(md)},get:{value:vl(Wn.getVisitFnByTypeId(e))},set:{value:X0(di.getVisitFnByTypeId(e))},indexOf:{value:Y0(yl.getVisitFnByTypeId(e))}})}return"Vector"})(Pe.prototype);class xl extends Pe{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new xl(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new Pe(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class Vu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class qn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Fe),(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):an.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ii).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Vu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new Vu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new hn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,an.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class Ne{constructor(t=[],e,i,r=an.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=zu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new Ne(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new Ne(e,this.metadata)}assign(...t){const e=t[0]instanceof Ne?t[0]:Array.isArray(t[0])?new Ne(t[0]):new Ne(t),i=[...this.fields],r=Eo(Eo(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:Eo(Eo(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=zu(s,new Map);return new Ne([...i,...s],r,new Map([...this.dictionaries,...a]))}}Ne.prototype.fields=null;Ne.prototype.metadata=null;Ne.prototype.dictionaries=null;class Je{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Je(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Je.new(e,i,r,s)}}Je.prototype.type=null;Je.prototype.name=null;Je.prototype.nullable=null;Je.prototype.metadata=null;function Eo(n,t){return new Map([...n||new Map,...t||new Map])}function zu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Pt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&zu(s.children,t)}return t}var hA=Sp,fA=js;class Oa{static decode(t){t=new fA(Me(t));const e=qn.getRootAsFooter(t),i=Ne.decode(e.schema(),new Map,e.version());return new pA(i,e)}static encode(t){const e=new hA,i=Ne.encode(e,t.schema);qn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Fr.encode(e,a);const r=e.endVector();qn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Fr.encode(e,a);const s=e.endVector();return qn.startFooter(e),qn.addSchema(e,i),qn.addVersion(e,an.V5),qn.addRecordBatches(e,r),qn.addDictionaries(e,s),qn.finishFooterBuffer(e,qn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=an.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class pA extends Oa{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Fr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Fr.decode(e)}return null}}class Fr{static decode(t){return new Fr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return Vu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=Ye(i),this.bodyLength=Ye(e)}}const Qe=Object.freeze({done:!0,value:void 0});class af{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class _d{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class mA extends _d{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return $t(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Qe);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return ii.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return ii.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return $t(this,void 0,void 0,function*(){return yield this.abort(t),Qe})}return(t){return $t(this,void 0,void 0,function*(){return yield this.close(),Qe})}read(t){return $t(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return $t(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Qe)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class zo extends mA{write(t){if((t=Me(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Du(this.toUint8Array(!0)):this.toUint8Array(!1).then(Du)}toUint8Array(t=!1){return t?Wi(this._values)[0]:$t(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=ns(this),d;d=yield c.next(),e=d.done,!e;l=!0){s=d.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Wi(a,o)[0]})}}class Sl{constructor(t){t&&(this.source=new gA(ii.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class Qs{constructor(t){t instanceof Qs?this.source=t.source:t instanceof zo?this.source=new Yr(ii.fromAsyncIterable(t)):_p(t)?this.source=new Yr(ii.fromNodeStream(t)):ad(t)?this.source=new Yr(ii.fromDOMStream(t)):gp(t)?this.source=new Yr(ii.fromDOMStream(t.body)):Wa(t)?this.source=new Yr(ii.fromIterable(t)):rs(t)?this.source=new Yr(ii.fromAsyncIterable(t)):ia(t)&&(this.source=new Yr(ii.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class gA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Qe)}return(t){return Object.create(this.source.return&&this.source.return(t)||Qe)}}class Yr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return $t(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return $t(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return $t(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return $t(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return $t(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return $t(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class of extends Sl{constructor(t,e){super(),this.position=0,this.buffer=Me(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class bl extends Qs{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=$t(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return $t(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return $t(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return $t(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return $t(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return $t(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return $t(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return $t(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const _A=65536;function Us(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const $s=8,vd=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class Q0{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?_A:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Us(this.buffer[1])} ${Us(this.buffer[0])}`}}class Be extends Q0{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Be.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Be.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Be(e);for(let s=0;s<i;){const a=$s<i-s?$s:i-s,o=new Be(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Be(new Uint32Array([vd[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Be.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Be(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Be(new Uint32Array(t.buffer)).plus(e)}}class Bn extends Q0{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return Bn.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Bn.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new Bn(e);for(let a=i?1:0;a<r;){const o=$s<r-a?$s:r-a,l=new Bn(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new Bn(new Uint32Array([vd[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Bn.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Bn(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Bn(new Uint32Array(t.buffer)).plus(e)}}class Ri{constructor(t){this.buffer=t}high(){return new Bn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Bn(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Be(new Uint32Array([this.buffer[3],0])),i=new Be(new Uint32Array([this.buffer[2],0])),r=new Be(new Uint32Array([this.buffer[1],0])),s=new Be(new Uint32Array([this.buffer[0],0])),a=new Be(new Uint32Array([t.buffer[3],0])),o=new Be(new Uint32Array([t.buffer[2],0])),l=new Be(new Uint32Array([t.buffer[1],0])),c=new Be(new Uint32Array([t.buffer[0],0]));let d=Be.multiply(s,c);this.buffer[0]=d.low();const p=new Be(new Uint32Array([d.high(),0]));return d=Be.multiply(r,c),p.plus(d),d=Be.multiply(s,l),p.plus(d),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(d)?1:0,this.buffer[2]=p.high(),new Be(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Be.multiply(i,c)).plus(Be.multiply(r,l)).plus(Be.multiply(s,o)),this.buffer[3]+=Be.multiply(e,c).plus(Be.multiply(i,l)).plus(Be.multiply(r,o)).plus(Be.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Us(this.buffer[3])} ${Us(this.buffer[2])} ${Us(this.buffer[1])} ${Us(this.buffer[0])}`}static multiply(t,e){return new Ri(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ri(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return Ri.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return Ri.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new Ri(e);for(let a=i?1:0;a<r;){const o=$s<r-a?$s:r-a,l=new Ri(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new Ri(new Uint32Array([vd[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)Ri.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class $0 extends ge{constructor(t,e,i,r,s=an.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof Je?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return ve({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<an.V5&&this.readNullBitmap(t,i),t.mode===wn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return ve({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class vA extends $0{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):_l(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return ze(Uint8Array,ze(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return ze(Uint8Array,ze(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Pt.isTimestamp(t)||(Pt.isInt(t)||Pt.isTime(t))&&t.bitWidth===64||Pt.isDuration(t)||Pt.isDate(t)&&t.unit===ui.MILLISECOND?ze(Uint8Array,Bn.convertArray(i[e])):Pt.isDecimal(t)?ze(Uint8Array,Ri.convertArray(i[e])):Pt.isBinary(t)||Pt.isLargeBinary(t)||Pt.isFixedSizeBinary(t)?yA(i[e]):Pt.isBool(t)?_l(i[e]):Pt.isUtf8(t)||Pt.isLargeUtf8(t)?sd(i[e].join("")):ze(Uint8Array,ze(t.ArrayType,i[e].map(r=>+r)))}}function yA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Zt extends ge{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Un(n,t){return t instanceof n.constructor}function os(n,t){return n===t||Un(n,t)}function mr(n,t){return n===t||Un(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Pl(n,t){return n===t||Un(n,t)&&n.precision===t.precision}function xA(n,t){return n===t||Un(n,t)&&n.byteWidth===t.byteWidth}function yd(n,t){return n===t||Un(n,t)&&n.unit===t.unit}function Za(n,t){return n===t||Un(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Xa(n,t){return n===t||Un(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function SA(n,t){return n===t||Un(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function bA(n,t){return n===t||Un(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function xd(n,t){return n===t||Un(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Ur.compareManyFields(n.children,t.children)}function MA(n,t){return n===t||Un(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Ur.visit(n.indices,t.indices)&&Ur.visit(n.dictionary,t.dictionary)}function Sd(n,t){return n===t||Un(n,t)&&n.unit===t.unit}function Ya(n,t){return n===t||Un(n,t)&&n.unit===t.unit}function EA(n,t){return n===t||Un(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function AA(n,t){return n===t||Un(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}Zt.prototype.visitNull=os;Zt.prototype.visitBool=os;Zt.prototype.visitInt=mr;Zt.prototype.visitInt8=mr;Zt.prototype.visitInt16=mr;Zt.prototype.visitInt32=mr;Zt.prototype.visitInt64=mr;Zt.prototype.visitUint8=mr;Zt.prototype.visitUint16=mr;Zt.prototype.visitUint32=mr;Zt.prototype.visitUint64=mr;Zt.prototype.visitFloat=Pl;Zt.prototype.visitFloat16=Pl;Zt.prototype.visitFloat32=Pl;Zt.prototype.visitFloat64=Pl;Zt.prototype.visitUtf8=os;Zt.prototype.visitLargeUtf8=os;Zt.prototype.visitBinary=os;Zt.prototype.visitLargeBinary=os;Zt.prototype.visitFixedSizeBinary=xA;Zt.prototype.visitDate=yd;Zt.prototype.visitDateDay=yd;Zt.prototype.visitDateMillisecond=yd;Zt.prototype.visitTimestamp=Za;Zt.prototype.visitTimestampSecond=Za;Zt.prototype.visitTimestampMillisecond=Za;Zt.prototype.visitTimestampMicrosecond=Za;Zt.prototype.visitTimestampNanosecond=Za;Zt.prototype.visitTime=Xa;Zt.prototype.visitTimeSecond=Xa;Zt.prototype.visitTimeMillisecond=Xa;Zt.prototype.visitTimeMicrosecond=Xa;Zt.prototype.visitTimeNanosecond=Xa;Zt.prototype.visitDecimal=os;Zt.prototype.visitList=SA;Zt.prototype.visitStruct=bA;Zt.prototype.visitUnion=xd;Zt.prototype.visitDenseUnion=xd;Zt.prototype.visitSparseUnion=xd;Zt.prototype.visitDictionary=MA;Zt.prototype.visitInterval=Sd;Zt.prototype.visitIntervalDayTime=Sd;Zt.prototype.visitIntervalYearMonth=Sd;Zt.prototype.visitDuration=Ya;Zt.prototype.visitDurationSecond=Ya;Zt.prototype.visitDurationMillisecond=Ya;Zt.prototype.visitDurationMicrosecond=Ya;Zt.prototype.visitDurationNanosecond=Ya;Zt.prototype.visitFixedSizeList=EA;Zt.prototype.visitMap=AA;const Ur=new Zt;function Hu(n,t){return Ur.compareSchemas(n,t)}function Ic(n,t){return wA(n,t.map(e=>e.data.concat()))}function wA(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,h)=>Math.max(p,h.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,d=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)d[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(d=TA(e,a,d,t,r),a>0&&(i[s++]=ve({type:new Pn(e),length:a,nullCount:0,children:d.slice()})))}return[n=n.assign(e),i.map(p=>new zn(n,p))]}function TA(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],d=c?.length;if(d>=t)d===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,d-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:ve({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var tm;class Ln{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new Ne([]),this._offsets=[0],this;let r,s;t[0]instanceof Ne&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof zn)return[l];if(l instanceof Ln)return l.batches;if(l instanceof Oe){if(l.type instanceof Pn)return[new zn(new Ne(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),d=c.map(_=>new Pe([l[_]])),p=r??new Ne(c.map((_,v)=>new Je(String(_),d[v].type,d[v].nullable))),[,h]=Ic(p,d);return h.length===0?[new zn(l)]:h}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new Ne([]),!(r instanceof Ne))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof zn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Hu(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??W0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=G0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(hd(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?gd.visit(new Pe(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Ln(e,i.map(r=>new zn(e,r)))}slice(t,e){const i=this.schema;[t,e]=H0({length:this.numRows},t,e);const r=Z0(this.data,this._offsets,t,e);return new Ln(i,r.map(s=>new zn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=ve({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new Pe(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new Pe([ve({type:new Nr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=Ic(i,o)}return new Ln(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Ln(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[d,p]=o,h=e.findIndex(_=>_.name===l.name);return~h?p[h]=c:d.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new Ln(...Ic(s,a))}}tm=Symbol.toStringTag;Ln[tm]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=vl(md),n.get=vl(Wn.getVisitFn(L.Struct)),n.set=X0(di.getVisitFn(L.Struct)),n.indexOf=Y0(yl.getVisitFn(L.Struct)),"Table"))(Ln.prototype);var em;let zn=class Ea{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof Ne))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=ve({nullCount:0,type:new Pn(this.schema.fields),children:this.schema.fields.map(e=>ve({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Oe))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=lf(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,d)=>(l.children[d]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[d]=Je.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new Ne(i),o=ve({type:new Pn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=lf(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=nm(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return Wn.visit(this.data,t)}at(t){return this.get(hd(t,this.numRows))}set(t,e){return di.visit(this.data,t,e)}indexOf(t,e){return yl.visit(this.data,t,e)}[Symbol.iterator](){return gd.visit(new Pe([this.data]))}toArray(){return[...this]}concat(...t){return new Ln(this.schema,[this,...t])}slice(t,e){const[i]=new Pe([this.data]).slice(t,e).data;return new Ea(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new Pe([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new Pe([ve({type:new Nr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new Ne(s,new Map(this.schema.metadata)),r=ve({type:new Pn(s),children:a})}return new Ea(i,r)}select(t){const e=this.schema.select(t),i=new Pn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new Ea(e,ve({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=ve({type:new Pn(e.fields),length:this.numRows,children:i});return new Ea(e,r)}};em=Symbol.toStringTag;zn[em]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(zn.prototype);function lf(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:ve({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),ve({type:new Pn(r),length:e,children:s})]}function nm(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])nm(o.children,c?.children,e);if(Pt.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class bd extends zn{constructor(t){const e=t.fields.map(r=>ve({type:r.type})),i=ve({type:new Pn(t.fields),nullCount:0,children:e});super(t,i)}}let wr=class Ti{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Fe),(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):an.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):De.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new hn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,an.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,De.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return Ti.startMessage(t),Ti.addVersion(t,e),Ti.addHeaderType(t,i),Ti.addHeader(t,r),Ti.addBodyLength(t,s),Ti.addCustomMetadata(t,a),Ti.endMessage(t)}};class IA extends ge{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Qh.startNull(e),Qh.endNull(e)}visitInt(t,e){return jn.startInt(e),jn.addBitWidth(e,t.bitWidth),jn.addIsSigned(e,t.isSigned),jn.endInt(e)}visitFloat(t,e){return Li.startFloatingPoint(e),Li.addPrecision(e,t.precision),Li.endFloatingPoint(e)}visitBinary(t,e){return Yh.startBinary(e),Yh.endBinary(e)}visitLargeBinary(t,e){return jh.startLargeBinary(e),jh.endLargeBinary(e)}visitBool(t,e){return qh.startBool(e),qh.endBool(e)}visitUtf8(t,e){return $h.startUtf8(e),$h.endUtf8(e)}visitLargeUtf8(t,e){return Kh.startLargeUtf8(e),Kh.endLargeUtf8(e)}visitDecimal(t,e){return Ts.startDecimal(e),Ts.addScale(e,t.scale),Ts.addPrecision(e,t.precision),Ts.addBitWidth(e,t.bitWidth),Ts.endDecimal(e)}visitDate(t,e){return No.startDate(e),No.addUnit(e,t.unit),No.endDate(e)}visitTime(t,e){return ri.startTime(e),ri.addUnit(e,t.unit),ri.addBitWidth(e,t.bitWidth),ri.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return si.startTimestamp(e),si.addUnit(e,t.unit),i!==void 0&&si.addTimezone(e,i),si.endTimestamp(e)}visitInterval(t,e){return Pi.startInterval(e),Pi.addUnit(e,t.unit),Pi.endInterval(e)}visitDuration(t,e){return Fo.startDuration(e),Fo.addUnit(e,t.unit),Fo.endDuration(e)}visitList(t,e){return Jh.startList(e),Jh.endList(e)}visitStruct(t,e){return ts.startStruct_(e),ts.endStruct_(e)}visitUnion(t,e){Vn.startTypeIdsVector(e,t.typeIds.length);const i=Vn.createTypeIdsVector(e,t.typeIds);return Vn.startUnion(e),Vn.addMode(e,t.mode),Vn.addTypeIds(e,i),Vn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return sr.startDictionaryEncoding(e),sr.addId(e,BigInt(t.id)),sr.addIsOrdered(e,t.isOrdered),i!==void 0&&sr.addIndexType(e,i),sr.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Uo.startFixedSizeBinary(e),Uo.addByteWidth(e,t.byteWidth),Uo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Oo.startFixedSizeList(e),Oo.addListSize(e,t.listSize),Oo.endFixedSizeList(e)}visitMap(t,e){return Bo.startMap(e),Bo.addKeysSorted(e,t.keysSorted),Bo.endMap(e)}}const Rc=new IA;function RA(n,t=new Map){return new Ne(DA(n,t),Ho(n.metadata),t)}function im(n){return new $n(n.count,rm(n.columns),sm(n.columns))}function CA(n){return new Xi(im(n.data),n.id,n.isDelta)}function DA(n,t){return(n.fields||[]).filter(Boolean).map(e=>Je.fromJSON(e,t))}function cf(n,t){return(n.children||[]).filter(Boolean).map(e=>Je.fromJSON(e,t))}function rm(n){return(n||[]).reduce((t,e)=>[...t,new Or(e.count,LA(e.VALIDITY)),...rm(e.children)],[])}function sm(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Bi(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Bi(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Bi(t.length,r.OFFSET.length)),r.DATA&&t.push(new Bi(t.length,r.DATA.length)),t=sm(r.children,t)}return t}function LA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function PA(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=df(n,cf(n,t)),r=new Je(n.name,a,n.nullable,Ho(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?uf(i):new Ua,o=new Js(t.get(e),i,e,s.isOrdered),r=new Je(n.name,o,n.nullable,Ho(n.metadata))):(i=(i=s.indexType)?uf(i):new Ua,t.set(e,a=df(n,cf(n,t))),o=new Js(a,i,e,s.isOrdered),r=new Je(n.name,o,n.nullable,Ho(n.metadata))),r||null}function Ho(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function uf(n){return new ss(n.isSigned,n.bitWidth)}function df(n,t){const e=n.type.name;switch(e){case"NONE":return new Nr;case"null":return new Nr;case"binary":return new tl;case"largebinary":return new el;case"utf8":return new nl;case"largeutf8":return new il;case"bool":return new rl;case"list":return new dl((t||[])[0]);case"struct":return new Pn(t||[]);case"struct_":return new Pn(t||[])}switch(e){case"int":{const i=n.type;return new ss(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new $o(An[i.precision])}case"decimal":{const i=n.type;return new sl(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new al(ui[i.unit])}case"time":{const i=n.type;return new ol(Xt[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new ll(Xt[i.unit],i.timezone)}case"interval":{const i=n.type;return new cl(Zi[i.unit])}case"duration":{const i=n.type;return new ul(Xt[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new hl(wn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new fl(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new pl(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new ml((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var NA=Sp,FA=js;class Nn{static fromJSON(t,e){const i=new Nn(0,an.V5,e);return i._createHeader=UA(t,e),i}static decode(t){t=new FA(Me(t));const e=wr.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Nn(i,r,s);return a._createHeader=OA(e,s),a}static encode(t){const e=new NA;let i=-1;return t.isSchema()?i=Ne.encode(e,t.header()):t.isRecordBatch()?i=$n.encode(e,t.header()):t.isDictionaryBatch()&&(i=Xi.encode(e,t.header())),wr.startMessage(e),wr.addVersion(e,an.V5),wr.addHeader(e,i),wr.addHeaderType(e,t.headerType),wr.addBodyLength(e,BigInt(t.bodyLength)),wr.finishMessageBuffer(e,wr.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof Ne)return new Nn(0,an.V5,De.Schema,t);if(t instanceof $n)return new Nn(e,an.V5,De.RecordBatch,t);if(t instanceof Xi)return new Nn(e,an.V5,De.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===De.Schema}isRecordBatch(){return this.headerType===De.RecordBatch}isDictionaryBatch(){return this.headerType===De.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=Ye(t)}}class $n{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=Ye(t)}}class Xi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=Ye(e)}}class Bi{constructor(t,e){this.offset=Ye(t),this.length=Ye(e)}}class Or{constructor(t,e){this.length=Ye(t),this.nullCount=Ye(e)}}function UA(n,t){return(()=>{switch(t){case De.Schema:return Ne.fromJSON(n);case De.RecordBatch:return $n.fromJSON(n);case De.DictionaryBatch:return Xi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${De[t]}, type: ${t} }`)})}function OA(n,t){return(()=>{switch(t){case De.Schema:return Ne.decode(n.header(new Ii),new Map,n.version());case De.RecordBatch:return $n.decode(n.header(new er),n.version());case De.DictionaryBatch:return Xi.decode(n.header(new As),n.version())}throw new Error(`Unrecognized Message type: { name: ${De[t]}, type: ${t} }`)})}Je.encode=qA;Je.decode=XA;Je.fromJSON=PA;Ne.encode=YA;Ne.decode=BA;Ne.fromJSON=RA;$n.encode=jA;$n.decode=VA;$n.fromJSON=im;Xi.encode=KA;Xi.decode=zA;Xi.fromJSON=CA;Or.encode=JA;Or.decode=kA;Bi.encode=QA;Bi.decode=HA;function BA(n,t=new Map,e=an.V5){const i=ZA(n,t);return new Ne(i,ko(n),t,e)}function VA(n,t=an.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new $n(n.length(),GA(n),WA(n,t))}function zA(n,t=an.V5){return new Xi($n.decode(n.data(),t),n.id(),n.isDelta())}function HA(n){return new Bi(n.offset(),n.length())}function kA(n){return new Or(n.length(),n.nullCount())}function GA(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Or.decode(e));return t}function WA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<an.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Bi.decode(i));return e}function ZA(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=Je.decode(i,t));return e}function hf(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=Je.decode(i,t));return e}function XA(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=pf(n,hf(n,t)),i=new Je(n.name(),r,n.nullable(),ko(n))):t.has(e=Ye(o.id()))?(s=(s=o.indexType())?ff(s):new Ua,a=new Js(t.get(e),s,e,o.isOrdered()),i=new Je(n.name(),a,n.nullable(),ko(n))):(s=(s=o.indexType())?ff(s):new Ua,t.set(e,r=pf(n,hf(n,t))),a=new Js(r,s,e,o.isOrdered()),i=new Je(n.name(),a,n.nullable(),ko(n))),i||null}function ko(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function ff(n){return new ss(n.isSigned(),n.bitWidth())}function pf(n,t){const e=n.typeType();switch(e){case Ke.NONE:return new Nr;case Ke.Null:return new Nr;case Ke.Binary:return new tl;case Ke.LargeBinary:return new el;case Ke.Utf8:return new nl;case Ke.LargeUtf8:return new il;case Ke.Bool:return new rl;case Ke.List:return new dl((t||[])[0]);case Ke.Struct_:return new Pn(t||[])}switch(e){case Ke.Int:{const i=n.type(new jn);return new ss(i.isSigned(),i.bitWidth())}case Ke.FloatingPoint:{const i=n.type(new Li);return new $o(i.precision())}case Ke.Decimal:{const i=n.type(new Ts);return new sl(i.scale(),i.precision(),i.bitWidth())}case Ke.Date:{const i=n.type(new No);return new al(i.unit())}case Ke.Time:{const i=n.type(new ri);return new ol(i.unit(),i.bitWidth())}case Ke.Timestamp:{const i=n.type(new si);return new ll(i.unit(),i.timezone())}case Ke.Interval:{const i=n.type(new Pi);return new cl(i.unit())}case Ke.Duration:{const i=n.type(new Fo);return new ul(i.unit())}case Ke.Union:{const i=n.type(new Vn);return new hl(i.mode(),i.typeIdsArray()||[],t||[])}case Ke.FixedSizeBinary:{const i=n.type(new Uo);return new fl(i.byteWidth())}case Ke.FixedSizeList:{const i=n.type(new Oo);return new pl(i.listSize(),(t||[])[0])}case Ke.Map:{const i=n.type(new Bo);return new ml((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ke[e]}" (${e})`)}function YA(n,t){const e=t.fields.map(s=>Je.encode(n,s));Ii.startFieldsVector(n,e.length);const i=Ii.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Ii.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return hn.startKeyValue(n),hn.addKey(n,o),hn.addValue(n,l),hn.endKeyValue(n)})):-1;return Ii.startSchema(n),Ii.addFields(n,i),Ii.addEndianness(n,$A?Ks.Little:Ks.Big),r!==-1&&Ii.addCustomMetadata(n,r),Ii.endSchema(n)}function qA(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Pt.isDictionary(s)?(a=s.dictionary.typeId,r=Rc.visit(s,n),i=Rc.visit(s.dictionary,n)):i=Rc.visit(s,n);const o=(s.children||[]).map(d=>Je.encode(n,d)),l=ei.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?ei.createCustomMetadataVector(n,[...t.metadata].map(([d,p])=>{const h=n.createString(`${d}`),_=n.createString(`${p}`);return hn.startKeyValue(n),hn.addKey(n,h),hn.addValue(n,_),hn.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),ei.startField(n),ei.addType(n,i),ei.addTypeType(n,a),ei.addChildren(n,l),ei.addNullable(n,!!t.nullable),e!==-1&&ei.addName(n,e),r!==-1&&ei.addDictionary(n,r),c!==-1&&ei.addCustomMetadata(n,c),ei.endField(n)}function jA(n,t){const e=t.nodes||[],i=t.buffers||[];er.startNodesVector(n,e.length);for(const a of e.slice().reverse())Or.encode(n,a);const r=n.endVector();er.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Bi.encode(n,a);const s=n.endVector();return er.startRecordBatch(n),er.addLength(n,BigInt(t.length)),er.addNodes(n,r),er.addBuffers(n,s),er.endRecordBatch(n)}function KA(n,t){const e=$n.encode(n,t.data);return As.startDictionaryBatch(n),As.addId(n,BigInt(t.id)),As.addIsDelta(n,t.isDelta),As.addData(n,e),As.endDictionaryBatch(n)}function JA(n,t){return Ep.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function QA(n,t){return Mp.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const $A=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),Md=n=>`Expected ${De[n]} Message in stream, but was null or length 0.`,Ed=n=>`Header pointer of flatbuffer-encoded ${De[n]} Message is null or length 0.`,am=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,om=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class lm{constructor(t){this.source=t instanceof Sl?t:new Sl(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Qe:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Md(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=Me(this.source.read(t));if(e.byteLength<t)throw new Error(om(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=De.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Ed(e));return r}readMetadataLength(){const t=this.source.read(Nl),e=t&&new js(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Qe;if(e.byteLength<t)throw new Error(am(t,e.byteLength));return{done:!1,value:Nn.decode(e)}}}class tw{constructor(t,e){this.source=t instanceof Qs?t:mp(t)?new bl(t,e):new Qs(t)}[Symbol.asyncIterator](){return this}next(){return $t(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Qe:t})}throw(t){return $t(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return $t(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return $t(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Md(t));return e.value})}readMessageBody(t){return $t(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=Me(yield this.source.read(t));if(e.byteLength<t)throw new Error(om(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return $t(this,arguments,void 0,function*(t=!1){const e=De.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Ed(e));return r})}readMetadataLength(){return $t(this,void 0,void 0,function*(){const t=yield this.source.read(Nl),e=t&&new js(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return $t(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Qe;if(e.byteLength<t)throw new Error(am(t,e.byteLength));return{done:!1,value:Nn.decode(e)}})}}class ew extends lm{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof af?t:new af(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Nn.fromJSON(t.schema,De.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Nn.fromJSON(e,De.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Nn.fromJSON(e,De.RecordBatch)}}return this._body=[],Qe}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Md(t));return e.value}readSchema(){const t=De.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(Ed(t));return i}}const Nl=4,ku="ARROW1",Ba=new Uint8Array(ku.length);for(let n=0;n<ku.length;n+=1)Ba[n]=ku.codePointAt(n);function Ad(n,t=0){for(let e=-1,i=Ba.length;++e<i;)if(Ba[e]!==n[t+e])return!1;return!0}const qa=Ba.length,cm=qa+Nl,nw=qa*2+Nl;class ci extends _d{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return rs(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return ii.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return ii.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof ci?t:Lu(t)?aw(t):mp(t)?cw(t):rs(t)?$t(this,void 0,void 0,function*(){return yield ci.from(yield t)}):gp(t)||ad(t)||_p(t)||ia(t)?lw(new Qs(t)):ow(new Sl(t))}static readAll(t){return t instanceof ci?t.isSync()?mf(t):gf(t):Lu(t)||ArrayBuffer.isView(t)||Wa(t)||pp(t)?mf(t):gf(t)}}class Ml extends ci{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Oi(this,arguments,function*(){yield ue(yield*Po(ns(this[Symbol.iterator]())))})}}class El extends ci{constructor(t){super(t),this._impl=t}readAll(){return $t(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=ns(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class um extends Ml{constructor(t){super(t),this._impl=t}}class iw extends El{constructor(t){super(t),this._impl=t}}class dm{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=ve({type:new Pn(this.schema.fields),length:t.length,children:i});return new zn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new Pe(c)):new Pe(c)).memoize()}_loadVectors(t,e,i){return new $0(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class Al extends dm{constructor(t,e){super(e),this._reader=Lu(t)?new ew(this._handle=t):new lm(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=fm(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Qe}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Qe}next(){if(this.closed)return Qe;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new bd(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class wl extends dm{constructor(t,e){super(e),this._reader=new tw(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return $t(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return $t(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=fm(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return $t(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Qe})}return(t){return $t(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Qe})}next(){return $t(this,void 0,void 0,function*(){if(this.closed)return Qe;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new bd(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return $t(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class hm extends Al{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof of?t:new of(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(De.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(De.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-cm,i=t.readInt32(e),r=t.readAt(e-i,i);return Oa.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class rw extends wl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof bl?t:new bl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return $t(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return $t(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(De.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return $t(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(De.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return $t(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-cm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Oa.decode(r)})}_readNextMessageAndValidate(t){return $t(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class sw extends Al{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new vA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function fm(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*mf(n){const t=ci.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function gf(n){return Oi(this,arguments,function*(){const e=yield ue(ci.from(n));try{if(!(yield ue(e.open({autoDestroy:!1}))).closed)do yield yield ue(e);while(!(yield ue(e.reset().open())).closed)}finally{yield ue(e.cancel())}})}function aw(n){return new Ml(new sw(n))}function ow(n){const t=n.peek(qa+7&-8);return t&&t.byteLength>=4?Ad(t)?new um(new hm(n.read())):new Ml(new Al(n)):new Ml(new Al((function*(){})()))}function lw(n){return $t(this,void 0,void 0,function*(){const t=yield n.peek(qa+7&-8);return t&&t.byteLength>=4?Ad(t)?new um(new hm(yield n.read())):new El(new wl(n)):new El(new wl((function(){return Oi(this,arguments,function*(){})})()))})}function cw(n){return $t(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new bl(n,t);return t>=nw&&Ad(yield e.readAt(0,qa+7&-8))?new iw(new rw(e)):new El(new wl(e))})}class $e extends ge{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof zn?s.data.children:s.data),i=new $e;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof Pe)return this.visitMany(t.data),this;const{type:e}=t;if(!Pt.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Pt.isUnion(e))this.nodes.push(new Or(i,0));else{const{nullCount:r}=t;Pt.isNull(e)||Si.call(this,r<=0?new Uint8Array(0):gl(t.offset,i,t.nullBitmap)),this.nodes.push(new Or(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function Si(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Bi(this._byteLength,t)),this._byteLength+=t,this}function uw(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(Si.call(this,r),e.mode===wn.Sparse)return Gu.call(this,n);if(e.mode===wn.Dense){if(n.offset<=0)return Si.call(this,s),Gu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,d,p=-1;++p<i;)(c=r[p])!==void 0&&((d=o[c])===void 0&&(d=o[c]=s[p]),a[p]=s[p]-d,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);Si.call(this,a),this.visitMany(n.children.map((c,d)=>{const p=e.typeIds[d],h=o[p],_=l[p];return c.slice(h,Math.min(i,_))}))}}return this}function dw(n){let t;return n.nullCount>=n.length?Si.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?Si.call(this,gl(n.offset,n.length,t)):Si.call(this,_l(n.values))}function gr(n){return Si.call(this,n.values.subarray(0,n.length*n.stride))}function Fl(n){const{length:t,values:e,valueOffsets:i}=n,r=Ye(i[0]),s=Ye(i[t]),a=Math.min(s-r,e.byteLength-r);return Si.call(this,yp(-r,t+1,i)),Si.call(this,e.subarray(r,r+a)),this}function wd(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return Si.call(this,yp(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function Gu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}$e.prototype.visitBool=dw;$e.prototype.visitInt=gr;$e.prototype.visitFloat=gr;$e.prototype.visitUtf8=Fl;$e.prototype.visitLargeUtf8=Fl;$e.prototype.visitBinary=Fl;$e.prototype.visitLargeBinary=Fl;$e.prototype.visitFixedSizeBinary=gr;$e.prototype.visitDate=gr;$e.prototype.visitTimestamp=gr;$e.prototype.visitTime=gr;$e.prototype.visitDecimal=gr;$e.prototype.visitList=wd;$e.prototype.visitStruct=Gu;$e.prototype.visitUnion=uw;$e.prototype.visitInterval=gr;$e.prototype.visitDuration=gr;$e.prototype.visitFixedSizeList=wd;$e.prototype.visitMap=wd;class pm extends _d{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new zo,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Gn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return rs(t)?t.then(e=>this.writeAll(e)):ia(t)?Cd(this,t):Rd(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof zo?this._sink=t:(this._sink=new zo,t&&kM(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&GM(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!Hu(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Ln&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof zn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Hu(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof zn?t instanceof bd||this._writeRecordBatch(t):t instanceof Ln?this.writeAll(t.batches):Wa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Nn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===De.RecordBatch?this._recordBatchBlocks.push(new Fr(o,t.bodyLength,this._position)):t.headerType===De.DictionaryBatch&&this._dictionaryBlocks.push(new Fr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=Me(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Nn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Ba)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=$e.assemble(t),a=new $n(t.numRows,i,r),o=Nn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=$e.assemble(new Pe([t])),l=new $n(t.length,s,a),c=new Xi(l,e,i),d=Nn.from(c,r);return this._writeMessage(d)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,d]of a.entries())this._writeDictionaryBatch(d,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class Td extends pm{static writeAll(t,e){const i=new Td(e);return rs(t)?t.then(r=>i.writeAll(r)):ia(t)?Cd(i,t):Rd(i,t)}}class Id extends pm{static writeAll(t){const e=new Id;return rs(t)?t.then(i=>e.writeAll(i)):ia(t)?Cd(e,t):Rd(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Oa.encode(new Oa(t,an.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Rd(n,t){let e=t;t instanceof Ln&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function Cd(n,t){return $t(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=ns(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function hw(n,t="stream"){return(t==="stream"?Td:Id).writeAll(n).toUint8Array(!0)}var fw=Object.create,mm=Object.defineProperty,pw=Object.getOwnPropertyDescriptor,mw=Object.getOwnPropertyNames,gw=Object.getPrototypeOf,_w=Object.prototype.hasOwnProperty,vw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),yw=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of mw(t))!_w.call(n,r)&&r!==e&&mm(n,r,{get:()=>t[r],enumerable:!(i=pw(t,r))||i.enumerable});return n},xw=(n,t,e)=>(e=n!=null?fw(gw(n)):{},yw(!n||!n.__esModule?mm(e,"default",{value:n,enumerable:!0}):e,n)),Sw=vw((n,t)=>{t.exports=Worker}),bw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(bw||{}),Mw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(Mw||{}),Ew=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(Ew||{}),Aw=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(Aw||{}),ww=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(ww||{}),Tw=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(Tw||{}),Iw=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},Rw=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(Rw||{}),Cw=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=ci.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new Ln(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new gm(this._bindings,this._conn,e),r=await ci.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new Dw(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=hw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},gm=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},Dw=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=ci.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new Ln(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new gm(this.bindings,this.connectionId,t),i=await ci.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},Lw=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(Lw||{}),Pw=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(Pw||{}),Ae=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function Go(n){switch(n.typeId){case L.Binary:return{sqlType:"binary"};case L.Bool:return{sqlType:"bool"};case L.Date:return{sqlType:"date"};case L.DateDay:return{sqlType:"date32[d]"};case L.DateMillisecond:return{sqlType:"date64[ms]"};case L.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case L.Float:return{sqlType:"float"};case L.Float16:return{sqlType:"float16"};case L.Float32:return{sqlType:"float32"};case L.Float64:return{sqlType:"float64"};case L.Int:return{sqlType:"int32"};case L.Int16:return{sqlType:"int16"};case L.Int32:return{sqlType:"int32"};case L.Int64:return{sqlType:"int64"};case L.Uint16:return{sqlType:"uint16"};case L.Uint32:return{sqlType:"uint32"};case L.Uint64:return{sqlType:"uint64"};case L.Uint8:return{sqlType:"uint8"};case L.IntervalDayTime:return{sqlType:"interval[dt]"};case L.IntervalYearMonth:return{sqlType:"interval[m]"};case L.List:return{sqlType:"list",valueType:Go(n.valueType)};case L.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case L.Null:return{sqlType:"null"};case L.Utf8:return{sqlType:"utf8"};case L.Struct:return{sqlType:"struct",fields:n.children.map(t=>Wu(t.name,t.type))};case L.Map:{let t=n;return{sqlType:"map",keyType:Go(t.keyType),valueType:Go(t.valueType)}}case L.Time:return{sqlType:"time[s]"};case L.TimeMicrosecond:return{sqlType:"time[us]"};case L.TimeMillisecond:return{sqlType:"time[ms]"};case L.TimeNanosecond:return{sqlType:"time[ns]"};case L.TimeSecond:return{sqlType:"time[s]"};case L.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case L.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case L.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case L.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case L.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Wu(n,t){let e=Go(t);return e.name=n,e}var Nw=/'(opfs:\/\/\S*?)'/g,Fw=/(opfs:\/\/\S*?)/g;function Uw(n){return n.search(Fw)>-1}function Ow(n){return[...n.matchAll(Nw)].map(t=>t[1])}var Bw=new TextEncoder,Vw=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new Ae("RESET",null);return await this.postTask(n)}async ping(){let n=new Ae("PING",null);await this.postTask(n)}async dropFile(n){let t=new Ae("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new Ae("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new Ae("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new Ae("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new Ae("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new Ae("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new Ae("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new Ae("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new Ae("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new Cw(this,n)}async disconnect(n){let t=new Ae("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new Ae("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new Ae("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new Ae("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new Ae("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new Ae("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new Ae("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new Ae("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new Ae("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new Ae("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new Ae("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new Ae("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=Bw.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new Ae("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new Ae("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new Ae("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new Ae("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new Ae("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new Ae("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new Ae("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new Ae("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new Ae("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Wu(s,a))}e.columnsFlat=r,delete e.columns}let i=new Ae("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Wu(s,a))}e.columnsFlat=r,delete e.columns}let i=new Ae("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return Uw((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=Ow(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function zw(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}zw();var Hw=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(Hw||{}),kw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Gw=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),Ww=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),Zw=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),Xw={version:"1.33.1-dev20.0"},Dd=Xw.version.split(".");Dd[0];Dd[1];Dd[2];var Yw=()=>typeof navigator>"u",Cc=null,Dc=null,Lc=null,Pc=null,Nc=null;async function qw(){return Cc==null&&(Cc=typeof BigInt64Array<"u"),Dc==null&&(Dc=await Gw()),Lc==null&&(Lc=await Zw()),Pc==null&&(Pc=await Ww()),Nc==null&&(Nc=await kw()),{bigInt64Array:Cc,crossOriginIsolated:Yw()||globalThis.crossOriginIsolated||!1,wasmExceptions:Dc,wasmSIMD:Pc,wasmThreads:Lc,wasmBulkMemory:Nc}}async function jw(n){let t=await qw();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}xw(Sw());const Kw="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",Jw="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",Qw="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",$w="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",tT="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",eT="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",nT="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js";class iT{db=null;connection=null;async initialize(){try{const e=await jw({mvp:{mainModule:Kw,mainWorker:Jw},eh:{mainModule:Qw,mainWorker:$w},coi:{mainModule:tT,mainWorker:eT,pthreadWorker:nT}}),i=new Worker(e.mainWorker),r=new Iw;this.db=new Vw(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class rT{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;allocateBuffers(t=100){this.capacity=t,Vt.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Vt.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=Vt.request("GET_RING_BUFFER",{id:this.xBufferId}),i=Vt.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.bindEvents()}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=a.clientY-e.top;this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}var sT=ie("<option> </option>"),aT=ie('<div class="input-group"><label>Texture ID</label> <select class="unified-input"></select></div>');function oT(n,t){Se(t,!0);const e=kn("graph-actions"),i=["white-box","circle","triangle","star","particle"];var r=aT(),s=at(nt(r),2);un(s,21,()=>i,vn,(o,l)=>{var c=sT(),d=nt(c,!0);$(c);var p={};Ce(()=>{_n(d,b(l)),p!==(p=b(l))&&(c.value=(c.__value=b(l))??"")}),N(o,c)}),$(s);var a;ai(s),$(r),Ce(()=>{a!==(a=t.node.textureId||i[0])&&(s.value=(s.__value=t.node.textureId||i[0])??"",oi(s,t.node.textureId||i[0]))}),ce("change",s,o=>e.updateNodeConfig(t.node,{textureId:o.currentTarget.value})),N(n,r),be()}bi(["change"]);var lT=ie("<option> </option>"),cT=ie('<div class="input-group"><label>Texture ID</label> <select class="unified-input"></select></div> <div class="input-group"><label>Vertices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>Indices</label> <textarea class="unified-input" rows="2"></textarea></div> <div class="input-group"><label>UVs</label> <textarea class="unified-input" rows="2"></textarea></div>',1);function uT(n,t){Se(t,!0);const e=kn("graph-actions"),i=["white-box","circle","triangle","star","particle"];var r=cT(),s=we(r),a=at(nt(s),2);un(a,21,()=>i,vn,(v,M)=>{var m=lT(),g=nt(m,!0);$(m);var S={};Ce(()=>{_n(g,b(M)),S!==(S=b(M))&&(m.value=(m.__value=b(M))??"")}),N(v,m)}),$(a);var o;ai(a),$(s);var l=at(s,2),c=at(nt(l),2);wo(c),$(l);var d=at(l,2),p=at(nt(d),2);wo(p),$(d);var h=at(d,2),_=at(nt(h),2);wo(_),$(h),Ce((v,M,m)=>{o!==(o=t.node.textureId||i[0])&&(a.value=(a.__value=t.node.textureId||i[0])??"",oi(a,t.node.textureId||i[0])),xi(c,v),xi(p,M),xi(_,m)},[()=>(t.node.vertices?Array.from(t.node.vertices):[]).join(", "),()=>(t.node.indices?Array.from(t.node.indices):[]).join(", "),()=>(t.node.uvs?Array.from(t.node.uvs):[]).join(", ")]),ce("change",a,v=>e.updateNodeConfig(t.node,{textureId:v.currentTarget.value})),ce("change",c,v=>e.updateNodeConfig(t.node,{vertices:new Float32Array(v.currentTarget.value.split(",").map(M=>parseFloat(M.trim())||0))})),ce("change",p,v=>e.updateNodeConfig(t.node,{indices:new Uint16Array(v.currentTarget.value.split(",").map(M=>parseInt(M.trim())||0))})),ce("change",_,v=>e.updateNodeConfig(t.node,{uvs:new Float32Array(v.currentTarget.value.split(",").map(M=>parseFloat(M.trim())||0))})),N(n,r),be()}bi(["change"]);var dT=ie('<div class="input-group"><label>Capacity</label> <input type="number" min="1" step="1" class="unified-input"/></div> <div class="input-group"><label>Operation</label> <select class="unified-input"><option>Add</option><option>Multiply</option></select></div>',1);function hT(n,t){Se(t,!0);const e=kn("graph-actions");var i=dT(),r=we(i),s=at(nt(r),2);es(s),$(r);var a=at(r,2),o=at(nt(a),2),l=nt(o);l.value=l.__value="add";var c=at(l);c.value=c.__value="multiply",$(o);var d;ai(o),$(a),Ce(()=>{xi(s,t.node.capacity||100),d!==(d=t.node.operation||"add")&&(o.value=(o.__value=t.node.operation||"add")??"",oi(o,t.node.operation||"add"))}),ce("change",s,p=>e.updateNodeConfig(t.node,{capacity:parseInt(p.currentTarget.value)||100})),ce("change",o,p=>e.updateNodeConfig(t.node,{operation:p.currentTarget.value})),N(n,i),be()}bi(["change"]);var fT=ie("<option> </option>"),pT=ie('<div class="input-group"><label>Target Buffer ID</label> <select class="unified-input"><option disabled="">Select a buffer...</option><!></select></div>');function mT(n,t){Se(t,!0);const e=kn("graph-actions");let i=rn(Os([]));function r(){Ge(i,Vt.request("GET_AVAILABLE_BUFFERS",void 0),!0)}Va(()=>{r(),Vt.on("GRAPH_UPDATED",r),Vt.on("MEMORY_ALLOCATED",r)}),vf(()=>{Vt.off("GRAPH_UPDATED",r),Vt.off("MEMORY_ALLOCATED",r)});var s=pT(),a=at(nt(s),2),o=nt(a);o.value=o.__value="";var l=at(o);un(l,17,()=>b(i),vn,(d,p)=>{var h=fT(),_=nt(h,!0);$(h);var v={};Ce(()=>{_n(_,b(p)),v!==(v=b(p))&&(h.value=(h.__value=b(p))??"")}),N(d,h)}),$(a);var c;ai(a),$(s),Ce(()=>{c!==(c=t.node.bufferId||"")&&(a.value=(a.__value=t.node.bufferId||"")??"",oi(a,t.node.bufferId||""))}),ce("change",a,d=>e.updateNodeConfig(t.node,{bufferId:d.currentTarget.value})),N(n,s),be()}bi(["change"]);var gT=ie('<div class="input-group"><label>Data (comma separated)</label> <textarea class="unified-input" rows="3"></textarea></div>');function _T(n,t){Se(t,!0);const e=kn("graph-actions");var i=gT(),r=at(nt(i),2);wo(r),$(i),Ce(s=>xi(r,s),[()=>(t.node.data?Array.from(t.node.data):[]).join(", ")]),ce("change",r,s=>e.updateNodeConfig(t.node,{data:s.currentTarget.value.split(",").map(a=>parseFloat(a.trim())||0)})),N(n,i),be()}bi(["change"]);var vT=ie('<div class="input-group"><label>Capacity</label> <input type="number" min="1" step="1" class="unified-input"/></div>');function yT(n,t){Se(t,!0);const e=kn("graph-actions");var i=vT(),r=at(nt(i),2);es(r),$(i),Ce(()=>xi(r,t.node.capacity||100)),ce("change",r,s=>e.updateNodeConfig(t.node,{capacity:parseInt(s.currentTarget.value)||100})),N(n,i),be()}bi(["change"]);var xT=ie("<option> </option>"),ST=ie("<option> </option>"),bT=ie("<option> </option>"),MT=ie("<option> </option>"),ET=ie("<option> </option>"),AT=ie('<div style="display: flex; gap: 6px;"><div class="input-group" style="flex: 1;"><label>Key Column</label> <select class="unified-input"><option>-- Select --</option><!></select></div> <div class="input-group" style="flex: 1;"><label>Value Column</label> <select class="unified-input"><option>-- Select --</option><!></select></div></div>'),wT=ie('<div class="input-group"><label>Capacity</label> <input type="number" min="1" step="1" class="unified-input"/></div> <div class="input-group"><label>API URL</label> <input type="text" class="unified-input" placeholder="https://api.example.com/data.json"/></div> <div class="port-section"><div class="port-label-header">Data Parser Tuning</div> <div class="input-group" style="margin-top: 6px;"><label>Target Array</label> <select class="unified-input"><option>Auto-detect</option><!></select></div> <div class="input-group"><label>Time/X-Axis Column</label> <select class="unified-input"><option>-- None --</option><!></select></div> <div class="input-group"><label>Unpack Inner Array (EAV)</label> <select class="unified-input"><option>-- None --</option><!></select></div> <!></div>',1);function _f(n,t){Se(t,!0);const e=kn("graph-actions");var i=wT(),r=we(i),s=at(nt(r),2);es(s),$(r);var a=at(r,2),o=at(nt(a),2);es(o),$(a);var l=at(a,2),c=at(nt(l),2),d=at(nt(c),2),p=nt(d);p.value=p.__value="";var h=at(p);un(h,17,()=>t.node.availableDataPaths||[],vn,(H,C)=>{var U=xT(),k=nt(U,!0);$(U);var P={};Ce(()=>{_n(k,b(C)==="root"?"(Root Level)":b(C)),P!==(P=b(C))&&(U.value=(U.__value=b(C))??"")}),N(H,U)}),$(d);var _;ai(d),$(c);var v=at(c,2),M=at(nt(v),2),m=nt(M);m.value=m.__value="";var g=at(m);un(g,17,()=>t.node.availableColumns||[],vn,(H,C)=>{var U=ST(),k=nt(U,!0);$(U);var P={};Ce(()=>{_n(k,b(C)),P!==(P=b(C))&&(U.value=(U.__value=b(C))??"")}),N(H,U)}),$(M);var S;ai(M),$(v);var w=at(v,2),u=at(nt(w),2),f=nt(u);f.value=f.__value="";var T=at(f);un(T,17,()=>t.node.availableNestedArrays||[],vn,(H,C)=>{var U=bT(),k=nt(U,!0);$(U);var P={};Ce(()=>{_n(k,b(C)),P!==(P=b(C))&&(U.value=(U.__value=b(C))??"")}),N(H,U)}),$(u);var R;ai(u),$(w);var y=at(w,2);{var E=H=>{var C=AT(),U=nt(C),k=at(nt(U),2),P=nt(k);P.value=P.__value="";var V=at(P);un(V,17,()=>t.node.availableInnerColumns||[],vn,(pt,lt)=>{var Et=MT(),re=nt(Et,!0);$(Et);var K={};Ce(()=>{_n(re,b(lt)),K!==(K=b(lt))&&(Et.value=(Et.__value=b(lt))??"")}),N(pt,Et)}),$(k);var B;ai(k),$(U);var G=at(U,2),tt=at(nt(G),2),it=nt(tt);it.value=it.__value="";var _t=at(it);un(_t,17,()=>t.node.availableInnerColumns||[],vn,(pt,lt)=>{var Et=ET(),re=nt(Et,!0);$(Et);var K={};Ce(()=>{_n(re,b(lt)),K!==(K=b(lt))&&(Et.value=(Et.__value=b(lt))??"")}),N(pt,Et)}),$(tt);var yt;ai(tt),$(G),$(C),Ce(()=>{B!==(B=t.node.unpackKey||"")&&(k.value=(k.__value=t.node.unpackKey||"")??"",oi(k,t.node.unpackKey||"")),yt!==(yt=t.node.unpackValue||"")&&(tt.value=(tt.__value=t.node.unpackValue||"")??"",oi(tt,t.node.unpackValue||""))}),ce("change",k,pt=>e.updateNodeConfig(t.node,{unpackKey:pt.currentTarget.value})),ce("change",tt,pt=>e.updateNodeConfig(t.node,{unpackValue:pt.currentTarget.value})),N(H,C)};Ht(y,H=>{t.node.unpackArray&&H(E)})}$(l),Ce(()=>{xi(s,t.node.capacity||100),xi(o,t.node.url||""),_!==(_=t.node.dataPath||"")&&(d.value=(d.__value=t.node.dataPath||"")??"",oi(d,t.node.dataPath||"")),S!==(S=t.node.timeKey||"")&&(M.value=(M.__value=t.node.timeKey||"")??"",oi(M,t.node.timeKey||"")),R!==(R=t.node.unpackArray||"")&&(u.value=(u.__value=t.node.unpackArray||"")??"",oi(u,t.node.unpackArray||""))}),ce("change",s,H=>e.updateNodeConfig(t.node,{capacity:parseInt(H.currentTarget.value)||100})),ce("change",o,H=>e.updateNodeConfig(t.node,{url:H.currentTarget.value})),ce("change",d,H=>e.updateNodeConfig(t.node,{dataPath:H.currentTarget.value})),ce("change",M,H=>e.updateNodeConfig(t.node,{timeKey:H.currentTarget.value})),ce("change",u,H=>e.updateNodeConfig(t.node,{unpackArray:H.currentTarget.value})),N(n,i),be()}bi(["change"]);const TT=n=>{H1(n,{})};var IT=ie("<!> <!> <!>",1),RT=ie('<div class="logic-tree svelte-1uha8ag"><!></div>'),CT=ie('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function VT(n,t){Se(t,!0);const e=d=>{G1(d,{children:(p,h)=>{var _=qe(),v=we(_);{var M=m=>{Av(m,{})};Ht(v,m=>{b(l)&&m(M)})}N(p,_)},$$slots:{default:!0}})};Ta("settings-registry",{sprite:oT,mesh:uT,math:hT,"ring-buffer":mT,"static-array":_T,motion:yT,api:_f,"smhi-weather":_f}),new hg;const r=new W1,s=new BM,a=new iT,o=new rT;let l=rn(!1),c=rn(!1);Va(()=>{Ge(c,!!localStorage.getItem("graph-state")),o.allocateBuffers(100),Ge(l,!0)}),V1(n,{get viewsPanel(){return TT},get settingsPanel(){return e},children:(d,p)=>{var h=CT(),_=we(h),v=nt(_);Mg(v,{get graph(){return r},get renderer(){return s},get compute(){return a},get pointer(){return o}}),$(_);var M=at(_,2);{var m=g=>{var S=RT(),w=nt(S);Z1(w,{children:(u,f)=>{X1(u,{id:"mouse-trail",children:(T,R)=>{var y=IT(),E=we(y);Zd(E,{id:"x-coords",bufferId:"pointer-x",exportMap:{out:"X"}});var H=at(E,2);Zd(H,{id:"y-coords",bufferId:"pointer-y",exportMap:{out:"Y"}});var C=at(H,2);xg(C,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"],inputMap:{x:"X",y:"Y"}}),N(T,y)},$$slots:{default:!0}})},$$slots:{default:!0}}),$(S),N(g,S)};Ht(M,g=>{b(l)&&!b(c)&&g(m)})}N(d,h)}}),be()}export{VT as component};
