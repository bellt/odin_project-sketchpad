var sideLength = 12;

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

var $setupGrid = function(sideLength){
    $('.sketchbox').remove(); //clear the grid if there is one already
    $sketcharea = $('#sketcharea');
    for(var i = 0; i < calculateTotalBoxes(sideLength); i++){
        $sketcharea.append("<div class='sketchbox'></div>");
    }
    
    $('.sketchbox').width(calculateBoxeSize(sideLength) - 2 + 'px'); //subtract 2 to allow for the 1px margin on each side
    $('.sketchbox').height(calculateBoxeSize(sideLength) - 2 + 'px');
    
    $('.sketchbox').mouseenter(function(){
        $(this).css('background-color','green');
    });
}

$(document).ready(function(){
    $setupGrid(sideLength); //using 8 as the default sideLength on page load
});