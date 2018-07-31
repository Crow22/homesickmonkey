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
    };
    var showLogin = function() {
        $('#login_modal').modal();
    };
    var login = function() {
        alert($("#user_name").val());
        alert($("#user_pass").val());
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
        },
        setActive : function (liName) {
            setActive(liName);
        },
        showLogin : function () {
            showLogin();
        },
        login : function () {
            login();
        }
    };
}();