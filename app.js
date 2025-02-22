
const title=document.getElementById('main-heading');

title.textContent='Dom manipulating with javaScript!!'
console.log(title.parentNode);


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
