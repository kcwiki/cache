// 決済リクエスト送信
function kcsPayment_StartPayment(skuId, price, count, description, name, imageUrl)
{
    // DMM OSAPI サーバーとの通信が確立されていることをチェックする。
    var params = {};
    params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
    params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
    var date = new Date();
    gadgets.io.makeRequest(
        ConstURLInfo.ConnectionCheckURL + "?" + date.getTime(), function(response)
    {
        // レスポンスコードが 400 以上の場合
        if(response.rc >= 400)
        {
            // 通信できていないと判断し、
            // アイテムを購入を中止する。
            return;
        }

        // 購入アイテムを作成

        // 購入アイテムパラメータを設定する。
        var billingItemParams = {};
        billingItemParams[opensocial.BillingItem.Field.SKU_ID]          = skuId;
        billingItemParams[opensocial.BillingItem.Field.PRICE]           = price;
        billingItemParams[opensocial.BillingItem.Field.COUNT]           = count;
        billingItemParams[opensocial.BillingItem.Field.DESCRIPTION]     = description;
        if (ConstSNSInfo.id == "DMM")
        {
            billingItemParams[dmm.BillingItem.Field.NAME]               = name;
            billingItemParams[dmm.BillingItem.Field.IMAGE_URL]          = imageUrl;
        }

        // 購入アイテムを作成する。
        var billingItem = 
            opensocial.newBillingItem(billingItemParams);

        // 決済リクエストを作成

        // 決済リクエストパラメータを設定する。
        var paymentParams = {};
        paymentParams[opensocial.Payment.Field.ITEMS]               = [billingItem];
        paymentParams[opensocial.Payment.Field.PAYMENT_TYPE]        = opensocial.Payment.PaymentType.PAYMENT;

        // 決済リクエストを作成する。
        var payment = opensocial.newPayment(paymentParams);

        // 決済リクエストを送信する。
        // （決済レスポンス用のコールバック関数を設定）
        opensocial.requestPayment(payment, paymentCallBack);

    }, params);
}

// 決済レスポンス受信
function paymentCallBack(paymentResponse)
{
    // ----------------------------------------------------------------
    // アイテムを購入したか、キャンセルしたかの判定
    // ----------------------------------------------------------------
    var userCancelled = false;

    // エラーが発生した場合
    if(paymentResponse.hadError())
    {
        // エラー時はキャンセル扱いとする。
        // （エラーは SNS 側でユーザに通知されている）
        userCancelled = true;
    }
    if (userCancelled == false)
    {
        // レスポンスコードを取得する。
        var responseCode = paymentResponse.getData().getField("responseCode");

        // レスポンスコードが "ok" 以外の場合
        if(responseCode != "ok")
        {
            // キャンセル扱いとする。
            userCancelled = true;
        }
    }

    // ----------------------------------------------------------------
    // ゲーム側へ通知
    // ----------------------------------------------------------------

    // インラインフレームへ購入結果を通知する。
    var paymentResult;
    if(!userCancelled)
    {
        paymentResult = ConstParameterInfo.PaymentResult_Paid;
    }
    else
    {
        paymentResult = ConstParameterInfo.PaymentResult_Cancel;
    }
    PaymentResult_SendMessage(paymentResult);

}
