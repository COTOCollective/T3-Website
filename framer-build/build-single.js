window.__buildSingle=async function(d,t){
const a=await readFile('framer-build/app.js');
let h=await readFile(`Framer export/${d}/index.html`);
const imgs=[...new Set(h.match(/assets\/[^"')\s&]+/g)||[])];
const map={};
const du=b=>new Promise(r=>{const f=new FileReader();f.onload=()=>r(f.result);f.readAsDataURL(b);});
for(const p of imgs){const im=await readImage(p);const s=Math.min(1,1600/Math.max(im.width,im.height));const c=createCanvas(Math.round(im.width*s),Math.round(im.height*s));c.getContext('2d').drawImage(im,0,0,c.width,c.height);const png=p.endsWith('.png');const b=await (c.convertToBlob?c.convertToBlob(png?{type:'image/png'}:{type:'image/jpeg',quality:.8}):new Promise(r=>c.toBlob(r,png?'image/png':'image/jpeg',.8)));map[p]=await du(b);}
const swap=`<script>(function(){var M=window.__IMG=${JSON.stringify(map)};function fx(v){if(typeof v!=='string')return v;for(var k in M)if(v.indexOf(k)>-1)v=v.split(k).join(M[k]);return v;}window.__fx=fx;document.querySelectorAll('#root img').forEach(function(i){var s=i.getAttribute('src');if(M[s])i.src=M[s];});document.querySelectorAll('#root [style*="assets/"]').forEach(function(e){e.setAttribute('style',fx(e.getAttribute('style')));});})();</script>`;
const patch=`<script>(function(){var ce=React.createElement;React.createElement=function(t,p){if(p&&(p.src||p.style)){var q=Object.assign({},p);if(q.src)q.src=window.__fx(q.src);if(q.style&&typeof q.style==='object'){var s=Object.assign({},q.style);for(var k in s)s[k]=window.__fx(s[k]);q.style=s;}arguments[1]=q;}return ce.apply(this,arguments);};})();</script>`;
const i=a.indexOf('(function(){window.DE_STATIC=false;');if(i<0)throw 'split';
const js='<script>'+a.slice(0,i)+'</script>'+patch+'<script>'+a.slice(i)+'</script>';
const anchor='</div>\n<script src="app.js"></script>';if(!h.includes(anchor))throw 'anchor';
h=h.split(anchor).join('</div>\n'+swap+js);
await saveFile(`Framer export/${d}/T3 ${t} -single file-.html`,h);return h.length;};
