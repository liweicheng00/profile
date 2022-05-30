import p5Types from "p5";


class GradientCursor {
    p: p5Types
    gradient: any
    width: number
    height: number
    cursorWidth: number
    cursorHeight: number
    x: number
    y: number
    color1: string
    color2: string

    constructor(p: p5Types, width: number, height: number) {
        this.p = p
        this.width = width
        this.height = height
        this.cursorWidth = 60
        this.cursorHeight = 60
        this.x = 0
        this.y = 0
        this.color1 = '#E7B884C4'
        this.color2 = '#89796D45'
        this.p.angleMode(this.p.RADIANS)
    }

    update(x?: number, y?: number) {
        this.p.fill(this.color1)

        this.x = x ? x : this.x
        this.y = y ? y : this.y
        this.p.translate(this.x, this.y);
        this.p.rotate(this.y / 200)
        this.p.rotate(this.x / 200)
        this.p.rect(-30, -30, this.cursorWidth, this.cursorHeight, 3, 3, 3, 3);
    }
}

export default GradientCursor
