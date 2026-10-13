import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'dist',
            'coverage',
            '.vitest',
            'node_modules',
            '.pnp.*',
            '.yarn/**',
            '*.tsbuildinfo',
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
);
