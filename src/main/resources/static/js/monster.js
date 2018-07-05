$.namespace("homesick.monster");

homesick.monster = function () {
    var init = function () {
        $("#monster_li").addClass("active");
        alert(document.getElementById("testid"))
    };
    
    return {
        init : function () {
            init();
        }
    }
};
$(homesick.monster().init());