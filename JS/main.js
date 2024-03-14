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
    alert("转换语言在开发中...");
    var img = document.getElementById("lg");
    if(flag){
        img.src = "../img/language/Chinese.png";
        flag = false;
    }else{
        img.src = "../img/language/English.png";
        flag = true;
    }
}