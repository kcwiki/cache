// ガジェット情報
var ConstGadgetInfo = {};
ConstGadgetInfo.height = 860;

// SNS 情報
var ConstSNSInfo = {};
ConstSNSInfo.id = "DMM";

// サーバー情報
var ConstServerInfo = {};
ConstServerInfo.Gadget           = "http://203.104.209.7/";
ConstServerInfo.World_1          = "http://203.104.209.71/";
ConstServerInfo.World_2          = "http://203.104.209.87/";
ConstServerInfo.World_3          = "http://125.6.184.215/";
ConstServerInfo.World_4          = "http://203.104.209.183/";
ConstServerInfo.World_5          = "http://203.104.209.150/";
ConstServerInfo.World_6          = "http://203.104.209.134/";
ConstServerInfo.World_7          = "http://203.104.209.167/";
ConstServerInfo.World_8          = "http://203.104.209.199/";
ConstServerInfo.World_9          = "http://125.6.189.7/";
ConstServerInfo.World_10         = "http://125.6.189.39/";
ConstServerInfo.World_11         = "http://125.6.189.71/";
ConstServerInfo.World_12         = "http://125.6.189.103/";
ConstServerInfo.World_13         = "http://125.6.189.135/";
ConstServerInfo.World_14         = "http://125.6.189.167/";
ConstServerInfo.World_15         = "http://125.6.189.215/";
ConstServerInfo.World_16         = "http://125.6.189.247/";
ConstServerInfo.World_17         = "http://203.104.209.23/";
ConstServerInfo.World_18         = "http://203.104.209.39/";
ConstServerInfo.World_19         = "http://203.104.209.55/";
ConstServerInfo.World_20         = "http://203.104.209.102/";
ConstServerInfo.OSAPI            = "osapi.dmm.com";
ConstServerInfo.NETGAME          = "http://www.dmm.com";

// URL 情報
var ConstURLInfo = {};
ConstURLInfo.GetUserWorldURL     = ConstServerInfo.Gadget + "kcsapi/api_world/get_id/";
ConstURLInfo.ConnectionCheckURL  = ConstServerInfo.Gadget + "index.html";
ConstURLInfo.LoginURL            = "kcsapi/api_auth_member/dmmlogin/";

// Parameter 情報
var ConstParameterInfo = {};
ConstParameterInfo.PaymentResult_Paid   =  0;
ConstParameterInfo.PaymentResult_Cancel = -1;
ConstParameterInfo.GetUserWorld_IsNew   = 0;
ConstParameterInfo.APIResult_OK         = 1;
ConstParameterInfo.APIResult_NG_Reload  = -2;

// Connection 情報
var ConnectionInfo = {};
ConnectionInfo.Interval_Min   = 10;

// Maintenance 情報
var MaintenanceInfo = {};
MaintenanceInfo.IsDoing       = 0;
MaintenanceInfo.IsEmergency   = 0;
MaintenanceInfo.StartDateTime = Date.parse("2022/06/08 00:00:00");
MaintenanceInfo.EndDateTime   = Date.parse("2022/06/08 00:59:59");

// Version 情報
var VersionInfo = {};
VersionInfo.scriptVesion      = "5.4.0.6";

// Entrance 情報
var EntranceInfo = {};
EntranceInfo.Groups           = 10;
EntranceInfo.Interval_Min     = 1;
EntranceInfo.UidIndex         = 0;

// Entrance 情報（ワールド別）
EntranceInfo.NewUser          = 2;
EntranceInfo.World_1_User     = 2;
EntranceInfo.World_2_User     = 2;
EntranceInfo.World_3_User     = 2;
EntranceInfo.World_4_User     = 2;
EntranceInfo.World_5_User     = 2;
EntranceInfo.World_6_User     = 2;
EntranceInfo.World_7_User     = 2;
EntranceInfo.World_8_User     = 2;
EntranceInfo.World_9_User     = 2;
EntranceInfo.World_10_User    = 2;
EntranceInfo.World_11_User    = 2;
EntranceInfo.World_12_User    = 2;
EntranceInfo.World_13_User    = 2;
EntranceInfo.World_14_User    = 2;
EntranceInfo.World_15_User    = 2;
EntranceInfo.World_16_User    = 2;
EntranceInfo.World_17_User    = 2;
EntranceInfo.World_18_User    = 2;
EntranceInfo.World_19_User    = 2;
EntranceInfo.World_20_User    = 2;
2