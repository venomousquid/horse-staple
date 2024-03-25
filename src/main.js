import './scss/index.scss';
import { textLabel } from './html/textLabel';
import { textField } from './html/textField';
import { carousel } from './html/carousel';
import { saveBlock } from './html/saveBlock';
import { hero } from './html/hero';
import { modal } from './html/modal';
import { carouselFN } from './js/carousel';
import { modalFN } from './js/modal';

import img0 from './img/a3.webp';
import img1 from './img/a4.webp';
import img2 from './img/b3.webp';
import img3 from './img/c2.webp';
import img4 from './img/c3.webp';
import img5 from './img/c4.webp';
import img6 from './img/d3.webp';
import img7 from './img/e1.webp';
import img8 from './img/e3.webp';
import img9 from './img/f1.webp';

const aboutText = "PM1000 is a progress management tool for Paper Mario: The Thousand-Year Door. Keep track of multiple resources found in game to efficiently complete your collection of star pieces, shine sprites, badges, recipes and tattle logs!";
const imgArray = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

document.querySelector('#app').innerHTML = `
	${hero()}
	<div class="section-container">
		<div class="card-inset">		
			${textLabel('About', 'about')}
			${textField(aboutText)}
			${textLabel('Screenshots', 'screenshots')}
			${carousel(imgArray)}
			${textLabel('Download', 'download')}
			<div class="save-block-container">
				${saveBlock('https://2ly.link/1xEj1', '_blank', 'D', 'Windows 10/11')}
			</div>
			${modal()}
			<div class="text-muted">Created by Venomousquid (2024)</div>
		</div>
	</div>
`;

carouselFN(imgArray);
modalFN();
