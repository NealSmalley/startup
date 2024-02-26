Kahoot questions and answers:
1. You can use this CSS to load fonts from Google?
A: True
 @import url('https://');
2. How will the "hello world" text be oriented?
A: Two lines, with the first line saying World and the second saying Hello
<html>
<head>
  <style>
    div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  </style>
</head>
<body>
  <div>
    <p>Hello</p>
    <p>World</p>
</body>
</html>
3. The CSS property padding:
A: Puts space around the content of selected elements
p {
    padding: 1em;
}
4. Executing the following will output:
A: 4
  const f = y => ++y;
  console.log(f(3))
5. In HTML, what does <div> do?
A: Creates a division element
6.What is the order of the CSS box model, starting from the outside going in?
A: margin, border, padding, content
7. What does teh following code output?
A: ['rat','fish']
  let a = ['cow', 'rat', 'fish'];
  let b = a.filter(v => v.match(/A|f/i));
  console.log(b);
8. What does the following code output?
A: cow:rat:fish
  let a = ['cow', 'rat', 'fish'];
  let b = a.reduce((a,v) => [a,v].join(':'));
  console.log(b);
9. What does the following code output?
A: ['a1', 'a2', 'a3']
  let a = [1, 2, 3];
  let e = a.map(number => {
    return ('a' + number)
  });
  console.log(e);
10. What does the following code do?
A: Adds a mouseover event listener to a p element
  document.querySelector('p').addEventListener('mouseover', console.log);
11. What is the HTML tag for an unordered list?
A: <ul>
12. Which of the following is NOT a valid JavaScript function?
A: function f(x) = {}
  This is valid:
  const f = (x) => {}
  function f(x) {}
  const f = function(x) {}
13. Which of the following is NOT a valid way to include JavaScript in HTML?
A: <javascript>1+1</javascript>
  <script>1+1</script>
  <script src='main.js' />
  <div onclick='1+1' />
14. Which of the following is a valid JavaScript object?
A: {n:1}
15. What does the DOM textContent property do?
A: Sets the child text for the an element
16. Which HTML will create a valid hyperlink?
A: <a href='https://c.com'>x</a>
17. Using CSS, how would you turn only the BYU text blue?
A: div.header {color: blue;}
18. Which of the following is valid JSON?
A: {"x": 3}
19: The following console command makes a script executable:
A: chmod +x deploy.sh
20: Which of the following is a DNS subdomain?
A: c260.cs.byu.edu
21: To point to another DNS record, you should use the following DNS record type:
A: CNAME
22: What will the following output?
A: burger fries taco shake noodles
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taco');
    resolve(true);
  }, 1000);
});
console.log('burger');

p
.then((result) => console.log('shake'))
.catch((e) => console.log('salad))
.finally(() => console.log('noodles'))

console.log('fries');
23: What will the following output?
A: A D B
const a = async function() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {console.log('D'); resolve(true)}, 10000);
  })
}

try {
  console.log('A');
  await a();
  console.log('B')
} catch(e) {
  console.log('C');
}

SHA = Secure Hash Algorithm(serves as a unique identifier for that commit)
git diff: diff stands for difference. shows the changes in your working directory that have not yet been staged for a commit
alias.s=status : This creates an alias s for the git status command.(current state of the working directory)
alias.l=log: alias for log which shows git history
pull.rebase=true: This setting changes the default behavior of git pull to rebase instead of merge.
core.editor=code: Sets Visual Studio Code (code) as the default editor for Git 
git push (pushes to github)
git commit (pulls from github)
git pull (pulls from github)

