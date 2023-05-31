const CHARACTERS = 'helo'

export class Column {
    constructor(x, fontSize, canvasHeight, context) {
        this.x = x;
        this.y = 0;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.fontSize = fontSize;
    }

    drawSymbol() {
        if (this.y === 0 && Math.random() < 0.98) {
            return
        }

        const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
        const symbol = CHARACTERS[characterIndex];

        this.context.fillText(symbol, this.x, this.y);
        this.y += this.fontSize;


        if (this.y > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += this.fontSize;
        }

    }
}