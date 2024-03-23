export const carousel = (imgArray = []) => {
	let imgArrayNode = '';
	let progressNode = '';

	imgArray.forEach(img => imgArrayNode += `<img src="${img}" class="carousel__image" width="auto" height="100%"/>`)
	imgArray.forEach((img, index) => progressNode += `<div class="carousel__progress-item" data-progress-id="${index}" data-active="${index === 0 ? 'true':'false'}"></div>`)

	return `
		<div id="carousel-element" class="carousel" data-selected="0" style="--selected-index: 0;">
			<div class="carousel__image-container">
				${imgArrayNode}
			</div>
			<div class="carousel__progress-container">
				${progressNode}
			</div>
			<div id="carousel-interface-left" class="carousel__interface carousel__interface--left">
				<div class="carousel__interface-button"><-</div>
			</div>
			<div id="carousel-interface-right" class="carousel__interface carousel__interface--right">
				<div class="carousel__interface-button">-></div>
			</div>
		</div>
	`
};
