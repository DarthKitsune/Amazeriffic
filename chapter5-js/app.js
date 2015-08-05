/**
 * Created by hp on 05.08.2015.
 */

var main = function () {
    "use strict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment;
        if($(".comment-input input").val() != "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    });
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode == 13) {
            var $new_comment;
            if ($(".comment-input input").val() != "") {
                $new_comment = $("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });
};

$(document).ready(main);