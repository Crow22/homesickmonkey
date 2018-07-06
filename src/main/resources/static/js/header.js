$.namespace("homesick.header");
homesick.header = function () {
    var goMonster = function () {
        window.location.href="/monster";
    };
    var goLabs = function () {
        window.location.href="/labs";
    };
    var goBoard = function () {
        window.location.href="/board";
    };
    var setActive = function (liName) {
        $("#" + liName).addClass("active");
    }
    return {
        goMonster: function() {
            goMonster();
        },
        goLabs : function() {
            goLabs();
        },
        goBoard : function() {
            goBoard();
        },
        setActive : function (liName) {
            setActive(liName);
        }
    };
}();