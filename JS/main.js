let oBtn1 = document.getElementById('repository');
let oBtn2 = document.getElementById('start');
let oBtn3 = document.getElementById('mode');
let oBtn4 = document.getElementById('lg');

window.online;
{
    oBtn1.onclick = repository;
    oBtn2.onclick = start;
    oBtn3.onclick = mode;
    oBtn4.onclick = change_language;

    function repository() {
        location.href = "https://github.com/SnowingCat/Practise";
    }


    function start() {

    }

    function mode() {
        alert("正在开发中...")
    }

    function change_language() {

    }
}
