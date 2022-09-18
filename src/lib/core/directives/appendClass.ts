

export function appendClass(node: any, className: string) {
    if (node) {
        let styleClass: string[] = node.getAttribute('class').split(' ')
        styleClass.push(className)
        node.setAttribute('class', styleClass.join(' ').toString())
    }
}