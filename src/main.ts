var source = require("./fragment.html");


export class HelloWorld {

    public init = () => {
        var div = document.createElement("DIV");
        div.innerHTML = Handlebars.compile(source)({ name: "Handlebars and Webpack Getting Started" });
        document.body.appendChild(div);

    }
}