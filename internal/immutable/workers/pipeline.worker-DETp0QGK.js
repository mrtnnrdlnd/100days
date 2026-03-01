(function(){"use strict";function Z(n){const r=n.length;for(let t=0;t<r;t++){let o=t;for(let m=t+1;m<r;m++)Math.abs(n[m][t])>Math.abs(n[o][t])&&(o=m);const g=n[t];if(n[t]=n[o],n[o]=g,Math.abs(n[t][t])<1e-10)return null;for(let m=t+1;m<r;m++){const d=-n[m][t]/n[t][t];for(let l=t;l<r+1;l++)t===l?n[m][l]=0:n[m][l]+=d*n[t][l]}}const s=new Array(r).fill(0);for(let t=r-1;t>=0;t--){s[t]=n[t][r]/n[t][t];for(let o=t-1;o>=0;o--)n[o][r]-=n[o][t]*s[t]}return s}function E(n,r,s){if(n.length<r+1)return null;const t=(n[0].t-s)/864e5,o=(n[n.length-1].t-s)/864e5,g=Math.max(1,o-t),m=[];for(let l=0;l<=r;l++){m[l]=new Array(r+2).fill(0);for(let c=0;c<=r;c++){let f=0;for(let a of n)f+=Math.pow(((a.t-s)/864e5-t)/g,l+c);m[l][c]=f}let u=0;for(let c of n)u+=c.v*Math.pow(((c.t-s)/864e5-t)/g,l);m[l][r+1]=u}return{coeffs:Z(m)||Array(r+1).fill(NaN),minX:t,scaleX:g}}function C(n,r){if(n.length<2)return null;const s=(n[0].t-r)/864e5;let t=0,o=0,g=0,m=0,d=0;for(let f of n){const a=(f.t-r)/864e5-s+1;if(a<=0)continue;const e=Math.log(a);t+=e,o+=f.v,g+=f.v*e,m+=e*e,d++}const l=d*m-t*t,u=l===0?0:(d*g-o*t)/l,c=d>0?(o-u*t)/d:0;return{a:u,b:c,minX:s,valid:d}}function R(n,r){if(n.length<2)return null;const s=(n[0].t-r)/864e5;let t=0,o=0,g=0,m=0,d=0;for(let f of n){if(f.v<=0)continue;const a=(f.t-r)/864e5-s,e=Math.log(f.v);t+=a,o+=e,g+=a*e,m+=a*a,d++}const l=d*m-t*t,u=l===0?0:(d*g-t*o)/l;return{a:d>0?Math.exp((o-u*t)/d):NaN,b:u,minX:s,valid:d}}let U={};const Y=self,O=["E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","exp","expm1","floor","fround","hypot","imul","log","log10","log1p","log2","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];function B(n){if(n===0)return 0;const s=1-Math.max(.01,Math.min(.9999,Math.abs(n)/100)),t=Math.sqrt(-2*Math.log(s/2));return t-(2.515517+.802853*t+.010328*t*t)/(1+1.432788*t+.189269*t*t+.001308*t*t*t)}function q(n){const r=n.match(/^([\d.]+)(.+)$/),s=r&&parseFloat(r[1])||1,t=r?r[2]:"D",o=t==="p";let g=864e5;return t==="Y"?g=31536e6:t==="M"?g=2592e6:t==="W"?g=6048e5:t==="h"?g=36e5:t==="min"?g=6e4:t==="s"&&(g=1e3),{amt:s,unit:t,ms:s*g,isPoints:o}}function D(n,r,s,t,o,g=!1){s==="trend"&&(s="poly_1"),s==="trend0"&&(s="poly_0");const m=n.length;if(m===0)return g?[]:[{t:o,v:NaN}];const d=s.startsWith("poly");if(["logreg","expreg"].includes(s)||d){const f=[];for(let e=0;e<m;e++)Number.isNaN(n[e])||f.push({t:r[e],v:n[e]});if(f.length<2&&!d)return g?[]:[{t:o,v:NaN}];if(f.length<1)return g?[]:[{t:o,v:NaN}];const a=17040672e5;if(d){const e=s.match(/^poly_(\d+)$/),p=e?parseInt(e[1],10):2,i=E(f,p,a);if(!i||!i.coeffs)return g?[]:[{t:o,v:NaN}];if(g){const h=[];for(let x=0;x<m;x++){const b=((r[x]-a)/864e5-i.minX)/i.scaleX;let v=0;for(let N=0;N<=p;N++)v+=i.coeffs[N]*Math.pow(b,N);h.push({t:r[x],v})}return h}else{const h=t??p+1;if(h<=p)return[{t:o,v:i.coeffs[h]}];const _=((o-a)/864e5-i.minX)/i.scaleX;let b=0;for(let v=0;v<=p;v++)b+=i.coeffs[v]*Math.pow(_,v);return[{t:o,v:b}]}}if(s==="logreg"){const e=C(f,a);if(!e)return g?[]:[{t:o,v:NaN}];if(g){const p=[];for(let i=0;i<m;i++){const h=(r[i]-a)/864e5-e.minX+1;p.push({t:r[i],v:h>0?e.a+e.b*Math.log(h):NaN})}return p}else{const p=t??2;if(p===0)return[{t:o,v:e.a}];if(p===1)return[{t:o,v:e.b}];const i=(o-a)/864e5-e.minX+1;return[{t:o,v:i>0?e.a+e.b*Math.log(i):NaN}]}}if(s==="expreg"){const e=R(f,a);if(!e)return g?[]:[{t:o,v:NaN}];if(g){const p=[];for(let i=0;i<m;i++){const h=(r[i]-a)/864e5-e.minX;p.push({t:r[i],v:e.a*Math.exp(e.b*h)})}return p}else{const p=t??2;if(p===0)return[{t:o,v:e.a}];if(p===1)return[{t:o,v:e.b}];const i=(o-a)/864e5-e.minX;return[{t:o,v:e.a*Math.exp(e.b*i)}]}}}if(s==="arr"||s==="raw"){if(!g)return[{t:o,v:n[m-1]}];const f=[];for(let a=0;a<m;a++)f.push({t:r[a],v:n[a]});return f}const l=n.filter(f=>!Number.isNaN(f)),u=l.length;if(u===0)return g?[]:[{t:o,v:NaN}];let c=NaN;if(s==="first")c=l[0];else if(s==="last")c=l[u-1];else if(s==="count")c=u;else if(s==="p"){const f=t??50,a=[...l].sort((x,_)=>x-_),e=(u-1)*(Math.max(0,Math.min(100,f))/100),p=Math.floor(e),i=Math.ceil(e),h=e-p;c=a[p]*(1-h)+a[i]*h}else{let f=0,a=1/0,e=-1/0;for(let p=0;p<u;p++){const i=l[p];f+=i,i<a&&(a=i),i>e&&(e=i)}if(s==="sum")c=f;else if(s==="min")c=a;else if(s==="max")c=e;else if(s==="avg")c=f/u;else if(s==="sd"||s==="ci"){const p=f/u;let i=0;if(u>1){for(let x=0;x<u;x++)i+=Math.pow(l[x]-p,2);i/=u-1}const h=Math.sqrt(i);if(s==="sd")c=h*(t??1);else{const x=t??95,_=B(x)*(h/Math.sqrt(u));c=p+_*(x>=0?1:-1)}}else c=f/u}return[{t:o,v:c}]}Y.onmessage=n=>{const r=n.data;if(r.type==="DATA")U=r.data;else if(r.type==="CALC_PIPELINE"){const{pipelineId:s,pipeline:t,viewStart:o,viewEnd:g}=r;if(!t||t.length===0||!t[0].sourceId){const h=new Float64Array(0);Y.postMessage({pipelineId:s,result:h},[h.buffer]);return}const m=t[0],d=U[m.sourceId]||[];let l=d.length,u=new Float64Array(l),c=new Float64Array(l);for(let h=0;h<l;h++)u[h]=d[h].t,c[h]=d[h].v;for(let h=1;h<t.length;h++){const x=t[h];if(x.type==="resample"){const _=x,{ms:b,unit:v,amt:N,isPoints:S}=q(_.interval||"1D"),y=_.aggregator||"arr",w=17040672e5,I=[],L=[],F=M=>{for(let X=0;X<M.length;X++)I.push(M[X].t),L.push(M[X].v);M.length>0&&["poly","logreg","expreg","arr","raw","trend","trend0"].includes(y.replace(/_\d+$/,""))&&(I.push(M[M.length-1].t),L.push(NaN))};if(S)for(let M=0;M<l;M+=N){const X=[],P=[];let $=0;for(let V=M;V<M+N&&V<l;V++)X.push(c[V]),P.push(u[V]),$+=u[V];const j=$/X.length;F(D(X,P,y,_.aggregatorParam,j,!0))}else{let M=null,X=[],P=[];for(let $=0;$<l;$++){const j=u[$];let V;if(v==="M"){const k=new Date(j);V=Date.UTC(k.getUTCFullYear(),Math.floor(k.getUTCMonth()/N)*N,1)}else if(v==="Y"){const k=new Date(j);V=Date.UTC(Math.floor(k.getUTCFullYear()/N)*N,0,1)}else V=w+Math.floor((j-w)/b)*b;if(M!==null&&V!==M){const k=M+b/2;F(D(X,P,y,_.aggregatorParam,k,!0)),X=[],P=[]}M=V,X.push(c[$]),P.push(u[$])}if(X.length>0&&M!==null){const $=M+b/2;F(D(X,P,y,_.aggregatorParam,$,!0))}}l=I.length,u=new Float64Array(I),c=new Float64Array(L)}else if(x.type==="window"){const _=x,{ms:b,amt:v,isPoints:N}=q(_.size||"1D"),S=_.aggregator||"arr",y=new Float64Array(l);for(let w=0;w<l;w++){const I=u[w];let L=w;if(N)L=Math.max(0,w-v+1);else{const P=I-b;for(;L>0&&u[L-1]>P;)L--}const F=[],M=[];for(let P=L;P<=w;P++)F.push(c[P]),M.push(u[P]);const X=D(F,M,S,_.aggregatorParam,I,!1);y[w]=X.length>0?X[0].v:NaN}c=y}else if(x.type==="math"){const _=x,b=_.value,v=_.operator;for(let N=0;N<l;N++)v==="+"?c[N]+=b:v==="-"?c[N]-=b:v==="*"?c[N]*=b:v==="/"&&(c[N]/=b)}else if(x.type==="formula"){const b=x.expression;if(isNaN(Number(b))){const v=O.map(y=>`const ${y} = Math.${y};`).join(`
`),N=17040672e5,S={_poly:{},_logreg:null,_expreg:null,_prevVal:NaN,getPts:()=>{const y=[];for(let w=0;w<l;w++)Number.isNaN(c[w])||y.push({t:u[w],v:c[w]});return y},calcPoly:E,calcLog:C,calcExp:R};try{const w=new Function("t","y",`
                            ${v}
                            const x = (t - ${N}) / 86400000;
                            const _var = () => y;

                            const filter = (val, op, thresh) => {
                                if (op === '>') return val > thresh ? val : NaN;
                                if (op === '<') return val < thresh ? val : NaN;
                                if (op === '>=') return val >= thresh ? val : NaN;
                                if (op === '<=') return val <= thresh ? val : NaN;
                                if (op === '==') return val === thresh ? val : NaN;
                                return val;
                            };

                            const diff = (val) => {
                                const res = val - this._prevVal;
                                this._prevVal = val;
                                return res;
                            };

                            const poly = (degree = 2) => {
                                if (!this._poly[degree]) this._poly[degree] = this.calcPoly(this.getPts(), degree, ${N});
                                const p = this._poly[degree];
                                if (!p || !p.coeffs) return Array(degree + 2).fill(NaN);
                                const px = (t - ${N}) / 86400000;
                                const scaledX = (px - p.minX) / p.scaleX;
                                let yVal = 0;
                                for (let i = 0; i <= degree; i++) yVal += p.coeffs[i] * Math.pow(scaledX, i);
                                return [...p.coeffs, yVal];
                            };

                            // Bakåtkompatibilitet
                            const trend = () => { return poly(1); };
                            const trend0 = () => { return poly(0); };

                            const logreg = () => {
                                if (!this._logreg) this._logreg = this.calcLog(this.getPts(), ${N});
                                if (!this._logreg) return [0, 0, NaN];
                                const px = ((t - ${N}) / 86400000) - this._logreg.minX + 1;
                                const yVal = px > 0 ? (this._logreg.a + this._logreg.b * Math.log(px)) : NaN;
                                return [this._logreg.a, this._logreg.b, yVal];
                            };

                            const expreg = () => {
                                if (!this._expreg) this._expreg = this.calcExp(this.getPts(), ${N});
                                if (!this._expreg) return [0, 0, NaN];
                                const px = ((t - ${N}) / 86400000) - this._expreg.minX;
                                const yVal = this._expreg.a * Math.exp(this._expreg.b * px);
                                return [this._expreg.a, this._expreg.b, yVal];
                            };

                            return ${b};
                        `).bind(S);for(let I=0;I<l;I++){const L=w(u[I],c[I]);c[I]=Number.isNaN(Number(L))?NaN:Number(L)}}catch(y){console.error("Formula error:",y)}}else{const v=Number(b);for(let N=0;N<l;N++)c[N]=v}}}let f=0;for(;f<l&&u[f]<o;)f++;f=Math.max(0,f-1);let a=l-1;for(;a>=0&&u[a]>g;)a--;a=Math.min(l-1,a+1);const e=Math.max(0,a-f+1),p=new Float64Array(e*2);let i=0;if(e>0)for(let h=f;h<=a;h++)p[i++]=u[h],p[i++]=c[h];Y.postMessage({pipelineId:s,result:p},[p.buffer])}}})();
