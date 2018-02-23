module.exports = {
  'plugins': [
    'stylelint-scss',
  ],
  'rules': {
    // Require an empty line or disallow empty lines before @-else.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    'scss/at-else-empty-line-before': 'never',
    
    // Disallow at-extends (@extend) with missing placeholders.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    'scss/at-extend-no-missing-placeholder': true,
    
    // Disallow leading underscore in partial names in @import.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
    'scss/at-import-no-partial-leading-underscore': true,
    
    // Require parentheses in argumentless @mixin calls.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    
    // Require a newline after the colon in $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    
    // Require a single space after the colon in $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    
    // Require a single space or disallow whitespace before the colon in $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md
    'scss/dollar-variable-colon-space-before': 'never',
    
    // Disallow empty lines before $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    'scss/dollar-variable-empty-line-before': [
      'always', {
        'except': [
          'after-dollar-variable',
          'first-nested',
        ],
        'ignore': [
          'after-comment',
        ],
      },
    ],
    
    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
    'scss/dollar-variable-no-missing-interpolation': true,
    
    // Disallow properties with - in their names to be in a form of a nested group.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
    'scss/declaration-nested-properties': 'never',
    
    // Require an empty line before //-comments.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested',
        ],
        'ignore': [
          'between-comments', 
          'stylelint-commands',
        ],
      },
    ],
    
    // Require whitespace after the // in //-comments
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md
    'scss/double-slash-comment-whitespace-inside': 'always',
    
    // Disallow linebreaks after Sass operators.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md
    'scss/operator-no-newline-after': true,
    
    // Disallow linebreaks before Sass operators.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
    'scss/operator-no-newline-before': true,
    
    // Disallow unspaced operators in Sass operations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md
    'scss/operator-no-unspaced': true,
    
    // Disallow redundant nesting selectors (&).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
    'scss/selector-no-redundant-nesting-selector': true,
  },
};