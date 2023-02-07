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

const btn1 = document.getElementById("btn1");
const omikujiText = omikujiText;
btn1.addEventListener("click",
    function(){
        /*let n = Math.floor(Math.random() *3);
        switch (n) {
            case 0:
                btn1.textContent = "Very Happy!!";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "40px";
                break;
            case 1:
                btn1.textContent = "Happy!!";
                btn1.style.color = "#FFF001";
                btn1.style.fontSize = "30px";
                break;
            case 2:
                btn1.textContent = "UnHappy!!";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "20px";
                    break;
        }*/
        let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["90px","80px","70px","60px","50px","40px"];
        let resultsMaxSpeed = [10,10,8,5,5,5];
        let resultsMaxSize = [30,30,20,15,20,20];
        let resultImage = ["img/snowflakes.png","img/star.png","img/star.png","img/star.png","img/star.png","img/star.png"];
        
        let n = Math.floor(Math.random()*resultText.length);
        omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];
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
