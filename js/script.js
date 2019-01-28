var num = 7;
function createLeave(num) {
    var number = Math.floor(Math.random() * 4 + 1);
    var img = $('<img />').attr({src: 'images/leaves' + number + '.png'}, {alt: 'leave' + num});
    $(".column").append(img);
    return img;
}

setInterval(function(){
    var leave = createLeave(num);
    var time = Math.floor((Math.random()*7)+3);
    var beginX = Math.floor(Math.random()*1000 + 1);
    console.log(beginX);
    console.log(time);
    var beginY = 0;
    var endX = Math.floor(Math.random()*1000 +1);
    console.log(endX);
    var endY = 550;
    TweenMax.to($(leave), time, {rotationX: '+=180'});
    TweenMax.to($(leave), 10, {rotation:360, ease:Linear.easeNone});

    TweenMax.fromTo($(leave),
        time*2,
        {x: beginX, y: beginY},
        {x:endX, y: endY, onComplete: function () {
                num -= 1;
                $(leave).remove();
            }}

    );
}, 1000);

$(document).ready(function () {
    // var leave = createLeave(num++);
    // TweenMax.to($(".column img"), 10, {rotation:360, ease:Linear.easeNone});
    // TweenMax.to($(".column img"), 10, {rotationY:'+=180'});

    // TweenMax.fromTo($(".column img"), 20, {x: 100,y: 0}, {x: 100, y: 800});
    //
    // var leave = createLeave(num);
    // num -= 1;
    // var time = Math.floor((Math.random()*7)+3);
    // var beginX = Math.floor(Math.random()*1000 + 1);
    // var beginY = 0;
    // var endX = Math.floor(Math.random()*1000 +1);
    // var endY = 800;
    // TweenMax.to($(leave), time, {rotationY: '+=180'});
    // TweenMax.fromTo($(leave),
    //     time*2,
    //     {x: beginX, y: beginY},
    //     {x:endX, y: endY}
    // );




});