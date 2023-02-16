export function appendClass(node: any, className: string) {
	if (node) {
		const styleClass: string[] = node.getAttribute('class').split(' ');
		styleClass.push(className);
		node.setAttribute('class', styleClass.join(' ').toString());
	}
}
