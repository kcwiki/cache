// check user agent
var $browser = (function (ua) {
    var res = function (type) {
        var flg = {
            ie: false,
            mb: false
        };

        switch (type) {
            case 'mb':
                flg.mb = true;
                return flg;
            case 'ie':
                flg.ie = true;
                return flg;
            default:
                return flg;
        }
    }

    // mobile
    if (/ip(hone|ad|od)/.test(ua) || /android/.test(ua)) return res('mb');

    // 〜IE 11
    if (/msie/.test(ua) || /trident\/7/.test(ua)) return res('ie');

    return res(null);
})(window.navigator.userAgent.toLowerCase());
// ログイン
function kcsLogin_StartLogin()
{
    // HTML5 非対応ブラウザへの対応
    // モバイルの場合
    // if ($browser.mb)
    // {
    // }
    // "Internet Explorer 11 以前" の場合
    // if ($browser.ie)
    // {
    //     alert("IE11以前のブラウザです。");
    //     kcsStartMaintenanceHTML();
    //     return;
    // }

    // DMM サーバが過負荷な状況にある場合、
    // さらなる負荷をかけないよう、ここで STOP する。
    if (MaintenanceInfo.IsDoing == 1 && MaintenanceInfo.IsEmergency == 1)
    {
        // 画面下部の情報セクションを表示する。
        document.getElementById("sectionWrap").style.display = "block";

        // メンテナンス画面を表示する。
        kcsStartMaintenanceHTML();
        return;
    }

    // 
    // ユーザ情報取得リクエストを送信する。
    // 

    // 取得データパラメータを定義する。
    var params = {};

    // （DMM固有）取得データパラメータに userType を設定する。
    if (ConstSNSInfo.id == "DMM")
    {
        params[opensocial.DataRequest.PeopleRequestFields.PROFILE_DETAILS] = [
            "userType"
        ];
    }

    // データリクエストを作成する。
    var req = opensocial.newDataRequest();

    // プロフィール読み取りリクエストを作成し、
    // データリクエストに格納する。
    // 読み取る対象はアプリを参照しているユーザー（VIEWER）
    req.add(
        req.newFetchPersonRequest(
            opensocial.IdSpec.PersonId.VIEWER, params), "viewer");

    // データリクエストを送信する。
    // （データレスポンス用のコールバック関数を設定）
    req.send(function(response)
    {
        // エラーが発生した場合
        if (response.hadError())
        {
            // エラー処理へ遷移する。
            return;
        }
        else
        {
            // データレスポンスから item を取得する。
            var item = response.get("viewer");
            // item からデータを取得する。
            var viewer = item.getData();

            // ユーザーID
            viewerInfo.id = viewer.getId();
            // ユーザー名
            viewerInfo.displayName = viewer.getDisplayName();
            // （DMM固有）ユーザータイプ
            if (ConstSNSInfo.id == "DMM")
            {
                viewerInfo.userType = viewer.getField("userType");
            }

            // 2013/05/09 通常メンテナンス対応
            // ※ 一般ユーザーはログインできない。
            if (MaintenanceInfo.IsDoing == 1 && MaintenanceInfo.IsEmergency == 0)
            {
                if(viewerInfo.userType == "developer" || viewerInfo.userType == "staff")
                {
                    // developer, staff の場合、
                    // ログイン処理を続行する。
                }
                else
                {
                    // 一般ユーザーの場合、

                    // 画面下部の情報セクションを表示する。
                    document.getElementById("sectionWrap").style.display = "block";

                    // メンテナンス画面を表示する。
                    kcsStartMaintenanceHTML();
                    return;
                }
            }

            // トークン情報を取得する。
            kcsGetLoginToken();
        }
    });
}

