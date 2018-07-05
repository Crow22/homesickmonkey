$.namespace("homesick.board");

homesick.board = function () {
    var init = function () {
        $("#board_li").addClass("active");
    };
    
    return {
        init : function () {
            init();
        }
    }
};