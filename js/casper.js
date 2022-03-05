// 1. Video Control Script
const video = $('.video');
const videoBtn = $('.video_btn button');
const soundBtn = $('#sound_btn');

videoBtn.eq(0).click(function(){
    video.get(0).play();
});
videoBtn.eq(1).click(function(){
    video.get(0).pause();
});
videoBtn.eq(2).click(function(){
    video.get(0).load();
});

// 2. Video Sound Control Script
soundBtn.click(function(){
    if($(video).prop('muted')){
        video.prop('muted',false); //음 재생
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
        soundBtn.css('right','354px');
    }else{
        video.prop('muted',true); //음소거
        soundBtn.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
        soundBtn.css('right','364px');
    }
});