import kofiBanner from '../img/kofi_button_blue.webp';

export const modal = () => `
	<div class="open-modal-button" data-open-modal>
		<img src="${kofiBanner}" alt="kofi-banner" width="100%" height="auto"/>
	</div>
	<dialog data-modal>
		<div class="close-modal-button" data-close-modal>X</div>
		<iframe id='kofiframe' src='https://ko-fi.com/venomousquid/?hidefeed=true&widget=true&embed=true&preview=true' style='border:none;width:100%;background:#f9f9f9;' height='650' title='venomousquid'></iframe>
	</dialog>
`;
