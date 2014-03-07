# Votum embedResponsive.js 1.0

### A little plain javascript plugin which makes your embedded content (iframe, object, ...) usable for responsive websites in a flexible way. The css and markup basics are taken from an article at smashingmagazine.com.

## Features
- supports every type of embedded content, like iframe, object, video, ...
- add any types of your choice
- exclude default supportet types
- set a maximum width, good for not oversizing small content
- take the original width as maximum
- set special div container which include the embedded content (default: <body>)

## DEMO
- http://demo.dev.votum.local/responsive-embedded-content/

## Getting Started
#### How to use
- Include embedResponsive.js file in head section of your website

##### EXAMPLE call plugin with default options (after your content or in ready dom)

    <script type="text/javascript">
        embedItResponsive({
            types: ['iframe', 'object', 'video', 'embed'],
            excludeTypes: false,
            divContainer: 'body',
            maxWidth: false
        });
    </script>

##### Options description

- types: ['iframe', 'object', 'video', 'embed']: types you need to make responsive, here you can add your own types you need
- excludeTypes: false: default false, if you want to exclude some types which are by default in, just add them into an array, for example you do not want to make iframe and embed responsive just add: ['iframe', 'embed']
- divContainer: a special div container which includes your embedded code, so only the content inside this div will be responsive. Default is the whole body
- maxWidth: 1. give a value in pixels for the maximum width which your content should have, e.g. '800px', 2. set maxWidth to true, so the embedded content will have its native width

---- Hint: With the divContainer and maxWidth option you can define different behaviour for embedded content which is on the same site in different container. Just call the plugin twice or more with different options.

## Version & Update  notes
#### 07. March 2014
- v1.0

## Further notes
Developed by [Ricardo Hildebrand] at [Votum](http://www.votum.de/) in Berlin, Germany.