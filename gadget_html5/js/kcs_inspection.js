// 監視テキスト登録（提督名）
function kcsInspection_CreateInspectionNickName(nickName) {
    var params = {};
    params[dmm.UserText.Field.DATA] = nickName;

    dmm.requestCreateInspection(params, function(response) {
        if (response.hadError()) {
            Inspection_SendMessage("");
            return;
        }

        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry) {
            inspectionTextId = entry.getTextId();
        });

        Inspection_SendMessage(inspectionTextId);

    });
}

function kcsInspection_CreateInspectionDeckName(deckName)
{
    if (!deckName.match(/\S/g)) {
        Inspection_SendMessage("");
        return;
    }

    var params = {};
    params[dmm.UserText.Field.DATA] = deckName;

    dmm.requestCreateInspection(params, function(response) {
        if (response.hadError()) {
            Inspection_SendMessage("");
            return;
        }

        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry) {
            inspectionTextId = entry.getTextId();
        });

        Inspection_SendMessage(inspectionTextId);

    });
}

function kcsInspection_CreateInspectionComment(comment)
{
    if (!comment.match(/\S/g)) {
        comment = " ";
    }

    var params = {};
    params[dmm.UserText.Field.DATA] = comment;

    dmm.requestCreateInspection(params, function(response) {
        if (response.hadError()) {
            Inspection_SendMessage("");
            return;
        }

        var inspectionTextId;
        var data = response.getData();
        data.each(function(entry) {
            inspectionTextId = entry.getTextId();
        });

        Inspection_SendMessage(inspectionTextId);
    });
}
