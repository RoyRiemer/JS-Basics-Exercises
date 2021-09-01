function guessCity(capital, coastal, famous, ancient) {
    // your code goes here
    switch(guessCity){
        case(false,true,true,false):
        console.log("Tel Aviv")
        break;
        case(true, false, true, true):
        console.log("Jerusalem")
        break;
        case(false, true, false, true):
        console.log("Acre")
        break;
        case(false, false,false, true):
        console.log("Katzrin")
        break;
        case(false, true,false, false):
        console.log("Zikim")
        break;
        default:console.log("Musmus")
    }
}