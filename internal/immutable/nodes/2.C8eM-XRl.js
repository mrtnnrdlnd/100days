import{a as U,f as fe,c as Ve,t as An,k as et,e as Zi,s as si,d as gn,l as Ti}from"../chunks/BW2-N9-6.js";import{o as Va,a as Gu}from"../chunks/rNRqKAN2.js";import{h as qr,d as yf,b1 as Rm,e as Sf,q as A,r as Cm,ac as Dm,s as kd,f as Ol,g as Bl,i as Ja,aC as Lm,aJ as Pm,al as Gd,M as Nm,L as Lc,b2 as Fm,O as Um,_ as Om,aQ as Bm,aI as Wu,b3 as Vm,a8 as Pc,b4 as zm,b5 as Hm,a3 as km,au as Gm,K as Vl,b6 as Li,b7 as xf,W as Wm,G as bf,J as Mf,b8 as zl,aa as Zm,b9 as Xm,ba as Ym,aG as qm,N as jm,I as Km,aD as Jm,j as Qm,b as $m,U as Ut,x as ne,b0 as Nn,u as ss,z as ie,B as ft,C as ht,a5 as Ne,F as yt,a6 as Q,y as _e,am as sn,aO as Wd,bb as Ta,A as cn,T as Bs,bc as Nc}from"../chunks/CX4c_s16.js";import{B as tg,p as ai,i as Ot,r as wn}from"../chunks/Be8-uBeV.js";import{g as Tn,a as In,s as je,T as eg,S as Ef,l as Fc,r as Af,b as Zu,c as _n,i as ng,d as ig,e as rg,f as El,h as wf,X as Xu,t as sg,j as ag}from"../chunks/vZL2I932.js";import{b as Ia,c as Tf}from"../chunks/CJQQATZU.js";import{i as og}from"../chunks/Mpj6Yu9S.js";const lg=Symbol("NaN");function cg(n,t,e){qr&&yf();var i=new tg(n),r=!Rm();Sf(()=>{var s=t();s!==s&&(s=lg),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,e)})}function Lr(n,t){return t}function ug(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let p=t[o];Mf(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var f=n.outrogroups;Uc(n,Wu(s.done)),f.delete(s),f.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null;if(l){var c=e,d=c.parentNode;qm(d),d.append(c),n.items.clear()}Uc(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??=new Set).add(s)}function Uc(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i?.has(s)){s.f|=Li;const a=document.createDocumentFragment();jm(s,a)}else Km(t[r],e)}}var Zd;function cr(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&xf)!==0;if(l){var c=n;a=qr?Ol(Gm(c)):c.appendChild(Vl())}qr&&yf();var d=null,p=Om(()=>{var T=e();return Bm(T)?T:T==null?[]:Wu(T)}),f,_=new Map,v=!0;function E(T){(M.effect.f&Wm)===0&&(M.pending.delete(T),M.fallback=d,dg(M,f,a,t,i),d!==null&&(f.length===0?(d.f&Li)===0?bf(d):(d.f^=Li,ma(d,null,a)):Mf(d,()=>{d=null})))}function g(T){M.pending.delete(T)}var m=Sf(()=>{f=A(p);var T=f.length;let u=!1;if(qr){var h=Cm(a)===Dm;h!==(T===0)&&(a=kd(),Ol(a),Bl(!1),u=!0)}for(var b=new Set,I=Nm,y=Um(),x=0;x<T;x+=1){qr&&Ja.nodeType===Lm&&Ja.data===Pm&&(a=Ja,u=!0,Bl(!1));var z=f[x],C=i(z,x),k=v?null:o.get(C);k?(k.v&&Gd(k.v,z),k.i&&Gd(k.i,x),y&&I.unskip_effect(k.e)):(k=hg(o,v?a:Zd??=Vl(),z,C,x,r,t,e),v||(k.e.f|=Li),o.set(C,k)),b.add(C)}if(T===0&&s&&!d&&(v?d=Lc(()=>s(a)):(d=Lc(()=>s(Zd??=Vl())),d.f|=Li)),T>b.size&&Fm(),qr&&T>0&&Ol(kd()),!v)if(_.set(I,b),y){for(const[B,L]of o)b.has(B)||I.skip_effect(L.e);I.oncommit(E),I.ondiscard(g)}else E(I);u&&Bl(!0),A(p)}),M={effect:m,items:o,pending:_,outrogroups:null,fallback:d};v=!1,qr&&(a=Ja)}function aa(n){for(;n!==null&&(n.f&Xm)===0;)n=n.next;return n}function dg(n,t,e,i,r){var s=(i&Ym)!==0,a=t.length,o=n.items,l=aa(n.effect.first),c,d=null,p,f=[],_=[],v,E,g,m;if(s)for(m=0;m<a;m+=1)v=t[m],E=r(v,m),g=o.get(E).e,(g.f&Li)===0&&(g.nodes?.a?.measure(),(p??=new Set).add(g));for(m=0;m<a;m+=1){if(v=t[m],E=r(v,m),g=o.get(E).e,n.outrogroups!==null)for(const z of n.outrogroups)z.pending.delete(g),z.done.delete(g);if((g.f&zl)!==0&&(bf(g),s&&(g.nodes?.a?.unfix(),(p??=new Set).delete(g))),(g.f&Li)!==0)if(g.f^=Li,g===l)ma(g,null,e);else{var M=d?d.next:l;g===n.effect.last&&(n.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),yr(n,d,g),yr(n,g,M),ma(g,M,e),d=g,f=[],_=[],l=aa(d.next);continue}if(g!==l){if(c!==void 0&&c.has(g)){if(f.length<_.length){var T=_[0],u;d=T.prev;var h=f[0],b=f[f.length-1];for(u=0;u<f.length;u+=1)ma(f[u],T,e);for(u=0;u<_.length;u+=1)c.delete(_[u]);yr(n,h.prev,b.next),yr(n,d,h),yr(n,b,T),l=T,d=b,m-=1,f=[],_=[]}else c.delete(g),ma(g,l,e),yr(n,g.prev,g.next),yr(n,g,d===null?n.effect.first:d.next),yr(n,d,g),d=g;continue}for(f=[],_=[];l!==null&&l!==g;)(c??=new Set).add(l),_.push(l),l=aa(l.next);if(l===null)continue}(g.f&Li)===0&&f.push(g),d=g,l=aa(g.next)}if(n.outrogroups!==null){for(const z of n.outrogroups)z.pending.size===0&&(Uc(n,Wu(z.done)),n.outrogroups?.delete(z));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var I=[];if(c!==void 0)for(g of c)(g.f&zl)===0&&I.push(g);for(;l!==null;)(l.f&zl)===0&&l!==n.fallback&&I.push(l),l=aa(l.next);var y=I.length;if(y>0){var x=(i&xf)!==0&&a===0?e:null;if(s){for(m=0;m<y;m+=1)I[m].nodes?.a?.measure();for(m=0;m<y;m+=1)I[m].nodes?.a?.fix()}ug(n,I,x)}}s&&Zm(()=>{if(p!==void 0)for(g of p)g.nodes?.a?.apply()})}function hg(n,t,e,i,r,s,a,o){var l=(a&zm)!==0?(a&Hm)===0?km(e,!1,!1):Pc(e):null,c=(a&Vm)!==0?Pc(r):null;return{v:l,i:c,e:Lc(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function ma(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Li)===0?t.nodes.start:e;i!==null;){var a=Jm(i);if(s.before(i),i===r)return;i=a}}function yr(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function Al(n,t,e){Qm(()=>{var i=$m(()=>t(n,e?.())||{});if(i?.destroy)return()=>i.destroy()})}function fg(n){var t=Pc(0);return function(){return arguments.length===1?(Ut(t,A(t)+1),arguments[0]):(A(t),n())}}class pg{listeners=new Map;handlers=new Map;on(t,e){let i=this.listeners.get(t);i||(i=[],this.listeners.set(t,i)),i.push(e)}off(t,e){const i=this.listeners.get(t);i&&this.listeners.set(t,i.filter(r=>r!==e))}emit(t,e){const i=this.listeners.get(t);if(i)for(let r=0;r<i.length;r++)i[r](e)}handle(t,e){this.handlers.set(t,e)}request(t,e){const i=this.handlers.get(t);if(!i)throw new Error(`Handler missing: ${t}`);return i(e)}}const Lt=new pg;class mg{id;type="source";subType="dummy";parentId;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}getOutputs(){return{out:this.output}}}class gg{id;type="processor";subType="dummy";parentId;output=new Float64Array(0);constructor(t,e){this.id=t,e&&Object.assign(this,e)}process(){return{out:this.output}}}class _g{id;type="sink";subType="dummy";parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}consume(){return null}}class If{id;type="subject";subType="default";parentId;constructor(t,e){this.id=t,e&&Object.assign(this,e)}}class vg{columnarBuffers=new Map;ringBuffers=new Map;constructor(){this.setupMediatorHandlers()}setupMediatorHandlers(){Lt.handle("ALLOCATE_BUFFER",t=>{const e=t.id||crypto.randomUUID();return t.shared?this.allocateSharedRingBuffer(e,t.size):this.allocateColumnarBuffer(e,t.size),e}),Lt.handle("GET_RING_BUFFER",t=>this.ringBuffers.get(t.id)),Lt.handle("GET_COLUMNAR_BUFFER",t=>this.columnarBuffers.get(t.id)),Lt.handle("GET_AVAILABLE_BUFFERS",()=>Array.from(this.ringBuffers.keys()))}allocateColumnarBuffer(t,e){const i=new Float64Array(e);this.columnarBuffers.set(t,{id:t,capacity:e,length:0,data:i}),Lt.emit("MEMORY_ALLOCATED",{bufferId:t,size:i.byteLength})}allocateSharedRingBuffer(t,e){const i=Int32Array.BYTES_PER_ELEMENT,r=e*Float32Array.BYTES_PER_ELEMENT,s=i+r,a=new SharedArrayBuffer(s),o=new Int32Array(a,0,1),l=new Float32Array(a,i,e);this.ringBuffers.set(t,{id:t,capacity:e,head:o,data:a,view:l}),Lt.emit("MEMORY_ALLOCATED",{bufferId:t,size:s})}clear(){this.columnarBuffers.clear(),this.ringBuffers.clear()}destroy(){this.clear()}}class Rf{id;type="source";subType="ring-buffer";bufferId;parentId;exportMap;ringBuffer;outputBuffer;constructor(t,e,i){this.id=t,this.ringBuffer=e,this.bufferId=i,this.outputBuffer=new Float64Array(e?e.capacity:0)}getOutputs(){if(!this.ringBuffer)return{out:this.outputBuffer};const t=this.ringBuffer.head[0],e=this.ringBuffer.capacity,i=this.ringBuffer.view;for(let r=0;r<e;r++){const s=(t-r-1+e)%e;this.outputBuffer[r]=i[s]}return{out:this.outputBuffer}}}class yg{id;type="source";subType="static-array";parentId;exportMap;data;constructor(t,e){this.id=t,this.data=new Float64Array(e)}getOutputs(){return{out:this.data}}}class Sg{id;type="source";subType="time";parentId;exportMap;outputBuffer;constructor(t){this.id=t,this.outputBuffer=new Float64Array(1)}getOutputs(){return this.outputBuffer[0]=performance.now()/1e3,{out:this.outputBuffer}}}class xg{id;type="source";subType="random";parentId;exportMap;capacity;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}getOutputs(){for(let t=0;t<this.outputBuffer.length;t++)this.outputBuffer[t]=Math.random();return{out:this.outputBuffer}}}class Fs{id;type="source";parentId;exportMap;capacity;url;outputBuffers={};static fetchCache=new Map;constructor(t,e,i){this.id=t,this.capacity=e,this.url=i}async load(){if(this.url)try{const t=Date.now();for(const[r,s]of Fs.fetchCache.entries())t-s.time>6e4&&Fs.fetchCache.delete(r);let e=Fs.fetchCache.get(this.url);(!e||t-e.time>6e4)&&(e={promise:fetch(this.url).then(s=>s.json()),time:t},Fs.fetchCache.set(this.url,e));const i=await e.promise;this.outputBuffers=this.parseResponse(i),Lt.emit("GRAPH_UPDATED",void 0)}catch{this.outputBuffers={}}}createBuffer(){return new Float64Array(this.capacity)}getOutputs(){return this.outputBuffers}}class bg extends Fs{subType="smhi-weather";constructor(t,e,i,r){const s=`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${r}/lat/${i}/data.json`;super(t,e,s),this.load()}parseResponse(t){const e={},i=t?.timeSeries;if(!Array.isArray(i))return e;const r=Math.min(i.length,this.capacity),s=this.createBuffer();e.time=s;for(let a=0;a<r;a++){const o=i[a];if(o.validTime&&(s[a]=new Date(o.validTime).getTime()/1e3),Array.isArray(o.parameters))for(const l of o.parameters)e[l.name]||(e[l.name]=this.createBuffer()),e[l.name][a]=l.values[0]}return e}}function Xd(n,t){ne(t,!0);let e=ai(t,"exportMap",19,()=>({}));const i=Nn("subject-parent");ss(()=>{const r=Lt.request("GET_RING_BUFFER",{id:t.bufferId})||null,s=new Rf(t.id,r,t.bufferId);s.parentId=i?.(),s.exportMap=e(),Lt.request("REGISTER_NODE",{node:s})}),ie()}class Mg{id;type="processor";subType="math";parentId;capacity;operation;inputMap;exportMap;outputBuffer;constructor(t,e,i){this.id=t,this.capacity=e,this.operation=i,this.outputBuffer=new Float64Array(e)}process(t){const e=t.in||[];if(e.length===0)return{out:this.outputBuffer};const i=e[0],r=Math.min(i.length,this.outputBuffer.length);for(let s=0;s<r;s++){let a=i[s];for(let o=1;o<e.length;o++){const l=e[o],c=l.length>1?l[s]:l[0];this.operation==="add"?a+=c:this.operation==="multiply"&&(a*=c)}this.outputBuffer[s]=a}return{out:this.outputBuffer}}}class Eg{id;type="processor";subType="motion";parentId;capacity;inputMap;exportMap;outputBuffer;constructor(t,e){this.id=t,this.capacity=e,this.outputBuffer=new Float64Array(e)}process(t){const e=t.pos||[],i=t.vel||[];if(e.length===0||i.length===0)return{out:this.outputBuffer};const r=e[0],s=i[0],a=Math.min(r.length,s.length,this.outputBuffer.length);for(let o=0;o<a;o++)this.outputBuffer[o]=r[o]+s[o];return{out:this.outputBuffer}}}class Cf{id;type="sink";subType="sprite";textureId;parentId;inputMap;primitiveCache=[];constructor(t,e){this.id=t,this.textureId=e}consume(t){const e=t.x||[],i=t.y||[];if(e.length===0||i.length===0)return null;let r=e[0],s=i[0];const a=Math.min(r.length,s.length);for(;this.primitiveCache.length<a;)this.primitiveCache.push({type:"sprite",x:0,y:0,textureId:this.textureId,scale:1,opacity:0});for(let o=0;o<this.primitiveCache.length;o++)if(o<a)if(r[o]===0&&s[o]===0)this.primitiveCache[o].opacity=0;else{const l=this.primitiveCache[o];l.x=r[o],l.y=s[o],l.opacity=1-o/a}else this.primitiveCache[o].opacity=0;return this.primitiveCache}}class Ag{id;type="sink";subType="mesh";textureId;parentId;inputMap;vertices;indices;uvs;primitiveCache;constructor(t,e,i,r,s){this.id=t,this.textureId=e,this.vertices=i,this.indices=r,this.uvs=s,this.primitiveCache=[{type:"mesh",textureId:this.textureId,vertices:this.vertices,indices:this.indices,uvs:this.uvs,opacity:1}]}consume(t){return this.primitiveCache}}function wg(n,t){ne(t,!0);let e=ai(t,"inputIds",19,()=>[]),i=ai(t,"inputMap",19,()=>({}));const r=Nn("subject-parent");ss(()=>{const s=new Cf(t.id,t.textureId);s.parentId=r?.(),s.inputMap=i(),Lt.request("REGISTER_NODE",{node:s});for(let a=0;a<e().length;a++)Lt.request("CONNECT_NODES",{sourceId:e()[a],targetId:t.id})}),ie()}class Tg{graph;renderer;compute;isRunning=!1;lastTime=0;globalContext;tickEventPayload={deltaTime:0,time:0};boundSaveGraphState=this.saveGraphState.bind(this);nodeRegistry={source:[{subType:"dummy",label:"Dummy Source",create:t=>{const e=new mg(t);return e.subType="dummy",e}},{subType:"time",label:"Time Source",create:t=>{const e=new Sg(t);return e.subType="time",e}},{subType:"random",label:"Random Source",create:(t,e)=>{const i=new xg(t,e?.capacity??100);return i.subType="random",i}},{subType:"static-array",label:"Static Array",create:(t,e)=>{const i=new yg(t,e?.data?Array.from(e.data):[0]);return i.subType="static-array",i}},{subType:"smhi-weather",label:"SMHI Weather",create:(t,e)=>{const i=e?.lat??59.3293,r=e?.lon??18.0686;return new bg(t,e?.capacity??100,i,r)}},{subType:"ring-buffer",label:"Ring Buffer",create:(t,e)=>{const i=e?.bufferId??"pointer-x",r=Lt.request("GET_RING_BUFFER",{id:i})||null,s=new Rf(t,r,i);return s.subType="ring-buffer",s}}],processor:[{subType:"dummy",label:"Dummy Processor",create:t=>{const e=new gg(t);return e.subType="dummy",e}},{subType:"math",label:"Math Processor",create:(t,e)=>{const i=new Mg(t,e?.capacity??100,e?.operation??"add");return i.subType="math",i}},{subType:"motion",label:"Motion Processor",create:(t,e)=>{const i=new Eg(t,e?.capacity??100);return i.subType="motion",i}}],sink:[{subType:"dummy",label:"Dummy Sink",create:t=>{const e=new _g(t);return e.subType="dummy",e}},{subType:"sprite",label:"Sprite Renderer",create:(t,e)=>{const i=new Cf(t,e?.textureId??"white-box");return i.subType="sprite",i}},{subType:"mesh",label:"Mesh Renderer",create:(t,e)=>{const i=e?.vertices?new Float32Array(e.vertices):new Float32Array,r=e?.indices?new Uint16Array(e.indices):new Uint16Array,s=e?.uvs?new Float32Array(e.uvs):new Float32Array,a=new Ag(t,e?.textureId??"white-box",i,r,s);return a.subType="mesh",a}}],subject:[{subType:"default",label:"Subject Hub",create:t=>{const e=new If(t);return e.subType="default",e}}]};constructor(t,e,i){this.graph=t,this.renderer=e,this.compute=i,this.globalContext={id:"global",globalTime:0,buffers:new Map,spatialTransforms:{x:new Float64Array(0),y:new Float64Array(0),z:new Float64Array(0),scale:new Float64Array(0),rotation:new Float64Array(0)}},this.setupMediatorHandlers()}async boot(t){await this.renderer.initialize(t).catch(()=>{}),this.loadGraphState(),Lt.on("GRAPH_UPDATED",this.boundSaveGraphState),this.isRunning=!0,this.lastTime=performance.now(),requestAnimationFrame(this.tick.bind(this)),this.compute.initialize().catch(()=>{})}saveGraphState(){const t=Lt.request("GET_GRAPH_STATE",void 0),e=t.nodes.map(i=>{const r=i;return{id:i.id,type:i.type,subType:i.subType,parentId:i.parentId,config:{name:r.name,capacity:r.capacity,operation:r.operation,textureId:r.textureId,bufferId:r.bufferId,url:r.url,lat:r.lat,lon:r.lon,data:r.data?Array.from(r.data):void 0,vertices:r.vertices?Array.from(r.vertices):void 0,indices:r.indices?Array.from(r.indices):void 0,uvs:r.uvs?Array.from(r.uvs):void 0,inputIds:r.inputIds?[...r.inputIds]:[]}}});localStorage.setItem("graph-state",JSON.stringify({nodes:e,connections:t.connections}))}loadGraphState(){const t=localStorage.getItem("graph-state");if(t)try{const e=JSON.parse(t);for(let i=0;i<e.nodes.length;i++){const r=e.nodes[i],s=Lt.request("CREATE_NODE",{id:r.id,type:r.type,subType:r.subType,parentId:r.parentId,config:r.config});s&&Lt.request("REGISTER_NODE",{node:s})}for(let i=0;i<e.connections.length;i++){const r=e.connections[i];Lt.request("CONNECT_NODES",{sourceId:r.sourceId,targetId:r.targetId,sourcePortId:r.sourcePortId,targetPortId:r.targetPortId})}}catch{}}setupMediatorHandlers(){Lt.handle("REGISTER_NODE",t=>(this.graph.addNode(t.node),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("REMOVE_NODE",t=>(this.graph.removeNode(t.id),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("CONNECT_NODES",t=>(this.graph.connect(t.sourceId,t.targetId,t.sourcePortId,t.targetPortId),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("DISCONNECT_NODES",t=>(this.graph.disconnect(t.sourceId,t.targetId,t.sourcePortId,t.targetPortId),Lt.emit("GRAPH_UPDATED",void 0),!0)),Lt.handle("REORDER_NODE",t=>{const e=this.graph.nodes.get(t.nodeId),i=this.graph.nodes.get(t.targetId);return e&&i&&(e.parentId=i.parentId,this.graph.reorderNode(t.nodeId,t.targetId,t.position),Lt.emit("GRAPH_UPDATED",void 0)),!0}),Lt.handle("GET_CONTEXT",t=>null),Lt.handle("GET_GRAPH_STATE",()=>({nodes:Array.from(this.graph.nodes.values()),connections:[...this.graph.connections]})),Lt.handle("GET_NODE_FACTORIES",()=>{const t={};for(const e in this.nodeRegistry)t[e]=this.nodeRegistry[e].map(i=>({subType:i.subType,label:i.label}));return t}),Lt.handle("CREATE_NODE",t=>{const e=this.nodeRegistry[t.type];if(!e)return null;const i=e.find(s=>s.subType===t.subType);if(!i)return null;const r=i.create(t.id,t.config);return r&&(r.parentId=t.parentId,t.config&&(t.config.name!==void 0&&(r.name=t.config.name),t.config.inputIds&&(r.inputIds=[...t.config.inputIds]))),r})}tick(t){if(!this.isRunning)return;this.tickEventPayload.deltaTime=t-this.lastTime,this.tickEventPayload.time=t,this.lastTime=t,Lt.emit("ENGINE_TICK",this.tickEventPayload),this.globalContext.globalTime=t;const e=this.graph.execute(this.globalContext);this.renderer.clear(),e&&e.length>0&&this.renderer.render(e),requestAnimationFrame(this.tick.bind(this))}shutdown(){this.isRunning=!1,Lt.off("GRAPH_UPDATED",this.boundSaveGraphState),this.renderer.destroy(),this.compute.destroy()}}var Ig=fe('<div class="viewport-container svelte-7xw0nx"><canvas class="svelte-7xw0nx"></canvas></div>');function Rg(n,t){ne(t,!0);let e=Ne(void 0),i=Ne(void 0);const r=new Tg(t.graph,t.renderer,t.compute);ss(()=>{if(!A(e)||!A(i))return;(async()=>{await r.boot(A(e));const c=window.devicePixelRatio||1;t.renderer.resize(A(i).clientWidth,A(i).clientHeight,c),t.pointer.initialize(A(i))})();const l=new ResizeObserver(c=>{for(const d of c){const{width:p,height:f}=d.contentRect;p>0&&f>0&&(t.renderer.resize(p,f,window.devicePixelRatio||1),t.pointer.updateBounds(p,f))}});return l.observe(A(i)),()=>{l.disconnect(),r.shutdown(),t.pointer.destroy()}});var s=Ig(),a=ft(s);Ia(a,o=>Ut(e,o),()=>A(e)),ht(s),Ia(s,o=>Ut(i,o),()=>A(i)),U(n,s),ie()}var Cg=et('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z"></path>'),Dg=et('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>',1),Lg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),Pg=et('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z"></path>'),Ng=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z"></path>'),Fg=et('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z"></path>'),Ug=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Og(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=Ug();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=Cg();U(u,h)},v=u=>{var h=Dg();sn(),U(u,h)},E=u=>{var h=Lg();U(u,h)},g=u=>{var h=Pg();U(u,h)},m=u=>{var h=Ng();U(u,h)},M=u=>{var h=Fg();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var Bg=et('<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z"></path>'),Vg=et('<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>',1),zg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z"></path>'),Hg=et('<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z"></path>'),kg=et('<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>'),Gg=et('<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z"></path>'),Wg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Zg(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=Wg();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=Bg();U(u,h)},v=u=>{var h=Vg();sn(),U(u,h)},E=u=>{var h=zg();U(u,h)},g=u=>{var h=Hg();U(u,h)},m=u=>{var h=kg();U(u,h)},M=u=>{var h=Gg();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var Xg=et('<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"></path>'),Yg=et('<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>',1),qg=et('<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path>'),jg=et('<path d="M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"></path>'),Kg=et('<path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>'),Jg=et('<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"></path>'),Qg=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Df(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=Qg();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=Xg();U(u,h)},v=u=>{var h=Yg();sn(),U(u,h)},E=u=>{var h=qg();U(u,h)},g=u=>{var h=jg();U(u,h)},m=u=>{var h=Kg();U(u,h)},M=u=>{var h=Jg();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var $g=et('<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"></path>'),t1=et('<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"></path><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>',1),e1=et('<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"></path>'),n1=et('<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"></path>'),i1=et('<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>'),r1=et('<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"></path>'),s1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function a1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=s1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=$g();U(u,h)},v=u=>{var h=t1();sn(),U(u,h)},E=u=>{var h=e1();U(u,h)},g=u=>{var h=n1();U(u,h)},m=u=>{var h=i1();U(u,h)},M=u=>{var h=r1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var o1=et('<path d="M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"></path>'),l1=et('<path d="M208,104V216H48V104Z" opacity="0.2"></path><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>',1),c1=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z"></path>'),u1=et('<path d="M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z"></path>'),d1=et('<path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path>'),h1=et('<path d="M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"></path>'),f1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Lf(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=f1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=o1();U(u,h)},v=u=>{var h=l1();sn(),U(u,h)},E=u=>{var h=c1();U(u,h)},g=u=>{var h=u1();U(u,h)},m=u=>{var h=d1();U(u,h)},M=u=>{var h=h1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var p1=et('<path d="M180.49,143.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L155,152l-15.52-15.51a12,12,0,1,1,17-17Zm-64-24a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,0,0,17-17L101,152l15.52-15.51A12,12,0,0,0,116.49,119.51ZM220,88V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88ZM160,57V80h23Zm36,155V104H148a12,12,0,0,1-12-12V44H60V212Z"></path>'),m1=et('<path d="M208,88H152V32Z" opacity="0.2"></path><path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>',1),g1=et('<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-104,88a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L91.31,152Zm72-12.68-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,181.66,157.66ZM152,88V44l44,44Z"></path>'),_1=et('<path d="M180.24,147.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L167.51,152l-19.75-19.76a6,6,0,1,1,8.48-8.48Zm-72-24a6,6,0,0,0-8.48,0l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,1,0,8.48-8.48L88.49,152l19.75-19.76A6,6,0,0,0,108.24,123.76ZM214,88V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Zm44,134V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"></path>'),v1=et('<path d="M181.66,146.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L164.69,152l-18.35-18.34a8,8,0,0,1,11.32-11.32Zm-72-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L91.31,152l18.35-18.34A8,8,0,0,0,109.66,122.34ZM216,88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Zm40,136V96H152a8,8,0,0,1-8-8V40H56V216H200Z"></path>'),y1=et('<path d="M178.83,149.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L170.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66Zm-72-24a4,4,0,0,0-5.66,0l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,1,0,5.66-5.66L85.66,152l21.17-21.17A4,4,0,0,0,106.83,125.17ZM212,88V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Zm48,132V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z"></path>'),S1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function x1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=S1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=p1();U(u,h)},v=u=>{var h=m1();sn(),U(u,h)},E=u=>{var h=g1();U(u,h)},g=u=>{var h=_1();U(u,h)},m=u=>{var h=v1();U(u,h)},M=u=>{var h=y1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var b1=et('<path d="M140,88a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12v32a12,12,0,0,1-24,0V100H152A12,12,0,0,1,140,88ZM72,180h32a12,12,0,0,0,0-24H84V136a12,12,0,0,0-24,0v32A12,12,0,0,0,72,180ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),M1=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),E1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,192H56a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v24H88a8,8,0,0,1,0,16Zm120-88a8,8,0,0,1-16,0V80H168a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z"></path>'),A1=et('<path d="M198,80v32a6,6,0,0,1-12,0V86H160a6,6,0,0,1,0-12h32A6,6,0,0,1,198,80ZM96,170H70V144a6,6,0,0,0-12,0v32a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12ZM230,56V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),w1=et('<path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),T1=et('<path d="M196,80v32a4,4,0,0,1-8,0V84H160a4,4,0,0,1,0-8h32A4,4,0,0,1,196,80ZM96,172H68V144a4,4,0,0,0-8,0v32a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),I1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function R1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=I1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=b1();U(u,h)},v=u=>{var h=M1();sn(),U(u,h)},E=u=>{var h=E1();U(u,h)},g=u=>{var h=A1();U(u,h)},m=u=>{var h=w1();U(u,h)},M=u=>{var h=T1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var C1=et('<path d="M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z"></path>'),D1=et('<path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>',1),L1=et('<path d="M247.44,173.75a.68.68,0,0,0,0-.14L231.05,89.44c0-.06,0-.12,0-.18A60.08,60.08,0,0,0,172,40H83.89a59.88,59.88,0,0,0-59,49.52L8.58,173.61a.68.68,0,0,0,0,.14,36,36,0,0,0,60.9,31.71l.35-.37L109.52,160h37l39.71,45.09c.11.13.23.25.35.37A36.08,36.08,0,0,0,212,216a36,36,0,0,0,35.43-42.25ZM104,112H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V88a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H152A8,8,0,0,1,144,104Zm84.37,87.47a19.84,19.84,0,0,1-12.9,8.23A20.09,20.09,0,0,1,198,194.31L167.8,160H172a60,60,0,0,0,51-28.38l8.74,45A19.82,19.82,0,0,1,228.37,191.47Z"></path>'),P1=et('<path d="M176,110H152a6,6,0,0,1,0-12h24a6,6,0,0,1,0,12ZM104,98H94V88a6,6,0,0,0-12,0V98H72a6,6,0,0,0,0,12H82v10a6,6,0,0,0,12,0V110h10a6,6,0,0,0,0-12ZM239.84,199.5A34,34,0,0,1,212,214,34.11,34.11,0,0,1,188,204.05l-.26-.28L147.38,158H108.62L68.31,203.76,68,204A34,34,0,0,1,44,214a34,34,0,0,1-33.46-39.91s0-.06,0-.1L26.9,89.88A57.89,57.89,0,0,1,83.89,42H172a58.07,58.07,0,0,1,57.05,47.63c0,.07,0,.12,0,.19L245.46,174s0,.07,0,.11A33.75,33.75,0,0,1,239.84,199.5ZM172,146a46,46,0,0,0,0-92H83.89A45.9,45.9,0,0,0,38.71,92a.36.36,0,0,0,0,.1L22.33,176.23a22,22,0,0,0,37.11,19.45l42-47.65a6,6,0,0,1,4.5-2Zm61.67,30.23-9.79-50.35A58.06,58.06,0,0,1,172,158h-8.63l33.19,37.68a22,22,0,0,0,37.11-19.45Z"></path>'),N1=et('<path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>'),F1=et('<path d="M176,108H152a4,4,0,0,1,0-8h24a4,4,0,0,1,0,8Zm-72-8H92V88a4,4,0,0,0-8,0v12H72a4,4,0,0,0,0,8H84v12a4,4,0,0,0,8,0V108h12a4,4,0,0,0,0-8Zm134.21,98.36a32,32,0,0,1-48.84,4.27l-.17-.18L148.29,156H107.72L66.81,202.44l-.18.19A32.08,32.08,0,0,1,44,212a32,32,0,0,1-31.5-37.56L28.87,90.21A55.87,55.87,0,0,1,83.89,44H172a56.07,56.07,0,0,1,55.1,46.1.29.29,0,0,1,0,.1l16.37,84.16A31.86,31.86,0,0,1,238.21,198.36ZM172,148a48,48,0,1,0,0-96H83.9A47.9,47.9,0,0,0,36.74,91.67L20.36,175.9a24,24,0,0,0,19.48,27.73,24,24,0,0,0,21-6.58l42-47.69a4,4,0,0,1,3-1.36Zm63.63,27.83-11-56.66A56.09,56.09,0,0,1,172,156H159l36.16,41.06a24,24,0,0,0,40.52-21.23Z"></path>'),U1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function O1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=U1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=C1();U(u,h)},v=u=>{var h=D1();sn(),U(u,h)},E=u=>{var h=L1();U(u,h)},g=u=>{var h=P1();U(u,h)},m=u=>{var h=N1();U(u,h)},M=u=>{var h=F1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var B1=et('<path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>'),V1=et('<path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>',1),z1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path>'),H1=et('<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>'),k1=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>'),G1=et('<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"></path>'),W1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Z1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=W1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=B1();U(u,h)},v=u=>{var h=V1();sn(),U(u,h)},E=u=>{var h=z1();U(u,h)},g=u=>{var h=H1();U(u,h)},m=u=>{var h=k1();U(u,h)},M=u=>{var h=G1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var X1=et('<path d="M252,152a12,12,0,0,1-12,12H228v12a12,12,0,0,1-24,0V164H192a12,12,0,0,1,0-24h12V128a12,12,0,0,1,24,0v12h12A12,12,0,0,1,252,152ZM56,76H68V88a12,12,0,0,0,24,0V76h12a12,12,0,1,0,0-24H92V40a12,12,0,0,0-24,0V52H56a12,12,0,0,0,0,24ZM184,188h-4v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM222.14,82.83,82.82,222.14a20,20,0,0,1-28.28,0L33.85,201.46a20,20,0,0,1,0-28.29L173.17,33.86a20,20,0,0,1,28.28,0l20.69,20.68A20,20,0,0,1,222.14,82.83ZM159,112,144,97,53.65,187.31l15,15Zm43.31-43.31-15-15L161,80l15,15Z"></path>'),Y1=et('<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2"></path><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>',1),q1=et('<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),j1=et('<path d="M246,152a6,6,0,0,1-6,6H222v18a6,6,0,0,1-12,0V158H192a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,246,152ZM56,70H74V88a6,6,0,0,0,12,0V70h18a6,6,0,0,0,0-12H86V40a6,6,0,0,0-12,0V58H56a6,6,0,0,0,0,12ZM184,194H174V184a6,6,0,0,0-12,0v10H152a6,6,0,0,0,0,12h10v10a6,6,0,0,0,12,0V206h10a6,6,0,0,0,0-12ZM217.9,78.59,78.58,217.9a14,14,0,0,1-19.8,0L38.09,197.21a14,14,0,0,1,0-19.8L177.41,38.1a14,14,0,0,1,19.8,0L217.9,58.79A14,14,0,0,1,217.9,78.59ZM167.51,112,144,88.49,46.58,185.9a2,2,0,0,0,0,2.83l20.69,20.68a2,2,0,0,0,2.82,0h0Zm41.9-44.73L188.73,46.59a2,2,0,0,0-2.83,0L152.48,80,176,103.52,209.41,70.1A2,2,0,0,0,209.41,67.27Z"></path>'),K1=et('<path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>'),J1=et('<path d="M244,152a4,4,0,0,1-4,4H220v20a4,4,0,0,1-8,0V156H192a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,244,152ZM56,68H76V88a4,4,0,0,0,8,0V68h20a4,4,0,0,0,0-8H84V40a4,4,0,0,0-8,0V60H56a4,4,0,0,0,0,8ZM184,196H172V184a4,4,0,0,0-8,0v12H152a4,4,0,0,0,0,8h12v12a4,4,0,0,0,8,0V204h12a4,4,0,0,0,0-8ZM216.48,77.17,77.17,216.49a12,12,0,0,1-17,0L39.51,195.8a12,12,0,0,1,0-17L178.83,39.51a12,12,0,0,1,17,0L216.48,60.2A12,12,0,0,1,216.48,77.17ZM170.34,112,144,85.66,45.17,184.49a4,4,0,0,0,0,5.65l20.68,20.69a4,4,0,0,0,5.66,0Zm40.49-46.14L190.14,45.17a4,4,0,0,0-5.66,0L149.65,80,176,106.34l34.83-34.83A4,4,0,0,0,210.83,65.86Z"></path>'),Q1=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function $1(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=Q1();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=X1();U(u,h)},v=u=>{var h=Y1();sn(),U(u,h)},E=u=>{var h=q1();U(u,h)},g=u=>{var h=j1();U(u,h)},m=u=>{var h=K1();U(u,h)},M=u=>{var h=J1();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var t_=et('<path d="M240.49,63.51a12,12,0,0,0-17,0L192,95,161,64l31.52-31.51a12,12,0,0,0-17-17L144,47,120.49,23.51a12,12,0,1,0-17,17L107,44,56.89,94.14a44,44,0,0,0,0,62.23l12.88,12.88L23.51,215.51a12,12,0,0,0,17,17l46.26-46.26,12.88,12.88a44,44,0,0,0,62.23,0L212,149l3.51,3.52a12,12,0,0,0,17-17L209,112l31.52-31.51A12,12,0,0,0,240.49,63.51Zm-95.6,118.63a20,20,0,0,1-28.29,0L73.86,139.4a20,20,0,0,1,0-28.29L124,61l71,71Z"></path>'),e_=et('<path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>',1),n_=et('<path d="M237.66,77.66,203.31,112l26.35,26.34a8,8,0,0,1-11.32,11.32L212,143.31l-53,53a40,40,0,0,1-56.57,0L86.75,180.57,37.66,229.66a8,8,0,0,1-11.32-11.32l49.09-49.09L59.72,153.54a40,40,0,0,1,0-56.57l53-53-6.35-6.34a8,8,0,0,1,11.32-11.32L144,52.69l34.34-34.35a8,8,0,1,1,11.32,11.32L155.31,64,192,100.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z"></path>'),i_=et('<path d="M236.24,67.76a6,6,0,0,0-8.48,0L192,103.51,152.49,64l35.75-35.76a6,6,0,0,0-8.48-8.48L144,55.51,116.24,27.76a6,6,0,1,0-8.48,8.48L115.51,44,61.13,98.38a38,38,0,0,0,0,53.75l17.13,17.12-50.5,50.51a6,6,0,1,0,8.48,8.48l50.51-50.5,17.13,17.13a38,38,0,0,0,53.74,0L212,140.49l7.76,7.75a6,6,0,0,0,8.48-8.48L200.49,112l35.75-35.76A6,6,0,0,0,236.24,67.76ZM149.13,186.38a26,26,0,0,1-36.77,0L69.62,143.64a26,26,0,0,1,0-36.77L124,52.49,203.51,132Z"></path>'),r_=et('<path d="M237.66,66.34a8,8,0,0,0-11.32,0L192,100.69,155.31,64l34.35-34.34a8,8,0,1,0-11.32-11.32L144,52.69,117.66,26.34a8,8,0,0,0-11.32,11.32L112.69,44l-53,53a40,40,0,0,0,0,56.57l15.71,15.71L26.34,218.34a8,8,0,0,0,11.32,11.32l49.09-49.09,15.71,15.71a40,40,0,0,0,56.57,0l53-53,6.34,6.35a8,8,0,0,0,11.32-11.32L203.31,112l34.35-34.34A8,8,0,0,0,237.66,66.34ZM147.72,185a24,24,0,0,1-33.95,0L71,142.23a24,24,0,0,1,0-33.95l53-53L200.69,132Z"></path>'),s_=et('<path d="M234.83,69.17a4,4,0,0,0-5.66,0L192,106.34,149.66,64l37.17-37.17a4,4,0,1,0-5.66-5.66L144,58.34,114.83,29.17a4,4,0,0,0-5.66,5.66L118.34,44,62.54,99.8a36.05,36.05,0,0,0,0,50.91l18.55,18.54L29.17,221.17a4,4,0,0,0,5.66,5.66l51.92-51.92,18.54,18.55a36.06,36.06,0,0,0,50.91,0l55.8-55.8,9.17,9.17a4,4,0,0,0,5.66-5.66L197.66,112l37.17-37.17A4,4,0,0,0,234.83,69.17ZM150.54,187.8a28,28,0,0,1-39.59,0L68.2,145.05a28,28,0,0,1,0-39.59L124,49.66,206.34,132Z"></path>'),a_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Pf(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=a_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=t_();U(u,h)},v=u=>{var h=e_();sn(),U(u,h)},E=u=>{var h=n_();U(u,h)},g=u=>{var h=i_();U(u,h)},m=u=>{var h=r_();U(u,h)},M=u=>{var h=s_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var o_=et('<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>'),l_=et('<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>',1),c_=et('<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path>'),u_=et('<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>'),d_=et('<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>'),h_=et('<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>'),f_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Nf(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=f_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=o_();U(u,h)},v=u=>{var h=l_();sn(),U(u,h)},E=u=>{var h=c_();U(u,h)},g=u=>{var h=u_();U(u,h)},m=u=>{var h=d_();U(u,h)},M=u=>{var h=h_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var p_=et('<path d="M233.47,97.45a36,36,0,0,0-50.92-50.92h0a36.18,36.18,0,0,0-4.12,4.95l-22.55-6.15a36,36,0,0,0-61.34-22.8h0a36.05,36.05,0,0,0-7.8,39.24L57.19,88.37a36.08,36.08,0,0,0-42.66,6.17h0a36,36,0,0,0,45.73,55.21l65.28,47.87A36,36,0,1,0,182.62,180L208,108A35.91,35.91,0,0,0,233.47,97.45Zm-93.74,80.81L74.45,130.39a36.19,36.19,0,0,0-1.21-24.17L102.8,79.61a36,36,0,0,0,42.66-6.16,35.47,35.47,0,0,0,4.12-5l22.55,6.15a35.86,35.86,0,0,0,10.42,22.8A38.06,38.06,0,0,0,185.4,100L160,172A36,36,0,0,0,139.73,178.26ZM216.5,63.5a12,12,0,1,1-17,0A12,12,0,0,1,216.5,63.5Zm-105-24a12,12,0,1,1,0,17A12,12,0,0,1,111.51,39.5Zm-80,89a12,12,0,1,1,17,0A12,12,0,0,1,31.5,128.49Zm137,88a12,12,0,1,1,0-17A12,12,0,0,1,168.49,216.5Z"></path>'),m_=et('<path d="M137,65A24,24,0,1,1,137,31,24,24,0,0,1,137,65ZM23,103A24,24,0,1,0,57,103,24,24,0,0,0,23,103Zm120,88A24,24,0,1,0,177,191,24,24,0,0,0,143,191ZM225,55A24,24,0,1,0,225,89,24,24,0,0,0,225,55Z" opacity="0.2"></path><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>',1),g_=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a28.14,28.14,0,0,0-4,5L148,47.33A28,28,0,0,0,100.2,28.19h0A28,28,0,0,0,94.7,60L54.58,96.1a28,28,0,0,0-34.39,4.1h0a28,28,0,0,0,36.7,42.12l76.75,56.28a28,28,0,1,0,46.17-10.39,27.66,27.66,0,0,0-3.33-2.84L206.63,100q.69,0,1.38,0a28,28,0,0,0,19.8-47.79ZM161.39,180.05a28,28,0,0,0-18.29,5.64L66.36,129.41A28.15,28.15,0,0,0,65.29,108l40.12-36.11a28,28,0,0,0,38.37-9.12L180,72.66a27.88,27.88,0,0,0,8.17,19.13,28.61,28.61,0,0,0,3.32,2.85Z"></path>'),__=et('<path d="M229.23,50.78a30,30,0,0,0-42.44,0h0a29.82,29.82,0,0,0-5.56,7.69l-31.31-8.54A30,30,0,0,0,98.78,26.77h0A30.09,30.09,0,0,0,94.13,63.2L57.83,95.87a30.07,30.07,0,0,0-39.06,2.91h0a30,30,0,0,0,41.38,43.44l72.6,53.25a30,30,0,1,0,48.47-8.68,29.65,29.65,0,0,0-5.77-4.5l28.44-80.59A31.57,31.57,0,0,0,208,102a30,30,0,0,0,21.22-51.2Zm-122-15.52a18,18,0,1,1,0,25.46A18,18,0,0,1,107.27,35.26Zm-80,97.47a18,18,0,1,1,25.46,0A18,18,0,0,1,27.26,132.73Zm145.47,88a18,18,0,1,1,0-25.46A18,18,0,0,1,172.73,220.74Zm-8.61-42.43a30,30,0,0,0-24.27,7.48L67.24,132.54a30.14,30.14,0,0,0-1.38-27.75l36.3-32.67a30,30,0,0,0,44.62-10.61l31.31,8.54a30,30,0,0,0,8.7,23.16,30.47,30.47,0,0,0,5.78,4.51Zm56.62-93.59a18,18,0,1,1,0-25.46A18,18,0,0,1,220.74,84.72Z"></path>'),v_=et('<path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path>'),y_=et('<path d="M227.81,52.19a28,28,0,0,0-39.6,0h0a27.84,27.84,0,0,0-5.88,8.65l-34.56-9.42A28,28,0,0,0,100.2,28.19h0a28.05,28.05,0,0,0-3.48,35.37L57.91,98.49a28,28,0,0,0-37.72,1.71h0a28,28,0,0,0,39.6,39.6l.18-.19,75.32,55.24A28,28,0,1,0,173,183.2l29.56-83.75A28.52,28.52,0,0,0,208,100a28,28,0,0,0,19.8-47.79ZM105.86,33.85a20,20,0,1,1,0,28.29A20,20,0,0,1,105.86,33.85Zm-80,100.29a20,20,0,1,1,28.28,0A20,20,0,0,1,25.85,134.14Zm148.3,88a20,20,0,1,1,0-28.28A20,20,0,0,1,174.15,222.15Zm-8.7-41.6a28,28,0,0,0-25.25,7.66h0l-.18.19L64.71,133.16a28.13,28.13,0,0,0-1.44-28.73L102.08,69.5a28,28,0,0,0,43.6-10.36l34.56,9.43a28,28,0,0,0,8,23.22,27.64,27.64,0,0,0,6.8,5Zm56.7-94.41a20,20,0,1,1,0-28.29A20,20,0,0,1,222.15,86.14Z"></path>'),S_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function x_(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=S_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=p_();U(u,h)},v=u=>{var h=m_();sn(),U(u,h)},E=u=>{var h=g_();U(u,h)},g=u=>{var h=__();U(u,h)},m=u=>{var h=v_();U(u,h)},M=u=>{var h=y_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var b_=et('<path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>'),M_=et('<path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" opacity="0.2"></path><path d="M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"></path>',1),E_=et('<path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>'),A_=et('<path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>'),w_=et('<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>'),T_=et('<path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"></path>'),I_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function R_(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=I_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=b_();U(u,h)},v=u=>{var h=M_();sn(),U(u,h)},E=u=>{var h=E_();U(u,h)},g=u=>{var h=A_();U(u,h)},m=u=>{var h=w_();U(u,h)},M=u=>{var h=T_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var C_=et('<path d="M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z"></path>'),D_=et('<path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>',1),L_=et('<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"></path>'),P_=et('<path d="M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>'),N_=et('<path d="M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>'),F_=et('<path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"></path>'),U_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Yd(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=U_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=C_();U(u,h)},v=u=>{var h=D_();sn(),U(u,h)},E=u=>{var h=L_();U(u,h)},g=u=>{var h=P_();U(u,h)},m=u=>{var h=N_();U(u,h)},M=u=>{var h=F_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var O_=et('<path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76.07,76.07,0,0,0,88.41,121.64L30.92,174.18a4.68,4.68,0,0,0-.39.38,36,36,0,0,0,50.91,50.91l.38-.39,52.54-57.49A76.05,76.05,0,0,0,230.47,67.5ZM160,148a51.5,51.5,0,0,1-23.35-5.52,12,12,0,0,0-14.26,2.62L64.31,208.66a12,12,0,0,1-17-17l63.55-58.07a12,12,0,0,0,2.62-14.26A51.5,51.5,0,0,1,108,96a52.06,52.06,0,0,1,52-52h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path>'),B_=et('<path d="M224,96a64,64,0,0,1-94.94,56L73,217A24,24,0,0,1,39,183L104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40A63.8,63.8,0,0,1,224,96Z" opacity="0.2"></path><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>',1),V_=et('<path d="M232,96a72,72,0,0,1-100.94,66L79,222.22c-.12.14-.26.29-.39.42a32,32,0,0,1-45.26-45.26c.14-.13.28-.27.43-.39L94,124.94a72.07,72.07,0,0,1,83.54-98.78,8,8,0,0,1,3.93,13.19L144,80l5.66,26.35L176,112l40.65-37.52a8,8,0,0,1,13.19,3.93A72.6,72.6,0,0,1,232,96Z"></path>'),z_=et('<path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>'),H_=et('<path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>'),k_=et('<path d="M223.05,70.5a4,4,0,0,0-6.42-1.44l-41.82,38.6L153,103l-4.68-21.79,38.6-41.82a4,4,0,0,0-1.44-6.43A68,68,0,0,0,98.94,126L36.4,180l-.21.2a28,28,0,0,0,39.6,39.6l.2-.21,54-62.54A68,68,0,0,0,228,96,67.51,67.51,0,0,0,223.05,70.5ZM160,156a60,60,0,0,1-29-7.47,4,4,0,0,0-5,.89L70,214.25A20,20,0,0,1,41.75,186l64.82-56a4,4,0,0,0,.89-5,60,60,0,0,1,69.46-86.59L141.05,77.29a4,4,0,0,0-1,3.55l5.66,26.35a4,4,0,0,0,3.07,3.07l26.35,5.66a4,4,0,0,0,3.55-1l38.87-35.87A60.05,60.05,0,0,1,160,156Z"></path>'),G_=et('<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>');function Ff(n,t){ne(t,!0);const e=Tn();let i=wn(t,["$$slots","$$events","$$legacy","children"]),r=Q(()=>t.weight??e.weight??"regular"),s=Q(()=>t.color??e.color??"currentColor"),a=Q(()=>t.size??e.size??"1em"),o=Q(()=>t.mirrored??e.mirrored??!1);function l(u){let{weight:h,color:b,size:I,mirrored:y,...x}=u;return x}var c=G_();In(c,(u,h)=>({xmlns:"http://www.w3.org/2000/svg",role:"img",width:A(a),height:A(a),fill:A(s),transform:A(o)?"scale(-1, 1)":void 0,viewBox:"0 0 256 256",...u,...h}),[()=>l(e),()=>l(i)]);var d=ft(c);{var p=u=>{var h=Ve(),b=_e(h);je(b,()=>t.children),U(u,h)};Ot(d,u=>{t.children&&u(p)})}var f=yt(d,2);{var _=u=>{var h=O_();U(u,h)},v=u=>{var h=B_();sn(),U(u,h)},E=u=>{var h=V_();U(u,h)},g=u=>{var h=z_();U(u,h)},m=u=>{var h=H_();U(u,h)},M=u=>{var h=k_();U(u,h)},T=u=>{var h=An();h.nodeValue=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),U(u,h)};Ot(f,u=>{A(r)==="bold"?u(_):A(r)==="duotone"?u(v,1):A(r)==="fill"?u(E,2):A(r)==="light"?u(g,3):A(r)==="regular"?u(m,4):A(r)==="thin"?u(M,5):u(T,-1)})}ht(c),U(n,c),ie()}var W_=fe('<div class="app-layout svelte-onl4u2"><div class="header-area svelte-onl4u2"><!></div> <div class="content-area svelte-onl4u2"><!></div> <div class="overlays svelte-onl4u2"><!> <!></div></div>');function Z_(n,t){var e=W_(),i=ft(e),r=ft(i);eg(r,{}),ht(i);var s=yt(i,2),a=ft(s);je(a,()=>t.children),ht(s);var o=yt(s,2),l=ft(o);je(l,()=>t.viewsPanel??Wd);var c=yt(l,2);je(c,()=>t.settingsPanel??Wd),ht(o),ht(e),U(n,e)}var Hl=fg(()=>Fc),X_=fe('<div class="views-content"></div>');function Y_(n,t){ne(t,!1),og(),Ef(n,{get isOpen(){return Hl().viewsOpen},onClose:()=>Hl(Hl().viewsOpen=!1),side:"left",children:(e,i)=>{var r=X_();U(e,r)},$$slots:{default:!0}}),ie()}var q_=fe('<div class="settings-content"><!></div>');function j_(n,t){ne(t,!0),Ef(n,{get isOpen(){return Fc.settingsOpen},onClose:()=>Fc.settingsOpen=!1,side:"right",children:(e,i)=>{var r=q_(),s=ft(r);{var a=o=>{var l=Ve(),c=_e(l);je(c,()=>t.children),U(o,l)};Ot(s,o=>{t.children&&o(a)})}ht(r),U(e,r)},$$slots:{default:!0}}),ie()}class K_{nodes=new Map;connections=[];sortedIds=[];needsSort=!0;nodeOutputs=new Map;renderPrimitives=[];hasInputs(t){return t.type==="processor"||t.type==="subject"||t.type==="sink"}addNode(t){this.nodes.set(t.id,t),this.needsSort=!0;for(let e=0;e<this.connections.length;e++){const i=this.connections[e];i.targetId===t.id&&this.hasInputs(t)&&(t.inputIds||(t.inputIds=[]),t.inputIds.includes(i.sourceId)||t.inputIds.push(i.sourceId))}}removeNode(t){const e=[];for(const[i,r]of this.nodes)r.parentId===t&&e.push(i);for(let i=0;i<e.length;i++)this.removeNode(e[i]);this.nodes.delete(t),this.connections=this.connections.filter(i=>i.sourceId!==t&&i.targetId!==t);for(const[i,r]of this.nodes)this.hasInputs(r)&&r.inputIds&&(r.inputIds=r.inputIds.filter(s=>s!==t));this.needsSort=!0}connect(t,e,i,r){const s=this.nodes.get(e);if(s&&this.hasInputs(s)){this.connections=this.connections.filter(a=>{const o=a.targetId===e,l=a.targetPortId===r;return s.type==="subject"&&!r?!0:!(o&&l)});for(let a=0;a<this.connections.length;a++){const o=this.connections[a];if(o.sourceId===t&&o.targetId===e&&o.sourcePortId===i&&o.targetPortId===r)return}this.connections.push({sourceId:t,targetId:e,sourcePortId:i,targetPortId:r}),this.needsSort=!0,this.hasInputs(s)&&(s.inputIds=this.connections.filter(a=>a.targetId===e).map(a=>a.sourceId),s.inputIds=Array.from(new Set(s.inputIds)))}}disconnect(t,e,i,r){this.connections=this.connections.filter(a=>!(a.sourceId===t&&a.targetId===e&&a.sourcePortId===i&&a.targetPortId===r)),this.needsSort=!0;const s=this.nodes.get(e);s&&this.hasInputs(s)&&(s.inputIds=this.connections.filter(a=>a.targetId===e).map(a=>a.sourceId),s.inputIds=Array.from(new Set(s.inputIds)))}reorderNode(t,e,i){if(t===e)return;const r=this.nodes.get(t);if(!r)return;const s=Array.from(this.nodes.entries()),a=s.findIndex(([l])=>l===t);a!==-1&&s.splice(a,1);let o=s.findIndex(([l])=>l===e);o===-1?s.push([t,r]):(i==="after"&&o++,s.splice(o,0,[t,r])),this.nodes.clear();for(let l=0;l<s.length;l++)this.nodes.set(s[l][0],s[l][1]);this.needsSort=!0}resolveOrder(){const t=new Map,e=new Map;for(const[s]of this.nodes)t.set(s,0),e.set(s,[]);for(let s=0;s<this.connections.length;s++){const a=this.connections[s],o=e.get(a.sourceId),l=t.get(a.targetId);o!==void 0&&l!==void 0&&(o.push(a.targetId),t.set(a.targetId,l+1))}const i=[];for(const[s,a]of t)a===0&&i.push(s);const r=[];for(;i.length>0;){const s=i.shift();r.push(s);const a=e.get(s);if(a)for(let o=0;o<a.length;o++){const l=a[o],c=t.get(l)-1;t.set(l,c),c===0&&i.push(l)}}return r}execute(t){this.needsSort&&(this.sortedIds=this.resolveOrder(),this.needsSort=!1),this.renderPrimitives.length=0,this.nodeOutputs.clear();for(let e=0;e<this.sortedIds.length;e++){const i=this.sortedIds[e],r=this.nodes.get(i);if(r){if(r.type==="source"){const s=r;this.nodeOutputs.set(i,s.getOutputs())}else if(r.type==="processor"||r.type==="sink"){const s={};for(let a=0;a<this.connections.length;a++){const o=this.connections[a];if(o.targetId===i){const l=this.nodeOutputs.get(o.sourceId);if(l){const c=o.sourcePortId||"out",d=o.targetPortId||"in";l[c]&&(s[d]||(s[d]=[]),s[d].push(l[c]))}}}if(r.type==="processor"){const a=r;this.nodeOutputs.set(i,a.process(s))}else if(r.type==="sink"){const o=r.consume(s);if(o)for(let l=0;l<o.length;l++)this.renderPrimitives.push(o[l])}}}}return this.renderPrimitives}}function J_(n,t){ne(t,!0),Ta("subject-parent",()=>{});var e=Ve(),i=_e(e);{var r=s=>{var a=Ve(),o=_e(a);je(o,()=>t.children),U(s,a)};Ot(i,s=>{t.children&&s(r)})}U(n,e),ie()}function Q_(n,t){ne(t,!0);const e=Nn("subject-parent");ss(()=>{const a=new If(t.id);a.parentId=e?.(),Lt.request("REGISTER_NODE",{node:a})}),Ta("subject-parent",()=>t.id);var i=Ve(),r=_e(i);{var s=a=>{var o=Ve(),l=_e(o);je(l,()=>t.children),U(a,o)};Ot(r,a=>{t.children&&a(s)})}U(n,i),ie()}function $_(n,t){return t.filter(e=>e.parentId===n)}function tv(n){return n.type==="source"?[]:n.subType==="motion"?[{id:"pos",label:"POS"},{id:"vel",label:"VEL"}]:n.subType==="sprite"?[{id:"x",label:"X"},{id:"y",label:"Y"}]:[{id:"in",label:"IN"}]}function ev(n){if(n.type==="sink")return[];if(n.subType==="api"){const t=n.availableKeys||[];if(t.length>0)return t.map(e=>({id:e,label:e}))}return[{id:"out",label:"OUT"}]}class nv{#t=Ne(null);get selectedNodeId(){return A(this.#t)}set selectedNodeId(t){Ut(this.#t,t,!0)}nodeElements=new Map;#e=Ne(null);get dragConnectionSourceId(){return A(this.#e)}set dragConnectionSourceId(t){Ut(this.#e,t,!0)}#n=Ne(null);get dragConnectionSourcePortId(){return A(this.#n)}set dragConnectionSourcePortId(t){Ut(this.#n,t,!0)}#i=Ne(null);get dragConnectionTargetId(){return A(this.#i)}set dragConnectionTargetId(t){Ut(this.#i,t,!0)}#r=Ne(null);get dragConnectionTargetPortId(){return A(this.#r)}set dragConnectionTargetPortId(t){Ut(this.#r,t,!0)}#s=Ne(0);get dragStartX(){return A(this.#s)}set dragStartX(t){Ut(this.#s,t,!0)}#a=Ne(0);get dragStartY(){return A(this.#a)}set dragStartY(t){Ut(this.#a,t,!0)}#o=Ne(null);get draggedNodeId(){return A(this.#o)}set draggedNodeId(t){Ut(this.#o,t,!0)}}const xt=new nv;var iv=fe('<div class="input-group svelte-zce5x2"><label class="svelte-zce5x2"> </label> <input type="number" class="unified-input svelte-zce5x2"/></div>');function Yu(n,t){ne(t,!0);var e=iv(),i=ft(e),r=ft(i,!0);ht(i);var s=yt(i,2);Af(s),ht(e),cn(()=>{si(r,t.label),Zu(s,t.value),_n(s,"min",t.min),_n(s,"step",t.step)}),gn("change",s,a=>t.onchange(parseFloat(a.currentTarget.value)||0)),U(n,e),ie()}Zi(["change"]);var rv=fe('<option disabled=""> </option>'),sv=fe("<option> </option>"),av=fe('<div class="input-group svelte-1oo6fx3"><label class="svelte-1oo6fx3"> </label> <select class="unified-input svelte-1oo6fx3"><!><!></select></div>');function Ii(n,t){ne(t,!0);var e=av(),i=ft(e),r=ft(i,!0);ht(i);var s=yt(i,2),a=ft(s);{var o=d=>{var p=rv(),f=ft(p,!0);ht(p),p.value=p.__value="",cn(()=>si(f,t.disabledPlaceholder)),U(d,p)};Ot(a,d=>{t.disabledPlaceholder&&d(o)})}var l=yt(a);cr(l,17,()=>t.options,Lr,(d,p)=>{var f=sv(),_=ft(f,!0);ht(f);var v={};cn(()=>{si(_,A(p).label),v!==(v=A(p).value)&&(f.value=(f.__value=A(p).value)??"")}),U(d,f)}),ht(s);var c;ng(s),ht(e),cn(()=>{si(r,t.label),c!==(c=t.value)&&(s.value=(s.__value=t.value)??"",ig(s,t.value))}),gn("change",s,d=>t.onchange(d.currentTarget.value)),U(n,e),ie()}Zi(["change"]);var ov=fe('<div class="input-group"><label> </label> <input type="text" class="unified-input"/></div>');function Uf(n,t){ne(t,!0);let e=ai(t,"placeholder",3,"");var i=ov(),r=ft(i),s=ft(r,!0);ht(r);var a=yt(r,2);Af(a),ht(i),cn(()=>{si(s,t.label),Zu(a,t.value),_n(a,"placeholder",e())}),gn("change",a,o=>t.onchange(o.currentTarget.value)),U(n,i),ie()}Zi(["change"]);var lv=fe('<div class="input-group"><label> </label> <textarea class="unified-input"></textarea></div>');function Ao(n,t){ne(t,!0);let e=ai(t,"rows",3,3);var i=lv(),r=ft(i),s=ft(r,!0);ht(r);var a=yt(r,2);rg(a),ht(i),cn(()=>{si(s,t.label),_n(a,"rows",e()),Zu(a,t.value)}),gn("change",a,o=>t.onchange(o.currentTarget.value)),U(n,i),ie()}Zi(["change"]);var cv=fe("<button><!></button>");function Ra(n,t){let e=ai(t,"variant",3,"default");var i=cv(),r=ft(i);je(r,()=>t.children),ht(i),cn(()=>{El(i,1,`icon-btn ${e()??""}`,"svelte-db4pd2"),_n(i,"title",t.title)}),gn("click",i,function(...s){t.onclick?.apply(this,s)}),U(n,i)}Zi(["click"]);function uv(n,t){let e=ai(t,"size",3,16);function i(o){const l={subject:Df,source:Pf,sink:Lf,processor:Ff},c=o.subType||o.id;return{"mouse-input":O1,"keyboard-input":Yd,sprite:Z1,mesh:x_,"sprite-atlas":R_,"transform-shader":$1,script:x1,renderer:R1,console:Yd,file:a1}[c]||l[o.type]}let r=Q(()=>i(t.node));var s=Ve(),a=_e(s);Tf(a,()=>A(r),(o,l)=>{l(o,{get size(){return e()},weight:"fill"})}),U(n,s)}var dv=fe('<div class="chevron-wrapper svelte-1airrze"><!></div>'),hv=fe('<div class="port-dot in-port svelte-1airrze"></div>'),fv=fe('<div class="port-dot out-port svelte-1airrze"></div>'),pv=fe('<div class="dots-container svelte-1airrze"><!> <!></div>'),mv=fe('<div role="button" tabindex="0"><!> <span class="type-icon svelte-1airrze"><!></span></div>');function gv(n,t){ne(t,!0);let e=ai(t,"isExpanded",3,!1),i=ai(t,"portSize",3,5),r=ai(t,"portSpacing",3,1),s=Q(()=>tv(t.node)),a=Q(()=>ev(t.node)),o=Q(()=>t.node.type==="subject"||A(a).length>0),l=Q(()=>t.node.type==="subject"||A(s).length>0),c=Q(()=>xt.dragConnectionSourceId===t.node.id),d=Q(()=>xt.dragConnectionSourceId!==null&&xt.dragConnectionSourceId!==t.node.id&&A(l)),p=Q(()=>xt.dragConnectionTargetId===t.node.id),f=Q(()=>xt.selectedNodeId===t.node.id),_=Q(()=>xt.dragConnectionSourceId===null&&!A(o)||xt.dragConnectionSourceId!==null&&!A(d)&&!A(c)),v=Q(()=>t.node.type==="source"?"var(--color-success)":t.node.type==="processor"?"var(--color-warning)":t.node.type==="sink"?"var(--color-error)":"var(--color-info)"),E=0,g=0,m=0,M=null;function T(L){const O=L.getBoundingClientRect();xt.dragConnectionSourceId=t.node.id,xt.dragStartX=O.left+O.width/2,xt.dragStartY=O.top+O.height/2}function u(L){if(!A(o))return;const D=L.target.closest(".out-port");D?xt.dragConnectionSourcePortId=D.getAttribute("data-port-id"):xt.dragConnectionSourcePortId=null,E=L.clientX,g=L.clientY,m=Date.now();const N=L.currentTarget;t.node.type==="subject"?M=setTimeout(()=>{T(N)},300):T(N)}function h(L){if(M){const O=L.clientX-E,D=L.clientY-g;Math.sqrt(O*O+D*D)>5&&(clearTimeout(M),M=null)}}function b(L){M&&(clearTimeout(M),M=null);const O=L.clientX-E,D=L.clientY-g,N=Math.sqrt(O*O+D*D),q=Date.now()-m;t.node.type==="subject"&&N<5&&q<300&&t.onToggle&&t.onToggle(L)}var I=mv();let y;var x=ft(I);{var z=L=>{var O=dv(),D=ft(O);{var N=j=>{Og(j,{size:14,weight:"bold"})},q=j=>{Zg(j,{size:14,weight:"bold"})};Ot(D,j=>{e()?j(N):j(q,-1)})}ht(O),U(L,O)},C=L=>{var O=pv(),D=ft(O);cr(D,17,()=>A(s),Lr,(q,j)=>{var it=hv();cn(()=>_n(it,"data-port-id",A(j).id)),U(q,it)});var N=yt(D,2);cr(N,17,()=>A(a),Lr,(q,j)=>{var it=fv();cn(()=>_n(it,"data-port-id",A(j).id)),U(q,it)}),ht(O),U(L,O)};Ot(x,L=>{t.node.type==="subject"?L(z):L(C,-1)})}var k=yt(x,2),B=ft(k);uv(B,{get node(){return t.node},size:16}),ht(k),ht(I),cn(()=>{y=El(I,1,"connection-port svelte-1airrze",null,y,{"is-chevron":t.node.type==="subject",active:A(c),selected:A(f),"valid-target":A(p),disabled:A(_)}),_n(I,"data-node-id",t.node.id),wf(I,`--port-color: ${A(v)??""}; --port-size: ${i()??""}px; --port-spacing: ${r()??""}px;`),_n(k,"title",t.node.type)}),gn("pointerdown",I,u),gn("pointermove",I,h),gn("pointerup",I,b),U(n,I),ie()}Zi(["pointerdown","pointermove","pointerup"]);var _v=fe('<div class="palette-container"><!></div>'),vv=fe('<div class="children-group svelte-phufrx"></div>'),yv=fe('<div class="tree-item svelte-phufrx"><div role="button" tabindex="0"><!> <div class="node-part-right svelte-phufrx"><span class="node-id svelte-phufrx"> </span> <div class="node-actions svelte-phufrx"><!> <!></div></div></div> <!></div>');function Of(n,t){ne(t,!0);const e=Nn("graph-actions"),i=Nn("palette-state");let r=Ne(!0),s=Ne(null),a=Q(()=>$_(t.node.id,t.nodes)),o=Q(()=>A(a).length>0),l=Ne(void 0);ss(()=>(A(l)&&xt.nodeElements.set(t.node.id,A(l)),()=>{xt.nodeElements.get(t.node.id)===A(l)&&xt.nodeElements.delete(t.node.id)}));function c(D){D.stopPropagation(),Ut(r,!A(r))}function d(D){D.stopPropagation();const N=D.currentTarget.getBoundingClientRect();i.activeId===t.node.id?i.activeId=null:(i.activeId=t.node.id,i.x=N.left,i.y=N.bottom+4)}function p(D){D.stopPropagation(),e.removeNode(t.node.id)}function f(D){D.stopPropagation(),xt.selectedNodeId=t.node.id}function _(D){(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),xt.selectedNodeId=t.node.id)}function v(D){D.dataTransfer&&(D.dataTransfer.setData("text/plain",t.node.id),xt.draggedNodeId=t.node.id,D.stopPropagation())}function E(D){if(xt.draggedNodeId===t.node.id)return;D.preventDefault(),D.stopPropagation();const N=D.currentTarget.getBoundingClientRect(),q=D.clientY-N.top,j=6;q<j?Ut(s,"before"):q>N.height-j?Ut(s,"after"):t.node.type==="subject"?Ut(s,"inside"):Ut(s,q<N.height/2?"before":"after",!0)}function g(D){Ut(s,null)}function m(D){D.preventDefault(),D.stopPropagation();const N=D.dataTransfer?.getData("text/plain"),q=A(s);if(Ut(s,null),!N||N===t.node.id){xt.draggedNodeId=null;return}q==="inside"&&t.node.type==="subject"?e.reparentNode(N,t.node.id):(q==="before"||q==="after")&&e.reorderNode(N,t.node.id,q),xt.draggedNodeId=null}function M(){xt.draggedNodeId=null,Ut(s,null)}var T=yv(),u=ft(T);let h;var b=ft(u);gv(b,{get node(){return t.node},get isExpanded(){return A(r)},onToggle:c});var I=yt(b,2),y=ft(I),x=ft(y,!0);ht(y);var z=yt(y,2),C=ft(z);{var k=D=>{var N=_v(),q=ft(N);Ra(q,{title:"Add Child Node",onclick:d,children:(j,it)=>{Nf(j,{size:12,weight:"bold"})},$$slots:{default:!0}}),ht(N),U(D,N)};Ot(C,D=>{t.node.type==="subject"&&D(k)})}var B=yt(C,2);Ra(B,{variant:"danger",title:"Delete",onclick:p,children:(D,N)=>{Xu(D,{size:12,weight:"bold"})},$$slots:{default:!0}}),ht(z),ht(I),ht(u),Ia(u,D=>Ut(l,D),()=>A(l));var L=yt(u,2);{var O=D=>{var N=vv();cr(N,21,()=>A(a),Lr,(q,j)=>{var it=Ve(),gt=_e(it);Of(gt,{get node(){return A(j)},get nodes(){return t.nodes}}),U(q,it)}),ht(N),U(D,N)};Ot(L,D=>{A(o)&&A(r)&&D(O)})}ht(T),cn(()=>{h=El(u,1,"node-row svelte-phufrx",null,h,{selected:xt.selectedNodeId===t.node.id,"drop-before":A(s)==="before","drop-after":A(s)==="after","drop-inside":A(s)==="inside","is-dragging":xt.draggedNodeId===t.node.id}),_n(u,"data-node-id",t.node.id),_n(I,"draggable",xt.dragConnectionSourceId===null?"true":"false"),si(x,t.node.name||t.node.id)}),gn("click",u,f),gn("keydown",u,_),Ti("dragover",u,E),Ti("dragleave",u,g),Ti("drop",u,m),Ti("dragstart",I,v),Ti("dragend",I,M),U(n,T),ie()}Zi(["click","keydown"]);var Sv=fe('<div class="inline-palette svelte-1ea37n5" role="presentation"><button class="svelte-1ea37n5"><!> Source</button> <button class="svelte-1ea37n5"><!> Processor</button> <button class="svelte-1ea37n5"><!> Subject</button> <button class="svelte-1ea37n5"><!> Sink</button></div>');function xv(n,t){ne(t,!0);let e=ai(t,"x",3,0),i=ai(t,"y",3,0),r=Ne(void 0),s=Ne(0),a=Ne(0);ss(()=>{if(t.show&&A(r)){const f=A(r).getBoundingClientRect();let _=e(),v=i();_+f.width>window.innerWidth&&(_=window.innerWidth-f.width-8),v+f.height>window.innerHeight&&(v=i()-f.height-8),Ut(s,_,!0),Ut(a,v,!0)}else Ut(s,e()),Ut(a,i())});function o(f,_){_.stopPropagation(),t.onAdd(f)}function l(f){return document.body.appendChild(f),{destroy(){f.parentNode&&f.parentNode.removeChild(f)}}}var c=Ve(),d=_e(c);{var p=f=>{var _=Sv(),v=ft(_),E=ft(v);Pf(E,{size:14,weight:"fill",style:"color: var(--color-success)"}),sn(),ht(v);var g=yt(v,2),m=ft(g);Ff(m,{size:14,weight:"fill",style:"color: var(--color-warning)"}),sn(),ht(g);var M=yt(g,2),T=ft(M);Df(T,{size:14,weight:"fill",style:"color: var(--color-info)"}),sn(),ht(M);var u=yt(M,2),h=ft(u);Lf(h,{size:14,weight:"fill",style:"color: var(--color-error)"}),sn(),ht(u),ht(_),Al(_,b=>l?.(b)),Ia(_,b=>Ut(r,b),()=>A(r)),cn(()=>wf(_,`top: ${A(a)??""}px; left: ${A(s)??""}px;`)),gn("click",_,b=>b.stopPropagation()),gn("click",v,b=>o("source",b)),gn("click",g,b=>o("processor",b)),gn("click",M,b=>o("subject",b)),gn("click",u,b=>o("sink",b)),U(f,_)};Ot(d,f=>{t.show&&f(p)})}U(n,c),ie()}Zi(["click"]);function bv(n){let t=!1,e=0,i=0;function r(o){t=!0,e=o.clientY,i=n.parentElement.clientHeight,n.setPointerCapture(o.pointerId)}function s(o){if(!t)return;const l=e-o.clientY,c=Math.max(150,Math.min(i+l,window.innerHeight-100));n.parentElement.style.height=`${c}px`}function a(o){t=!1,n.releasePointerCapture(o.pointerId)}return n.addEventListener("pointerdown",r),n.addEventListener("pointermove",s),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),{destroy(){n.removeEventListener("pointerdown",r),n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a)}}}var Mv=fe('<span class="port-label svelte-6279m"> </span>'),Ev=fe('<div class="connection-item"><span class="conn-id"> <!></span> <!></div>'),Av=fe("<option> </option>"),wv=fe('<div class="input-group"><label>Connected Sources</label> <div class="connection-list"><!> <select class="unified-input"><option disabled="">+ Connect Node...</option><!></select></div></div>');function Tv(n,t){ne(t,!0);function e(c){const d=c.target,p=d.value;p&&(t.graphActions.connectInput(t.activeNode.id,p),d.value="")}var i=wv(),r=yt(ft(i),2),s=ft(r);cr(s,17,()=>t.connections.filter(c=>c.targetId===t.activeNode.id),Lr,(c,d)=>{const p=Q(()=>t.nodes.find(T=>T.id===A(d).sourceId)),f=Q(()=>A(p)||{});var _=Ev(),v=ft(_),E=ft(v),g=yt(E);{var m=T=>{var u=Mv(),h=ft(u);ht(u),cn(()=>si(h,`(${(A(d).sourcePortId||"OUT")??""} → ${(A(d).targetPortId||"IN")??""})`)),U(T,u)};Ot(g,T=>{(A(d).sourcePortId||A(d).targetPortId)&&T(m)})}ht(v);var M=yt(v,2);Ra(M,{variant:"danger",onclick:()=>t.graphActions.disconnectInput(t.activeNode.id,A(d).sourceId,A(d).targetPortId,A(d).sourcePortId),children:(T,u)=>{Xu(T,{size:12,weight:"bold"})},$$slots:{default:!0}}),ht(_),cn(()=>si(E,`${(A(p)?A(f).name||A(p).id:A(d).sourceId)??""} `)),U(c,_)});var a=yt(s,2),o=ft(a);o.value=o.__value="";var l=yt(o);cr(l,17,()=>t.availableInputs,Lr,(c,d)=>{const p=Q(()=>A(d));var f=Av(),_=ft(f);ht(f);var v={};cn(()=>{si(_,`${(A(p).name||A(d).id)??""} (${A(d).type??""})`),v!==(v=A(d).id)&&(f.value=(f.__value=A(d).id)??"")}),U(c,f)}),ht(a),a.value=a.__value="",ht(r),ht(i),gn("change",a,e),U(n,i),ie()}Zi(["change"]);var Iv=fe('<div class="divider"></div> <!>',1),Rv=fe('<div class="props-content svelte-1hotla4"><!> <!> <div class="divider"></div> <!> <!></div>'),Cv=fe('<div class="node-properties svelte-1hotla4" style="height: 320px;"><div class="resize-handle svelte-1hotla4"></div> <div class="props-header svelte-1hotla4"><div class="header-title svelte-1hotla4"><h4 class="svelte-1hotla4"> </h4> <span> </span></div> <!></div> <!></div>');function Dv(n,t){ne(t,!0);const e=Nn("graph-actions"),i=Nn("settings-registry")||{};let r=Q(()=>t.nodes.find(f=>f.id===xt.selectedNodeId)),s=Q(()=>A(r)||{}),a=Ne(Bs({}));Va(()=>{Ut(a,Lt.request("GET_NODE_FACTORIES",void 0),!0)});let o=Q(()=>A(r)?t.nodes.filter(f=>(f.type==="source"||f.type==="processor"||f.type==="subject")&&f.id!==A(r).id&&!(A(s).inputIds||[]).includes(f.id)):[]),l=Q(()=>A(r)&&A(r).subType?i[A(r).subType]:null);var c=Ve(),d=_e(c);{var p=f=>{const _=Q(()=>A(r).type==="subject"?"info":A(r).type==="source"?"success":A(r).type==="processor"?"warning":"error");var v=Cv(),E=ft(v);Al(E,y=>bv?.(y));var g=yt(E,2),m=ft(g),M=ft(m),T=ft(M,!0);ht(M);var u=yt(M,2),h=ft(u,!0);ht(u),ht(m);var b=yt(m,2);Ra(b,{onclick:()=>xt.selectedNodeId=null,children:(y,x)=>{Xu(y,{size:14,weight:"bold"})},$$slots:{default:!0}}),ht(g);var I=yt(g,2);cg(I,()=>A(r).id,y=>{var x=Rv(),z=ft(x);{let N=Q(()=>A(s).name||"");Uf(z,{label:"Display Name",get value(){return A(N)},get placeholder(){return A(r).id},onchange:q=>e.updateNodeConfig(A(r),{name:q})})}var C=yt(z,2);{var k=N=>{{let q=Q(()=>A(r).subType||"dummy"),j=Q(()=>A(a)[A(r).type].map(it=>({value:it.subType,label:it.label})));Ii(N,{label:"Implementation",get value(){return A(q)},get options(){return A(j)},onchange:it=>e.changeNodeSubType(A(r),it)})}};Ot(C,N=>{A(a)[A(r).type]&&A(a)[A(r).type].length>0&&N(k)})}var B=yt(C,4);{var L=N=>{var q=Ve(),j=_e(q);Tf(j,()=>A(l),(it,gt)=>{gt(it,{get node(){return A(r)}})}),U(N,q)};Ot(B,N=>{A(l)&&N(L)})}var O=yt(B,2);{var D=N=>{var q=Iv(),j=yt(_e(q),2);Tv(j,{get activeNode(){return A(r)},get connections(){return t.connections},get availableInputs(){return A(o)},get nodes(){return t.nodes},get graphActions(){return e}}),U(N,q)};Ot(O,N=>{A(r).type!=="source"&&N(D)})}ht(x),U(y,x)}),ht(v),cn(()=>{si(T,A(s).name||A(r).id),El(u,1,`badge ${A(_)??""}`,"svelte-1hotla4"),si(h,A(r).type)}),sg(3,v,()=>ag,()=>({y:50,duration:250})),U(f,v)};Ot(d,f=>{A(r)&&f(p)})}U(n,c),ie()}const Es=["rgba(59, 130, 246, 0.75)","rgba(16, 185, 129, 0.75)","rgba(245, 158, 11, 0.75)","rgba(239, 68, 68, 0.75)","rgba(139, 92, 246, 0.75)","rgba(6, 182, 212, 0.75)"];function Lv(n,t,e,i,r=4){if(i.width===0||i.height===0)return[];const s=new Map;for(let h=0;h<n.length;h++){const b=n[h],I=`${b.sourceId}:${b.sourcePortId||""}->${b.targetId}:${b.targetPortId||""}`;s.has(I)||s.set(I,b)}const a=Array.from(s.values());a.sort((h,b)=>{const I=h.sourceId.localeCompare(b.sourceId);return I!==0?I:h.targetId.localeCompare(b.targetId)});const o=[],l=[];for(let h=0;h<a.length;h++){const b=a[h],I=t.find(C=>C.id===b.sourceId),y=t.find(C=>C.id===b.targetId),x=I?.type==="subject"&&y?.parentId===I?.id,z=y?.type==="subject"&&I?.parentId===y?.id;x||z?o.push(b):l.push(b)}const c=new Map,d=new Map;for(const h of l)c.set(h.sourceId,(c.get(h.sourceId)||0)+1),c.set(h.targetId,(c.get(h.targetId)||0)+1);for(const h of o){const b=t.find(x=>x.id===h.sourceId),I=t.find(x=>x.id===h.targetId);b?.type==="subject"&&I?.parentId===b?.id?(d.set(h.sourceId,(d.get(h.sourceId)||0)+1),c.set(h.targetId,(c.get(h.targetId)||0)+1)):(c.set(h.sourceId,(c.get(h.sourceId)||0)+1),d.set(h.targetId,(d.get(h.targetId)||0)+1))}const p=new Map,f=new Map,_=new Map,v=new Map,E=[];let g=0;const m=(h,b,I,y,x,z)=>{if(I){const O=h.querySelector(`.port-dot.${b}-port[data-port-id="${I}"]`);if(O){const D=O.getBoundingClientRect();return D.top+D.height/2}}const C=h.querySelectorAll(`.port-dot.${b}-port`);if(C.length>0){const D=C[Math.min(x,C.length-1)].getBoundingClientRect();return D.top+D.height/2}const k=h.querySelector(".port-capsule")||h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port"),B=k?k.getBoundingClientRect():h.getBoundingClientRect(),L=(y-(z-1)/2)*r;return B.top+B.height/2+L},M=(h,b,I,y)=>{if(I){const k=h.querySelector(`.port-dot.${b}-port[data-port-id="${I}"]`);if(k)return k.getBoundingClientRect().left}const x=h.querySelectorAll(`.port-dot.${b}-port`);if(x.length>0)return x[Math.min(y,x.length-1)].getBoundingClientRect().left;const z=h.querySelector(".port-capsule")||h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port");return(z?z.getBoundingClientRect():h.getBoundingClientRect()).left},T=h=>{const b=h.querySelector(".chevron-wrapper")||h.querySelector(".connection-port");return b?b.getBoundingClientRect():h.getBoundingClientRect()};for(let h=0;h<o.length;h++){const b=o[h],I=t.find(C=>C.id===b.sourceId),y=t.find(C=>C.id===b.targetId),x=e.get(b.sourceId),z=e.get(b.targetId);if(x&&z){const C=I?.type==="subject"&&y?.parentId===I?.id,k=g%Es.length;if(g++,C){const B=T(x),L=d.get(b.sourceId)||1,O=v.get(b.sourceId)||0;v.set(b.sourceId,O+1);const D=(O-(L-1)/2)*r,N=c.get(b.targetId)||1,q=p.get(b.targetId)||0;p.set(b.targetId,q+1);const j=f.get(b.targetId)||0;f.set(b.targetId,j+1);const it=B.left+B.width/2-i.left+D,gt=B.bottom-i.top,pt=M(z,"in",b.targetPortId,j)-i.left-2,jt=m(z,"in",b.targetPortId,q,j,N)-i.top;E.push({id:`${b.sourceId}-${b.sourcePortId||"any"}-${b.targetId}-${b.targetPortId||"any"}-child`,path:`M ${it} ${gt} L ${it} ${jt} L ${pt} ${jt}`,color:Es[k],markerId:`arrow-${k}`})}else{const B=T(z),L=c.get(b.sourceId)||1,O=p.get(b.sourceId)||0;p.set(b.sourceId,O+1);const D=_.get(b.sourceId)||0;_.set(b.sourceId,D+1);const N=d.get(b.targetId)||1,q=v.get(b.targetId)||0;v.set(b.targetId,q+1);const j=(q-(N-1)/2)*r,it=M(x,"out",b.sourcePortId,D)-i.left-2,gt=m(x,"out",b.sourcePortId,O,D,L)-i.top,pt=B.left+B.width/2-i.left+j,jt=B.bottom-i.top;E.push({id:`${b.sourceId}-${b.sourcePortId||"any"}-${b.targetId}-${b.targetPortId||"any"}-child`,path:`M ${it} ${gt} L ${pt} ${gt} L ${pt} ${jt}`,color:Es[k],markerId:`arrow-${k}`})}}}const u=new Map;for(let h=0;h<l.length;h++){const b=l[h],I=t.find(z=>z.id===b.sourceId),y=t.find(z=>z.id===b.targetId);let x="root";I?.parentId&&I.parentId===y?.parentId&&(x=I.parentId),u.has(x)||u.set(x,[]),u.get(x).push(b)}for(const[h,b]of u.entries()){const I=[];let y=1/0;const x=h!=="root"?e.get(h):null;if(x){const B=T(x);y=B.left+B.width/2-i.left}else{let B=1/0;for(let L=0;L<b.length;L++){const O=b[L],D=e.get(O.sourceId),N=e.get(O.targetId);D&&(B=Math.min(B,M(D,"out",O.sourcePortId,0)-i.left)),N&&(B=Math.min(B,M(N,"in",O.targetPortId,0)-i.left))}y=B!==1/0?B-12:10}for(let B=0;B<b.length;B++){const L=b[B],O=e.get(L.sourceId),D=e.get(L.targetId);if(O&&D){const N=c.get(L.sourceId)||1,q=p.get(L.sourceId)||0;p.set(L.sourceId,q+1);const j=_.get(L.sourceId)||0;_.set(L.sourceId,j+1);const it=c.get(L.targetId)||1,gt=p.get(L.targetId)||0;p.set(L.targetId,gt+1);const pt=f.get(L.targetId)||0;f.set(L.targetId,pt+1);const jt=M(O,"out",L.sourcePortId,j)-i.left-2,Fe=m(O,"out",L.sourcePortId,q,j,N)-i.top,ze=M(D,"in",L.targetPortId,pt)-i.left-2,$=m(D,"in",L.targetPortId,gt,pt,it)-i.top,at=Math.min(Fe,$),ct=Math.max(Fe,$),ee=ct-at;I.push({id:`${L.sourceId}-${L.sourcePortId||"any"}-${L.targetId}-${L.targetPortId||"any"}-bus`,startX:jt,startY:Fe,endX:ze,endY:$,minY:at,maxY:ct,length:ee,colorIndex:g%Es.length,trackIndex:0}),g++}}I.sort((B,L)=>B.length-L.length);const z=[];for(let B=0;B<I.length;B++){const L=I[B];let O=!1;for(let D=0;D<z.length;D++){const N=z[D];let q=!1;for(let j=0;j<N.length;j++){const it=N[j];if(L.minY-2<it.maxY&&L.maxY+2>it.minY){q=!0;break}}if(!q){N.push({minY:L.minY,maxY:L.maxY}),L.trackIndex=D,O=!0;break}}O||(z.push([{minY:L.minY,maxY:L.maxY}]),L.trackIndex=z.length-1)}const C=d.get(h)||0,k=C%2===0;for(let B=0;B<I.length;B++){const L=I[B];let O=0;if(h!=="root")if(C===0)if(L.trackIndex===0)O=y;else{const N=Math.ceil(L.trackIndex/2),q=L.trackIndex%2===1?-1:1;O=y+q*N*r}else if(k){const N=Math.floor(L.trackIndex/2)+C/2+.5,q=L.trackIndex%2===0?-1:1;O=y+q*N*r}else{const N=Math.floor(L.trackIndex/2)+Math.floor(C/2)+1,q=L.trackIndex%2===0?-1:1;O=y+q*N*r}else O=y-L.trackIndex*r;let D="";Math.abs(L.startY-L.endY)<2?D=`M ${L.startX} ${L.startY} L ${L.endX} ${L.endY}`:D=`M ${L.startX} ${L.startY} L ${O} ${L.startY} L ${O} ${L.endY} L ${L.endX} ${L.endY}`,E.push({id:L.id,path:D,color:Es[L.colorIndex],markerId:`arrow-${L.colorIndex}`})}}return E}var Pv=et('<marker viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker>'),Nv=et('<path stroke-width="2" fill="none" stroke-linejoin="round" class="data-path svelte-1f7lbxv"></path>'),Fv=et('<svg class="data-connections-layer svelte-1f7lbxv" style="pointer-events: none; z-index: 10;"><defs></defs><!></svg>');function Uv(n,t){ne(t,!0);let e,i=Ne(Bs([]));function r(){if(!e)return;const l=e.getBoundingClientRect();Ut(i,Lv(t.connections,t.nodes,xt.nodeElements,l),!0)}Va(()=>{const l=new ResizeObserver(r);l.observe(document.body),window.addEventListener("scroll",r,!0);const c=setInterval(r,100);return()=>{l.disconnect(),window.removeEventListener("scroll",r,!0),clearInterval(c)}});var s=Fv(),a=ft(s);cr(a,21,()=>Es,Lr,(l,c,d)=>{var p=Pv();_n(p,"id",`arrow-${d}`);var f=ft(p);ht(p),cn(()=>_n(f,"fill",A(c))),U(l,p)}),ht(a);var o=yt(a);cr(o,17,()=>A(i),l=>l.id,(l,c)=>{var d=Nv();cn(()=>{_n(d,"d",A(c).path),_n(d,"stroke",A(c).color),_n(d,"marker-end",`url(#${A(c).markerId??""})`)}),U(l,d)}),ht(s),Ia(s,l=>e=l,()=>e),U(n,s),ie()}function Bf(n){return document.body.appendChild(n),{destroy(){n.parentNode&&n.parentNode.removeChild(n)}}}var Ov=et('<svg style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999;"><defs><marker id="drag-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"></path></marker></defs><path stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="4" stroke-linejoin="round" marker-end="url(#drag-arrow)"></path></svg>');function Bv(n,t){ne(t,!0);const e=40,i=40,r=Nn("graph-actions");let s=Ne(0),a=Ne(0),o=Ne(!1),l=Ne(null),c=Ne(null),d=Ne(null),p=Q(()=>A(o)?i:e);ss(()=>{xt.dragConnectionSourceId!==A(l)&&(xt.dragConnectionSourceId&&(Ut(s,xt.dragStartX,!0),Ut(a,xt.dragStartY,!0)),Ut(l,xt.dragConnectionSourceId,!0))});function f(M,T,u){const h=M.querySelectorAll(u);if(h.length===0)return null;let b=1/0,I=null,y=0,x=0;for(let z=0;z<h.length;z++){const C=h[z].getBoundingClientRect(),k=C.top+C.height/2,B=Math.abs(T-k);B<b&&(b=B,y=k,x=C.left-2,I=h[z].getAttribute("data-port-id"))}return{bestPortId:I,bestX:x,bestY:y}}function _(M){if(xt.dragConnectionSourceId){Ut(o,M.pointerType==="touch"),Ut(s,M.clientX,!0),Ut(a,M.clientY,!0);const u=document.elementFromPoint(M.clientX,M.clientY)?.closest(".node-row");if(u){const h=u.getAttribute("data-node-id");if(h&&h!==xt.dragConnectionSourceId){const b=f(u,M.clientY,".in-port");if(b)xt.dragConnectionTargetId=h,Ut(c,b.bestX,!0),Ut(d,b.bestY,!0),xt.dragConnectionTargetPortId=b.bestPortId;else{const I=u.querySelector(".connection-port");if(I&&I.classList.contains("is-chevron")){xt.dragConnectionTargetId=h;const y=I.getBoundingClientRect();Ut(c,y.left-2),Ut(d,y.top+y.height/2),xt.dragConnectionTargetPortId=null}else xt.dragConnectionTargetId=null,xt.dragConnectionTargetPortId=null,Ut(c,null),Ut(d,null)}}else h===xt.dragConnectionSourceId&&xt.dragConnectionTargetId!==null&&(xt.dragConnectionTargetId=null,xt.dragConnectionTargetPortId=null,Ut(c,null),Ut(d,null))}else xt.dragConnectionTargetId!==null&&(xt.dragConnectionTargetId=null,xt.dragConnectionTargetPortId=null,Ut(c,null),Ut(d,null))}}function v(M){if(xt.dragConnectionSourceId){Ut(o,M.pointerType==="touch");let T=xt.dragConnectionTargetId,u=xt.dragConnectionTargetPortId;if(!T){const b=document.elementFromPoint(M.clientX,M.clientY)?.closest(".node-row");if(b){const I=b.getAttribute("data-node-id");if(I&&I!==xt.dragConnectionSourceId){const y=f(b,M.clientY,".in-port");if(y)T=I,u=y.bestPortId;else{const x=b.querySelector(".connection-port");x&&x.classList.contains("is-chevron")&&(T=I,u=null)}}}}T&&T!==xt.dragConnectionSourceId&&r.connectInput(T,xt.dragConnectionSourceId,u||void 0,xt.dragConnectionSourcePortId||void 0),xt.dragConnectionSourceId=null,xt.dragConnectionSourcePortId=null,xt.dragConnectionTargetId=null,xt.dragConnectionTargetPortId=null,Ut(c,null),Ut(d,null)}}var E=Ve();Ti("pointermove",Nc,_),Ti("pointerup",Nc,v);var g=_e(E);{var m=M=>{const T=Q(()=>xt.dragStartX),u=Q(()=>xt.dragStartY),h=Q(()=>A(s)-A(p)),b=Q(()=>A(a)),I=Q(()=>A(c)!==null?A(c):A(h)),y=Q(()=>A(d)!==null?A(d):A(b)),x=Q(()=>Math.min(A(T),A(I))-20);var z=Ov(),C=yt(ft(z));ht(z),Al(z,k=>Bf?.(k)),cn(()=>_n(C,"d",`M ${A(T)} ${A(u)} L ${A(x)} ${A(u)} L ${A(x)} ${A(y)} L ${A(I)} ${A(y)}`)),U(M,z)};Ot(g,M=>{xt.dragConnectionSourceId&&M(m)})}U(n,E),ie()}var Vv=fe('<div class="palette-overlay svelte-15d5wgw" role="presentation"></div>'),zv=fe('<div class="editor svelte-15d5wgw"><div class="editor-content"><div class="editor-header svelte-15d5wgw"><h3 class="svelte-15d5wgw">Graph Editor</h3> <div class="palette-container svelte-15d5wgw"><!></div></div> <div class="tree-wrapper svelte-15d5wgw" role="presentation"><!> <div class="tree svelte-15d5wgw"></div> <!></div></div> <!> <!> <!></div>');function Hv(n,t){ne(t,!0);let e=Ne(Bs([])),i=Ne(Bs([]));const r=Bs({activeId:null,x:0,y:0});Ta("palette-state",r);let s=Q(()=>A(e).filter(I=>!I.parentId));function a(){const I=Lt.request("GET_GRAPH_STATE",void 0);I&&(Ut(e,I.nodes,!0),Ut(i,I.connections,!0))}Va(()=>{a(),Lt.on("GRAPH_UPDATED",a)}),Gu(()=>{Lt.off("GRAPH_UPDATED",a)});function o(I){I.stopPropagation();const y=I.currentTarget.getBoundingClientRect();r.activeId==="root"?r.activeId=null:(r.activeId="root",r.x=y.left,r.y=y.bottom+4)}const l={removeNode:I=>{Lt.request("REMOVE_NODE",{id:I}),xt.selectedNodeId===I&&(xt.selectedNodeId=null)},addNode:(I,y)=>{const x=y+"-"+Math.random().toString(36).substring(2,6),z=y==="subject"?"default":"dummy",C=Lt.request("CREATE_NODE",{id:x,type:y,subType:z,parentId:I||void 0});C&&(Lt.request("REGISTER_NODE",{node:C}),r.activeId=null,xt.selectedNodeId=x)},updateNodeConfig:(I,y)=>{const x=I,z={name:x.name,capacity:x.capacity,operation:x.operation,textureId:x.textureId,bufferId:x.bufferId,url:x.url,dataPath:x.dataPath,timeKey:x.timeKey,unpackArray:x.unpackArray,unpackKey:x.unpackKey,unpackValue:x.unpackValue,data:x.data?Array.from(x.data):void 0,vertices:x.vertices,indices:x.indices,uvs:x.uvs,inputIds:x.inputIds?[...x.inputIds]:[],...y},C=Lt.request("CREATE_NODE",{id:I.id,type:I.type,subType:I.subType||"dummy",parentId:I.parentId,config:z});C&&Lt.request("REGISTER_NODE",{node:C})},changeNodeSubType:(I,y)=>{const x=I,z={inputIds:x.inputIds?[...x.inputIds]:[]},C=Lt.request("CREATE_NODE",{id:I.id,type:I.type,subType:y,parentId:I.parentId,config:z});C&&Lt.request("REGISTER_NODE",{node:C})},connectInput:(I,y,x,z)=>{Lt.request("CONNECT_NODES",{sourceId:y,targetId:I,sourcePortId:z,targetPortId:x})},disconnectInput:(I,y,x,z)=>{Lt.request("DISCONNECT_NODES",{sourceId:y,targetId:I,sourcePortId:z,targetPortId:x})},reparentNode:(I,y)=>{const x=A(e).find(z=>z.id===I);if(x){let z=y,C=!1;for(;z;){if(z===I){C=!0;break}const k=A(e).find(B=>B.id===z);z=k&&k.parentId||null}C||(x.parentId=y||void 0,Lt.emit("GRAPH_UPDATED",void 0))}},reorderNode:(I,y,x)=>{Lt.request("REORDER_NODE",{nodeId:I,targetId:y,position:x})}};Ta("graph-actions",l);function c(I){const y=r.activeId==="root"?null:r.activeId;l.addNode(y,I)}var d=zv();Ti("click",Nc,()=>r.activeId=null);var p=ft(d),f=ft(p),_=yt(ft(f),2),v=ft(_);Ra(v,{title:"Add Root Node",onclick:o,children:(I,y)=>{Nf(I,{size:12,weight:"bold"})},$$slots:{default:!0}}),ht(_),ht(f);var E=yt(f,2),g=ft(E);Uv(g,{get connections(){return A(i)},get nodes(){return A(e)}});var m=yt(g,2);cr(m,21,()=>A(s),Lr,(I,y)=>{Of(I,{get node(){return A(y)},get nodes(){return A(e)}})}),ht(m);var M=yt(m,2);{var T=I=>{var y=Vv();Al(y,x=>Bf?.(x)),gn("click",y,()=>r.activeId=null),U(I,y)};Ot(M,I=>{r.activeId&&I(T)})}ht(E),ht(p);var u=yt(p,2);Dv(u,{get nodes(){return A(e)},get connections(){return A(i)}});var h=yt(u,2);{let I=Q(()=>r.activeId!==null);xv(h,{get show(){return A(I)},get x(){return r.x},get y(){return r.y},onAdd:c})}var b=yt(h,2);Bv(b,{}),ht(d),Ti("dragover",E,I=>{xt.draggedNodeId&&I.preventDefault()}),Ti("drop",E,I=>{if(xt.draggedNodeId){I.preventDefault();const y=I.dataTransfer?.getData("text/plain");y&&l.reparentNode(y,null),xt.draggedNodeId=null}}),U(n,d),ie()}Zi(["click"]);const qu="183",kv=0,qd=1,Gv=2,wo=1,Wv=2,ga=3,Pr=0,zn=1,qn=2,ar=0,Vs=1,jd=2,Kd=3,Jd=4,Zv=5,Kr=100,Xv=101,Yv=102,qv=103,jv=104,Kv=200,Jv=201,Qv=202,$v=203,Oc=204,Bc=205,t2=206,e2=207,n2=208,i2=209,r2=210,s2=211,a2=212,o2=213,l2=214,Vc=0,zc=1,Hc=2,Zs=3,kc=4,Gc=5,Wc=6,Zc=7,Vf=0,c2=1,u2=2,Oi=0,zf=1,Hf=2,kf=3,Gf=4,Wf=5,Zf=6,Xf=7,Yf=300,ns=301,Xs=302,kl=303,Gl=304,wl=306,Xc=1e3,sr=1001,Yc=1002,vn=1003,d2=1004,Qa=1005,bn=1006,Wl=1007,Qr=1008,ri=1009,qf=1010,jf=1011,Ca=1012,ju=1013,zi=1014,Pi=1015,ur=1016,Ku=1017,Ju=1018,Da=1020,Kf=35902,Jf=35899,Qf=1021,$f=1022,_i=1023,dr=1026,$r=1027,tp=1028,Qu=1029,Ys=1030,$u=1031,td=1033,To=33776,Io=33777,Ro=33778,Co=33779,qc=35840,jc=35841,Kc=35842,Jc=35843,Qc=36196,$c=37492,tu=37496,eu=37488,nu=37489,iu=37490,ru=37491,su=37808,au=37809,ou=37810,lu=37811,cu=37812,uu=37813,du=37814,hu=37815,fu=37816,pu=37817,mu=37818,gu=37819,_u=37820,vu=37821,yu=36492,Su=36494,xu=36495,bu=36283,Mu=36284,Eu=36285,Au=36286,h2=3200,f2=0,p2=1,Cr="",ti="srgb",qs="srgb-linear",Go="linear",Le="srgb",cs=7680,Qd=519,m2=512,g2=513,_2=514,ed=515,v2=516,y2=517,nd=518,S2=519,$d=35044,th="300 es",Ni=2e3,Wo=2001;function x2(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b2(){const n=Zo("canvas");return n.style.display="block",n}const eh={};function nh(...n){const t="THREE."+n.shift();console.log(t,...n)}function ep(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function te(...n){n=ep(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function xe(...n){n=ep(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Xo(...n){const t=n.join(" ");t in eh||(eh[t]=!0,te(...n))}function M2(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const E2={[Vc]:zc,[Hc]:Wc,[kc]:Zc,[Zs]:Gc,[zc]:Vc,[Wc]:Hc,[Zc]:kc,[Gc]:Zs};class ea{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,wu=180/Math.PI;function za(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function A2(n,t){return(n%t+t)%t}function Xl(n,t,e){return(1-e)*n+e*t}function oa(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(t=0,e=0){Be.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3],f=s[a+0],_=s[a+1],v=s[a+2],E=s[a+3];if(p!==E||l!==f||c!==_||d!==v){let g=l*f+c*_+d*v+p*E;g<0&&(f=-f,_=-_,v=-v,E=-E,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,l=l*m+f*o,c=c*m+_*o,d=d*m+v*o,p=p*m+E*o}else{l=l*m+f*o,c=c*m+_*o,d=d*m+v*o,p=p*m+E*o;const M=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=M,c*=M,d*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return t[e]=o*v+d*p+l*_-c*f,t[e+1]=l*v+d*f+c*p-o*_,t[e+2]=c*v+d*_+o*f-l*p,t[e+3]=d*v-o*p-l*f-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),p=o(s/2),f=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*p+c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p-f*_*v;break;case"YXZ":this._x=f*d*p+c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p+f*_*v;break;case"ZXY":this._x=f*d*p-c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p-f*_*v;break;case"ZYX":this._x=f*d*p-c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p+f*_*v;break;case"YZX":this._x=f*d*p+c*_*v,this._y=c*_*p+f*d*v,this._z=c*d*v-f*_*p,this._w=c*d*p-f*_*v;break;case"XZY":this._x=f*d*p-c*_*v,this._y=c*_*p-f*d*v,this._z=c*d*v+f*_*p,this._w=c*d*p+f*_*v;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],p=e[10],f=i+o+p;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(d-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),d=2*(o*e-s*r),p=2*(s*i-a*e);return this.x=e+l*c+a*p-o*d,this.y=i+l*d+o*c-s*p,this.z=r+l*p+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new X,ih=new na;class se{constructor(t,e,i,r,s,a,o,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],_=i[5],v=i[8],E=r[0],g=r[3],m=r[6],M=r[1],T=r[4],u=r[7],h=r[2],b=r[5],I=r[8];return s[0]=a*E+o*M+l*h,s[3]=a*g+o*T+l*b,s[6]=a*m+o*u+l*I,s[1]=c*E+d*M+p*h,s[4]=c*g+d*T+p*b,s[7]=c*m+d*u+p*I,s[2]=f*E+_*M+v*h,s[5]=f*g+_*T+v*b,s[8]=f*m+_*u+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=d*a-o*c,f=o*l-d*s,_=c*s-a*l,v=e*p+i*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=p*E,t[1]=(r*c-d*i)*E,t[2]=(o*i-r*a)*E,t[3]=f*E,t[4]=(d*e-r*l)*E,t[5]=(r*s-o*e)*E,t[6]=_*E,t[7]=(i*l-c*e)*E,t[8]=(a*e-i*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ql.makeScale(t,e)),this}rotate(t){return this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new se,rh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w2(){const n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Le&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Le&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?Go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:t,whitePoint:i,transfer:Go,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const ye=w2();function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class T2{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Zo("canvas")),us.width=t.width,us.height=t.height;const r=us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(or(e[i]/255)*255):e[i]=or(e[i]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I2=0;class id{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jl(r[a].image)):s.push(jl(r[a]))}else s=jl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let R2=0;const Kl=new X;class Pn extends ea{constructor(t=Pn.DEFAULT_IMAGE,e=Pn.DEFAULT_MAPPING,i=sr,r=sr,s=bn,a=Qr,o=_i,l=ri,c=Pn.DEFAULT_ANISOTROPY,d=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=za(),this.name="",this.source=new id(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xc:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xc:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Yf;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,e=0,i=0,r=1){tn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],d=l[4],p=l[8],f=l[1],_=l[5],v=l[9],E=l[2],g=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,u=(_+1)/2,h=(m+1)/2,b=(d+f)/4,I=(p+E)/4,y=(v+g)/4;return T>u&&T>h?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=b/i,s=I/i):u>h?u<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),i=b/r,s=y/r):h<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(h),i=I/s,r=y/s),this.set(i,r,s,e),this}let M=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(p-E)/M,this.z=(f-d)/M,this.w=Math.acos((c+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C2 extends ea{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Pn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new id(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends C2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class np extends Pn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D2 extends Pn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t,e,i,r,s,a,o,l,c,d,p,f,_,v,E,g){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,d,p,f,_,v,E,g)}set(t,e,i,r,s,a,o,l,c,d,p,f,_,v,E,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=p,m[14]=f,m[3]=_,m[7]=v,m[11]=E,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const f=a*d,_=a*p,v=o*d,E=o*p;e[0]=l*d,e[4]=-l*p,e[8]=c,e[1]=_+v*c,e[5]=f-E*c,e[9]=-o*l,e[2]=E-f*c,e[6]=v+_*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,_=l*p,v=c*d,E=c*p;e[0]=f+E*o,e[4]=v*o-_,e[8]=a*c,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=_*o-v,e[6]=E+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,_=l*p,v=c*d,E=c*p;e[0]=f-E*o,e[4]=-a*p,e[8]=v+_*o,e[1]=_+v*o,e[5]=a*d,e[9]=E-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,_=a*p,v=o*d,E=o*p;e[0]=l*d,e[4]=v*c-_,e[8]=f*c+E,e[1]=l*p,e[5]=E*c+f,e[9]=_*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,_=a*c,v=o*l,E=o*c;e[0]=l*d,e[4]=E-f*p,e[8]=v*p+_,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=_*p+v,e[10]=f-E*p}else if(t.order==="XZY"){const f=a*l,_=a*c,v=o*l,E=o*c;e[0]=l*d,e[4]=-p,e[8]=c*d,e[1]=f*p+E,e[5]=a*d,e[9]=_*p-v,e[2]=v*p-_,e[6]=o*d,e[10]=E*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L2,t,P2)}lookAt(t,e,i){const r=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(i,Wn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(i,Wn)),Sr.normalize(),$a.crossVectors(Wn,Sr),r[0]=Sr.x,r[4]=$a.x,r[8]=Wn.x,r[1]=Sr.y,r[5]=$a.y,r[9]=Wn.y,r[2]=Sr.z,r[6]=$a.z,r[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],_=i[13],v=i[2],E=i[6],g=i[10],m=i[14],M=i[3],T=i[7],u=i[11],h=i[15],b=r[0],I=r[4],y=r[8],x=r[12],z=r[1],C=r[5],k=r[9],B=r[13],L=r[2],O=r[6],D=r[10],N=r[14],q=r[3],j=r[7],it=r[11],gt=r[15];return s[0]=a*b+o*z+l*L+c*q,s[4]=a*I+o*C+l*O+c*j,s[8]=a*y+o*k+l*D+c*it,s[12]=a*x+o*B+l*N+c*gt,s[1]=d*b+p*z+f*L+_*q,s[5]=d*I+p*C+f*O+_*j,s[9]=d*y+p*k+f*D+_*it,s[13]=d*x+p*B+f*N+_*gt,s[2]=v*b+E*z+g*L+m*q,s[6]=v*I+E*C+g*O+m*j,s[10]=v*y+E*k+g*D+m*it,s[14]=v*x+E*B+g*N+m*gt,s[3]=M*b+T*z+u*L+h*q,s[7]=M*I+T*C+u*O+h*j,s[11]=M*y+T*k+u*D+h*it,s[15]=M*x+T*B+u*N+h*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],p=t[6],f=t[10],_=t[14],v=t[3],E=t[7],g=t[11],m=t[15],M=l*_-c*f,T=o*_-c*p,u=o*f-l*p,h=a*_-c*d,b=a*f-l*d,I=a*p-o*d;return e*(E*M-g*T+m*u)-i*(v*M-g*h+m*b)+r*(v*T-E*h+m*I)-s*(v*u-E*b+g*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],p=t[9],f=t[10],_=t[11],v=t[12],E=t[13],g=t[14],m=t[15],M=e*o-i*a,T=e*l-r*a,u=e*c-s*a,h=i*l-r*o,b=i*c-s*o,I=r*c-s*l,y=d*E-p*v,x=d*g-f*v,z=d*m-_*v,C=p*g-f*E,k=p*m-_*E,B=f*m-_*g,L=M*B-T*k+u*C+h*z-b*x+I*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=(o*B-l*k+c*C)*O,t[1]=(r*k-i*B-s*C)*O,t[2]=(E*I-g*b+m*h)*O,t[3]=(f*b-p*I-_*h)*O,t[4]=(l*z-a*B-c*x)*O,t[5]=(e*B-r*z+s*x)*O,t[6]=(g*u-v*I-m*T)*O,t[7]=(d*I-f*u+_*T)*O,t[8]=(a*k-o*z+c*y)*O,t[9]=(i*z-e*k-s*y)*O,t[10]=(v*b-E*u+m*M)*O,t[11]=(p*u-d*b-_*M)*O,t[12]=(o*x-a*C-l*y)*O,t[13]=(e*C-i*x+r*y)*O,t[14]=(E*T-v*h-g*M)*O,t[15]=(d*h-p*T+f*M)*O,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,p=o+o,f=s*c,_=s*d,v=s*p,E=a*d,g=a*p,m=o*p,M=l*c,T=l*d,u=l*p,h=i.x,b=i.y,I=i.z;return r[0]=(1-(E+m))*h,r[1]=(_+u)*h,r[2]=(v-T)*h,r[3]=0,r[4]=(_-u)*b,r[5]=(1-(f+m))*b,r[6]=(g+M)*b,r[7]=0,r[8]=(v+T)*I,r[9]=(g-M)*I,r[10]=(1-(f+E))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),l=ds.set(r[8],r[9],r[10]).length();s<0&&(a=-a),di.copy(this);const c=1/a,d=1/o,p=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=d,di.elements[5]*=d,di.elements[6]*=d,di.elements[8]*=p,di.elements[9]*=p,di.elements[10]*=p,e.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Ni,l=!1){const c=this.elements,d=2*s/(e-t),p=2*s/(i-r),f=(e+t)/(e-t),_=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===Ni)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Wo)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ni,l=!1){const c=this.elements,d=2/(e-t),p=2/(i-r),f=-(e+t)/(e-t),_=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===Ni)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===Wo)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ds=new X,di=new an,L2=new X(0,0,0),P2=new X(1,1,1),Sr=new X,$a=new X,Wn=new X,ah=new an,oh=new na;class hr{constructor(t=0,e=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N2=0;const lh=new X,hs=new na,qi=new an,to=new X,la=new X,F2=new X,U2=new na,ch=new X(1,0,0),uh=new X(0,1,0),dh=new X(0,0,1),hh={type:"added"},O2={type:"removed"},fs={type:"childadded",child:null},Jl={type:"childremoved",child:null};class Kn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N2++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const t=new X,e=new hr,i=new na,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new an},normalMatrix:{value:new se}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(la,to,this.up):qi.lookAt(to,la,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(qi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),fs.child=t,this.dispatchEvent(fs),fs.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O2),Jl.child=t,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,t,F2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,U2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),p=a(t.shapes),f=a(t.skeletons),_=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Kn.DEFAULT_UP=new X(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class eo extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B2={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const g=e.getJointPose(E,i),m=this._getHandJoint(c,E);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},no={h:0,s:0,l:0};function $l(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ye.workingColorSpace){return this.r=t,this.g=e,this.b=i,ye.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ye.workingColorSpace){if(t=A2(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=$l(a,s,t+1/3),this.g=$l(a,s,t),this.b=$l(a,s,t-1/3)}return ye.colorSpaceToWorking(this,r),this}setStyle(t,e=ti){function i(s){s!==void 0&&parseFloat(s)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){const i=rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return ye.workingToColorSpace(xn.copy(this),t),Math.round(me(xn.r*255,0,255))*65536+Math.round(me(xn.g*255,0,255))*256+Math.round(me(xn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(xn.copy(this),e);const i=xn.r,r=xn.g,s=xn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=ti){ye.workingToColorSpace(xn.copy(this),t);const e=xn.r,i=xn.g,r=xn.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+e,xr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xr),t.getHSL(no);const i=Xl(xr.h,no.h,e),r=Xl(xr.s,no.s,e),s=Xl(xr.l,no.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ee;Ee.NAMES=rp;class V2 extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hi=new X,ji=new X,tc=new X,Ki=new X,ps=new X,ms=new X,fh=new X,ec=new X,nc=new X,ic=new X,rc=new tn,sc=new tn,ac=new tn;class gi{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hi.subVectors(t,e),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hi.subVectors(r,e),ji.subVectors(i,e),tc.subVectors(t,e);const a=hi.dot(hi),o=hi.dot(ji),l=hi.dot(tc),c=ji.dot(ji),d=ji.dot(tc),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,_=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return rc.setScalar(0),sc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(rc,s.x),a.addScaledVector(sc,s.y),a.addScaledVector(ac,s.z),a}static isFrontFacing(t,e,i,r){return hi.subVectors(i,e),ji.subVectors(t,e),hi.cross(ji).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return gi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ps.subVectors(r,i),ms.subVectors(s,i),ec.subVectors(t,i);const l=ps.dot(ec),c=ms.dot(ec);if(l<=0&&c<=0)return e.copy(i);nc.subVectors(t,r);const d=ps.dot(nc),p=ms.dot(nc);if(d>=0&&p<=d)return e.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(i).addScaledVector(ps,a);ic.subVectors(t,s);const _=ps.dot(ic),v=ms.dot(ic);if(v>=0&&_<=v)return e.copy(s);const E=_*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(ms,o);const g=d*v-_*p;if(g<=0&&p-d>=0&&_-v>=0)return fh.subVectors(s,r),o=(p-d)/(p-d+(_-v)),e.copy(r).addScaledVector(fh,o);const m=1/(g+E+f);return a=E*m,o=f*m,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ha{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),ro.subVectors(this.max,ca),gs.subVectors(t.a,ca),_s.subVectors(t.b,ca),vs.subVectors(t.c,ca),br.subVectors(_s,gs),Mr.subVectors(vs,_s),Hr.subVectors(gs,vs);let e=[0,-br.z,br.y,0,-Mr.z,Mr.y,0,-Hr.z,Hr.y,br.z,0,-br.x,Mr.z,0,-Mr.x,Hr.z,0,-Hr.x,-br.y,br.x,0,-Mr.y,Mr.x,0,-Hr.y,Hr.x,0];return!oc(e,gs,_s,vs,ro)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,gs,_s,vs,ro))?!1:(so.crossVectors(br,Mr),e=[so.x,so.y,so.z],oc(e,gs,_s,vs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new X,new X,new X,new X,new X,new X,new X,new X],fi=new X,io=new Ha,gs=new X,_s=new X,vs=new X,br=new X,Mr=new X,Hr=new X,ca=new X,ro=new X,so=new X,kr=new X;function oc(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){kr.fromArray(n,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=t.dot(kr),c=e.dot(kr),d=i.dot(kr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const rn=new X,ao=new Be;let z2=0;class Vi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$d,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oa(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Un(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$d&&(t.usage=this.usage),t}}class sp extends Vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ap extends Vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class lr extends Vi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const H2=new Ha,ua=new X,lc=new X;class rd{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):H2.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);const e=ua.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(lc)),this.expandByPoint(ua.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let k2=0;const Qn=new an,cc=new Kn,ys=new X,Zn=new Ha,da=new Ha,pn=new X;class fr extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x2(t)?ap:sp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new se().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lr(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Zn.min,da.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,da.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(da.min),Zn.expandByPoint(da.max))}Zn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)pn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)pn.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),pn.add(ys)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new X,l[y]=new X;const c=new X,d=new X,p=new X,f=new Be,_=new Be,v=new Be,E=new X,g=new X;function m(y,x,z){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,x),p.fromBufferAttribute(i,z),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),v.fromBufferAttribute(s,z),d.sub(c),p.sub(c),_.sub(f),v.sub(f);const C=1/(_.x*v.y-v.x*_.y);isFinite(C)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(C),g.copy(p).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(C),o[y].add(E),o[x].add(E),o[z].add(E),l[y].add(g),l[x].add(g),l[z].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,x=M.length;y<x;++y){const z=M[y],C=z.start,k=z.count;for(let B=C,L=C+k;B<L;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new X,u=new X,h=new X,b=new X;function I(y){h.fromBufferAttribute(r,y),b.copy(h);const x=o[y];T.copy(x),T.sub(h.multiplyScalar(h.dot(x))).normalize(),u.crossVectors(b,x);const C=u.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,x=M.length;y<x;++y){const z=M[y],C=z.start,k=z.count;for(let B=C,L=C+k;B<L;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,d=new X,p=new X;if(t)for(let f=0,_=t.count;f<_;f+=3){const v=t.getX(f+0),E=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,g),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,_=e.count;f<_;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,p=o.normalized,f=new c.constructor(l.length*d);let _=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?_=l[E]*o.data.stride+o.offset:_=l[E]*d;for(let m=0;m<d;m++)f[v++]=c[_++]}return new Vi(f,d,p)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const f=c[d],_=t(f,i);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const _=c[p];d.push(_.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,_=p.length;f<_;f++)d.push(p[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let G2=0;class Tl extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=za(),this.name="",this.type="Material",this.blending=Vs,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qi=new X,uc=new X,oo=new X,Er=new X,dc=new X,lo=new X,hc=new X;class W2{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){uc.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Er.copy(this.origin).sub(uc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(oo),o=Er.dot(this.direction),l=-Er.dot(oo),c=Er.lengthSq(),d=Math.abs(1-a*a);let p,f,_,v;if(d>0)if(p=a*l-o,f=a*o-l,v=s*d,p>=0)if(f>=-v)if(f<=v){const E=1/d;p*=E,f*=E,_=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),_=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),_=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(uc).addScaledVector(oo,f),_}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),d>=0?(s=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,r,s){dc.subVectors(e,t),lo.subVectors(i,t),hc.crossVectors(dc,lo);let a=this.direction.dot(hc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Er.subVectors(this.origin,t);const l=o*this.direction.dot(lo.crossVectors(Er,lo));if(l<0)return null;const c=o*this.direction.dot(dc.cross(Er));if(c<0||l+c>a)return null;const d=-o*Er.dot(hc);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Us extends Tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ph=new an,Gr=new W2,co=new rd,mh=new X,uo=new X,ho=new X,fo=new X,fc=new X,po=new X,gh=new X,mo=new X;class jn extends Kn{constructor(t=new fr,e=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(fc.fromBufferAttribute(p,t),a?po.addScaledVector(fc,d):po.addScaledVector(fc.sub(e),d))}e.add(po)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),Gr.copy(t.ray).recast(t.near),!(co.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(co,mh)===null||Gr.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],m=a[g.materialIndex],M=Math.max(g.start,_.start),T=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let u=M,h=T;u<h;u+=3){const b=o.getX(u),I=o.getX(u+1),y=o.getX(u+2);r=go(this,m,t,i,c,d,p,b,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const M=o.getX(g),T=o.getX(g+1),u=o.getX(g+2);r=go(this,a,t,i,c,d,p,M,T,u),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],m=a[g.materialIndex],M=Math.max(g.start,_.start),T=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let u=M,h=T;u<h;u+=3){const b=u,I=u+1,y=u+2;r=go(this,m,t,i,c,d,p,b,I,y),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let g=v,m=E;g<m;g+=3){const M=g,T=g+1,u=g+2;r=go(this,a,t,i,c,d,p,M,T,u),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Z2(n,t,e,i,r,s,a,o){let l;if(t.side===zn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Pr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:n}}function go(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,uo),n.getVertexPosition(l,ho),n.getVertexPosition(c,fo);const d=Z2(n,t,e,i,uo,ho,fo,gh);if(d){const p=new X;gi.getBarycoord(gh,uo,ho,fo,p),r&&(d.uv=gi.getInterpolatedAttribute(r,o,l,c,p,new Be)),s&&(d.uv1=gi.getInterpolatedAttribute(s,o,l,c,p,new Be)),a&&(d.normal=gi.getInterpolatedAttribute(a,o,l,c,p,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};gi.getNormal(uo,ho,fo,f.normal),d.face=f,d.barycoord=p}return d}class X2 extends Pn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=vn,d=vn,p,f){super(null,a,o,l,c,d,r,s,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=new X,Y2=new X,q2=new se;class jr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=pc.subVectors(i,e).cross(Y2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||q2.getNormalMatrix(t),r=this.coplanarPoint(pc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new rd,j2=new Be(.5,.5),_o=new X;class op{constructor(t=new jr,e=new jr,i=new jr,r=new jr,s=new jr,a=new jr){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],f=s[6],_=s[7],v=s[8],E=s[9],g=s[10],m=s[11],M=s[12],T=s[13],u=s[14],h=s[15];if(r[0].setComponents(c-a,_-d,m-v,h-M).normalize(),r[1].setComponents(c+a,_+d,m+v,h+M).normalize(),r[2].setComponents(c+o,_+p,m+E,h+T).normalize(),r[3].setComponents(c-o,_-p,m-E,h-T).normalize(),i)r[4].setComponents(l,f,g,u).normalize(),r[5].setComponents(c-l,_-f,m-g,h-u).normalize();else if(r[4].setComponents(c-l,_-f,m-g,h-u).normalize(),e===Ni)r[5].setComponents(c+l,_+f,m+g,h+u).normalize();else if(e===Wo)r[5].setComponents(l,f,g,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const e=j2.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(_o.x=r.normal.x>0?t.max.x:t.min.x,_o.y=r.normal.y>0?t.max.y:t.min.y,_o.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends Pn{constructor(t=[],e=ns,i,r,s,a,o,l,c,d){super(t,e,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class La extends Pn{constructor(t,e,i=zi,r,s,a,o=vn,l=vn,c,d=dr,p=1){if(d!==dr&&d!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:p};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new id(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class K2 extends La{constructor(t,e=zi,i=ns,r,s,a=vn,o=vn,l,c=dr){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cp extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ka extends fr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],p=[];let f=0,_=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lr(c,3)),this.setAttribute("normal",new lr(d,3)),this.setAttribute("uv",new lr(p,2));function v(E,g,m,M,T,u,h,b,I,y,x){const z=u/I,C=h/y,k=u/2,B=h/2,L=b/2,O=I+1,D=y+1;let N=0,q=0;const j=new X;for(let it=0;it<D;it++){const gt=it*C-B;for(let pt=0;pt<O;pt++){const jt=pt*z-k;j[E]=jt*M,j[g]=gt*T,j[m]=L,c.push(j.x,j.y,j.z),j[E]=0,j[g]=0,j[m]=b>0?1:-1,d.push(j.x,j.y,j.z),p.push(pt/I),p.push(1-it/y),N+=1}}for(let it=0;it<y;it++)for(let gt=0;gt<I;gt++){const pt=f+gt+O*it,jt=f+gt+O*(it+1),Fe=f+(gt+1)+O*(it+1),ze=f+(gt+1)+O*it;l.push(pt,jt,ze),l.push(jt,Fe,ze),q+=6}o.addGroup(_,q,x),_+=q,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ga extends fr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,p=t/o,f=e/l,_=[],v=[],E=[],g=[];for(let m=0;m<d;m++){const M=m*f-a;for(let T=0;T<c;T++){const u=T*p-s;v.push(u,-M,0),E.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const T=M+c*m,u=M+c*(m+1),h=M+1+c*(m+1),b=M+1+c*m;_.push(T,u,b),_.push(u,h,b)}this.setIndex(_),this.setAttribute("position",new lr(v,3)),this.setAttribute("normal",new lr(E,3)),this.setAttribute("uv",new lr(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}function js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Rn(n){const t={};for(let e=0;e<n.length;e++){const i=js(n[e]);for(const r in i)t[r]=i[r]}return t}function J2(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function up(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const Q2={clone:js,merge:Rn};var $2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$2,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=J2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ey extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ny extends Tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iy extends Tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vo=new X,yo=new na,xi=new X;class dp extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vo,yo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(vo,yo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new X,_h=new Be,vh=new Be;class mi extends dp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wu*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z)}getViewSize(t,e){return this.getViewBounds(t,_h,vh),e.subVectors(vh,_h)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class sd extends dp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=-90,xs=1;class ry extends Kn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mi(Ss,xs,t,e);r.layers=this.layers,this.add(r);const s=new mi(Ss,xs,t,e);s.layers=this.layers,this.add(s);const a=new mi(Ss,xs,t,e);a.layers=this.layers,this.add(a);const o=new mi(Ss,xs,t,e);o.layers=this.layers,this.add(o);const l=new mi(Ss,xs,t,e);l.layers=this.layers,this.add(l);const c=new mi(Ss,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,f,_),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class sy extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function yh(n,t,e,i){const r=ay(i);switch(e){case Qf:return n*t;case tp:return n*t/r.components*r.byteLength;case Qu:return n*t/r.components*r.byteLength;case Ys:return n*t*2/r.components*r.byteLength;case $u:return n*t*2/r.components*r.byteLength;case $f:return n*t*3/r.components*r.byteLength;case _i:return n*t*4/r.components*r.byteLength;case td:return n*t*4/r.components*r.byteLength;case To:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jc:case Jc:return Math.max(n,16)*Math.max(t,8)/4;case qc:case Kc:return Math.max(n,8)*Math.max(t,8)/2;case Qc:case $c:case eu:case nu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tu:case iu:case ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case du:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case mu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yu:case Su:case xu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bu:case Mu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Eu:case Au:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ay(n){switch(n){case ri:case qf:return{byteLength:1,components:1};case Ca:case jf:case ur:return{byteLength:2,components:1};case Ku:case Ju:return{byteLength:2,components:4};case zi:case ju:case Pi:return{byteLength:4,components:1};case Kf:case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);function hp(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function oy(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,d);else{p.sort((_,v)=>_.start-v.start);let f=0;for(let _=1;_<p.length;_++){const v=p[f],E=p[_];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,p[f]=E)}p.length=f+1;for(let _=0,v=p.length;_<v;_++){const E=p[_];n.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
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
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
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
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xy=`#ifdef USE_IRIDESCENCE
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
#endif`,by=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dy=`#define PI 3.141592653589793
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
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
#endif`,tS=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
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
#endif`,aS=`uniform sampler2D dfgLUT;
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
}`,oS=`
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
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
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_S=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
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
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
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
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,US=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XS=`float getShadowMask() {
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
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qS=`#ifdef USE_SKINNING
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
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ix=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Dx=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,Vx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:dy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:_y,begin_vertex:vy,beginnormal_vertex:yy,bsdfs:Sy,iridescence_fragment:xy,bumpmap_pars_fragment:by,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:wy,color_fragment:Ty,color_pars_fragment:Iy,color_pars_vertex:Ry,color_vertex:Cy,common:Dy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ny,displacementmap_vertex:Fy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:Vy,envmap_fragment:zy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:ky,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:tS,envmap_vertex:Wy,fog_vertex:Zy,fog_pars_vertex:Xy,fog_fragment:Yy,fog_pars_fragment:qy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:$y,lights_toon_fragment:eS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:rS,lights_physical_fragment:sS,lights_physical_pars_fragment:aS,lights_fragment_begin:oS,lights_fragment_maps:lS,lights_fragment_end:cS,logdepthbuf_fragment:uS,logdepthbuf_pars_fragment:dS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:fS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:gS,map_particle_pars_fragment:_S,metalnessmap_fragment:vS,metalnessmap_pars_fragment:yS,morphinstance_vertex:SS,morphcolor_vertex:xS,morphnormal_vertex:bS,morphtarget_pars_vertex:MS,morphtarget_vertex:ES,normal_fragment_begin:AS,normal_fragment_maps:wS,normal_pars_fragment:TS,normal_pars_vertex:IS,normal_vertex:RS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:NS,opaque_fragment:FS,packing:US,premultiplied_alpha_fragment:OS,project_vertex:BS,dithering_fragment:VS,dithering_pars_fragment:zS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:WS,shadowmap_vertex:ZS,shadowmask_pars_fragment:XS,skinbase_vertex:YS,skinning_pars_vertex:qS,skinning_vertex:jS,skinnormal_vertex:KS,specularmap_fragment:JS,specularmap_pars_fragment:QS,tonemapping_fragment:$S,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:dx,cube_frag:hx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:yx,linedashed_frag:Sx,meshbasic_vert:xx,meshbasic_frag:bx,meshlambert_vert:Mx,meshlambert_frag:Ex,meshmatcap_vert:Ax,meshmatcap_frag:wx,meshnormal_vert:Tx,meshnormal_frag:Ix,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Dx,meshphysical_frag:Lx,meshtoon_vert:Px,meshtoon_frag:Nx,points_vert:Fx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:Vx,sprite_frag:zx},mt={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Rn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Rn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ee(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Rn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Rn([mt.points,mt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Rn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Rn([mt.common,mt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Rn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Rn([mt.sprite,mt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Rn([mt.common,mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Rn([mt.lights,mt.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const So={r:0,b:0,g:0},Zr=new hr,Hx=new an;function kx(n,t,e,i,r,s){const a=new Ee(0);let o=r===!0?0:1,l,c,d=null,p=0,f=null;function _(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const u=M.backgroundBlurriness>0;T=t.get(T,u)}return T}function v(M){let T=!1;const u=_(M);u===null?g(a,o):u&&u.isColor&&(g(u,1),T=!0);const h=n.xr.getEnvironmentBlendMode();h==="additive"?e.buffers.color.setClear(0,0,0,1,s):h==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,T){const u=_(T);u&&(u.isCubeTexture||u.mapping===wl)?(c===void 0&&(c=new jn(new ka(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(h,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Zr.copy(T.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=u,c.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Zr)),c.material.toneMapped=ye.getTransfer(u.colorSpace)!==Le,(d!==u||p!==u.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=u,p=u.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new jn(new Ga(2,2),new Hi({name:"BackgroundMaterial",uniforms:js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ye.getTransfer(u.colorSpace)!==Le,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(d!==u||p!==u.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=u,p=u.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(So,up(n)),e.buffers.color.setClear(So.r,So.g,So.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:v,addToRenderList:E,dispose:m}}function Gx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(C,k,B,L,O){let D=!1;const N=p(C,L,B,k);s!==N&&(s=N,c(s.object)),D=_(C,L,B,O),D&&v(C,L,B,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,u(C,k,B,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function p(C,k,B,L){const O=L.wireframe===!0;let D=i[k.id];D===void 0&&(D={},i[k.id]=D);const N=C.isInstancedMesh===!0?C.id:0;let q=D[N];q===void 0&&(q={},D[N]=q);let j=q[B.id];j===void 0&&(j={},q[B.id]=j);let it=j[O];return it===void 0&&(it=f(l()),j[O]=it),it}function f(C){const k=[],B=[],L=[];for(let O=0;O<e;O++)k[O]=0,B[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:L,object:C,attributes:{},index:null}}function _(C,k,B,L){const O=s.attributes,D=k.attributes;let N=0;const q=B.getAttributes();for(const j in q)if(q[j].location>=0){const gt=O[j];let pt=D[j];if(pt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),gt===void 0||gt.attribute!==pt||pt&&gt.data!==pt.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function v(C,k,B,L){const O={},D=k.attributes;let N=0;const q=B.getAttributes();for(const j in q)if(q[j].location>=0){let gt=D[j];gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor));const pt={};pt.attribute=gt,gt&&gt.data&&(pt.data=gt.data),O[j]=pt,N++}s.attributes=O,s.attributesNum=N,s.index=L}function E(){const C=s.newAttributes;for(let k=0,B=C.length;k<B;k++)C[k]=0}function g(C){m(C,0)}function m(C,k){const B=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;B[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),O[C]!==k&&(n.vertexAttribDivisor(C,k),O[C]=k)}function M(){const C=s.newAttributes,k=s.enabledAttributes;for(let B=0,L=k.length;B<L;B++)k[B]!==C[B]&&(n.disableVertexAttribArray(B),k[B]=0)}function T(C,k,B,L,O,D,N){N===!0?n.vertexAttribIPointer(C,k,B,O,D):n.vertexAttribPointer(C,k,B,L,O,D)}function u(C,k,B,L){E();const O=L.attributes,D=B.getAttributes(),N=k.defaultAttributeValues;for(const q in D){const j=D[q];if(j.location>=0){let it=O[q];if(it===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(it=C.instanceColor)),it!==void 0){const gt=it.normalized,pt=it.itemSize,jt=t.get(it);if(jt===void 0)continue;const Fe=jt.buffer,ze=jt.type,$=jt.bytesPerElement,at=ze===n.INT||ze===n.UNSIGNED_INT||it.gpuType===ju;if(it.isInterleavedBufferAttribute){const ct=it.data,ee=ct.stride,Xt=it.offset;if(ct.isInstancedInterleavedBuffer){for(let Qt=0;Qt<j.locationSize;Qt++)m(j.location+Qt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Qt=0;Qt<j.locationSize;Qt++)g(j.location+Qt);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Qt=0;Qt<j.locationSize;Qt++)T(j.location+Qt,pt/j.locationSize,ze,gt,ee*$,(Xt+pt/j.locationSize*Qt)*$,at)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)m(j.location+ct,it.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<j.locationSize;ct++)g(j.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ct=0;ct<j.locationSize;ct++)T(j.location+ct,pt/j.locationSize,ze,gt,pt*$,pt/j.locationSize*ct*$,at)}}else if(N!==void 0){const gt=N[q];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(j.location,gt);break;case 3:n.vertexAttrib3fv(j.location,gt);break;case 4:n.vertexAttrib4fv(j.location,gt);break;default:n.vertexAttrib1fv(j.location,gt)}}}}M()}function h(){x();for(const C in i){const k=i[C];for(const B in k){const L=k[B];for(const O in L){const D=L[O];for(const N in D)d(D[N].object),delete D[N];delete L[O]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const k=i[C.id];for(const B in k){const L=k[B];for(const O in L){const D=L[O];for(const N in D)d(D[N].object),delete D[N];delete L[O]}}delete i[C.id]}function I(C){for(const k in i){const B=i[k];for(const L in B){const O=B[L];if(O[C.id]===void 0)continue;const D=O[C.id];for(const N in D)d(D[N].object),delete D[N];delete O[C.id]}}}function y(C){for(const k in i){const B=i[k],L=C.isInstancedMesh===!0?C.id:0,O=B[L];if(O!==void 0){for(const D in O){const N=O[D];for(const q in N)d(N[q].object),delete N[q];delete O[D]}delete B[L],Object.keys(B).length===0&&delete i[k]}}}function x(){z(),a=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:z,dispose:h,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:g,disableUnusedAttributes:M}}function Wx(n,t,e){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function a(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),e.update(d,i,p))}function o(c,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let _=0;for(let v=0;v<p;v++)_+=d[v];e.update(_,i,1)}function l(c,d,p,f){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,p);let v=0;for(let E=0;E<p;E++)v+=d[E]*f[E];e.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zx(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==_i&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const y=I===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ri&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!y)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(te("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),u=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:_,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:u,maxSamples:h,samples:b}}function Xx(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new jr,o=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const _=p.length!==0||f||i!==0||r;return r=f,i=p.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){e=d(p,f,0)},this.setState=function(p,f,_){const v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!r||v===null||v.length===0||s&&!g)s?d(null):c();else{const M=s?0:i,T=M*4;let u=m.clippingState||null;l.value=u,u=d(v,f,T,_);for(let h=0;h!==T;++h)u[h]=e[h];m.clippingState=u,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,f,_,v){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const m=_+E*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,u=_;T!==E;++T,u+=4)a.copy(p[T]).applyMatrix4(M,o),a.normal.toArray(g,u),g[u+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const Dr=4,Sh=[.125,.215,.35,.446,.526,.582],Jr=20,Yx=256,ha=new sd,xh=new Ee;let mc=null,gc=0,_c=0,vc=!1;const qx=new X;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=qx}=s;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=vc,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ur,format:_i,colorSpace:qs,depthBuffer:!1},r=Mh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jx(s)),this._blurMaterial=Jx(s,t,e),this._ggxMaterial=Kx(s,t,e)}return r}_compileMaterial(t){const e=new jn(new fr,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,r,s){const l=new mi(90,1,e,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,_=p.toneMapping;p.getClearColor(xh),p.toneMapping=Oi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jn(new ka,new Us({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let m=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(xh),m=!0);for(let T=0;T<6;T++){const u=T%3;u===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[T],s.y,s.z)):u===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[T]));const h=this._cubeSize;bs(r,u*h,T>2?h:0,h,h),p.setRenderTarget(r),m&&p.render(E,l),p.render(t,l)}p.toneMapping=_,p.autoClear=f,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ns||t.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),f=0+c*1.25,_=p*f,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-Dr?i-v+Dr:0),m=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=_,l.mipInt.value=v-e,bs(s,g,m,3*E,2*E),r.setRenderTarget(s),r.render(o,ha),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,bs(t,g,m,3*E,2*E),r.setRenderTarget(t),r.render(o,ha)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&xe("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const f=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Jr-1),E=s/v,g=isFinite(s)?1+Math.floor(d*E):Jr;g>Jr&&te(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Jr}`);const m=[];let M=0;for(let I=0;I<Jr;++I){const y=I/E,x=Math.exp(-y*y/2);m.push(x),I===0?M+=x:I<g&&(M+=2*x)}for(let I=0;I<m.length;I++)m[I]=m[I]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const u=this._sizeLods[r],h=3*u*(r>T-Dr?r-T+Dr:0),b=4*(this._cubeSize-u);bs(e,h,b,3*u,2*u),l.setRenderTarget(e),l.render(p,ha)}}function jx(n){const t=[],e=[],i=[];let r=n;const s=n-Dr+1+Sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Dr?l=Sh[a-n+Dr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,v=6,E=3,g=2,m=1,M=new Float32Array(E*v*_),T=new Float32Array(g*v*_),u=new Float32Array(m*v*_);for(let b=0;b<_;b++){const I=b%3*2/3-1,y=b>2?0:-1,x=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];M.set(x,E*v*b),T.set(f,g*v*b);const z=[b,b,b,b,b,b];u.set(z,m*v*b)}const h=new fr;h.setAttribute("position",new Vi(M,E)),h.setAttribute("uv",new Vi(T,g)),h.setAttribute("faceIndex",new Vi(u,m)),i.push(new jn(h,null)),r>Dr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Mh(n,t,e){const i=new Bi(n,t,e);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Kx(n,t,e){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Jx(n,t,e){const i=new Float32Array(Jr),r=new X(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Il(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Eh(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ah(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}class fp extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new lp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:ar});s.uniforms.tEquirect.value=e;const a=new jn(r,s),o=e.minFilter;return e.minFilter===Qr&&(e.minFilter=bn),new ry(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function Qx(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,_=!1){return f==null?null:_?a(f):s(f)}function s(f){if(f&&f.isTexture){const _=f.mapping;if(_===kl||_===Gl)if(t.has(f)){const v=t.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new fp(v.height);return E.fromEquirectangularTexture(n,f),t.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const _=f.mapping,v=_===kl||_===Gl,E=_===ns||_===Xs;if(v||E){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new bh(n)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const M=f.image;return v&&M&&M.height>0||E&&M&&l(M)?(i===null&&(i=new bh(n)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,_){return _===kl?f.mapping=ns:_===Gl&&(f.mapping=Xs),f}function l(f){let _=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&_++;return _===v}function c(f){const _=f.target;_.removeEventListener("dispose",c);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function d(f){const _=f.target;_.removeEventListener("dispose",d);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function $x(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Xo("WebGLRenderer: "+i+" extension not supported."),r}}}function tb(n,t,e,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(t.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER)}function c(p){const f=[],_=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(_!==null){const M=_.array;E=_.version;for(let T=0,u=M.length;T<u;T+=3){const h=M[T+0],b=M[T+1],I=M[T+2];f.push(h,b,b,I,I,h)}}else{const M=v.array;E=v.version;for(let T=0,u=M.length/3-1;T<u;T+=3){const h=T+0,b=T+1,I=T+2;f.push(h,b,b,I,I,h)}}const g=new(v.count>=65535?ap:sp)(f,1);g.version=E;const m=s.get(p);m&&t.remove(m),s.set(p,g)}function d(p){const f=s.get(p);if(f){const _=p.index;_!==null&&f.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function eb(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,_){n.drawElements(i,_,s,f*a),e.update(_,i,1)}function c(f,_,v){v!==0&&(n.drawElementsInstanced(i,_,s,f*a,v),e.update(_,i,v))}function d(f,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,f,0,v);let g=0;for(let m=0;m<v;m++)g+=_[m];e.update(g,i,1)}function p(f,_,v,E){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,_[m],E[m]);else{g.multiDrawElementsInstancedWEBGL(i,_,0,s,f,0,E,0,v);let m=0;for(let M=0;M<v;M++)m+=_[M]*E[M];e.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function nb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ib(n,t,e){const i=new WeakMap,r=new tn;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let x=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),E===!0&&(T=3);let u=o.attributes.position.count*T,h=1;u>t.maxTextureSize&&(h=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);const b=new Float32Array(u*h*4*p),I=new np(b,u,h,p);I.type=Pi,I.needsUpdate=!0;const y=T*4;for(let z=0;z<p;z++){const C=g[z],k=m[z],B=M[z],L=u*h*4*z;for(let O=0;O<C.count;O++){const D=O*y;_===!0&&(r.fromBufferAttribute(C,O),b[L+D+0]=r.x,b[L+D+1]=r.y,b[L+D+2]=r.z,b[L+D+3]=0),v===!0&&(r.fromBufferAttribute(k,O),b[L+D+4]=r.x,b[L+D+5]=r.y,b[L+D+6]=r.z,b[L+D+7]=0),E===!0&&(r.fromBufferAttribute(B,O),b[L+D+8]=r.x,b[L+D+9]=r.y,b[L+D+10]=r.z,b[L+D+11]=B.itemSize===4?r.w:1)}}f={count:p,texture:I,size:new Be(u,h)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let E=0;E<c.length;E++)_+=c[E];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function rb(n,t,e,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,p=c.geometry,f=t.get(c,p);if(s.get(f)!==d&&(t.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const sb={[zf]:"LINEAR_TONE_MAPPING",[Hf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[Gf]:"ACES_FILMIC_TONE_MAPPING",[Zf]:"AGX_TONE_MAPPING",[Xf]:"NEUTRAL_TONE_MAPPING",[Wf]:"CUSTOM_TONE_MAPPING"};function ab(n,t,e,i,r){const s=new Bi(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Bi(t,e,{type:ur,depthBuffer:!1,stencilBuffer:!1}),o=new fr;o.setAttribute("position",new lr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lr([0,2,0,0,2,0],2));const l=new ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new jn(o,l),d=new sd(-1,1,1,-1,0,1);let p=null,f=null,_=!1,v,E=null,g=[],m=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let u=0;u<g.length;u++){const h=g[u];h.setSize&&h.setSize(M,T)}},this.setEffects=function(M){g=M,m=g.length>0&&g[0].isRenderPass===!0;const T=s.width,u=s.height;for(let h=0;h<g.length;h++){const b=g[h];b.setSize&&b.setSize(T,u)}},this.begin=function(M,T){if(_||M.toneMapping===Oi&&g.length===0)return!1;if(E=T,T!==null){const u=T.width,h=T.height;(s.width!==u||s.height!==h)&&this.setSize(u,h)}return m===!1&&M.setRenderTarget(s),v=M.toneMapping,M.toneMapping=Oi,!0},this.hasRenderPass=function(){return m},this.end=function(M,T){M.toneMapping=v,_=!0;let u=s,h=a;for(let b=0;b<g.length;b++){const I=g[b];if(I.enabled!==!1&&(I.render(M,h,u,T),I.needsSwap!==!1)){const y=u;u=h,h=y}}if(p!==M.outputColorSpace||f!==M.toneMapping){p=M.outputColorSpace,f=M.toneMapping,l.defines={},ye.getTransfer(p)===Le&&(l.defines.SRGB_TRANSFER="");const b=sb[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=u.texture,M.setRenderTarget(E),M.render(c,d),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const pp=new Pn,Tu=new La(1,1),mp=new np,gp=new D2,_p=new lp,wh=[],Th=[],Ih=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function ia(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=wh[r];if(s===void 0&&(s=new Float32Array(r),wh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Rl(n,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ob(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),dn(e,t)}}function cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),dn(e,t)}}function ub(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),dn(e,t)}}function db(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Ch.set(i),n.uniformMatrix2fv(this.addr,!1,Ch),dn(e,i)}}function hb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Rh.set(i),n.uniformMatrix3fv(this.addr,!1,Rh),dn(e,i)}}function fb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),dn(e,i)}}function pb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),dn(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),dn(e,t)}}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),dn(e,t)}}function vb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),dn(e,t)}}function Sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),dn(e,t)}}function xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),dn(e,t)}}function bb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=e.isReversedDepthBuffer()?nd:ed,s=Tu):s=pp,e.setTexture2D(t||s,r)}function Mb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||gp,r)}function Eb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||_p,r)}function Ab(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||mp,r)}function wb(n){switch(n){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return db;case 35675:return hb;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return yb;case 36295:return Sb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Tb(n,t){n.uniform1fv(this.addr,t)}function Ib(n,t){const e=ia(t,this.size,2);n.uniform2fv(this.addr,e)}function Rb(n,t){const e=ia(t,this.size,3);n.uniform3fv(this.addr,e)}function Cb(n,t){const e=ia(t,this.size,4);n.uniform4fv(this.addr,e)}function Db(n,t){const e=ia(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lb(n,t){const e=ia(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pb(n,t){const e=ia(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Nb(n,t){n.uniform1iv(this.addr,t)}function Fb(n,t){n.uniform2iv(this.addr,t)}function Ub(n,t){n.uniform3iv(this.addr,t)}function Ob(n,t){n.uniform4iv(this.addr,t)}function Bb(n,t){n.uniform1uiv(this.addr,t)}function Vb(n,t){n.uniform2uiv(this.addr,t)}function zb(n,t){n.uniform3uiv(this.addr,t)}function Hb(n,t){n.uniform4uiv(this.addr,t)}function kb(n,t,e){const i=this.cache,r=t.length,s=Rl(e,r);un(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tu:a=pp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Gb(n,t,e){const i=this.cache,r=t.length,s=Rl(e,r);un(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||gp,s[a])}function Wb(n,t,e){const i=this.cache,r=t.length,s=Rl(e,r);un(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||_p,s[a])}function Zb(n,t,e){const i=this.cache,r=t.length,s=Rl(e,r);un(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||mp,s[a])}function Xb(n){switch(n){case 5126:return Tb;case 35664:return Ib;case 35665:return Rb;case 35666:return Cb;case 35674:return Db;case 35675:return Lb;case 35676:return Pb;case 5124:case 35670:return Nb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ob;case 5125:return Bb;case 36294:return Vb;case 36295:return zb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Yb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wb(e.type)}}class qb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xb(e.type)}}class jb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function Dh(n,t){n.seq.push(t),n.map[t.id]=t}function Kb(n,t,e){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const s=yc.exec(i),a=yc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dh(e,c===void 0?new Yb(o,n,t):new qb(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new jb(o),Dh(e,p)),e=p}}}class Do{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Kb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Lh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Jb=37297;let Qb=0;function $b(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ph=new se;function tM(n){ye._getMatrix(Ph,ye.workingColorSpace,n);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(n)){case Go:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+$b(n.getShaderSource(t),o)}else return s}function eM(n,t){const e=tM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const nM={[zf]:"Linear",[Hf]:"Reinhard",[kf]:"Cineon",[Gf]:"ACESFilmic",[Zf]:"AgX",[Xf]:"Neutral",[Wf]:"Custom"};function iM(n,t){const e=nM[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xo=new X;function rM(){ye.getLuminanceCoefficients(xo);const n=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function aM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function oM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function _a(n){return n!==""}function Fh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(lM,uM)}const cM=new Map;function uM(n,t){let e=oe[t];if(e===void 0){const i=cM.get(t);if(i!==void 0)e=oe[i],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Iu(e)}const dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(dM,hM)}function hM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const fM={[wo]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function pM(n){return fM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mM={[ns]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[wl]:"ENVMAP_TYPE_CUBE_UV"};function gM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _M={[Xs]:"ENVMAP_MODE_REFRACTION"};function vM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yM={[Vf]:"ENVMAP_BLENDING_MULTIPLY",[c2]:"ENVMAP_BLENDING_MIX",[u2]:"ENVMAP_BLENDING_ADD"};function SM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yM[n.combine]||"ENVMAP_BLENDING_NONE"}function xM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bM(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pM(e),c=gM(e),d=vM(e),p=SM(e),f=xM(e),_=sM(e),v=aM(s),E=r.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_a).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(g=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Oi?iM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,eM("linearToOutputTexel",e.outputColorSpace),rM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),a=Iu(a),a=Fh(a,e),a=Uh(a,e),o=Iu(o),o=Fh(o,e),o=Uh(o,e),a=Oh(a),o=Oh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=M+g+a,u=M+m+o,h=Lh(r,r.VERTEX_SHADER,T),b=Lh(r,r.FRAGMENT_SHADER,u);r.attachShader(E,h),r.attachShader(E,b),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function I(C){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",B=r.getShaderInfoLog(h)||"",L=r.getShaderInfoLog(b)||"",O=k.trim(),D=B.trim(),N=L.trim();let q=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,h,b);else{const it=Nh(r,h,"vertex"),gt=Nh(r,b,"fragment");xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+it+`
`+gt)}else O!==""?te("WebGLProgram: Program Info Log:",O):(D===""||N==="")&&(j=!1);j&&(C.diagnostics={runnable:q,programLog:O,vertexShader:{log:D,prefix:g},fragmentShader:{log:N,prefix:m}})}r.deleteShader(h),r.deleteShader(b),y=new Do(r,E),x=oM(r,E)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(E,Jb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qb++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=h,this.fragmentShader=b,this}let MM=0;class EM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AM(t),e.set(t,i)),i}}class AM{constructor(t){this.id=MM++,this.code=t,this.usedTimes=0}}function wM(n,t,e,i,r,s){const a=new ip,o=new EM,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function E(y,x,z,C,k){const B=C.fog,L=k.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=t.get(y.envMap||O,D),q=N&&N.mapping===wl?N.image.height:null,j=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&te("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const it=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,gt=it!==void 0?it.length:0;let pt=0;L.morphAttributes.position!==void 0&&(pt=1),L.morphAttributes.normal!==void 0&&(pt=2),L.morphAttributes.color!==void 0&&(pt=3);let jt,Fe,ze,$;if(j){const Re=wi[j];jt=Re.vertexShader,Fe=Re.fragmentShader}else jt=y.vertexShader,Fe=y.fragmentShader,o.update(y),ze=o.getVertexShaderID(y),$=o.getFragmentShaderID(y);const at=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),ee=k.isInstancedMesh===!0,Xt=k.isBatchedMesh===!0,Qt=!!y.map,hn=!!y.matcap,ve=!!N,Ie=!!y.aoMap,He=!!y.lightMap,le=!!y.bumpMap,Qe=!!y.normalMap,F=!!y.displacementMap,nn=!!y.emissiveMap,Me=!!y.metalnessMap,We=!!y.roughnessMap,Rt=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,H=y.iridescence>0,tt=y.sheen>0,nt=y.transmission>0,J=Rt&&!!y.anisotropyMap,Et=R&&!!y.clearcoatMap,ut=R&&!!y.clearcoatNormalMap,Ft=R&&!!y.clearcoatRoughnessMap,qt=H&&!!y.iridescenceMap,rt=H&&!!y.iridescenceThicknessMap,ot=tt&&!!y.sheenColorMap,At=tt&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,St=!!y.specularColorMap,ce=!!y.specularIntensityMap,V=nt&&!!y.transmissionMap,dt=nt&&!!y.thicknessMap,lt=!!y.gradientMap,Mt=!!y.alphaMap,st=y.alphaTest>0,K=!!y.alphaHash,wt=!!y.extensions;let $t=Oi;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&($t=n.toneMapping);const Ze={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:Fe,defines:y.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qs,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:hn,envMap:ve,envMapMode:ve&&N.mapping,envMapCubeUVHeight:q,aoMap:Ie,lightMap:He,bumpMap:le,normalMap:Qe,displacementMap:F,emissiveMap:nn,normalMapObjectSpace:Qe&&y.normalMapType===p2,normalMapTangentSpace:Qe&&y.normalMapType===f2,metalnessMap:Me,roughnessMap:We,anisotropy:Rt,anisotropyMap:J,clearcoat:R,clearcoatMap:Et,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ft,dispersion:S,iridescence:H,iridescenceMap:qt,iridescenceThicknessMap:rt,sheen:tt,sheenColorMap:ot,sheenRoughnessMap:At,specularMap:Tt,specularColorMap:St,specularIntensityMap:ce,transmission:nt,transmissionMap:V,thicknessMap:dt,gradientMap:lt,opaque:y.transparent===!1&&y.blending===Vs&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:st,alphaHash:K,combine:y.combine,mapUv:Qt&&v(y.map.channel),aoMapUv:Ie&&v(y.aoMap.channel),lightMapUv:He&&v(y.lightMap.channel),bumpMapUv:le&&v(y.bumpMap.channel),normalMapUv:Qe&&v(y.normalMap.channel),displacementMapUv:F&&v(y.displacementMap.channel),emissiveMapUv:nn&&v(y.emissiveMap.channel),metalnessMapUv:Me&&v(y.metalnessMap.channel),roughnessMapUv:We&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:Et&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(y.sheenRoughnessMap.channel),specularMapUv:Tt&&v(y.specularMap.channel),specularColorMapUv:St&&v(y.specularColorMap.channel),specularIntensityMapUv:ce&&v(y.specularIntensityMap.channel),transmissionMapUv:V&&v(y.transmissionMap.channel),thicknessMapUv:dt&&v(y.thicknessMap.channel),alphaMapUv:Mt&&v(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Qe||Rt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(Qt||Mt),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Qe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ct,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&ye.getTransfer(y.map.colorSpace)===Le,decodeVideoTextureEmissive:nn&&y.emissiveMap.isVideoTexture===!0&&ye.getTransfer(y.emissiveMap.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qn,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:wt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&y.extensions.multiDraw===!0||Xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function g(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)x.push(z),x.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(m(x,y),M(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function m(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function T(y){const x=_[y.type];let z;if(x){const C=wi[x];z=Q2.clone(C.uniforms)}else z=y.uniforms;return z}function u(y,x){let z=d.get(x);return z!==void 0?++z.usedTimes:(z=new bM(n,x,y,r),c.push(z),d.set(x,z)),z}function h(y){if(--y.usedTimes===0){const x=c.indexOf(y);c[x]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:T,acquireProgram:u,releaseProgram:h,releaseShaderCache:b,programs:c,dispose:I}}function TM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function IM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Vh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let _=0;return f.isInstancedMesh&&(_+=2),f.isSkinnedMesh&&(_+=1),_}function o(f,_,v,E,g,m){let M=n[t];return M===void 0?(M={id:f.id,object:f,geometry:_,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:m},n[t]=M):(M.id=f.id,M.object=f,M.geometry=_,M.material=v,M.materialVariant=a(f),M.groupOrder=E,M.renderOrder=f.renderOrder,M.z=g,M.group=m),t++,M}function l(f,_,v,E,g,m){const M=o(f,_,v,E,g,m);v.transmission>0?i.push(M):v.transparent===!0?r.push(M):e.push(M)}function c(f,_,v,E,g,m){const M=o(f,_,v,E,g,m);v.transmission>0?i.unshift(M):v.transparent===!0?r.unshift(M):e.unshift(M)}function d(f,_){e.length>1&&e.sort(f||IM),i.length>1&&i.sort(_||Vh),r.length>1&&r.sort(_||Vh)}function p(){for(let f=t,_=n.length;f<_;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:d}}function RM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new zh,n.set(i,[a])):r>=s.length?(a=new zh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function CM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Ee};break;case"SpotLight":e={position:new X,direction:new X,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":e={color:new Ee,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function DM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let LM=0;function PM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){const t=new CM,e=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new an,a=new an;function o(c){let d=0,p=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let _=0,v=0,E=0,g=0,m=0,M=0,T=0,u=0,h=0,b=0,I=0;c.sort(PM);for(let x=0,z=c.length;x<z;x++){const C=c[x],k=C.color,B=C.intensity,L=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ys?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=k.r*B,p+=k.g*B,f+=k.b*B;else if(C.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(C.sh.coefficients[D],B);I++}else if(C.isDirectionalLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,q=e.get(C);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,i.directionalShadow[_]=q,i.directionalShadowMap[_]=O,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=D,_++}else if(C.isSpotLight){const D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(k).multiplyScalar(B),D.distance=L,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,i.spot[E]=D;const N=C.shadow;if(C.map&&(i.spotLightMap[h]=C.map,h++,N.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[E]=N.matrix,C.castShadow){const q=e.get(C);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,i.spotShadow[E]=q,i.spotShadowMap[E]=O,u++}E++}else if(C.isRectAreaLight){const D=t.get(C);D.color.copy(k).multiplyScalar(B),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=D,g++}else if(C.isPointLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const N=C.shadow,q=e.get(C);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,q.shadowCameraNear=N.camera.near,q.shadowCameraFar=N.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=C.shadow.matrix,T++}i.point[v]=D,v++}else if(C.isHemisphereLight){const D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(B),D.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[m]=D,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==_||y.pointLength!==v||y.spotLength!==E||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==M||y.numPointShadows!==T||y.numSpotShadows!==u||y.numSpotMaps!==h||y.numLightProbes!==I)&&(i.directional.length=_,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=u+h-b,i.spotLightMap.length=h,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=I,y.directionalLength=_,y.pointLength=v,y.spotLength=E,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=M,y.numPointShadows=T,y.numSpotShadows=u,y.numSpotMaps=h,y.numLightProbes=I,i.version=LM++)}function l(c,d){let p=0,f=0,_=0,v=0,E=0;const g=d.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const T=c[m];if(T.isDirectionalLight){const u=i.directional[p];u.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(g),p++}else if(T.isSpotLight){const u=i.spot[_];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),u.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(g),_++}else if(T.isRectAreaLight){const u=i.rectArea[v];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),u.halfWidth.set(T.width*.5,0,0),u.halfHeight.set(0,T.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const u=i.point[f];u.position.setFromMatrixPosition(T.matrixWorld),u.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const u=i.hemi[E];u.direction.setFromMatrixPosition(T.matrixWorld),u.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Hh(n){const t=new NM(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function s(d){e.push(d)}function a(d){i.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function FM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Hh(n),t.set(r,[o])):s>=a.length?(o=new Hh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`,BM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],VM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],kh=new an,fa=new X,Sc=new X;function zM(n,t,e){let i=new op;const r=new Be,s=new Be,a=new tn,o=new ny,l=new iy,c={},d=e.maxTextureSize,p={[Pr]:zn,[zn]:Pr,[qn]:qn},f=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:UM,fragmentShader:OM}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new fr;v.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new jn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let m=this.type;this.render=function(b,I,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Wv&&(te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const x=n.getRenderTarget(),z=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ar),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=m!==this.type;B&&I.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=b.length;L<O;L++){const D=b[L],N=D.shadow;if(N===void 0){te("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();r.multiply(q),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,N.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=j,N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ga){if(D.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Bi(r.x,r.y,{format:Ys,type:ur,minFilter:bn,magFilter:bn,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new La(r.x,r.y,Pi),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=dr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=vn,N.map.depthTexture.magFilter=vn}else D.isPointLight?(N.map=new fp(r.x),N.map.depthTexture=new K2(r.x,zi)):(N.map=new Bi(r.x,r.y),N.map.depthTexture=new La(r.x,r.y,zi)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=dr,this.type===wo?(N.map.depthTexture.compareFunction=j?nd:ed,N.map.depthTexture.minFilter=bn,N.map.depthTexture.magFilter=bn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=vn,N.map.depthTexture.magFilter=vn);N.camera.updateProjectionMatrix()}const it=N.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<it;gt++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,gt),n.clear();else{gt===0&&(n.setRenderTarget(N.map),n.clear());const pt=N.getViewport(gt);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),k.viewport(a)}if(D.isPointLight){const pt=N.camera,jt=N.matrix,Fe=D.distance||pt.far;Fe!==pt.far&&(pt.far=Fe,pt.updateProjectionMatrix()),fa.setFromMatrixPosition(D.matrixWorld),pt.position.copy(fa),Sc.copy(pt.position),Sc.add(BM[gt]),pt.up.copy(VM[gt]),pt.lookAt(Sc),pt.updateMatrixWorld(),jt.makeTranslation(-fa.x,-fa.y,-fa.z),kh.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),N._frustum.setFromProjectionMatrix(kh,pt.coordinateSystem,pt.reversedDepth)}else N.updateMatrices(D);i=N.getFrustum(),u(I,y,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===ga&&M(N,y),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(x,z,C)};function M(b,I){const y=t.update(E);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(r.x,r.y,{format:Ys,type:ur})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(I,null,y,f,E,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(I,null,y,_,E,null)}function T(b,I,y,x){let z=null;const C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)z=C;else if(z=y.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=z.uuid,B=I.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let O=L[B];O===void 0&&(O=z.clone(),L[B]=O,I.addEventListener("dispose",h)),z=O}if(z.visible=I.visible,z.wireframe=I.wireframe,x===ga?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:p[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const k=n.properties.get(z);k.light=y}return z}function u(b,I,y,x,z){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&z===ga)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const B=t.update(b),L=b.material;if(Array.isArray(L)){const O=B.groups;for(let D=0,N=O.length;D<N;D++){const q=O[D],j=L[q.materialIndex];if(j&&j.visible){const it=T(b,j,x,z);b.onBeforeShadow(n,b,I,y,B,it,q),n.renderBufferDirect(y,null,B,it,b,q),b.onAfterShadow(n,b,I,y,B,it,q)}}}else if(L.visible){const O=T(b,L,x,z);b.onBeforeShadow(n,b,I,y,B,O,null),n.renderBufferDirect(y,null,B,O,b,null),b.onAfterShadow(n,b,I,y,B,O,null)}}const k=b.children;for(let B=0,L=k.length;B<L;B++)u(k[B],I,y,x,z)}function h(b){b.target.removeEventListener("dispose",h);for(const y in c){const x=c[y],z=b.target.uuid;z in x&&(x[z].dispose(),delete x[z])}}}function HM(n,t){function e(){let V=!1;const dt=new tn;let lt=null;const Mt=new tn(0,0,0,0);return{setMask:function(st){lt!==st&&!V&&(n.colorMask(st,st,st,st),lt=st)},setLocked:function(st){V=st},setClear:function(st,K,wt,$t,Ze){Ze===!0&&(st*=$t,K*=$t,wt*=$t),dt.set(st,K,wt,$t),Mt.equals(dt)===!1&&(n.clearColor(st,K,wt,$t),Mt.copy(dt))},reset:function(){V=!1,lt=null,Mt.set(-1,0,0,0)}}}function i(){let V=!1,dt=!1,lt=null,Mt=null,st=null;return{setReversed:function(K){if(dt!==K){const wt=t.get("EXT_clip_control");K?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),dt=K;const $t=st;st=null,this.setClear($t)}},getReversed:function(){return dt},setTest:function(K){K?at(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(K){lt!==K&&!V&&(n.depthMask(K),lt=K)},setFunc:function(K){if(dt&&(K=E2[K]),Mt!==K){switch(K){case Vc:n.depthFunc(n.NEVER);break;case zc:n.depthFunc(n.ALWAYS);break;case Hc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case kc:n.depthFunc(n.EQUAL);break;case Gc:n.depthFunc(n.GEQUAL);break;case Wc:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=K}},setLocked:function(K){V=K},setClear:function(K){st!==K&&(st=K,dt&&(K=1-K),n.clearDepth(K))},reset:function(){V=!1,lt=null,Mt=null,st=null,dt=!1}}}function r(){let V=!1,dt=null,lt=null,Mt=null,st=null,K=null,wt=null,$t=null,Ze=null;return{setTest:function(Re){V||(Re?at(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(Re){dt!==Re&&!V&&(n.stencilMask(Re),dt=Re)},setFunc:function(Re,Xi,Yi){(lt!==Re||Mt!==Xi||st!==Yi)&&(n.stencilFunc(Re,Xi,Yi),lt=Re,Mt=Xi,st=Yi)},setOp:function(Re,Xi,Yi){(K!==Re||wt!==Xi||$t!==Yi)&&(n.stencilOp(Re,Xi,Yi),K=Re,wt=Xi,$t=Yi)},setLocked:function(Re){V=Re},setClear:function(Re){Ze!==Re&&(n.clearStencil(Re),Ze=Re)},reset:function(){V=!1,dt=null,lt=null,Mt=null,st=null,K=null,wt=null,$t=null,Ze=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},p={},f=new WeakMap,_=[],v=null,E=!1,g=null,m=null,M=null,T=null,u=null,h=null,b=null,I=new Ee(0,0,0),y=0,x=!1,z=null,C=null,k=null,B=null,L=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=N>=2);let j=null,it={};const gt=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),jt=new tn().fromArray(gt),Fe=new tn().fromArray(pt);function ze(V,dt,lt,Mt){const st=new Uint8Array(4),K=n.createTexture();n.bindTexture(V,K),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<lt;wt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(dt+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return K}const $={};$[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(Zs),le(!1),Qe(qd),at(n.CULL_FACE),Ie(ar);function at(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function ct(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function ee(V,dt){return p[V]!==dt?(n.bindFramebuffer(V,dt),p[V]=dt,V===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=dt),V===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Xt(V,dt){let lt=_,Mt=!1;if(V){lt=f.get(dt),lt===void 0&&(lt=[],f.set(dt,lt));const st=V.textures;if(lt.length!==st.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,wt=st.length;K<wt;K++)lt[K]=n.COLOR_ATTACHMENT0+K;lt.length=st.length,Mt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(lt)}function Qt(V){return v!==V?(n.useProgram(V),v=V,!0):!1}const hn={[Kr]:n.FUNC_ADD,[Xv]:n.FUNC_SUBTRACT,[Yv]:n.FUNC_REVERSE_SUBTRACT};hn[qv]=n.MIN,hn[jv]=n.MAX;const ve={[Kv]:n.ZERO,[Jv]:n.ONE,[Qv]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[r2]:n.SRC_ALPHA_SATURATE,[n2]:n.DST_COLOR,[t2]:n.DST_ALPHA,[$v]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[i2]:n.ONE_MINUS_DST_COLOR,[e2]:n.ONE_MINUS_DST_ALPHA,[s2]:n.CONSTANT_COLOR,[a2]:n.ONE_MINUS_CONSTANT_COLOR,[o2]:n.CONSTANT_ALPHA,[l2]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(V,dt,lt,Mt,st,K,wt,$t,Ze,Re){if(V===ar){E===!0&&(ct(n.BLEND),E=!1);return}if(E===!1&&(at(n.BLEND),E=!0),V!==Zv){if(V!==g||Re!==x){if((m!==Kr||u!==Kr)&&(n.blendEquation(n.FUNC_ADD),m=Kr,u=Kr),Re)switch(V){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.ONE,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xe("WebGLState: Invalid blending: ",V);break}else switch(V){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kd:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jd:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",V);break}M=null,T=null,h=null,b=null,I.set(0,0,0),y=0,g=V,x=Re}return}st=st||dt,K=K||lt,wt=wt||Mt,(dt!==m||st!==u)&&(n.blendEquationSeparate(hn[dt],hn[st]),m=dt,u=st),(lt!==M||Mt!==T||K!==h||wt!==b)&&(n.blendFuncSeparate(ve[lt],ve[Mt],ve[K],ve[wt]),M=lt,T=Mt,h=K,b=wt),($t.equals(I)===!1||Ze!==y)&&(n.blendColor($t.r,$t.g,$t.b,Ze),I.copy($t),y=Ze),g=V,x=!1}function He(V,dt){V.side===qn?ct(n.CULL_FACE):at(n.CULL_FACE);let lt=V.side===zn;dt&&(lt=!lt),le(lt),V.blending===Vs&&V.transparent===!1?Ie(ar):Ie(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Mt=V.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),nn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(V){z!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),z=V)}function Qe(V){V!==kv?(at(n.CULL_FACE),V!==C&&(V===qd?n.cullFace(n.BACK):V===Gv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),C=V}function F(V){V!==k&&(D&&n.lineWidth(V),k=V)}function nn(V,dt,lt){V?(at(n.POLYGON_OFFSET_FILL),(B!==dt||L!==lt)&&(B=dt,L=lt,a.getReversed()&&(dt=-dt),n.polygonOffset(dt,lt))):ct(n.POLYGON_OFFSET_FILL)}function Me(V){V?at(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function We(V){V===void 0&&(V=n.TEXTURE0+O-1),j!==V&&(n.activeTexture(V),j=V)}function Rt(V,dt,lt){lt===void 0&&(j===null?lt=n.TEXTURE0+O-1:lt=j);let Mt=it[lt];Mt===void 0&&(Mt={type:void 0,texture:void 0},it[lt]=Mt),(Mt.type!==V||Mt.texture!==dt)&&(j!==lt&&(n.activeTexture(lt),j=lt),n.bindTexture(V,dt||$[V]),Mt.type=V,Mt.texture=dt)}function R(){const V=it[j];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(V){xe("WebGLState:",V)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(V){xe("WebGLState:",V)}}function tt(){try{n.texSubImage2D(...arguments)}catch(V){xe("WebGLState:",V)}}function nt(){try{n.texSubImage3D(...arguments)}catch(V){xe("WebGLState:",V)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(V){xe("WebGLState:",V)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(V){xe("WebGLState:",V)}}function ut(){try{n.texStorage2D(...arguments)}catch(V){xe("WebGLState:",V)}}function Ft(){try{n.texStorage3D(...arguments)}catch(V){xe("WebGLState:",V)}}function qt(){try{n.texImage2D(...arguments)}catch(V){xe("WebGLState:",V)}}function rt(){try{n.texImage3D(...arguments)}catch(V){xe("WebGLState:",V)}}function ot(V){jt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),jt.copy(V))}function At(V){Fe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Fe.copy(V))}function Tt(V,dt){let lt=c.get(dt);lt===void 0&&(lt=new WeakMap,c.set(dt,lt));let Mt=lt.get(V);Mt===void 0&&(Mt=n.getUniformBlockIndex(dt,V.name),lt.set(V,Mt))}function St(V,dt){const Mt=c.get(dt).get(V);l.get(dt)!==Mt&&(n.uniformBlockBinding(dt,Mt,V.__bindingPointIndex),l.set(dt,Mt))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,it={},p={},f=new WeakMap,_=[],v=null,E=!1,g=null,m=null,M=null,T=null,u=null,h=null,b=null,I=new Ee(0,0,0),y=0,x=!1,z=null,C=null,k=null,B=null,L=null,jt.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:ct,bindFramebuffer:ee,drawBuffers:Xt,useProgram:Qt,setBlending:Ie,setMaterial:He,setFlipSided:le,setCullFace:Qe,setLineWidth:F,setPolygonOffset:nn,setScissorTest:Me,activeTexture:We,bindTexture:Rt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:qt,texImage3D:rt,updateUBOMapping:Tt,uniformBlockBinding:St,texStorage2D:ut,texStorage3D:Ft,texSubImage2D:tt,texSubImage3D:nt,compressedTexSubImage2D:J,compressedTexSubImage3D:Et,scissor:ot,viewport:At,reset:ce}}function kM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return _?new OffscreenCanvas(R,S):Zo("canvas")}function E(R,S,H){let tt=1;const nt=Rt(R);if((nt.width>H||nt.height>H)&&(tt=H/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(tt*nt.width),Et=Math.floor(tt*nt.height);p===void 0&&(p=v(J,Et));const ut=S?v(J,Et):p;return ut.width=J,ut.height=Et,ut.getContext("2d").drawImage(R,0,0,J,Et),te("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Et+")."),ut}else return"data"in R&&te("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,S,H,tt,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),S===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGB8UI),H===n.UNSIGNED_SHORT&&(J=n.RGB16UI),H===n.UNSIGNED_INT&&(J=n.RGB32UI),H===n.BYTE&&(J=n.RGB8I),H===n.SHORT&&(J=n.RGB16I),H===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),H===n.UNSIGNED_INT&&(J=n.RGBA32UI),H===n.BYTE&&(J=n.RGBA8I),H===n.SHORT&&(J=n.RGBA16I),H===n.INT&&(J=n.RGBA32I)),S===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),S===n.RGBA){const Et=nt?Go:ye.getTransfer(tt);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=Et===Le?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function u(R,S){let H;return R?S===null||S===zi||S===Da?H=n.DEPTH24_STENCIL8:S===Pi?H=n.DEPTH32F_STENCIL8:S===Ca&&(H=n.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zi||S===Da?H=n.DEPTH_COMPONENT24:S===Pi?H=n.DEPTH_COMPONENT32F:S===Ca&&(H=n.DEPTH_COMPONENT16),H}function h(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),y(S),S.isVideoTexture&&d.delete(S)}function I(R){const S=R.target;S.removeEventListener("dispose",I),z(S)}function y(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,tt=f.get(H);if(tt){const nt=tt[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&x(R),Object.keys(tt).length===0&&f.delete(H)}i.remove(R)}function x(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const H=R.source,tt=f.get(H);delete tt[S.__cacheKey],a.memory.textures--}function z(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let nt=0;nt<S.__webglFramebuffer[tt].length;nt++)n.deleteFramebuffer(S.__webglFramebuffer[tt][nt]);else n.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[tt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let tt=0,nt=H.length;tt<nt;tt++){const J=i.get(H[tt]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(H[tt])}i.remove(R)}let C=0;function k(){C=0}function B(){const R=C;return R>=r.maxTextures&&te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function L(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function O(R,S){const H=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const tt=R.image;if(tt===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function D(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){$(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function N(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){$(H,R,S);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function q(R,S){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){at(H,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const j={[Xc]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[Yc]:n.MIRRORED_REPEAT},it={[vn]:n.NEAREST,[d2]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},gt={[m2]:n.NEVER,[S2]:n.ALWAYS,[g2]:n.LESS,[ed]:n.LEQUAL,[_2]:n.EQUAL,[nd]:n.GEQUAL,[v2]:n.GREATER,[y2]:n.NOTEQUAL};function pt(R,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Wl||S.magFilter===Qa||S.magFilter===Qr||S.minFilter===bn||S.minFilter===Wl||S.minFilter===Qa||S.minFilter===Qr)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,j[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,it[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==Qa&&S.minFilter!==Qr||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function jt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const tt=S.source;let nt=f.get(tt);nt===void 0&&(nt={},f.set(tt,nt));const J=L(S);if(J!==R.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[J].usedTimes++;const Et=nt[R.__cacheKey];Et!==void 0&&(nt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&x(S)),R.__cacheKey=J,R.__webglTexture=nt[J].texture}return H}function Fe(R,S,H){return Math.floor(Math.floor(R/H)/S)}function ze(R,S,H,tt){const J=R.updateRanges;if(J.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,tt,S.data);else{J.sort((rt,ot)=>rt.start-ot.start);let Et=0;for(let rt=1;rt<J.length;rt++){const ot=J[Et],At=J[rt],Tt=ot.start+ot.count,St=Fe(At.start,S.width,4),ce=Fe(ot.start,S.width,4);At.start<=Tt+1&&St===ce&&Fe(At.start+At.count-1,S.width,4)===St?ot.count=Math.max(ot.count,At.start+At.count-ot.start):(++Et,J[Et]=At)}J.length=Et+1;const ut=n.getParameter(n.UNPACK_ROW_LENGTH),Ft=n.getParameter(n.UNPACK_SKIP_PIXELS),qt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let rt=0,ot=J.length;rt<ot;rt++){const At=J[rt],Tt=Math.floor(At.start/4),St=Math.ceil(At.count/4),ce=Tt%S.width,V=Math.floor(Tt/S.width),dt=St,lt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,ce,V,dt,lt,H,tt,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ut),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,qt)}}function $(R,S,H){let tt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=n.TEXTURE_3D);const nt=jt(R,S),J=S.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+H);const Et=i.get(J);if(J.version!==Et.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const ut=ye.getPrimaries(ye.workingColorSpace),Ft=S.colorSpace===Cr?null:ye.getPrimaries(S.colorSpace),qt=S.colorSpace===Cr||ut===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let rt=E(S.image,!1,r.maxTextureSize);rt=We(S,rt);const ot=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let Tt=T(S.internalFormat,ot,At,S.colorSpace,S.isVideoTexture);pt(tt,S);let St;const ce=S.mipmaps,V=S.isVideoTexture!==!0,dt=Et.__version===void 0||nt===!0,lt=J.dataReady,Mt=h(S,rt);if(S.isDepthTexture)Tt=u(S.format===$r,S.type),dt&&(V?e.texStorage2D(n.TEXTURE_2D,1,Tt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,rt.width,rt.height,0,ot,At,null));else if(S.isDataTexture)if(ce.length>0){V&&dt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,ce[0].width,ce[0].height);for(let st=0,K=ce.length;st<K;st++)St=ce[st],V?lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,St.width,St.height,ot,At,St.data):e.texImage2D(n.TEXTURE_2D,st,Tt,St.width,St.height,0,ot,At,St.data);S.generateMipmaps=!1}else V?(dt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,rt.width,rt.height),lt&&ze(S,rt,ot,At)):e.texImage2D(n.TEXTURE_2D,0,Tt,rt.width,rt.height,0,ot,At,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){V&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,ce[0].width,ce[0].height,rt.depth);for(let st=0,K=ce.length;st<K;st++)if(St=ce[st],S.format!==_i)if(ot!==null)if(V){if(lt)if(S.layerUpdates.size>0){const wt=yh(St.width,St.height,S.format,S.type);for(const $t of S.layerUpdates){const Ze=St.data.subarray($t*wt/St.data.BYTES_PER_ELEMENT,($t+1)*wt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,$t,St.width,St.height,1,ot,Ze)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,rt.depth,ot,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Tt,St.width,St.height,rt.depth,0,St.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,St.width,St.height,rt.depth,ot,At,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Tt,St.width,St.height,rt.depth,0,ot,At,St.data)}else{V&&dt&&e.texStorage2D(n.TEXTURE_2D,Mt,Tt,ce[0].width,ce[0].height);for(let st=0,K=ce.length;st<K;st++)St=ce[st],S.format!==_i?ot!==null?V?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,St.width,St.height,ot,St.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Tt,St.width,St.height,0,St.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,St.width,St.height,ot,At,St.data):e.texImage2D(n.TEXTURE_2D,st,Tt,St.width,St.height,0,ot,At,St.data)}else if(S.isDataArrayTexture)if(V){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Tt,rt.width,rt.height,rt.depth),lt)if(S.layerUpdates.size>0){const st=yh(rt.width,rt.height,S.format,S.type);for(const K of S.layerUpdates){const wt=rt.data.subarray(K*st/rt.data.BYTES_PER_ELEMENT,(K+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,ot,At,wt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,At,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,rt.width,rt.height,rt.depth,0,ot,At,rt.data);else if(S.isData3DTexture)V?(dt&&e.texStorage3D(n.TEXTURE_3D,Mt,Tt,rt.width,rt.height,rt.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,At,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,rt.width,rt.height,rt.depth,0,ot,At,rt.data);else if(S.isFramebufferTexture){if(dt)if(V)e.texStorage2D(n.TEXTURE_2D,Mt,Tt,rt.width,rt.height);else{let st=rt.width,K=rt.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Tt,st,K,0,ot,At,null),st>>=1,K>>=1}}else if(ce.length>0){if(V&&dt){const st=Rt(ce[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,st.width,st.height)}for(let st=0,K=ce.length;st<K;st++)St=ce[st],V?lt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ot,At,St):e.texImage2D(n.TEXTURE_2D,st,Tt,ot,At,St);S.generateMipmaps=!1}else if(V){if(dt){const st=Rt(rt);e.texStorage2D(n.TEXTURE_2D,Mt,Tt,st.width,st.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,At,rt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,ot,At,rt);g(S)&&m(tt),Et.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function at(R,S,H){if(S.image.length!==6)return;const tt=jt(R,S),nt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const J=i.get(nt);if(nt.version!==J.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const Et=ye.getPrimaries(ye.workingColorSpace),ut=S.colorSpace===Cr?null:ye.getPrimaries(S.colorSpace),Ft=S.colorSpace===Cr||Et===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!qt&&!rt?ot[K]=E(S.image[K],!0,r.maxCubemapSize):ot[K]=rt?S.image[K].image:S.image[K],ot[K]=We(S,ot[K]);const At=ot[0],Tt=s.convert(S.format,S.colorSpace),St=s.convert(S.type),ce=T(S.internalFormat,Tt,St,S.colorSpace),V=S.isVideoTexture!==!0,dt=J.__version===void 0||tt===!0,lt=nt.dataReady;let Mt=h(S,At);pt(n.TEXTURE_CUBE_MAP,S);let st;if(qt){V&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ce,At.width,At.height);for(let K=0;K<6;K++){st=ot[K].mipmaps;for(let wt=0;wt<st.length;wt++){const $t=st[wt];S.format!==_i?Tt!==null?V?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,$t.width,$t.height,Tt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,ce,$t.width,$t.height,0,$t.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,$t.width,$t.height,Tt,St,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,ce,$t.width,$t.height,0,Tt,St,$t.data)}}}else{if(st=S.mipmaps,V&&dt){st.length>0&&Mt++;const K=Rt(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ce,K.width,K.height)}for(let K=0;K<6;K++)if(rt){V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,Tt,St,ot[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ce,ot[K].width,ot[K].height,0,Tt,St,ot[K].data);for(let wt=0;wt<st.length;wt++){const Ze=st[wt].image[K].image;V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,Ze.width,Ze.height,Tt,St,Ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,ce,Ze.width,Ze.height,0,Tt,St,Ze.data)}}else{V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,St,ot[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ce,Tt,St,ot[K]);for(let wt=0;wt<st.length;wt++){const $t=st[wt];V?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,Tt,St,$t.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,ce,Tt,St,$t.image[K])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ct(R,S,H,tt,nt,J){const Et=s.convert(H.format,H.colorSpace),ut=s.convert(H.type),Ft=T(H.internalFormat,Et,ut,H.colorSpace),qt=i.get(S),rt=i.get(H);if(rt.__renderTarget=S,!qt.__hasExternalTextures){const ot=Math.max(1,S.width>>J),At=Math.max(1,S.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Ft,ot,At,S.depth,0,Et,ut,null):e.texImage2D(nt,J,Ft,ot,At,0,Et,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),nn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,nt,rt.__webglTexture,0,F(S)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,nt,rt.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const tt=S.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,J=u(S.stencilBuffer,nt),Et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;nn(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(S),J,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(S),J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,R)}else{const tt=S.textures;for(let nt=0;nt<tt.length;nt++){const J=tt[nt],Et=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),Ft=T(J.internalFormat,Et,ut,J.colorSpace);nn(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(S),Ft,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(S),Ft,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xt(R,S,H){const tt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(S.depthTexture);if(nt.__renderTarget=S,(!nt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),pt(n.TEXTURE_CUBE_MAP,S.depthTexture);const qt=s.convert(S.depthTexture.format),rt=s.convert(S.depthTexture.type);let ot;S.depthTexture.format===dr?ot=n.DEPTH_COMPONENT24:S.depthTexture.format===$r&&(ot=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ot,S.width,S.height,0,qt,rt,null)}}else O(S.depthTexture,0);const J=nt.__webglTexture,Et=F(S),ut=tt?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,Ft=S.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===dr)nn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ft,ut,J,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Ft,ut,J,0);else if(S.depthTexture.format===$r)nn(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ft,ut,J,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,Ft,ut,J,0);else throw new Error("Unknown depthTexture format")}function Qt(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=tt}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let tt=0;tt<6;tt++)Xt(S.__webglFramebuffer[tt],R,tt);else{const tt=R.texture.mipmaps;tt&&tt.length>0?Xt(S.__webglFramebuffer[0],R,0):Xt(S.__webglFramebuffer,R,0)}else if(H){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[tt],R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else{const tt=R.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function hn(R,S,H){const tt=i.get(R);S!==void 0&&ct(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Qt(R)}function ve(R){const S=R.texture,H=i.get(R),tt=i.get(S);R.addEventListener("dispose",I);const nt=R.textures,J=R.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=S.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)H.__webglFramebuffer[ut][Ft]=n.createFramebuffer()}else H.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)H.__webglFramebuffer[ut]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ut=0,Ft=nt.length;ut<Ft;ut++){const qt=i.get(nt[ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&nn(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const Ft=nt[ut];H.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const qt=s.convert(Ft.format,Ft.colorSpace),rt=s.convert(Ft.type),ot=T(Ft.internalFormat,qt,rt,Ft.colorSpace,R.isXRRenderTarget===!0),At=F(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,ot,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),pt(n.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)ct(H.__webglFramebuffer[ut][Ft],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft);else ct(H.__webglFramebuffer[ut],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,Ft=nt.length;ut<Ft;ut++){const qt=nt[ut],rt=i.get(qt);let ot=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,rt.__webglTexture),pt(ot,qt),ct(H.__webglFramebuffer,R,qt,n.COLOR_ATTACHMENT0+ut,ot,0),g(qt)&&m(ot)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),pt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)ct(H.__webglFramebuffer[Ft],R,S,n.COLOR_ATTACHMENT0,ut,Ft);else ct(H.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ut,0);g(S)&&m(ut),e.unbindTexture()}R.depthBuffer&&Qt(R)}function Ie(R){const S=R.textures;for(let H=0,tt=S.length;H<tt;H++){const nt=S[H];if(g(nt)){const J=M(R),Et=i.get(nt).__webglTexture;e.bindTexture(J,Et),m(J),e.unbindTexture()}}}const He=[],le=[];function Qe(R){if(R.samples>0){if(nn(R)===!1){const S=R.textures,H=R.width,tt=R.height;let nt=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(R),ut=S.length>1;if(ut)for(let qt=0;qt<S.length;qt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Ft=R.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<S.length;qt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const rt=i.get(S[qt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,H,tt,0,0,H,tt,nt,n.NEAREST),l===!0&&(He.length=0,le.length=0,He.push(n.COLOR_ATTACHMENT0+qt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(J),le.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let qt=0;qt<S.length;qt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const rt=i.get(S[qt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function nn(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function We(R,S){const H=R.colorSpace,tt=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==qs&&H!==Cr&&(ye.getTransfer(H)===Le?(tt!==_i||nt!==ri)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",H)),S}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=hn,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function GM(n,t){function e(i,r=Cr){let s;const a=ye.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===Ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ju)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qf)return n.BYTE;if(i===jf)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===ju)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===ur)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===$f)return n.RGB;if(i===_i)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===tp)return n.RED;if(i===Qu)return n.RED_INTEGER;if(i===Ys)return n.RG;if(i===$u)return n.RG_INTEGER;if(i===td)return n.RGBA_INTEGER;if(i===To||i===Io||i===Ro||i===Co)if(a===Le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===jc||i===Kc||i===Jc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===$c||i===tu||i===eu||i===nu||i===iu||i===ru)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qc||i===$c)return a===Le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===eu)return s.COMPRESSED_R11_EAC;if(i===nu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===iu)return s.COMPRESSED_RG11_EAC;if(i===ru)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===su)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ou)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===du)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_u)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vu)return a===Le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Su||i===xu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===yu)return a===Le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===Mu||i===Eu||i===Au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===bu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new cp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Hi({vertexShader:WM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jn(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends ea{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,f=null,_=null,v=null;const E=typeof XRWebGLBinding<"u",g=new XM,m={},M=e.getContextAttributes();let T=null,u=null;const h=[],b=[],I=new Be;let y=null;const x=new mi;x.viewport=new tn;const z=new mi;z.viewport=new tn;const C=[x,z],k=new sy;let B=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=h[$];return at===void 0&&(at=new Ql,h[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=h[$];return at===void 0&&(at=new Ql,h[$]=at),at.getGripSpace()},this.getHand=function($){let at=h[$];return at===void 0&&(at=new Ql,h[$]=at),at.getHandSpace()};function O($){const at=b.indexOf($.inputSource);if(at===-1)return;const ct=h[at];ct!==void 0&&(ct.update($.inputSource,$.frame,c||a),ct.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let $=0;$<h.length;$++){const at=b[$];at!==null&&(b[$]=null,h[$].disconnect(at))}B=null,L=null,g.reset();for(const $ in m)delete m[$];t.setRenderTarget(T),_=null,f=null,p=null,r=null,u=null,ze.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,ee=null,Xt=null;M.depth&&(Xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=M.stencil?$r:dr,ee=M.stencil?Da:zi);const Qt={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Qt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Bi(f.textureWidth,f.textureHeight,{format:_i,type:ri,depthTexture:new La(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Bi(_.framebufferWidth,_.framebufferHeight,{format:_i,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N($){for(let at=0;at<$.removed.length;at++){const ct=$.removed[at],ee=b.indexOf(ct);ee>=0&&(b[ee]=null,h[ee].disconnect(ct))}for(let at=0;at<$.added.length;at++){const ct=$.added[at];let ee=b.indexOf(ct);if(ee===-1){for(let Qt=0;Qt<h.length;Qt++)if(Qt>=b.length){b.push(ct),ee=Qt;break}else if(b[Qt]===null){b[Qt]=ct,ee=Qt;break}if(ee===-1)break}const Xt=h[ee];Xt&&Xt.connect(ct)}}const q=new X,j=new X;function it($,at,ct){q.setFromMatrixPosition(at.matrixWorld),j.setFromMatrixPosition(ct.matrixWorld);const ee=q.distanceTo(j),Xt=at.projectionMatrix.elements,Qt=ct.projectionMatrix.elements,hn=Xt[14]/(Xt[10]-1),ve=Xt[14]/(Xt[10]+1),Ie=(Xt[9]+1)/Xt[5],He=(Xt[9]-1)/Xt[5],le=(Xt[8]-1)/Xt[0],Qe=(Qt[8]+1)/Qt[0],F=hn*le,nn=hn*Qe,Me=ee/(-le+Qe),We=Me*-le;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Xt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Rt=hn+Me,R=ve+Me,S=F-We,H=nn+(ee-We),tt=Ie*ve/R*Rt,nt=He*ve/R*Rt;$.projectionMatrix.makePerspective(S,H,tt,nt,Rt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function gt($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let at=$.near,ct=$.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),k.near=z.near=x.near=at,k.far=z.far=x.far=ct,(B!==k.near||L!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,L=k.far),k.layers.mask=$.layers.mask|6,x.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;const ee=$.parent,Xt=k.cameras;gt(k,ee);for(let Qt=0;Qt<Xt.length;Qt++)gt(Xt[Qt],ee);Xt.length===2?it(k,x,z):k.projectionMatrix.copy(x.projectionMatrix),pt($,k,ee)};function pt($,at,ct){ct===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function($){return m[$]};let jt=null;function Fe($,at){if(d=at.getViewerPose(c||a),v=at,d!==null){const ct=d.views;_!==null&&(t.setRenderTargetFramebuffer(u,_.framebuffer),t.setRenderTarget(u));let ee=!1;ct.length!==k.cameras.length&&(k.cameras.length=0,ee=!0);for(let ve=0;ve<ct.length;ve++){const Ie=ct[ve];let He=null;if(_!==null)He=_.getViewport(Ie);else{const Qe=p.getViewSubImage(f,Ie);He=Qe.viewport,ve===0&&(t.setRenderTargetTextures(u,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(u))}let le=C[ve];le===void 0&&(le=new mi,le.layers.enable(ve),le.viewport=new tn,C[ve]=le),le.matrix.fromArray(Ie.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ie.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(He.x,He.y,He.width,He.height),ve===0&&(k.matrix.copy(le.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ee===!0&&k.cameras.push(le)}const Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const ve=p.getDepthInformation(ct[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(Xt&&Xt.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let ve=0;ve<ct.length;ve++){const Ie=ct[ve].camera;if(Ie){let He=m[Ie];He||(He=new cp,m[Ie]=He);const le=p.getCameraImage(Ie);He.sourceTexture=le}}}}for(let ct=0;ct<h.length;ct++){const ee=b[ct],Xt=h[ct];ee!==null&&Xt!==void 0&&Xt.update(ee,at,c||a)}jt&&jt($,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),v=null}const ze=new hp;ze.setAnimationLoop(Fe),this.setAnimationLoop=function($){jt=$},this.dispose=function(){}}}const Xr=new hr,qM=new an;function jM(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,up(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,T,u){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),p(g,m)):m.isMeshPhongMaterial?(s(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,u)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),E(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),T=M.envMap,u=M.envMapRotation;T&&(g.envMap.value=T,Xr.copy(u),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Xr)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function E(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const u=T.program;i.uniformBlockBinding(M,u)}function c(M,T){let u=r[M.id];u===void 0&&(v(M),u=d(M),r[M.id]=u,M.addEventListener("dispose",g));const h=T.program;i.updateUBOMapping(M,h);const b=t.render.frame;s[M.id]!==b&&(f(M),s[M.id]=b)}function d(M){const T=p();M.__bindingPointIndex=T;const u=n.createBuffer(),h=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,u),n.bufferData(n.UNIFORM_BUFFER,h,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,u),u}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],u=M.uniforms,h=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let b=0,I=u.length;b<I;b++){const y=Array.isArray(u[b])?u[b]:[u[b]];for(let x=0,z=y.length;x<z;x++){const C=y[x];if(_(C,b,x,h)===!0){const k=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let O=0;O<B.length;O++){const D=B[O],N=E(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,k+L,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(M,T,u,h){const b=M.value,I=T+"_"+u;if(h[I]===void 0)return typeof b=="number"||typeof b=="boolean"?h[I]=b:h[I]=b.clone(),!0;{const y=h[I];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return h[I]=b,!0}else if(y.equals(b)===!1)return y.copy(b),!0}return!1}function v(M){const T=M.uniforms;let u=0;const h=16;for(let I=0,y=T.length;I<y;I++){const x=Array.isArray(T[I])?T[I]:[T[I]];for(let z=0,C=x.length;z<C;z++){const k=x[z],B=Array.isArray(k.value)?k.value:[k.value];for(let L=0,O=B.length;L<O;L++){const D=B[L],N=E(D),q=u%h,j=q%N.boundary,it=q+j;u+=j,it!==0&&h-it<N.storage&&(u+=h-it),k.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=u,u+=N.storage}}}const b=u%h;return b>0&&(u+=h-b),M.__size=u,M.__cache={},this}function E(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):te("WebGLRenderer: Unsupported uniform value type.",M),T}function g(M){const T=M.target;T.removeEventListener("dispose",g);const u=a.indexOf(T.__bindingPointIndex);a.splice(u,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function QM(){return bi===null&&(bi=new X2(JM,16,16,Ys,ur),bi.name="DFG_LUT",bi.minFilter=bn,bi.magFilter=bn,bi.wrapS=sr,bi.wrapT=sr,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class $M{constructor(t={}){const{canvas:e=b2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:_=ri}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=_,g=new Set([td,$u,Qu]),m=new Set([ri,zi,Ca,Da,Ku,Ju]),M=new Uint32Array(4),T=new Int32Array(4);let u=null,h=null;const b=[],I=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let z=!1;this._outputColorSpace=ti;let C=0,k=0,B=null,L=-1,O=null;const D=new tn,N=new tn;let q=null;const j=new Ee(0);let it=0,gt=e.width,pt=e.height,jt=1,Fe=null,ze=null;const $=new tn(0,0,gt,pt),at=new tn(0,0,gt,pt);let ct=!1;const ee=new op;let Xt=!1,Qt=!1;const hn=new an,ve=new X,Ie=new tn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Qe(){return B===null?jt:1}let F=i;function nn(w,G){return e.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qu}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",Ze,!1),F===null){const G="webgl2";if(F=nn(G,w),F===null)throw nn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw xe("WebGLRenderer: "+w.message),w}let Me,We,Rt,R,S,H,tt,nt,J,Et,ut,Ft,qt,rt,ot,At,Tt,St,ce,V,dt,lt,Mt;function st(){Me=new $x(F),Me.init(),dt=new GM(F,Me),We=new Zx(F,Me,t,dt),Rt=new HM(F,Me),We.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),R=new nb(F),S=new TM,H=new kM(F,Me,Rt,S,We,dt,R),tt=new Qx(x),nt=new oy(F),lt=new Gx(F,nt),J=new tb(F,nt,R,lt),Et=new rb(F,J,nt,lt,R),St=new ib(F,We,H),ot=new Xx(S),ut=new wM(x,tt,Me,We,lt,ot),Ft=new jM(x,S),qt=new RM,rt=new FM(Me),Tt=new kx(x,tt,Rt,Et,v,l),At=new zM(x,Et,We),Mt=new KM(F,R,We,Rt),ce=new Wx(F,Me,R),V=new eb(F,Me,R),R.programs=ut.programs,x.capabilities=We,x.extensions=Me,x.properties=S,x.renderLists=qt,x.shadowMap=At,x.state=Rt,x.info=R}st(),E!==ri&&(y=new ab(E,e.width,e.height,r,s));const K=new YM(x,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(w){w!==void 0&&(jt=w,this.setSize(gt,pt,!1))},this.getSize=function(w){return w.set(gt,pt)},this.setSize=function(w,G,Y=!0){if(K.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=w,pt=G,e.width=Math.floor(w*jt),e.height=Math.floor(G*jt),Y===!0&&(e.style.width=w+"px",e.style.height=G+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(gt*jt,pt*jt).floor()},this.setDrawingBufferSize=function(w,G,Y){gt=w,pt=G,jt=Y,e.width=Math.floor(w*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(E===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,G,Y,Z){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,G,Y,Z),Rt.viewport(D.copy($).multiplyScalar(jt).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,G,Y,Z){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,G,Y,Z),Rt.scissor(N.copy(at).multiplyScalar(jt).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){Rt.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,Y=!0){let Z=0;if(w){let W=!1;if(B!==null){const _t=B.texture.format;W=g.has(_t)}if(W){const _t=B.texture.type,bt=m.has(_t),vt=Tt.getClearColor(),It=Tt.getClearAlpha(),Pt=vt.r,re=vt.g,ue=vt.b;bt?(M[0]=Pt,M[1]=re,M[2]=ue,M[3]=It,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=Pt,T[1]=re,T[2]=ue,T[3]=It,F.clearBufferiv(F.COLOR,0,T))}else Z|=F.COLOR_BUFFER_BIT}G&&(Z|=F.DEPTH_BUFFER_BIT),Y&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Ze,!1),Tt.dispose(),qt.dispose(),rt.dispose(),S.dispose(),tt.dispose(),Et.dispose(),lt.dispose(),Mt.dispose(),ut.dispose(),K.dispose(),K.removeEventListener("sessionstart",Nd),K.removeEventListener("sessionend",Fd),Vr.stop()};function wt(w){w.preventDefault(),nh("WebGLRenderer: Context Lost."),z=!0}function $t(){nh("WebGLRenderer: Context Restored."),z=!1;const w=R.autoReset,G=At.enabled,Y=At.autoUpdate,Z=At.needsUpdate,W=At.type;st(),R.autoReset=w,At.enabled=G,At.autoUpdate=Y,At.needsUpdate=Z,At.type=W}function Ze(w){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const G=w.target;G.removeEventListener("dispose",Re),Xi(G)}function Xi(w){Yi(w),S.remove(w)}function Yi(w){const G=S.get(w).programs;G!==void 0&&(G.forEach(function(Y){ut.releaseProgram(Y)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Y,Z,W,_t){G===null&&(G=He);const bt=W.isMesh&&W.matrixWorld.determinant()<0,vt=Mm(w,G,Y,Z,W);Rt.setMaterial(Z,bt);let It=Y.index,Pt=1;if(Z.wireframe===!0){if(It=J.getWireframeAttribute(Y),It===void 0)return;Pt=2}const re=Y.drawRange,ue=Y.attributes.position;let Nt=re.start*Pt,Ue=(re.start+re.count)*Pt;_t!==null&&(Nt=Math.max(Nt,_t.start*Pt),Ue=Math.min(Ue,(_t.start+_t.count)*Pt)),It!==null?(Nt=Math.max(Nt,0),Ue=Math.min(Ue,It.count)):ue!=null&&(Nt=Math.max(Nt,0),Ue=Math.min(Ue,ue.count));const $e=Ue-Nt;if($e<0||$e===1/0)return;lt.setup(W,Z,vt,Y,It);let Je,Oe=ce;if(It!==null&&(Je=nt.get(It),Oe=V,Oe.setIndex(Je)),W.isMesh)Z.wireframe===!0?(Rt.setLineWidth(Z.wireframeLinewidth*Qe()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(W.isLine){let yn=Z.linewidth;yn===void 0&&(yn=1),Rt.setLineWidth(yn*Qe()),W.isLineSegments?Oe.setMode(F.LINES):W.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else W.isPoints?Oe.setMode(F.POINTS):W.isSprite&&Oe.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const yn=W._multiDrawStarts,Ct=W._multiDrawCounts,Gn=W._multiDrawCount,Se=It?nt.get(It).bytesPerElement:1,ui=S.get(Z).currentProgram.getUniforms();for(let Si=0;Si<Gn;Si++)ui.setValue(F,"_gl_DrawID",Si),Oe.render(yn[Si]/Se,Ct[Si])}else if(W.isInstancedMesh)Oe.renderInstances(Nt,$e,W.count);else if(Y.isInstancedBufferGeometry){const yn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,yn);Oe.renderInstances(Nt,$e,Ct)}else Oe.render(Nt,$e)};function Pd(w,G,Y){w.transparent===!0&&w.side===qn&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,Ka(w,G,Y),w.side=Pr,w.needsUpdate=!0,Ka(w,G,Y),w.side=qn):Ka(w,G,Y)}this.compile=function(w,G,Y=null){Y===null&&(Y=w),h=rt.get(Y),h.init(G),I.push(h),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights();const Z=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const vt=_t[bt];Pd(vt,Y,W),Z.add(vt)}else Pd(_t,Y,W),Z.add(_t)}),h=I.pop(),Z},this.compileAsync=function(w,G,Y=null){const Z=this.compile(w,G,Y);return new Promise(W=>{function _t(){if(Z.forEach(function(bt){S.get(bt).currentProgram.isReady()&&Z.delete(bt)}),Z.size===0){W(w);return}setTimeout(_t,10)}Me.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Fl=null;function bm(w){Fl&&Fl(w)}function Nd(){Vr.stop()}function Fd(){Vr.start()}const Vr=new hp;Vr.setAnimationLoop(bm),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(w){Fl=w,K.setAnimationLoop(w),w===null?Vr.stop():Vr.start()},K.addEventListener("sessionstart",Nd),K.addEventListener("sessionend",Fd),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const Y=K.enabled===!0&&K.isPresenting===!0,Z=y!==null&&(B===null||Y)&&y.begin(x,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(G),G=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,G,B),h=rt.get(w,I.length),h.init(G),I.push(h),hn.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(hn,Ni,G.reversedDepth),Qt=this.localClippingEnabled,Xt=ot.init(this.clippingPlanes,Qt),u=qt.get(w,b.length),u.init(),b.push(u),K.enabled===!0&&K.isPresenting===!0){const bt=x.xr.getDepthSensingMesh();bt!==null&&Ul(bt,G,-1/0,x.sortObjects)}Ul(w,G,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(Fe,ze),le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,le&&Tt.addToRenderList(u,w),this.info.render.frame++,Xt===!0&&ot.beginShadows();const W=h.state.shadowsArray;if(At.render(W,w,G),Xt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&y.hasRenderPass())===!1){const bt=u.opaque,vt=u.transmissive;if(h.setupLights(),G.isArrayCamera){const It=G.cameras;if(vt.length>0)for(let Pt=0,re=It.length;Pt<re;Pt++){const ue=It[Pt];Od(bt,vt,w,ue)}le&&Tt.render(w);for(let Pt=0,re=It.length;Pt<re;Pt++){const ue=It[Pt];Ud(u,w,ue,ue.viewport)}}else vt.length>0&&Od(bt,vt,w,G),le&&Tt.render(w),Ud(u,w,G)}B!==null&&k===0&&(H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B)),Z&&y.end(x),w.isScene===!0&&w.onAfterRender(x,w,G),lt.resetDefaultState(),L=-1,O=null,I.pop(),I.length>0?(h=I[I.length-1],Xt===!0&&ot.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function Ul(w,G,Y,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){Z&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(hn);const bt=Et.update(w),vt=w.material;vt.visible&&u.push(w,bt,vt,Y,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const bt=Et.update(w),vt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ie.copy(bt.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(hn)),Array.isArray(vt)){const It=bt.groups;for(let Pt=0,re=It.length;Pt<re;Pt++){const ue=It[Pt],Nt=vt[ue.materialIndex];Nt&&Nt.visible&&u.push(w,bt,Nt,Y,Ie.z,ue)}}else vt.visible&&u.push(w,bt,vt,Y,Ie.z,null)}}const _t=w.children;for(let bt=0,vt=_t.length;bt<vt;bt++)Ul(_t[bt],G,Y,Z)}function Ud(w,G,Y,Z){const{opaque:W,transmissive:_t,transparent:bt}=w;h.setupLightsView(Y),Xt===!0&&ot.setGlobalState(x.clippingPlanes,Y),Z&&Rt.viewport(D.copy(Z)),W.length>0&&ja(W,G,Y),_t.length>0&&ja(_t,G,Y),bt.length>0&&ja(bt,G,Y),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Od(w,G,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget[Z.id]===void 0){const Nt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");h.state.transmissionRenderTarget[Z.id]=new Bi(1,1,{generateMipmaps:!0,type:Nt?ur:ri,minFilter:Qr,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace})}const _t=h.state.transmissionRenderTarget[Z.id],bt=Z.viewport||D;_t.setSize(bt.z*x.transmissionResolutionScale,bt.w*x.transmissionResolutionScale);const vt=x.getRenderTarget(),It=x.getActiveCubeFace(),Pt=x.getActiveMipmapLevel();x.setRenderTarget(_t),x.getClearColor(j),it=x.getClearAlpha(),it<1&&x.setClearColor(16777215,.5),x.clear(),le&&Tt.render(Y);const re=x.toneMapping;x.toneMapping=Oi;const ue=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),h.setupLightsView(Z),Xt===!0&&ot.setGlobalState(x.clippingPlanes,Z),ja(w,Y,Z),H.updateMultisampleRenderTarget(_t),H.updateRenderTargetMipmap(_t),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Ue=0,$e=G.length;Ue<$e;Ue++){const Je=G[Ue],{object:Oe,geometry:yn,material:Ct,group:Gn}=Je;if(Ct.side===qn&&Oe.layers.test(Z.layers)){const Se=Ct.side;Ct.side=zn,Ct.needsUpdate=!0,Bd(Oe,Y,Z,yn,Ct,Gn),Ct.side=Se,Ct.needsUpdate=!0,Nt=!0}}Nt===!0&&(H.updateMultisampleRenderTarget(_t),H.updateRenderTargetMipmap(_t))}x.setRenderTarget(vt,It,Pt),x.setClearColor(j,it),ue!==void 0&&(Z.viewport=ue),x.toneMapping=re}function ja(w,G,Y){const Z=G.isScene===!0?G.overrideMaterial:null;for(let W=0,_t=w.length;W<_t;W++){const bt=w[W],{object:vt,geometry:It,group:Pt}=bt;let re=bt.material;re.allowOverride===!0&&Z!==null&&(re=Z),vt.layers.test(Y.layers)&&Bd(vt,G,Y,It,re,Pt)}}function Bd(w,G,Y,Z,W,_t){w.onBeforeRender(x,G,Y,Z,W,_t),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(x,G,Y,Z,w,_t),W.transparent===!0&&W.side===qn&&W.forceSinglePass===!1?(W.side=zn,W.needsUpdate=!0,x.renderBufferDirect(Y,G,Z,W,w,_t),W.side=Pr,W.needsUpdate=!0,x.renderBufferDirect(Y,G,Z,W,w,_t),W.side=qn):x.renderBufferDirect(Y,G,Z,W,w,_t),w.onAfterRender(x,G,Y,Z,W,_t)}function Ka(w,G,Y){G.isScene!==!0&&(G=He);const Z=S.get(w),W=h.state.lights,_t=h.state.shadowsArray,bt=W.state.version,vt=ut.getParameters(w,W.state,_t,G,Y),It=ut.getProgramCacheKey(vt);let Pt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;const re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=tt.get(w.envMap||Z.environment,re),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Re),Pt=new Map,Z.programs=Pt);let ue=Pt.get(It);if(ue!==void 0){if(Z.currentProgram===ue&&Z.lightsStateVersion===bt)return zd(w,vt),ue}else vt.uniforms=ut.getUniforms(w),w.onBeforeCompile(vt,x),ue=ut.acquireProgram(vt,It),Pt.set(It,ue),Z.uniforms=vt.uniforms;const Nt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=ot.uniform),zd(w,vt),Z.needsLights=Am(w),Z.lightsStateVersion=bt,Z.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=ue,Z.uniformsList=null,ue}function Vd(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Do.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function zd(w,G){const Y=S.get(w);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Mm(w,G,Y,Z,W){G.isScene!==!0&&(G=He),H.resetTextureUnits();const _t=G.fog,bt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,vt=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:qs,It=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Pt=tt.get(Z.envMap||bt,It),re=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ue=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!Y.morphAttributes.position,Ue=!!Y.morphAttributes.normal,$e=!!Y.morphAttributes.color;let Je=Oi;Z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Je=x.toneMapping);const Oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yn=Oe!==void 0?Oe.length:0,Ct=S.get(Z),Gn=h.state.lights;if(Xt===!0&&(Qt===!0||w!==O)){const fn=w===O&&Z.id===L;ot.setState(Z,w,fn)}let Se=!1;Z.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Gn.state.version||Ct.outputColorSpace!==vt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Pt||Z.fog===!0&&Ct.fog!==_t||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==re||Ct.vertexTangents!==ue||Ct.morphTargets!==Nt||Ct.morphNormals!==Ue||Ct.morphColors!==$e||Ct.toneMapping!==Je||Ct.morphTargetsCount!==yn)&&(Se=!0):(Se=!0,Ct.__version=Z.version);let ui=Ct.currentProgram;Se===!0&&(ui=Ka(Z,G,W));let Si=!1,zr=!1,os=!1;const ke=ui.getUniforms(),mn=Ct.uniforms;if(Rt.useProgram(ui.program)&&(Si=!0,zr=!0,os=!0),Z.id!==L&&(L=Z.id,zr=!0),Si||O!==w){Rt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ke.setValue(F,"projectionMatrix",w.projectionMatrix),ke.setValue(F,"viewMatrix",w.matrixWorldInverse);const vr=ke.map.cameraPosition;vr!==void 0&&vr.setValue(F,ve.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&ke.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ke.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,zr=!0,os=!0)}if(Ct.needsLights&&(Gn.state.directionalShadowMap.length>0&&ke.setValue(F,"directionalShadowMap",Gn.state.directionalShadowMap,H),Gn.state.spotShadowMap.length>0&&ke.setValue(F,"spotShadowMap",Gn.state.spotShadowMap,H),Gn.state.pointShadowMap.length>0&&ke.setValue(F,"pointShadowMap",Gn.state.pointShadowMap,H)),W.isSkinnedMesh){ke.setOptional(F,W,"bindMatrix"),ke.setOptional(F,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ke.setValue(F,"boneTexture",fn.boneTexture,H))}W.isBatchedMesh&&(ke.setOptional(F,W,"batchingTexture"),ke.setValue(F,"batchingTexture",W._matricesTexture,H),ke.setOptional(F,W,"batchingIdTexture"),ke.setValue(F,"batchingIdTexture",W._indirectTexture,H),ke.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&ke.setValue(F,"batchingColorTexture",W._colorsTexture,H));const _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&St.update(W,Y,ui),(zr||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,ke.setValue(F,"receiveShadow",W.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(mn.envMapIntensity.value=G.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=QM()),zr&&(ke.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Em(mn,os),_t&&Z.fog===!0&&Ft.refreshFogUniforms(mn,_t),Ft.refreshMaterialUniforms(mn,Z,jt,pt,h.state.transmissionRenderTarget[w.id]),Do.upload(F,Vd(Ct),mn,H)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Do.upload(F,Vd(Ct),mn,H),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ke.setValue(F,"center",W.center),ke.setValue(F,"modelViewMatrix",W.modelViewMatrix),ke.setValue(F,"normalMatrix",W.normalMatrix),ke.setValue(F,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let vr=0,ls=fn.length;vr<ls;vr++){const Hd=fn[vr];Mt.update(Hd,ui),Mt.bind(Hd,ui)}}return ui}function Em(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Am(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,G,Y){const Z=S.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=G,S.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const Y=S.get(w);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const wm=F.createFramebuffer();this.setRenderTarget=function(w,G=0,Y=0){B=w,C=G,k=Y;let Z=null,W=!1,_t=!1;if(w){const vt=S.get(w);if(vt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(F.FRAMEBUFFER,vt.__webglFramebuffer),D.copy(w.viewport),N.copy(w.scissor),q=w.scissorTest,Rt.viewport(D),Rt.scissor(N),Rt.setScissorTest(q),L=-1;return}else if(vt.__webglFramebuffer===void 0)H.setupRenderTarget(w);else if(vt.__hasExternalTextures)H.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const re=w.depthTexture;if(vt.__boundDepthTexture!==re){if(re!==null&&S.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(_t=!0);const Pt=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[G])?Z=Pt[G][Y]:Z=Pt[G],W=!0):w.samples>0&&H.useMultisampledRTT(w)===!1?Z=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?Z=Pt[Y]:Z=Pt,D.copy(w.viewport),N.copy(w.scissor),q=w.scissorTest}else D.copy($).multiplyScalar(jt).floor(),N.copy(at).multiplyScalar(jt).floor(),q=ct;if(Y!==0&&(Z=wm),Rt.bindFramebuffer(F.FRAMEBUFFER,Z)&&Rt.drawBuffers(w,Z),Rt.viewport(D),Rt.scissor(N),Rt.setScissorTest(q),W){const vt=S.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,vt.__webglTexture,Y)}else if(_t){const vt=G;for(let It=0;It<w.textures.length;It++){const Pt=S.get(w.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Pt.__webglTexture,Y,vt)}}else if(w!==null&&Y!==0){const vt=S.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,Y)}L=-1},this.readRenderTargetPixels=function(w,G,Y,Z,W,_t,bt,vt=0){if(!(w&&w.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){Rt.bindFramebuffer(F.FRAMEBUFFER,It);try{const Pt=w.textures[vt],re=Pt.format,ue=Pt.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+vt),!We.textureFormatReadable(re)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ue)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&Y>=0&&Y<=w.height-W&&F.readPixels(G,Y,Z,W,dt.convert(re),dt.convert(ue),_t)}finally{const Pt=B!==null?S.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,G,Y,Z,W,_t,bt,vt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It)if(G>=0&&G<=w.width-Z&&Y>=0&&Y<=w.height-W){Rt.bindFramebuffer(F.FRAMEBUFFER,It);const Pt=w.textures[vt],re=Pt.format,ue=Pt.type;if(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+vt),!We.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Nt),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(G,Y,Z,W,dt.convert(re),dt.convert(ue),0);const Ue=B!==null?S.get(B).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Ue);const $e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await M2(F,$e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.deleteBuffer(Nt),F.deleteSync($e),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,Y=0){const Z=Math.pow(2,-Y),W=Math.floor(w.image.width*Z),_t=Math.floor(w.image.height*Z),bt=G!==null?G.x:0,vt=G!==null?G.y:0;H.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,bt,vt,W,_t),Rt.unbindTexture()};const Tm=F.createFramebuffer(),Im=F.createFramebuffer();this.copyTextureToTexture=function(w,G,Y=null,Z=null,W=0,_t=0){let bt,vt,It,Pt,re,ue,Nt,Ue,$e;const Je=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(Y!==null)bt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Pt=Y.min.x,re=Y.min.y,ue=Y.isBox3?Y.min.z:0;else{const mn=Math.pow(2,-W);bt=Math.floor(Je.width*mn),vt=Math.floor(Je.height*mn),w.isDataArrayTexture?It=Je.depth:w.isData3DTexture?It=Math.floor(Je.depth*mn):It=1,Pt=0,re=0,ue=0}Z!==null?(Nt=Z.x,Ue=Z.y,$e=Z.z):(Nt=0,Ue=0,$e=0);const Oe=dt.convert(G.format),yn=dt.convert(G.type);let Ct;G.isData3DTexture?(H.setTexture3D(G,0),Ct=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(H.setTexture2DArray(G,0),Ct=F.TEXTURE_2D_ARRAY):(H.setTexture2D(G,0),Ct=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Gn=F.getParameter(F.UNPACK_ROW_LENGTH),Se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ui=F.getParameter(F.UNPACK_SKIP_PIXELS),Si=F.getParameter(F.UNPACK_SKIP_ROWS),zr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Je.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);const os=w.isDataArrayTexture||w.isData3DTexture,ke=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const mn=S.get(w),_r=S.get(G),fn=S.get(mn.__renderTarget),vr=S.get(_r.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,fn.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let ls=0;ls<It;ls++)os&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(w).__webglTexture,W,ue+ls),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(G).__webglTexture,_t,$e+ls)),F.blitFramebuffer(Pt,re,bt,vt,Nt,Ue,bt,vt,F.DEPTH_BUFFER_BIT,F.NEAREST);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||S.has(w)){const mn=S.get(w),_r=S.get(G);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Tm),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Im);for(let fn=0;fn<It;fn++)os?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,W,ue+fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,W),ke?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_r.__webglTexture,_t,$e+fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_r.__webglTexture,_t),W!==0?F.blitFramebuffer(Pt,re,bt,vt,Nt,Ue,bt,vt,F.COLOR_BUFFER_BIT,F.NEAREST):ke?F.copyTexSubImage3D(Ct,_t,Nt,Ue,$e+fn,Pt,re,bt,vt):F.copyTexSubImage2D(Ct,_t,Nt,Ue,Pt,re,bt,vt);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ke?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ct,_t,Nt,Ue,$e,bt,vt,It,Oe,yn,Je.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,_t,Nt,Ue,$e,bt,vt,It,Oe,Je.data):F.texSubImage3D(Ct,_t,Nt,Ue,$e,bt,vt,It,Oe,yn,Je):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Nt,Ue,bt,vt,Oe,yn,Je.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Nt,Ue,Je.width,Je.height,Oe,Je.data):F.texSubImage2D(F.TEXTURE_2D,_t,Nt,Ue,bt,vt,Oe,yn,Je);F.pixelStorei(F.UNPACK_ROW_LENGTH,Gn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ui),F.pixelStorei(F.UNPACK_SKIP_ROWS,Si),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zr),_t===0&&G.generateMipmaps&&F.generateMipmap(Ct),Rt.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&H.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?H.setTextureCube(w,0):w.isData3DTexture?H.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?H.setTexture2DArray(w,0):H.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){C=0,k=0,B=null,Rt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}class tE{canvas=null;renderer=null;scene=null;camera=null;width=0;height=0;pixelRatio=1;spritePool=[];activeSprites=0;rectPool=[];activeRects=0;geometryCache=new Map;themeObserver=null;primaryColor=new Ee("#ffffff");async initialize(t){this.canvas=t,this.renderer=new $M({canvas:t,alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.scene=new V2,this.camera=new sd(0,100,100,0,.1,1e3),this.camera.position.z=10;const e=new Ga(1,1);this.geometryCache.set("plane",e);const i=new Us({color:16777215,transparent:!0,depthWrite:!1,side:qn}),r=new jn(e,i);r.visible=!1,this.scene.add(r),this.spritePool.push(r);const s=new Us({transparent:!0,depthWrite:!1,side:qn}),a=new jn(e,s);a.visible=!1,this.scene.add(a),this.rectPool.push(a),this.updateThemeColors(),this.themeObserver=new MutationObserver(o=>{for(let l=0;l<o.length;l++)if(o[l].attributeName==="class"){this.updateThemeColors();break}}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),this.width>0&&this.height>0&&this.applySize(),setTimeout(()=>{this.renderer&&this.scene&&this.camera&&this.renderer.compile(this.scene,this.camera)},50)}updateThemeColors(){if(!this.scene)return;const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--bg-body").trim()||"#000000";this.scene.background=new Ee(e);const i=t.getPropertyValue("--color-primary").trim()||"#00639b";this.primaryColor.setStyle(i)}resize(t,e,i){this.width=t,this.height=e,this.pixelRatio=i,this.renderer&&this.camera&&(this.renderer.setPixelRatio(this.pixelRatio),this.applySize())}applySize(){!this.renderer||!this.camera||(this.renderer.setSize(this.width,this.height,!1),this.camera.left=0,this.camera.right=this.width,this.camera.top=this.height,this.camera.bottom=0,this.camera.updateProjectionMatrix())}clear(){this.activeSprites=0,this.activeRects=0}render(t){if(!(!this.renderer||!this.scene||!this.camera)){for(let e=0;e<t.length;e++){const i=t[e];i.type==="sprite"?this.renderSprite(i):i.type==="rect"&&this.renderRect(i)}for(let e=this.activeSprites;e<this.spritePool.length;e++)this.spritePool[e].visible=!1;for(let e=this.activeRects;e<this.rectPool.length;e++)this.rectPool[e].visible=!1;this.renderer.render(this.scene,this.camera)}}renderSprite(t){if(!this.scene)return;let e;if(this.activeSprites<this.spritePool.length)e=this.spritePool[this.activeSprites];else{const s=this.geometryCache.get("plane"),a=new Us({color:16777215,transparent:!0,depthWrite:!1,side:qn});e=new jn(s,a),this.scene.add(e),this.spritePool.push(e)}e.visible=!0,e.position.set(t.x,t.y,1);const i=10*t.scale;e.scale.set(i,i,1);const r=e.material;r.color.copy(this.primaryColor),r.opacity=t.opacity,this.activeSprites++}renderRect(t){if(!this.scene)return;let e;if(this.activeRects<this.rectPool.length)e=this.rectPool[this.activeRects];else{const r=this.geometryCache.get("plane"),s=new Us({transparent:!0,depthWrite:!1,side:qn});e=new jn(r,s),this.scene.add(e),this.rectPool.push(e)}e.visible=!0,e.position.set(t.x,t.y,0),e.scale.set(t.width,t.height,1),e.rotation.z=-t.rotation;const i=e.material;i.color.setStyle(t.color),i.opacity=t.opacity,this.activeRects++}destroy(){this.themeObserver&&(this.themeObserver.disconnect(),this.themeObserver=null),this.renderer&&this.renderer.dispose();for(let t=0;t<this.spritePool.length;t++)this.spritePool[t].material.dispose();for(let t=0;t<this.rectPool.length;t++)this.rectPool[t].material.dispose();for(const t of this.geometryCache.values())t.dispose();this.spritePool=[],this.rectPool=[],this.geometryCache.clear()}}function Jt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(p){a(p)}}function l(d){try{c(i.throw(d))}catch(p){a(p)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(n,t||[])).next())})}function Gh(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ae(n){return this instanceof ae?(this.v=n,this):new ae(n)}function Fi(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(v){return Promise.resolve(v).then(_,p)}}function o(_,v){i[_]&&(r[_]=function(E){return new Promise(function(g,m){s.push([_,E,g,m])>1||l(_,E)})},v&&(r[_]=v(r[_])))}function l(_,v){try{c(i[_](v))}catch(E){f(s[0][3],E)}}function c(_){_.value instanceof ae?Promise.resolve(_.value.v).then(d,p):f(s[0][2],_)}function d(_){l("next",_)}function p(_){l("throw",_)}function f(_,v){_(v),s.shift(),s.length&&l(s[0][0],s[0][1])}}function Lo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(a){return(e=!e)?{value:ae(n[r](a)),done:!1}:s?s(a):a}:s}}function es(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Gh=="function"?Gh(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(a){return new Promise(function(o,l){a=n[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}const eE=new TextDecoder("utf-8"),Ru=n=>eE.decode(n),nE=new TextEncoder,ad=n=>nE.encode(n),iE=n=>typeof n=="number",vp=n=>typeof n=="boolean",on=n=>typeof n=="function",Hn=n=>n!=null&&Object(n)===n,is=n=>Hn(n)&&on(n.then),Wa=n=>Hn(n)&&on(n[Symbol.iterator]),ra=n=>Hn(n)&&on(n[Symbol.asyncIterator]),Cu=n=>Hn(n)&&Hn(n.schema),yp=n=>Hn(n)&&"done"in n&&"value"in n,Sp=n=>Hn(n)&&on(n.stat)&&iE(n.fd),xp=n=>Hn(n)&&od(n.body),Cl=n=>"_getDOMStream"in n&&"_getNodeStream"in n,rE=n=>Hn(n)&&on(n.abort)&&on(n.getWriter)&&!Cl(n),od=n=>Hn(n)&&on(n.cancel)&&on(n.getReader)&&!Cl(n),sE=n=>Hn(n)&&on(n.end)&&on(n.write)&&vp(n.writable)&&!Cl(n),bp=n=>Hn(n)&&on(n.read)&&on(n.pipe)&&vp(n.readable)&&!Cl(n),aE=n=>Hn(n)&&on(n.clear)&&on(n.bytes)&&on(n.position)&&on(n.setPosition)&&on(n.capacity)&&on(n.getBufferIdentifier)&&on(n.createLong),ld=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function oE(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let a,o,l=0,c=0,d=n.length;++l<d;){if(a=t[c],o=n[l],!a||!o||a.buffer!==o.buffer||o.byteOffset<a.byteOffset){o&&(t[++c]=o);continue}if({byteOffset:e,byteLength:r}=a,{byteOffset:i,byteLength:s}=o,e+r<i||i+s<e){o&&(t[++c]=o);continue}t[c]=new Uint8Array(a.buffer,e,i-e+s)}return t}function Wh(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),a=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(a,e),n}function ki(n,t){const e=oE(n),i=e.reduce((d,p)=>d+p.byteLength,0);let r,s,a,o=0,l=-1;const c=Math.min(t||Number.POSITIVE_INFINITY,i);for(const d=e.length;++l<d;){if(r=e[l],s=r.subarray(0,Math.min(r.length,c-o)),c<=o+s.length){s.length<r.length?e[l]=r.subarray(s.length):s.length===r.length&&l++,a?Wh(a,s,o):a=s;break}Wh(a||(a=new Uint8Array(c)),s,o),o+=s.length}return[a||new Uint8Array(0),e.slice(l),i-(a?a.byteLength:0)]}function Pe(n,t){let e=yp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=ad(e)),e instanceof ArrayBuffer?new n(e):e instanceof ld?new n(e):aE(e)?Pe(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const pa=n=>Pe(Int32Array,n),Zh=n=>Pe(BigInt64Array,n),pe=n=>Pe(Uint8Array,n),Du=n=>(n.next(),n);function*lE(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof ld?e(t):Wa(t)?t:e(t);return yield*Du((function*(r){let s=null;do s=r.next(yield Pe(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const cE=n=>lE(Uint8Array,n);function Mp(n,t){return Fi(this,arguments,function*(){if(is(t))return yield ae(yield ae(yield*Lo(es(Mp(n,yield ae(t))))));const i=function(a){return Fi(this,arguments,function*(){yield yield ae(yield ae(a))})},r=function(a){return Fi(this,arguments,function*(){yield ae(yield*Lo(es(Du((function*(o){let l=null;do l=o.next(yield l?.value);while(!l.done)})(a[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof ld?i(t):Wa(t)?r(t):ra(t)?t:i(t);return yield ae(yield*Lo(es(Du((function(a){return Fi(this,arguments,function*(){let o=null;do o=yield ae(a.next(yield yield ae(Pe(n,o))));while(!o.done)})})(s[Symbol.asyncIterator]()))))),yield ae(new n)})}const uE=n=>Mp(Uint8Array,n);function Ep(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function dE(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const ei={fromIterable(n){return bo(hE(n))},fromAsyncIterable(n){return bo(fE(n))},fromDOMStream(n){return bo(pE(n))},fromNodeStream(n){return bo(gE(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},bo=n=>(n.next(),n);function*hE(n){let t,e=!1,i=[],r,s,a,o=0;function l(){return s==="peek"?ki(i,a)[0]:([r,i,o]=ki(i,a),r)}({cmd:s,size:a}=(yield null)||{cmd:"read",size:0});const c=cE(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(a-o)?c.next():c.next(a-o),!t&&r.byteLength>0&&(i.push(r),o+=r.byteLength),t||a<=o)do({cmd:s,size:a}=yield l());while(a<o);while(!t)}catch(d){(e=!0)&&typeof c.throw=="function"&&c.throw(d)}finally{e===!1&&typeof c.return=="function"&&c.return(null)}return null}function fE(n){return Fi(this,arguments,function*(){let e,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?ki(r,o)[0]:([s,r,l]=ki(r,o),s)}({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0});const d=uE(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ae(d.next()):yield ae(d.next(o-l)),!e&&s.byteLength>0&&(r.push(s),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ae(c()));while(o<l);while(!e)}catch(p){(i=!0)&&typeof d.throw=="function"&&(yield ae(d.throw(p)))}finally{i===!1&&typeof d.return=="function"&&(yield ae(d.return(new Uint8Array(0))))}return yield ae(null)})}function pE(n){return Fi(this,arguments,function*(){let e=!1,i=!1,r=[],s,a,o,l=0;function c(){return a==="peek"?ki(r,o)[0]:([s,r,l]=ki(r,o),s)}({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0});const d=new mE(n);try{do if({done:e,value:s}=Number.isNaN(o-l)?yield ae(d.read()):yield ae(d.read(o-l)),!e&&s.byteLength>0&&(r.push(pe(s)),l+=s.byteLength),e||o<=l)do({cmd:a,size:o}=yield yield ae(c()));while(o<l);while(!e)}catch(p){(i=!0)&&(yield ae(d.cancel(p)))}finally{i===!1?yield ae(d.cancel()):n.locked&&d.releaseLock()}return yield ae(null)})}class mE{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Jt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Jt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=pe(e)),e})}}const xc=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function gE(n){return Fi(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,a,o,l=0,c=[],d;function p(){return a==="peek"?ki(c,o)[0]:([d,c,l]=ki(c,o),d)}if({cmd:a,size:o}=(yield yield ae(null))||{cmd:"read",size:0},n.isTTY)return yield yield ae(new Uint8Array(0)),yield ae(null);try{e[0]=xc(n,"end"),e[1]=xc(n,"error");do{if(e[2]=xc(n,"readable"),[i,s]=yield ae(Promise.race(e.map(_=>_[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(o-l)?(d=pe(n.read(o-l)),d.byteLength<o-l&&(d=pe(n.read()))):d=pe(n.read()),d.byteLength>0&&(c.push(d),l+=d.byteLength)),r||o<=l)do({cmd:a,size:o}=yield yield ae(p()));while(o<l)}while(!r)}finally{yield ae(f(e,i==="error"?s:null))}return yield ae(null);function f(_,v){return d=c=null,new Promise((E,g)=>{for(const[m,M]of _)n.off(m,M);try{const m=n.destroy;m&&m.call(n,v),v=void 0}catch(m){v=m||v}finally{v!=null?g(v):E()}})}})}var en;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(en||(en={}));var En;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(En||(En={}));var Mn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(Mn||(Mn={}));var li;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(li||(li={}));var kt;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(kt||(kt={}));var Gi;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Gi||(Gi={}));const bc=2,Ri=4,ir=4,Te=4,Ir=new Int32Array(2),Xh=new Float32Array(Ir.buffer),Yh=new Float64Array(Ir.buffer),Mo=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Lu;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Lu||(Lu={}));let Ks=class Ap{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new Ap(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Ir[0]=this.readInt32(t),Xh[0]}readFloat64(t){return Ir[Mo?0:1]=this.readInt32(t),Ir[Mo?1:0]=this.readInt32(t+4),Yh[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Xh[0]=e,this.writeInt32(t,Ir[0])}writeFloat64(t,e){Yh[0]=e,this.writeInt32(t,Ir[Mo?0:1]),this.writeInt32(t+4,Ir[Mo?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+Ri+ir)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<ir;e++)t+=String.fromCharCode(this.readInt8(this.position_+Ri+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=Ri;const r=this.bytes_.subarray(t,t+i);return e===Lu.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+Ri}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=ir)throw new Error("FlatBuffers: file identifier must be length "+ir);for(let e=0;e<ir;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+Ri+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},wp=class Tp{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Ks.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=Tp.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Ks.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(Ri,0),this.writeInt32(this.offset()-t+Ri)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*bc;this.addInt16(s);let a=0;const o=this.space;t:for(e=0;e<this.vtables.length;e++){const l=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(l)){for(let c=bc;c<s;c+=bc)if(this.bb.readInt16(o+c)!=this.bb.readInt16(l+c))continue t;a=this.vtables[e];break}}return a?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,a-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Te:0;if(e){const s=e;if(this.prep(this.minalign,Ri+ir+r),s.length!=ir)throw new TypeError("FlatBuffers: file identifier must be length "+ir);for(let a=ir-1;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,Ri+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(Ri,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var Yo;(function(n){n[n.BUFFER=0]="BUFFER"})(Yo||(Yo={}));var qo;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(qo||(qo={}));class Rr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Te),(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):qo.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Yo.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,qo.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Yo.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Rr.startBodyCompression(t),Rr.addCodec(t,e),Rr.addMethod(t,i),Rr.endBodyCompression(t)}}class Ip{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}}let Rp=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}},tr=class Pu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Pu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Te),(e||new Pu).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Rp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Ip).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Rr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},As=class Nu{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Nu).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Te),(e||new Nu).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new tr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Js;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Js||(Js={}));var jo;(function(n){n[n.DenseArray=0]="DenseArray"})(jo||(jo={}));class Yn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Te),(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return Yn.startInt(t),Yn.addBitWidth(t,e),Yn.addIsSigned(t,i),Yn.endInt(t)}}class rr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new rr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Te),(e||new rr).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Yn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):jo.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,jo.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class ln{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new ln).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Te),(e||new ln).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return ln.startKeyValue(t),ln.addKey(t,e),ln.addValue(t,i),ln.endKeyValue(t)}}let qh=class va{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Te),(e||new va).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return va.startBinary(t),va.endBinary(t)}},jh=class ya{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Te),(e||new ya).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return ya.startBool(t),ya.endBool(t)}},Po=class ws{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Te),(e||new ws).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):li.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,li.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return ws.startDate(t),ws.addUnit(t,e),ws.endDate(t)}},Ts=class Tr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Te),(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return Tr.startDecimal(t),Tr.addPrecision(t,e),Tr.addScale(t,i),Tr.addBitWidth(t,r),Tr.endDecimal(t)}},No=class Is{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+Te),(e||new Is).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):kt.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,kt.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return Is.startDuration(t),Is.addUnit(t,e),Is.endDuration(t)}},Fo=class Rs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Te),(e||new Rs).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Rs.startFixedSizeBinary(t),Rs.addByteWidth(t,e),Rs.endFixedSizeBinary(t)}},Uo=class Cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Te),(e||new Cs).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return Cs.startFixedSizeList(t),Cs.addListSize(t,e),Cs.endFixedSizeList(t)}};class Ci{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new Ci).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Te),(e||new Ci).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Mn.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,Mn.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return Ci.startFloatingPoint(t),Ci.addPrecision(t,e),Ci.endFloatingPoint(t)}}class Di{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Di).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Te),(e||new Di).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Gi.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Gi.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Di.startInterval(t),Di.addUnit(t,e),Di.endInterval(t)}}let Kh=class Sa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+Te),(e||new Sa).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return Sa.startLargeBinary(t),Sa.endLargeBinary(t)}},Jh=class xa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+Te),(e||new xa).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return xa.startLargeUtf8(t),xa.endLargeUtf8(t)}},Qh=class ba{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Te),(e||new ba).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return ba.startList(t),ba.endList(t)}},Oo=class Ds{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Te),(e||new Ds).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return Ds.startMap(t),Ds.addKeysSorted(t,e),Ds.endMap(t)}},$h=class Ma{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Te),(e||new Ma).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return Ma.startNull(t),Ma.endNull(t)}};class ts{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Te),(e||new ts).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return ts.startStruct_(t),ts.endStruct_(t)}}class ni{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new ni).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Te),(e||new ni).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):kt.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,kt.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return ni.startTime(t),ni.addUnit(t,e),ni.addBitWidth(t,i),ni.endTime(t)}}class ii{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new ii).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Te),(e||new ii).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):kt.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,kt.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return ii.startTimestamp(t),ii.addUnit(t,e),ii.addTimezone(t,i),ii.endTimestamp(t)}}class Bn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Te),(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):En.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,En.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return Bn.startUnion(t),Bn.addMode(t,e),Bn.addTypeIds(t,i),Bn.endUnion(t)}}let tf=class Ea{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new Ea).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Te),(e||new Ea).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return Ea.startUtf8(t),Ea.endUtf8(t)}};var Xe;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Xe||(Xe={}));let $n=class Bo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Bo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Te),(e||new Bo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Xe.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new rr).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Bo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new ln).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Xe.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Ei=class $i{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new $i).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Te),(e||new $i).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Js.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new $n).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new ln).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Js.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return $i.startSchema(t),$i.addEndianness(t,e),$i.addFields(t,i),$i.addCustomMetadata(t,r),$i.addFeatures(t,s),$i.endSchema(t)}};var be;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(be||(be={}));var P;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(P||(P={}));var er;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(er||(er={}));const _E=void 0;function Pa(n){if(n===null)return"null";if(n===_E)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>Pa(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}function Ge(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Cp(n,t){return Ge(n/t)+Ge(n%t)/Ge(t)}const vE=Symbol.for("isArrowBigNum");function yi(n,...t){return t.length===0?Object.setPrototypeOf(Pe(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}yi.prototype[vE]=!0;yi.prototype.toJSON=function(){return`"${Fa(this)}"`};yi.prototype.valueOf=function(n){return Dp(this,n)};yi.prototype.toString=function(){return Fa(this)};yi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return Dp(this);case"string":return Fa(this);case"default":return xE(this)}return Fa(this)};function Hs(...n){return yi.apply(this,n)}function ks(...n){return yi.apply(this,n)}function Na(...n){return yi.apply(this,n)}Object.setPrototypeOf(Hs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(ks.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Na.prototype,Object.create(Uint32Array.prototype));Object.assign(Hs.prototype,yi.prototype,{constructor:Hs,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(ks.prototype,yi.prototype,{constructor:ks,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Na.prototype,yi.prototype,{constructor:Na,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});const yE=BigInt(4294967296)*BigInt(4294967296),SE=yE-BigInt(1);function Dp(n,t){const{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,a=new BigUint64Array(e,i,r/8),o=s&&a.at(-1)&BigInt(1)<<BigInt(63);let l=BigInt(0),c=0;if(o){for(const d of a)l|=(d^SE)*(BigInt(1)<<BigInt(64*c++));l*=BigInt(-1),l-=BigInt(1)}else for(const d of a)l|=d*(BigInt(1)<<BigInt(64*c++));if(typeof t=="number"){const d=BigInt(Math.pow(10,t)),p=l/d,f=l%d;return Ge(p)+Ge(f)/Ge(d)}return Ge(l)}function Fa(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return Mc(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return Mc(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){const a=t[s],o=~a+i;t[s]=o,i&=a===0?1:0}return`-${Mc(t)}`}function xE(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Fa(n)}function Mc(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const a=i.length-1;do{for(e[0]=i[s=0];s<a;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class cd{static new(t,e){switch(e){case!0:return new Hs(t);case!1:return new ks(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new Hs(t)}return t.byteLength===16?new Na(t):new ks(t)}static signed(t){return new Hs(t)}static unsigned(t){return new ks(t)}static decimal(t){return new Na(t)}constructor(t,e){return cd.new(t,e)}}var Lp,Pp,Np,Fp,Up,Op,Bp,Vp,zp,Hp,kp,Gp,Wp,Zp,Xp,Yp,qp,jp,Kp,Jp,Qp,$p;class Dt{static isNull(t){return t?.typeId===P.Null}static isInt(t){return t?.typeId===P.Int}static isFloat(t){return t?.typeId===P.Float}static isBinary(t){return t?.typeId===P.Binary}static isLargeBinary(t){return t?.typeId===P.LargeBinary}static isUtf8(t){return t?.typeId===P.Utf8}static isLargeUtf8(t){return t?.typeId===P.LargeUtf8}static isBool(t){return t?.typeId===P.Bool}static isDecimal(t){return t?.typeId===P.Decimal}static isDate(t){return t?.typeId===P.Date}static isTime(t){return t?.typeId===P.Time}static isTimestamp(t){return t?.typeId===P.Timestamp}static isInterval(t){return t?.typeId===P.Interval}static isDuration(t){return t?.typeId===P.Duration}static isList(t){return t?.typeId===P.List}static isStruct(t){return t?.typeId===P.Struct}static isUnion(t){return t?.typeId===P.Union}static isFixedSizeBinary(t){return t?.typeId===P.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===P.FixedSizeList}static isMap(t){return t?.typeId===P.Map}static isDictionary(t){return t?.typeId===P.Dictionary}static isDenseUnion(t){return Dt.isUnion(t)&&t.mode===En.Dense}static isSparseUnion(t){return Dt.isUnion(t)&&t.mode===En.Sparse}constructor(t){this.typeId=t}}Lp=Symbol.toStringTag;Dt[Lp]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(Dt.prototype);class Nr extends Dt{constructor(){super(P.Null)}toString(){return"Null"}}Pp=Symbol.toStringTag;Nr[Pp]=(n=>n[Symbol.toStringTag]="Null")(Nr.prototype);class rs extends Dt{constructor(t,e){super(P.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}Np=Symbol.toStringTag;rs[Np]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(rs.prototype);class Ua extends rs{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(Ua.prototype,"ArrayType",{value:Int32Array});class Ko extends Dt{constructor(t){super(P.Float),this.precision=t}get ArrayType(){switch(this.precision){case Mn.HALF:return Uint16Array;case Mn.SINGLE:return Float32Array;case Mn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}Fp=Symbol.toStringTag;Ko[Fp]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Ko.prototype);class Jo extends Dt{constructor(){super(P.Binary)}toString(){return"Binary"}}Up=Symbol.toStringTag;Jo[Up]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(Jo.prototype);class Qo extends Dt{constructor(){super(P.LargeBinary)}toString(){return"LargeBinary"}}Op=Symbol.toStringTag;Qo[Op]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(Qo.prototype);class $o extends Dt{constructor(){super(P.Utf8)}toString(){return"Utf8"}}Bp=Symbol.toStringTag;$o[Bp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))($o.prototype);class tl extends Dt{constructor(){super(P.LargeUtf8)}toString(){return"LargeUtf8"}}Vp=Symbol.toStringTag;tl[Vp]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(tl.prototype);class el extends Dt{constructor(){super(P.Bool)}toString(){return"Bool"}}zp=Symbol.toStringTag;el[zp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(el.prototype);class nl extends Dt{constructor(t,e,i=128){super(P.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}}Hp=Symbol.toStringTag;nl[Hp]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(nl.prototype);class il extends Dt{constructor(t){super(P.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${li[this.unit]}>`}get ArrayType(){return this.unit===li.DAY?Int32Array:BigInt64Array}}kp=Symbol.toStringTag;il[kp]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(il.prototype);class rl extends Dt{constructor(t,e){super(P.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${kt[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}Gp=Symbol.toStringTag;rl[Gp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(rl.prototype);class sl extends Dt{constructor(t,e){super(P.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${kt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Wp=Symbol.toStringTag;sl[Wp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(sl.prototype);class al extends Dt{constructor(t){super(P.Interval),this.unit=t}toString(){return`Interval<${Gi[this.unit]}>`}}Zp=Symbol.toStringTag;al[Zp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(al.prototype);class ol extends Dt{constructor(t){super(P.Duration),this.unit=t}toString(){return`Duration<${kt[this.unit]}>`}}Xp=Symbol.toStringTag;ol[Xp]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(ol.prototype);class ll extends Dt{constructor(t){super(P.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}}Yp=Symbol.toStringTag;ll[Yp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(ll.prototype);class Dn extends Dt{constructor(t){super(P.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}qp=Symbol.toStringTag;Dn[qp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Dn.prototype);class cl extends Dt{constructor(t,e,i){super(P.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,a)=>(r[s]=a)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}jp=Symbol.toStringTag;cl[jp]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(cl.prototype);class ul extends Dt{constructor(t){super(P.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}}Kp=Symbol.toStringTag;ul[Kp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(ul.prototype);class dl extends Dt{constructor(t,e){super(P.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}}Jp=Symbol.toStringTag;dl[Jp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(dl.prototype);class hl extends Dt{constructor(t,e=!1){var i,r,s;if(super(P.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){const a=(r=t?.type)===null||r===void 0?void 0:r.children[0];a&&(a.name="key");const o=(s=t?.type)===null||s===void 0?void 0:s.children[1];o&&(o.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Qp=Symbol.toStringTag;hl[Qp]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(hl.prototype);const bE=(n=>()=>++n)(-1);class Qs extends Dt{constructor(t,e,i,r){super(P.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?bE():Ge(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}$p=Symbol.toStringTag;Qs[$p]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Qs.prototype);function nr(n){const t=n;switch(n.typeId){case P.Decimal:return n.bitWidth/32;case P.Interval:return 1+t.unit;case P.FixedSizeList:return t.listSize;case P.FixedSizeBinary:return t.byteWidth;default:return 1}}class de{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return ME(this,t,e)}getVisitFnByTypeId(t,e=!0){return Ls(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function ME(n,t,e=!0){return typeof t=="number"?Ls(n,t,e):typeof t=="string"&&t in P?Ls(n,P[t],e):t&&t instanceof Dt?Ls(n,ef(t),e):t?.type&&t.type instanceof Dt?Ls(n,ef(t.type),e):Ls(n,P.NONE,e)}function Ls(n,t,e=!0){let i=null;switch(t){case P.Null:i=n.visitNull;break;case P.Bool:i=n.visitBool;break;case P.Int:i=n.visitInt;break;case P.Int8:i=n.visitInt8||n.visitInt;break;case P.Int16:i=n.visitInt16||n.visitInt;break;case P.Int32:i=n.visitInt32||n.visitInt;break;case P.Int64:i=n.visitInt64||n.visitInt;break;case P.Uint8:i=n.visitUint8||n.visitInt;break;case P.Uint16:i=n.visitUint16||n.visitInt;break;case P.Uint32:i=n.visitUint32||n.visitInt;break;case P.Uint64:i=n.visitUint64||n.visitInt;break;case P.Float:i=n.visitFloat;break;case P.Float16:i=n.visitFloat16||n.visitFloat;break;case P.Float32:i=n.visitFloat32||n.visitFloat;break;case P.Float64:i=n.visitFloat64||n.visitFloat;break;case P.Utf8:i=n.visitUtf8;break;case P.LargeUtf8:i=n.visitLargeUtf8;break;case P.Binary:i=n.visitBinary;break;case P.LargeBinary:i=n.visitLargeBinary;break;case P.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case P.Date:i=n.visitDate;break;case P.DateDay:i=n.visitDateDay||n.visitDate;break;case P.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case P.Timestamp:i=n.visitTimestamp;break;case P.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case P.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case P.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case P.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case P.Time:i=n.visitTime;break;case P.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case P.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case P.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case P.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case P.Decimal:i=n.visitDecimal;break;case P.List:i=n.visitList;break;case P.Struct:i=n.visitStruct;break;case P.Union:i=n.visitUnion;break;case P.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case P.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case P.Dictionary:i=n.visitDictionary;break;case P.Interval:i=n.visitInterval;break;case P.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case P.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case P.Duration:i=n.visitDuration;break;case P.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case P.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case P.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case P.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case P.FixedSizeList:i=n.visitFixedSizeList;break;case P.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${P[t]}'`)}function ef(n){switch(n.typeId){case P.Null:return P.Null;case P.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?P.Int8:P.Uint8;case 16:return e?P.Int16:P.Uint16;case 32:return e?P.Int32:P.Uint32;case 64:return e?P.Int64:P.Uint64}return P.Int}case P.Float:switch(n.precision){case Mn.HALF:return P.Float16;case Mn.SINGLE:return P.Float32;case Mn.DOUBLE:return P.Float64}return P.Float;case P.Binary:return P.Binary;case P.LargeBinary:return P.LargeBinary;case P.Utf8:return P.Utf8;case P.LargeUtf8:return P.LargeUtf8;case P.Bool:return P.Bool;case P.Decimal:return P.Decimal;case P.Time:switch(n.unit){case kt.SECOND:return P.TimeSecond;case kt.MILLISECOND:return P.TimeMillisecond;case kt.MICROSECOND:return P.TimeMicrosecond;case kt.NANOSECOND:return P.TimeNanosecond}return P.Time;case P.Timestamp:switch(n.unit){case kt.SECOND:return P.TimestampSecond;case kt.MILLISECOND:return P.TimestampMillisecond;case kt.MICROSECOND:return P.TimestampMicrosecond;case kt.NANOSECOND:return P.TimestampNanosecond}return P.Timestamp;case P.Date:switch(n.unit){case li.DAY:return P.DateDay;case li.MILLISECOND:return P.DateMillisecond}return P.Date;case P.Interval:switch(n.unit){case Gi.DAY_TIME:return P.IntervalDayTime;case Gi.YEAR_MONTH:return P.IntervalYearMonth}return P.Interval;case P.Duration:switch(n.unit){case kt.SECOND:return P.DurationSecond;case kt.MILLISECOND:return P.DurationMillisecond;case kt.MICROSECOND:return P.DurationMicrosecond;case kt.NANOSECOND:return P.DurationNanosecond}return P.Duration;case P.Map:return P.Map;case P.List:return P.List;case P.Struct:return P.Struct;case P.Union:switch(n.mode){case En.Dense:return P.DenseUnion;case En.Sparse:return P.SparseUnion}return P.Union;case P.FixedSizeBinary:return P.FixedSizeBinary;case P.FixedSizeList:return P.FixedSizeList;case P.Dictionary:return P.Dictionary}throw new Error(`Unrecognized type '${P[n.typeId]}'`)}de.prototype.visitInt8=null;de.prototype.visitInt16=null;de.prototype.visitInt32=null;de.prototype.visitInt64=null;de.prototype.visitUint8=null;de.prototype.visitUint16=null;de.prototype.visitUint32=null;de.prototype.visitUint64=null;de.prototype.visitFloat16=null;de.prototype.visitFloat32=null;de.prototype.visitFloat64=null;de.prototype.visitDateDay=null;de.prototype.visitDateMillisecond=null;de.prototype.visitTimestampSecond=null;de.prototype.visitTimestampMillisecond=null;de.prototype.visitTimestampMicrosecond=null;de.prototype.visitTimestampNanosecond=null;de.prototype.visitTimeSecond=null;de.prototype.visitTimeMillisecond=null;de.prototype.visitTimeMicrosecond=null;de.prototype.visitTimeNanosecond=null;de.prototype.visitDenseUnion=null;de.prototype.visitSparseUnion=null;de.prototype.visitIntervalDayTime=null;de.prototype.visitIntervalYearMonth=null;de.prototype.visitDuration=null;de.prototype.visitDurationSecond=null;de.prototype.visitDurationMillisecond=null;de.prototype.visitDurationMicrosecond=null;de.prototype.visitDurationNanosecond=null;const t0=new Float64Array(1),Ms=new Uint32Array(t0.buffer);function e0(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function EE(n){if(n!==n)return 32256;t0[0]=n;const t=(Ms[1]&2147483648)>>16&65535;let e=Ms[1]&2146435072,i=0;return e>=1089470464?Ms[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Ms[1]&1048575)>>10):e<=1056964608?(i=1048576+(Ms[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Ms[1]&1048575)+512>>10),t|e|i&65535}class Gt extends de{}function Yt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const AE=(n,t,e)=>{n[t]=Math.floor(e/864e5)},n0=(n,t,e,i)=>{if(e+1<t.length){const r=Ge(t[e]),s=Ge(t[e+1]);n.set(i.subarray(0,s-r),r)}},wE=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},pr=({values:n},t,e)=>{n[t]=e},ud=({values:n},t,e)=>{n[t]=e},i0=({values:n},t,e)=>{n[t]=EE(e)},TE=(n,t,e)=>{switch(n.type.precision){case Mn.HALF:return i0(n,t,e);case Mn.SINGLE:case Mn.DOUBLE:return ud(n,t,e)}},r0=({values:n},t,e)=>{AE(n,t,e.valueOf())},s0=({values:n},t,e)=>{n[t]=BigInt(e)},IE=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},a0=({values:n,valueOffsets:t},e,i)=>n0(n,t,e,i),o0=({values:n,valueOffsets:t},e,i)=>n0(n,t,e,ad(i)),RE=(n,t,e)=>{n.type.unit===li.DAY?r0(n,t,e):s0(n,t,e)},l0=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},c0=({values:n},t,e)=>{n[t]=BigInt(e)},u0=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},d0=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},CE=(n,t,e)=>{switch(n.type.unit){case kt.SECOND:return l0(n,t,e);case kt.MILLISECOND:return c0(n,t,e);case kt.MICROSECOND:return u0(n,t,e);case kt.NANOSECOND:return d0(n,t,e)}},h0=({values:n},t,e)=>{n[t]=e},f0=({values:n},t,e)=>{n[t]=e},p0=({values:n},t,e)=>{n[t]=e},m0=({values:n},t,e)=>{n[t]=e},DE=(n,t,e)=>{switch(n.type.unit){case kt.SECOND:return h0(n,t,e);case kt.MILLISECOND:return f0(n,t,e);case kt.MICROSECOND:return p0(n,t,e);case kt.NANOSECOND:return m0(n,t,e)}},LE=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},PE=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=ci.getVisitFn(i);if(Array.isArray(e))for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e[++a]);else for(let a=-1,o=r[t],l=r[t+1];o<l;)s(i,o++,e.get(++a))},NE=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=ci.getVisitFn(i);let{[t]:a,[t+1]:o}=r;const l=e instanceof Map?e.entries():Object.entries(e);for(const c of l)if(s(i,a,c),++a>=o)break},FE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),UE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),OE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),BE=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),VE=(n,t,e)=>{const i=n.type.children.map(s=>ci.getVisitFn(s.type)),r=e instanceof Map?OE(t,e):e instanceof Ae?UE(t,e):Array.isArray(e)?FE(t,e):BE(t,e);n.type.children.forEach((s,a)=>r(i[a],n.children[a],s,a))},zE=(n,t,e)=>{n.type.mode===En.Dense?g0(n,t,e):_0(n,t,e)},g0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ci.visit(r,n.valueOffsets[t],e)},_0=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];ci.visit(r,t,e)},HE=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},kE=(n,t,e)=>{n.type.unit===Gi.DAY_TIME?v0(n,t,e):y0(n,t,e)},v0=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},y0=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},S0=({values:n},t,e)=>{n[t]=e},x0=({values:n},t,e)=>{n[t]=e},b0=({values:n},t,e)=>{n[t]=e},M0=({values:n},t,e)=>{n[t]=e},GE=(n,t,e)=>{switch(n.type.unit){case kt.SECOND:return S0(n,t,e);case kt.MILLISECOND:return x0(n,t,e);case kt.MICROSECOND:return b0(n,t,e);case kt.NANOSECOND:return M0(n,t,e)}},WE=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=ci.getVisitFn(r);if(Array.isArray(e))for(let a=-1,o=t*i;++a<i;)s(r,o+a,e[a]);else for(let a=-1,o=t*i;++a<i;)s(r,o+a,e.get(a))};Gt.prototype.visitBool=Yt(wE);Gt.prototype.visitInt=Yt(pr);Gt.prototype.visitInt8=Yt(pr);Gt.prototype.visitInt16=Yt(pr);Gt.prototype.visitInt32=Yt(pr);Gt.prototype.visitInt64=Yt(pr);Gt.prototype.visitUint8=Yt(pr);Gt.prototype.visitUint16=Yt(pr);Gt.prototype.visitUint32=Yt(pr);Gt.prototype.visitUint64=Yt(pr);Gt.prototype.visitFloat=Yt(TE);Gt.prototype.visitFloat16=Yt(i0);Gt.prototype.visitFloat32=Yt(ud);Gt.prototype.visitFloat64=Yt(ud);Gt.prototype.visitUtf8=Yt(o0);Gt.prototype.visitLargeUtf8=Yt(o0);Gt.prototype.visitBinary=Yt(a0);Gt.prototype.visitLargeBinary=Yt(a0);Gt.prototype.visitFixedSizeBinary=Yt(IE);Gt.prototype.visitDate=Yt(RE);Gt.prototype.visitDateDay=Yt(r0);Gt.prototype.visitDateMillisecond=Yt(s0);Gt.prototype.visitTimestamp=Yt(CE);Gt.prototype.visitTimestampSecond=Yt(l0);Gt.prototype.visitTimestampMillisecond=Yt(c0);Gt.prototype.visitTimestampMicrosecond=Yt(u0);Gt.prototype.visitTimestampNanosecond=Yt(d0);Gt.prototype.visitTime=Yt(DE);Gt.prototype.visitTimeSecond=Yt(h0);Gt.prototype.visitTimeMillisecond=Yt(f0);Gt.prototype.visitTimeMicrosecond=Yt(p0);Gt.prototype.visitTimeNanosecond=Yt(m0);Gt.prototype.visitDecimal=Yt(LE);Gt.prototype.visitList=Yt(PE);Gt.prototype.visitStruct=Yt(VE);Gt.prototype.visitUnion=Yt(zE);Gt.prototype.visitDenseUnion=Yt(g0);Gt.prototype.visitSparseUnion=Yt(_0);Gt.prototype.visitDictionary=Yt(HE);Gt.prototype.visitInterval=Yt(kE);Gt.prototype.visitIntervalDayTime=Yt(v0);Gt.prototype.visitIntervalYearMonth=Yt(y0);Gt.prototype.visitDuration=Yt(GE);Gt.prototype.visitDurationSecond=Yt(S0);Gt.prototype.visitDurationMillisecond=Yt(x0);Gt.prototype.visitDurationMicrosecond=Yt(b0);Gt.prototype.visitDurationNanosecond=Yt(M0);Gt.prototype.visitFixedSizeList=Yt(WE);Gt.prototype.visitMap=Yt(NE);const ci=new Gt,pi=Symbol.for("parent"),Gs=Symbol.for("rowIndex");class dd{constructor(t,e){return this[pi]=t,this[Gs]=e,new Proxy(this,new XE)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Gs],e=this[pi],i=e.type.children,r={};for(let s=-1,a=i.length;++s<a;)r[i[s].name]=kn.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${Pa(t)}: ${Pa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new ZE(this[pi],this[Gs])}}class ZE{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,kn.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(dd.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[pi]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Gs]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class XE{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[pi].type.children.map(e=>e.name)}has(t,e){return t[pi].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[pi].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[pi].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=kn.visit(t[pi].children[i],t[Gs]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[pi].type.children.findIndex(s=>s.name===e);return r!==-1?(ci.visit(t[pi].children[r],t[Gs],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Bt extends de{}function Wt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const YE=(n,t)=>864e5*n[t],qE=(n,t)=>null,E0=(n,t,e)=>{if(e+1>=t.length)return null;const i=Ge(t[e]),r=Ge(t[e+1]);return n.subarray(i,r)},jE=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},A0=({values:n},t)=>YE(n,t),w0=({values:n},t)=>Ge(n[t]),Br=({stride:n,values:t},e)=>t[n*e],KE=({stride:n,values:t},e)=>e0(t[n*e]),T0=({values:n},t)=>n[t],JE=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),I0=({values:n,valueOffsets:t},e)=>E0(n,t,e),R0=({values:n,valueOffsets:t},e)=>{const i=E0(n,t,e);return i!==null?Ru(i):null},QE=({values:n},t)=>n[t],$E=({type:n,values:t},e)=>n.precision!==Mn.HALF?t[e]:e0(t[e]),tA=(n,t)=>n.type.unit===li.DAY?A0(n,t):w0(n,t),C0=({values:n},t)=>1e3*Ge(n[t]),D0=({values:n},t)=>Ge(n[t]),L0=({values:n},t)=>Cp(n[t],BigInt(1e3)),P0=({values:n},t)=>Cp(n[t],BigInt(1e6)),eA=(n,t)=>{switch(n.type.unit){case kt.SECOND:return C0(n,t);case kt.MILLISECOND:return D0(n,t);case kt.MICROSECOND:return L0(n,t);case kt.NANOSECOND:return P0(n,t)}},N0=({values:n},t)=>n[t],F0=({values:n},t)=>n[t],U0=({values:n},t)=>n[t],O0=({values:n},t)=>n[t],nA=(n,t)=>{switch(n.type.unit){case kt.SECOND:return N0(n,t);case kt.MILLISECOND:return F0(n,t);case kt.MICROSECOND:return U0(n,t);case kt.NANOSECOND:return O0(n,t)}},iA=({values:n,stride:t},e)=>cd.decimal(n.subarray(t*e,t*(e+1))),rA=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:a}=e,l=r[0].slice(s,a-s);return new Ae([l])},sA=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,a=i[0];return new hd(a.slice(r,s-r))},aA=(n,t)=>new dd(n,t),oA=(n,t)=>n.type.mode===En.Dense?B0(n,t):V0(n,t),B0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return kn.visit(i,n.valueOffsets[t])},V0=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return kn.visit(i,t)},lA=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},cA=(n,t)=>n.type.unit===Gi.DAY_TIME?z0(n,t):H0(n,t),z0=({values:n},t)=>n.subarray(2*t,2*(t+1)),H0=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},k0=({values:n},t)=>n[t],G0=({values:n},t)=>n[t],W0=({values:n},t)=>n[t],Z0=({values:n},t)=>n[t],uA=(n,t)=>{switch(n.type.unit){case kt.SECOND:return k0(n,t);case kt.MILLISECOND:return G0(n,t);case kt.MICROSECOND:return W0(n,t);case kt.NANOSECOND:return Z0(n,t)}},dA=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new Ae([s])};Bt.prototype.visitNull=Wt(qE);Bt.prototype.visitBool=Wt(jE);Bt.prototype.visitInt=Wt(QE);Bt.prototype.visitInt8=Wt(Br);Bt.prototype.visitInt16=Wt(Br);Bt.prototype.visitInt32=Wt(Br);Bt.prototype.visitInt64=Wt(T0);Bt.prototype.visitUint8=Wt(Br);Bt.prototype.visitUint16=Wt(Br);Bt.prototype.visitUint32=Wt(Br);Bt.prototype.visitUint64=Wt(T0);Bt.prototype.visitFloat=Wt($E);Bt.prototype.visitFloat16=Wt(KE);Bt.prototype.visitFloat32=Wt(Br);Bt.prototype.visitFloat64=Wt(Br);Bt.prototype.visitUtf8=Wt(R0);Bt.prototype.visitLargeUtf8=Wt(R0);Bt.prototype.visitBinary=Wt(I0);Bt.prototype.visitLargeBinary=Wt(I0);Bt.prototype.visitFixedSizeBinary=Wt(JE);Bt.prototype.visitDate=Wt(tA);Bt.prototype.visitDateDay=Wt(A0);Bt.prototype.visitDateMillisecond=Wt(w0);Bt.prototype.visitTimestamp=Wt(eA);Bt.prototype.visitTimestampSecond=Wt(C0);Bt.prototype.visitTimestampMillisecond=Wt(D0);Bt.prototype.visitTimestampMicrosecond=Wt(L0);Bt.prototype.visitTimestampNanosecond=Wt(P0);Bt.prototype.visitTime=Wt(nA);Bt.prototype.visitTimeSecond=Wt(N0);Bt.prototype.visitTimeMillisecond=Wt(F0);Bt.prototype.visitTimeMicrosecond=Wt(U0);Bt.prototype.visitTimeNanosecond=Wt(O0);Bt.prototype.visitDecimal=Wt(iA);Bt.prototype.visitList=Wt(rA);Bt.prototype.visitStruct=Wt(aA);Bt.prototype.visitUnion=Wt(oA);Bt.prototype.visitDenseUnion=Wt(B0);Bt.prototype.visitSparseUnion=Wt(V0);Bt.prototype.visitDictionary=Wt(lA);Bt.prototype.visitInterval=Wt(cA);Bt.prototype.visitIntervalDayTime=Wt(z0);Bt.prototype.visitIntervalYearMonth=Wt(H0);Bt.prototype.visitDuration=Wt(uA);Bt.prototype.visitDurationSecond=Wt(k0);Bt.prototype.visitDurationMillisecond=Wt(G0);Bt.prototype.visitDurationMicrosecond=Wt(W0);Bt.prototype.visitDurationNanosecond=Wt(Z0);Bt.prototype.visitFixedSizeList=Wt(dA);Bt.prototype.visitMap=Wt(sA);const kn=new Bt,Ps=Symbol.for("keys"),Ws=Symbol.for("vals"),Ns=Symbol.for("kKeysAsStrings"),Fu=Symbol.for("_kKeysAsStrings");class hd{constructor(t){return this[Ps]=new Ae([t.children[0]]).memoize(),this[Ws]=t.children[1],new Proxy(this,new fA)}get[Ns](){return this[Fu]||(this[Fu]=Array.from(this[Ps].toArray(),String))}[Symbol.iterator](){return new hA(this[Ps],this[Ws])}get size(){return this[Ps].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Ps],e=this[Ws],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=kn.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${Pa(t)}: ${Pa(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class hA{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),kn.visit(this.vals,t)]})}}class fA{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Ns]}has(t,e){return t[Ns].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Ns].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Ns].indexOf(e);if(i!==-1){const r=kn.visit(Reflect.get(t,Ws),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Ns].indexOf(e);return r!==-1?(ci.visit(Reflect.get(t,Ws),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(hd.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Ps]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Ws]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Fu]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let nf;function X0(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,a=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),a<0&&(a=(a%r+r)%r),a<s&&(nf=s,s=a,a=nf),a>r&&(a=r),i?i(n,s,a):[s,a]}const fd=(n,t)=>n<0?t+n:n,rf=n=>n!==n;function sa(n){if(typeof n!=="object"||n===null)return rf(n)?rf:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?dE(n,e):!1:n instanceof Map?mA(n):Array.isArray(n)?pA(n):n instanceof Ae?gA(n):_A(n,!0)}function pA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=sa(n[e]);return Dl(t)}function mA(n){let t=-1;const e=[];for(const i of n.values())e[++t]=sa(i);return Dl(e)}function gA(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=sa(n.get(e));return Dl(t)}function _A(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=sa(n[e[r]]);return Dl(i,e)}function Dl(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return vA(n,e);case Map:return sf(n,e,e.keys());case hd:case dd:case Object:case void 0:return sf(n,e,t||Object.keys(e))}return e instanceof Ae?yA(n,e):!1}}function vA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function yA(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function sf(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let a=0;const o=n.length;let l=s.next(),c=i.next(),d=r.next();for(;a<o&&!c.done&&!d.done&&!l.done&&!(c.value!==d.value||!n[a](l.value));++a,c=i.next(),d=r.next(),l=s.next());return a===o&&c.done&&d.done&&l.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function Y0(n,t,e,i){return(e&1<<i)!==0}function SA(n,t,e,i){return(e&1<<i)>>i}function fl(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):pl(new pd(e,n,t,null,Y0)).subarray(0,i)),r}return e}function pl(n){const t=[];let e=0,i=0,r=0;for(const a of n)a&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class pd{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Uu(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const a of new pd(n,t,e-t,n,SA))s+=a;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Uu(n,t,r)+Uu(n,i,e)+xA(n,r>>3,i-r>>3)}function xA(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=e===void 0?n.byteLength:r+e;for(;a-r>=4;)i+=Ec(s.getUint32(r)),r+=4;for(;a-r>=2;)i+=Ec(s.getUint16(r)),r+=2;for(;a-r>=1;)i+=Ec(s.getUint8(r)),r+=1;return i}function Ec(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const bA=-1;class Ce{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){const{type:t}=this;return Dt.isSparseUnion(t)?this.children.some(e=>e.nullable):Dt.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((a,o)=>a+o.byteLength,t)}get nullCount(){if(Dt.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=bA&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Uu(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,a=[],o){this.type=t,this.children=a,this.dictionary=o,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let l;s instanceof Ce?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=nr(t),s&&((l=s[0])&&(this.valueOffsets=l),(l=s[1])&&(this.values=l),(l=s[2])&&(this.nullBitmap=l),(l=s[3])&&(this.typeIds=l)))}getValid(t){const{type:e}=this;if(Dt.isUnion(e)){const i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===En.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){const i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i;const{type:r}=this;if(Dt.isUnion(r)){const s=r,a=this.children[s.typeIdToChildIndex[this.typeIds[t]]],o=s.mode===En.Dense?this.valueOffsets[t]:t;i=a.getValid(o),a.setValid(o,e)}else{let{nullBitmap:s}=this;const{offset:a,length:o}=this,l=a+t,c=1<<l%8,d=l>>3;(!s||s.byteLength<=d)&&(s=new Uint8Array((a+o+63&-64)>>3).fill(255),this.nullCount>0?(s.set(fl(a,o,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));const p=s[d];i=(p&c)!==0,s[d]=e?p|c:p&~c}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,a=this.children){return new Ce(t,e,i,r,s,a,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,a=+(this._nullCount===0)-1,o=r===16?i:1,l=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,a,l,s.length===0||this.valueOffsets?s:this._sliceChildren(s,o*t,o*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===P.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(fl(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[er.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:a}=this;return(s=a[er.TYPE])&&(a[er.TYPE]=s.subarray(t,t+e)),(s=a[er.OFFSET])&&(a[er.OFFSET]=s.subarray(t,t+e+1))||(s=a[er.DATA])&&(a[er.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),a}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Ce.prototype.children=Object.freeze([]);class wa extends de{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Ce(e,i,r,r)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length>>3,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.data),s=pe(t.nullBitmap),a=pa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,r,s])}visitLargeUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.data),s=pe(t.nullBitmap),a=Zh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.data),s=pe(t.nullBitmap),a=pa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,r,s])}visitLargeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.data),s=pe(t.nullBitmap),a=Zh(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=pe(t.nullBitmap),a=pa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=pe(t.nullBitmap),{length:a=r.reduce((l,{length:c})=>Math.max(l,c),0),nullCount:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Pe(e.ArrayType,t.typeIds),{["length"]:a=s.length,["nullCount"]:o=-1}=t;if(Dt.isSparseUnion(e))return new Ce(e,i,a,o,[void 0,void 0,void 0,s],r);const l=pa(t.valueOffsets);return new Ce(e,i,a,o,[l,void 0,void 0,s],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.indices.ArrayType,t.data),{["dictionary"]:a=new Ae([new wa().visit({type:e.dictionary})])}=t,{["length"]:o=s.length,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[void 0,s,r],[],a)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitDuration(t){const{["type"]:e,["offset"]:i=0}=t,r=pe(t.nullBitmap),s=Pe(e.ArrayType,t.data),{["length"]:a=s.length,["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new wa().visit({type:e.valueType})}=t,s=pe(t.nullBitmap),{["length"]:a=r.length/nr(e),["nullCount"]:o=t.nullBitmap?-1:0}=t;return new Ce(e,i,a,o,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new wa().visit({type:e.childType})}=t,s=pe(t.nullBitmap),a=pa(t.valueOffsets),{["length"]:o=a.length-1,["nullCount"]:l=t.nullBitmap?-1:0}=t;return new Ce(e,i,o,l,[a,void 0,s],[r])}}const MA=new wa;function he(n){return MA.visit(n)}class af{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function EA(n){return n.some(t=>t.nullable)}function q0(n){return n.reduce((t,e)=>t+e.nullCount,0)}function j0(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function K0(n,t,e,i){const r=[];for(let s=-1,a=n.length;++s<a;){const o=n[s],l=t[s],{length:c}=o;if(l>=i)break;if(e>=l+c)continue;if(l>=e&&l+c<=i){r.push(o);continue}const d=Math.max(0,e-l),p=Math.min(i-l,c);r.push(o.slice(d,p-d))}return r.length===0&&r.push(n[0].slice(0,0)),r}function md(n,t,e,i){let r=0,s=0,a=t.length-1;do{if(r>=a-1)return e<t[a]?i(n,r,e-t[r]):null;s=r+Math.trunc((a-r)*.5),e<t[s]?a=s:r=s}while(r<a)}function gd(n,t){return n.getValid(t)}function ml(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return md(i,this._offsets,e,t)}}function J0(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const a=md(s,this._offsets,i,e);return t=void 0,a}}function Q0(n){let t;function e(i,r,s){let a=s,o=0,l=0;for(let c=r-1,d=i.length;++c<d;){const p=i[c];if(~(o=n(p,t,a)))return l+o;a=0,l+=p.length}return-1}return function(i,r){t=i;const s=this.data,a=typeof r!="number"?e(s,0,0):md(s,this._offsets,r,e);return t=void 0,a}}class Vt extends de{}function AA(n,t){return t===null&&n.length>0?0:-1}function wA(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new pd(e,n.offset+(t||0),n.length,e,Y0)){if(!r)return i;++i}return-1}function Kt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case P.Union:break;case P.Dictionary:break;default:return wA(n,e)}const i=kn.getVisitFn(n),r=sa(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}function $0(n,t,e){const i=kn.getVisitFn(n),r=sa(t);for(let s=(e||0)-1,a=n.length;++s<a;)if(r(i(n,s)))return s;return-1}Vt.prototype.visitNull=AA;Vt.prototype.visitBool=Kt;Vt.prototype.visitInt=Kt;Vt.prototype.visitInt8=Kt;Vt.prototype.visitInt16=Kt;Vt.prototype.visitInt32=Kt;Vt.prototype.visitInt64=Kt;Vt.prototype.visitUint8=Kt;Vt.prototype.visitUint16=Kt;Vt.prototype.visitUint32=Kt;Vt.prototype.visitUint64=Kt;Vt.prototype.visitFloat=Kt;Vt.prototype.visitFloat16=Kt;Vt.prototype.visitFloat32=Kt;Vt.prototype.visitFloat64=Kt;Vt.prototype.visitUtf8=Kt;Vt.prototype.visitLargeUtf8=Kt;Vt.prototype.visitBinary=Kt;Vt.prototype.visitLargeBinary=Kt;Vt.prototype.visitFixedSizeBinary=Kt;Vt.prototype.visitDate=Kt;Vt.prototype.visitDateDay=Kt;Vt.prototype.visitDateMillisecond=Kt;Vt.prototype.visitTimestamp=Kt;Vt.prototype.visitTimestampSecond=Kt;Vt.prototype.visitTimestampMillisecond=Kt;Vt.prototype.visitTimestampMicrosecond=Kt;Vt.prototype.visitTimestampNanosecond=Kt;Vt.prototype.visitTime=Kt;Vt.prototype.visitTimeSecond=Kt;Vt.prototype.visitTimeMillisecond=Kt;Vt.prototype.visitTimeMicrosecond=Kt;Vt.prototype.visitTimeNanosecond=Kt;Vt.prototype.visitDecimal=Kt;Vt.prototype.visitList=Kt;Vt.prototype.visitStruct=Kt;Vt.prototype.visitUnion=Kt;Vt.prototype.visitDenseUnion=$0;Vt.prototype.visitSparseUnion=$0;Vt.prototype.visitDictionary=Kt;Vt.prototype.visitInterval=Kt;Vt.prototype.visitIntervalDayTime=Kt;Vt.prototype.visitIntervalYearMonth=Kt;Vt.prototype.visitDuration=Kt;Vt.prototype.visitDurationSecond=Kt;Vt.prototype.visitDurationMillisecond=Kt;Vt.prototype.visitDurationMicrosecond=Kt;Vt.prototype.visitDurationNanosecond=Kt;Vt.prototype.visitFixedSizeList=Kt;Vt.prototype.visitMap=Kt;const gl=new Vt;class zt extends de{}function Zt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(Dt.isInt(t)&&t.bitWidth!==64||Dt.isTime(t)&&t.bitWidth!==64||Dt.isFloat(t)&&t.precision!==Mn.HALF))return new af(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new af(n.data.length,i=>{const s=n.data[i].length,a=n.slice(e,e+s);return e+=s,new TA(a)})}class TA{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}zt.prototype.visitNull=Zt;zt.prototype.visitBool=Zt;zt.prototype.visitInt=Zt;zt.prototype.visitInt8=Zt;zt.prototype.visitInt16=Zt;zt.prototype.visitInt32=Zt;zt.prototype.visitInt64=Zt;zt.prototype.visitUint8=Zt;zt.prototype.visitUint16=Zt;zt.prototype.visitUint32=Zt;zt.prototype.visitUint64=Zt;zt.prototype.visitFloat=Zt;zt.prototype.visitFloat16=Zt;zt.prototype.visitFloat32=Zt;zt.prototype.visitFloat64=Zt;zt.prototype.visitUtf8=Zt;zt.prototype.visitLargeUtf8=Zt;zt.prototype.visitBinary=Zt;zt.prototype.visitLargeBinary=Zt;zt.prototype.visitFixedSizeBinary=Zt;zt.prototype.visitDate=Zt;zt.prototype.visitDateDay=Zt;zt.prototype.visitDateMillisecond=Zt;zt.prototype.visitTimestamp=Zt;zt.prototype.visitTimestampSecond=Zt;zt.prototype.visitTimestampMillisecond=Zt;zt.prototype.visitTimestampMicrosecond=Zt;zt.prototype.visitTimestampNanosecond=Zt;zt.prototype.visitTime=Zt;zt.prototype.visitTimeSecond=Zt;zt.prototype.visitTimeMillisecond=Zt;zt.prototype.visitTimeMicrosecond=Zt;zt.prototype.visitTimeNanosecond=Zt;zt.prototype.visitDecimal=Zt;zt.prototype.visitList=Zt;zt.prototype.visitStruct=Zt;zt.prototype.visitUnion=Zt;zt.prototype.visitDenseUnion=Zt;zt.prototype.visitSparseUnion=Zt;zt.prototype.visitDictionary=Zt;zt.prototype.visitInterval=Zt;zt.prototype.visitIntervalDayTime=Zt;zt.prototype.visitIntervalYearMonth=Zt;zt.prototype.visitDuration=Zt;zt.prototype.visitDurationSecond=Zt;zt.prototype.visitDurationMillisecond=Zt;zt.prototype.visitDurationMicrosecond=Zt;zt.prototype.visitDurationNanosecond=Zt;zt.prototype.visitFixedSizeList=Zt;zt.prototype.visitMap=Zt;const _d=new zt;var tm;const em={},nm={};class Ae{constructor(t){var e,i,r;const s=t[0]instanceof Ae?t.flatMap(o=>o.data):t;if(s.length===0||s.some(o=>!(o instanceof Ce)))throw new TypeError("Vector constructor expects an Array of Data instances.");const a=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:o,set:l,indexOf:c}=em[a.typeId],d=s[0];this.isValid=p=>gd(d,p),this.get=p=>o(d,p),this.set=(p,f)=>l(d,p,f),this.indexOf=p=>c(d,p),this._offsets=[0,d.length];break}default:Object.setPrototypeOf(this,nm[a.typeId]),this._offsets=j0(s);break}this.data=s,this.type=a,this.stride=nr(a),this.numChildren=(r=(i=a.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return EA(this.data)}get nullCount(){return q0(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${P[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(fd(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return _d.visit(this)}concat(...t){return new Ae(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new Ae(X0(this,t,e,({data:i,_offsets:r},s,a)=>K0(i,r,s,a)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case P.Int:case P.Float:case P.Decimal:case P.Time:case P.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((a,{values:o,length:l})=>(a.array.set(o.subarray(0,l*r),a.offset),a.offset+=l*r,a),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new Ae(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Dt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Dt.isDictionary(this.type)){const t=new _l(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Ae(e)}return new _l(this)}unmemoize(){if(Dt.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new Ae(e)}return this}}tm=Symbol.toStringTag;Ae[tm]=(n=>{n.type=Dt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(P).map(e=>P[e]).filter(e=>typeof e=="number"&&e!==P.NONE);for(const e of t){const i=kn.getVisitFnByTypeId(e),r=ci.getVisitFnByTypeId(e),s=gl.getVisitFnByTypeId(e);em[e]={get:i,set:r,indexOf:s},nm[e]=Object.create(n,{isValid:{value:ml(gd)},get:{value:ml(kn.getVisitFnByTypeId(e))},set:{value:J0(ci.getVisitFnByTypeId(e))},indexOf:{value:Q0(gl.getVisitFnByTypeId(e))}})}return"Vector"})(Ae.prototype);class _l extends Ae{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(a){const o=s[a];if(o!==void 0)return o;const l=e.call(this,a);return s[a]=l,l}}),Object.defineProperty(this,"set",{value(a,o){i.call(this,a,o),s[a]=o}}),Object.defineProperty(this,"slice",{value:(a,o)=>new _l(r.call(this,a,o))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new Ae(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class Ou{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}}class Xn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Xn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Te),(e||new Xn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):en.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ei).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Ou).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new Ou).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new ln).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,en.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class we{constructor(t=[],e,i,r=en.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=Bu(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new we(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new we(e,this.metadata)}assign(...t){const e=t[0]instanceof we?t[0]:Array.isArray(t[0])?new we(t[0]):new we(t),i=[...this.fields],r=Eo(Eo(new Map,this.metadata),e.metadata),s=e.fields.filter(o=>{const l=i.findIndex(c=>c.name===o.name);return~l?(i[l]=o.clone({metadata:Eo(Eo(new Map,i[l].metadata),o.metadata)}))&&!1:!0}),a=Bu(s,new Map);return new we([...i,...s],r,new Map([...this.dictionaries,...a]))}}we.prototype.fields=null;we.prototype.metadata=null;we.prototype.dictionaries=null;class Ye{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Ye(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Ye.new(e,i,r,s)}}Ye.prototype.type=null;Ye.prototype.name=null;Ye.prototype.nullable=null;Ye.prototype.metadata=null;function Eo(n,t){return new Map([...n||new Map,...t||new Map])}function Bu(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Dt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Bu(s.children,t)}return t}var IA=wp,RA=Ks;class Oa{static decode(t){t=new RA(pe(t));const e=Xn.getRootAsFooter(t),i=we.decode(e.schema(),new Map,e.version());return new CA(i,e)}static encode(t){const e=new IA,i=we.encode(e,t.schema);Xn.startRecordBatchesVector(e,t.numRecordBatches);for(const a of[...t.recordBatches()].slice().reverse())Fr.encode(e,a);const r=e.endVector();Xn.startDictionariesVector(e,t.numDictionaries);for(const a of[...t.dictionaryBatches()].slice().reverse())Fr.encode(e,a);const s=e.endVector();return Xn.startFooter(e),Xn.addSchema(e,i),Xn.addVersion(e,en.V5),Xn.addRecordBatches(e,r),Xn.addDictionaries(e,s),Xn.finishFooterBuffer(e,Xn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=en.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class CA extends Oa{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Fr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Fr.decode(e)}return null}}class Fr{static decode(t){return new Fr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return Ou.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=Ge(i),this.bodyLength=Ge(e)}}const qe=Object.freeze({done:!0,value:void 0});class of{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class vd{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class DA extends vd{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Jt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(qe);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return ei.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return ei.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Jt(this,void 0,void 0,function*(){return yield this.abort(t),qe})}return(t){return Jt(this,void 0,void 0,function*(){return yield this.close(),qe})}read(t){return Jt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Jt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(qe)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Vo extends DA{write(t){if((t=pe(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Ru(this.toUint8Array(!0)):this.toUint8Array(!1).then(Ru)}toUint8Array(t=!1){return t?ki(this._values)[0]:Jt(this,void 0,void 0,function*(){var e,i,r,s;const a=[];let o=0;try{for(var l=!0,c=es(this),d;d=yield c.next(),e=d.done,!e;l=!0){s=d.value,l=!1;const p=s;a.push(p),o+=p.byteLength}}catch(p){i={error:p}}finally{try{!l&&!e&&(r=c.return)&&(yield r.call(c))}finally{if(i)throw i.error}}return ki(a,o)[0]})}}class vl{constructor(t){t&&(this.source=new LA(ei.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class $s{constructor(t){t instanceof $s?this.source=t.source:t instanceof Vo?this.source=new Yr(ei.fromAsyncIterable(t)):bp(t)?this.source=new Yr(ei.fromNodeStream(t)):od(t)?this.source=new Yr(ei.fromDOMStream(t)):xp(t)?this.source=new Yr(ei.fromDOMStream(t.body)):Wa(t)?this.source=new Yr(ei.fromIterable(t)):is(t)?this.source=new Yr(ei.fromAsyncIterable(t)):ra(t)&&(this.source=new Yr(ei.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class LA{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||qe)}return(t){return Object.create(this.source.return&&this.source.return(t)||qe)}}class Yr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Jt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Jt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Jt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return Jt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return Jt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Jt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||qe;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class lf extends vl{constructor(t,e){super(),this.position=0,this.buffer=pe(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class yl extends $s{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Jt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Jt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Jt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Jt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,a=0,o=0;const l=Math.min(i,s+Math.min(i-s,t)),c=new Uint8Array(Math.max(0,(this.position=l)-s));for(;(s+=o)<l&&(a+=o)<c.byteLength;)({bytesRead:o}=yield e.read(c,a,c.byteLength-a,s));return c}return null})}readAt(t,e){return Jt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),a=new Uint8Array(s-t);return(yield i.read(a,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Jt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Jt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Jt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const PA=65536;function Os(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const ta=8,yd=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class im{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?PA:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Os(this.buffer[1])} ${Os(this.buffer[0])}`}}class De extends im{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return De.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return De.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new De(e);for(let s=0;s<i;){const a=ta<i-s?ta:i-s,o=new De(new Uint32Array([Number.parseInt(t.slice(s,s+a),10),0])),l=new De(new Uint32Array([yd[a],0]));r.times(l),r.plus(o),s+=a}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)De.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new De(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new De(new Uint32Array(t.buffer)).plus(e)}}class On extends im{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return On.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return On.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new On(e);for(let a=i?1:0;a<r;){const o=ta<r-a?ta:r-a,l=new On(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0])),c=new On(new Uint32Array([yd[o],0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)On.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new On(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new On(new Uint32Array(t.buffer)).plus(e)}}class Ai{constructor(t){this.buffer=t}high(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new On(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new De(new Uint32Array([this.buffer[3],0])),i=new De(new Uint32Array([this.buffer[2],0])),r=new De(new Uint32Array([this.buffer[1],0])),s=new De(new Uint32Array([this.buffer[0],0])),a=new De(new Uint32Array([t.buffer[3],0])),o=new De(new Uint32Array([t.buffer[2],0])),l=new De(new Uint32Array([t.buffer[1],0])),c=new De(new Uint32Array([t.buffer[0],0]));let d=De.multiply(s,c);this.buffer[0]=d.low();const p=new De(new Uint32Array([d.high(),0]));return d=De.multiply(r,c),p.plus(d),d=De.multiply(s,l),p.plus(d),this.buffer[1]=p.low(),this.buffer[3]=p.lessThan(d)?1:0,this.buffer[2]=p.high(),new De(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(De.multiply(i,c)).plus(De.multiply(r,l)).plus(De.multiply(s,o)),this.buffer[3]+=De.multiply(e,c).plus(De.multiply(i,l)).plus(De.multiply(r,o)).plus(De.multiply(s,a)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Os(this.buffer[3])} ${Os(this.buffer[2])} ${Os(this.buffer[1])} ${Os(this.buffer[0])}`}static multiply(t,e){return new Ai(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Ai(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return Ai.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return Ai.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new Ai(e);for(let a=i?1:0;a<r;){const o=ta<r-a?ta:r-a,l=new Ai(new Uint32Array([Number.parseInt(t.slice(a,a+o),10),0,0,0])),c=new Ai(new Uint32Array([yd[o],0,0,0]));s.times(c),s.plus(l),a+=o}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)Ai.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class rm extends de{constructor(t,e,i,r,s=en.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof Ye?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return he({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<en.V5&&this.readNullBitmap(t,i),t.mode===En.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return he({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class NA extends rm{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):pl(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Pe(Uint8Array,Pe(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Pe(Uint8Array,Pe(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Dt.isTimestamp(t)||(Dt.isInt(t)||Dt.isTime(t))&&t.bitWidth===64||Dt.isDuration(t)||Dt.isDate(t)&&t.unit===li.MILLISECOND?Pe(Uint8Array,On.convertArray(i[e])):Dt.isDecimal(t)?Pe(Uint8Array,Ai.convertArray(i[e])):Dt.isBinary(t)||Dt.isLargeBinary(t)||Dt.isFixedSizeBinary(t)?FA(i[e]):Dt.isBool(t)?pl(i[e]):Dt.isUtf8(t)||Dt.isLargeUtf8(t)?ad(i[e].join("")):Pe(Uint8Array,Pe(t.ArrayType,i[e].map(r=>+r)))}}function FA(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Ht extends de{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function Fn(n,t){return t instanceof n.constructor}function as(n,t){return n===t||Fn(n,t)}function mr(n,t){return n===t||Fn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Ll(n,t){return n===t||Fn(n,t)&&n.precision===t.precision}function UA(n,t){return n===t||Fn(n,t)&&n.byteWidth===t.byteWidth}function Sd(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function Za(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Xa(n,t){return n===t||Fn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function OA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function BA(n,t){return n===t||Fn(n,t)&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function xd(n,t){return n===t||Fn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Ur.compareManyFields(n.children,t.children)}function VA(n,t){return n===t||Fn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Ur.visit(n.indices,t.indices)&&Ur.visit(n.dictionary,t.dictionary)}function bd(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function Ya(n,t){return n===t||Fn(n,t)&&n.unit===t.unit}function zA(n,t){return n===t||Fn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}function HA(n,t){return n===t||Fn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Ur.compareManyFields(n.children,t.children)}Ht.prototype.visitNull=as;Ht.prototype.visitBool=as;Ht.prototype.visitInt=mr;Ht.prototype.visitInt8=mr;Ht.prototype.visitInt16=mr;Ht.prototype.visitInt32=mr;Ht.prototype.visitInt64=mr;Ht.prototype.visitUint8=mr;Ht.prototype.visitUint16=mr;Ht.prototype.visitUint32=mr;Ht.prototype.visitUint64=mr;Ht.prototype.visitFloat=Ll;Ht.prototype.visitFloat16=Ll;Ht.prototype.visitFloat32=Ll;Ht.prototype.visitFloat64=Ll;Ht.prototype.visitUtf8=as;Ht.prototype.visitLargeUtf8=as;Ht.prototype.visitBinary=as;Ht.prototype.visitLargeBinary=as;Ht.prototype.visitFixedSizeBinary=UA;Ht.prototype.visitDate=Sd;Ht.prototype.visitDateDay=Sd;Ht.prototype.visitDateMillisecond=Sd;Ht.prototype.visitTimestamp=Za;Ht.prototype.visitTimestampSecond=Za;Ht.prototype.visitTimestampMillisecond=Za;Ht.prototype.visitTimestampMicrosecond=Za;Ht.prototype.visitTimestampNanosecond=Za;Ht.prototype.visitTime=Xa;Ht.prototype.visitTimeSecond=Xa;Ht.prototype.visitTimeMillisecond=Xa;Ht.prototype.visitTimeMicrosecond=Xa;Ht.prototype.visitTimeNanosecond=Xa;Ht.prototype.visitDecimal=as;Ht.prototype.visitList=OA;Ht.prototype.visitStruct=BA;Ht.prototype.visitUnion=xd;Ht.prototype.visitDenseUnion=xd;Ht.prototype.visitSparseUnion=xd;Ht.prototype.visitDictionary=VA;Ht.prototype.visitInterval=bd;Ht.prototype.visitIntervalDayTime=bd;Ht.prototype.visitIntervalYearMonth=bd;Ht.prototype.visitDuration=Ya;Ht.prototype.visitDurationSecond=Ya;Ht.prototype.visitDurationMillisecond=Ya;Ht.prototype.visitDurationMicrosecond=Ya;Ht.prototype.visitDurationNanosecond=Ya;Ht.prototype.visitFixedSizeList=zA;Ht.prototype.visitMap=HA;const Ur=new Ht;function Vu(n,t){return Ur.compareSchemas(n,t)}function Ac(n,t){return kA(n,t.map(e=>e.data.concat()))}function kA(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((p,f)=>Math.max(p,f.length),0)};let s=0,a=0,o=-1;const l=t.length;let c,d=[];for(;r.numBatches-- >0;){for(a=Number.POSITIVE_INFINITY,o=-1;++o<l;)d[o]=c=t[o].shift(),a=Math.min(a,c?c.length:a);Number.isFinite(a)&&(d=GA(e,a,d,t,r),a>0&&(i[s++]=he({type:new Dn(e),length:a,nullCount:0,children:d.slice()})))}return[n=n.assign(e),i.map(p=>new Vn(n,p))]}function GA(n,t,e,i,r){var s;const a=(t+63&-64)>>3;for(let o=-1,l=i.length;++o<l;){const c=e[o],d=c?.length;if(d>=t)d===t?e[o]=c:(e[o]=c.slice(0,t),r.numBatches=Math.max(r.numBatches,i[o].unshift(c.slice(t,d-t))));else{const p=n[o];n[o]=p.clone({nullable:!0}),e[o]=(s=c?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:he({type:p.type,length:t,nullCount:t,nullBitmap:new Uint8Array(a)})}}return e}var sm;class Cn{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new we([]),this._offsets=[0],this;let r,s;t[0]instanceof we&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());const a=l=>{if(l){if(l instanceof Vn)return[l];if(l instanceof Cn)return l.batches;if(l instanceof Ce){if(l.type instanceof Dn)return[new Vn(new we(l.type.children),l)]}else{if(Array.isArray(l))return l.flatMap(c=>a(c));if(typeof l[Symbol.iterator]=="function")return[...l].flatMap(c=>a(c));if(typeof l=="object"){const c=Object.keys(l),d=c.map(_=>new Ae([l[_]])),p=r??new we(c.map((_,v)=>new Ye(String(_),d[v].type,d[v].nullable))),[,f]=Ac(p,d);return f.length===0?[new Vn(l)]:f}}}return[]},o=t.flatMap(l=>a(l));if(r=(i=r??((e=o[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new we([]),!(r instanceof we))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const l of o){if(!(l instanceof Vn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Vu(r,l.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=o,this._offsets=s??j0(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=q0(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(fd(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?_d.visit(new Ae(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Cn(e,i.map(r=>new Vn(e,r)))}slice(t,e){const i=this.schema;[t,e]=X0({length:this.numRows},t,e);const r=K0(this.data,this._offsets,t,e);return new Cn(i,r.map(s=>new Vn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=he({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new Ae(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new Ae([he({type:new Nr,length:this.numRows})]));const s=i.fields.slice(),a=s[t].clone({type:e.type}),o=this.schema.fields.map((l,c)=>this.getChildAt(c));[s[t],o[t]]=[a,e],[i,r]=Ac(i,o)}return new Cn(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Cn(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((o,l,c)=>{const[d,p]=o,f=e.findIndex(_=>_.name===l.name);return~f?p[f]=c:d.push(c),o},[[],[]]),s=this.schema.assign(t.schema),a=[...e.map((o,l)=>[l,r[l]]).map(([o,l])=>l===void 0?this.getChildAt(o):t.getChildAt(l)),...i.map(o=>t.getChildAt(o))].filter(Boolean);return new Cn(...Ac(s,a))}}sm=Symbol.toStringTag;Cn[sm]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=ml(gd),n.get=ml(kn.getVisitFn(P.Struct)),n.set=J0(ci.getVisitFn(P.Struct)),n.indexOf=Q0(gl.getVisitFn(P.Struct)),"Table"))(Cn.prototype);var am;let Vn=class Aa{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof we))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=he({nullCount:0,type:new Dn(this.schema.fields),children:this.schema.fields.map(e=>he({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Ce))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=cf(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((l,c,d)=>(l.children[d]=e[c],l.length=Math.max(l.length,e[c].length),l.fields[d]=Ye.new({name:c,type:e[c].type,nullable:!0}),l),{length:0,fields:new Array,children:new Array}),a=new we(i),o=he({type:new Dn(i),length:s,children:r,nullCount:0});[this.schema,this.data]=cf(a,o.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=om(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return kn.visit(this.data,t)}at(t){return this.get(fd(t,this.numRows))}set(t,e){return ci.visit(this.data,t,e)}indexOf(t,e){return gl.visit(this.data,t,e)}[Symbol.iterator](){return _d.visit(new Ae([this.data]))}toArray(){return[...this]}concat(...t){return new Cn(this.schema,[this,...t])}slice(t,e){const[i]=new Ae([this.data]).slice(t,e).data;return new Aa(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new Ae([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new Ae([he({type:new Nr,length:this.numRows})]));const s=i.fields.slice(),a=r.children.slice(),o=s[t].clone({type:e.type});[s[t],a[t]]=[o,e.data[0]],i=new we(s,new Map(this.schema.metadata)),r=he({type:new Dn(s),children:a})}return new Aa(i,r)}select(t){const e=this.schema.select(t),i=new Dn(e.fields),r=[];for(const s of t){const a=this.schema.fields.findIndex(o=>o.name===s);~a&&(r[a]=this.data.children[a])}return new Aa(e,he({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=he({type:new Dn(e.fields),length:this.numRows,children:i});return new Aa(e,r)}};am=Symbol.toStringTag;Vn[am]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Vn.prototype);function cf(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],a=(e+63&-64)>>3;for(const[o,l]of n.fields.entries()){const c=t[o];(!c||c.length!==e)&&(r[o]=l.clone({nullable:!0}),s[o]=(i=c?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:he({type:l.type,length:e,nullCount:e,nullBitmap:new Uint8Array(a)}))}return[n.assign(r),he({type:new Dn(r),length:e,children:s})]}function om(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,a=n.length;++s<a;){const{type:o}=n[s],l=t[s];for(const c of[l,...((r=l?.dictionary)===null||r===void 0?void 0:r.data)||[]])om(o.children,c?.children,e);if(Dt.isDictionary(o)){const{id:c}=o;if(!e.has(c))l?.dictionary&&e.set(c,l.dictionary);else if(e.get(c)!==l.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}class Md extends Vn{constructor(t){const e=t.fields.map(r=>he({type:r.type})),i=he({type:new Dn(t.fields),nullCount:0,children:e});super(t,i)}}let wr=class Mi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new Mi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Te),(e||new Mi).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):en.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):be.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new ln).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,en.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,be.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,a){return Mi.startMessage(t),Mi.addVersion(t,e),Mi.addHeaderType(t,i),Mi.addHeader(t,r),Mi.addBodyLength(t,s),Mi.addCustomMetadata(t,a),Mi.endMessage(t)}};class WA extends de{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return $h.startNull(e),$h.endNull(e)}visitInt(t,e){return Yn.startInt(e),Yn.addBitWidth(e,t.bitWidth),Yn.addIsSigned(e,t.isSigned),Yn.endInt(e)}visitFloat(t,e){return Ci.startFloatingPoint(e),Ci.addPrecision(e,t.precision),Ci.endFloatingPoint(e)}visitBinary(t,e){return qh.startBinary(e),qh.endBinary(e)}visitLargeBinary(t,e){return Kh.startLargeBinary(e),Kh.endLargeBinary(e)}visitBool(t,e){return jh.startBool(e),jh.endBool(e)}visitUtf8(t,e){return tf.startUtf8(e),tf.endUtf8(e)}visitLargeUtf8(t,e){return Jh.startLargeUtf8(e),Jh.endLargeUtf8(e)}visitDecimal(t,e){return Ts.startDecimal(e),Ts.addScale(e,t.scale),Ts.addPrecision(e,t.precision),Ts.addBitWidth(e,t.bitWidth),Ts.endDecimal(e)}visitDate(t,e){return Po.startDate(e),Po.addUnit(e,t.unit),Po.endDate(e)}visitTime(t,e){return ni.startTime(e),ni.addUnit(e,t.unit),ni.addBitWidth(e,t.bitWidth),ni.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return ii.startTimestamp(e),ii.addUnit(e,t.unit),i!==void 0&&ii.addTimezone(e,i),ii.endTimestamp(e)}visitInterval(t,e){return Di.startInterval(e),Di.addUnit(e,t.unit),Di.endInterval(e)}visitDuration(t,e){return No.startDuration(e),No.addUnit(e,t.unit),No.endDuration(e)}visitList(t,e){return Qh.startList(e),Qh.endList(e)}visitStruct(t,e){return ts.startStruct_(e),ts.endStruct_(e)}visitUnion(t,e){Bn.startTypeIdsVector(e,t.typeIds.length);const i=Bn.createTypeIdsVector(e,t.typeIds);return Bn.startUnion(e),Bn.addMode(e,t.mode),Bn.addTypeIds(e,i),Bn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return rr.startDictionaryEncoding(e),rr.addId(e,BigInt(t.id)),rr.addIsOrdered(e,t.isOrdered),i!==void 0&&rr.addIndexType(e,i),rr.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Fo.startFixedSizeBinary(e),Fo.addByteWidth(e,t.byteWidth),Fo.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Uo.startFixedSizeList(e),Uo.addListSize(e,t.listSize),Uo.endFixedSizeList(e)}visitMap(t,e){return Oo.startMap(e),Oo.addKeysSorted(e,t.keysSorted),Oo.endMap(e)}}const wc=new WA;function ZA(n,t=new Map){return new we(YA(n,t),zo(n.metadata),t)}function lm(n){return new Jn(n.count,cm(n.columns),um(n.columns))}function XA(n){return new Wi(lm(n.data),n.id,n.isDelta)}function YA(n,t){return(n.fields||[]).filter(Boolean).map(e=>Ye.fromJSON(e,t))}function uf(n,t){return(n.children||[]).filter(Boolean).map(e=>Ye.fromJSON(e,t))}function cm(n){return(n||[]).reduce((t,e)=>[...t,new Or(e.count,qA(e.VALIDITY)),...cm(e.children)],[])}function um(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Ui(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new Ui(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new Ui(t.length,r.OFFSET.length)),r.DATA&&t.push(new Ui(t.length,r.DATA.length)),t=um(r.children,t)}return t}function qA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function jA(n,t){let e,i,r,s,a,o;return!t||!(s=n.dictionary)?(a=hf(n,uf(n,t)),r=new Ye(n.name,a,n.nullable,zo(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?df(i):new Ua,o=new Qs(t.get(e),i,e,s.isOrdered),r=new Ye(n.name,o,n.nullable,zo(n.metadata))):(i=(i=s.indexType)?df(i):new Ua,t.set(e,a=hf(n,uf(n,t))),o=new Qs(a,i,e,s.isOrdered),r=new Ye(n.name,o,n.nullable,zo(n.metadata))),r||null}function zo(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function df(n){return new rs(n.isSigned,n.bitWidth)}function hf(n,t){const e=n.type.name;switch(e){case"NONE":return new Nr;case"null":return new Nr;case"binary":return new Jo;case"largebinary":return new Qo;case"utf8":return new $o;case"largeutf8":return new tl;case"bool":return new el;case"list":return new ll((t||[])[0]);case"struct":return new Dn(t||[]);case"struct_":return new Dn(t||[])}switch(e){case"int":{const i=n.type;return new rs(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new Ko(Mn[i.precision])}case"decimal":{const i=n.type;return new nl(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new il(li[i.unit])}case"time":{const i=n.type;return new rl(kt[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new sl(kt[i.unit],i.timezone)}case"interval":{const i=n.type;return new al(Gi[i.unit])}case"duration":{const i=n.type;return new ol(kt[i.unit])}case"union":{const i=n.type,[r,...s]=(i.mode+"").toLowerCase(),a=r.toUpperCase()+s.join("");return new cl(En[a],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new ul(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new dl(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new hl((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var KA=wp,JA=Ks;class Ln{static fromJSON(t,e){const i=new Ln(0,en.V5,e);return i._createHeader=QA(t,e),i}static decode(t){t=new JA(pe(t));const e=wr.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),a=new Ln(i,r,s);return a._createHeader=$A(e,s),a}static encode(t){const e=new KA;let i=-1;return t.isSchema()?i=we.encode(e,t.header()):t.isRecordBatch()?i=Jn.encode(e,t.header()):t.isDictionaryBatch()&&(i=Wi.encode(e,t.header())),wr.startMessage(e),wr.addVersion(e,en.V5),wr.addHeader(e,i),wr.addHeaderType(e,t.headerType),wr.addBodyLength(e,BigInt(t.bodyLength)),wr.finishMessageBuffer(e,wr.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof we)return new Ln(0,en.V5,be.Schema,t);if(t instanceof Jn)return new Ln(e,en.V5,be.RecordBatch,t);if(t instanceof Wi)return new Ln(e,en.V5,be.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===be.Schema}isRecordBatch(){return this.headerType===be.RecordBatch}isDictionaryBatch(){return this.headerType===be.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=Ge(t)}}class Jn{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=Ge(t)}}class Wi{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=Ge(e)}}class Ui{constructor(t,e){this.offset=Ge(t),this.length=Ge(e)}}class Or{constructor(t,e){this.length=Ge(t),this.nullCount=Ge(e)}}function QA(n,t){return(()=>{switch(t){case be.Schema:return we.fromJSON(n);case be.RecordBatch:return Jn.fromJSON(n);case be.DictionaryBatch:return Wi.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${be[t]}, type: ${t} }`)})}function $A(n,t){return(()=>{switch(t){case be.Schema:return we.decode(n.header(new Ei),new Map,n.version());case be.RecordBatch:return Jn.decode(n.header(new tr),n.version());case be.DictionaryBatch:return Wi.decode(n.header(new As),n.version())}throw new Error(`Unrecognized Message type: { name: ${be[t]}, type: ${t} }`)})}Ye.encode=uw;Ye.decode=lw;Ye.fromJSON=jA;we.encode=cw;we.decode=tw;we.fromJSON=ZA;Jn.encode=dw;Jn.decode=ew;Jn.fromJSON=lm;Wi.encode=hw;Wi.decode=nw;Wi.fromJSON=XA;Or.encode=fw;Or.decode=rw;Ui.encode=pw;Ui.decode=iw;function tw(n,t=new Map,e=en.V5){const i=ow(n,t);return new we(i,Ho(n),t,e)}function ew(n,t=en.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new Jn(n.length(),sw(n),aw(n,t))}function nw(n,t=en.V5){return new Wi(Jn.decode(n.data(),t),n.id(),n.isDelta())}function iw(n){return new Ui(n.offset(),n.length())}function rw(n){return new Or(n.length(),n.nullCount())}function sw(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Or.decode(e));return t}function aw(n,t){const e=[];for(let i,r=-1,s=-1,a=n.buffersLength();++r<a;)(i=n.buffers(r))&&(t<en.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Ui.decode(i));return e}function ow(n,t){const e=[];for(let i,r=-1,s=-1,a=n.fieldsLength();++r<a;)(i=n.fields(r))&&(e[++s]=Ye.decode(i,t));return e}function ff(n,t){const e=[];for(let i,r=-1,s=-1,a=n.childrenLength();++r<a;)(i=n.children(r))&&(e[++s]=Ye.decode(i,t));return e}function lw(n,t){let e,i,r,s,a,o;return!t||!(o=n.dictionary())?(r=mf(n,ff(n,t)),i=new Ye(n.name(),r,n.nullable(),Ho(n))):t.has(e=Ge(o.id()))?(s=(s=o.indexType())?pf(s):new Ua,a=new Qs(t.get(e),s,e,o.isOrdered()),i=new Ye(n.name(),a,n.nullable(),Ho(n))):(s=(s=o.indexType())?pf(s):new Ua,t.set(e,r=mf(n,ff(n,t))),a=new Qs(r,s,e,o.isOrdered()),i=new Ye(n.name(),a,n.nullable(),Ho(n))),i||null}function Ho(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function pf(n){return new rs(n.isSigned(),n.bitWidth())}function mf(n,t){const e=n.typeType();switch(e){case Xe.NONE:return new Nr;case Xe.Null:return new Nr;case Xe.Binary:return new Jo;case Xe.LargeBinary:return new Qo;case Xe.Utf8:return new $o;case Xe.LargeUtf8:return new tl;case Xe.Bool:return new el;case Xe.List:return new ll((t||[])[0]);case Xe.Struct_:return new Dn(t||[])}switch(e){case Xe.Int:{const i=n.type(new Yn);return new rs(i.isSigned(),i.bitWidth())}case Xe.FloatingPoint:{const i=n.type(new Ci);return new Ko(i.precision())}case Xe.Decimal:{const i=n.type(new Ts);return new nl(i.scale(),i.precision(),i.bitWidth())}case Xe.Date:{const i=n.type(new Po);return new il(i.unit())}case Xe.Time:{const i=n.type(new ni);return new rl(i.unit(),i.bitWidth())}case Xe.Timestamp:{const i=n.type(new ii);return new sl(i.unit(),i.timezone())}case Xe.Interval:{const i=n.type(new Di);return new al(i.unit())}case Xe.Duration:{const i=n.type(new No);return new ol(i.unit())}case Xe.Union:{const i=n.type(new Bn);return new cl(i.mode(),i.typeIdsArray()||[],t||[])}case Xe.FixedSizeBinary:{const i=n.type(new Fo);return new ul(i.byteWidth())}case Xe.FixedSizeList:{const i=n.type(new Uo);return new dl(i.listSize(),(t||[])[0])}case Xe.Map:{const i=n.type(new Oo);return new hl((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Xe[e]}" (${e})`)}function cw(n,t){const e=t.fields.map(s=>Ye.encode(n,s));Ei.startFieldsVector(n,e.length);const i=Ei.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Ei.createCustomMetadataVector(n,[...t.metadata].map(([s,a])=>{const o=n.createString(`${s}`),l=n.createString(`${a}`);return ln.startKeyValue(n),ln.addKey(n,o),ln.addValue(n,l),ln.endKeyValue(n)})):-1;return Ei.startSchema(n),Ei.addFields(n,i),Ei.addEndianness(n,mw?Js.Little:Js.Big),r!==-1&&Ei.addCustomMetadata(n,r),Ei.endSchema(n)}function uw(n,t){let e=-1,i=-1,r=-1;const s=t.type;let a=t.typeId;Dt.isDictionary(s)?(a=s.dictionary.typeId,r=wc.visit(s,n),i=wc.visit(s.dictionary,n)):i=wc.visit(s,n);const o=(s.children||[]).map(d=>Ye.encode(n,d)),l=$n.createChildrenVector(n,o),c=t.metadata&&t.metadata.size>0?$n.createCustomMetadataVector(n,[...t.metadata].map(([d,p])=>{const f=n.createString(`${d}`),_=n.createString(`${p}`);return ln.startKeyValue(n),ln.addKey(n,f),ln.addValue(n,_),ln.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),$n.startField(n),$n.addType(n,i),$n.addTypeType(n,a),$n.addChildren(n,l),$n.addNullable(n,!!t.nullable),e!==-1&&$n.addName(n,e),r!==-1&&$n.addDictionary(n,r),c!==-1&&$n.addCustomMetadata(n,c),$n.endField(n)}function dw(n,t){const e=t.nodes||[],i=t.buffers||[];tr.startNodesVector(n,e.length);for(const a of e.slice().reverse())Or.encode(n,a);const r=n.endVector();tr.startBuffersVector(n,i.length);for(const a of i.slice().reverse())Ui.encode(n,a);const s=n.endVector();return tr.startRecordBatch(n),tr.addLength(n,BigInt(t.length)),tr.addNodes(n,r),tr.addBuffers(n,s),tr.endRecordBatch(n)}function hw(n,t){const e=Jn.encode(n,t.data);return As.startDictionaryBatch(n),As.addId(n,BigInt(t.id)),As.addIsDelta(n,t.isDelta),As.addData(n,e),As.endDictionaryBatch(n)}function fw(n,t){return Rp.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function pw(n,t){return Ip.createBuffer(n,BigInt(t.offset),BigInt(t.length))}const mw=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),Ed=n=>`Expected ${be[n]} Message in stream, but was null or length 0.`,Ad=n=>`Header pointer of flatbuffer-encoded ${be[n]} Message is null or length 0.`,dm=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,hm=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class fm{constructor(t){this.source=t instanceof vl?t:new vl(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?qe:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Ed(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=pe(this.source.read(t));if(e.byteLength<t)throw new Error(hm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=be.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Ad(e));return r}readMetadataLength(){const t=this.source.read(Pl),e=t&&new Ks(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return qe;if(e.byteLength<t)throw new Error(dm(t,e.byteLength));return{done:!1,value:Ln.decode(e)}}}class gw{constructor(t,e){this.source=t instanceof $s?t:Sp(t)?new yl(t,e):new $s(t)}[Symbol.asyncIterator](){return this}next(){return Jt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?qe:t})}throw(t){return Jt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Jt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Jt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Ed(t));return e.value})}readMessageBody(t){return Jt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=pe(yield this.source.read(t));if(e.byteLength<t)throw new Error(hm(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return Jt(this,arguments,void 0,function*(t=!1){const e=be.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(Ad(e));return r})}readMetadataLength(){return Jt(this,void 0,void 0,function*(){const t=yield this.source.read(Pl),e=t&&new Ks(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return Jt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return qe;if(e.byteLength<t)throw new Error(dm(t,e.byteLength));return{done:!1,value:Ln.decode(e)}})}}class _w extends fm{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof of?t:new of(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Ln.fromJSON(t.schema,be.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Ln.fromJSON(e,be.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Ln.fromJSON(e,be.RecordBatch)}}return this._body=[],qe}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Ed(t));return e.value}readSchema(){const t=be.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(Ad(t));return i}}const Pl=4,zu="ARROW1",Ba=new Uint8Array(zu.length);for(let n=0;n<zu.length;n+=1)Ba[n]=zu.codePointAt(n);function wd(n,t=0){for(let e=-1,i=Ba.length;++e<i;)if(Ba[e]!==n[t+e])return!1;return!0}const qa=Ba.length,pm=qa+Pl,vw=qa*2+Pl;class oi extends vd{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return is(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return ei.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return ei.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof oi?t:Cu(t)?bw(t):Sp(t)?Aw(t):is(t)?Jt(this,void 0,void 0,function*(){return yield oi.from(yield t)}):xp(t)||od(t)||bp(t)||ra(t)?Ew(new $s(t)):Mw(new vl(t))}static readAll(t){return t instanceof oi?t.isSync()?gf(t):_f(t):Cu(t)||ArrayBuffer.isView(t)||Wa(t)||yp(t)?gf(t):_f(t)}}class Sl extends oi{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Fi(this,arguments,function*(){yield ae(yield*Lo(es(this[Symbol.iterator]())))})}}class xl extends oi{constructor(t){super(t),this._impl=t}readAll(){return Jt(this,void 0,void 0,function*(){var t,e,i,r;const s=new Array;try{for(var a=!0,o=es(this),l;l=yield o.next(),t=l.done,!t;a=!0){r=l.value,a=!1;const c=r;s.push(c)}}catch(c){e={error:c}}finally{try{!a&&!t&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class mm extends Sl{constructor(t){super(t),this._impl=t}}class yw extends xl{constructor(t){super(t),this._impl=t}}class gm{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=he({type:new Dn(this.schema.fields),length:t.length,children:i});return new Vn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:a}=this,o=s.get(i),l=a.dictionaries.get(i),c=this._loadVectors(t.data,e,[l]);return(o&&r?o.concat(new Ae(c)):new Ae(c)).memoize()}_loadVectors(t,e,i){return new rm(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}class bl extends gm{constructor(t,e){super(e),this._reader=Cu(t)?new _w(this._handle=t):new fm(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=vm(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):qe}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):qe}next(){if(this.closed)return qe;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Md(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class Ml extends gm{constructor(t,e){super(e),this._reader=new gw(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Jt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Jt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=vm(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Jt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):qe})}return(t){return Jt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):qe})}next(){return Jt(this,void 0,void 0,function*(){if(this.closed)return qe;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Md(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Jt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class _m extends bl{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof lf?t:new lf(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(be.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(be.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}}_readFooter(){const{_handle:t}=this,e=t.size-pm,i=t.readInt32(e),r=t.readAt(e-i,i);return Oa.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class Sw extends Ml{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof yl?t:new yl(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Jt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return Jt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(be.RecordBatch);if(r?.isRecordBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,a)}}return null})}_readDictionaryBatch(t){return Jt(this,void 0,void 0,function*(){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(be.DictionaryBatch);if(r?.isDictionaryBatch()){const s=r.header(),a=yield this._reader.readMessageBody(r.bodyLength),o=this._loadDictionaryBatch(s,a);this.dictionaries.set(s.id,o)}}})}_readFooter(){return Jt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-pm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Oa.decode(r)})}_readNextMessageAndValidate(t){return Jt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class xw extends bl{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new NA(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}}function vm(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*gf(n){const t=oi.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function _f(n){return Fi(this,arguments,function*(){const e=yield ae(oi.from(n));try{if(!(yield ae(e.open({autoDestroy:!1}))).closed)do yield yield ae(e);while(!(yield ae(e.reset().open())).closed)}finally{yield ae(e.cancel())}})}function bw(n){return new Sl(new xw(n))}function Mw(n){const t=n.peek(qa+7&-8);return t&&t.byteLength>=4?wd(t)?new mm(new _m(n.read())):new Sl(new bl(n)):new Sl(new bl((function*(){})()))}function Ew(n){return Jt(this,void 0,void 0,function*(){const t=yield n.peek(qa+7&-8);return t&&t.byteLength>=4?wd(t)?new mm(new _m(yield n.read())):new xl(new Ml(n)):new xl(new Ml((function(){return Fi(this,arguments,function*(){})})()))})}function Aw(n){return Jt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new yl(n,t);return t>=vw&&wd(yield e.readAt(0,qa+7&-8))?new yw(new Sw(e)):new xl(new Ml(e))})}class Ke extends de{static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Vn?s.data.children:s.data),i=new Ke;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof Ae)return this.visitMany(t.data),this;const{type:e}=t;if(!Dt.isDictionary(e)){const{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(Dt.isUnion(e))this.nodes.push(new Or(i,0));else{const{nullCount:r}=t;Dt.isNull(e)||vi.call(this,r<=0?new Uint8Array(0):fl(t.offset,i,t.nullBitmap)),this.nodes.push(new Or(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function vi(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Ui(this._byteLength,t)),this._byteLength+=t,this}function ww(n){var t;const{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(vi.call(this,r),e.mode===En.Sparse)return Hu.call(this,n);if(e.mode===En.Dense){if(n.offset<=0)return vi.call(this,s),Hu.call(this,n);{const a=new Int32Array(i),o=Object.create(null),l=Object.create(null);for(let c,d,p=-1;++p<i;)(c=r[p])!==void 0&&((d=o[c])===void 0&&(d=o[c]=s[p]),a[p]=s[p]-d,l[c]=((t=l[c])!==null&&t!==void 0?t:0)+1);vi.call(this,a),this.visitMany(n.children.map((c,d)=>{const p=e.typeIds[d],f=o[p],_=l[p];return c.slice(f,Math.min(i,_))}))}}return this}function Tw(n){let t;return n.nullCount>=n.length?vi.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?vi.call(this,fl(n.offset,n.length,t)):vi.call(this,pl(n.values))}function gr(n){return vi.call(this,n.values.subarray(0,n.length*n.stride))}function Nl(n){const{length:t,values:e,valueOffsets:i}=n,r=Ge(i[0]),s=Ge(i[t]),a=Math.min(s-r,e.byteLength-r);return vi.call(this,Ep(-r,t+1,i)),vi.call(this,e.subarray(r,r+a)),this}function Td(n){const{length:t,valueOffsets:e}=n;if(e){const{[0]:i,[t]:r}=e;return vi.call(this,Ep(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function Hu(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Ke.prototype.visitBool=Tw;Ke.prototype.visitInt=gr;Ke.prototype.visitFloat=gr;Ke.prototype.visitUtf8=Nl;Ke.prototype.visitLargeUtf8=Nl;Ke.prototype.visitBinary=Nl;Ke.prototype.visitLargeBinary=Nl;Ke.prototype.visitFixedSizeBinary=gr;Ke.prototype.visitDate=gr;Ke.prototype.visitTimestamp=gr;Ke.prototype.visitTime=gr;Ke.prototype.visitDecimal=gr;Ke.prototype.visitList=Td;Ke.prototype.visitStruct=Hu;Ke.prototype.visitUnion=ww;Ke.prototype.visitInterval=gr;Ke.prototype.visitDuration=gr;Ke.prototype.visitFixedSizeList=Td;Ke.prototype.visitMap=Td;class ym extends vd{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new Vo,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,Hn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return is(t)?t.then(e=>this.writeAll(e)):ra(t)?Dd(this,t):Cd(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Vo?this._sink=t:(this._sink=new Vo,t&&rE(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&sE(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!Vu(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Cn&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Vn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Vu(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Vn?t instanceof Md||this._writeRecordBatch(t):t instanceof Cn?this.writeAll(t.batches):Wa(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Ln.encode(t),s=r.byteLength,a=this._writeLegacyIpcFormat?4:8,o=s+a+i&~i,l=o-s-a;return t.headerType===be.RecordBatch?this._recordBatchBlocks.push(new Fr(o,t.bodyLength,this._position)):t.headerType===be.DictionaryBatch&&this._dictionaryBlocks.push(new Fr(o,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(o-a)),s>0&&this._write(r),this._writePadding(l)}_write(t){if(this._started){const e=pe(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Ln.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Ba)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Ke.assemble(t),a=new Jn(t.numRows,i,r),o=Ln.from(a,e);return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){const{byteLength:r,nodes:s,bufferRegions:a,buffers:o}=Ke.assemble(new Ae([t])),l=new Jn(t.length,s,a),c=new Wi(l,e,i),d=Ln.from(c,r);return this._writeMessage(d)._writeBodyBuffers(o)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,a=t.length;++s<a;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(const[r,s]of t.dictionaries){const a=(e=s?.data)!==null&&e!==void 0?e:[],o=this._seenDictionaries.get(r),l=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!o||o.data[0]!==a[0])for(const[c,d]of a.entries())this._writeDictionaryBatch(d,r,c>0);else if(l<a.length)for(const c of a.slice(l))this._writeDictionaryBatch(c,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,a.length)}return this}}class Id extends ym{static writeAll(t,e){const i=new Id(e);return is(t)?t.then(r=>i.writeAll(r)):ra(t)?Dd(i,t):Cd(i,t)}}class Rd extends ym{static writeAll(t){const e=new Rd;return is(t)?t.then(i=>e.writeAll(i)):ra(t)?Dd(e,t):Cd(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){const e=Oa.encode(new Oa(t,en.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Cd(n,t){let e=t;t instanceof Cn&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function Dd(n,t){return Jt(this,void 0,void 0,function*(){var e,i,r,s,a,o,l;try{for(e=!0,i=es(t);r=yield i.next(),s=r.done,!s;e=!0){l=r.value,e=!1;const c=l;n.write(c)}}catch(c){a={error:c}}finally{try{!e&&!s&&(o=i.return)&&(yield o.call(i))}finally{if(a)throw a.error}}return n.finish()})}function Iw(n,t="stream"){return(t==="stream"?Id:Rd).writeAll(n).toUint8Array(!0)}var Rw=Object.create,Sm=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,Dw=Object.getOwnPropertyNames,Lw=Object.getPrototypeOf,Pw=Object.prototype.hasOwnProperty,Nw=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Fw=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Dw(t))!Pw.call(n,r)&&r!==e&&Sm(n,r,{get:()=>t[r],enumerable:!(i=Cw(t,r))||i.enumerable});return n},Uw=(n,t,e)=>(e=n!=null?Rw(Lw(n)):{},Fw(!n||!n.__esModule?Sm(e,"default",{value:n,enumerable:!0}):e,n)),Ow=Nw((n,t)=>{t.exports=Worker}),Bw=(n=>(n[n.UNDEFINED=0]="UNDEFINED",n[n.AUTOMATIC=1]="AUTOMATIC",n[n.READ_ONLY=2]="READ_ONLY",n[n.READ_WRITE=3]="READ_WRITE",n))(Bw||{}),Vw=(n=>(n[n.IDENTIFIER=0]="IDENTIFIER",n[n.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",n[n.STRING_CONSTANT=2]="STRING_CONSTANT",n[n.OPERATOR=3]="OPERATOR",n[n.KEYWORD=4]="KEYWORD",n[n.COMMENT=5]="COMMENT",n))(Vw||{}),zw=(n=>(n[n.NONE=0]="NONE",n[n.DEBUG=1]="DEBUG",n[n.INFO=2]="INFO",n[n.WARNING=3]="WARNING",n[n.ERROR=4]="ERROR",n))(zw||{}),Hw=(n=>(n[n.NONE=0]="NONE",n[n.CONNECT=1]="CONNECT",n[n.DISCONNECT=2]="DISCONNECT",n[n.OPEN=3]="OPEN",n[n.QUERY=4]="QUERY",n[n.INSTANTIATE=5]="INSTANTIATE",n))(Hw||{}),kw=(n=>(n[n.NONE=0]="NONE",n[n.OK=1]="OK",n[n.ERROR=2]="ERROR",n[n.START=3]="START",n[n.RUN=4]="RUN",n[n.CAPTURE=5]="CAPTURE",n))(kw||{}),Gw=(n=>(n[n.NONE=0]="NONE",n[n.WEB_WORKER=1]="WEB_WORKER",n[n.NODE_WORKER=2]="NODE_WORKER",n[n.BINDINGS=3]="BINDINGS",n[n.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",n))(Gw||{}),Ww=class{constructor(n=2){this.level=n}log(n){n.level>=this.level&&console.log(n)}},Zw=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.MAX_ARROW_ERROR=255]="MAX_ARROW_ERROR",n[n.DUCKDB_WASM_RETRY=256]="DUCKDB_WASM_RETRY",n))(Zw||{}),Xw=class{constructor(n,t){this._bindings=n,this._conn=t}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(n){return n(this._bindings,this._conn)}async query(n){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let t=await this._bindings.runQuery(this._conn,n),e=oi.from(t);return console.assert(e.isSync(),"Reader is not sync"),console.assert(e.isFile(),"Reader is not file"),new Cn(e)}async send(n,t=!1){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:n});let e=await this._bindings.startPendingQuery(this._conn,n,t);for(;e==null;){if(this._bindings.isDetached()){console.error("cannot send a message since the worker is not set!");return}e=await this._bindings.pollPendingQuery(this._conn)}let i=new xm(this._bindings,this._conn,e),r=await oi.from(i);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(n){return await this._bindings.getTableNames(this._conn,n)}async prepare(n){let t=await this._bindings.createPrepared(this._conn,n);return new Yw(this._bindings,this._conn,t)}async insertArrowTable(n,t){let e=Iw(n,"stream");await this.insertArrowFromIPCStream(e,t)}async insertArrowFromIPCStream(n,t){await this._bindings.insertArrowFromIPCStream(this._conn,n,t)}async insertCSVFromPath(n,t){await this._bindings.insertCSVFromPath(this._conn,n,t)}async insertJSONFromPath(n,t){await this._bindings.insertJSONFromPath(this._conn,n,t)}},xm=class{constructor(n,t,e){this.db=n,this.conn=t,this.header=e,this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let n=null;for(this._inFlight!=null&&(n=await this._inFlight,this._inFlight=null);n==null;)n=await this.db.fetchQueryResults(this.conn);return this._depleted=n.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:n}}[Symbol.asyncIterator](){return this}},Yw=class{constructor(n,t,e){this.bindings=n,this.connectionId=t,this.statementId=e}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...n){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,n),e=oi.from(t);return console.assert(e.isSync()),console.assert(e.isFile()),new Cn(e)}async send(...n){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,n),e=new xm(this.bindings,this.connectionId,t),i=await oi.from(e);return console.assert(i.isAsync()),console.assert(i.isStream()),i}},qw=(n=>(n.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",n.CLOSE_PREPARED="CLOSE_PREPARED",n.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",n.REGISTER_OPFS_FILE_NAME="REGISTER_OPFS_FILE_NAME",n.CONNECT="CONNECT",n.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",n.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",n.CREATE_PREPARED="CREATE_PREPARED",n.DISCONNECT="DISCONNECT",n.DROP_FILE="DROP_FILE",n.DROP_FILES="DROP_FILES",n.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",n.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",n.FLUSH_FILES="FLUSH_FILES",n.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",n.GET_TABLE_NAMES="GET_TABLE_NAMES",n.GET_VERSION="GET_VERSION",n.GLOB_FILE_INFOS="GLOB_FILE_INFOS",n.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",n.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",n.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",n.INSTANTIATE="INSTANTIATE",n.OPEN="OPEN",n.PING="PING",n.POLL_PENDING_QUERY="POLL_PENDING_QUERY",n.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",n.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",n.REGISTER_FILE_URL="REGISTER_FILE_URL",n.RESET="RESET",n.RUN_PREPARED="RUN_PREPARED",n.RUN_QUERY="RUN_QUERY",n.SEND_PREPARED="SEND_PREPARED",n.START_PENDING_QUERY="START_PENDING_QUERY",n.TOKENIZE="TOKENIZE",n))(qw||{}),jw=(n=>(n.CONNECTION_INFO="CONNECTION_INFO",n.ERROR="ERROR",n.FEATURE_FLAGS="FEATURE_FLAGS",n.FILE_BUFFER="FILE_BUFFER",n.FILE_INFOS="FILE_INFOS",n.FILE_SIZE="FILE_SIZE",n.FILE_STATISTICS="FILE_STATISTICS",n.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",n.LOG="LOG",n.PROGRESS_UPDATE="PROGRESS_UPDATE",n.OK="OK",n.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",n.QUERY_PLAN="QUERY_PLAN",n.QUERY_RESULT="QUERY_RESULT",n.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",n.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",n.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",n.REGISTERED_FILE="REGISTERED_FILE",n.SCRIPT_TOKENS="SCRIPT_TOKENS",n.SUCCESS="SUCCESS",n.TABLE_NAMES="TABLE_NAMES",n.VERSION_STRING="VERSION_STRING",n))(jw||{}),ge=class{constructor(n,t){this.promiseResolver=()=>{},this.promiseRejecter=()=>{},this.type=n,this.data=t,this.promise=new Promise((e,i)=>{this.promiseResolver=e,this.promiseRejecter=i})}};function ko(n){switch(n.typeId){case P.Binary:return{sqlType:"binary"};case P.Bool:return{sqlType:"bool"};case P.Date:return{sqlType:"date"};case P.DateDay:return{sqlType:"date32[d]"};case P.DateMillisecond:return{sqlType:"date64[ms]"};case P.Decimal:{let t=n;return{sqlType:"decimal",precision:t.precision,scale:t.scale}}case P.Float:return{sqlType:"float"};case P.Float16:return{sqlType:"float16"};case P.Float32:return{sqlType:"float32"};case P.Float64:return{sqlType:"float64"};case P.Int:return{sqlType:"int32"};case P.Int16:return{sqlType:"int16"};case P.Int32:return{sqlType:"int32"};case P.Int64:return{sqlType:"int64"};case P.Uint16:return{sqlType:"uint16"};case P.Uint32:return{sqlType:"uint32"};case P.Uint64:return{sqlType:"uint64"};case P.Uint8:return{sqlType:"uint8"};case P.IntervalDayTime:return{sqlType:"interval[dt]"};case P.IntervalYearMonth:return{sqlType:"interval[m]"};case P.List:return{sqlType:"list",valueType:ko(n.valueType)};case P.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:n.byteWidth};case P.Null:return{sqlType:"null"};case P.Utf8:return{sqlType:"utf8"};case P.Struct:return{sqlType:"struct",fields:n.children.map(t=>ku(t.name,t.type))};case P.Map:{let t=n;return{sqlType:"map",keyType:ko(t.keyType),valueType:ko(t.valueType)}}case P.Time:return{sqlType:"time[s]"};case P.TimeMicrosecond:return{sqlType:"time[us]"};case P.TimeMillisecond:return{sqlType:"time[ms]"};case P.TimeNanosecond:return{sqlType:"time[ns]"};case P.TimeSecond:return{sqlType:"time[s]"};case P.Timestamp:return{sqlType:"timestamp",timezone:n.timezone||void 0};case P.TimestampSecond:return{sqlType:"timestamp[s]",timezone:n.timezone||void 0};case P.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:n.timezone||void 0};case P.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:n.timezone||void 0};case P.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:n.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(n.toString()))}function ku(n,t){let e=ko(t);return e.name=n,e}var Kw=/'(opfs:\/\/\S*?)'/g,Jw=/(opfs:\/\/\S*?)/g;function Qw(n){return n.search(Jw)>-1}function $w(n){return[...n.matchAll(Kw)].map(t=>t[1])}var tT=new TextEncoder,eT=class{constructor(n,t=null){this._onInstantiationProgress=[],this._onExecutionProgress=[],this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{},this._nextMessageId=0,this._pendingRequests=new Map,this._config={},this._logger=n,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),t!=null&&this.attach(t)}get logger(){return this._logger}get config(){return this._config}attach(n){this._worker=n,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise((t,e)=>{this._workerShutdownResolver=t})}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(n,t=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!:"+n.type+","+n.data);return}let e=this._nextMessageId++;return this._pendingRequests.set(e,n),this._worker.postMessage({messageId:e,type:n.type,data:n.data},t),await n.promise}onMessage(n){var t;let e=n.data;switch(e.type){case"PROGRESS_UPDATE":{for(let r of this._onExecutionProgress)r(e.data);return}case"LOG":{this._logger.log(e.data);return}case"INSTANTIATE_PROGRESS":{for(let r of this._onInstantiationProgress)r(e.data);return}}let i=this._pendingRequests.get(e.requestId);if(!i){console.warn("unassociated response: [".concat(e.requestId,", ").concat(e.type.toString(),"]"));return}if(this._pendingRequests.delete(e.requestId),e.type=="ERROR"){let r=new Error(e.data.message);r.name=e.data.name,(t=Object.getOwnPropertyDescriptor(r,"stack"))!=null&&t.writable&&(r.stack=e.data.stack),i.promiseRejecter(r);return}switch(i.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"REGISTER_OPFS_FILE_NAME":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(e.type=="OK"){i.promiseResolver(e.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],e.type=="OK"){i.promiseResolver(e.data);return}break;case"GLOB_FILE_INFOS":if(e.type=="FILE_INFOS"){i.promiseResolver(e.data);return}break;case"GET_VERSION":if(e.type=="VERSION_STRING"){i.promiseResolver(e.data);return}break;case"GET_FEATURE_FLAGS":if(e.type=="FEATURE_FLAGS"){i.promiseResolver(e.data);return}break;case"GET_TABLE_NAMES":if(e.type=="TABLE_NAMES"){i.promiseResolver(e.data);return}break;case"TOKENIZE":if(e.type=="SCRIPT_TOKENS"){i.promiseResolver(e.data);return}break;case"COPY_FILE_TO_BUFFER":if(e.type=="FILE_BUFFER"){i.promiseResolver(e.data);return}break;case"EXPORT_FILE_STATISTICS":if(e.type=="FILE_STATISTICS"){i.promiseResolver(e.data);return}break;case"CONNECT":if(e.type=="CONNECTION_INFO"){i.promiseResolver(e.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(e.type=="QUERY_RESULT"){i.promiseResolver(e.data);return}break;case"SEND_PREPARED":if(e.type=="QUERY_RESULT_HEADER"){i.promiseResolver(e.data);return}break;case"START_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"POLL_PENDING_QUERY":if(e.type=="QUERY_RESULT_HEADER_OR_NULL"){i.promiseResolver(e.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],e.type=="SUCCESS"){i.promiseResolver(e.data);return}break;case"FETCH_QUERY_RESULTS":if(e.type=="QUERY_RESULT_CHUNK"){i.promiseResolver(e.data);return}break;case"CREATE_PREPARED":if(e.type=="PREPARED_STATEMENT_ID"){i.promiseResolver(e.data);return}break}i.promiseRejecter(new Error("unexpected response type: ".concat(e.type.toString())))}onError(n){console.error(n),console.error("error in duckdb worker: ".concat(n.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}isDetached(){return!this._worker}async reset(){let n=new ge("RESET",null);return await this.postTask(n)}async ping(){let n=new ge("PING",null);await this.postTask(n)}async dropFile(n){let t=new ge("DROP_FILE",n);return await this.postTask(t)}async dropFiles(n){let t=new ge("DROP_FILES",n);return await this.postTask(t)}async flushFiles(){let n=new ge("FLUSH_FILES",null);return await this.postTask(n)}async instantiate(n,t=null,e=i=>{}){this._onInstantiationProgress.push(e);let i=new ge("INSTANTIATE",[n,t]);return await this.postTask(i)}async getVersion(){let n=new ge("GET_VERSION",null);return await this.postTask(n)}async getFeatureFlags(){let n=new ge("GET_FEATURE_FLAGS",null);return await this.postTask(n)}async open(n){this._config=n;let t=new ge("OPEN",n);await this.postTask(t)}async tokenize(n){let t=new ge("TOKENIZE",n);return await this.postTask(t)}async connectInternal(){let n=new ge("CONNECT",null);return await this.postTask(n)}async connect(){let n=await this.connectInternal();return new Xw(this,n)}async disconnect(n){let t=new ge("DISCONNECT",n);await this.postTask(t)}async runQuery(n,t){if(this.shouldOPFSFileHandling()){let e=await this.registerOPFSFileFromSQL(t);try{return await this._runQueryAsync(n,t)}finally{e.length>0&&await this.dropFiles(e)}}else return await this._runQueryAsync(n,t)}async _runQueryAsync(n,t){let e=new ge("RUN_QUERY",[n,t]);return await this.postTask(e)}async startPendingQuery(n,t,e=!1){if(this.shouldOPFSFileHandling()){let i=await this.registerOPFSFileFromSQL(t);try{return await this._startPendingQueryAsync(n,t,e)}finally{i.length>0&&await this.dropFiles(i)}}else return await this._startPendingQueryAsync(n,t,e)}async _startPendingQueryAsync(n,t,e=!1){let i=new ge("START_PENDING_QUERY",[n,t,e]);return await this.postTask(i)}async pollPendingQuery(n){let t=new ge("POLL_PENDING_QUERY",n);return await this.postTask(t)}async cancelPendingQuery(n){let t=new ge("CANCEL_PENDING_QUERY",n);return await this.postTask(t)}async fetchQueryResults(n){let t=new ge("FETCH_QUERY_RESULTS",n);return await this.postTask(t)}async getTableNames(n,t){let e=new ge("GET_TABLE_NAMES",[n,t]);return await this.postTask(e)}async createPrepared(n,t){let e=new ge("CREATE_PREPARED",[n,t]);return await this.postTask(e)}async closePrepared(n,t){let e=new ge("CLOSE_PREPARED",[n,t]);await this.postTask(e)}async runPrepared(n,t,e){let i=new ge("RUN_PREPARED",[n,t,e]);return await this.postTask(i)}async sendPrepared(n,t,e){let i=new ge("SEND_PREPARED",[n,t,e]);return await this.postTask(i)}async globFiles(n){let t=new ge("GLOB_FILE_INFOS",n);return await this.postTask(t)}async registerFileText(n,t){let e=tT.encode(t);await this.registerFileBuffer(n,e)}async registerFileURL(n,t,e,i){t===void 0&&(t=n);let r=new ge("REGISTER_FILE_URL",[n,t,e,i]);await this.postTask(r)}async registerEmptyFileBuffer(n){}async registerFileBuffer(n,t){let e=new ge("REGISTER_FILE_BUFFER",[n,t]);await this.postTask(e,[t.buffer])}async registerFileHandle(n,t,e,i){let r=new ge("REGISTER_FILE_HANDLE",[n,t,e,i]);await this.postTask(r,[])}async registerOPFSFileName(n){let t=new ge("REGISTER_OPFS_FILE_NAME",[n]);await this.postTask(t,[])}async collectFileStatistics(n,t){let e=new ge("COLLECT_FILE_STATISTICS",[n,t]);await this.postTask(e,[])}async exportFileStatistics(n){let t=new ge("EXPORT_FILE_STATISTICS",n);return await this.postTask(t,[])}async copyFileToBuffer(n){let t=new ge("COPY_FILE_TO_BUFFER",n);return await this.postTask(t)}async copyFileToPath(n,t){let e=new ge("COPY_FILE_TO_PATH",[n,t]);await this.postTask(e)}async insertArrowFromIPCStream(n,t,e){if(t.length==0)return;let i=new ge("INSERT_ARROW_FROM_IPC_STREAM",[n,t,e]);await this.postTask(i,[t.buffer])}async insertCSVFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(ku(s,a))}e.columnsFlat=r,delete e.columns}let i=new ge("IMPORT_CSV_FROM_PATH",[n,t,e]);await this.postTask(i)}async insertJSONFromPath(n,t,e){if(e.columns!==void 0){let r=[];for(let s in e.columns){let a=e.columns[s];r.push(ku(s,a))}e.columnsFlat=r,delete e.columns}let i=new ge("IMPORT_JSON_FROM_PATH",[n,t,e]);await this.postTask(i)}shouldOPFSFileHandling(){var n,t;return Qw((n=this.config.path)!=null?n:"")?((t=this.config.opfs)==null?void 0:t.fileHandling)=="auto":!1}async registerOPFSFileFromSQL(n){let t=$w(n),e=[];for(let i of t)try{await this.registerOPFSFileName(i),e.push(i)}catch(r){throw console.error(r),new Error("File Not found:"+i)}return e}};function nT(){let n=new TextDecoder;return t=>(typeof SharedArrayBuffer<"u"&&t.buffer instanceof SharedArrayBuffer&&(t=new Uint8Array(t)),n.decode(t))}nT();var iT=(n=>(n[n.BUFFER=0]="BUFFER",n[n.NODE_FS=1]="NODE_FS",n[n.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",n[n.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",n[n.HTTP=4]="HTTP",n[n.S3=5]="S3",n))(iT||{}),rT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),sT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),aT=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),oT=()=>(async n=>{try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(n)}catch{return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),lT={version:"1.33.1-dev20.0"},Ld=lT.version.split(".");Ld[0];Ld[1];Ld[2];var cT=()=>typeof navigator>"u",Tc=null,Ic=null,Rc=null,Cc=null,Dc=null;async function uT(){return Tc==null&&(Tc=typeof BigInt64Array<"u"),Ic==null&&(Ic=await sT()),Rc==null&&(Rc=await oT()),Cc==null&&(Cc=await aT()),Dc==null&&(Dc=await rT()),{bigInt64Array:Tc,crossOriginIsolated:cT()||globalThis.crossOriginIsolated||!1,wasmExceptions:Ic,wasmSIMD:Cc,wasmThreads:Rc,wasmBulkMemory:Dc}}async function dT(n){let t=await uT();if(t.wasmExceptions){if(t.wasmSIMD&&t.wasmThreads&&t.crossOriginIsolated&&n.coi)return{mainModule:n.coi.mainModule,mainWorker:n.coi.mainWorker,pthreadWorker:n.coi.pthreadWorker};if(n.eh)return{mainModule:n.eh.mainModule,mainWorker:n.eh.mainWorker,pthreadWorker:null}}return{mainModule:n.mvp.mainModule,mainWorker:n.mvp.mainWorker,pthreadWorker:null}}Uw(Ow());const hT="/100days/internal/immutable/assets/duckdb-mvp.BmFzQ2ix.wasm",fT="/100days/internal/immutable/assets/duckdb-browser-mvp.worker.Do2wEevy.js",pT="/100days/internal/immutable/assets/duckdb-eh.CDxYOdE3.wasm",mT="/100days/internal/immutable/assets/duckdb-browser-eh.worker.oJzvuNBU.js",gT="/100days/internal/immutable/assets/duckdb-coi.BnMEbEPb.wasm",_T="/100days/internal/immutable/assets/duckdb-browser-coi.worker.DzkN1Ktv.js",vT="/100days/internal/immutable/assets/duckdb-browser-coi.pthread.worker.BXw-ActW.js",yT={mvp:{mainModule:hT,mainWorker:fT},eh:{mainModule:pT,mainWorker:mT},coi:{mainModule:gT,mainWorker:_T,pthreadWorker:vT}},ST=(async()=>{const n=await dT(yT),t=new Worker(n.mainWorker),e=new Ww,i=new eT(e,t);return await i.instantiate(n.mainModule,n.pthreadWorker),i})();class xT{db=null;connection=null;async initialize(){try{this.db=await ST,this.connection=await this.db.connect()}catch{this.db=null,this.connection=null}}executePipeline(t,e){return new Float64Array(0)}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.db&&(this.db.terminate(),this.db=null)}}class bT{xBufferId="pointer-x";yBufferId="pointer-y";xView=null;yView=null;xHead=null;yHead=null;capacity=0;element=null;height=0;allocateBuffers(t=100){this.capacity=t,Lt.request("ALLOCATE_BUFFER",{id:this.xBufferId,size:this.capacity,shared:!0}),Lt.request("ALLOCATE_BUFFER",{id:this.yBufferId,size:this.capacity,shared:!0});const e=Lt.request("GET_RING_BUFFER",{id:this.xBufferId}),i=Lt.request("GET_RING_BUFFER",{id:this.yBufferId});e&&i&&(this.xHead=e.head,this.xView=e.view,this.yHead=i.head,this.yView=i.view)}initialize(t){this.element=t,this.height=t.clientHeight,this.bindEvents()}updateBounds(t,e){this.height=e}bindEvents(){this.element&&this.element.addEventListener("pointermove",this.onPointerMove,{passive:!0})}onPointerMove=t=>{if(!this.xView||!this.yView||!this.xHead||!this.yHead||!this.element)return;const e=this.element.getBoundingClientRect(),i=t.getCoalescedEvents?t.getCoalescedEvents():[t];let r=Atomics.load(this.xHead,0);for(let s=0;s<i.length;s++){const a=i[s],o=a.clientX-e.left,l=this.height-(a.clientY-e.top);this.xView[r]=o,this.yView[r]=l,r=(r+1)%this.capacity}Atomics.store(this.xHead,0,r),Atomics.store(this.yHead,0,r)};destroy(){this.element&&(this.element.removeEventListener("pointermove",this.onPointerMove),this.element=null)}}function MT(n,t){ne(t,!0);const e=Nn("graph-actions"),i=["white-box","circle","triangle","star","particle"];{let r=Q(()=>t.node.textureId||i[0]),s=Q(()=>i.map(a=>({value:a,label:a})));Ii(n,{label:"Texture ID",get value(){return A(r)},get options(){return A(s)},onchange:a=>e.updateNodeConfig(t.node,{textureId:a})})}ie()}var ET=fe("<!> <!> <!> <!>",1);function AT(n,t){ne(t,!0);const e=Nn("graph-actions"),i=["white-box","circle","triangle","star","particle"];var r=ET(),s=_e(r);{let c=Q(()=>t.node.textureId||i[0]),d=Q(()=>i.map(p=>({value:p,label:p})));Ii(s,{label:"Texture ID",get value(){return A(c)},get options(){return A(d)},onchange:p=>e.updateNodeConfig(t.node,{textureId:p})})}var a=yt(s,2);{let c=Q(()=>(t.node.vertices?Array.from(t.node.vertices):[]).join(", "));Ao(a,{label:"Vertices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{vertices:new Float32Array(d.split(",").map(p=>parseFloat(p.trim())||0))})})}var o=yt(a,2);{let c=Q(()=>(t.node.indices?Array.from(t.node.indices):[]).join(", "));Ao(o,{label:"Indices",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{indices:new Uint16Array(d.split(",").map(p=>parseInt(p.trim())||0))})})}var l=yt(o,2);{let c=Q(()=>(t.node.uvs?Array.from(t.node.uvs):[]).join(", "));Ao(l,{label:"UVs",rows:2,get value(){return A(c)},onchange:d=>e.updateNodeConfig(t.node,{uvs:new Float32Array(d.split(",").map(p=>parseFloat(p.trim())||0))})})}U(n,r),ie()}var wT=fe("<!> <!>",1);function TT(n,t){ne(t,!0);const e=Nn("graph-actions"),i=[{value:"add",label:"Add"},{value:"multiply",label:"Multiply"}];var r=wT(),s=_e(r);{let o=Q(()=>t.node.capacity||100);Yu(s,{label:"Capacity",min:1,step:1,get value(){return A(o)},onchange:l=>e.updateNodeConfig(t.node,{capacity:l})})}var a=yt(s,2);{let o=Q(()=>t.node.operation||"add");Ii(a,{label:"Operation",get value(){return A(o)},get options(){return i},onchange:l=>e.updateNodeConfig(t.node,{operation:l})})}U(n,r),ie()}function IT(n,t){ne(t,!0);const e=Nn("graph-actions");let i=Ne(Bs([]));function r(){Ut(i,Lt.request("GET_AVAILABLE_BUFFERS",void 0),!0)}Va(()=>{r(),Lt.on("GRAPH_UPDATED",r),Lt.on("MEMORY_ALLOCATED",r)}),Gu(()=>{Lt.off("GRAPH_UPDATED",r),Lt.off("MEMORY_ALLOCATED",r)});{let s=Q(()=>t.node.bufferId||""),a=Q(()=>A(i).map(o=>({value:o,label:o})));Ii(n,{label:"Target Buffer ID",get value(){return A(s)},disabledPlaceholder:"Select a buffer...",get options(){return A(a)},onchange:o=>e.updateNodeConfig(t.node,{bufferId:o})})}ie()}function RT(n,t){ne(t,!0);const e=Nn("graph-actions");{let i=Q(()=>(t.node.data?Array.from(t.node.data):[]).join(", "));Ao(n,{label:"Data (comma separated)",rows:3,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{data:r.split(",").map(s=>parseFloat(s.trim())||0)})})}ie()}function CT(n,t){ne(t,!0);const e=Nn("graph-actions");{let i=Q(()=>t.node.capacity||100);Yu(n,{label:"Capacity",min:1,step:1,get value(){return A(i)},onchange:r=>e.updateNodeConfig(t.node,{capacity:r})})}ie()}var DT=fe('<div style="display: flex; gap: 6px;"><div style="flex: 1;"><!></div> <div style="flex: 1;"><!></div></div>'),LT=fe('<!> <!> <div class="port-section"><div class="port-label-header">Data Parser Tuning</div> <div style="margin-top: 6px;"><!></div> <!> <!> <!></div>',1);function vf(n,t){ne(t,!0);const e=Nn("graph-actions");var i=LT(),r=_e(i);{let _=Q(()=>t.node.capacity||100);Yu(r,{label:"Capacity",min:1,step:1,get value(){return A(_)},onchange:v=>e.updateNodeConfig(t.node,{capacity:v})})}var s=yt(r,2);{let _=Q(()=>t.node.url||"");Uf(s,{label:"API URL",get value(){return A(_)},placeholder:"https://api.example.com/data.json",onchange:v=>e.updateNodeConfig(t.node,{url:v})})}var a=yt(s,2),o=yt(ft(a),2),l=ft(o);{let _=Q(()=>t.node.dataPath||""),v=Q(()=>[{value:"",label:"Auto-detect"},...(t.node.availableDataPaths||[]).map(E=>({value:E,label:E==="root"?"(Root Level)":E}))]);Ii(l,{label:"Target Array",get value(){return A(_)},get options(){return A(v)},onchange:E=>e.updateNodeConfig(t.node,{dataPath:E})})}ht(o);var c=yt(o,2);{let _=Q(()=>t.node.timeKey||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableColumns||[]).map(E=>({value:E,label:E}))]);Ii(c,{label:"Time/X-Axis Column",get value(){return A(_)},get options(){return A(v)},onchange:E=>e.updateNodeConfig(t.node,{timeKey:E})})}var d=yt(c,2);{let _=Q(()=>t.node.unpackArray||""),v=Q(()=>[{value:"",label:"-- None --"},...(t.node.availableNestedArrays||[]).map(E=>({value:E,label:E}))]);Ii(d,{label:"Unpack Inner Array (EAV)",get value(){return A(_)},get options(){return A(v)},onchange:E=>e.updateNodeConfig(t.node,{unpackArray:E})})}var p=yt(d,2);{var f=_=>{var v=DT(),E=ft(v),g=ft(E);{let T=Q(()=>t.node.unpackKey||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(h=>({value:h,label:h}))]);Ii(g,{label:"Key Column",get value(){return A(T)},get options(){return A(u)},onchange:h=>e.updateNodeConfig(t.node,{unpackKey:h})})}ht(E);var m=yt(E,2),M=ft(m);{let T=Q(()=>t.node.unpackValue||""),u=Q(()=>[{value:"",label:"-- Select --"},...(t.node.availableInnerColumns||[]).map(h=>({value:h,label:h}))]);Ii(M,{label:"Value Column",get value(){return A(T)},get options(){return A(u)},onchange:h=>e.updateNodeConfig(t.node,{unpackValue:h})})}ht(m),ht(v),U(_,v)};Ot(p,_=>{t.node.unpackArray&&_(f)})}ht(a),U(n,i),ie()}const PT=n=>{Y_(n,{})};var NT=fe("<!> <!> <!>",1),FT=fe('<div class="logic-tree svelte-1uha8ag"><!></div>'),UT=fe('<div class="viewport-wrapper svelte-1uha8ag"><!></div> <!>',1);function ZT(n,t){ne(t,!0);const e=p=>{j_(p,{children:(f,_)=>{var v=Ve(),E=_e(v);{var g=m=>{Hv(m,{})};Ot(E,m=>{A(c)&&m(g)})}U(f,v)},$$slots:{default:!0}})};Ta("settings-registry",{sprite:MT,mesh:AT,math:TT,"ring-buffer":IT,"static-array":RT,motion:CT,api:vf,"smhi-weather":vf});const r=new vg,s=new K_,a=new tE,o=new xT,l=new bT;let c=Ne(!1),d=Ne(!1);Va(()=>{Ut(d,!!localStorage.getItem("graph-state")),l.allocateBuffers(100),Ut(c,!0)}),Gu(()=>{r.destroy()}),Z_(n,{get viewsPanel(){return PT},get settingsPanel(){return e},children:(p,f)=>{var _=UT(),v=_e(_),E=ft(v);Rg(E,{get graph(){return s},get renderer(){return a},get compute(){return o},get pointer(){return l}}),ht(v);var g=yt(v,2);{var m=M=>{var T=FT(),u=ft(T);J_(u,{children:(h,b)=>{Q_(h,{id:"mouse-trail",children:(I,y)=>{var x=NT(),z=_e(x);Xd(z,{id:"x-coords",bufferId:"pointer-x"});var C=yt(z,2);Xd(C,{id:"y-coords",bufferId:"pointer-y"});var k=yt(C,2);wg(k,{id:"trail-renderer",textureId:"white-box",inputIds:["x-coords","y-coords"]}),U(I,x)},$$slots:{default:!0}})},$$slots:{default:!0}}),ht(T),U(M,T)};Ot(g,M=>{A(c)&&!A(d)&&M(m)})}U(p,_)}}),ie()}export{ZT as component};
