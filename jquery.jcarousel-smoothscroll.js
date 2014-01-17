/*! jcarousel-smoothscroll 1.0.0 | Copyright 2014 Andrew Duthie | MIT License */
(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselSmoothScroll', {
        _init: function () {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);

            this.onAnimate = $.proxy(this._calculate, this);
        },
        _create: function() {
            this.carousel().on('jcarousel:animate', this.onAnimate);
            this.start();
        },
        _destroy: function() {
            this.carousel().off('jcarousel:destroy', this.onDestroy);
        },
        start: function() {
            var carousel = this.carousel().data('jcarousel');
            this.originalAnimation = carousel.options('animation');
            this.maxWidth = this._getItemMaxWidth();
        },
        _calculate: function(e, carousel) {
            var carousel = this.carousel().data('jcarousel'),
                // Find currently animating element
                current = carousel.target().prev(),
                // Calculate width as a proportion of widest list item
                proportion = current.width() / this.maxWidth,
                // Normalize duration to millisecond value
                duration = this._getDurationValue(this.originalAnimation),
                // Calculate new duration scaled by width proportion
                // i.e. A less-wide element should animation slower
                newDuration = duration * proportion,
                newAnimation;

            if (typeof this.originalAnimation === 'object') {
                newAnimation = $.extend({}, this.originalAnimation, {
                    duration: newDuration
                });
            } else {
                newAnimation = newDuration;
            }

            carousel.options('animation', newAnimation);
        },
        _getDurationValue: function(duration) {
            switch(typeof duration) {
                case 'string':
                    // Extract from jQuery
                    return $.fx.speeds[duration];
                case 'number':
                    // Return raw
                    return duration;
                case 'object':
                    // Recurse into object to retrieve duration
                    return this._getDurationValue(duration.duration);
                default:
                    return 400;
            }
        },
        _getItemMaxWidth: function() {
            var carousel = this.carousel().data('jcarousel');
            return carousel.items().width();
        }
    });
}(jQuery));