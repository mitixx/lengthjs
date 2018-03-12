/*bookmarklet
  ruler.js*/

javascript:(function(){
var ScrSize = "横幅" + window.parent.screen.width + "高さ" + window.parent.screen.height
,WinSize = "横幅" + window.innerWidth + "高さ" + window.innerHeight
,PageHeight = document.documentElement.scrollHeight || document.body.scrollHeight

alert("画面サイズ：" + ScrSize,"ウィンドウサイズ：" + WinSize,
"ページの長さ" + PageHeight);
});