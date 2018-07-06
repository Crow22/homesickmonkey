$.namespace("homesick.monster");

homesick.monster = function () {
    var init = function () {
        homesick.header.setActive("monster_li");
    };
    
    return {
        init : function () {
            init();
        }
    }
};
$(document).ready(function(){
    $(homesick.monster().init());
});