# jCarousel SmoothScroll

SmoothScroll is a jCarousel plugin that forces a carousel to animate at a constant pace, regardless of varying item widths. Without SmoothScroll, a carousel which continously animates may speed up or slow down depending on the width of the list item being animated.

## Installation

You must have [jCarousel](https://github.com/jsor/jcarousel) installed prior to loading the SmoothScroll plugin.

Install either by downloading _jquery.jcarousel-smoothscroll.js_ to your project directory or, if you have [Bower](http://bower.io) installed, simply enter `bower install jcarousel-smoothscroll` into your command line to install.

## Usage

The following is an ideal SmoothScroll configuration. Alter animation settings as necessary.

```javascript
$('.jcarousel').jcarousel({
    wrap: 'circular',
    animation: 15000
  })
  .jcarouselSmoothScroll()
  .jcarouselAutoscroll({
    target: '+=1',
    interval: 0
  });
```

## License

Copyright 2014 Andrew Duthie.

Released freely under the MIT license (refer to LICENSE.txt)