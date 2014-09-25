module.exports = [
    /* Variable operators
    * match: @[variable]
    * replacement: $[variable]
    */
    {
        match: /@(?!(?:import|media|charset|font-|page|{|mixin|include|((-(moz|o|ms|webkit)-)?(keyframes|viewport))))/g,
        replacement: '$'
    },
    /* General mixin invocation
    * match: .[type]
    * replacement: @include [type]
    */
    {
        match: /\.([\w-]+)(?=\()/g,
        replacement: '@include $1'
    },
    /* Mixin constructor
    * match: .[mixin]([variables]) {
    * replacement: @mixin [mixin]([variables]) {
    */
    {
        match: /\.([\w\-]*)\s*\((.*)\)\s*\{/g,
        replacement: '@mixin $1\($2\) {'
    },
    /* Gradient mixins
    * match: #gradient > [type]
    * replacement: @include gradient-[type]
    */
    {
        match: /#gradient\s*\>\s*\.([a-z]*)/g,
        replacement: '@include gradient-$1'
    },
    /* Spin mixin
    * match: spin(
    * replacement: adjust-hue(
    */
    {
        match: /spin\(/g,
        replacement: 'adjust-hue('
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