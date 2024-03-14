var flag = true;


function repository() {
    window.open("https://github.com/SnowingCat/Catch-The-Fruit",'target');
}

function start() {

}

function mode() {
    alert("正在开发中...")
}

function introduction() {
    alert("主界面都还没开发完呢")
}

function change_language() {
    var img = document.getElementById("lg");
    var start = document.getElementById("btn_start");
    var mode = document.getElementById("btn_mode");
    var repository = document.getElementById("btn_repository");
    var introduction = document.getElementById("btn_introduction");
    if(flag){
        img.src = "../img/language/Chinese.png";
        start.innerText = "开始游戏";
        mode.innerText = "模式选择";
        repository.innerText = "项目地址";
        introduction.innerText = "游戏介绍";
        flag = false;
    }else{
        img.src = "../img/language/English.png";
        start.innerText = "start";
        mode.innerText = "mode";
        repository.innerText = "repository";
        introduction.innerText = "introduction";
        flag = true;
    }
}