window.addEventListener('scroll',() =>
{
  const header = document.querySelector('.a-head')
  const header_image = document.querySelector('.head-image')
   if(window.pageYOffset>(header_image.offsetHeight))
   {
   	header.classList.add('header-fixed');
   }
   else 
   {
   	header.classList.remove('header-fixed');
   }
});

window.addEventListener('scroll',()=>
{
	let scrollDistance = window.scrollY;
	document.querySelectorAll('.section').forEach((el,i)=>{
		if(el.offsetTop - document.querySelector('nav').clientHeight <= scrollDistance+100)
		{
           document.querySelectorAll('nav a').forEach((el) => {
           	if(el.classList.contains('active'))
           	{
           		el.classList.remove('active')
           	}
           });
          const link = document.querySelectorAll('.header-links a')[i];
          link.classList.add('active');
		}
	});
		
});
$(document).ready(function()
{
  $('.burger').click(function(event)
  { 
    $('.burger,.header-links').toggleClass('burger-active');
    $('.container-head').toggleClass('flex-space transition');
  })
})