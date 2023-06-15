class scene0 extends AdventureScene {
    constructor() {
        super("s0", "Front Door");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('front', 'front.png');
    }

    onEnter() {
        this.showMessage("You find yourself trapped inside someone's house.");
        this.add.image(400, 300, 'front');
        let handle = this.add.text(120, 320, "🟡")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You have the key!");
                } else {
                    this.showMessage("It's locked from the outside.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*click*");
                    this.gotoScene('good');
                }
            })
        let peep = this.add.text(75, 200, "⚫")
            .setFontSize(this.s * .5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Looks like there isnt anyone to open the door for me from the outside…");
            })

        let hallwayDoor = this.add.text(660, 200, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('s1');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads to the hallway...");
            })
    }
}

class scene1 extends AdventureScene {
    constructor() {
        super("s1", "Hallway");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('hall', 'hall.png');
    }

    onEnter() {
        this.add.image(400, 300, 'hall');
        let frontDoor = this.add.text(25, 400, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('s0');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads back to the front...");
            })

        let kitchenDoor = this.add.text(725, 400, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('s2');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads to the kitchen...");
            })
    }
    
}
class scene2 extends AdventureScene {
    constructor() {
        super("s2", "Kitchen");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('kitchen', 'kitchen.png');
    }
    onEnter() {
        this.add.image(400, 300, 'kitchen');

        let knife = this.add.text(500, 220, "🔪")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("That seems like it should be put away…");
            })
            .on('pointerdown', () => {
                this.showMessage("I shouldnt walk around in someones house with a knife…");
            })

        let apple = this.add.text(450, 225, "🍎")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An apple a day keeps the doctor away!");
            })
            .on('pointerdown', () => {
                this.showMessage("I shouldn’t be touching their food!");
            })

        let basementDoor = this.add.text(320, 100, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('bad');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads to the basement...");
            })
        
            let hallwayDoor = this.add.text(20, 150, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('s1');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads to the hallway...");
            })

            let livingRoomDoor = this.add.text(725, 550, "⚫")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene('s3');
            })
            .on('pointerover', () => {
                this.showMessage("Looks like this leads to the living room...");
            })
    }
}
class scene3 extends AdventureScene {
    constructor() {
        super("s3", "Living Room");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('living', 'living room.png');
    }
    onEnter() {
        this.add.image(400, 300, 'living');

        let kitchenDoor = this.add.text(25, 275, "⚫")
        .setFontSize(this.s * 5)
        .setInteractive()
        .on('pointerdown', () => {
            this.gotoScene('s2');
        })
        .on('pointerover', () => {
            this.showMessage("Looks like this leads to the kitchen...");
        })

        let doorKey = this.add.text(600, 345, "🔑")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerdown', () => {
            this.gainItem('key');
            this.showMessage("You picked up the key!");
            doorKey.destroy();
        })
        .on('pointerover', () => {
            this.showMessage("Looks like this might open the front door!");
        })
    }
}
class goodEnding extends AdventureScene {
    constructor() {
        super("good");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('outside', 'outside.png');
    }
    onEnter() {
        this.add.image(400, 300, 'outside');
        this.showMessage("You win! Click any button to restart!");
        this.input.on('pointerdown', () => this.scene.start('intro'));

    }
}
class badEnding extends AdventureScene {
    constructor() {
        super("bad");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('basement', 'basement.png');
    }
    onEnter() {
        this.add.image(400, 300, 'basement');
        this.showMessage("You lost! Click any button to restart!");
        this.input.on('pointerdown', () => this.scene.start('intro'));

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(250,300, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            //this.cameras.main.fade(1000, 0,0,0);
            // this.time.delayedCall(1000, () => 
            this.scene.start('s0');
            this.loseItem('key');
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 700
    },
    scene: [Intro, scene0, scene1, scene2, scene3, goodEnding, badEnding, Outro],
    title: "Adventure Game",
});

