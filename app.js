
// const title=document.getElementById('main-heading');

// title.textContent='Dom manipulating with javaScript!!'
// console.log(title.parentNode);


// // Get ElementByClassName();
// const items=document.getElementsByClassName('list-items');
// console.log(items)

const item=document.querySelectorAll('.list-items');

 for(let i=0;i<item.length;i++){
     item[i].style.fontSize='5rem';
 }


 for(let it of item){
     it.style.color='red';
 }


//  creating elements
const ul=document.querySelector('ul');
const li=document.createElement('li');


ul.append(li);



const btn = document.getElementById("btnRate");
      const output = document.getElementById("output");

      btn.addEventListener("click", () => {
        const rates = document.getElementsByName("rate");
        rates.forEach((rate) => {
          if (rate.checked) {
            output.innerText = `You selected:${rate.value}`;
          }
        });
      });


const current=document.querySelector('.current');
let nextSibiling=current.nextElementSibling;
while(nextSibiling){
     console.log(nextSibiling);

     nextSibiling=nextSibiling.nextElementSibling;
}


// let prevSibling=current.previousElementSibling;
//  while(prevSibling){
//     console.log(prevSibling);
//      prevSibling=current.previousElementSibling;
//  }

let div=document.createElement('div');
div.id='content';
div.className='note';

let h1=document.createElement('h1');
h1.textContent='Add h1 element to the div ';
 
div.appendChild(h1);


//  ul list create with creatElement 
let ull=document.createElement("ul");
div.appendChild(ull);



// let first create li 
// and then push parentNode uL in li element
let letters=['a','b','c','d','e','f','g','h','i','j' ,'k ',';','M','N','o','p','q']

for(let i=0;i<20;i++){
    let Li=document.createElement('li');
    
   
    Li.innerText=letters[i];
    
     ull.appendChild(Li);
}


let text=document.createTextNode('his hus has');
div.appendChild(text);

document.body.appendChild(div);


let script=document.createElement('script');
script.src='/app.js';

let Div=document.querySelector('.container');

let fragment=document.createDocumentFragment();

// for(let i=0;i<1000;i++){
//      let p=document.createElement('p');
//      p.textContent=`Paragrarph ${i}`;
//      fragment.appendChild(p);
// }

div.appendChild(fragment);


let language=['js','TypeScript','Elm','Dart','Scale'];

let  lanEl=document.querySelector('#language');


let frgment=document.createDocumentFragment();

language.forEach((language)=>{
     let li=document.createElement('li');
     li.innerHTML=language;
     fragment.appendChild(li);
})

lanEl.appendChild(fragment);



const libs=['react','meteor','Polymer'];

const List=libs.map((lib)=>{
     const item=document.createElement('li');
     item.innerText=lib;

     return item;
})

lanEl.firstChild.before(...List);



const btnUpdate = document.getElementById("btnUpdate");
const write = document.getElementById("name");

btnUpdate.addEventListener("click", () => {
  const inputName = document.getElementById("inputName");
  console.log(inputName);
  name = inputName.value;
  write.innerText = name;
});

let Btn = document.getElementById("loginBtn");
let form = document.getElementById("form");
form.style.display = "none";

function loginForm() {
  Btn.addEventListener("click", () => {
    form.style.display = "block";
  });
}
loginForm();
function makeYellow() {
  let Btn = document.querySelector("#btn");

  if (document.body.style.backgroundColor === "yellow") {
    document.body.style.backgroundColor = "red";
    Btn.textContent = "yellow";
  } else {
    document.body.style.backgroundColor = "yellow";
    Btn.textContent = "red";
  }
}

let menu = document.querySelector("#menu");
let cloneMenu = menu.cloneNode(true);

cloneMenu.id = "menu mobile";
document.body.appendChild(cloneMenu);

let list = document.querySelector("#list");

list.insertAdjacentHTML("beforebegin", "<h2>Web Technology</h2>");
list.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
list.insertAdjacentHTML("beforeend", "<li>Web Technology</li>");
list.insertAdjacentHTML("beforebegin", "<h2>Web Technology</h2>");