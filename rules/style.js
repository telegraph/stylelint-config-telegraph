module.exports = {
  rules: {
    // Require an empty line before at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
    'at-rule-empty-line-before': [
      'always',
      {
        'except': [
          'after-same-name',
          'first-nested'
        ],
        'ignore': [
          'after-comment',
        ],
        'ignoreAtRules': [
          'else',
        ],
      },
    ],
    
    // Require lowercase for at-rules names.
    // https://stylelint.io/user-guide/rules/at-rule-name-case/
    'at-rule-name-case': 'lower',
    
    // Require a single space after at-rule names.
    // https://stylelint.io/user-guide/rules/at-rule-name-space-after/
    'at-rule-name-space-after': 'always-single-line',
    
    // Require a newline after the semicolon of at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
    'at-rule-semicolon-newline-after': 'always',
    
    // Disallow whitespace before the semicolons at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/
    'at-rule-semicolon-space-before': 'never',
  
    // Disallow an empty line before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
    'block-closing-brace-empty-line-before': 'never',
    
    // Require a newline after the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
    'block-closing-brace-newline-after': 'always',
    
    // Require a newline before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
    'block-closing-brace-newline-before': 'always-multi-line',
    
    // Require a single space before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
    'block-closing-brace-space-before': 'always-single-line',
    
    // Require a newline after the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
    'block-opening-brace-newline-after': 'always',
    
    // Require a single space after the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
    'block-opening-brace-space-after': 'always-single-line',
    
    // Require a single space before the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
    'block-opening-brace-space-before': 'always',

    // Require lowercase for hex colors.	
    // https://stylelint.io/user-guide/rules/color-hex-case/
    'color-hex-case': 'lower',
    
    // There must always be an empty line before comments, except for the first 
    // nested children of their parent node.
    // https://stylelint.io/user-guide/rules/comment-empty-line-before/
    'comment-empty-line-before': [
      'always',
      {
        'except': ['first-nested'],
        'ignore': ['stylelint-commands'],
      }
    ],
    
    // There must always be whitespace inside the markers.
    // https://stylelint.io/user-guide/rules/comment-whitespace-inside/
    'comment-whitespace-inside': 'always',
    
    // Require an empty line before custom properties.
    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
    'custom-property-empty-line-before': [
      'always', 
      {
        'except': [
          'after-custom-property',
          'first-nested',
        ],
        'ignore': ['after-comment'],
      }
    ],
    
    // Disallow whitespace after the bang of declarations.
    // https://stylelint.io/user-guide/rules/declaration-bang-space-after/
    'declaration-bang-space-after': 'never',
    
    // Require a single space before the bang of declarations.
    // https://stylelint.io/user-guide/rules/declaration-bang-space-before/
    'declaration-bang-space-before': 'always',
    
    // Require a newline after the semicolons of declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
    'declaration-block-semicolon-newline-after': 'always',
    
    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
    'declaration-block-semicolon-space-before': 'never',
    
    // Limit the number of declaration within a single line declaration block.
    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
    'declaration-block-single-line-max-declarations': 1,
    
    // Require a trailing semicolon within declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
    'declaration-block-trailing-semicolon': 'always',
    
    // Require a newline after the colon of declarations.
    // https://stylelint.io/user-guide/rules/declaration-colon-newline-after/
    'declaration-colon-newline-after': 'always-multi-line',
    
    // Require a single space after the colon of declarations.
    // https://stylelint.io/user-guide/rules/declaration-colon-space-after/
    'declaration-colon-space-after': 'always-single-line',
    
    // Disallow whitespace before the colon of declarations.
    // https://stylelint.io/user-guide/rules/declaration-colon-space-before/
    'declaration-colon-space-before': 'never',
    
    // Require an empty line before declarations.
    // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
    'declaration-empty-line-before': [
      'always', 
      {
        'except': [
          'after-comment',
          'after-declaration',
          'first-nested',
        ],
        'ignore': ['after-comment'],
      }
    ],
    
    // Quotation marks should be used around font family names.
    // https://stylelint.io/user-guide/rules/font-family-name-quotes/
    'font-family-name-quotes': 'always-where-recommended',
    
    // Disallow an unspaced operator within calc functions.
    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
    'function-calc-no-unspaced-operator': true,
    
    // Require a newline after the commas of functions.
    // https://stylelint.io/user-guide/rules/function-comma-newline-after/
    'function-comma-newline-after': 'always-multi-line',
    
    // Require a single space after the commas of functions.
    // https://stylelint.io/user-guide/rules/function-comma-space-after/
    'function-comma-space-after': 'always-single-line',
    
    // Disallow whitespace before the commas of functions.
    // https://stylelint.io/user-guide/rules/function-comma-space-before/
    'function-comma-space-before': 'never',
    
    // Limit the number of adjacent empty lines within functions.
    // https://stylelint.io/user-guide/rules/function-max-empty-lines/
    'function-max-empty-lines': 0,
    
    // Require lowercase for function names.
    // https://stylelint.io/user-guide/rules/function-name-case/
    'function-name-case': 'lower',
    
    // Require whitespace on the inside of the parentheses of functions.
    // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
    'function-parentheses-newline-inside': 'always-multi-line',
    
    // Disallow whitespace on the inside of the parentheses of functions.
    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
    'function-parentheses-space-inside': 'never-single-line',
    
    // Require quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes/
    'function-url-quotes': 'always',
    
    // Require whitespace after functions.
    // https://stylelint.io/user-guide/rules/function-whitespace-after/
    'function-whitespace-after': 'always',
    
    // Indent with tabs
    // https://stylelint.io/user-guide/rules/indentation/
    'indentation': 'tab',
    
    // Limit the number of adjacent empty lines.
    // https://stylelint.io/user-guide/rules/max-empty-lines/
    'max-empty-lines': 1,
    
    // Require a single space after the colon in media features.
    // https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
    'media-feature-colon-space-after': 'always',
    
    // Disallow whitespace before the colon in media features.
    // https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
    'media-feature-colon-space-before': 'never',
    
    // Require lowercase for media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-case/
    'media-feature-name-case': 'lower',
    
    // Disallow whitespace on the inside of the parentheses within media features.
    // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
    'media-feature-parentheses-space-inside': 'never',
    
    // Require a single space after the range operator in media features.
    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
    'media-feature-range-operator-space-after': 'always',
    
    // Require a single space before the range operator in media features.
    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
    'media-feature-range-operator-space-before': 'always',
    
    // Require a newline after the commas of media query lists.
    // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
    'media-query-list-comma-newline-after': 'always-multi-line',
    
    // Require a single space after the commas of media query lists.
    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
    'media-query-list-comma-space-after': 'always-single-line',
    
    // Disallow whitespace before the commas of media query lists.
    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
    'media-query-list-comma-space-before': 'never',
    
    // Disallow end-of-line whitespace.
    // https://stylelint.io/user-guide/rules/no-eol-whitespace/
    'no-eol-whitespace': true,
    
    // Disallow extra semicolons.
    // https://stylelint.io/user-guide/rules/no-extra-semicolons/
    'no-extra-semicolons': true,
    
    // Disallow missing end-of-source newlines.
    // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
    'no-missing-end-of-source-newline': true,
    
    // Require lowercase for properties.
    // https://stylelint.io/user-guide/rules/property-case/
    'property-case': 'lower',
    
    // There must always be an empty line before multi-line rules, except for 
    // the first nested children of their parent node.
    // https://stylelint.io/user-guide/rules/rule-empty-line-before/
    'rule-empty-line-before': [
      'always',
      {
        'except': ['first-nested'],
        'ignore': ['after-comment'],
      }
    ],
    
    // Disallow whitespace on the inside of the brackets within attribute selectors.
    // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
    'selector-attribute-brackets-space-inside': 'never',
    
    // Disallow whitespace after operators within attribute selectors.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
    'selector-attribute-operator-space-after': 'never',
    
    // Disallow whitespace before operators within attribute selectors.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
    'selector-attribute-operator-space-before': 'never',
    
    // Require quotes for attribute values.
    // https://stylelint.io/user-guide/rules/selector-attribute-quotes/
    'selector-attribute-quotes': 'always',
    
    // Require a single space after the combinators of selectors.
    // https://stylelint.io/user-guide/rules/selector-combinator-space-after/
    'selector-combinator-space-after': 'always',
    
    // Require a single space before the combinators of selectors.
    // https://stylelint.io/user-guide/rules/selector-combinator-space-before/
    'selector-combinator-space-before': 'always',
    
    // Disallow non-space characters for descendant combinators of selectors.
    // https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
    'selector-descendant-combinator-no-non-space': true,
    
    // Require a newline after the commas of selector lists.
    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
    'selector-list-comma-newline-after': 'always',
    
    // Disallow whitespace before the commas of selector lists.
    // https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
    'selector-list-comma-space-before': 'never',
    
    // Limit the number of adjacent empty lines within selectors.
    // https://stylelint.io/user-guide/rules/selector-max-empty-lines/
    'selector-max-empty-lines': 0,
    
    // Require lowercase for pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
    'selector-pseudo-class-case': 'lower',
    
    // Disallow whitespace on the inside of the parentheses within pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
    'selector-pseudo-class-parentheses-space-inside': 'never',
    
    // Require lowercase for pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
    'selector-pseudo-element-case': 'lower',
    
    // Require double colon notation for applicable pseudo-elements.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
    'selector-pseudo-element-colon-notation': 'double',
    
    // Require lowercase for type selectors.
    // https://stylelint.io/user-guide/rules/selector-type-case/
    'selector-type-case': 'lower',
    
    // Disallow (unescaped) newlines in strings.
    // https://stylelint.io/user-guide/rules/string-no-newline/
    'string-no-newline': true,
    
    // Require double quotes around strings.
    // https://stylelint.io/user-guide/rules/string-quotes/
    'string-quotes': 'double',
    
    // Require lowercase for units.
    // https://stylelint.io/user-guide/rules/unit-case/
    'unit-case': 'lower',
    
    // Require lowercase for keywords values.
    // https://stylelint.io/user-guide/rules/value-keyword-case/
    'value-keyword-case': 'lower',
    
    // Require a newline after the commas of value lists.
    // https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
    'value-list-comma-newline-after': 'always-multi-line',
    
    // Require a single space after the commas of value lists.
    // https://stylelint.io/user-guide/rules/value-list-comma-space-after/
    'value-list-comma-space-after': 'always-single-line',
    
    // Disallow whitespace before the commas of value lists.
    // https://stylelint.io/user-guide/rules/value-list-comma-space-before/
    'value-list-comma-space-before': 'never',
    
    // Limit the number of adjacent empty lines within value lists.
    // https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
    'value-list-max-empty-lines': 0,
  }
};
