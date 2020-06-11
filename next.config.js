const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(png|jp(e*)g|svg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					
				}
			]
		});

		return config;
	},
    assetPrefix: isProd ? '/json-viewer' : ''
};
