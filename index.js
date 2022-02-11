const jarallaxEls = document.querySelectorAll('.jarallax')

jarallaxEls.forEach(( el,index ) => {
	if (index % 2) return false

	el.style.justifySelf ='end'
} )

jarallax(jarallaxEls, {
	speed: 0.2,
})

