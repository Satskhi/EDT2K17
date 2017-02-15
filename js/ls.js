//OFF
API.off(API.ADVANCE);

//ON
API.on(API.ADVANCE, function () {
var user = API.getDJ().username;
    let media = API.getMedia().cid;
	const nsfw = ["tf52mbGTB4o", "Rg6yj4f1KWA", "xVwb9Ws10Kc", "tMH3EqrOz2U", "9W8Q9FvH1XA", "O_QxG1rPW8Q", "wsUQKw4ByVg", "0W6HxYGth20", "Ei4rbJgMZPc"];
	const op = ["f9EM8T5K6d8", "NSTx31dxmgA", "zM2kobGhWvo", "kcuVvryU9QA", "5hEh9LiSzow", "qn-X5A0gbMA", "Rpr_HNJ0Y3A", "GVmw6wnL4oQ"];
	const theme = ["E5ONTXHS2mM"];
	const fkthissong = ["291805417", "8QJV1sOm040"];

    if (nsfw.indexOf(media) > -1) {
		API.sendChat("/me @"+user+" Song is NFSW");
        setTimeout(function() {
            API.sendChat("!skip");
        }, 1300);
    }
    else if (op.indexOf(media) > -1) {
		API.sendChat("/me @"+user+" Song is OP");
        setTimeout(function() {
            API.sendChat("!skip");
        }, 1300);
    }
	else if (theme.indexOf(media) > -1) {
		API.sendChat("/me @"+user+" Song is off theme");
        setTimeout(function() {
            API.sendChat("!ls");
        }, 1300);
    }
	else if (fkthissong.indexOf(media) > -1) {
		API.sendChat("/me @"+user+" Song without quality :facepalm:");
        setTimeout(function() {
            API.sendChat("!ls");
        }, 1300);
    }
	else {
        return;
    }
});
