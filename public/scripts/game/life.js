class Life {
    constructor(max, initial) {
        this.max = max;
        this.initial = initial;
        this.current = this.initial;

        this.width = 30;
        this.height = 30;
        this.startX = 16;
        this.startY = 16;
    }

    draw() {
        for (let i = 0; i < this.current; i++) {
            const margin = i * 24;
            const posX = (this.startX * (i+1)) + margin;
            image(heartImage, posX, 16, this.width, this.height);
        }
    }

    oneUp() {
        if (this.current < this.max) {
            this.current++;
        }
    }

    oneLost() {
        if (this.current > 0) {
            this.current--;
        }
    }

}