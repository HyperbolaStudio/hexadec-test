class HxIA extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"});
        let container=document.createElement("div");
        container.className="container";
        let mask=document.createElement("div");
        mask.className="mask";
        container.appendChild(mask);
        let areaSlot=document.createElement("slot");
        areaSlot.setAttribute("name","area");
        container.appendChild(areaSlot);
        shadow.appendChild(container);
    }
}
customElements.define("hx-ia",HxIA);