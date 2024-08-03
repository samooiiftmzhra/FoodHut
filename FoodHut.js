const nav=document.querySelector('.nav');
const sectionOne=document.querySelector('#nav-item1')
const sectionTwo=document.querySelector('#nav-item2')
const sectionThree=document.querySelector('#nav-item3')
const sectionFour=document.querySelector('#nav-item4')
const sectionFive=document.querySelector('#nav-item5')
const sectionSix=document.querySelector('#nav-item6')
const sectionSeven=document.querySelector('#nav-item7')
nav.addEventListener('click',function(event){

    sectionOne.scrollIntoView(

        {behavior:'smooth'}
    
    )

})


const navbar = document.querySelector('.navBar');
const title=document.querySelector('title');
window.addEventListener('scroll', () => {
  title.classList.add('hidden');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    title.classList.remove('hidden');
  } else {
    navbar.classList.remove('scrolled');
    title.classList.add('hidden');
  }
});


const sections = document.querySelectorAll('section');
const items = document.querySelectorAll('.item');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.id;
    }
  });

  items.forEach(item => {
    item.classList.remove('active');
    console.log(current);
    if (item.href.includes(current)) {
      item.classList.add('active');
    }
  });
});

const email = document.getElementById('EMAIL');
  email.addEventListener('click', () => {
  email.style.boxShadow = `1px 1px 5px darkgray`;
  email.style.border=`3px solid darkgray`
});


const number= document.getElementById('NUMBER OF GUESTS');

  number.addEventListener('click', () => {
  number.style.boxShadow = `1px 2px 5px darkred`;
  number.style.border=`3px solid darkred`
});


const date= document.getElementById('DATE');

  date.addEventListener('click', () => {
  date.style.boxShadow = `1px 1px 2px darkred`;
  date.style.border=`3px solid darkred`
});

const time= document.getElementById('TIME');

  time.addEventListener('click', () => {
  time.style.boxShadow = `1px 2px 5px darkgray`;
  time.style.border=`3px solid darkgray`
});



