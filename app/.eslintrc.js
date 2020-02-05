module.exports = {
  env: {
		browser: true,
    es6: true,
    "jest/globals": true
	},
	extends: [ 'airbnb', 'prettier', 'prettier/react', "plugin:jest/recommended" ],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'react', 'prettier', 'react-hooks', 'enzyme', 'jest' ],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [ 'warn', { extensions: [ '.js', '.jsx' ] } ],
		'import/prefer-default-export': 'off',
		'no-param-reassign': 'off',
		'no-console': [ 'error', { allow: [ 'tron' ] } ],
		'react/jsx-props-no-spreading': 'off',
		'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathSuffix: 'src'
			}
		}
	}
};
