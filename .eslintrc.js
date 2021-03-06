module.exports = {
  "env": {
    "es6": true,
    "amd": false,
    "browser": true,
    "jasmine": false,
    "mocha": false,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "accessor-pairs": 2,
    "array-callback-return": 0,
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "block-scoped-var": 2,
    "block-spacing": 2,
    "brace-style": [
      2,
      "stroustrup"
    ],
    "callback-return": 2,
    "camelcase": 2,
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "comma-spacing": 2,
    "comma-style": [
      2,
      "last"
    ],
    "complexity": [
      2,
      5
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-return": 2,
    "consistent-this": [
      2,
      "self"
    ],
    "constructor-super": 2,
    "curly": [
      2,
      "multi-line",
      "consistent"
    ],
    "default-case": 2,
    "dot-location": 0,
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": [
      2,
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "generator-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "init-declarations": 0,
    "jsx-quotes": 0,
    "key-spacing": [
      2,
      {
        "mode": "minimum",
        "afterColon": true,
        "beforeColon": false
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": 2,
    "max-depth": [
      2,
      4
    ],
    "max-len": [
      2,
      120,
      4
    ],
    "max-nested-callbacks": [
      2,
      4
    ],
    "max-params": [
      2,
      4
    ],
    "max-statements": [
      0,
      10
    ],
    "new-cap": 2,
    "new-parens": 0,
    "newline-after-var": 2,
    "newline-before-return": 2,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 3
      }
    ],
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-function": 2,
    "no-labels": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-label": 2,
    "no-extra-parens": [
      2,
      "functions"
    ],
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [
      2,
      "functions"
    ],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-invalid-this": 0,
    "no-label-var": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [
      2,
      {
        "ignore": [
          -1,
          0,
          1
        ],
        "ignoreArrayIndexes": true,
        "enforceConst": true
      }
    ],
    "no-mixed-requires": [
      2,
      {
        "grouping": true,
        "allowCall": true
      }
    ],
    "no-mixed-spaces-and-tabs": [
      2,
      false
    ],
    "no-multi-spaces": [
      2,
      {
        "exceptions": {
          "Property": true,
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ],
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "no-native-reassign": 2,
    "no-negated-condition": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 0,
    "no-new-symbol": 0,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-globals": 0,
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-return-assign": 0,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": [
      2,
      {
        "allowAfterThis": true
      }
    ],
    "no-unexpected-multiline": 2,
    "no-useless-constructor": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-unused-vars": [
      2,
      {
        "args": "after-used",
        "vars": "all"
      }
    ],
    "no-use-before-define": [
      2,
      {
        "functions": false
      }
    ],
    "no-useless-call": 2,
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": [
      2,
      {
        "location": "start",
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ]
      }
    ],
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [
      2,
      "always"
    ],
    "object-shorthand": 2,
    "one-var": 0,
    "one-var-declaration-per-line": 2,
    "operator-assignment": [
      0,
      "always"
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "prefer-arrow-callback": 2,
    "prefer-const": 0,
    "prefer-reflect": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quote-props": [
      2,
      "as-needed"
    ],
    "quotes": [
      2,
      "single"
    ],
    "radix": 2,
    "require-jsdoc": 0,
    "require-yield": 2,
    "semi": [
      2,
      "never"
    ],
    "semi-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "sort-imports": 0,
    "sort-vars": 0,
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      {
        "anonymous": "never",
        "named": "never"
      }
    ],
    "keyword-spacing": 2,
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "nonwords": false,
        "words": true
      }
    ],
    "spaced-comment": [
      2,
      "always"
    ],
    "strict": [
      2,
      "global"
    ],
    "template-curly-spacing": [
      2,
      "never"
    ],
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [
      2,
      "inside"
    ],
    "wrap-regex": 0,
    "yoda": [
      2,
      "never"
    ]
  }
}
