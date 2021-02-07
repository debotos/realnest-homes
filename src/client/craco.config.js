const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less')

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				// baseUrl SHOULD be specified
				// plugin does not take it from tsconfig
				baseUrl: './src',
				// tsConfigPath should point to the file where "baseUrl" and "paths" are specified
				tsConfigPath: './tsconfig.extend.json',
			},
		},
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							/* https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less */
							'@font-family':
								"'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
							'@primary-color': '#6459F5', // primary color for all components
							'@link-color': '#1890ff', // link color
							'@success-color': '#52c41a', // success state color
							'@warning-color': '#faad14', // warning state color
							'@error-color': '#f5222d', // error state color
							'@font-size-base': '12px', // major text font size
							'@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
							'@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
							'@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
							'@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
							'@border-radius-base': '2px', // major border radius
							'@border-color-base': '#d9d9d9', // major border color
							'@btn-font-weight': 500, // button font weight
							'@box-shadow-base':
								'0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // major shadow for layers
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
