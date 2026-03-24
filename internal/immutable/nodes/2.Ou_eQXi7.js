import{a as N,f as ue,c as Fe,t as En,k as $,e as yi,s as Ln,d as un,l as wa}from"../chunks/o0YnpPci.js";import{o as Va,a as bf}from"../chunks/POvuA-I3.js";import{h as qr,d as Mf,b1 as Cm,e as Ef,q as A,r as Dm,ac as Lm,s as Zd,f as Vl,g as zl,i as Ja,aC as Nm,aJ as Pm,al as Xd,M as Fm,L as Pc,b2 as Um,O as Om,_ as Bm,aQ as Vm,aI as Xu,b3 as zm,a8 as Fc,b4 as Hm,b5 as km,a3 as Gm,au as Wm,K as Hl,b6 as Li,b7 as Af,W as Zm,G as wf,J as Tf,b8 as kl,aa as Xm,b9 as Ym,ba as qm,aG as jm,N as Km,I as Jm,aD as Qm,j as $m,b as tg,U as Be,x as te,b0 as Pn,u as ss,z as ee,B as lt,C as st,F as gt,a6 as Q,y as pe,am as nn,aO as Yd,bb as Ta,a5 as $e,A as an,bc as eg,T as Us,bd as Uc}from"../chunks/CR-tZYsT.js";import{B as ng,p as Lr,i as Bt,r as An}from"../chunks/DibeUSV5.js";import{g as wn,a as Tn,s as qe,T as ig,S as If,l as Oc,r as Go,b as Ia,c as ri,i as Yu,d as qu,e as rg,f as Ea,X as wl,h as sg,t as ag,j as og}from"../chunks/BjakaILn.js";import{b as Ra,c as Rf}from"../chunks/CBmMM5Sj.js";import{i as lg}from"../chunks/BWd2LGRm.js";const cg=Symbol("NaN");function ug(n,t,e){qr&&Mf();var i=new ng(n),r=!Cm();Ef(()=>{var s=t();s!==s&&(s=cg),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,e)})}function zi(n,t){return t}function dg(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let m=t[o];Tf(m,()=>{if(s){if(s.pending.delete(m),s.done.add(m),s.pending.size===0){var h=n.outrogroups;Bc(n,Xu(s.done)),h.delete(s),h.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,d=c.parentNode;jm(d),d.append(c),n.items.clear()}Bc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Bc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Li;const a=document.createDocumentFragment();Km(s,a)}else Jm(t[r],e)}}var qd;function vi(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&Af)!==0;if(l){var c=n;a=qr?Vl(Wm(c)):c.appendChild(Hl())}qr&&Mf();var d=null,m=Bm(()=>{var w=e();return Vm(w)?w:w==null?[]:Xu(w)}),h,g=new Map,v=!0;function b(w){(x.effect.f&Zm)===0&&(x.pending.delete(w),x.fallback=d,hg(x,h,a,t,i),d!==null&&(h.length===0?(d.f&Li)===0?wf(d):(d.f^=Li,fa(d,null,a)):Tf(d,()=>{d=null})))}function _(w){x.pending.delete(w)}var p=Ef(()=>{h=A(m);var w=h.length;let u=!1;if(qr){var f=Dm(a)===Lm;f!==(w===0)&&(a=Zd(),Vl(a),zl(!1),u=!0)}for(var T=new Set,I=Fm,y=Om(),M=0;M<w;M+=1){qr&&Ja.nodeType===Nm&&Ja.data===Pm&&(a=Ja,u=!0,zl(!1));var O=h[M],C=i(O,M),B=v?null:o.get(C);B?(B.v&&Xd(B.v,O),B.i&&Xd(B.i,M),y&&I.unskip_effect(B.e)):(B=fg(o,v?a:qd??=Hl(),O,C,M,r,t,e),v||(B.e.f|=Li),o.set(C,B)),T.add(C)}if(w===0&&s&&!d&&(v?d=Pc(()=>s(a)):(d=Pc(()=>s(qd??=Hl())),d.f|=Li)),w>T.size&&Um(),qr&&w>0&&Vl(Zd()),!v)if(g.set(I,T),y){for(const[V,X]of o)T.has(V)||I.skip_effect(X.e);I.oncommit(b),I.ondiscard(_)}else b(I);u&&zl(!0),A(m)}),x={effect:p,items:o,pending:g,outrogroups:null,fallback:d};v=!1,qr&&(a=Ja)}function ra(n){for(;n!==null&&(n.f&Ym)===0;)n=n.next;return n}function hg(n,t,e,i,r){var s=(i&qm)!==0,a=t.length,o=n.items,l=ra(n.effect.first),c,d=null,m,h=[],g=[],v,b,_,p;if(s)for(p=0;p<a;p+=1)v=t[p],b=r(v,p),_=o.get(b).e,(_.f&Li)===0&&(_.nodes?.a?.measure(),(m??=new Set).add(_));for(p=0;p<a;p+=1){if(v=t[p],b=r(v,p),_=o.get(b).e,n.outrogroups!==null)for(const O of n.outrogroups)O.pending.delete(_),O.done.delete(_);if((_.f&kl)!==0&&(wf(_),s&&(_.nodes?.a?.unfix(),(m??=new Set).delete(_))),(_.f&Li)!==0)if(_.f^=Li,_===l)fa(_,null,e);else{var x=d?d.next:l;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),vr(n,d,_),vr(n,_,x),fa(_,x,e),d=_,h=[],g=[],l=ra(d.next);continue}if(_!==l){if(c!==void 0&&c.has(_)){if(h.length<g.length){var w=g[0],u;d=w.prev;var f=h[0],T=h[h.length-1];for(u=0;u<h.length;u+=1)fa(h[u],w,e);for(u=0;u<g.length;u+=1)c.delete(g[u]);vr(n,f.prev,T.next),vr(n,d,f),vr(n,T,w),l=w,d=T,p-=1,h=[],g=[]}else c.delete(_),fa(_,l,e),vr(n,_.prev,_.next),vr(n,_,d===null?n.effect.first:d.next),vr(n,d,_),d=_;continue}for(h=[],g=[];l!==null&&l!==_;)(c??=new Set).add(l),g.push(l),l=ra(l.next);if(l===null)continue}(_.f&Li)===0&&h.push(_),d=_,l=ra(_.next)}if(n.outrogroups!==null){for(const O of n.outrogroups)O.pending.size===0&&(Bc(n,Xu(O.done)),n.outrogroups?.delete(O));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(_ of c)(_.f&kl)===0&&I.push(_);for(;l!==null;)(l.f&kl)===0&&l!==n.fallback&&I.push(l),l=ra(l.next);var y=I.length;if(y>0){var M=(i&Af)!==0&&a===0?e:null;if(s){for(p=0;p<y;p+=1)I[p].nodes?.a?.measure();for(p=0;p<y;p+=1)I[p].nodes?.a?.fix()}dg(n,I,M)}}s&&Xm(()=>{if(m!==void 0)for(_ of m)_.nodes?.a?.apply()})}function fg(n,t,e,i,r,s,a,o){var l=(a&Hm)!==0?(a&km)===0?Gm(e,!1,!1):Fc(e):null,c=(a&zm)!==0?Fc(r):null;return{v:l,i:c,e:Pc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function fa(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Li)===0?t.nodes.start:e;i!==null;){var a=Qm(i);if(s.before(i),i===r)return;i=a}}function vr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Tl(n,t,e){$m(()=>{var i=tg(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function pg(n){var t=Fc(0);return function(){return arguments.length===1?(Be(t,A(t)+1),arguments[0]):(A(t),n())}}class mg{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const Ot=new mg;class gg{id;type="source";subType="dummy";parentId;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}getOutputs(){return{out:this.output}}}class _g{id;type="processor";subType="dummy";parentId;inputMap;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}process(){return{out:this.output}}}class vg{id;type="sink";subType="dummy";parentId;inputMap;constructor(t,e){this.id=t,e&&Object.assign(this,e)}consume(){return null}}class Cf{id;type="subject";subType="default";parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}}class yg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Ot.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),Ot.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),Ot.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),Ot.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),Ot.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),Ot.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}}class Df{id;type="source";subType="ring-buffer";bufferId;parentId;exportMap;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutputs(){if(!this.ringBuffer)return{out:this.outputBuffer};const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return{out:this.outputBuffer}}}class xg{id;type="source";subType="static-array";parentId;exportMap;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutputs(){return{out:this.data}}}class Sg{id;type="source";subType="time";parentId;exportMap;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutputs(){return this.outputBuffer[0]=performance.now()/1e3,{out:this.outputBuffer}}}class bg{id;type="source";subType="random";parentId;exportMap;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutputs(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return{out:this.outputBuffer}}}class Wo{id;type="source";parentId;exportMap;capacity;url;outputBuffers={};static fetchCache=new Map;constructor(t,e,i){this.id=t,this.capacity=e,this.url=i}async load(){if(this.url)try{const t=Date.now();let e=Wo.fetchCache.get(this.url);(!e||t-e.time>6e4)&&(e={promise:fetch(this.url).then(s=>s.json()),time:t},Wo.fetchCache.set(this.url,e));const i=await e.promise;this.outputBuffers=this.parseResponse(i),Ot.emit("GRAPH_UPDATED",void 0)}catch{this.outputBuffers={}}}createBuffer(){return new Float64Array(this.capacity)}getOutputs(){return this.outputBuffers}}class Mg extends Wo{subType="smhi-weather";constructor(t,e,i,r){const s=`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${r}/lat/${i}/data.json`;super(t,e,s),this.load()}parseResponse(t){const e={},i=t?.timeSeries;if(!Array.isArray(i))return e;const r=Math.min(i.length,this.capacity),s=this.createBuffer();e.time=s;for(let a=0;a<r;a++){const o=i[a];if(o.validTime&&(s[a]=new Date(o.validTime).getTime()/1e3),Array.isArray(o.parameters))for(const l of o.parameters)e[l.name]||(e[l.name]=this.createBuffer()),e[l.name][a]=l.values[0]}return e}}function jd(n,t){te(t,!0);let e=Lr(t,"exportMap",19,()=>({}));const i=Pn("subject-parent");ss(()=>{const r=Ot.request("GET_RING_BUFFER",{id:t.bufferId})||null,s=new Df(t.id,r,t.bufferId);s.parentId=i?.(),s.exportMap=e(),Ot.request("REGISTER_NODE",{node:s})}),ee()}class Eg{id;type="processor";subType="math";parentId;capacity;operation;inputMap;exportMap;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){const e=t.in||[];if(e.length===0)return{out:this.outputBuffer};const i=e[0],r=Math.min(i.length,this.outputBuffer.length);for(let s=0;s<r;s++){let a=i[s];for(let o=1;o<e.length;o++){const l=e[o],c=l.length>1?l[s]:l[0];this.operation==="add"?a+=c:this.operation==="multiply"&&(a*=c)}this.outputBuffer[s]=a}return{out:this.outputBuffer}}}class Ag{id;type="processor";subType="motion";parentId;capacity;inputMap;exportMap;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}process(t){const e=t.pos||[],i=t.vel||[];if(e.length===0||i.length===0)return{out:this.outputBuffer};const r=e[0],s=i[0],a=Math.min(r.length,s.length,this.outputBuffer.length);for(let o=0;o<a;o++)this.outputBuffer[o]=r[o]+s[o];return{out:this.outputBuffer}}}class Lf{id;type="sink";subType="sprite";textureId;parentId;inputMap;primitiveCache=[];constructor(t,e){this.id=t,this.textureId=e}consume(t){const e=t.x||[],i=t.y||[];if(e.length===0||i.length===0)return null;let r=e[0],s=i[0];const a=Math.min(r.length,s.length);for(;this.primitiveCache.length<a;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let o=0;o<this.primitiveCache.length;o++)if(o<a)if(r[o]===0&&s[o]===0)this.primitiveCache[o].opacity=0;else{const l=this.primitiveCache[o];l.x=r[o],l.y=s[o],l.opacity=1-o/a}else this.primitiveCache[o].opacity=0;return this.primitiveCache}}class wg{id;type="sink";subType="mesh";textureId;parentId;inputMap;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.primitiveCache}}function Tg(n,t){te(t,!0);let e=Lr(t,"inputIds",19,()=>[]),i=Lr(t,"inputMap",19,()=>({}));const r=Pn("subject-parent");ss(()=>{const s=new Lf(t.id,t.textureId);s.parentId=r?.(),s.inputMap=i(),Ot.request("REGISTER_NODE",{node:s});for(let a=0;a<e().length;a++)Ot.request("CONNECT_NODES",{sourceId:e()[a],targetId:t.id})}),ee()}class Ig{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};boundSaveGraphState=this.saveGraphState.bind(this);nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new gg(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new Sg(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new bg(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new xg(t,e?.data??[0]);return i.subType="static-array",i}},{subType:"smhi-weather",label:"SMHI Weather",create:(t,e)=>{const i=e?.lat??59.3293,r=e?.lon??18.0686;return new Mg(t,e?.capacity??100,i,r)}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=Ot.request("GET_RING_BUFFER",{id:i})||null,s=new Df(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new _g(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new Eg(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new Ag(t,e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new vg(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new Lf(t,e?.textureId??"white-box");return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=new wg(t,e?.textureId??"white-box",e?.vertices??new Float32Array,e?.indices??new Uint16Array,e?.uvs??new Float32Array);return i.subType="mesh",i}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new Cf(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){await Promise.all([this.compute.initialize().catch(()=>{}),this.renderer.initialize(t).catch(()=>{})]),this.loadGraphState(),Ot.on("GRAPH_UPDATED",this.boundSaveGraphState),this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}saveGraphState(){const t=Ot.request("GET_GRAPH_STATE",void 0),e=t.nodes.map(i=>{const r=i;return{id:i.id,type:i.type,subType:i.subType,parentId:i.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,lat:r.lat,lon:r.lon,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[],exportMap:r.exportMap?JSON.parse(JSON.stringify(r.exportMap)):void 0,inputMap:r.inputMap?JSON.parse(JSON.stringify(r.inputMap)):void 0}}});localStorage.setItem("graph-state",JSON.stringify({nodes:e,connections:t.connections}))}loadGraphState(){const t=localStorage.getItem("graph-state");if(t)try{const e=JSON.parse(t);for(let i=0;i<e.nodes.length;i++){const r=e.nodes[i],s=Ot.request("CREATE_NODE",{id:r.id,type:r.type,subType:r.subType,parentId:r.parentId,config:r.config});s&&Ot.request("REGISTER_NODE",{node:s})}for(let i=0;i<e.connections.length;i++){const r=e.connections[i];Ot.request("CONNECT_NODES",{sourceId:r.sourceId,targetId:r.targetId})}}catch{}}setupMediatorHandlers(){Ot.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),Ot.emit("GRAPH_UPDATED",void 0),!0)),Ot.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),Ot.emit("GRAPH_UPDATED",void 0),!0)),Ot.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),Ot.emit("GRAPH_UPDATED",void 0),!0)),Ot.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),Ot.emit("GRAPH_UPDATED",void 0),!0)),Ot.handle("GET_CONTEXT",t=>null),Ot.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),Ot.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),Ot.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId,t.config&&(t.config.name!==void 0&&(r.name=t.config.name),t.config.exportMap&&(r.exportMap=t.config.exportMap),t.config.inputMap&&(r.inputMap=t.config.inputMap),t.config.inputIds&&(r.inputIds=[...t.config.inputIds]))),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,Ot.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,Ot.off("GRAPH_UPDATED",this.boundSaveGraphState),this.renderer.destroy(),this.compute.destroy()}}var Rg=ue('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function Cg(n,t){te(t,!0);let e,i,r;ss(()=>{if(!e||!i)return;(async()=>{r=new Ig(t.graph,t.renderer,t.compute),await r.boot(e);const c=window.devicePixelRatio||1;t.renderer.resize(i.clientWidth,i.clientHeight,c),t.pointer.initialize(i)})();const l=new ResizeObserver(c=>{for(const d of c){const{width:m,height:h}=d.contentRect;m>0&&h>0&&t.renderer.resize(m,h,window.devicePixelRatio||1)}});return l.observe(i),()=>{l.disconnect(),r&&r.shutdown(),t.pointer.destroy()}});var s=Rg(),a=lt(s);Ra(a,o=>e=o,()=>e),st(s),Ra(s,o=>i=o,()=>i),N(n,s),ee()}var Dg=$('<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'),Lg=$('<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',1),Ng=$('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'),Pg=$('<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'),Fg=$('<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'),Ug=$('<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'),Og=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Bg(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=Og();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=Dg();N(u,f)},v=u=>{var f=Lg();nn(),N(u,f)},b=u=>{var f=Ng();N(u,f)},_=u=>{var f=Pg();N(u,f)},p=u=>{var f=Fg();N(u,f)},x=u=>{var f=Ug();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var Vg=$('<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>'),zg=$('<path d="M176,128,96,208V48Z" opacity="0.2"></path><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"></path>',1),Hg=$('<path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),kg=$('<path d="M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"></path>'),Gg=$('<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>'),Wg=$('<path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>'),Zg=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Xg(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=Zg();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=Vg();N(u,f)},v=u=>{var f=zg();nn(),N(u,f)},b=u=>{var f=Hg();N(u,f)},_=u=>{var f=kg();N(u,f)},p=u=>{var f=Gg();N(u,f)},x=u=>{var f=Wg();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var Yg=$('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),qg=$('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),jg=$('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),Kg=$('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Jg=$('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Qg=$('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),$g=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Nf(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=$g();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=Yg();N(u,f)},v=u=>{var f=qg();nn(),N(u,f)},b=u=>{var f=jg();N(u,f)},_=u=>{var f=Kg();N(u,f)},p=u=>{var f=Jg();N(u,f)},x=u=>{var f=Qg();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var t1=$('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),e1=$('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),n1=$('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),i1=$('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),r1=$('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),s1=$('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),a1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function o1(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=a1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=t1();N(u,f)},v=u=>{var f=e1();nn(),N(u,f)},b=u=>{var f=n1();N(u,f)},_=u=>{var f=i1();N(u,f)},p=u=>{var f=r1();N(u,f)},x=u=>{var f=s1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var l1=$('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),c1=$('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),u1=$('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),d1=$('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),h1=$('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),f1=$('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),p1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Pf(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=p1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=l1();N(u,f)},v=u=>{var f=c1();nn(),N(u,f)},b=u=>{var f=u1();N(u,f)},_=u=>{var f=d1();N(u,f)},p=u=>{var f=h1();N(u,f)},x=u=>{var f=f1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var m1=$('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),g1=$('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),_1=$('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),v1=$('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),y1=$('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),x1=$('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),S1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function b1(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=S1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=m1();N(u,f)},v=u=>{var f=g1();nn(),N(u,f)},b=u=>{var f=_1();N(u,f)},_=u=>{var f=v1();N(u,f)},p=u=>{var f=y1();N(u,f)},x=u=>{var f=x1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var M1=$('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),E1=$('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),A1=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),w1=$('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),T1=$('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),I1=$('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),R1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function C1(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=R1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=M1();N(u,f)},v=u=>{var f=E1();nn(),N(u,f)},b=u=>{var f=A1();N(u,f)},_=u=>{var f=w1();N(u,f)},p=u=>{var f=T1();N(u,f)},x=u=>{var f=I1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var D1=$('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),L1=$('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),N1=$('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),P1=$('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),F1=$('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),U1=$('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),O1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function B1(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=O1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=D1();N(u,f)},v=u=>{var f=L1();nn(),N(u,f)},b=u=>{var f=N1();N(u,f)},_=u=>{var f=P1();N(u,f)},p=u=>{var f=F1();N(u,f)},x=u=>{var f=U1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var V1=$('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),z1=$('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),H1=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),k1=$('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),G1=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),W1=$('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),Z1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function X1(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=Z1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=V1();N(u,f)},v=u=>{var f=z1();nn(),N(u,f)},b=u=>{var f=H1();N(u,f)},_=u=>{var f=k1();N(u,f)},p=u=>{var f=G1();N(u,f)},x=u=>{var f=W1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var Y1=$('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),q1=$('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),j1=$('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),K1=$('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),J1=$('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),Q1=$('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),$1=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function t_(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=$1();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=Y1();N(u,f)},v=u=>{var f=q1();nn(),N(u,f)},b=u=>{var f=j1();N(u,f)},_=u=>{var f=K1();N(u,f)},p=u=>{var f=J1();N(u,f)},x=u=>{var f=Q1();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var e_=$('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),n_=$('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),i_=$('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),r_=$('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),s_=$('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),a_=$('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),o_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ff(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=o_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=e_();N(u,f)},v=u=>{var f=n_();nn(),N(u,f)},b=u=>{var f=i_();N(u,f)},_=u=>{var f=r_();N(u,f)},p=u=>{var f=s_();N(u,f)},x=u=>{var f=a_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var l_=$('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),c_=$('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),u_=$('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),d_=$('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),h_=$('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),f_=$('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),p_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function ju(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=p_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=l_();N(u,f)},v=u=>{var f=c_();nn(),N(u,f)},b=u=>{var f=u_();N(u,f)},_=u=>{var f=d_();N(u,f)},p=u=>{var f=h_();N(u,f)},x=u=>{var f=f_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var m_=$('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),g_=$('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),__=$('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),v_=$('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),y_=$('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),x_=$('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),S_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function b_(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=S_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=m_();N(u,f)},v=u=>{var f=g_();nn(),N(u,f)},b=u=>{var f=__();N(u,f)},_=u=>{var f=v_();N(u,f)},p=u=>{var f=y_();N(u,f)},x=u=>{var f=x_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var M_=$('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),E_=$('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),A_=$('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),w_=$('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),T_=$('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),I_=$('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),R_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function C_(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=R_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=M_();N(u,f)},v=u=>{var f=E_();nn(),N(u,f)},b=u=>{var f=A_();N(u,f)},_=u=>{var f=w_();N(u,f)},p=u=>{var f=T_();N(u,f)},x=u=>{var f=I_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var D_=$('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),L_=$('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),N_=$('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),P_=$('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),F_=$('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),U_=$('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),O_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Kd(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=O_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=D_();N(u,f)},v=u=>{var f=L_();nn(),N(u,f)},b=u=>{var f=N_();N(u,f)},_=u=>{var f=P_();N(u,f)},p=u=>{var f=F_();N(u,f)},x=u=>{var f=U_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var B_=$('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),V_=$('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),z_=$('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),H_=$('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),k_=$('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),G_=$('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),W_=$('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Uf(n,t){te(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:f,color:T,size:I,mirrored:y,...M}=u;return M}var c=W_();Tn(c,(u,f)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...f}),[()=>l(e),()=>l(i)]);var d=lt(c);{var m=u=>{var f=Fe(),T=pe(f);qe(T,()=>t.children),N(u,f)};Bt(d,u=>{t.children&&u(m)})}var h=gt(d,2);{var g=u=>{var f=B_();N(u,f)},v=u=>{var f=V_();nn(),N(u,f)},b=u=>{var f=z_();N(u,f)},_=u=>{var f=H_();N(u,f)},p=u=>{var f=k_();N(u,f)},x=u=>{var f=G_();N(u,f)},w=u=>{var f=En();f.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),N(u,f)};Bt(h,u=>{A(r)==="bold"?u(g):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(b,2):A(r)==="light"?u(_,3):A(r)==="regular"?u(p,4):A(r)==="thin"?u(x,5):u(w,-1)})}st(c),N(n,c),ee()}var Z_=ue('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function X_(n,t){var e=Z_(),i=lt(e),r=lt(i);ig(r,{}),st(i);var s=gt(i,2),a=lt(s);qe(a,()=>t.children),st(s);var o=gt(s,2),l=lt(o);qe(l,()=>t.viewsPanel??Yd);var c=gt(l,2);qe(c,()=>t.settingsPanel??Yd),st(o),st(e),N(n,e)}var Gl=pg(()=>Oc),Y_=ue('<div class="views-content"></div>');function q_(n,t){te(t,!1),lg(),If(n,{get isOpen(){return Gl().viewsOpen},onClose:()=>Gl(Gl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=Y_();N(e,r)},$$slots:{default:!0}}),ee()}var j_=ue('<div class="settings-content"><!></div>');function K_(n,t){te(t,!0),If(n,{get isOpen(){return Oc.settingsOpen},onClose:()=>Oc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=j_(),s=lt(r);{var a=o=>{var l=Fe(),c=pe(l);qe(c,()=>t.children),N(o,l)};Bt(s,o=>{t.children&&o(a)})}st(r),N(e,r)},$$slots:{default:!0}}),ee()}class J_{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];hasInputs(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputs(t)&&(t.inputIds||(t.inputIds=[]),t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){const e=[];for(const[i,r]of this.nodes)r.parentId===t&&e.push(i);for(let i=0;i<e.length;i++)this.removeNode(e[i]);this.nodes.delete(t),this.connections=this.connections.filter(i=>i.sourceId!==t&&i.targetId!==t);for(const[i,r]of this.nodes)this.hasInputs(r)&&r.inputIds&&(r.inputIds=r.inputIds.filter(s=>s!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&(i.inputIds||(i.inputIds=[]),i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&i.inputIds&&(i.inputIds=i.inputIds.filter(r=>r!==t))}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r){if(r.type==="source"){const a=r.getOutputs(),o={};if(r.exportMap)for(const l in a)l in r.exportMap&&(o[r.exportMap[l]]=a[l]);this.nodeOutputs.set(i,o)}else if(r.type==="processor"||r.type==="sink"){const s={};for(let o=0;o<this.connections.length;o++){const l=this.connections[o];if(l.targetId===i){const c=this.nodeOutputs.get(l.sourceId);if(c)for(const d in c)s[d]||(s[d]=[]),s[d].push(c[d])}}const a={};for(const o in s)a[o]=s[o];if(r.inputMap)for(const o in r.inputMap){const l=r.inputMap[o];l&&s[l]?a[o]=s[l]:l&&(a[o]=[])}if(r.type==="processor"){const l=r.process(a),c={};if(r.exportMap)for(const d in l)d in r.exportMap&&(c[r.exportMap[d]]=l[d]);this.nodeOutputs.set(i,c)}else if(r.type==="sink"){const l=r.consume(a);if(l)for(let c=0;c<l.length;c++)this.renderPrimitives.push(l[c])}}}}return this.renderPrimitives}}function Q_(n,t){te(t,!0),Ta("subject-parent",()=>{});var e=Fe(),i=pe(e);{var r=s=>{var a=Fe(),o=pe(a);qe(o,()=>t.children),N(s,a)};Bt(i,s=>{t.children&&s(r)})}N(n,e),ee()}function $_(n,t){te(t,!0);const e=Pn("subject-parent");ss(()=>{const a=new Cf(t.id);a.parentId=e?.(),Ot.request("REGISTER_NODE",{node:a})}),Ta("subject-parent",()=>t.id);var i=Fe(),r=pe(i);{var s=a=>{var o=Fe(),l=pe(o);qe(l,()=>t.children),N(a,o)};Bt(r,a=>{t.children&&a(s)})}N(n,i),ee()}function tv(n,t){return t.filter(e=>e.parentId===n)}function ev(n){return n.type==="source"?[]:n.subType==="motion"?[{id:"pos",label:"POS"},{id:"vel",label:"VEL"}]:n.subType==="sprite"?[{id:"x",label:"X"},{id:"y",label:"Y"}]:[{id:"in",label:"IN"}]}function nv(n){if(n.type==="sink")return[];if(n.subType==="api"){const t=n.availableKeys||[];if(t.length>0)return t.map(e=>({id:e,label:e}))}return[{id:"out",label:"OUT"}]}class iv{#t=$e(null);get selectedNodeId(){return A(this.#t)}set selectedNodeId(t){Be(this.#t,t,!0)}nodeElements=new Map;#e=$e(null);get dragConnectionSourceId(){return A(this.#e)}set dragConnectionSourceId(t){Be(this.#e,t,!0)}#n=$e(null);get dragConnectionTargetId(){return A(this.#n)}set dragConnectionTargetId(t){Be(this.#n,t,!0)}#i=$e(0);get dragStartX(){return A(this.#i)}set dragStartX(t){Be(this.#i,t,!0)}#r=$e(0);get dragStartY(){return A(this.#r)}set dragStartY(t){Be(this.#r,t,!0)}}const fe=new iv;var rv=ue('<div class="input-group svelte-zce5x2"><label class="svelte-zce5x2"> </label> <input type="number" class="unified-input svelte-zce5x2"/></div>');function Ku(n,t){te(t,!0);var e=rv(),i=lt(e),r=lt(i,!0);st(i);var s=gt(i,2);Go(s),st(e),an(()=>{Ln(r,t.label),Ia(s,t.value),ri(s,"min",t.min),ri(s,"step",t.step)}),un("change",s,a=>t.onchange(parseFloat(a.currentTarget.value)||0)),N(n,e),ee()}yi(["change"]);var sv=ue('<option disabled=""> </option>'),av=ue("<option> </option>"),ov=ue('<div class="input-group svelte-1oo6fx3"><label class="svelte-1oo6fx3"> </label> <select class="unified-input svelte-1oo6fx3"><!><!></select></div>');function Ii(n,t){te(t,!0);var e=ov(),i=lt(e),r=lt(i,!0);st(i);var s=gt(i,2),a=lt(s);{var o=d=>{var m=sv(),h=lt(m,!0);st(m),m.value=m.__value="",an(()=>Ln(h,t.disabledPlaceholder)),N(d,m)};Bt(a,d=>{t.disabledPlaceholder&&d(o)})}var l=gt(a);vi(l,17,()=>t.options,zi,(d,m)=>{var h=av(),g=lt(h,!0);st(h);var v={};an(()=>{Ln(g,A(m).label),v!==(v=A(m).value)&&(h.value=(h.__value=A(m).value)??"")}),N(d,h)}),st(s);var c;Yu(s),st(e),an(()=>{Ln(r,t.label),c!==(c=t.value)&&(s.value=(s.__value=t.value)??"",qu(s,t.value))}),un("change",s,d=>t.onchange(d.currentTarget.value)),N(n,e),ee()}yi(["change"]);var lv=ue('<div class="input-group"><label> </label> <input type="text" class="unified-input"/></div>');function Of(n,t){te(t,!0);let e=Lr(t,"placeholder",3,"");var i=lv(),r=lt(i),s=lt(r,!0);st(r);var a=gt(r,2);Go(a),st(i),an(()=>{Ln(s,t.label),Ia(a,t.value),ri(a,"placeholder",e())}),un("change",a,o=>t.onchange(o.currentTarget.value)),N(n,i),ee()}yi(["change"]);var cv=ue('<div class="input-group"><label> </label> <textarea class="unified-input"></textarea></div>');function Ao(n,t){te(t,!0);let e=Lr(t,"rows",3,3);var i=cv(),r=lt(i),s=lt(r,!0);st(r);var a=gt(r,2);rg(a),st(i),an(()=>{Ln(s,t.label),ri(a,"rows",e()),Ia(a,t.value)}),un("change",a,o=>t.onchange(o.currentTarget.value)),N(n,i),ee()}yi(["change"]);var uv=ue("<button><!></button>");function Dr(n,t){let e=Lr(t,"variant",3,"default");var i=uv(),r=lt(i);qe(r,()=>t.children),st(i),an(()=>{Ea(i,1,`icon-btn ${e()??""}`,"svelte-db4pd2"),ri(i,"title",t.title)}),un("click",i,function(...s){t.onclick?.apply(this,s)}),N(n,i)}yi(["click"]);var dv=ue('<div class="palette-container"><!></div>'),hv=ue('<div class="children-group svelte-phufrx"></div>'),fv=ue('<div class="tree-item svelte-phufrx"><div role="button" tabindex="0"><div class="node-info svelte-phufrx"><!> <div role="button" tabindex="0"></div> <span><!></span> <span class="node-id svelte-phufrx"> </span></div> <div class="node-actions svelte-phufrx"><!> <!></div></div> <!></div>');function Bf(n,t){te(t,!0);const e=Pn("graph-actions"),i=Pn("palette-state");let r=$e(!0),s=Q(()=>tv(t.node.id,t.nodes)),a=Q(()=>A(s).length>0),o=$e(void 0),l=Q(()=>t.node.type==="source"||t.node.type==="processor"||t.node.type==="subject"),c=Q(()=>t.node.type==="processor"||t.node.type==="sink"||t.node.type==="subject"),d=Q(()=>fe.dragConnectionSourceId===t.node.id),m=Q(()=>fe.dragConnectionSourceId!==null&&fe.dragConnectionSourceId!==t.node.id&&A(c)),h=Q(()=>fe.dragConnectionTargetId===t.node.id),g=Q(()=>fe.dragConnectionSourceId===null&&!A(l)||fe.dragConnectionSourceId!==null&&!A(m)&&!A(d));ss(()=>(A(o)&&fe.nodeElements.set(t.node.id,A(o)),()=>{fe.nodeElements.get(t.node.id)===A(o)&&fe.nodeElements.delete(t.node.id)}));function v(at){at.stopPropagation(),Be(r,!A(r))}function b(at){at.stopPropagation();const Nt=at.currentTarget.getBoundingClientRect();i.activeId===t.node.id?i.activeId=null:(i.activeId=t.node.id,i.x=Nt.left,i.y=Nt.bottom+4)}function _(at){at.stopPropagation(),e.removeNode(t.node.id)}function p(at){at.stopPropagation(),fe.selectedNodeId=t.node.id}function x(at){(at.key==="Enter"||at.key===" ")&&(at.preventDefault(),fe.selectedNodeId=t.node.id)}function w(at){const Nt={subject:Nf,source:Ff,sink:Pf,processor:Uf},_e=at.subType||at.id;return{"mouse-input":B1,"keyboard-input":Kd,sprite:X1,mesh:b_,"sprite-atlas":C_,"transform-shader":t_,script:b1,renderer:C1,console:Kd,file:o1}[_e]||Nt[at.type]}let u=Q(()=>w(t.node));var f=fv(),T=lt(f);let I;var y=lt(T),M=lt(y);{var O=at=>{Dr(at,{variant:"ghost",onclick:v,children:(Nt,_e)=>{var K=Fe(),ot=pe(K);{var dt=Pt=>{Bg(Pt,{size:12,weight:"bold"})},ne=Pt=>{Xg(Pt,{size:12,weight:"bold"})};Bt(ot,Pt=>{A(r)?Pt(dt):Pt(ne,-1)})}N(Nt,K)},$$slots:{default:!0}})};Bt(M,at=>{A(a)&&at(O)})}var C=gt(M,2);let B;var V=gt(C,2),X=lt(V);Rf(X,()=>A(u),(at,Nt)=>{Nt(at,{size:16,weight:"fill"})}),st(V);var W=gt(V,2),G=lt(W,!0);st(W),st(y);var z=gt(y,2),nt=lt(z);{var et=at=>{var Nt=dv(),_e=lt(Nt);Dr(_e,{title:"Add Child Node",onclick:b,children:(K,ot)=>{ju(K,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(Nt),N(at,Nt)};Bt(nt,at=>{t.node.type==="subject"&&at(et)})}var _t=gt(nt,2);Dr(_t,{variant:"danger",title:"Delete",onclick:_,children:(at,Nt)=>{wl(at,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(z),st(T),Ra(T,at=>Be(o,at),()=>A(o));var ht=gt(T,2);{var ft=at=>{var Nt=hv();vi(Nt,21,()=>A(s),zi,(_e,K)=>{var ot=Fe(),dt=pe(ot);Bf(dt,{get node(){return A(K)},get nodes(){return t.nodes}}),N(_e,ot)}),st(Nt),N(at,Nt)};Bt(ht,at=>{A(a)&&A(r)&&at(ft)})}st(f),an(()=>{I=Ea(T,1,"node-row svelte-phufrx",null,I,{selected:fe.selectedNodeId===t.node.id}),B=Ea(C,1,"connection-port svelte-phufrx",null,B,{active:A(d),"valid-target":A(h),disabled:A(g)}),Ea(V,1,`type-icon ${t.node.type??""}`,"svelte-phufrx"),ri(V,"title",t.node.type),Ln(G,t.node.name||t.node.id)}),un("click",T,p),un("keydown",T,x),un("pointerdown",C,at=>{if(!A(l))return;at.stopPropagation(),at.preventDefault();const Nt=at.currentTarget.getBoundingClientRect();fe.dragConnectionSourceId=t.node.id,fe.dragStartX=Nt.left+Nt.width/2,fe.dragStartY=Nt.top+Nt.height/2}),wa("pointerenter",C,()=>{A(m)&&(fe.dragConnectionTargetId=t.node.id)}),wa("pointerleave",C,()=>{fe.dragConnectionTargetId===t.node.id&&(fe.dragConnectionTargetId=null)}),N(n,f),ee()}yi(["click","keydown","pointerdown"]);var pv=ue('<div class="inline-palette svelte-1ea37n5" role="presentation"><button class="svelte-1ea37n5"><!> Source</button> <button class="svelte-1ea37n5"><!> Processor</button> <button class="svelte-1ea37n5"><!> Subject</button> <button class="svelte-1ea37n5"><!> Sink</button></div>');function mv(n,t){te(t,!0);let e=Lr(t,"x",3,0),i=Lr(t,"y",3,0),r=$e(void 0),s=$e(0),a=$e(0);ss(()=>{if(t.show&&A(r)){const h=A(r).getBoundingClientRect();let g=e(),v=i();g+h.width>window.innerWidth&&(g=window.innerWidth-h.width-8),v+h.height>window.innerHeight&&(v=i()-h.height-8),Be(s,g,!0),Be(a,v,!0)}else Be(s,e()),Be(a,i())});function o(h,g){g.stopPropagation(),t.onAdd(h)}function l(h){return document.body.appendChild(h),{destroy(){h.parentNode&&h.parentNode.removeChild(h)}}}var c=Fe(),d=pe(c);{var m=h=>{var g=pv(),v=lt(g),b=lt(v);Ff(b,{size:14,weight:"fill",style:"color: var(--color-success)"}),nn(),st(v);var _=gt(v,2),p=lt(_);Uf(p,{size:14,weight:"fill",style:"color: var(--color-warning)"}),nn(),st(_);var x=gt(_,2),w=lt(x);Nf(w,{size:14,weight:"fill",style:"color: var(--color-info)"}),nn(),st(x);var u=gt(x,2),f=lt(u);Pf(f,{size:14,weight:"fill",style:"color: var(--color-error)"}),nn(),st(u),st(g),Tl(g,T=>l?.(T)),Ra(g,T=>Be(r,T),()=>A(r)),an(()=>sg(g,`top: ${A(a)??""}px; left: ${A(s)??""}px;`)),un("click",g,T=>T.stopPropagation()),un("click",v,T=>o("source",T)),un("click",_,T=>o("processor",T)),un("click",x,T=>o("subject",T)),un("click",u,T=>o("sink",T)),N(h,g)};Bt(d,h=>{t.show&&h(m)})}N(n,c),ee()}yi(["click"]);function gv(n){let t=!1,e=0,i=0;function r(o){t=!0,e=o.clientY,i=n.parentElement.clientHeight,n.setPointerCapture(o.pointerId)}function s(o){if(!t)return;const l=e-o.clientY,c=Math.max(150,Math.min(i+l,window.innerHeight-100));n.parentElement.style.height=`${c}px`}function a(o){t=!1,n.releasePointerCapture(o.pointerId)}return n.addEventListener("pointerdown",r),n.addEventListener("pointermove",s),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),{destroy(){n.removeEventListener("pointerdown",r),n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a)}}}var _v=ue('<div class="connection-item"><div class="conn-id-group"><input type="text" class="unified-input port-input" placeholder="Export name"/> <span class="conn-separator">←</span> <span class="badge success"> </span></div> <!></div>'),vv=ue("<option> </option>"),yv=ue('<div class="connection-item" style="background: transparent; border: none; padding: 0;"><select class="unified-input port-select"><option disabled="">Select port...</option><!></select> <input type="text" class="unified-input port-input" placeholder="Export name"/> <!></div>'),xv=ue('<div style="font-size: 10px; color: var(--text-muted); font-style: italic; padding: 4px;">All available ports exported</div>'),Sv=ue('<div class="input-group"><label>Export Variables</label> <div class="connection-list"><!> <!></div></div>');function bv(n,t){te(t,!0);let e=$e(""),i=$e("");ss(()=>{t.activeNode.id&&(Be(e,""),Be(i,""))});var r=Sv(),s=gt(lt(r),2),a=lt(s);{var o=h=>{var g=Fe(),v=pe(g);vi(v,17,()=>Object.entries(t.activeNode.exportMap),zi,(b,_)=>{var p=Q(()=>eg(A(_),2));let x=()=>A(p)[0],w=()=>A(p)[1];var u=_v(),f=lt(u),T=lt(f);Go(T);var I=gt(T,4),y=lt(I,!0);st(I),st(f);var M=gt(f,2);Dr(M,{variant:"danger",onclick:()=>{const O={...t.activeNode.exportMap};delete O[x()],t.graphActions.updateNodeConfig(t.activeNode,{exportMap:O})},children:(O,C)=>{wl(O,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(u),an(()=>{Ia(T,w()),Ln(y,x())}),un("change",T,O=>{const C={...t.activeNode.exportMap};C[x()]=O.currentTarget.value||x(),t.graphActions.updateNodeConfig(t.activeNode,{exportMap:C})}),N(b,u)}),N(h,g)},l=Q(()=>t.activeNode.exportMap&&Object.keys(t.activeNode.exportMap).length>0);Bt(a,h=>{A(l)&&h(o)})}var c=gt(a,2);{var d=h=>{var g=yv(),v=lt(g),b=lt(v);b.value=b.__value="";var _=gt(b);vi(_,17,()=>t.availableExportPorts,zi,(u,f)=>{var T=vv(),I=lt(T,!0);st(T);var y={};an(()=>{Ln(I,A(f).label),y!==(y=A(f).id)&&(T.value=(T.__value=A(f).id)??"")}),N(u,T)}),st(v);var p;Yu(v);var x=gt(v,2);Go(x);var w=gt(x,2);Dr(w,{onclick:()=>{if(A(e)&&A(i)){const u={...t.activeNode.exportMap||{}};u[A(e)]=A(i),t.graphActions.updateNodeConfig(t.activeNode,{exportMap:u}),Be(e,""),Be(i,"")}},children:(u,f)=>{ju(u,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(g),an(()=>{p!==(p=A(e))&&(v.value=(v.__value=A(e))??"",qu(v,A(e))),Ia(x,A(i))}),un("change",v,u=>Be(e,u.currentTarget.value,!0)),un("input",x,u=>Be(i,u.currentTarget.value,!0)),N(h,g)},m=h=>{var g=xv();N(h,g)};Bt(c,h=>{t.availableExportPorts.length>0?h(d):h(m,-1)})}st(s),st(r),N(n,r),ee()}yi(["change","input"]);var Mv=ue("<option> </option>"),Ev=ue('<div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 10px; font-weight: 600; text-transform: uppercase;"> </span> <span class="conn-separator">←</span> <select class="unified-input"><option disabled="">-- Select --</option><!></select></div>'),Av=ue('<div class="input-group"><label>Map Inputs from Pool</label> <div class="connection-list"></div></div>');function wv(n,t){te(t,!0);var e=Av(),i=gt(lt(e),2);vi(i,21,()=>ev(t.activeNode),zi,(r,s)=>{var a=Ev(),o=lt(a),l=lt(o,!0);st(o);var c=gt(o,4),d=lt(c);d.value=d.__value="";var m=gt(d);vi(m,17,()=>t.poolVariables,zi,(g,v)=>{var b=Mv(),_=lt(b,!0);st(b);var p={};an(()=>{Ln(_,A(v)),p!==(p=A(v))&&(b.value=(b.__value=A(v))??"")}),N(g,b)}),st(c);var h;Yu(c),st(a),an(g=>{Ln(l,A(s).label),h!==(h=g)&&(c.value=(c.__value=g)??"",qu(c,g))},[()=>t.activeNode.inputMap?.[A(s).id]||(t.poolVariables.includes(A(s).id)?A(s).id:"")]),un("change",c,g=>{const v={...t.activeNode.inputMap||{}};v[A(s).id]=g.currentTarget.value,t.graphActions.updateNodeConfig(t.activeNode,{inputMap:v})}),N(r,a)}),st(i),st(e),N(n,e),ee()}yi(["change"]);var Tv=ue('<div class="connection-item"><span class="conn-id"> </span> <!></div>'),Iv=ue("<option> </option>"),Rv=ue('<div class="input-group"><label>Connected Sources</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="">+ Connect Node...</option><!></select></div></div>');function Cv(n,t){te(t,!0);function e(c){const d=c.target,m=d.value;m&&(t.graphActions.connectInput(t.activeNode.id,m),d.value="")}var i=Rv(),r=gt(lt(i),2),s=lt(r);vi(s,17,()=>t.connections.filter(c=>c.targetId===t.activeNode.id),zi,(c,d)=>{const m=Q(()=>t.nodes.find(p=>p.id===A(d).sourceId)),h=Q(()=>A(m)||{});var g=Tv(),v=lt(g),b=lt(v,!0);st(v);var _=gt(v,2);Dr(_,{variant:"danger",onclick:()=>t.graphActions.disconnectInput(t.activeNode.id,A(d).sourceId),children:(p,x)=>{wl(p,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(g),an(()=>Ln(b,A(m)?A(h).name||A(m).id:A(d).sourceId)),N(c,g)});var a=gt(s,2),o=lt(a);o.value=o.__value="";var l=gt(o);vi(l,17,()=>t.availableInputs,zi,(c,d)=>{const m=Q(()=>A(d));var h=Iv(),g=lt(h);st(h);var v={};an(()=>{Ln(g,`${(A(m).name||A(d).id)??""} (${A(d).type??""})`),v!==(v=A(d).id)&&(h.value=(h.__value=A(d).id)??"")}),N(c,h)}),st(a),a.value=a.__value="",st(r),st(i),un("change",a,e),N(n,i),ee()}yi(["change"]);var Dv=ue('<!> <div class="divider"></div>',1),Lv=ue('<div class="divider"></div> <!> <div class="divider"></div> <!>',1),Nv=ue('<div class="props-content svelte-1hotla4"><!> <!> <div class="divider"></div> <!> <!> <!></div>'),Pv=ue('<div class="node-properties svelte-1hotla4" style="height: 320px;"><div class="resize-handle svelte-1hotla4"></div> <div class="props-header svelte-1hotla4"><div class="header-title svelte-1hotla4"><h4 class="svelte-1hotla4"> </h4> <span> </span></div> <!></div> <!></div>');function Fv(n,t){te(t,!0);const e=Pn("graph-actions"),i=Pn("settings-registry")||{};let r=Q(()=>t.nodes.find(v=>v.id===fe.selectedNodeId)),s=Q(()=>A(r)||{}),a=$e(Us({}));Va(()=>{Be(a,Ot.request("GET_NODE_FACTORIES",void 0),!0)});let o=Q(()=>A(r)?t.nodes.filter(v=>(v.type==="source"||v.type==="processor"||v.type==="subject")&&v.id!==A(r).id&&!(A(s).inputIds||[]).includes(v.id)):[]),l=Q(()=>{if(!A(r))return[];const v=new Set,b=t.connections.filter(_=>_.targetId===A(r).id);for(const _ of b){const p=t.nodes.find(x=>x.id===_.sourceId);if(p&&p.exportMap)for(const x in p.exportMap)v.add(p.exportMap[x])}return Array.from(v)}),c=Q(()=>A(r)?nv(A(r)).filter(v=>!(A(r).exportMap||{})[v.id]):[]),d=Q(()=>A(r)&&A(r).subType?i[A(r).subType]:null);var m=Fe(),h=pe(m);{var g=v=>{const b=Q(()=>A(r).type==="subject"?"info":A(r).type==="source"?"success":A(r).type==="processor"?"warning":"error");var _=Pv(),p=lt(_);Tl(p,O=>gv?.(O));var x=gt(p,2),w=lt(x),u=lt(w),f=lt(u,!0);st(u);var T=gt(u,2),I=lt(T,!0);st(T),st(w);var y=gt(w,2);Dr(y,{onclick:()=>fe.selectedNodeId=null,children:(O,C)=>{wl(O,{size:14,weight:"bold"})},$$slots:{default:!0}}),st(x);var M=gt(x,2);ug(M,()=>A(r).id,O=>{var C=Nv(),B=lt(C);{let ht=Q(()=>A(s).name||"");Of(B,{label:"Display Name",get value(){return A(ht)},get placeholder(){return A(r).id},onchange:ft=>e.updateNodeConfig(A(r),{name:ft})})}var V=gt(B,2);{var X=ht=>{{let ft=Q(()=>A(r).subType||"dummy"),at=Q(()=>A(a)[A(r).type].map(Nt=>({value:Nt.subType,label:Nt.label})));Ii(ht,{label:"Implementation",get value(){return A(ft)},get options(){return A(at)},onchange:Nt=>e.changeNodeSubType(A(r),Nt)})}};Bt(V,ht=>{A(a)[A(r).type]&&A(a)[A(r).type].length>0&&ht(X)})}var W=gt(V,4);{var G=ht=>{var ft=Dv(),at=pe(ft);bv(at,{get activeNode(){return A(r)},get availableExportPorts(){return A(c)},get graphActions(){return e}}),nn(2),N(ht,ft)};Bt(W,ht=>{A(r).type!=="sink"&&ht(G)})}var z=gt(W,2);{var nt=ht=>{var ft=Fe(),at=pe(ft);Rf(at,()=>A(d),(Nt,_e)=>{_e(Nt,{get node(){return A(r)}})}),N(ht,ft)};Bt(z,ht=>{A(d)&&ht(nt)})}var et=gt(z,2);{var _t=ht=>{var ft=Lv(),at=gt(pe(ft),2);wv(at,{get activeNode(){return A(r)},get poolVariables(){return A(l)},get graphActions(){return e}});var Nt=gt(at,4);Cv(Nt,{get activeNode(){return A(r)},get connections(){return t.connections},get availableInputs(){return A(o)},get nodes(){return t.nodes},get graphActions(){return e}}),N(ht,ft)};Bt(et,ht=>{A(r).type!=="source"&&ht(_t)})}st(C),N(O,C)}),st(_),an(()=>{Ln(f,A(s).name||A(r).id),Ea(T,1,`badge ${A(b)??""}`,"svelte-1hotla4"),Ln(I,A(r).type)}),ag(3,_,()=>og,()=>({y:50,duration:250})),N(v,_)};Bt(h,v=>{A(r)&&v(g)})}N(n,m),ee()}const Vc=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4"];function Uv(n,t,e,i){if(i.width===0||i.height===0)return[];const r=new Map;for(let p=0;p<n.length;p++){const x=n[p];r.has(x.sourceId)||r.set(x.sourceId,[]),r.get(x.sourceId).push(x.targetId)}const s=[];for(let p=0;p<t.length;p++){const x=t[p],w=[x.id],u=new Set,f=new Set;for(;w.length>0;){const T=w.shift(),I=r.get(T)||[];for(let y=0;y<I.length;y++){const M=I[y];if(u.has(M))continue;u.add(M);const O=t.find(C=>C.id===M);O&&(O.type==="subject"?w.push(M):f.add(M))}}for(const T of f)s.push({sourceId:x.id,targetId:T})}const a=new Map;for(let p=0;p<s.length;p++){const x=s[p],w=x.sourceId+"->"+x.targetId;a.set(w,x)}const l=Array.from(a.values()).sort((p,x)=>p.sourceId.localeCompare(x.sourceId)),c=new Map,d=new Map;for(let p=0;p<l.length;p++){const x=l[p];c.set(x.sourceId,(c.get(x.sourceId)||0)+1),d.set(x.targetId,(d.get(x.targetId)||0)+1)}const m=new Map,h=new Map,g=[];let v=1/0;for(let p=0;p<l.length;p++){const x=l[p],w=e.get(x.sourceId),u=e.get(x.targetId);if(w&&u){const f=w.getBoundingClientRect(),T=u.getBoundingClientRect(),I=c.get(x.sourceId)||1,y=m.get(x.sourceId)||0;m.set(x.sourceId,y+1);const M=d.get(x.targetId)||1,O=h.get(x.targetId)||0;h.set(x.targetId,O+1);const C=(y-(I-1)/2)*4,B=(O-(M-1)/2)*4,V=f.top+f.height/2-i.top+C,X=f.left-i.left-2,W=T.top+T.height/2-i.top+B,G=T.left-i.left-2,z=Math.min(V,W),nt=Math.max(V,W),et=nt-z,_t=Math.min(X,G)-12;_t<v&&(v=_t),g.push({id:`${x.sourceId}-${x.targetId}-${p}`,startX:X,startY:V,endX:G,endY:W,minY:z,maxY:nt,length:et,baseX:_t,colorIndex:p%Vc.length,trackIndex:0})}}v===1/0&&(v=0),g.sort((p,x)=>p.length-x.length);const b=[];for(let p=0;p<g.length;p++){const x=g[p];let w=!1;for(let u=0;u<b.length;u++){const f=b[u];let T=!1;for(let I=0;I<f.length;I++){const y=f[I];if(x.minY+1<y.maxY&&x.maxY-1>y.minY){T=!0;break}}if(!T){f.push({minY:x.minY,maxY:x.maxY}),x.trackIndex=u,w=!0;break}}w||(b.push([{minY:x.minY,maxY:x.maxY}]),x.trackIndex=b.length-1)}const _=[];for(let p=0;p<g.length;p++){const x=g[p],w=v-x.trackIndex*6;let u="";Math.abs(x.startY-x.endY)<2?u=`M ${x.startX} ${x.startY} L ${x.endX} ${x.endY}`:u=`M ${x.startX} ${x.startY} L ${w} ${x.startY} L ${w} ${x.endY} L ${x.endX} ${x.endY}`,_.push({id:x.id,path:u,color:Vc[x.colorIndex],markerId:`arrow-${x.colorIndex}`})}return _}var Ov=$('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),Bv=$('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path svelte-1f7lbxv"></path>'),Vv=$('<svg class="data-connections-layer svelte-1f7lbxv" style="pointer-events: none; z-index: 1;"><defs></defs><!></svg>');function zv(n,t){te(t,!0);let e,i=$e(Us([]));function r(){if(!e)return;const l=e.getBoundingClientRect();Be(i,Uv(t.connections,t.nodes,fe.nodeElements,l),!0)}Va(()=>{const l=new ResizeObserver(r);l.observe(document.body),window.addEventListener("scroll",r,!0);const c=setInterval(r,100);return()=>{l.disconnect(),window.removeEventListener("scroll",r,!0),clearInterval(c)}});var s=Vv(),a=lt(s);vi(a,21,()=>Vc,zi,(l,c,d)=>{var m=Ov();ri(m,"id",`arrow-${d}`);var h=lt(m);st(m),an(()=>ri(h,"fill",A(c))),N(l,m)}),st(a);var o=gt(a);vi(o,17,()=>A(i),l=>l.id,(l,c)=>{var d=Bv();an(()=>{ri(d,"d",A(c).path),ri(d,"stroke",A(c).color),ri(d,"marker-end",`url(#${A(c).markerId??""})`)}),N(l,d)}),st(s),Ra(s,l=>e=l,()=>e),N(n,s),ee()}function Vf(n){return document.body.appendChild(n),{destroy(){n.parentNode&&n.parentNode.removeChild(n)}}}var Hv=$('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>');function kv(n,t){te(t,!0);const e=Pn("graph-actions");let i=$e(0),r=$e(0);function s(d){fe.dragConnectionSourceId&&(Be(i,d.clientX,!0),Be(r,d.clientY,!0))}function a(d){fe.dragConnectionSourceId&&(fe.dragConnectionTargetId&&fe.dragConnectionTargetId!==fe.dragConnectionSourceId&&e.connectInput(fe.dragConnectionTargetId,fe.dragConnectionSourceId),fe.dragConnectionSourceId=null,fe.dragConnectionTargetId=null)}var o=Fe();wa("pointermove",Uc,s),wa("pointerup",Uc,a);var l=pe(o);{var c=d=>{const m=Q(()=>fe.dragStartX),h=Q(()=>fe.dragStartY),g=Q(()=>Math.min(A(m),A(i))-20);var v=Hv(),b=gt(lt(v));st(v),Tl(v,_=>Vf?.(_)),an(()=>ri(b,"d",`M ${A(m)} ${A(h)} L ${A(g)} ${A(h)} L ${A(g)} ${A(r)} L ${A(i)} ${A(r)}`)),N(d,v)};Bt(l,d=>{fe.dragConnectionSourceId&&d(c)})}N(n,o),ee()}var Gv=ue('<div class="palette-overlay svelte-15d5wgw" role="presentation"></div>'),Wv=ue('<div class="editor svelte-15d5wgw"><div class="editor-content"><div class="editor-header svelte-15d5wgw"><h3 class="svelte-15d5wgw">Graph Editor</h3> <div class="palette-container svelte-15d5wgw"><!></div></div> <div class="tree-wrapper svelte-15d5wgw"><!> <div class="tree svelte-15d5wgw"></div> <!></div></div> <!> <!> <!></div>');function Zv(n,t){te(t,!0);let e=$e(Us([])),i=$e(Us([]));const r=Us({activeId:null,x:0,y:0});Ta("palette-state",r);let s=Q(()=>A(e).filter(I=>!I.parentId));function a(){const I=Ot.request("GET_GRAPH_STATE",void 0);I&&(Be(e,I.nodes,!0),Be(i,I.connections,!0))}Va(()=>{a(),Ot.on("GRAPH_UPDATED",a)}),bf(()=>{Ot.off("GRAPH_UPDATED",a)});function o(I){I.stopPropagation();const y=I.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=y.left,r.y=y.bottom+4)}const l={removeNode:I=>{Ot.request("REMOVE_NODE",{id:I}),fe.selectedNodeId===I&&(fe.selectedNodeId=null)},addNode:(I,y)=>{const M=y+"-"+Math.random().toString(36).substring(2,6),O=y==="subject"?"default":"dummy",C=Ot.request("CREATE_NODE",{id:M,type:y,subType:O,parentId:I||void 0});C&&(Ot.request("REGISTER_NODE",{node:C}),r.activeId=null,fe.selectedNodeId=M)},updateNodeConfig:(I,y)=>{const M=I,O={name:M.name,capacity:M.capacity,operation:M.operation,textureId:M.textureId,bufferId:M.bufferId,url:M.url,dataPath:M.dataPath,timeKey:M.timeKey,unpackArray:M.unpackArray,unpackKey:M.unpackKey,unpackValue:M.unpackValue,data:M.data?Array.from(M.data):void 0,vertices:M.vertices,indices:M.indices,uvs:M.uvs,inputIds:M.inputIds?[...M.inputIds]:[],exportMap:I.exportMap?JSON.parse(JSON.stringify(I.exportMap)):void 0,inputMap:I.inputMap?JSON.parse(JSON.stringify(I.inputMap)):void 0,...y},C=Ot.request("CREATE_NODE",{id:I.id,type:I.type,subType:I.subType||"dummy",parentId:I.parentId,config:O});C&&Ot.request("REGISTER_NODE",{node:C})},changeNodeSubType:(I,y)=>{const M=I,O={inputIds:M.inputIds?[...M.inputIds]:[]},C=Ot.request("CREATE_NODE",{id:I.id,type:I.type,subType:y,parentId:I.parentId,config:O});C&&Ot.request("REGISTER_NODE",{node:C})},connectInput:(I,y)=>{Ot.request("CONNECT_NODES",{sourceId:y,targetId:I})},disconnectInput:(I,y)=>{Ot.request("DISCONNECT_NODES",{sourceId:y,targetId:I})}};Ta("graph-actions",l);function c(I){const y=r.activeId==="root"?null:r.activeId;l.addNode(y,I)}var d=Wv();wa("click",Uc,()=>r.activeId=null);var m=lt(d),h=lt(m),g=gt(lt(h),2),v=lt(g);Dr(v,{title:"Add Root Node",onclick:o,children:(I,y)=>{ju(I,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(g),st(h);var b=gt(h,2),_=lt(b);zv(_,{get connections(){return A(i)},get nodes(){return A(e)}});var p=gt(_,2);vi(p,21,()=>A(s),zi,(I,y)=>{Bf(I,{get node(){return A(y)},get nodes(){return A(e)}})}),st(p);var x=gt(p,2);{var w=I=>{var y=Gv();Tl(y,M=>Vf?.(M)),un("click",y,()=>r.activeId=null),N(I,y)};Bt(x,I=>{r.activeId&&I(w)})}st(b),st(m);var u=gt(m,2);Fv(u,{get nodes(){return A(e)},get connections(){return A(i)}});var f=gt(u,2);{let I=Q(()=>r.activeId!==null);mv(f,{get show(){return A(I)},get x(){return r.x},get y(){return r.y},onAdd:c})}var T=gt(f,2);kv(T,{}),st(d),N(n,d),ee()}yi(["click"]);const Ju="183",Xv=0,Jd=1,Yv=2,wo=1,qv=2,pa=3,Nr=0,zn=1,qn=2,ar=0,Os=1,Qd=2,$d=3,th=4,jv=5,Kr=100,Kv=101,Jv=102,Qv=103,$v=104,ty=200,ey=201,ny=202,iy=203,zc=204,Hc=205,ry=206,sy=207,ay=208,oy=209,ly=210,cy=211,uy=212,dy=213,hy=214,kc=0,Gc=1,Wc=2,Gs=3,Zc=4,Xc=5,Yc=6,qc=7,zf=0,fy=1,py=2,Oi=0,Hf=1,kf=2,Gf=3,Wf=4,Zf=5,Xf=6,Yf=7,qf=300,ns=301,Ws=302,Wl=303,Zl=304,Il=306,jc=1e3,sr=1001,Kc=1002,_n=1003,my=1004,Qa=1005,Sn=1006,Xl=1007,Qr=1008,si=1009,jf=1010,Kf=1011,Ca=1012,Qu=1013,Hi=1014,Ni=1015,cr=1016,$u=1017,td=1018,Da=1020,Jf=35902,Qf=35899,$f=1021,tp=1022,gi=1023,ur=1026,$r=1027,ep=1028,ed=1029,Zs=1030,nd=1031,id=1033,To=33776,Io=33777,Ro=33778,Co=33779,Jc=35840,Qc=35841,$c=35842,tu=35843,eu=36196,nu=37492,iu=37496,ru=37488,su=37489,au=37490,ou=37491,lu=37808,cu=37809,uu=37810,du=37811,hu=37812,fu=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,yu=37819,xu=37820,Su=37821,bu=36492,Mu=36494,Eu=36495,Au=36283,wu=36284,Tu=36285,Iu=36286,gy=3200,_y=0,vy=1,Rr="",ti="srgb",Xs="srgb-linear",Zo="linear",Ne="srgb",cs=7680,eh=519,yy=512,xy=513,Sy=514,rd=515,by=516,My=517,sd=518,Ey=519,nh=35044,ih="300 es",Pi=2e3,Xo=2001;function Ay(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wy(){const n=Yo("canvas");return n.style.display="block",n}const rh={};function sh(...n){const t="THREE."+n.shift();console.log(t,...n)}function np(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=np(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function be(...n){n=np(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function qo(...n){const t=n.join(" ");t in rh||(rh[t]=!0,$t(...n))}function Ty(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Iy={[kc]:Gc,[Wc]:Yc,[Zc]:qc,[Gs]:Xc,[Gc]:kc,[Yc]:Wc,[qc]:Zc,[Xc]:Gs};class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=Math.PI/180,Ru=180/Math.PI;function za(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function ge(n,t,e){return Math.max(t,Math.min(e,n))}function Ry(n,t){return(n%t+t)%t}function ql(n,t,e){return(1-e)*n+e*t}function sa(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(t=0,e=0){Ve.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ta{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],m=i[r+3],h=s[a+0],g=s[a+1],v=s[a+2],b=s[a+3];if(m!==b||l!==h||c!==g||d!==v){let _=l*h+c*g+d*v+m*b;_<0&&(h=-h,g=-g,v=-v,b=-b,_=-_);let p=1-o;if(_<.9995){const x=Math.acos(_),w=Math.sin(x);p=Math.sin(p*x)/w,o=Math.sin(o*x)/w,l=l*p+h*o,c=c*p+g*o,d=d*p+v*o,m=m*p+b*o}else{l=l*p+h*o,c=c*p+g*o,d=d*p+v*o,m=m*p+b*o;const x=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=x,c*=x,d*=x,m*=x}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],m=s[a],h=s[a+1],g=s[a+2],v=s[a+3];return t[e]=o*v+d*m+l*g-c*h,t[e+1]=l*v+d*h+c*m-o*g,t[e+2]=c*v+d*g+o*h-l*m,t[e+3]=d*v-o*m-l*h-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),m=o(s/2),h=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*d*m+c*g*v,this._y=c*g*m-h*d*v,this._z=c*d*v+h*g*m,this._w=c*d*m-h*g*v;break;case"YXZ":this._x=h*d*m+c*g*v,this._y=c*g*m-h*d*v,this._z=c*d*v-h*g*m,this._w=c*d*m+h*g*v;break;case"ZXY":this._x=h*d*m-c*g*v,this._y=c*g*m+h*d*v,this._z=c*d*v+h*g*m,this._w=c*d*m-h*g*v;break;case"ZYX":this._x=h*d*m-c*g*v,this._y=c*g*m+h*d*v,this._z=c*d*v-h*g*m,this._w=c*d*m+h*g*v;break;case"YZX":this._x=h*d*m+c*g*v,this._y=c*g*m+h*d*v,this._z=c*d*v-h*g*m,this._w=c*d*m-h*g*v;break;case"XZY":this._x=h*d*m-c*g*v,this._y=c*g*m-h*d*v,this._z=c*d*v+h*g*m,this._w=c*d*m+h*g*v;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],m=e[10],h=i+o+m;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>m){const g=2*Math.sqrt(1+i-o-m);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>m){const g=2*Math.sqrt(1+o-i-m);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+m-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),d=2*(o*e-s*r),m=2*(s*i-a*e);return this.x=e+l*c+a*m-o*d,this.y=i+l*d+o*c-s*m,this.z=r+l*m+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new Z,ah=new ta;class re{constructor(t,e,i,r,s,a,o,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],m=i[7],h=i[2],g=i[5],v=i[8],b=r[0],_=r[3],p=r[6],x=r[1],w=r[4],u=r[7],f=r[2],T=r[5],I=r[8];return s[0]=a*b+o*x+l*f,s[3]=a*_+o*w+l*T,s[6]=a*p+o*u+l*I,s[1]=c*b+d*x+m*f,s[4]=c*_+d*w+m*T,s[7]=c*p+d*u+m*I,s[2]=h*b+g*x+v*f,s[5]=h*_+g*w+v*T,s[8]=h*p+g*u+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=d*a-o*c,h=o*l-d*s,g=c*s-a*l,v=e*m+i*h+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return t[0]=m*b,t[1]=(r*c-d*i)*b,t[2]=(o*i-r*a)*b,t[3]=h*b,t[4]=(d*e-r*l)*b,t[5]=(r*s-o*e)*b,t[6]=g*b,t[7]=(i*l-c*e)*b,t[8]=(a*e-i*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new re,oh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cy(){const n={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ne&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xs]:{primaries:t,whitePoint:i,transfer:Zo,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:i,transfer:Ne,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const xe=Cy();function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class Dy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Yo("canvas")),us.width=t.width,us.height=t.height;const r=us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ly=0;class ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jl(r[a].image)):s.push(Jl(r[a]))}else s=Jl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Ny=0;const Ql=new Z;class Nn extends $s{constructor(t=Nn.DEFAULT_IMAGE,e=Nn.DEFAULT_MAPPING,i=sr,r=sr,s=Sn,a=Qr,o=gi,l=si,c=Nn.DEFAULT_ANISOTROPY,d=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=za(),this.name="",this.source=new ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jc:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jc:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=qf;Nn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,e=0,i=0,r=1){tn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],d=l[4],m=l[8],h=l[1],g=l[5],v=l[9],b=l[2],_=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(m-b)<.01&&Math.abs(v-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+b)<.1&&Math.abs(v+_)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,u=(g+1)/2,f=(p+1)/2,T=(d+h)/4,I=(m+b)/4,y=(v+_)/4;return w>u&&w>f?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=I/i):u>f?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=T/r,s=y/r):f<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(f),i=I/s,r=y/s),this.set(i,r,s,e),this}let x=Math.sqrt((_-v)*(_-v)+(m-b)*(m-b)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(_-v)/x,this.y=(m-b)/x,this.z=(h-d)/x,this.w=Math.acos((c+g+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Py extends $s{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ad(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Py{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ip extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t,e,i,r,s,a,o,l,c,d,m,h,g,v,b,_){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,d,m,h,g,v,b,_)}set(t,e,i,r,s,a,o,l,c,d,m,h,g,v,b,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=m,p[14]=h,p[3]=g,p[7]=v,p[11]=b,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const h=a*d,g=a*m,v=o*d,b=o*m;e[0]=l*d,e[4]=-l*m,e[8]=c,e[1]=g+v*c,e[5]=h-b*c,e[9]=-o*l,e[2]=b-h*c,e[6]=v+g*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,g=l*m,v=c*d,b=c*m;e[0]=h+b*o,e[4]=v*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*d,e[9]=-o,e[2]=g*o-v,e[6]=b+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,g=l*m,v=c*d,b=c*m;e[0]=h-b*o,e[4]=-a*m,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*d,e[9]=b-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,g=a*m,v=o*d,b=o*m;e[0]=l*d,e[4]=v*c-g,e[8]=h*c+b,e[1]=l*m,e[5]=b*c+h,e[9]=g*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,g=a*c,v=o*l,b=o*c;e[0]=l*d,e[4]=b-h*m,e[8]=v*m+g,e[1]=m,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=g*m+v,e[10]=h-b*m}else if(t.order==="XZY"){const h=a*l,g=a*c,v=o*l,b=o*c;e[0]=l*d,e[4]=-m,e[8]=c*d,e[1]=h*m+b,e[5]=a*d,e[9]=g*m-v,e[2]=v*m-g,e[6]=o*d,e[10]=b*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uy,t,Oy)}lookAt(t,e,i){const r=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(i,Wn),yr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(i,Wn)),yr.normalize(),$a.crossVectors(Wn,yr),r[0]=yr.x,r[4]=$a.x,r[8]=Wn.x,r[1]=yr.y,r[5]=$a.y,r[9]=Wn.y,r[2]=yr.z,r[6]=$a.z,r[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],m=i[5],h=i[9],g=i[13],v=i[2],b=i[6],_=i[10],p=i[14],x=i[3],w=i[7],u=i[11],f=i[15],T=r[0],I=r[4],y=r[8],M=r[12],O=r[1],C=r[5],B=r[9],V=r[13],X=r[2],W=r[6],G=r[10],z=r[14],nt=r[3],et=r[7],_t=r[11],ht=r[15];return s[0]=a*T+o*O+l*X+c*nt,s[4]=a*I+o*C+l*W+c*et,s[8]=a*y+o*B+l*G+c*_t,s[12]=a*M+o*V+l*z+c*ht,s[1]=d*T+m*O+h*X+g*nt,s[5]=d*I+m*C+h*W+g*et,s[9]=d*y+m*B+h*G+g*_t,s[13]=d*M+m*V+h*z+g*ht,s[2]=v*T+b*O+_*X+p*nt,s[6]=v*I+b*C+_*W+p*et,s[10]=v*y+b*B+_*G+p*_t,s[14]=v*M+b*V+_*z+p*ht,s[3]=x*T+w*O+u*X+f*nt,s[7]=x*I+w*C+u*W+f*et,s[11]=x*y+w*B+u*G+f*_t,s[15]=x*M+w*V+u*z+f*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],m=t[6],h=t[10],g=t[14],v=t[3],b=t[7],_=t[11],p=t[15],x=l*g-c*h,w=o*g-c*m,u=o*h-l*m,f=a*g-c*d,T=a*h-l*d,I=a*m-o*d;return e*(b*x-_*w+p*u)-i*(v*x-_*f+p*T)+r*(v*w-b*f+p*I)-s*(v*u-b*T+_*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=t[9],h=t[10],g=t[11],v=t[12],b=t[13],_=t[14],p=t[15],x=e*o-i*a,w=e*l-r*a,u=e*c-s*a,f=i*l-r*o,T=i*c-s*o,I=r*c-s*l,y=d*b-m*v,M=d*_-h*v,O=d*p-g*v,C=m*_-h*b,B=m*p-g*b,V=h*p-g*_,X=x*V-w*B+u*C+f*O-T*M+I*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/X;return t[0]=(o*V-l*B+c*C)*W,t[1]=(r*B-i*V-s*C)*W,t[2]=(b*I-_*T+p*f)*W,t[3]=(h*T-m*I-g*f)*W,t[4]=(l*O-a*V-c*M)*W,t[5]=(e*V-r*O+s*M)*W,t[6]=(_*u-v*I-p*w)*W,t[7]=(d*I-h*u+g*w)*W,t[8]=(a*B-o*O+c*y)*W,t[9]=(i*O-e*B-s*y)*W,t[10]=(v*T-b*u+p*x)*W,t[11]=(m*u-d*T-g*x)*W,t[12]=(o*M-a*C-l*y)*W,t[13]=(e*C-i*M+r*y)*W,t[14]=(b*w-v*f-_*x)*W,t[15]=(d*f-m*w+h*x)*W,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,m=o+o,h=s*c,g=s*d,v=s*m,b=a*d,_=a*m,p=o*m,x=l*c,w=l*d,u=l*m,f=i.x,T=i.y,I=i.z;return r[0]=(1-(b+p))*f,r[1]=(g+u)*f,r[2]=(v-w)*f,r[3]=0,r[4]=(g-u)*T,r[5]=(1-(h+p))*T,r[6]=(_+x)*T,r[7]=0,r[8]=(v+w)*I,r[9]=(_-x)*I,r[10]=(1-(h+b))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),l=ds.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ui.copy(this);const c=1/a,d=1/o,m=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=d,ui.elements[5]*=d,ui.elements[6]*=d,ui.elements[8]*=m,ui.elements[9]*=m,ui.elements[10]*=m,e.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Pi,l=!1){const c=this.elements,d=2*s/(e-t),m=2*s/(i-r),h=(e+t)/(e-t),g=(i+r)/(i-r);let v,b;if(l)v=s/(a-s),b=a*s/(a-s);else if(o===Pi)v=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Xo)v=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Pi,l=!1){const c=this.elements,d=2/(e-t),m=2/(i-r),h=-(e+t)/(e-t),g=-(i+r)/(i-r);let v,b;if(l)v=1/(a-s),b=a/(a-s);else if(o===Pi)v=-2/(a-s),b=-(a+s)/(a-s);else if(o===Xo)v=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ds=new Z,ui=new on,Uy=new Z(0,0,0),Oy=new Z(1,1,1),yr=new Z,$a=new Z,Wn=new Z,ch=new on,uh=new ta;class dr{constructor(t=0,e=0,i=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],m=r[2],h=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let By=0;const dh=new Z,hs=new ta,qi=new on,to=new Z,aa=new Z,Vy=new Z,zy=new ta,hh=new Z(1,0,0),fh=new Z(0,1,0),ph=new Z(0,0,1),mh={type:"added"},Hy={type:"removed"},fs={type:"childadded",child:null},$l={type:"childremoved",child:null};class Kn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const t=new Z,e=new dr,i=new ta,r=new Z(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new re}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(aa,to,this.up):qi.lookAt(to,aa,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(qi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),fs.child=t,this.dispatchEvent(fs),fs.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hy),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,t,Vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const m=l[c];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),m=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Kn.DEFAULT_UP=new Z(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class eo extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ky={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const b of t.hand.values()){const _=e.getJointPose(b,i),p=this._getHandJoint(c,b);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=d.position.distanceTo(m.position),g=.02,v=.005;c.inputState.pinching&&h>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},no={h:0,s:0,l:0};function ec(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ae{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=xe.workingColorSpace){if(t=Ry(t,1),e=ge(e,0,1),i=ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ec(a,s,t+1/3),this.g=ec(a,s,t),this.b=ec(a,s,t-1/3)}return xe.colorSpaceToWorking(this,r),this}setStyle(t,e=ti){function i(s){s!==void 0&&parseFloat(s)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){const i=sp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return xe.workingToColorSpace(xn.copy(this),t),Math.round(ge(xn.r*255,0,255))*65536+Math.round(ge(xn.g*255,0,255))*256+Math.round(ge(xn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(xn.copy(this),e);const i=xn.r,r=xn.g,s=xn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=ti){xe.workingToColorSpace(xn.copy(this),t);const e=xn.r,i=xn.g,r=xn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+e,xr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xr),t.getHSL(no);const i=ql(xr.h,no.h,e),r=ql(xr.s,no.s,e),s=ql(xr.l,no.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ae;Ae.NAMES=sp;class Gy extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const di=new Z,ji=new Z,nc=new Z,Ki=new Z,ps=new Z,ms=new Z,gh=new Z,ic=new Z,rc=new Z,sc=new Z,ac=new tn,oc=new tn,lc=new tn;class mi{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),di.subVectors(t,e),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){di.subVectors(r,e),ji.subVectors(i,e),nc.subVectors(t,e);const a=di.dot(di),o=di.dot(ji),l=di.dot(nc),c=ji.dot(ji),d=ji.dot(nc),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,g=(c*l-o*d)*h,v=(a*d-o*l)*h;return s.set(1-g-v,v,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(lc,s.z),a}static isFrontFacing(t,e,i,r){return di.subVectors(i,e),ji.subVectors(t,e),di.cross(ji).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),di.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return mi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ps.subVectors(r,i),ms.subVectors(s,i),ic.subVectors(t,i);const l=ps.dot(ic),c=ms.dot(ic);if(l<=0&&c<=0)return e.copy(i);rc.subVectors(t,r);const d=ps.dot(rc),m=ms.dot(rc);if(d>=0&&m<=d)return e.copy(r);const h=l*m-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(ps,a);sc.subVectors(t,s);const g=ps.dot(sc),v=ms.dot(sc);if(v>=0&&g<=v)return e.copy(s);const b=g*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(ms,o);const _=d*v-g*m;if(_<=0&&m-d>=0&&g-v>=0)return gh.subVectors(s,r),o=(m-d)/(m-d+(g-v)),e.copy(r).addScaledVector(gh,o);const p=1/(_+b+h);return a=b*p,o=h*p,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ha{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oa),ro.subVectors(this.max,oa),gs.subVectors(t.a,oa),_s.subVectors(t.b,oa),vs.subVectors(t.c,oa),Sr.subVectors(_s,gs),br.subVectors(vs,_s),Hr.subVectors(gs,vs);let e=[0,-Sr.z,Sr.y,0,-br.z,br.y,0,-Hr.z,Hr.y,Sr.z,0,-Sr.x,br.z,0,-br.x,Hr.z,0,-Hr.x,-Sr.y,Sr.x,0,-br.y,br.x,0,-Hr.y,Hr.x,0];return!cc(e,gs,_s,vs,ro)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,gs,_s,vs,ro))?!1:(so.crossVectors(Sr,br),e=[so.x,so.y,so.z],cc(e,gs,_s,vs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],hi=new Z,io=new Ha,gs=new Z,_s=new Z,vs=new Z,Sr=new Z,br=new Z,Hr=new Z,oa=new Z,ro=new Z,so=new Z,kr=new Z;function cc(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kr.fromArray(n,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),d=i.dot(kr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const sn=new Z,ao=new Ve;let Wy=0;class Vi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=sa(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nh&&(t.usage=this.usage),t}}class ap extends Vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class op extends Vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class lr extends Vi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Zy=new Ha,la=new Z,uc=new Z;class od{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Zy.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;la.subVectors(t,this.center);const e=la.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(la.copy(t.center).add(uc)),this.expandByPoint(la.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Xy=0;const Qn=new on,dc=new Kn,ys=new Z,Zn=new Ha,ca=new Ha,mn=new Z;class hr extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ay(t)?op:ap)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new re().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lr(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Zn.min,ca.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,ca.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(ca.min),Zn.expandByPoint(ca.max))}Zn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)mn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(mn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)mn.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),mn.add(ys)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new Z,l[y]=new Z;const c=new Z,d=new Z,m=new Z,h=new Ve,g=new Ve,v=new Ve,b=new Z,_=new Z;function p(y,M,O){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),m.fromBufferAttribute(i,O),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),v.fromBufferAttribute(s,O),d.sub(c),m.sub(c),g.sub(h),v.sub(h);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(b.copy(d).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(C),_.copy(m).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(C),o[y].add(b),o[M].add(b),o[O].add(b),l[y].add(_),l[M].add(_),l[O].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,M=x.length;y<M;++y){const O=x[y],C=O.start,B=O.count;for(let V=C,X=C+B;V<X;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const w=new Z,u=new Z,f=new Z,T=new Z;function I(y){f.fromBufferAttribute(r,y),T.copy(f);const M=o[y];w.copy(M),w.sub(f.multiplyScalar(f.dot(M))).normalize(),u.crossVectors(T,M);const C=u.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,C)}for(let y=0,M=x.length;y<M;++y){const O=x[y],C=O.start,B=O.count;for(let V=C,X=C+B;V<X;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,d=new Z,m=new Z;if(t)for(let h=0,g=t.count;h<g;h+=3){const v=t.getX(h+0),b=t.getX(h+1),_=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,_),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,g=e.count;h<g;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,m=o.normalized,h=new c.constructor(l.length*d);let g=0,v=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?g=l[b]*o.data.stride+o.offset:g=l[b]*d;for(let p=0;p<d;p++)h[v++]=c[g++]}return new Vi(h,d,m)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,m=c.length;d<m;d++){const h=c[d],g=t(h,i);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let m=0,h=c.length;m<h;m++){const g=c[m];d.push(g.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],m=s[c];for(let h=0,g=m.length;h<g;h++)d.push(m[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yy=0;class Rl extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Os,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qi=new Z,hc=new Z,oo=new Z,Mr=new Z,fc=new Z,lo=new Z,pc=new Z;class qy{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){hc.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Mr.copy(this.origin).sub(hc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(oo),o=Mr.dot(this.direction),l=-Mr.dot(oo),c=Mr.lengthSq(),d=Math.abs(1-a*a);let m,h,g,v;if(d>0)if(m=a*l-o,h=a*o-l,v=s*d,m>=0)if(h>=-v)if(h<=v){const b=1/d;m*=b,h*=b,g=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h=-s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;else h<=-v?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-l),s),g=-m*m+h*(h+2*l)+c):h<=v?(m=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-l),s),g=-m*m+h*(h+2*l)+c);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),g=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(hc).addScaledVector(oo,h),g}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,r,s){fc.subVectors(e,t),lo.subVectors(i,t),pc.crossVectors(fc,lo);let a=this.direction.dot(pc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mr.subVectors(this.origin,t);const l=o*this.direction.dot(lo.crossVectors(Mr,lo));if(l<0)return null;const c=o*this.direction.dot(fc.cross(Mr));if(c<0||l+c>a)return null;const d=-o*Mr.dot(pc);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends Rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _h=new on,Gr=new qy,co=new od,vh=new Z,uo=new Z,ho=new Z,fo=new Z,mc=new Z,po=new Z,yh=new Z,mo=new Z;class jn extends Kn{constructor(t=new hr,e=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],m=s[l];d!==0&&(mc.fromBufferAttribute(m,t),a?po.addScaledVector(mc,d):po.addScaledVector(mc.sub(e),d))}e.add(po)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),Gr.copy(t.ray).recast(t.near),!(co.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(co,vh)===null||Gr.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(_h),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const _=h[v],p=a[_.materialIndex],x=Math.max(_.start,g.start),w=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let u=x,f=w;u<f;u+=3){const T=o.getX(u),I=o.getX(u+1),y=o.getX(u+2);r=go(this,p,t,i,c,d,m,T,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let _=v,p=b;_<p;_+=3){const x=o.getX(_),w=o.getX(_+1),u=o.getX(_+2);r=go(this,a,t,i,c,d,m,x,w,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,b=h.length;v<b;v++){const _=h[v],p=a[_.materialIndex],x=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let u=x,f=w;u<f;u+=3){const T=u,I=u+1,y=u+2;r=go(this,p,t,i,c,d,m,T,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let _=v,p=b;_<p;_+=3){const x=_,w=_+1,u=_+2;r=go(this,a,t,i,c,d,m,x,w,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function jy(n,t,e,i,r,s,a,o){let l;if(t.side===zn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Nr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,uo),n.getVertexPosition(l,ho),n.getVertexPosition(c,fo);const d=jy(n,t,e,i,uo,ho,fo,yh);if(d){const m=new Z;mi.getBarycoord(yh,uo,ho,fo,m),r&&(d.uv=mi.getInterpolatedAttribute(r,o,l,c,m,new Ve)),s&&(d.uv1=mi.getInterpolatedAttribute(s,o,l,c,m,new Ve)),a&&(d.normal=mi.getInterpolatedAttribute(a,o,l,c,m,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Z,materialIndex:0};mi.getNormal(uo,ho,fo,h.normal),d.face=h,d.barycoord=m}return d}class Ky extends Nn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=_n,d=_n,m,h){super(null,a,o,l,c,d,r,s,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new Z,Jy=new Z,Qy=new re;class jr{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=gc.subVectors(i,e).cross(Jy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qy.getNormalMatrix(t),r=this.coplanarPoint(gc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new od,$y=new Ve(.5,.5),_o=new Z;class lp{constructor(t=new jr,e=new jr,i=new jr,r=new jr,s=new jr,a=new jr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],m=s[5],h=s[6],g=s[7],v=s[8],b=s[9],_=s[10],p=s[11],x=s[12],w=s[13],u=s[14],f=s[15];if(r[0].setComponents(c-a,g-d,p-v,f-x).normalize(),r[1].setComponents(c+a,g+d,p+v,f+x).normalize(),r[2].setComponents(c+o,g+m,p+b,f+w).normalize(),r[3].setComponents(c-o,g-m,p-b,f-w).normalize(),i)r[4].setComponents(l,h,_,u).normalize(),r[5].setComponents(c-l,g-h,p-_,f-u).normalize();else if(r[4].setComponents(c-l,g-h,p-_,f-u).normalize(),e===Pi)r[5].setComponents(c+l,g+h,p+_,f+u).normalize();else if(e===Xo)r[5].setComponents(l,h,_,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const e=$y.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(_o.x=r.normal.x>0?t.max.x:t.min.x,_o.y=r.normal.y>0?t.max.y:t.min.y,_o.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends Nn{constructor(t=[],e=ns,i,r,s,a,o,l,c,d){super(t,e,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class La extends Nn{constructor(t,e,i=Hi,r,s,a,o=_n,l=_n,c,d=ur,m=1){if(d!==ur&&d!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:m};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ad(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class t2 extends La{constructor(t,e=Hi,i=ns,r,s,a=_n,o=_n,l,c=ur){const d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class up extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ka extends hr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],m=[];let h=0,g=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lr(c,3)),this.setAttribute("normal",new lr(d,3)),this.setAttribute("uv",new lr(m,2));function v(b,_,p,x,w,u,f,T,I,y,M){const O=u/I,C=f/y,B=u/2,V=f/2,X=T/2,W=I+1,G=y+1;let z=0,nt=0;const et=new Z;for(let _t=0;_t<G;_t++){const ht=_t*C-V;for(let ft=0;ft<W;ft++){const at=ft*O-B;et[b]=at*x,et[_]=ht*w,et[p]=X,c.push(et.x,et.y,et.z),et[b]=0,et[_]=0,et[p]=T>0?1:-1,d.push(et.x,et.y,et.z),m.push(ft/I),m.push(1-_t/y),z+=1}}for(let _t=0;_t<y;_t++)for(let ht=0;ht<I;ht++){const ft=h+ht+W*_t,at=h+ht+W*(_t+1),Nt=h+(ht+1)+W*(_t+1),_e=h+(ht+1)+W*_t;l.push(ft,at,_e),l.push(at,Nt,_e),nt+=6}o.addGroup(g,nt,M),g+=nt,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ga extends hr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,m=t/o,h=e/l,g=[],v=[],b=[],_=[];for(let p=0;p<d;p++){const x=p*h-a;for(let w=0;w<c;w++){const u=w*m-s;v.push(u,-x,0),b.push(0,0,1),_.push(w/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const w=x+c*p,u=x+c*(p+1),f=x+1+c*(p+1),T=x+1+c*p;g.push(w,u,T),g.push(u,f,T)}this.setIndex(g),this.setAttribute("position",new lr(v,3)),this.setAttribute("normal",new lr(b,3)),this.setAttribute("uv",new lr(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ys(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function In(n){const t={};for(let e=0;e<n.length;e++){const i=Ys(n[e]);for(const r in i)t[r]=i[r]}return t}function e2(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const n2={clone:Ys,merge:In};var i2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i2,this.fragmentShader=r2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=e2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class s2 extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class a2 extends Rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o2 extends Rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vo=new Z,yo=new ta,bi=new Z;class hp extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vo,yo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(vo,yo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Z,xh=new Ve,Sh=new Ve;class pi extends hp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ru*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ru*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,e){return this.getViewBounds(t,xh,Sh),e.subVectors(Sh,xh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ld extends hp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=-90,Ss=1;class l2 extends Kn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pi(xs,Ss,t,e);r.layers=this.layers,this.add(r);const s=new pi(xs,Ss,t,e);s.layers=this.layers,this.add(s);const a=new pi(xs,Ss,t,e);a.layers=this.layers,this.add(a);const o=new pi(xs,Ss,t,e);o.layers=this.layers,this.add(o);const l=new pi(xs,Ss,t,e);l.layers=this.layers,this.add(l);const c=new pi(xs,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,h,g),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class c2 extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function bh(n,t,e,i){const r=u2(i);switch(e){case $f:return n*t;case ep:return n*t/r.components*r.byteLength;case ed:return n*t/r.components*r.byteLength;case Zs:return n*t*2/r.components*r.byteLength;case nd:return n*t*2/r.components*r.byteLength;case tp:return n*t*3/r.components*r.byteLength;case gi:return n*t*4/r.components*r.byteLength;case id:return n*t*4/r.components*r.byteLength;case To:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qc:case tu:return Math.max(n,16)*Math.max(t,8)/4;case Jc:case $c:return Math.max(n,8)*Math.max(t,8)/2;case eu:case nu:case ru:case su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:case ou:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case mu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _u:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case bu:case Mu:case Eu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Au:case wu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tu:case Iu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u2(n){switch(n){case si:case jf:return{byteLength:1,components:1};case Ca:case Kf:case cr:return{byteLength:2,components:1};case $u:case td:return{byteLength:2,components:4};case Hi:case Qu:case Ni:return{byteLength:4,components:1};case Jf:case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);function fp(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function d2(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,m=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const d=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,d);else{m.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<m.length;g++){const v=m[h],b=m[g];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,m[h]=b)}m.length=h+1;for(let g=0,v=m.length;g<v;g++){const b=m[g];n.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var h2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f2=`#ifdef USE_ALPHAHASH
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
#endif`,p2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v2=`#ifdef USE_AOMAP
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
#endif`,y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x2=`#ifdef USE_BATCHING
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
#endif`,S2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A2=`#ifdef USE_IRIDESCENCE
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
#endif`,w2=`#ifdef USE_BUMPMAP
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
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F2=`#define PI 3.141592653589793
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
} // validated`,U2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O2=`vec3 transformedNormal = objectNormal;
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
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k2="gl_FragColor = linearToOutputTexel( gl_FragColor );",G2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W2=`#ifdef USE_ENVMAP
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
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,j2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$2=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cx=`PhysicalMaterial material;
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
#endif`,ux=`uniform sampler2D dfgLUT;
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
}`,dx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
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
#endif`,Fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`#include <common>
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
}`,vS=`#if DEPTH_PACKING == 3200
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
}`,yS=`#define DISTANCE
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
}`,xS=`#define DISTANCE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,wS=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,NS=`#define PHONG
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
}`,PS=`#define PHONG
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
}`,FS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,OS=`#define TOON
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
}`,BS=`#define TOON
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
}`,VS=`uniform float size;
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
}`,zS=`uniform vec3 diffuse;
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
}`,HS=`#include <common>
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
}`,kS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:h2,alphahash_pars_fragment:f2,alphamap_fragment:p2,alphamap_pars_fragment:m2,alphatest_fragment:g2,alphatest_pars_fragment:_2,aomap_fragment:v2,aomap_pars_fragment:y2,batching_pars_vertex:x2,batching_vertex:S2,begin_vertex:b2,beginnormal_vertex:M2,bsdfs:E2,iridescence_fragment:A2,bumpmap_pars_fragment:w2,clipping_planes_fragment:T2,clipping_planes_pars_fragment:I2,clipping_planes_pars_vertex:R2,clipping_planes_vertex:C2,color_fragment:D2,color_pars_fragment:L2,color_pars_vertex:N2,color_vertex:P2,common:F2,cube_uv_reflection_fragment:U2,defaultnormal_vertex:O2,displacementmap_pars_vertex:B2,displacementmap_vertex:V2,emissivemap_fragment:z2,emissivemap_pars_fragment:H2,colorspace_fragment:k2,colorspace_pars_fragment:G2,envmap_fragment:W2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:X2,envmap_pars_vertex:Y2,envmap_physical_pars_fragment:rx,envmap_vertex:q2,fog_vertex:j2,fog_pars_vertex:K2,fog_fragment:J2,fog_pars_fragment:Q2,gradientmap_pars_fragment:$2,lightmap_pars_fragment:tx,lights_lambert_fragment:ex,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ax,lights_phong_fragment:ox,lights_phong_pars_fragment:lx,lights_physical_fragment:cx,lights_physical_pars_fragment:ux,lights_fragment_begin:dx,lights_fragment_maps:hx,lights_fragment_end:fx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:xx,map_particle_pars_fragment:Sx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Ex,morphcolor_vertex:Ax,morphnormal_vertex:wx,morphtarget_pars_vertex:Tx,morphtarget_vertex:Ix,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Dx,normal_pars_vertex:Lx,normal_vertex:Nx,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Fx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:Vx,packing:zx,premultiplied_alpha_fragment:Hx,project_vertex:kx,dithering_fragment:Gx,dithering_pars_fragment:Wx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:qx,shadowmap_vertex:jx,shadowmask_pars_fragment:Kx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:$x,skinnormal_vertex:tS,specularmap_fragment:eS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:rS,transmission_fragment:sS,transmission_pars_fragment:aS,uv_pars_fragment:oS,uv_pars_vertex:lS,uv_vertex:cS,worldpos_vertex:uS,background_vert:dS,background_frag:hS,backgroundCube_vert:fS,backgroundCube_frag:pS,cube_vert:mS,cube_frag:gS,depth_vert:_S,depth_frag:vS,distance_vert:yS,distance_frag:xS,equirect_vert:SS,equirect_frag:bS,linedashed_vert:MS,linedashed_frag:ES,meshbasic_vert:AS,meshbasic_frag:wS,meshlambert_vert:TS,meshlambert_frag:IS,meshmatcap_vert:RS,meshmatcap_frag:CS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:NS,meshphong_frag:PS,meshphysical_vert:FS,meshphysical_frag:US,meshtoon_vert:OS,meshtoon_frag:BS,points_vert:VS,points_frag:zS,shadow_vert:HS,shadow_frag:kS,sprite_vert:GS,sprite_frag:WS},vt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ti={basic:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:In([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:In([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:In([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:In([vt.points,vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:In([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:In([vt.common,vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:In([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:In([vt.sprite,vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:In([vt.common,vt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:In([vt.lights,vt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ti.physical={uniforms:In([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const xo={r:0,b:0,g:0},Zr=new dr,ZS=new on;function XS(n,t,e,i,r,s){const a=new Ae(0);let o=r===!0?0:1,l,c,d=null,m=0,h=null;function g(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){const u=x.backgroundBlurriness>0;w=t.get(w,u)}return w}function v(x){let w=!1;const u=g(x);u===null?_(a,o):u&&u.isColor&&(_(u,1),w=!0);const f=n.xr.getEnvironmentBlendMode();f==="additive"?e.buffers.color.setClear(0,0,0,1,s):f==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(x,w){const u=g(w);u&&(u.isCubeTexture||u.mapping===Il)?(c===void 0&&(c=new jn(new ka(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ys(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(f,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Zr.copy(w.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(Zr)),c.material.toneMapped=xe.getTransfer(u.colorSpace)!==Ne,(d!==u||m!==u.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=u,m=u.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new jn(new Ga(2,2),new ki({name:"BackgroundMaterial",uniforms:Ys(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(u.colorSpace)!==Ne,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(d!==u||m!==u.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=u,m=u.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function _(x,w){x.getRGB(xo,dp(n)),e.buffers.color.setClear(xo.r,xo.g,xo.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),o=w,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,_(a,o)},render:v,addToRenderList:b,dispose:p}}function YS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,B,V,X,W){let G=!1;const z=m(C,X,V,B);s!==z&&(s=z,c(s.object)),G=g(C,X,V,W),G&&v(C,X,V,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,u(C,B,V,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function m(C,B,V,X){const W=X.wireframe===!0;let G=i[B.id];G===void 0&&(G={},i[B.id]=G);const z=C.isInstancedMesh===!0?C.id:0;let nt=G[z];nt===void 0&&(nt={},G[z]=nt);let et=nt[V.id];et===void 0&&(et={},nt[V.id]=et);let _t=et[W];return _t===void 0&&(_t=h(l()),et[W]=_t),_t}function h(C){const B=[],V=[],X=[];for(let W=0;W<e;W++)B[W]=0,V[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:X,object:C,attributes:{},index:null}}function g(C,B,V,X){const W=s.attributes,G=B.attributes;let z=0;const nt=V.getAttributes();for(const et in nt)if(nt[et].location>=0){const ht=W[et];let ft=G[et];if(ft===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),ht===void 0||ht.attribute!==ft||ft&&ht.data!==ft.data)return!0;z++}return s.attributesNum!==z||s.index!==X}function v(C,B,V,X){const W={},G=B.attributes;let z=0;const nt=V.getAttributes();for(const et in nt)if(nt[et].location>=0){let ht=G[et];ht===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor));const ft={};ft.attribute=ht,ht&&ht.data&&(ft.data=ht.data),W[et]=ft,z++}s.attributes=W,s.attributesNum=z,s.index=X}function b(){const C=s.newAttributes;for(let B=0,V=C.length;B<V;B++)C[B]=0}function _(C){p(C,0)}function p(C,B){const V=s.newAttributes,X=s.enabledAttributes,W=s.attributeDivisors;V[C]=1,X[C]===0&&(n.enableVertexAttribArray(C),X[C]=1),W[C]!==B&&(n.vertexAttribDivisor(C,B),W[C]=B)}function x(){const C=s.newAttributes,B=s.enabledAttributes;for(let V=0,X=B.length;V<X;V++)B[V]!==C[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function w(C,B,V,X,W,G,z){z===!0?n.vertexAttribIPointer(C,B,V,W,G):n.vertexAttribPointer(C,B,V,X,W,G)}function u(C,B,V,X){b();const W=X.attributes,G=V.getAttributes(),z=B.defaultAttributeValues;for(const nt in G){const et=G[nt];if(et.location>=0){let _t=W[nt];if(_t===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const ht=_t.normalized,ft=_t.itemSize,at=t.get(_t);if(at===void 0)continue;const Nt=at.buffer,_e=at.type,K=at.bytesPerElement,ot=_e===n.INT||_e===n.UNSIGNED_INT||_t.gpuType===Qu;if(_t.isInterleavedBufferAttribute){const dt=_t.data,ne=dt.stride,Pt=_t.offset;if(dt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<et.locationSize;Jt++)p(et.location+Jt,dt.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Jt=0;Jt<et.locationSize;Jt++)_(et.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let Jt=0;Jt<et.locationSize;Jt++)w(et.location+Jt,ft/et.locationSize,_e,ht,ne*K,(Pt+ft/et.locationSize*Jt)*K,ot)}else{if(_t.isInstancedBufferAttribute){for(let dt=0;dt<et.locationSize;dt++)p(et.location+dt,_t.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let dt=0;dt<et.locationSize;dt++)_(et.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let dt=0;dt<et.locationSize;dt++)w(et.location+dt,ft/et.locationSize,_e,ht,ft*K,ft/et.locationSize*dt*K,ot)}}else if(z!==void 0){const ht=z[nt];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(et.location,ht);break;case 3:n.vertexAttrib3fv(et.location,ht);break;case 4:n.vertexAttrib4fv(et.location,ht);break;default:n.vertexAttrib1fv(et.location,ht)}}}}x()}function f(){M();for(const C in i){const B=i[C];for(const V in B){const X=B[V];for(const W in X){const G=X[W];for(const z in G)d(G[z].object),delete G[z];delete X[W]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const B=i[C.id];for(const V in B){const X=B[V];for(const W in X){const G=X[W];for(const z in G)d(G[z].object),delete G[z];delete X[W]}}delete i[C.id]}function I(C){for(const B in i){const V=i[B];for(const X in V){const W=V[X];if(W[C.id]===void 0)continue;const G=W[C.id];for(const z in G)d(G[z].object),delete G[z];delete W[C.id]}}}function y(C){for(const B in i){const V=i[B],X=C.isInstancedMesh===!0?C.id:0,W=V[X];if(W!==void 0){for(const G in W){const z=W[G];for(const nt in z)d(z[nt].object),delete z[nt];delete W[G]}delete V[X],Object.keys(V).length===0&&delete i[B]}}}function M(){O(),a=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:O,dispose:f,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:_,disableUnusedAttributes:x}}function qS(n,t,e){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,m){m!==0&&(n.drawArraysInstanced(i,c,d,m),e.update(d,i,m))}function o(c,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,m);let g=0;for(let v=0;v<m;v++)g+=d[v];e.update(g,i,1)}function l(c,d,m,h){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)a(c[v],d[v],h[v]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,m);let v=0;for(let b=0;b<m;b++)v+=d[b]*h[b];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==gi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const y=I===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==si&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ni&&!y)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&($t("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),f=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:u,maxSamples:f,samples:T}}function KS(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new jr,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const g=m.length!==0||h||i!==0||r;return r=h,i=m.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,g){const v=m.clippingPlanes,b=m.clipIntersection,_=m.clipShadows,p=n.get(m);if(!r||v===null||v.length===0||s&&!_)s?d(null):c();else{const x=s?0:i,w=x*4;let u=p.clippingState||null;l.value=u,u=d(v,h,w,g);for(let f=0;f!==w;++f)u[f]=e[f];p.clippingState=u,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(m,h,g,v){const b=m!==null?m.length:0;let _=null;if(b!==0){if(_=l.value,v!==!0||_===null){const p=g+b*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let w=0,u=g;w!==b;++w,u+=4)a.copy(m[w]).applyMatrix4(x,o),a.normal.toArray(_,u),_[u+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}const Cr=4,Mh=[.125,.215,.35,.446,.526,.582],Jr=20,JS=256,ua=new ld,Eh=new Ae;let _c=null,vc=0,yc=0,xc=!1;const QS=new Z;class Ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=QS}=s;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,vc,yc),this._renderer.xr.enabled=xc,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:cr,format:gi,colorSpace:Xs,depthBuffer:!1},r=wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$S(s)),this._blurMaterial=eb(s,t,e),this._ggxMaterial=tb(s,t,e)}return r}_compileMaterial(t){const e=new jn(new hr,t);this._renderer.compile(e,ua)}_sceneToCubeUV(t,e,i,r,s){const l=new pi(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,g=m.toneMapping;m.getClearColor(Eh),m.toneMapping=Oi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new ka,new Ps({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let p=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,p=!0):(_.color.copy(Eh),p=!0);for(let w=0;w<6;w++){const u=w%3;u===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[w],s.y,s.z)):u===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[w]));const f=this._cubeSize;bs(r,u*f,w>2?f:0,f,f),m.setRenderTarget(r),p&&m.render(b,l),m.render(t,l)}m.toneMapping=g,m.autoClear=h,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ns||t.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ua)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-d*d),h=0+c*1.25,g=m*h,{_lodMax:v}=this,b=this._sizeLods[i],_=3*b*(i>v-Cr?i-v+Cr:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=v-e,bs(s,_,p,3*b,2*b),r.setRenderTarget(s),r.render(o,ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,bs(t,_,p,3*b,2*b),r.setRenderTarget(t),r.render(o,ua)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const d=3,m=this._lodMeshes[r];m.material=c;const h=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Jr-1),b=s/v,_=isFinite(s)?1+Math.floor(d*b):Jr;_>Jr&&$t(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Jr}`);const p=[];let x=0;for(let I=0;I<Jr;++I){const y=I/b,M=Math.exp(-y*y/2);p.push(M),I===0?x+=M:I<_&&(x+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;h.envMap.value=t.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-i;const u=this._sizeLods[r],f=3*u*(r>w-Cr?r-w+Cr:0),T=4*(this._cubeSize-u);bs(e,f,T,3*u,2*u),l.setRenderTarget(e),l.render(m,ua)}}function $S(n){const t=[],e=[],i=[];let r=n;const s=n-Cr+1+Mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Cr?l=Mh[a-n+Cr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,m=1+c,h=[d,d,m,d,m,m,d,d,m,m,d,m],g=6,v=6,b=3,_=2,p=1,x=new Float32Array(b*v*g),w=new Float32Array(_*v*g),u=new Float32Array(p*v*g);for(let T=0;T<g;T++){const I=T%3*2/3-1,y=T>2?0:-1,M=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];x.set(M,b*v*T),w.set(h,_*v*T);const O=[T,T,T,T,T,T];u.set(O,p*v*T)}const f=new hr;f.setAttribute("position",new Vi(x,b)),f.setAttribute("uv",new Vi(w,_)),f.setAttribute("faceIndex",new Vi(u,p)),i.push(new jn(f,null)),r>Cr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function wh(n,t,e){const i=new Bi(n,t,e);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function tb(n,t,e){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function eb(n,t,e){const i=new Float32Array(Jr),r=new Z(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Th(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ih(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}class pp extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new cp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:ar});s.uniforms.tEquirect.value=e;const a=new jn(r,s),o=e.minFilter;return e.minFilter===Qr&&(e.minFilter=Sn),new l2(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function nb(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===Wl||g===Zl)if(t.has(h)){const v=t.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const b=new pp(v.height);return b.fromEquirectangularTexture(n,h),t.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,v=g===Wl||g===Zl,b=g===ns||g===Ws;if(v||b){let _=e.get(h);const p=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ah(n)),_=v?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return v&&x&&x.height>0||b&&x&&l(x)?(i===null&&(i=new Ah(n)),_=v?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",d),_.texture):null}}}return h}function o(h,g){return g===Wl?h.mapping=ns:g===Zl&&(h.mapping=Ws),h}function l(h){let g=0;const v=6;for(let b=0;b<v;b++)h[b]!==void 0&&g++;return g===v}function c(h){const g=h.target;g.removeEventListener("dispose",c);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function d(h){const g=h.target;g.removeEventListener("dispose",d);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function ib(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&qo("WebGLRenderer: "+i+" extension not supported."),r}}}function rb(n,t,e,i){const r={},s=new WeakMap;function a(m){const h=m.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(t.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(m){const h=m.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER)}function c(m){const h=[],g=m.index,v=m.attributes.position;let b=0;if(v===void 0)return;if(g!==null){const x=g.array;b=g.version;for(let w=0,u=x.length;w<u;w+=3){const f=x[w+0],T=x[w+1],I=x[w+2];h.push(f,T,T,I,I,f)}}else{const x=v.array;b=v.version;for(let w=0,u=x.length/3-1;w<u;w+=3){const f=w+0,T=w+1,I=w+2;h.push(f,T,T,I,I,f)}}const _=new(v.count>=65535?op:ap)(h,1);_.version=b;const p=s.get(m);p&&t.remove(p),s.set(m,_)}function d(m){const h=s.get(m);if(h){const g=m.index;g!==null&&h.version<g.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function sb(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,g){n.drawElements(i,g,s,h*a),e.update(g,i,1)}function c(h,g,v){v!==0&&(n.drawElementsInstanced(i,g,s,h*a,v),e.update(g,i,v))}function d(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,v);let _=0;for(let p=0;p<v;p++)_+=g[p];e.update(_,i,1)}function m(h,g,v,b){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)c(h[p]/a,g[p],b[p]);else{_.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,b,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x]*b[x];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ab(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ob(n,t,e){const i=new WeakMap,r=new tn;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),b===!0&&(w=3);let u=o.attributes.position.count*w,f=1;u>t.maxTextureSize&&(f=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const T=new Float32Array(u*f*4*m),I=new ip(T,u,f,m);I.type=Ni,I.needsUpdate=!0;const y=w*4;for(let O=0;O<m;O++){const C=_[O],B=p[O],V=x[O],X=u*f*4*O;for(let W=0;W<C.count;W++){const G=W*y;g===!0&&(r.fromBufferAttribute(C,W),T[X+G+0]=r.x,T[X+G+1]=r.y,T[X+G+2]=r.z,T[X+G+3]=0),v===!0&&(r.fromBufferAttribute(B,W),T[X+G+4]=r.x,T[X+G+5]=r.y,T[X+G+6]=r.z,T[X+G+7]=0),b===!0&&(r.fromBufferAttribute(V,W),T[X+G+8]=r.x,T[X+G+9]=r.y,T[X+G+10]=r.z,T[X+G+11]=V.itemSize===4?r.w:1)}}h={count:m,texture:I,size:new Ve(u,f)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function lb(n,t,e,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,m=c.geometry,h=t.get(c,m);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const cb={[Hf]:"LINEAR_TONE_MAPPING",[kf]:"REINHARD_TONE_MAPPING",[Gf]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[Xf]:"AGX_TONE_MAPPING",[Yf]:"NEUTRAL_TONE_MAPPING",[Zf]:"CUSTOM_TONE_MAPPING"};function ub(n,t,e,i,r){const s=new Bi(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Bi(t,e,{type:cr,depthBuffer:!1,stencilBuffer:!1}),o=new hr;o.setAttribute("position",new lr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lr([0,2,0,0,2,0],2));const l=new s2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new jn(o,l),d=new ld(-1,1,1,-1,0,1);let m=null,h=null,g=!1,v,b=null,_=[],p=!1;this.setSize=function(x,w){s.setSize(x,w),a.setSize(x,w);for(let u=0;u<_.length;u++){const f=_[u];f.setSize&&f.setSize(x,w)}},this.setEffects=function(x){_=x,p=_.length>0&&_[0].isRenderPass===!0;const w=s.width,u=s.height;for(let f=0;f<_.length;f++){const T=_[f];T.setSize&&T.setSize(w,u)}},this.begin=function(x,w){if(g||x.toneMapping===Oi&&_.length===0)return!1;if(b=w,w!==null){const u=w.width,f=w.height;(s.width!==u||s.height!==f)&&this.setSize(u,f)}return p===!1&&x.setRenderTarget(s),v=x.toneMapping,x.toneMapping=Oi,!0},this.hasRenderPass=function(){return p},this.end=function(x,w){x.toneMapping=v,g=!0;let u=s,f=a;for(let T=0;T<_.length;T++){const I=_[T];if(I.enabled!==!1&&(I.render(x,f,u,w),I.needsSwap!==!1)){const y=u;u=f,f=y}}if(m!==x.outputColorSpace||h!==x.toneMapping){m=x.outputColorSpace,h=x.toneMapping,l.defines={},xe.getTransfer(m)===Ne&&(l.defines.SRGB_TRANSFER="");const T=cb[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,x.setRenderTarget(b),x.render(c,d),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mp=new Nn,Cu=new La(1,1),gp=new ip,_p=new Fy,vp=new cp,Rh=[],Ch=[],Dh=new Float32Array(16),Lh=new Float32Array(9),Nh=new Float32Array(4);function ea(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Rh[r];if(s===void 0&&(s=new Float32Array(r),Rh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dl(n,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function db(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function fb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function pb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function mb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),hn(e,i)}}function gb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),hn(e,i)}}function _b(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Dh.set(i),n.uniformMatrix4fv(this.addr,!1,Dh),hn(e,i)}}function vb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function Sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function bb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function Eb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function Ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function wb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=e.isReversedDepthBuffer()?sd:rd,s=Cu):s=mp,e.setTexture2D(t||s,r)}function Tb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||_p,r)}function Ib(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||vp,r)}function Rb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||gp,r)}function Cb(n){switch(n){case 5126:return db;case 35664:return hb;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return bb;case 36294:return Mb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Rb}}function Db(n,t){n.uniform1fv(this.addr,t)}function Lb(n,t){const e=ea(t,this.size,2);n.uniform2fv(this.addr,e)}function Nb(n,t){const e=ea(t,this.size,3);n.uniform3fv(this.addr,e)}function Pb(n,t){const e=ea(t,this.size,4);n.uniform4fv(this.addr,e)}function Fb(n,t){const e=ea(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ub(n,t){const e=ea(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ob(n,t){const e=ea(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bb(n,t){n.uniform1iv(this.addr,t)}function Vb(n,t){n.uniform2iv(this.addr,t)}function zb(n,t){n.uniform3iv(this.addr,t)}function Hb(n,t){n.uniform4iv(this.addr,t)}function kb(n,t){n.uniform1uiv(this.addr,t)}function Gb(n,t){n.uniform2uiv(this.addr,t)}function Wb(n,t){n.uniform3uiv(this.addr,t)}function Zb(n,t){n.uniform4uiv(this.addr,t)}function Xb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cu:a=mp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Yb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||_p,s[a])}function qb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||vp,s[a])}function jb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||gp,s[a])}function Kb(n){switch(n){case 5126:return Db;case 35664:return Lb;case 35665:return Nb;case 35666:return Pb;case 35674:return Fb;case 35675:return Ub;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return Vb;case 35668:case 35672:return zb;case 35669:case 35673:return Hb;case 5125:return kb;case 36294:return Gb;case 36295:return Wb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return jb}}class Jb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cb(e.type)}}class Qb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kb(e.type)}}class $b{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Ph(n,t){n.seq.push(t),n.map[t.id]=t}function tM(n,t,e){const i=n.name,r=i.length;for(Sc.lastIndex=0;;){const s=Sc.exec(i),a=Sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ph(e,c===void 0?new Jb(o,n,t):new Qb(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new $b(o),Ph(e,m)),e=m}}}class Do{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);tM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Fh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const eM=37297;let nM=0;function iM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Uh=new re;function rM(n){xe._getMatrix(Uh,xe.workingColorSpace,n);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Zo:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Oh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+iM(n.getShaderSource(t),o)}else return s}function sM(n,t){const e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const aM={[Hf]:"Linear",[kf]:"Reinhard",[Gf]:"Cineon",[Wf]:"ACESFilmic",[Xf]:"AgX",[Yf]:"Neutral",[Zf]:"Custom"};function oM(n,t){const e=aM[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new Z;function lM(){xe.getLuminanceCoefficients(So);const n=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function uM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ma(n){return n!==""}function Bh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(n){return n.replace(hM,pM)}const fM=new Map;function pM(n,t){let e=ae[t];if(e===void 0){const i=fM.get(t);if(i!==void 0)e=ae[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Du(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(mM,gM)}function gM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const _M={[wo]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function vM(n){return _M[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yM={[ns]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Il]:"ENVMAP_TYPE_CUBE_UV"};function xM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const SM={[Ws]:"ENVMAP_MODE_REFRACTION"};function bM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":SM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MM={[zf]:"ENVMAP_BLENDING_MULTIPLY",[fy]:"ENVMAP_BLENDING_MIX",[py]:"ENVMAP_BLENDING_ADD"};function EM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":MM[n.combine]||"ENVMAP_BLENDING_NONE"}function AM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wM(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vM(e),c=xM(e),d=bM(e),m=EM(e),h=AM(e),g=cM(e),v=uM(s),b=r.createProgram();let _,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ma).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(_=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?ae.tonemapping_pars_fragment:"",e.toneMapping!==Oi?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,sM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),a=Du(a),a=Bh(a,e),a=Vh(a,e),o=Du(o),o=Bh(o,e),o=Vh(o,e),a=zh(a),o=zh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=x+_+a,u=x+p+o,f=Fh(r,r.VERTEX_SHADER,w),T=Fh(r,r.FRAGMENT_SHADER,u);r.attachShader(b,f),r.attachShader(b,T),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function I(C){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(f)||"",X=r.getShaderInfoLog(T)||"",W=B.trim(),G=V.trim(),z=X.trim();let nt=!0,et=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,f,T);else{const _t=Oh(r,f,"vertex"),ht=Oh(r,T,"fragment");be("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+_t+`
`+ht)}else W!==""?$t("WebGLProgram: Program Info Log:",W):(G===""||z==="")&&(et=!1);et&&(C.diagnostics={runnable:nt,programLog:W,vertexShader:{log:G,prefix:_},fragmentShader:{log:z,prefix:p}})}r.deleteShader(f),r.deleteShader(T),y=new Do(r,b),M=dM(r,b)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(b,eM)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=f,this.fragmentShader=T,this}let TM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new RM(t),e.set(t,i)),i}}class RM{constructor(t){this.id=TM++,this.code=t,this.usedTimes=0}}function CM(n,t,e,i,r,s){const a=new rp,o=new IM,l=new Set,c=[],d=new Map,m=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,M,O,C,B){const V=C.fog,X=B.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=t.get(y.envMap||W,G),nt=z&&z.mapping===Il?z.image.height:null,et=g[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&$t("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=_t!==void 0?_t.length:0;let ft=0;X.morphAttributes.position!==void 0&&(ft=1),X.morphAttributes.normal!==void 0&&(ft=2),X.morphAttributes.color!==void 0&&(ft=3);let at,Nt,_e,K;if(et){const Ce=Ti[et];at=Ce.vertexShader,Nt=Ce.fragmentShader}else at=y.vertexShader,Nt=y.fragmentShader,o.update(y),_e=o.getVertexShaderID(y),K=o.getFragmentShaderID(y);const ot=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),ne=B.isInstancedMesh===!0,Pt=B.isBatchedMesh===!0,Jt=!!y.map,fn=!!y.matcap,ye=!!z,Re=!!y.aoMap,ze=!!y.lightMap,oe=!!y.bumpMap,Je=!!y.normalMap,L=!!y.displacementMap,rn=!!y.emissiveMap,Ee=!!y.metalnessMap,Ge=!!y.roughnessMap,Rt=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,F=y.iridescence>0,J=y.sheen>0,tt=y.transmission>0,j=Rt&&!!y.anisotropyMap,Et=R&&!!y.clearcoatMap,pt=R&&!!y.clearcoatNormalMap,Ut=R&&!!y.clearcoatRoughnessMap,qt=F&&!!y.iridescenceMap,it=F&&!!y.iridescenceThicknessMap,ct=J&&!!y.sheenColorMap,At=J&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,St=!!y.specularColorMap,le=!!y.specularIntensityMap,P=tt&&!!y.transmissionMap,mt=tt&&!!y.thicknessMap,ut=!!y.gradientMap,Mt=!!y.alphaMap,rt=y.alphaTest>0,q=!!y.alphaHash,wt=!!y.extensions;let Qt=Oi;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const We={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:Nt,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Pt,batchingColor:Pt&&B._colorsTexture!==null,instancing:ne,instancingColor:ne&&B.instanceColor!==null,instancingMorph:ne&&B.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Xs,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:fn,envMap:ye,envMapMode:ye&&z.mapping,envMapCubeUVHeight:nt,aoMap:Re,lightMap:ze,bumpMap:oe,normalMap:Je,displacementMap:L,emissiveMap:rn,normalMapObjectSpace:Je&&y.normalMapType===vy,normalMapTangentSpace:Je&&y.normalMapType===_y,metalnessMap:Ee,roughnessMap:Ge,anisotropy:Rt,anisotropyMap:j,clearcoat:R,clearcoatMap:Et,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ut,dispersion:S,iridescence:F,iridescenceMap:qt,iridescenceThicknessMap:it,sheen:J,sheenColorMap:ct,sheenRoughnessMap:At,specularMap:Tt,specularColorMap:St,specularIntensityMap:le,transmission:tt,transmissionMap:P,thicknessMap:mt,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:rt,alphaHash:q,combine:y.combine,mapUv:Jt&&v(y.map.channel),aoMapUv:Re&&v(y.aoMap.channel),lightMapUv:ze&&v(y.lightMap.channel),bumpMapUv:oe&&v(y.bumpMap.channel),normalMapUv:Je&&v(y.normalMap.channel),displacementMapUv:L&&v(y.displacementMap.channel),emissiveMapUv:rn&&v(y.emissiveMap.channel),metalnessMapUv:Ee&&v(y.metalnessMap.channel),roughnessMapUv:Ge&&v(y.roughnessMap.channel),anisotropyMapUv:j&&v(y.anisotropyMap.channel),clearcoatMapUv:Et&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(y.sheenRoughnessMap.channel),specularMapUv:Tt&&v(y.specularMap.channel),specularColorMapUv:St&&v(y.specularColorMap.channel),specularIntensityMapUv:le&&v(y.specularIntensityMap.channel),transmissionMapUv:P&&v(y.transmissionMap.channel),thicknessMapUv:mt&&v(y.thicknessMap.channel),alphaMapUv:Mt&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Je||Rt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Jt||Mt),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&Je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:dt,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Ne,decodeVideoTextureEmissive:rn&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===Ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qn,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)M.push(O),M.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(p(M,y),x(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const M=g[y.type];let O;if(M){const C=Ti[M];O=n2.clone(C.uniforms)}else O=y.uniforms;return O}function u(y,M){let O=d.get(M);return O!==void 0?++O.usedTimes:(O=new wM(n,M,y,r),c.push(O),d.set(M,O)),O}function f(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function I(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:w,acquireProgram:u,releaseProgram:f,releaseShaderCache:T,programs:c,dispose:I}}function DM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function LM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,v,b,_,p){let x=n[t];return x===void 0?(x={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:_,group:p},n[t]=x):(x.id=h.id,x.object=h,x.geometry=g,x.material=v,x.materialVariant=a(h),x.groupOrder=b,x.renderOrder=h.renderOrder,x.z=_,x.group=p),t++,x}function l(h,g,v,b,_,p){const x=o(h,g,v,b,_,p);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):e.push(x)}function c(h,g,v,b,_,p){const x=o(h,g,v,b,_,p);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):e.unshift(x)}function d(h,g){e.length>1&&e.sort(h||LM),i.length>1&&i.sort(g||kh),r.length>1&&r.sort(g||kh)}function m(){for(let h=t,g=n.length;h<g;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:d}}function NM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gh,n.set(i,[a])):r>=s.length?(a=new Gh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new Ae};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":e={color:new Ae,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function FM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let UM=0;function OM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function BM(n){const t=new PM,e=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new on,a=new on;function o(c){let d=0,m=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,v=0,b=0,_=0,p=0,x=0,w=0,u=0,f=0,T=0,I=0;c.sort(OM);for(let M=0,O=c.length;M<O;M++){const C=c[M],B=C.color,V=C.intensity,X=C.distance;let W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zs?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=B.r*V,m+=B.g*V,h+=B.b*V;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],V);I++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,nt=e.get(C);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=C.shadow.matrix,x++}i.directional[g]=G,g++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(B).multiplyScalar(V),G.distance=X,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[b]=G;const z=C.shadow;if(C.map&&(i.spotLightMap[f]=C.map,f++,z.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[b]=z.matrix,C.castShadow){const nt=e.get(C);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,i.spotShadow[b]=nt,i.spotShadowMap[b]=W,u++}b++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(B).multiplyScalar(V),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=G,_++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const z=C.shadow,nt=e.get(C);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,nt.shadowCameraNear=z.camera.near,nt.shadowCameraFar=z.camera.far,i.pointShadow[v]=nt,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=C.shadow.matrix,w++}i.point[v]=G,v++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(V),G.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[p]=G,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==g||y.pointLength!==v||y.spotLength!==b||y.rectAreaLength!==_||y.hemiLength!==p||y.numDirectionalShadows!==x||y.numPointShadows!==w||y.numSpotShadows!==u||y.numSpotMaps!==f||y.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=_,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=u+f-T,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,y.directionalLength=g,y.pointLength=v,y.spotLength=b,y.rectAreaLength=_,y.hemiLength=p,y.numDirectionalShadows=x,y.numPointShadows=w,y.numSpotShadows=u,y.numSpotMaps=f,y.numLightProbes=I,i.version=UM++)}function l(c,d){let m=0,h=0,g=0,v=0,b=0;const _=d.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const w=c[p];if(w.isDirectionalLight){const u=i.directional[m];u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(_),m++}else if(w.isSpotLight){const u=i.spot[g];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(_),u.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),u.halfWidth.set(w.width*.5,0,0),u.halfHeight.set(0,w.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const u=i.point[h];u.position.setFromMatrixPosition(w.matrixWorld),u.position.applyMatrix4(_),h++}else if(w.isHemisphereLight){const u=i.hemi[b];u.direction.setFromMatrixPosition(w.matrixWorld),u.direction.transformDirection(_),b++}}}return{setup:o,setupView:l,state:i}}function Wh(n){const t=new BM(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Wh(n),t.set(r,[o])):s>=a.length?(o=new Wh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`,kM=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],GM=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Zh=new on,da=new Z,bc=new Z;function WM(n,t,e){let i=new lp;const r=new Ve,s=new Ve,a=new tn,o=new a2,l=new o2,c={},d=e.maxTextureSize,m={[Nr]:zn,[zn]:Nr,[qn]:qn},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:zM,fragmentShader:HM}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new hr;v.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new jn(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(T,I,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===qv&&($t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const M=n.getRenderTarget(),O=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ar),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==this.type;V&&I.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=T.length;X<W;X++){const G=T[X],z=G.shadow;if(z===void 0){$t("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const nt=z.getFrameExtents();r.multiply(nt),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/nt.x),r.x=s.x*nt.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/nt.y),r.y=s.y*nt.y,z.mapSize.y=s.y));const et=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=et,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pa){if(G.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bi(r.x,r.y,{format:Zs,type:cr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new La(r.x,r.y,Ni),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=ur,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n}else G.isPointLight?(z.map=new pp(r.x),z.map.depthTexture=new t2(r.x,Hi)):(z.map=new Bi(r.x,r.y),z.map.depthTexture=new La(r.x,r.y,Hi)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=ur,this.type===wo?(z.map.depthTexture.compareFunction=et?sd:rd,z.map.depthTexture.minFilter=Sn,z.map.depthTexture.magFilter=Sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n);z.camera.updateProjectionMatrix()}const _t=z.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<_t;ht++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ht),n.clear();else{ht===0&&(n.setRenderTarget(z.map),n.clear());const ft=z.getViewport(ht);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),B.viewport(a)}if(G.isPointLight){const ft=z.camera,at=z.matrix,Nt=G.distance||ft.far;Nt!==ft.far&&(ft.far=Nt,ft.updateProjectionMatrix()),da.setFromMatrixPosition(G.matrixWorld),ft.position.copy(da),bc.copy(ft.position),bc.add(kM[ht]),ft.up.copy(GM[ht]),ft.lookAt(bc),ft.updateMatrixWorld(),at.makeTranslation(-da.x,-da.y,-da.z),Zh.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Zh,ft.coordinateSystem,ft.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),u(I,y,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===pa&&x(z,y),z.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(M,O,C)};function x(T,I){const y=t.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bi(r.x,r.y,{format:Zs,type:cr})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,y,h,b,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,y,g,b,null)}function w(T,I,y,M){let O=null;const C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)O=C;else if(O=y.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=O.uuid,V=I.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let W=X[V];W===void 0&&(W=O.clone(),X[V]=W,I.addEventListener("dispose",f)),O=W}if(O.visible=I.visible,O.wireframe=I.wireframe,M===pa?O.side=I.shadowSide!==null?I.shadowSide:I.side:O.side=I.shadowSide!==null?I.shadowSide:m[I.side],O.alphaMap=I.alphaMap,O.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,O.map=I.map,O.clipShadows=I.clipShadows,O.clippingPlanes=I.clippingPlanes,O.clipIntersection=I.clipIntersection,O.displacementMap=I.displacementMap,O.displacementScale=I.displacementScale,O.displacementBias=I.displacementBias,O.wireframeLinewidth=I.wireframeLinewidth,O.linewidth=I.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const B=n.properties.get(O);B.light=y}return O}function u(T,I,y,M,O){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===pa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const V=t.update(T),X=T.material;if(Array.isArray(X)){const W=V.groups;for(let G=0,z=W.length;G<z;G++){const nt=W[G],et=X[nt.materialIndex];if(et&&et.visible){const _t=w(T,et,M,O);T.onBeforeShadow(n,T,I,y,V,_t,nt),n.renderBufferDirect(y,null,V,_t,T,nt),T.onAfterShadow(n,T,I,y,V,_t,nt)}}}else if(X.visible){const W=w(T,X,M,O);T.onBeforeShadow(n,T,I,y,V,W,null),n.renderBufferDirect(y,null,V,W,T,null),T.onAfterShadow(n,T,I,y,V,W,null)}}const B=T.children;for(let V=0,X=B.length;V<X;V++)u(B[V],I,y,M,O)}function f(T){T.target.removeEventListener("dispose",f);for(const y in c){const M=c[y],O=T.target.uuid;O in M&&(M[O].dispose(),delete M[O])}}}function ZM(n,t){function e(){let P=!1;const mt=new tn;let ut=null;const Mt=new tn(0,0,0,0);return{setMask:function(rt){ut!==rt&&!P&&(n.colorMask(rt,rt,rt,rt),ut=rt)},setLocked:function(rt){P=rt},setClear:function(rt,q,wt,Qt,We){We===!0&&(rt*=Qt,q*=Qt,wt*=Qt),mt.set(rt,q,wt,Qt),Mt.equals(mt)===!1&&(n.clearColor(rt,q,wt,Qt),Mt.copy(mt))},reset:function(){P=!1,ut=null,Mt.set(-1,0,0,0)}}}function i(){let P=!1,mt=!1,ut=null,Mt=null,rt=null;return{setReversed:function(q){if(mt!==q){const wt=t.get("EXT_clip_control");q?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),mt=q;const Qt=rt;rt=null,this.setClear(Qt)}},getReversed:function(){return mt},setTest:function(q){q?ot(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(q){ut!==q&&!P&&(n.depthMask(q),ut=q)},setFunc:function(q){if(mt&&(q=Iy[q]),Mt!==q){switch(q){case kc:n.depthFunc(n.NEVER);break;case Gc:n.depthFunc(n.ALWAYS);break;case Wc:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case Zc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case Yc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=q}},setLocked:function(q){P=q},setClear:function(q){rt!==q&&(rt=q,mt&&(q=1-q),n.clearDepth(q))},reset:function(){P=!1,ut=null,Mt=null,rt=null,mt=!1}}}function r(){let P=!1,mt=null,ut=null,Mt=null,rt=null,q=null,wt=null,Qt=null,We=null;return{setTest:function(Ce){P||(Ce?ot(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Ce){mt!==Ce&&!P&&(n.stencilMask(Ce),mt=Ce)},setFunc:function(Ce,Xi,Yi){(ut!==Ce||Mt!==Xi||rt!==Yi)&&(n.stencilFunc(Ce,Xi,Yi),ut=Ce,Mt=Xi,rt=Yi)},setOp:function(Ce,Xi,Yi){(q!==Ce||wt!==Xi||Qt!==Yi)&&(n.stencilOp(Ce,Xi,Yi),q=Ce,wt=Xi,Qt=Yi)},setLocked:function(Ce){P=Ce},setClear:function(Ce){We!==Ce&&(n.clearStencil(Ce),We=Ce)},reset:function(){P=!1,mt=null,ut=null,Mt=null,rt=null,q=null,wt=null,Qt=null,We=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},m={},h=new WeakMap,g=[],v=null,b=!1,_=null,p=null,x=null,w=null,u=null,f=null,T=null,I=new Ae(0,0,0),y=0,M=!1,O=null,C=null,B=null,V=null,X=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),G=z>=1):nt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),G=z>=2);let et=null,_t={};const ht=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),at=new tn().fromArray(ht),Nt=new tn().fromArray(ft);function _e(P,mt,ut,Mt){const rt=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<ut;wt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(mt+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return q}const K={};K[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(Gs),oe(!1),Je(Jd),ot(n.CULL_FACE),Re(ar);function ot(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function dt(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function ne(P,mt){return m[P]!==mt?(n.bindFramebuffer(P,mt),m[P]=mt,P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=mt),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Pt(P,mt){let ut=g,Mt=!1;if(P){ut=h.get(mt),ut===void 0&&(ut=[],h.set(mt,ut));const rt=P.textures;if(ut.length!==rt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let q=0,wt=rt.length;q<wt;q++)ut[q]=n.COLOR_ATTACHMENT0+q;ut.length=rt.length,Mt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(ut)}function Jt(P){return v!==P?(n.useProgram(P),v=P,!0):!1}const fn={[Kr]:n.FUNC_ADD,[Kv]:n.FUNC_SUBTRACT,[Jv]:n.FUNC_REVERSE_SUBTRACT};fn[Qv]=n.MIN,fn[$v]=n.MAX;const ye={[ty]:n.ZERO,[ey]:n.ONE,[ny]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[ly]:n.SRC_ALPHA_SATURATE,[ay]:n.DST_COLOR,[ry]:n.DST_ALPHA,[iy]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[oy]:n.ONE_MINUS_DST_COLOR,[sy]:n.ONE_MINUS_DST_ALPHA,[cy]:n.CONSTANT_COLOR,[uy]:n.ONE_MINUS_CONSTANT_COLOR,[dy]:n.CONSTANT_ALPHA,[hy]:n.ONE_MINUS_CONSTANT_ALPHA};function Re(P,mt,ut,Mt,rt,q,wt,Qt,We,Ce){if(P===ar){b===!0&&(dt(n.BLEND),b=!1);return}if(b===!1&&(ot(n.BLEND),b=!0),P!==jv){if(P!==_||Ce!==M){if((p!==Kr||u!==Kr)&&(n.blendEquation(n.FUNC_ADD),p=Kr,u=Kr),Ce)switch(P){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qd:n.blendFunc(n.ONE,n.ONE);break;case $d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:be("WebGLState: Invalid blending: ",P);break}else switch(P){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $d:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",P);break}x=null,w=null,f=null,T=null,I.set(0,0,0),y=0,_=P,M=Ce}return}rt=rt||mt,q=q||ut,wt=wt||Mt,(mt!==p||rt!==u)&&(n.blendEquationSeparate(fn[mt],fn[rt]),p=mt,u=rt),(ut!==x||Mt!==w||q!==f||wt!==T)&&(n.blendFuncSeparate(ye[ut],ye[Mt],ye[q],ye[wt]),x=ut,w=Mt,f=q,T=wt),(Qt.equals(I)===!1||We!==y)&&(n.blendColor(Qt.r,Qt.g,Qt.b,We),I.copy(Qt),y=We),_=P,M=!1}function ze(P,mt){P.side===qn?dt(n.CULL_FACE):ot(n.CULL_FACE);let ut=P.side===zn;mt&&(ut=!ut),oe(ut),P.blending===Os&&P.transparent===!1?Re(ar):Re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Mt=P.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),rn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(P){O!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),O=P)}function Je(P){P!==Xv?(ot(n.CULL_FACE),P!==C&&(P===Jd?n.cullFace(n.BACK):P===Yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),C=P}function L(P){P!==B&&(G&&n.lineWidth(P),B=P)}function rn(P,mt,ut){P?(ot(n.POLYGON_OFFSET_FILL),(V!==mt||X!==ut)&&(V=mt,X=ut,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,ut))):dt(n.POLYGON_OFFSET_FILL)}function Ee(P){P?ot(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function Ge(P){P===void 0&&(P=n.TEXTURE0+W-1),et!==P&&(n.activeTexture(P),et=P)}function Rt(P,mt,ut){ut===void 0&&(et===null?ut=n.TEXTURE0+W-1:ut=et);let Mt=_t[ut];Mt===void 0&&(Mt={type:void 0,texture:void 0},_t[ut]=Mt),(Mt.type!==P||Mt.texture!==mt)&&(et!==ut&&(n.activeTexture(ut),et=ut),n.bindTexture(P,mt||K[P]),Mt.type=P,Mt.texture=mt)}function R(){const P=_t[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function J(){try{n.texSubImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function tt(){try{n.texSubImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function pt(){try{n.texStorage2D(...arguments)}catch(P){be("WebGLState:",P)}}function Ut(){try{n.texStorage3D(...arguments)}catch(P){be("WebGLState:",P)}}function qt(){try{n.texImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function it(){try{n.texImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function ct(P){at.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function At(P){Nt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Nt.copy(P))}function Tt(P,mt){let ut=c.get(mt);ut===void 0&&(ut=new WeakMap,c.set(mt,ut));let Mt=ut.get(P);Mt===void 0&&(Mt=n.getUniformBlockIndex(mt,P.name),ut.set(P,Mt))}function St(P,mt){const Mt=c.get(mt).get(P);l.get(mt)!==Mt&&(n.uniformBlockBinding(mt,Mt,P.__bindingPointIndex),l.set(mt,Mt))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},et=null,_t={},m={},h=new WeakMap,g=[],v=null,b=!1,_=null,p=null,x=null,w=null,u=null,f=null,T=null,I=new Ae(0,0,0),y=0,M=!1,O=null,C=null,B=null,V=null,X=null,at.set(0,0,n.canvas.width,n.canvas.height),Nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:dt,bindFramebuffer:ne,drawBuffers:Pt,useProgram:Jt,setBlending:Re,setMaterial:ze,setFlipSided:oe,setCullFace:Je,setLineWidth:L,setPolygonOffset:rn,setScissorTest:Ee,activeTexture:Ge,bindTexture:Rt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:qt,texImage3D:it,updateUBOMapping:Tt,uniformBlockBinding:St,texStorage2D:pt,texStorage3D:Ut,texSubImage2D:J,texSubImage3D:tt,compressedTexSubImage2D:j,compressedTexSubImage3D:Et,scissor:ct,viewport:At,reset:le}}function XM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap;let m;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return g?new OffscreenCanvas(R,S):Yo("canvas")}function b(R,S,F){let J=1;const tt=Rt(R);if((tt.width>F||tt.height>F)&&(J=F/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(J*tt.width),Et=Math.floor(J*tt.height);m===void 0&&(m=v(j,Et));const pt=S?v(j,Et):m;return pt.width=j,pt.height=Et,pt.getContext("2d").drawImage(R,0,0,j,Et),$t("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+Et+")."),pt}else return"data"in R&&$t("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function _(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,S,F,J,tt=!1){if(R!==null){if(n[R]!==void 0)return n[R];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),S===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),S===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),S===n.RGBA){const Et=tt?Zo:xe.getTransfer(J);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=Et===Ne?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function u(R,S){let F;return R?S===null||S===Hi||S===Da?F=n.DEPTH24_STENCIL8:S===Ni?F=n.DEPTH32F_STENCIL8:S===Ca&&(F=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hi||S===Da?F=n.DEPTH_COMPONENT24:S===Ni?F=n.DEPTH_COMPONENT32F:S===Ca&&(F=n.DEPTH_COMPONENT16),F}function f(R,S){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),y(S),S.isVideoTexture&&d.delete(S)}function I(R){const S=R.target;S.removeEventListener("dispose",I),O(S)}function y(R){const S=i.get(R);if(S.__webglInit===void 0)return;const F=R.source,J=h.get(F);if(J){const tt=J[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(R),Object.keys(J).length===0&&h.delete(F)}i.remove(R)}function M(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const F=R.source,J=h.get(F);delete J[S.__cacheKey],a.memory.textures--}function O(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let tt=0;tt<S.__webglFramebuffer[J].length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[J][tt]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=R.textures;for(let J=0,tt=F.length;J<tt;J++){const j=i.get(F[J]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(R)}let C=0;function B(){C=0}function V(){const R=C;return R>=r.maxTextures&&$t("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const F=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const J=R.image;if(J===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,R,S);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function G(R,S){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){K(F,R,S);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function z(R,S){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){K(F,R,S);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function nt(R,S){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ot(F,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const et={[jc]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},_t={[_n]:n.NEAREST,[my]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},ht={[yy]:n.NEVER,[Ey]:n.ALWAYS,[xy]:n.LESS,[rd]:n.LEQUAL,[Sy]:n.EQUAL,[sd]:n.GEQUAL,[by]:n.GREATER,[My]:n.NOTEQUAL};function ft(R,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Xl||S.magFilter===Qa||S.magFilter===Qr||S.minFilter===Sn||S.minFilter===Xl||S.minFilter===Qa||S.minFilter===Qr)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,et[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,et[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,et[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_t[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_t[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==Qa&&S.minFilter!==Qr||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function at(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let tt=h.get(J);tt===void 0&&(tt={},h.set(J,tt));const j=X(S);if(j!==R.__cacheKey){tt[j]===void 0&&(tt[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[j].usedTimes++;const Et=tt[R.__cacheKey];Et!==void 0&&(tt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),R.__cacheKey=j,R.__webglTexture=tt[j].texture}return F}function Nt(R,S,F){return Math.floor(Math.floor(R/F)/S)}function _e(R,S,F,J){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,F,J,S.data);else{j.sort((it,ct)=>it.start-ct.start);let Et=0;for(let it=1;it<j.length;it++){const ct=j[Et],At=j[it],Tt=ct.start+ct.count,St=Nt(At.start,S.width,4),le=Nt(ct.start,S.width,4);At.start<=Tt+1&&St===le&&Nt(At.start+At.count-1,S.width,4)===St?ct.count=Math.max(ct.count,At.start+At.count-ct.start):(++Et,j[Et]=At)}j.length=Et+1;const pt=n.getParameter(n.UNPACK_ROW_LENGTH),Ut=n.getParameter(n.UNPACK_SKIP_PIXELS),qt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let it=0,ct=j.length;it<ct;it++){const At=j[it],Tt=Math.floor(At.start/4),St=Math.ceil(At.count/4),le=Tt%S.width,P=Math.floor(Tt/S.width),mt=St,ut=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,le),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,le,P,mt,ut,F,J,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,qt)}}function K(R,S,F){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const tt=at(R,S),j=S.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+F);const Et=i.get(j);if(j.version!==Et.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);const pt=xe.getPrimaries(xe.workingColorSpace),Ut=S.colorSpace===Rr?null:xe.getPrimaries(S.colorSpace),qt=S.colorSpace===Rr||pt===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let it=b(S.image,!1,r.maxTextureSize);it=Ge(S,it);const ct=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let Tt=w(S.internalFormat,ct,At,S.colorSpace,S.isVideoTexture);ft(J,S);let St;const le=S.mipmaps,P=S.isVideoTexture!==!0,mt=Et.__version===void 0||tt===!0,ut=j.dataReady,Mt=f(S,it);if(S.isDepthTexture)Tt=u(S.format===$r,S.type),mt&&(P?e.texStorage2D(n.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,ct,At,null));else if(S.isDataTexture)if(le.length>0){P&&mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,le[0].width,le[0].height);for(let rt=0,q=le.length;rt<q;rt++)St=le[rt],P?ut&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,St.width,St.height,ct,At,St.data):e.texImage2D(n.TEXTURE_2D,rt,Tt,St.width,St.height,0,ct,At,St.data);S.generateMipmaps=!1}else P?(mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,it.width,it.height),ut&&_e(S,it,ct,At)):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,ct,At,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){P&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,le[0].width,le[0].height,it.depth);for(let rt=0,q=le.length;rt<q;rt++)if(St=le[rt],S.format!==gi)if(ct!==null)if(P){if(ut)if(S.layerUpdates.size>0){const wt=bh(St.width,St.height,S.format,S.type);for(const Qt of S.layerUpdates){const We=St.data.subarray(Qt*wt/St.data.BYTES_PER_ELEMENT,(Qt+1)*wt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Qt,St.width,St.height,1,ct,We)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,it.depth,ct,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Tt,St.width,St.height,it.depth,0,St.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,it.depth,ct,At,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Tt,St.width,St.height,it.depth,0,ct,At,St.data)}else{P&&mt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,le[0].width,le[0].height);for(let rt=0,q=le.length;rt<q;rt++)St=le[rt],S.format!==gi?ct!==null?P?ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,St.width,St.height,ct,St.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Tt,St.width,St.height,0,St.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ut&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,St.width,St.height,ct,At,St.data):e.texImage2D(n.TEXTURE_2D,rt,Tt,St.width,St.height,0,ct,At,St.data)}else if(S.isDataArrayTexture)if(P){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,it.width,it.height,it.depth),ut)if(S.layerUpdates.size>0){const rt=bh(it.width,it.height,S.format,S.type);for(const q of S.layerUpdates){const wt=it.data.subarray(q*rt/it.data.BYTES_PER_ELEMENT,(q+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,it.width,it.height,1,ct,At,wt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ct,At,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,ct,At,it.data);else if(S.isData3DTexture)P?(mt&&e.texStorage3D(n.TEXTURE_3D,Mt,Tt,it.width,it.height,it.depth),ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ct,At,it.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,ct,At,it.data);else if(S.isFramebufferTexture){if(mt)if(P)e.texStorage2D(n.TEXTURE_2D,Mt,Tt,it.width,it.height);else{let rt=it.width,q=it.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Tt,rt,q,0,ct,At,null),rt>>=1,q>>=1}}else if(le.length>0){if(P&&mt){const rt=Rt(le[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,rt.width,rt.height)}for(let rt=0,q=le.length;rt<q;rt++)St=le[rt],P?ut&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ct,At,St):e.texImage2D(n.TEXTURE_2D,rt,Tt,ct,At,St);S.generateMipmaps=!1}else if(P){if(mt){const rt=Rt(it);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,rt.width,rt.height)}ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,At,it)}else e.texImage2D(n.TEXTURE_2D,0,Tt,ct,At,it);_(S)&&p(J),Et.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ot(R,S,F){if(S.image.length!==6)return;const J=at(R,S),tt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const j=i.get(tt);if(tt.version!==j.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const Et=xe.getPrimaries(xe.workingColorSpace),pt=S.colorSpace===Rr?null:xe.getPrimaries(S.colorSpace),Ut=S.colorSpace===Rr||Et===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let q=0;q<6;q++)!qt&&!it?ct[q]=b(S.image[q],!0,r.maxCubemapSize):ct[q]=it?S.image[q].image:S.image[q],ct[q]=Ge(S,ct[q]);const At=ct[0],Tt=s.convert(S.format,S.colorSpace),St=s.convert(S.type),le=w(S.internalFormat,Tt,St,S.colorSpace),P=S.isVideoTexture!==!0,mt=j.__version===void 0||J===!0,ut=tt.dataReady;let Mt=f(S,At);ft(n.TEXTURE_CUBE_MAP,S);let rt;if(qt){P&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,le,At.width,At.height);for(let q=0;q<6;q++){rt=ct[q].mipmaps;for(let wt=0;wt<rt.length;wt++){const Qt=rt[wt];S.format!==gi?Tt!==null?P?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt,0,0,Qt.width,Qt.height,Tt,Qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt,le,Qt.width,Qt.height,0,Qt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt,0,0,Qt.width,Qt.height,Tt,St,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt,le,Qt.width,Qt.height,0,Tt,St,Qt.data)}}}else{if(rt=S.mipmaps,P&&mt){rt.length>0&&Mt++;const q=Rt(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,le,q.width,q.height)}for(let q=0;q<6;q++)if(it){P?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ct[q].width,ct[q].height,Tt,St,ct[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,le,ct[q].width,ct[q].height,0,Tt,St,ct[q].data);for(let wt=0;wt<rt.length;wt++){const We=rt[wt].image[q].image;P?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt+1,0,0,We.width,We.height,Tt,St,We.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt+1,le,We.width,We.height,0,Tt,St,We.data)}}else{P?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Tt,St,ct[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,le,Tt,St,ct[q]);for(let wt=0;wt<rt.length;wt++){const Qt=rt[wt];P?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt+1,0,0,Tt,St,Qt.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,wt+1,le,Tt,St,Qt.image[q])}}}_(S)&&p(n.TEXTURE_CUBE_MAP),j.__version=tt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function dt(R,S,F,J,tt,j){const Et=s.convert(F.format,F.colorSpace),pt=s.convert(F.type),Ut=w(F.internalFormat,Et,pt,F.colorSpace),qt=i.get(S),it=i.get(F);if(it.__renderTarget=S,!qt.__hasExternalTextures){const ct=Math.max(1,S.width>>j),At=Math.max(1,S.height>>j);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,Ut,ct,At,S.depth,0,Et,pt,null):e.texImage2D(tt,j,Ut,ct,At,0,Et,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),rn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,tt,it.__webglTexture,0,L(S)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,tt,it.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,tt=J&&J.isDepthTexture?J.type:null,j=u(S.stencilBuffer,tt),Et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;rn(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(S),j,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(S),j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,R)}else{const J=S.textures;for(let tt=0;tt<J.length;tt++){const j=J[tt],Et=s.convert(j.format,j.colorSpace),pt=s.convert(j.type),Ut=w(j.internalFormat,Et,pt,j.colorSpace);rn(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(S),Ut,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(S),Ut,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ut,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(R,S,F){const J=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(S.depthTexture);if(tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),ft(n.TEXTURE_CUBE_MAP,S.depthTexture);const qt=s.convert(S.depthTexture.format),it=s.convert(S.depthTexture.type);let ct;S.depthTexture.format===ur?ct=n.DEPTH_COMPONENT24:S.depthTexture.format===$r&&(ct=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ct,S.width,S.height,0,qt,it,null)}}else W(S.depthTexture,0);const j=tt.__webglTexture,Et=L(S),pt=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ut=S.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ur)rn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ut,pt,j,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Ut,pt,j,0);else if(S.depthTexture.format===$r)rn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ut,pt,j,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Ut,pt,j,0);else throw new Error("Unknown depthTexture format")}function Jt(R){const S=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)Pt(S.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?Pt(S.__webglFramebuffer[0],R,0):Pt(S.__webglFramebuffer,R,0)}else if(F){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),ne(S.__webglDepthbuffer[J],R,!1);else{const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,j)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ne(S.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function fn(R,S,F){const J=i.get(R);S!==void 0&&dt(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Jt(R)}function ye(R){const S=R.texture,F=i.get(R),J=i.get(S);R.addEventListener("dispose",I);const tt=R.textures,j=R.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let Ut=0;Ut<S.mipmaps.length;Ut++)F.__webglFramebuffer[pt][Ut]=n.createFramebuffer()}else F.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)F.__webglFramebuffer[pt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Et)for(let pt=0,Ut=tt.length;pt<Ut;pt++){const qt=i.get(tt[pt]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&rn(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){const Ut=tt[pt];F.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);const qt=s.convert(Ut.format,Ut.colorSpace),it=s.convert(Ut.type),ct=w(Ut.internalFormat,qt,it,Ut.colorSpace,R.isXRRenderTarget===!0),At=L(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,ct,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ft(n.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ut=0;Ut<S.mipmaps.length;Ut++)dt(F.__webglFramebuffer[pt][Ut],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut);else dt(F.__webglFramebuffer[pt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,Ut=tt.length;pt<Ut;pt++){const qt=tt[pt],it=i.get(qt);let ct=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,it.__webglTexture),ft(ct,qt),dt(F.__webglFramebuffer,R,qt,n.COLOR_ATTACHMENT0+pt,ct,0),_(qt)&&p(ct)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),ft(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ut=0;Ut<S.mipmaps.length;Ut++)dt(F.__webglFramebuffer[Ut],R,S,n.COLOR_ATTACHMENT0,pt,Ut);else dt(F.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,pt,0);_(S)&&p(pt),e.unbindTexture()}R.depthBuffer&&Jt(R)}function Re(R){const S=R.textures;for(let F=0,J=S.length;F<J;F++){const tt=S[F];if(_(tt)){const j=x(R),Et=i.get(tt).__webglTexture;e.bindTexture(j,Et),p(j),e.unbindTexture()}}}const ze=[],oe=[];function Je(R){if(R.samples>0){if(rn(R)===!1){const S=R.textures,F=R.width,J=R.height;let tt=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(R),pt=S.length>1;if(pt)for(let qt=0;qt<S.length;qt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Ut=R.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<S.length;qt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const it=i.get(S[qt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,tt,n.NEAREST),l===!0&&(ze.length=0,oe.length=0,ze.push(n.COLOR_ATTACHMENT0+qt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(j),oe.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let qt=0;qt<S.length;qt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const it=i.get(S[qt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function rn(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ge(R,S){const F=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Xs&&F!==Rr&&(xe.getTransfer(F)===Ne?(J!==gi||tt!==si)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",F)),S}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=nt,this.rebindTextures=fn,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function YM(n,t){function e(i,r=Rr){let s;const a=xe.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===$u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===td)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===Qu)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===$f)return n.ALPHA;if(i===tp)return n.RGB;if(i===gi)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===ep)return n.RED;if(i===ed)return n.RED_INTEGER;if(i===Zs)return n.RG;if(i===nd)return n.RG_INTEGER;if(i===id)return n.RGBA_INTEGER;if(i===To||i===Io||i===Ro||i===Co)if(a===Ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===Qc||i===$c||i===tu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===nu||i===iu||i===ru||i===su||i===au||i===ou)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eu||i===nu)return a===Ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===iu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ru)return s.COMPRESSED_R11_EAC;if(i===su)return s.COMPRESSED_SIGNED_R11_EAC;if(i===au)return s.COMPRESSED_RG11_EAC;if(i===ou)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===yu||i===xu||i===Su)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Su)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===Mu||i===Eu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===bu)return a===Ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Au||i===wu||i===Tu||i===Iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
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

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new up(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ki({vertexShader:qM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jn(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends $s{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,h=null,g=null,v=null;const b=typeof XRWebGLBinding<"u",_=new KM,p={},x=e.getContextAttributes();let w=null,u=null;const f=[],T=[],I=new Ve;let y=null;const M=new pi;M.viewport=new tn;const O=new pi;O.viewport=new tn;const C=[M,O],B=new c2;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=f[K];return ot===void 0&&(ot=new tc,f[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=f[K];return ot===void 0&&(ot=new tc,f[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=f[K];return ot===void 0&&(ot=new tc,f[K]=ot),ot.getHandSpace()};function W(K){const ot=T.indexOf(K.inputSource);if(ot===-1)return;const dt=f[ot];dt!==void 0&&(dt.update(K.inputSource,K.frame,c||a),dt.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",z);for(let K=0;K<f.length;K++){const ot=T[K];ot!==null&&(T[K]=null,f[K].disconnect(ot))}V=null,X=null,_.reset();for(const K in p)delete p[K];t.setRenderTarget(w),g=null,h=null,m=null,r=null,u=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,ne=null,Pt=null;x.depth&&(Pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=x.stencil?$r:ur,ne=x.stencil?Da:Hi);const Jt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Jt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),u=new Bi(h.textureWidth,h.textureHeight,{format:gi,type:si,depthTexture:new La(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const dt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Bi(g.framebufferWidth,g.framebufferHeight,{format:gi,type:si,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(K){for(let ot=0;ot<K.removed.length;ot++){const dt=K.removed[ot],ne=T.indexOf(dt);ne>=0&&(T[ne]=null,f[ne].disconnect(dt))}for(let ot=0;ot<K.added.length;ot++){const dt=K.added[ot];let ne=T.indexOf(dt);if(ne===-1){for(let Jt=0;Jt<f.length;Jt++)if(Jt>=T.length){T.push(dt),ne=Jt;break}else if(T[Jt]===null){T[Jt]=dt,ne=Jt;break}if(ne===-1)break}const Pt=f[ne];Pt&&Pt.connect(dt)}}const nt=new Z,et=new Z;function _t(K,ot,dt){nt.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);const ne=nt.distanceTo(et),Pt=ot.projectionMatrix.elements,Jt=dt.projectionMatrix.elements,fn=Pt[14]/(Pt[10]-1),ye=Pt[14]/(Pt[10]+1),Re=(Pt[9]+1)/Pt[5],ze=(Pt[9]-1)/Pt[5],oe=(Pt[8]-1)/Pt[0],Je=(Jt[8]+1)/Jt[0],L=fn*oe,rn=fn*Je,Ee=ne/(-oe+Je),Ge=Ee*-oe;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ge),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Rt=fn+Ee,R=ye+Ee,S=L-Ge,F=rn+(ne-Ge),J=Re*ye/R*Rt,tt=ze*ye/R*Rt;K.projectionMatrix.makePerspective(S,F,J,tt,Rt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ot=K.near,dt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),B.near=O.near=M.near=ot,B.far=O.far=M.far=dt,(V!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,X=B.far),B.layers.mask=K.layers.mask|6,M.layers.mask=B.layers.mask&-5,O.layers.mask=B.layers.mask&-3;const ne=K.parent,Pt=B.cameras;ht(B,ne);for(let Jt=0;Jt<Pt.length;Jt++)ht(Pt[Jt],ne);Pt.length===2?_t(B,M,O):B.projectionMatrix.copy(M.projectionMatrix),ft(K,B,ne)};function ft(K,ot,dt){dt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ru*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let at=null;function Nt(K,ot){if(d=ot.getViewerPose(c||a),v=ot,d!==null){const dt=d.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let ne=!1;dt.length!==B.cameras.length&&(B.cameras.length=0,ne=!0);for(let ye=0;ye<dt.length;ye++){const Re=dt[ye];let ze=null;if(g!==null)ze=g.getViewport(Re);else{const Je=m.getViewSubImage(h,Re);ze=Je.viewport,ye===0&&(t.setRenderTargetTextures(u,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(u))}let oe=C[ye];oe===void 0&&(oe=new pi,oe.layers.enable(ye),oe.viewport=new tn,C[ye]=oe),oe.matrix.fromArray(Re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ze.x,ze.y,ze.width,ze.height),ye===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ne===!0&&B.cameras.push(oe)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const ye=m.getDepthInformation(dt[0]);ye&&ye.isValid&&ye.texture&&_.init(ye,r.renderState)}if(Pt&&Pt.includes("camera-access")&&b){t.state.unbindTexture(),m=i.getBinding();for(let ye=0;ye<dt.length;ye++){const Re=dt[ye].camera;if(Re){let ze=p[Re];ze||(ze=new up,p[Re]=ze);const oe=m.getCameraImage(Re);ze.sourceTexture=oe}}}}for(let dt=0;dt<f.length;dt++){const ne=T[dt],Pt=f[dt];ne!==null&&Pt!==void 0&&Pt.update(ne,ot,c||a)}at&&at(K,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const _e=new fp;_e.setAnimationLoop(Nt),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const Xr=new dr,QM=new on;function $M(n,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,dp(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,x,w,u){p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),m(_,p)):p.isMeshPhongMaterial?(s(_,p),d(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&g(_,p,u)):p.isMeshMatcapMaterial?(s(_,p),v(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),b(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,x,w):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===zn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===zn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const x=t.get(p),w=x.envMap,u=x.envMapRotation;w&&(_.envMap.value=w,Xr.copy(u),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(Xr)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,x,w){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*x,_.scale.value=w*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,x){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,p){p.matcap&&(_.matcap.value=p.matcap)}function b(_,p){const x=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tE(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const u=w.program;i.uniformBlockBinding(x,u)}function c(x,w){let u=r[x.id];u===void 0&&(v(x),u=d(x),r[x.id]=u,x.addEventListener("dispose",_));const f=w.program;i.updateUBOMapping(x,f);const T=t.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function d(x){const w=m();x.__bindingPointIndex=w;const u=n.createBuffer(),f=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,f,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,u),u}function m(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=r[x.id],u=x.uniforms,f=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,I=u.length;T<I;T++){const y=Array.isArray(u[T])?u[T]:[u[T]];for(let M=0,O=y.length;M<O;M++){const C=y[M];if(g(C,T,M,f)===!0){const B=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let W=0;W<V.length;W++){const G=V[W],z=b(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,B+X,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(x,w,u,f){const T=x.value,I=w+"_"+u;if(f[I]===void 0)return typeof T=="number"||typeof T=="boolean"?f[I]=T:f[I]=T.clone(),!0;{const y=f[I];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return f[I]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function v(x){const w=x.uniforms;let u=0;const f=16;for(let I=0,y=w.length;I<y;I++){const M=Array.isArray(w[I])?w[I]:[w[I]];for(let O=0,C=M.length;O<C;O++){const B=M[O],V=Array.isArray(B.value)?B.value:[B.value];for(let X=0,W=V.length;X<W;X++){const G=V[X],z=b(G),nt=u%f,et=nt%z.boundary,_t=nt+et;u+=et,_t!==0&&f-_t<z.storage&&(u+=f-_t),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=u,u+=z.storage}}}const T=u%f;return T>0&&(u+=f-T),x.__size=u,x.__cache={},this}function b(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$t("WebGLRenderer: Unsupported uniform value type.",x),w}function _(x){const w=x.target;w.removeEventListener("dispose",_);const u=a.indexOf(w.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const eE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function nE(){return Mi===null&&(Mi=new Ky(eE,16,16,Zs,cr),Mi.name="DFG_LUT",Mi.minFilter=Sn,Mi.magFilter=Sn,Mi.wrapS=sr,Mi.wrapT=sr,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class iE{constructor(t={}){const{canvas:e=wy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=si}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const b=g,_=new Set([id,nd,ed]),p=new Set([si,Hi,Ca,Da,$u,td]),x=new Uint32Array(4),w=new Int32Array(4);let u=null,f=null;const T=[],I=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=ti;let C=0,B=0,V=null,X=-1,W=null;const G=new tn,z=new tn;let nt=null;const et=new Ae(0);let _t=0,ht=e.width,ft=e.height,at=1,Nt=null,_e=null;const K=new tn(0,0,ht,ft),ot=new tn(0,0,ht,ft);let dt=!1;const ne=new lp;let Pt=!1,Jt=!1;const fn=new on,ye=new Z,Re=new tn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Je(){return V===null?at:1}let L=i;function rn(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ju}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",We,!1),L===null){const U="webgl2";if(L=rn(U,E),L===null)throw rn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw be("WebGLRenderer: "+E.message),E}let Ee,Ge,Rt,R,S,F,J,tt,j,Et,pt,Ut,qt,it,ct,At,Tt,St,le,P,mt,ut,Mt;function rt(){Ee=new ib(L),Ee.init(),mt=new YM(L,Ee),Ge=new jS(L,Ee,t,mt),Rt=new ZM(L,Ee),Ge.reversedDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),R=new ab(L),S=new DM,F=new XM(L,Ee,Rt,S,Ge,mt,R),J=new nb(M),tt=new d2(L),ut=new YS(L,tt),j=new rb(L,tt,R,ut),Et=new lb(L,j,tt,ut,R),St=new ob(L,Ge,F),ct=new KS(S),pt=new CM(M,J,Ee,Ge,ut,ct),Ut=new $M(M,S),qt=new NM,it=new VM(Ee),Tt=new XS(M,J,Rt,Et,v,l),At=new WM(M,Et,Ge),Mt=new tE(L,R,Ge,Rt),le=new qS(L,Ee,R),P=new sb(L,Ee,R),R.programs=pt.programs,M.capabilities=Ge,M.extensions=Ee,M.properties=S,M.renderLists=qt,M.shadowMap=At,M.state=Rt,M.info=R}rt(),b!==si&&(y=new ub(b,e.width,e.height,r,s));const q=new JM(M,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(ht,ft,!1))},this.getSize=function(E){return E.set(ht,ft)},this.setSize=function(E,U,Y=!0){if(q.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=E,ft=U,e.width=Math.floor(E*at),e.height=Math.floor(U*at),Y===!0&&(e.style.width=E+"px",e.style.height=U+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ht*at,ft*at).floor()},this.setDrawingBufferSize=function(E,U,Y){ht=E,ft=U,at=Y,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(b===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,U,Y,k){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,Y,k),Rt.viewport(G.copy(K).multiplyScalar(at).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,U,Y,k){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,U,Y,k),Rt.scissor(z.copy(ot).multiplyScalar(at).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Rt.setScissorTest(dt=E)},this.setOpaqueSort=function(E){Nt=E},this.setTransparentSort=function(E){_e=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let k=0;if(E){let H=!1;if(V!==null){const yt=V.texture.format;H=_.has(yt)}if(H){const yt=V.texture.type,bt=p.has(yt),xt=Tt.getClearColor(),It=Tt.getClearAlpha(),Lt=xt.r,ie=xt.g,ce=xt.b;bt?(x[0]=Lt,x[1]=ie,x[2]=ce,x[3]=It,L.clearBufferuiv(L.COLOR,0,x)):(w[0]=Lt,w[1]=ie,w[2]=ce,w[3]=It,L.clearBufferiv(L.COLOR,0,w))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT),Y&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",We,!1),Tt.dispose(),qt.dispose(),it.dispose(),S.dispose(),J.dispose(),Et.dispose(),ut.dispose(),Mt.dispose(),pt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Od),q.removeEventListener("sessionend",Bd),Vr.stop()};function wt(E){E.preventDefault(),sh("WebGLRenderer: Context Lost."),O=!0}function Qt(){sh("WebGLRenderer: Context Restored."),O=!1;const E=R.autoReset,U=At.enabled,Y=At.autoUpdate,k=At.needsUpdate,H=At.type;rt(),R.autoReset=E,At.enabled=U,At.autoUpdate=Y,At.needsUpdate=k,At.type=H}function We(E){be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const U=E.target;U.removeEventListener("dispose",Ce),Xi(U)}function Xi(E){Yi(E),S.remove(E)}function Yi(E){const U=S.get(E).programs;U!==void 0&&(U.forEach(function(Y){pt.releaseProgram(Y)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,k,H,yt){U===null&&(U=ze);const bt=H.isMesh&&H.matrixWorld.determinant()<0,xt=Em(E,U,Y,k,H);Rt.setMaterial(k,bt);let It=Y.index,Lt=1;if(k.wireframe===!0){if(It=j.getWireframeAttribute(Y),It===void 0)return;Lt=2}const ie=Y.drawRange,ce=Y.attributes.position;let Ft=ie.start*Lt,Ue=(ie.start+ie.count)*Lt;yt!==null&&(Ft=Math.max(Ft,yt.start*Lt),Ue=Math.min(Ue,(yt.start+yt.count)*Lt)),It!==null?(Ft=Math.max(Ft,0),Ue=Math.min(Ue,It.count)):ce!=null&&(Ft=Math.max(Ft,0),Ue=Math.min(Ue,ce.count));const Qe=Ue-Ft;if(Qe<0||Qe===1/0)return;ut.setup(H,k,xt,Y,It);let Ke,Oe=le;if(It!==null&&(Ke=tt.get(It),Oe=P,Oe.setIndex(Ke)),H.isMesh)k.wireframe===!0?(Rt.setLineWidth(k.wireframeLinewidth*Je()),Oe.setMode(L.LINES)):Oe.setMode(L.TRIANGLES);else if(H.isLine){let vn=k.linewidth;vn===void 0&&(vn=1),Rt.setLineWidth(vn*Je()),H.isLineSegments?Oe.setMode(L.LINES):H.isLineLoop?Oe.setMode(L.LINE_LOOP):Oe.setMode(L.LINE_STRIP)}else H.isPoints?Oe.setMode(L.POINTS):H.isSprite&&Oe.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const vn=H._multiDrawStarts,Ct=H._multiDrawCounts,Gn=H._multiDrawCount,Se=It?tt.get(It).bytesPerElement:1,ci=S.get(k).currentProgram.getUniforms();for(let Si=0;Si<Gn;Si++)ci.setValue(L,"_gl_DrawID",Si),Oe.render(vn[Si]/Se,Ct[Si])}else if(H.isInstancedMesh)Oe.renderInstances(Ft,Qe,H.count);else if(Y.isInstancedBufferGeometry){const vn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,vn);Oe.renderInstances(Ft,Qe,Ct)}else Oe.render(Ft,Qe)};function Ud(E,U,Y){E.transparent===!0&&E.side===qn&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,Ka(E,U,Y),E.side=Nr,E.needsUpdate=!0,Ka(E,U,Y),E.side=qn):Ka(E,U,Y)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),f=it.get(Y),f.init(U),I.push(f),Y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),E!==Y&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const k=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const yt=H.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){const xt=yt[bt];Ud(xt,Y,H),k.add(xt)}else Ud(yt,Y,H),k.add(yt)}),f=I.pop(),k},this.compileAsync=function(E,U,Y=null){const k=this.compile(E,U,Y);return new Promise(H=>{function yt(){if(k.forEach(function(bt){S.get(bt).currentProgram.isReady()&&k.delete(bt)}),k.size===0){H(E);return}setTimeout(yt,10)}Ee.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ol=null;function Mm(E){Ol&&Ol(E)}function Od(){Vr.stop()}function Bd(){Vr.start()}const Vr=new fp;Vr.setAnimationLoop(Mm),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(E){Ol=E,q.setAnimationLoop(E),E===null?Vr.stop():Vr.start()},q.addEventListener("sessionstart",Od),q.addEventListener("sessionend",Bd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const Y=q.enabled===!0&&q.isPresenting===!0,k=y!==null&&(V===null||Y)&&y.begin(M,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,U,V),f=it.get(E,I.length),f.init(U),I.push(f),fn.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(fn,Pi,U.reversedDepth),Jt=this.localClippingEnabled,Pt=ct.init(this.clippingPlanes,Jt),u=qt.get(E,T.length),u.init(),T.push(u),q.enabled===!0&&q.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&Bl(bt,U,-1/0,M.sortObjects)}Bl(E,U,0,M.sortObjects),u.finish(),M.sortObjects===!0&&u.sort(Nt,_e),oe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,oe&&Tt.addToRenderList(u,E),this.info.render.frame++,Pt===!0&&ct.beginShadows();const H=f.state.shadowsArray;if(At.render(H,E,U),Pt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&y.hasRenderPass())===!1){const bt=u.opaque,xt=u.transmissive;if(f.setupLights(),U.isArrayCamera){const It=U.cameras;if(xt.length>0)for(let Lt=0,ie=It.length;Lt<ie;Lt++){const ce=It[Lt];zd(bt,xt,E,ce)}oe&&Tt.render(E);for(let Lt=0,ie=It.length;Lt<ie;Lt++){const ce=It[Lt];Vd(u,E,ce,ce.viewport)}}else xt.length>0&&zd(bt,xt,E,U),oe&&Tt.render(E),Vd(u,E,U)}V!==null&&B===0&&(F.updateMultisampleRenderTarget(V),F.updateRenderTargetMipmap(V)),k&&y.end(M),E.isScene===!0&&E.onAfterRender(M,E,U),ut.resetDefaultState(),X=-1,W=null,I.pop(),I.length>0?(f=I[I.length-1],Pt===!0&&ct.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?u=T[T.length-1]:u=null};function Bl(E,U,Y,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){k&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fn);const bt=Et.update(E),xt=E.material;xt.visible&&u.push(E,bt,xt,Y,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const bt=Et.update(E),xt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Re.copy(bt.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(fn)),Array.isArray(xt)){const It=bt.groups;for(let Lt=0,ie=It.length;Lt<ie;Lt++){const ce=It[Lt],Ft=xt[ce.materialIndex];Ft&&Ft.visible&&u.push(E,bt,Ft,Y,Re.z,ce)}}else xt.visible&&u.push(E,bt,xt,Y,Re.z,null)}}const yt=E.children;for(let bt=0,xt=yt.length;bt<xt;bt++)Bl(yt[bt],U,Y,k)}function Vd(E,U,Y,k){const{opaque:H,transmissive:yt,transparent:bt}=E;f.setupLightsView(Y),Pt===!0&&ct.setGlobalState(M.clippingPlanes,Y),k&&Rt.viewport(G.copy(k)),H.length>0&&ja(H,U,Y),yt.length>0&&ja(yt,U,Y),bt.length>0&&ja(bt,U,Y),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function zd(E,U,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[k.id]===void 0){const Ft=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");f.state.transmissionRenderTarget[k.id]=new Bi(1,1,{generateMipmaps:!0,type:Ft?cr:si,minFilter:Qr,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const yt=f.state.transmissionRenderTarget[k.id],bt=k.viewport||G;yt.setSize(bt.z*M.transmissionResolutionScale,bt.w*M.transmissionResolutionScale);const xt=M.getRenderTarget(),It=M.getActiveCubeFace(),Lt=M.getActiveMipmapLevel();M.setRenderTarget(yt),M.getClearColor(et),_t=M.getClearAlpha(),_t<1&&M.setClearColor(16777215,.5),M.clear(),oe&&Tt.render(Y);const ie=M.toneMapping;M.toneMapping=Oi;const ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),Pt===!0&&ct.setGlobalState(M.clippingPlanes,k),ja(E,Y,k),F.updateMultisampleRenderTarget(yt),F.updateRenderTargetMipmap(yt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ue=0,Qe=U.length;Ue<Qe;Ue++){const Ke=U[Ue],{object:Oe,geometry:vn,material:Ct,group:Gn}=Ke;if(Ct.side===qn&&Oe.layers.test(k.layers)){const Se=Ct.side;Ct.side=zn,Ct.needsUpdate=!0,Hd(Oe,Y,k,vn,Ct,Gn),Ct.side=Se,Ct.needsUpdate=!0,Ft=!0}}Ft===!0&&(F.updateMultisampleRenderTarget(yt),F.updateRenderTargetMipmap(yt))}M.setRenderTarget(xt,It,Lt),M.setClearColor(et,_t),ce!==void 0&&(k.viewport=ce),M.toneMapping=ie}function ja(E,U,Y){const k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,yt=E.length;H<yt;H++){const bt=E[H],{object:xt,geometry:It,group:Lt}=bt;let ie=bt.material;ie.allowOverride===!0&&k!==null&&(ie=k),xt.layers.test(Y.layers)&&Hd(xt,U,Y,It,ie,Lt)}}function Hd(E,U,Y,k,H,yt){E.onBeforeRender(M,U,Y,k,H,yt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(M,U,Y,k,E,yt),H.transparent===!0&&H.side===qn&&H.forceSinglePass===!1?(H.side=zn,H.needsUpdate=!0,M.renderBufferDirect(Y,U,k,H,E,yt),H.side=Nr,H.needsUpdate=!0,M.renderBufferDirect(Y,U,k,H,E,yt),H.side=qn):M.renderBufferDirect(Y,U,k,H,E,yt),E.onAfterRender(M,U,Y,k,H,yt)}function Ka(E,U,Y){U.isScene!==!0&&(U=ze);const k=S.get(E),H=f.state.lights,yt=f.state.shadowsArray,bt=H.state.version,xt=pt.getParameters(E,H.state,yt,U,Y),It=pt.getProgramCacheKey(xt);let Lt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=J.get(E.envMap||k.environment,ie),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ce),Lt=new Map,k.programs=Lt);let ce=Lt.get(It);if(ce!==void 0){if(k.currentProgram===ce&&k.lightsStateVersion===bt)return Gd(E,xt),ce}else xt.uniforms=pt.getUniforms(E),E.onBeforeCompile(xt,M),ce=pt.acquireProgram(xt,It),Lt.set(It,ce),k.uniforms=xt.uniforms;const Ft=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=ct.uniform),Gd(E,xt),k.needsLights=wm(E),k.lightsStateVersion=bt,k.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=ce,k.uniformsList=null,ce}function kd(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Do.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Gd(E,U){const Y=S.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Em(E,U,Y,k,H){U.isScene!==!0&&(U=ze),F.resetTextureUnits();const yt=U.fog,bt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,xt=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Xs,It=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Lt=J.get(k.envMap||bt,It),ie=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ce=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ft=!!Y.morphAttributes.position,Ue=!!Y.morphAttributes.normal,Qe=!!Y.morphAttributes.color;let Ke=Oi;k.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ke=M.toneMapping);const Oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vn=Oe!==void 0?Oe.length:0,Ct=S.get(k),Gn=f.state.lights;if(Pt===!0&&(Jt===!0||E!==W)){const pn=E===W&&k.id===X;ct.setState(k,E,pn)}let Se=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Gn.state.version||Ct.outputColorSpace!==xt||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==Lt||k.fog===!0&&Ct.fog!==yt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ct.numPlanes||Ct.numIntersection!==ct.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==ce||Ct.morphTargets!==Ft||Ct.morphNormals!==Ue||Ct.morphColors!==Qe||Ct.toneMapping!==Ke||Ct.morphTargetsCount!==vn)&&(Se=!0):(Se=!0,Ct.__version=k.version);let ci=Ct.currentProgram;Se===!0&&(ci=Ka(k,U,H));let Si=!1,zr=!1,os=!1;const He=ci.getUniforms(),gn=Ct.uniforms;if(Rt.useProgram(ci.program)&&(Si=!0,zr=!0,os=!0),k.id!==X&&(X=k.id,zr=!0),Si||W!==E){Rt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),He.setValue(L,"projectionMatrix",E.projectionMatrix),He.setValue(L,"viewMatrix",E.matrixWorldInverse);const _r=He.map.cameraPosition;_r!==void 0&&_r.setValue(L,ye.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&He.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&He.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,zr=!0,os=!0)}if(Ct.needsLights&&(Gn.state.directionalShadowMap.length>0&&He.setValue(L,"directionalShadowMap",Gn.state.directionalShadowMap,F),Gn.state.spotShadowMap.length>0&&He.setValue(L,"spotShadowMap",Gn.state.spotShadowMap,F),Gn.state.pointShadowMap.length>0&&He.setValue(L,"pointShadowMap",Gn.state.pointShadowMap,F)),H.isSkinnedMesh){He.setOptional(L,H,"bindMatrix"),He.setOptional(L,H,"bindMatrixInverse");const pn=H.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(L,"boneTexture",pn.boneTexture,F))}H.isBatchedMesh&&(He.setOptional(L,H,"batchingTexture"),He.setValue(L,"batchingTexture",H._matricesTexture,F),He.setOptional(L,H,"batchingIdTexture"),He.setValue(L,"batchingIdTexture",H._indirectTexture,F),He.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&He.setValue(L,"batchingColorTexture",H._colorsTexture,F));const gr=Y.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&St.update(H,Y,ci),(zr||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,He.setValue(L,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=nE()),zr&&(He.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Am(gn,os),yt&&k.fog===!0&&Ut.refreshFogUniforms(gn,yt),Ut.refreshMaterialUniforms(gn,k,at,ft,f.state.transmissionRenderTarget[E.id]),Do.upload(L,kd(Ct),gn,F)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Do.upload(L,kd(Ct),gn,F),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&He.setValue(L,"center",H.center),He.setValue(L,"modelViewMatrix",H.modelViewMatrix),He.setValue(L,"normalMatrix",H.normalMatrix),He.setValue(L,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const pn=k.uniformsGroups;for(let _r=0,ls=pn.length;_r<ls;_r++){const Wd=pn[_r];Mt.update(Wd,ci),Mt.bind(Wd,ci)}}return ci}function Am(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function wm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,U,Y){const k=S.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=U,S.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const Y=S.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0};const Tm=L.createFramebuffer();this.setRenderTarget=function(E,U=0,Y=0){V=E,C=U,B=Y;let k=null,H=!1,yt=!1;if(E){const xt=S.get(E);if(xt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(L.FRAMEBUFFER,xt.__webglFramebuffer),G.copy(E.viewport),z.copy(E.scissor),nt=E.scissorTest,Rt.viewport(G),Rt.scissor(z),Rt.setScissorTest(nt),X=-1;return}else if(xt.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(xt.__hasExternalTextures)F.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ie=E.depthTexture;if(xt.__boundDepthTexture!==ie){if(ie!==null&&S.has(ie)&&(E.width!==ie.image.width||E.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(yt=!0);const Lt=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?k=Lt[U][Y]:k=Lt[U],H=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?k=S.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[Y]:k=Lt,G.copy(E.viewport),z.copy(E.scissor),nt=E.scissorTest}else G.copy(K).multiplyScalar(at).floor(),z.copy(ot).multiplyScalar(at).floor(),nt=dt;if(Y!==0&&(k=Tm),Rt.bindFramebuffer(L.FRAMEBUFFER,k)&&Rt.drawBuffers(E,k),Rt.viewport(G),Rt.scissor(z),Rt.setScissorTest(nt),H){const xt=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,Y)}else if(yt){const xt=U;for(let It=0;It<E.textures.length;It++){const Lt=S.get(E.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Lt.__webglTexture,Y,xt)}}else if(E!==null&&Y!==0){const xt=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,Y)}X=-1},this.readRenderTargetPixels=function(E,U,Y,k,H,yt,bt,xt=0){if(!(E&&E.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){Rt.bindFramebuffer(L.FRAMEBUFFER,It);try{const Lt=E.textures[xt],ie=Lt.format,ce=Lt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt),!Ge.textureFormatReadable(ie)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ce)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&Y>=0&&Y<=E.height-H&&L.readPixels(U,Y,k,H,mt.convert(ie),mt.convert(ce),yt)}finally{const Lt=V!==null?S.get(V).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,k,H,yt,bt,xt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It)if(U>=0&&U<=E.width-k&&Y>=0&&Y<=E.height-H){Rt.bindFramebuffer(L.FRAMEBUFFER,It);const Lt=E.textures[xt],ie=Lt.format,ce=Lt.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt),!Ge.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.bufferData(L.PIXEL_PACK_BUFFER,yt.byteLength,L.STREAM_READ),L.readPixels(U,Y,k,H,mt.convert(ie),mt.convert(ce),0);const Ue=V!==null?S.get(V).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Ue);const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ty(L,Qe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,yt),L.deleteBuffer(Ft),L.deleteSync(Qe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){const k=Math.pow(2,-Y),H=Math.floor(E.image.width*k),yt=Math.floor(E.image.height*k),bt=U!==null?U.x:0,xt=U!==null?U.y:0;F.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,bt,xt,H,yt),Rt.unbindTexture()};const Im=L.createFramebuffer(),Rm=L.createFramebuffer();this.copyTextureToTexture=function(E,U,Y=null,k=null,H=0,yt=0){let bt,xt,It,Lt,ie,ce,Ft,Ue,Qe;const Ke=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(Y!==null)bt=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,ie=Y.min.y,ce=Y.isBox3?Y.min.z:0;else{const gn=Math.pow(2,-H);bt=Math.floor(Ke.width*gn),xt=Math.floor(Ke.height*gn),E.isDataArrayTexture?It=Ke.depth:E.isData3DTexture?It=Math.floor(Ke.depth*gn):It=1,Lt=0,ie=0,ce=0}k!==null?(Ft=k.x,Ue=k.y,Qe=k.z):(Ft=0,Ue=0,Qe=0);const Oe=mt.convert(U.format),vn=mt.convert(U.type);let Ct;U.isData3DTexture?(F.setTexture3D(U,0),Ct=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(F.setTexture2DArray(U,0),Ct=L.TEXTURE_2D_ARRAY):(F.setTexture2D(U,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Gn=L.getParameter(L.UNPACK_ROW_LENGTH),Se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Si=L.getParameter(L.UNPACK_SKIP_ROWS),zr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ke.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ce);const os=E.isDataArrayTexture||E.isData3DTexture,He=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const gn=S.get(E),gr=S.get(U),pn=S.get(gn.__renderTarget),_r=S.get(gr.__renderTarget);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let ls=0;ls<It;ls++)os&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(E).__webglTexture,H,ce+ls),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(U).__webglTexture,yt,Qe+ls)),L.blitFramebuffer(Lt,ie,bt,xt,Ft,Ue,bt,xt,L.DEPTH_BUFFER_BIT,L.NEAREST);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||S.has(E)){const gn=S.get(E),gr=S.get(U);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,Im),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rm);for(let pn=0;pn<It;pn++)os?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,H,ce+pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,H),He?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gr.__webglTexture,yt,Qe+pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gr.__webglTexture,yt),H!==0?L.blitFramebuffer(Lt,ie,bt,xt,Ft,Ue,bt,xt,L.COLOR_BUFFER_BIT,L.NEAREST):He?L.copyTexSubImage3D(Ct,yt,Ft,Ue,Qe+pn,Lt,ie,bt,xt):L.copyTexSubImage2D(Ct,yt,Ft,Ue,Lt,ie,bt,xt);Rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else He?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ct,yt,Ft,Ue,Qe,bt,xt,It,Oe,vn,Ke.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,yt,Ft,Ue,Qe,bt,xt,It,Oe,Ke.data):L.texSubImage3D(Ct,yt,Ft,Ue,Qe,bt,xt,It,Oe,vn,Ke):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,yt,Ft,Ue,bt,xt,Oe,vn,Ke.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,yt,Ft,Ue,Ke.width,Ke.height,Oe,Ke.data):L.texSubImage2D(L.TEXTURE_2D,yt,Ft,Ue,bt,xt,Oe,vn,Ke);L.pixelStorei(L.UNPACK_ROW_LENGTH,Gn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Si),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zr),yt===0&&U.generateMipmaps&&L.generateMipmap(Ct),Rt.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){C=0,B=0,V=null,Rt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class rE{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Ae("#ffffff");async initialize(t){this.canvas=t,this.renderer=new iE({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new Gy,this.camera=new ld(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Ga(1,1);this.geometryCache.set("plane",e);const i=new Ps({color:16777215,transparent:!0,depthWrite:!1,side:qn}),r=new jn(e,i);r.visible=!1,this.scene.add(r),this.spritePool.push(r);const s=new Ps({transparent:!0,depthWrite:!1,side:qn}),a=new jn(e,s);a.visible=!1,this.scene.add(a),this.rectPool.push(a),this.updateThemeColors(),this.themeObserver=new MutationObserver(o=>{for(let l=0;l<o.length;l++)if(o[l].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize(),this.renderer.compile(this.scene,this.camera)}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Ae(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=0,this.camera.bottom=this.height,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Ps({color:16777215,transparent:!0,depthWrite:!1,side:qn});e=new jn(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Ps({transparent:!0,depthWrite:!1,side:qn});e=new jn(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function Kt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Xh(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function se(n){return this instanceof se?(this.v=n,this):new se(n)}function Fi(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(g){return function(v){return Promise.resolve(v).then(g,m)}}function o(g,v){i[g]&&(r[g]=function(b){return new Promise(function(_,p){s.push([g,b,_,p])>1||l(g,b)})},v&&(r[g]=v(r[g])))}function l(g,v){try{c(i[g](v))}catch(b){h(s[0][3],b)}}function c(g){g.value instanceof se?Promise.resolve(g.value.v).then(d,m):h(s[0][2],g)}function d(g){l("next",g)}function m(g){l("throw",g)}function h(g,v){g(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Lo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:se(n[r](a)),done:!1}:s?s(a):a}:s}}function es(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Xh=="function"?Xh(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const sE=new TextDecoder("utf-8"),Lu=n=>sE.decode(n),aE=new TextEncoder,cd=n=>aE.encode(n),oE=n=>typeof n=="number",yp=n=>typeof n=="boolean",ln=n=>typeof n=="function",Hn=n=>n!=null&&Object(n)===n,is=n=>Hn(n)&&ln(n.then),Wa=n=>Hn(n)&&ln(n[Symbol.iterator]),na=n=>Hn(n)&&ln(n[Symbol.asyncIterator]),Nu=n=>Hn(n)&&Hn(n.schema),xp=n=>Hn(n)&&"done"in n&&"value"in n,Sp=n=>Hn(n)&&ln(n.stat)&&oE(n.fd),bp=n=>Hn(n)&&ud(n.body),Ll=n=>"_getDOMStream"in n&&"_getNodeStream"in n,lE=n=>Hn(n)&&ln(n.abort)&&ln(n.getWriter)&&!Ll(n),ud=n=>Hn(n)&&ln(n.cancel)&&ln(n.getReader)&&!Ll(n),cE=n=>Hn(n)&&ln(n.end)&&ln(n.write)&&yp(n.writable)&&!Ll(n),Mp=n=>Hn(n)&&ln(n.read)&&ln(n.pipe)&&yp(n.readable)&&!Ll(n),uE=n=>Hn(n)&&ln(n.clear)&&ln(n.bytes)&&ln(n.position)&&ln(n.setPosition)&&ln(n.capacity)&&ln(n.getBufferIdentifier)&&ln(n.createLong),dd=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function dE(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,d=n.length;++l<d;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function Yh(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Gi(n,t){const e=dE(n),i=e.reduce((d,m)=>d+m.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const d=e.length;++l<d;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?Yh(a,s,o):a=s;break}Yh(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Pe(n,t){let e=xp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=cd(e)),e instanceof ArrayBuffer?new n(e):e instanceof dd?new n(e):uE(e)?Pe(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const ha=n=>Pe(Int32Array,n),qh=n=>Pe(BigInt64Array,n),me=n=>Pe(Uint8Array,n),Pu=n=>(n.next(),n);function*hE(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof dd?e(t):Wa(t)?t:e(t);return yield*Pu((function*(r){let s=null;do s=r.next(yield Pe(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const fE=n=>hE(Uint8Array,n);function Ep(n,t){return Fi(this,arguments,function*(){if(is(t))return yield se(yield se(yield*Lo(es(Ep(n,yield se(t))))));const i=function(a){return Fi(this,arguments,function*(){yield yield se(yield se(a))})},r=function(a){return Fi(this,arguments,function*(){yield se(yield*Lo(es(Pu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof dd?i(t):Wa(t)?r(t):na(t)?t:i(t);return yield se(yield*Lo(es(Pu((function(a){return Fi(this,arguments,function*(){let o=null;do o=yield se(a.next(yield yield se(Pe(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield se(new n)})}const pE=n=>Ep(Uint8Array,n);function Ap(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function mE(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const ei={fromIterable(n){return bo(gE(n))},fromAsyncIterable(n){return bo(_E(n))},fromDOMStream(n){return bo(vE(n))},fromNodeStream(n){return bo(xE(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},bo=n=>(n.next(),n);function*gE(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Gi(i,a)[0]:([r,i,o]=Gi(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=fE(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(d){(e=!0)&&typeof c.throw=="function"&&c.throw(d)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function _E(n){return Fi(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Gi(r,o)[0]:([s,r,l]=Gi(r,o),s)}({cmd:a,size:o}=(yield yield se(null))||{cmd:"read",size:0});const d=pE(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield se(d.next()):yield se(d.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield se(c()));while(o<l);while(!e)}catch(m){(i=!0)&&typeof d.throw=="function"&&(yield se(d.throw(m)))}finally{i===!1&&typeof d.return=="function"&&(yield se(d.return(new Uint8Array(0))))}return yield se(null)})}function vE(n){return Fi(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Gi(r,o)[0]:([s,r,l]=Gi(r,o),s)}({cmd:a,size:o}=(yield yield se(null))||{cmd:"read",size:0});const d=new yE(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield se(d.read()):yield se(d.read(o-l)),!e&&s.byteLength>0&&(r.push(me(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield se(c()));while(o<l);while(!e)}catch(m){(i=!0)&&(yield se(d.cancel(m)))}finally{i===!1?yield se(d.cancel()):n.locked&&d.releaseLock()}return yield se(null)})}class yE{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Kt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Kt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=me(e)),e})}}const Mc=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function xE(n){return Fi(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],d;function m(){return a==="peek"?Gi(c,o)[0]:([d,c,l]=Gi(c,o),d)}if({cmd:a,size:o}=(yield yield se(null))||{cmd:"read",size:0},n.isTTY)return yield yield se(new Uint8Array(0)),yield se(null);try{e[0]=Mc(n,"end"),e[1]=Mc(n,"error");do{if(e[2]=Mc(n,"readable"),[i,s]=yield se(Promise.race(e.map(g=>g[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(d=me(n.read(o-l)),d.byteLength<o-l&&(d=me(n.read()))):d=me(n.read()),d.byteLength>0&&(c.push(d),l+=d.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield se(m()));while(o<l)}while(!r)}finally{yield se(h(e,i==="error"?s:null))}return yield se(null);function h(g,v){return d=c=null,new Promise((b,_)=>{for(const[p,x]of g)n.off(p,x);try{const p=n.destroy;p&&p.call(n,v),v=void 0}catch(p){v=p||v}finally{v!=null?_(v):b()}})}})}var en;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(en||(en={}));var Mn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(Mn||(Mn={}));var bn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(bn||(bn={}));var oi;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(oi||(oi={}));var Gt;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Gt||(Gt={}));var Wi;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Wi||(Wi={}));const Ec=2,Ri=4,ir=4,Ie=4,Tr=new Int32Array(2),jh=new Float32Array(Tr.buffer),Kh=new Float64Array(Tr.buffer),Mo=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Fu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Fu||(Fu={}));let qs=class wp{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new wp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Tr[0]=this.readInt32(t),jh[0]}readFloat64(t){return Tr[Mo?0:1]=this.readInt32(t),Tr[Mo?1:0]=this.readInt32(t+4),Kh[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){jh[0]=e,this.writeInt32(t,Tr[0])}writeFloat64(t,e){Kh[0]=e,this.writeInt32(t,Tr[Mo?0:1]),this.writeInt32(t+4,Tr[Mo?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+Ri+ir)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<ir;e++)t+=String.fromCharCode(this.readInt8(this.position_+Ri+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=Ri;const r=this.bytes_.subarray(t,t+i);return e===Fu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+Ri}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=ir)throw new Error("FlatBuffers: file identifier must be length "+ir);for(let e=0;e<ir;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+Ri+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},Tp=class Ip{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=qs.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=Ip.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=qs.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(Ri,0),this.writeInt32(this.offset()-t+Ri)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*Ec;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=Ec;c<s;c+=Ec)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Ie:0;if(e){const s=e;if(this.prep(this.minalign,Ri+ir+r),s.length!=ir)throw new TypeError("FlatBuffers: file identifier must be length "+ir);for(let a=ir-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,Ri+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(Ri,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var jo;(function(n){n[n.BUFFER=0]="BUFFER"})(jo||(jo={}));var Ko;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(Ko||(Ko={}));class Ir{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Ie),(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):Ko.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):jo.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,Ko.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,jo.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Ir.startBodyCompression(t),Ir.addCodec(t,e),Ir.addMethod(t,i),Ir.endBodyCompression(t)}}class Rp{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let Cp=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},tr=class Uu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Ie),(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Cp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Rp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Ir).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},Es=class Ou{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Ou).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Ie),(e||new Ou).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new tr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var js;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(js||(js={}));var Jo;(function(n){n[n.DenseArray=0]="DenseArray"})(Jo||(Jo={}));class Yn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Ie),(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return Yn.startInt(t),Yn.addBitWidth(t,e),Yn.addIsSigned(t,i),Yn.endInt(t)}}class rr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new rr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Ie),(e||new rr).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Yn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Jo.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Jo.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class cn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new cn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Ie),(e||new cn).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return cn.startKeyValue(t),cn.addKey(t,e),cn.addValue(t,i),cn.endKeyValue(t)}}let Jh=class ga{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Ie),(e||new ga).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return ga.startBinary(t),ga.endBinary(t)}},Qh=class _a{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Ie),(e||new _a).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return _a.startBool(t),_a.endBool(t)}},No=class As{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new As).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Ie),(e||new As).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):oi.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,oi.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return As.startDate(t),As.addUnit(t,e),As.endDate(t)}},ws=class wr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new wr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Ie),(e||new wr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return wr.startDecimal(t),wr.addPrecision(t,e),wr.addScale(t,i),wr.addBitWidth(t,r),wr.endDecimal(t)}},Po=class Ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Ie),(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Gt.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Gt.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return Ts.startDuration(t),Ts.addUnit(t,e),Ts.endDuration(t)}},Fo=class Is{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Ie),(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Is.startFixedSizeBinary(t),Is.addByteWidth(t,e),Is.endFixedSizeBinary(t)}},Uo=class Rs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Ie),(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return Rs.startFixedSizeList(t),Rs.addListSize(t,e),Rs.endFixedSizeList(t)}};class Ci{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new Ci).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Ie),(e||new Ci).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):bn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,bn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return Ci.startFloatingPoint(t),Ci.addPrecision(t,e),Ci.endFloatingPoint(t)}}class Di{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Di).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Ie),(e||new Di).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Wi.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Wi.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Di.startInterval(t),Di.addUnit(t,e),Di.endInterval(t)}}let $h=class va{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Ie),(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return va.startLargeBinary(t),va.endLargeBinary(t)}},tf=class ya{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Ie),(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return ya.startLargeUtf8(t),ya.endLargeUtf8(t)}},ef=class xa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Ie),(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return xa.startList(t),xa.endList(t)}},Oo=class Cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Ie),(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return Cs.startMap(t),Cs.addKeysSorted(t,e),Cs.endMap(t)}},nf=class Sa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Ie),(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return Sa.startNull(t),Sa.endNull(t)}};class ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Ie),(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return ts.startStruct_(t),ts.endStruct_(t)}}class ni{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new ni).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Ie),(e||new ni).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Gt.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Gt.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return ni.startTime(t),ni.addUnit(t,e),ni.addBitWidth(t,i),ni.endTime(t)}}class ii{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new ii).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Ie),(e||new ii).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Gt.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Gt.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return ii.startTimestamp(t),ii.addUnit(t,e),ii.addTimezone(t,i),ii.endTimestamp(t)}}class Bn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Ie),(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Mn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,Mn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Bn.startUnion(t),Bn.addMode(t,e),Bn.addTypeIds(t,i),Bn.endUnion(t)}}let rf=class ba{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Ie),(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return ba.startUtf8(t),ba.endUtf8(t)}};var Ze;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ze||(Ze={}));let $n=class Bo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Bo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Ie),(e||new Bo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ze.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new rr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Bo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ze.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Ai=class $i{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new $i).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Ie),(e||new $i).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):js.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new $n).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,js.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return $i.startSchema(t),$i.addEndianness(t,e),$i.addFields(t,i),$i.addCustomMetadata(t,r),$i.addFeatures(t,s),$i.endSchema(t)}};var Me;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(Me||(Me={}));var D;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(D||(D={}));var er;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(er||(er={}));const SE=void 0;function Na(n){if(n===null)return"null";if(n===SE)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Na(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function ke(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Dp(n,t){return ke(n/t)+ke(n%t)/ke(t)}const bE=Symbol.for("isArrowBigNum");function xi(n,...t){return t.length===0?Object.setPrototypeOf(Pe(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}xi.prototype[bE]=!0;xi.prototype.toJSON=function(){return`"${Fa(this)}"`};xi.prototype.valueOf=function(n){return Lp(this,n)};xi.prototype.toString=function(){return Fa(this)};xi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return Lp(this);case"string":return Fa(this);case"default":return AE(this)}return Fa(this)};function Vs(...n){return xi.apply(this,n)}function zs(...n){return xi.apply(this,n)}function Pa(...n){return xi.apply(this,n)}Object.setPrototypeOf(Vs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(zs.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Pa.prototype,Object.create(Uint32Array.prototype));Object.assign(Vs.prototype,xi.prototype,{constructor:Vs,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(zs.prototype,xi.prototype,{constructor:zs,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Pa.prototype,xi.prototype,{constructor:Pa,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const ME=BigInt(4294967296)*BigInt(4294967296),EE=ME-BigInt(1);function Lp(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const d of a)l|=(d^EE)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const d of a)l|=d*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const d=BigInt(Math.pow(10,t)),m=l/d,h=l%d;return ke(m)+ke(h)/ke(d)}return ke(l)}function Fa(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return Ac(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return Ac(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${Ac(t)}`}function AE(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Fa(n)}function Ac(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class hd{static new(t,e){switch(e){case!0:return new Vs(t);case!1:return new zs(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new Vs(t)}return t.byteLength===16?new Pa(t):new zs(t)}static signed(t){return new Vs(t)}static unsigned(t){return new zs(t)}static decimal(t){return new Pa(t)}constructor(t,e){return hd.new(t,e)}}var Np,Pp,Fp,Up,Op,Bp,Vp,zp,Hp,kp,Gp,Wp,Zp,Xp,Yp,qp,jp,Kp,Jp,Qp,$p,t0;class Dt{static isNull(t){return t?.typeId===D.Null}static isInt(t){return t?.typeId===D.Int}static isFloat(t){return t?.typeId===D.Float}static isBinary(t){return t?.typeId===D.Binary}static isLargeBinary(t){return t?.typeId===D.LargeBinary}static isUtf8(t){return t?.typeId===D.Utf8}static isLargeUtf8(t){return t?.typeId===D.LargeUtf8}static isBool(t){return t?.typeId===D.Bool}static isDecimal(t){return t?.typeId===D.Decimal}static isDate(t){return t?.typeId===D.Date}static isTime(t){return t?.typeId===D.Time}static isTimestamp(t){return t?.typeId===D.Timestamp}static isInterval(t){return t?.typeId===D.Interval}static isDuration(t){return t?.typeId===D.Duration}static isList(t){return t?.typeId===D.List}static isStruct(t){return t?.typeId===D.Struct}static isUnion(t){return t?.typeId===D.Union}static isFixedSizeBinary(t){return t?.typeId===D.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===D.FixedSizeList}static isMap(t){return t?.typeId===D.Map}static isDictionary(t){return t?.typeId===D.Dictionary}static isDenseUnion(t){return Dt.isUnion(t)&&t.mode===Mn.Dense}static isSparseUnion(t){return Dt.isUnion(t)&&t.mode===Mn.Sparse}constructor(t){this.typeId=t}}Np=Symbol.toStringTag;Dt[Np]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Dt.prototype);class Pr extends Dt{constructor(){super(D.Null)}toString(){return"Null"}}Pp=Symbol.toStringTag;Pr[Pp]=(n=>n[Symbol.toStringTag]="Null")(Pr.prototype);class rs extends Dt{constructor(t,e){super(D.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Fp=Symbol.toStringTag;rs[Fp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(rs.prototype);class Ua extends rs{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ua.prototype,"ArrayType",{value:Int32Array});class Qo extends Dt{constructor(t){super(D.Float),this.precision=t}get ArrayType(){switch(this.precision){case bn.HALF:return Uint16Array;case bn.SINGLE:return Float32Array;case bn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Up=Symbol.toStringTag;Qo[Up]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Qo.prototype);class $o extends Dt{constructor(){super(D.Binary)}toString(){return"Binary"}}Op=Symbol.toStringTag;$o[Op]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))($o.prototype);class tl extends Dt{constructor(){super(D.LargeBinary)}toString(){return"LargeBinary"}}Bp=Symbol.toStringTag;tl[Bp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(tl.prototype);class el extends Dt{constructor(){super(D.Utf8)}toString(){return"Utf8"}}Vp=Symbol.toStringTag;el[Vp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(el.prototype);class nl extends Dt{constructor(){super(D.LargeUtf8)}toString(){return"LargeUtf8"}}zp=Symbol.toStringTag;nl[zp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(nl.prototype);class il extends Dt{constructor(){super(D.Bool)}toString(){return"Bool"}}Hp=Symbol.toStringTag;il[Hp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(il.prototype);class rl extends Dt{constructor(t,e,i=128){super(D.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}kp=Symbol.toStringTag;rl[kp]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(rl.prototype);class sl extends Dt{constructor(t){super(D.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${oi[this.unit]}>`}get ArrayType(){return this.unit===oi.DAY?Int32Array:BigInt64Array}}Gp=Symbol.toStringTag;sl[Gp]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(sl.prototype);class al extends Dt{constructor(t,e){super(D.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Gt[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Wp=Symbol.toStringTag;al[Wp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(al.prototype);class ol extends Dt{constructor(t,e){super(D.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Gt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Zp=Symbol.toStringTag;ol[Zp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(ol.prototype);class ll extends Dt{constructor(t){super(D.Interval),this.unit=t}toString(){return`Interval<${Wi[this.unit]}>`}}Xp=Symbol.toStringTag;ll[Xp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(ll.prototype);class cl extends Dt{constructor(t){super(D.Duration),this.unit=t}toString(){return`Duration<${Gt[this.unit]}>`}}Yp=Symbol.toStringTag;cl[Yp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(cl.prototype);class ul extends Dt{constructor(t){super(D.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}qp=Symbol.toStringTag;ul[qp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(ul.prototype);class Cn extends Dt{constructor(t){super(D.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}jp=Symbol.toStringTag;Cn[jp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Cn.prototype);class dl extends Dt{constructor(t,e,i){super(D.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}Kp=Symbol.toStringTag;dl[Kp]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(dl.prototype);class hl extends Dt{constructor(t){super(D.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}Jp=Symbol.toStringTag;hl[Jp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(hl.prototype);class fl extends Dt{constructor(t,e){super(D.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}Qp=Symbol.toStringTag;fl[Qp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(fl.prototype);class pl extends Dt{constructor(t,e=!1){var i,r,s;if(super(D.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}$p=Symbol.toStringTag;pl[$p]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(pl.prototype);const wE=(n=>()=>++n)(-1);class Ks extends Dt{constructor(t,e,i,r){super(D.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?wE():ke(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}t0=Symbol.toStringTag;Ks[t0]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Ks.prototype);function nr(n){const t=n;switch(n.typeId){case D.Decimal:return n.bitWidth/32;case D.Interval:return 1+t.unit;case D.FixedSizeList:return t.listSize;case D.FixedSizeBinary:return t.byteWidth;default:return 1}}class de{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return TE(this,t,e)}getVisitFnByTypeId(t,e=!0){return Ds(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function TE(n,t,e=!0){return typeof t=="number"?Ds(n,t,e):typeof t=="string"&&t in D?Ds(n,D[t],e):t&&t instanceof Dt?Ds(n,sf(t),e):t?.type&&t.type instanceof Dt?Ds(n,sf(t.type),e):Ds(n,D.NONE,e)}function Ds(n,t,e=!0){let i=null;switch(t){case D.Null:i=n.visitNull;break;case D.Bool:i=n.visitBool;break;case D.Int:i=n.visitInt;break;case D.Int8:i=n.visitInt8||n.visitInt;break;case D.Int16:i=n.visitInt16||n.visitInt;break;case D.Int32:i=n.visitInt32||n.visitInt;break;case D.Int64:i=n.visitInt64||n.visitInt;break;case D.Uint8:i=n.visitUint8||n.visitInt;break;case D.Uint16:i=n.visitUint16||n.visitInt;break;case D.Uint32:i=n.visitUint32||n.visitInt;break;case D.Uint64:i=n.visitUint64||n.visitInt;break;case D.Float:i=n.visitFloat;break;case D.Float16:i=n.visitFloat16||n.visitFloat;break;case D.Float32:i=n.visitFloat32||n.visitFloat;break;case D.Float64:i=n.visitFloat64||n.visitFloat;break;case D.Utf8:i=n.visitUtf8;break;case D.LargeUtf8:i=n.visitLargeUtf8;break;case D.Binary:i=n.visitBinary;break;case D.LargeBinary:i=n.visitLargeBinary;break;case D.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case D.Date:i=n.visitDate;break;case D.DateDay:i=n.visitDateDay||n.visitDate;break;case D.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case D.Timestamp:i=n.visitTimestamp;break;case D.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case D.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case D.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case D.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case D.Time:i=n.visitTime;break;case D.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case D.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case D.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case D.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case D.Decimal:i=n.visitDecimal;break;case D.List:i=n.visitList;break;case D.Struct:i=n.visitStruct;break;case D.Union:i=n.visitUnion;break;case D.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case D.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case D.Dictionary:i=n.visitDictionary;break;case D.Interval:i=n.visitInterval;break;case D.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case D.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case D.Duration:i=n.visitDuration;break;case D.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case D.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case D.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case D.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case D.FixedSizeList:i=n.visitFixedSizeList;break;case D.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${D[t]}'`)}function sf(n){switch(n.typeId){case D.Null:return D.Null;case D.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?D.Int8:D.Uint8;case 16:return e?D.Int16:D.Uint16;case 32:return e?D.Int32:D.Uint32;case 64:return e?D.Int64:D.Uint64}return D.Int}case D.Float:switch(n.precision){case bn.HALF:return D.Float16;case bn.SINGLE:return D.Float32;case bn.DOUBLE:return D.Float64}return D.Float;case D.Binary:return D.Binary;case D.LargeBinary:return D.LargeBinary;case D.Utf8:return D.Utf8;case D.LargeUtf8:return D.LargeUtf8;case D.Bool:return D.Bool;case D.Decimal:return D.Decimal;case D.Time:switch(n.unit){case Gt.SECOND:return D.TimeSecond;case Gt.MILLISECOND:return D.TimeMillisecond;case Gt.MICROSECOND:return D.TimeMicrosecond;case Gt.NANOSECOND:return D.TimeNanosecond}return D.Time;case D.Timestamp:switch(n.unit){case Gt.SECOND:return D.TimestampSecond;case Gt.MILLISECOND:return D.TimestampMillisecond;case Gt.MICROSECOND:return D.TimestampMicrosecond;case Gt.NANOSECOND:return D.TimestampNanosecond}return D.Timestamp;case D.Date:switch(n.unit){case oi.DAY:return D.DateDay;case oi.MILLISECOND:return D.DateMillisecond}return D.Date;case D.Interval:switch(n.unit){case Wi.DAY_TIME:return D.IntervalDayTime;case Wi.YEAR_MONTH:return D.IntervalYearMonth}return D.Interval;case D.Duration:switch(n.unit){case Gt.SECOND:return D.DurationSecond;case Gt.MILLISECOND:return D.DurationMillisecond;case Gt.MICROSECOND:return D.DurationMicrosecond;case Gt.NANOSECOND:return D.DurationNanosecond}return D.Duration;case D.Map:return D.Map;case D.List:return D.List;case D.Struct:return D.Struct;case D.Union:switch(n.mode){case Mn.Dense:return D.DenseUnion;case Mn.Sparse:return D.SparseUnion}return D.Union;case D.FixedSizeBinary:return D.FixedSizeBinary;case D.FixedSizeList:return D.FixedSizeList;case D.Dictionary:return D.Dictionary}throw new Error(`Unrecognized type '${D[n.typeId]}'`)}de.prototype.visitInt8=null;de.prototype.visitInt16=null;de.prototype.visitInt32=null;de.prototype.visitInt64=null;de.prototype.visitUint8=null;de.prototype.visitUint16=null;de.prototype.visitUint32=null;de.prototype.visitUint64=null;de.prototype.visitFloat16=null;de.prototype.visitFloat32=null;de.prototype.visitFloat64=null;de.prototype.visitDateDay=null;de.prototype.visitDateMillisecond=null;de.prototype.visitTimestampSecond=null;de.prototype.visitTimestampMillisecond=null;de.prototype.visitTimestampMicrosecond=null;de.prototype.visitTimestampNanosecond=null;de.prototype.visitTimeSecond=null;de.prototype.visitTimeMillisecond=null;de.prototype.visitTimeMicrosecond=null;de.prototype.visitTimeNanosecond=null;de.prototype.visitDenseUnion=null;de.prototype.visitSparseUnion=null;de.prototype.visitIntervalDayTime=null;de.prototype.visitIntervalYearMonth=null;de.prototype.visitDuration=null;de.prototype.visitDurationSecond=null;de.prototype.visitDurationMillisecond=null;de.prototype.visitDurationMicrosecond=null;de.prototype.visitDurationNanosecond=null;const e0=new Float64Array(1),Ms=new Uint32Array(e0.buffer);function n0(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function IE(n){if(n!==n)return 32256;e0[0]=n;const t=(Ms[1]&2147483648)>>16&65535;let e=Ms[1]&2146435072,i=0;return e>=1089470464?Ms[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Ms[1]&1048575)>>10):e<=1056964608?(i=1048576+(Ms[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Ms[1]&1048575)+512>>10),t|e|i&65535}class Wt extends de{}function Yt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const RE=(n,t,e)=>{n[t]=Math.floor(e/864e5)},i0=(n,t,e,i)=>{if(e+1<t.length){const r=ke(t[e]),s=ke(t[e+1]);n.set(i.subarray(0,s-r),r)}},CE=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},fr=({values:n},t,e)=>{n[t]=e},fd=({values:n},t,e)=>{n[t]=e},r0=({values:n},t,e)=>{n[t]=IE(e)},DE=(n,t,e)=>{switch(n.type.precision){case bn.HALF:return r0(n,t,e);case bn.SINGLE:case bn.DOUBLE:return fd(n,t,e)}},s0=({values:n},t,e)=>{RE(n,t,e.valueOf())},a0=({values:n},t,e)=>{n[t]=BigInt(e)},LE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},o0=({values:n,valueOffsets:t},e,i)=>i0(n,t,e,i),l0=({values:n,valueOffsets:t},e,i)=>i0(n,t,e,cd(i)),NE=(n,t,e)=>{n.type.unit===oi.DAY?s0(n,t,e):a0(n,t,e)},c0=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},u0=({values:n},t,e)=>{n[t]=BigInt(e)},d0=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},h0=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},PE=(n,t,e)=>{switch(n.type.unit){case Gt.SECOND:return c0(n,t,e);case Gt.MILLISECOND:return u0(n,t,e);case Gt.MICROSECOND:return d0(n,t,e);case Gt.NANOSECOND:return h0(n,t,e)}},f0=({values:n},t,e)=>{n[t]=e},p0=({values:n},t,e)=>{n[t]=e},m0=({values:n},t,e)=>{n[t]=e},g0=({values:n},t,e)=>{n[t]=e},FE=(n,t,e)=>{switch(n.type.unit){case Gt.SECOND:return f0(n,t,e);case Gt.MILLISECOND:return p0(n,t,e);case Gt.MICROSECOND:return m0(n,t,e);case Gt.NANOSECOND:return g0(n,t,e)}},UE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},OE=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=li.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},BE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=li.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},VE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),zE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),HE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),kE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),GE=(n,t,e)=>{const i=n.type.children.map(s=>li.getVisitFn(s.type)),r=e instanceof Map?HE(t,e):e instanceof we?zE(t,e):Array.isArray(e)?VE(t,e):kE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},WE=(n,t,e)=>{n.type.mode===Mn.Dense?_0(n,t,e):v0(n,t,e)},_0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];li.visit(r,n.valueOffsets[t],e)},v0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];li.visit(r,t,e)},ZE=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},XE=(n,t,e)=>{n.type.unit===Wi.DAY_TIME?y0(n,t,e):x0(n,t,e)},y0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},x0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},S0=({values:n},t,e)=>{n[t]=e},b0=({values:n},t,e)=>{n[t]=e},M0=({values:n},t,e)=>{n[t]=e},E0=({values:n},t,e)=>{n[t]=e},YE=(n,t,e)=>{switch(n.type.unit){case Gt.SECOND:return S0(n,t,e);case Gt.MILLISECOND:return b0(n,t,e);case Gt.MICROSECOND:return M0(n,t,e);case Gt.NANOSECOND:return E0(n,t,e)}},qE=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=li.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Wt.prototype.visitBool=Yt(CE);Wt.prototype.visitInt=Yt(fr);Wt.prototype.visitInt8=Yt(fr);Wt.prototype.visitInt16=Yt(fr);Wt.prototype.visitInt32=Yt(fr);Wt.prototype.visitInt64=Yt(fr);Wt.prototype.visitUint8=Yt(fr);Wt.prototype.visitUint16=Yt(fr);Wt.prototype.visitUint32=Yt(fr);Wt.prototype.visitUint64=Yt(fr);Wt.prototype.visitFloat=Yt(DE);Wt.prototype.visitFloat16=Yt(r0);Wt.prototype.visitFloat32=Yt(fd);Wt.prototype.visitFloat64=Yt(fd);Wt.prototype.visitUtf8=Yt(l0);Wt.prototype.visitLargeUtf8=Yt(l0);Wt.prototype.visitBinary=Yt(o0);Wt.prototype.visitLargeBinary=Yt(o0);Wt.prototype.visitFixedSizeBinary=Yt(LE);Wt.prototype.visitDate=Yt(NE);Wt.prototype.visitDateDay=Yt(s0);Wt.prototype.visitDateMillisecond=Yt(a0);Wt.prototype.visitTimestamp=Yt(PE);Wt.prototype.visitTimestampSecond=Yt(c0);Wt.prototype.visitTimestampMillisecond=Yt(u0);Wt.prototype.visitTimestampMicrosecond=Yt(d0);Wt.prototype.visitTimestampNanosecond=Yt(h0);Wt.prototype.visitTime=Yt(FE);Wt.prototype.visitTimeSecond=Yt(f0);Wt.prototype.visitTimeMillisecond=Yt(p0);Wt.prototype.visitTimeMicrosecond=Yt(m0);Wt.prototype.visitTimeNanosecond=Yt(g0);Wt.prototype.visitDecimal=Yt(UE);Wt.prototype.visitList=Yt(OE);Wt.prototype.visitStruct=Yt(GE);Wt.prototype.visitUnion=Yt(WE);Wt.prototype.visitDenseUnion=Yt(_0);Wt.prototype.visitSparseUnion=Yt(v0);Wt.prototype.visitDictionary=Yt(ZE);Wt.prototype.visitInterval=Yt(XE);Wt.prototype.visitIntervalDayTime=Yt(y0);Wt.prototype.visitIntervalYearMonth=Yt(x0);Wt.prototype.visitDuration=Yt(YE);Wt.prototype.visitDurationSecond=Yt(S0);Wt.prototype.visitDurationMillisecond=Yt(b0);Wt.prototype.visitDurationMicrosecond=Yt(M0);Wt.prototype.visitDurationNanosecond=Yt(E0);Wt.prototype.visitFixedSizeList=Yt(qE);Wt.prototype.visitMap=Yt(BE);const li=new Wt,fi=Symbol.for("parent"),Hs=Symbol.for("rowIndex");class pd{constructor(t,e){return this[fi]=t,this[Hs]=e,new Proxy(this,new KE)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Hs],e=this[fi],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=kn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Na(t)}: ${Na(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new jE(this[fi],this[Hs])}}class jE{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,kn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(pd.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[fi]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Hs]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class KE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[fi].type.children.map(e=>e.name)}has(t,e){return t[fi].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[fi].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[fi].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=kn.visit(t[fi].children[i],t[Hs]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[fi].type.children.findIndex(s=>s.name===e);return r!==-1?(li.visit(t[fi].children[r],t[Hs],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Vt extends de{}function Zt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const JE=(n,t)=>864e5*n[t],QE=(n,t)=>null,A0=(n,t,e)=>{if(e+1>=t.length)return null;const i=ke(t[e]),r=ke(t[e+1]);return n.subarray(i,r)},$E=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},w0=({values:n},t)=>JE(n,t),T0=({values:n},t)=>ke(n[t]),Br=({stride:n,values:t},e)=>t[n*e],tA=({stride:n,values:t},e)=>n0(t[n*e]),I0=({values:n},t)=>n[t],eA=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),R0=({values:n,valueOffsets:t},e)=>A0(n,t,e),C0=({values:n,valueOffsets:t},e)=>{const i=A0(n,t,e);return i!==null?Lu(i):null},nA=({values:n},t)=>n[t],iA=({type:n,values:t},e)=>n.precision!==bn.HALF?t[e]:n0(t[e]),rA=(n,t)=>n.type.unit===oi.DAY?w0(n,t):T0(n,t),D0=({values:n},t)=>1e3*ke(n[t]),L0=({values:n},t)=>ke(n[t]),N0=({values:n},t)=>Dp(n[t],BigInt(1e3)),P0=({values:n},t)=>Dp(n[t],BigInt(1e6)),sA=(n,t)=>{switch(n.type.unit){case Gt.SECOND:return D0(n,t);case Gt.MILLISECOND:return L0(n,t);case Gt.MICROSECOND:return N0(n,t);case Gt.NANOSECOND:return P0(n,t)}},F0=({values:n},t)=>n[t],U0=({values:n},t)=>n[t],O0=({values:n},t)=>n[t],B0=({values:n},t)=>n[t],aA=(n,t)=>{switch(n.type.unit){case Gt.SECOND:return F0(n,t);case Gt.MILLISECOND:return U0(n,t);case Gt.MICROSECOND:return O0(n,t);case Gt.NANOSECOND:return B0(n,t)}},oA=({values:n,stride:t},e)=>hd.decimal(n.subarray(t*e,t*(e+1))),lA=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new we([l])},cA=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new md(a.slice(r,s-r))},uA=(n,t)=>new pd(n,t),dA=(n,t)=>n.type.mode===Mn.Dense?V0(n,t):z0(n,t),V0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return kn.visit(i,n.valueOffsets[t])},z0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return kn.visit(i,t)},hA=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},fA=(n,t)=>n.type.unit===Wi.DAY_TIME?H0(n,t):k0(n,t),H0=({values:n},t)=>n.subarray(2*t,2*(t+1)),k0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},G0=({values:n},t)=>n[t],W0=({values:n},t)=>n[t],Z0=({values:n},t)=>n[t],X0=({values:n},t)=>n[t],pA=(n,t)=>{switch(n.type.unit){case Gt.SECOND:return G0(n,t);case Gt.MILLISECOND:return W0(n,t);case Gt.MICROSECOND:return Z0(n,t);case Gt.NANOSECOND:return X0(n,t)}},mA=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new we([s])};Vt.prototype.visitNull=Zt(QE);Vt.prototype.visitBool=Zt($E);Vt.prototype.visitInt=Zt(nA);Vt.prototype.visitInt8=Zt(Br);Vt.prototype.visitInt16=Zt(Br);Vt.prototype.visitInt32=Zt(Br);Vt.prototype.visitInt64=Zt(I0);Vt.prototype.visitUint8=Zt(Br);Vt.prototype.visitUint16=Zt(Br);Vt.prototype.visitUint32=Zt(Br);Vt.prototype.visitUint64=Zt(I0);Vt.prototype.visitFloat=Zt(iA);Vt.prototype.visitFloat16=Zt(tA);Vt.prototype.visitFloat32=Zt(Br);Vt.prototype.visitFloat64=Zt(Br);Vt.prototype.visitUtf8=Zt(C0);Vt.prototype.visitLargeUtf8=Zt(C0);Vt.prototype.visitBinary=Zt(R0);Vt.prototype.visitLargeBinary=Zt(R0);Vt.prototype.visitFixedSizeBinary=Zt(eA);Vt.prototype.visitDate=Zt(rA);Vt.prototype.visitDateDay=Zt(w0);Vt.prototype.visitDateMillisecond=Zt(T0);Vt.prototype.visitTimestamp=Zt(sA);Vt.prototype.visitTimestampSecond=Zt(D0);Vt.prototype.visitTimestampMillisecond=Zt(L0);Vt.prototype.visitTimestampMicrosecond=Zt(N0);Vt.prototype.visitTimestampNanosecond=Zt(P0);Vt.prototype.visitTime=Zt(aA);Vt.prototype.visitTimeSecond=Zt(F0);Vt.prototype.visitTimeMillisecond=Zt(U0);Vt.prototype.visitTimeMicrosecond=Zt(O0);Vt.prototype.visitTimeNanosecond=Zt(B0);Vt.prototype.visitDecimal=Zt(oA);Vt.prototype.visitList=Zt(lA);Vt.prototype.visitStruct=Zt(uA);Vt.prototype.visitUnion=Zt(dA);Vt.prototype.visitDenseUnion=Zt(V0);Vt.prototype.visitSparseUnion=Zt(z0);Vt.prototype.visitDictionary=Zt(hA);Vt.prototype.visitInterval=Zt(fA);Vt.prototype.visitIntervalDayTime=Zt(H0);Vt.prototype.visitIntervalYearMonth=Zt(k0);Vt.prototype.visitDuration=Zt(pA);Vt.prototype.visitDurationSecond=Zt(G0);Vt.prototype.visitDurationMillisecond=Zt(W0);Vt.prototype.visitDurationMicrosecond=Zt(Z0);Vt.prototype.visitDurationNanosecond=Zt(X0);Vt.prototype.visitFixedSizeList=Zt(mA);Vt.prototype.visitMap=Zt(cA);const kn=new Vt,Ls=Symbol.for("keys"),ks=Symbol.for("vals"),Ns=Symbol.for("kKeysAsStrings"),Bu=Symbol.for("_kKeysAsStrings");class md{constructor(t){return this[Ls]=new we([t.children[0]]).memoize(),this[ks]=t.children[1],new Proxy(this,new _A)}get[Ns](){return this[Bu]||(this[Bu]=Array.from(this[Ls].toArray(),String))}[Symbol.iterator](){return new gA(this[Ls],this[ks])}get size(){return this[Ls].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ls],e=this[ks],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=kn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Na(t)}: ${Na(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class gA{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),kn.visit(this.vals,t)]})}}class _A{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Ns]}has(t,e){return t[Ns].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Ns].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Ns].indexOf(e);if(i!==-1){const r=kn.visit(Reflect.get(t,ks),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Ns].indexOf(e);return r!==-1?(li.visit(Reflect.get(t,ks),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(md.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Ls]:{writable:!0,enumerable:!1,configurable:!1,value:null},[ks]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Bu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let af;function Y0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(af=s,s=a,a=af),a>r&&(a=r),i?i(n,s,a):[s,a]}const gd=(n,t)=>n<0?t+n:n,of=n=>n!==n;function ia(n){if(typeof n!=="object"||n===null)return of(n)?of:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?mE(n,e):!1:n instanceof Map?yA(n):Array.isArray(n)?vA(n):n instanceof we?xA(n):SA(n,!0)}function vA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ia(n[e]);return Nl(t)}function yA(n){let t=-1;const e=[];for(const i of n.values())e[++t]=ia(i);return Nl(e)}function xA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=ia(n.get(e));return Nl(t)}function SA(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=ia(n[e[r]]);return Nl(i,e)}function Nl(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return bA(n,e);case Map:return lf(n,e,e.keys());case md:case pd:case Object:case void 0:return lf(n,e,t||Object.keys(e))}return e instanceof we?MA(n,e):!1}}function bA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function MA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function lf(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),d=r.next();for(;a<o&&!c.done&&!d.done&&!l.done&&!(c.value!==d.value||!n[a](l.value));++a,c=i.next(),d=r.next(),l=s.next());return a===o&&c.done&&d.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function q0(n,t,e,i){return(e&1<<i)!==0}function EA(n,t,e,i){return(e&1<<i)>>i}function ml(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):gl(new _d(e,n,t,null,q0)).subarray(0,i)),r}return e}function gl(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class _d{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Vu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new _d(n,t,e-t,n,EA))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Vu(n,t,r)+Vu(n,i,e)+AA(n,r>>3,i-r>>3)}function AA(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=wc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=wc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=wc(s.getUint8(r)),r+=1;return i}function wc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const wA=-1;class De{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Dt.isSparseUnion(t)?this.children.some(e=>e.nullable):Dt.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Dt.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=wA&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Vu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof De?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=nr(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Dt.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===Mn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Dt.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===Mn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,d=l>>3;(!s||s.byteLength<=d)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(ml(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const m=s[d];i=(m&c)!==0,s[d]=e?m|c:m&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new De(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===D.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(ml(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[er.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[er.TYPE])&&(a[er.TYPE]=s.subarray(t,t+e)),(s=a[er.OFFSET])&&(a[er.OFFSET]=s.subarray(t,t+e+1))||(s=a[er.DATA])&&(a[er.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}De.prototype.children=Object.freeze([]);class Aa extends de{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new De(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=ha(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=qh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=ha(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.data),s=me(t.nullBitmap),a=qh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=me(t.nullBitmap),a=ha(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=me(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Pe(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Dt.isSparseUnion(e))return new De(e,i,a,o,[void 0,void 0,void 0,s],r);const l=ha(t.valueOffsets);return new De(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.indices.ArrayType,t.data),{["dictionary"]:a=new we([new Aa().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=me(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new Aa().visit({type:e.valueType})}=t,s=me(t.nullBitmap),{["length"]:a=r.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new De(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new Aa().visit({type:e.childType})}=t,s=me(t.nullBitmap),a=ha(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new De(e,i,o,l,[a,void 0,s],[r])}}const TA=new Aa;function he(n){return TA.visit(n)}class cf{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function IA(n){return n.some(t=>t.nullable)}function j0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function K0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function J0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const d=Math.max(0,e-l),m=Math.min(i-l,c);r.push(o.slice(d,m-d))}return r.length===0&&r.push(n[0].slice(0,0)),r}function vd(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function yd(n,t){return n.getValid(t)}function _l(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return vd(i,this._offsets,e,t)}}function Q0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=vd(s,this._offsets,i,e);return t=void 0,a}}function $0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,d=i.length;++c<d;){const m=i[c];if(~(o=n(m,t,a)))return l+o;a=0,l+=m.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):vd(s,this._offsets,r,e);return t=void 0,a}}class zt extends de{}function RA(n,t){return t===null&&n.length>0?0:-1}function CA(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new _d(e,n.offset+(t||0),n.length,e,q0)){if(!r)return i;++i}return-1}function jt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case D.Union:break;case D.Dictionary:break;default:return CA(n,e)}const i=kn.getVisitFn(n),r=ia(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function tm(n,t,e){const i=kn.getVisitFn(n),r=ia(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}zt.prototype.visitNull=RA;zt.prototype.visitBool=jt;zt.prototype.visitInt=jt;zt.prototype.visitInt8=jt;zt.prototype.visitInt16=jt;zt.prototype.visitInt32=jt;zt.prototype.visitInt64=jt;zt.prototype.visitUint8=jt;zt.prototype.visitUint16=jt;zt.prototype.visitUint32=jt;zt.prototype.visitUint64=jt;zt.prototype.visitFloat=jt;zt.prototype.visitFloat16=jt;zt.prototype.visitFloat32=jt;zt.prototype.visitFloat64=jt;zt.prototype.visitUtf8=jt;zt.prototype.visitLargeUtf8=jt;zt.prototype.visitBinary=jt;zt.prototype.visitLargeBinary=jt;zt.prototype.visitFixedSizeBinary=jt;zt.prototype.visitDate=jt;zt.prototype.visitDateDay=jt;zt.prototype.visitDateMillisecond=jt;zt.prototype.visitTimestamp=jt;zt.prototype.visitTimestampSecond=jt;zt.prototype.visitTimestampMillisecond=jt;zt.prototype.visitTimestampMicrosecond=jt;zt.prototype.visitTimestampNanosecond=jt;zt.prototype.visitTime=jt;zt.prototype.visitTimeSecond=jt;zt.prototype.visitTimeMillisecond=jt;zt.prototype.visitTimeMicrosecond=jt;zt.prototype.visitTimeNanosecond=jt;zt.prototype.visitDecimal=jt;zt.prototype.visitList=jt;zt.prototype.visitStruct=jt;zt.prototype.visitUnion=jt;zt.prototype.visitDenseUnion=tm;zt.prototype.visitSparseUnion=tm;zt.prototype.visitDictionary=jt;zt.prototype.visitInterval=jt;zt.prototype.visitIntervalDayTime=jt;zt.prototype.visitIntervalYearMonth=jt;zt.prototype.visitDuration=jt;zt.prototype.visitDurationSecond=jt;zt.prototype.visitDurationMillisecond=jt;zt.prototype.visitDurationMicrosecond=jt;zt.prototype.visitDurationNanosecond=jt;zt.prototype.visitFixedSizeList=jt;zt.prototype.visitMap=jt;const vl=new zt;class Ht extends de{}function Xt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Dt.isInt(t)&&t.bitWidth!==64||Dt.isTime(t)&&t.bitWidth!==64||Dt.isFloat(t)&&t.precision!==bn.HALF))return new cf(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new cf(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new DA(a)})}class DA{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}Ht.prototype.visitNull=Xt;Ht.prototype.visitBool=Xt;Ht.prototype.visitInt=Xt;Ht.prototype.visitInt8=Xt;Ht.prototype.visitInt16=Xt;Ht.prototype.visitInt32=Xt;Ht.prototype.visitInt64=Xt;Ht.prototype.visitUint8=Xt;Ht.prototype.visitUint16=Xt;Ht.prototype.visitUint32=Xt;Ht.prototype.visitUint64=Xt;Ht.prototype.visitFloat=Xt;Ht.prototype.visitFloat16=Xt;Ht.prototype.visitFloat32=Xt;Ht.prototype.visitFloat64=Xt;Ht.prototype.visitUtf8=Xt;Ht.prototype.visitLargeUtf8=Xt;Ht.prototype.visitBinary=Xt;Ht.prototype.visitLargeBinary=Xt;Ht.prototype.visitFixedSizeBinary=Xt;Ht.prototype.visitDate=Xt;Ht.prototype.visitDateDay=Xt;Ht.prototype.visitDateMillisecond=Xt;Ht.prototype.visitTimestamp=Xt;Ht.prototype.visitTimestampSecond=Xt;Ht.prototype.visitTimestampMillisecond=Xt;Ht.prototype.visitTimestampMicrosecond=Xt;Ht.prototype.visitTimestampNanosecond=Xt;Ht.prototype.visitTime=Xt;Ht.prototype.visitTimeSecond=Xt;Ht.prototype.visitTimeMillisecond=Xt;Ht.prototype.visitTimeMicrosecond=Xt;Ht.prototype.visitTimeNanosecond=Xt;Ht.prototype.visitDecimal=Xt;Ht.prototype.visitList=Xt;Ht.prototype.visitStruct=Xt;Ht.prototype.visitUnion=Xt;Ht.prototype.visitDenseUnion=Xt;Ht.prototype.visitSparseUnion=Xt;Ht.prototype.visitDictionary=Xt;Ht.prototype.visitInterval=Xt;Ht.prototype.visitIntervalDayTime=Xt;Ht.prototype.visitIntervalYearMonth=Xt;Ht.prototype.visitDuration=Xt;Ht.prototype.visitDurationSecond=Xt;Ht.prototype.visitDurationMillisecond=Xt;Ht.prototype.visitDurationMicrosecond=Xt;Ht.prototype.visitDurationNanosecond=Xt;Ht.prototype.visitFixedSizeList=Xt;Ht.prototype.visitMap=Xt;const xd=new Ht;var em;const nm={},im={};class we{constructor(t){var e,i,r;const s=t[0]instanceof we?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof De)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=nm[a.typeId],d=s[0];this.isValid=m=>yd(d,m),this.get=m=>o(d,m),this.set=(m,h)=>l(d,m,h),this.indexOf=m=>c(d,m),this._offsets=[0,d.length];break}default:Object.setPrototypeOf(this,im[a.typeId]),this._offsets=K0(s);break}this.data=s,this.type=a,this.stride=nr(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return IA(this.data)}get nullCount(){return j0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${D[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(gd(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return xd.visit(this)}concat(...t){return new we(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new we(Y0(this,t,e,({data:i,_offsets:r},s,a)=>J0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case D.Int:case D.Float:case D.Decimal:case D.Time:case D.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new we(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Dt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Dt.isDictionary(this.type)){const t=new yl(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new we(e)}return new yl(this)}unmemoize(){if(Dt.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new we(e)}return this}}em=Symbol.toStringTag;we[em]=(n=>{n.type=Dt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(D).map(e=>D[e]).filter(e=>typeof e=="number"&&e!==D.NONE);for(const e of t){const i=kn.getVisitFnByTypeId(e),r=li.getVisitFnByTypeId(e),s=vl.getVisitFnByTypeId(e);nm[e]={get:i,set:r,indexOf:s},im[e]=Object.create(n,{isValid:{value:_l(yd)},get:{value:_l(kn.getVisitFnByTypeId(e))},set:{value:Q0(li.getVisitFnByTypeId(e))},indexOf:{value:$0(vl.getVisitFnByTypeId(e))}})}return"Vector"})(we.prototype);class yl extends we{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new yl(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new we(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class zu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Xn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Xn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Ie),(e||new Xn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):en.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ai).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new zu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new zu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,en.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class Te{constructor(t=[],e,i,r=en.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=Hu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new Te(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new Te(e,this.metadata)}assign(...t){const e=t[0]instanceof Te?t[0]:Array.isArray(t[0])?new Te(t[0]):new Te(t),i=[...this.fields],r=Eo(Eo(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:Eo(Eo(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=Hu(s,new Map);return new Te([...i,...s],r,new Map([...this.dictionaries,...a]))}}Te.prototype.fields=null;Te.prototype.metadata=null;Te.prototype.dictionaries=null;class Xe{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Xe(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Xe.new(e,i,r,s)}}Xe.prototype.type=null;Xe.prototype.name=null;Xe.prototype.nullable=null;Xe.prototype.metadata=null;function Eo(n,t){return new Map([...n||new Map,...t||new Map])}function Hu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Dt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Hu(s.children,t)}return t}var LA=Tp,NA=qs;class Oa{static decode(t){t=new NA(me(t));const e=Xn.getRootAsFooter(t),i=Te.decode(e.schema(),new Map,e.version());return new PA(i,e)}static encode(t){const e=new LA,i=Te.encode(e,t.schema);Xn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Fr.encode(e,a);const r=e.endVector();Xn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Fr.encode(e,a);const s=e.endVector();return Xn.startFooter(e),Xn.addSchema(e,i),Xn.addVersion(e,en.V5),Xn.addRecordBatches(e,r),Xn.addDictionaries(e,s),Xn.finishFooterBuffer(e,Xn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=en.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class PA extends Oa{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Fr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Fr.decode(e)}return null}}class Fr{static decode(t){return new Fr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return zu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=ke(i),this.bodyLength=ke(e)}}const Ye=Object.freeze({done:!0,value:void 0});class uf{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class Sd{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class FA extends Sd{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Kt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ye);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return ei.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return ei.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.abort(t),Ye})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),Ye})}read(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ye)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Vo extends FA{write(t){if((t=me(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Lu(this.toUint8Array(!0)):this.toUint8Array(!1).then(Lu)}toUint8Array(t=!1){return t?Gi(this._values)[0]:Kt(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=es(this),d;d=yield c.next(),e=d.done,!e;l=!0){s=d.value,l=!1;const m=s;a.push(m),o+=m.byteLength}}catch(m){i={error:m}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Gi(a,o)[0]})}}class xl{constructor(t){t&&(this.source=new UA(ei.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class Js{constructor(t){t instanceof Js?this.source=t.source:t instanceof Vo?this.source=new Yr(ei.fromAsyncIterable(t)):Mp(t)?this.source=new Yr(ei.fromNodeStream(t)):ud(t)?this.source=new Yr(ei.fromDOMStream(t)):bp(t)?this.source=new Yr(ei.fromDOMStream(t.body)):Wa(t)?this.source=new Yr(ei.fromIterable(t)):is(t)?this.source=new Yr(ei.fromAsyncIterable(t)):na(t)&&(this.source=new Yr(ei.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class UA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ye)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ye)}}class Yr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Kt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return Kt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return Kt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Ye;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Kt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Ye;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class df extends xl{constructor(t,e){super(),this.position=0,this.buffer=me(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class Sl extends Js{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Kt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Kt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Kt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Kt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return Kt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Kt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const OA=65536;function Fs(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const Qs=8,bd=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class rm{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?OA:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Fs(this.buffer[1])} ${Fs(this.buffer[0])}`}}class Le extends rm{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Le.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Le.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Le(e);for(let s=0;s<i;){const a=Qs<i-s?Qs:i-s,o=new Le(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Le(new Uint32Array([bd[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Le.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Le(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Le(new Uint32Array(t.buffer)).plus(e)}}class On extends rm{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return On.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return On.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new On(e);for(let a=i?1:0;a<r;){const o=Qs<r-a?Qs:r-a,l=new On(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new On(new Uint32Array([bd[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)On.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new On(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new On(new Uint32Array(t.buffer)).plus(e)}}class wi{constructor(t){this.buffer=t}high(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Le(new Uint32Array([this.buffer[3],0])),i=new Le(new Uint32Array([this.buffer[2],0])),r=new Le(new Uint32Array([this.buffer[1],0])),s=new Le(new Uint32Array([this.buffer[0],0])),a=new Le(new Uint32Array([t.buffer[3],0])),o=new Le(new Uint32Array([t.buffer[2],0])),l=new Le(new Uint32Array([t.buffer[1],0])),c=new Le(new Uint32Array([t.buffer[0],0]));let d=Le.multiply(s,c);this.buffer[0]=d.low();const m=new Le(new Uint32Array([d.high(),0]));return d=Le.multiply(r,c),m.plus(d),d=Le.multiply(s,l),m.plus(d),this.buffer[1]=m.low(),this.buffer[3]=m.lessThan(d)?1:0,this.buffer[2]=m.high(),new Le(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Le.multiply(i,c)).plus(Le.multiply(r,l)).plus(Le.multiply(s,o)),this.buffer[3]+=Le.multiply(e,c).plus(Le.multiply(i,l)).plus(Le.multiply(r,o)).plus(Le.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Fs(this.buffer[3])} ${Fs(this.buffer[2])} ${Fs(this.buffer[1])} ${Fs(this.buffer[0])}`}static multiply(t,e){return new wi(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new wi(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return wi.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return wi.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new wi(e);for(let a=i?1:0;a<r;){const o=Qs<r-a?Qs:r-a,l=new wi(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new wi(new Uint32Array([bd[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)wi.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class sm extends de{constructor(t,e,i,r,s=en.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof Xe?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return he({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<en.V5&&this.readNullBitmap(t,i),t.mode===Mn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class BA extends sm{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):gl(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Pe(Uint8Array,Pe(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Pe(Uint8Array,Pe(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Dt.isTimestamp(t)||(Dt.isInt(t)||Dt.isTime(t))&&t.bitWidth===64||Dt.isDuration(t)||Dt.isDate(t)&&t.unit===oi.MILLISECOND?Pe(Uint8Array,On.convertArray(i[e])):Dt.isDecimal(t)?Pe(Uint8Array,wi.convertArray(i[e])):Dt.isBinary(t)||Dt.isLargeBinary(t)||Dt.isFixedSizeBinary(t)?VA(i[e]):Dt.isBool(t)?gl(i[e]):Dt.isUtf8(t)||Dt.isLargeUtf8(t)?cd(i[e].join("")):Pe(Uint8Array,Pe(t.ArrayType,i[e].map(r=>+r)))}}function VA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class kt extends de{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Fn(n,t){return t instanceof n.constructor}function as(n,t){return n===t||Fn(n,t)}function pr(n,t){return n===t||Fn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Pl(n,t){return n===t||Fn(n,t)&&n.precision===t.precision}function zA(n,t){return n===t||Fn(n,t)&&n.byteWidth===t.byteWidth}function Md(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function Za(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Xa(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function HA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function kA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function Ed(n,t){return n===t||Fn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Ur.compareManyFields(n.children,t.children)}function GA(n,t){return n===t||Fn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Ur.visit(n.indices,t.indices)&&Ur.visit(n.dictionary,t.dictionary)}function Ad(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function Ya(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function WA(n,t){return n===t||Fn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function ZA(n,t){return n===t||Fn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}kt.prototype.visitNull=as;kt.prototype.visitBool=as;kt.prototype.visitInt=pr;kt.prototype.visitInt8=pr;kt.prototype.visitInt16=pr;kt.prototype.visitInt32=pr;kt.prototype.visitInt64=pr;kt.prototype.visitUint8=pr;kt.prototype.visitUint16=pr;kt.prototype.visitUint32=pr;kt.prototype.visitUint64=pr;kt.prototype.visitFloat=Pl;kt.prototype.visitFloat16=Pl;kt.prototype.visitFloat32=Pl;kt.prototype.visitFloat64=Pl;kt.prototype.visitUtf8=as;kt.prototype.visitLargeUtf8=as;kt.prototype.visitBinary=as;kt.prototype.visitLargeBinary=as;kt.prototype.visitFixedSizeBinary=zA;kt.prototype.visitDate=Md;kt.prototype.visitDateDay=Md;kt.prototype.visitDateMillisecond=Md;kt.prototype.visitTimestamp=Za;kt.prototype.visitTimestampSecond=Za;kt.prototype.visitTimestampMillisecond=Za;kt.prototype.visitTimestampMicrosecond=Za;kt.prototype.visitTimestampNanosecond=Za;kt.prototype.visitTime=Xa;kt.prototype.visitTimeSecond=Xa;kt.prototype.visitTimeMillisecond=Xa;kt.prototype.visitTimeMicrosecond=Xa;kt.prototype.visitTimeNanosecond=Xa;kt.prototype.visitDecimal=as;kt.prototype.visitList=HA;kt.prototype.visitStruct=kA;kt.prototype.visitUnion=Ed;kt.prototype.visitDenseUnion=Ed;kt.prototype.visitSparseUnion=Ed;kt.prototype.visitDictionary=GA;kt.prototype.visitInterval=Ad;kt.prototype.visitIntervalDayTime=Ad;kt.prototype.visitIntervalYearMonth=Ad;kt.prototype.visitDuration=Ya;kt.prototype.visitDurationSecond=Ya;kt.prototype.visitDurationMillisecond=Ya;kt.prototype.visitDurationMicrosecond=Ya;kt.prototype.visitDurationNanosecond=Ya;kt.prototype.visitFixedSizeList=WA;kt.prototype.visitMap=ZA;const Ur=new kt;function ku(n,t){return Ur.compareSchemas(n,t)}function Tc(n,t){return XA(n,t.map(e=>e.data.concat()))}function XA(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((m,h)=>Math.max(m,h.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,d=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)d[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(d=YA(e,a,d,t,r),a>0&&(i[s++]=he({type:new Cn(e),length:a,nullCount:0,children:d.slice()})))}return[n=n.assign(e),i.map(m=>new Vn(n,m))]}function YA(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],d=c?.length;if(d>=t)d===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,d-t))));else{const m=n[o];n[o]=m.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:he({type:m.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var am;class Rn{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new Te([]),this._offsets=[0],this;let r,s;t[0]instanceof Te&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof Vn)return[l];if(l instanceof Rn)return l.batches;if(l instanceof De){if(l.type instanceof Cn)return[new Vn(new Te(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),d=c.map(g=>new we([l[g]])),m=r??new Te(c.map((g,v)=>new Xe(String(g),d[v].type,d[v].nullable))),[,h]=Tc(m,d);return h.length===0?[new Vn(l)]:h}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new Te([]),!(r instanceof Te))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof Vn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!ku(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??K0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=j0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(gd(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?xd.visit(new we(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Rn(e,i.map(r=>new Vn(e,r)))}slice(t,e){const i=this.schema;[t,e]=Y0({length:this.numRows},t,e);const r=J0(this.data,this._offsets,t,e);return new Rn(i,r.map(s=>new Vn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=he({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new we(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new we([he({type:new Pr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=Tc(i,o)}return new Rn(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Rn(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[d,m]=o,h=e.findIndex(g=>g.name===l.name);return~h?m[h]=c:d.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new Rn(...Tc(s,a))}}am=Symbol.toStringTag;Rn[am]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=_l(yd),n.get=_l(kn.getVisitFn(D.Struct)),n.set=Q0(li.getVisitFn(D.Struct)),n.indexOf=$0(vl.getVisitFn(D.Struct)),"Table"))(Rn.prototype);var om;let Vn=class Ma{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof Te))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=he({nullCount:0,type:new Cn(this.schema.fields),children:this.schema.fields.map(e=>he({type:e.type,nullCount:0}))})]=t,!(this.data instanceof De))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=hf(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,d)=>(l.children[d]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[d]=Xe.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new Te(i),o=he({type:new Cn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=hf(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=lm(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return kn.visit(this.data,t)}at(t){return this.get(gd(t,this.numRows))}set(t,e){return li.visit(this.data,t,e)}indexOf(t,e){return vl.visit(this.data,t,e)}[Symbol.iterator](){return xd.visit(new we([this.data]))}toArray(){return[...this]}concat(...t){return new Rn(this.schema,[this,...t])}slice(t,e){const[i]=new we([this.data]).slice(t,e).data;return new Ma(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new we([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new we([he({type:new Pr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new Te(s,new Map(this.schema.metadata)),r=he({type:new Cn(s),children:a})}return new Ma(i,r)}select(t){const e=this.schema.select(t),i=new Cn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new Ma(e,he({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=he({type:new Cn(e.fields),length:this.numRows,children:i});return new Ma(e,r)}};om=Symbol.toStringTag;Vn[om]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Vn.prototype);function hf(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:he({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),he({type:new Cn(r),length:e,children:s})]}function lm(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])lm(o.children,c?.children,e);if(Dt.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class wd extends Vn{constructor(t){const e=t.fields.map(r=>he({type:r.type})),i=he({type:new Cn(t.fields),nullCount:0,children:e});super(t,i)}}let Ar=class Ei{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new Ei).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Ie),(e||new Ei).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):en.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):Me.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new cn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,en.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,Me.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return Ei.startMessage(t),Ei.addVersion(t,e),Ei.addHeaderType(t,i),Ei.addHeader(t,r),Ei.addBodyLength(t,s),Ei.addCustomMetadata(t,a),Ei.endMessage(t)}};class qA extends de{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return nf.startNull(e),nf.endNull(e)}visitInt(t,e){return Yn.startInt(e),Yn.addBitWidth(e,t.bitWidth),Yn.addIsSigned(e,t.isSigned),Yn.endInt(e)}visitFloat(t,e){return Ci.startFloatingPoint(e),Ci.addPrecision(e,t.precision),Ci.endFloatingPoint(e)}visitBinary(t,e){return Jh.startBinary(e),Jh.endBinary(e)}visitLargeBinary(t,e){return $h.startLargeBinary(e),$h.endLargeBinary(e)}visitBool(t,e){return Qh.startBool(e),Qh.endBool(e)}visitUtf8(t,e){return rf.startUtf8(e),rf.endUtf8(e)}visitLargeUtf8(t,e){return tf.startLargeUtf8(e),tf.endLargeUtf8(e)}visitDecimal(t,e){return ws.startDecimal(e),ws.addScale(e,t.scale),ws.addPrecision(e,t.precision),ws.addBitWidth(e,t.bitWidth),ws.endDecimal(e)}visitDate(t,e){return No.startDate(e),No.addUnit(e,t.unit),No.endDate(e)}visitTime(t,e){return ni.startTime(e),ni.addUnit(e,t.unit),ni.addBitWidth(e,t.bitWidth),ni.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return ii.startTimestamp(e),ii.addUnit(e,t.unit),i!==void 0&&ii.addTimezone(e,i),ii.endTimestamp(e)}visitInterval(t,e){return Di.startInterval(e),Di.addUnit(e,t.unit),Di.endInterval(e)}visitDuration(t,e){return Po.startDuration(e),Po.addUnit(e,t.unit),Po.endDuration(e)}visitList(t,e){return ef.startList(e),ef.endList(e)}visitStruct(t,e){return ts.startStruct_(e),ts.endStruct_(e)}visitUnion(t,e){Bn.startTypeIdsVector(e,t.typeIds.length);const i=Bn.createTypeIdsVector(e,t.typeIds);return Bn.startUnion(e),Bn.addMode(e,t.mode),Bn.addTypeIds(e,i),Bn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return rr.startDictionaryEncoding(e),rr.addId(e,BigInt(t.id)),rr.addIsOrdered(e,t.isOrdered),i!==void 0&&rr.addIndexType(e,i),rr.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Fo.startFixedSizeBinary(e),Fo.addByteWidth(e,t.byteWidth),Fo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Uo.startFixedSizeList(e),Uo.addListSize(e,t.listSize),Uo.endFixedSizeList(e)}visitMap(t,e){return Oo.startMap(e),Oo.addKeysSorted(e,t.keysSorted),Oo.endMap(e)}}const Ic=new qA;function jA(n,t=new Map){return new Te(JA(n,t),zo(n.metadata),t)}function cm(n){return new Jn(n.count,um(n.columns),dm(n.columns))}function KA(n){return new Zi(cm(n.data),n.id,n.isDelta)}function JA(n,t){return(n.fields||[]).filter(Boolean).map(e=>Xe.fromJSON(e,t))}function ff(n,t){return(n.children||[]).filter(Boolean).map(e=>Xe.fromJSON(e,t))}function um(n){return(n||[]).reduce((t,e)=>[...t,new Or(e.count,QA(e.VALIDITY)),...um(e.children)],[])}function dm(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Ui(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Ui(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Ui(t.length,r.OFFSET.length)),r.DATA&&t.push(new Ui(t.length,r.DATA.length)),t=dm(r.children,t)}return t}function QA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function $A(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=mf(n,ff(n,t)),r=new Xe(n.name,a,n.nullable,zo(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?pf(i):new Ua,o=new Ks(t.get(e),i,e,s.isOrdered),r=new Xe(n.name,o,n.nullable,zo(n.metadata))):(i=(i=s.indexType)?pf(i):new Ua,t.set(e,a=mf(n,ff(n,t))),o=new Ks(a,i,e,s.isOrdered),r=new Xe(n.name,o,n.nullable,zo(n.metadata))),r||null}function zo(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function pf(n){return new rs(n.isSigned,n.bitWidth)}function mf(n,t){const e=n.type.name;switch(e){case"NONE":return new Pr;case"null":return new Pr;case"binary":return new $o;case"largebinary":return new tl;case"utf8":return new el;case"largeutf8":return new nl;case"bool":return new il;case"list":return new ul((t||[])[0]);case"struct":return new Cn(t||[]);case"struct_":return new Cn(t||[])}switch(e){case"int":{const i=n.type;return new rs(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new Qo(bn[i.precision])}case"decimal":{const i=n.type;return new rl(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new sl(oi[i.unit])}case"time":{const i=n.type;return new al(Gt[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new ol(Gt[i.unit],i.timezone)}case"interval":{const i=n.type;return new ll(Wi[i.unit])}case"duration":{const i=n.type;return new cl(Gt[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new dl(Mn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new hl(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new fl(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new pl((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var tw=Tp,ew=qs;class Dn{static fromJSON(t,e){const i=new Dn(0,en.V5,e);return i._createHeader=nw(t,e),i}static decode(t){t=new ew(me(t));const e=Ar.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Dn(i,r,s);return a._createHeader=iw(e,s),a}static encode(t){const e=new tw;let i=-1;return t.isSchema()?i=Te.encode(e,t.header()):t.isRecordBatch()?i=Jn.encode(e,t.header()):t.isDictionaryBatch()&&(i=Zi.encode(e,t.header())),Ar.startMessage(e),Ar.addVersion(e,en.V5),Ar.addHeader(e,i),Ar.addHeaderType(e,t.headerType),Ar.addBodyLength(e,BigInt(t.bodyLength)),Ar.finishMessageBuffer(e,Ar.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof Te)return new Dn(0,en.V5,Me.Schema,t);if(t instanceof Jn)return new Dn(e,en.V5,Me.RecordBatch,t);if(t instanceof Zi)return new Dn(e,en.V5,Me.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===Me.Schema}isRecordBatch(){return this.headerType===Me.RecordBatch}isDictionaryBatch(){return this.headerType===Me.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=ke(t)}}class Jn{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=ke(t)}}class Zi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=ke(e)}}class Ui{constructor(t,e){this.offset=ke(t),this.length=ke(e)}}class Or{constructor(t,e){this.length=ke(t),this.nullCount=ke(e)}}function nw(n,t){return(()=>{switch(t){case Me.Schema:return Te.fromJSON(n);case Me.RecordBatch:return Jn.fromJSON(n);case Me.DictionaryBatch:return Zi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${Me[t]}, type: ${t} }`)})}function iw(n,t){return(()=>{switch(t){case Me.Schema:return Te.decode(n.header(new Ai),new Map,n.version());case Me.RecordBatch:return Jn.decode(n.header(new tr),n.version());case Me.DictionaryBatch:return Zi.decode(n.header(new Es),n.version())}throw new Error(`Unrecognized Message type: { name: ${Me[t]}, type: ${t} }`)})}Xe.encode=pw;Xe.decode=hw;Xe.fromJSON=$A;Te.encode=fw;Te.decode=rw;Te.fromJSON=jA;Jn.encode=mw;Jn.decode=sw;Jn.fromJSON=cm;Zi.encode=gw;Zi.decode=aw;Zi.fromJSON=KA;Or.encode=_w;Or.decode=lw;Ui.encode=vw;Ui.decode=ow;function rw(n,t=new Map,e=en.V5){const i=dw(n,t);return new Te(i,Ho(n),t,e)}function sw(n,t=en.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new Jn(n.length(),cw(n),uw(n,t))}function aw(n,t=en.V5){return new Zi(Jn.decode(n.data(),t),n.id(),n.isDelta())}function ow(n){return new Ui(n.offset(),n.length())}function lw(n){return new Or(n.length(),n.nullCount())}function cw(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Or.decode(e));return t}function uw(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<en.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Ui.decode(i));return e}function dw(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=Xe.decode(i,t));return e}function gf(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=Xe.decode(i,t));return e}function hw(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=vf(n,gf(n,t)),i=new Xe(n.name(),r,n.nullable(),Ho(n))):t.has(e=ke(o.id()))?(s=(s=o.indexType())?_f(s):new Ua,a=new Ks(t.get(e),s,e,o.isOrdered()),i=new Xe(n.name(),a,n.nullable(),Ho(n))):(s=(s=o.indexType())?_f(s):new Ua,t.set(e,r=vf(n,gf(n,t))),a=new Ks(r,s,e,o.isOrdered()),i=new Xe(n.name(),a,n.nullable(),Ho(n))),i||null}function Ho(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function _f(n){return new rs(n.isSigned(),n.bitWidth())}function vf(n,t){const e=n.typeType();switch(e){case Ze.NONE:return new Pr;case Ze.Null:return new Pr;case Ze.Binary:return new $o;case Ze.LargeBinary:return new tl;case Ze.Utf8:return new el;case Ze.LargeUtf8:return new nl;case Ze.Bool:return new il;case Ze.List:return new ul((t||[])[0]);case Ze.Struct_:return new Cn(t||[])}switch(e){case Ze.Int:{const i=n.type(new Yn);return new rs(i.isSigned(),i.bitWidth())}case Ze.FloatingPoint:{const i=n.type(new Ci);return new Qo(i.precision())}case Ze.Decimal:{const i=n.type(new ws);return new rl(i.scale(),i.precision(),i.bitWidth())}case Ze.Date:{const i=n.type(new No);return new sl(i.unit())}case Ze.Time:{const i=n.type(new ni);return new al(i.unit(),i.bitWidth())}case Ze.Timestamp:{const i=n.type(new ii);return new ol(i.unit(),i.timezone())}case Ze.Interval:{const i=n.type(new Di);return new ll(i.unit())}case Ze.Duration:{const i=n.type(new Po);return new cl(i.unit())}case Ze.Union:{const i=n.type(new Bn);return new dl(i.mode(),i.typeIdsArray()||[],t||[])}case Ze.FixedSizeBinary:{const i=n.type(new Fo);return new hl(i.byteWidth())}case Ze.FixedSizeList:{const i=n.type(new Uo);return new fl(i.listSize(),(t||[])[0])}case Ze.Map:{const i=n.type(new Oo);return new pl((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ze[e]}" (${e})`)}function fw(n,t){const e=t.fields.map(s=>Xe.encode(n,s));Ai.startFieldsVector(n,e.length);const i=Ai.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Ai.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return cn.startKeyValue(n),cn.addKey(n,o),cn.addValue(n,l),cn.endKeyValue(n)})):-1;return Ai.startSchema(n),Ai.addFields(n,i),Ai.addEndianness(n,yw?js.Little:js.Big),r!==-1&&Ai.addCustomMetadata(n,r),Ai.endSchema(n)}function pw(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Dt.isDictionary(s)?(a=s.dictionary.typeId,r=Ic.visit(s,n),i=Ic.visit(s.dictionary,n)):i=Ic.visit(s,n);const o=(s.children||[]).map(d=>Xe.encode(n,d)),l=$n.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?$n.createCustomMetadataVector(n,[...t.metadata].map(([d,m])=>{const h=n.createString(`${d}`),g=n.createString(`${m}`);return cn.startKeyValue(n),cn.addKey(n,h),cn.addValue(n,g),cn.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),$n.startField(n),$n.addType(n,i),$n.addTypeType(n,a),$n.addChildren(n,l),$n.addNullable(n,!!t.nullable),e!==-1&&$n.addName(n,e),r!==-1&&$n.addDictionary(n,r),c!==-1&&$n.addCustomMetadata(n,c),$n.endField(n)}function mw(n,t){const e=t.nodes||[],i=t.buffers||[];tr.startNodesVector(n,e.length);for(const a of e.slice().reverse())Or.encode(n,a);const r=n.endVector();tr.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Ui.encode(n,a);const s=n.endVector();return tr.startRecordBatch(n),tr.addLength(n,BigInt(t.length)),tr.addNodes(n,r),tr.addBuffers(n,s),tr.endRecordBatch(n)}function gw(n,t){const e=Jn.encode(n,t.data);return Es.startDictionaryBatch(n),Es.addId(n,BigInt(t.id)),Es.addIsDelta(n,t.isDelta),Es.addData(n,e),Es.endDictionaryBatch(n)}function _w(n,t){return Cp.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function vw(n,t){return Rp.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const yw=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),Td=n=>`Expected ${Me[n]} Message in stream, but was null or length 0.`,Id=n=>`Header pointer of flatbuffer-encoded ${Me[n]} Message is null or length 0.`,hm=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,fm=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class pm{constructor(t){this.source=t instanceof xl?t:new xl(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Ye:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Td(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=me(this.source.read(t));if(e.byteLength<t)throw new Error(fm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=Me.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Id(e));return r}readMetadataLength(){const t=this.source.read(Fl),e=t&&new qs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Ye;if(e.byteLength<t)throw new Error(hm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}}}class xw{constructor(t,e){this.source=t instanceof Js?t:Sp(t)?new Sl(t,e):new Js(t)}[Symbol.asyncIterator](){return this}next(){return Kt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Ye:t})}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Kt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Td(t));return e.value})}readMessageBody(t){return Kt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=me(yield this.source.read(t));if(e.byteLength<t)throw new Error(fm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return Kt(this,arguments,void 0,function*(t=!1){const e=Me.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Id(e));return r})}readMetadataLength(){return Kt(this,void 0,void 0,function*(){const t=yield this.source.read(Fl),e=t&&new qs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return Kt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Ye;if(e.byteLength<t)throw new Error(hm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}})}}class Sw extends pm{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof uf?t:new uf(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Dn.fromJSON(t.schema,Me.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Dn.fromJSON(e,Me.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Dn.fromJSON(e,Me.RecordBatch)}}return this._body=[],Ye}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Td(t));return e.value}readSchema(){const t=Me.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(Id(t));return i}}const Fl=4,Gu="ARROW1",Ba=new Uint8Array(Gu.length);for(let n=0;n<Gu.length;n+=1)Ba[n]=Gu.codePointAt(n);function Rd(n,t=0){for(let e=-1,i=Ba.length;++e<i;)if(Ba[e]!==n[t+e])return!1;return!0}const qa=Ba.length,mm=qa+Fl,bw=qa*2+Fl;class ai extends Sd{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return is(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return ei.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return ei.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof ai?t:Nu(t)?ww(t):Sp(t)?Rw(t):is(t)?Kt(this,void 0,void 0,function*(){return yield ai.from(yield t)}):bp(t)||ud(t)||Mp(t)||na(t)?Iw(new Js(t)):Tw(new xl(t))}static readAll(t){return t instanceof ai?t.isSync()?yf(t):xf(t):Nu(t)||ArrayBuffer.isView(t)||Wa(t)||xp(t)?yf(t):xf(t)}}class bl extends ai{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Fi(this,arguments,function*(){yield se(yield*Lo(es(this[Symbol.iterator]())))})}}class Ml extends ai{constructor(t){super(t),this._impl=t}readAll(){return Kt(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=es(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class gm extends bl{constructor(t){super(t),this._impl=t}}class Mw extends Ml{constructor(t){super(t),this._impl=t}}class _m{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=he({type:new Cn(this.schema.fields),length:t.length,children:i});return new Vn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new we(c)):new we(c)).memoize()}_loadVectors(t,e,i){return new sm(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class El extends _m{constructor(t,e){super(e),this._reader=Nu(t)?new Sw(this._handle=t):new pm(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=ym(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ye}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ye}next(){if(this.closed)return Ye;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new wd(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class Al extends _m{constructor(t,e){super(e),this._reader=new xw(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Kt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Kt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=ym(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Kt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ye})}return(t){return Kt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ye})}next(){return Kt(this,void 0,void 0,function*(){if(this.closed)return Ye;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new wd(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Kt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class vm extends El{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof df?t:new df(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(Me.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(Me.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-mm,i=t.readInt32(e),r=t.readAt(e-i,i);return Oa.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class Ew extends Al{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof Sl?t:new Sl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Kt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return Kt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(Me.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return Kt(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(Me.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return Kt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-mm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Oa.decode(r)})}_readNextMessageAndValidate(t){return Kt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class Aw extends El{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new BA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function ym(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*yf(n){const t=ai.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function xf(n){return Fi(this,arguments,function*(){const e=yield se(ai.from(n));try{if(!(yield se(e.open({autoDestroy:!1}))).closed)do yield yield se(e);while(!(yield se(e.reset().open())).closed)}finally{yield se(e.cancel())}})}function ww(n){return new bl(new Aw(n))}function Tw(n){const t=n.peek(qa+7&-8);return t&&t.byteLength>=4?Rd(t)?new gm(new vm(n.read())):new bl(new El(n)):new bl(new El((function*(){})()))}function Iw(n){return Kt(this,void 0,void 0,function*(){const t=yield n.peek(qa+7&-8);return t&&t.byteLength>=4?Rd(t)?new gm(new vm(yield n.read())):new Ml(new Al(n)):new Ml(new Al((function(){return Fi(this,arguments,function*(){})})()))})}function Rw(n){return Kt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new Sl(n,t);return t>=bw&&Rd(yield e.readAt(0,qa+7&-8))?new Mw(new Ew(e)):new Ml(new Al(e))})}class je extends de{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Vn?s.data.children:s.data),i=new je;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof we)return this.visitMany(t.data),this;const{type:e}=t;if(!Dt.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Dt.isUnion(e))this.nodes.push(new Or(i,0));else{const{nullCount:r}=t;Dt.isNull(e)||_i.call(this,r<=0?new Uint8Array(0):ml(t.offset,i,t.nullBitmap)),this.nodes.push(new Or(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function _i(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Ui(this._byteLength,t)),this._byteLength+=t,this}function Cw(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(_i.call(this,r),e.mode===Mn.Sparse)return Wu.call(this,n);if(e.mode===Mn.Dense){if(n.offset<=0)return _i.call(this,s),Wu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,d,m=-1;++m<i;)(c=r[m])!==void 0&&((d=o[c])===void 0&&(d=o[c]=s[m]),a[m]=s[m]-d,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);_i.call(this,a),this.visitMany(n.children.map((c,d)=>{const m=e.typeIds[d],h=o[m],g=l[m];return c.slice(h,Math.min(i,g))}))}}return this}function Dw(n){let t;return n.nullCount>=n.length?_i.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?_i.call(this,ml(n.offset,n.length,t)):_i.call(this,gl(n.values))}function mr(n){return _i.call(this,n.values.subarray(0,n.length*n.stride))}function Ul(n){const{length:t,values:e,valueOffsets:i}=n,r=ke(i[0]),s=ke(i[t]),a=Math.min(s-r,e.byteLength-r);return _i.call(this,Ap(-r,t+1,i)),_i.call(this,e.subarray(r,r+a)),this}function Cd(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return _i.call(this,Ap(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function Wu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}je.prototype.visitBool=Dw;je.prototype.visitInt=mr;je.prototype.visitFloat=mr;je.prototype.visitUtf8=Ul;je.prototype.visitLargeUtf8=Ul;je.prototype.visitBinary=Ul;je.prototype.visitLargeBinary=Ul;je.prototype.visitFixedSizeBinary=mr;je.prototype.visitDate=mr;je.prototype.visitTimestamp=mr;je.prototype.visitTime=mr;je.prototype.visitDecimal=mr;je.prototype.visitList=Cd;je.prototype.visitStruct=Wu;je.prototype.visitUnion=Cw;je.prototype.visitInterval=mr;je.prototype.visitDuration=mr;je.prototype.visitFixedSizeList=Cd;je.prototype.visitMap=Cd;class xm extends Sd{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new Vo,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Hn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return is(t)?t.then(e=>this.writeAll(e)):na(t)?Pd(this,t):Nd(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Vo?this._sink=t:(this._sink=new Vo,t&&lE(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&cE(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!ku(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Rn&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Vn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!ku(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Vn?t instanceof wd||this._writeRecordBatch(t):t instanceof Rn?this.writeAll(t.batches):Wa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Dn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===Me.RecordBatch?this._recordBatchBlocks.push(new Fr(o,t.bodyLength,this._position)):t.headerType===Me.DictionaryBatch&&this._dictionaryBlocks.push(new Fr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=me(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Dn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Ba)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=je.assemble(t),a=new Jn(t.numRows,i,r),o=Dn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=je.assemble(new we([t])),l=new Jn(t.length,s,a),c=new Zi(l,e,i),d=Dn.from(c,r);return this._writeMessage(d)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,d]of a.entries())this._writeDictionaryBatch(d,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class Dd extends xm{static writeAll(t,e){const i=new Dd(e);return is(t)?t.then(r=>i.writeAll(r)):na(t)?Pd(i,t):Nd(i,t)}}class Ld extends xm{static writeAll(t){const e=new Ld;return is(t)?t.then(i=>e.writeAll(i)):na(t)?Pd(e,t):Nd(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Oa.encode(new Oa(t,en.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Nd(n,t){let e=t;t instanceof Rn&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function Pd(n,t){return Kt(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=es(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function Lw(n,t="stream"){return(t==="stream"?Dd:Ld).writeAll(n).toUint8Array(!0)}var Nw=Object.create,Sm=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,Fw=Object.getOwnPropertyNames,Uw=Object.getPrototypeOf,Ow=Object.prototype.hasOwnProperty,Bw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Vw=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Fw(t))!Ow.call(n,r)&&r!==e&&Sm(n,r,{get:()=>t[r],enumerable:!(i=Pw(t,r))||i.enumerable});return n},zw=(n,t,e)=>(e=n!=null?Nw(Uw(n)):{},Vw(!n||!n.__esModule?Sm(e,"default",{value:n,enumerable:!0}):e,n)),Hw=Bw((n,t)=>{t.exports=Worker}),kw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(kw||{}),Gw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(Gw||{}),Ww=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(Ww||{}),Zw=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(Zw||{}),Xw=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(Xw||{}),Yw=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(Yw||{}),qw=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},jw=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(jw||{}),Kw=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=ai.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new Rn(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new bm(this._bindings,this._conn,e),r=await ai.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new Jw(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=Lw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},bm=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},Jw=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=ai.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new Rn(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new bm(this.bindings,this.connectionId,t),i=await ai.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},Qw=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(Qw||{}),$w=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))($w||{}),ve=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function ko(n){switch(n.typeId){case D.Binary:return{sqlType:"binary"};case D.Bool:return{sqlType:"bool"};case D.Date:return{sqlType:"date"};case D.DateDay:return{sqlType:"date32[d]"};case D.DateMillisecond:return{sqlType:"date64[ms]"};case D.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case D.Float:return{sqlType:"float"};case D.Float16:return{sqlType:"float16"};case D.Float32:return{sqlType:"float32"};case D.Float64:return{sqlType:"float64"};case D.Int:return{sqlType:"int32"};case D.Int16:return{sqlType:"int16"};case D.Int32:return{sqlType:"int32"};case D.Int64:return{sqlType:"int64"};case D.Uint16:return{sqlType:"uint16"};case D.Uint32:return{sqlType:"uint32"};case D.Uint64:return{sqlType:"uint64"};case D.Uint8:return{sqlType:"uint8"};case D.IntervalDayTime:return{sqlType:"interval[dt]"};case D.IntervalYearMonth:return{sqlType:"interval[m]"};case D.List:return{sqlType:"list",valueType:ko(n.valueType)};case D.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case D.Null:return{sqlType:"null"};case D.Utf8:return{sqlType:"utf8"};case D.Struct:return{sqlType:"struct",fields:n.children.map(t=>Zu(t.name,t.type))};case D.Map:{let t=n;return{sqlType:"map",keyType:ko(t.keyType),valueType:ko(t.valueType)}}case D.Time:return{sqlType:"time[s]"};case D.TimeMicrosecond:return{sqlType:"time[us]"};case D.TimeMillisecond:return{sqlType:"time[ms]"};case D.TimeNanosecond:return{sqlType:"time[ns]"};case D.TimeSecond:return{sqlType:"time[s]"};case D.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case D.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case D.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case D.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case D.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Zu(n,t){let e=ko(t);return e.name=n,e}var tT=/'(opfs:\/\/\S*?)'/g,eT=/(opfs:\/\/\S*?)/g;function nT(n){return n.search(eT)>-1}function iT(n){return[...n.matchAll(tT)].map(t=>t[1])}var rT=new TextEncoder,sT=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new ve("RESET",null);return await this.postTask(n)}async ping(){let n=new ve("PING",null);await this.postTask(n)}async dropFile(n){let t=new ve("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new ve("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new ve("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new ve("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new ve("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new ve("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new ve("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new ve("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new ve("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new Kw(this,n)}async disconnect(n){let t=new ve("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new ve("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new ve("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new ve("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new ve("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new ve("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new ve("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new ve("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new ve("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new ve("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new ve("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new ve("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=rT.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new ve("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new ve("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new ve("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new ve("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new ve("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new ve("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new ve("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new ve("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new ve("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Zu(s,a))}e.columnsFlat=r,delete e.columns}let i=new ve("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Zu(s,a))}e.columnsFlat=r,delete e.columns}let i=new ve("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return nT((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=iT(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function aT(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}aT();var oT=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(oT||{}),lT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),cT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),uT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),dT=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),hT={version:"1.33.1-dev20.0"},Fd=hT.version.split(".");Fd[0];Fd[1];Fd[2];var fT=()=>typeof navigator>"u",Rc=null,Cc=null,Dc=null,Lc=null,Nc=null;async function pT(){return Rc==null&&(Rc=typeof BigInt64Array<"u"),Cc==null&&(Cc=await cT()),Dc==null&&(Dc=await dT()),Lc==null&&(Lc=await uT()),Nc==null&&(Nc=await lT()),{bigInt64Array:Rc,crossOriginIsolated:fT()||globalThis.crossOriginIsolated||!1,wasmExceptions:Cc,wasmSIMD:Lc,wasmThreads:Dc,wasmBulkMemory:Nc}}async function mT(n){let t=await pT();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}zw(Hw());const gT="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",_T="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",vT="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",yT="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",xT="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",ST="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",bT="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js";class MT{db=null;connection=null;async initialize(){try{const e=await mT({mvp:{mainModule:gT,mainWorker:_T},eh:{mainModule:vT,mainWorker:yT},coi:{mainModule:xT,mainWorker:ST,pthreadWorker:bT}}),i=new Worker(e.mainWorker),r=new qw;this.db=new sT(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class ET{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;allocateBuffers(t=100){this.capacity=t,Ot.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Ot.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=Ot.request("GET_RING_BUFFER",{id:this.xBufferId}),i=Ot.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.bindEvents()}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=a.clientY-e.top;this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}function AT(n,t){te(t,!0);const e=Pn("graph-actions"),i=["white-box","circle","triangle","star","particle"];{let r=Q(()=>t.node.textureId||i[0]),s=Q(()=>i.map(a=>({value:a,label:a})));Ii(n,{label:"Texture ID",get value(){return A(r)},get options(){return A(s)},onchange:a=>e.updateNodeConfig(t.node,{textureId:a})})}ee()}var wT=ue("<!> <!> <!> <!>",1);function TT(n,t){te(t,!0);const e=Pn("graph-actions"),i=["white-box","circle","triangle","star","particle"];var r=wT(),s=pe(r);{let c=Q(()=>t.node.textureId||i[0]),d=Q(()=>i.map(m=>({value:m,label:m})));Ii(s,{label:"Texture ID",get value(){return A(c)},get options(){return A(d)},onchange:m=>e.updateNodeConfig(t.node,{textureId:m})})}var a=gt(s,2);{let c=Q(()=>(t.node.vertices?Array.from(t.node.vertices):[]).join(", "));Ao(a,{label:"Vertices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{vertices:new Float32Array(d.split(",").map(m=>parseFloat(m.trim())||0))})})}var o=gt(a,2);{let c=Q(()=>(t.node.indices?Array.from(t.node.indices):[]).join(", "));Ao(o,{label:"Indices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{indices:new Uint16Array(d.split(",").map(m=>parseInt(m.trim())||0))})})}var l=gt(o,2);{let c=Q(()=>(t.node.uvs?Array.from(t.node.uvs):[]).join(", "));Ao(l,{label:"UVs",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{uvs:new Float32Array(d.split(",").map(m=>parseFloat(m.trim())||0))})})}N(n,r),ee()}var IT=ue("<!> <!>",1);function RT(n,t){te(t,!0);const e=Pn("graph-actions"),i=[{value:"add",label:"Add"},{value:"multiply",label:"Multiply"}];var r=IT(),s=pe(r);{let o=Q(()=>t.node.capacity||100);Ku(s,{label:"Capacity",min:1,step:1,get value(){return A(o)},onchange:l=>e.updateNodeConfig(t.node,{capacity:l})})}var a=gt(s,2);{let o=Q(()=>t.node.operation||"add");Ii(a,{label:"Operation",get value(){return A(o)},get options(){return i},onchange:l=>e.updateNodeConfig(t.node,{operation:l})})}N(n,r),ee()}function CT(n,t){te(t,!0);const e=Pn("graph-actions");let i=$e(Us([]));function r(){Be(i,Ot.request("GET_AVAILABLE_BUFFERS",void 0),!0)}Va(()=>{r(),Ot.on("GRAPH_UPDATED",r),Ot.on("MEMORY_ALLOCATED",r)}),bf(()=>{Ot.off("GRAPH_UPDATED",r),Ot.off("MEMORY_ALLOCATED",r)});{let s=Q(()=>t.node.bufferId||""),a=Q(()=>A(i).map(o=>({value:o,label:o})));Ii(n,{label:"Target Buffer ID",get value(){return A(s)},disabledPlaceholder:"Select a buffer...",get options(){return A(a)},onchange:o=>e.updateNodeConfig(t.node,{bufferId:o})})}ee()}function DT(n,t){te(t,!0);const e=Pn("graph-actions");{let i=Q(()=>(t.node.data?Array.from(t.node.data):[]).join(", "));Ao(n,{label:"Data (comma separated)",rows:3,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{data:r.split(",").map(s=>parseFloat(s.trim())||0)})})}ee()}function LT(n,t){te(t,!0);const e=Pn("graph-actions");{let i=Q(()=>t.node.capacity||100);Ku(n,{label:"Capacity",min:1,step:1,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{capacity:r})})}ee()}var NT=ue('<div style="display: flex; gap: 6px;"><div style="flex: 1;"><!></div> <div style="flex: 1;"><!></div></div>'),PT=ue('<!> <!> <div class="port-section"><div class="port-label-header">Data Parser Tuning</div> <div style="margin-top: 6px;"><!></div> <!> <!> <!></div>',1);function Sf(n,t){te(t,!0);const e=Pn("graph-actions");var i=PT(),r=pe(i);{let g=Q(()=>t.node.capacity||100);Ku(r,{label:"Capacity",min:1,step:1,get value(){return A(g)},onchange:v=>e.updateNodeConfig(t.node,{capacity:v})})}var s=gt(r,2);{let g=Q(()=>t.node.url||"");Of(s,{label:"API URL",get value(){return A(g)},placeholder:"https://api.example.com/data.json",onchange:v=>e.updateNodeConfig(t.node,{url:v})})}var a=gt(s,2),o=gt(lt(a),2),l=lt(o);{let g=Q(()=>t.node.dataPath||""),v=Q(()=>[{value:"",label:"Auto-detect"},...(t.node.availableDataPaths||[]).map(b=>({value:b,label:b==="root"?"(Root Level)":b}))]);Ii(l,{label:"Target Array",get value(){return A(g)},get options(){return A(v)},onchange:b=>e.updateNodeConfig(t.node,{dataPath:b})})}st(o);var c=gt(o,2);{let g=Q(()=>t.node.timeKey||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableColumns||[]).map(b=>({value:b,label:b}))]);Ii(c,{label:"Time/X-Axis Column",get value(){return A(g)},get options(){return A(v)},onchange:b=>e.updateNodeConfig(t.node,{timeKey:b})})}var d=gt(c,2);{let g=Q(()=>t.node.unpackArray||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableNestedArrays||[]).map(b=>({value:b,label:b}))]);Ii(d,{label:"Unpack Inner Array (EAV)",get value(){return A(g)},get options(){return A(v)},onchange:b=>e.updateNodeConfig(t.node,{unpackArray:b})})}var m=gt(d,2);{var h=g=>{var v=NT(),b=lt(v),_=lt(b);{let w=Q(()=>t.node.unpackKey||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(f=>({value:f,label:f}))]);Ii(_,{label:"Key Column",get value(){return A(w)},get options(){return A(u)},onchange:f=>e.updateNodeConfig(t.node,{unpackKey:f})})}st(b);var p=gt(b,2),x=lt(p);{let w=Q(()=>t.node.unpackValue||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(f=>({value:f,label:f}))]);Ii(x,{label:"Value Column",get value(){return A(w)},get options(){return A(u)},onchange:f=>e.updateNodeConfig(t.node,{unpackValue:f})})}st(p),st(v),N(g,v)};Bt(m,g=>{t.node.unpackArray&&g(h)})}st(a),N(n,i),ee()}const FT=n=>{q_(n,{})};var UT=ue("<!> <!> <!>",1),OT=ue('<div class="logic-tree svelte-1uha8ag"><!></div>'),BT=ue('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function YT(n,t){te(t,!0);const e=d=>{K_(d,{children:(m,h)=>{var g=Fe(),v=pe(g);{var b=_=>{Zv(_,{})};Bt(v,_=>{A(l)&&_(b)})}N(m,g)},$$slots:{default:!0}})};Ta("settings-registry",{sprite:AT,mesh:TT,math:RT,"ring-buffer":CT,"static-array":DT,motion:LT,api:Sf,"smhi-weather":Sf}),new yg;const r=new J_,s=new rE,a=new MT,o=new ET;let l=$e(!1),c=$e(!1);Va(()=>{Be(c,!!localStorage.getItem("graph-state")),o.allocateBuffers(100),Be(l,!0)}),X_(n,{get viewsPanel(){return FT},get settingsPanel(){return e},children:(d,m)=>{var h=BT(),g=pe(h),v=lt(g);Cg(v,{get graph(){return r},get renderer(){return s},get compute(){return a},get pointer(){return o}}),st(g);var b=gt(g,2);{var _=p=>{var x=OT(),w=lt(x);Q_(w,{children:(u,f)=>{$_(u,{id:"mouse-trail",children:(T,I)=>{var y=UT(),M=pe(y);jd(M,{id:"x-coords",bufferId:"pointer-x",exportMap:{out:"X"}});var O=gt(M,2);jd(O,{id:"y-coords",bufferId:"pointer-y",exportMap:{out:"Y"}});var C=gt(O,2);Tg(C,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"],inputMap:{x:"X",y:"Y"}}),N(T,y)},$$slots:{default:!0}})},$$slots:{default:!0}}),st(x),N(p,x)};Bt(b,p=>{A(l)&&!A(c)&&p(_)})}N(d,h)}}),ee()}export{YT as component};
