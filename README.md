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
<script language="javascript" type="text/javascript">

$(document).ready(function(){


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
		  console.log(this);
		  $(this).closest('.productAttributeRow').hide();
			var ProductThumb = $('.ProductThumb');
				ProductTinyImageList = $('.ProductTinyImageList ul');
			ProductThumb.append('<span id="videoDemoBtn" class=""><div class="triangle"></div></span>');
			ProductTinyImageList.append('<li style="height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" id="videoDemoThumb" class=""><div class="ProdVideoPlayBtn"><div class="triangle"></div></div></li>');
			});    
		});


/* 	Play button logic for desktop and mobile */
	$(function() {
/* 	When Play button is clicked, .videoPlaying class is toggled and video Plays */
        $('#videoDemoThumb, #videoDemoBtn').on('click',
        function(event) {
            event.stopPropagation();
            $('#videoDemoThumb, #videoDemoBtn').toggleClass('videoPlaying');
	        var ProductId = $('.AddToWishlistLink').find("input[name='product_id']").attr('value'); 
		    	ProductPageVideoHeight = $(this).parent().find('a[rel="prodImage"]').height();
		    $('#videoDemoThumb, #videoDemoBtn').removeClass('videoStopped');
		    $('#videoDemoThumb, #videoDemoBtn').addClass('videoPlaying');
			// $('.ProductThumbImage').find('a[rel="prodImage"]').hide();
		    $('.ProductThumb').find('div.productDemoVideo').show().html('<video class="video" preload="auto" loop muted autoplay><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.mp4" type="video/mp4" /><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.ogv" type="video/ogg" /><source src="https://store-mixi7d.mybigcommerce.com/content/videos/'+ProductId+'.webm" type="video/webm" /><p>Your browser does not support this video.  Please upgrade your browser!</p></video>');
		    $('.ProductThumbImage').css('height', ProductPageVideoHeight);
        });
        
/* 	When *document* is clicked while w/ videoPlaying class, class is removed and video Stops */        
        $('html').click(function() {
            $('#videoDemoThumb, #videoDemoBtn').removeClass('videoPlaying');
            $('.ProductThumb').find('div.productDemoVideo').html('');
        });
        
    });


});


</script>
```

Create Videos Upload Folder
---------------------------

Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/
