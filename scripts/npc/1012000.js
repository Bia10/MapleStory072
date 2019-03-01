/* Dawnveil
    Cab
	Regular Cab in Victoria
    Made by Daenerys
*/
var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("��������ƶ���������ׯ, ����ʱʹ�����ǵĳ��⳵~");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("���~!����#p1012000#����������ְ�ȫ���ƶ���������ׯ��? ��ô����ʹ����ͻ��ٷְ������#b#p1012000##k�ɡ�����Ҹ�������Ŵ�!�ҽ�������ȥ��ȥ�ĵط���");
    } else if (status == 1) {
	    var selStr = "��ѡ��Ŀ�ĵء�#b";
	    for (var i = 0; i < maps.length; i++) {
			if (maps[i] != cm.getMapId()) {
				selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
			}
	    }
		cm.sendSimple(selStr);
    } else if (status == 2) {
		cm.sendYesNo("������, ������Ѿ�û��ʲô������Ҫ���������ˡ�ȷ��Ҫ�ƶ���#b#m" + maps[selection] + "##k��ׯ��?");
		selectedMap = selection;
    } else if (status == 3) {
		cm.warp(maps[selectedMap]);
		cm.dispose();
    }
}