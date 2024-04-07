var flag1 = true; //控制中英文转换的变量
const Mode_Default = 1, Mode_Special = 2, Mode_Countdown = 3; //游戏模式
const Theme_Default = 1, Theme_Winter = 2, Theme_Fruit = 3, Theme_Weather = 4; //游戏主题
var Game_Control = false;  //控制游戏是否开始的变量
var left = 37, right = 39, speed = 16;//左键，右键，加速键
var page = 1; //当前页面

function page_back()
{
    if (document.getElementById("introduction")) {
        introduction();
    }else if (document.getElementById("Mode")){
        mode();
    }else if (document.getElementById("setting")){
        setting();
    }//检测是哪个页面
    page -= 1;
}

function page_next()
{
    if (document.getElementById("introduction")) {
        introduction();
    }else if (document.getElementById("Mode")){
        mode();
    }else if (document.getElementById("setting")){
        setting();
    }//检测是哪个页面
    page += 1;
}

function repository() {
    window.open("https://github.com/SnowingCat/Catch-The-Fruit",'target');//跳转至个人仓库
}

function start() {
    var start_menu = document.getElementById("menu");
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var lg = document.getElementById("lg");   
    //获取需要隐藏的元素
    var pause = document.getElementById("pause");
    var score = document.getElementById("score") 
    //获取需要显示的元素
    start_menu.style.display = "none";
    title.style.display = "none";
    buttons.style.display = "none";
    lg.style.display = "none";
    //需要隐藏的元素
    pause.style.display = "block";
    score.style.display = "block";
    //需要显示的元素
    Game_Control = true;
    alert("游戏正在开发中...")
}

// function show() {
//     if (document.getElementById("introduction")){
//         var title = document.getElementById("title");
//         var buttons = document.getElementById("buttons");
//         var h1 = document.getElementById("introduction");
//         var back = document.getElementById("btn_back");
//         var page_back = document.getElementById("page_back");
//         var page_next = document.getElementById("page_next");
//         title.style.display = "none";
//         buttons.style.display = "none";
//         //需要隐藏的元素
//         h1.style.display = "block";
//         back.style.display = "block";
//     }else if (document.getElementById("mode")){
//         var title = document.getElementById("title");
//         var buttons = document.getElementById("buttons");
//         var h1 = document.getElementById("mode");
//         var back = document.getElementById("btn_back");
//         title.style.display = "none";
//         buttons.style.display = "none";
//         //需要隐藏的元素
//         h1.style.display = "block";
//         back.style.display = "block";
//     }else if (document.getElementById("setting")){
//         var title = document.getElementById("title");
//         var buttons = document.getElementById("buttons");
//         var h1 = document.getElementById("setting");
//         var back = document.getElementById("btn_back");
//         title.style.display = "none";
//         buttons.style.display = "none";
//         //需要隐藏的元素
//         h1.style.display = "block";
//         back.style.display = "block";
//     }//将其他按钮显示的方法搬了过来
// }

function mode() {
    alert("正在开发中...")
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var h1 = document.getElementById("mode");
    var back = document.getElementById("btn_back");
    title.style.display = "none";
    buttons.style.display = "none";
    //需要隐藏的元素
    h1.style.display = "block";
    back.style.display = "block";
}

function introduction() {
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var h1 = document.getElementById("introduction");
    var back = document.getElementById("btn_back");
    var page_back = document.getElementById("page_back");
    var page_next = document.getElementById("page_next");
    title.style.display = "none";
    buttons.style.display = "none";
    //需要隐藏的元素
    h1.style.display = "block";
    back.style.display = "block";
    //需要显示的元素
    switch (page){
        case 1:
            page_back.style.display = "none";
            page_next.style.display = "block";
            document.getElementById("in_page1").style.display = "block";
            document.getElementById("in_page2").style.display = "none";
            break;
        case 2:
            page_back.style.display = "block";
            document.getElementById("in_page1").style.display = "none";
            document.getElementById("in_page2").style.display = "block";
            document.getElementById("in_page3").style.display = "none";
            break;
        case 3:
            document.getElementById("in_page2").style.display = "none";
            document.getElementById("in_page3").style.display = "block";
            document.getElementById("in_page4").style.display = "none";
            break;
        case 4:
            page_next.style.display = "block";
            document.getElementById("in_page3").style.display = "none";
            document.getElementById("in_page4").style.display = "block";
            document.getElementById("in_page5").style.display = "none";
            break;
        case 5:
            page_back.style.display = "block";
            page_next.style.display = "none";
            document.getElementById("in_page4").style.display = "none";
            document.getElementById("in_page5").style.display = "block";
            break;
        default:
            alert("error");
    }
<<<<<<< HEAD
}

function setting() {
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var h1 = document.getElementById("setting");
    var back = document.getElementById("btn_back");
    title.style.display = "none";
    buttons.style.display = "none";
    //需要隐藏的元素
    h1.style.display = "block";
    back.style.display = "block";
    //需要显示的元素
    alert("还在开发中...")
=======
>>>>>>> f9e7cbca863b55bac62d956e40d51324dd2d7bbb
}

