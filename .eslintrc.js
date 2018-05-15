// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "key-spacing": "off",
    "comma-spacing": "off",
    "no-useless-escape": "off",
    "eqeqeq": "off",
    "no-new-object": "off",
    "no-unused-vars": "off",
    "no-trailing-spaces": "off",
    "no-unneeded-ternary": "off",
    "space-before-function-paren": "off",
    "no-extend-native": "off",
    "no-array-constructor": "off",
    "padded-blocks": 'off',
    "indent": "off",
    "disallowTabs": true,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // "space-before-function-paren": ["error", "always"],
    // "indent": ["error", 2, { "SwitchCase": 1 }],//缩进
    "eol-last": ["error", "never"],
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
    "no-throw-literal": "error",
    // "padded-blocks": ["error", "always"],
    // "eqeqeq": ["error", "always", { "null": "ignore" }],//===
    "semi": ["error", "always"],//(默认) 要求在语句末尾使用分号
    // "no-unused-vars": ["error", { "args": "none" }],//禁止使用未声明的变量
    "space-before-function-paren": ["error", "never"],//要求或禁止函数圆括号之前有一个空格
    "comma-dangle": ["error", "never"],//要求禁止末尾逗号
    "spaced-comment": ["error", "always"], // 强制在注释中 // 或 /* 使用一致的空格
    "no-extra-parens": ["error", "all", { "conditionalAssign": true }],//禁止不必要的括号  
    "disallowTabs": true,
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],// 禁止使用大多空格
    "space-infix-ops": ["error", { "int32Hint": true }],
    // "no-trailing-spaces": ["error", { "skipBlankLines": true }],
  }
}
