export default function createElementFromHtml(innerHtml: string): HTMLElement {
    var div: HTMLElement = document.createElement("DIV");
    div.innerHTML = innerHtml;
    return div.firstChild as HTMLElement;
}