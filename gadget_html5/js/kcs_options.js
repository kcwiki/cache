// 設定情報を cookie に保存する
function kcsOptions_Save(options)
{
    var sKey    = "kcs_options";
    var sValue  = options;
    var vEnd    = 2592000;
    var sPath   = "/";
    var sDomain = "dmm.com";
    var bSecure = false;
    docCookies.setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure);
}
// 設定情報を cookie から取得する
function kcsOptions_Load()
{
    var options = "";
    var sKey    = "kcs_options";
    if (docCookies.hasItem(sKey)) {
        options = docCookies.getItem(sKey);
    }
    return options;
}
