(function(){"use strict";function Y(s,a,o){let t=s.length,n,l;if(t===0){t=1e3,n=new Float64Array(t),l=new Float64Array(t);const i=(o-a)*.1,r=a-i,d=(o+i-r)/(t-1);for(let h=0;h<t;h++)n[h]=r+h*d,l[h]=0}else{n=new Float64Array(t),l=new Float64Array(t);for(let i=0;i<t;i++)n[i]=s[i].t,l[i]=s[i].v}return{tArr:n,vArr:l,len:t}}function S(s,a,o,t,n){let l=0;for(;l<o&&s[l]<t;)l++;l=Math.max(0,l-1);let i=o-1;for(;i>=0&&s[i]>n;)i--;i=Math.min(o-1,i+1);const r=Math.max(0,i-l+1);if(r<=0)return new Float64Array(0);const m=new Float64Array(r*2);let d=0;const h=n-t,p=t-h*1.5,u=n+h*1.5;for(let e=l;e<=i;e++){let g=s[e],c=a[e];if(e===l&&g<p&&e+1<=i){const f=s[e+1],v=a[e+1];!Number.isNaN(c)&&!Number.isNaN(v)&&f>g&&(c=c+(v-c)*((p-g)/(f-g)),g=p)}if(e===i&&g>u&&e-1>=l){const f=s[e-1],v=a[e-1];!Number.isNaN(c)&&!Number.isNaN(v)&&g>f&&(c=v+(c-v)*((u-f)/(g-f)),g=u)}m[d++]=g,m[d++]=c}return m}function C(s){const a=s.length;for(let t=0;t<a;t++){let n=t;for(let i=t+1;i<a;i++)Math.abs(s[i][t])>Math.abs(s[n][t])&&(n=i);const l=s[t];if(s[t]=s[n],s[n]=l,Math.abs(s[t][t])<1e-10)return null;for(let i=t+1;i<a;i++){const r=-s[i][t]/s[t][t];for(let m=t;m<a+1;m++)t===m?s[i][m]=0:s[i][m]+=r*s[t][m]}}const o=new Array(a).fill(0);for(let t=a-1;t>=0;t--){o[t]=s[t][a]/s[t][t];for(let n=t-1;n>=0;n--)s[n][a]-=s[n][t]*o[t]}return o}function D(s,a,o){const t=Math.abs(a);if(s.length<t+1)return null;const n=(s[0].t-o)/864e5,l=(s[s.length-1].t-o)/864e5,i=Math.max(1,l-n),r=a<0,m=r?1:0,d=[];for(let p=0;p<=t;p++){d[p]=new Array(t+2).fill(0);for(let e=0;e<=t;e++){let g=0;for(let c of s){let f=((c.t-o)/864e5-n)/i+m;g+=Math.pow(f,r?-(p+e):p+e)}d[p][e]=g}let u=0;for(let e of s){let g=((e.t-o)/864e5-n)/i+m;u+=e.v*Math.pow(g,r?-p:p)}d[p][t+1]=u}return{coeffs:C(d)||Array(t+1).fill(NaN),minX:n,scaleX:i,isNeg:r}}function L(s,a){if(s.length<2)return null;const o=(s[0].t-a)/864e5;let t=0,n=0,l=0,i=0,r=0;for(let p of s){const u=(p.t-a)/864e5-o+1;if(u<=0)continue;const e=Math.log(u);t+=e,n+=p.v,l+=p.v*e,i+=e*e,r++}const m=r*i-t*t,d=m===0?0:(r*l-n*t)/m,h=r>0?(n-d*t)/r:0;return{a:d,b:h,minX:o,valid:r}}function $(s,a){if(s.length<2)return null;const o=(s[0].t-a)/864e5;let t=0,n=0,l=0,i=0,r=0;for(let p of s){if(p.v<=0)continue;const u=(p.t-a)/864e5-o,e=Math.log(p.v);t+=u,n+=e,l+=u*e,i+=u*u,r++}const m=r*i-t*t,d=m===0?0:(r*l-t*n)/m;return{a:r>0?Math.exp((n-d*t)/r):NaN,b:d,minX:o,valid:r}}function R(s){if(s===0)return 0;const o=1-Math.max(.01,Math.min(.9999,Math.abs(s)/100)),t=Math.sqrt(-2*Math.log(o/2));return t-(2.515517+.802853*t+.010328*t*t)/(1+1.432788*t+.189269*t*t+.001308*t*t*t)}function k(s){const a=s.match(/^([\d.]+)(.+)$/),o=a&&parseFloat(a[1])||1,t=a?a[2]:"D",n=t==="p";let l=864e5;return t==="Y"?l=31536e6:t==="M"?l=2592e6:t==="W"?l=6048e5:t==="h"?l=36e5:t==="min"?l=6e4:t==="s"&&(l=1e3),{amt:o,unit:t,ms:o*l,isPoints:n}}function I(s,a,o,t,n=[],l=!1,i=17040672e5){o==="trend"&&(o="poly_1"),o==="trend0"&&(o="poly_0");const r=s.length;if(r===0)return l?[]:n.map(u=>({t:u,v:NaN}));const m=o.startsWith("poly");if(["logreg","expreg"].includes(o)||m){const u=[];for(let e=0;e<r;e++)Number.isNaN(s[e])||u.push({t:a[e],v:s[e]});if(u.length<2&&!m)return l?[]:n.map(e=>({t:e,v:NaN}));if(u.length<1)return l?[]:n.map(e=>({t:e,v:NaN}));if(m){const e=o.match(/^poly_(-?\d+)$/),g=e?parseInt(e[1],10):2,c=Math.abs(g),f=D(u,g,i);if(!f||!f.coeffs)return l?[]:n.map(N=>({t:N,v:NaN}));const v=t??c+1;if(v<=c)return l?a.map(N=>({t:N,v:f.coeffs[v]})):n.map(N=>({t:N,v:f.coeffs[v]}));if(!l&&n.length>0)return n.map(N=>{let w=((N-i)/864e5-f.minX)/f.scaleX+(f.isNeg?1:0),M=0;for(let x=0;x<=c;x++)M+=f.coeffs[x]*Math.pow(w,g<0?-x:x);return{t:N,v:M}});{const N=[];for(let _=0;_<r;_++){let M=((a[_]-i)/864e5-f.minX)/f.scaleX+(f.isNeg?1:0),x=0;for(let b=0;b<=c;b++)x+=f.coeffs[b]*Math.pow(M,g<0?-b:b);N.push({t:a[_],v:x})}return N}}if(o==="logreg"){const e=L(u,i);if(!e)return l?[]:n.map(c=>({t:c,v:NaN}));const g=t??2;if(g===0)return l?a.map(c=>({t:c,v:e.a})):n.map(c=>({t:c,v:e.a}));if(g===1)return l?a.map(c=>({t:c,v:e.b})):n.map(c=>({t:c,v:e.b}));if(!l&&n.length>0)return n.map(c=>{const f=(c-i)/864e5-e.minX+1;return{t:c,v:f>0?e.a+e.b*Math.log(f):NaN}});{const c=[];for(let f=0;f<r;f++){const v=(a[f]-i)/864e5-e.minX+1;c.push({t:a[f],v:v>0?e.a+e.b*Math.log(v):NaN})}return c}}if(o==="expreg"){const e=$(u,i);if(!e)return l?[]:n.map(c=>({t:c,v:NaN}));const g=t??2;if(g===0)return l?a.map(c=>({t:c,v:e.a})):n.map(c=>({t:c,v:e.a}));if(g===1)return l?a.map(c=>({t:c,v:e.b})):n.map(c=>({t:c,v:e.b}));if(!l&&n.length>0)return n.map(c=>{const f=(c-i)/864e5-e.minX;return{t:c,v:e.a*Math.exp(e.b*f)}});{const c=[];for(let f=0;f<r;f++){const v=(a[f]-i)/864e5-e.minX;c.push({t:a[f],v:e.a*Math.exp(e.b*v)})}return c}}}if(o==="arr"||o==="raw"){if(!l)return n.map(e=>({t:e,v:s[r-1]}));const u=[];for(let e=0;e<r;e++)u.push({t:a[e],v:s[e]});return u}const d=s.filter(u=>!Number.isNaN(u)),h=d.length;if(h===0)return l?[]:n.map(u=>({t:u,v:NaN}));let p=NaN;if(o==="first")p=d[0];else if(o==="last")p=d[h-1];else if(o==="count")p=h;else if(o==="p"){const u=t??50,e=[...d].sort((N,_)=>N-_),g=(h-1)*(Math.max(0,Math.min(100,u))/100),c=Math.floor(g),f=Math.ceil(g),v=g-c;p=e[c]*(1-v)+e[f]*v}else{let u=0,e=1/0,g=-1/0;for(let c=0;c<h;c++){const f=d[c];u+=f,f<e&&(e=f),f>g&&(g=f)}if(o==="sum")p=u;else if(o==="min")p=e;else if(o==="max")p=g;else if(o==="avg")p=u/h;else if(o==="sd"||o==="ci"){const c=u/h;let f=0;if(h>1){for(let N=0;N<h;N++)f+=Math.pow(d[N]-c,2);f/=h-1}const v=Math.sqrt(f);if(o==="sd")p=v*(t??1);else{const N=t??95,_=R(N)*(v/Math.sqrt(h));p=c+_*(N>=0?1:-1)}}else p=u/h}return l?a.map(u=>({t:u,v:p})):n.map(u=>({t:u,v:p}))}function E(s,a,o,t){let n=17040672e5;if(s.startX){const N=new Date(s.startX).getTime();isNaN(N)||(n=N)}const l=s.interpolate??!1,i=s.connectIntervals??!1,{ms:r,unit:m,amt:d,isPoints:h}=k(s.interval||"1D"),p=s.aggregator||"arr",u=[],e=[],g=p.replace(/_(-?\d+)$/,""),c=["poly","logreg","expreg","arr","raw","trend","trend0"].includes(g);let f=!1;if(c)if(g==="poly"||g==="trend"||g==="trend0"){let N=2;const _=p.match(/_(-?\d+)$/);_?N=parseInt(_[1],10):g==="trend"?N=1:g==="trend0"&&(N=0);const w=Math.abs(N);s.aggregatorParam!==void 0&&s.aggregatorParam<=w&&(f=!0)}else(g==="logreg"||g==="expreg")&&s.aggregatorParam!==void 0&&s.aggregatorParam<2&&(f=!0);const v=N=>{for(let _=0;_<N.length;_++)u.push(N[_].t),e.push(N[_].v);c&&!f&&!i&&e.length>0&&(Number.isNaN(e[e.length-1])||(u.push(u[u.length-1]),e.push(NaN)))};if(h){let N=[],_=[];const w=()=>{if(N.length===0)return;let M=0;for(let X=0;X<_.length;X++)M+=_[X];let x=[],b=g==="arr"||g==="raw";if(c&&!f)if(l){const P=_[0],y=_[_.length-1];for(let F=0;F<=50;F++)x.push(P+(y-P)*(F/50))}else for(let X=0;X<_.length;X++)x.push(_[X]);else b||x.push(M/N.length);v(I(N,_,p,s.aggregatorParam,x,b,n)),N=[],_=[]};for(let M=0;M<t;M++){const x=a[M],b=o[M];if(Number.isNaN(b)){w(),u.push(x),e.push(NaN);continue}N.push(b),_.push(x),N.length>=d&&w()}w()}else{let N=null,_=[],w=[];const M=()=>{if(_.length===0||N===null)return;let x=[],b=g==="arr"||g==="raw";if(c&&!f)if(l)for(let P=0;P<=50;P++)x.push(N+r*(P/50));else for(let X=0;X<w.length;X++)x.push(w[X]);else b||x.push(N+r/2);v(I(_,w,p,s.aggregatorParam,x,b,n)),_=[],w=[]};for(let x=0;x<t;x++){const b=a[x],X=o[x];if(Number.isNaN(X)){M(),u.push(b),e.push(NaN);continue}let P;if(m==="M"){const y=new Date(b);P=Date.UTC(y.getUTCFullYear(),Math.floor(y.getUTCMonth()/d)*d,1)}else if(m==="Y"){const y=new Date(b);P=Date.UTC(Math.floor(y.getUTCFullYear()/d)*d,0,1)}else P=n+Math.floor((b-n)/r)*r;N!==null&&P!==N&&M(),N=P,_.push(X),w.push(b)}M()}return{tArr:new Float64Array(u),vArr:new Float64Array(e),len:u.length}}function U(s,a,o,t){let n=17040672e5;if(s.startX){const h=new Date(s.startX).getTime();isNaN(h)||(n=h)}const{ms:l,amt:i,isPoints:r}=k(s.size||"1D"),m=s.aggregator||"arr",d=new Float64Array(t);for(let h=0;h<t;h++){const p=a[h],u=o[h];if(Number.isNaN(u)){d[h]=NaN;continue}let e=h;if(r)e=Math.max(0,h-i+1);else{const v=p-l;for(;e>0&&a[e-1]>v;)e--}const g=[],c=[];for(let v=e;v<=h;v++)g.push(o[v]),c.push(a[v]);const f=I(g,c,m,s.aggregatorParam,[p],!1,n);d[h]=f.length>0?f[0].v:NaN}return d}function q(s,a,o){const t=s.value,n=s.operator;for(let l=0;l<o;l++)Number.isNaN(a[l])||(n==="+"?a[l]+=t:n==="-"?a[l]-=t:n==="*"?a[l]*=t:n==="/"&&(a[l]/=t))}const W=["E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","abs","acos","acosh","asin","asinh","atan","atan2","atanh","cbrt","ceil","clz32","cos","cosh","exp","expm1","floor","fround","hypot","imul","log","log10","log1p","log2","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc"];function O(s,a,o,t,n){const l=W.map(r=>`const ${r} = Math.${r};`).join(`
`),i={_poly:{},_logreg:null,_expreg:null,_prevVal:NaN,_min:void 0,_max:void 0,_sum:void 0,_avg:void 0,_first:void 0,_last:void 0,_count:void 0,getPts:()=>{const r=[];for(let m=0;m<t;m++)Number.isNaN(o[m])||r.push({t:a[m],v:o[m]});return r},calcPoly:D,calcLog:L,calcExp:$};try{const m=new Function("t","y",`
            ${l}
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
        `).bind(i);for(let d=0;d<t;d++){if(Number.isNaN(o[d]))continue;const h=m(a[d],o[d]);o[d]=Number.isNaN(Number(h))?NaN:Number(h)}}catch{}}function B(s,a,o,t){const n=s.expression;let l=17040672e5;if(s.startX){const i=new Date(s.startX).getTime();isNaN(i)||(l=i)}if(isNaN(Number(n)))O(n,a,o,t,l);else{const i=Number(n);for(let r=0;r<t;r++)Number.isNaN(o[r])||(o[r]=i)}}function G(s,a,o,t){if(!s||s.length===0)return new Float64Array(0);const n=s[0],l=n&&n.type==="source"&&n.sourceId?a[n.sourceId]||[]:[];let{tArr:i,vArr:r,len:m}=Y(l,o,t);for(let d=1;d<s.length;d++){const h=s[d];if(h.type==="resample"){const p=E(h,i,r,m);i=p.tArr,r=p.vArr,m=p.len}else h.type==="window"?r=U(h,i,r,m):h.type==="math"?q(h,r,m):h.type==="formula"&&B(h,i,r,m)}return S(i,r,m,o,t)}let j={};const V=self;V.onmessage=s=>{const a=s.data;if(a.type==="DATA")j=a.data;else if(a.type==="CALC_PIPELINE"){const{pipelineId:o,pipeline:t,viewStart:n,viewEnd:l}=a;try{const i=G(t,j,n,l);V.postMessage({pipelineId:o,result:i},[i.buffer])}catch{const r=new Float64Array(0);V.postMessage({pipelineId:o,result:r},[r.buffer])}}}})();
