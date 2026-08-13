'use strict';

const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
    {
        ignores: ['dist/**', 'coverage/**', '.nyc_output/**']
    },
    js.configs.recommended,
    ...tseslint.configs['flat/recommended'],
    prettierConfig,
    {
        files: ['src/**/*.ts'],
        rules: {
            // Rule customizations
            // '@typescript-eslint/explicit-function-return-type': 'off',
        }
    }
];
