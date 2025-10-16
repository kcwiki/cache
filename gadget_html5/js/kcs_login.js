function kcsLogin_StartLogin()
{
    kcsRenderScreen(ConstServerInfo.Gadget + "html/maintenance.html");
    return;
}

function kcsRenderScreen(url)
{
    document.getElementById("flashWrap").style.height = "720px";
    gadgets.window.adjustHeight(ConstGadgetInfo.height);
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
    document.getElementById("sectionWrap").style.display = "block";
}
