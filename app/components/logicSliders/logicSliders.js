import Components from "../components";

export default class LogicSliders {
	constructor() {
		this.components = new Components()
		this.components.init()
		this.sliders = document.querySelectorAll(".slide");
		this.next = document.querySelector(".btn-prev");
		this.prev = document.querySelector(".btn-next");
		this.dots = document.querySelectorAll(".dot")
		this.index = 0;
		this.timer = 1000;
	}

	activeSlide(n) {
		this.sliders.forEach((slide) => slide.classList.remove('active'));
		this.sliders[n].className = "slide fade active";
		this.resetDots()
		this.activateDot(n)
	}

	nextSlide() {
		if (this.index === this.sliders.length - 1) {
			this.index = 0;
		} else {
			this.index++;
		}
		this.activeSlide(this.index);
	}

	prevSlide() {
		if (this.index === 0) {
			this.index = this.sliders.length - 1;
		} else {
			this.index--;
		}
		this.activeSlide(this.index);
	}

	initButtons() {
		this.next.addEventListener('click', () => this.nextSlide());
		this.prev.addEventListener('click', () => this.prevSlide());
	}

	initDots() {
		this.dots.forEach((element) => element.addEventListener("click", (event) => this.activeSlide(event.target.dataset.index)))
	}


	resetDots() {
		this.dots.forEach(dot => dot.classList.remove('active'));
	}

	activateDot(n) {
		this.dots[n].className = "dot active";
	}

	setInterval() {
		setInterval(() =>
			this.nextSlide(), this.timer);
	}

	init() {
		this.nextSlide()
		this.setInterval()
		this.prevSlide()
		this.activeSlide(this.index)
		this.initButtons()
		this.initDots()
		this.activateDot()
		this.resetDots()
	}
}
