import saveStar from '../img/save-star.webp';

export const saveBlock = (url, target = '_self', letter = 'S', label) => `
	<a class="save-block" href="${url}" target="${target}">
		<img class="save-block__star" src="${saveStar}" alt="save-star"/>
		<div class="save-block__gradient"></div>
		<div class="save-block__border"></div>
		<div class="save-block__character">${letter.charAt(0).toUpperCase()}</div>
		${ label ? `<div class="save-block__label" data-text="${label}">${label}</div>` : '' }
	</a>
`;