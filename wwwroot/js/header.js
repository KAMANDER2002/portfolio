 const header = document.querySelector('.a-head')
  const headerHeight = offset(header).top;
window.addEventListener('scroll',() =>
{
   if(window.pageYOffset>headerHeight)
   {
   	header.classList.add('header-fixed');
    $('.waypoint').css({
       'paddingTop': header.offsetHeight +'px' 
    });
   }
   else 
   {
   	header.classList.remove('header-fixed');
    $('.waypoint').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
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
    $('.container-head').toggleClass('flex-space');
  })
})