CEO of Apple: Tim Cook
Linux and Git: Linus Torvalds(talk is cheap. Show me the code)
The Web Father(HTTP, HTML, URL): Tim Berners-Lee
Håkon Wium Lie: CSS
Brendan Eich: JavaScript("Always bet on JS"

Caddy: open-source web server with automatic HTTPS written in Go. making it easy to deploy and secure web applications.

curl -v -s https://byu.edu > /dev/null
curl: transfer data from or to a server
- v: This option stands for "verbose"
- s: This stands for "silent" or "quiet mode".

sudo service caddy restart
sudo: superuser do

console commands:
echo - Output the parameters of the command(repeats text to console)
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes
df - View disk statistics
cat - Output file(shows content of files)
less - Interactive file output
wc - Count words
ps - View processes
kill - Kill a process
sudo - Execute as admin
ssh - Remote shell
scp - Securely copy files to a remote computer
history - Show history of commands
ping - Test connection
tracert - Trace network
dig - DNS information
man - Look in the manual

Element: <html lang="en">
open tag: <html>
close tag: </html>
attribute: lang
attribute value: "en"

html:
head->title->first html
body->hello world
Absolute: <a href="https://cs260.click/profile.png">
Relative: <a href="profile.png" />

Element:
html: The page container
head: Header information
title: Title of the page
body: The entire content body of the page
header: Header content
main: Main content of the page
footer: Footer of the main content
section: A section of main content
div: A block division of content
span: An inline span of content
h<1-9>: Text heading. From h1, the highest level, down to h9, the lowest level
p: A paragraph of text
table: Table
ol,ul: Ordered or unordered list
a: Anchor the text to a hyperlink
img: Graphical image reference

Character: Entity
& : &amp;
< : &lt;
> : &gt;
" : &quot;
' : &apos;
😀 : &#128512;

css: Cascading style sheet
Precedence
selectors

element: Any section that is a descendant of a body
exa:
p
div
ID: The element with the attribute id=’root’
exa:
#root
class: Any element with the attribute class=’highlight’
exa:
.highlight
element class: Any p element with the attribute class=’highlight’
exa:
p.highlight
List: Body or section elements
exa: 
body,section
Descendant:
exa: Any section that is a descendant of a body
Child:
Any p that is a direct child of a section
exa: section > p:
Pseudo:
The mouse is hovering over a p element
exa: 
p:hover
background-color: 
Fill the background color
exa: red
border: Sets the border using shorthand where any or all of the values may be provided
exa: #fad solid medium
color: Sets the text color
exa: rgb(128, 0, 0)
display: Defines how to display the element and its children
exa: none
font: Defines the text font using shorthand
exa: Arial 1.2em bold
margin: Sets the margin spacing
exa: 5px 5px 0 0
padding: Sets the padding spacing
exa: 1em 2em

Unit:
px: The number of pixels
pt: The number of points (1/72 of an inch)
%: A percentage of the parent element
em: A multiplier of the width of the letter m in the parent's font
rem: A multiplier of the width of the letter m in the root's font
vw: A percentage of the viewport's width
vh: A percentage of the viewport's height
vmin: A percentage of the viewport's smaller dimension
vmax: A percentage of the viewport's larger dimension

importing fonts css:
@font-face {
 font-family: 'Quicksand';
 src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
 font-family: Quicksand;
}

@import url("https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap");

p {
 font-family: "Rubik Microbe";
}

Unicode and UTF-8
animation

none
block
inline
flex
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100vh;
  }
grid
  .container {
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 1em;
  }

Media Queries:
@media (orientation: portrait) {
 div {
   transform: rotate(270deg);
 }
}

bootstrap

Javascript:
'use strict';
// unknownVarName = 3;      - Must declare variables
// var undefined = 3;       - Keywords can't be variables
// function bad(a, a, b) {} - Duplicate parameters
// 'x'.name = 'rat';        - Can't add properties to primitives

// ---------- start -------------
function start(fn) {
  console.log(`%c JavaScript Demo`, 'font-size:2em; color: red;');

  fn = fn || variables;
  while (fn) {
    console.clear();
    console.log('%c %s', 'font-size:1.5em; color:red;', fn.name);
    fn = fn();
  }
  console.clear();
  console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
  debugger;
}

// ---------- variables -------------
let g = 1000;
function variables() {
  debugger;

  var x = 1; // deprecated
  let y = 1;
  const z = 'tacos';

  return types;
}

