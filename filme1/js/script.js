var listaFilme = [
    {
        nome:"jupter ascending"
    }, 
    {
        nome:"marvel vs dc"
    }, 
    {
        nome:"godzilla vs kong"
    }, 
    {
        nome:"matrix 4"
    }, 
    {
        nome:"mortal kombat legacy"
    }, 
    {
        nome:"um principe em NY"
    }, 
    {
        nome:"venom"
    }, 
    {
        nome:"mulher maravilha"
    }, 
]
var imgBanner = document.querySelectorAll('.bxbanner span')
const BannerPrincipal = document.querySelector('.descBanner')
document.querySelector('.fa-times').onclick = () => {
    BannerPrincipal.style.transform= "translateX(-100%)";
}
for(let i = 0 ;i<imgBanner.length;i++){
    imgBanner[i].addEventListener('click', ()=>{
        BannerPrincipal.style.transform= "translateX(0%)";
        document.querySelector('.decPrincipal h2').innerHTML = listaFilme[i].nome
    });
}
const slide1 = document.querySelector('.box--1 .slideWidth');
document.querySelector(".box--1 .fa-chevron-left").onclick = ()=>{
    slide1.style.marginLeft = '0px'
}
document.querySelector(".box--1 .fa-chevron-right").onclick = ()=>{
    slide1.style.marginLeft = '-200px'
}

const slide2 = document.querySelector('.box--2 .slideWidth');
document.querySelector(".box--2 .fa-chevron-left").onclick = ()=>{
    slide2.style.marginLeft = '0px'
}
document.querySelector(".box--2 .fa-chevron-right").onclick = ()=>{
    slide2.style.marginLeft = '-200px'
}
const slide3 = document.querySelector('.box--3 .slideWidth');
document.querySelector(".box--3 .fa-chevron-left").onclick = ()=>{
    slide3.style.marginLeft = '0px'
}
document.querySelector(".box--3 .fa-chevron-right").onclick = ()=>{
    slide3.style.marginLeft = '-200px'
}

const slide4 = document.querySelector('.box--4 .slideWidth');
document.querySelector(".box--4 .fa-chevron-left").onclick = ()=>{
    slide4.style.marginLeft = '0px'
}
document.querySelector(".box--4 .fa-chevron-right").onclick = ()=>{
    slide4.style.marginLeft = '-200px'
}

const slide5 = document.querySelector('.box--5 .slideWidth');
document.querySelector(".box--5 .fa-chevron-left").onclick = ()=>{
    slide5.style.marginLeft = '0px'
}
document.querySelector(".box--5 .fa-chevron-right").onclick = ()=>{
    slide5.style.marginLeft = '-200px'
}