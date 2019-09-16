export default $ = ((el, props) => {

	const element = document.querySelector(el);
	
	if (element) {
		
		const propsKeys = props.keys();
		props.keys.forEach((key, i) => {
			element.setAttribute(`${key}`, `${props[key]}`);
		});

	}

	if (el && !props) return element;

})();

export const ButtonMessage = {
	
	id: 'btn-message',
	name: 'button-message',
	value: 'Send Message',

	onClick() {
		$('.input-title').remove();
	}

};

export const ButtonDelete = {
	type: 'button',
	value: 'Delete all'
}
