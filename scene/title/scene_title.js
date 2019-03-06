class SceneTitle extends XiaScene {
    constructor(game) {
        super(game)
        var label = XiaLabel.new(this.game, 'hello')
        this.addElement(label)

        var w = XiaAnimation.new(this.game)
        w.x = 100
        w.y = 200
        this.w = w
        this.addElement(w)
        this.setupInputs(w)
    }

    setupInputs(w) {
        this.game.registerAction('a', function(keyStatus) {
            w.move(-10, keyStatus)
        })
        this.game.registerAction('d', function(keyStatus) {
            w.move(10, keyStatus)
            // log('keyStatus', keyStatus)
        })
    }
}
