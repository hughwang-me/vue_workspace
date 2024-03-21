class Canvas {
    constructor(id , parent , width , height) {
        this.id = id;
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.ctx = null;
    }
     create() {
        if(this.ctx !== null){
            console.log('Canvas 已经创建过！')
            return;
        }else {
            let div = document.createElement("div");
            let canvas = document.createElement("canvas");
            this.parent.appendChild(div);
            div.appendChild(canvas);

            canvas.id = this.id;
            canvas.width = this.width;
            canvas.height = this.height;

            // this.ctx = canvas.getContext('2d');
        }
    }
}



export {Canvas}