// ---------- types -------------
function types() {
  debugger;

  // Dynamic typing allows for reassignment

  // null
  let x = null;
  console.log('type changed: ', typeof x, x);

  // undefined
  x = undefined;
  console.log('type changed: ', typeof x, x);

  // string
  x = 'fish';
  console.log('type changed: ', typeof x, x);

  // number
  x = 1;
  console.log('type changed: ', typeof x, x);

  // object
  x = {};
  console.log('type changed: ', typeof x, x);
  x = { v: 2, z: 'fish' };
  console.log('type changed: ', typeof x, x);

  // array
  x = [1, 2];
  console.log('type changed: ', typeof x, x);
  console.log(Array.isArray(x));
  console.log(x instanceof Array);

  // date
  x = new Date();
  console.log('type changed: ', typeof x, x);
  console.log(x instanceof Date);

  // function
  x = function () {
    return 3;
  };
  console.log('type changed: ', typeof x, x);

  // Dynamic conversions
  console.log('rat' + [' fink']);
  console.log(1 + 'rat');
  console.log('rat' + 1);
  console.log(1 * 'rat');
  console.log([2] + [3]);
  console.log(true + null);
  console.log(true + undefined);

  return equality;
}

// ---------- equality -------------
function equality() {
  debugger;

  // Always use strict equality ===

  console.log(0 === 0);
  console.log(false === false);
  console.log('taco' === 'taco');
  console.log(undefined === undefined);

  console.log(0 === false);
  console.log('' === false);
  console.log('' === 0);
  console.log('0' === 0);
  console.log('17' === 17);
  console.log([1, 2] === '1,2');
  console.log([1, 2] === [1, 2]); // Objects compared by reference
  console.log(null === undefined);

  return conditionals;
}

// ---------- conditionals -------------
function conditionals() {
  debugger;

  // falsy (false, 0, -0, '', NaN, null, undefined)
  // truthy = !falsy

  if (true) {
    console.log('true');
  }

  if ((!false && undefined) || (true && !0)) {
    console.log('true');
  }

  if (false) {
    console.log('if');
  } else if (false) {
    console.log('else if');
  } else {
    console.log('else');
  }

  for (let i = 1; i < 3; i++) {
    console.log(`for ${i}`);
  }

  while (true) {
    console.log('while');
    break;
  }

  const pet = 'fish';
  switch (pet) {
    case 'fish':
      console.log('fish');
      break; // What happens if you remove this?
    case 'dog':
      console.log('dog');
      break;
    default:
      console.log('no pet. Buy one: statements("dog")');
  }

  return functions;
}

// ---------- functions -------------
function functions() {
  debugger;

  // inner function
  function f() {
    return 1;
  }
  console.log(f());

  // anonymous function with parameters and return value
  f = function (i) {
    return i;
  };
  console.log(f(3));

  // no return value
  f = function (i) {
    i;
  };
  console.log(f(5));

  // optional parameters
  f = function (a, b, c = 'rat') {
    return [a, b, c];
  };
  console.log(f(1));

  return arrowFunctions;
}

// single line with implicit return, inherits this binding
function arrowFunctions() {
  debugger;

  const arrow = () => 1;

  const arrowWithBlock = (a) => {
    a;
  };

  const arrowWithReturn = (a) => {
    return a;
  };

  console.log(arrow(), arrowWithBlock(2), arrowWithReturn(3));

  return closures;
}

// ---------- closures -------------
function closures() {
  debugger;

  // A function and its surrounding state.

  function dup(dupLimit, sep = ':') {
    return (t) => {
      let dupCount = 1;
      let out = t;
      while (dupCount++ < dupLimit) {
        out += sep + t;
      }
      return out;
    };
  }

  const duplicate4 = dup(4);
  console.log(duplicate4('hello'));

  console.log(dup(3)('again'));

  return strings;
}

// ---------- strings -------------
function strings() {
  debugger;

  let s = 'Cats Dogs Rats Mice'; // string literal
  s = new String('Cats Dogs Rats Mice'); // string object

  console.log('casefold: ', s.toUpperCase(), s.toLowerCase());
  console.log('split: ', s.split(' '));
  console.log('endsWith: ', s.endsWith('Mice'));
  console.log('replace: ', s.replace('Dogs', 'Puppies'));
  console.log('slice: ', s.slice(3, 7));

  return regex;
}

