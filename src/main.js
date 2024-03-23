import './scss/index.scss';
import { textLabel } from './html/textLabel';
import { textField } from './html/textField';
import { carousel } from './html/carousel';
import { saveBlock } from './html/saveBlock';
import { carouselFN } from './js/carousel';

import img0 from './img/a1.png';
import img1 from './img/a4.png';
import img2 from './img/b3.png';
import img3 from './img/c2.png';
import img4 from './img/c3.png';
import img5 from './img/c4.png';
import img6 from './img/d3.png';
import img7 from './img/e1.png';
import img8 from './img/e3.png';
import img9 from './img/f1.png';

const aboutText = "PM1000 is a progress management tool for Paper Mario: The Thousand Year Door. Keep track of multiple resources found in game to efficiently complete your collection of star pieces, shine sprites, badges, recipes and tattle logs!";
const imgArray = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

document.querySelector('#app').innerHTML = `
	<div class="section-container">
		<div class="card-inset">		
			${textLabel('About', 'about')}
			${textField(aboutText)}
			${textLabel('Screenshots', 'screenshots')}
			${carousel(imgArray)}
			${textLabel('Downloads', 'downloads')}
			<div class="save-block-container">
				${saveBlock('https://www.google.com/', '_blank', 'D', 'Windows 10/11')}
			</div>
			<div class="text-muted">Created by Venomousquid (2024)</div>
		</div>
	</div>
`

carouselFN(imgArray)
