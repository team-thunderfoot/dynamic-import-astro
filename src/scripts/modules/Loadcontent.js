class LoadContent{
    constructor(){
        this.DOM = {
            element:document.getElementById('loadContent')
        }
        this.init()
    }
    init(){
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Hello world';
        this.DOM.element.appendChild(newParagraph);
    }

}
export default LoadContent;