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
