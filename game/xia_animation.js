class XiaAnimation {
    constructor(game) {
        this.game = game
        this.frame = []
        for (let i = 1; i < 6; i++) {
            var name = `m${i}`
            var m = game.textureByName(name)
            this.frame.push(m)
        }
        this.frameIndex = 0
        this.frameCount = 5
        this.texture = this.frame[0]
    }
    static new(game) {
        return new this(game)
    }
    draw() {
        this.game.drawImg(this)
    }
    update() {
        // log('this.frameCount',this.frameCount)
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 5
            this.frameIndex = (this.frameIndex + 1) % this.frame.length
            this.texture = this.frame[this.frameIndex]
        }
    }
    move(s) {
        this.x += s
    }
}