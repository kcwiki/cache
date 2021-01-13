// 監視テキスト登録（提督名）
function kcsInspection_CreateInspectionNickName(nickName)
{
    // 監視テキスト登録パラメータを設定する。
    var params = {};
    params[dmm.UserText.Field.DATA] = nickName;

    // 監視テキストを登録する。
    dmm.requestCreateInspection(params, function(response)
    {
        // エラーが発生した場合
        if (response.hadError())
        {
            // 監視テキスト登録結果を通知する
            Inspection_SendMessage("");

            // 処理を終了する。
            return;
        }
        
        // 監視テキストIDを取得する。
        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry)
        {
            inspectionTextId = entry.getTextId();
        });

        // 監視テキスト登録結果を通知する
        Inspection_SendMessage(inspectionTextId);

    });
}

// 監視テキスト登録（艦隊名）
function kcsInspection_CreateInspectionDeckName(deckName)
{
    // 2014/06/23 空白が入力された場合の動作を「更新しない」に変更
    if (!deckName.match(/\S/g))
    {
        // 監視テキスト登録結果を通知する
        Inspection_SendMessage("");
        // 処理を終了する。
        return;
    }

    // 監視テキスト登録パラメータを設定する。
    var params = {};
    params[dmm.UserText.Field.DATA] = deckName;

    // 監視テキストを登録する。
    dmm.requestCreateInspection(params, function(response)
    {
        // エラーが発生した場合
        if (response.hadError())
        {
            // 監視テキスト登録結果を通知する
            Inspection_SendMessage("");

            // 処理を終了する。
            return;
        }
        
        // 監視テキストIDを取得する。
        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry)
        {
            inspectionTextId = entry.getTextId();
        });

        // 監視テキスト登録結果を通知する
        Inspection_SendMessage(inspectionTextId);

    });
}

// 監視テキスト登録（コメント）
function kcsInspection_CreateInspectionComment(comment)
{
    // 2014/06/23 空白が入力された場合の動作を「空白で更新する」よう変更
    if (!comment.match(/\S/g))
    {
        comment = " ";
    }

    // 監視テキスト登録パラメータを設定する。
    var params = {};
    params[dmm.UserText.Field.DATA] = comment;

    // 監視テキストを登録する。
    dmm.requestCreateInspection(params, function(response)
    {
        // エラーが発生した場合
        if (response.hadError())
        {
            // 監視テキスト登録結果を通知する
            Inspection_SendMessage("");

            // 処理を終了する。
            return;
        }
        
        // 監視テキストIDを取得する。
        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry)
        {
            inspectionTextId = entry.getTextId();
        });

        // 監視テキスト登録結果を通知する
        Inspection_SendMessage(inspectionTextId);

    });
}