function change_language() {//中英文转换
    var img = document.getElementById("lg");
    var start = document.getElementById("btn_start");
    var btn_mode = document.getElementById("btn_mode");
    var repository = document.getElementById("btn_repository");
    var introduction = document.getElementById("btn_introduction");
    var setting = document.getElementById("btn_setting"); 
    var h1_1 = document.getElementById("introduction")
    var h1_2 = document.getElementById("setting")
    var back = document.getElementById("btn_back")
    var mode = document.getElementById("mode")//获取所有的元素
    if(flag1){//切换中文
        img.src = "../img/language/Chinese.png";
        start.innerText = "开始游戏";
        btn_mode.innerText = "模式选择";
        repository.innerText = "项目地址";
        introduction.innerText = "游戏介绍";
        setting.innerText = "游戏设置";
        h1_1.innerText = "游戏介绍";
        h1_2.innerText = "游戏设置";
        back.innerText = "返回";
        mode.innerText = "模式选择";
        flag1 = false;
    }else{//切换英文
        img.src = "../img/language/English.png";
        start.innerText = "start";
        btn_mode.innerText = "mode";
        repository.innerText = "repository";
        introduction.innerText = "introduction";
        setting.innerText = "setting";
        h1_1.innerText = "Introduction";
        h1_2.innerText = "Setting";
        back.innerText = "back";
        mode.innerText = "mode";
        flag1 = true;
    }
}

function btn_back() {
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    //获取需要显示的元素
    var h1_1 = document.getElementById("introduction");
    var h1_2 = document.getElementById("setting");
    var h1_3 = document.getElementById("mode");
    var back = document.getElementById("btn_back");
    //获取需要隐藏的元素
    title.style.display = "block";
    buttons.style.display = "block";
    //需要显示的元素
    h1_1.style.display = "none";
    h1_2.style.display = "none";
    h1_3.style.display = "none";
    back.style.display = "none";
    document.getElementById("in_page1").style.display = "none";
    document.getElementById("in_page2").style.display = "none";
    document.getElementById("in_page3").style.display = "none";
    document.getElementById("in_page4").style.display = "none";
    document.getElementById("in_page5").style.display = "none";
    document.getElementById("page_back").style.display = "none";
    document.getElementById("page_next").style.display = "none";
    //需要隐藏的元素
<<<<<<< HEAD
    return page = 1;
=======
    page = 1;
>>>>>>> f9e7cbca863b55bac62d956e40d51324dd2d7bbb
}

function pause()
{
    var pause_menu = document.getElementById("menu");
    var title = document.getElementById("pause_title");
    var back = document.getElementById("back");
    var go_on = document.getElementById("come_on");
    var restart = document.getElementById("restart");
    var score = document.getElementById("score");
    //获取需要显示的元素
    var pause = document.getElementById("pause");
    pause.style.display = "none";
    score.style.display = "none";
    //隐藏
    pause_menu.style.display = "block";
    title.style.display = "block";
    back.style.display = "block";
    go_on.style.display = "block";
    restart.style.display = "block";
    //暂停时显示所需元素
}

function back(){
    var pause_title = document.getElementById("pause_title");
    var back = document.getElementById("back");
    var go_on = document.getElementById("come_on");
    var restart = document.getElementById("restart");
    // var basket = document.getElementById("basket");
    var title = document.getElementById("title");
    var buttons = document.getElementById("buttons");
    var lg = document.getElementById("lg");
    pause_title.style.display = "none";
    back.style.display = "none";
    go_on.style.display = "none";
    restart.style.display = "none";
    // basket.style.display = "none";
    lg.style.display = "block";
    title.style.display = "block";
    buttons.style.display = "block";
}

function restart(){
    var pause_title = document.getElementById("pause_title");
    var back = document.getElementById("back");
    var go_on = document.getElementById("come_on");
    var restart = document.getElementById("restart");
    var pause_menu = document.getElementById("menu");
    var pause = document.getElementById("pause")
    var score = document.getElementById("score");
    pause_menu.style.display = "none";
    pause_title.style.display = "none";
    back.style.display = "none";
    go_on.style.display = "none";
    restart.style.display = "none";
    //需要隐藏的元素
    pause.style.display = "block";
    score.style.display = "block";
    //需要显示的元素
}

function come_on() {
    var pause_title = document.getElementById("pause_title");
    var back = document.getElementById("back");
    var go_on = document.getElementById("come_on");
    var restart = document.getElementById("restart");
    var pause_menu = document.getElementById("menu");
    var pause = document.getElementById("pause");
    var score = document.getElementById("score");
    pause_menu.style.display = "none";
    pause_title.style.display = "none";
    back.style.display = "none";
    go_on.style.display = "none";
    restart.style.display = "none";
    //需要隐藏的元素
    pause.style.display = "block";
    score.style.display = "block";
    //需要显示的元素
}

// function press_key(event)//输入键
// {
//     var x = event.which || event.keyCode;
//
// }
// function change_key(key, event)//改变键位
// {
//     var x = event.which || event.keyCode;
//     key = x;
// }