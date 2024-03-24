import logo from '../img/logo.webp';

const title = 'PM1000';
const subTitle = 'Thousand-Year Door Progress Manager';

const titleNode = (str) => {
	str = str.substring(0, 10);
	let returnString = '';

	for (let i = 0; i < str.length; i++) {
		returnString+= `<div data-text="${str.charAt(i)}">${str.charAt(i)}</div>`
	}

	return returnString
}

const subTitleNode = (str) => {
	str = str.substring(0, 39);
	let returnString = '';

	for (let i = 0; i < str.length; i++) {
		returnString+= `<div>${str.charAt(i)}</div>`
	}

	return returnString
}

export const hero = () => `
	<div class="hero">
		<div></div>
		<div class="hero__title">
			${titleNode(title)}
		</div>
		<div class="hero__spinner">
			<div class="hero__subtitle">
				${subTitleNode(subTitle)}
			</div>
			<img src="${logo}" class="hero__coin"/>
		</div>
	</div>
`;
