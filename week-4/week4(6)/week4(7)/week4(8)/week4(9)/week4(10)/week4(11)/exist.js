let originalElement = document.getElementById("myElement");
let clonedElement = originalElement.cloneNode(true); // Clone with children
document.body.appendChild(clonedElement);