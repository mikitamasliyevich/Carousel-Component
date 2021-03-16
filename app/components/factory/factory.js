import LogicSliders from "../logicSliders/logicSliders"

export default class Factory {
	constructor() {
		this.logicSlider = new LogicSliders();
	}

	init() {
		this.logicSlider.init()
	}
}
