
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
        updateMove: function(direction, rotation) {
            console.log("updateMove");

            model.pacman.rotation = direction.rotation;


            // Update previous move
            this.move.prev.x = this.pacman.x;
            this.move.prev.y = this.pacman.y;
            // console.log(this.move.prev.x, this.move.prev.y);

            // Update previous move
            this.move.next.x = model.pacman.x + direction.x;
            this.move.next.y = model.pacman.y + direction.y;


            if (model.world[model.move.next.x][model.move.next.y] === model.coin || model.world[model.move.next.x][model.move.next.y] === model.empty) {
                console.log('coin', 'pacman old location', model.pacman.x, model.pacman.y);
                $("ul#row" + model.move.prev.x + ">li#col" + model.move.prev.y).removeClass('pacman').addClass('empty').removeAttr('style');
                model.pacman.x += direction.x;
                model.pacman.y += direction.y;

                $("ul#row" + model.pacman.x + ">li#col" + model.pacman.y).removeClass('coin');
                $("ul#row" + model.pacman.x + ">li#col" + model.pacman.y).addClass('pacman').removeClass('empty').removeAttr('style');

                console.log('coin old value: ', model.world[model.move.next.x][model.move.next.y]);
                model.world[model.move.next.x][model.move.next.y] = 0;

                console.log('coin new value: ', model.world[model.move.next.x][model.move.next.y]);



            } else if (model.world[model.move.next.x][model.move.next.y] === model.brick) {
                console.log('brick');

            } else if (model.world[model.move.next.x][model.move.next.y] === model.empty) {
                console.log('empty');
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
            right: 0,
            left: 180,
            down: 90,
            up: 360,
            direction: {
                x: 1,
                y: 1,
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
    }






    function displayWorldMap() {
        for (var i = 0; i < model.world.length; i++) {
            $('div.world').append('<ul id="row' + i + '"></ul>');
            for (var j = 0; j < model.world[i].length; j++) {
                if (model.world[i][j] === 2) {
                    $('#row' + i).append('<li id="col' + j + '" class="brick"></li>');
                } else if (model.world[i][j] === 1) {
                    $('#row' + i).append('<li id="col' + j + '" class="coin"></li>');

                } else if (model.world[i][j] === 0) {
                    $('#row' + i).append('<li id="col' + j + '" class="empty"></li>');
                    // $("ul#row" + i + ">li#col" + j).removeClass('empty')

                } else if (model.world[i][j] === 4) {
                    $('#row' + i).append('<li id="col' + j + '" class="pacman"></li>');
                    model.world[i][j] = 0;
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

    $(document).ready(function() {
        console.log("jQuery working");
        displayWorldMap();

        $(this).keydown(function(event) {
            var key = event.which;
            console.log(key);
            switch (key) {
                case 37: // Key left.
                    model.updateMove(model.left);
                    break;
                case 38: // Key up.
                    model.updateMove(model.up);
                    break;
                case 39: // Key right.
                    model.updateMove(model.right);
                    break;
                case 40: // Key down
                    model.updateMove(model.down);
                    break;
            }
        });
    });
