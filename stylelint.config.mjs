export default {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'no-descending-specificity': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'apply',
                    'config',
                    'custom-variant',
                    'debug',
                    'layer',
                    'plugin',
                    'reference',
                    'source',
                    'theme',
                    'utility',
                    'variant',
                ],
            },
        ],
        'at-rule-empty-line-before': null,
        'rule-empty-line-before': null,
        'declaration-block-single-line-max-declarations': null,
        'lightness-notation': null,
        'hue-degree-notation': null,
        'alpha-value-notation': null,
        'color-function-notation': null,
        'custom-property-empty-line-before': null,
    },
};
