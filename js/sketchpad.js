var sideLength = 12; //setting 12 as the default value for the grid size
var colourLetters = ['a','b','c','d','e','f'];
var isRandomColour = false;

var calculateBoxeSize = function(sideLength){
    return Math.floor(900/sideLength);
}

var calculateTotalBoxes = function(sideLength){
    return Math.floor(sideLength * sideLength);
}

var changeGridSize = function(){
    sideLength = parseInt(prompt('Enter how many boxes you want per side (keep it less than 70)'),'0');
    if(sideLength > 70){
        sideLength = 70;
    }
    $setupGrid(sideLength);
}

var clearGrid = function(){
    $setupGrid(sideLength);
}

var getRandomInt = function(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

var randomColour = function(){
    var colour = '#';
    var value = '';
    var randInt = 0;
    for(var i=0;i<6;i++){
        randInt = getRandomInt(1,16);
        if(randInt > 9){
            value = colourLetters[randInt - 10];
        }else{
            value = randInt;
        }
        colour += value;
    }
    return colour;
}

var randomize = function(){
    if(isRandomColour === false){
        isRandomColour = true;
    }else{
        isRandomColour = false;
    }
}

var $setupGrid = function(sideLength){
    $('.sketchbox').remove(); //clear the grid if there is one already
    $sketcharea = $('#sketcharea');
    for(var i = 0; i < calculateTotalBoxes(sideLength); i++){
        $sketcharea.append("<div class='sketchbox'></div>");
    }
    
    $('.sketchbox').width(calculateBoxeSize(sideLength) - 2 + 'px'); //subtract 2 to allow for the 1px margin on each side
    $('.sketchbox').height(calculateBoxeSize(sideLength) - 2 + 'px');
    
    $('.sketchbox').mouseenter(function(){
        if(isRandomColour === false){
            $(this).css('background-color','green');
        }else{
            $(this).css('background-color',randomColour());
        }
    });
}

$(document).ready(function(){
    $setupGrid(sideLength);
});