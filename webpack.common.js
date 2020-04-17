module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
   
    module: {
        rules: [
           {
               test: /\.html$/,
               use: ["html-loader"]
           },
           {
               test: /(svg|jpg|gif|png)$/,
               use: {
                   loader: 'file-loader',
                   options: {
                       name: "[name].[hash].[ext]",
                       outputPath: "imgs"
                   }
               } 
           }
        ],
    },
    
    
    
};