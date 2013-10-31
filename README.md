## static-starter
**A Grunt based boilerplate for rapid static prototyping using handlebars and compass**

When following the principles of [SMACSS](http://smacss.org) or [OOCSS](http://oocss.org) or any other style that idealizes a modular CSS approach, it is a good practice to build and test modules out of context, before stitching them together in an app or page. 

To make this process painless and fast, I use this boilerplate as a starting point. I used Jekyll before, which is great, but it does far too much for my very basic needs, it is hard to extend for a non-ruby-ist, which i am, and I'm not the biggest fan of Liquid.

So I looked for an (preferably node based) alternative and stumbled about this little [grunt-plugin](https://github.com/patrickkettner/Grunt-compile-handlebars) which uses [handlebars](handlebarsjs.com) and does all I need. 

I added a few more Grunt plugins, to make the compile process feel more Jekyll like - since that's what I'm used to - and here we go.

#### Install
`gem install compass --pre` *you'll need compass obviously*  
`npm install`  
`grunt`

It will then open a local server in Chrome Canary (or in your default browser if you don't use Canary, but you should), with a little test page.

#### Notes
I included the [pureCSS](http://purecss.io) framework, because it's light, responsive and great - the first CSS framework that convinced me of using one, at least sometimes. 

This is NOT supposed to be any kind of release-able thing, so while it works great - most of the time - there might be some moments where you want to adjust the Gruntfile.js. If you came up with a nice addition or find something that goes horribly wrong, please let me know. There's also no 'system logic', like nothing counts the pages for you, or something. It is all controlled via .json files, and I strongly recommend to leave any kind of content there.

Since this is not intended for production (yet), I didn't include a separate build process (yet), but I might at some point in the future.

Check out [grunt-compile-handlebars](https://github.com/patrickkettner/grunt-compile-handlebars) and of course [handlebars](handlebarsjs.com) to learn more about what's possible, and also of course because that's the heart of the whole thing.






