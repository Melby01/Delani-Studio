$(document).ready(function () {
    $("#one").click(function () {
      $(".design").toggle();
    });
  
    $("#two").click(function () {
      $(".dev").toggle();
    });
    $("#three").click(function () {
      $(".pro").toggle();
    });
  });

  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#four").show();
  
    })
    .mouseout(function(){
      $("#four").hide();
    })
    
    $("#work3").mouseover(function(){
      $("#security").show();
  
    })
    .mouseout(function(){
      $("#security").hide();
    })
    
    $("#work2").mouseover(function(){
      $("#empower").show();
  
    })
    .mouseout(function(){
      $("#empower").hide();
    })
  
  
    
    $("#work1").mouseover(function(){
      $("#carrey").show();
  
    })
    .mouseout(function(){
      $("#carrey").hide();
    })
  
    $("#work5").mouseover(function(){
      $("#website").show();
  
    })
    .mouseout(function(){
      $("#website").hide();
    })
  
  
    $("#work6").mouseover(function(){
      $("#calculator").show();
  
    })
    .mouseout(function(){
      $("#calculator").hide();
    })
  
  
    $("#work7").mouseover(function(){
      $("#bun").show();
  
    })
    .mouseout(function(){
      $("#bun").hide();
    })
  
  
    $("#work8").mouseover(function(){
      $("#rest").show();
  
    })
    .mouseout(function(){
      $("#rest").hide();
    })
  });

   //Overlay images

   $('.container3').hover(function () {
    $('#four', this).slideToggle('slow');
}, function () {
    $('#four', this).slideToggle('slow');
});