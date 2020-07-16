var subtoggle="<p class='subtoggle'><span></span><span></span></p>";
$('.has-children').append(subtoggle);
                     
$( ".toggle" ).click(function() {
  $( ".bar" ).toggleClass( "active" ); 
  $( ".toggle" ).toggleClass( "on" );  
  $( "nav" ).toggleClass( "mm" );
});

$( ".subtoggle" ).click(function() {
  $('.sub-nav').toggleClass('expand');
  $('.subtoggle').toggleClass('on');
});