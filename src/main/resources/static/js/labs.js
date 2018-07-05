$.namespace("homesick.labs");

homesick.labs = function () {
    var init = function () {
        $("#monster_li").removeClass("active");
        $("#labs_li").addClass("active");
    };
    
    return {
        init : function () {
            init();
        }
    }
};