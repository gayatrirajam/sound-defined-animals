var dog = 0;
var cat = 0;
var lion = 0;
function start(){
    navigator.mediaDevices.getUserMedia({ audio: true, video: false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CGHlrRIXs/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        R=Math.floor(Math.random()*255)+1;
        G=Math.floor(Math.random()*255)+1;
        B=Math.floor(Math.random()*255)+1;
        document.getElementById("currentanimal").innerHTML = "Detected voice is of = " + results[0].label;
        document.getElementById("noofanimals").innerHTML = "Dogs: " + dog + " Cat: " + cat + " Lion: " + lion;
        document.getElementById("noofanimals").style.color = "rgb(" + R + "," + G + "," + B + ")";
        document.getElementById("currentanimal").style.color = "rgb(" + R + "," + G + "," + B + ")";
        if(results[0].label == "Barking"){
            document.getElementById("animal_image").src="bark.gif";
            dog = dog+1;
        }
        else if(results[0].label == "Meowing"){
            document.getElementById("animal_image").src="cat_meow.gif";
            cat = cat+1;
        }
        else if(results[0].label == "Roaring"){
            document.getElementById("animal_image").src="lion-roar.gif";
            lion = lion+1;
        }
    }
}