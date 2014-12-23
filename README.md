BigCommerce Product Page Demo Videos Plugin
===========================================

BigCommerce Product Page Demo Videos with a Play/Stop button in the thumbnail image selector section below product image.
by Andre Bulatov - iamandrebulatov - http://andrebulatov.com

***Important Note
-----------------
In Snippets/ProductTinyImage.html, the code for the TinyThumbImage list below th eproduct image on Product pages, must be altered so that a click on an image registers as "%%GLOBAL_TinyImageOverJavascript%%" instead of the BigCommerce default of 'onclick="%%GLOBAL_TinyImageClickJavascript%%"' which opens a lightbox onClick instead.
```HTML
<!-- Original BigCommerce thumbnail functionality -->
<li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" onmouseover="%%GLOBAL_TinyImageOverJavascript%%" onclick="%%GLOBAL_TinyImageClickJavascript%%" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%">
```

To turn off the lightbox on click logic and to make the thumbnails change on lcik instead of hover:
```HTML
<!-- Updated sot hat click changes the image and thumbnail -->
<li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" onclick="%%GLOBAL_TinyImageOverJavascript%%" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%">
<!-- onclick="%%GLOBAL_TinyImageClickJavascript%%" onmouseover="%%GLOBAL_TinyImageOverJavascript%%" -->
```  


Installation instructions
-------------------------
###Index of Installation instructions
1. Add <!-- Product Page Videos --> CSS to stye.css
2. Add ProductPageVideos.html Panel to WebDAV/dav/template/Panels
3. Add %%Panel.ProductPageVideos%% to bottom of Snippets/ProductAddToCart.html
4. Add HTML 'div.productDemoVideo' to bottom Snippets/ProductThumbImage.html

```HTML
    <div class="productDemoVideo" class="%%GLOBAL_ProductId%%"></div>
```

5. Create Option "Video", checkbox content "HasDemoVideo" on BigCommerce admin backend
6. Create Videos folder in WebDAV/dav/content/Videos
7. Add JS to hide "Video:HasDemoVideo" option 
```HTML
<script language="javascript" type="text/javascript">
            $('.productAttributeList').find("span:contains('HasDemoVideo')").closest('.productAttributeRow').hide();
</script>
```
or make sure "$(this).closest('.productAttributeRow').hide();" is present in the ECF checker.

8. Add 'class="prodThumbImage"' to <li> tag in Snippets/ProductTinyImage.html.  Example:

> <li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" onclick="%%GLOBAL_TinyImageOverJavascript%%" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%" class="prodThumbImage">



###Details of Installation instructions
1. Add <!-- Product Page Videos --> [CSS](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos/blob/master/ProductPageVideosCSS.css)


6. Create Videos Upload Folder
- Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/


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


To Do
-----

1. ~~Change logic/functionality of Play/Stop button so that Play button starts video, but any link in thumbnail view stops video~~
2. Add slow-motion control to the demo video
3. Add Preview Image to <video> tag
4. Change CSS on mobile button to show "SHOW VIDEO" and "HIDE VIDEO"
