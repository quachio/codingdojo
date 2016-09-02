var model = {
    world: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 2, 2, 2],
        [0, 0, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 2, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 2, 0, 0],
        [2, 2, 2, 0, 2, 2, 1, 2, 2, 0, 0, 2, 7, 7, 7, 2, 0, 0, 2, 2, 1, 2, 2, 0, 2, 2, 2],
        [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 2, 2, 2],
        [0, 0, 2, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 0, 0],
        [2, 2, 2, 0, 0, 0, 1, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2],
        [0, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 2, 1, 2, 1, 2, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0],
        [2, 1, 2, 2, 2, 2, 1, 2, 0, 0, 2, 2, 1, 2, 1, 2, 2, 0, 0, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],

    updateMove: function(direction) {
        // console.log("updateMove");

        console.log(direction.value, "x:", direction.x, "y:", direction.y, this.pacman.x, this.pacman.x);




        // model.pacman.rotation = direction.rotation;

        // Update previous move
        this.move.prev.x = this.pacman.x;
        this.move.prev.y = this.pacman.y;
        // console.log(this.move.prev.x, this.move.prev.y);

        // Update next move
        this.move.next.x = model.pacman.x + direction.x;
        this.move.next.y = model.pacman.y + direction.y;


        if (model.world[model.move.next.x][model.move.next.y] === model.coin || model.world[model.move.next.x][model.move.next.y] === model.empty) {


            if(model.world[model.move.next.x][model.move.next.y] === model.coin) {
                count--;
                model.world[model.move.next.x][model.move.next.y] = 0;
            }

            // console.log('coin', 'pacman old location', model.pacman.x, model.pacman.y);
            $("ul#row" + model.move.prev.x + ">li#col" + model.move.prev.y).removeClass('pacman').addClass('empty').removeAttr('style');
            model.pacman.x += direction.x;
            model.pacman.y += direction.y;

            $("ul#row" + model.pacman.x + ">li#col" + model.pacman.y).removeClass('coin');
            $("ul#row" + model.pacman.x + ">li#col" + model.pacman.y).addClass('pacman').removeClass('empty').removeAttr('style');

            // console.log('coin old value: ', model.world[model.move.next.x][model.move.next.y]);
            model.world[model.move.next.x][model.move.next.y] = 0;

            // console.log('coin new value: ', model.world[model.move.next.x][model.move.next.y]);



        } else if (model.world[model.move.next.x][model.move.next.y] === model.brick) {
            // console.log('brick');

        } else if (model.world[model.move.next.x][model.move.next.y] === model.empty) {
            // console.log('empty');
        }

        $('.pacman').css('-ms-transform', 'rotate(' + model.pacman.rotation + 'deg)');
        $('.pacman').css('-webkit-transform', 'rotate(' + model.pacman.rotation + 'deg)');
        $('.pacman').css('transform', 'rotate(' + model.pacman.rotation + 'deg)');


    },
    brick: 2,
    coin: 1,
    empty: 0,

    pacman: {
        name: "pacman",
        x: 19,
        y: 13,
        last_x: 19,
        last_y: 13,
        rotation: 0,
        // left: {
        //     value: "left",
        //     x: 0,
        //     y: -1,
        //     rotation: 180,
        // },
        // right: {
        //     value: "right",
        //     x: 0,
        //     y: 1,
        //     rotation: 0,
        // },
        //
        // up: {
        //     value: "up",
        //     x: -1,
        //     y: 0,
        //     rotation: -90,
        // },
        //
        // down: {
        //     value: "down",
        //     x: 1,
        //     y: 0,
        //     rotation: 90,
        // },

        left: {
            value: "left",
            x: -1,
            y: 0,
            rotation: 180,
        },
        right: {
            value: "right",
            x: 1,
            y: 0,
            rotation: 0,
        },

        up: {
            value: "up",
            x: 0,
            y: 1,
            rotation: -90,
        },

        down: {
            value: "down",
            x: 0,
            y: -1,
            rotation: 90,
        },
        direction: {
            x: 1,
            y: 1,
        },
        move: {
            prev: {
                x: 0,
                y: 0,
            },
            next: {
                x: 0,
                y: 0,
            },
        },
        go: function(direction) {
            this.rotation = direction.rotation;

            // Save pac-man old location
            var oldPosition = {
                x: this.x,
                y: this.y,
            };

            // Update pacman

            var newPosition = {
                x: direction.x + this.x,
                y: direction.y + this.y,
                value:   model.world[direction.x + this.x][direction.y + this.y],
                isEmpty: model.world[direction.x + this.x][direction.y + this.y] === 0 ? true : false,
                isCoin:  model.world[direction.x + this.x][direction.y + this.y] === 1 ? true : false,
                isBrick: model.world[direction.x + this.x][direction.y + this.y] === 2 ? true : false,
            };

            console.log('pac man now face', this.rotation, oldPosition, newPosition);



            // console.log(newPosition.value);


            if(newPosition.isCoin) {
                console.log('pac man just ate a coin');
            } else if(newPosition.isBrick) {
                console.log('pac man just hit a brick');
            } else if(newPosition.isEmpty) {
                console.log('pac man move to empty position');
            }


            // console.log(oldPosition, newPosition);

        },
        moveleft: function() {
            // console.log('move left');
            this.rotation = this.left.rotation;
        },
        moveRight: function() {
            // console.log('move right');
            this.rotation = this.right.rotation;
        },
        moveUp: function() {
            // console.log('move up');
            this.rotation = this.up.rotation;
        },
        moveDown: function() {
            // console.log('move down');
            this.rotation = this.down.rotation;
        },
        update: function(newX, newY) {
            // console.log('update pacman position');



            // Save old position of pac man
            this.move.prev.x = this.move.x;
            this.move.prev.y = this.move.y;

            // Update pacman new position
            this.move.next.x = newX;
            this.move.next.y = newY;

        }
    },

    left: {
        value: "left",
        x: 0,
        y: -1,
        rotation: 180,
    },

    right: {
        value: "right",
        x: 0,
        y: 1,
        rotation: 0,
    },

    up: {
        value: "up",
        x: -1,
        y: 0,
        rotation: -90,
    },

    down: {
        value: "down",
        x: 1,
        y: 0,
        rotation: 90,
    },
    move: {
        prev: {
            x: 0,
            y: 0,
        },
        next: {
            x: 0,
            y: 0,
        },
    }
};


