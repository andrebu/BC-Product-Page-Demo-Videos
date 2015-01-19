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
			$(this).closest('.productAttributeRow').hide();
			var ProductThumb = $('.ProductThumb');
				ProductTinyImageList = $('.ProductTinyImageList ul');
			ProductThumb.append('<span id="videoDemoBtn" class=""><div class="triangle"></div></span>');
			ProductTinyImageList.append('<li id="videoDemoThumb" class="" style="height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;"><div class="ProdVideoPlayBtn"><div class="triangle"></div></div></li>');
			});    
		});

/*	Play/Stop button click triggering functionality */
	$('.ProductTinyImageList ul, #videoDemoThumb, #videoDemoBtn').on('click', 'li', function() {
        var playStopBtn = $('#videoDemoThumb, #videoDemoBtn');
        	allThumbLinks = $('.prodThumbImage, .magictoolbox-li');
            if($(this).hasClass('videoPlaying') || $(this).is(allThumbLinks)) {
 		        $(allThumbLinks).removeClass('videoPlaying');
 		        $(playStopBtn).removeClass('videoPlaying');
		        $('#productDemoVideo').hide();               
            } else if($(this).is(playStopBtn) && !$(this).hasClass('videoPlaying')) {
				/* Add video container START */
			    var productNumber = $('#productDetailsAddToCartForm').find('input[name=product_id]').attr('value'); 
			    	videoContainer = '<div id="productDemoVideo">'+
			    					'<video id="demoVideo" class="video" preload autoplay loop autobuffer muted controls width="100%" height="100%" poster="/content/videos/'+productNumber+'.jpg">'+
			                		'<source src="/content/videos/'+productNumber+'.mp4">'+
			                		'<source src="/content/videos/'+productNumber+'.ogv" type="video/ogg">'+
			                		'<p>Your browser does not support this video.  Please upgrade your browser!</p>'+
			                		'</video>'+
			                		'</div>';
				$('.ProductThumbImage').append(videoContainer);
				$('#productDemoVideo').hide();
				/* Add video container END */
				$(allThumbLinks).addClass('videoPlaying');
				$(playStopBtn).addClass('videoPlaying');
				$('#productDemoVideo').show();
				$('#productDemoVideo').css('height', $('.ProductThumbImage').height()+'px');
/*
				var video = document.getElementById('demoVideo');
				video.addEventListener('click',function(){
					video.play();
				},false);      
*/
            } else /* if($(this).is(playStopBtn) || ) || */ {
                console.log("NOTHING IS HAPPENING") 
            }
         });
     });
