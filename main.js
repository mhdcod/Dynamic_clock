$(document).ready(function(){

    UpdateClock(); 

    window.setInterval(function(){

        UpdateClock(); 
    },  60000); 

});

function UpdateClock() {

    $(".world").removeClass("surbrillant"); 

    var hours   = new Date().getHours(); 
    var minutes = new Date().getMinutes(); 

    console.log(hours, minutes); 
    
    

}