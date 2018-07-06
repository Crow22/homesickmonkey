$.namespace("homesick.labs");

homesick.labs = function () {
    var init = function () {
        homesick.header.setActive("labs_li");
    };
    
    return {
        init : function () {
            init();
        }
    }
};
$(document).ready(function(){
    $(homesick.labs().init());
});