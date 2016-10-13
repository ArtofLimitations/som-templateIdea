$(function () {
    $(document).ready(function () {

        //Smartmenu init
        $('#main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: 0, //-8
            markCurrentItem: true,
            subIndicators: false
        });

        $('#secondary-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: 0, //-8
            markCurrentItem: true,
            subIndicators: false
        });

        //Smartmenu keyboard init (123 = F12)
        $('#main-menu').smartmenus('keyboardSetHotkey', 123, 'shiftKey');

        //Hide button focus outline on mousedown
        $('body').on('mousedown', '*', function (e) {
            if (($(this).is(':focus') || $(this).is(e.target)) && $(this).css('outline-style') == 'none') {
                $(this).css('outline', 'none').on('blur', function () {
                    $(this).off('blur').css('outline', '');
                });
            }
        });
    });

});