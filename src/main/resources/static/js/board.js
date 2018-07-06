$.namespace("homesick.board");

homesick.board = function () {
    var init = function () {
        homesick.header.setActive("board_li");
    };
    
    return {
        init : function () {
            init();
        }
    }
};


$(document).ready(function(){
    $(homesick.board().init());
});