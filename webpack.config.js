module.exports = {
    entry:'./src/App',
    output:{
        filename:'./build/bundle.js'
    },
    module:{
        loaders:[{
            test: /\.js$/,
            loader:'babel',
            exclude:[/node_modules/],
            query:{
                presets:['es2015','stage-1','react','react-hmre'],
                plugins:[
                  'transform-flow-strip-types',
                  'transform-class-properties',
                  'transform-decorators-legacy'
                ]
            }
        }]
    }
};
