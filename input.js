class Opt {
    constructor(height = '1000px', width = '1000px', bg = 'green', fontSize = 'large', TextAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.TextAlign = TextAlign;
    }
    addNew() {
        let div = document.createElement('div');
        div.innerHTML = 'Hello';
        div.style.cssText = `background-color: ${this.bg}; \
                            width: ${this.width}; \
                            height: ${this.height}; \
                            fontSize:${this.fontSize}; \
                            text-align: ${this.TextAlign}; `;
        document.body.appendChild(div);
    }
}

const vuvod = new Opt();
vuvod.addNew();