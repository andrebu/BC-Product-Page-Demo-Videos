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

1. Add <!-- Product Page Videos --> CSS to stye.css (this step will soon be made unnecessary)
2. Add **ProductPageVideos.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
3. Add %%Panel.ProductPageVideos%% to bottom of Panels/product.html
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
![BigCommerce Product Page Demo Videos Installation Example](http://andrebulatov.com/wp-content/uploads/Screen-Shot-2015-01-19-at-6.36.16-PM.png "BigCommerce Product Page Demo Videos Installation Example")
4. Create Videos Upload Folder
  + Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/
  + When you upload videos, add an .mp4 version, as well as an .ogv version for playback on all browsers
  + Name the videos by the product ID.  The product ID can be found by ... ?


To Do
-----

1. ~~Change logic/functionality of Play/Stop button so that Play button starts video, but any link in thumbnail view stops video~~
2. ~~Add slow-motion control to the demo video~~
3. ~~Add Preview Image to <video> tag~~
4. ~~Change CSS on mobile button to show "SHOW VIDEO" and "HIDE VIDEO"~~
5. ~~Improve AJAX~~
6. ~~Integrate HTML into JS~~
7. Integrate CSS into JS


## Using

    Just install, add your video files, and it'll do the work for you!


## Other BigCommerce modules

* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


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
