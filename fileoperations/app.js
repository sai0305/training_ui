var file= require('fs');
file.writeFileSync("./demo.text","sk")

var datafromfile= file.readFileSync("./demo.text",{encoding:'utf-8'});
console.log(datafromfile)