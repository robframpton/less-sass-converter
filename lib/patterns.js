module.exports = [
    /* Variable operators
    * match: @[variable]
    * replace: $[variable]
    */
    {
        match: /@(?!(?:import|media|charset|font-|page|((-(moz|o|ms|webkit)-)?(keyframes|viewport))))/g,
        replace: '$'
    },
    /* Gradient mixins
    * match: #gradient > [type]
    * replace: @include gradient-[type]
    */
    {
        match: /#gradient\s*\>\s*\.([a-z]*)/g,
        replace: '@include gradient-$1'
    },
    /* General mixins
    * match: .[type]
    * replace: @include [type]
    */
    {
        match: /\.([\w-]+)(?=\()/g,
        replace: '@include $1'
    },
    /* Spin mixin
    * match: spin(
    * replace: adjust-hue(
    */
    {
        match: /spin\(/g,
        replace: 'adjust-hue('
    },
    /* TODO - Mixin constructor
    * match:
    * replace:
    */
    {
        match: /\.([\w\-]*)\s*\((.*)\)\s*\{/g,
        replace: '@mixin \1\(\2\)\n{'
    },
    /* TODO
    * match:
    * replace:
    */
    {
        match: /~"(.*)"/g,
        replace: '#{"\1"}'
    },
    /* Glyphicons path
    * match: ../img/glyphicons
    * replace: ../images/aui/glyphicons
    */
    {
        match: '../img/glyphicons',
        replace: '../images/aui/glyphicons'
    }
];