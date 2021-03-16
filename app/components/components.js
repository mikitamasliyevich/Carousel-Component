import sliders from "../data/data"
import {createblock,createblockDetails} from "./utilities/utilities.js"

export default class Components {
	constructor() {
		this.bodyContainer = document.querySelector("body");
	}

	addStructure() {
		this.sliderWrapper = createblock("div", "slider-wrapper");
		this.dotsWrapper = createblock("div", "dots-wrapper");
		this.bodyContainer.append(this.sliderWrapper);
		this.bodyContainer.append(this.dotsWrapper);
	}

	renderCards() {
		sliders.forEach((element) => {
			this.slide = createblock("div", "slide fade");
			this.numbertext = createblockDetails("div", "numbertext", `${element.id}/4`);
			this.sliderImage = createblock("img", "sliderImage")
			this.sliderImage.src = `${element.image}`;
			this.sliderNumber = createblockDetails("div", "text", `Picter ${element.number}`);
			this.dot = createblock("span", "dot")
			this.dot.dataset.index = element.id;
			this.sliderWrapper.append(this.slide)
			this.slide.append(this.numbertext)
			this.slide.append(this.sliderImage)
			this.slide.append(this.sliderNumber)
			this.dotsWrapper.append(this.dot)
		})
	}


	createButtons() {
		this.btnNext = createblockDetails("a", "btn-next", "&#10094");
		this.btnPrev = createblockDetails("a", "btn-prev", "&#10095")
		this.sliderWrapper.append(this.btnNext)
		this.sliderWrapper.append(this.btnPrev)
	}

	addActiveClass() {
		this.slides = document.querySelectorAll(".slide");
		this.slides[0].className = "slide fade active";
		this.dots = document.querySelectorAll(".dot");
		this.dots[0].className = "dot active"
	}
	init() {
		this.addStructure();
		this.renderCards();
		this.createButtons();
		this.addActiveClass();
	}
}
