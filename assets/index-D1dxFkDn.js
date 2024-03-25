(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=l(s);fetch(s.href,a)}})();const d=(e="text",t="")=>`
	<${t?"a":"div"} class="text-label" id="${t}" ${t?`href="#${t}"`:""}>${e}</${t?"a":"div"}>
`,m=(e="text")=>`
	<div class="text-field">
		<div class="text-field__text">${e}</div>
		<div class="text-field__border-thick"></div>
		<div class="text-field__border-thin"></div>
	</div>
`,p=(e=[])=>{let t="",l="";return e.forEach(c=>t+=`<img src="${c}" class="carousel__image" width="auto" height="100%"/>`),e.forEach((c,s)=>l+=`<div class="carousel__progress-item" data-progress-id="${s}" data-active="${s===0?"true":"false"}"></div>`),`
		<div id="carousel-element" class="carousel" data-selected="0" style="--selected-index: 0;">
			<div class="carousel__image-container">
				${t}
			</div>
			<div class="carousel__progress-container">
				${l}
			</div>
			<div id="carousel-interface-left" class="carousel__interface carousel__interface--left">
				<div class="carousel__interface-button"><-</div>
			</div>
			<div id="carousel-interface-right" class="carousel__interface carousel__interface--right">
				<div class="carousel__interface-button">-></div>
			</div>
		</div>
	`},b="data:image/webp;base64,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",A=(e,t="_self",l="S",c)=>`
	<a class="save-block" href="${e}" target="${t}">
		<img class="save-block__star" src="${b}" alt="save-star"/>
		<div class="save-block__gradient"></div>
		<div class="save-block__border"></div>
		<div class="save-block__character">${l.charAt(0).toUpperCase()}</div>
		${c?`<div class="save-block__label" data-text="${c}">${c}</div>`:""}
	</a>
`,P="/horse-staple/assets/logo-DHaRrd57.webp",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='186.8'%20height='177.9'%20xml:space='preserve'%3e%3cpath%20fill='%23B6202C'%20d='M0%20170.2s94%2017.5%20186.8%200L183.4%200H5.5L0%20170.2z'/%3e%3cpath%20fill='%23F8B62E'%20d='M1.6%20121.4%200%20170.2s94%2017.5%20186.8%200l-1-49c-82%2011.9-164.5%202.7-184.2.2z'/%3e%3cpath%20fill='%23B6752B'%20d='m186.8%20170.2-1-49-.6.2v7.5l-5.6.5V122l-3.1.4v7.1l-6.7.6v-6.9l-3%20.4v6.7l-6%20.4v-6.5l-3%20.3v6.4l-6.3.3v-6.2l-3%20.2v6.2c-2.1%200-4.2.2-6.2.3v-6l-3.1.1v6l-6.1.2v-5.8l-3.1.1v5.8l-6.2.2v-5.7l-3.1.1v5.7l-6.5.1V127H111v5.6l-6%20.1v-5.6H102v5.6h-7v-5.5h-3.2v5.5h-6V127h-3.1v5.5h-6.9v-5.7l-3-.1v5.7l-6.8-.2v-5.7l-3-.2v5.8c-2.2%200-4.2%200-6.2-.2v-5.9l-3.1-.1v6l-7-.3v-6.1l-3.1-.2v6.1l-6-.3V125l-3.1-.3v6.4l-6-.3v-6.6l-3-.2v6.6l-6.2-.4v-6.8l-3-.3v6.9l-6.5-.5v-7.1l-3-.4v7.3l-5.3-.4v-6.4L0%20170.2l1.5.2V133l5.3.4v38l3%20.4v-38.2l6.5.5v38.6l3%20.4v-38.8l6.2.4v39.2l3%20.3v-39.3l6%20.3v39.7l3%20.3v-39.9l6%20.3v40.1l3.2.3v-40.2l7%20.2v40.5l3%20.2V136l6.2.2V177l3.1.1v-40.8l6.8.2v41h3v-41l6.9.1v41.2h3v-41.1h6.1V178H95v-41.2a796.4%20796.4%200%200%200%207.1%200V178h3v-41.2h6v41h3.2v-41.1l6.5-.1v41l3-.2v-40.9l6.3-.2V177l3-.2V136l6.2-.2v40.5l3-.3v-40.3l6.2-.3v40l3.1-.3v-39.9l6.3-.3v39.6l3-.4v-39.4l6-.4v39l3-.4v-38.8l6.7-.6V172l3-.6v-38l5.7-.5v37.5l1.6-.2z'/%3e%3c/svg%3e",i="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='195.6'%20height='220'%20xml:space='preserve'%3e%3cpath%20fill='%23B6202C'%20d='M187.3%200H8.8L.6%20209C49.3%20221%2098%20220.3%2098%20220.3s48.7.6%2097.5-11.3L187.3%200z'/%3e%3cpath%20fill='%2385191B'%20d='M37.7%200H8.8L.6%20209c12.6%203.1%2025.3%205.3%2037%207V0z'/%3e%3cpath%20fill='%23F8B62E'%20d='M.6%20209C49.3%20221%2098%20220.3%2098%20220.3s48.7.6%2097.5-11.3l-2-51.7c-95.5%2019.9-191%200-191%200L.6%20209z'/%3e%3cpath%20fill='%239F742B'%20d='M37.7%20162.5c-21.7-2.4-35-5.2-35-5.2L.5%20209c12.6%203.1%2025.3%205.3%2037%207v-53.5z'/%3e%3cpath%20fill='%23764E1F'%20d='m35%20170.4-6-.7v-8.2l-3-.4v8.3l-6.3-.8v-8.4l-3.1-.4v8.4l-6.2-.8v-8.6a295%20295%200%200%201-3-.6v8.7l-5.1-.8L.6%20209l1.5.4v-38.2l5.2.8v38.6l3.1.6v-38.8l6.2.9v39.2l3%20.6v-39.5l6.4.8v39.8l3%20.5v-40l6%20.7v40.2l2.7.4v-53.5c-1%200-1.8-.2-2.6-.3v8.2z'/%3e%3cpath%20fill='%23B6752B'%20d='M193.9%20165.6c-2.5.5-5%201-7.5%201.3v-8.2l-3.1.6v8.1l-6.4%201v-8l-3.1.5v8l-7.6.9V162l-3%20.4v7.8l-7.2.7v-7.7l-3%20.4v7.6l-6.6.6v-7.6l-3.1.3v7.5l-7.3.5V165l-3%20.2v7.5l-7.6.4v-7.5l-3%20.1v7.5l-6.5.2V166h-3v7.5h-6.7v-7.4H103v7.5h-6.5v-7.5h-3.1v7.5l-7.5-.1v-7.6h-3v7.5l-6.6-.2v-7.6l-3-.2v7.7l-6-.3V165l-3-.2v7.7l-6.6-.4v-7.8l-3-.2v7.8l-5.8-.4v-7.9l-3-.3v8l-7.8-.7v-8.1h-.5V216h.5v-40.3l7.8.7V217l3%20.4v-40.8l5.7.4v41l3%20.3v-41l6.6.3V219l3.1.2v-41.3l6%20.3v41.4l3%20.2v-41.5l6.6.2V220h3v-41.5h7.5v41.7h3v-41.6h6.6v41.6h3v-41.6l6.7-.1V220l3.1-.2v-41.4l6.4-.2v41.3l3.1-.2v-41.2l7.5-.4v41l3.1-.2v-41l7.3-.5v40.8l3-.3v-40.7l6.6-.6v40.5l3.1-.4V176l7.2-.7v40.1l3-.5v-40l7.6-1v39.8l3-.6v-39.6l6.5-1v39.4l3-.7V172l7.7-1.3v38.7l1.6-.4-1.7-43.4z'/%3e%3c/svg%3e",L="PM1000",D="Thousand-Year Door Progress Manager",N=e=>{e=e.substring(0,10);let t="";for(let l=0;l<e.length;l++)t+=`<div data-text="${e.charAt(l)}">${e.charAt(l)}</div>`;return t},w=e=>{e=e.substring(0,39);let t="";for(let l=0;l<e.length;l++)t+=`<div>${e.charAt(l)}</div>`;return t},H=()=>`
	<div class="hero">
		<div class="hero__curtain-container">
			<img src="${i}" class="hero__curtain-left hero__curtain-left--3rd"/>
			<img src="${i}" class="hero__curtain-left hero__curtain-left--2nd"/>
			<img src="${i}" class="hero__curtain-left hero__curtain-left--1st"/>
			<img src="${y}" class="hero__curtain-middle"/>
			<img src="${i}" class="hero__curtain-right hero__curtain-right--1st"/>
			<img src="${i}" class="hero__curtain-right hero__curtain-right--2nd"/>
			<img src="${i}" class="hero__curtain-right hero__curtain-right--3rd"/>
		</div>
		<div class="hero__title">
			${N(L)}
		</div>
		<div class="hero__spinner">
			<div class="hero__subtitle">
				${w(D)}
			</div>
			<img src="${P}" class="hero__coin"/>
		</div>
	</div>
