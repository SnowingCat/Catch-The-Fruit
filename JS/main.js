var flag1 = true; //控制中英文转换的变量

function repository() {
    window.open("https://github.com/SnowingCat/Catch-The-Fruit",'target');//跳转至个人仓库
}

function start() {
    var start_menu = document.getElementById("start_menu");
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var lg = document.getElementById("lg");//获取开始界面元素
    start_menu.style.display = "none";
    title.style.display = "none";
    buttons.style.display = "none";
    lg.style.display = "none";//隐藏开始界面元素
    alert("游戏正在开发中...")
}

function mode() {
    alert("正在开发中...")
}

function introduction() {
    var start_menu = document.getElementById("start_menu");
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var lg = document.getElementById("lg");
    var h1 = document.getElementById("introduction");
    start_menu.style.display = "none";
    title.style.display = "none";
    buttons.style.display = "none";
    lg.style.display = "none";//隐藏开始界面元素
    h1.style.display = "block";
}

function change_language() {//中英文转换
    var img = document.getElementById("lg");
    var start = document.getElementById("btn_start");
    var mode = document.getElementById("btn_mode");
    var repository = document.getElementById("btn_repository");
    var introduction = document.getElementById("btn_introduction");
    var setting = document.getElementById("btn_setting"); 
    var h1 = document.getElementById("introduction")
    var back = document.getElementById("btn-back")//获取所有的元素
    if(flag1){//切换中文
        img.src = "../img/language/Chinese.png";
        start.innerText = "开始游戏";
        mode.innerText = "模式选择";
        repository.innerText = "项目地址";
        introduction.innerText = "游戏介绍";
        setting.innerText = "游戏设置";
        h1.innerText = "游戏介绍";
        back.innerText = "返回";
        flag1 = false;
    }else{//切换英文
        img.src = "../img/language/English.png";
        start.innerText = "start";
        mode.innerText = "mode";
        repository.innerText = "repository";
        introduction.innerText = "introduction";
        setting.innerText = "setting";
        h1.innerText = "Introduction";
        back.innerText = "back";
        flag1 = true;
    }
}

function setting() {
    alert("还在开发中...")
}