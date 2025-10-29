var KCS_PROTOCOL = "https://";
var KCS_DOMAIN = ".kancolle-server.com";

var ConstGadgetInfo = {};
ConstGadgetInfo.height = 860;

var ConstServerInfo = {};
ConstServerInfo.Gadget = KCS_PROTOCOL + "w00g" + KCS_DOMAIN + "/";
ConstServerInfo.World = 
[
    "",
    KCS_PROTOCOL + "w01y" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w02k" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w03s" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w04m" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w05o" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w06t" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w07l" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w08r" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w09s" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w10b" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w11t" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w12p" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w13b" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w14h" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w15p" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w16s" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w17k" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w18i" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w19s" + KCS_DOMAIN + "/",
    KCS_PROTOCOL + "w20h" + KCS_DOMAIN + "/"
];
ConstServerInfo.OSAPI = "osapi.dmm.com";
ConstServerInfo.NETGAME = KCS_PROTOCOL + "www.dmm.com";

var ConstURLInfo = {};
ConstURLInfo.ConnectionCheckURL = ConstServerInfo.Gadget + "index.html";
ConstURLInfo.LoginURL = "kcsapi/api_auth_member/dmmlogin/";

var MaintenanceInfo = {};
MaintenanceInfo.IsDoing = 0;

var VersionInfo = {};
VersionInfo.scriptVesion = "6.2.0.0";
