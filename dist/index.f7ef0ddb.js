let html=document.querySelector("#html"),style=document.querySelector("#style"),string="/* 你好👋，我是阿易\n* 前来小试牛刀一下会动的太极图☯️\n* 先搓个div */\n#div1{\n    border: 1px solid blue;\n    width: 200px;\n    height: 200px;\n}\n/* 然后将它搓圆⭕️ */\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* 太极讲究阴阳调和，一黑一白 */\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 点缀阴阳鱼眼 */\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n/* 动起来吧，太极图☯️！ */\n@keyframes tai-chi {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n}\n#div1 {\n    animation: tai-chi 10s linear 1s infinite normal;\n}\n",flag=0,str="",step=()=>{setTimeout((()=>{"\n"===string[flag]?str+="<br>":" "===string[flag]?str+="&nbsp;":str+=string[flag],html.innerHTML=str,style.innerHTML=string.substring(0,flag),html.scrollTo(0,996996),window.scrollTo(0,996996),flag<string.length-1&&(flag+=1,step())}),50)};step();
//# sourceMappingURL=index.f7ef0ddb.js.map