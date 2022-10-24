//const input=document.getElementById('textid');
//const input=document.querySelector('#textid');
//const t=document.querySelector('$showtext');
const $=(selector)=>document.querySelector(selector)
//const input=$('#textid');
//const t=$('$showtext');
//input.addEventListener('keyup',()=>{
// t.textContent=input.value
//})
const input=$('#textid');
const btn=$('#btn');
const content=$('#content');

btn.addEventListener('click',()=>{
    content.innerHTML=`
    <img src=\'https://www.bunko.pet/__export/1619384137038/sites/debate/img/2021/04/25/gatita-pequexa_crop1619383748472.jpg_172596871.jpg\' width=\'400px\' height=\'150px\'>${input.value}
    `
})