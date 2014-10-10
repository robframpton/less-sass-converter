Bootstrap Less to Sass Converter
===================
For the use of helping convert [Bootstrap](http://getbootstrap.com/) css themes written in [Less](http://lesscss.org/) to [Sass](http://sass-lang.com/).

## Dependencies

Install [NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

## Getting started

Once you have NodeJS installed, you just need to:

1. Clone the project: `git clone git@github.com:Robert-Frampton/less-sass-converter.git`

2. Then navigate to the project in your terminal/command prompt: `cd less-sass-converter`

3. Install local dependencies with: `[sudo] npm install`

4. Drop some .less files into the `convert` directory

5. From the project's root directory run: `gulp convert`

6. Find the converted .scss files in the `build` directory

## Test Compiling

You can compile your files with Bootstrap source code to ensure it's validity

1. Navigate to the project in your terminal/command prompt: `cd less-sass-converter`

2. Run: `gulp compile-sass` and select which version of Bootstrap your theme is intended for

3. Sass syntax errors will print with file name and line number, if compiling is successful you will find the compiled code in `build/bootstrap.css`

## Renaming for Liferay Portal

There is a specific naming convention for use with Liferay Portal themes.

1. Run: `gulp rename` from project root directory to correctly rename files for use with Portal

## Everything Together

If you want to run all commands at once, simply run: `gulp build`