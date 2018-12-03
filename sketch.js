let sketch1, sketch2, sketch3;

sketch1 = function( p ) { // p could be any variable name
  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    if(p.allowDraw == true){
      p.background(0);
      p.fill(255, 0, 0);
      p.rectMode(p.CENTER);
      p.rect(p.random(p.width), p.random(p.height),50,50);
    }
  };

};
let mySketch1 = new p5(sketch1, 'canvas1');



sketch2 = function( p ) { // p could be any variable name
  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    if(p.allowDraw == true){
    p.background(0);
    p.fill(0, 255, 0);
    p.ellipse(p.random(p.width), p.random(p.height),50,50);
    }
  };

};
let mySketch2 = new p5(sketch2, 'canvas2');


sketch3 = function( p ) { // p could be any variable name
  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    if(p.allowDraw == true){
    p.background(0);
    p.stroke(0, 0, 255);
    p.strokeWeight(2);
    p.line(p.random(p.width), p.random(p.height),50,50);
    }
  };

};
let mySketch3 = new p5(sketch3, 'canvas3');


$(window).on('scroll', function() {
  let y_scroll_pos = $(window).scrollTop();
  let canvas1_location = $("#section1").position().top ;
  let canvas2_location = $("#section2").position().top  ;
  let canvas3_location = $("#section3").position().top - 200 ;


  if(y_scroll_pos > canvas1_location) {
    mySketch1.allowDraw = true;
  }
  if(y_scroll_pos > canvas2_location) {
    mySketch2.allowDraw = true;
  }
  if(y_scroll_pos > canvas3_location) {
    mySketch3.allowDraw = true;
  }


});