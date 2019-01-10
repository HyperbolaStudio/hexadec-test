class HxTest extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"});
        let para=document.createElement("p");
        para.textContent="Hello World!";
        shadow.appendChild(para);
    }
    connectedCallback(){
        alert("test");
    }
}
customElements.define("hx-test",HxTest);