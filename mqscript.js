window.onload = function(){
  document.getElementById("helpHim").style.display = "inline-block";
  document.getElementById("helpHim").addEventListener("click", function() {
    document.getElementById("introductionPage").style.display = "none";
    this.style.display = "none";
    document.getElementById("branchPage").style.display = "block";
  });
  document.getElementById("cutThem").addEventListener("click", function(){
    document.getElementById("branchPage").style.display = "none";
    document.getElementById("eyuPage").style.display = "block";
  });
  document.getElementById("useFire").addEventListener("click", function(){
    document.getElementById("eyuPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
  });
}

function achieveGo() {
  alert("真的要过去吗？米奇带了火柴哦！伏笔！")
}

function dontUseHands(){
  alert("无论如何都打不过吧...不如看看手头还有什么呢？")
}

function congratulation(){
  var q = prompt("大善人，米奇想知道你的名字是？");
  alert( q + "，米奇非常感谢你！送你一只手套，请收下~")
}
