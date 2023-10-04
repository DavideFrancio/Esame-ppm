
function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffle() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }

    for (var row = 4; row <= 6; row++) { //For each row of the 3x3 grid
        for (var column = 4; column <= 6; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 4); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 4); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }
}

function shuffle2() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 4; row <= 6; row++) { //For each row of the 3x3 grid
        for (var column = 4; column <= 6; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 4); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 4); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile9") {
        //Checking if white tile on the right
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}

function clickTile2(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile18") {
        //Checking if white tile on the right
        if (column < 6) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile18") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 4) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile18") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 4) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile18") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 6) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile18") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}

function images() {
    i1 = random_image(null);
    i2 = random_image(i1);
    var style = document.createElement('style');
    style.innerHTML = ".tile1, .tile2, .tile3, .tile4, .tile5, .tile6, .tile7, .tile8 { background-image: url(image/" + i1 + ".png);} .tile10, .tile11, .tile12, .tile13, .tile14, .tile15, .tile16, .tile17 { background-image: url(image/" + i2 +".png);} ";
    document.head.appendChild(style);

}

function random_image(n) {
    var image = Math.floor(Math.random() * 5 + 1);
    while (image == n) {
        image = Math.floor(Math.random() * 5 + 1);
    }
    return image;
}


function winner()