module.exports = [
    /* Variable operators
    * match: @[variable]
    * replacement: $[variable]
    */
    {
        match: /@(?!(?:import|media|charset|font-|page|{|((-(moz|o|ms|webkit)-)?(keyframes|viewport))))/g,
        replacement: '$'
    },
    /* Gradient mixins
    * match: #gradient > [type]
    * replacement: @include gradient-[type]
    */
    {
        match: /#gradient\s*\>\s*\.([a-z]*)/g,
        replacement: '@include gradient-$1'
    },
    /* General mixins
    * match: .[type]
    * replacement: @include [type]
    */
    {
        match: /\.([\w-]+)(?=\()/g,
        replacement: '@include $1'
    },
    /* Spin mixin
    * match: spin(
    * replacement: adjust-hue(
    */
    {
        match: /spin\(/g,
        replacement: 'adjust-hue('
    },
    /* TODO - Mixin constructor
    * match:
    * replacement:
    */
    {
        match: /\.([\w\-]*)\s*\((.*)\)\s*\{/g,
        replacement: '@mixin \1\(\2\)\n{'
    },
    /* String interpolation
    * match: ~"[value]"
    * replacement: #{[value]}
    */
    {
        match: /~"(.*)"/g,
        replacement: '#{"$1"}'
    },
    /* Variable Interpolation
    * match: ~"[value]"
    * replacement: #{[value]}
    */
    {
        match: /@{(.*)}/g,
        replacement: '#{$$$1}'
    },
    /* Glyphicons path
    * match: ../img/glyphicons
    * replacement: ../images/aui/glyphicons
    */
    {
        match: '../img/glyphicons',
        replacement: '../images/aui/glyphicons'
    }
];