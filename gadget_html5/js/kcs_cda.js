window.addEventListener('message', function (event) {

    // サーバ選択前
    if (event.data == "w") {
        if (ConstServerInfo.Gadget == event.origin + "/") {
            Viewer_SendMessage();
            return;
        } else {
            return;
        }
    }

    // サーバ選択後
    if (event.data == "r") {
        if (ConstServerInfo.Gadget == event.origin + "/") {
            kcsLogin_StartLogin();
            return;
        } else {
            return;
        }
    }

    if ((ConstServerInfo.NETGAME != event.origin && userWorldInfo.worldServerAddr != event.origin) || event.data == "") {
        return;
    }
    var data = event.data.split("\t");
    if (data[0] == "0") {
        // 0: アイテム購入
        kcsPayment_StartPayment(data[1], data[2], data[3], data[4], data[5], data[6]);
        return;
    } else if(data[0] == "1") {
        // 1: コメント変更
        kcsInspection_CreateInspectionComment(data[1]);
        return;
    } else if(data[0] == "2") {
        // 2: 艦隊名変更
        kcsInspection_CreateInspectionDeckName(data[1]);
        return;
    } else if(data[0] == "3") {
        // 3: 提督名変更
        kcsInspection_CreateInspectionNickName(data[1]);
        return;
    }
}, false);

function PaymentResult_SendMessage(paymentResult) {

    var gameElement = document.getElementById("htmlWrap").contentWindow;

    if (gameElement) {
        gameElement.postMessage(paymentResult, userWorldInfo.worldServerAddr);
    }
}

function Inspection_SendMessage(CommentId) {

    var gameElement = document.getElementById("htmlWrap").contentWindow;

    if (gameElement) {
        gameElement.postMessage(CommentId, userWorldInfo.worldServerAddr);
    }
}

function Viewer_SendMessage() {
    var params = {};
    params[opensocial.DataRequest.PeopleRequestFields.PROFILE_DETAILS] = [
        "userType"
    ];
    var request = opensocial.newDataRequest();
    request.add(
        request.newFetchPersonRequest(
            opensocial.IdSpec.PersonId.VIEWER, params), "viewer"
    );
    request.send(function(response) {
        if (!response.hadError())
        {
            var viewer = response.get("viewer").getData();
            var gameElement = document.getElementById("htmlWrap").contentWindow;
            if (gameElement) {
                gameElement.postMessage(viewer.getId(), ConstServerInfo.Gadget);
            }
        }
    });
}
