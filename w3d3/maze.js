'use strict';
$(function(){
    $("#start").mouseover(start);
    $("h2").text("Click the \"S\" to begin.");
    
});

function start(){
    $(".boundary").each(function(index, e){
        e = $(e);
        e.removeClass("youlose");
    });
    set();
    $("h2").text("Go ahead towards \"E\".");
    $("#maze").mouseover(trace);
    $("#end").mouseover(end);
}

function set(){
    $(".boundary").mouseover(getLost);
}

function reset(){
    $("#end").off("mouseover");
    $("#maze").off("mouseover");
    $("#maze").off("mouseleave");
    $(".boundary").off("mouseover");
}

function trace(){
    $("#maze").mouseleave(getLost);
}

function end(){
    $("h2").text("you win ):");
    reset();
}

function getLost(){
    $("#end").off("mouseover");
    $("h2").text("Sorry you lose :(. Click the \"S\" to try again.");
    $(".boundary").each(function(index, e){
        e = $(e);
        e.addClass("youlose");
    });
}

