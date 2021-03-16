const createblock = (tag, classN) => {
	let blockContainer = document.createElement(tag);
	blockContainer.className = classN;
	return blockContainer
}

const createblockDetails = (tag, classN, innerHTML) => {
	let blockDetails = document.createElement(tag);
	blockDetails.className = classN;
	blockDetails.innerHTML = innerHTML;
	return blockDetails;
}
export {createblock, createblockDetails}
