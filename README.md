# stylelint-config-telegraph

The Telegraph Engineering stylelint config.

We have based our config on [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and made various custom changes to adhere to our internal standards.

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

### Indentation 

Indent your CSS properties with tabs. The default tab size should be set as 4.

### Nesting

Heavy nesting should be avoided at all times, particularly with Sass. Every element should have its own class and be written on a new line.

Nesting is only permitted for pseudo selectors and must have a new, empty, line above them.

### Readability vs Compression

CSS should be written in a readable manor and compression left for the build process and tooling.

### Prefixes

Do not prefix any of your CSS as we let [autoprefixer](https://github.com/postcss/autoprefixer) do all of the hard work for us.

### Selectors

Multiple shared selectors should go on seperate lines and you should not have more than 3 levels deep for selectors.

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

The use of `!important` should only be considered for helper classes or if it is a requirement to override third party, inline, styles.

### Comments

Comment as much as you can to be as clear as you can. Where applicable, for a component, comment out a piece of markup to help define the context of the CSS. Comments should have a new, empty, line above them and be above the CSS selector.

### @extend

We don't promote the use of the `@extend` operator. It can generate unexpected results in compiled CSS.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)