`,V="/horse-staple/assets/kofi_button_blue-EWgNlHtr.webp",_=()=>`
	<div class="open-modal-button" data-open-modal>
		<img src="${V}" alt="kofi-banner" width="100%" height="auto"/>
	</div>
	<dialog data-modal>
		<div class="close-modal-button" data-close-modal>X</div>
		<iframe id='kofiframe' src='https://ko-fi.com/venomousquid/?hidefeed=true&widget=true&embed=true&preview=true' style='border:none;width:100%;background:#f9f9f9;' height='650' title='venomousquid'></iframe>
	</dialog>
`,k=(e=[],t=5)=>{const l=document.getElementById("carousel-element"),c=document.getElementById("carousel-interface-left"),s=document.getElementById("carousel-interface-right"),a=document.getElementsByClassName("carousel__progress-item");let r=parseInt(l.dataset.selected);c.addEventListener("click",o=>n("left")),s.addEventListener("click",o=>n("right"));for(let o of a)o.addEventListener("click",v=>{g(parseInt(v.target.dataset.progressId))});const n=(o,v=!1)=>{switch(o){case"left":r--;break;case"right":r++;break}r<0&&(r+=e.length),r>e.length-1&&(r-=e.length),v!==!0&&clearInterval(h),u()},g=(o,v=!1)=>{r=o,v!==!0&&clearInterval(h),u()},u=()=>{for(let o of a)o.setAttribute("data-active","false");a[r].setAttribute("data-active","true"),l.setAttribute("data-selected",r),l.style.setProperty("--selected-index",r)},h=setInterval(function(){n("right",!0)},t*1e3)},S=()=>{const e=document.querySelector("[data-open-modal]"),t=document.querySelector("[data-close-modal]"),l=document.querySelector("[data-modal]");e.addEventListener("click",()=>{l.showModal()}),t.addEventListener("click",()=>{l.close()})},z="/horse-staple/assets/a3-Cujp4sY9.webp",x="/horse-staple/assets/a4-DXvBsnzM.webp",B="/horse-staple/assets/b3-DQMiMc56.webp",W="/horse-staple/assets/c2-D7-WHc_v.webp",E="/horse-staple/assets/c3-BJazPEVg.webp",C="/horse-staple/assets/c4-DaQZ7szw.webp",M="/horse-staple/assets/d3-C16_8kbo.webp",U="/horse-staple/assets/e1-Bw6DOwaL.webp",K="/horse-staple/assets/e3-JsWtibTC.webp",T="/horse-staple/assets/f1-CRyZyF1r.webp",Q="PM1000 is a progress management tool for Paper Mario: The Thousand-Year Door. Keep track of multiple resources found in game to efficiently complete your collection of star pieces, shine sprites, badges, recipes and tattle logs!",f=[z,x,B,W,E,C,M,U,K,T];document.querySelector("#app").innerHTML=`
	${H()}
	<div class="section-container">
		<div class="card-inset">		
			${d("About","about")}
			${m(Q)}
			${d("Screenshots","screenshots")}
			${p(f)}
			${d("Download","download")}
			<div class="save-block-container">
				${A("https://2ly.link/1xEj1","_blank","D","Windows 10/11")}
			</div>
			${_()}
			<div class="text-muted">Created by Venomousquid (2024)</div>
		</div>
	</div>
`;k(f);S();
