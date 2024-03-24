(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const d=(e="text",t="")=>`
	<${t?"a":"div"} class="text-label" id="${t}" ${t?`href="#${t}"`:""}>${e}</${t?"a":"div"}>
`,h=(e="text")=>`
	<div class="text-field">
		<div class="text-field__text">${e}</div>
		<div class="text-field__border-thick"></div>
		<div class="text-field__border-thin"></div>
	</div>
`,m=(e=[])=>{let t="",a="";return e.forEach(o=>t+=`<img src="${o}" class="carousel__image" width="auto" height="100%"/>`),e.forEach((o,s)=>a+=`<div class="carousel__progress-item" data-progress-id="${s}" data-active="${s===0?"true":"false"}"></div>`),`
		<div id="carousel-element" class="carousel" data-selected="0" style="--selected-index: 0;">
			<div class="carousel__image-container">
				${t}
			</div>
			<div class="carousel__progress-container">
				${a}
			</div>
			<div id="carousel-interface-left" class="carousel__interface carousel__interface--left">
				<div class="carousel__interface-button"><-</div>
			</div>
			<div id="carousel-interface-right" class="carousel__interface carousel__interface--right">
				<div class="carousel__interface-button">-></div>
			</div>
		</div>
	`},p="data:image/webp;base64,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",A=(e,t="_self",a="S",o)=>`
	<a class="save-block" href="${e}" target="${t}">
		<img class="save-block__star" src="${p}" alt="save-star"/>
		<div class="save-block__gradient"></div>
		<div class="save-block__border"></div>
		<div class="save-block__character">${a.charAt(0).toUpperCase()}</div>
		${o?`<div class="save-block__label" data-text="${o}">${o}</div>`:""}
	</a>
`,b="/horse-staple/assets/logo-DHaRrd57.webp",P="PM1000",y="Thousand-Year Door Progress Manager",D=e=>{e=e.substring(0,10);let t="";for(let a=0;a<e.length;a++)t+=`<div data-text="${e.charAt(a)}">${e.charAt(a)}</div>`;return t},N=e=>{e=e.substring(0,39);let t="";for(let a=0;a<e.length;a++)t+=`<div>${e.charAt(a)}</div>`;return t},L=()=>`
	<div class="hero">
		<div></div>
		<div class="hero__title">
			${D(P)}
		</div>
		<div class="hero__spinner">
			<div class="hero__subtitle">
				${N(y)}
			</div>
			<img src="${b}" class="hero__coin"/>
		</div>
	</div>
`,S=(e=[],t=5)=>{const a=document.getElementById("carousel-element"),o=document.getElementById("carousel-interface-left"),s=document.getElementById("carousel-interface-right"),r=document.getElementsByClassName("carousel__progress-item");let c=parseInt(a.dataset.selected);o.addEventListener("click",i=>n("left")),s.addEventListener("click",i=>n("right"));for(let i of r)i.addEventListener("click",l=>{g(parseInt(l.target.dataset.progressId))});const n=(i,l=!1)=>{switch(i){case"left":c--;break;case"right":c++;break}c<0&&(c+=e.length),c>e.length-1&&(c-=e.length),l!==!0&&clearInterval(v),u()},g=(i,l=!1)=>{c=i,l!==!0&&clearInterval(v),u()},u=()=>{for(let i of r)i.setAttribute("data-active","false");r[c].setAttribute("data-active","true"),a.setAttribute("data-selected",c),a.style.setProperty("--selected-index",c)},v=setInterval(function(){n("right",!0)},t*1e3)},H="/horse-staple/assets/a3-Cujp4sY9.webp",k="/horse-staple/assets/a4-DXvBsnzM.webp",w="/horse-staple/assets/b3-DQMiMc56.webp",W="/horse-staple/assets/c2-D7-WHc_v.webp",x="/horse-staple/assets/c3-BJazPEVg.webp",z="/horse-staple/assets/c4-DaQZ7szw.webp",U="/horse-staple/assets/d3-C16_8kbo.webp",K="/horse-staple/assets/e1-Bw6DOwaL.webp",C="/horse-staple/assets/e3-JsWtibTC.webp",T="/horse-staple/assets/f1-CRyZyF1r.webp",B="PM1000 is a progress management tool for Paper Mario: The Thousand-Year Door. Keep track of multiple resources found in game to efficiently complete your collection of star pieces, shine sprites, badges, recipes and tattle logs!",f=[H,k,w,W,x,z,U,K,C,T];document.querySelector("#app").innerHTML=`
	${L()}
	<div class="section-container">
		<div class="card-inset">		
			${d("About","about")}
			${h(B)}
			${d("Screenshots","screenshots")}
			${m(f)}
			${d("Downloads","downloads")}
			<div class="save-block-container">
				${A("https://www.google.com/","_blank","D","Windows 10/11")}
			</div>
			<div class="text-muted">Created by Venomousquid (2024)</div>
		</div>
	</div>
`;S(f);
