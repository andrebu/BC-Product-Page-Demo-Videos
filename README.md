BigCommerce-Product-Page-Demo-Videos
====================================

BigCommerce Product Page Demo Videos with a Play/Stop button in the thumbnail image selector section below product image.
by Andre Bulatov - iamandrebulatov - http://andrebulatov.com


Installation instructions
=========================
#3b.  Product Page Videos
3b.4 - Add 'div.productDemoVideo' HTML to Snippets/ProductThumbImage.html
    <div class="productDemoVideo" class="%%GLOBAL_ProductId%%"> </div>

3b.3 - Add <!-- Product Page Videos --> CSS
3b.4 - Add following JS to Panels/ProductDetails.html



The JavaScript/jQuery code necessary for the functionality
==========================================================

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

