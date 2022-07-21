const archor = document.querySelectorAll('a[href*="#"');
for(let arc of archor)
{
	arc.addEventListener("click", function(event)
	{
		event.preventDefault();
		const blockId = arc.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView(
		{
			behavior:"smooth",
			block: "start",
		})
	})
}