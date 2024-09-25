const mix = require('laravel-mix');
const webpack = require('webpack');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.js('resources/js/app.js', 'public/js').version();
 mix.sass('resources/sass/app.scss', 'public/css').sourceMaps(); 
 
//mix.sass('public/css/main-2.scss', 'public/css', { outputStyle: 'compressed', sourceMap: true, outFile: './map', omitSourceMapUrl: true })
 mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');
mix.webpackConfig({
        // devtool: 'source-map',
        plugins: [
          new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),

        ],
        output:{
            chunkFilename: 'js/[name].bundle.[contenthash].js',
            publicPath: process.env.APP_BASE
        },
      });

        if(!mix.inProduction()) {
           mix.webpackConfig({ devtool: 'inline-source-map'}).sourceMaps(true, 'source-map');
        }

  mix.options({
  processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

/*  if ( ! mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}*/

/*    var LiveReloadPlugin = require('webpack-livereload-plugin');
mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});*/