// トークン情報取得
function kcsGetLoginToken()
{
    // 過剰リロード検知時
    //if(document.cookie.indexOf("kcsReloadDetected=") >= 0)
    //{
    //    return;
    //}

    // 2013/07/04 サーバー振り分け対応
    var worldParams = {};
    worldParams[gadgets.io.RequestParameters.METHOD]         = gadgets.io.MethodType.GET;
    worldParams[gadgets.io.RequestParameters.CONTENT_TYPE]   = gadgets.io.ContentType.JSON;

    // リクエストの URL に現在時刻（ミリ秒）を追加する。
    // （ガジェットのキャッシュを読み込んでしまわないように）
    var date = new Date();

    // ユーザー所属ワールド取得
    gadgets.io.makeRequest(
        ConstURLInfo.GetUserWorldURL + viewerInfo.id + "/1/" + date.getTime(), function(worldResponse)
    {
        // レスポンスデータを JSON デコードする。
        var json = eval(worldResponse.text);

        // 取得成功した場合
        if(json.api_result == ConstParameterInfo.APIResult_OK)
        {
            // ワールド ID を取得する。
            var userWorldId = json.api_data.api_world_id;

            // ログイン不可の場合
            if(kcsCanLogin(viewerInfo, userWorldId) == false)
            {
                // 画面下部の情報セクションを表示する。
                document.getElementById("sectionWrap").style.display = "block";

                // メンテナンス画面を表示する。
                kcsStartMaintenanceHTML();
                return;
            }
            else
            {
                // 画面下部の情報セクションを表示する。
                document.getElementById("sectionWrap").style.display = "block";

                // 2023-07-04 メンテナンスのお知らせの下部に追加メッセージを表示する。
                //var message = "";
                //document.getElementById("messageWrap").style = "text-align: center";
                //document.getElementById("messageWrap").innerHTML = message;
            }

            // 新規ユーザーの場合
            if(userWorldId == ConstParameterInfo.GetUserWorld_IsNew)
            {
                // ワールド選択画面へ

                // トークン
                flashInfo.dmmLoginId = viewerInfo.id;

                // ワールド選択画面を表示する。
                kcsStartWorldSelectHTML();
                return;
            }
            // 既存ユーザーの場合
            else
            {
                // ワールドサーバーのアドレスを取得する。
                var worldServerAddr = ConstServerInfo["World_" + userWorldId];

                // アイテム購入処理のため、ワールドサーバーのアドレスを
                // グローバル変数に保存しておく
                userWorldInfo.worldServerAddr = worldServerAddr.substr(0, worldServerAddr.length - 1);

                // OSAPI サーバとの接続維持を開始する。
                kcsStartKeepConnection();

                // ワールドサーバーにログインする。
                
                // リクエストパラメータを定義する。
                var params = {};

                // リクエストパラメータを設定する。
                params[gadgets.io.RequestParameters.METHOD]         = gadgets.io.MethodType.GET;
                params[gadgets.io.RequestParameters.CONTENT_TYPE]   = gadgets.io.ContentType.JSON;
                params[gadgets.io.RequestParameters.AUTHORIZATION]  = gadgets.io.AuthorizationType.SIGNED;

                // 2022/07/13 鍵更新対応
                params[dmm.io.RequestParameters.OAUTH_SIGNATURE_PUBLICKEY]  = "key_2032";

                // リクエストの URL に現在時刻（ミリ秒）を追加する。
                // （ガジェットのキャッシュを読み込んでしまわないように）
                var date = new Date();

                // リクエストを実行する。
                // （レスポンス用のコールバック関数を設定）
                gadgets.io.makeRequest(
                    worldServerAddr + ConstURLInfo.LoginURL + viewerInfo.id + "/1/" + date.getTime(), function(response)
                {
                    // レスポンスデータを JSON デコードする。
                    var json = eval(response.text);

                    // ログインに成功した場合
                    if(json.api_result == ConstParameterInfo.APIResult_OK)
                    {
                        // ゲームを起動する。

                        // トークン
                        flashInfo.apiToken = json.api_token;
                        // 起動時刻
                        flashInfo.apiStartTime  = json.api_starttime;

                        // トークン取得失敗時、アクセスを拒否する。
                        if(flashInfo.apiToken == null || flashInfo.apiStartTime == null)
                        {
                            return;
                        }
                        // ゲーム画面を表示する。
                        kcsStartHTML(worldServerAddr);
                        return;
                    }
                    if(json.api_result == 301)
                    {
                        kcsStartDenyHTML(1);
                        return;
                    }
                    if(json.api_result == 302)
                    {
                        kcsStartDenyHTML(2);
                        return;
                    }
                }, params);
            }
        } else if (json.api_result == 200) {
            // 画面下部の情報セクションを表示する。
            document.getElementById("sectionWrap").style.display = "block";

            // メンテナンス画面を表示する。
            kcsStartMaintenanceHTML();
            return;
        }
        // 過剰リロード検知の場合
        if(json.api_result == ConstParameterInfo.APIResult_NG_Reload)
        {
            // 過剰リロード cookie を設定
            document.cookie = "kcsReloadDetected=1";
            return;
        }
    }, worldParams);

}

