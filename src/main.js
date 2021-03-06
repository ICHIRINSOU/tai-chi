let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* ä½ å¥½ðï¼ææ¯é¿æ
* åæ¥å°è¯çåä¸ä¸ä¼å¨çå¤ªæå¾â¯ï¸
* åæä¸ªdiv */
#div1{
    border: 1px solid blue;
    width: 200px;
    height: 200px;
}
/* ç¶åå°å®æåâ­ï¸ */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* å¤ªæè®²ç©¶é´é³è°åï¼ä¸é»ä¸ç½ */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* ç¹ç¼é´é³é±¼ç¼ */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* å¨èµ·æ¥å§ï¼å¤ªæå¾â¯ï¸ï¼ */
@keyframes tai-chi {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
}
#div1 {
    animation: tai-chi 10s linear 1s infinite normal;
}
`;

let flag = 0;
let str = ``;

let step = () => {
    setTimeout(() =>{
        if (string[flag] === "\n"){
            str += "<br>";
        }else if (string[flag] === " "){
            str += "&nbsp;";
        }else {
            str += string[flag];
        }
        html.innerHTML = str;
        style.innerHTML = string.substring(0,flag);
        html.scrollTo(0,996996);
        window.scrollTo(0,996996);
        if(flag < string.length - 1){
            flag += 1;
            step();
        }
    },50);
};

step();