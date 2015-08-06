/**
 * Created by hp on 05.08.2015.
 */

var main = function () {
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
        "tags=cat&format=json&jsoncallback=?";
    $.getJSON(url, function (flickrResponse) {
    //пока мы просто выводим ответ в консоль
        flickrResponse.items.forEach(function (photo) {
           //console.log(photo.media.m);
            var img = $("<img>");
            img.attr("src", photo.media.m);
            $("main .photos").append(img);
        });
    });
}

$(document).load(main());