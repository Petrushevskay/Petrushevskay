const greet = name => `Hello, ${name}!`;
const squareRoot = num => Math.sqrt(num);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
67,54,77,34,13,59 + true
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

banana

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const formatDate = date => new Date(date).toLocaleDateString();
1 - 19
const fetchData = async url => { const response = await fetch(url); return response.json(); }
94,89,76,9,36,8,63,67,62,61,82,71,93,1,2,89,43,45,69,62,91,44,73,88,8,33,39,56,55,35,20,2,80,46 - 59
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

apple - 82,30,63,72,70,45,66,27,27,56,32,65,44,83,63,27,49,28,32,20,74,53,11,86,99,11,50,16,34,88,36,18,36,28,19,54,84,92,19,84,23,22,74,90,48,38,64,2,99,50,45,81,52,13,28,82,51,95,40,59
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

26 - 56
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
70 - apple
const multiply = (a, b) => a * b;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function addNumbers(a, b) { return a + b; }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sum = (a, b) => a + b;
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
orange

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
