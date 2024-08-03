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
  console.log(147);
  title.classList.add('hidden');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    title.classList.remove('hidden');
  } else {
    navbar.classList.remove('scrolled');
    title.classList.add('hidden');
  }
});

// window.addEventListener('scroll', () => {
// if(window.scrollY > 100){
//   console.log(58);
// }

// }
// )



const sections = document.querySelectorAll('section');
const items = document.querySelectorAll('.nav-item a');

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
    if (item.href.includes(current)) {
      item.classList.add('active');
    }
  });
});









