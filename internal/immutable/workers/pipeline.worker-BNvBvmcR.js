(function(){"use strict";function Y(e,i,o){let t=e.length,s,r;if(t===0){t=1e3,s=new Float64Array(t),r=new Float64Array(t);const u=(o-i)*.1,g=i-u,N=(o+u-g)/(t-1);for(let p=0;p<t;p++)s[p]=g+p*N,r[p]=0}else{s=new Float64Array(t),r=new Float64Array(t);for(let u=0;u<t;u++)s[u]=e[u].t,r[u]=e[u].v}return{tArr:s,vArr:r,len:t}}function R(e,i,o,t,s){let r=0;for(;r<o&&e[r]<t;)r++;r=Math.max(0,r-1);let u=o-1;for(;u>=0&&e[u]>s;)u--;u=Math.min(o-1,u+1);const g=Math.max(0,u-r+1);if(g<=0)return new Float64Array(0);const v=new Float64Array(g*2);let N=0;const p=s-t,c=t-p*1.5,a=s+p*1.5;for(let n=r;n<=u;n++){let f=e[n],l=i[n];if(n===r&&f<c&&n+1<=u){const h=e[n+1],b=i[n+1];!Number.isNaN(l)&&!Number.isNaN(b)&&h>f&&(l=l+(b-l)*((c-f)/(h-f)),f=c)}if(n===u&&f>a&&n-1>=r){const h=e[n-1],b=i[n-1];!Number.isNaN(l)&&!Number.isNaN(b)&&f>h&&(l=b+(l-b)*((a-h)/(f-h)),f=a)}v[N++]=f,v[N++]=l}return v}function S(e){const i=e.length;for(let t=0;t<i;t++){let s=t;for(let u=t+1;u<i;u++)Math.abs(e[u][t])>Math.abs(e[s][t])&&(s=u);const r=e[t];if(e[t]=e[s],e[s]=r,Math.abs(e[t][t])<1e-10)return null;for(let u=t+1;u<i;u++){const g=-e[u][t]/e[t][t];for(let v=t;v<i+1;v++)t===v?e[u][v]=0:e[u][v]+=g*e[t][v]}}const o=new Array(i).fill(0);for(let t=i-1;t>=0;t--){o[t]=e[t][i]/e[t][t];for(let s=t-1;s>=0;s--)e[s][i]-=e[s][t]*o[t]}return o}function D(e,i,o){const t=Math.abs(i);if(e.length<t+1)return null;const s=(e[0].t-o)/864e5,r=(e[e.length-1].t-o)/864e5,u=Math.max(1,r-s),g=i<0,v=g?1:0,N=[];for(let c=0;c<=t;c++){N[c]=new Array(t+2).fill(0);for(let n=0;n<=t;n++){let f=0;for(let l of e){let h=((l.t-o)/864e5-s)/u+v;f+=Math.pow(h,g?-(c+n):c+n)}N[c][n]=f}let a=0;for(let n of e){let f=((n.t-o)/864e5-s)/u+v;a+=n.v*Math.pow(f,g?-c:c)}N[c][t+1]=a}return{coeffs:S(N)||Array(t+1).fill(NaN),minX:s,scaleX:u,isNeg:g}}function L(e,i){if(e.length<2)return null;const o=(e[0].t-i)/864e5;let t=0,s=0,r=0,u=0,g=0;for(let c of e){const a=(c.t-i)/864e5-o+1;if(a<=0)continue;const n=Math.log(a);t+=n,s+=c.v,r+=c.v*n,u+=n*n,g++}const v=g*u-t*t,N=v===0?0:(g*r-s*t)/v,p=g>0?(s-N*t)/g:0;return{a:N,b:p,minX:o,valid:g}}function $(e,i){if(e.length<2)return null;const o=(e[0].t-i)/864e5;let t=0,s=0,r=0,u=0,g=0;for(let c of e){if(c.v<=0)continue;const a=(c.t-i)/864e5-o,n=Math.log(c.v);t+=a,s+=n,r+=a*n,u+=a*a,g++}const v=g*u-t*t,N=v===0?0:(g*r-t*s)/v;return{a:g>0?Math.exp((s-N*t)/g):NaN,b:N,minX:o,valid:g}}function q(e){if(e===0)return 0;const o=1-Math.max(.01,Math.min(.9999,Math.abs(e)/100)),t=Math.sqrt(-2*Math.log(o/2));return t-(2.515517+.802853*t+.010328*t*t)/(1+1.432788*t+.189269*t*t+.001308*t*t*t)}function k(e){const i=e.match(/^([\d.]+)(.+)$/),o=i&&parseFloat(i[1])||1,t=i?i[2]:"D",s=t==="p";let r=864e5;return t==="Y"?r=31536e6:t==="M"?r=2592e6:t==="W"?r=6048e5:t==="h"?r=36e5:t==="min"?r=6e4:t==="s"&&(r=1e3),{amt:o,unit:t,ms:o*r,isPoints:s}}function V(e,i,o,t,s=[],r=!1,u=17040672e5){o==="trend"&&(o="poly_1"),o==="trend0"&&(o="poly_0");const g=e.length;if(g===0)return r?[]:s.map(a=>({t:a,v:NaN}));const v=o.startsWith("poly");if(["logreg","expreg"].includes(o)||v){const a=[];for(let n=0;n<g;n++)Number.isNaN(e[n])||a.push({t:i[n],v:e[n]});if(a.length<2&&!v)return r?[]:s.map(n=>({t:n,v:NaN}));if(a.length<1)return r?[]:s.map(n=>({t:n,v:NaN}));if(v){const n=o.match(/^poly_(-?\d+)$/),f=n?parseInt(n[1],10):2,l=Math.abs(f),h=D(a,f,u);if(!h||!h.coeffs)return r?[]:s.map(m=>({t:m,v:NaN}));const b=t??l+1;if(b<=l)return r?i.map(m=>({t:m,v:h.coeffs[b]})):s.map(m=>({t:m,v:h.coeffs[b]}));if(!r&&s.length>0)return s.map(m=>{let M=((m-u)/864e5-h.minX)/h.scaleX+(h.isNeg?1:0),w=0;for(let x=0;x<=l;x++)w+=h.coeffs[x]*Math.pow(M,f<0?-x:x);return{t:m,v:w}});{const m=[];for(let d=0;d<g;d++){let w=((i[d]-u)/864e5-h.minX)/h.scaleX+(h.isNeg?1:0),x=0;for(let _=0;_<=l;_++)x+=h.coeffs[_]*Math.pow(w,f<0?-_:_);m.push({t:i[d],v:x})}return m}}if(o==="logreg"){const n=L(a,u);if(!n)return r?[]:s.map(l=>({t:l,v:NaN}));const f=t??2;if(f===0)return r?i.map(l=>({t:l,v:n.a})):s.map(l=>({t:l,v:n.a}));if(f===1)return r?i.map(l=>({t:l,v:n.b})):s.map(l=>({t:l,v:n.b}));if(!r&&s.length>0)return s.map(l=>{const h=(l-u)/864e5-n.minX+1;return{t:l,v:h>0?n.a+n.b*Math.log(h):NaN}});{const l=[];for(let h=0;h<g;h++){const b=(i[h]-u)/864e5-n.minX+1;l.push({t:i[h],v:b>0?n.a+n.b*Math.log(b):NaN})}return l}}if(o==="expreg"){const n=$(a,u);if(!n)return r?[]:s.map(l=>({t:l,v:NaN}));const f=t??2;if(f===0)return r?i.map(l=>({t:l,v:n.a})):s.map(l=>({t:l,v:n.a}));if(f===1)return r?i.map(l=>({t:l,v:n.b})):s.map(l=>({t:l,v:n.b}));if(!r&&s.length>0)return s.map(l=>{const h=(l-u)/864e5-n.minX;return{t:l,v:n.a*Math.exp(n.b*h)}});{const l=[];for(let h=0;h<g;h++){const b=(i[h]-u)/864e5-n.minX;l.push({t:i[h],v:n.a*Math.exp(n.b*b)})}return l}}}if(o==="arr"||o==="raw"){if(!r)return s.map(n=>({t:n,v:e[g-1]}));const a=[];for(let n=0;n<g;n++)a.push({t:i[n],v:e[n]});return a}const N=e.filter(a=>!Number.isNaN(a)),p=N.length;if(p===0)return r?[]:s.map(a=>({t:a,v:NaN}));let c=NaN;if(o==="first")c=N[0];else if(o==="last")c=N[p-1];else if(o==="count")c=p;else if(o==="p"){const a=t??50,n=[...N].sort((m,d)=>m-d),f=(p-1)*(Math.max(0,Math.min(100,a))/100),l=Math.floor(f),h=Math.ceil(f),b=f-l;c=n[l]*(1-b)+n[h]*b}else{let a=0,n=1/0,f=-1/0;for(let l=0;l<p;l++){const h=N[l];a+=h,h<n&&(n=h),h>f&&(f=h)}if(o==="sum")c=a;else if(o==="min")c=n;else if(o==="max")c=f;else if(o==="avg")c=a/p;else if(o==="sd"||o==="ci"){const l=a/p;let h=0;if(p>1){for(let m=0;m<p;m++)h+=Math.pow(N[m]-l,2);h/=p-1}const b=Math.sqrt(h);if(o==="sd")c=b*(t??1);else{const m=t??95,d=q(m)*(b/Math.sqrt(p));c=l+d*(m>=0?1:-1)}}else c=a/p}return r?i.map(a=>({t:a,v:c})):s.map(a=>({t:a,v:c}))}function E(e,i,o,t){let s=17040672e5;if(e.startX){const m=new Date(e.startX).getTime();isNaN(m)||(s=m)}const r=e.interpolate??!1,u=e.connectIntervals??!1,{ms:g,unit:v,amt:N,isPoints:p}=k(e.interval||"1D"),c=e.aggregator||"arr",a=[],n=[],f=c.replace(/_(-?\d+)$/,""),l=["poly","logreg","expreg","arr","raw","trend","trend0"].includes(f);let h=!1;if(l)if(f==="poly"||f==="trend"||f==="trend0"){let m=2;const d=c.match(/_(-?\d+)$/);d?m=parseInt(d[1],10):f==="trend"?m=1:f==="trend0"&&(m=0);const M=Math.abs(m);e.aggregatorParam!==void 0&&e.aggregatorParam<=M&&(h=!0)}else(f==="logreg"||f==="expreg")&&e.aggregatorParam!==void 0&&e.aggregatorParam<2&&(h=!0);const b=m=>{for(let d=0;d<m.length;d++)a.push(m[d].t),n.push(m[d].v);l&&!h&&!u&&n.length>0&&(Number.isNaN(n[n.length-1])||(a.push(a[a.length-1]),n.push(NaN)))};if(p){let m=[],d=[];const M=()=>{if(m.length===0)return;let w=0;for(let y=0;y<d.length;y++)w+=d[y];let x=[],_=f==="arr"||f==="raw";if(l&&!h)if(r){const X=d[0],P=d[d.length-1];for(let F=0;F<=50;F++)x.push(X+(P-X)*(F/50))}else for(let y=0;y<d.length;y++)x.push(d[y]);else _||x.push(w/m.length);b(V(m,d,c,e.aggregatorParam,x,_,s)),m=[],d=[]};for(let w=0;w<t;w++){const x=i[w],_=o[w];if(Number.isNaN(_)){M(),a.push(x),n.push(NaN);continue}m.push(_),d.push(x),m.length>=N&&M()}M()}else{let m=null,d=[],M=[];const w=()=>{if(d.length===0||m===null)return;let x=[],_=f==="arr"||f==="raw";if(l&&!h)if(r)for(let X=0;X<=50;X++)x.push(m+g*(X/50));else for(let y=0;y<M.length;y++)x.push(M[y]);else _||x.push(m+g/2);b(V(d,M,c,e.aggregatorParam,x,_,s)),d=[],M=[]};for(let x=0;x<t;x++){const _=i[x],y=o[x];if(Number.isNaN(y)){w(),a.push(_),n.push(NaN);continue}let X;if(v==="M"){const P=new Date(_);X=Date.UTC(P.getUTCFullYear(),Math.floor(P.getUTCMonth()/N)*N,1)}else if(v==="Y"){const P=new Date(_);X=Date.UTC(Math.floor(P.getUTCFullYear()/N)*N,0,1)}else X=s+Math.floor((_-s)/g)*g;m!==null&&X!==m&&w(),m=X,d.push(y),M.push(_)}w()}return{tArr:new Float64Array(a),vArr:new Float64Array(n),len:a.length}}function C(e,i,o,t){let s=17040672e5;if(e.startX){const p=new Date(e.startX).getTime();isNaN(p)||(s=p)}const{ms:r,amt:u,isPoints:g}=k(e.size||"1D"),v=e.aggregator||"arr",N=new Float64Array(t);for(let p=0;p<t;p++){const c=i[p],a=o[p];if(Number.isNaN(a)){N[p]=NaN;continue}let n=p;if(g)n=Math.max(0,p-u+1);else{const b=c-r;for(;n>0&&i[n-1]>b;)n--}const f=[],l=[];for(let b=n;b<=p;b++)f.push(o[b]),l.push(i[b]);const h=V(f,l,v,e.aggregatorParam,[c],!1,s);N[p]=h.length>0?h[0].v:NaN}return N}function U(e,i,o){const t=e.value,s=e.operator;for(let r=0;r<o;r++)Number.isNaN(i[r])||(s==="+"?i[r]+=t:s==="-"?i[r]-=t:s==="*"?i[r]*=t:s==="/"&&(i[r]/=t))}function W(e,i){if(!e||!e.length)return NaN;let o=0,t=e.length-1;for(;o<=t;){const s=o+t>>1;if(e[s].t===i)return e[s].v;e[s].t<i?o=s+1:t=s-1}return NaN}function B(e,i){if(!e||!e.length)return NaN;let o=0,t=e.length-1;if(i<e[o].t)return NaN;if(i>e[t].t)return NaN;if(i===e[o].t)return e[o].v;if(i===e[t].t)return e[t].v;for(;o<=t;){const g=o+t>>1;if(e[g].t===i)return e[g].v;e[g].t<i?o=g+1:t=g-1}const s=e[t],r=e[o];if(!s||!r||Number.isNaN(s.v)||Number.isNaN(r.v))return s&&!Number.isNaN(s.v)?s.v:NaN;const u=(i-s.t)/(r.t-s.t);return s.v+u*(r.v-s.v)}const O=["E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","exp","expm1","floor","fround","hypot","imul","log","log10","log1p","log2","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];function G(e,i,o,t,s,r={},u=[],g,v){const N=O.map(c=>`const ${c} = Math.${c};`).join(`
`),p={_poly:{},_logreg:null,_expreg:null,_prevVal:NaN,_min:void 0,_max:void 0,_sum:void 0,_avg:void 0,_first:void 0,_last:void 0,_count:void 0,getPts:()=>{const c=[];for(let a=0;a<t;a++)Number.isNaN(o[a])||c.push({t:i[a],v:o[a]});return c},_getCachedVal:(c,a,n=!1)=>{const f=u.find(l=>l.name===c);return f&&r[f.sourceId]?n?W(r[f.sourceId],a):B(r[f.sourceId],a):NaN},calcPoly:D,calcLog:L,calcExp:$};try{const a=new Function("t","y","y_exact","y2",`
            ${N}
            const x = (t - ${s}) / 86400000;
            
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
                    for(let i=0; i<pts.length; i++) if(pts[i].v < m) m = pts[i].v;
                    this._min = m === Infinity ? NaN : m;
                }
                return this._min;
            };

            const max = () => {
                if (this._max === undefined) {
                    let m = -Infinity;
                    const pts = this.getPts();
                    for(let i=0; i<pts.length; i++) if(pts[i].v > m) m = pts[i].v;
                    this._max = m === -Infinity ? NaN : m;
                }
                return this._max;
            };

            const sum = () => {
                if (this._sum === undefined) {
                    let s = 0;
                    const pts = this.getPts();
                    for(let i=0; i<pts.length; i++) s += pts[i].v;
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
                        for(let i=0; i<pts.length; i++) s += pts[i].v;
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
                for(let i=0; i<vn; i++) variance += Math.pow(pts[i] - mean, 2);
                return Math.sqrt(variance / (vn - 1)) * mult;
            };

            const ci = (val, conf) => {
                const pts = this.getPts().map(pt => pt.v).filter(v => !Number.isNaN(v));
                const vn = pts.length;
                if(vn < 2) return NaN;
                const mean = pts.reduce((a,b) => a+b, 0) / vn;
                let variance = 0;
                for(let i=0; i<vn; i++) variance += Math.pow(pts[i] - mean, 2);
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
                const px = (t - ${s}) / 86400000;
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
                const px = ((t - ${s}) / 86400000) - this._logreg.minX + 1;
                const yVal = px > 0 ? (this._logreg.a + this._logreg.b * Math.log(px)) : NaN;
                return [this._logreg.a, this._logreg.b, yVal];
            };

            const expreg = () => {
                if (!this._expreg) this._expreg = this.calcExp(this.getPts(), ${s});
                if (!this._expreg) return [0, 0, NaN];
                const px = ((t - ${s}) / 86400000) - this._expreg.minX;
                const yVal = this._expreg.a * Math.exp(this._expreg.b * px);
                return [this._expreg.a, this._expreg.b, yVal];
            };

            return ${e};
        `).bind(p);for(let n=0;n<t;n++){const f=g?g[n]:NaN,l=v?v[n]:o[n],h=a(i[n],o[n],l,f);o[n]=Number.isNaN(Number(h))?NaN:Number(h)}}catch{}}function Q(e,i,o,t,s={}){const r=e.expression;let u=17040672e5;if(e.startX){const c=new Date(e.startX).getTime();isNaN(c)||(u=c)}if(!isNaN(Number(r))){const c=Number(r);for(let a=0;a<t;a++)Number.isNaN(o[a])||(o[a]=c);return{tArr:i,vArr:o,len:t}}let g=i,v=o,N=new Float64Array(t);for(let c=0;c<t;c++)N[c]=o[c];let p=t;if(e.bindings&&e.bindings.length>0){const c=e.bindings.filter(a=>new RegExp(`_var\\('${a.name}'[,\\)]`).test(r));if(c.length>0){const a=new Set;for(let n=0;n<t;n++)a.add(i[n]);for(const n of c){const f=s[n.sourceId];if(f)for(let l=0;l<f.length;l++)a.add(f[l].t)}if(a.size>t){const n=Array.from(a).sort((l,h)=>l-h);p=n.length,g=new Float64Array(p),v=new Float64Array(p),N=new Float64Array(p);let f=0;for(let l=0;l<p;l++){const h=n[l];for(g[l]=h;f<t-1&&i[f]<h;)f++;if(i[f]===h)v[l]=o[f],N[l]=o[f];else if(f>0&&i[f]>h){const b=i[f-1],m=o[f-1],d=i[f],M=o[f];!Number.isNaN(m)&&!Number.isNaN(M)?(v[l]=m+(M-m)*((h-b)/(d-b)),N[l]=NaN):(v[l]=NaN,N[l]=NaN)}else v[l]=NaN,N[l]=NaN}}}}return G(r,g,v,p,u,s,e.bindings||[],void 0,N),{tArr:g,vArr:v,len:p}}function H(e,i,o,t){if(!e||e.length===0)return new Float64Array(0);if(e.length===1&&e[0].type==="formula"){const N=e[0].expression;if(N&&!Number.isNaN(Number(N))&&N.trim()!==""){const p=Number(N);return new Float64Array([o-864e7,p,t+864e7,p])}}const s=e[0],r=s&&s.type==="source"&&s.sourceId?i[s.sourceId]||[]:[];let{tArr:u,vArr:g,len:v}=Y(r,o,t);for(let N=1;N<e.length;N++){const p=e[N];if(p.type==="resample"){const c=E(p,u,g,v);u=c.tArr,g=c.vArr,v=c.len}else if(p.type==="window")g=C(p,u,g,v);else if(p.type==="math")U(p,g,v);else if(p.type==="formula"){const c=Q(p,u,g,v,i);c&&(u=c.tArr,g=c.vArr,v=c.len)}}return R(u,g,v,o,t)}let j={};const I=self;I.onmessage=e=>{const i=e.data;if(i.type==="DATA")j=i.data;else if(i.type==="CALC_PIPELINE"){const{pipelineId:o,pipeline:t,viewStart:s,viewEnd:r}=i;try{const u=H(t,j,s,r);I.postMessage({pipelineId:o,result:u},[u.buffer])}catch{const g=new Float64Array(0);I.postMessage({pipelineId:o,result:g},[g.buffer])}}}})();
