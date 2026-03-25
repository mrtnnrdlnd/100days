import{a as F,f as ne,c as Ue,t as En,k as et,e as fi,s as Ln,d as en,l as jn}from"../chunks/o0YnpPci.js";import{o as Ha,a as Xu}from"../chunks/POvuA-I3.js";import{h as qr,d as Mf,b1 as Nm,e as Ef,q as A,r as Pm,ac as Fm,s as Xd,f as zl,g as Hl,i as $a,aC as Um,aJ as Om,al as Yd,M as Bm,L as Fc,b2 as Vm,O as zm,_ as Hm,aQ as km,aI as Yu,b3 as Gm,a8 as Uc,b4 as Wm,b5 as Zm,a3 as Xm,au as Ym,K as kl,b6 as Fi,b7 as Af,W as qm,G as wf,J as Tf,b8 as Gl,aa as jm,b9 as Km,ba as Jm,aG as Qm,N as $m,I as tg,aD as eg,j as ng,b as ig,U as fe,x as Qt,b0 as Pn,u as as,z as $t,B as ct,C as st,a5 as Xe,F as gt,a6 as Q,y as me,am as sn,aO as qd,bb as Ra,A as Qe,bc as rg,T as Vs,bd as Oc}from"../chunks/CR-tZYsT.js";import{B as sg,p as li,i as Ut,r as An}from"../chunks/DibeUSV5.js";import{g as wn,a as Tn,s as je,T as ag,S as If,l as Bc,r as Zo,b as Ca,c as zn,i as qu,d as ju,e as og,f as Xs,h as Rf,X as Tl,t as lg,j as cg}from"../chunks/BjakaILn.js";import{b as Da,c as Cf}from"../chunks/CBmMM5Sj.js";import{i as ug}from"../chunks/BWd2LGRm.js";const dg=Symbol("NaN");function hg(n,t,e){qr&&Mf();var i=new sg(n),r=!Nm();Ef(()=>{var s=t();s!==s&&(s=dg),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,e)})}function ui(n,t){return t}function fg(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];Tf(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var f=n.outrogroups;Vc(n,Yu(s.done)),f.delete(s),f.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,d=c.parentNode;Qm(d),d.append(c),n.items.clear()}Vc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Vc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Fi;const a=document.createDocumentFragment();$m(s,a)}else tg(t[r],e)}}var jd;function $n(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&Af)!==0;if(l){var c=n;a=qr?zl(Ym(c)):c.appendChild(kl())}qr&&Mf();var d=null,p=Hm(()=>{var T=e();return km(T)?T:T==null?[]:Yu(T)}),f,_=new Map,v=!0;function S(T){(E.effect.f&qm)===0&&(E.pending.delete(T),E.fallback=d,pg(E,f,a,t,i),d!==null&&(f.length===0?(d.f&Fi)===0?wf(d):(d.f^=Fi,_a(d,null,a)):Tf(d,()=>{d=null})))}function m(T){E.pending.delete(T)}var g=Ef(()=>{f=A(p);var T=f.length;let u=!1;if(qr){var h=Pm(a)===Fm;h!==(T===0)&&(a=Xd(),zl(a),Hl(!1),u=!0)}for(var M=new Set,I=Bm,y=zm(),b=0;b<T;b+=1){qr&&$a.nodeType===Um&&$a.data===Om&&(a=$a,u=!0,Hl(!1));var O=f[b],C=i(O,b),G=v?null:o.get(C);G?(G.v&&Yd(G.v,O),G.i&&Yd(G.i,b),y&&I.unskip_effect(G.e)):(G=mg(o,v?a:jd??=kl(),O,C,b,r,t,e),v||(G.e.f|=Fi),o.set(C,G)),M.add(C)}if(T===0&&s&&!d&&(v?d=Fc(()=>s(a)):(d=Fc(()=>s(jd??=kl())),d.f|=Fi)),T>M.size&&Vm(),qr&&T>0&&zl(Xd()),!v)if(_.set(I,M),y){for(const[N,L]of o)M.has(N)||I.skip_effect(L.e);I.oncommit(S),I.ondiscard(m)}else S(I);u&&Hl(!0),A(p)}),E={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1,qr&&(a=$a)}function la(n){for(;n!==null&&(n.f&Km)===0;)n=n.next;return n}function pg(n,t,e,i,r){var s=(i&Jm)!==0,a=t.length,o=n.items,l=la(n.effect.first),c,d=null,p,f=[],_=[],v,S,m,g;if(s)for(g=0;g<a;g+=1)v=t[g],S=r(v,g),m=o.get(S).e,(m.f&Fi)===0&&(m.nodes?.a?.measure(),(p??=new Set).add(m));for(g=0;g<a;g+=1){if(v=t[g],S=r(v,g),m=o.get(S).e,n.outrogroups!==null)for(const O of n.outrogroups)O.pending.delete(m),O.done.delete(m);if((m.f&Gl)!==0&&(wf(m),s&&(m.nodes?.a?.unfix(),(p??=new Set).delete(m))),(m.f&Fi)!==0)if(m.f^=Fi,m===l)_a(m,null,e);else{var E=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),xr(n,d,m),xr(n,m,E),_a(m,E,e),d=m,f=[],_=[],l=la(d.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(f.length<_.length){var T=_[0],u;d=T.prev;var h=f[0],M=f[f.length-1];for(u=0;u<f.length;u+=1)_a(f[u],T,e);for(u=0;u<_.length;u+=1)c.delete(_[u]);xr(n,h.prev,M.next),xr(n,d,h),xr(n,M,T),l=T,d=M,g-=1,f=[],_=[]}else c.delete(m),_a(m,l,e),xr(n,m.prev,m.next),xr(n,m,d===null?n.effect.first:d.next),xr(n,d,m),d=m;continue}for(f=[],_=[];l!==null&&l!==m;)(c??=new Set).add(l),_.push(l),l=la(l.next);if(l===null)continue}(m.f&Fi)===0&&f.push(m),d=m,l=la(m.next)}if(n.outrogroups!==null){for(const O of n.outrogroups)O.pending.size===0&&(Vc(n,Yu(O.done)),n.outrogroups?.delete(O));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(m of c)(m.f&Gl)===0&&I.push(m);for(;l!==null;)(l.f&Gl)===0&&l!==n.fallback&&I.push(l),l=la(l.next);var y=I.length;if(y>0){var b=(i&Af)!==0&&a===0?e:null;if(s){for(g=0;g<y;g+=1)I[g].nodes?.a?.measure();for(g=0;g<y;g+=1)I[g].nodes?.a?.fix()}fg(n,I,b)}}s&&jm(()=>{if(p!==void 0)for(m of p)m.nodes?.a?.apply()})}function mg(n,t,e,i,r,s,a,o){var l=(a&Wm)!==0?(a&Zm)===0?Xm(e,!1,!1):Uc(e):null,c=(a&Gm)!==0?Uc(r):null;return{v:l,i:c,e:Fc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function _a(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Fi)===0?t.nodes.start:e;i!==null;){var a=eg(i);if(s.before(i),i===r)return;i=a}}function xr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Il(n,t,e){ng(()=>{var i=ig(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function gg(n){var t=Uc(0);return function(){return arguments.length===1?(fe(t,A(t)+1),arguments[0]):(A(t),n())}}class _g{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const Lt=new _g;class vg{id;type="source";subType="dummy";parentId;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}getOutputs(){return{out:this.output}}}class yg{id;type="processor";subType="dummy";parentId;inputMap;exportMap;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}process(){return{out:this.output}}}class xg{id;type="sink";subType="dummy";parentId;inputMap;constructor(t,e){this.id=t,e&&Object.assign(this,e)}consume(){return null}}class Df{id;type="subject";subType="default";parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}}class Sg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Lt.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),Lt.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),Lt.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),Lt.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),Lt.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),Lt.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}destroy(){this.clear()}}class Lf{id;type="source";subType="ring-buffer";bufferId;parentId;exportMap;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutputs(){if(!this.ringBuffer)return{out:this.outputBuffer};const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return{out:this.outputBuffer}}}class bg{id;type="source";subType="static-array";parentId;exportMap;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutputs(){return{out:this.data}}}class Mg{id;type="source";subType="time";parentId;exportMap;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutputs(){return this.outputBuffer[0]=performance.now()/1e3,{out:this.outputBuffer}}}class Eg{id;type="source";subType="random";parentId;exportMap;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutputs(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return{out:this.outputBuffer}}}class Us{id;type="source";parentId;exportMap;capacity;url;outputBuffers={};static fetchCache=new Map;constructor(t,e,i){this.id=t,this.capacity=e,this.url=i}async load(){if(this.url)try{const t=Date.now();for(const[r,s]of Us.fetchCache.entries())t-s.time>6e4&&Us.fetchCache.delete(r);let e=Us.fetchCache.get(this.url);(!e||t-e.time>6e4)&&(e={promise:fetch(this.url).then(s=>s.json()),time:t},Us.fetchCache.set(this.url,e));const i=await e.promise;this.outputBuffers=this.parseResponse(i),Lt.emit("GRAPH_UPDATED",void 0)}catch{this.outputBuffers={}}}createBuffer(){return new Float64Array(this.capacity)}getOutputs(){return this.outputBuffers}}class Ag extends Us{subType="smhi-weather";constructor(t,e,i,r){const s=`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${r}/lat/${i}/data.json`;super(t,e,s),this.load()}parseResponse(t){const e={},i=t?.timeSeries;if(!Array.isArray(i))return e;const r=Math.min(i.length,this.capacity),s=this.createBuffer();e.time=s;for(let a=0;a<r;a++){const o=i[a];if(o.validTime&&(s[a]=new Date(o.validTime).getTime()/1e3),Array.isArray(o.parameters))for(const l of o.parameters)e[l.name]||(e[l.name]=this.createBuffer()),e[l.name][a]=l.values[0]}return e}}function Kd(n,t){Qt(t,!0);let e=li(t,"exportMap",19,()=>({}));const i=Pn("subject-parent");as(()=>{const r=Lt.request("GET_RING_BUFFER",{id:t.bufferId})||null,s=new Lf(t.id,r,t.bufferId);s.parentId=i?.(),s.exportMap=e(),Lt.request("REGISTER_NODE",{node:s})}),$t()}class wg{id;type="processor";subType="math";parentId;capacity;operation;inputMap;exportMap;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){const e=t.in||[];if(e.length===0)return{out:this.outputBuffer};const i=e[0],r=Math.min(i.length,this.outputBuffer.length);for(let s=0;s<r;s++){let a=i[s];for(let o=1;o<e.length;o++){const l=e[o],c=l.length>1?l[s]:l[0];this.operation==="add"?a+=c:this.operation==="multiply"&&(a*=c)}this.outputBuffer[s]=a}return{out:this.outputBuffer}}}class Tg{id;type="processor";subType="motion";parentId;capacity;inputMap;exportMap;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}process(t){const e=t.pos||[],i=t.vel||[];if(e.length===0||i.length===0)return{out:this.outputBuffer};const r=e[0],s=i[0],a=Math.min(r.length,s.length,this.outputBuffer.length);for(let o=0;o<a;o++)this.outputBuffer[o]=r[o]+s[o];return{out:this.outputBuffer}}}class Nf{id;type="sink";subType="sprite";textureId;parentId;inputMap;primitiveCache=[];constructor(t,e){this.id=t,this.textureId=e}consume(t){const e=t.x||[],i=t.y||[];if(e.length===0||i.length===0)return null;let r=e[0],s=i[0];const a=Math.min(r.length,s.length);for(;this.primitiveCache.length<a;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let o=0;o<this.primitiveCache.length;o++)if(o<a)if(r[o]===0&&s[o]===0)this.primitiveCache[o].opacity=0;else{const l=this.primitiveCache[o];l.x=r[o],l.y=s[o],l.opacity=1-o/a}else this.primitiveCache[o].opacity=0;return this.primitiveCache}}class Ig{id;type="sink";subType="mesh";textureId;parentId;inputMap;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.primitiveCache}}function Rg(n,t){Qt(t,!0);let e=li(t,"inputIds",19,()=>[]),i=li(t,"inputMap",19,()=>({}));const r=Pn("subject-parent");as(()=>{const s=new Nf(t.id,t.textureId);s.parentId=r?.(),s.inputMap=i(),Lt.request("REGISTER_NODE",{node:s});for(let a=0;a<e().length;a++)Lt.request("CONNECT_NODES",{sourceId:e()[a],targetId:t.id})}),$t()}class Cg{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};boundSaveGraphState=this.saveGraphState.bind(this);nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new vg(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new Mg(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new Eg(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new bg(t,e?.data?Array.from(e.data):[0]);return i.subType="static-array",i}},{subType:"smhi-weather",label:"SMHI Weather",create:(t,e)=>{const i=e?.lat??59.3293,r=e?.lon??18.0686;return new Ag(t,e?.capacity??100,i,r)}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=Lt.request("GET_RING_BUFFER",{id:i})||null,s=new Lf(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new yg(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new wg(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new Tg(t,e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new xg(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new Nf(t,e?.textureId??"white-box");return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=e?.vertices?new Float32Array(e.vertices):new Float32Array,r=e?.indices?new Uint16Array(e.indices):new Uint16Array,s=e?.uvs?new Float32Array(e.uvs):new Float32Array,a=new Ig(t,e?.textureId??"white-box",i,r,s);return a.subType="mesh",a}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new Df(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){await Promise.all([this.compute.initialize().catch(()=>{}),this.renderer.initialize(t).catch(()=>{})]),this.loadGraphState(),Lt.on("GRAPH_UPDATED",this.boundSaveGraphState),this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this))}saveGraphState(){const t=Lt.request("GET_GRAPH_STATE",void 0),e=t.nodes.map(i=>{const r=i;return{id:i.id,type:i.type,subType:i.subType,parentId:i.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,lat:r.lat,lon:r.lon,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[],exportMap:r.exportMap?JSON.parse(JSON.stringify(r.exportMap)):void 0,inputMap:r.inputMap?JSON.parse(JSON.stringify(r.inputMap)):void 0}}});localStorage.setItem("graph-state",JSON.stringify({nodes:e,connections:t.connections}))}loadGraphState(){const t=localStorage.getItem("graph-state");if(t)try{const e=JSON.parse(t);for(let i=0;i<e.nodes.length;i++){const r=e.nodes[i],s=Lt.request("CREATE_NODE",{id:r.id,type:r.type,subType:r.subType,parentId:r.parentId,config:r.config});s&&Lt.request("REGISTER_NODE",{node:s})}for(let i=0;i<e.connections.length;i++){const r=e.connections[i];Lt.request("CONNECT_NODES",{sourceId:r.sourceId,targetId:r.targetId})}}catch{}}setupMediatorHandlers(){Lt.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("REORDER_NODE",t=>{const e=this.graph.nodes.get(t.nodeId),i=this.graph.nodes.get(t.targetId);return e&&i&&(e.parentId=i.parentId,this.graph.reorderNode(t.nodeId,t.targetId,t.position),Lt.emit("GRAPH_UPDATED",void 0)),!0}),Lt.handle("GET_CONTEXT",t=>null),Lt.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),Lt.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),Lt.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId,t.config&&(t.config.name!==void 0&&(r.name=t.config.name),t.config.exportMap&&(r.exportMap=t.config.exportMap),t.config.inputMap&&(r.inputMap=t.config.inputMap),t.config.inputIds&&(r.inputIds=[...t.config.inputIds]))),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,Lt.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,Lt.off("GRAPH_UPDATED",this.boundSaveGraphState),this.renderer.destroy(),this.compute.destroy()}}var Dg=ne('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function Lg(n,t){Qt(t,!0);let e=Xe(void 0),i=Xe(void 0);const r=new Cg(t.graph,t.renderer,t.compute);as(()=>{if(!A(e)||!A(i))return;(async()=>{await r.boot(A(e));const c=window.devicePixelRatio||1;t.renderer.resize(A(i).clientWidth,A(i).clientHeight,c),t.pointer.initialize(A(i))})();const l=new ResizeObserver(c=>{for(const d of c){const{width:p,height:f}=d.contentRect;p>0&&f>0&&(t.renderer.resize(p,f,window.devicePixelRatio||1),t.pointer.updateBounds(p,f))}});return l.observe(A(i)),()=>{l.disconnect(),r.shutdown(),t.pointer.destroy()}});var s=Dg(),a=ct(s);Da(a,o=>fe(e,o),()=>A(e)),st(s),Da(s,o=>fe(i,o),()=>A(i)),F(n,s),$t()}var Ng=et('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z"></path>'),Pg=et('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>',1),Fg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),Ug=et('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z"></path>'),Og=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>'),Bg=et('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z"></path>'),Vg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function zg(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=Vg();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=Ng();F(u,h)},v=u=>{var h=Pg();sn(),F(u,h)},S=u=>{var h=Fg();F(u,h)},m=u=>{var h=Ug();F(u,h)},g=u=>{var h=Og();F(u,h)},E=u=>{var h=Bg();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var Hg=et('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z"></path>'),kg=et('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>',1),Gg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z"></path>'),Wg=et('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z"></path>'),Zg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>'),Xg=et('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z"></path>'),Yg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function qg(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=Yg();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=Hg();F(u,h)},v=u=>{var h=kg();sn(),F(u,h)},S=u=>{var h=Gg();F(u,h)},m=u=>{var h=Wg();F(u,h)},g=u=>{var h=Zg();F(u,h)},E=u=>{var h=Xg();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var jg=et('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Kg=et('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),Jg=et('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),Qg=et('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),$g=et('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),t1=et('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),e1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Pf(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=e1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=jg();F(u,h)},v=u=>{var h=Kg();sn(),F(u,h)},S=u=>{var h=Jg();F(u,h)},m=u=>{var h=Qg();F(u,h)},g=u=>{var h=$g();F(u,h)},E=u=>{var h=t1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var n1=et('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),i1=et('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),r1=et('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),s1=et('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),a1=et('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),o1=et('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),l1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function c1(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=l1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=n1();F(u,h)},v=u=>{var h=i1();sn(),F(u,h)},S=u=>{var h=r1();F(u,h)},m=u=>{var h=s1();F(u,h)},g=u=>{var h=a1();F(u,h)},E=u=>{var h=o1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var u1=et('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),d1=et('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),h1=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),f1=et('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),p1=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),m1=et('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),g1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ff(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=g1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=u1();F(u,h)},v=u=>{var h=d1();sn(),F(u,h)},S=u=>{var h=h1();F(u,h)},m=u=>{var h=f1();F(u,h)},g=u=>{var h=p1();F(u,h)},E=u=>{var h=m1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var _1=et('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),v1=et('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),y1=et('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),x1=et('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),S1=et('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),b1=et('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),M1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function E1(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=M1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=_1();F(u,h)},v=u=>{var h=v1();sn(),F(u,h)},S=u=>{var h=y1();F(u,h)},m=u=>{var h=x1();F(u,h)},g=u=>{var h=S1();F(u,h)},E=u=>{var h=b1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var A1=et('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),w1=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),T1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),I1=et('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),R1=et('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),C1=et('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),D1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function L1(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=D1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=A1();F(u,h)},v=u=>{var h=w1();sn(),F(u,h)},S=u=>{var h=T1();F(u,h)},m=u=>{var h=I1();F(u,h)},g=u=>{var h=R1();F(u,h)},E=u=>{var h=C1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var N1=et('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),P1=et('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),F1=et('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),U1=et('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),O1=et('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),B1=et('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),V1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function z1(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=V1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=N1();F(u,h)},v=u=>{var h=P1();sn(),F(u,h)},S=u=>{var h=F1();F(u,h)},m=u=>{var h=U1();F(u,h)},g=u=>{var h=O1();F(u,h)},E=u=>{var h=B1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var H1=et('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),k1=et('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),G1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),W1=et('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),Z1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),X1=et('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),Y1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function q1(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=Y1();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=H1();F(u,h)},v=u=>{var h=k1();sn(),F(u,h)},S=u=>{var h=G1();F(u,h)},m=u=>{var h=W1();F(u,h)},g=u=>{var h=Z1();F(u,h)},E=u=>{var h=X1();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var j1=et('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),K1=et('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),J1=et('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),Q1=et('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),$1=et('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),t_=et('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),e_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function n_(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=e_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=j1();F(u,h)},v=u=>{var h=K1();sn(),F(u,h)},S=u=>{var h=J1();F(u,h)},m=u=>{var h=Q1();F(u,h)},g=u=>{var h=$1();F(u,h)},E=u=>{var h=t_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var i_=et('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),r_=et('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),s_=et('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),a_=et('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),o_=et('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),l_=et('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),c_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Uf(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=c_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=i_();F(u,h)},v=u=>{var h=r_();sn(),F(u,h)},S=u=>{var h=s_();F(u,h)},m=u=>{var h=a_();F(u,h)},g=u=>{var h=o_();F(u,h)},E=u=>{var h=l_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var u_=et('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),d_=et('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),h_=et('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),f_=et('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),p_=et('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),m_=et('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),g_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ku(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=g_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=u_();F(u,h)},v=u=>{var h=d_();sn(),F(u,h)},S=u=>{var h=h_();F(u,h)},m=u=>{var h=f_();F(u,h)},g=u=>{var h=p_();F(u,h)},E=u=>{var h=m_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var __=et('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),v_=et('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),y_=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),x_=et('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),S_=et('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),b_=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),M_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function E_(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=M_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=__();F(u,h)},v=u=>{var h=v_();sn(),F(u,h)},S=u=>{var h=y_();F(u,h)},m=u=>{var h=x_();F(u,h)},g=u=>{var h=S_();F(u,h)},E=u=>{var h=b_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var A_=et('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),w_=et('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),T_=et('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),I_=et('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),R_=et('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),C_=et('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),D_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function L_(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=D_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=A_();F(u,h)},v=u=>{var h=w_();sn(),F(u,h)},S=u=>{var h=T_();F(u,h)},m=u=>{var h=I_();F(u,h)},g=u=>{var h=R_();F(u,h)},E=u=>{var h=C_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var N_=et('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),P_=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),F_=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),U_=et('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),O_=et('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),B_=et('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),V_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Jd(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=V_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=N_();F(u,h)},v=u=>{var h=P_();sn(),F(u,h)},S=u=>{var h=F_();F(u,h)},m=u=>{var h=U_();F(u,h)},g=u=>{var h=O_();F(u,h)},E=u=>{var h=B_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var z_=et('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),H_=et('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),k_=et('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),G_=et('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),W_=et('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),Z_=et('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),X_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Of(n,t){Qt(t,!0);const e=wn();let i=An(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:M,size:I,mirrored:y,...b}=u;return b}var c=X_();Tn(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ct(c);{var p=u=>{var h=Ue(),M=me(h);je(M,()=>t.children),F(u,h)};Ut(d,u=>{t.children&&u(p)})}var f=gt(d,2);{var _=u=>{var h=z_();F(u,h)},v=u=>{var h=H_();sn(),F(u,h)},S=u=>{var h=k_();F(u,h)},m=u=>{var h=G_();F(u,h)},g=u=>{var h=W_();F(u,h)},E=u=>{var h=Z_();F(u,h)},T=u=>{var h=En();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),F(u,h)};Ut(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(S,2):A(r)==="light"?u(m,3):A(r)==="regular"?u(g,4):A(r)==="thin"?u(E,5):u(T,-1)})}st(c),F(n,c),$t()}var Y_=ne('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function q_(n,t){var e=Y_(),i=ct(e),r=ct(i);ag(r,{}),st(i);var s=gt(i,2),a=ct(s);je(a,()=>t.children),st(s);var o=gt(s,2),l=ct(o);je(l,()=>t.viewsPanel??qd);var c=gt(l,2);je(c,()=>t.settingsPanel??qd),st(o),st(e),F(n,e)}var Wl=gg(()=>Bc),j_=ne('<div class="views-content"></div>');function K_(n,t){Qt(t,!1),ug(),If(n,{get isOpen(){return Wl().viewsOpen},onClose:()=>Wl(Wl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=j_();F(e,r)},$$slots:{default:!0}}),$t()}var J_=ne('<div class="settings-content"><!></div>');function Q_(n,t){Qt(t,!0),If(n,{get isOpen(){return Bc.settingsOpen},onClose:()=>Bc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=J_(),s=ct(r);{var a=o=>{var l=Ue(),c=me(l);je(c,()=>t.children),F(o,l)};Ut(s,o=>{t.children&&o(a)})}st(r),F(e,r)},$$slots:{default:!0}}),$t()}class $_{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];hasInputs(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputs(t)&&(t.inputIds||(t.inputIds=[]),t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){const e=[];for(const[i,r]of this.nodes)r.parentId===t&&e.push(i);for(let i=0;i<e.length;i++)this.removeNode(e[i]);this.nodes.delete(t),this.connections=this.connections.filter(i=>i.sourceId!==t&&i.targetId!==t);for(const[i,r]of this.nodes)this.hasInputs(r)&&r.inputIds&&(r.inputIds=r.inputIds.filter(s=>s!==t));this.needsSort=!0}connect(t,e){for(let r=0;r<this.connections.length;r++){const s=this.connections[r];if(s.sourceId===t&&s.targetId===e)return}this.connections.push({sourceId:t,targetId:e}),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&(i.inputIds||(i.inputIds=[]),i.inputIds.includes(t)||i.inputIds.push(t))}disconnect(t,e){this.connections=this.connections.filter(r=>!(r.sourceId===t&&r.targetId===e)),this.needsSort=!0;const i=this.nodes.get(e);i&&this.hasInputs(i)&&i.inputIds&&(i.inputIds=i.inputIds.filter(r=>r!==t))}reorderNode(t,e,i){if(t===e)return;const r=this.nodes.get(t);if(!r)return;const s=Array.from(this.nodes.entries()),a=s.findIndex(([l])=>l===t);a!==-1&&s.splice(a,1);let o=s.findIndex(([l])=>l===e);o===-1?s.push([t,r]):(i==="after"&&o++,s.splice(o,0,[t,r])),this.nodes.clear();for(let l=0;l<s.length;l++)this.nodes.set(s[l][0],s[l][1]);this.needsSort=!0}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r){if(r.type==="source"){const a=r.getOutputs(),o={};if(r.exportMap)for(const l in a)l in r.exportMap&&(o[r.exportMap[l]]=a[l]);this.nodeOutputs.set(i,o)}else if(r.type==="processor"||r.type==="sink"){const s={};for(let o=0;o<this.connections.length;o++){const l=this.connections[o];if(l.targetId===i){const c=this.nodeOutputs.get(l.sourceId);if(c)for(const d in c)s[d]||(s[d]=[]),s[d].push(c[d])}}const a={};for(const o in s)a[o]=s[o];if(r.inputMap)for(const o in r.inputMap){const l=r.inputMap[o];l&&s[l]?a[o]=s[l]:l&&(a[o]=[])}if(r.type==="processor"){const l=r.process(a),c={};if(r.exportMap)for(const d in l)d in r.exportMap&&(c[r.exportMap[d]]=l[d]);this.nodeOutputs.set(i,c)}else if(r.type==="sink"){const l=r.consume(a);if(l)for(let c=0;c<l.length;c++)this.renderPrimitives.push(l[c])}}}}return this.renderPrimitives}}function tv(n,t){Qt(t,!0),Ra("subject-parent",()=>{});var e=Ue(),i=me(e);{var r=s=>{var a=Ue(),o=me(a);je(o,()=>t.children),F(s,a)};Ut(i,s=>{t.children&&s(r)})}F(n,e),$t()}function ev(n,t){Qt(t,!0);const e=Pn("subject-parent");as(()=>{const a=new Df(t.id);a.parentId=e?.(),Lt.request("REGISTER_NODE",{node:a})}),Ra("subject-parent",()=>t.id);var i=Ue(),r=me(i);{var s=a=>{var o=Ue(),l=me(o);je(l,()=>t.children),F(a,o)};Ut(r,a=>{t.children&&a(s)})}F(n,i),$t()}function nv(n,t){return t.filter(e=>e.parentId===n)}function Bf(n){return n.type==="source"?[]:n.subType==="motion"?[{id:"pos",label:"POS"},{id:"vel",label:"VEL"}]:n.subType==="sprite"?[{id:"x",label:"X"},{id:"y",label:"Y"}]:[{id:"in",label:"IN"}]}function Vf(n){if(n.type==="sink")return[];if(n.subType==="api"){const t=n.availableKeys||[];if(t.length>0)return t.map(e=>({id:e,label:e}))}return[{id:"out",label:"OUT"}]}class iv{#t=Xe(null);get selectedNodeId(){return A(this.#t)}set selectedNodeId(t){fe(this.#t,t,!0)}nodeElements=new Map;#e=Xe(null);get dragConnectionSourceId(){return A(this.#e)}set dragConnectionSourceId(t){fe(this.#e,t,!0)}#n=Xe(null);get dragConnectionTargetId(){return A(this.#n)}set dragConnectionTargetId(t){fe(this.#n,t,!0)}#i=Xe(0);get dragStartX(){return A(this.#i)}set dragStartX(t){fe(this.#i,t,!0)}#r=Xe(0);get dragStartY(){return A(this.#r)}set dragStartY(t){fe(this.#r,t,!0)}#s=Xe(null);get draggedNodeId(){return A(this.#s)}set draggedNodeId(t){fe(this.#s,t,!0)}}const qt=new iv;var rv=ne('<div class="input-group svelte-zce5x2"><label class="svelte-zce5x2"> </label> <input type="number" class="unified-input svelte-zce5x2"/></div>');function Ju(n,t){Qt(t,!0);var e=rv(),i=ct(e),r=ct(i,!0);st(i);var s=gt(i,2);Zo(s),st(e),Qe(()=>{Ln(r,t.label),Ca(s,t.value),zn(s,"min",t.min),zn(s,"step",t.step)}),en("change",s,a=>t.onchange(parseFloat(a.currentTarget.value)||0)),F(n,e),$t()}fi(["change"]);var sv=ne('<option disabled=""> </option>'),av=ne("<option> </option>"),ov=ne('<div class="input-group svelte-1oo6fx3"><label class="svelte-1oo6fx3"> </label> <select class="unified-input svelte-1oo6fx3"><!><!></select></div>');function Di(n,t){Qt(t,!0);var e=ov(),i=ct(e),r=ct(i,!0);st(i);var s=gt(i,2),a=ct(s);{var o=d=>{var p=sv(),f=ct(p,!0);st(p),p.value=p.__value="",Qe(()=>Ln(f,t.disabledPlaceholder)),F(d,p)};Ut(a,d=>{t.disabledPlaceholder&&d(o)})}var l=gt(a);$n(l,17,()=>t.options,ui,(d,p)=>{var f=av(),_=ct(f,!0);st(f);var v={};Qe(()=>{Ln(_,A(p).label),v!==(v=A(p).value)&&(f.value=(f.__value=A(p).value)??"")}),F(d,f)}),st(s);var c;qu(s),st(e),Qe(()=>{Ln(r,t.label),c!==(c=t.value)&&(s.value=(s.__value=t.value)??"",ju(s,t.value))}),en("change",s,d=>t.onchange(d.currentTarget.value)),F(n,e),$t()}fi(["change"]);var lv=ne('<div class="input-group"><label> </label> <input type="text" class="unified-input"/></div>');function zf(n,t){Qt(t,!0);let e=li(t,"placeholder",3,"");var i=lv(),r=ct(i),s=ct(r,!0);st(r);var a=gt(r,2);Zo(a),st(i),Qe(()=>{Ln(s,t.label),Ca(a,t.value),zn(a,"placeholder",e())}),en("change",a,o=>t.onchange(o.currentTarget.value)),F(n,i),$t()}fi(["change"]);var cv=ne('<div class="input-group"><label> </label> <textarea class="unified-input"></textarea></div>');function To(n,t){Qt(t,!0);let e=li(t,"rows",3,3);var i=cv(),r=ct(i),s=ct(r,!0);st(r);var a=gt(r,2);og(a),st(i),Qe(()=>{Ln(s,t.label),zn(a,"rows",e()),Ca(a,t.value)}),en("change",a,o=>t.onchange(o.currentTarget.value)),F(n,i),$t()}fi(["change"]);var uv=ne("<button><!></button>");function ns(n,t){let e=li(t,"variant",3,"default");var i=uv(),r=ct(i);je(r,()=>t.children),st(i),Qe(()=>{Xs(i,1,`icon-btn ${e()??""}`,"svelte-db4pd2"),zn(i,"title",t.title)}),en("click",i,function(...s){t.onclick?.apply(this,s)}),F(n,i)}fi(["click"]);function dv(n,t){let e=li(t,"size",3,16);function i(o){const l={subject:Pf,source:Uf,sink:Ff,processor:Of},c=o.subType||o.id;return{"mouse-input":z1,"keyboard-input":Jd,sprite:q1,mesh:E_,"sprite-atlas":L_,"transform-shader":n_,script:E1,renderer:L1,console:Jd,file:c1}[c]||l[o.type]}let r=Q(()=>i(t.node));var s=Ue(),a=me(s);Cf(a,()=>A(r),(o,l)=>{l(o,{get size(){return e()},weight:"fill"})}),F(n,s)}var hv=ne('<div class="chevron-wrapper svelte-1airrze"><!></div>'),fv=ne('<div class="port-dot in-port svelte-1airrze"></div>'),pv=ne('<div class="port-dot out-port svelte-1airrze"></div>'),mv=ne('<div><div class="dots-container svelte-1airrze"><!> <!></div></div>'),gv=ne('<div role="button" tabindex="0"><!></div>');function _v(n,t){Qt(t,!0);let e=li(t,"isExpanded",3,!1),i=li(t,"portSize",3,5),r=li(t,"portSpacing",3,2),s=Q(()=>Bf(t.node)),a=Q(()=>Vf(t.node)),o=Q(()=>t.node.type==="subject"||A(a).length>0),l=Q(()=>t.node.type==="subject"||A(s).length>0),c=Q(()=>qt.dragConnectionSourceId===t.node.id),d=Q(()=>qt.dragConnectionSourceId!==null&&qt.dragConnectionSourceId!==t.node.id&&A(l)),p=Q(()=>qt.dragConnectionTargetId===t.node.id),f=Q(()=>qt.dragConnectionSourceId===null&&!A(o)||qt.dragConnectionSourceId!==null&&!A(d)&&!A(c)),_=0,v=0,S=0,m=null;function g(N){const L=N.getBoundingClientRect();qt.dragConnectionSourceId=t.node.id,qt.dragStartX=L.left+L.width/2,qt.dragStartY=L.top+L.height/2}function E(N){if(!A(o))return;N.stopPropagation(),_=N.clientX,v=N.clientY,S=Date.now();const L=N.currentTarget;t.node.type==="subject"?m=setTimeout(()=>{g(L)},300):g(L)}function T(N){if(m){const L=N.clientX-_,B=N.clientY-v;Math.sqrt(L*L+B*B)>5&&(clearTimeout(m),m=null)}}function u(N){m&&(clearTimeout(m),m=null);const L=N.clientX-_,B=N.clientY-v,H=Math.sqrt(L*L+B*B),k=Date.now()-S;t.node.type==="subject"&&H<5&&k<300&&t.onToggle&&t.onToggle(N)}function h(){A(d)&&(qt.dragConnectionTargetId=t.node.id)}function M(){qt.dragConnectionTargetId===t.node.id&&(qt.dragConnectionTargetId=null)}function I(N){N.preventDefault(),N.stopPropagation()}var y=gv();let b;var O=ct(y);{var C=N=>{var L=hv(),B=ct(L);{var H=W=>{zg(W,{size:14,weight:"bold"})},k=W=>{qg(W,{size:14,weight:"bold"})};Ut(B,W=>{e()?W(H):W(k,-1)})}st(L),F(N,L)},G=N=>{var L=mv(),B=ct(L),H=ct(B);$n(H,17,()=>A(s),ui,(W,j)=>{var it=fv();F(W,it)});var k=gt(H,2);$n(k,17,()=>A(a),ui,(W,j)=>{var it=pv();F(W,it)}),st(B),st(L),Qe(()=>Xs(L,1,`port-capsule ${t.node.type??""}`,"svelte-1airrze")),F(N,L)};Ut(O,N=>{t.node.type==="subject"?N(C):N(G,-1)})}st(y),Qe(()=>{b=Xs(y,1,"connection-port svelte-1airrze",null,b,{"is-chevron":t.node.type==="subject",active:A(c),"valid-target":A(p),disabled:A(f)}),zn(y,"data-node-id",t.node.id),Rf(y,`--port-size: ${i()??""}px; --port-spacing: ${r()??""}px;`)}),en("pointerdown",y,E),en("pointermove",y,T),en("pointerup",y,u),jn("pointerenter",y,h),jn("pointerleave",y,M),jn("dragstart",y,I),F(n,y),$t()}fi(["pointerdown","pointermove","pointerup"]);var vv=ne('<div class="palette-container"><!></div>'),yv=ne('<div class="children-group svelte-phufrx"></div>'),xv=ne('<div class="tree-item svelte-phufrx"><div role="button" tabindex="0"><div class="node-info svelte-phufrx"><!> <span><!></span> <span class="node-id svelte-phufrx"> </span></div> <div class="node-actions svelte-phufrx"><!> <!></div></div> <!></div>');function Hf(n,t){Qt(t,!0);const e=Pn("graph-actions"),i=Pn("palette-state");let r=Xe(!0),s=Xe(null),a=Q(()=>nv(t.node.id,t.nodes)),o=Q(()=>A(a).length>0),l=Xe(void 0);as(()=>(A(l)&&qt.nodeElements.set(t.node.id,A(l)),()=>{qt.nodeElements.get(t.node.id)===A(l)&&qt.nodeElements.delete(t.node.id)}));function c(W){W.stopPropagation(),fe(r,!A(r))}function d(W){W.stopPropagation();const j=W.currentTarget.getBoundingClientRect();i.activeId===t.node.id?i.activeId=null:(i.activeId=t.node.id,i.x=j.left,i.y=j.bottom+4)}function p(W){W.stopPropagation(),e.removeNode(t.node.id)}function f(W){W.stopPropagation(),qt.selectedNodeId=t.node.id}function _(W){(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),qt.selectedNodeId=t.node.id)}function v(W){if(W.target.closest(".connection-port")){W.preventDefault();return}W.dataTransfer&&(W.dataTransfer.setData("text/plain",t.node.id),qt.draggedNodeId=t.node.id,W.stopPropagation())}function S(W){if(qt.draggedNodeId===t.node.id)return;W.preventDefault(),W.stopPropagation();const j=W.currentTarget.getBoundingClientRect(),it=W.clientY-j.top,rt=6;it<rt?fe(s,"before"):it>j.height-rt?fe(s,"after"):t.node.type==="subject"?fe(s,"inside"):fe(s,it<j.height/2?"before":"after",!0)}function m(W){fe(s,null)}function g(W){W.preventDefault(),W.stopPropagation();const j=W.dataTransfer?.getData("text/plain"),it=A(s);if(fe(s,null),!j||j===t.node.id){qt.draggedNodeId=null;return}it==="inside"&&t.node.type==="subject"?e.reparentNode(j,t.node.id):(it==="before"||it==="after")&&e.reorderNode(j,t.node.id,it),qt.draggedNodeId=null}function E(){qt.draggedNodeId=null,fe(s,null)}var T=xv(),u=ct(T);let h;var M=ct(u),I=ct(M);_v(I,{get node(){return t.node},get isExpanded(){return A(r)},onToggle:c});var y=gt(I,2),b=ct(y);dv(b,{get node(){return t.node},size:16}),st(y);var O=gt(y,2),C=ct(O,!0);st(O),st(M);var G=gt(M,2),N=ct(G);{var L=W=>{var j=vv(),it=ct(j);ns(it,{title:"Add Child Node",onclick:d,children:(rt,at)=>{Ku(rt,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(j),F(W,j)};Ut(N,W=>{t.node.type==="subject"&&W(L)})}var B=gt(N,2);ns(B,{variant:"danger",title:"Delete",onclick:p,children:(W,j)=>{Tl(W,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(G),st(u),Da(u,W=>fe(l,W),()=>A(l));var H=gt(u,2);{var k=W=>{var j=yv();$n(j,21,()=>A(a),ui,(it,rt)=>{var at=Ue(),Dt=me(at);Hf(Dt,{get node(){return A(rt)},get nodes(){return t.nodes}}),F(it,at)}),st(j),F(W,j)};Ut(H,W=>{A(o)&&A(r)&&W(k)})}st(T),Qe(()=>{h=Xs(u,1,"node-row svelte-phufrx",null,h,{selected:qt.selectedNodeId===t.node.id,"drop-before":A(s)==="before","drop-after":A(s)==="after","drop-inside":A(s)==="inside","is-dragging":qt.draggedNodeId===t.node.id}),zn(u,"draggable",qt.dragConnectionSourceId===null?"true":"false"),Xs(y,1,`type-icon ${t.node.type??""}`,"svelte-phufrx"),zn(y,"title",t.node.type),Ln(C,t.node.name||t.node.id)}),en("click",u,f),en("keydown",u,_),jn("dragstart",u,v),jn("dragover",u,S),jn("dragleave",u,m),jn("drop",u,g),jn("dragend",u,E),F(n,T),$t()}fi(["click","keydown"]);var Sv=ne('<div class="inline-palette svelte-1ea37n5" role="presentation"><button class="svelte-1ea37n5"><!> Source</button> <button class="svelte-1ea37n5"><!> Processor</button> <button class="svelte-1ea37n5"><!> Subject</button> <button class="svelte-1ea37n5"><!> Sink</button></div>');function bv(n,t){Qt(t,!0);let e=li(t,"x",3,0),i=li(t,"y",3,0),r=Xe(void 0),s=Xe(0),a=Xe(0);as(()=>{if(t.show&&A(r)){const f=A(r).getBoundingClientRect();let _=e(),v=i();_+f.width>window.innerWidth&&(_=window.innerWidth-f.width-8),v+f.height>window.innerHeight&&(v=i()-f.height-8),fe(s,_,!0),fe(a,v,!0)}else fe(s,e()),fe(a,i())});function o(f,_){_.stopPropagation(),t.onAdd(f)}function l(f){return document.body.appendChild(f),{destroy(){f.parentNode&&f.parentNode.removeChild(f)}}}var c=Ue(),d=me(c);{var p=f=>{var _=Sv(),v=ct(_),S=ct(v);Uf(S,{size:14,weight:"fill",style:"color: var(--color-success)"}),sn(),st(v);var m=gt(v,2),g=ct(m);Of(g,{size:14,weight:"fill",style:"color: var(--color-warning)"}),sn(),st(m);var E=gt(m,2),T=ct(E);Pf(T,{size:14,weight:"fill",style:"color: var(--color-info)"}),sn(),st(E);var u=gt(E,2),h=ct(u);Ff(h,{size:14,weight:"fill",style:"color: var(--color-error)"}),sn(),st(u),st(_),Il(_,M=>l?.(M)),Da(_,M=>fe(r,M),()=>A(r)),Qe(()=>Rf(_,`top: ${A(a)??""}px; left: ${A(s)??""}px;`)),en("click",_,M=>M.stopPropagation()),en("click",v,M=>o("source",M)),en("click",m,M=>o("processor",M)),en("click",E,M=>o("subject",M)),en("click",u,M=>o("sink",M)),F(f,_)};Ut(d,f=>{t.show&&f(p)})}F(n,c),$t()}fi(["click"]);function Mv(n){let t=!1,e=0,i=0;function r(o){t=!0,e=o.clientY,i=n.parentElement.clientHeight,n.setPointerCapture(o.pointerId)}function s(o){if(!t)return;const l=e-o.clientY,c=Math.max(150,Math.min(i+l,window.innerHeight-100));n.parentElement.style.height=`${c}px`}function a(o){t=!1,n.releasePointerCapture(o.pointerId)}return n.addEventListener("pointerdown",r),n.addEventListener("pointermove",s),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),{destroy(){n.removeEventListener("pointerdown",r),n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a)}}}var Ev=ne('<div class="connection-item"><div class="conn-id-group"><input type="text" class="unified-input port-input" placeholder="Export name"/> <span class="conn-separator">←</span> <span class="badge success"> </span></div> <!></div>'),Av=ne("<option> </option>"),wv=ne('<div class="connection-item" style="background: transparent; border: none; padding: 0;"><select class="unified-input port-select"><option disabled="">Select port...</option><!></select> <input type="text" class="unified-input port-input" placeholder="Export name"/> <!></div>'),Tv=ne('<div style="font-size: 10px; color: var(--text-muted); font-style: italic; padding: 4px;">All available ports exported</div>'),Iv=ne('<div class="input-group"><label>Export Variables</label> <div class="connection-list"><!> <!></div></div>');function Rv(n,t){Qt(t,!0);let e=Xe(""),i=Xe("");as(()=>{t.activeNode.id&&(fe(e,""),fe(i,""))});var r=Iv(),s=gt(ct(r),2),a=ct(s);{var o=f=>{var _=Ue(),v=me(_);$n(v,17,()=>Object.entries(t.activeNode.exportMap),ui,(S,m)=>{var g=Q(()=>rg(A(m),2));let E=()=>A(g)[0],T=()=>A(g)[1];var u=Ev(),h=ct(u),M=ct(h);Zo(M);var I=gt(M,4),y=ct(I,!0);st(I),st(h);var b=gt(h,2);ns(b,{variant:"danger",onclick:()=>{const O={...t.activeNode.exportMap};delete O[E()],t.graphActions.updateNodeConfig(t.activeNode,{exportMap:O})},children:(O,C)=>{Tl(O,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(u),Qe(()=>{Ca(M,T()),Ln(y,E())}),en("change",M,O=>{const C={...t.activeNode.exportMap};C[E()]=O.currentTarget.value||E(),t.graphActions.updateNodeConfig(t.activeNode,{exportMap:C})}),F(S,u)}),F(f,_)},l=Q(()=>t.activeNode.exportMap&&Object.keys(t.activeNode.exportMap).length>0);Ut(a,f=>{A(l)&&f(o)})}var c=gt(a,2);{var d=f=>{var _=wv(),v=ct(_),S=ct(v);S.value=S.__value="";var m=gt(S);$n(m,17,()=>t.availableExportPorts,ui,(u,h)=>{var M=Av(),I=ct(M,!0);st(M);var y={};Qe(()=>{Ln(I,A(h).label),y!==(y=A(h).id)&&(M.value=(M.__value=A(h).id)??"")}),F(u,M)}),st(v);var g;qu(v);var E=gt(v,2);Zo(E);var T=gt(E,2);ns(T,{onclick:()=>{if(A(e)&&A(i)){const u={...t.activeNode.exportMap||{}};u[A(e)]=A(i),t.graphActions.updateNodeConfig(t.activeNode,{exportMap:u}),fe(e,""),fe(i,"")}},children:(u,h)=>{Ku(u,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(_),Qe(()=>{g!==(g=A(e))&&(v.value=(v.__value=A(e))??"",ju(v,A(e))),Ca(E,A(i))}),en("change",v,u=>fe(e,u.currentTarget.value,!0)),en("input",E,u=>fe(i,u.currentTarget.value,!0)),F(f,_)},p=f=>{var _=Tv();F(f,_)};Ut(c,f=>{t.availableExportPorts.length>0?f(d):f(p,-1)})}st(s),st(r),F(n,r),$t()}fi(["change","input"]);var Cv=ne("<option> </option>"),Dv=ne('<div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 10px; font-weight: 600; text-transform: uppercase;"> </span> <span class="conn-separator">←</span> <select class="unified-input"><option disabled="">-- Select --</option><!></select></div>'),Lv=ne('<div class="input-group"><label>Map Inputs from Pool</label> <div class="connection-list"></div></div>');function Nv(n,t){Qt(t,!0);var e=Lv(),i=gt(ct(e),2);$n(i,21,()=>Bf(t.activeNode),ui,(r,s)=>{var a=Dv(),o=ct(a),l=ct(o,!0);st(o);var c=gt(o,4),d=ct(c);d.value=d.__value="";var p=gt(d);$n(p,17,()=>t.poolVariables,ui,(_,v)=>{var S=Cv(),m=ct(S,!0);st(S);var g={};Qe(()=>{Ln(m,A(v)),g!==(g=A(v))&&(S.value=(S.__value=A(v))??"")}),F(_,S)}),st(c);var f;qu(c),st(a),Qe(_=>{Ln(l,A(s).label),f!==(f=_)&&(c.value=(c.__value=_)??"",ju(c,_))},[()=>t.activeNode.inputMap?.[A(s).id]||(t.poolVariables.includes(A(s).id)?A(s).id:"")]),en("change",c,_=>{const v={...t.activeNode.inputMap||{}};v[A(s).id]=_.currentTarget.value,t.graphActions.updateNodeConfig(t.activeNode,{inputMap:v})}),F(r,a)}),st(i),st(e),F(n,e),$t()}fi(["change"]);var Pv=ne('<div class="connection-item"><span class="conn-id"> </span> <!></div>'),Fv=ne("<option> </option>"),Uv=ne('<div class="input-group"><label>Connected Sources</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="">+ Connect Node...</option><!></select></div></div>');function Ov(n,t){Qt(t,!0);function e(c){const d=c.target,p=d.value;p&&(t.graphActions.connectInput(t.activeNode.id,p),d.value="")}var i=Uv(),r=gt(ct(i),2),s=ct(r);$n(s,17,()=>t.connections.filter(c=>c.targetId===t.activeNode.id),ui,(c,d)=>{const p=Q(()=>t.nodes.find(g=>g.id===A(d).sourceId)),f=Q(()=>A(p)||{});var _=Pv(),v=ct(_),S=ct(v,!0);st(v);var m=gt(v,2);ns(m,{variant:"danger",onclick:()=>t.graphActions.disconnectInput(t.activeNode.id,A(d).sourceId),children:(g,E)=>{Tl(g,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(_),Qe(()=>Ln(S,A(p)?A(f).name||A(p).id:A(d).sourceId)),F(c,_)});var a=gt(s,2),o=ct(a);o.value=o.__value="";var l=gt(o);$n(l,17,()=>t.availableInputs,ui,(c,d)=>{const p=Q(()=>A(d));var f=Fv(),_=ct(f);st(f);var v={};Qe(()=>{Ln(_,`${(A(p).name||A(d).id)??""} (${A(d).type??""})`),v!==(v=A(d).id)&&(f.value=(f.__value=A(d).id)??"")}),F(c,f)}),st(a),a.value=a.__value="",st(r),st(i),en("change",a,e),F(n,i),$t()}fi(["change"]);var Bv=ne('<!> <div class="divider"></div>',1),Vv=ne('<div class="divider"></div> <!> <div class="divider"></div> <!>',1),zv=ne('<div class="props-content svelte-1hotla4"><!> <!> <div class="divider"></div> <!> <!> <!></div>'),Hv=ne('<div class="node-properties svelte-1hotla4" style="height: 320px;"><div class="resize-handle svelte-1hotla4"></div> <div class="props-header svelte-1hotla4"><div class="header-title svelte-1hotla4"><h4 class="svelte-1hotla4"> </h4> <span> </span></div> <!></div> <!></div>');function kv(n,t){Qt(t,!0);const e=Pn("graph-actions"),i=Pn("settings-registry")||{};let r=Q(()=>t.nodes.find(v=>v.id===qt.selectedNodeId)),s=Q(()=>A(r)||{}),a=Xe(Vs({}));Ha(()=>{fe(a,Lt.request("GET_NODE_FACTORIES",void 0),!0)});let o=Q(()=>A(r)?t.nodes.filter(v=>(v.type==="source"||v.type==="processor"||v.type==="subject")&&v.id!==A(r).id&&!(A(s).inputIds||[]).includes(v.id)):[]),l=Q(()=>{if(!A(r))return[];const v=new Set,S=t.connections.filter(m=>m.targetId===A(r).id);for(const m of S){const g=t.nodes.find(E=>E.id===m.sourceId);if(g&&g.exportMap)for(const E in g.exportMap)v.add(g.exportMap[E])}return Array.from(v)}),c=Q(()=>A(r)?Vf(A(r)).filter(v=>!(A(r).exportMap||{})[v.id]):[]),d=Q(()=>A(r)&&A(r).subType?i[A(r).subType]:null);var p=Ue(),f=me(p);{var _=v=>{const S=Q(()=>A(r).type==="subject"?"info":A(r).type==="source"?"success":A(r).type==="processor"?"warning":"error");var m=Hv(),g=ct(m);Il(g,O=>Mv?.(O));var E=gt(g,2),T=ct(E),u=ct(T),h=ct(u,!0);st(u);var M=gt(u,2),I=ct(M,!0);st(M),st(T);var y=gt(T,2);ns(y,{onclick:()=>qt.selectedNodeId=null,children:(O,C)=>{Tl(O,{size:14,weight:"bold"})},$$slots:{default:!0}}),st(E);var b=gt(E,2);hg(b,()=>A(r).id,O=>{var C=zv(),G=ct(C);{let rt=Q(()=>A(s).name||"");zf(G,{label:"Display Name",get value(){return A(rt)},get placeholder(){return A(r).id},onchange:at=>e.updateNodeConfig(A(r),{name:at})})}var N=gt(G,2);{var L=rt=>{{let at=Q(()=>A(r).subType||"dummy"),Dt=Q(()=>A(a)[A(r).type].map(pe=>({value:pe.subType,label:pe.label})));Di(rt,{label:"Implementation",get value(){return A(at)},get options(){return A(Dt)},onchange:pe=>e.changeNodeSubType(A(r),pe)})}};Ut(N,rt=>{A(a)[A(r).type]&&A(a)[A(r).type].length>0&&rt(L)})}var B=gt(N,4);{var H=rt=>{var at=Bv(),Dt=me(at);Rv(Dt,{get activeNode(){return A(r)},get availableExportPorts(){return A(c)},get graphActions(){return e}}),sn(2),F(rt,at)};Ut(B,rt=>{A(r).type!=="sink"&&rt(H)})}var k=gt(B,2);{var W=rt=>{var at=Ue(),Dt=me(at);Cf(Dt,()=>A(d),(pe,Re)=>{Re(pe,{get node(){return A(r)}})}),F(rt,at)};Ut(k,rt=>{A(d)&&rt(W)})}var j=gt(k,2);{var it=rt=>{var at=Vv(),Dt=gt(me(at),2);Nv(Dt,{get activeNode(){return A(r)},get poolVariables(){return A(l)},get graphActions(){return e}});var pe=gt(Dt,4);Ov(pe,{get activeNode(){return A(r)},get connections(){return t.connections},get availableInputs(){return A(o)},get nodes(){return t.nodes},get graphActions(){return e}}),F(rt,at)};Ut(j,rt=>{A(r).type!=="source"&&rt(it)})}st(C),F(O,C)}),st(m),Qe(()=>{Ln(h,A(s).name||A(r).id),Xs(M,1,`badge ${A(S)??""}`,"svelte-1hotla4"),Ln(I,A(r).type)}),lg(3,m,()=>cg,()=>({y:50,duration:250})),F(v,m)};Ut(f,v=>{A(r)&&v(_)})}F(n,p),$t()}const As=["rgba(59, 130, 246, 0.75)","rgba(16, 185, 129, 0.75)","rgba(245, 158, 11, 0.75)","rgba(239, 68, 68, 0.75)","rgba(139, 92, 246, 0.75)","rgba(6, 182, 212, 0.75)"];function Gv(n,t,e,i,r=4){if(i.width===0||i.height===0)return[];const s=new Map;for(let h=0;h<n.length;h++){const M=n[h],I=M.sourceId+"->"+M.targetId;s.has(I)||s.set(I,M)}const a=Array.from(s.values());a.sort((h,M)=>{const I=h.sourceId.localeCompare(M.sourceId);return I!==0?I:h.targetId.localeCompare(M.targetId)});const o=[],l=[];for(let h=0;h<a.length;h++){const M=a[h],I=t.find(C=>C.id===M.sourceId),y=t.find(C=>C.id===M.targetId),b=I?.type==="subject"&&y?.parentId===I?.id,O=y?.type==="subject"&&I?.parentId===y?.id;b||O?o.push(M):l.push(M)}const c=new Map,d=new Map;for(const h of l)c.set(h.sourceId,(c.get(h.sourceId)||0)+1),c.set(h.targetId,(c.get(h.targetId)||0)+1);for(const h of o){const M=t.find(b=>b.id===h.sourceId),I=t.find(b=>b.id===h.targetId);M?.type==="subject"&&I?.parentId===M?.id?(d.set(h.sourceId,(d.get(h.sourceId)||0)+1),c.set(h.targetId,(c.get(h.targetId)||0)+1)):(c.set(h.sourceId,(c.get(h.sourceId)||0)+1),d.set(h.targetId,(d.get(h.targetId)||0)+1))}const p=new Map,f=new Map,_=new Map,v=new Map,S=[];let m=0;const g=(h,M,I,y,b)=>{const O=h.querySelectorAll(`.port-dot.${M}-port`);if(O.length>0){const B=O[Math.min(y,O.length-1)].getBoundingClientRect();return B.top+B.height/2}const C=h.querySelector(".port-capsule")||h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port"),G=C?C.getBoundingClientRect():h.getBoundingClientRect(),N=(I-(b-1)/2)*r;return G.top+G.height/2+N},E=(h,M,I)=>{const y=h.querySelectorAll(`.port-dot.${M}-port`);if(y.length>0)return y[Math.min(I,y.length-1)].getBoundingClientRect().left;const b=h.querySelector(".port-capsule")||h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port");return(b?b.getBoundingClientRect():h.getBoundingClientRect()).left},T=h=>{const M=h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port");return M?M.getBoundingClientRect():h.getBoundingClientRect()};for(let h=0;h<o.length;h++){const M=o[h],I=t.find(C=>C.id===M.sourceId),y=t.find(C=>C.id===M.targetId),b=e.get(M.sourceId),O=e.get(M.targetId);if(b&&O){const C=I?.type==="subject"&&y?.parentId===I?.id,G=m%As.length;if(m++,C){const N=T(b),L=d.get(M.sourceId)||1,B=v.get(M.sourceId)||0;v.set(M.sourceId,B+1);const H=(B-(L-1)/2)*r,k=c.get(M.targetId)||1,W=p.get(M.targetId)||0;p.set(M.targetId,W+1);const j=f.get(M.targetId)||0;f.set(M.targetId,j+1);const it=N.left+N.width/2-i.left+H,rt=N.bottom-i.top,at=E(O,"in",j)-i.left-2,Dt=g(O,"in",W,j,k)-i.top;S.push({id:`${M.sourceId}-${M.targetId}-child`,path:`M ${it} ${rt} L ${it} ${Dt} L ${at} ${Dt}`,color:As[G],markerId:`arrow-${G}`})}else{const N=T(O),L=c.get(M.sourceId)||1,B=p.get(M.sourceId)||0;p.set(M.sourceId,B+1);const H=_.get(M.sourceId)||0;_.set(M.sourceId,H+1);const k=d.get(M.targetId)||1,W=v.get(M.targetId)||0;v.set(M.targetId,W+1);const j=(W-(k-1)/2)*r,it=E(b,"out",H)-i.left-2,rt=g(b,"out",B,H,L)-i.top,at=N.left+N.width/2-i.left+j,Dt=N.bottom-i.top;S.push({id:`${M.sourceId}-${M.targetId}-child`,path:`M ${it} ${rt} L ${at} ${rt} L ${at} ${Dt}`,color:As[G],markerId:`arrow-${G}`})}}}const u=new Map;for(let h=0;h<l.length;h++){const M=l[h],I=t.find(O=>O.id===M.sourceId),y=t.find(O=>O.id===M.targetId);let b="root";I?.parentId&&I.parentId===y?.parentId&&(b=I.parentId),u.has(b)||u.set(b,[]),u.get(b).push(M)}for(const[h,M]of u.entries()){const I=[];let y=1/0;const b=h!=="root"?e.get(h):null;if(b){const N=T(b);y=N.left+N.width/2-i.left}else{let N=1/0;for(let L=0;L<M.length;L++){const B=M[L],H=e.get(B.sourceId),k=e.get(B.targetId);H&&(N=Math.min(N,E(H,"out",0)-i.left)),k&&(N=Math.min(N,E(k,"in",0)-i.left))}y=N!==1/0?N-12:10}for(let N=0;N<M.length;N++){const L=M[N],B=e.get(L.sourceId),H=e.get(L.targetId);if(B&&H){const k=c.get(L.sourceId)||1,W=p.get(L.sourceId)||0;p.set(L.sourceId,W+1);const j=_.get(L.sourceId)||0;_.set(L.sourceId,j+1);const it=c.get(L.targetId)||1,rt=p.get(L.targetId)||0;p.set(L.targetId,rt+1);const at=f.get(L.targetId)||0;f.set(L.targetId,at+1);const Dt=E(B,"out",j)-i.left-2,pe=g(B,"out",W,j,k)-i.top,Re=E(H,"in",at)-i.left-2,$=g(H,"in",rt,at,it)-i.top,ut=Math.min(pe,$),ft=Math.max(pe,$),ie=ft-ut;I.push({id:`${L.sourceId}-${L.targetId}-bus`,startX:Dt,startY:pe,endX:Re,endY:$,minY:ut,maxY:ft,length:ie,colorIndex:m%As.length,trackIndex:0}),m++}}I.sort((N,L)=>N.length-L.length);const O=[];for(let N=0;N<I.length;N++){const L=I[N];let B=!1;for(let H=0;H<O.length;H++){const k=O[H];let W=!1;for(let j=0;j<k.length;j++){const it=k[j];if(L.minY-2<it.maxY&&L.maxY+2>it.minY){W=!0;break}}if(!W){k.push({minY:L.minY,maxY:L.maxY}),L.trackIndex=H,B=!0;break}}B||(O.push([{minY:L.minY,maxY:L.maxY}]),L.trackIndex=O.length-1)}const C=d.get(h)||0,G=C%2===0;for(let N=0;N<I.length;N++){const L=I[N];let B=0;if(h!=="root")if(C===0)if(L.trackIndex===0)B=y;else{const k=Math.ceil(L.trackIndex/2),W=L.trackIndex%2===1?-1:1;B=y+W*k*r}else if(G){const k=Math.floor(L.trackIndex/2)+C/2+.5,W=L.trackIndex%2===0?-1:1;B=y+W*k*r}else{const k=Math.floor(L.trackIndex/2)+Math.floor(C/2)+1,W=L.trackIndex%2===0?-1:1;B=y+W*k*r}else B=y-L.trackIndex*r;let H="";Math.abs(L.startY-L.endY)<2?H=`M ${L.startX} ${L.startY} L ${L.endX} ${L.endY}`:H=`M ${L.startX} ${L.startY} L ${B} ${L.startY} L ${B} ${L.endY} L ${L.endX} ${L.endY}`,S.push({id:L.id,path:H,color:As[L.colorIndex],markerId:`arrow-${L.colorIndex}`})}}return S}var Wv=et('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),Zv=et('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path svelte-1f7lbxv"></path>'),Xv=et('<svg class="data-connections-layer svelte-1f7lbxv" style="pointer-events: none; z-index: 1;"><defs></defs><!></svg>');function Yv(n,t){Qt(t,!0);let e,i=Xe(Vs([]));function r(){if(!e)return;const l=e.getBoundingClientRect();fe(i,Gv(t.connections,t.nodes,qt.nodeElements,l),!0)}Ha(()=>{const l=new ResizeObserver(r);l.observe(document.body),window.addEventListener("scroll",r,!0);const c=setInterval(r,100);return()=>{l.disconnect(),window.removeEventListener("scroll",r,!0),clearInterval(c)}});var s=Xv(),a=ct(s);$n(a,21,()=>As,ui,(l,c,d)=>{var p=Wv();zn(p,"id",`arrow-${d}`);var f=ct(p);st(p),Qe(()=>zn(f,"fill",A(c))),F(l,p)}),st(a);var o=gt(a);$n(o,17,()=>A(i),l=>l.id,(l,c)=>{var d=Zv();Qe(()=>{zn(d,"d",A(c).path),zn(d,"stroke",A(c).color),zn(d,"marker-end",`url(#${A(c).markerId??""})`)}),F(l,d)}),st(s),Da(s,l=>e=l,()=>e),F(n,s),$t()}function kf(n){return document.body.appendChild(n),{destroy(){n.parentNode&&n.parentNode.removeChild(n)}}}var qv=et('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>');function jv(n,t){Qt(t,!0);const e=Pn("graph-actions");let i=Xe(0),r=Xe(0);function s(d){if(qt.dragConnectionSourceId){fe(i,d.clientX,!0),fe(r,d.clientY,!0);const p=d.clientX-20,f=d.clientY-20,v=document.elementFromPoint(p,f)?.closest(".connection-port");if(v){const S=v.getAttribute("data-node-id");S&&S!==qt.dragConnectionTargetId&&(qt.dragConnectionTargetId=S)}else qt.dragConnectionTargetId&&(qt.dragConnectionTargetId=null)}}function a(d){if(qt.dragConnectionSourceId){let p=qt.dragConnectionTargetId;if(!p){const f=d.clientX-20,_=d.clientY-20,S=document.elementFromPoint(f,_)?.closest(".connection-port");S&&(p=S.getAttribute("data-node-id"))}p&&p!==qt.dragConnectionSourceId&&e.connectInput(p,qt.dragConnectionSourceId),qt.dragConnectionSourceId=null,qt.dragConnectionTargetId=null}}var o=Ue();jn("pointermove",Oc,s),jn("pointerup",Oc,a);var l=me(o);{var c=d=>{const p=Q(()=>qt.dragStartX),f=Q(()=>qt.dragStartY),_=Q(()=>A(i)-20),v=Q(()=>A(r)-20),S=Q(()=>Math.min(A(p),A(_))-20);var m=qv(),g=gt(ct(m));st(m),Il(m,E=>kf?.(E)),Qe(()=>zn(g,"d",`M ${A(p)} ${A(f)} L ${A(S)} ${A(f)} L ${A(S)} ${A(v)} L ${A(_)} ${A(v)}`)),F(d,m)};Ut(l,d=>{qt.dragConnectionSourceId&&d(c)})}F(n,o),$t()}var Kv=ne('<div class="palette-overlay svelte-15d5wgw" role="presentation"></div>'),Jv=ne('<div class="editor svelte-15d5wgw"><div class="editor-content"><div class="editor-header svelte-15d5wgw"><h3 class="svelte-15d5wgw">Graph Editor</h3> <div class="palette-container svelte-15d5wgw"><!></div></div> <div class="tree-wrapper svelte-15d5wgw" role="presentation"><!> <div class="tree svelte-15d5wgw"></div> <!></div></div> <!> <!> <!></div>');function Qv(n,t){Qt(t,!0);let e=Xe(Vs([])),i=Xe(Vs([]));const r=Vs({activeId:null,x:0,y:0});Ra("palette-state",r);let s=Q(()=>A(e).filter(I=>!I.parentId));function a(){const I=Lt.request("GET_GRAPH_STATE",void 0);I&&(fe(e,I.nodes,!0),fe(i,I.connections,!0))}Ha(()=>{a(),Lt.on("GRAPH_UPDATED",a)}),Xu(()=>{Lt.off("GRAPH_UPDATED",a)});function o(I){I.stopPropagation();const y=I.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=y.left,r.y=y.bottom+4)}const l={removeNode:I=>{Lt.request("REMOVE_NODE",{id:I}),qt.selectedNodeId===I&&(qt.selectedNodeId=null)},addNode:(I,y)=>{const b=y+"-"+Math.random().toString(36).substring(2,6),O=y==="subject"?"default":"dummy",C=Lt.request("CREATE_NODE",{id:b,type:y,subType:O,parentId:I||void 0});C&&(Lt.request("REGISTER_NODE",{node:C}),r.activeId=null,qt.selectedNodeId=b)},updateNodeConfig:(I,y)=>{const b=I,O={name:b.name,capacity:b.capacity,operation:b.operation,textureId:b.textureId,bufferId:b.bufferId,url:b.url,dataPath:b.dataPath,timeKey:b.timeKey,unpackArray:b.unpackArray,unpackKey:b.unpackKey,unpackValue:b.unpackValue,data:b.data?Array.from(b.data):void 0,vertices:b.vertices,indices:b.indices,uvs:b.uvs,inputIds:b.inputIds?[...b.inputIds]:[],exportMap:I.exportMap?JSON.parse(JSON.stringify(I.exportMap)):void 0,inputMap:I.inputMap?JSON.parse(JSON.stringify(I.inputMap)):void 0,...y},C=Lt.request("CREATE_NODE",{id:I.id,type:I.type,subType:I.subType||"dummy",parentId:I.parentId,config:O});C&&Lt.request("REGISTER_NODE",{node:C})},changeNodeSubType:(I,y)=>{const b=I,O={inputIds:b.inputIds?[...b.inputIds]:[]},C=Lt.request("CREATE_NODE",{id:I.id,type:I.type,subType:y,parentId:I.parentId,config:O});C&&Lt.request("REGISTER_NODE",{node:C})},connectInput:(I,y)=>{Lt.request("CONNECT_NODES",{sourceId:y,targetId:I})},disconnectInput:(I,y)=>{Lt.request("DISCONNECT_NODES",{sourceId:y,targetId:I})},reparentNode:(I,y)=>{const b=A(e).find(O=>O.id===I);if(b){let O=y,C=!1;for(;O;){if(O===I){C=!0;break}const G=A(e).find(N=>N.id===O);O=G&&G.parentId||null}C||(b.parentId=y||void 0,Lt.emit("GRAPH_UPDATED",void 0))}},reorderNode:(I,y,b)=>{Lt.request("REORDER_NODE",{nodeId:I,targetId:y,position:b})}};Ra("graph-actions",l);function c(I){const y=r.activeId==="root"?null:r.activeId;l.addNode(y,I)}var d=Jv();jn("click",Oc,()=>r.activeId=null);var p=ct(d),f=ct(p),_=gt(ct(f),2),v=ct(_);ns(v,{title:"Add Root Node",onclick:o,children:(I,y)=>{Ku(I,{size:12,weight:"bold"})},$$slots:{default:!0}}),st(_),st(f);var S=gt(f,2),m=ct(S);Yv(m,{get connections(){return A(i)},get nodes(){return A(e)}});var g=gt(m,2);$n(g,21,()=>A(s),ui,(I,y)=>{Hf(I,{get node(){return A(y)},get nodes(){return A(e)}})}),st(g);var E=gt(g,2);{var T=I=>{var y=Kv();Il(y,b=>kf?.(b)),en("click",y,()=>r.activeId=null),F(I,y)};Ut(E,I=>{r.activeId&&I(T)})}st(S),st(p);var u=gt(p,2);kv(u,{get nodes(){return A(e)},get connections(){return A(i)}});var h=gt(u,2);{let I=Q(()=>r.activeId!==null);bv(h,{get show(){return A(I)},get x(){return r.x},get y(){return r.y},onAdd:c})}var M=gt(h,2);jv(M,{}),st(d),jn("dragover",S,I=>{qt.draggedNodeId&&I.preventDefault()}),jn("drop",S,I=>{if(qt.draggedNodeId){I.preventDefault();const y=I.dataTransfer?.getData("text/plain");y&&l.reparentNode(y,null),qt.draggedNodeId=null}}),F(n,d),$t()}fi(["click"]);const Qu="183",$v=0,Qd=1,t2=2,Io=1,e2=2,va=3,Nr=0,Hn=1,Kn=2,lr=0,zs=1,$d=2,th=3,eh=4,n2=5,Kr=100,i2=101,r2=102,s2=103,a2=104,o2=200,l2=201,c2=202,u2=203,zc=204,Hc=205,d2=206,h2=207,f2=208,p2=209,m2=210,g2=211,_2=212,v2=213,y2=214,kc=0,Gc=1,Wc=2,Ys=3,Zc=4,Xc=5,Yc=6,qc=7,Gf=0,x2=1,S2=2,zi=0,Wf=1,Zf=2,Xf=3,Yf=4,qf=5,jf=6,Kf=7,Jf=300,is=301,qs=302,Zl=303,Xl=304,Rl=306,jc=1e3,or=1001,Kc=1002,_n=1003,b2=1004,to=1005,Sn=1006,Yl=1007,Qr=1008,oi=1009,Qf=1010,$f=1011,La=1012,$u=1013,Gi=1014,Ui=1015,dr=1016,td=1017,ed=1018,Na=1020,tp=35902,ep=35899,np=1021,ip=1022,Si=1023,hr=1026,$r=1027,rp=1028,nd=1029,js=1030,id=1031,rd=1033,Ro=33776,Co=33777,Do=33778,Lo=33779,Jc=35840,Qc=35841,$c=35842,tu=35843,eu=36196,nu=37492,iu=37496,ru=37488,su=37489,au=37490,ou=37491,lu=37808,cu=37809,uu=37810,du=37811,hu=37812,fu=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,yu=37819,xu=37820,Su=37821,bu=36492,Mu=36494,Eu=36495,Au=36283,wu=36284,Tu=36285,Iu=36286,M2=3200,E2=0,A2=1,Dr="",ii="srgb",Ks="srgb-linear",Xo="linear",Pe="srgb",us=7680,nh=519,w2=512,T2=513,I2=514,sd=515,R2=516,C2=517,ad=518,D2=519,ih=35044,rh="300 es",Oi=2e3,Yo=2001;function L2(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N2(){const n=qo("canvas");return n.style.display="block",n}const sh={};function ah(...n){const t="THREE."+n.shift();console.log(t,...n)}function sp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ee(...n){n=sp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function be(...n){n=sp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function jo(...n){const t=n.join(" ");t in sh||(sh[t]=!0,ee(...n))}function P2(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const F2={[kc]:Gc,[Wc]:Yc,[Zc]:qc,[Ys]:Xc,[Gc]:kc,[Yc]:Wc,[qc]:Zc,[Xc]:Ys};class ia{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Ru=180/Math.PI;function ka(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function U2(n,t){return(n%t+t)%t}function jl(n,t,e){return(1-e)*n+e*t}function ca(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(t=0,e=0){Ve.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ra{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3],f=s[a+0],_=s[a+1],v=s[a+2],S=s[a+3];if(p!==S||l!==f||c!==_||d!==v){let m=l*f+c*_+d*v+p*S;m<0&&(f=-f,_=-_,v=-v,S=-S,m=-m);let g=1-o;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);g=Math.sin(g*E)/T,o=Math.sin(o*E)/T,l=l*g+f*o,c=c*g+_*o,d=d*g+v*o,p=p*g+S*o}else{l=l*g+f*o,c=c*g+_*o,d=d*g+v*o,p=p*g+S*o;const E=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=E,c*=E,d*=E,p*=E}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return t[e]=o*v+d*p+l*_-c*f,t[e+1]=l*v+d*f+c*p-o*_,t[e+2]=c*v+d*_+o*f-l*p,t[e+3]=d*v-o*p-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),p=o(s/2),f=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*p+c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p-f*_*v;break;case"YXZ":this._x=f*d*p+c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p+f*_*v;break;case"ZXY":this._x=f*d*p-c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p-f*_*v;break;case"ZYX":this._x=f*d*p-c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p+f*_*v;break;case"YZX":this._x=f*d*p+c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p-f*_*v;break;case"XZY":this._x=f*d*p-c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p+f*_*v;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],f=i+o+p;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(d-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,i=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),d=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*d,this.y=i+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new Y,oh=new ra;class se{constructor(t,e,i,r,s,a,o,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],_=i[5],v=i[8],S=r[0],m=r[3],g=r[6],E=r[1],T=r[4],u=r[7],h=r[2],M=r[5],I=r[8];return s[0]=a*S+o*E+l*h,s[3]=a*m+o*T+l*M,s[6]=a*g+o*u+l*I,s[1]=c*S+d*E+p*h,s[4]=c*m+d*T+p*M,s[7]=c*g+d*u+p*I,s[2]=f*S+_*E+v*h,s[5]=f*m+_*T+v*M,s[8]=f*g+_*u+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,f=o*l-d*s,_=c*s-a*l,v=e*p+i*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=p*S,t[1]=(r*c-d*i)*S,t[2]=(o*i-r*a)*S,t[3]=f*S,t[4]=(d*e-r*l)*S,t[5]=(r*s-o*e)*S,t[6]=_*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new se,lh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O2(){const n={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Pe&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pe&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ks]:{primaries:t,whitePoint:i,transfer:Xo,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:Pe,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),n}const xe=O2();function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class B2{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ds===void 0&&(ds=qo("canvas")),ds.width=t.width,ds.height=t.height;const r=ds.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cr(e[i]/255)*255):e[i]=cr(e[i]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V2=0;class od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ql(r[a].image)):s.push(Ql(r[a]))}else s=Ql(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let z2=0;const $l=new Y;class Nn extends ia{constructor(t=Nn.DEFAULT_IMAGE,e=Nn.DEFAULT_MAPPING,i=or,r=or,s=Sn,a=Qr,o=Si,l=oi,c=Nn.DEFAULT_ANISOTROPY,d=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=ka(),this.name="",this.source=new od(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jc:t.x=t.x-Math.floor(t.x);break;case or:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jc:t.y=t.y-Math.floor(t.y);break;case or:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Jf;Nn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,e=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],d=l[4],p=l[8],f=l[1],_=l[5],v=l[9],S=l[2],m=l[6],g=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,u=(_+1)/2,h=(g+1)/2,M=(d+f)/4,I=(p+S)/4,y=(v+m)/4;return T>u&&T>h?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=M/i,s=I/i):u>h?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=M/r,s=y/r):h<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(h),i=I/s,r=y/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-v)*(m-v)+(p-S)*(p-S)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(p-S)/E,this.z=(f-d)/E,this.w=Math.acos((c+_+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H2 extends ia{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new od(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends H2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ap extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class k2 extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(t,e,i,r,s,a,o,l,c,d,p,f,_,v,S,m){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,d,p,f,_,v,S,m)}set(t,e,i,r,s,a,o,l,c,d,p,f,_,v,S,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=p,g[14]=f,g[3]=_,g[7]=v,g[11]=S,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const f=a*d,_=a*p,v=o*d,S=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,_=l*p,v=c*d,S=c*p;e[0]=f+S*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=_*o-v,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,_=l*p,v=c*d,S=c*p;e[0]=f-S*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*d,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,_=a*p,v=o*d,S=o*p;e[0]=l*d,e[4]=v*c-_,e[8]=f*c+S,e[1]=l*p,e[5]=S*c+f,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,_=a*c,v=o*l,S=o*c;e[0]=l*d,e[4]=S-f*p,e[8]=v*p+_,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=_*p+v,e[10]=f-S*p}else if(t.order==="XZY"){const f=a*l,_=a*c,v=o*l,S=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=f*p+S,e[5]=a*d,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*d,e[10]=S*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G2,t,W2)}lookAt(t,e,i){const r=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Sr.crossVectors(i,Zn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Sr.crossVectors(i,Zn)),Sr.normalize(),eo.crossVectors(Zn,Sr),r[0]=Sr.x,r[4]=eo.x,r[8]=Zn.x,r[1]=Sr.y,r[5]=eo.y,r[9]=Zn.y,r[2]=Sr.z,r[6]=eo.z,r[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],_=i[13],v=i[2],S=i[6],m=i[10],g=i[14],E=i[3],T=i[7],u=i[11],h=i[15],M=r[0],I=r[4],y=r[8],b=r[12],O=r[1],C=r[5],G=r[9],N=r[13],L=r[2],B=r[6],H=r[10],k=r[14],W=r[3],j=r[7],it=r[11],rt=r[15];return s[0]=a*M+o*O+l*L+c*W,s[4]=a*I+o*C+l*B+c*j,s[8]=a*y+o*G+l*H+c*it,s[12]=a*b+o*N+l*k+c*rt,s[1]=d*M+p*O+f*L+_*W,s[5]=d*I+p*C+f*B+_*j,s[9]=d*y+p*G+f*H+_*it,s[13]=d*b+p*N+f*k+_*rt,s[2]=v*M+S*O+m*L+g*W,s[6]=v*I+S*C+m*B+g*j,s[10]=v*y+S*G+m*H+g*it,s[14]=v*b+S*N+m*k+g*rt,s[3]=E*M+T*O+u*L+h*W,s[7]=E*I+T*C+u*B+h*j,s[11]=E*y+T*G+u*H+h*it,s[15]=E*b+T*N+u*k+h*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],f=t[10],_=t[14],v=t[3],S=t[7],m=t[11],g=t[15],E=l*_-c*f,T=o*_-c*p,u=o*f-l*p,h=a*_-c*d,M=a*f-l*d,I=a*p-o*d;return e*(S*E-m*T+g*u)-i*(v*E-m*h+g*M)+r*(v*T-S*h+g*I)-s*(v*u-S*M+m*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],f=t[10],_=t[11],v=t[12],S=t[13],m=t[14],g=t[15],E=e*o-i*a,T=e*l-r*a,u=e*c-s*a,h=i*l-r*o,M=i*c-s*o,I=r*c-s*l,y=d*S-p*v,b=d*m-f*v,O=d*g-_*v,C=p*m-f*S,G=p*g-_*S,N=f*g-_*m,L=E*N-T*G+u*C+h*O-M*b+I*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return t[0]=(o*N-l*G+c*C)*B,t[1]=(r*G-i*N-s*C)*B,t[2]=(S*I-m*M+g*h)*B,t[3]=(f*M-p*I-_*h)*B,t[4]=(l*O-a*N-c*b)*B,t[5]=(e*N-r*O+s*b)*B,t[6]=(m*u-v*I-g*T)*B,t[7]=(d*I-f*u+_*T)*B,t[8]=(a*G-o*O+c*y)*B,t[9]=(i*O-e*G-s*y)*B,t[10]=(v*M-S*u+g*E)*B,t[11]=(p*u-d*M-_*E)*B,t[12]=(o*b-a*C-l*y)*B,t[13]=(e*C-i*b+r*y)*B,t[14]=(S*T-v*h-m*E)*B,t[15]=(d*h-p*T+f*E)*B,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,p=o+o,f=s*c,_=s*d,v=s*p,S=a*d,m=a*p,g=o*p,E=l*c,T=l*d,u=l*p,h=i.x,M=i.y,I=i.z;return r[0]=(1-(S+g))*h,r[1]=(_+u)*h,r[2]=(v-T)*h,r[3]=0,r[4]=(_-u)*M,r[5]=(1-(f+g))*M,r[6]=(m+E)*M,r[7]=0,r[8]=(v+T)*I,r[9]=(m-E)*I,r[10]=(1-(f+S))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),l=hs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mi.copy(this);const c=1/a,d=1/o,p=1/l;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=p,mi.elements[9]*=p,mi.elements[10]*=p,e.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Oi,l=!1){const c=this.elements,d=2*s/(e-t),p=2*s/(i-r),f=(e+t)/(e-t),_=(i+r)/(i-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===Oi)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Yo)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Oi,l=!1){const c=this.elements,d=2/(e-t),p=2/(i-r),f=-(e+t)/(e-t),_=-(i+r)/(i-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===Oi)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===Yo)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new Y,mi=new ln,G2=new Y(0,0,0),W2=new Y(1,1,1),Sr=new Y,eo=new Y,Zn=new Y,uh=new ln,dh=new ra;class fr{constructor(t=0,e=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Z2=0;const hh=new Y,fs=new ra,Ki=new ln,no=new Y,ua=new Y,X2=new Y,Y2=new ra,fh=new Y(1,0,0),ph=new Y(0,1,0),mh=new Y(0,0,1),gh={type:"added"},q2={type:"removed"},ps={type:"childadded",child:null},tc={type:"childremoved",child:null};class Qn extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const t=new Y,e=new fr,i=new ra,r=new Y(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new se}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?no.copy(t):no.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ua,no,this.up):Ki.lookAt(no,ua,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Ki),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gh),ps.child=t,this.dispatchEvent(ps),ps.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(q2),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,X2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Y2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),f=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Qn.DEFAULT_UP=new Y(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class io extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j2={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),g=this._getHandJoint(c,S);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new io;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},ro={h:0,s:0,l:0};function nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ae{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=xe.workingColorSpace){if(t=U2(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=nc(a,s,t+1/3),this.g=nc(a,s,t),this.b=nc(a,s,t-1/3)}return xe.colorSpaceToWorking(this,r),this}setStyle(t,e=ii){function i(s){s!==void 0&&parseFloat(s)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){const i=lp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return xe.workingToColorSpace(xn.copy(this),t),Math.round(_e(xn.r*255,0,255))*65536+Math.round(_e(xn.g*255,0,255))*256+Math.round(_e(xn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(xn.copy(this),e);const i=xn.r,r=xn.g,s=xn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=ii){xe.workingToColorSpace(xn.copy(this),t);const e=xn.r,i=xn.g,r=xn.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(br),this.setHSL(br.h+t,br.s+e,br.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(br),t.getHSL(ro);const i=jl(br.h,ro.h,e),r=jl(br.s,ro.s,e),s=jl(br.l,ro.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ae;Ae.NAMES=lp;class K2 extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gi=new Y,Ji=new Y,ic=new Y,Qi=new Y,ms=new Y,gs=new Y,_h=new Y,rc=new Y,sc=new Y,ac=new Y,oc=new nn,lc=new nn,cc=new nn;class xi{constructor(t=new Y,e=new Y,i=new Y){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gi.subVectors(t,e),r.cross(gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){gi.subVectors(r,e),Ji.subVectors(i,e),ic.subVectors(t,e);const a=gi.dot(gi),o=gi.dot(Ji),l=gi.dot(ic),c=Ji.dot(Ji),d=Ji.dot(ic),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,_=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,i),cc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(t,e,i,r){return gi.subVectors(i,e),Ji.subVectors(t,e),gi.cross(Ji).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),rc.subVectors(t,i);const l=ms.dot(rc),c=gs.dot(rc);if(l<=0&&c<=0)return e.copy(i);sc.subVectors(t,r);const d=ms.dot(sc),p=gs.dot(sc);if(d>=0&&p<=d)return e.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(ms,a);ac.subVectors(t,s);const _=ms.dot(ac),v=gs.dot(ac);if(v>=0&&_<=v)return e.copy(s);const S=_*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(gs,o);const m=d*v-_*p;if(m<=0&&p-d>=0&&_-v>=0)return _h.subVectors(s,r),o=(p-d)/(p-d+(_-v)),e.copy(r).addScaledVector(_h,o);const g=1/(m+S+f);return a=S*g,o=f*g,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ga{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(da),ao.subVectors(this.max,da),_s.subVectors(t.a,da),vs.subVectors(t.b,da),ys.subVectors(t.c,da),Mr.subVectors(vs,_s),Er.subVectors(ys,vs),Hr.subVectors(_s,ys);let e=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-Hr.z,Hr.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,Hr.z,0,-Hr.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-Hr.y,Hr.x,0];return!uc(e,_s,vs,ys,ao)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,_s,vs,ys,ao))?!1:(oo.crossVectors(Mr,Er),e=[oo.x,oo.y,oo.z],uc(e,_s,vs,ys,ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],_i=new Y,so=new Ga,_s=new Y,vs=new Y,ys=new Y,Mr=new Y,Er=new Y,Hr=new Y,da=new Y,ao=new Y,oo=new Y,kr=new Y;function uc(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kr.fromArray(n,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),d=i.dot(kr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const on=new Y,lo=new Ve;let J2=0;class ki{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ca(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ca(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ca(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ca(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ca(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ih&&(t.usage=this.usage),t}}class cp extends ki{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class up extends ki{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ur extends ki{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Q2=new Ga,ha=new Y,dc=new Y;class ld{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Q2.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);const e=ha.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(dc)),this.expandByPoint(ha.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $2=0;const ei=new ln,hc=new Qn,xs=new Y,Xn=new Ga,fa=new Ga,mn=new Y;class pr extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L2(t)?up:cp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new se().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ur(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ld);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Xn.min,fa.min),Xn.expandByPoint(mn),mn.addVectors(Xn.max,fa.max),Xn.expandByPoint(mn)):(Xn.expandByPoint(fa.min),Xn.expandByPoint(fa.max))}Xn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)mn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(mn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)mn.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),mn.add(xs)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new Y,l[y]=new Y;const c=new Y,d=new Y,p=new Y,f=new Ve,_=new Ve,v=new Ve,S=new Y,m=new Y;function g(y,b,O){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,O),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,b),v.fromBufferAttribute(s,O),d.sub(c),p.sub(c),_.sub(f),v.sub(f);const C=1/(_.x*v.y-v.x*_.y);isFinite(C)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(C),m.copy(p).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(C),o[y].add(S),o[b].add(S),o[O].add(S),l[y].add(m),l[b].add(m),l[O].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,b=E.length;y<b;++y){const O=E[y],C=O.start,G=O.count;for(let N=C,L=C+G;N<L;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const T=new Y,u=new Y,h=new Y,M=new Y;function I(y){h.fromBufferAttribute(r,y),M.copy(h);const b=o[y];T.copy(b),T.sub(h.multiplyScalar(h.dot(b))).normalize(),u.crossVectors(M,b);const C=u.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,b=E.length;y<b;++y){const O=E[y],C=O.start,G=O.count;for(let N=C,L=C+G;N<L;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ki(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,d=new Y,p=new Y;if(t)for(let f=0,_=t.count;f<_;f+=3){const v=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let _=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?_=l[S]*o.data.stride+o.offset:_=l[S]*d;for(let g=0;g<d;g++)f[v++]=c[_++]}return new ki(f,d,p)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],_=t(f,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const _=c[p];d.push(_.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,_=p.length;f<_;f++)d.push(p[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ty=0;class Cl extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=zs,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const tr=new Y,fc=new Y,co=new Y,Ar=new Y,pc=new Y,uo=new Y,mc=new Y;class ey{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tr.copy(this.origin).addScaledVector(this.direction,e),tr.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){fc.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(fc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(co),o=Ar.dot(this.direction),l=-Ar.dot(co),c=Ar.lengthSq(),d=Math.abs(1-a*a);let p,f,_,v;if(d>0)if(p=a*l-o,f=a*o-l,v=s*d,p>=0)if(f>=-v)if(f<=v){const S=1/d;p*=S,f*=S,_=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(fc).addScaledVector(co,f),_}intersectSphere(t,e){tr.subVectors(t.center,this.origin);const i=tr.dot(this.direction),r=tr.dot(tr)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),d>=0?(s=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,tr)!==null}intersectTriangle(t,e,i,r,s){pc.subVectors(e,t),uo.subVectors(i,t),mc.crossVectors(pc,uo);let a=this.direction.dot(mc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ar.subVectors(this.origin,t);const l=o*this.direction.dot(uo.crossVectors(Ar,uo));if(l<0)return null;const c=o*this.direction.dot(pc.cross(Ar));if(c<0||l+c>a)return null;const d=-o*Ar.dot(mc);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Os extends Cl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vh=new ln,Gr=new ey,ho=new ld,yh=new Y,fo=new Y,po=new Y,mo=new Y,gc=new Y,go=new Y,xh=new Y,_o=new Y;class Jn extends Qn{constructor(t=new pr,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(gc.fromBufferAttribute(p,t),a?go.addScaledVector(gc,d):go.addScaledVector(gc.sub(e),d))}e.add(go)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),Gr.copy(t.ray).recast(t.near),!(ho.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(ho,yh)===null||Gr.origin.distanceToSquared(yh)>(t.far-t.near)**2))&&(vh.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const m=f[v],g=a[m.materialIndex],E=Math.max(m.start,_.start),T=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let u=E,h=T;u<h;u+=3){const M=o.getX(u),I=o.getX(u+1),y=o.getX(u+2);r=vo(this,g,t,i,c,d,p,M,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),S=Math.min(o.count,_.start+_.count);for(let m=v,g=S;m<g;m+=3){const E=o.getX(m),T=o.getX(m+1),u=o.getX(m+2);r=vo(this,a,t,i,c,d,p,E,T,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const m=f[v],g=a[m.materialIndex],E=Math.max(m.start,_.start),T=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let u=E,h=T;u<h;u+=3){const M=u,I=u+1,y=u+2;r=vo(this,g,t,i,c,d,p,M,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),S=Math.min(l.count,_.start+_.count);for(let m=v,g=S;m<g;m+=3){const E=m,T=m+1,u=m+2;r=vo(this,a,t,i,c,d,p,E,T,u),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function ny(n,t,e,i,r,s,a,o){let l;if(t.side===Hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Nr,o),l===null)return null;_o.copy(o),_o.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:n}}function vo(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,fo),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);const d=ny(n,t,e,i,fo,po,mo,xh);if(d){const p=new Y;xi.getBarycoord(xh,fo,po,mo,p),r&&(d.uv=xi.getInterpolatedAttribute(r,o,l,c,p,new Ve)),s&&(d.uv1=xi.getInterpolatedAttribute(s,o,l,c,p,new Ve)),a&&(d.normal=xi.getInterpolatedAttribute(a,o,l,c,p,new Y),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};xi.getNormal(fo,po,mo,f.normal),d.face=f,d.barycoord=p}return d}class iy extends Nn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=_n,d=_n,p,f){super(null,a,o,l,c,d,r,s,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=new Y,ry=new Y,sy=new se;class jr{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=_c.subVectors(i,e).cross(ry.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sy.getNormalMatrix(t),r=this.coplanarPoint(_c).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new ld,ay=new Ve(.5,.5),yo=new Y;class dp{constructor(t=new jr,e=new jr,i=new jr,r=new jr,s=new jr,a=new jr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],f=s[6],_=s[7],v=s[8],S=s[9],m=s[10],g=s[11],E=s[12],T=s[13],u=s[14],h=s[15];if(r[0].setComponents(c-a,_-d,g-v,h-E).normalize(),r[1].setComponents(c+a,_+d,g+v,h+E).normalize(),r[2].setComponents(c+o,_+p,g+S,h+T).normalize(),r[3].setComponents(c-o,_-p,g-S,h-T).normalize(),i)r[4].setComponents(l,f,m,u).normalize(),r[5].setComponents(c-l,_-f,g-m,h-u).normalize();else if(r[4].setComponents(c-l,_-f,g-m,h-u).normalize(),e===Oi)r[5].setComponents(c+l,_+f,g+m,h+u).normalize();else if(e===Yo)r[5].setComponents(l,f,m,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const e=ay.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(yo.x=r.normal.x>0?t.max.x:t.min.x,yo.y=r.normal.y>0?t.max.y:t.min.y,yo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hp extends Nn{constructor(t=[],e=is,i,r,s,a,o,l,c,d){super(t,e,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pa extends Nn{constructor(t,e,i=Gi,r,s,a,o=_n,l=_n,c,d=hr,p=1){if(d!==hr&&d!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:p};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class oy extends Pa{constructor(t,e=Gi,i=is,r,s,a=_n,o=_n,l,c=hr){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fp extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wa extends pr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let f=0,_=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(c,3)),this.setAttribute("normal",new ur(d,3)),this.setAttribute("uv",new ur(p,2));function v(S,m,g,E,T,u,h,M,I,y,b){const O=u/I,C=h/y,G=u/2,N=h/2,L=M/2,B=I+1,H=y+1;let k=0,W=0;const j=new Y;for(let it=0;it<H;it++){const rt=it*C-N;for(let at=0;at<B;at++){const Dt=at*O-G;j[S]=Dt*E,j[m]=rt*T,j[g]=L,c.push(j.x,j.y,j.z),j[S]=0,j[m]=0,j[g]=M>0?1:-1,d.push(j.x,j.y,j.z),p.push(at/I),p.push(1-it/y),k+=1}}for(let it=0;it<y;it++)for(let rt=0;rt<I;rt++){const at=f+rt+B*it,Dt=f+rt+B*(it+1),pe=f+(rt+1)+B*(it+1),Re=f+(rt+1)+B*it;l.push(at,Dt,Re),l.push(Dt,pe,Re),W+=6}o.addGroup(_,W,b),_+=W,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Za extends pr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,p=t/o,f=e/l,_=[],v=[],S=[],m=[];for(let g=0;g<d;g++){const E=g*f-a;for(let T=0;T<c;T++){const u=T*p-s;v.push(u,-E,0),S.push(0,0,1),m.push(T/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<o;E++){const T=E+c*g,u=E+c*(g+1),h=E+1+c*(g+1),M=E+1+c*g;_.push(T,u,M),_.push(u,h,M)}this.setIndex(_),this.setAttribute("position",new ur(v,3)),this.setAttribute("normal",new ur(S,3)),this.setAttribute("uv",new ur(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}function Js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function In(n){const t={};for(let e=0;e<n.length;e++){const i=Js(n[e]);for(const r in i)t[r]=i[r]}return t}function ly(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const cy={clone:Js,merge:In};var uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Cl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=ly(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hy extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fy extends Cl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class py extends Cl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xo=new Y,So=new ra,Ai=new Y;class mp extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xo,So,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(xo,So,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,So,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new Y,Sh=new Ve,bh=new Ve;class yi extends mp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ru*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ru*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,Sh,bh),e.subVectors(bh,Sh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ql*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class cd extends mp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=-90,bs=1;class my extends Qn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(Ss,bs,t,e);r.layers=this.layers,this.add(r);const s=new yi(Ss,bs,t,e);s.layers=this.layers,this.add(s);const a=new yi(Ss,bs,t,e);a.layers=this.layers,this.add(a);const o=new yi(Ss,bs,t,e);o.layers=this.layers,this.add(o);const l=new yi(Ss,bs,t,e);l.layers=this.layers,this.add(l);const c=new yi(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,f,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class gy extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Mh(n,t,e,i){const r=_y(i);switch(e){case np:return n*t;case rp:return n*t/r.components*r.byteLength;case nd:return n*t/r.components*r.byteLength;case js:return n*t*2/r.components*r.byteLength;case id:return n*t*2/r.components*r.byteLength;case ip:return n*t*3/r.components*r.byteLength;case Si:return n*t*4/r.components*r.byteLength;case rd:return n*t*4/r.components*r.byteLength;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qc:case tu:return Math.max(n,16)*Math.max(t,8)/4;case Jc:case $c:return Math.max(n,8)*Math.max(t,8)/2;case eu:case nu:case ru:case su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:case ou:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case mu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _u:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case bu:case Mu:case Eu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Au:case wu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tu:case Iu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _y(n){switch(n){case oi:case Qf:return{byteLength:1,components:1};case La:case $f:case dr:return{byteLength:2,components:1};case td:case ed:return{byteLength:2,components:4};case Gi:case $u:case Ui:return{byteLength:4,components:1};case tp:case ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);function gp(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function vy(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<p.length;_++){const v=p[f],S=p[_];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,p[f]=S)}p.length=f+1;for(let _=0,v=p.length;_<v;_++){const S=p[_];n.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,Sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
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
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ty=`#ifdef USE_BATCHING
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
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ky=`#define PI 3.141592653589793
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
} // validated`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`uniform sampler2D dfgLUT;
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
}`,vx=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iS=`float getShadowMask() {
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
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,aS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yS=`uniform sampler2D t2D;
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`#include <common>
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
}`,AS=`#if DEPTH_PACKING == 3200
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
}`,wS=`#define DISTANCE
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
}`,TS=`#define DISTANCE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
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
}`,DS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,PS=`#define LAMBERT
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
}`,FS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,OS=`#define MATCAP
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
}`,BS=`#define NORMAL
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
}`,VS=`#define NORMAL
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
}`,zS=`#define PHONG
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
}`,HS=`#define PHONG
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
}`,kS=`#define STANDARD
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
}`,GS=`#define STANDARD
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
}`,WS=`#define TOON
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
}`,ZS=`#define TOON
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
}`,XS=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,jS=`uniform vec3 color;
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
}`,KS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:yy,alphahash_pars_fragment:xy,alphamap_fragment:Sy,alphamap_pars_fragment:by,alphatest_fragment:My,alphatest_pars_fragment:Ey,aomap_fragment:Ay,aomap_pars_fragment:wy,batching_pars_vertex:Ty,batching_vertex:Iy,begin_vertex:Ry,beginnormal_vertex:Cy,bsdfs:Dy,iridescence_fragment:Ly,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Uy,clipping_planes_vertex:Oy,color_fragment:By,color_pars_fragment:Vy,color_pars_vertex:zy,color_vertex:Hy,common:ky,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:Zy,displacementmap_vertex:Xy,emissivemap_fragment:Yy,emissivemap_pars_fragment:qy,colorspace_fragment:jy,colorspace_pars_fragment:Ky,envmap_fragment:Jy,envmap_common_pars_fragment:Qy,envmap_pars_fragment:$y,envmap_pars_vertex:tx,envmap_physical_pars_fragment:dx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:hx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:yx,lights_fragment_end:xx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Ex,map_fragment:Ax,map_pars_fragment:wx,map_particle_fragment:Tx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Dx,morphcolor_vertex:Lx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Px,morphtarget_vertex:Fx,normal_fragment_begin:Ux,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:Vx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Zx,opaque_fragment:Xx,packing:Yx,premultiplied_alpha_fragment:qx,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:tS,shadowmap_pars_vertex:eS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:aS,skinnormal_vertex:oS,specularmap_fragment:lS,specularmap_pars_fragment:cS,tonemapping_fragment:uS,tonemapping_pars_fragment:dS,transmission_fragment:hS,transmission_pars_fragment:fS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:_S,background_vert:vS,background_frag:yS,backgroundCube_vert:xS,backgroundCube_frag:SS,cube_vert:bS,cube_frag:MS,depth_vert:ES,depth_frag:AS,distance_vert:wS,distance_frag:TS,equirect_vert:IS,equirect_frag:RS,linedashed_vert:CS,linedashed_frag:DS,meshbasic_vert:LS,meshbasic_frag:NS,meshlambert_vert:PS,meshlambert_frag:FS,meshmatcap_vert:US,meshmatcap_frag:OS,meshnormal_vert:BS,meshnormal_frag:VS,meshphong_vert:zS,meshphong_frag:HS,meshphysical_vert:kS,meshphysical_frag:GS,meshtoon_vert:WS,meshtoon_frag:ZS,points_vert:XS,points_frag:YS,shadow_vert:qS,shadow_frag:jS,sprite_vert:KS,sprite_frag:JS},_t={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ci={basic:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:In([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:In([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ae(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:In([_t.points,_t.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:In([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:In([_t.common,_t.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:In([_t.sprite,_t.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:In([_t.common,_t.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:In([_t.lights,_t.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ci.physical={uniforms:In([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const bo={r:0,b:0,g:0},Zr=new fr,QS=new ln;function $S(n,t,e,i,r,s){const a=new Ae(0);let o=r===!0?0:1,l,c,d=null,p=0,f=null;function _(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){const u=E.backgroundBlurriness>0;T=t.get(T,u)}return T}function v(E){let T=!1;const u=_(E);u===null?m(a,o):u&&u.isColor&&(m(u,1),T=!0);const h=n.xr.getEnvironmentBlendMode();h==="additive"?e.buffers.color.setClear(0,0,0,1,s):h==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,T){const u=_(T);u&&(u.isCubeTexture||u.mapping===Rl)?(c===void 0&&(c=new Jn(new Wa(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Js(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(h,M,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Zr.copy(T.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QS.makeRotationFromEuler(Zr)),c.material.toneMapped=xe.getTransfer(u.colorSpace)!==Pe,(d!==u||p!==u.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=u,p=u.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new Jn(new Za(2,2),new Wi({name:"BackgroundMaterial",uniforms:Js(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=xe.getTransfer(u.colorSpace)!==Pe,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(d!==u||p!==u.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=u,p=u.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,T){E.getRGB(bo,pp(n)),e.buffers.color.setClear(bo.r,bo.g,bo.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:v,addToRenderList:S,dispose:g}}function tb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(C,G,N,L,B){let H=!1;const k=p(C,L,N,G);s!==k&&(s=k,c(s.object)),H=_(C,L,N,B),H&&v(C,L,N,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,u(C,G,N,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function p(C,G,N,L){const B=L.wireframe===!0;let H=i[G.id];H===void 0&&(H={},i[G.id]=H);const k=C.isInstancedMesh===!0?C.id:0;let W=H[k];W===void 0&&(W={},H[k]=W);let j=W[N.id];j===void 0&&(j={},W[N.id]=j);let it=j[B];return it===void 0&&(it=f(l()),j[B]=it),it}function f(C){const G=[],N=[],L=[];for(let B=0;B<e;B++)G[B]=0,N[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:L,object:C,attributes:{},index:null}}function _(C,G,N,L){const B=s.attributes,H=G.attributes;let k=0;const W=N.getAttributes();for(const j in W)if(W[j].location>=0){const rt=B[j];let at=H[j];if(at===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(at=C.instanceColor)),rt===void 0||rt.attribute!==at||at&&rt.data!==at.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function v(C,G,N,L){const B={},H=G.attributes;let k=0;const W=N.getAttributes();for(const j in W)if(W[j].location>=0){let rt=H[j];rt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor));const at={};at.attribute=rt,rt&&rt.data&&(at.data=rt.data),B[j]=at,k++}s.attributes=B,s.attributesNum=k,s.index=L}function S(){const C=s.newAttributes;for(let G=0,N=C.length;G<N;G++)C[G]=0}function m(C){g(C,0)}function g(C,G){const N=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;N[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),B[C]!==G&&(n.vertexAttribDivisor(C,G),B[C]=G)}function E(){const C=s.newAttributes,G=s.enabledAttributes;for(let N=0,L=G.length;N<L;N++)G[N]!==C[N]&&(n.disableVertexAttribArray(N),G[N]=0)}function T(C,G,N,L,B,H,k){k===!0?n.vertexAttribIPointer(C,G,N,B,H):n.vertexAttribPointer(C,G,N,L,B,H)}function u(C,G,N,L){S();const B=L.attributes,H=N.getAttributes(),k=G.defaultAttributeValues;for(const W in H){const j=H[W];if(j.location>=0){let it=B[W];if(it===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),it!==void 0){const rt=it.normalized,at=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const pe=Dt.buffer,Re=Dt.type,$=Dt.bytesPerElement,ut=Re===n.INT||Re===n.UNSIGNED_INT||it.gpuType===$u;if(it.isInterleavedBufferAttribute){const ft=it.data,ie=ft.stride,Zt=it.offset;if(ft.isInstancedInterleavedBuffer){for(let Jt=0;Jt<j.locationSize;Jt++)g(j.location+Jt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Jt=0;Jt<j.locationSize;Jt++)m(j.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Jt=0;Jt<j.locationSize;Jt++)T(j.location+Jt,at/j.locationSize,Re,rt,ie*$,(Zt+at/j.locationSize*Jt)*$,ut)}else{if(it.isInstancedBufferAttribute){for(let ft=0;ft<j.locationSize;ft++)g(j.location+ft,it.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<j.locationSize;ft++)m(j.location+ft);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ft=0;ft<j.locationSize;ft++)T(j.location+ft,at/j.locationSize,Re,rt,at*$,at/j.locationSize*ft*$,ut)}}else if(k!==void 0){const rt=k[W];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(j.location,rt);break;case 3:n.vertexAttrib3fv(j.location,rt);break;case 4:n.vertexAttrib4fv(j.location,rt);break;default:n.vertexAttrib1fv(j.location,rt)}}}}E()}function h(){b();for(const C in i){const G=i[C];for(const N in G){const L=G[N];for(const B in L){const H=L[B];for(const k in H)d(H[k].object),delete H[k];delete L[B]}}delete i[C]}}function M(C){if(i[C.id]===void 0)return;const G=i[C.id];for(const N in G){const L=G[N];for(const B in L){const H=L[B];for(const k in H)d(H[k].object),delete H[k];delete L[B]}}delete i[C.id]}function I(C){for(const G in i){const N=i[G];for(const L in N){const B=N[L];if(B[C.id]===void 0)continue;const H=B[C.id];for(const k in H)d(H[k].object),delete H[k];delete B[C.id]}}}function y(C){for(const G in i){const N=i[G],L=C.isInstancedMesh===!0?C.id:0,B=N[L];if(B!==void 0){for(const H in B){const k=B[H];for(const W in k)d(k[W].object),delete k[W];delete B[H]}delete N[L],Object.keys(N).length===0&&delete i[G]}}}function b(){O(),a=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:O,dispose:h,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function eb(n,t,e){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),e.update(d,i,p))}function o(c,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let _=0;for(let v=0;v<p;v++)_+=d[v];e.update(_,i,1)}function l(c,d,p,f){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,p);let v=0;for(let S=0;S<p;S++)v+=d[S]*f[S];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nb(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==Si&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const y=I===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==oi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ui&&!y)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(ee("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:u,maxSamples:h,samples:M}}function ib(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new jr,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const _=p.length!==0||f||i!==0||r;return r=f,i=p.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){e=d(p,f,0)},this.setState=function(p,f,_){const v=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,g=n.get(p);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const E=s?0:i,T=E*4;let u=g.clippingState||null;l.value=u,u=d(v,f,T,_);for(let h=0;h!==T;++h)u[h]=e[h];g.clippingState=u,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,f,_,v){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const g=_+S*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,u=_;T!==S;++T,u+=4)a.copy(p[T]).applyMatrix4(E,o),a.normal.toArray(m,u),m[u+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Lr=4,Eh=[.125,.215,.35,.446,.526,.582],Jr=20,rb=256,pa=new cd,Ah=new Ae;let vc=null,yc=0,xc=0,Sc=!1;const sb=new Y;class wh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=sb}=s;vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,yc,xc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:dr,format:Si,colorSpace:Ks,depthBuffer:!1},r=Th(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ab(s)),this._blurMaterial=lb(s,t,e),this._ggxMaterial=ob(s,t,e)}return r}_compileMaterial(t){const e=new Jn(new pr,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,r,s){const l=new yi(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,_=p.toneMapping;p.getClearColor(Ah),p.toneMapping=zi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new Wa,new Os({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let g=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,g=!0):(m.color.copy(Ah),g=!0);for(let T=0;T<6;T++){const u=T%3;u===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):u===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const h=this._cubeSize;Ms(r,u*h,T>2?h:0,h,h),p.setRenderTarget(r),g&&p.render(S,l),p.render(t,l)}p.toneMapping=_,p.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===is||t.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,pa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),f=0+c*1.25,_=p*f,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-Lr?i-v+Lr:0),g=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,Ms(s,m,g,3*S,2*S),r.setRenderTarget(s),r.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ms(t,m,g,3*S,2*S),r.setRenderTarget(t),r.render(o,pa)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const f=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Jr-1),S=s/v,m=isFinite(s)?1+Math.floor(d*S):Jr;m>Jr&&ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const g=[];let E=0;for(let I=0;I<Jr;++I){const y=I/S,b=Math.exp(-y*y/2);g.push(b),I===0?E+=b:I<m&&(E+=2*b)}for(let I=0;I<g.length;I++)g[I]=g[I]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const u=this._sizeLods[r],h=3*u*(r>T-Lr?r-T+Lr:0),M=4*(this._cubeSize-u);Ms(e,h,M,3*u,2*u),l.setRenderTarget(e),l.render(p,pa)}}function ab(n){const t=[],e=[],i=[];let r=n;const s=n-Lr+1+Eh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=Eh[a-n+Lr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,v=6,S=3,m=2,g=1,E=new Float32Array(S*v*_),T=new Float32Array(m*v*_),u=new Float32Array(g*v*_);for(let M=0;M<_;M++){const I=M%3*2/3-1,y=M>2?0:-1,b=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];E.set(b,S*v*M),T.set(f,m*v*M);const O=[M,M,M,M,M,M];u.set(O,g*v*M)}const h=new pr;h.setAttribute("position",new ki(E,S)),h.setAttribute("uv",new ki(T,m)),h.setAttribute("faceIndex",new ki(u,g)),i.push(new Jn(h,null)),r>Lr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Th(n,t,e){const i=new Hi(n,t,e);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ob(n,t,e){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function lb(n,t,e){const i=new Float32Array(Jr),r=new Y(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ih(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Rh(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}class _p extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new hp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wa(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:lr});s.uniforms.tEquirect.value=e;const a=new Jn(r,s),o=e.minFilter;return e.minFilter===Qr&&(e.minFilter=Sn),new my(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function cb(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,_=!1){return f==null?null:_?a(f):s(f)}function s(f){if(f&&f.isTexture){const _=f.mapping;if(_===Zl||_===Xl)if(t.has(f)){const v=t.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const S=new _p(v.height);return S.fromEquirectangularTexture(n,f),t.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const _=f.mapping,v=_===Zl||_===Xl,S=_===is||_===qs;if(v||S){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new wh(n)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const E=f.image;return v&&E&&E.height>0||S&&E&&l(E)?(i===null&&(i=new wh(n)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,_){return _===Zl?f.mapping=is:_===Xl&&(f.mapping=qs),f}function l(f){let _=0;const v=6;for(let S=0;S<v;S++)f[S]!==void 0&&_++;return _===v}function c(f){const _=f.target;_.removeEventListener("dispose",c);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function d(f){const _=f.target;_.removeEventListener("dispose",d);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function ub(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&jo("WebGLRenderer: "+i+" extension not supported."),r}}}function db(n,t,e,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(t.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER)}function c(p){const f=[],_=p.index,v=p.attributes.position;let S=0;if(v===void 0)return;if(_!==null){const E=_.array;S=_.version;for(let T=0,u=E.length;T<u;T+=3){const h=E[T+0],M=E[T+1],I=E[T+2];f.push(h,M,M,I,I,h)}}else{const E=v.array;S=v.version;for(let T=0,u=E.length/3-1;T<u;T+=3){const h=T+0,M=T+1,I=T+2;f.push(h,M,M,I,I,h)}}const m=new(v.count>=65535?up:cp)(f,1);m.version=S;const g=s.get(p);g&&t.remove(g),s.set(p,m)}function d(p){const f=s.get(p);if(f){const _=p.index;_!==null&&f.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function hb(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,_){n.drawElements(i,_,s,f*a),e.update(_,i,1)}function c(f,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,f*a,v),e.update(_,i,v))}function d(f,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,f,0,v);let m=0;for(let g=0;g<v;g++)m+=_[g];e.update(m,i,1)}function p(f,_,v,S){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/a,_[g],S[g]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,f,0,S,0,v);let g=0;for(let E=0;E<v;E++)g+=_[E]*S[E];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function fb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function pb(n,t,e){const i=new WeakMap,r=new nn;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let b=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),S===!0&&(T=3);let u=o.attributes.position.count*T,h=1;u>t.maxTextureSize&&(h=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const M=new Float32Array(u*h*4*p),I=new ap(M,u,h,p);I.type=Ui,I.needsUpdate=!0;const y=T*4;for(let O=0;O<p;O++){const C=m[O],G=g[O],N=E[O],L=u*h*4*O;for(let B=0;B<C.count;B++){const H=B*y;_===!0&&(r.fromBufferAttribute(C,B),M[L+H+0]=r.x,M[L+H+1]=r.y,M[L+H+2]=r.z,M[L+H+3]=0),v===!0&&(r.fromBufferAttribute(G,B),M[L+H+4]=r.x,M[L+H+5]=r.y,M[L+H+6]=r.z,M[L+H+7]=0),S===!0&&(r.fromBufferAttribute(N,B),M[L+H+8]=r.x,M[L+H+9]=r.y,M[L+H+10]=r.z,M[L+H+11]=N.itemSize===4?r.w:1)}}f={count:p,texture:I,size:new Ve(u,h)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let S=0;S<c.length;S++)_+=c[S];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mb(n,t,e,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,p=c.geometry,f=t.get(c,p);if(s.get(f)!==d&&(t.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const gb={[Wf]:"LINEAR_TONE_MAPPING",[Zf]:"REINHARD_TONE_MAPPING",[Xf]:"CINEON_TONE_MAPPING",[Yf]:"ACES_FILMIC_TONE_MAPPING",[jf]:"AGX_TONE_MAPPING",[Kf]:"NEUTRAL_TONE_MAPPING",[qf]:"CUSTOM_TONE_MAPPING"};function _b(n,t,e,i,r){const s=new Hi(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Hi(t,e,{type:dr,depthBuffer:!1,stencilBuffer:!1}),o=new pr;o.setAttribute("position",new ur([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ur([0,2,0,0,2,0],2));const l=new hy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Jn(o,l),d=new cd(-1,1,1,-1,0,1);let p=null,f=null,_=!1,v,S=null,m=[],g=!1;this.setSize=function(E,T){s.setSize(E,T),a.setSize(E,T);for(let u=0;u<m.length;u++){const h=m[u];h.setSize&&h.setSize(E,T)}},this.setEffects=function(E){m=E,g=m.length>0&&m[0].isRenderPass===!0;const T=s.width,u=s.height;for(let h=0;h<m.length;h++){const M=m[h];M.setSize&&M.setSize(T,u)}},this.begin=function(E,T){if(_||E.toneMapping===zi&&m.length===0)return!1;if(S=T,T!==null){const u=T.width,h=T.height;(s.width!==u||s.height!==h)&&this.setSize(u,h)}return g===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=zi,!0},this.hasRenderPass=function(){return g},this.end=function(E,T){E.toneMapping=v,_=!0;let u=s,h=a;for(let M=0;M<m.length;M++){const I=m[M];if(I.enabled!==!1&&(I.render(E,h,u,T),I.needsSwap!==!1)){const y=u;u=h,h=y}}if(p!==E.outputColorSpace||f!==E.toneMapping){p=E.outputColorSpace,f=E.toneMapping,l.defines={},xe.getTransfer(p)===Pe&&(l.defines.SRGB_TRANSFER="");const M=gb[f];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,E.setRenderTarget(S),E.render(c,d),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const vp=new Nn,Cu=new Pa(1,1),yp=new ap,xp=new k2,Sp=new hp,Ch=[],Dh=[],Lh=new Float32Array(16),Nh=new Float32Array(9),Ph=new Float32Array(4);function sa(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ch[r];if(s===void 0&&(s=new Float32Array(r),Ch[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ll(n,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function Sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function bb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),hn(e,i)}}function Mb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Nh.set(i),n.uniformMatrix3fv(this.addr,!1,Nh),hn(e,i)}}function Eb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(dn(e,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),hn(e,i)}}function Ab(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function Tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function Ib(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function Rb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function Db(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function Lb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function Nb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=e.isReversedDepthBuffer()?ad:sd,s=Cu):s=vp,e.setTexture2D(t||s,r)}function Pb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||xp,r)}function Fb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Sp,r)}function Ub(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||yp,r)}function Ob(n){switch(n){case 5126:return vb;case 35664:return yb;case 35665:return xb;case 35666:return Sb;case 35674:return bb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Ab;case 35667:case 35671:return wb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ib;case 5125:return Rb;case 36294:return Cb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ub}}function Bb(n,t){n.uniform1fv(this.addr,t)}function Vb(n,t){const e=sa(t,this.size,2);n.uniform2fv(this.addr,e)}function zb(n,t){const e=sa(t,this.size,3);n.uniform3fv(this.addr,e)}function Hb(n,t){const e=sa(t,this.size,4);n.uniform4fv(this.addr,e)}function kb(n,t){const e=sa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gb(n,t){const e=sa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wb(n,t){const e=sa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zb(n,t){n.uniform1iv(this.addr,t)}function Xb(n,t){n.uniform2iv(this.addr,t)}function Yb(n,t){n.uniform3iv(this.addr,t)}function qb(n,t){n.uniform4iv(this.addr,t)}function jb(n,t){n.uniform1uiv(this.addr,t)}function Kb(n,t){n.uniform2uiv(this.addr,t)}function Jb(n,t){n.uniform3uiv(this.addr,t)}function Qb(n,t){n.uniform4uiv(this.addr,t)}function $b(n,t,e){const i=this.cache,r=t.length,s=Ll(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cu:a=vp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function tM(n,t,e){const i=this.cache,r=t.length,s=Ll(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||xp,s[a])}function eM(n,t,e){const i=this.cache,r=t.length,s=Ll(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Sp,s[a])}function nM(n,t,e){const i=this.cache,r=t.length,s=Ll(e,r);dn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yp,s[a])}function iM(n){switch(n){case 5126:return Bb;case 35664:return Vb;case 35665:return zb;case 35666:return Hb;case 35674:return kb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return Zb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return jb;case 36294:return Kb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ob(e.type)}}class sM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iM(e.type)}}class aM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Fh(n,t){n.seq.push(t),n.map[t.id]=t}function oM(n,t,e){const i=n.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),a=bc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fh(e,c===void 0?new rM(o,n,t):new sM(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new aM(o),Fh(e,p)),e=p}}}class No{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);oM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Uh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const lM=37297;let cM=0;function uM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Oh=new se;function dM(n){xe._getMatrix(Oh,xe.workingColorSpace,n);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Xo:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+uM(n.getShaderSource(t),o)}else return s}function hM(n,t){const e=dM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fM={[Wf]:"Linear",[Zf]:"Reinhard",[Xf]:"Cineon",[Yf]:"ACESFilmic",[jf]:"AgX",[Kf]:"Neutral",[qf]:"Custom"};function pM(n,t){const e=fM[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new Y;function mM(){xe.getLuminanceCoefficients(Mo);const n=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function _M(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ya(n){return n!==""}function Vh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(n){return n.replace(yM,SM)}const xM=new Map;function SM(n,t){let e=oe[t];if(e===void 0){const i=xM.get(t);if(i!==void 0)e=oe[i],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Du(e)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(bM,MM)}function MM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const EM={[Io]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function AM(n){return EM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wM={[is]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function TM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":wM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IM={[qs]:"ENVMAP_MODE_REFRACTION"};function RM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CM={[Gf]:"ENVMAP_BLENDING_MULTIPLY",[x2]:"ENVMAP_BLENDING_MIX",[S2]:"ENVMAP_BLENDING_ADD"};function DM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CM[n.combine]||"ENVMAP_BLENDING_NONE"}function LM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function NM(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=AM(e),c=TM(e),d=RM(e),p=DM(e),f=LM(e),_=gM(e),v=_M(s),S=r.createProgram();let m,g,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ya).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ya).join(`
`),g.length>0&&(g+=`
`)):(m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),g=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?oe.tonemapping_pars_fragment:"",e.toneMapping!==zi?pM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,hM("linearToOutputTexel",e.outputColorSpace),mM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ya).join(`
`)),a=Du(a),a=Vh(a,e),a=zh(a,e),o=Du(o),o=Vh(o,e),o=zh(o,e),a=Hh(a),o=Hh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=E+m+a,u=E+g+o,h=Uh(r,r.VERTEX_SHADER,T),M=Uh(r,r.FRAGMENT_SHADER,u);r.attachShader(S,h),r.attachShader(S,M),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function I(C){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(S)||"",N=r.getShaderInfoLog(h)||"",L=r.getShaderInfoLog(M)||"",B=G.trim(),H=N.trim(),k=L.trim();let W=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,h,M);else{const it=Bh(r,h,"vertex"),rt=Bh(r,M,"fragment");be("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+it+`
`+rt)}else B!==""?ee("WebGLProgram: Program Info Log:",B):(H===""||k==="")&&(j=!1);j&&(C.diagnostics={runnable:W,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:g}})}r.deleteShader(h),r.deleteShader(M),y=new No(r,S),b=vM(r,S)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(S,lM)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cM++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=h,this.fragmentShader=M,this}let PM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new UM(t),e.set(t,i)),i}}class UM{constructor(t){this.id=PM++,this.code=t,this.usedTimes=0}}function OM(n,t,e,i,r,s){const a=new op,o=new FM,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,b,O,C,G){const N=C.fog,L=G.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||B,H),W=k&&k.mapping===Rl?k.image.height:null,j=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&ee("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const it=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,rt=it!==void 0?it.length:0;let at=0;L.morphAttributes.position!==void 0&&(at=1),L.morphAttributes.normal!==void 0&&(at=2),L.morphAttributes.color!==void 0&&(at=3);let Dt,pe,Re,$;if(j){const De=Ci[j];Dt=De.vertexShader,pe=De.fragmentShader}else Dt=y.vertexShader,pe=y.fragmentShader,o.update(y),Re=o.getVertexShaderID(y),$=o.getFragmentShaderID(y);const ut=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),ie=G.isInstancedMesh===!0,Zt=G.isBatchedMesh===!0,Jt=!!y.map,fn=!!y.matcap,ye=!!k,Ce=!!y.aoMap,ze=!!y.lightMap,le=!!y.bumpMap,$e=!!y.normalMap,P=!!y.displacementMap,an=!!y.emissiveMap,Ee=!!y.metalnessMap,Ge=!!y.roughnessMap,It=y.anisotropy>0,R=y.clearcoat>0,x=y.dispersion>0,V=y.iridescence>0,tt=y.sheen>0,nt=y.transmission>0,J=It&&!!y.anisotropyMap,Mt=R&&!!y.clearcoatMap,pt=R&&!!y.clearcoatNormalMap,Ft=R&&!!y.clearcoatRoughnessMap,Yt=V&&!!y.iridescenceMap,ot=V&&!!y.iridescenceThicknessMap,dt=tt&&!!y.sheenColorMap,Et=tt&&!!y.sheenRoughnessMap,wt=!!y.specularMap,xt=!!y.specularColorMap,ce=!!y.specularIntensityMap,U=nt&&!!y.transmissionMap,mt=nt&&!!y.thicknessMap,ht=!!y.gradientMap,bt=!!y.alphaMap,lt=y.alphaTest>0,K=!!y.alphaHash,At=!!y.extensions;let te=zi;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(te=n.toneMapping);const We={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Dt,fragmentShader:pe,defines:y.defines,customVertexShaderID:Re,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Zt,batchingColor:Zt&&G._colorsTexture!==null,instancing:ie,instancingColor:ie&&G.instanceColor!==null,instancingMorph:ie&&G.morphTexture!==null,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ks,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:fn,envMap:ye,envMapMode:ye&&k.mapping,envMapCubeUVHeight:W,aoMap:Ce,lightMap:ze,bumpMap:le,normalMap:$e,displacementMap:P,emissiveMap:an,normalMapObjectSpace:$e&&y.normalMapType===A2,normalMapTangentSpace:$e&&y.normalMapType===E2,metalnessMap:Ee,roughnessMap:Ge,anisotropy:It,anisotropyMap:J,clearcoat:R,clearcoatMap:Mt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ft,dispersion:x,iridescence:V,iridescenceMap:Yt,iridescenceThicknessMap:ot,sheen:tt,sheenColorMap:dt,sheenRoughnessMap:Et,specularMap:wt,specularColorMap:xt,specularIntensityMap:ce,transmission:nt,transmissionMap:U,thicknessMap:mt,gradientMap:ht,opaque:y.transparent===!1&&y.blending===zs&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:lt,alphaHash:K,combine:y.combine,mapUv:Jt&&v(y.map.channel),aoMapUv:Ce&&v(y.aoMap.channel),lightMapUv:ze&&v(y.lightMap.channel),bumpMapUv:le&&v(y.bumpMap.channel),normalMapUv:$e&&v(y.normalMap.channel),displacementMapUv:P&&v(y.displacementMap.channel),emissiveMapUv:an&&v(y.emissiveMap.channel),metalnessMapUv:Ee&&v(y.metalnessMap.channel),roughnessMapUv:Ge&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:Mt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(y.sheenRoughnessMap.channel),specularMapUv:wt&&v(y.specularMap.channel),specularColorMapUv:xt&&v(y.specularColorMap.channel),specularIntensityMapUv:ce&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:mt&&v(y.thicknessMap.channel),alphaMapUv:bt&&v(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($e||It),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!L.attributes.uv&&(Jt||bt),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&$e===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ft,skinning:G.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Pe,decodeVideoTextureEmissive:an&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===Pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)b.push(O),b.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(g(b,y),E(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function T(y){const b=_[y.type];let O;if(b){const C=Ci[b];O=cy.clone(C.uniforms)}else O=y.uniforms;return O}function u(y,b){let O=d.get(b);return O!==void 0?++O.usedTimes:(O=new NM(n,b,y,r),c.push(O),d.set(b,O)),O}function h(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function I(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:T,acquireProgram:u,releaseProgram:h,releaseShaderCache:M,programs:c,dispose:I}}function BM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function VM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Gh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function o(f,_,v,S,m,g){let E=n[t];return E===void 0?(E={id:f.id,object:f,geometry:_,material:v,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:g},n[t]=E):(E.id=f.id,E.object=f,E.geometry=_,E.material=v,E.materialVariant=a(f),E.groupOrder=S,E.renderOrder=f.renderOrder,E.z=m,E.group=g),t++,E}function l(f,_,v,S,m,g){const E=o(f,_,v,S,m,g);v.transmission>0?i.push(E):v.transparent===!0?r.push(E):e.push(E)}function c(f,_,v,S,m,g){const E=o(f,_,v,S,m,g);v.transmission>0?i.unshift(E):v.transparent===!0?r.unshift(E):e.unshift(E)}function d(f,_){e.length>1&&e.sort(f||VM),i.length>1&&i.sort(_||Gh),r.length>1&&r.sort(_||Gh)}function p(){for(let f=t,_=n.length;f<_;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:d}}function zM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wh,n.set(i,[a])):r>=s.length?(a=new Wh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function HM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Ae};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":e={color:new Ae,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[t.id]=e,e}}}function kM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let GM=0;function WM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ZM(n){const t=new HM,e=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new ln,a=new ln;function o(c){let d=0,p=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let _=0,v=0,S=0,m=0,g=0,E=0,T=0,u=0,h=0,M=0,I=0;c.sort(WM);for(let b=0,O=c.length;b<O;b++){const C=c[b],G=C.color,N=C.intensity,L=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===js?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=G.r*N,p+=G.g*N,f+=G.b*N;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],N);I++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,W=e.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=B,i.directionalShadowMatrix[_]=C.shadow.matrix,E++}i.directional[_]=H,_++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(G).multiplyScalar(N),H.distance=L,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[S]=H;const k=C.shadow;if(C.map&&(i.spotLightMap[h]=C.map,h++,k.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[S]=k.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=B,u++}S++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(G).multiplyScalar(N),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const k=C.shadow,W=e.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=C.shadow.matrix,T++}i.point[v]=H,v++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(N),H.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[g]=H,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==_||y.pointLength!==v||y.spotLength!==S||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==E||y.numPointShadows!==T||y.numSpotShadows!==u||y.numSpotMaps!==h||y.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=u+h-M,i.spotLightMap.length=h,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=I,y.directionalLength=_,y.pointLength=v,y.spotLength=S,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=E,y.numPointShadows=T,y.numSpotShadows=u,y.numSpotMaps=h,y.numLightProbes=I,i.version=GM++)}function l(c,d){let p=0,f=0,_=0,v=0,S=0;const m=d.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){const T=c[g];if(T.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),p++}else if(T.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(m),u.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),u.halfWidth.set(T.width*.5,0,0),u.halfHeight.set(0,T.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const u=i.point[f];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const u=i.hemi[S];u.direction.setFromMatrixPosition(T.matrixWorld),u.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Zh(n){const t=new ZM(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function XM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Zh(n),t.set(r,[o])):s>=a.length?(o=new Zh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
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
}`,jM=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],KM=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Xh=new ln,ma=new Y,Mc=new Y;function JM(n,t,e){let i=new dp;const r=new Ve,s=new Ve,a=new nn,o=new fy,l=new py,c={},d=e.maxTextureSize,p={[Nr]:Hn,[Hn]:Nr,[Kn]:Kn},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:YM,fragmentShader:qM}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new pr;v.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Jn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let g=this.type;this.render=function(M,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===e2&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Io);const b=n.getRenderTarget(),O=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(lr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=g!==this.type;N&&I.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=M.length;L<B;L++){const H=M[L],k=H.shadow;if(k===void 0){ee("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const W=k.getFrameExtents();r.multiply(W),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,k.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===va){if(H.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Hi(r.x,r.y,{format:js,type:dr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Pa(r.x,r.y,Ui),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=hr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n}else H.isPointLight?(k.map=new _p(r.x),k.map.depthTexture=new oy(r.x,Gi)):(k.map=new Hi(r.x,r.y),k.map.depthTexture=new Pa(r.x,r.y,Gi)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=hr,this.type===Io?(k.map.depthTexture.compareFunction=j?ad:sd,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n);k.camera.updateProjectionMatrix()}const it=k.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<it;rt++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(k.map),n.clear());const at=k.getViewport(rt);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),G.viewport(a)}if(H.isPointLight){const at=k.camera,Dt=k.matrix,pe=H.distance||at.far;pe!==at.far&&(at.far=pe,at.updateProjectionMatrix()),ma.setFromMatrixPosition(H.matrixWorld),at.position.copy(ma),Mc.copy(at.position),Mc.add(jM[rt]),at.up.copy(KM[rt]),at.lookAt(Mc),at.updateMatrixWorld(),Dt.makeTranslation(-ma.x,-ma.y,-ma.z),Xh.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Xh,at.coordinateSystem,at.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),u(I,y,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===va&&E(k,y),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(b,O,C)};function E(M,I){const y=t.update(S);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,_.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hi(r.x,r.y,{format:js,type:dr})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(I,null,y,f,S,null),_.uniforms.shadow_pass.value=M.mapPass.texture,_.uniforms.resolution.value=M.mapSize,_.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(I,null,y,_,S,null)}function T(M,I,y,b){let O=null;const C=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)O=C;else if(O=y.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const G=O.uuid,N=I.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let B=L[N];B===void 0&&(B=O.clone(),L[N]=B,I.addEventListener("dispose",h)),O=B}if(O.visible=I.visible,O.wireframe=I.wireframe,b===va?O.side=I.shadowSide!==null?I.shadowSide:I.side:O.side=I.shadowSide!==null?I.shadowSide:p[I.side],O.alphaMap=I.alphaMap,O.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,O.map=I.map,O.clipShadows=I.clipShadows,O.clippingPlanes=I.clippingPlanes,O.clipIntersection=I.clipIntersection,O.displacementMap=I.displacementMap,O.displacementScale=I.displacementScale,O.displacementBias=I.displacementBias,O.wireframeLinewidth=I.wireframeLinewidth,O.linewidth=I.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const G=n.properties.get(O);G.light=y}return O}function u(M,I,y,b,O){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&O===va)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const N=t.update(M),L=M.material;if(Array.isArray(L)){const B=N.groups;for(let H=0,k=B.length;H<k;H++){const W=B[H],j=L[W.materialIndex];if(j&&j.visible){const it=T(M,j,b,O);M.onBeforeShadow(n,M,I,y,N,it,W),n.renderBufferDirect(y,null,N,it,M,W),M.onAfterShadow(n,M,I,y,N,it,W)}}}else if(L.visible){const B=T(M,L,b,O);M.onBeforeShadow(n,M,I,y,N,B,null),n.renderBufferDirect(y,null,N,B,M,null),M.onAfterShadow(n,M,I,y,N,B,null)}}const G=M.children;for(let N=0,L=G.length;N<L;N++)u(G[N],I,y,b,O)}function h(M){M.target.removeEventListener("dispose",h);for(const y in c){const b=c[y],O=M.target.uuid;O in b&&(b[O].dispose(),delete b[O])}}}function QM(n,t){function e(){let U=!1;const mt=new nn;let ht=null;const bt=new nn(0,0,0,0);return{setMask:function(lt){ht!==lt&&!U&&(n.colorMask(lt,lt,lt,lt),ht=lt)},setLocked:function(lt){U=lt},setClear:function(lt,K,At,te,We){We===!0&&(lt*=te,K*=te,At*=te),mt.set(lt,K,At,te),bt.equals(mt)===!1&&(n.clearColor(lt,K,At,te),bt.copy(mt))},reset:function(){U=!1,ht=null,bt.set(-1,0,0,0)}}}function i(){let U=!1,mt=!1,ht=null,bt=null,lt=null;return{setReversed:function(K){if(mt!==K){const At=t.get("EXT_clip_control");K?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),mt=K;const te=lt;lt=null,this.setClear(te)}},getReversed:function(){return mt},setTest:function(K){K?ut(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(K){ht!==K&&!U&&(n.depthMask(K),ht=K)},setFunc:function(K){if(mt&&(K=F2[K]),bt!==K){switch(K){case kc:n.depthFunc(n.NEVER);break;case Gc:n.depthFunc(n.ALWAYS);break;case Wc:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Zc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case Yc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=K}},setLocked:function(K){U=K},setClear:function(K){lt!==K&&(lt=K,mt&&(K=1-K),n.clearDepth(K))},reset:function(){U=!1,ht=null,bt=null,lt=null,mt=!1}}}function r(){let U=!1,mt=null,ht=null,bt=null,lt=null,K=null,At=null,te=null,We=null;return{setTest:function(De){U||(De?ut(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(De){mt!==De&&!U&&(n.stencilMask(De),mt=De)},setFunc:function(De,qi,ji){(ht!==De||bt!==qi||lt!==ji)&&(n.stencilFunc(De,qi,ji),ht=De,bt=qi,lt=ji)},setOp:function(De,qi,ji){(K!==De||At!==qi||te!==ji)&&(n.stencilOp(De,qi,ji),K=De,At=qi,te=ji)},setLocked:function(De){U=De},setClear:function(De){We!==De&&(n.clearStencil(De),We=De)},reset:function(){U=!1,mt=null,ht=null,bt=null,lt=null,K=null,At=null,te=null,We=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},f=new WeakMap,_=[],v=null,S=!1,m=null,g=null,E=null,T=null,u=null,h=null,M=null,I=new Ae(0,0,0),y=0,b=!1,O=null,C=null,G=null,N=null,L=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=k>=2);let j=null,it={};const rt=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),Dt=new nn().fromArray(rt),pe=new nn().fromArray(at);function Re(U,mt,ht,bt){const lt=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<ht;At++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(mt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return K}const $={};$[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),a.setFunc(Ys),le(!1),$e(Qd),ut(n.CULL_FACE),Ce(lr);function ut(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function ft(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ie(U,mt){return p[U]!==mt?(n.bindFramebuffer(U,mt),p[U]=mt,U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=mt),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Zt(U,mt){let ht=_,bt=!1;if(U){ht=f.get(mt),ht===void 0&&(ht=[],f.set(mt,ht));const lt=U.textures;if(ht.length!==lt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let K=0,At=lt.length;K<At;K++)ht[K]=n.COLOR_ATTACHMENT0+K;ht.length=lt.length,bt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,bt=!0);bt&&n.drawBuffers(ht)}function Jt(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const fn={[Kr]:n.FUNC_ADD,[i2]:n.FUNC_SUBTRACT,[r2]:n.FUNC_REVERSE_SUBTRACT};fn[s2]=n.MIN,fn[a2]=n.MAX;const ye={[o2]:n.ZERO,[l2]:n.ONE,[c2]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[m2]:n.SRC_ALPHA_SATURATE,[f2]:n.DST_COLOR,[d2]:n.DST_ALPHA,[u2]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[p2]:n.ONE_MINUS_DST_COLOR,[h2]:n.ONE_MINUS_DST_ALPHA,[g2]:n.CONSTANT_COLOR,[_2]:n.ONE_MINUS_CONSTANT_COLOR,[v2]:n.CONSTANT_ALPHA,[y2]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(U,mt,ht,bt,lt,K,At,te,We,De){if(U===lr){S===!0&&(ft(n.BLEND),S=!1);return}if(S===!1&&(ut(n.BLEND),S=!0),U!==n2){if(U!==m||De!==b){if((g!==Kr||u!==Kr)&&(n.blendEquation(n.FUNC_ADD),g=Kr,u=Kr),De)switch(U){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $d:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:be("WebGLState: Invalid blending: ",U);break}else switch(U){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $d:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case th:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",U);break}E=null,T=null,h=null,M=null,I.set(0,0,0),y=0,m=U,b=De}return}lt=lt||mt,K=K||ht,At=At||bt,(mt!==g||lt!==u)&&(n.blendEquationSeparate(fn[mt],fn[lt]),g=mt,u=lt),(ht!==E||bt!==T||K!==h||At!==M)&&(n.blendFuncSeparate(ye[ht],ye[bt],ye[K],ye[At]),E=ht,T=bt,h=K,M=At),(te.equals(I)===!1||We!==y)&&(n.blendColor(te.r,te.g,te.b,We),I.copy(te),y=We),m=U,b=!1}function ze(U,mt){U.side===Kn?ft(n.CULL_FACE):ut(n.CULL_FACE);let ht=U.side===Hn;mt&&(ht=!ht),le(ht),U.blending===zs&&U.transparent===!1?Ce(lr):Ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const bt=U.stencilWrite;o.setTest(bt),bt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),an(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(U){O!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),O=U)}function $e(U){U!==$v?(ut(n.CULL_FACE),U!==C&&(U===Qd?n.cullFace(n.BACK):U===t2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),C=U}function P(U){U!==G&&(H&&n.lineWidth(U),G=U)}function an(U,mt,ht){U?(ut(n.POLYGON_OFFSET_FILL),(N!==mt||L!==ht)&&(N=mt,L=ht,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,ht))):ft(n.POLYGON_OFFSET_FILL)}function Ee(U){U?ut(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=n.TEXTURE0+B-1),j!==U&&(n.activeTexture(U),j=U)}function It(U,mt,ht){ht===void 0&&(j===null?ht=n.TEXTURE0+B-1:ht=j);let bt=it[ht];bt===void 0&&(bt={type:void 0,texture:void 0},it[ht]=bt),(bt.type!==U||bt.texture!==mt)&&(j!==ht&&(n.activeTexture(ht),j=ht),n.bindTexture(U,mt||$[U]),bt.type=U,bt.texture=mt)}function R(){const U=it[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){be("WebGLState:",U)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(U){be("WebGLState:",U)}}function tt(){try{n.texSubImage2D(...arguments)}catch(U){be("WebGLState:",U)}}function nt(){try{n.texSubImage3D(...arguments)}catch(U){be("WebGLState:",U)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(U){be("WebGLState:",U)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){be("WebGLState:",U)}}function pt(){try{n.texStorage2D(...arguments)}catch(U){be("WebGLState:",U)}}function Ft(){try{n.texStorage3D(...arguments)}catch(U){be("WebGLState:",U)}}function Yt(){try{n.texImage2D(...arguments)}catch(U){be("WebGLState:",U)}}function ot(){try{n.texImage3D(...arguments)}catch(U){be("WebGLState:",U)}}function dt(U){Dt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Dt.copy(U))}function Et(U){pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function wt(U,mt){let ht=c.get(mt);ht===void 0&&(ht=new WeakMap,c.set(mt,ht));let bt=ht.get(U);bt===void 0&&(bt=n.getUniformBlockIndex(mt,U.name),ht.set(U,bt))}function xt(U,mt){const bt=c.get(mt).get(U);l.get(mt)!==bt&&(n.uniformBlockBinding(mt,bt,U.__bindingPointIndex),l.set(mt,bt))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,it={},p={},f=new WeakMap,_=[],v=null,S=!1,m=null,g=null,E=null,T=null,u=null,h=null,M=null,I=new Ae(0,0,0),y=0,b=!1,O=null,C=null,G=null,N=null,L=null,Dt.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:ft,bindFramebuffer:ie,drawBuffers:Zt,useProgram:Jt,setBlending:Ce,setMaterial:ze,setFlipSided:le,setCullFace:$e,setLineWidth:P,setPolygonOffset:an,setScissorTest:Ee,activeTexture:Ge,bindTexture:It,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:V,texImage2D:Yt,texImage3D:ot,updateUBOMapping:wt,uniformBlockBinding:xt,texStorage2D:pt,texStorage3D:Ft,texSubImage2D:tt,texSubImage3D:nt,compressedTexSubImage2D:J,compressedTexSubImage3D:Mt,scissor:dt,viewport:Et,reset:ce}}function $M(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return _?new OffscreenCanvas(R,x):qo("canvas")}function S(R,x,V){let tt=1;const nt=It(R);if((nt.width>V||nt.height>V)&&(tt=V/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(tt*nt.width),Mt=Math.floor(tt*nt.height);p===void 0&&(p=v(J,Mt));const pt=x?v(J,Mt):p;return pt.width=J,pt.height=Mt,pt.getContext("2d").drawImage(R,0,0,J,Mt),ee("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Mt+")."),pt}else return"data"in R&&ee("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,x,V,tt,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=x;if(x===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),x===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),x===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),x===n.RGBA){const Mt=nt?Xo:xe.getTransfer(tt);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Mt===Pe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function u(R,x){let V;return R?x===null||x===Gi||x===Na?V=n.DEPTH24_STENCIL8:x===Ui?V=n.DEPTH32F_STENCIL8:x===La&&(V=n.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===Na?V=n.DEPTH_COMPONENT24:x===Ui?V=n.DEPTH_COMPONENT32F:x===La&&(V=n.DEPTH_COMPONENT16),V}function h(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function M(R){const x=R.target;x.removeEventListener("dispose",M),y(x),x.isVideoTexture&&d.delete(x)}function I(R){const x=R.target;x.removeEventListener("dispose",I),O(x)}function y(R){const x=i.get(R);if(x.__webglInit===void 0)return;const V=R.source,tt=f.get(V);if(tt){const nt=tt[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(R),Object.keys(tt).length===0&&f.delete(V)}i.remove(R)}function b(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const V=R.source,tt=f.get(V);delete tt[x.__cacheKey],a.memory.textures--}function O(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let nt=0;nt<x.__webglFramebuffer[tt].length;nt++)n.deleteFramebuffer(x.__webglFramebuffer[tt][nt]);else n.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[tt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=R.textures;for(let tt=0,nt=V.length;tt<nt;tt++){const J=i.get(V[tt]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(V[tt])}i.remove(R)}let C=0;function G(){C=0}function N(){const R=C;return R>=r.maxTextures&&ee("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function L(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function B(R,x){const V=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const tt=R.image;if(tt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,R,x);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function H(R,x){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){$(V,R,x);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function k(R,x){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){$(V,R,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function W(R,x){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){ut(V,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const j={[jc]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},it={[_n]:n.NEAREST,[b2]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},rt={[w2]:n.NEVER,[D2]:n.ALWAYS,[T2]:n.LESS,[sd]:n.LEQUAL,[I2]:n.EQUAL,[ad]:n.GEQUAL,[R2]:n.GREATER,[C2]:n.NOTEQUAL};function at(R,x){if(x.type===Ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Yl||x.magFilter===to||x.magFilter===Qr||x.minFilter===Sn||x.minFilter===Yl||x.minFilter===to||x.minFilter===Qr)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,j[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,j[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,j[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,it[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==to&&x.minFilter!==Qr||x.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Dt(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",M));const tt=x.source;let nt=f.get(tt);nt===void 0&&(nt={},f.set(tt,nt));const J=L(x);if(J!==R.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[J].usedTimes++;const Mt=nt[R.__cacheKey];Mt!==void 0&&(nt[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(x)),R.__cacheKey=J,R.__webglTexture=nt[J].texture}return V}function pe(R,x,V){return Math.floor(Math.floor(R/V)/x)}function Re(R,x,V,tt){const J=R.updateRanges;if(J.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,V,tt,x.data);else{J.sort((ot,dt)=>ot.start-dt.start);let Mt=0;for(let ot=1;ot<J.length;ot++){const dt=J[Mt],Et=J[ot],wt=dt.start+dt.count,xt=pe(Et.start,x.width,4),ce=pe(dt.start,x.width,4);Et.start<=wt+1&&xt===ce&&pe(Et.start+Et.count-1,x.width,4)===xt?dt.count=Math.max(dt.count,Et.start+Et.count-dt.start):(++Mt,J[Mt]=Et)}J.length=Mt+1;const pt=n.getParameter(n.UNPACK_ROW_LENGTH),Ft=n.getParameter(n.UNPACK_SKIP_PIXELS),Yt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ot=0,dt=J.length;ot<dt;ot++){const Et=J[ot],wt=Math.floor(Et.start/4),xt=Math.ceil(Et.count/4),ce=wt%x.width,U=Math.floor(wt/x.width),mt=xt,ht=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,ce,U,mt,ht,V,tt,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,Yt)}}function $(R,x,V){let tt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=n.TEXTURE_3D);const nt=Dt(R,x),J=x.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+V);const Mt=i.get(J);if(J.version!==Mt.__version||nt===!0){e.activeTexture(n.TEXTURE0+V);const pt=xe.getPrimaries(xe.workingColorSpace),Ft=x.colorSpace===Dr?null:xe.getPrimaries(x.colorSpace),Yt=x.colorSpace===Dr||pt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ot=S(x.image,!1,r.maxTextureSize);ot=Ge(x,ot);const dt=s.convert(x.format,x.colorSpace),Et=s.convert(x.type);let wt=T(x.internalFormat,dt,Et,x.colorSpace,x.isVideoTexture);at(tt,x);let xt;const ce=x.mipmaps,U=x.isVideoTexture!==!0,mt=Mt.__version===void 0||nt===!0,ht=J.dataReady,bt=h(x,ot);if(x.isDepthTexture)wt=u(x.format===$r,x.type),mt&&(U?e.texStorage2D(n.TEXTURE_2D,1,wt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,dt,Et,null));else if(x.isDataTexture)if(ce.length>0){U&&mt&&e.texStorage2D(n.TEXTURE_2D,bt,wt,ce[0].width,ce[0].height);for(let lt=0,K=ce.length;lt<K;lt++)xt=ce[lt],U?ht&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,xt.width,xt.height,dt,Et,xt.data):e.texImage2D(n.TEXTURE_2D,lt,wt,xt.width,xt.height,0,dt,Et,xt.data);x.generateMipmaps=!1}else U?(mt&&e.texStorage2D(n.TEXTURE_2D,bt,wt,ot.width,ot.height),ht&&Re(x,ot,dt,Et)):e.texImage2D(n.TEXTURE_2D,0,wt,ot.width,ot.height,0,dt,Et,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,wt,ce[0].width,ce[0].height,ot.depth);for(let lt=0,K=ce.length;lt<K;lt++)if(xt=ce[lt],x.format!==Si)if(dt!==null)if(U){if(ht)if(x.layerUpdates.size>0){const At=Mh(xt.width,xt.height,x.format,x.type);for(const te of x.layerUpdates){const We=xt.data.subarray(te*At/xt.data.BYTES_PER_ELEMENT,(te+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,te,xt.width,xt.height,1,dt,We)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ot.depth,dt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,wt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ot.depth,dt,Et,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,wt,xt.width,xt.height,ot.depth,0,dt,Et,xt.data)}else{U&&mt&&e.texStorage2D(n.TEXTURE_2D,bt,wt,ce[0].width,ce[0].height);for(let lt=0,K=ce.length;lt<K;lt++)xt=ce[lt],x.format!==Si?dt!==null?U?ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,xt.width,xt.height,dt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,wt,xt.width,xt.height,0,xt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ht&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,xt.width,xt.height,dt,Et,xt.data):e.texImage2D(n.TEXTURE_2D,lt,wt,xt.width,xt.height,0,dt,Et,xt.data)}else if(x.isDataArrayTexture)if(U){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,wt,ot.width,ot.height,ot.depth),ht)if(x.layerUpdates.size>0){const lt=Mh(ot.width,ot.height,x.format,x.type);for(const K of x.layerUpdates){const At=ot.data.subarray(K*lt/ot.data.BYTES_PER_ELEMENT,(K+1)*lt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ot.width,ot.height,1,dt,Et,At)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,dt,Et,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,ot.width,ot.height,ot.depth,0,dt,Et,ot.data);else if(x.isData3DTexture)U?(mt&&e.texStorage3D(n.TEXTURE_3D,bt,wt,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,dt,Et,ot.data)):e.texImage3D(n.TEXTURE_3D,0,wt,ot.width,ot.height,ot.depth,0,dt,Et,ot.data);else if(x.isFramebufferTexture){if(mt)if(U)e.texStorage2D(n.TEXTURE_2D,bt,wt,ot.width,ot.height);else{let lt=ot.width,K=ot.height;for(let At=0;At<bt;At++)e.texImage2D(n.TEXTURE_2D,At,wt,lt,K,0,dt,Et,null),lt>>=1,K>>=1}}else if(ce.length>0){if(U&&mt){const lt=It(ce[0]);e.texStorage2D(n.TEXTURE_2D,bt,wt,lt.width,lt.height)}for(let lt=0,K=ce.length;lt<K;lt++)xt=ce[lt],U?ht&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,dt,Et,xt):e.texImage2D(n.TEXTURE_2D,lt,wt,dt,Et,xt);x.generateMipmaps=!1}else if(U){if(mt){const lt=It(ot);e.texStorage2D(n.TEXTURE_2D,bt,wt,lt.width,lt.height)}ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Et,ot)}else e.texImage2D(n.TEXTURE_2D,0,wt,dt,Et,ot);m(x)&&g(tt),Mt.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ut(R,x,V){if(x.image.length!==6)return;const tt=Dt(R,x),nt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const J=i.get(nt);if(nt.version!==J.__version||tt===!0){e.activeTexture(n.TEXTURE0+V);const Mt=xe.getPrimaries(xe.workingColorSpace),pt=x.colorSpace===Dr?null:xe.getPrimaries(x.colorSpace),Ft=x.colorSpace===Dr||Mt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Yt&&!ot?dt[K]=S(x.image[K],!0,r.maxCubemapSize):dt[K]=ot?x.image[K].image:x.image[K],dt[K]=Ge(x,dt[K]);const Et=dt[0],wt=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),ce=T(x.internalFormat,wt,xt,x.colorSpace),U=x.isVideoTexture!==!0,mt=J.__version===void 0||tt===!0,ht=nt.dataReady;let bt=h(x,Et);at(n.TEXTURE_CUBE_MAP,x);let lt;if(Yt){U&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ce,Et.width,Et.height);for(let K=0;K<6;K++){lt=dt[K].mipmaps;for(let At=0;At<lt.length;At++){const te=lt[At];x.format!==Si?wt!==null?U?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,te.width,te.height,wt,te.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,ce,te.width,te.height,0,te.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,te.width,te.height,wt,xt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,ce,te.width,te.height,0,wt,xt,te.data)}}}else{if(lt=x.mipmaps,U&&mt){lt.length>0&&bt++;const K=It(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ce,K.width,K.height)}for(let K=0;K<6;K++)if(ot){U?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,wt,xt,dt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ce,dt[K].width,dt[K].height,0,wt,xt,dt[K].data);for(let At=0;At<lt.length;At++){const We=lt[At].image[K].image;U?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,We.width,We.height,wt,xt,We.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,ce,We.width,We.height,0,wt,xt,We.data)}}else{U?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,xt,dt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ce,wt,xt,dt[K]);for(let At=0;At<lt.length;At++){const te=lt[At];U?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,wt,xt,te.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,ce,wt,xt,te.image[K])}}}m(x)&&g(n.TEXTURE_CUBE_MAP),J.__version=nt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ft(R,x,V,tt,nt,J){const Mt=s.convert(V.format,V.colorSpace),pt=s.convert(V.type),Ft=T(V.internalFormat,Mt,pt,V.colorSpace),Yt=i.get(x),ot=i.get(V);if(ot.__renderTarget=x,!Yt.__hasExternalTextures){const dt=Math.max(1,x.width>>J),Et=Math.max(1,x.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Ft,dt,Et,x.depth,0,Mt,pt,null):e.texImage2D(nt,J,Ft,dt,Et,0,Mt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),an(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,nt,ot.__webglTexture,0,P(x)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,nt,ot.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(R,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const tt=x.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,J=u(x.stencilBuffer,nt),Mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;an(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),J,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,R)}else{const tt=x.textures;for(let nt=0;nt<tt.length;nt++){const J=tt[nt],Mt=s.convert(J.format,J.colorSpace),pt=s.convert(J.type),Ft=T(J.internalFormat,Mt,pt,J.colorSpace);an(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),Ft,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),Ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Zt(R,x,V){const tt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(x.depthTexture);if(nt.__renderTarget=x,(!nt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,x.depthTexture.addEventListener("dispose",M)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),at(n.TEXTURE_CUBE_MAP,x.depthTexture);const Yt=s.convert(x.depthTexture.format),ot=s.convert(x.depthTexture.type);let dt;x.depthTexture.format===hr?dt=n.DEPTH_COMPONENT24:x.depthTexture.format===$r&&(dt=n.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,dt,x.width,x.height,0,Yt,ot,null)}}else B(x.depthTexture,0);const J=nt.__webglTexture,Mt=P(x),pt=tt?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Ft=x.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===hr)an(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ft,pt,J,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Ft,pt,J,0);else if(x.depthTexture.format===$r)an(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ft,pt,J,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Ft,pt,J,0);else throw new Error("Unknown depthTexture format")}function Jt(R){const x=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=tt}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let tt=0;tt<6;tt++)Zt(x.__webglFramebuffer[tt],R,tt);else{const tt=R.texture.mipmaps;tt&&tt.length>0?Zt(x.__webglFramebuffer[0],R,0):Zt(x.__webglFramebuffer,R,0)}else if(V){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=n.createRenderbuffer(),ie(x.__webglDepthbuffer[tt],R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else{const tt=R.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ie(x.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function fn(R,x,V){const tt=i.get(R);x!==void 0&&ft(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Jt(R)}function ye(R){const x=R.texture,V=i.get(R),tt=i.get(x);R.addEventListener("dispose",I);const nt=R.textures,J=R.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=x.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let Ft=0;Ft<x.mipmaps.length;Ft++)V.__webglFramebuffer[pt][Ft]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let pt=0,Ft=nt.length;pt<Ft;pt++){const Yt=i.get(nt[pt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&an(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const Ft=nt[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const Yt=s.convert(Ft.format,Ft.colorSpace),ot=s.convert(Ft.type),dt=T(Ft.internalFormat,Yt,ot,Ft.colorSpace,R.isXRRenderTarget===!0),Et=P(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,dt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),at(n.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)ft(V.__webglFramebuffer[pt][Ft],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft);else ft(V.__webglFramebuffer[pt],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(x)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let pt=0,Ft=nt.length;pt<Ft;pt++){const Yt=nt[pt],ot=i.get(Yt);let dt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,ot.__webglTexture),at(dt,Yt),ft(V.__webglFramebuffer,R,Yt,n.COLOR_ATTACHMENT0+pt,dt,0),m(Yt)&&g(dt)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,tt.__webglTexture),at(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)ft(V.__webglFramebuffer[Ft],R,x,n.COLOR_ATTACHMENT0,pt,Ft);else ft(V.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,pt,0);m(x)&&g(pt),e.unbindTexture()}R.depthBuffer&&Jt(R)}function Ce(R){const x=R.textures;for(let V=0,tt=x.length;V<tt;V++){const nt=x[V];if(m(nt)){const J=E(R),Mt=i.get(nt).__webglTexture;e.bindTexture(J,Mt),g(J),e.unbindTexture()}}}const ze=[],le=[];function $e(R){if(R.samples>0){if(an(R)===!1){const x=R.textures,V=R.width,tt=R.height;let nt=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(R),pt=x.length>1;if(pt)for(let Yt=0;Yt<x.length;Yt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Ft=R.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Yt=0;Yt<x.length;Yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Yt]);const ot=i.get(x[Yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,V,tt,0,0,V,tt,nt,n.NEAREST),l===!0&&(ze.length=0,le.length=0,ze.push(n.COLOR_ATTACHMENT0+Yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(J),le.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Yt=0;Yt<x.length;Yt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Yt]);const ot=i.get(x[Yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Yt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(R){return Math.min(r.maxSamples,R.samples)}function an(R){const x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(R){const x=a.render.frame;d.get(R)!==x&&(d.set(R,x),R.update())}function Ge(R,x){const V=R.colorSpace,tt=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Ks&&V!==Dr&&(xe.getTransfer(V)===Pe?(tt!==Si||nt!==oi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",V)),x}function It(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=fn,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tE(n,t){function e(i,r=Dr){let s;const a=xe.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===td)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ed)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ep)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qf)return n.BYTE;if(i===$f)return n.SHORT;if(i===La)return n.UNSIGNED_SHORT;if(i===$u)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Ui)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===np)return n.ALPHA;if(i===ip)return n.RGB;if(i===Si)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===rp)return n.RED;if(i===nd)return n.RED_INTEGER;if(i===js)return n.RG;if(i===id)return n.RG_INTEGER;if(i===rd)return n.RGBA_INTEGER;if(i===Ro||i===Co||i===Do||i===Lo)if(a===Pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===Qc||i===$c||i===tu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===nu||i===iu||i===ru||i===su||i===au||i===ou)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eu||i===nu)return a===Pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===iu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ru)return s.COMPRESSED_R11_EAC;if(i===su)return s.COMPRESSED_SIGNED_R11_EAC;if(i===au)return s.COMPRESSED_RG11_EAC;if(i===ou)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===yu||i===xu||i===Su)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Su)return a===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===Mu||i===Eu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===bu)return a===Pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Au||i===wu||i===Tu||i===Iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
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

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new fp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:eE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jn(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends ia{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,_=null,v=null;const S=typeof XRWebGLBinding<"u",m=new iE,g={},E=e.getContextAttributes();let T=null,u=null;const h=[],M=[],I=new Ve;let y=null;const b=new yi;b.viewport=new nn;const O=new yi;O.viewport=new nn;const C=[b,O],G=new gy;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=h[$];return ut===void 0&&(ut=new ec,h[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=h[$];return ut===void 0&&(ut=new ec,h[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=h[$];return ut===void 0&&(ut=new ec,h[$]=ut),ut.getHandSpace()};function B($){const ut=M.indexOf($.inputSource);if(ut===-1)return;const ft=h[ut];ft!==void 0&&(ft.update($.inputSource,$.frame,c||a),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let $=0;$<h.length;$++){const ut=M[$];ut!==null&&(M[$]=null,h[$].disconnect(ut))}N=null,L=null,m.reset();for(const $ in g)delete g[$];t.setRenderTarget(T),_=null,f=null,p=null,r=null,u=null,Re.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,ie=null,Zt=null;E.depth&&(Zt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=E.stencil?$r:hr,ie=E.stencil?Na:Gi);const Jt={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Jt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Hi(f.textureWidth,f.textureHeight,{format:Si,type:oi,depthTexture:new Pa(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Hi(_.framebufferWidth,_.framebufferHeight,{format:Si,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let ut=0;ut<$.removed.length;ut++){const ft=$.removed[ut],ie=M.indexOf(ft);ie>=0&&(M[ie]=null,h[ie].disconnect(ft))}for(let ut=0;ut<$.added.length;ut++){const ft=$.added[ut];let ie=M.indexOf(ft);if(ie===-1){for(let Jt=0;Jt<h.length;Jt++)if(Jt>=M.length){M.push(ft),ie=Jt;break}else if(M[Jt]===null){M[Jt]=ft,ie=Jt;break}if(ie===-1)break}const Zt=h[ie];Zt&&Zt.connect(ft)}}const W=new Y,j=new Y;function it($,ut,ft){W.setFromMatrixPosition(ut.matrixWorld),j.setFromMatrixPosition(ft.matrixWorld);const ie=W.distanceTo(j),Zt=ut.projectionMatrix.elements,Jt=ft.projectionMatrix.elements,fn=Zt[14]/(Zt[10]-1),ye=Zt[14]/(Zt[10]+1),Ce=(Zt[9]+1)/Zt[5],ze=(Zt[9]-1)/Zt[5],le=(Zt[8]-1)/Zt[0],$e=(Jt[8]+1)/Jt[0],P=fn*le,an=fn*$e,Ee=ie/(-le+$e),Ge=Ee*-le;if(ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Zt[10]===-1)$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const It=fn+Ee,R=ye+Ee,x=P-Ge,V=an+(ie-Ge),tt=Ce*ye/R*It,nt=ze*ye/R*It;$.projectionMatrix.makePerspective(x,V,tt,nt,It,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ut=$.near,ft=$.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),G.near=O.near=b.near=ut,G.far=O.far=b.far=ft,(N!==G.near||L!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,L=G.far),G.layers.mask=$.layers.mask|6,b.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;const ie=$.parent,Zt=G.cameras;rt(G,ie);for(let Jt=0;Jt<Zt.length;Jt++)rt(Zt[Jt],ie);Zt.length===2?it(G,b,O):G.projectionMatrix.copy(b.projectionMatrix),at($,G,ie)};function at($,ut,ft){ft===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ru*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function($){return g[$]};let Dt=null;function pe($,ut){if(d=ut.getViewerPose(c||a),v=ut,d!==null){const ft=d.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let ie=!1;ft.length!==G.cameras.length&&(G.cameras.length=0,ie=!0);for(let ye=0;ye<ft.length;ye++){const Ce=ft[ye];let ze=null;if(_!==null)ze=_.getViewport(Ce);else{const $e=p.getViewSubImage(f,Ce);ze=$e.viewport,ye===0&&(t.setRenderTargetTextures(u,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(u))}let le=C[ye];le===void 0&&(le=new yi,le.layers.enable(ye),le.viewport=new nn,C[ye]=le),le.matrix.fromArray(Ce.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ce.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ze.x,ze.y,ze.width,ze.height),ye===0&&(G.matrix.copy(le.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ie===!0&&G.cameras.push(le)}const Zt=r.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const ye=p.getDepthInformation(ft[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,r.renderState)}if(Zt&&Zt.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let ye=0;ye<ft.length;ye++){const Ce=ft[ye].camera;if(Ce){let ze=g[Ce];ze||(ze=new fp,g[Ce]=ze);const le=p.getCameraImage(Ce);ze.sourceTexture=le}}}}for(let ft=0;ft<h.length;ft++){const ie=M[ft],Zt=h[ft];ie!==null&&Zt!==void 0&&Zt.update(ie,ut,c||a)}Dt&&Dt($,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),v=null}const Re=new gp;Re.setAnimationLoop(pe),this.setAnimationLoop=function($){Dt=$},this.dispose=function(){}}}const Xr=new fr,sE=new ln;function aE(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,pp(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,E,T,u){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),p(m,g)):g.isMeshPhongMaterial?(s(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&_(m,g,u)):g.isMeshMatcapMaterial?(s(m,g),v(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),S(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,E,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const E=t.get(g),T=E.envMap,u=E.envMapRotation;T&&(m.envMap.value=T,Xr.copy(u),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(Xr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,E,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,E){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function S(m,g){const E=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oE(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const u=T.program;i.uniformBlockBinding(E,u)}function c(E,T){let u=r[E.id];u===void 0&&(v(E),u=d(E),r[E.id]=u,E.addEventListener("dispose",m));const h=T.program;i.updateUBOMapping(E,h);const M=t.render.frame;s[E.id]!==M&&(f(E),s[E.id]=M)}function d(E){const T=p();E.__bindingPointIndex=T;const u=n.createBuffer(),h=E.__size,M=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,h,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,u),u}function p(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],u=E.uniforms,h=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,I=u.length;M<I;M++){const y=Array.isArray(u[M])?u[M]:[u[M]];for(let b=0,O=y.length;b<O;b++){const C=y[b];if(_(C,M,b,h)===!0){const G=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let B=0;B<N.length;B++){const H=N[B],k=S(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+L,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(E,T,u,h){const M=E.value,I=T+"_"+u;if(h[I]===void 0)return typeof M=="number"||typeof M=="boolean"?h[I]=M:h[I]=M.clone(),!0;{const y=h[I];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return h[I]=M,!0}else if(y.equals(M)===!1)return y.copy(M),!0}return!1}function v(E){const T=E.uniforms;let u=0;const h=16;for(let I=0,y=T.length;I<y;I++){const b=Array.isArray(T[I])?T[I]:[T[I]];for(let O=0,C=b.length;O<C;O++){const G=b[O],N=Array.isArray(G.value)?G.value:[G.value];for(let L=0,B=N.length;L<B;L++){const H=N[L],k=S(H),W=u%h,j=W%k.boundary,it=W+j;u+=j,it!==0&&h-it<k.storage&&(u+=h-it),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=u,u+=k.storage}}}const M=u%h;return M>0&&(u+=h-M),E.__size=u,E.__cache={},this}function S(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const u=a.indexOf(T.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function g(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}const lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function cE(){return wi===null&&(wi=new iy(lE,16,16,js,dr),wi.name="DFG_LUT",wi.minFilter=Sn,wi.magFilter=Sn,wi.wrapS=or,wi.wrapT=or,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class uE{constructor(t={}){const{canvas:e=N2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:_=oi}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=_,m=new Set([rd,id,nd]),g=new Set([oi,Gi,La,Na,td,ed]),E=new Uint32Array(4),T=new Int32Array(4);let u=null,h=null;const M=[],I=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=ii;let C=0,G=0,N=null,L=-1,B=null;const H=new nn,k=new nn;let W=null;const j=new Ae(0);let it=0,rt=e.width,at=e.height,Dt=1,pe=null,Re=null;const $=new nn(0,0,rt,at),ut=new nn(0,0,rt,at);let ft=!1;const ie=new dp;let Zt=!1,Jt=!1;const fn=new ln,ye=new Y,Ce=new nn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function $e(){return N===null?Dt:1}let P=i;function an(w,z){return e.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qu}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",We,!1),P===null){const z="webgl2";if(P=an(z,w),P===null)throw an(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw be("WebGLRenderer: "+w.message),w}let Ee,Ge,It,R,x,V,tt,nt,J,Mt,pt,Ft,Yt,ot,dt,Et,wt,xt,ce,U,mt,ht,bt;function lt(){Ee=new ub(P),Ee.init(),mt=new tE(P,Ee),Ge=new nb(P,Ee,t,mt),It=new QM(P,Ee),Ge.reversedDepthBuffer&&f&&It.buffers.depth.setReversed(!0),R=new fb(P),x=new BM,V=new $M(P,Ee,It,x,Ge,mt,R),tt=new cb(b),nt=new vy(P),ht=new tb(P,nt),J=new db(P,nt,R,ht),Mt=new mb(P,J,nt,ht,R),xt=new pb(P,Ge,V),dt=new ib(x),pt=new OM(b,tt,Ee,Ge,ht,dt),Ft=new aE(b,x),Yt=new zM,ot=new XM(Ee),wt=new $S(b,tt,It,Mt,v,l),Et=new JM(b,Mt,Ge),bt=new oE(P,R,Ge,It),ce=new eb(P,Ee,R),U=new hb(P,Ee,R),R.programs=pt.programs,b.capabilities=Ge,b.extensions=Ee,b.properties=x,b.renderLists=Yt,b.shadowMap=Et,b.state=It,b.info=R}lt(),S!==oi&&(y=new _b(S,e.width,e.height,r,s));const K=new rE(b,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(w){w!==void 0&&(Dt=w,this.setSize(rt,at,!1))},this.getSize=function(w){return w.set(rt,at)},this.setSize=function(w,z,q=!0){if(K.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=w,at=z,e.width=Math.floor(w*Dt),e.height=Math.floor(z*Dt),q===!0&&(e.style.width=w+"px",e.style.height=z+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(rt*Dt,at*Dt).floor()},this.setDrawingBufferSize=function(w,z,q){rt=w,at=z,Dt=q,e.width=Math.floor(w*q),e.height=Math.floor(z*q),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(S===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,z,q,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,z,q,X),It.viewport(H.copy($).multiplyScalar(Dt).round())},this.getScissor=function(w){return w.copy(ut)},this.setScissor=function(w,z,q,X){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,z,q,X),It.scissor(k.copy(ut).multiplyScalar(Dt).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){It.setScissorTest(ft=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){Re=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,q=!0){let X=0;if(w){let Z=!1;if(N!==null){const vt=N.texture.format;Z=m.has(vt)}if(Z){const vt=N.texture.type,St=g.has(vt),yt=wt.getClearColor(),Tt=wt.getClearAlpha(),Nt=yt.r,re=yt.g,ue=yt.b;St?(E[0]=Nt,E[1]=re,E[2]=ue,E[3]=Tt,P.clearBufferuiv(P.COLOR,0,E)):(T[0]=Nt,T[1]=re,T[2]=ue,T[3]=Tt,P.clearBufferiv(P.COLOR,0,T))}else X|=P.COLOR_BUFFER_BIT}z&&(X|=P.DEPTH_BUFFER_BIT),q&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",We,!1),wt.dispose(),Yt.dispose(),ot.dispose(),x.dispose(),tt.dispose(),Mt.dispose(),ht.dispose(),bt.dispose(),pt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Bd),K.removeEventListener("sessionend",Vd),Vr.stop()};function At(w){w.preventDefault(),ah("WebGLRenderer: Context Lost."),O=!0}function te(){ah("WebGLRenderer: Context Restored."),O=!1;const w=R.autoReset,z=Et.enabled,q=Et.autoUpdate,X=Et.needsUpdate,Z=Et.type;lt(),R.autoReset=w,Et.enabled=z,Et.autoUpdate=q,Et.needsUpdate=X,Et.type=Z}function We(w){be("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const z=w.target;z.removeEventListener("dispose",De),qi(z)}function qi(w){ji(w),x.remove(w)}function ji(w){const z=x.get(w).programs;z!==void 0&&(z.forEach(function(q){pt.releaseProgram(q)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,q,X,Z,vt){z===null&&(z=ze);const St=Z.isMesh&&Z.matrixWorld.determinant()<0,yt=Tm(w,z,q,X,Z);It.setMaterial(X,St);let Tt=q.index,Nt=1;if(X.wireframe===!0){if(Tt=J.getWireframeAttribute(q),Tt===void 0)return;Nt=2}const re=q.drawRange,ue=q.attributes.position;let Pt=re.start*Nt,Oe=(re.start+re.count)*Nt;vt!==null&&(Pt=Math.max(Pt,vt.start*Nt),Oe=Math.min(Oe,(vt.start+vt.count)*Nt)),Tt!==null?(Pt=Math.max(Pt,0),Oe=Math.min(Oe,Tt.count)):ue!=null&&(Pt=Math.max(Pt,0),Oe=Math.min(Oe,ue.count));const tn=Oe-Pt;if(tn<0||tn===1/0)return;ht.setup(Z,X,yt,q,Tt);let Je,Be=ce;if(Tt!==null&&(Je=nt.get(Tt),Be=U,Be.setIndex(Je)),Z.isMesh)X.wireframe===!0?(It.setLineWidth(X.wireframeLinewidth*$e()),Be.setMode(P.LINES)):Be.setMode(P.TRIANGLES);else if(Z.isLine){let vn=X.linewidth;vn===void 0&&(vn=1),It.setLineWidth(vn*$e()),Z.isLineSegments?Be.setMode(P.LINES):Z.isLineLoop?Be.setMode(P.LINE_LOOP):Be.setMode(P.LINE_STRIP)}else Z.isPoints?Be.setMode(P.POINTS):Z.isSprite&&Be.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const vn=Z._multiDrawStarts,Rt=Z._multiDrawCounts,Wn=Z._multiDrawCount,Se=Tt?nt.get(Tt).bytesPerElement:1,pi=x.get(X).currentProgram.getUniforms();for(let Ei=0;Ei<Wn;Ei++)pi.setValue(P,"_gl_DrawID",Ei),Be.render(vn[Ei]/Se,Rt[Ei])}else if(Z.isInstancedMesh)Be.renderInstances(Pt,tn,Z.count);else if(q.isInstancedBufferGeometry){const vn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,vn);Be.renderInstances(Pt,tn,Rt)}else Be.render(Pt,tn)};function Od(w,z,q){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,Qa(w,z,q),w.side=Nr,w.needsUpdate=!0,Qa(w,z,q),w.side=Kn):Qa(w,z,q)}this.compile=function(w,z,q=null){q===null&&(q=w),h=ot.get(q),h.init(z),I.push(h),q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),w!==q&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights();const X=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const vt=Z.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){const yt=vt[St];Od(yt,q,Z),X.add(yt)}else Od(vt,q,Z),X.add(vt)}),h=I.pop(),X},this.compileAsync=function(w,z,q=null){const X=this.compile(w,z,q);return new Promise(Z=>{function vt(){if(X.forEach(function(St){x.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){Z(w);return}setTimeout(vt,10)}Ee.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Bl=null;function wm(w){Bl&&Bl(w)}function Bd(){Vr.stop()}function Vd(){Vr.start()}const Vr=new gp;Vr.setAnimationLoop(wm),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(w){Bl=w,K.setAnimationLoop(w),w===null?Vr.stop():Vr.start()},K.addEventListener("sessionstart",Bd),K.addEventListener("sessionend",Vd),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const q=K.enabled===!0&&K.isPresenting===!0,X=y!==null&&(N===null||q)&&y.begin(b,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,z,N),h=ot.get(w,I.length),h.init(z),I.push(h),fn.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(fn,Oi,z.reversedDepth),Jt=this.localClippingEnabled,Zt=dt.init(this.clippingPlanes,Jt),u=Yt.get(w,M.length),u.init(),M.push(u),K.enabled===!0&&K.isPresenting===!0){const St=b.xr.getDepthSensingMesh();St!==null&&Vl(St,z,-1/0,b.sortObjects)}Vl(w,z,0,b.sortObjects),u.finish(),b.sortObjects===!0&&u.sort(pe,Re),le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,le&&wt.addToRenderList(u,w),this.info.render.frame++,Zt===!0&&dt.beginShadows();const Z=h.state.shadowsArray;if(Et.render(Z,w,z),Zt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&y.hasRenderPass())===!1){const St=u.opaque,yt=u.transmissive;if(h.setupLights(),z.isArrayCamera){const Tt=z.cameras;if(yt.length>0)for(let Nt=0,re=Tt.length;Nt<re;Nt++){const ue=Tt[Nt];Hd(St,yt,w,ue)}le&&wt.render(w);for(let Nt=0,re=Tt.length;Nt<re;Nt++){const ue=Tt[Nt];zd(u,w,ue,ue.viewport)}}else yt.length>0&&Hd(St,yt,w,z),le&&wt.render(w),zd(u,w,z)}N!==null&&G===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),X&&y.end(b),w.isScene===!0&&w.onAfterRender(b,w,z),ht.resetDefaultState(),L=-1,B=null,I.pop(),I.length>0?(h=I[I.length-1],Zt===!0&&dt.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?u=M[M.length-1]:u=null};function Vl(w,z,q,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){X&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fn);const St=Mt.update(w),yt=w.material;yt.visible&&u.push(w,St,yt,q,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const St=Mt.update(w),yt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ce.copy(St.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(fn)),Array.isArray(yt)){const Tt=St.groups;for(let Nt=0,re=Tt.length;Nt<re;Nt++){const ue=Tt[Nt],Pt=yt[ue.materialIndex];Pt&&Pt.visible&&u.push(w,St,Pt,q,Ce.z,ue)}}else yt.visible&&u.push(w,St,yt,q,Ce.z,null)}}const vt=w.children;for(let St=0,yt=vt.length;St<yt;St++)Vl(vt[St],z,q,X)}function zd(w,z,q,X){const{opaque:Z,transmissive:vt,transparent:St}=w;h.setupLightsView(q),Zt===!0&&dt.setGlobalState(b.clippingPlanes,q),X&&It.viewport(H.copy(X)),Z.length>0&&Ja(Z,z,q),vt.length>0&&Ja(vt,z,q),St.length>0&&Ja(St,z,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Hd(w,z,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget[X.id]===void 0){const Pt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");h.state.transmissionRenderTarget[X.id]=new Hi(1,1,{generateMipmaps:!0,type:Pt?dr:oi,minFilter:Qr,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const vt=h.state.transmissionRenderTarget[X.id],St=X.viewport||H;vt.setSize(St.z*b.transmissionResolutionScale,St.w*b.transmissionResolutionScale);const yt=b.getRenderTarget(),Tt=b.getActiveCubeFace(),Nt=b.getActiveMipmapLevel();b.setRenderTarget(vt),b.getClearColor(j),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),le&&wt.render(q);const re=b.toneMapping;b.toneMapping=zi;const ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),Zt===!0&&dt.setGlobalState(b.clippingPlanes,X),Ja(w,q,X),V.updateMultisampleRenderTarget(vt),V.updateRenderTargetMipmap(vt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Oe=0,tn=z.length;Oe<tn;Oe++){const Je=z[Oe],{object:Be,geometry:vn,material:Rt,group:Wn}=Je;if(Rt.side===Kn&&Be.layers.test(X.layers)){const Se=Rt.side;Rt.side=Hn,Rt.needsUpdate=!0,kd(Be,q,X,vn,Rt,Wn),Rt.side=Se,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(V.updateMultisampleRenderTarget(vt),V.updateRenderTargetMipmap(vt))}b.setRenderTarget(yt,Tt,Nt),b.setClearColor(j,it),ue!==void 0&&(X.viewport=ue),b.toneMapping=re}function Ja(w,z,q){const X=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,vt=w.length;Z<vt;Z++){const St=w[Z],{object:yt,geometry:Tt,group:Nt}=St;let re=St.material;re.allowOverride===!0&&X!==null&&(re=X),yt.layers.test(q.layers)&&kd(yt,z,q,Tt,re,Nt)}}function kd(w,z,q,X,Z,vt){w.onBeforeRender(b,z,q,X,Z,vt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(b,z,q,X,w,vt),Z.transparent===!0&&Z.side===Kn&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,b.renderBufferDirect(q,z,X,Z,w,vt),Z.side=Nr,Z.needsUpdate=!0,b.renderBufferDirect(q,z,X,Z,w,vt),Z.side=Kn):b.renderBufferDirect(q,z,X,Z,w,vt),w.onAfterRender(b,z,q,X,Z,vt)}function Qa(w,z,q){z.isScene!==!0&&(z=ze);const X=x.get(w),Z=h.state.lights,vt=h.state.shadowsArray,St=Z.state.version,yt=pt.getParameters(w,Z.state,vt,z,q),Tt=pt.getProgramCacheKey(yt);let Nt=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=tt.get(w.envMap||X.environment,re),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",De),Nt=new Map,X.programs=Nt);let ue=Nt.get(Tt);if(ue!==void 0){if(X.currentProgram===ue&&X.lightsStateVersion===St)return Wd(w,yt),ue}else yt.uniforms=pt.getUniforms(w),w.onBeforeCompile(yt,b),ue=pt.acquireProgram(yt,Tt),Nt.set(Tt,ue),X.uniforms=yt.uniforms;const Pt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=dt.uniform),Wd(w,yt),X.needsLights=Rm(w),X.lightsStateVersion=St,X.needsLights&&(Pt.ambientLightColor.value=Z.state.ambient,Pt.lightProbe.value=Z.state.probe,Pt.directionalLights.value=Z.state.directional,Pt.directionalLightShadows.value=Z.state.directionalShadow,Pt.spotLights.value=Z.state.spot,Pt.spotLightShadows.value=Z.state.spotShadow,Pt.rectAreaLights.value=Z.state.rectArea,Pt.ltc_1.value=Z.state.rectAreaLTC1,Pt.ltc_2.value=Z.state.rectAreaLTC2,Pt.pointLights.value=Z.state.point,Pt.pointLightShadows.value=Z.state.pointShadow,Pt.hemisphereLights.value=Z.state.hemi,Pt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Z.state.spotLightMatrix,Pt.spotLightMap.value=Z.state.spotLightMap,Pt.pointShadowMatrix.value=Z.state.pointShadowMatrix),X.currentProgram=ue,X.uniformsList=null,ue}function Gd(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=No.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Wd(w,z){const q=x.get(w);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Tm(w,z,q,X,Z){z.isScene!==!0&&(z=ze),V.resetTextureUnits();const vt=z.fog,St=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,yt=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ks,Tt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Nt=tt.get(X.envMap||St,Tt),re=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ue=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!q.morphAttributes.position,Oe=!!q.morphAttributes.normal,tn=!!q.morphAttributes.color;let Je=zi;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Je=b.toneMapping);const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vn=Be!==void 0?Be.length:0,Rt=x.get(X),Wn=h.state.lights;if(Zt===!0&&(Jt===!0||w!==B)){const pn=w===B&&X.id===L;dt.setState(X,w,pn)}let Se=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Wn.state.version||Rt.outputColorSpace!==yt||Z.isBatchedMesh&&Rt.batching===!1||!Z.isBatchedMesh&&Rt.batching===!0||Z.isBatchedMesh&&Rt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Rt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Rt.instancing===!1||!Z.isInstancedMesh&&Rt.instancing===!0||Z.isSkinnedMesh&&Rt.skinning===!1||!Z.isSkinnedMesh&&Rt.skinning===!0||Z.isInstancedMesh&&Rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Rt.instancingMorph===!1&&Z.morphTexture!==null||Rt.envMap!==Nt||X.fog===!0&&Rt.fog!==vt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==dt.numPlanes||Rt.numIntersection!==dt.numIntersection)||Rt.vertexAlphas!==re||Rt.vertexTangents!==ue||Rt.morphTargets!==Pt||Rt.morphNormals!==Oe||Rt.morphColors!==tn||Rt.toneMapping!==Je||Rt.morphTargetsCount!==vn)&&(Se=!0):(Se=!0,Rt.__version=X.version);let pi=Rt.currentProgram;Se===!0&&(pi=Qa(X,z,Z));let Ei=!1,zr=!1,ls=!1;const He=pi.getUniforms(),gn=Rt.uniforms;if(It.useProgram(pi.program)&&(Ei=!0,zr=!0,ls=!0),X.id!==L&&(L=X.id,zr=!0),Ei||B!==w){It.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),He.setValue(P,"projectionMatrix",w.projectionMatrix),He.setValue(P,"viewMatrix",w.matrixWorldInverse);const yr=He.map.cameraPosition;yr!==void 0&&yr.setValue(P,ye.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&He.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&He.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,zr=!0,ls=!0)}if(Rt.needsLights&&(Wn.state.directionalShadowMap.length>0&&He.setValue(P,"directionalShadowMap",Wn.state.directionalShadowMap,V),Wn.state.spotShadowMap.length>0&&He.setValue(P,"spotShadowMap",Wn.state.spotShadowMap,V),Wn.state.pointShadowMap.length>0&&He.setValue(P,"pointShadowMap",Wn.state.pointShadowMap,V)),Z.isSkinnedMesh){He.setOptional(P,Z,"bindMatrix"),He.setOptional(P,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(P,"boneTexture",pn.boneTexture,V))}Z.isBatchedMesh&&(He.setOptional(P,Z,"batchingTexture"),He.setValue(P,"batchingTexture",Z._matricesTexture,V),He.setOptional(P,Z,"batchingIdTexture"),He.setValue(P,"batchingIdTexture",Z._indirectTexture,V),He.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(P,"batchingColorTexture",Z._colorsTexture,V));const vr=q.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&xt.update(Z,q,pi),(zr||Rt.receiveShadow!==Z.receiveShadow)&&(Rt.receiveShadow=Z.receiveShadow,He.setValue(P,"receiveShadow",Z.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(gn.envMapIntensity.value=z.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=cE()),zr&&(He.setValue(P,"toneMappingExposure",b.toneMappingExposure),Rt.needsLights&&Im(gn,ls),vt&&X.fog===!0&&Ft.refreshFogUniforms(gn,vt),Ft.refreshMaterialUniforms(gn,X,Dt,at,h.state.transmissionRenderTarget[w.id]),No.upload(P,Gd(Rt),gn,V)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(No.upload(P,Gd(Rt),gn,V),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&He.setValue(P,"center",Z.center),He.setValue(P,"modelViewMatrix",Z.modelViewMatrix),He.setValue(P,"normalMatrix",Z.normalMatrix),He.setValue(P,"modelMatrix",Z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const pn=X.uniformsGroups;for(let yr=0,cs=pn.length;yr<cs;yr++){const Zd=pn[yr];bt.update(Zd,pi),bt.bind(Zd,pi)}}return pi}function Im(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Rm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,z,q){const X=x.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(w.texture).__webglTexture=z,x.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const q=x.get(w);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Cm=P.createFramebuffer();this.setRenderTarget=function(w,z=0,q=0){N=w,C=z,G=q;let X=null,Z=!1,vt=!1;if(w){const yt=x.get(w);if(yt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(P.FRAMEBUFFER,yt.__webglFramebuffer),H.copy(w.viewport),k.copy(w.scissor),W=w.scissorTest,It.viewport(H),It.scissor(k),It.setScissorTest(W),L=-1;return}else if(yt.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(yt.__hasExternalTextures)V.rebindTextures(w,x.get(w.texture).__webglTexture,x.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const re=w.depthTexture;if(yt.__boundDepthTexture!==re){if(re!==null&&x.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(vt=!0);const Nt=x.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[z])?X=Nt[z][q]:X=Nt[z],Z=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?X=x.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?X=Nt[q]:X=Nt,H.copy(w.viewport),k.copy(w.scissor),W=w.scissorTest}else H.copy($).multiplyScalar(Dt).floor(),k.copy(ut).multiplyScalar(Dt).floor(),W=ft;if(q!==0&&(X=Cm),It.bindFramebuffer(P.FRAMEBUFFER,X)&&It.drawBuffers(w,X),It.viewport(H),It.scissor(k),It.setScissorTest(W),Z){const yt=x.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,yt.__webglTexture,q)}else if(vt){const yt=z;for(let Tt=0;Tt<w.textures.length;Tt++){const Nt=x.get(w.textures[Tt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Tt,Nt.__webglTexture,q,yt)}}else if(w!==null&&q!==0){const yt=x.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,q)}L=-1},this.readRenderTargetPixels=function(w,z,q,X,Z,vt,St,yt=0){if(!(w&&w.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){It.bindFramebuffer(P.FRAMEBUFFER,Tt);try{const Nt=w.textures[yt],re=Nt.format,ue=Nt.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+yt),!Ge.textureFormatReadable(re)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ue)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&q>=0&&q<=w.height-Z&&P.readPixels(z,q,X,Z,mt.convert(re),mt.convert(ue),vt)}finally{const Nt=N!==null?x.get(N).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,z,q,X,Z,vt,St,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt)if(z>=0&&z<=w.width-X&&q>=0&&q<=w.height-Z){It.bindFramebuffer(P.FRAMEBUFFER,Tt);const Nt=w.textures[yt],re=Nt.format,ue=Nt.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+yt),!Ge.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),P.readPixels(z,q,X,Z,mt.convert(re),mt.convert(ue),0);const Oe=N!==null?x.get(N).__webglFramebuffer:null;It.bindFramebuffer(P.FRAMEBUFFER,Oe);const tn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await P2(P,tn,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.deleteBuffer(Pt),P.deleteSync(tn),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,q=0){const X=Math.pow(2,-q),Z=Math.floor(w.image.width*X),vt=Math.floor(w.image.height*X),St=z!==null?z.x:0,yt=z!==null?z.y:0;V.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,St,yt,Z,vt),It.unbindTexture()};const Dm=P.createFramebuffer(),Lm=P.createFramebuffer();this.copyTextureToTexture=function(w,z,q=null,X=null,Z=0,vt=0){let St,yt,Tt,Nt,re,ue,Pt,Oe,tn;const Je=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(q!==null)St=q.max.x-q.min.x,yt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,re=q.min.y,ue=q.isBox3?q.min.z:0;else{const gn=Math.pow(2,-Z);St=Math.floor(Je.width*gn),yt=Math.floor(Je.height*gn),w.isDataArrayTexture?Tt=Je.depth:w.isData3DTexture?Tt=Math.floor(Je.depth*gn):Tt=1,Nt=0,re=0,ue=0}X!==null?(Pt=X.x,Oe=X.y,tn=X.z):(Pt=0,Oe=0,tn=0);const Be=mt.convert(z.format),vn=mt.convert(z.type);let Rt;z.isData3DTexture?(V.setTexture3D(z,0),Rt=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(V.setTexture2DArray(z,0),Rt=P.TEXTURE_2D_ARRAY):(V.setTexture2D(z,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const Wn=P.getParameter(P.UNPACK_ROW_LENGTH),Se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ei=P.getParameter(P.UNPACK_SKIP_ROWS),zr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ue);const ls=w.isDataArrayTexture||w.isData3DTexture,He=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const gn=x.get(w),vr=x.get(z),pn=x.get(gn.__renderTarget),yr=x.get(vr.__renderTarget);It.bindFramebuffer(P.READ_FRAMEBUFFER,pn.__webglFramebuffer),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let cs=0;cs<Tt;cs++)ls&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(w).__webglTexture,Z,ue+cs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(z).__webglTexture,vt,tn+cs)),P.blitFramebuffer(Nt,re,St,yt,Pt,Oe,St,yt,P.DEPTH_BUFFER_BIT,P.NEAREST);It.bindFramebuffer(P.READ_FRAMEBUFFER,null),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||x.has(w)){const gn=x.get(w),vr=x.get(z);It.bindFramebuffer(P.READ_FRAMEBUFFER,Dm),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,Lm);for(let pn=0;pn<Tt;pn++)ls?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gn.__webglTexture,Z,ue+pn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gn.__webglTexture,Z),He?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vr.__webglTexture,vt,tn+pn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vr.__webglTexture,vt),Z!==0?P.blitFramebuffer(Nt,re,St,yt,Pt,Oe,St,yt,P.COLOR_BUFFER_BIT,P.NEAREST):He?P.copyTexSubImage3D(Rt,vt,Pt,Oe,tn+pn,Nt,re,St,yt):P.copyTexSubImage2D(Rt,vt,Pt,Oe,Nt,re,St,yt);It.bindFramebuffer(P.READ_FRAMEBUFFER,null),It.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else He?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Rt,vt,Pt,Oe,tn,St,yt,Tt,Be,vn,Je.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,vt,Pt,Oe,tn,St,yt,Tt,Be,Je.data):P.texSubImage3D(Rt,vt,Pt,Oe,tn,St,yt,Tt,Be,vn,Je):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,vt,Pt,Oe,St,yt,Be,vn,Je.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,vt,Pt,Oe,Je.width,Je.height,Be,Je.data):P.texSubImage2D(P.TEXTURE_2D,vt,Pt,Oe,St,yt,Be,vn,Je);P.pixelStorei(P.UNPACK_ROW_LENGTH,Wn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ei),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zr),vt===0&&z.generateMipmaps&&P.generateMipmap(Rt),It.unbindTexture()},this.initRenderTarget=function(w){x.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),It.unbindTexture()},this.resetState=function(){C=0,G=0,N=null,It.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class dE{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Ae("#ffffff");async initialize(t){this.canvas=t,this.renderer=new uE({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new K2,this.camera=new cd(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Za(1,1);this.geometryCache.set("plane",e);const i=new Os({color:16777215,transparent:!0,depthWrite:!1,side:Kn}),r=new Jn(e,i);r.visible=!1,this.scene.add(r),this.spritePool.push(r);const s=new Os({transparent:!0,depthWrite:!1,side:Kn}),a=new Jn(e,s);a.visible=!1,this.scene.add(a),this.rectPool.push(a),this.updateThemeColors(),this.themeObserver=new MutationObserver(o=>{for(let l=0;l<o.length;l++)if(o[l].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize(),this.renderer.compile(this.scene,this.camera)}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Ae(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=this.height,this.camera.bottom=0,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Os({color:16777215,transparent:!0,depthWrite:!1,side:Kn});e=new Jn(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Os({transparent:!0,depthWrite:!1,side:Kn});e=new Jn(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function Kt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(p){a(p)}}function l(d){try{c(i.throw(d))}catch(p){a(p)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Yh(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ae(n){return this instanceof ae?(this.v=n,this):new ae(n)}function Bi(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(v){return Promise.resolve(v).then(_,p)}}function o(_,v){i[_]&&(r[_]=function(S){return new Promise(function(m,g){s.push([_,S,m,g])>1||l(_,S)})},v&&(r[_]=v(r[_])))}function l(_,v){try{c(i[_](v))}catch(S){f(s[0][3],S)}}function c(_){_.value instanceof ae?Promise.resolve(_.value.v).then(d,p):f(s[0][2],_)}function d(_){l("next",_)}function p(_){l("throw",_)}function f(_,v){_(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Po(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:ae(n[r](a)),done:!1}:s?s(a):a}:s}}function es(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Yh=="function"?Yh(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const hE=new TextDecoder("utf-8"),Lu=n=>hE.decode(n),fE=new TextEncoder,ud=n=>fE.encode(n),pE=n=>typeof n=="number",bp=n=>typeof n=="boolean",cn=n=>typeof n=="function",kn=n=>n!=null&&Object(n)===n,rs=n=>kn(n)&&cn(n.then),Xa=n=>kn(n)&&cn(n[Symbol.iterator]),aa=n=>kn(n)&&cn(n[Symbol.asyncIterator]),Nu=n=>kn(n)&&kn(n.schema),Mp=n=>kn(n)&&"done"in n&&"value"in n,Ep=n=>kn(n)&&cn(n.stat)&&pE(n.fd),Ap=n=>kn(n)&&dd(n.body),Nl=n=>"_getDOMStream"in n&&"_getNodeStream"in n,mE=n=>kn(n)&&cn(n.abort)&&cn(n.getWriter)&&!Nl(n),dd=n=>kn(n)&&cn(n.cancel)&&cn(n.getReader)&&!Nl(n),gE=n=>kn(n)&&cn(n.end)&&cn(n.write)&&bp(n.writable)&&!Nl(n),wp=n=>kn(n)&&cn(n.read)&&cn(n.pipe)&&bp(n.readable)&&!Nl(n),_E=n=>kn(n)&&cn(n.clear)&&cn(n.bytes)&&cn(n.position)&&cn(n.setPosition)&&cn(n.capacity)&&cn(n.getBufferIdentifier)&&cn(n.createLong),hd=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function vE(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,d=n.length;++l<d;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function qh(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function Zi(n,t){const e=vE(n),i=e.reduce((d,p)=>d+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const d=e.length;++l<d;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?qh(a,s,o):a=s;break}qh(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Fe(n,t){let e=Mp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=ud(e)),e instanceof ArrayBuffer?new n(e):e instanceof hd?new n(e):_E(e)?Fe(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const ga=n=>Fe(Int32Array,n),jh=n=>Fe(BigInt64Array,n),ge=n=>Fe(Uint8Array,n),Pu=n=>(n.next(),n);function*yE(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof hd?e(t):Xa(t)?t:e(t);return yield*Pu((function*(r){let s=null;do s=r.next(yield Fe(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const xE=n=>yE(Uint8Array,n);function Tp(n,t){return Bi(this,arguments,function*(){if(rs(t))return yield ae(yield ae(yield*Po(es(Tp(n,yield ae(t))))));const i=function(a){return Bi(this,arguments,function*(){yield yield ae(yield ae(a))})},r=function(a){return Bi(this,arguments,function*(){yield ae(yield*Po(es(Pu((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof hd?i(t):Xa(t)?r(t):aa(t)?t:i(t);return yield ae(yield*Po(es(Pu((function(a){return Bi(this,arguments,function*(){let o=null;do o=yield ae(a.next(yield yield ae(Fe(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield ae(new n)})}const SE=n=>Tp(Uint8Array,n);function Ip(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function bE(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const ri={fromIterable(n){return Eo(ME(n))},fromAsyncIterable(n){return Eo(EE(n))},fromDOMStream(n){return Eo(AE(n))},fromNodeStream(n){return Eo(TE(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},Eo=n=>(n.next(),n);function*ME(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?Zi(i,a)[0]:([r,i,o]=Zi(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=xE(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(d){(e=!0)&&typeof c.throw=="function"&&c.throw(d)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function EE(n){return Bi(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Zi(r,o)[0]:([s,r,l]=Zi(r,o),s)}({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0});const d=SE(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ae(d.next()):yield ae(d.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ae(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof d.throw=="function"&&(yield ae(d.throw(p)))}finally{i===!1&&typeof d.return=="function"&&(yield ae(d.return(new Uint8Array(0))))}return yield ae(null)})}function AE(n){return Bi(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?Zi(r,o)[0]:([s,r,l]=Zi(r,o),s)}({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0});const d=new wE(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ae(d.read()):yield ae(d.read(o-l)),!e&&s.byteLength>0&&(r.push(ge(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ae(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield ae(d.cancel(p)))}finally{i===!1?yield ae(d.cancel()):n.locked&&d.releaseLock()}return yield ae(null)})}class wE{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Kt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Kt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=ge(e)),e})}}const Ec=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function TE(n){return Bi(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],d;function p(){return a==="peek"?Zi(c,o)[0]:([d,c,l]=Zi(c,o),d)}if({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0},n.isTTY)return yield yield ae(new Uint8Array(0)),yield ae(null);try{e[0]=Ec(n,"end"),e[1]=Ec(n,"error");do{if(e[2]=Ec(n,"readable"),[i,s]=yield ae(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(d=ge(n.read(o-l)),d.byteLength<o-l&&(d=ge(n.read()))):d=ge(n.read()),d.byteLength>0&&(c.push(d),l+=d.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield ae(p()));while(o<l)}while(!r)}finally{yield ae(f(e,i==="error"?s:null))}return yield ae(null);function f(_,v){return d=c=null,new Promise((S,m)=>{for(const[g,E]of _)n.off(g,E);try{const g=n.destroy;g&&g.call(n,v),v=void 0}catch(g){v=g||v}finally{v!=null?m(v):S()}})}})}var rn;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(rn||(rn={}));var Mn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(Mn||(Mn={}));var bn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(bn||(bn={}));var di;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(di||(di={}));var Ht;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Ht||(Ht={}));var Xi;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Xi||(Xi={}));const Ac=2,Li=4,sr=4,Ie=4,Rr=new Int32Array(2),Kh=new Float32Array(Rr.buffer),Jh=new Float64Array(Rr.buffer),Ao=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Fu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Fu||(Fu={}));let Qs=class Rp{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new Rp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Rr[0]=this.readInt32(t),Kh[0]}readFloat64(t){return Rr[Ao?0:1]=this.readInt32(t),Rr[Ao?1:0]=this.readInt32(t+4),Jh[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Kh[0]=e,this.writeInt32(t,Rr[0])}writeFloat64(t,e){Jh[0]=e,this.writeInt32(t,Rr[Ao?0:1]),this.writeInt32(t+4,Rr[Ao?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+Li+sr)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<sr;e++)t+=String.fromCharCode(this.readInt8(this.position_+Li+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=Li;const r=this.bytes_.subarray(t,t+i);return e===Fu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+Li}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=sr)throw new Error("FlatBuffers: file identifier must be length "+sr);for(let e=0;e<sr;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+Li+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},Cp=class Dp{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Qs.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=Dp.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Qs.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(Li,0),this.writeInt32(this.offset()-t+Li)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*Ac;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=Ac;c<s;c+=Ac)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Ie:0;if(e){const s=e;if(this.prep(this.minalign,Li+sr+r),s.length!=sr)throw new TypeError("FlatBuffers: file identifier must be length "+sr);for(let a=sr-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,Li+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(Li,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var Ko;(function(n){n[n.BUFFER=0]="BUFFER"})(Ko||(Ko={}));var Jo;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(Jo||(Jo={}));class Cr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Cr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Ie),(e||new Cr).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):Jo.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Ko.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,Jo.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Ko.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Cr.startBodyCompression(t),Cr.addCodec(t,e),Cr.addMethod(t,i),Cr.endBodyCompression(t)}}class Lp{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let Np=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},nr=class Uu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Ie),(e||new Uu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Np).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Lp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Cr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},ws=class Ou{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Ou).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Ie),(e||new Ou).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new nr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var $s;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})($s||($s={}));var Qo;(function(n){n[n.DenseArray=0]="DenseArray"})(Qo||(Qo={}));class qn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Ie),(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return qn.startInt(t),qn.addBitWidth(t,e),qn.addIsSigned(t,i),qn.endInt(t)}}class ar{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new ar).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Ie),(e||new ar).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new qn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Qo.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Qo.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class un{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new un).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Ie),(e||new un).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return un.startKeyValue(t),un.addKey(t,e),un.addValue(t,i),un.endKeyValue(t)}}let Qh=class xa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Ie),(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return xa.startBinary(t),xa.endBinary(t)}},$h=class Sa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Ie),(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return Sa.startBool(t),Sa.endBool(t)}},Fo=class Ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Ie),(e||new Ts).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):di.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,di.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return Ts.startDate(t),Ts.addUnit(t,e),Ts.endDate(t)}},Is=class Ir{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Ie),(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return Ir.startDecimal(t),Ir.addPrecision(t,e),Ir.addScale(t,i),Ir.addBitWidth(t,r),Ir.endDecimal(t)}},Uo=class Rs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Ie),(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ht.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Ht.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return Rs.startDuration(t),Rs.addUnit(t,e),Rs.endDuration(t)}},Oo=class Cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Ie),(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Cs.startFixedSizeBinary(t),Cs.addByteWidth(t,e),Cs.endFixedSizeBinary(t)}},Bo=class Ds{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Ie),(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return Ds.startFixedSizeList(t),Ds.addListSize(t,e),Ds.endFixedSizeList(t)}};class Ni{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new Ni).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Ie),(e||new Ni).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):bn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,bn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return Ni.startFloatingPoint(t),Ni.addPrecision(t,e),Ni.endFloatingPoint(t)}}class Pi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Pi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Ie),(e||new Pi).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Xi.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Xi.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Pi.startInterval(t),Pi.addUnit(t,e),Pi.endInterval(t)}}let tf=class ba{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Ie),(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return ba.startLargeBinary(t),ba.endLargeBinary(t)}},ef=class Ma{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Ie),(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return Ma.startLargeUtf8(t),Ma.endLargeUtf8(t)}},nf=class Ea{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new Ea).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Ie),(e||new Ea).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return Ea.startList(t),Ea.endList(t)}},Vo=class Ls{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new Ls).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Ie),(e||new Ls).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return Ls.startMap(t),Ls.addKeysSorted(t,e),Ls.endMap(t)}},rf=class Aa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new Aa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Ie),(e||new Aa).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return Aa.startNull(t),Aa.endNull(t)}};class ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Ie),(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return ts.startStruct_(t),ts.endStruct_(t)}}class si{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new si).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Ie),(e||new si).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ht.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Ht.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return si.startTime(t),si.addUnit(t,e),si.addBitWidth(t,i),si.endTime(t)}}class ai{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new ai).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Ie),(e||new ai).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ht.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Ht.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return ai.startTimestamp(t),ai.addUnit(t,e),ai.addTimezone(t,i),ai.endTimestamp(t)}}class Bn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Ie),(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Mn.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,Mn.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Bn.startUnion(t),Bn.addMode(t,e),Bn.addTypeIds(t,i),Bn.endUnion(t)}}let sf=class wa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new wa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Ie),(e||new wa).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return wa.startUtf8(t),wa.endUtf8(t)}};var Ze;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ze||(Ze={}));let ni=class zo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new zo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Ie),(e||new zo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ze.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new ar).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new zo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new un).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ze.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Ii=class er{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new er).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Ie),(e||new er).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):$s.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new ni).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new un).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,$s.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return er.startSchema(t),er.addEndianness(t,e),er.addFields(t,i),er.addCustomMetadata(t,r),er.addFeatures(t,s),er.endSchema(t)}};var Me;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(Me||(Me={}));var D;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(D||(D={}));var ir;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(ir||(ir={}));const IE=void 0;function Fa(n){if(n===null)return"null";if(n===IE)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Fa(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function ke(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Pp(n,t){return ke(n/t)+ke(n%t)/ke(t)}const RE=Symbol.for("isArrowBigNum");function Mi(n,...t){return t.length===0?Object.setPrototypeOf(Fe(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}Mi.prototype[RE]=!0;Mi.prototype.toJSON=function(){return`"${Oa(this)}"`};Mi.prototype.valueOf=function(n){return Fp(this,n)};Mi.prototype.toString=function(){return Oa(this)};Mi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return Fp(this);case"string":return Oa(this);case"default":return LE(this)}return Oa(this)};function ks(...n){return Mi.apply(this,n)}function Gs(...n){return Mi.apply(this,n)}function Ua(...n){return Mi.apply(this,n)}Object.setPrototypeOf(ks.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(Gs.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Ua.prototype,Object.create(Uint32Array.prototype));Object.assign(ks.prototype,Mi.prototype,{constructor:ks,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(Gs.prototype,Mi.prototype,{constructor:Gs,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Ua.prototype,Mi.prototype,{constructor:Ua,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const CE=BigInt(4294967296)*BigInt(4294967296),DE=CE-BigInt(1);function Fp(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const d of a)l|=(d^DE)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const d of a)l|=d*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const d=BigInt(Math.pow(10,t)),p=l/d,f=l%d;return ke(p)+ke(f)/ke(d)}return ke(l)}function Oa(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return wc(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return wc(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${wc(t)}`}function LE(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Oa(n)}function wc(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class fd{static new(t,e){switch(e){case!0:return new ks(t);case!1:return new Gs(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new ks(t)}return t.byteLength===16?new Ua(t):new Gs(t)}static signed(t){return new ks(t)}static unsigned(t){return new Gs(t)}static decimal(t){return new Ua(t)}constructor(t,e){return fd.new(t,e)}}var Up,Op,Bp,Vp,zp,Hp,kp,Gp,Wp,Zp,Xp,Yp,qp,jp,Kp,Jp,Qp,$p,t0,e0,n0,i0;class Ct{static isNull(t){return t?.typeId===D.Null}static isInt(t){return t?.typeId===D.Int}static isFloat(t){return t?.typeId===D.Float}static isBinary(t){return t?.typeId===D.Binary}static isLargeBinary(t){return t?.typeId===D.LargeBinary}static isUtf8(t){return t?.typeId===D.Utf8}static isLargeUtf8(t){return t?.typeId===D.LargeUtf8}static isBool(t){return t?.typeId===D.Bool}static isDecimal(t){return t?.typeId===D.Decimal}static isDate(t){return t?.typeId===D.Date}static isTime(t){return t?.typeId===D.Time}static isTimestamp(t){return t?.typeId===D.Timestamp}static isInterval(t){return t?.typeId===D.Interval}static isDuration(t){return t?.typeId===D.Duration}static isList(t){return t?.typeId===D.List}static isStruct(t){return t?.typeId===D.Struct}static isUnion(t){return t?.typeId===D.Union}static isFixedSizeBinary(t){return t?.typeId===D.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===D.FixedSizeList}static isMap(t){return t?.typeId===D.Map}static isDictionary(t){return t?.typeId===D.Dictionary}static isDenseUnion(t){return Ct.isUnion(t)&&t.mode===Mn.Dense}static isSparseUnion(t){return Ct.isUnion(t)&&t.mode===Mn.Sparse}constructor(t){this.typeId=t}}Up=Symbol.toStringTag;Ct[Up]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Ct.prototype);class Pr extends Ct{constructor(){super(D.Null)}toString(){return"Null"}}Op=Symbol.toStringTag;Pr[Op]=(n=>n[Symbol.toStringTag]="Null")(Pr.prototype);class ss extends Ct{constructor(t,e){super(D.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Bp=Symbol.toStringTag;ss[Bp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(ss.prototype);class Ba extends ss{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ba.prototype,"ArrayType",{value:Int32Array});class $o extends Ct{constructor(t){super(D.Float),this.precision=t}get ArrayType(){switch(this.precision){case bn.HALF:return Uint16Array;case bn.SINGLE:return Float32Array;case bn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Vp=Symbol.toStringTag;$o[Vp]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))($o.prototype);class tl extends Ct{constructor(){super(D.Binary)}toString(){return"Binary"}}zp=Symbol.toStringTag;tl[zp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(tl.prototype);class el extends Ct{constructor(){super(D.LargeBinary)}toString(){return"LargeBinary"}}Hp=Symbol.toStringTag;el[Hp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(el.prototype);class nl extends Ct{constructor(){super(D.Utf8)}toString(){return"Utf8"}}kp=Symbol.toStringTag;nl[kp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(nl.prototype);class il extends Ct{constructor(){super(D.LargeUtf8)}toString(){return"LargeUtf8"}}Gp=Symbol.toStringTag;il[Gp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(il.prototype);class rl extends Ct{constructor(){super(D.Bool)}toString(){return"Bool"}}Wp=Symbol.toStringTag;rl[Wp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(rl.prototype);class sl extends Ct{constructor(t,e,i=128){super(D.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}Zp=Symbol.toStringTag;sl[Zp]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(sl.prototype);class al extends Ct{constructor(t){super(D.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${di[this.unit]}>`}get ArrayType(){return this.unit===di.DAY?Int32Array:BigInt64Array}}Xp=Symbol.toStringTag;al[Xp]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(al.prototype);class ol extends Ct{constructor(t,e){super(D.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${Ht[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Yp=Symbol.toStringTag;ol[Yp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(ol.prototype);class ll extends Ct{constructor(t,e){super(D.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${Ht[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}qp=Symbol.toStringTag;ll[qp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(ll.prototype);class cl extends Ct{constructor(t){super(D.Interval),this.unit=t}toString(){return`Interval<${Xi[this.unit]}>`}}jp=Symbol.toStringTag;cl[jp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(cl.prototype);class ul extends Ct{constructor(t){super(D.Duration),this.unit=t}toString(){return`Duration<${Ht[this.unit]}>`}}Kp=Symbol.toStringTag;ul[Kp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(ul.prototype);class dl extends Ct{constructor(t){super(D.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}Jp=Symbol.toStringTag;dl[Jp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(dl.prototype);class Cn extends Ct{constructor(t){super(D.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Qp=Symbol.toStringTag;Cn[Qp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Cn.prototype);class hl extends Ct{constructor(t,e,i){super(D.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}$p=Symbol.toStringTag;hl[$p]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(hl.prototype);class fl extends Ct{constructor(t){super(D.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}t0=Symbol.toStringTag;fl[t0]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(fl.prototype);class pl extends Ct{constructor(t,e){super(D.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}e0=Symbol.toStringTag;pl[e0]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(pl.prototype);class ml extends Ct{constructor(t,e=!1){var i,r,s;if(super(D.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}n0=Symbol.toStringTag;ml[n0]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(ml.prototype);const NE=(n=>()=>++n)(-1);class ta extends Ct{constructor(t,e,i,r){super(D.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?NE():ke(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}i0=Symbol.toStringTag;ta[i0]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(ta.prototype);function rr(n){const t=n;switch(n.typeId){case D.Decimal:return n.bitWidth/32;case D.Interval:return 1+t.unit;case D.FixedSizeList:return t.listSize;case D.FixedSizeBinary:return t.byteWidth;default:return 1}}class de{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return PE(this,t,e)}getVisitFnByTypeId(t,e=!0){return Ns(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function PE(n,t,e=!0){return typeof t=="number"?Ns(n,t,e):typeof t=="string"&&t in D?Ns(n,D[t],e):t&&t instanceof Ct?Ns(n,af(t),e):t?.type&&t.type instanceof Ct?Ns(n,af(t.type),e):Ns(n,D.NONE,e)}function Ns(n,t,e=!0){let i=null;switch(t){case D.Null:i=n.visitNull;break;case D.Bool:i=n.visitBool;break;case D.Int:i=n.visitInt;break;case D.Int8:i=n.visitInt8||n.visitInt;break;case D.Int16:i=n.visitInt16||n.visitInt;break;case D.Int32:i=n.visitInt32||n.visitInt;break;case D.Int64:i=n.visitInt64||n.visitInt;break;case D.Uint8:i=n.visitUint8||n.visitInt;break;case D.Uint16:i=n.visitUint16||n.visitInt;break;case D.Uint32:i=n.visitUint32||n.visitInt;break;case D.Uint64:i=n.visitUint64||n.visitInt;break;case D.Float:i=n.visitFloat;break;case D.Float16:i=n.visitFloat16||n.visitFloat;break;case D.Float32:i=n.visitFloat32||n.visitFloat;break;case D.Float64:i=n.visitFloat64||n.visitFloat;break;case D.Utf8:i=n.visitUtf8;break;case D.LargeUtf8:i=n.visitLargeUtf8;break;case D.Binary:i=n.visitBinary;break;case D.LargeBinary:i=n.visitLargeBinary;break;case D.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case D.Date:i=n.visitDate;break;case D.DateDay:i=n.visitDateDay||n.visitDate;break;case D.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case D.Timestamp:i=n.visitTimestamp;break;case D.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case D.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case D.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case D.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case D.Time:i=n.visitTime;break;case D.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case D.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case D.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case D.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case D.Decimal:i=n.visitDecimal;break;case D.List:i=n.visitList;break;case D.Struct:i=n.visitStruct;break;case D.Union:i=n.visitUnion;break;case D.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case D.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case D.Dictionary:i=n.visitDictionary;break;case D.Interval:i=n.visitInterval;break;case D.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case D.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case D.Duration:i=n.visitDuration;break;case D.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case D.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case D.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case D.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case D.FixedSizeList:i=n.visitFixedSizeList;break;case D.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${D[t]}'`)}function af(n){switch(n.typeId){case D.Null:return D.Null;case D.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?D.Int8:D.Uint8;case 16:return e?D.Int16:D.Uint16;case 32:return e?D.Int32:D.Uint32;case 64:return e?D.Int64:D.Uint64}return D.Int}case D.Float:switch(n.precision){case bn.HALF:return D.Float16;case bn.SINGLE:return D.Float32;case bn.DOUBLE:return D.Float64}return D.Float;case D.Binary:return D.Binary;case D.LargeBinary:return D.LargeBinary;case D.Utf8:return D.Utf8;case D.LargeUtf8:return D.LargeUtf8;case D.Bool:return D.Bool;case D.Decimal:return D.Decimal;case D.Time:switch(n.unit){case Ht.SECOND:return D.TimeSecond;case Ht.MILLISECOND:return D.TimeMillisecond;case Ht.MICROSECOND:return D.TimeMicrosecond;case Ht.NANOSECOND:return D.TimeNanosecond}return D.Time;case D.Timestamp:switch(n.unit){case Ht.SECOND:return D.TimestampSecond;case Ht.MILLISECOND:return D.TimestampMillisecond;case Ht.MICROSECOND:return D.TimestampMicrosecond;case Ht.NANOSECOND:return D.TimestampNanosecond}return D.Timestamp;case D.Date:switch(n.unit){case di.DAY:return D.DateDay;case di.MILLISECOND:return D.DateMillisecond}return D.Date;case D.Interval:switch(n.unit){case Xi.DAY_TIME:return D.IntervalDayTime;case Xi.YEAR_MONTH:return D.IntervalYearMonth}return D.Interval;case D.Duration:switch(n.unit){case Ht.SECOND:return D.DurationSecond;case Ht.MILLISECOND:return D.DurationMillisecond;case Ht.MICROSECOND:return D.DurationMicrosecond;case Ht.NANOSECOND:return D.DurationNanosecond}return D.Duration;case D.Map:return D.Map;case D.List:return D.List;case D.Struct:return D.Struct;case D.Union:switch(n.mode){case Mn.Dense:return D.DenseUnion;case Mn.Sparse:return D.SparseUnion}return D.Union;case D.FixedSizeBinary:return D.FixedSizeBinary;case D.FixedSizeList:return D.FixedSizeList;case D.Dictionary:return D.Dictionary}throw new Error(`Unrecognized type '${D[n.typeId]}'`)}de.prototype.visitInt8=null;de.prototype.visitInt16=null;de.prototype.visitInt32=null;de.prototype.visitInt64=null;de.prototype.visitUint8=null;de.prototype.visitUint16=null;de.prototype.visitUint32=null;de.prototype.visitUint64=null;de.prototype.visitFloat16=null;de.prototype.visitFloat32=null;de.prototype.visitFloat64=null;de.prototype.visitDateDay=null;de.prototype.visitDateMillisecond=null;de.prototype.visitTimestampSecond=null;de.prototype.visitTimestampMillisecond=null;de.prototype.visitTimestampMicrosecond=null;de.prototype.visitTimestampNanosecond=null;de.prototype.visitTimeSecond=null;de.prototype.visitTimeMillisecond=null;de.prototype.visitTimeMicrosecond=null;de.prototype.visitTimeNanosecond=null;de.prototype.visitDenseUnion=null;de.prototype.visitSparseUnion=null;de.prototype.visitIntervalDayTime=null;de.prototype.visitIntervalYearMonth=null;de.prototype.visitDuration=null;de.prototype.visitDurationSecond=null;de.prototype.visitDurationMillisecond=null;de.prototype.visitDurationMicrosecond=null;de.prototype.visitDurationNanosecond=null;const r0=new Float64Array(1),Es=new Uint32Array(r0.buffer);function s0(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function FE(n){if(n!==n)return 32256;r0[0]=n;const t=(Es[1]&2147483648)>>16&65535;let e=Es[1]&2146435072,i=0;return e>=1089470464?Es[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Es[1]&1048575)>>10):e<=1056964608?(i=1048576+(Es[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Es[1]&1048575)+512>>10),t|e|i&65535}class kt extends de{}function Xt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const UE=(n,t,e)=>{n[t]=Math.floor(e/864e5)},a0=(n,t,e,i)=>{if(e+1<t.length){const r=ke(t[e]),s=ke(t[e+1]);n.set(i.subarray(0,s-r),r)}},OE=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},mr=({values:n},t,e)=>{n[t]=e},pd=({values:n},t,e)=>{n[t]=e},o0=({values:n},t,e)=>{n[t]=FE(e)},BE=(n,t,e)=>{switch(n.type.precision){case bn.HALF:return o0(n,t,e);case bn.SINGLE:case bn.DOUBLE:return pd(n,t,e)}},l0=({values:n},t,e)=>{UE(n,t,e.valueOf())},c0=({values:n},t,e)=>{n[t]=BigInt(e)},VE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},u0=({values:n,valueOffsets:t},e,i)=>a0(n,t,e,i),d0=({values:n,valueOffsets:t},e,i)=>a0(n,t,e,ud(i)),zE=(n,t,e)=>{n.type.unit===di.DAY?l0(n,t,e):c0(n,t,e)},h0=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},f0=({values:n},t,e)=>{n[t]=BigInt(e)},p0=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},m0=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},HE=(n,t,e)=>{switch(n.type.unit){case Ht.SECOND:return h0(n,t,e);case Ht.MILLISECOND:return f0(n,t,e);case Ht.MICROSECOND:return p0(n,t,e);case Ht.NANOSECOND:return m0(n,t,e)}},g0=({values:n},t,e)=>{n[t]=e},_0=({values:n},t,e)=>{n[t]=e},v0=({values:n},t,e)=>{n[t]=e},y0=({values:n},t,e)=>{n[t]=e},kE=(n,t,e)=>{switch(n.type.unit){case Ht.SECOND:return g0(n,t,e);case Ht.MILLISECOND:return _0(n,t,e);case Ht.MICROSECOND:return v0(n,t,e);case Ht.NANOSECOND:return y0(n,t,e)}},GE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},WE=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=hi.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},ZE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=hi.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},XE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),YE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),qE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),jE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),KE=(n,t,e)=>{const i=n.type.children.map(s=>hi.getVisitFn(s.type)),r=e instanceof Map?qE(t,e):e instanceof we?YE(t,e):Array.isArray(e)?XE(t,e):jE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},JE=(n,t,e)=>{n.type.mode===Mn.Dense?x0(n,t,e):S0(n,t,e)},x0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];hi.visit(r,n.valueOffsets[t],e)},S0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];hi.visit(r,t,e)},QE=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},$E=(n,t,e)=>{n.type.unit===Xi.DAY_TIME?b0(n,t,e):M0(n,t,e)},b0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},M0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},E0=({values:n},t,e)=>{n[t]=e},A0=({values:n},t,e)=>{n[t]=e},w0=({values:n},t,e)=>{n[t]=e},T0=({values:n},t,e)=>{n[t]=e},tA=(n,t,e)=>{switch(n.type.unit){case Ht.SECOND:return E0(n,t,e);case Ht.MILLISECOND:return A0(n,t,e);case Ht.MICROSECOND:return w0(n,t,e);case Ht.NANOSECOND:return T0(n,t,e)}},eA=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=hi.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};kt.prototype.visitBool=Xt(OE);kt.prototype.visitInt=Xt(mr);kt.prototype.visitInt8=Xt(mr);kt.prototype.visitInt16=Xt(mr);kt.prototype.visitInt32=Xt(mr);kt.prototype.visitInt64=Xt(mr);kt.prototype.visitUint8=Xt(mr);kt.prototype.visitUint16=Xt(mr);kt.prototype.visitUint32=Xt(mr);kt.prototype.visitUint64=Xt(mr);kt.prototype.visitFloat=Xt(BE);kt.prototype.visitFloat16=Xt(o0);kt.prototype.visitFloat32=Xt(pd);kt.prototype.visitFloat64=Xt(pd);kt.prototype.visitUtf8=Xt(d0);kt.prototype.visitLargeUtf8=Xt(d0);kt.prototype.visitBinary=Xt(u0);kt.prototype.visitLargeBinary=Xt(u0);kt.prototype.visitFixedSizeBinary=Xt(VE);kt.prototype.visitDate=Xt(zE);kt.prototype.visitDateDay=Xt(l0);kt.prototype.visitDateMillisecond=Xt(c0);kt.prototype.visitTimestamp=Xt(HE);kt.prototype.visitTimestampSecond=Xt(h0);kt.prototype.visitTimestampMillisecond=Xt(f0);kt.prototype.visitTimestampMicrosecond=Xt(p0);kt.prototype.visitTimestampNanosecond=Xt(m0);kt.prototype.visitTime=Xt(kE);kt.prototype.visitTimeSecond=Xt(g0);kt.prototype.visitTimeMillisecond=Xt(_0);kt.prototype.visitTimeMicrosecond=Xt(v0);kt.prototype.visitTimeNanosecond=Xt(y0);kt.prototype.visitDecimal=Xt(GE);kt.prototype.visitList=Xt(WE);kt.prototype.visitStruct=Xt(KE);kt.prototype.visitUnion=Xt(JE);kt.prototype.visitDenseUnion=Xt(x0);kt.prototype.visitSparseUnion=Xt(S0);kt.prototype.visitDictionary=Xt(QE);kt.prototype.visitInterval=Xt($E);kt.prototype.visitIntervalDayTime=Xt(b0);kt.prototype.visitIntervalYearMonth=Xt(M0);kt.prototype.visitDuration=Xt(tA);kt.prototype.visitDurationSecond=Xt(E0);kt.prototype.visitDurationMillisecond=Xt(A0);kt.prototype.visitDurationMicrosecond=Xt(w0);kt.prototype.visitDurationNanosecond=Xt(T0);kt.prototype.visitFixedSizeList=Xt(eA);kt.prototype.visitMap=Xt(ZE);const hi=new kt,vi=Symbol.for("parent"),Ws=Symbol.for("rowIndex");class md{constructor(t,e){return this[vi]=t,this[Ws]=e,new Proxy(this,new iA)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ws],e=this[vi],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=Gn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Fa(t)}: ${Fa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new nA(this[vi],this[Ws])}}class nA{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,Gn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(md.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[vi]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Ws]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class iA{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[vi].type.children.map(e=>e.name)}has(t,e){return t[vi].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[vi].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[vi].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=Gn.visit(t[vi].children[i],t[Ws]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[vi].type.children.findIndex(s=>s.name===e);return r!==-1?(hi.visit(t[vi].children[r],t[Ws],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Ot extends de{}function Gt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const rA=(n,t)=>864e5*n[t],sA=(n,t)=>null,I0=(n,t,e)=>{if(e+1>=t.length)return null;const i=ke(t[e]),r=ke(t[e+1]);return n.subarray(i,r)},aA=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},R0=({values:n},t)=>rA(n,t),C0=({values:n},t)=>ke(n[t]),Br=({stride:n,values:t},e)=>t[n*e],oA=({stride:n,values:t},e)=>s0(t[n*e]),D0=({values:n},t)=>n[t],lA=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),L0=({values:n,valueOffsets:t},e)=>I0(n,t,e),N0=({values:n,valueOffsets:t},e)=>{const i=I0(n,t,e);return i!==null?Lu(i):null},cA=({values:n},t)=>n[t],uA=({type:n,values:t},e)=>n.precision!==bn.HALF?t[e]:s0(t[e]),dA=(n,t)=>n.type.unit===di.DAY?R0(n,t):C0(n,t),P0=({values:n},t)=>1e3*ke(n[t]),F0=({values:n},t)=>ke(n[t]),U0=({values:n},t)=>Pp(n[t],BigInt(1e3)),O0=({values:n},t)=>Pp(n[t],BigInt(1e6)),hA=(n,t)=>{switch(n.type.unit){case Ht.SECOND:return P0(n,t);case Ht.MILLISECOND:return F0(n,t);case Ht.MICROSECOND:return U0(n,t);case Ht.NANOSECOND:return O0(n,t)}},B0=({values:n},t)=>n[t],V0=({values:n},t)=>n[t],z0=({values:n},t)=>n[t],H0=({values:n},t)=>n[t],fA=(n,t)=>{switch(n.type.unit){case Ht.SECOND:return B0(n,t);case Ht.MILLISECOND:return V0(n,t);case Ht.MICROSECOND:return z0(n,t);case Ht.NANOSECOND:return H0(n,t)}},pA=({values:n,stride:t},e)=>fd.decimal(n.subarray(t*e,t*(e+1))),mA=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new we([l])},gA=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new gd(a.slice(r,s-r))},_A=(n,t)=>new md(n,t),vA=(n,t)=>n.type.mode===Mn.Dense?k0(n,t):G0(n,t),k0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Gn.visit(i,n.valueOffsets[t])},G0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return Gn.visit(i,t)},yA=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},xA=(n,t)=>n.type.unit===Xi.DAY_TIME?W0(n,t):Z0(n,t),W0=({values:n},t)=>n.subarray(2*t,2*(t+1)),Z0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},X0=({values:n},t)=>n[t],Y0=({values:n},t)=>n[t],q0=({values:n},t)=>n[t],j0=({values:n},t)=>n[t],SA=(n,t)=>{switch(n.type.unit){case Ht.SECOND:return X0(n,t);case Ht.MILLISECOND:return Y0(n,t);case Ht.MICROSECOND:return q0(n,t);case Ht.NANOSECOND:return j0(n,t)}},bA=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new we([s])};Ot.prototype.visitNull=Gt(sA);Ot.prototype.visitBool=Gt(aA);Ot.prototype.visitInt=Gt(cA);Ot.prototype.visitInt8=Gt(Br);Ot.prototype.visitInt16=Gt(Br);Ot.prototype.visitInt32=Gt(Br);Ot.prototype.visitInt64=Gt(D0);Ot.prototype.visitUint8=Gt(Br);Ot.prototype.visitUint16=Gt(Br);Ot.prototype.visitUint32=Gt(Br);Ot.prototype.visitUint64=Gt(D0);Ot.prototype.visitFloat=Gt(uA);Ot.prototype.visitFloat16=Gt(oA);Ot.prototype.visitFloat32=Gt(Br);Ot.prototype.visitFloat64=Gt(Br);Ot.prototype.visitUtf8=Gt(N0);Ot.prototype.visitLargeUtf8=Gt(N0);Ot.prototype.visitBinary=Gt(L0);Ot.prototype.visitLargeBinary=Gt(L0);Ot.prototype.visitFixedSizeBinary=Gt(lA);Ot.prototype.visitDate=Gt(dA);Ot.prototype.visitDateDay=Gt(R0);Ot.prototype.visitDateMillisecond=Gt(C0);Ot.prototype.visitTimestamp=Gt(hA);Ot.prototype.visitTimestampSecond=Gt(P0);Ot.prototype.visitTimestampMillisecond=Gt(F0);Ot.prototype.visitTimestampMicrosecond=Gt(U0);Ot.prototype.visitTimestampNanosecond=Gt(O0);Ot.prototype.visitTime=Gt(fA);Ot.prototype.visitTimeSecond=Gt(B0);Ot.prototype.visitTimeMillisecond=Gt(V0);Ot.prototype.visitTimeMicrosecond=Gt(z0);Ot.prototype.visitTimeNanosecond=Gt(H0);Ot.prototype.visitDecimal=Gt(pA);Ot.prototype.visitList=Gt(mA);Ot.prototype.visitStruct=Gt(_A);Ot.prototype.visitUnion=Gt(vA);Ot.prototype.visitDenseUnion=Gt(k0);Ot.prototype.visitSparseUnion=Gt(G0);Ot.prototype.visitDictionary=Gt(yA);Ot.prototype.visitInterval=Gt(xA);Ot.prototype.visitIntervalDayTime=Gt(W0);Ot.prototype.visitIntervalYearMonth=Gt(Z0);Ot.prototype.visitDuration=Gt(SA);Ot.prototype.visitDurationSecond=Gt(X0);Ot.prototype.visitDurationMillisecond=Gt(Y0);Ot.prototype.visitDurationMicrosecond=Gt(q0);Ot.prototype.visitDurationNanosecond=Gt(j0);Ot.prototype.visitFixedSizeList=Gt(bA);Ot.prototype.visitMap=Gt(gA);const Gn=new Ot,Ps=Symbol.for("keys"),Zs=Symbol.for("vals"),Fs=Symbol.for("kKeysAsStrings"),Bu=Symbol.for("_kKeysAsStrings");class gd{constructor(t){return this[Ps]=new we([t.children[0]]).memoize(),this[Zs]=t.children[1],new Proxy(this,new EA)}get[Fs](){return this[Bu]||(this[Bu]=Array.from(this[Ps].toArray(),String))}[Symbol.iterator](){return new MA(this[Ps],this[Zs])}get size(){return this[Ps].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ps],e=this[Zs],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=Gn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Fa(t)}: ${Fa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class MA{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),Gn.visit(this.vals,t)]})}}class EA{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Fs]}has(t,e){return t[Fs].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Fs].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Fs].indexOf(e);if(i!==-1){const r=Gn.visit(Reflect.get(t,Zs),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Fs].indexOf(e);return r!==-1?(hi.visit(Reflect.get(t,Zs),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(gd.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Ps]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Zs]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Bu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let of;function K0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(of=s,s=a,a=of),a>r&&(a=r),i?i(n,s,a):[s,a]}const _d=(n,t)=>n<0?t+n:n,lf=n=>n!==n;function oa(n){if(typeof n!=="object"||n===null)return lf(n)?lf:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?bE(n,e):!1:n instanceof Map?wA(n):Array.isArray(n)?AA(n):n instanceof we?TA(n):IA(n,!0)}function AA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=oa(n[e]);return Pl(t)}function wA(n){let t=-1;const e=[];for(const i of n.values())e[++t]=oa(i);return Pl(e)}function TA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=oa(n.get(e));return Pl(t)}function IA(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=oa(n[e[r]]);return Pl(i,e)}function Pl(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return RA(n,e);case Map:return cf(n,e,e.keys());case gd:case md:case Object:case void 0:return cf(n,e,t||Object.keys(e))}return e instanceof we?CA(n,e):!1}}function RA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function CA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function cf(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),d=r.next();for(;a<o&&!c.done&&!d.done&&!l.done&&!(c.value!==d.value||!n[a](l.value));++a,c=i.next(),d=r.next(),l=s.next());return a===o&&c.done&&d.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function J0(n,t,e,i){return(e&1<<i)!==0}function DA(n,t,e,i){return(e&1<<i)>>i}function gl(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):_l(new vd(e,n,t,null,J0)).subarray(0,i)),r}return e}function _l(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class vd{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Vu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new vd(n,t,e-t,n,DA))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Vu(n,t,r)+Vu(n,i,e)+LA(n,r>>3,i-r>>3)}function LA(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=Tc(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=Tc(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=Tc(s.getUint8(r)),r+=1;return i}function Tc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const NA=-1;class Le{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Ct.isSparseUnion(t)?this.children.some(e=>e.nullable):Ct.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Ct.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=NA&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Vu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Le?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=rr(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Ct.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===Mn.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Ct.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===Mn.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,d=l>>3;(!s||s.byteLength<=d)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(gl(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[d];i=(p&c)!==0,s[d]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Le(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===D.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(gl(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[ir.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[ir.TYPE])&&(a[ir.TYPE]=s.subarray(t,t+e)),(s=a[ir.OFFSET])&&(a[ir.OFFSET]=s.subarray(t,t+e+1))||(s=a[ir.DATA])&&(a[ir.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Le.prototype.children=Object.freeze([]);class Ia extends de{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Le(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.data),s=ge(t.nullBitmap),a=ga(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.data),s=ge(t.nullBitmap),a=jh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.data),s=ge(t.nullBitmap),a=ga(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.data),s=ge(t.nullBitmap),a=jh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=ge(t.nullBitmap),a=ga(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=ge(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Fe(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Ct.isSparseUnion(e))return new Le(e,i,a,o,[void 0,void 0,void 0,s],r);const l=ga(t.valueOffsets);return new Le(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.indices.ArrayType,t.data),{["dictionary"]:a=new we([new Ia().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=ge(t.nullBitmap),s=Fe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new Ia().visit({type:e.valueType})}=t,s=ge(t.nullBitmap),{["length"]:a=r.length/rr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Le(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new Ia().visit({type:e.childType})}=t,s=ge(t.nullBitmap),a=ga(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Le(e,i,o,l,[a,void 0,s],[r])}}const PA=new Ia;function he(n){return PA.visit(n)}class uf{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function FA(n){return n.some(t=>t.nullable)}function Q0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function $0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function tm(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const d=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(d,p-d))}return r.length===0&&r.push(n[0].slice(0,0)),r}function yd(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function xd(n,t){return n.getValid(t)}function vl(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return yd(i,this._offsets,e,t)}}function em(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=yd(s,this._offsets,i,e);return t=void 0,a}}function nm(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,d=i.length;++c<d;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):yd(s,this._offsets,r,e);return t=void 0,a}}class Bt extends de{}function UA(n,t){return t===null&&n.length>0?0:-1}function OA(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new vd(e,n.offset+(t||0),n.length,e,J0)){if(!r)return i;++i}return-1}function jt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case D.Union:break;case D.Dictionary:break;default:return OA(n,e)}const i=Gn.getVisitFn(n),r=oa(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function im(n,t,e){const i=Gn.getVisitFn(n),r=oa(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Bt.prototype.visitNull=UA;Bt.prototype.visitBool=jt;Bt.prototype.visitInt=jt;Bt.prototype.visitInt8=jt;Bt.prototype.visitInt16=jt;Bt.prototype.visitInt32=jt;Bt.prototype.visitInt64=jt;Bt.prototype.visitUint8=jt;Bt.prototype.visitUint16=jt;Bt.prototype.visitUint32=jt;Bt.prototype.visitUint64=jt;Bt.prototype.visitFloat=jt;Bt.prototype.visitFloat16=jt;Bt.prototype.visitFloat32=jt;Bt.prototype.visitFloat64=jt;Bt.prototype.visitUtf8=jt;Bt.prototype.visitLargeUtf8=jt;Bt.prototype.visitBinary=jt;Bt.prototype.visitLargeBinary=jt;Bt.prototype.visitFixedSizeBinary=jt;Bt.prototype.visitDate=jt;Bt.prototype.visitDateDay=jt;Bt.prototype.visitDateMillisecond=jt;Bt.prototype.visitTimestamp=jt;Bt.prototype.visitTimestampSecond=jt;Bt.prototype.visitTimestampMillisecond=jt;Bt.prototype.visitTimestampMicrosecond=jt;Bt.prototype.visitTimestampNanosecond=jt;Bt.prototype.visitTime=jt;Bt.prototype.visitTimeSecond=jt;Bt.prototype.visitTimeMillisecond=jt;Bt.prototype.visitTimeMicrosecond=jt;Bt.prototype.visitTimeNanosecond=jt;Bt.prototype.visitDecimal=jt;Bt.prototype.visitList=jt;Bt.prototype.visitStruct=jt;Bt.prototype.visitUnion=jt;Bt.prototype.visitDenseUnion=im;Bt.prototype.visitSparseUnion=im;Bt.prototype.visitDictionary=jt;Bt.prototype.visitInterval=jt;Bt.prototype.visitIntervalDayTime=jt;Bt.prototype.visitIntervalYearMonth=jt;Bt.prototype.visitDuration=jt;Bt.prototype.visitDurationSecond=jt;Bt.prototype.visitDurationMillisecond=jt;Bt.prototype.visitDurationMicrosecond=jt;Bt.prototype.visitDurationNanosecond=jt;Bt.prototype.visitFixedSizeList=jt;Bt.prototype.visitMap=jt;const yl=new Bt;class Vt extends de{}function Wt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Ct.isInt(t)&&t.bitWidth!==64||Ct.isTime(t)&&t.bitWidth!==64||Ct.isFloat(t)&&t.precision!==bn.HALF))return new uf(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new uf(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new BA(a)})}class BA{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}Vt.prototype.visitNull=Wt;Vt.prototype.visitBool=Wt;Vt.prototype.visitInt=Wt;Vt.prototype.visitInt8=Wt;Vt.prototype.visitInt16=Wt;Vt.prototype.visitInt32=Wt;Vt.prototype.visitInt64=Wt;Vt.prototype.visitUint8=Wt;Vt.prototype.visitUint16=Wt;Vt.prototype.visitUint32=Wt;Vt.prototype.visitUint64=Wt;Vt.prototype.visitFloat=Wt;Vt.prototype.visitFloat16=Wt;Vt.prototype.visitFloat32=Wt;Vt.prototype.visitFloat64=Wt;Vt.prototype.visitUtf8=Wt;Vt.prototype.visitLargeUtf8=Wt;Vt.prototype.visitBinary=Wt;Vt.prototype.visitLargeBinary=Wt;Vt.prototype.visitFixedSizeBinary=Wt;Vt.prototype.visitDate=Wt;Vt.prototype.visitDateDay=Wt;Vt.prototype.visitDateMillisecond=Wt;Vt.prototype.visitTimestamp=Wt;Vt.prototype.visitTimestampSecond=Wt;Vt.prototype.visitTimestampMillisecond=Wt;Vt.prototype.visitTimestampMicrosecond=Wt;Vt.prototype.visitTimestampNanosecond=Wt;Vt.prototype.visitTime=Wt;Vt.prototype.visitTimeSecond=Wt;Vt.prototype.visitTimeMillisecond=Wt;Vt.prototype.visitTimeMicrosecond=Wt;Vt.prototype.visitTimeNanosecond=Wt;Vt.prototype.visitDecimal=Wt;Vt.prototype.visitList=Wt;Vt.prototype.visitStruct=Wt;Vt.prototype.visitUnion=Wt;Vt.prototype.visitDenseUnion=Wt;Vt.prototype.visitSparseUnion=Wt;Vt.prototype.visitDictionary=Wt;Vt.prototype.visitInterval=Wt;Vt.prototype.visitIntervalDayTime=Wt;Vt.prototype.visitIntervalYearMonth=Wt;Vt.prototype.visitDuration=Wt;Vt.prototype.visitDurationSecond=Wt;Vt.prototype.visitDurationMillisecond=Wt;Vt.prototype.visitDurationMicrosecond=Wt;Vt.prototype.visitDurationNanosecond=Wt;Vt.prototype.visitFixedSizeList=Wt;Vt.prototype.visitMap=Wt;const Sd=new Vt;var rm;const sm={},am={};class we{constructor(t){var e,i,r;const s=t[0]instanceof we?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Le)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=sm[a.typeId],d=s[0];this.isValid=p=>xd(d,p),this.get=p=>o(d,p),this.set=(p,f)=>l(d,p,f),this.indexOf=p=>c(d,p),this._offsets=[0,d.length];break}default:Object.setPrototypeOf(this,am[a.typeId]),this._offsets=$0(s);break}this.data=s,this.type=a,this.stride=rr(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return FA(this.data)}get nullCount(){return Q0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${D[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(_d(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return Sd.visit(this)}concat(...t){return new we(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new we(K0(this,t,e,({data:i,_offsets:r},s,a)=>tm(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case D.Int:case D.Float:case D.Decimal:case D.Time:case D.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new we(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Ct.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Ct.isDictionary(this.type)){const t=new xl(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new we(e)}return new xl(this)}unmemoize(){if(Ct.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new we(e)}return this}}rm=Symbol.toStringTag;we[rm]=(n=>{n.type=Ct.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(D).map(e=>D[e]).filter(e=>typeof e=="number"&&e!==D.NONE);for(const e of t){const i=Gn.getVisitFnByTypeId(e),r=hi.getVisitFnByTypeId(e),s=yl.getVisitFnByTypeId(e);sm[e]={get:i,set:r,indexOf:s},am[e]=Object.create(n,{isValid:{value:vl(xd)},get:{value:vl(Gn.getVisitFnByTypeId(e))},set:{value:em(hi.getVisitFnByTypeId(e))},indexOf:{value:nm(yl.getVisitFnByTypeId(e))}})}return"Vector"})(we.prototype);class xl extends we{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new xl(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new we(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class zu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Yn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Ie),(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):rn.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ii).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new zu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new zu).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new un).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,rn.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class Te{constructor(t=[],e,i,r=rn.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=Hu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new Te(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new Te(e,this.metadata)}assign(...t){const e=t[0]instanceof Te?t[0]:Array.isArray(t[0])?new Te(t[0]):new Te(t),i=[...this.fields],r=wo(wo(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:wo(wo(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=Hu(s,new Map);return new Te([...i,...s],r,new Map([...this.dictionaries,...a]))}}Te.prototype.fields=null;Te.prototype.metadata=null;Te.prototype.dictionaries=null;class Ye{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Ye(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Ye.new(e,i,r,s)}}Ye.prototype.type=null;Ye.prototype.name=null;Ye.prototype.nullable=null;Ye.prototype.metadata=null;function wo(n,t){return new Map([...n||new Map,...t||new Map])}function Hu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Ct.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Hu(s.children,t)}return t}var VA=Cp,zA=Qs;class Va{static decode(t){t=new zA(ge(t));const e=Yn.getRootAsFooter(t),i=Te.decode(e.schema(),new Map,e.version());return new HA(i,e)}static encode(t){const e=new VA,i=Te.encode(e,t.schema);Yn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Fr.encode(e,a);const r=e.endVector();Yn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Fr.encode(e,a);const s=e.endVector();return Yn.startFooter(e),Yn.addSchema(e,i),Yn.addVersion(e,rn.V5),Yn.addRecordBatches(e,r),Yn.addDictionaries(e,s),Yn.finishFooterBuffer(e,Yn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=rn.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class HA extends Va{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Fr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Fr.decode(e)}return null}}class Fr{static decode(t){return new Fr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return zu.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=ke(i),this.bodyLength=ke(e)}}const qe=Object.freeze({done:!0,value:void 0});class df{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class bd{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class kA extends bd{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Kt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(qe);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return ri.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return ri.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.abort(t),qe})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),qe})}read(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(qe)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Ho extends kA{write(t){if((t=ge(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Lu(this.toUint8Array(!0)):this.toUint8Array(!1).then(Lu)}toUint8Array(t=!1){return t?Zi(this._values)[0]:Kt(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=es(this),d;d=yield c.next(),e=d.done,!e;l=!0){s=d.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return Zi(a,o)[0]})}}class Sl{constructor(t){t&&(this.source=new GA(ri.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class ea{constructor(t){t instanceof ea?this.source=t.source:t instanceof Ho?this.source=new Yr(ri.fromAsyncIterable(t)):wp(t)?this.source=new Yr(ri.fromNodeStream(t)):dd(t)?this.source=new Yr(ri.fromDOMStream(t)):Ap(t)?this.source=new Yr(ri.fromDOMStream(t.body)):Xa(t)?this.source=new Yr(ri.fromIterable(t)):rs(t)?this.source=new Yr(ri.fromAsyncIterable(t)):aa(t)&&(this.source=new Yr(ri.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class GA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||qe)}return(t){return Object.create(this.source.return&&this.source.return(t)||qe)}}class Yr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Kt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Kt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return Kt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return Kt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Kt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class hf extends Sl{constructor(t,e){super(),this.position=0,this.buffer=ge(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class bl extends ea{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Kt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Kt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Kt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Kt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return Kt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Kt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const WA=65536;function Bs(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const na=8,Md=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class om{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?WA:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Bs(this.buffer[1])} ${Bs(this.buffer[0])}`}}class Ne extends om{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return Ne.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Ne.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new Ne(e);for(let s=0;s<i;){const a=na<i-s?na:i-s,o=new Ne(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new Ne(new Uint32Array([Md[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Ne.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Ne(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ne(new Uint32Array(t.buffer)).plus(e)}}class On extends om{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return On.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return On.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new On(e);for(let a=i?1:0;a<r;){const o=na<r-a?na:r-a,l=new On(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new On(new Uint32Array([Md[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)On.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new On(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new On(new Uint32Array(t.buffer)).plus(e)}}class Ri{constructor(t){this.buffer=t}high(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new Ne(new Uint32Array([this.buffer[3],0])),i=new Ne(new Uint32Array([this.buffer[2],0])),r=new Ne(new Uint32Array([this.buffer[1],0])),s=new Ne(new Uint32Array([this.buffer[0],0])),a=new Ne(new Uint32Array([t.buffer[3],0])),o=new Ne(new Uint32Array([t.buffer[2],0])),l=new Ne(new Uint32Array([t.buffer[1],0])),c=new Ne(new Uint32Array([t.buffer[0],0]));let d=Ne.multiply(s,c);this.buffer[0]=d.low();const p=new Ne(new Uint32Array([d.high(),0]));return d=Ne.multiply(r,c),p.plus(d),d=Ne.multiply(s,l),p.plus(d),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(d)?1:0,this.buffer[2]=p.high(),new Ne(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Ne.multiply(i,c)).plus(Ne.multiply(r,l)).plus(Ne.multiply(s,o)),this.buffer[3]+=Ne.multiply(e,c).plus(Ne.multiply(i,l)).plus(Ne.multiply(r,o)).plus(Ne.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Bs(this.buffer[3])} ${Bs(this.buffer[2])} ${Bs(this.buffer[1])} ${Bs(this.buffer[0])}`}static multiply(t,e){return new Ri(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ri(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return Ri.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return Ri.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new Ri(e);for(let a=i?1:0;a<r;){const o=na<r-a?na:r-a,l=new Ri(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new Ri(new Uint32Array([Md[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)Ri.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class lm extends de{constructor(t,e,i,r,s=rn.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof Ye?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return he({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<rn.V5&&this.readNullBitmap(t,i),t.mode===Mn.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class ZA extends lm{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):_l(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Fe(Uint8Array,Fe(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Fe(Uint8Array,Fe(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Ct.isTimestamp(t)||(Ct.isInt(t)||Ct.isTime(t))&&t.bitWidth===64||Ct.isDuration(t)||Ct.isDate(t)&&t.unit===di.MILLISECOND?Fe(Uint8Array,On.convertArray(i[e])):Ct.isDecimal(t)?Fe(Uint8Array,Ri.convertArray(i[e])):Ct.isBinary(t)||Ct.isLargeBinary(t)||Ct.isFixedSizeBinary(t)?XA(i[e]):Ct.isBool(t)?_l(i[e]):Ct.isUtf8(t)||Ct.isLargeUtf8(t)?ud(i[e].join("")):Fe(Uint8Array,Fe(t.ArrayType,i[e].map(r=>+r)))}}function XA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class zt extends de{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Fn(n,t){return t instanceof n.constructor}function os(n,t){return n===t||Fn(n,t)}function gr(n,t){return n===t||Fn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Fl(n,t){return n===t||Fn(n,t)&&n.precision===t.precision}function YA(n,t){return n===t||Fn(n,t)&&n.byteWidth===t.byteWidth}function Ed(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function Ya(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function qa(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function qA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function jA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function Ad(n,t){return n===t||Fn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Ur.compareManyFields(n.children,t.children)}function KA(n,t){return n===t||Fn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Ur.visit(n.indices,t.indices)&&Ur.visit(n.dictionary,t.dictionary)}function wd(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function ja(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function JA(n,t){return n===t||Fn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function QA(n,t){return n===t||Fn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}zt.prototype.visitNull=os;zt.prototype.visitBool=os;zt.prototype.visitInt=gr;zt.prototype.visitInt8=gr;zt.prototype.visitInt16=gr;zt.prototype.visitInt32=gr;zt.prototype.visitInt64=gr;zt.prototype.visitUint8=gr;zt.prototype.visitUint16=gr;zt.prototype.visitUint32=gr;zt.prototype.visitUint64=gr;zt.prototype.visitFloat=Fl;zt.prototype.visitFloat16=Fl;zt.prototype.visitFloat32=Fl;zt.prototype.visitFloat64=Fl;zt.prototype.visitUtf8=os;zt.prototype.visitLargeUtf8=os;zt.prototype.visitBinary=os;zt.prototype.visitLargeBinary=os;zt.prototype.visitFixedSizeBinary=YA;zt.prototype.visitDate=Ed;zt.prototype.visitDateDay=Ed;zt.prototype.visitDateMillisecond=Ed;zt.prototype.visitTimestamp=Ya;zt.prototype.visitTimestampSecond=Ya;zt.prototype.visitTimestampMillisecond=Ya;zt.prototype.visitTimestampMicrosecond=Ya;zt.prototype.visitTimestampNanosecond=Ya;zt.prototype.visitTime=qa;zt.prototype.visitTimeSecond=qa;zt.prototype.visitTimeMillisecond=qa;zt.prototype.visitTimeMicrosecond=qa;zt.prototype.visitTimeNanosecond=qa;zt.prototype.visitDecimal=os;zt.prototype.visitList=qA;zt.prototype.visitStruct=jA;zt.prototype.visitUnion=Ad;zt.prototype.visitDenseUnion=Ad;zt.prototype.visitSparseUnion=Ad;zt.prototype.visitDictionary=KA;zt.prototype.visitInterval=wd;zt.prototype.visitIntervalDayTime=wd;zt.prototype.visitIntervalYearMonth=wd;zt.prototype.visitDuration=ja;zt.prototype.visitDurationSecond=ja;zt.prototype.visitDurationMillisecond=ja;zt.prototype.visitDurationMicrosecond=ja;zt.prototype.visitDurationNanosecond=ja;zt.prototype.visitFixedSizeList=JA;zt.prototype.visitMap=QA;const Ur=new zt;function ku(n,t){return Ur.compareSchemas(n,t)}function Ic(n,t){return $A(n,t.map(e=>e.data.concat()))}function $A(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,f)=>Math.max(p,f.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,d=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)d[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(d=tw(e,a,d,t,r),a>0&&(i[s++]=he({type:new Cn(e),length:a,nullCount:0,children:d.slice()})))}return[n=n.assign(e),i.map(p=>new Vn(n,p))]}function tw(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],d=c?.length;if(d>=t)d===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,d-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:he({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var cm;class Rn{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new Te([]),this._offsets=[0],this;let r,s;t[0]instanceof Te&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof Vn)return[l];if(l instanceof Rn)return l.batches;if(l instanceof Le){if(l.type instanceof Cn)return[new Vn(new Te(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),d=c.map(_=>new we([l[_]])),p=r??new Te(c.map((_,v)=>new Ye(String(_),d[v].type,d[v].nullable))),[,f]=Ic(p,d);return f.length===0?[new Vn(l)]:f}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new Te([]),!(r instanceof Te))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof Vn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!ku(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??$0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=Q0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(_d(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?Sd.visit(new we(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Rn(e,i.map(r=>new Vn(e,r)))}slice(t,e){const i=this.schema;[t,e]=K0({length:this.numRows},t,e);const r=tm(this.data,this._offsets,t,e);return new Rn(i,r.map(s=>new Vn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=he({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new we(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new we([he({type:new Pr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=Ic(i,o)}return new Rn(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Rn(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[d,p]=o,f=e.findIndex(_=>_.name===l.name);return~f?p[f]=c:d.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new Rn(...Ic(s,a))}}cm=Symbol.toStringTag;Rn[cm]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=vl(xd),n.get=vl(Gn.getVisitFn(D.Struct)),n.set=em(hi.getVisitFn(D.Struct)),n.indexOf=nm(yl.getVisitFn(D.Struct)),"Table"))(Rn.prototype);var um;let Vn=class Ta{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof Te))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=he({nullCount:0,type:new Cn(this.schema.fields),children:this.schema.fields.map(e=>he({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Le))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=ff(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,d)=>(l.children[d]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[d]=Ye.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new Te(i),o=he({type:new Cn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=ff(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=dm(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return Gn.visit(this.data,t)}at(t){return this.get(_d(t,this.numRows))}set(t,e){return hi.visit(this.data,t,e)}indexOf(t,e){return yl.visit(this.data,t,e)}[Symbol.iterator](){return Sd.visit(new we([this.data]))}toArray(){return[...this]}concat(...t){return new Rn(this.schema,[this,...t])}slice(t,e){const[i]=new we([this.data]).slice(t,e).data;return new Ta(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new we([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new we([he({type:new Pr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new Te(s,new Map(this.schema.metadata)),r=he({type:new Cn(s),children:a})}return new Ta(i,r)}select(t){const e=this.schema.select(t),i=new Cn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new Ta(e,he({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=he({type:new Cn(e.fields),length:this.numRows,children:i});return new Ta(e,r)}};um=Symbol.toStringTag;Vn[um]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Vn.prototype);function ff(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:he({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),he({type:new Cn(r),length:e,children:s})]}function dm(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])dm(o.children,c?.children,e);if(Ct.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class Td extends Vn{constructor(t){const e=t.fields.map(r=>he({type:r.type})),i=he({type:new Cn(t.fields),nullCount:0,children:e});super(t,i)}}let Tr=class Ti{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Ie),(e||new Ti).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):rn.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):Me.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new un).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,rn.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,Me.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return Ti.startMessage(t),Ti.addVersion(t,e),Ti.addHeaderType(t,i),Ti.addHeader(t,r),Ti.addBodyLength(t,s),Ti.addCustomMetadata(t,a),Ti.endMessage(t)}};class ew extends de{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return rf.startNull(e),rf.endNull(e)}visitInt(t,e){return qn.startInt(e),qn.addBitWidth(e,t.bitWidth),qn.addIsSigned(e,t.isSigned),qn.endInt(e)}visitFloat(t,e){return Ni.startFloatingPoint(e),Ni.addPrecision(e,t.precision),Ni.endFloatingPoint(e)}visitBinary(t,e){return Qh.startBinary(e),Qh.endBinary(e)}visitLargeBinary(t,e){return tf.startLargeBinary(e),tf.endLargeBinary(e)}visitBool(t,e){return $h.startBool(e),$h.endBool(e)}visitUtf8(t,e){return sf.startUtf8(e),sf.endUtf8(e)}visitLargeUtf8(t,e){return ef.startLargeUtf8(e),ef.endLargeUtf8(e)}visitDecimal(t,e){return Is.startDecimal(e),Is.addScale(e,t.scale),Is.addPrecision(e,t.precision),Is.addBitWidth(e,t.bitWidth),Is.endDecimal(e)}visitDate(t,e){return Fo.startDate(e),Fo.addUnit(e,t.unit),Fo.endDate(e)}visitTime(t,e){return si.startTime(e),si.addUnit(e,t.unit),si.addBitWidth(e,t.bitWidth),si.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return ai.startTimestamp(e),ai.addUnit(e,t.unit),i!==void 0&&ai.addTimezone(e,i),ai.endTimestamp(e)}visitInterval(t,e){return Pi.startInterval(e),Pi.addUnit(e,t.unit),Pi.endInterval(e)}visitDuration(t,e){return Uo.startDuration(e),Uo.addUnit(e,t.unit),Uo.endDuration(e)}visitList(t,e){return nf.startList(e),nf.endList(e)}visitStruct(t,e){return ts.startStruct_(e),ts.endStruct_(e)}visitUnion(t,e){Bn.startTypeIdsVector(e,t.typeIds.length);const i=Bn.createTypeIdsVector(e,t.typeIds);return Bn.startUnion(e),Bn.addMode(e,t.mode),Bn.addTypeIds(e,i),Bn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return ar.startDictionaryEncoding(e),ar.addId(e,BigInt(t.id)),ar.addIsOrdered(e,t.isOrdered),i!==void 0&&ar.addIndexType(e,i),ar.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Oo.startFixedSizeBinary(e),Oo.addByteWidth(e,t.byteWidth),Oo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Bo.startFixedSizeList(e),Bo.addListSize(e,t.listSize),Bo.endFixedSizeList(e)}visitMap(t,e){return Vo.startMap(e),Vo.addKeysSorted(e,t.keysSorted),Vo.endMap(e)}}const Rc=new ew;function nw(n,t=new Map){return new Te(rw(n,t),ko(n.metadata),t)}function hm(n){return new ti(n.count,fm(n.columns),pm(n.columns))}function iw(n){return new Yi(hm(n.data),n.id,n.isDelta)}function rw(n,t){return(n.fields||[]).filter(Boolean).map(e=>Ye.fromJSON(e,t))}function pf(n,t){return(n.children||[]).filter(Boolean).map(e=>Ye.fromJSON(e,t))}function fm(n){return(n||[]).reduce((t,e)=>[...t,new Or(e.count,sw(e.VALIDITY)),...fm(e.children)],[])}function pm(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Vi(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Vi(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Vi(t.length,r.OFFSET.length)),r.DATA&&t.push(new Vi(t.length,r.DATA.length)),t=pm(r.children,t)}return t}function sw(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function aw(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=gf(n,pf(n,t)),r=new Ye(n.name,a,n.nullable,ko(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?mf(i):new Ba,o=new ta(t.get(e),i,e,s.isOrdered),r=new Ye(n.name,o,n.nullable,ko(n.metadata))):(i=(i=s.indexType)?mf(i):new Ba,t.set(e,a=gf(n,pf(n,t))),o=new ta(a,i,e,s.isOrdered),r=new Ye(n.name,o,n.nullable,ko(n.metadata))),r||null}function ko(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function mf(n){return new ss(n.isSigned,n.bitWidth)}function gf(n,t){const e=n.type.name;switch(e){case"NONE":return new Pr;case"null":return new Pr;case"binary":return new tl;case"largebinary":return new el;case"utf8":return new nl;case"largeutf8":return new il;case"bool":return new rl;case"list":return new dl((t||[])[0]);case"struct":return new Cn(t||[]);case"struct_":return new Cn(t||[])}switch(e){case"int":{const i=n.type;return new ss(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new $o(bn[i.precision])}case"decimal":{const i=n.type;return new sl(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new al(di[i.unit])}case"time":{const i=n.type;return new ol(Ht[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new ll(Ht[i.unit],i.timezone)}case"interval":{const i=n.type;return new cl(Xi[i.unit])}case"duration":{const i=n.type;return new ul(Ht[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new hl(Mn[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new fl(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new pl(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new ml((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var ow=Cp,lw=Qs;class Dn{static fromJSON(t,e){const i=new Dn(0,rn.V5,e);return i._createHeader=cw(t,e),i}static decode(t){t=new lw(ge(t));const e=Tr.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Dn(i,r,s);return a._createHeader=uw(e,s),a}static encode(t){const e=new ow;let i=-1;return t.isSchema()?i=Te.encode(e,t.header()):t.isRecordBatch()?i=ti.encode(e,t.header()):t.isDictionaryBatch()&&(i=Yi.encode(e,t.header())),Tr.startMessage(e),Tr.addVersion(e,rn.V5),Tr.addHeader(e,i),Tr.addHeaderType(e,t.headerType),Tr.addBodyLength(e,BigInt(t.bodyLength)),Tr.finishMessageBuffer(e,Tr.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof Te)return new Dn(0,rn.V5,Me.Schema,t);if(t instanceof ti)return new Dn(e,rn.V5,Me.RecordBatch,t);if(t instanceof Yi)return new Dn(e,rn.V5,Me.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===Me.Schema}isRecordBatch(){return this.headerType===Me.RecordBatch}isDictionaryBatch(){return this.headerType===Me.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=ke(t)}}class ti{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=ke(t)}}class Yi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=ke(e)}}class Vi{constructor(t,e){this.offset=ke(t),this.length=ke(e)}}class Or{constructor(t,e){this.length=ke(t),this.nullCount=ke(e)}}function cw(n,t){return(()=>{switch(t){case Me.Schema:return Te.fromJSON(n);case Me.RecordBatch:return ti.fromJSON(n);case Me.DictionaryBatch:return Yi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${Me[t]}, type: ${t} }`)})}function uw(n,t){return(()=>{switch(t){case Me.Schema:return Te.decode(n.header(new Ii),new Map,n.version());case Me.RecordBatch:return ti.decode(n.header(new nr),n.version());case Me.DictionaryBatch:return Yi.decode(n.header(new ws),n.version())}throw new Error(`Unrecognized Message type: { name: ${Me[t]}, type: ${t} }`)})}Ye.encode=Sw;Ye.decode=yw;Ye.fromJSON=aw;Te.encode=xw;Te.decode=dw;Te.fromJSON=nw;ti.encode=bw;ti.decode=hw;ti.fromJSON=hm;Yi.encode=Mw;Yi.decode=fw;Yi.fromJSON=iw;Or.encode=Ew;Or.decode=mw;Vi.encode=Aw;Vi.decode=pw;function dw(n,t=new Map,e=rn.V5){const i=vw(n,t);return new Te(i,Go(n),t,e)}function hw(n,t=rn.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new ti(n.length(),gw(n),_w(n,t))}function fw(n,t=rn.V5){return new Yi(ti.decode(n.data(),t),n.id(),n.isDelta())}function pw(n){return new Vi(n.offset(),n.length())}function mw(n){return new Or(n.length(),n.nullCount())}function gw(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Or.decode(e));return t}function _w(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<rn.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Vi.decode(i));return e}function vw(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=Ye.decode(i,t));return e}function _f(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=Ye.decode(i,t));return e}function yw(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=yf(n,_f(n,t)),i=new Ye(n.name(),r,n.nullable(),Go(n))):t.has(e=ke(o.id()))?(s=(s=o.indexType())?vf(s):new Ba,a=new ta(t.get(e),s,e,o.isOrdered()),i=new Ye(n.name(),a,n.nullable(),Go(n))):(s=(s=o.indexType())?vf(s):new Ba,t.set(e,r=yf(n,_f(n,t))),a=new ta(r,s,e,o.isOrdered()),i=new Ye(n.name(),a,n.nullable(),Go(n))),i||null}function Go(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function vf(n){return new ss(n.isSigned(),n.bitWidth())}function yf(n,t){const e=n.typeType();switch(e){case Ze.NONE:return new Pr;case Ze.Null:return new Pr;case Ze.Binary:return new tl;case Ze.LargeBinary:return new el;case Ze.Utf8:return new nl;case Ze.LargeUtf8:return new il;case Ze.Bool:return new rl;case Ze.List:return new dl((t||[])[0]);case Ze.Struct_:return new Cn(t||[])}switch(e){case Ze.Int:{const i=n.type(new qn);return new ss(i.isSigned(),i.bitWidth())}case Ze.FloatingPoint:{const i=n.type(new Ni);return new $o(i.precision())}case Ze.Decimal:{const i=n.type(new Is);return new sl(i.scale(),i.precision(),i.bitWidth())}case Ze.Date:{const i=n.type(new Fo);return new al(i.unit())}case Ze.Time:{const i=n.type(new si);return new ol(i.unit(),i.bitWidth())}case Ze.Timestamp:{const i=n.type(new ai);return new ll(i.unit(),i.timezone())}case Ze.Interval:{const i=n.type(new Pi);return new cl(i.unit())}case Ze.Duration:{const i=n.type(new Uo);return new ul(i.unit())}case Ze.Union:{const i=n.type(new Bn);return new hl(i.mode(),i.typeIdsArray()||[],t||[])}case Ze.FixedSizeBinary:{const i=n.type(new Oo);return new fl(i.byteWidth())}case Ze.FixedSizeList:{const i=n.type(new Bo);return new pl(i.listSize(),(t||[])[0])}case Ze.Map:{const i=n.type(new Vo);return new ml((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ze[e]}" (${e})`)}function xw(n,t){const e=t.fields.map(s=>Ye.encode(n,s));Ii.startFieldsVector(n,e.length);const i=Ii.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Ii.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return un.startKeyValue(n),un.addKey(n,o),un.addValue(n,l),un.endKeyValue(n)})):-1;return Ii.startSchema(n),Ii.addFields(n,i),Ii.addEndianness(n,ww?$s.Little:$s.Big),r!==-1&&Ii.addCustomMetadata(n,r),Ii.endSchema(n)}function Sw(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Ct.isDictionary(s)?(a=s.dictionary.typeId,r=Rc.visit(s,n),i=Rc.visit(s.dictionary,n)):i=Rc.visit(s,n);const o=(s.children||[]).map(d=>Ye.encode(n,d)),l=ni.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?ni.createCustomMetadataVector(n,[...t.metadata].map(([d,p])=>{const f=n.createString(`${d}`),_=n.createString(`${p}`);return un.startKeyValue(n),un.addKey(n,f),un.addValue(n,_),un.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),ni.startField(n),ni.addType(n,i),ni.addTypeType(n,a),ni.addChildren(n,l),ni.addNullable(n,!!t.nullable),e!==-1&&ni.addName(n,e),r!==-1&&ni.addDictionary(n,r),c!==-1&&ni.addCustomMetadata(n,c),ni.endField(n)}function bw(n,t){const e=t.nodes||[],i=t.buffers||[];nr.startNodesVector(n,e.length);for(const a of e.slice().reverse())Or.encode(n,a);const r=n.endVector();nr.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Vi.encode(n,a);const s=n.endVector();return nr.startRecordBatch(n),nr.addLength(n,BigInt(t.length)),nr.addNodes(n,r),nr.addBuffers(n,s),nr.endRecordBatch(n)}function Mw(n,t){const e=ti.encode(n,t.data);return ws.startDictionaryBatch(n),ws.addId(n,BigInt(t.id)),ws.addIsDelta(n,t.isDelta),ws.addData(n,e),ws.endDictionaryBatch(n)}function Ew(n,t){return Np.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function Aw(n,t){return Lp.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const ww=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),Id=n=>`Expected ${Me[n]} Message in stream, but was null or length 0.`,Rd=n=>`Header pointer of flatbuffer-encoded ${Me[n]} Message is null or length 0.`,mm=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,gm=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class _m{constructor(t){this.source=t instanceof Sl?t:new Sl(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?qe:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Id(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=ge(this.source.read(t));if(e.byteLength<t)throw new Error(gm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=Me.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Rd(e));return r}readMetadataLength(){const t=this.source.read(Ul),e=t&&new Qs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return qe;if(e.byteLength<t)throw new Error(mm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}}}class Tw{constructor(t,e){this.source=t instanceof ea?t:Ep(t)?new bl(t,e):new ea(t)}[Symbol.asyncIterator](){return this}next(){return Kt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?qe:t})}throw(t){return Kt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Kt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Kt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Id(t));return e.value})}readMessageBody(t){return Kt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=ge(yield this.source.read(t));if(e.byteLength<t)throw new Error(gm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return Kt(this,arguments,void 0,function*(t=!1){const e=Me.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Rd(e));return r})}readMetadataLength(){return Kt(this,void 0,void 0,function*(){const t=yield this.source.read(Ul),e=t&&new Qs(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return Kt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return qe;if(e.byteLength<t)throw new Error(mm(t,e.byteLength));return{done:!1,value:Dn.decode(e)}})}}class Iw extends _m{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof df?t:new df(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Dn.fromJSON(t.schema,Me.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Dn.fromJSON(e,Me.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Dn.fromJSON(e,Me.RecordBatch)}}return this._body=[],qe}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Id(t));return e.value}readSchema(){const t=Me.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(Rd(t));return i}}const Ul=4,Gu="ARROW1",za=new Uint8Array(Gu.length);for(let n=0;n<Gu.length;n+=1)za[n]=Gu.codePointAt(n);function Cd(n,t=0){for(let e=-1,i=za.length;++e<i;)if(za[e]!==n[t+e])return!1;return!0}const Ka=za.length,vm=Ka+Ul,Rw=Ka*2+Ul;class ci extends bd{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return rs(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return ri.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return ri.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof ci?t:Nu(t)?Nw(t):Ep(t)?Uw(t):rs(t)?Kt(this,void 0,void 0,function*(){return yield ci.from(yield t)}):Ap(t)||dd(t)||wp(t)||aa(t)?Fw(new ea(t)):Pw(new Sl(t))}static readAll(t){return t instanceof ci?t.isSync()?xf(t):Sf(t):Nu(t)||ArrayBuffer.isView(t)||Xa(t)||Mp(t)?xf(t):Sf(t)}}class Ml extends ci{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Bi(this,arguments,function*(){yield ae(yield*Po(es(this[Symbol.iterator]())))})}}class El extends ci{constructor(t){super(t),this._impl=t}readAll(){return Kt(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=es(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class ym extends Ml{constructor(t){super(t),this._impl=t}}class Cw extends El{constructor(t){super(t),this._impl=t}}class xm{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=he({type:new Cn(this.schema.fields),length:t.length,children:i});return new Vn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new we(c)):new we(c)).memoize()}_loadVectors(t,e,i){return new lm(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class Al extends xm{constructor(t,e){super(e),this._reader=Nu(t)?new Iw(this._handle=t):new _m(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=bm(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):qe}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):qe}next(){if(this.closed)return qe;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Td(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class wl extends xm{constructor(t,e){super(e),this._reader=new Tw(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Kt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Kt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=bm(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Kt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):qe})}return(t){return Kt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):qe})}next(){return Kt(this,void 0,void 0,function*(){if(this.closed)return qe;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Td(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Kt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class Sm extends Al{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof hf?t:new hf(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(Me.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(Me.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-vm,i=t.readInt32(e),r=t.readAt(e-i,i);return Va.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class Dw extends wl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof bl?t:new bl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Kt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return Kt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(Me.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return Kt(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(Me.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return Kt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-vm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Va.decode(r)})}_readNextMessageAndValidate(t){return Kt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class Lw extends Al{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new ZA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function bm(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*xf(n){const t=ci.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function Sf(n){return Bi(this,arguments,function*(){const e=yield ae(ci.from(n));try{if(!(yield ae(e.open({autoDestroy:!1}))).closed)do yield yield ae(e);while(!(yield ae(e.reset().open())).closed)}finally{yield ae(e.cancel())}})}function Nw(n){return new Ml(new Lw(n))}function Pw(n){const t=n.peek(Ka+7&-8);return t&&t.byteLength>=4?Cd(t)?new ym(new Sm(n.read())):new Ml(new Al(n)):new Ml(new Al((function*(){})()))}function Fw(n){return Kt(this,void 0,void 0,function*(){const t=yield n.peek(Ka+7&-8);return t&&t.byteLength>=4?Cd(t)?new ym(new Sm(yield n.read())):new El(new wl(n)):new El(new wl((function(){return Bi(this,arguments,function*(){})})()))})}function Uw(n){return Kt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new bl(n,t);return t>=Rw&&Cd(yield e.readAt(0,Ka+7&-8))?new Cw(new Dw(e)):new El(new wl(e))})}class Ke extends de{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Vn?s.data.children:s.data),i=new Ke;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof we)return this.visitMany(t.data),this;const{type:e}=t;if(!Ct.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Ct.isUnion(e))this.nodes.push(new Or(i,0));else{const{nullCount:r}=t;Ct.isNull(e)||bi.call(this,r<=0?new Uint8Array(0):gl(t.offset,i,t.nullBitmap)),this.nodes.push(new Or(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function bi(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Vi(this._byteLength,t)),this._byteLength+=t,this}function Ow(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(bi.call(this,r),e.mode===Mn.Sparse)return Wu.call(this,n);if(e.mode===Mn.Dense){if(n.offset<=0)return bi.call(this,s),Wu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,d,p=-1;++p<i;)(c=r[p])!==void 0&&((d=o[c])===void 0&&(d=o[c]=s[p]),a[p]=s[p]-d,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);bi.call(this,a),this.visitMany(n.children.map((c,d)=>{const p=e.typeIds[d],f=o[p],_=l[p];return c.slice(f,Math.min(i,_))}))}}return this}function Bw(n){let t;return n.nullCount>=n.length?bi.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?bi.call(this,gl(n.offset,n.length,t)):bi.call(this,_l(n.values))}function _r(n){return bi.call(this,n.values.subarray(0,n.length*n.stride))}function Ol(n){const{length:t,values:e,valueOffsets:i}=n,r=ke(i[0]),s=ke(i[t]),a=Math.min(s-r,e.byteLength-r);return bi.call(this,Ip(-r,t+1,i)),bi.call(this,e.subarray(r,r+a)),this}function Dd(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return bi.call(this,Ip(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function Wu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Ke.prototype.visitBool=Bw;Ke.prototype.visitInt=_r;Ke.prototype.visitFloat=_r;Ke.prototype.visitUtf8=Ol;Ke.prototype.visitLargeUtf8=Ol;Ke.prototype.visitBinary=Ol;Ke.prototype.visitLargeBinary=Ol;Ke.prototype.visitFixedSizeBinary=_r;Ke.prototype.visitDate=_r;Ke.prototype.visitTimestamp=_r;Ke.prototype.visitTime=_r;Ke.prototype.visitDecimal=_r;Ke.prototype.visitList=Dd;Ke.prototype.visitStruct=Wu;Ke.prototype.visitUnion=Ow;Ke.prototype.visitInterval=_r;Ke.prototype.visitDuration=_r;Ke.prototype.visitFixedSizeList=Dd;Ke.prototype.visitMap=Dd;class Mm extends bd{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new Ho,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,kn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return rs(t)?t.then(e=>this.writeAll(e)):aa(t)?Fd(this,t):Pd(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Ho?this._sink=t:(this._sink=new Ho,t&&mE(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&gE(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!ku(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Rn&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Vn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!ku(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Vn?t instanceof Td||this._writeRecordBatch(t):t instanceof Rn?this.writeAll(t.batches):Xa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Dn.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===Me.RecordBatch?this._recordBatchBlocks.push(new Fr(o,t.bodyLength,this._position)):t.headerType===Me.DictionaryBatch&&this._dictionaryBlocks.push(new Fr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=ge(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Dn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(za)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Ke.assemble(t),a=new ti(t.numRows,i,r),o=Dn.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=Ke.assemble(new we([t])),l=new ti(t.length,s,a),c=new Yi(l,e,i),d=Dn.from(c,r);return this._writeMessage(d)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,d]of a.entries())this._writeDictionaryBatch(d,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class Ld extends Mm{static writeAll(t,e){const i=new Ld(e);return rs(t)?t.then(r=>i.writeAll(r)):aa(t)?Fd(i,t):Pd(i,t)}}class Nd extends Mm{static writeAll(t){const e=new Nd;return rs(t)?t.then(i=>e.writeAll(i)):aa(t)?Fd(e,t):Pd(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Va.encode(new Va(t,rn.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Pd(n,t){let e=t;t instanceof Rn&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function Fd(n,t){return Kt(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=es(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function Vw(n,t="stream"){return(t==="stream"?Ld:Nd).writeAll(n).toUint8Array(!0)}var zw=Object.create,Em=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,kw=Object.getOwnPropertyNames,Gw=Object.getPrototypeOf,Ww=Object.prototype.hasOwnProperty,Zw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Xw=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of kw(t))!Ww.call(n,r)&&r!==e&&Em(n,r,{get:()=>t[r],enumerable:!(i=Hw(t,r))||i.enumerable});return n},Yw=(n,t,e)=>(e=n!=null?zw(Gw(n)):{},Xw(!n||!n.__esModule?Em(e,"default",{value:n,enumerable:!0}):e,n)),qw=Zw((n,t)=>{t.exports=Worker}),jw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(jw||{}),Kw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(Kw||{}),Jw=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(Jw||{}),Qw=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(Qw||{}),$w=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))($w||{}),tT=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(tT||{}),eT=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},nT=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(nT||{}),iT=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=ci.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new Rn(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new Am(this._bindings,this._conn,e),r=await ci.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new rT(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=Vw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},Am=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},rT=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=ci.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new Rn(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new Am(this.bindings,this.connectionId,t),i=await ci.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},sT=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(sT||{}),aT=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(aT||{}),ve=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function Wo(n){switch(n.typeId){case D.Binary:return{sqlType:"binary"};case D.Bool:return{sqlType:"bool"};case D.Date:return{sqlType:"date"};case D.DateDay:return{sqlType:"date32[d]"};case D.DateMillisecond:return{sqlType:"date64[ms]"};case D.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case D.Float:return{sqlType:"float"};case D.Float16:return{sqlType:"float16"};case D.Float32:return{sqlType:"float32"};case D.Float64:return{sqlType:"float64"};case D.Int:return{sqlType:"int32"};case D.Int16:return{sqlType:"int16"};case D.Int32:return{sqlType:"int32"};case D.Int64:return{sqlType:"int64"};case D.Uint16:return{sqlType:"uint16"};case D.Uint32:return{sqlType:"uint32"};case D.Uint64:return{sqlType:"uint64"};case D.Uint8:return{sqlType:"uint8"};case D.IntervalDayTime:return{sqlType:"interval[dt]"};case D.IntervalYearMonth:return{sqlType:"interval[m]"};case D.List:return{sqlType:"list",valueType:Wo(n.valueType)};case D.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case D.Null:return{sqlType:"null"};case D.Utf8:return{sqlType:"utf8"};case D.Struct:return{sqlType:"struct",fields:n.children.map(t=>Zu(t.name,t.type))};case D.Map:{let t=n;return{sqlType:"map",keyType:Wo(t.keyType),valueType:Wo(t.valueType)}}case D.Time:return{sqlType:"time[s]"};case D.TimeMicrosecond:return{sqlType:"time[us]"};case D.TimeMillisecond:return{sqlType:"time[ms]"};case D.TimeNanosecond:return{sqlType:"time[ns]"};case D.TimeSecond:return{sqlType:"time[s]"};case D.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case D.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case D.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case D.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case D.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function Zu(n,t){let e=Wo(t);return e.name=n,e}var oT=/'(opfs:\/\/\S*?)'/g,lT=/(opfs:\/\/\S*?)/g;function cT(n){return n.search(lT)>-1}function uT(n){return[...n.matchAll(oT)].map(t=>t[1])}var dT=new TextEncoder,hT=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new ve("RESET",null);return await this.postTask(n)}async ping(){let n=new ve("PING",null);await this.postTask(n)}async dropFile(n){let t=new ve("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new ve("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new ve("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new ve("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new ve("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new ve("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new ve("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new ve("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new ve("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new iT(this,n)}async disconnect(n){let t=new ve("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new ve("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new ve("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new ve("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new ve("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new ve("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new ve("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new ve("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new ve("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new ve("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new ve("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new ve("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=dT.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new ve("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new ve("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new ve("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new ve("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new ve("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new ve("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new ve("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new ve("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new ve("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Zu(s,a))}e.columnsFlat=r,delete e.columns}let i=new ve("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(Zu(s,a))}e.columnsFlat=r,delete e.columns}let i=new ve("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return cT((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=uT(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function fT(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}fT();var pT=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(pT||{}),mT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),gT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),_T=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),vT=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),yT={version:"1.33.1-dev20.0"},Ud=yT.version.split(".");Ud[0];Ud[1];Ud[2];var xT=()=>typeof navigator>"u",Cc=null,Dc=null,Lc=null,Nc=null,Pc=null;async function ST(){return Cc==null&&(Cc=typeof BigInt64Array<"u"),Dc==null&&(Dc=await gT()),Lc==null&&(Lc=await vT()),Nc==null&&(Nc=await _T()),Pc==null&&(Pc=await mT()),{bigInt64Array:Cc,crossOriginIsolated:xT()||globalThis.crossOriginIsolated||!1,wasmExceptions:Dc,wasmSIMD:Nc,wasmThreads:Lc,wasmBulkMemory:Pc}}async function bT(n){let t=await ST();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}Yw(qw());const MT="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",ET="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",AT="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",wT="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",TT="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",IT="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",RT="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js";class CT{db=null;connection=null;async initialize(){try{const e=await bT({mvp:{mainModule:MT,mainWorker:ET},eh:{mainModule:AT,mainWorker:wT},coi:{mainModule:TT,mainWorker:IT,pthreadWorker:RT}}),i=new Worker(e.mainWorker),r=new eT;this.db=new hT(r,i),await this.db.instantiate(e.mainModule,e.pthreadWorker),this.connection=await this.db.connect()}catch(t){console.error(t),this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class DT{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;height=0;allocateBuffers(t=100){this.capacity=t,Lt.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Lt.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=Lt.request("GET_RING_BUFFER",{id:this.xBufferId}),i=Lt.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.height=t.clientHeight,this.bindEvents()}updateBounds(t,e){this.height=e}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=this.height-(a.clientY-e.top);this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}function LT(n,t){Qt(t,!0);const e=Pn("graph-actions"),i=["white-box","circle","triangle","star","particle"];{let r=Q(()=>t.node.textureId||i[0]),s=Q(()=>i.map(a=>({value:a,label:a})));Di(n,{label:"Texture ID",get value(){return A(r)},get options(){return A(s)},onchange:a=>e.updateNodeConfig(t.node,{textureId:a})})}$t()}var NT=ne("<!> <!> <!> <!>",1);function PT(n,t){Qt(t,!0);const e=Pn("graph-actions"),i=["white-box","circle","triangle","star","particle"];var r=NT(),s=me(r);{let c=Q(()=>t.node.textureId||i[0]),d=Q(()=>i.map(p=>({value:p,label:p})));Di(s,{label:"Texture ID",get value(){return A(c)},get options(){return A(d)},onchange:p=>e.updateNodeConfig(t.node,{textureId:p})})}var a=gt(s,2);{let c=Q(()=>(t.node.vertices?Array.from(t.node.vertices):[]).join(", "));To(a,{label:"Vertices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{vertices:new Float32Array(d.split(",").map(p=>parseFloat(p.trim())||0))})})}var o=gt(a,2);{let c=Q(()=>(t.node.indices?Array.from(t.node.indices):[]).join(", "));To(o,{label:"Indices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{indices:new Uint16Array(d.split(",").map(p=>parseInt(p.trim())||0))})})}var l=gt(o,2);{let c=Q(()=>(t.node.uvs?Array.from(t.node.uvs):[]).join(", "));To(l,{label:"UVs",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{uvs:new Float32Array(d.split(",").map(p=>parseFloat(p.trim())||0))})})}F(n,r),$t()}var FT=ne("<!> <!>",1);function UT(n,t){Qt(t,!0);const e=Pn("graph-actions"),i=[{value:"add",label:"Add"},{value:"multiply",label:"Multiply"}];var r=FT(),s=me(r);{let o=Q(()=>t.node.capacity||100);Ju(s,{label:"Capacity",min:1,step:1,get value(){return A(o)},onchange:l=>e.updateNodeConfig(t.node,{capacity:l})})}var a=gt(s,2);{let o=Q(()=>t.node.operation||"add");Di(a,{label:"Operation",get value(){return A(o)},get options(){return i},onchange:l=>e.updateNodeConfig(t.node,{operation:l})})}F(n,r),$t()}function OT(n,t){Qt(t,!0);const e=Pn("graph-actions");let i=Xe(Vs([]));function r(){fe(i,Lt.request("GET_AVAILABLE_BUFFERS",void 0),!0)}Ha(()=>{r(),Lt.on("GRAPH_UPDATED",r),Lt.on("MEMORY_ALLOCATED",r)}),Xu(()=>{Lt.off("GRAPH_UPDATED",r),Lt.off("MEMORY_ALLOCATED",r)});{let s=Q(()=>t.node.bufferId||""),a=Q(()=>A(i).map(o=>({value:o,label:o})));Di(n,{label:"Target Buffer ID",get value(){return A(s)},disabledPlaceholder:"Select a buffer...",get options(){return A(a)},onchange:o=>e.updateNodeConfig(t.node,{bufferId:o})})}$t()}function BT(n,t){Qt(t,!0);const e=Pn("graph-actions");{let i=Q(()=>(t.node.data?Array.from(t.node.data):[]).join(", "));To(n,{label:"Data (comma separated)",rows:3,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{data:r.split(",").map(s=>parseFloat(s.trim())||0)})})}$t()}function VT(n,t){Qt(t,!0);const e=Pn("graph-actions");{let i=Q(()=>t.node.capacity||100);Ju(n,{label:"Capacity",min:1,step:1,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{capacity:r})})}$t()}var zT=ne('<div style="display: flex; gap: 6px;"><div style="flex: 1;"><!></div> <div style="flex: 1;"><!></div></div>'),HT=ne('<!> <!> <div class="port-section"><div class="port-label-header">Data Parser Tuning</div> <div style="margin-top: 6px;"><!></div> <!> <!> <!></div>',1);function bf(n,t){Qt(t,!0);const e=Pn("graph-actions");var i=HT(),r=me(i);{let _=Q(()=>t.node.capacity||100);Ju(r,{label:"Capacity",min:1,step:1,get value(){return A(_)},onchange:v=>e.updateNodeConfig(t.node,{capacity:v})})}var s=gt(r,2);{let _=Q(()=>t.node.url||"");zf(s,{label:"API URL",get value(){return A(_)},placeholder:"https://api.example.com/data.json",onchange:v=>e.updateNodeConfig(t.node,{url:v})})}var a=gt(s,2),o=gt(ct(a),2),l=ct(o);{let _=Q(()=>t.node.dataPath||""),v=Q(()=>[{value:"",label:"Auto-detect"},...(t.node.availableDataPaths||[]).map(S=>({value:S,label:S==="root"?"(Root Level)":S}))]);Di(l,{label:"Target Array",get value(){return A(_)},get options(){return A(v)},onchange:S=>e.updateNodeConfig(t.node,{dataPath:S})})}st(o);var c=gt(o,2);{let _=Q(()=>t.node.timeKey||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableColumns||[]).map(S=>({value:S,label:S}))]);Di(c,{label:"Time/X-Axis Column",get value(){return A(_)},get options(){return A(v)},onchange:S=>e.updateNodeConfig(t.node,{timeKey:S})})}var d=gt(c,2);{let _=Q(()=>t.node.unpackArray||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableNestedArrays||[]).map(S=>({value:S,label:S}))]);Di(d,{label:"Unpack Inner Array (EAV)",get value(){return A(_)},get options(){return A(v)},onchange:S=>e.updateNodeConfig(t.node,{unpackArray:S})})}var p=gt(d,2);{var f=_=>{var v=zT(),S=ct(v),m=ct(S);{let T=Q(()=>t.node.unpackKey||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(h=>({value:h,label:h}))]);Di(m,{label:"Key Column",get value(){return A(T)},get options(){return A(u)},onchange:h=>e.updateNodeConfig(t.node,{unpackKey:h})})}st(S);var g=gt(S,2),E=ct(g);{let T=Q(()=>t.node.unpackValue||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(h=>({value:h,label:h}))]);Di(E,{label:"Value Column",get value(){return A(T)},get options(){return A(u)},onchange:h=>e.updateNodeConfig(t.node,{unpackValue:h})})}st(g),st(v),F(_,v)};Ut(p,_=>{t.node.unpackArray&&_(f)})}st(a),F(n,i),$t()}const kT=n=>{K_(n,{})};var GT=ne("<!> <!> <!>",1),WT=ne('<div class="logic-tree svelte-1uha8ag"><!></div>'),ZT=ne('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function t3(n,t){Qt(t,!0);const e=p=>{Q_(p,{children:(f,_)=>{var v=Ue(),S=me(v);{var m=g=>{Qv(g,{})};Ut(S,g=>{A(c)&&g(m)})}F(f,v)},$$slots:{default:!0}})};Ra("settings-registry",{sprite:LT,mesh:PT,math:UT,"ring-buffer":OT,"static-array":BT,motion:VT,api:bf,"smhi-weather":bf});const r=new Sg,s=new $_,a=new dE,o=new CT,l=new DT;let c=Xe(!1),d=Xe(!1);Ha(()=>{fe(d,!!localStorage.getItem("graph-state")),l.allocateBuffers(100),fe(c,!0)}),Xu(()=>{r.destroy()}),q_(n,{get viewsPanel(){return kT},get settingsPanel(){return e},children:(p,f)=>{var _=ZT(),v=me(_),S=ct(v);Lg(S,{get graph(){return s},get renderer(){return a},get compute(){return o},get pointer(){return l}}),st(v);var m=gt(v,2);{var g=E=>{var T=WT(),u=ct(T);tv(u,{children:(h,M)=>{ev(h,{id:"mouse-trail",children:(I,y)=>{var b=GT(),O=me(b);Kd(O,{id:"x-coords",bufferId:"pointer-x",exportMap:{out:"X"}});var C=gt(O,2);Kd(C,{id:"y-coords",bufferId:"pointer-y",exportMap:{out:"Y"}});var G=gt(C,2);Rg(G,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"],inputMap:{x:"X",y:"Y"}}),F(I,b)},$$slots:{default:!0}})},$$slots:{default:!0}}),st(T),F(E,T)};Ut(m,E=>{A(c)&&!A(d)&&E(g)})}F(p,_)}}),$t()}export{t3 as component};
