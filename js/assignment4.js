function MenuChoice(){
    if (document.getElementById("menu").value == "Show Area 1") {
        document.getElementById("sec1").style.visibility = "visible";
        document.getElementById("sec2").style.visibility = "hidden";
    }
   else if (document.getElementById("menu").value =="Show Area 2"){
    document.getElementById("sec2").style.visibility = "visible";
    document.getElementById("sec1").style.visibility = "hidden";
   }
   else{
    document.getElementById("sec1").style.visibility = "hidden";
    document.getElementById("sec2").style.visibility = "hidden";
   }
}