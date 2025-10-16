function kcsLogin_StartLogin()
{
    var params = {};
    params[opensocial.DataRequest.PeopleRequestFields.PROFILE_DETAILS] = [
        "userType"
    ];
    var request = opensocial.newDataRequest();
    request.add(
        request.newFetchPersonRequest(
            opensocial.IdSpec.PersonId.VIEWER, params), "viewer"
    );
    request.send(function(response)
    {
        if (!response.hadError()) {
            var viewer = response.get("viewer").getData();
            const staff = ["developer", "staff"];
            if (MaintenanceInfo.IsDoing == 1 && staff.indexOf(viewer.getField("userType")) == -1) {
                kcsRenderScreen(ConstServerInfo.Gadget + "html/maintenance.html");
                return;
            }
            var worldParams = {};
            worldParams[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
            worldParams[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.JSON;
            var date = new Date();
            gadgets.io.makeRequest(ConstServerInfo.Gadget + "kcsapi/api_world/get_id/" + viewer.getId() + "/1/" + date.getTime(), function(worldResponse) {
                var json = eval(worldResponse.text);
                if(json.api_result == 1) {
                    var userWorldId = json.api_data.api_world_id;

                    if(userWorldId < 1)
                    {
                        kcsRenderScreen(ConstServerInfo.Gadget + "kcs2/world.html?osapi_root=" + ConstServerInfo.OSAPI);
                        return;
                    }

                    var worldServerAddr = ConstServerInfo.World[userWorldId];
                    var loginParams = {};
                    loginParams[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
                    loginParams[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.JSON;
                    loginParams[gadgets.io.RequestParameters.AUTHORIZATION] = gadgets.io.AuthorizationType.SIGNED;
                    var date = new Date();
                    gadgets.io.makeRequest(worldServerAddr + ConstURLInfo.LoginURL + viewer.getId() + "/1/" + date.getTime(), function(response) {
                        var json = eval(response.text);
                        if(json.api_result == 1) {
                            userWorldInfo.worldServerAddr = worldServerAddr.substr(0, worldServerAddr.length - 1);
                            var url = worldServerAddr
                                    + "kcs2/index.php?"
                                    + "api_root=/kcsapi&"
                                    + "voice_root=/kcs/sound&"
                                    + "osapi_root=" + ConstServerInfo.OSAPI + "&"
                                    + "version=" + VersionInfo.scriptVesion + "&"
                                    + "api_token=" + json.api_token + "&"
                                    + "api_starttime=" + json.api_starttime;
                            kcsRenderScreen(url);
                            return;
                        }
                        else
                        {
                            var url = ConstServerInfo.Gadget + "html/";
                            if(json.api_result == 301){
                                url = url + "ban.html";
                            } else if(json.api_result == 302) {
                                url = url + "deny.html";
                            } else {
                                url = url + "error.html";
                            }
                            kcsRenderScreen(url);
                            return;
                        }
                    }, loginParams);
                } else {
                    kcsRenderScreen(ConstServerInfo.Gadget + "html/maintenance.html");
                    return;
                }
            }, worldParams);
        }
    });
}

function kcsRenderScreen(url)
{
    document.getElementById("flashWrap").style.height = "720px";
    gadgets.window.adjustHeight(ConstGadgetInfo.height);
    var innerHtml = "<iframe src='"+ url +"' id='htmlWrap' scrolling='no' frameborder='0' style='width:1200px; height: 720px; margin: 0px 0px 0px 0px;'></iframe>";
    document.getElementById("flashWrap").innerHTML = innerHtml;
    document.getElementById("sectionWrap").style.display = "block";
}
