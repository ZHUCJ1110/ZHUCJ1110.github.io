window.onload = function(){
document.getElementById("helpHim").style.display = "inline-block";
 document.getElementById("helpHim").addEventListener("click", function() {
        document.getElementById("introductionPage").style.display = "none";
        this.style.display = "none";
        document.getElementById("branchPage").style.display = "block";
    });
}

function cutBranches() {
  alert("你失败了！")
}

function achieveGo() {
  alert("你成功帮助米奇走掉~")
}
