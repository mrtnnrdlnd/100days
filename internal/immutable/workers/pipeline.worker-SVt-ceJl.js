(function(){"use strict";function Y(s,i,o){let t=s.length,n,a;if(t===0){t=1e3,n=new Float64Array(t),a=new Float64Array(t);const l=(o-i)*.1,r=i-l,d=(o+l-r)/(t-1);for(let h=0;h<t;h++)n[h]=r+h*d,a[h]=0}else{n=new Float64Array(t),a=new Float64Array(t);for(let l=0;l<t;l++)n[l]=s[l].t,a[l]=s[l].v}return{tArr:n,vArr:a,len:t}}function S(s,i,o,t,n){let a=0;for(;a<o&&s[a]<t;)a++;a=Math.max(0,a-1);let l=o-1;for(;l>=0&&s[l]>n;)l--;l=Math.min(o-1,l+1);const r=Math.max(0,l-a+1);if(r<=0)return new Float64Array(0);const m=new Float64Array(r*2);let d=0;const h=n-t,p=t-h*1.5,u=n+h*1.5;for(let e=a;e<=l;e++){let g=s[e],c=i[e];if(e===a&&g<p&&e+1<=l){const f=s[e+1],_=i[e+1];!Number.isNaN(c)&&!Number.isNaN(_)&&f>g&&(c=c+(_-c)*((p-g)/(f-g)),g=p)}if(e===l&&g>u&&e-1>=a){const f=s[e-1],_=i[e-1];!Number.isNaN(c)&&!Number.isNaN(_)&&g>f&&(c=_+(c-_)*((u-f)/(g-f)),g=u)}m[d++]=g,m[d++]=c}return m}function q(s){const i=s.length;for(let t=0;t<i;t++){let n=t;for(let l=t+1;l<i;l++)Math.abs(s[l][t])>Math.abs(s[n][t])&&(n=l);const a=s[t];if(s[t]=s[n],s[n]=a,Math.abs(s[t][t])<1e-10)return null;for(let l=t+1;l<i;l++){const r=-s[l][t]/s[t][t];for(let m=t;m<i+1;m++)t===m?s[l][m]=0:s[l][m]+=r*s[t][m]}}const o=new Array(i).fill(0);for(let t=i-1;t>=0;t--){o[t]=s[t][i]/s[t][t];for(let n=t-1;n>=0;n--)s[n][i]-=s[n][t]*o[t]}return o}function D(s,i,o){const t=Math.abs(i);if(s.length<t+1)return null;const n=(s[0].t-o)/864e5,a=(s[s.length-1].t-o)/864e5,l=Math.max(1,a-n),r=i<0,m=r?1:0,d=[];for(let p=0;p<=t;p++){d[p]=new Array(t+2).fill(0);for(let e=0;e<=t;e++){let g=0;for(let c of s){let f=((c.t-o)/864e5-n)/l+m;g+=Math.pow(f,r?-(p+e):p+e)}d[p][e]=g}let u=0;for(let e of s){let g=((e.t-o)/864e5-n)/l+m;u+=e.v*Math.pow(g,r?-p:p)}d[p][t+1]=u}return{coeffs:q(d)||Array(t+1).fill(NaN),minX:n,scaleX:l,isNeg:r}}function L(s,i){if(s.length<2)return null;const o=(s[0].t-i)/864e5;let t=0,n=0,a=0,l=0,r=0;for(let p of s){const u=(p.t-i)/864e5-o+1;if(u<=0)continue;const e=Math.log(u);t+=e,n+=p.v,a+=p.v*e,l+=e*e,r++}const m=r*l-t*t,d=m===0?0:(r*a-n*t)/m,h=r>0?(n-d*t)/r:0;return{a:d,b:h,minX:o,valid:r}}function $(s,i){if(s.length<2)return null;const o=(s[0].t-i)/864e5;let t=0,n=0,a=0,l=0,r=0;for(let p of s){if(p.v<=0)continue;const u=(p.t-i)/864e5-o,e=Math.log(p.v);t+=u,n+=e,a+=u*e,l+=u*u,r++}const m=r*l-t*t,d=m===0?0:(r*a-t*n)/m;return{a:r>0?Math.exp((n-d*t)/r):NaN,b:d,minX:o,valid:r}}function C(s){if(s===0)return 0;const o=1-Math.max(.01,Math.min(.9999,Math.abs(s)/100)),t=Math.sqrt(-2*Math.log(o/2));return t-(2.515517+.802853*t+.010328*t*t)/(1+1.432788*t+.189269*t*t+.001308*t*t*t)}function k(s){const i=s.match(/^([\d.]+)(.+)$/),o=i&&parseFloat(i[1])||1,t=i?i[2]:"D",n=t==="p";let a=864e5;return t==="Y"?a=31536e6:t==="M"?a=2592e6:t==="W"?a=6048e5:t==="h"?a=36e5:t==="min"?a=6e4:t==="s"&&(a=1e3),{amt:o,unit:t,ms:o*a,isPoints:n}}function V(s,i,o,t,n=[],a=!1,l=17040672e5){o==="trend"&&(o="poly_1"),o==="trend0"&&(o="poly_0");const r=s.length;if(r===0)return a?[]:n.map(u=>({t:u,v:NaN}));const m=o.startsWith("poly");if(["logreg","expreg"].includes(o)||m){const u=[];for(let e=0;e<r;e++)Number.isNaN(s[e])||u.push({t:i[e],v:s[e]});if(u.length<2&&!m)return a?[]:n.map(e=>({t:e,v:NaN}));if(u.length<1)return a?[]:n.map(e=>({t:e,v:NaN}));if(m){const e=o.match(/^poly_(-?\d+)$/),g=e?parseInt(e[1],10):2,c=Math.abs(g),f=D(u,g,l);if(!f||!f.coeffs)return a?[]:n.map(N=>({t:N,v:NaN}));const _=t??c+1;if(_<=c)return a?i.map(N=>({t:N,v:f.coeffs[_]})):n.map(N=>({t:N,v:f.coeffs[_]}));if(!a&&n.length>0)return n.map(N=>{let X=((N-l)/864e5-f.minX)/f.scaleX+(f.isNeg?1:0),x=0;for(let b=0;b<=c;b++)x+=f.coeffs[b]*Math.pow(X,g<0?-b:b);return{t:N,v:x}});{const N=[];for(let v=0;v<r;v++){let x=((i[v]-l)/864e5-f.minX)/f.scaleX+(f.isNeg?1:0),b=0;for(let M=0;M<=c;M++)b+=f.coeffs[M]*Math.pow(x,g<0?-M:M);N.push({t:i[v],v:b})}return N}}if(o==="logreg"){const e=L(u,l);if(!e)return a?[]:n.map(c=>({t:c,v:NaN}));const g=t??2;if(g===0)return a?i.map(c=>({t:c,v:e.a})):n.map(c=>({t:c,v:e.a}));if(g===1)return a?i.map(c=>({t:c,v:e.b})):n.map(c=>({t:c,v:e.b}));if(!a&&n.length>0)return n.map(c=>{const f=(c-l)/864e5-e.minX+1;return{t:c,v:f>0?e.a+e.b*Math.log(f):NaN}});{const c=[];for(let f=0;f<r;f++){const _=(i[f]-l)/864e5-e.minX+1;c.push({t:i[f],v:_>0?e.a+e.b*Math.log(_):NaN})}return c}}if(o==="expreg"){const e=$(u,l);if(!e)return a?[]:n.map(c=>({t:c,v:NaN}));const g=t??2;if(g===0)return a?i.map(c=>({t:c,v:e.a})):n.map(c=>({t:c,v:e.a}));if(g===1)return a?i.map(c=>({t:c,v:e.b})):n.map(c=>({t:c,v:e.b}));if(!a&&n.length>0)return n.map(c=>{const f=(c-l)/864e5-e.minX;return{t:c,v:e.a*Math.exp(e.b*f)}});{const c=[];for(let f=0;f<r;f++){const _=(i[f]-l)/864e5-e.minX;c.push({t:i[f],v:e.a*Math.exp(e.b*_)})}return c}}}if(o==="arr"||o==="raw"){if(!a)return n.map(e=>({t:e,v:s[r-1]}));const u=[];for(let e=0;e<r;e++)u.push({t:i[e],v:s[e]});return u}const d=s.filter(u=>!Number.isNaN(u)),h=d.length;if(h===0)return a?[]:n.map(u=>({t:u,v:NaN}));let p=NaN;if(o==="first")p=d[0];else if(o==="last")p=d[h-1];else if(o==="count")p=h;else if(o==="p"){const u=t??50,e=[...d].sort((N,v)=>N-v),g=(h-1)*(Math.max(0,Math.min(100,u))/100),c=Math.floor(g),f=Math.ceil(g),_=g-c;p=e[c]*(1-_)+e[f]*_}else{let u=0,e=1/0,g=-1/0;for(let c=0;c<h;c++){const f=d[c];u+=f,f<e&&(e=f),f>g&&(g=f)}if(o==="sum")p=u;else if(o==="min")p=e;else if(o==="max")p=g;else if(o==="avg")p=u/h;else if(o==="sd"||o==="ci"){const c=u/h;let f=0;if(h>1){for(let N=0;N<h;N++)f+=Math.pow(d[N]-c,2);f/=h-1}const _=Math.sqrt(f);if(o==="sd")p=_*(t??1);else{const N=t??95,v=C(N)*(_/Math.sqrt(h));p=c+v*(N>=0?1:-1)}}else p=u/h}return a?i.map(u=>({t:u,v:p})):n.map(u=>({t:u,v:p}))}function R(s,i,o,t){let n=17040672e5;if(s.startX){const N=new Date(s.startX).getTime();isNaN(N)||(n=N)}const a=s.interpolate??!1,l=s.connectIntervals??!1,{ms:r,unit:m,amt:d,isPoints:h}=k(s.interval||"1D"),p=s.aggregator||"arr",u=[],e=[],g=p.replace(/_(-?\d+)$/,""),c=["poly","logreg","expreg","arr","raw","trend","trend0"].includes(g);let f=!1;if(c)if(g==="poly"||g==="trend"||g==="trend0"){let N=2;const v=p.match(/_(-?\d+)$/);v?N=parseInt(v[1],10):g==="trend"?N=1:g==="trend0"&&(N=0);const X=Math.abs(N);s.aggregatorParam!==void 0&&s.aggregatorParam<=X&&(f=!0)}else(g==="logreg"||g==="expreg")&&s.aggregatorParam!==void 0&&s.aggregatorParam<2&&(f=!0);const _=N=>{for(let v=0;v<N.length;v++)u.push(N[v].t),e.push(N[v].v);c&&!f&&!l&&e.length>0&&(Number.isNaN(e[e.length-1])||(u.push(u[u.length-1]),e.push(NaN)))};if(h){let N=[],v=[];const X=()=>{if(N.length===0)return;let x=0;for(let w=0;w<v.length;w++)x+=v[w];let b=[],M=g==="arr"||g==="raw";if(c&&!f)if(a){const P=v[0],y=v[v.length-1];for(let F=0;F<=50;F++)b.push(P+(y-P)*(F/50))}else for(let w=0;w<v.length;w++)b.push(v[w]);else M||b.push(x/N.length);_(V(N,v,p,s.aggregatorParam,b,M,n)),N=[],v=[]};for(let x=0;x<t;x++){const b=i[x],M=o[x];if(Number.isNaN(M)){X(),u.push(b),e.push(NaN);continue}N.push(M),v.push(b),N.length>=d&&X()}X()}else{let N=null,v=[],X=[];const x=()=>{if(v.length===0||N===null)return;let b=[],M=g==="arr"||g==="raw";if(c&&!f)if(a)for(let P=0;P<=50;P++)b.push(N+r*(P/50));else for(let w=0;w<X.length;w++)b.push(X[w]);else M||b.push(N+r/2);_(V(v,X,p,s.aggregatorParam,b,M,n)),v=[],X=[]};for(let b=0;b<t;b++){const M=i[b],w=o[b];if(Number.isNaN(w)){x(),u.push(M),e.push(NaN);continue}let P;if(m==="M"){const y=new Date(M);P=Date.UTC(y.getUTCFullYear(),Math.floor(y.getUTCMonth()/d)*d,1)}else if(m==="Y"){const y=new Date(M);P=Date.UTC(Math.floor(y.getUTCFullYear()/d)*d,0,1)}else P=n+Math.floor((M-n)/r)*r;N!==null&&P!==N&&x(),N=P,v.push(w),X.push(M)}x()}return{tArr:new Float64Array(u),vArr:new Float64Array(e),len:u.length}}function E(s,i,o,t){let n=17040672e5;if(s.startX){const h=new Date(s.startX).getTime();isNaN(h)||(n=h)}const{ms:a,amt:l,isPoints:r}=k(s.size||"1D"),m=s.aggregator||"arr",d=new Float64Array(t);for(let h=0;h<t;h++){const p=i[h],u=o[h];if(Number.isNaN(u)){d[h]=NaN;continue}let e=h;if(r)e=Math.max(0,h-l+1);else{const _=p-a;for(;e>0&&i[e-1]>_;)e--}const g=[],c=[];for(let _=e;_<=h;_++)g.push(o[_]),c.push(i[_]);const f=V(g,c,m,s.aggregatorParam,[p],!1,n);d[h]=f.length>0?f[0].v:NaN}return d}function U(s,i,o){const t=s.value,n=s.operator;for(let a=0;a<o;a++)Number.isNaN(i[a])||(n==="+"?i[a]+=t:n==="-"?i[a]-=t:n==="*"?i[a]*=t:n==="/"&&(i[a]/=t))}const W=["E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","exp","expm1","floor","fround","hypot","imul","log","log10","log1p","log2","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];function O(s,i,o,t,n){const a=W.map(r=>`const ${r} = Math.${r};`).join(`
`),l={_poly:{},_logreg:null,_expreg:null,_prevVal:NaN,_min:void 0,_max:void 0,_sum:void 0,_avg:void 0,_first:void 0,_last:void 0,_count:void 0,getPts:()=>{const r=[];for(let m=0;m<t;m++)Number.isNaN(o[m])||r.push({t:i[m],v:o[m]});return r},calcPoly:D,calcLog:L,calcExp:$};try{const m=new Function("t","y",`
            ${a}
            const x = (t - ${n}) / 86400000;
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
                if (!this._poly[degree]) this._poly[degree] = this.calcPoly(this.getPts(), degree, ${n});
                const p = this._poly[degree];
                const absDeg = Math.abs(degree);
                if (!p || !p.coeffs) return Array(absDeg + 2).fill(NaN);
                const px = (t - ${n}) / 86400000;
                let scaledX = (px - p.minX) / p.scaleX + (p.isNeg ? 1 : 0);
                let yVal = 0;
                for (let i = 0; i <= absDeg; i++) yVal += p.coeffs[i] * Math.pow(scaledX, degree < 0 ? -i : i);
                return [...p.coeffs, yVal];
            };

            const trend = () => { return poly(1); };
            const trend0 = () => { return poly(0); };

            const logreg = () => {
                if (!this._logreg) this._logreg = this.calcLog(this.getPts(), ${n});
                if (!this._logreg) return [0, 0, NaN];
                const px = ((t - ${n}) / 86400000) - this._logreg.minX + 1;
                const yVal = px > 0 ? (this._logreg.a + this._logreg.b * Math.log(px)) : NaN;
                return [this._logreg.a, this._logreg.b, yVal];
            };

            const expreg = () => {
                if (!this._expreg) this._expreg = this.calcExp(this.getPts(), ${n});
                if (!this._expreg) return [0, 0, NaN];
                const px = ((t - ${n}) / 86400000) - this._expreg.minX;
                const yVal = this._expreg.a * Math.exp(this._expreg.b * px);
                return [this._expreg.a, this._expreg.b, yVal];
            };

            return ${s};
        `).bind(l);for(let d=0;d<t;d++){if(Number.isNaN(o[d]))continue;const h=m(i[d],o[d]);o[d]=Number.isNaN(Number(h))?NaN:Number(h)}}catch{}}function B(s,i,o,t){const n=s.expression;let a=17040672e5;if(s.startX){const l=new Date(s.startX).getTime();isNaN(l)||(a=l)}if(isNaN(Number(n)))O(n,i,o,t,a);else{const l=Number(n);for(let r=0;r<t;r++)Number.isNaN(o[r])||(o[r]=l)}}function G(s,i,o,t){if(!s||s.length===0)return new Float64Array(0);const n=s[0],a=n&&n.type==="source"&&n.sourceId?i[n.sourceId]||[]:[];let{tArr:l,vArr:r,len:m}=Y(a,o,t);for(let d=1;d<s.length;d++){const h=s[d];if(h.type==="resample"){const p=R(h,l,r,m);l=p.tArr,r=p.vArr,m=p.len}else h.type==="window"?r=E(h,l,r,m):h.type==="math"?U(h,r,m):h.type==="formula"&&B(h,l,r,m)}return S(l,r,m,o,t)}let j={};const I=self;I.onmessage=s=>{const i=s.data;if(i.type==="DATA")j=i.data;else if(i.type==="CALC_PIPELINE"){const{pipelineId:o,pipeline:t,viewStart:n,viewEnd:a}=i;try{const l=G(t,j,n,a);I.postMessage({pipelineId:o,result:l},[l.buffer])}catch{const r=new Float64Array(0);I.postMessage({pipelineId:o,result:r},[r.buffer])}}}})();
