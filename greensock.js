// Animation

gsap.to('#image-sequence', {
	scrollTrigger: {
		trigger: ".animation-fade-out",
		toggleActions: "play none none none"
	},
 	opacity: 0,
 	duration: 2,
})

gsap.to('.play-button-container', {
	scrollTrigger: {
		trigger: ".animation-fade-out",
		toggleActions: "play none none none"
	},
 	opacity: 0,
 	duration: 2,
})

// Portfolio

gsap.to('.portfolio', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none"
	},
 	opacity: 1,
 	duration: 2,
 	delay: 2.15
})

gsap.to('#container', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none"
	},
 	opacity: 1,
 	duration: 2,
 	delay: 2.15
})