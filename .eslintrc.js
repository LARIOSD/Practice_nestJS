module.exports = {
    'env': {
        'browser' : true,
        'es2021'  : true,
        'node'    : true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser'        : '@typescript-eslint/parser',
    'parserOptions' : {
        'ecmaVersion' : 'latest',
        'sourceType'  : 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
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
