import createElementFromHtml from "./createElementFromHtml";

export class CardComponent {
    constructor(private element: HTMLElement, private headline:string) {
        element.appendChild(createElementFromHtml(Handlebars.compile(this.template)({ headline: this.headline })));        
    }

    public template: string = require("./card.component.html");
    public css: string = require("./card.component.scss");
}

