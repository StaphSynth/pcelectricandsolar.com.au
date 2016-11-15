//show/hide the main menu when nav icon clicked
$("#navIcon").click(function(event){
  //toggle the menu
  $("#mainMenu ul").slideToggle("fast","swing");
  //flip the caret
  $("#navIcon .fa-caret-down").toggleClass("fa-flip-vertical");
});

/*Remove inline style from #mainMenu ul if window width > 550px on window resize event.
Prevents inline style from over-riding CSS style rules in @media query*/
$(window).resize(function() {
  if($(window).width() >= 550) {
    $("#mainMenu ul").removeAttr("style");
  }
});//end window resize event