// ---------- regex -------------
function regex() {
  debugger;

  const text = 'Both cats and dogs are pets, but not rocks.';

  const objRegex = new RegExp('cat.?', 'i'); // cat, cats, catz
  const literalRegex = /cat.?/i;
  console.log(text.match(literalRegex));

  // literal regex with flags
  const petRegex = /(dog)|(cat)|(bird)/gim; // global, case insensitive, multiline

  console.log(text.match(petRegex));
  console.log(text.replace(petRegex, 'animal'));
  console.log(petRegex.test(text));

  return arrays;
}

// ---------- arrays -------------
function arrays() {
  debugger;

  let numbers = [];
  for (let i = 1; i < 11; i++) {
    numbers.push(i);
  }
  console.log('push 10: ', numbers);
  console.log('pop: ', numbers.pop());

  console.log('numbers[1]:', numbers[1]);
  console.log('slice:', numbers.slice(2, 5));
  console.log('length:', numbers.length);

  for (let entry of numbers) {
    console.log(entry);
    if (entry == 3) break;
  }

  return arrayOperations;
}

// ---------- arrayOperations -------------
function arrayOperations() {
  debugger;

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(
    'map',
    numbers.map((n) => n * 100)
  );
  console.log(
    'reduce',
    numbers.reduce((a, c) => a + c)
  );
  console.log(
    'forEach',
    numbers.forEach((n) => console.log(n % 2))
  );
  console.log(
    'filter',
    numbers.filter((n) => n % 2)
  );
  console.log(
    'some',
    numbers.some((n) => n > 5)
  );

  return exceptions;
}

// ---------- exceptions -------------
function exceptions() {
  debugger;

  try {
    (() => {
      throw 'trouble in river city';
    })();
  } catch (error) {
    console.log('error: ' + error);
  } finally {
    console.log('finally!');
  }

  return templateLiterals;
}

// ---------- templateLiterals -------------
function templateLiterals() {
  debugger;

  let name = 'amigo';
  let hello = (n) => 'hola ' + n;

  console.log(`Template ${'lite' + 'rals'}! ${hello(name)}`);

  return specialOperators;
}

// ---------- specialOperators -------------
function specialOperators() {
  debugger;

  // Logical OR
  // Uses right if left is falsy
  // falsy: (false, 0, -0, '', NaN, null, undefined)
  let x = null || 5;
  console.log('logical or: ', x);
  x = x || 10;
  console.log('logical or: ', x);
  console.log(undefined || null || 0 || NaN || 'logical OR');

  // Nullish coalescing operator
  // Uses right if left is nullish
  // Nullish: Null or undefined
  console.log(undefined ?? null ?? 'coalescing');
  console.log(0 ?? 'coalescing');

  // Short circuit with nullish coalescing
  let z;
  z ?? (z = x);
  console.log('short circuit: ', z);

  // Logical nullish assignment for short circuit
  // Assign if left is nullish
  let y;
  y ??= 30;
  console.log('logical nullish :', y);
  y ??= 40;
  console.log('logical nullish :', y);

  return objects;
}

// ---------- objects -------------
function objects() {
  debugger;

  let obj = {
    animal: 'fish',
  };

  obj.count = 3;
  obj.location = {
    cities: ['utah', 'new york'],
    origin: 'ocean',
  };
  obj.print = function () {
    return `${this.animal} live in ${this.location.cities.join(' and ')}`;
  };

  console.log(obj);
  console.log(obj.animal);
  console.log(obj.print());

  // iterator of properties
  for (const property in obj) {
    console.log(`name:${property}, value:${obj[property]}`);
  }

  for (const value of Object.keys(obj)) {
    console.log(`value:${value}`);
  }

  return spread;
}

// ---------- spread -------------
function spread() {
  debugger;

  // spread
  let input = [1, 2, 3];
  input = [...input, 4, 5, 6];
  console.log(input);

  let base = { a: 'rat', b: 'cat' };
  console.log({ c: 'dog', ...base, d: 'bird' });

  // rest (variadic)
  const sumAndMultiply = (multiplier, ...numbers) => {
    console.log(numbers);
    return numbers.reduce((a, n) => a + multiplier * n);
  };

  console.log(sumAndMultiply(10, ...input, 7, 8));

  return objectArrayOperations;
}

