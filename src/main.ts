var source = require("./fragment.html");
var div = document.createElement("DIV");
div.innerHTML = Handlebars.compile(source)({ name: "Handlebars and Webpack Getting Started" });
document.body.appendChild(div);