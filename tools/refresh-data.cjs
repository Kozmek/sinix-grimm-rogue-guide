const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'source/guide-data.json'),'utf8'));
if(data.talent.trees.reduce((n,t)=>n+t.talents.length,0)!==54)throw Error('Review the talent snapshot and tests before changing its schema.');
fs.writeFileSync(path.join(root,'assets/data.js'),'window.ROGUE_DATA='+JSON.stringify(data)+';\n');
console.log('Updated assets/data.js from the reviewed source snapshot.');
