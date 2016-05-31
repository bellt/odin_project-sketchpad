var sideLength = 20; //setting 20 as the default value for the grid size
var colourLetters = ['a','b','c','d','e','f'];
var isRandomColour = false;
var darken = false;
var opacities = ['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','0.99'];

var calculateBoxeSize = function(sideLength){
    return Math.floor(800/sideLength);
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
    darken = false;
    clearGrid();
    isRandomColour = true;
}

var darkenize = function(){
    isRandomColour = false;
    clearGrid();
    darken = true;
}

var reset = function(){
    isRandomColour = false;
    darken = false;
    clearGrid();
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
        if(isRandomColour === true){
            $(this).css('background-color',randomColour());
        }else if(darken === true){
            for(var i=0; i<opacities.length;i++){
                if($(this).css('opacity') === '1'){
                        $(this).css('opacity',opacities[0]);
                        $(this).css('background-color','green');
                        break;
                }
                if($(this).css('opacity') === opacities[i]){
                    $(this).css('opacity',opacities[i+1]);
                    break;
                }
            }
        }else{
            $(this).css('background-color','green');
        }
    });
}

$(document).ready(function(){
    $setupGrid(sideLength);
});