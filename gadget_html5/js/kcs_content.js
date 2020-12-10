// コンテンツを開く
function kcsContent_OpenContent(contentId, url, width, height)
{
    // 現在開いているコンテンツと同じボタンが押された場合
    if(contentId == contentInfo.id)
    {
        // 現在開いているコンテンツを閉じる。
        contentInfo.id = "";
        document.getElementById("contentsWrap").innerHTML = "";

        // ガジェットの高さを調整する。
        gadgets.window.adjustHeight(ConstGadgetInfo.height);
    }
    else
    {
        // 指定されたコンテンツを開く。
        contentInfo.id = contentId;
        document.getElementById("contentsWrap").innerHTML = 
            "<iframe id=\"mainframe\" name=\"mainframe\" src=\""+ url +
            "\" width=\"" + width + "\" height=\"" + height + "\"" +
            " allowtransparency=\"true\" frameborder=\"0\"></iframe>";

        // ガジェットの高さを調整する。
        gadgets.window.adjustHeight(ConstGadgetInfo.height + height);
    }
}
