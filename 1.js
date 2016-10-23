/*global $,alert*/
var i;

function destroy_modal() {
    'use strict';
    $('body').children().removeClass('bllur');
    $('.modal').remove();
}


// Are these the best arguments?
function create_modal(heading, paragraph, buttons, callbacks) {
    'use strict';
    var modal_html = '';
    $('body').children().addClass('bllur');
    $('.lorem').attr('disabled', true);
    modal_html += '<div class="modal"><h1>' + heading + '</h1><p>' + paragraph + '</p><div>';
    for (i = 0; i < buttons.length; i += 1) {
        modal_html += '<button class="' + buttons[i] + '">' + buttons[i] + '</button>';
    }
    modal_html += '<button class="close">Close</button>';
    modal_html += '</div></div>';
    $('body').append(modal_html);
    $('button:nth-child(1)').click(callbacks[0]);
    $('button:nth-child(2)').click(callbacks[1]);
    $('.close').click(destroy_modal);
}
$(document).ready(function () {
    'use strict';
    var yes_callback = function () {
        alert('Yes');
    }, no_callback = function () {
        alert('No');
    }, never_callback = function () {
        
    };
    $('.lorem').click(function (e) {
        create_modal('Hi', "", ['yes', 'no', 'never'], [yes_callback, no_callback, never_callback]);
    });
});
