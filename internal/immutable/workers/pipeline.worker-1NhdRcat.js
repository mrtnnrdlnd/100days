(function(){"use strict";function j(e,l,o){let t=e.length,s,a;if(t===0){t=1e3,s=new Float64Array(t),a=new Float64Array(t);const r=(o-l)*.1,g=l-r,N=(o+r-g)/(t-1);for(let p=0;p<t;p++)s[p]=g+p*N,a[p]=NaN}else{s=new Float64Array(t),a=new Float64Array(t);for(let r=0;r<t;r++)s[r]=e[r].t,a[r]=e[r].v}return{tArr:s,vArr:a,len:t}}function q(e,l,o,t,s){let a=0;for(;a<o&&e[a]<t;)a++;a=Math.max(0,a-1);let r=o-1;for(;r>=0&&e[r]>s;)r--;r=Math.min(o-1,r+1);const g=Math.max(0,r-a+1);if(g<=0)return new Float64Array(0);const m=new Float64Array(g*2);let N=0;const p=s-t,c=t-p*1.5,f=s+p*1.5;for(let n=a;n<=r;n++){let u=e[n],i=l[n];if(n===a&&u<c&&n+1<=r){const h=e[n+1],_=l[n+1];!Number.isNaN(i)&&!Number.isNaN(_)&&h>u&&(i=i+(_-i)*((c-u)/(h-u)),u=c)}if(n===r&&u>f&&n-1>=a){const h=e[n-1],_=l[n-1];!Number.isNaN(i)&&!Number.isNaN(_)&&u>h&&(i=_+(i-_)*((f-h)/(u-h)),u=f)}m[N++]=u,m[N++]=i}return m}function U(e){const l=e.length;for(let t=0;t<l;t++){let s=t;for(let r=t+1;r<l;r++)Math.abs(e[r][t])>Math.abs(e[s][t])&&(s=r);const a=e[t];if(e[t]=e[s],e[s]=a,Math.abs(e[t][t])<1e-10)return null;for(let r=t+1;r<l;r++){const g=-e[r][t]/e[t][t];for(let m=t;m<l+1;m++)t===m?e[r][m]=0:e[r][m]+=g*e[t][m]}}const o=new Array(l).fill(0);for(let t=l-1;t>=0;t--){o[t]=e[t][l]/e[t][t];for(let s=t-1;s>=0;s--)e[s][l]-=e[s][t]*o[t]}return o}function $(e,l,o){const t=Math.abs(l);if(e.length<t+1)return null;const s=(e[0].t-o)/864e5,a=(e[e.length-1].t-o)/864e5,r=Math.max(1,a-s),g=l<0,m=g?1:0,N=[];for(let c=0;c<=t;c++){N[c]=new Array(t+2).fill(0);for(let n=0;n<=t;n++){let u=0;for(let i of e){let h=((i.t-o)/864e5-s)/r+m;u+=Math.pow(h,g?-(c+n):c+n)}N[c][n]=u}let f=0;for(let n of e){let u=((n.t-o)/864e5-s)/r+m;f+=n.v*Math.pow(u,g?-c:c)}N[c][t+1]=f}return{coeffs:U(N)||Array(t+1).fill(NaN),minX:s,scaleX:r,isNeg:g}}function R(e,l){if(e.length<2)return null;const o=(e[0].t-l)/864e5;let t=0,s=0,a=0,r=0,g=0;for(let c of e){const f=(c.t-l)/864e5-o+1;if(f<=0)continue;const n=Math.log(f);t+=n,s+=c.v,a+=c.v*n,r+=n*n,g++}const m=g*r-t*t,N=m===0?0:(g*a-s*t)/m,p=g>0?(s-N*t)/g:0;return{a:N,b:p,minX:o,valid:g}}function L(e,l){if(e.length<2)return null;const o=(e[0].t-l)/864e5;let t=0,s=0,a=0,r=0,g=0;for(let c of e){if(c.v<=0)continue;const f=(c.t-l)/864e5-o,n=Math.log(c.v);t+=f,s+=n,a+=f*n,r+=f*f,g++}const m=g*r-t*t,N=m===0?0:(g*a-t*s)/m;return{a:g>0?Math.exp((s-N*t)/g):NaN,b:N,minX:o,valid:g}}function C(e){if(e===0)return 0;const o=1-Math.max(.01,Math.min(.9999,Math.abs(e)/100)),t=Math.sqrt(-2*Math.log(o/2));return t-(2.515517+.802853*t+.010328*t*t)/(1+1.432788*t+.189269*t*t+.001308*t*t*t)}const I=17040672e5,P=864e5,O=31536e6,W=2592e6,B=6048e5,H=36e5,G=6e4,K=1e3;function S(e){const l=e.match(/^([\d.]+)(.+)$/),o=l&&parseFloat(l[1])||1,t=l?l[2]:"D",s=t==="p";let a=P;return t==="Y"?a=O:t==="M"?a=W:t==="W"?a=B:t==="h"?a=H:t==="min"?a=G:t==="s"&&(a=K),{amt:o,unit:t,ms:o*a,isPoints:s}}function F(e,l,o,t,s=[],a=!1,r=I){o==="trend"&&(o="poly_1"),o==="trend0"&&(o="poly_0");const g=e.length;if(g===0)return a?[]:s.map(f=>({t:f,v:NaN}));const m=o.startsWith("poly");if(["logreg","expreg"].includes(o)||m){const f=[];for(let n=0;n<g;n++)Number.isNaN(e[n])||f.push({t:l[n],v:e[n]});if(f.length<2&&!m)return a?[]:s.map(n=>({t:n,v:NaN}));if(f.length<1)return a?[]:s.map(n=>({t:n,v:NaN}));if(m){const n=o.match(/^poly_(-?\d+)$/),u=n?parseInt(n[1],10):2,i=Math.abs(u),h=$(f,u,r);if(!h||!h.coeffs)return a?[]:s.map(d=>({t:d,v:NaN}));const _=t??i+1;if(_<=i)return a?l.map(d=>({t:d,v:h.coeffs[_]})):s.map(d=>({t:d,v:h.coeffs[_]}));if(!a&&s.length>0)return s.map(d=>{const M=((d-r)/P-h.minX)/h.scaleX+(h.isNeg?1:0);let w=0;for(let b=0;b<=i;b++)w+=h.coeffs[b]*Math.pow(M,u<0?-b:b);return{t:d,v:w}});{const d=[];for(let v=0;v<g;v++){const w=((l[v]-r)/P-h.minX)/h.scaleX+(h.isNeg?1:0);let b=0;for(let x=0;x<=i;x++)b+=h.coeffs[x]*Math.pow(w,u<0?-x:x);d.push({t:l[v],v:b})}return d}}if(o==="logreg"){const n=R(f,r);if(!n)return a?[]:s.map(i=>({t:i,v:NaN}));const u=t??2;if(u===0)return a?l.map(i=>({t:i,v:n.a})):s.map(i=>({t:i,v:n.a}));if(u===1)return a?l.map(i=>({t:i,v:n.b})):s.map(i=>({t:i,v:n.b}));if(!a&&s.length>0)return s.map(i=>{const h=(i-r)/P-n.minX+1;return{t:i,v:h>0?n.a+n.b*Math.log(h):NaN}});{const i=[];for(let h=0;h<g;h++){const _=(l[h]-r)/P-n.minX+1;i.push({t:l[h],v:_>0?n.a+n.b*Math.log(_):NaN})}return i}}if(o==="expreg"){const n=L(f,r);if(!n)return a?[]:s.map(i=>({t:i,v:NaN}));const u=t??2;if(u===0)return a?l.map(i=>({t:i,v:n.a})):s.map(i=>({t:i,v:n.a}));if(u===1)return a?l.map(i=>({t:i,v:n.b})):s.map(i=>({t:i,v:n.b}));if(!a&&s.length>0)return s.map(i=>{const h=(i-r)/P-n.minX;return{t:i,v:n.a*Math.exp(n.b*h)}});{const i=[];for(let h=0;h<g;h++){const _=(l[h]-r)/P-n.minX;i.push({t:l[h],v:n.a*Math.exp(n.b*_)})}return i}}}if(o==="arr"||o==="raw"){if(!a)return s.map(n=>({t:n,v:e[g-1]}));const f=[];for(let n=0;n<g;n++)f.push({t:l[n],v:e[n]});return f}const N=e.filter(f=>!Number.isNaN(f)),p=N.length;if(p===0)return a?[]:s.map(f=>({t:f,v:NaN}));let c=NaN;if(o==="first")c=N[0];else if(o==="last")c=N[p-1];else if(o==="count")c=p;else if(o==="p"){const f=t??50,n=[...N].sort((d,v)=>d-v),u=(p-1)*(Math.max(0,Math.min(100,f))/100),i=Math.floor(u),h=Math.ceil(u),_=u-i;c=n[i]*(1-_)+n[h]*_}else{let f=0,n=1/0,u=-1/0;for(let i=0;i<p;i++){const h=N[i];f+=h,h<n&&(n=h),h>u&&(u=h)}if(o==="sum")c=f;else if(o==="min")c=n;else if(o==="max")c=u;else if(o==="avg")c=f/p;else if(o==="sd"||o==="ci"){const i=f/p;let h=0;if(p>1){for(let d=0;d<p;d++)h+=Math.pow(N[d]-i,2);h/=p-1}const _=Math.sqrt(h);if(o==="sd")c=_*(t??1);else{const d=t??95,v=C(d)*(_/Math.sqrt(p));c=i+v*(d>=0?1:-1)}}else c=f/p}return a?l.map(f=>({t:f,v:c})):s.map(f=>({t:f,v:c}))}function Q(e,l,o,t){let s=17040672e5;if(e.startX){const d=new Date(e.startX).getTime();isNaN(d)||(s=d)}const a=e.interpolate??!1,r=e.connectIntervals??!1,{ms:g,unit:m,amt:N,isPoints:p}=S(e.interval||"1D"),c=e.aggregator||"arr",f=[],n=[],u=c.replace(/_(-?\d+)$/,""),i=["poly","logreg","expreg","arr","raw","trend","trend0"].includes(u);let h=!1;if(i)if(u==="poly"||u==="trend"||u==="trend0"){let d=2;const v=c.match(/_(-?\d+)$/);v?d=parseInt(v[1],10):u==="trend"?d=1:u==="trend0"&&(d=0);const M=Math.abs(d);e.aggregatorParam!==void 0&&e.aggregatorParam<=M&&(h=!0)}else(u==="logreg"||u==="expreg")&&e.aggregatorParam!==void 0&&e.aggregatorParam<2&&(h=!0);const _=d=>{for(let v=0;v<d.length;v++)f.push(d[v].t),n.push(d[v].v);i&&!h&&!r&&n.length>0&&(Number.isNaN(n[n.length-1])||(f.push(f[f.length-1]),n.push(NaN)))};if(p){let d=[],v=[];const M=()=>{if(d.length===0)return;let w=0;for(let y=0;y<v.length;y++)w+=v[y];let b=[],x=u==="arr"||u==="raw";if(i&&!h)if(a){const X=v[0],V=v[v.length-1];for(let D=0;D<=50;D++)b.push(X+(V-X)*(D/50))}else for(let y=0;y<v.length;y++)b.push(v[y]);else x||b.push(w/d.length);_(F(d,v,c,e.aggregatorParam,b,x,s)),d=[],v=[]};for(let w=0;w<t;w++){const b=l[w],x=o[w];if(Number.isNaN(x)){M(),f.push(b),n.push(NaN);continue}d.push(x),v.push(b),d.length>=N&&M()}M()}else{let d=null,v=[],M=[];const w=()=>{if(v.length===0||d===null)return;let b=[],x=u==="arr"||u==="raw";if(i&&!h)if(a)for(let X=0;X<=50;X++)b.push(d+g*(X/50));else for(let y=0;y<M.length;y++)b.push(M[y]);else x||b.push(d+g/2);_(F(v,M,c,e.aggregatorParam,b,x,s)),v=[],M=[]};for(let b=0;b<t;b++){const x=l[b],y=o[b];if(Number.isNaN(y)){w(),f.push(x),n.push(NaN);continue}let X;if(m==="M"){const V=new Date(x);X=Date.UTC(V.getUTCFullYear(),Math.floor(V.getUTCMonth()/N)*N,1)}else if(m==="Y"){const V=new Date(x);X=Date.UTC(Math.floor(V.getUTCFullYear()/N)*N,0,1)}else X=s+Math.floor((x-s)/g)*g;d!==null&&X!==d&&w(),d=X,v.push(y),M.push(x)}w()}return{tArr:new Float64Array(f),vArr:new Float64Array(n),len:f.length}}function J(e,l,o,t){let s=I;if(e.startX){const p=new Date(e.startX).getTime();isNaN(p)||(s=p)}const{ms:a,amt:r,isPoints:g}=S(e.size||"1D"),m=e.aggregator||"arr",N=new Float64Array(t);for(let p=0;p<t;p++){const c=l[p],f=o[p];if(Number.isNaN(f)){N[p]=NaN;continue}let n=p;if(g)n=Math.max(0,p-r+1);else{const _=c-a;for(;n>0&&l[n-1]>_;)n--}const u=[],i=[];for(let _=n;_<=p;_++)u.push(o[_]),i.push(l[_]);const h=F(u,i,m,e.aggregatorParam,[c],!1,s);N[p]=h.length>0?h[0].v:NaN}return N}function T(e,l,o){const t=e.value,s=e.operator;for(let a=0;a<o;a++)Number.isNaN(l[a])||(s==="+"?l[a]+=t:s==="-"?l[a]-=t:s==="*"?l[a]*=t:s==="/"&&(l[a]/=t))}function Y(e,l,o){let t=0,s=e-1;for(;t<=s;){const a=t+s>>1,r=l(a);if(r===o)return{exact:a,left:a,right:a};r<o?t=a+1:s=a-1}return{exact:-1,left:s,right:t}}function z(e,l){if(!e||!e.length)return NaN;const{exact:o}=Y(e.length,t=>e[t].t,l);return o>=0?e[o].v:NaN}function Z(e,l){if(!e||!e.length)return NaN;const o=e.length;if(l<e[0].t||l>e[o-1].t)return NaN;const{exact:t,left:s,right:a}=Y(o,N=>e[N].t,l);if(t>=0)return e[t].v;const r=e[s],g=e[a];if(!r||!g||Number.isNaN(r.v)||Number.isNaN(g.v))return r&&!Number.isNaN(r.v)?r.v:NaN;const m=(l-r.t)/(g.t-r.t);return r.v+m*(g.v-r.v)}const A=["E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","exp","expm1","floor","fround","hypot","imul","log","log10","log1p","log2","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];function tt(e,l,o,t,s,a={},r=[],g,m){const N=A.map(c=>`const ${c} = Math.${c};`).join(`
`),p={_poly:{},_logreg:null,_expreg:null,_prevVal:NaN,_min:void 0,_max:void 0,_sum:void 0,_avg:void 0,_first:void 0,_last:void 0,_count:void 0,getPts:()=>{const c=[];for(let f=0;f<t;f++)Number.isNaN(o[f])||c.push({t:l[f],v:o[f]});return c},_getCachedVal:(c,f,n=!1)=>{const u=r.find(i=>i.name===c);return u&&a[u.sourceId]?n?z(a[u.sourceId],f):Z(a[u.sourceId],f):NaN},calcPoly:$,calcLog:R,calcExp:L};try{const f=new Function("t","y","y_exact","y2",`
            ${N}
            const x = (t - ${s}) / ${P};
            
            const _var = (name, exact = false) => {
                if (!name || name === 'y') return exact ? y_exact : y;
                if (name === 'y2') return y2;
                return this._getCachedVal(name, t, exact);
            };

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

            const min = () => {
                if (this._min === undefined) {
                    let m = Infinity;
                    const pts = this.getPts();
                    for(let i = 0; i < pts.length; i++) if(pts[i].v < m) m = pts[i].v;
                    this._min = m === Infinity ? NaN : m;
                }
                return this._min;
            };

            const max = () => {
                if (this._max === undefined) {
                    let m = -Infinity;
                    const pts = this.getPts();
                    for(let i = 0; i < pts.length; i++) if(pts[i].v > m) m = pts[i].v;
                    this._max = m === -Infinity ? NaN : m;
                }
                return this._max;
            };

            const sum = () => {
                if (this._sum === undefined) {
                    let s = 0;
                    const pts = this.getPts();
                    for(let i = 0; i < pts.length; i++) s += pts[i].v;
                    this._sum = s;
                }
                return this._sum;
            };

            const avg = () => {
                if (this._avg === undefined) {
                    const pts = this.getPts();
                    if (pts.length === 0) this._avg = NaN;
                    else {
                        let s = 0;
                        for(let i = 0; i < pts.length; i++) s += pts[i].v;
                        this._avg = s / pts.length;
                    }
                }
                return this._avg;
            };

            const count = () => {
                if (this._count === undefined) this._count = this.getPts().length;
                return this._count;
            };

            const first = () => {
                if (this._first === undefined) {
                    const pts = this.getPts();
                    this._first = pts.length > 0 ? pts[0].v : NaN;
                }
                return this._first;
            };

            const last = () => {
                if (this._last === undefined) {
                    const pts = this.getPts();
                    this._last = pts.length > 0 ? pts[pts.length-1].v : NaN;
                }
                return this._last;
            };

            const p = (val, ptile) => {
                const pts = this.getPts().map(pt => pt.v).filter(v => !Number.isNaN(v)).sort((a,b) => a-b);
                const vn = pts.length;
                if(vn === 0) return NaN;
                const idx = (vn - 1) * (Math.max(0, Math.min(100, ptile)) / 100);
                const lower = Math.floor(idx);
                const upper = Math.ceil(idx);
                const weight = idx - lower;
                return pts[lower] * (1 - weight) + pts[upper] * weight;
            };

            const sd = (val, mult) => {
                const pts = this.getPts().map(pt => pt.v).filter(v => !Number.isNaN(v));
                const vn = pts.length;
                if(vn < 2) return NaN;
                const mean = pts.reduce((a,b) => a+b, 0) / vn;
                let variance = 0;
                for(let i = 0; i < vn; i++) variance += Math.pow(pts[i] - mean, 2);
                return Math.sqrt(variance / (vn - 1)) * mult;
            };

            const ci = (val, conf) => {
                const pts = this.getPts().map(pt => pt.v).filter(v => !Number.isNaN(v));
                const vn = pts.length;
                if(vn < 2) return NaN;
                const mean = pts.reduce((a,b) => a+b, 0) / vn;
                let variance = 0;
                for(let i = 0; i < vn; i++) variance += Math.pow(pts[i] - mean, 2);
                const std = Math.sqrt(variance / (vn - 1));
                const getZ = (c) => {
                    if (c === 0) return 0;
                    const pval = Math.max(0.01, Math.min(0.9999, Math.abs(c) / 100));
                    const alpha = 1 - pval;
                    const tVal = Math.sqrt(-2 * Math.log(alpha / 2));
                    return tVal - (2.515517 + 0.802853 * tVal + 0.010328 * tVal * tVal) / (1 + 1.432788 * tVal + 0.189269 * tVal * tVal + 0.001308 * tVal * tVal * tVal);
                };
                const margin = getZ(conf) * (std / Math.sqrt(vn));
                return mean + (margin * (conf >= 0 ? 1 : -1));
            };

            const poly = (degree = 2) => {
                if (!this._poly[degree]) this._poly[degree] = this.calcPoly(this.getPts(), degree, ${s});
                const p = this._poly[degree];
                const absDeg = Math.abs(degree);
                if (!p || !p.coeffs) return Array(absDeg + 2).fill(NaN);
                const px = (t - ${s}) / ${P};
                let scaledX = (px - p.minX) / p.scaleX + (p.isNeg ? 1 : 0);
                let yVal = 0;
                for (let i = 0; i <= absDeg; i++) yVal += p.coeffs[i] * Math.pow(scaledX, degree < 0 ? -i : i);
                return [...p.coeffs, yVal];
            };

            const trend = () => { return poly(1); };
            const trend0 = () => { return poly(0); };

            const logreg = () => {
                if (!this._logreg) this._logreg = this.calcLog(this.getPts(), ${s});
                if (!this._logreg) return [0, 0, NaN];
                const px = ((t - ${s}) / ${P}) - this._logreg.minX + 1;
                const yVal = px > 0 ? (this._logreg.a + this._logreg.b * Math.log(px)) : NaN;
                return [this._logreg.a, this._logreg.b, yVal];
            };

            const expreg = () => {
                if (!this._expreg) this._expreg = this.calcExp(this.getPts(), ${s});
                if (!this._expreg) return [0, 0, NaN];
                const px = ((t - ${s}) / ${P}) - this._expreg.minX;
                const yVal = this._expreg.a * Math.exp(this._expreg.b * px);
                return [this._expreg.a, this._expreg.b, yVal];
            };

            return ${e};
        `).bind(p);for(let n=0;n<t;n++){const u=g?g[n]:NaN,i=m?m[n]:o[n],h=f(l[n],o[n],i,u);o[n]=Number.isNaN(Number(h))?NaN:Number(h)}}catch{}}function et(e,l,o,t,s={}){const a=e.expression;let r=I;if(e.startX){const c=new Date(e.startX).getTime();isNaN(c)||(r=c)}if(!isNaN(Number(a))){const c=Number(a);for(let f=0;f<t;f++)Number.isNaN(o[f])||(o[f]=c);return{tArr:l,vArr:o,len:t}}let g=l,m=o,N=new Float64Array(t);for(let c=0;c<t;c++)N[c]=o[c];let p=t;if(e.bindings&&e.bindings.length>0){const c=e.bindings.filter(f=>new RegExp(`_var\\('${f.name}'[,\\)]`).test(a));if(c.length>0){const f=new Set;for(let n=0;n<t;n++)f.add(l[n]);for(const n of c){const u=s[n.sourceId];if(u)for(let i=0;i<u.length;i++)f.add(u[i].t)}if(f.size>t){const n=Array.from(f).sort((i,h)=>i-h);p=n.length,g=new Float64Array(p),m=new Float64Array(p),N=new Float64Array(p);let u=0;for(let i=0;i<p;i++){const h=n[i];for(g[i]=h;u<t-1&&l[u]<h;)u++;if(l[u]===h)m[i]=o[u],N[i]=o[u];else if(u>0&&l[u]>h){const _=l[u-1],d=o[u-1],v=l[u],M=o[u];!Number.isNaN(d)&&!Number.isNaN(M)?(m[i]=d+(M-d)*((h-_)/(v-_)),N[i]=NaN):(m[i]=NaN,N[i]=NaN)}else m[i]=NaN,N[i]=NaN}}}}return tt(a,g,m,p,r,s,e.bindings||[],void 0,N),{tArr:g,vArr:m,len:p}}function nt(e,l,o,t){if(!e||e.length===0)return new Float64Array(0);if(e.length===1&&e[0].type==="formula"){const N=e[0].expression;if(N&&!Number.isNaN(Number(N))&&N.trim()!==""){const p=Number(N),c=P*100;return new Float64Array([o-c,p,t+c,p])}}const s=e[0],a=s&&s.type==="source"&&s.sourceId?l[s.sourceId]||[]:[];let{tArr:r,vArr:g,len:m}=j(a,o,t);for(let N=1;N<e.length;N++){const p=e[N];if(p.type==="resample"){const c=Q(p,r,g,m);r=c.tArr,g=c.vArr,m=c.len}else if(p.type==="window")g=J(p,r,g,m);else if(p.type==="math")T(p,g,m);else if(p.type==="formula"){const c=et(p,r,g,m,l);c&&(r=c.tArr,g=c.vArr,m=c.len)}}return q(r,g,m,o,t)}let k={};const E=self;E.onmessage=e=>{const l=e.data;if(l.type==="DATA")k=l.data;else if(l.type==="CALC_PIPELINE"){const{pipelineId:o,pipeline:t,viewStart:s,viewEnd:a}=l;try{const r=nt(t,k,s,a);E.postMessage({pipelineId:o,result:r},[r.buffer])}catch{const g=new Float64Array(0);E.postMessage({pipelineId:o,result:g},[g.buffer])}}}})();
