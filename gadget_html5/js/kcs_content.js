function kcsContent_OpenContent(contentId, url, width, height) {
    if(contentId == contentInfo.id) {
        contentInfo.id = "";
        document.getElementById("contentsWrap").innerHTML = "";

        gadgets.window.adjustHeight(ConstGadgetInfo.height);
    } else {
        contentInfo.id = contentId;
        document.getElementById("contentsWrap").innerHTML = 
            "<iframe id=\"mainframe\" name=\"mainframe\" src=\""+ url +
            "\" width=\"" + width + "\" height=\"" + height + "\"" +
            " allowtransparency=\"true\" frameborder=\"0\"></iframe>";

        gadgets.window.adjustHeight(ConstGadgetInfo.height + height);
    }
}
