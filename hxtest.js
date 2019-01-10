class HxTest extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"});
        let para=document.createElement("p");
        let attrPara=document.createElement("p");
        attrPara.className="attr-para"
        para.textContent="Hello World!";
        shadow.appendChild(para);
        shadow.appendChild(attrPara);
        let testSlot=document.createElement("slot");
        testSlot.setAttribute("name","test");
        shadow.appendChild(testSlot);
    }
    connectedCallback(){
        console.log("hxtest connected");
        // attrPara.textContent=`Attr 'test' is ${this.getAttribute("test")}`;
    }
    static get observedAttributes() {
        return ['test'];
    }
    attributeChangedCallback(name, oldValue, newValue){
        console.log(`hxtest attr "${name}" has changed from "${oldValue}" to "${newValue}"`);
        const shadow=this.shadowRoot;
        const attrPara=shadow.querySelector(".attr-para");
        attrPara.textContent=`Attr 'test' is ${this.getAttribute("test")}`; 
    }
}
customElements.define("hx-test",HxTest);
// const Element=document.createElement("div");