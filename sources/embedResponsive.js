/**
 * embedResponsive.js 1.0
 * Plain js plugin for making embedded content responsive
 *
 * @author    Ricardo Hildebrand <ricardo.hildebrand@votum.de>
 * @copyright Copyright (c) 2014 Votum media GmbH
 *
 *
 */

function embedItResponsive( userOptions ) {

  /* default options */
  var options = {
    types: ['iframe', 'object', 'video', 'embed'],
    excludeTypes: false,
    divContainer: 'body',
    maxWidth: false
  };

  // merge default and userOptions
  var mergeOptions = function( options, userOptions ) {
    for( var option in userOptions )
      options[option] = userOptions[option];
    return options;
  };
  mergeOptions( options, userOptions );

  /* check for excluded types and remove from default types */
  if( options.excludeTypes != false ) {
    for( var i = 0; i < options.excludeTypes.length; i++ ) {
      for( var j = 0; j < options.types.length; j++ ) {
        if( options.types[j] === options.excludeTypes[i] ) {
          options.types.splice( i, 1 );
        }
      }
    }
  }

  options.types.forEach( function( type ) {
    /* get embedded elements */
    var embeddedTypes = document.querySelectorAll( options.divContainer + ' ' + type );
    for( var i = 0; i < embeddedTypes.length; i++ ) {

      /* check for embed tag in object and do not work with that*/
      if( embeddedTypes[i].parentNode.nodeName != 'OBJECT' ) {

        /*set CSS to each type*/
        embeddedTypes[i].style.position = 'absolute';
        embeddedTypes[i].style.top = '0';
        embeddedTypes[i].style.left = '0';
        embeddedTypes[i].style.width = '100%';
        embeddedTypes[i].style.height = '100%';

        /*calculate padding-bottom value for each types wrapper*/
        var padBottom = (embeddedTypes[i].height / embeddedTypes[i].width) * 100;

        /*create wrapper for each type*/
        var responsiveContainer = document.createElement( 'div' );
        responsiveContainer.className = 'responsive-container';
        responsiveContainer.style.height = '0';
        responsiveContainer.style.position = 'relative';
        responsiveContainer.style.overflow = 'hidden';
        responsiveContainer.style.paddingBottom = padBottom + '%';

        /*wrap new responsiveContainer around elements*/
        var typeParent = embeddedTypes[i].parentNode;
        typeParent.insertBefore( responsiveContainer, embeddedTypes[i] );
        responsiveContainer.appendChild( embeddedTypes[i] );

        /* create and  wrap new width wrapper around elements if max width is given */
        if( options.maxWidth != false ) {
          var maxWidthContainer = document.createElement( 'div' );
          maxWidthContainer.className = 'width-container';

          if( options.maxWidth === true ) {
            maxWidthContainer.style.maxWidth = embeddedTypes[i].width + 'px';
          } else {
            maxWidthContainer.style.maxWidth = options.maxWidth;
          }

          var responsiveContainerParent = responsiveContainer.parentNode;
          responsiveContainerParent.insertBefore( maxWidthContainer, responsiveContainer );
          maxWidthContainer.appendChild( responsiveContainer );
        }

      }else{

        /* set styles also to embed code inside of OBJECT */
        embeddedTypes[i].style.position = 'absolute';
        embeddedTypes[i].style.top = '0';
        embeddedTypes[i].style.left = '0';
        embeddedTypes[i].style.width = '100%';
        embeddedTypes[i].style.height = '100%';

      }

    }
  } );

}


