function kcsPayment_StartPayment(skuId, price, count, description, name, imageUrl)
{
    var params = {};
    params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
    params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
    var date = new Date();
    gadgets.io.makeRequest(ConstURLInfo.ConnectionCheckURL + "?" + date.getTime(), function(response) {
        if(response.rc >= 400) {
            PaymentResult_SendMessage(-1);
            return;
        }
        var billingItemParams = {};
        billingItemParams[opensocial.BillingItem.Field.SKU_ID] = skuId;
        billingItemParams[opensocial.BillingItem.Field.PRICE] = price;
        billingItemParams[opensocial.BillingItem.Field.COUNT] = count;
        billingItemParams[opensocial.BillingItem.Field.DESCRIPTION] = description;
        billingItemParams[dmm.BillingItem.Field.NAME] = name;
        billingItemParams[dmm.BillingItem.Field.IMAGE_URL] = imageUrl;
        var billingItem = opensocial.newBillingItem(billingItemParams);

        var paymentParams = {};
        paymentParams[opensocial.Payment.Field.ITEMS] = [billingItem];
        paymentParams[opensocial.Payment.Field.PAYMENT_TYPE] = opensocial.Payment.PaymentType.PAYMENT;
        var payment = opensocial.newPayment(paymentParams);

        opensocial.requestPayment(payment, function(paymentResponse) {
            var paid = false;
            if(!paymentResponse.hadError()) {
                paid = (paymentResponse.getData().getField("responseCode") == "ok");
            }
            if(paid) {
                PaymentResult_SendMessage(0);
            } else {
                PaymentResult_SendMessage(-1);
            }
        });
    }, params);
}
