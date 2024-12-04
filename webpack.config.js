const path = require('path');


var config = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        clean: true,
        library: {
            name: 'rerobots',
            type: 'umd',
        },
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};

module.exports = (env, argv) => {
    config.mode = argv.mode || 'development';
    if (config.mode === 'development') {
        config.devtool = 'eval-source-map';
    }
    return config;
};
