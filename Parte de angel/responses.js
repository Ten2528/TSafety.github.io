function getBotResponse(input) {
    //Piedra papel o tijeras
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if(input == "scissors") {
        return "rock";
    }

    // Estas son las respuestas simples del bot 
    if (input.toLowerCase() == ("i want to know about digital security")) {
        return "Digital security is the protection of information and computer systems from malicious attacks. Malicious attacks can take many forms, such as data theft, malware and vandalism.";
    } else if (input.toLowerCase() == "how can i improve my digital security?") {
        return "One way is to Use strong passwords: Strong passwords should be long and complex, and should be changed frequently.";
    } else if(input.toLowerCase() == "hello") { 
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "pipipi") {
        return "why are you crying?";
    } else if (input == "I don't know"){
        return "go and drink some water";
    } else  if (input == "what is total safety?") {
        return "Total safety is a panama-based company founded in 2023 that seeks to stop digital insecurity and improve the digital environment for future generations.";
    } else if (input == "What is project safety?") {
        return "Project safety is a foundation safety department that seeks to raise awareness and improve the health of our planet and seas.";
    } else {
        return "Try asking something else!";
        return "if you have a question about total safety here I am!";
    }

}