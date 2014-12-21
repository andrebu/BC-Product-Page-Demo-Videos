BigCommerce Product Page Demo Videos Plugin
===========================================

BigCommerce Product Page Demo Videos with a Play/Stop button in the thumbnail image selector section below product image.
by Andre Bulatov - iamandrebulatov - http://andrebulatov.com


Installation instructions
-------------------------
3b.1 - Product Page Videos
3b.2 - Add 'div.productDemoVideo' HTML to bottom of Snippets/ProductThumbImage.html
```HTML
    <div class="productDemoVideo" class="%%GLOBAL_ProductId%%"></div>
```

3b.3 - Add <!-- Product Page Videos --> CSS
```CSS
/* Product Page Video CSS */
 #videoDemoBtn {
    width: 70px;
    height: 73px;
    border-radius: 60px;
    position: absolute;
    cursor: pointer;
    z-index: 90;
    background-color: lightgray;
    display: none;
    clip: rect(auto, auto, auto, auto);
}
/*
#videoDemoBtn.videoPlaying {
}
*/
 #videoDemoBtn .triangle {
    width: 0px;
    height: 0px;
    left: 37px;
    top: 27px;
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 16px solid #39B54A;
    z-index: 1;
    border-radius: 2px;
    opacity: 0.5;
}
#videoDemoBtn .triangle {
    left: 29px;
    top: 22px;
}
#videoDemoBtn .triangle:after {
    content:"Play";
    position: absolute;
    left: -23px;
    top: 8px;
    text-transform: uppercase;
}
#videoDemoBtn:hover .triangle {
    opacity: 1;
}
#videoDemoBtn.videoPlaying .triangle {
    border-top: 8px solid red;
    border-bottom: 8px solid red;
    border-left: 8px solid red;
    border-right: 8px solid red;
    left: 27px;
    top: 23px;
}
#videoDemoBtn.videoPlaying .triangle:after {
    content:"Stop";
    left: -14px;
}
.ProductList li:hover #videoDemoBtn {
    opacity: 1;
}
#productDemoVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* 	height: 100%;  */
    /* 	display: none; */
}
#productDemoVideo video {
    height: 100%;
    width: 100%;
}
.ProductDetailsGrid .productAttributeList {
    /* 	display: none; */
}
#videoDemoThumb {
    cursor: pointer;
    border: 1px solid #f0efee !important;
    opacity: .75;
}
#videoDemoThumb .ProdVideoPlayBtn {
    position: relative;
    background-color: #39B54A;
    width: 56px;
    height: 73px;
    display: block;
    margin: 4px;
}
#videoDemoThumb .triangle {
    width: 0px;
    height: 0px;
    left: 17px;
    top: 8px;
    position: absolute;
    border-top: 10px solid transparent !important;
    border-bottom: 12px solid transparent !important;
    border-left: 23px solid white!important;
    z-index: 1;
    border-radius: 2px;
}

/* Play Video Button */
#videoDemoThumb .triangle:after {
    content:"Play Video";
    position: absolute;
    left: -31px;
    top: 18px;
    color: #fff;
    text-transform: uppercase;
}

/* Stop Video Button */
#videoDemoThumb.videoPlaying .ProdVideoPlayBtn {
    background-color: #DD4B39;
}
#videoDemoThumb.videoPlaying .triangle {
    border: 10px solid #fff !important;
}
#videoDemoThumb.videoPlaying .triangle:after {
    content:"Stop Video";
    left: -19px;
}
@media screen and (max-width: 767px) {
    #ProductDetails .ProductTinyImageList ul li#videoDemoThumb {
        display: none;
    }
    /*
	#videoDemoBtn {
		display: block; 
	}
*/
    #videoDemoBtn {
        display: block;
        right: 0px;
        top: 0px;
        opacity: 1;
    }
    #videoDemoBtn .triangle {
        opacity: 1;
    }
}
```

3b.4 - Add following JS to Panels/ProductDetails.html



The JavaScript/jQuery code necessary for the functionality
----------------------------------------------------------
```javascript
/* 	Existance checker function */
	$.fn.exists = function(callback) {
		var args = [].slice.call(arguments, 1);
		if (this.length) {
			callback.call(this, args);
		}
		return this;
	};

/* 	Using ECF to check for Video Option Trigger, hiding it, and adding buttons */
	$(function () {
		$("span:contains('HasDemoVideo')").exists(function() {
			$(this).closest('.productAttributeRow').hide();
			var ProductThumb = $('.ProductThumb');
				ProductTinyImageList = $('.ProductTinyImageList ul');
			ProductThumb.append('<span id="videoDemoBtn" class=""><div class="triangle"></div></span>');
			ProductTinyImageList.append('<li id="videoDemoThumb" class="" style="height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;"><div class="ProdVideoPlayBtn"><div class="triangle"></div></div></li>');
			});    
		});

	$(document).ready(function(){
	
/*	Play/Stop button click triggering functionality */
		$('#videoDemoThumb, #videoDemoBtn').on('click', function() {
		        var clicked = $('#videoDemoThumb, #videoDemoBtn');
			if($(clicked).hasClass('videoPlaying')) {
		        $(clicked).removeClass('videoPlaying');
		        $('.ProductThumb').find('#productDemoVideo').hide().html('');
		        }
	        else {
		        var ProductId = $('#productDemoVideo').attr('class'); 
			$(clicked).addClass('videoPlaying');
			$('.ProductThumb').find('#productDemoVideo').show().html('<video id="demoVideo" class="video" preload="auto" autoplay="autoplay" loop="loop" autobuffer="autobuffer" muted="muted" controls="controls"><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.mp4"><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.ogv" type="video/ogg"><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.webm" type="video/webm"><p>Your browser does not support this video.  Please upgrade your browser!</p></video>');
			$('#productDemoVideo').css('height', $('.ProductThumbImage').height()+'px');
			var video = document.getElementById('demoVideo');
			video.addEventListener('click',function(){
				video.play();
			},false);
			}
		});
	});
</script>
```

Create Videos Upload Folder
---------------------------

Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/


Resources
---------

###On HTML5 <video> tag for mobile (iOS and Android in particular)
1.  On using javaScript play() to make it work on Android - http://stackoverflow.com/questions/1711078/html5-video-element-on-android
2.  Similar to above #1. above. https://code.google.com/p/chromium/issues/detail?id=159336
3.  On how autoplay does not work on Android Chrome - https://code.google.com/p/chromium/issues/detail?id=159336
4.  Media formats supported by the HTML audio and video elements - https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats - mozilla.org
5.  Creating a cross-browser video player - https://developer.mozilla.org/en-US/Apps/Build/Audio_and_video_delivery/cross_browser_video_player - mozilla.org
6.  A solution proposed for iOS to fix so that playing video does not enter full screen mode but rather plays inline (in the end, this proposed code does not work reliably, or at all) - http://stackoverflow.com/questions/19521667/disable-fullscreen-iphone-video
7.  Similar to #6 above but for Android.  Suggests using custom JS for autoplay function and also some <video> tag markup standards that should allow video to play on ANdroid along iwth other browsers like Firefox and Safari. - http://stackoverflow.com/questions/1711078/html5-video-element-on-android
8.  Similar to #6 and #7 above as in this thread, the ttempt was to make videos play inline rather than be forced into fullscreen mode.  The main suggestion is to use "webkit-playinline," but as elegant as this soltion is, it does not work. - http://stackoverflow.com/questions/1711078/html5-video-element-on-android
