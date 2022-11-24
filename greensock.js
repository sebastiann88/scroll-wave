// Animation

gsap.to('#image-sequence', {
	scrollTrigger: {
		trigger: ".animation-fade-out",
		toggleActions: "play none none reverse"
	},
 	opacity: 0,
 	duration: 2,
})

gsap.to('.play-button-container', {
	scrollTrigger: {
		trigger: ".animation-fade-out",
		toggleActions: "play none none reverse"
	},
 	opacity: 0,
 	duration: 2,
})

// Portfolio

gsap.to('.portfolio-button-link', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in-link",
		toggleActions: "play none none reverse",
	},
 	opacity: 1,
 	duration: 2,
 	// delay: 4.15
})

gsap.to('.portfolio', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none",
	},
 	opacity: 1,
 	duration: 2,
 	delay: 0.10
})

gsap.to('#container', {
	scrollTrigger: {
		trigger: ".portfolio-fade-in",
		toggleActions: "play none none none",
	},
 	opacity: 1,
 	duration: 2,
 	delay: 0.10
})
