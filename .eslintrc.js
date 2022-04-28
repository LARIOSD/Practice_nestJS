module.exports = {
    'env': {
        'browser' : true,
        'es2021'  : true,
        'node'    : true,
        'jest'    : true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser'        : '@typescript-eslint/parser',
    'parserOptions' : {
        'project'         : 'tsconfig.json',
        'tsconfigRootDir' : __dirname, 
        'sourceType'      : 'module',
    },
    'plugins': [
        '@typescript-eslint/eslint-plugin'
    ],
    'root': true,
    'ignorePatterns': ['.eslintrc.js'],
    'rules': {
        'key-spacing': [
            'error', {
              'align': { 'beforeColon': true, 'afterColon': true, 'on': 'colon' }
            }
          ],
          'global-require'            : 'off',
          'newline-per-chained-call'  : 'off',
          'import/no-dynamic-require' : 'off',
          'quotes'                    : [ 'error', 'single', { 'allowTemplateLiterals': true }],
          'class-methods-use-this'    : 'off'      
    }
}
