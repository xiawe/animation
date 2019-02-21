class SceneTitle extends XiaScene {
    constructor(game) {
        super(game)
        var label = XiaLabel.new(this.game, 'hello')
        this.addElement(label)

        var w = XiaAnimation.new(this.game)
        w.x = 100
        w.y = 200
        this.addElement(w)

        game.registerAction('a', function() {
            w.move(-3)
        })
        game.registerAction('d', function() {
            w.move(3)
        })
    }
}
