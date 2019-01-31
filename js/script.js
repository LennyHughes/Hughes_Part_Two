

var eventType = prompt ("What type of event? Casual, Semi-Formal, or Formal ?");
var tempFahr = prompt ("What's the forecasted temparture?");
var result;


if (tempFahr < 54){
    if (eventType === "Casual"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear something comfy and a coat.";
    }

    else if (eventType === "Semi-Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear a polo and a coat.";
    }

    else if (eventType === "Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType +
                 " event, you should wear a suit and a coat.";
    }
    else result = "non valid data entered.";
}

else if (tempFahr >= 54 && tempFahr <=70){
    if (eventType === "Casual"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear something comfy and a jacket.";
    }

    else if (eventType === "Semi-Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear a polo and a jacket.";
    }

    else if (eventType === "Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear a suit and a jacket.";
    }
    else result = "non valid data entered.";
}

else if (tempFahr > 70){
    if (eventType === "Casual"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear something comfy and no jacket.";
    }

    else if (eventType === "Semi-Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear a polo and no jacket.";
    }

    else if (eventType === "Formal"){
        result = "Since its "+ tempFahr +" degrees and you are going to a "+ eventType 
                  +" event, you should wear a suit and no jacket.";
    }
    else result = "non valid data entered.";
}

console.log(result);