// ---------- objectArrayOperations -------------
function objectArrayOperations() {
  debugger;

  let beaches = [
    { name: 'Sunset', shore: 'north' },
    { name: 'Kailua', shore: 'east' },
    { name: 'Makua', shore: 'west' },
    { name: 'Lanikai', shore: 'east' },
    { name: 'Hukilau', shore: 'east' },
  ];
  console.table(beaches);

  // iterator of objects
  for (const beach of beaches) {
    if (beach.shore == 'west') break;
    console.log(beach);
  }

  // map the island name to each object
  console.table(beaches.map((n) => ({ ...n, island: 'Oahu' })));

  // reduce down to counts for each shore
  console.table(
    beaches.reduce(
      (totals, p) => ({ ...totals, [p.shore]: (totals[p.shore] || 0) + 1 }),
      {}
    )
  );

  // Filter to the east shore
  console.table(beaches.filter((n) => n.shore == 'east'));

  // Sort by name
  console.table(beaches.sort((a, b) => (a.name > b.name ? 1 : -1)));

  return optionalChain;
}

// ---------- optionalChain -------------
function optionalChain() {
  debugger;

  const x = {
    y: () => 3,
  };

  console.log(x.y?.());
  console.log(x.r?.());
  try {
    console.log(x.r());
  } catch (error) {
    console.log(error.message);
  }

  const fallback = () => 'fallback called';
  console.log(x.r?.() || fallback());

  return iteratorsAndGenerators;
}

// ---------- iteratorsAndGenerators -------------
function iteratorsAndGenerators() {
  debugger;

  // generator
  function* numberMaker(start, end) {
    for (let i = start; i < end; i++) {
      yield { number: i };
    }
  }

  // iterator
  for (let num of numberMaker(3, 6)) {
    console.log(num);
  }

  return destructuringArrays;
}

// ---------- destructuringArrays -------------
function destructuringArrays() {
  debugger;

  let x, y, z;

  const a = [1, 2];
  x = a;
  console.log(x);

  [x] = a;
  console.log(x);

  [x, y] = a;
  console.log(x, y);

  [x, y, z] = a;
  console.log(x, y, z);

  [x, y, z = 100] = a;
  console.log(x, y, z);

  [x, , y, ...z] = [1, 2, 3, 4, 5, 6, 7];
  console.log(x, y, z);

  return destructuringParameters;
}

// ---------- destructuringParameters -------------
function destructuringParameters() {
  debugger;

  // Destructured array param
  function af([a = 3, b = 'taco'] = []) {
    console.log(a, b);
  }
  af();
  af([20]);

  // Destructured object param
  function of({ a = 3, b = { animal: 'rat' } } = {}) {
    console.log(`a: ${a} b: ${b.animal}`);
  }
  of({ a: 10 });
  of({ b: { animal: 'dog' } });

  return destructuringReturns;
}

// ---------- destructuringReturns -------------
function destructuringReturns() {
  debugger;

  function af({ a = 3, b = 'rat' } = {}) {
    return [a, b, 'cat'];
  }

  const [x, y, z] = af({ a: 10 });
  console.log('array return: ', x, y, z);

  function of({ a = 3, b = 'rat' } = {}) {
    return { a, b, animal: 'animal-' + b };
  }

  const { a, animal, ...rest } = of({ a: 10 });
  console.log('object return: ', a, animal, rest);

  return math;
}

// ---------- math -------------
function math() {
  debugger;

  console.log('max: ', Math.max(3, Math.PI));
  console.log('random: ', Math.random());
  console.log('floor: ', Math.floor(3.999));

  return json;
}

// ---------- json -------------
function json() {
  debugger;

  const obj = {
    name: 'tina',
    alive: true,
    print: () => `${this.name} is ${this.alive}`,
  };

  console.log('object: ', obj);

  const objText = JSON.stringify(obj);
  console.log('json: ', objText);
  console.log('rehydrate: ', JSON.parse(objText));

  return classes;
}

