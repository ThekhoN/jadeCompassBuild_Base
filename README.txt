INSTRUCTIONS:
*************

install gulp install at local: $ npm install --save-dev gulp

gulp replace REQUIRED: $ npm install --save-dev gulp-replace

//check gulp file further

//run gulp to create deploy ready version of index.html with embedded compressed css to ensure consistent development environment * scss *

//gulp only does this for this project - create another project for minimizing and compressing resources + optimizing images and get deployment ready.
*********using Atom IDE************
install jade
install jade-automcompile (include code compilation settings in //top)
[jade folder] has jade files
jade files are compiled to html in root
[git compilation settings index.jade to index.html(output) and local variables]


JS Project Structure & Use:
***************************
app.js is the main js file
use modular pattern for code design and put all of them in js/modules


PRODUCTION READY:
*****************
Browserify - minifies the final app.js into bundle_min.js
so the final index.html(after having run gulp-replace to inline the css) will use the production ready bundle_min.js
