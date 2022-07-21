
const AnimatedItemsLeft = document.querySelectorAll('.a-left');
if(AnimatedItemsLeft.length > 0)
{
  window.addEventListener('scroll',animOnScroll)
  function animOnScroll()
  {
    for(let index = 0; index<AnimatedItemsLeft.length;index++)
    {
    const anim = AnimatedItemsLeft[index];
    arrow('left',anim); 
    }
  }
}
const AnimatedItemsRight = document.querySelectorAll('.a-right');
if(AnimatedItemsRight.length > 0)
{
  window.addEventListener('scroll',animOnScroll)
  function animOnScroll()
  {
    for(let index = 0; index<AnimatedItemsRight.length;index++)
    {
    const anim = AnimatedItemsRight[index];
    arrow('right',anim);
    }
  }
  
}
const AnimatedItemsTop = document.querySelectorAll('.a-top');
if(AnimatedItemsTop.length > 0)
{
  window.addEventListener('scroll',animOnScroll)
  function animOnScroll()
  {
    for(let index = 0; index<AnimatedItemsTop.length;index++)
    {
    const anim = AnimatedItemsTop[index];
    arrow('top',anim);
    }
  }
  
}
const AnimatedItemsOp = document.querySelectorAll('.a-op');
if(AnimatedItemsOp.length > 0)
{
  window.addEventListener('scroll',animOnScroll)
  function animOnScroll()
  {
    for(let index = 0; index<AnimatedItemsOp.length;index++)
    {
    const anim = AnimatedItemsOp[index];
    arrow('opacity',anim);
    }
  }
  
}
function arrow(arr, anim)
{
    const animHeght = anim.offsetHeight;
    const animOffset = offset(anim).top;
    const animStart = 3;
    let animPoint = window.innerHeight - animHeght / animStart;

    if(animHeght>window.inerHeight)
    {
      animPoint = window.innerHeight - window.inerHeight / animStart;
    }
    if((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animHeght))
    {
      anim.classList.add('animated-' + arr);
      anim.classList.remove('opacity');
    }
}
function offset(el)
  {
    const rect = el.getBoundingClientRect(), 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

