# stylelint-config-telegraph

This package provides TMG's base CSS .stylelintrc as an extensible shared config.

## Install

```
$ npm install @telegraph-engineering/stylelint-config-telegraph --save-dev
```

## Usage

Within your [stylelint config object](http://stylelint.io/user-guide/configuration/#extends) You can extend this configuration. This will serve as a base for your config, then you can make overrides in your own config object.

```json
{
  "extends": "@telegraph-engineering/stylelint-config-telegraph"
}
```

## Rules

The different options for rules can be found in the original [stylelint repo](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md)

## Styleguide

### Prefixes

Do not prefix any of your CSS as we let [autoprefixer](https://github.com/postcss/autoprefixer) do all of the hard work for us.

### Selectors

#### Universal

Avoid all universal selectors (`*`). Components and styles will be shared on pages and these selectors will cause unforseen problems.

#### Type

Avoid the use of top level type selectors. Components and styles will be shared on pages and these selectors will cause unforseen problems.

#### ID

Never use ID selectors. The high specificty can cause unexpected issues between styles.

#### Class

Class names should be in the [Block Element Modifier (BEM)](http://getbem.com/introduction/) style. BEM allows for clean, reusable code, that makes a clear connection between the HTML 'component' and its styles.

#### Compound

Never go more than two levels deep with compound selectors. If the BEM syntax is followed carefully then this should mitigate the need for these type of selectors.

#### Important

The use of `!important` should never be used unless it is a requirement to override third party, inline, styles.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)
