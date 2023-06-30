/**
 * @author: Misael Bandeira Silveira <misaelsileveira at unisc dot br>
 * @version: 1.0
 * @date: 2023-30-06
 * @description: This script get url from input and format as a link to be used in Moodle external tool
 */

$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        $('#step').modal({ fadeDuration: 500, fadeDelay: 1, closeClass: 'icon-remove' });
    });
});