function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},t.apply(this,arguments)}class e{constructor(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://openai80.p.rapidapi.com/"}invoke(e,r){const o=`${this.baseUrl}${e}`,s=t({},r,{headers:{"Content-Type":"application/json","X-RapidAPI-Key":this.apiKey,"X-RapidAPI-Host":"openai80.p.rapidapi.com"}});return fetch(o,s).then(t=>{if(t.ok)return t.json();throw new Error(t.statusText)})}}const r="models";class o extends e{}var s;s=o,[class extends e{getModels(){return this.invoke(`${r}`)}getModelByName(t){return this.invoke(`${r}/${t}`)}createChatCompletion(t){return this.invoke("chat/completions",{method:"POST",body:JSON.stringify(t)})}}].forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(e=>{Object.defineProperty(s.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})});export{o as default};
