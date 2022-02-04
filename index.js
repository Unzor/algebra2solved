const algebra = require("./algebra");

var solve_simple_algebra_sentence = function(sentence) {
var s = sentence.split(" ")
var ns = [];
s.forEach(function(n, index){
if (!isNaN(n) || n == "per") {
if (n == "per") {
n = s[index - 2] + "x"
}
ns.push(n);
}
})
ns = ns.slice(1, ns.length);
var parsed = algebra.parse(ns[0] + " + " + ns[1] + " = " + ns[2])
return eval(parsed.solveFor("x").toString())
};

const fs = require("fs");

var file = "data:image/png;base64," + fs.readFileSync(process.argv[2], 'base64');

var Tesseract  = require('tesseract.js');

Tesseract.recognize(
  file,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
text = text.split("\n").join(" ")
console.log(solve_simple_algebra_sentence(text))
})
