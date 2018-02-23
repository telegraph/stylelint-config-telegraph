module.exports = {
  rules: {
    // Specify a blacklist of disallowed at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-blacklist/
    'at-rule-blacklist': ['extend'],
    
    // Disallow vendor prefixes for at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
    'at-rule-no-vendor-prefix': true,
    
    // Disallow empty blocks.
    // https://stylelint.io/user-guide/rules/block-no-empty/
    'block-no-empty': true,
    
    // Require short notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length/
    'color-hex-length': 'short',
    
    // Disallow invalid hex colors.
    // https://stylelint.io/user-guide/rules/color-no-invalid-hex/
    'color-no-invalid-hex': true,
    
    // Disallow named colors.
    // https://stylelint.io/user-guide/rules/color-named/
    'color-named': 'never',
    
    // Disallow empty comments.
    // https://stylelint.io/user-guide/rules/comment-no-empty/
    'comment-no-empty': true,
  
    // Disallow duplicate properties within declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
    'declaration-block-no-duplicate-properties': true,
    
    // Disallow longhand properties that can be combined into one shorthand property.
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
    'declaration-block-no-redundant-longhand-properties': true,
    
    // Disallow shorthand properties that override related longhand properties.
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
    'declaration-block-no-shorthand-property-overrides': true,
    
    // Disallow !important within declarations.
    // https://stylelint.io/user-guide/rules/declaration-no-important/
    'declaration-no-important': true,
    
    // Specify a blacklist of disallowed property and value pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/
    'declaration-property-value-blacklist': {
      '/^transition/': [
        '/all/'
      ],
      '/^background/': [
        'http:',
        'https:'
      ],
      '/^border/': [
        'none'
      ],
      '/.+/': [
        'initial'
      ]
    },
    
    // Disallow duplicate font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
    'font-family-no-duplicate-names': true,
    
    // Disallow direction values in linear-gradient() calls that are not valid 
    // according to the standard syntax.
    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
    'function-linear-gradient-no-nonstandard-direction': true,
    
    // Disallow !important within keyframe declarations.
    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
    'keyframe-declaration-no-important': true,
    
    // Disallow units for zero lengths.
    // https://stylelint.io/user-guide/rules/length-zero-no-unit/
    'length-zero-no-unit': true,
    
    // Limit the allowed nesting depth.
    // https://stylelint.io/user-guide/rules/max-nesting-depth/
    'max-nesting-depth': 3,
    
    // Disallow vendor prefixes for media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
    'media-feature-name-no-vendor-prefix': true,
    
    // Disallow duplicate selectors within a stylesheet.
    // https://stylelint.io/user-guide/rules/no-duplicate-selectors/
    'no-duplicate-selectors': true,
   
    // Require a leading zero for fractional numbers less than 1.
    // https://stylelint.io/user-guide/rules/number-leading-zero/
    'number-leading-zero': 'always',
    
    // Limit the number of decimal places allowed in numbers.
    // https://stylelint.io/user-guide/rules/number-max-precision/
    'number-max-precision': 4,
    
    // Disallow trailing zeros in numbers.
    // https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
    'number-no-trailing-zeros': true,
    
    // Disallow unknown properties.
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    'property-no-unknown': true,
    
    // Disallow vendor prefixes for properties.
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
    'property-no-vendor-prefix': true,
    
    // Limit the number of compound selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
    'selector-max-compound-selectors': 3,
    
    // Limit the specificity of selectors.
    // https://stylelint.io/user-guide/rules/selector-max-specificity/
    'selector-max-specificity': '0,4,0',
    
    // Disallow id selectors.
    // https://stylelint.io/user-guide/rules/selector-no-attribute/
    'selector-no-id': true,
    
    // Disallow qualifying a selector by type.
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
    'selector-no-qualifying-type': true,
    
    // Disallow type selectors.
    // https://stylelint.io/user-guide/rules/selector-no-type/
    'selector-no-type': true,
    
    // Disallow the universal selector.
    // https://stylelint.io/user-guide/rules/selector-no-universal/
    'selector-no-universal': true,
    
    // Disallow vendor prefixes for selectors.
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    'selector-no-vendor-prefix': true,
    
    // Disallow unknown pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    'selector-pseudo-class-no-unknown': true,
    
    // Disallow unknown pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
    'selector-pseudo-element-no-unknown': true,
    
    // Disallow redundant values in shorthand properties.
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
    'shorthand-property-no-redundant-values': true,
    
    // Disallow unknown units.
    // https://stylelint.io/user-guide/rules/unit-no-unknown/
    'unit-no-unknown': true,
    
    // Disallow vendor prefixes for values.
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
    'value-no-vendor-prefix': true,
  },
};