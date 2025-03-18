# Block Registration Server Functions

A quick example of block registration... this is just enough to get it working and will need more thought.
I moved this for now to a separate file so it could be tested in a theme for building blocks in themes with
less changes. (just copy this block-init.php file in and load it)

In newer versions of WordPress 6.x? the @wordpress/create-block tool creates a dynamic block that includes
a render.php file. The block.json file will load this automatically for you as the render_callback. I believe it
is a lot cleaner and nicer to have the frontend rendering markup of a block to be stored in a separate PHP file
instead of the older method of using a render_callback function. I think it will also make it easier for designers
as there is a file they can use to provide example markup that doesn't have other PHP functions in it and behaves
like a template-part we are used to for other areas of WordPress.

WP 5.8 however does not support the automatic loading of the render.php file from the block.json entry. There might
be a way of forcing it but I couldn't find it so for now I added a render_callback function and then use output buffering
to grab the output of the render.php file for the block and have the render_callback function return it. Only lightly
tested so far, but it seems to work. If we could do something like this we could perhaps use the render.php files until we
get the 6.x version that supports them and then remove the callback and let block.json load the render file itself. In
the meantime we get a more organized render file for the frontend markup of the block in theory.

https://www.youtube.com/watch?v=SjaBjNmewPQ&t=1433s