// ログイン可能か判定
function kcsCanLogin(pViewerInfo, userWorldId)
{
    // 入場不可の場合
    if((userWorldId == ConstParameterInfo.GetUserWorld_IsNew && EntranceInfo.NewUser == 0)
     ||(EntranceInfo["World_" + userWorldId + "_User"] == 0))
    {
        // 
        // スタッフのみログイン可能
        // 

        // 入場可否フラグ
        var canEnter = false;

        if(pViewerInfo.userType == "developer" || pViewerInfo.userType == "staff")
        {
            // developer, staff の場合、
            // 入場可とする。
            canEnter = true;
        }
        return canEnter;
    }
    // 全員入場可の場合
    else if((userWorldId == ConstParameterInfo.GetUserWorld_IsNew && EntranceInfo.NewUser == 2)
     ||(EntranceInfo["World_" + userWorldId + "_User"] == 2))
    {
        return true;
    }
    else
    {
        return false;
    }
}
// OSAPI サーバとの接続維持を開始
function kcsStartKeepConnection()
{
    // OSAPI サーバーとの通信を維持する。
    setInterval("kcsKeepConnection()", ConnectionInfo.Interval_Min * 1000 * 60);
}
// OSAPI サーバーとの通信を維持
function kcsKeepConnection()
{
    var params = {};
    params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
    params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
    var date = new Date();
    gadgets.io.makeRequest(
        ConstURLInfo.ConnectionCheckURL + "?" + date.getTime(), function(response)
    {
    }, params);
}

// ゲーム画面の表示
function kcsStartHTML(worldServerAddr)
{
    // div ブロックへ高さを設定する。
    document.getElementById("flashWrap").style.height = "720px";

    // ガジェットの高さを自動調整する。
    gadgets.window.adjustHeight(ConstGadgetInfo.height);

    // URL を組み立てる。
    var url = worldServerAddr
            + "kcs2/index.php?"
            + "api_root=/kcsapi&"
            + "voice_root=/kcs/sound&"
            + "osapi_root=" + ConstServerInfo.OSAPI + "&"
            + "version=" + VersionInfo.scriptVesion + "&"
            + "api_token=" + flashInfo.apiToken + "&"
            + "api_starttime=" + flashInfo.apiStartTime;

    // iframe 要素を div ブロックに設定する。
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
}

// ワールド選択画面の表示
function kcsStartWorldSelectHTML()
{
    // div ブロックへ高さを設定する。
    document.getElementById("flashWrap").style.height = "720px";

    // ガジェットの高さを自動調整する。
    gadgets.window.adjustHeight(ConstGadgetInfo.height);

    // URL を組み立てる。
    var url = ConstServerInfo.Gadget
            + "kcs2/world.html?"
            + "osapi_root=" + ConstServerInfo.OSAPI;

    // iframe 要素を div ブロックに設定する。
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
}

// メンテナンス中画面の表示
function kcsStartMaintenanceHTML()
{
    // div ブロックへ高さを設定する。
    document.getElementById("flashWrap").style.height = "720px";

    // ガジェットの高さを自動調整する。
    gadgets.window.adjustHeight(ConstGadgetInfo.height);

    // URL を組み立てる。
    var url = ConstServerInfo.Gadget + "html/maintenance.html";

    // iframe 要素を div ブロックに設定する。
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
}

// アクセス拒否画面の表示
function kcsStartDenyHTML(denyType)
{
    // div ブロックへ高さを設定する。
    document.getElementById("flashWrap").style.height = "720px";

    // ガジェットの高さを自動調整する。
    gadgets.window.adjustHeight(ConstGadgetInfo.height);

    // URL を組み立てる。
    var url = "";
    if(denyType == 1)
    {
        url = ConstServerInfo.Gadget + "html/ban.html";
    }
    else
    {
        url = ConstServerInfo.Gadget + "html/deny.html";
    }

    // iframe 要素を div ブロックに設定する。
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
}
