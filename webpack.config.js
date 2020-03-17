const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    node: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'sourc-map',
    externals: { axios: 'axios' },
    output: {
        library: "DFSEO",
        libraryTarget: "umd",
        filename: 'index.js',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'dist'),
    },
};