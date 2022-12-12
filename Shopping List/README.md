# Webpack Configuration

## Dependencies

1. Initial
    - webpack
    - webpack-cli

2. To serve HTML
    - html-webpack-plugin

3. To merge the common config with dev and prod
    - webpack-merge

4. To Serve the development file
    - webpack-dev-server

5. To serve CSS
    - css-loader
    - style-loader
    - css-minimizer-webpack-plugin
    - mini-css-extract-plugin


## To set Proxy in development

```
proxy: {
    '/api': {
        target: "http:localhost:8000/api",
        pathRewrite: {
            '^/api': ''
        }
    }
}
```

## For Proxy runtime in babel

- use this plugin @babel/plugin-transform-runtime

## A hack to change web page on html change

- use `watchFiles` in `devServer`