function printWorldMap() {
    for(var i = 0; i < model.world.length; i++) {
        console.log(model.world[i]);
    }
}


var count = 0;

function displayWorldMap(runpacman) {
    for (var i = 0; i < model.world.length; i++) {
        $('div.world').append('<ul id="row' + i + '"></ul>');
        for (var j = 0; j < model.world[i].length; j++) {
            if (model.world[i][j] === 2) {
                $('#row' + i).append('<li id="col' + j + '" class="brick"></li>');
            } else if (model.world[i][j] === 1) {
                $('#row' + i).append('<li id="col' + j + '" class="coin"></li>');
                count++;
            } else if (model.world[i][j] === 0) {
                $('#row' + i).append('<li id="col' + j + '" class="empty"></li>');
                // $("ul#row" + i + ">li#col" + j).removeClass('empty')

            } else if (model.world[i][j] === 4) {
                $('#row' + i).append('<li id="col' + j + '" class="pacman"></li>');
                model.world[i][j] = 0;
                // console.log(j, i);
                // model.pacman.x = j;
                // model.pacman.y = i;
                // console.log(model.pacman);
            } else if (model.world[i][j] === 3.1) {
                $('#row' + i).append('<li id="col' + j + '" class="topleft-corner-brick"></li>');

            } else if (model.world[i][j] === 5) {
                $('#row' + i).append('<li id="col' + j + '" class="vertical-bar-5"></li>');

            } else if (model.world[i][j] === 3.2) {
                $('#row' + i).append('<li id="col' + j + '" class="bottomleft-corner-brick"></li>');


            } else if (model.world[i][j] === 2.1) {
                $('#row' + i).append('<li id="col' + j + '" class="bottombar21"></li>');

            } else if (model.world[i][j] === 6.1) {
                $('#row' + i).append('<li id="col' + j + '" class="smalltopleft"></li>');

            } else if (model.world[i][j] === 6.2) {
                $('#row' + i).append('<li id="col' + j + '" class="smallbottomleft"></li>');

            } else if (model.world[i][j] === 6.3) {
                $('#row' + i).append('<li id="col' + j + '" class="smalltopright"></li>');

            } else if (model.world[i][j] === 6.4) {
                $('#row' + i).append('<li id="col' + j + '" class="smallbottomright"></li>');

            } else if (model.world[i][j] === 6.5) {
                $('#row' + i).append('<li id="col' + j + '" class="smalltop"></li>');

            } else if (model.world[i][j] === 6.6) {
                $('#row' + i).append('<li id="col' + j + '" class="smallbottom"></li>');

            } else if (model.world[i][j] === 6.7) {
                $('#row' + i).append('<li id="col' + j + '" class="smallleft"></li>');

            } else if (model.world[i][j] === 6.8) {
                $('#row' + i).append('<li id="col' + j + '" class="smallright"></li>');
            } else if (model.world[i][j] === 3.4) {
                $('#row' + i).append('<li id="col' + j + '" class="bottomright-corner-brick"></li>');
            } else if (model.world[i][j] === 5.1) {
                $('#row' + i).append('<li id="col' + j + '" class="smallright"></li>');
            } else if (model.world[i][j] === 7) {
                $('#row' + i).append('<li id="col' + j + '" class="redGhost"></li>');
            } else if (model.world[i][j] === 8) {
                $('#row' + i).append('<li id="col' + j + '" class="pinkGhost"></li>');
            } else if (model.world[i][j] === 9) {
                $('#row' + i).append('<li id="col' + j + '" class="blueGhost"></li>');
            }
        }
    }
}