// ---------- classes -------------
function classes() {
  debugger;

  // base class
  class Location {
    static defaultPlace = 'east';

    constructor(location) {
      this.location = location || Location.defaultPlace;
    }
  }

  // derived class
  class Beach extends Location {
    constructor(name, location, weather = 'sunny') {
      super(location);
      this.name = name;
      this._weather = weather;
    }

    get weather() {
      return this._weather;
    }

    set weather(weather) {
      this._weather = weather;
    }
  }

  const sunsetBeach = new Beach('Sunset', 'north', 'rainy');
  sunsetBeach.weather = 'snowing';
  const beaches = [sunsetBeach, new Beach('Kailua')];

  for (let beach of beaches) {
    console.log(
      `${beach.weather} weather at ${beach.name} beach on the ${beach.location} shore`
    );
  }

  return compatibility;
}

// ---------- compatibility  -------------
function compatibility() {
  debugger;

  // loose equality, does type conversion and unobvious equality rules
  1 == '1'; // true
  [1, 2] == '1,2'; // true
  null == undefined; // true

  // strict equality compares values without conversion
  1 === '1'; // false
  null === undefined; // false

  // all true for loose, all false for strict
  0 == false;
  '' == false;
  '' == 0;
  '0' == 0;
  '17' == 17;
  [1, 2] == '1,2';
  null == undefined;

  // Always use strict. truthy and falsy
  null === undefined; // false
  null !== undefined; // true

  // Var, let, const
  var x = 1; // deprecated
  let y = 1;
  const z = 'tacos';

  console.log(g, x, y, z);

  // This is why 'var' is deprecated
  {
    var x = 2; // same variable!
    var g = 2;
    console.log(x, g); // 2, 2
  }
  console.log(x, g); // 2, 2

  {
    let y = 2; // different variable
    console.log(y); // 2
  }
  console.log(y); // 1

  return undefined;
}

// ---------- document -------------
function wo(msg) {
  // Interact with the DOM
  const output = document.querySelector('button');
  output.innerText = msg;
}


DOM: Document object model
exa:
el.tagName
el.children
document.querySelectorAll('p')
el.textContent
document.querySelector('#t')
el.innerHTML
document.createElement('div')
parentElement.appendChild(newChild);

Eventhandler:
exa: <button onclick='alert("clicked")'>click me</button>
submitDataEl.addEventListener('click', function (event)

Event Category: Description
Clipboard: Cut, copied, pasted
Focus: An element gets focus
Keyboard: Keys are pressed
Mouse: Click events
Text selection: When text is selected

Scope:
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();

Local Storage:
exa:
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));

Modules:
exa:
function hello() { console.log('hello'); }
module.exports = { hello };

const greet = require('./greet');
greet.hello();

exa:
alert.js
export function alertDisplay(msg) {
  alert(msg);
}

main.js
import { alertDisplay } from './alert.js';
alertDisplay('called from main.js');

exa:
alert.js
export function alertDisplay(msg) {
  alert(msg);
}

index.html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;
    </script>
    <button onclick="btnClick('called from index.html')">
      Press me
    </button>
  </body>
</html>

Everything must be asynchronous

Promise:

pending: Currently running asynchronously
fulfilled: Completed successfully
rejected: Failed to complete

exa:
new Promise((resolve, reject) => resolve(true))
callback: ((resolve,
return: resolve(
state: "fulfilled"
true: result

two solutions:
resolve or reject

.then: runs when callback resolves, then call this

exa:
placeOrder(order)
   .then((order) => makePizza(order))
   .then((order) => serveOrder(order))
   .catch((order) => orderFailure(order))
   .finally(() => logOrder(order));

makePizza(order) and serveOrder(order): returns promise
.catch: handles exceptions, reject
.finally() is always called

promise syntax:
  tossCoin
  .then((result) => console.log(`Toss result: ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

await syntax:
try {
  const result = await tossCoin;
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}

if you use await in the function it has to be declared asynchronous

async function cattleDrive() { return cow() }: returns cow promise
async function cattleDrive() { return await cow() }: returns moo promise
async function cattleDrive() { await cow() }: returns undefined promise




