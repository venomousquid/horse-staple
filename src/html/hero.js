import logo from '../img/logo.webp';
import curtainFront from '../img/curtain-front.svg';
import curtainLayer from '../img/curtain-layer.svg';

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
		<div class="hero__curtain-container">
			<img src="${curtainLayer}" class="hero__curtain-left hero__curtain-left--3rd"/>
			<img src="${curtainLayer}" class="hero__curtain-left hero__curtain-left--2nd"/>
			<img src="${curtainLayer}" class="hero__curtain-left hero__curtain-left--1st"/>
			<img src="${curtainFront}" class="hero__curtain-middle"/>
			<img src="${curtainLayer}" class="hero__curtain-right hero__curtain-right--1st"/>
			<img src="${curtainLayer}" class="hero__curtain-right hero__curtain-right--2nd"/>
			<img src="${curtainLayer}" class="hero__curtain-right hero__curtain-right--3rd"/>
		</div>
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