function myTimer() {
    var direction = Math.floor((Math.random() * 4) + 1);
    switch (direction) {
    case 1: // Key left.
        model.pacman.go(model.left);
        model.pacman.moveleft();
        model.updateMove(model.left);
        break;
    case 2: // Key up.
        model.pacman.go(model.up);
        model.pacman.moveUp();
        model.updateMove(model.up);
        break;
    case 3: // Key right.
        model.pacman.go(model.right);
        model.pacman.moveRight();
        model.updateMove(model.right);
        break;
    case 4: // Key down
        model.pacman.go(model.down);
        model.pacman.moveDown();
        model.updateMove(model.down);
        break;
    }
}

function pacMoveRight() {
    model.pacman.go(model.right);
    model.pacman.moveRight();
    model.updateMove(model.right);
}

function pacMoveLeft() {
    model.pacman.go(model.left);
    model.pacman.moveleft();
    model.updateMove(model.left);
}

function pacMoveDown() {
    model.pacman.go(model.down);
    model.pacman.moveDown();
    model.updateMove(model.down);
}

function pacMoveUp() {
    model.pacman.go(model.up);
    model.pacman.moveUp();
    model.updateMove(model.up);
}

$(document).ready(function() {
    console.log("jQuery working");
    displayWorldMap();

    $("button").click(function(){

        var myVar = setInterval(myTimer, 100);
    });

    // while(count !== 0) {
    //     var direction =  Math.floor((Math.random() * 4) + 1);
    //     switch (direction) {
    //         case 1: // Key left.
    //             model.pacman.go(model.left);
    //             model.pacman.moveleft();
    //             model.updateMove(model.left);
    //             break;
    //         case 2: // Key up.
    //             model.pacman.go(model.up);
    //             model.pacman.moveUp();
    //             model.updateMove(model.up);
    //             break;
    //         case 3: // Key right.
    //             model.pacman.go(model.right);
    //             model.pacman.moveRight();
    //             model.updateMove(model.right);
    //             break;
    //         case 4: // Key down
    //             model.pacman.go(model.down);
    //             model.pacman.moveDown();
    //             model.updateMove(model.down);
    //             break;
    //     }
    // }
    //
    //

    // for(var i = 0; i < 1000; i++) {
    //     var direction = Math.floor((Math.random() * 4) + 1);
    //     switch (direction) {
    //     case 1: // Key left.
    //         model.pacman.go(model.left);
    //         model.pacman.moveleft();
    //         model.updateMove(model.left);
    //         break;
    //     case 2: // Key up.
    //         model.pacman.go(model.up);
    //         model.pacman.moveUp();
    //         model.updateMove(model.up);
    //         break;
    //     case 3: // Key right.
    //         model.pacman.go(model.right);
    //         model.pacman.moveRight();
    //         model.updateMove(model.right);
    //         break;
    //     case 4: // Key down
    //         model.pacman.go(model.down);
    //         model.pacman.moveDown();
    //         model.updateMove(model.down);
    //         break;
    //     }
    // }


    $(this).keydown(function(event) {
        var key = event.which;
        // console.log(key);
        switch (key) {
            case 37: // Key left.
            var t = setInterval(pacMoveLeft, 70);

                // model.pacman.go(model.left);
                // model.pacman.moveleft();
                // model.updateMove(model.left);
                break;
            case 38: // Key up.
            t = setInterval(pacMoveUp, 70);

                // model.pacman.go(model.up);
                // model.pacman.moveUp();
                // model.updateMove(model.up);
                break;
            case 39: // Key right.
            t= setInterval(pacMoveRight, 70);
                // model.pacman.go(model.right);
                // model.pacman.moveRight();
                // model.updateMove(model.right);
                break;
            case 40: // Key down
            t = setInterval(pacMoveDown, 70);

                // model.pacman.go(model.down);
                // model.pacman.moveDown();
                // model.updateMove(model.down);
                break;
        }
    });
});
