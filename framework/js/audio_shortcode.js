(function ($) {
	
	'use strict';

	// add mime-type aliases to MediaElement plugin support
	mejs.plugins.silverlight[0].types.push('audio/x-ms-wma');

	$(function () {
		var settings = {};

		if ( $( document.body ).hasClass( 'mce-content-body' ) ) {
			return;
		}

		if ( typeof _wpmejsSettings !== 'undefined' ) {
			settings.pluginPath = _wpmejsSettings.pluginPath;
		}

		settings.success = function (mejs) {
			var autoplay = mejs.attributes.autoplay && 'false' !== mejs.attributes.autoplay;
			if ( 'flash' === mejs.pluginType && autoplay ) {
				mejs.addEventListener( 'canplay', function () {
					mejs.play();
				}, false );
			}
		};
		
		$( '.wp-audio-shortcode:not(.mejs-audio)' ).mediaelementplayer( settings );
	});
	
}(jQuery));