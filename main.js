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

    var classSurbrillant = ["il", "est"]; 

    //hours = 22; pour tester 
    //minutes = 47; 

    hours = (minutes > 34) ? hours + 1 : hours ; 
    hours = (hours == 24) ? 0 : hours ; 


    // heures 

    if (hours == 0) {
        classSurbrillant.push("minuit"); 
    }
    else if (hours == 12) {
        classSurbrillant.push("midi"); 
    }
    else {
        hours = (hours < 12) ? hours : hours - 12; 
        classSurbrillant.push("h_" + hours); 
    }

    if ( hours == 1) 
        classSurbrillant.push("heure"); 
    else if ( hours != 0 && hours != 12 ) 
        classSurbrillant.push("heures"); 
    


        // linutes 

    if (minutes> 34)
        classSurbrillant.push("moins"); 


    switch (true) {

        case ((minutes>=5 && minutes<10) || (minutes >=55)): classSurbrillant.push("m_5");
            break;

        case ((minutes>=10 && minutes<15) || (minutes >=50 && minutes<59)): classSurbrillant.push("m_10");
            break;
        
        case (minutes>=15 && minutes<20) : classSurbrillant.push("quart", "et");
            break;
        
        case (minutes>=45 && minutes<50) : classSurbrillant.push("quart", "le");
            break;

        case ((minutes>=20 && minutes<25) || (minutes>=40 && minutes <45)) : classSurbrillant.push("vingt");
            break;
        
        case ((minutes>=25 && minutes<30) || (minutes>=35 && minutes <40)) : classSurbrillant.push("vingt","m_5");
            break;
        case ( minutes >= 30 && minutes < 35) : classSurbrillant.push("et", "demi"); 
    }
 








    for (var i = 0; i < classSurbrillant.length ; i++) {

        $("." + classSurbrillant[i]).addClass("surbrillant"); 
    }
    
    

}