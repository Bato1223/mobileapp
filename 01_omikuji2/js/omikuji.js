"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
    $("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
        effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
        delayScale: 1.5, // 遅延時間の指数
        delay: 50, // 文字ごとの遅延時間
        sync: false, // trueはアニメーションをすべての文字に同時に適用
        shuffle: true // trueは文字を順番にではなく、ランダムに
        }
        });
    $(function(){    
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    setTimeout(
        function () {
        let popMessage = "いらっしゃい！おみくじ引いてって！";
        window.alert(popMessage);
        },
        "5000"
    );
    }, false

);
let soundEndflag = "0";
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click",
    function(){
        if(soundEndflag === "1") {
            soundControl("end","");
        }
        let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3", "sound/omikuji_sound4.mp3", "sound/omikuji_sound5.mp3",]
        let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
        let resultsMaxSpeed = [10,10,8,5,5,5];
        let resultsMaxSize = [30,30,20,15,20,20];
        let resultImage = ["img/snowflakes.png","img/star.png","img/sakura_hanabira.png","img/leaf.png","img/face.png","img/jake.png"];
        
        let n = Math.floor(Math.random()*resultText.length);
        omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];
        // sound control
        w_sound = resultSound[n];
        soundControl("start", w_sound);
        soundEndflag = "1";
        // snowfall stop
        $(document).snowfall("clear");
        // jQueryのsnowfall
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : resultsMaxSpeed[n],
                maxSize : resultsMaxSize[n],
                image : resultImage[n],
                minSpeed : 1, // 最小速度
                minSize : 1, // 最小サイズ
                image : resultImage[n]
              
            });
        });
        /*$(document).ready(function(){
            $(document).snowfall({
                maxSpeed : 10, // 最大速度
                minSpeed : 1, // 最小速度
                maxSize : 30, // 最大サイズ
                minSize : 3, // 最小サイズ
                image : 'img/star.png'
              
            });
        });*/

    }, false

);

let w_sound
let music
function soundControl(status, w_sound){
    if(status === "start"){
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if(status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}
