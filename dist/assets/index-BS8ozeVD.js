(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=(r="text")=>`
	<div class="text-label">
		${r}
	</div>
`,m=(r="text")=>`
	<div class="text-field">
		<div class="text-field__text">${r}</div>
		<div class="text-field__border-thick"></div>
		<div class="text-field__border-thin"></div>
	</div>
`,v=(r=[])=>{let a="",c="";return r.forEach(i=>a+=`<img src="${i}" class="carousel__image" width="auto" height="100%"/>`),r.forEach((i,e)=>c+=`<div class="carousel__progress-item" data-progress-id="${e}" data-active="${e===0?"true":"false"}"></div>`),`
		<div id="carousel-element" class="carousel" data-selected="0" style="--selected-index: 0;">
			<div class="carousel__image-container">
				${a}
			</div>
			<div class="carousel__progress-container">
				${c}
			</div>
			<div id="carousel-interface-left" class="carousel__interface carousel__interface--left"><</div>
			<div id="carousel-interface-right" class="carousel__interface carousel__interface--right">></div>
		</div>
	`},h=(r=[],a=5)=>{const c=document.getElementById("carousel-element"),i=document.getElementById("carousel-interface-left"),e=document.getElementById("carousel-interface-right"),t=document.getElementsByClassName("carousel__progress-item");let s=parseInt(c.dataset.selected);i.addEventListener("click",o=>n("left")),e.addEventListener("click",o=>n("right"));for(let o of t)o.addEventListener("click",l=>{p(parseInt(l.target.dataset.progressId))});const n=(o,l=!1)=>{switch(o){case"left":s--;break;case"right":s++;break}s<0&&(s+=r.length),s>r.length-1&&(s-=r.length),l!==!0&&clearInterval(f),u()},p=(o,l=!1)=>{s=o,l!==!0&&clearInterval(f),u()},u=()=>{for(let o of t)o.setAttribute("data-active","false");t[s].setAttribute("data-active","true"),c.setAttribute("data-selected",s),c.style.setProperty("--selected-index",s)},f=setInterval(function(){n("right",!0)},a*1e3)},_="/horse-staple/assets/a1-DaVhUbe8.png",b="/horse-staple/assets/a4-BQ5hTrwd.png",y="/horse-staple/assets/b3-CCjlabu3.png",I="/horse-staple/assets/c2-DN8SOjIX.png",x="/horse-staple/assets/c3-D7Swr4tO.png",E="/horse-staple/assets/c4--kI11lEN.png",$="/horse-staple/assets/d3-DRPR0U07.png",L="/horse-staple/assets/e1-NbB_IToq.png",N="/horse-staple/assets/e3-CVQ2VYCR.png",P="/horse-staple/assets/f1-PszBT-H2.png",C="PM1000 is a progress management tool for Paper Mario: The Thousand Year Door. Keep track of multiple resources found in game to efficiently complete your collection of star pieces, shine sprites, badges, recipes and tattle logs!",g=[_,b,y,I,x,E,$,L,N,P];document.querySelector("#app").innerHTML=`
	<div class="section-container">
		<div class="card-inset">		
			${d("About")}
			${m(C)}
			${d("Screen shots")}
			${v(g)}
			${d("Downloads")}
			<div class="text-muted">
				Created by Venomousquid (2024)
			</div>
		</div>
	</div>
`;h(g);
