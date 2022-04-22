module.exports = {
    resolve: {
        fallback: {
            stream: false,
            crypto: false,
            assert: false,
            https: false,
            url: false,
            os: false,
            // 'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
        },
    },
};
