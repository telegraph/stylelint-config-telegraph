module.exports = {
  'plugins': [
    'stylelint-order',
  ],
  'rules': {
    // Specify the order of content within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      'rules',
    ],

    // Specify the order of properties within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    'order/properties-order': [
      [
        // NOTE: SVG properties have been merged into the CSS Module lists
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
        
        // CSS Positioning
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'float',
        'clear',
        'z-index',
        
        // CSS Box Model
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'overflow',
        'overflow-x',
        'overflow-y',
        'visibility',
        
        // Layout
        'display',
        
        // CSS Grid Layout
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
        // Parent (Grid Container)
        'grid',
        'grid-template',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-gap',
        'grid-row-gap',
        'grid-column-gap',
        // Child (Grid Items)
        'grid-area',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        
        // CSS Flexible Box Layout
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
        // Parent (Flex Container)
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        // Child (Flex Items)
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        
        // Shared between CSS Flexible Box Layout / CSS Grid Layout
        // Parent (Grid Container)
        'justify-content',
        'align-content',
        'align-items',
        // Child (Grid Items)
        'justify-self',
        'align-self',
        
        // CSS Columns
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns
        'columns',
        'column-count',
        'column-width',
        'column-gap',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',
        'column-fill',
        'column-span',
        'break-after',
        'break-before',
        'break-inside',
        
        // CSS Table
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Table
        'table-layout',
        'border-spacing',
        'border-collapse',
        'empty-cells',
        'vertical-align',
        'caption-side',
        
        // CSS Counters
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters
        'counter-increment',
        'counter-reset',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        
        // CSS Masks
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Masks
        'clip',
        'clip-path',
        'clip-rule',
        'mask',
        'mask-clip',
        'mask-composite',
        'mask-image',
        'mask-mode',
        'mask-origin',
        'mask-position',
        'mask-repeat',
        'mask-size',
        'mask-type',
        
        // CSS Generated Content
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Generated_Content
        'content',
        'quotes',
        
        // CSS Fonts
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts
        'font',
        'font-style',
        'font-variant',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-weight',
        'font-stretch',
        'font-size',
        'font-family',
        'font-feature-settings',
        'font-kerning',
        'line-height',
        'kerning',
        
        // CSS Writing Modes
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Writing_Modes
        'direction',
        'writing-mode',
        'text-combine-upright',
        'text-orientation',
        'unicode-bidi',
        
        // CSS Text & Text Decoration (+SVG)
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text_Decoration
        'alignment-baseline',
        'baseline-shift',
        'dominant-baseline',
        'glyph-orientation-horizontal',
        'glyph-orientation-vertical',
        'hyphens',
        'letter-spacing',
        'line-break',
        'overflow-wrap',
        'tab-size',
        'text-align',
        'text-align-last',
        'text-anchor',
        'text-decoration',
        'text-decoration-line',
        'text-decoration-style',
        'text-decoration-color',
        'text-emphasis',
        'text-emphasis-style',
        'text-emphasis-color',
        'text-emphasis-position',
        'text-indent',
        'text-overflow',
        'text-rendering',
        'text-shadow',
        'text-size-adjust',
        'text-transform',
        'white-space',
        'word-break',
        'word-spacing',
        'word-wrap',
        
        // CSS Color (+SVG)
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors
        'color',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',
        'flood-color',
        'flood-opacity',
        'lighting-color',
        'stop-color',
        'stop-opacity',
        'opacity',
        
        // CSS Backgrounds and Borders
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders
        'background',
        'background-image',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-repeat',
        'background-origin',
        'background-clip',
        'background-attachment',
        'background-color',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'box-shadow',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
        // SVG specific
        'fill',
        'fill-opacity',
        'fill-rule',
        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'marker-start',
        'marker-end',
        'marker-mid',
        'shape-rendering',
        
        // CSS Images
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images
        'image-orientation',
        'image-rendering',
        'object-fit',
        'object-position',
        
        // CSS Filter Effects
        'backdrop-filter',
        'filter',
        
        // CSS User Interface
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_User_Interface
        'caret-color',
        'cursor',
        'resize',
        
        // CSS Pointer Events
        'pointer-events',
        'touch-action',
        
        // CSS Transforms
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms
        'perspective',
        'perspective-origin',
        'transform',
        'transform-box',
        'transform-origin',
        'transform-style',
        'backface-visibility',
        
        // CSS Transitions
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',
        
        // CSS Animations
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-direction',
        'animation-iteration-count',
        'animation-fill-mode',
        'animation-play-state',
      ],
      {
        'unspecified': 'bottom',
      }
    ],
  },
};