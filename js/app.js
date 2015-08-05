var main = function () {
    "use strict";
    var toDos = [
        "��������� ������ ��� �����",
        "������� ������ �� �������� � ����",
        "�������� �� ����������� ������",
        "������������� � ������ � �����������",
        "�������� ��������� ����� �����",
        "������ ��������"
    ];
    $(element).on("click", function () {
        var $element = $(element),
            $content;
        $(".tabs a span").removeClass("active");
        $element.addClass("active");
        $("main .content").empty();
        if ($element.parent().is(":nth-child(1)")) {
            console.log("������ �� ������ �������!");
        } else if ($element.parent().is(":nth-child(2)")) {
            $content = $("<ul>");
            toDos.forEach(function (todo) {
                $content.append($("<li>").text(todo));
            });
            $("main .content").append($content);
        } else if ($element.parent().is(":nth-child(3)")) {
            console.log("������ �� ������� �������!");
        }
    });
    $(".tabs a span").toArray().forEach(function(element) {
        $(element).on("click", function () {
            $(".tabs a span").removeClass("active");
            element.addClass("active");
            $("main .content").empty();
        });
    });
    //return false;
};

$(document).ready(main());