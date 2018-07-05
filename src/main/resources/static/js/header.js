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
    return {
        goMonster: function() {
            goMonster();
        },
        goLabs : function() {
            goLabs();
        },
        goBoard : function() {
            goBoard();
        }
    };
}();