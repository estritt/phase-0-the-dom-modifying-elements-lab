const main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Me is the champion"
document.body.append(newHeader);
