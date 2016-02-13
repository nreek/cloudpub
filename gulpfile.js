var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass(['style.scss'], 'public/src/css/style.css',false, { indentedSyntax: true });
    mix.sass(['welcome.scss'], 'public/src/css/welcome.css',false, { indentedSyntax: true });
   
    mix.styles([
        '../plugins/fontawesome/css/font-awesome.min.css',
        '../plugins/dropzone/dist/dropzone.css',
        '../plugins/dropzone/dist/basic.css'
        ],'public/src/css/plugins.css');

    mix.scripts([
        '../plugins/jquery/dist/jquery.min.js',
        '../plugins/dropzone/dist/min/dropzone.min.js',
        '../plugins/foundation/js/foundation.min.js',
        '../plugins/moment/moment.js',
        '../plugins/moment/locale/pt-br.js',
        '../plugins/jquery-maskedinput/dist/jquery.maskedinput.min.js',
        '../plugins/vue/dist/vue.js'
        ],'public/src/js/plugins.js');

    });
