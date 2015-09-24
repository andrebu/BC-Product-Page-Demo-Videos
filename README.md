BigCommerce Product Page Demo Videos Plugin
===========================================

BigCommerce Product Page Demo Videos with a Play/Stop button in the thumbnail image selector section below product image.
by Andre Bulatov - iamandrebulatov - http://andrebulatov.com

***Important Note
-----------------
In Snippets/ProductTinyImage.html, the code for the TinyThumbImage list below the product image on Product pages, must be altered so that a click on an image registers as "%%GLOBAL_TinyImageOverJavascript%%" instead of the BigCommerce default of 'onclick="%%GLOBAL_TinyImageClickJavascript%%"' which opens a lightbox onClick instead.
```HTML
<!-- Original BigCommerce thumbnail functionality -->
<li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" onmouseover="%%GLOBAL_TinyImageOverJavascript%%" onclick="%%GLOBAL_TinyImageClickJavascript%%" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%">
```

To turn off the lightbox onClick logic and to make the thumbnails change on click instead of hover, change the code to be as follows:
```HTML
<!-- Updated so that a "click" changes the image and thumbnail -->
<li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" onclick="%%GLOBAL_TinyImageOverJavascript%%" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%">
```  


## Installation instructions

> These are the latest instructions and are up to date.  I will update them as the widget is improved.

1. Add **ProductPageVideos.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Add **%%Panel.ProductPageVideos%%** reference to bottom of Panels/product.html
  + Example:
```HTML
        </div>

        %%Panel.ProductPageBrandDescription%%        
<!-- Put panel as it is here, right before the closing body tag -->
        %%Panel.ProductPageVideos%%        
<!-- Put panel as it is here, right before the closing body tag -->
        
    </body>
</html>
```
![BigCommerce Product Page Demo Videos Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Product-Page-Demo-Videos/master/ProductPageVideosInstallation-Screen%20Shot%202015-01-19%20at%206.36.16%20PM.png "BigCommerce Product Page Demo Videos Installation Example")
3. Create Videos Upload Folder
  + Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/
  + When you upload videos, add an .mp4 version, as well as an .ogv version for playback on all browsers
  + Name the videos by the product ID.  The product ID can be found by ... ?  

4. If integrated with MagiScroll, make sure to add `#videoDemoThumb` list item to `Panels/ProductDetails.html`, like this:
```html
            <div class="ProductThumb" style="%%GLOBAL_HideProductThumb%%">
                %%GLOBAL_LightBoxImageJavascript%%
                %%SNIPPET_ProductThumbImage%%
                <div class="Loader" style="display:none;"><img src="%%GLOBAL_IMG_PATH%%/loader.png" /></div>
                
                <div class="ProductTinyImageList">
                    <!--<ul>-->
                    <ul class="MagicScroll" data-options="arrows:outside;scrollOnWheel:false;items:[[200,2],[300,3],[900,6]]">
                        %%SNIPPET_ProductTinyImages%%
<!-- LIST ITEM IS HERE -->
<!-- LIST ITEM IS HERE -->
<!-- LIST ITEM IS HERE -->
                        <li id="videoDemoThumb" style="display:none;height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;"><div class="ProdVideoPlayBtn"><div class="triangle"></div></div></li>
<!-- LIST ITEM IS HERE -->
<!-- LIST ITEM IS HERE -->
<!-- LIST ITEM IS HERE -->
                    </ul>
                </div>
                
                <div style="%%GLOBAL_HideMorePicturesLink%%" class="SeeMorePicturesLink">

```



## Using

    Just install, add your video files, and it'll do the work for you!


## Other BigCommerce modules

* [BigCommerce Carousel Slider Slide Show Custom](https://github.com/iamandrebulatov/BC-Carousel-Slider-Slide-Show-Custom)
* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Product Page Dynamic Product Type Descriptions](https://github.com/iamandrebulatov/BC-Product-Page-Dynamic-Product-Type-Descriptions)
* [BigCommerce Product Page Image Zoom](https://github.com/iamandrebulatov/BC-Product-Page-Image-Zoom)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)
* [BigCommerce Category Page Staff Picks Selector](https://github.com/iamandrebulatov/BC-Staff-Picks-Selector)
* [BigCommerce Preview On MouseOver](https://github.com/iamandrebulatov/BC-Preview-On-MouseOver)
* [BigCommerce Shipping Options Description](https://github.com/iamandrebulatov/BC-Shipping-Options-Descriptions)
* [BigCommerce Welcoming Age Gate](https://github.com/iamandrebulatov/BC-Welcoming-Age-Gate)
* [BigCommerce 360 Product View](https://github.com/iamandrebulatov/BC-360-Product-View)
* [BigCommerce ThumbScroll](https://github.com/iamandrebulatov/BC-ThumbScroll)



## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")  


##To Do

1. ~~Change logic/functionality of Play/Stop button so that Play button starts video, but any link in thumbnail view stops video~~
2. ~~Add slow-motion control to the demo video~~
3. ~~Add Preview Image to <video> tag~~
4. ~~Change CSS on mobile button to show "SHOW VIDEO" and "HIDE VIDEO"~~
5. ~~Improve AJAX~~
6. ~~Integrate HTML into JS~~
7. ~~Integrate CSS into JS~~
8. Write post about plugin
9. Appify



##Resources

###On HTML5 <video> tag for mobile (iOS and Android in particular)
1.  On using javaScript play() to make it work on Android - http://stackoverflow.com/questions/1711078/html5-video-element-on-android
2.  Similar to above #1. above. https://code.google.com/p/chromium/issues/detail?id=159336
3.  On how autoplay does not work on Android Chrome - https://code.google.com/p/chromium/issues/detail?id=159336
4.  Media formats supported by the HTML audio and video elements - https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats - mozilla.org
5.  Creating a cross-browser video player - https://developer.mozilla.org/en-US/Apps/Build/Audio_and_video_delivery/cross_browser_video_player - mozilla.org
6.  A solution proposed for iOS to fix so that playing video does not enter full screen mode but rather plays inline (in the end, this proposed code does not work reliably, or at all) - http://stackoverflow.com/questions/19521667/disable-fullscreen-iphone-video
7.  Similar to #6 above but for Android.  Suggests using custom JS for autoplay function and also some <video> tag markup standards that should allow video to play on ANdroid along iwth other browsers like Firefox and Safari. - http://stackoverflow.com/questions/1711078/html5-video-element-on-android
8.  Similar to #6 and #7 above as in this thread, the ttempt was to make videos play inline rather than be forced into fullscreen mode.  The main suggestion is to use "webkit-playinline," but as elegant as this soltion is, it does not work. - http://stackoverflow.com/questions/1711078/html5-video-element-on-android




## License

The MIT License (MIT)

Copyright (c) 2014 Andre Bulatov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
