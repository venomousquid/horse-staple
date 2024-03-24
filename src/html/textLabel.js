export const textLabel = (text = 'text', id = '') => `
	<${id ? 'a' : 'div'} class="text-label" id="${id}" ${ id ? `href="#${id}"` : '' }>${text}</${id ? 'a' : 'div'}>
`;
