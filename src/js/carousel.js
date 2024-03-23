export const carouselFN = (imgArray = [], timeInterval = 5) => {
	const carouselElement = document.getElementById("carousel-element");
	const carouselInterfaceLeft = document.getElementById("carousel-interface-left");
	const carouselInterfaceRight = document.getElementById("carousel-interface-right");
	const carouselProgressItems = document.getElementsByClassName("carousel__progress-item");
	let carouselSelection = parseInt(carouselElement.dataset.selected);

	carouselInterfaceLeft.addEventListener("click", event => mutateCarouselSelection('left'))
	carouselInterfaceRight.addEventListener("click", event => mutateCarouselSelection('right'))
	for (let progressItem of carouselProgressItems) {
		progressItem.addEventListener("click", event => {
			setCarouselSelection(parseInt(event.target.dataset.progressId));
		})
	}

	const mutateCarouselSelection = (direction, automation = false) => {
		switch (direction) {
			case 'left':
				carouselSelection--
				break;
			case 'right':
				carouselSelection++
				break;
			}

		if (carouselSelection < 0) {
			carouselSelection += imgArray.length
		}
		if (carouselSelection > imgArray.length - 1) {
			carouselSelection -= imgArray.length
		}

		if (automation !== true) {
			clearInterval(interval);
		}
		updateCarouselSelection();
	}

	const setCarouselSelection = (value, automation = false) => {
		carouselSelection = value
		if (automation !== true) {
			clearInterval(interval);
		}
		updateCarouselSelection()
	}

	const updateCarouselSelection = () => {
		for (let progressItem of carouselProgressItems) {
			progressItem.setAttribute('data-active', "false")
		}	
		carouselProgressItems[carouselSelection].setAttribute('data-active', "true")
		carouselElement.setAttribute('data-selected', carouselSelection)
		carouselElement.style.setProperty('--selected-index', carouselSelection);
	}

	const interval = setInterval(function() {
		mutateCarouselSelection('right', true)
	}, (timeInterval * 1000));
}
