// ガジェット情報
var ConstGadgetInfo = {};
ConstGadgetInfo.height = 860; //1160;

// SNS 情報
var ConstSNSInfo = {};
ConstSNSInfo.id = "DMM";

// サーバー情報
var ConstServerInfo = {};
ConstServerInfo.Gadget           = "http://w00g.kancolle-server.com/";
ConstServerInfo.World_1          = "http://w01y.kancolle-server.com/";
ConstServerInfo.World_2          = "http://w02k.kancolle-server.com/";
ConstServerInfo.World_3          = "http://w03s.kancolle-server.com/";
ConstServerInfo.World_4          = "http://w04m.kancolle-server.com/";
ConstServerInfo.World_5          = "http://w05o.kancolle-server.com/";
ConstServerInfo.World_6          = "http://w06t.kancolle-server.com/";
ConstServerInfo.World_7          = "http://w07l.kancolle-server.com/";
ConstServerInfo.World_8          = "http://w08r.kancolle-server.com/";
ConstServerInfo.World_9          = "http://w09s.kancolle-server.com/";
ConstServerInfo.World_10         = "http://w10b.kancolle-server.com/";
ConstServerInfo.World_11         = "http://w11t.kancolle-server.com/";
ConstServerInfo.World_12         = "http://w12p.kancolle-server.com/";
ConstServerInfo.World_13         = "http://w13b.kancolle-server.com/";
ConstServerInfo.World_14         = "http://w14h.kancolle-server.com/";
ConstServerInfo.World_15         = "http://w15p.kancolle-server.com/";
ConstServerInfo.World_16         = "http://w16s.kancolle-server.com/";
ConstServerInfo.World_17         = "http://w17k.kancolle-server.com/";
ConstServerInfo.World_18         = "http://w18i.kancolle-server.com/";
ConstServerInfo.World_19         = "http://w19s.kancolle-server.com/";
ConstServerInfo.World_20         = "http://w20h.kancolle-server.com/";
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
MaintenanceInfo.IsDoing       = 1;
MaintenanceInfo.IsEmergency   = 0;
MaintenanceInfo.StartDateTime = Date.parse("2025/09/26 00:00:00");
MaintenanceInfo.EndDateTime   = Date.parse("2025/09/26 00:59:59");

// Version 情報
var VersionInfo = {};
VersionInfo.scriptVesion      = "6.1.6.0";

// Entrance 情報
var EntranceInfo = {};
EntranceInfo.Groups           = 10;
EntranceInfo.Interval_Min     = 1;
EntranceInfo.UidIndex         = 0;

// Entrance 情報（ワールド別）
EntranceInfo.NewUser          = 0;
EntranceInfo.World_1_User     = 0;
EntranceInfo.World_2_User     = 0;
EntranceInfo.World_3_User     = 0;
EntranceInfo.World_4_User     = 0;
EntranceInfo.World_5_User     = 0;
EntranceInfo.World_6_User     = 0;
EntranceInfo.World_7_User     = 0;
EntranceInfo.World_8_User     = 0;
EntranceInfo.World_9_User     = 0;
EntranceInfo.World_10_User    = 0;
EntranceInfo.World_11_User    = 0;
EntranceInfo.World_12_User    = 0;
EntranceInfo.World_13_User    = 0;
EntranceInfo.World_14_User    = 0;
EntranceInfo.World_15_User    = 0;
EntranceInfo.World_16_User    = 0;
EntranceInfo.World_17_User    = 0;
EntranceInfo.World_18_User    = 0;
EntranceInfo.World_19_User    = 0;
EntranceInfo.World_20_User    = 0;
