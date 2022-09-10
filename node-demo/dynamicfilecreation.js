const fs = require('fs');

const path= require('path');

const dirpath=path.join(__dirname,'dynamic');

console.log(dirpath);

for (var i=0; i<=5; i++){

fs.writeFileSync(`${dirpath}/hello${i}.txt`,   `This Is File ${i}`);
}
