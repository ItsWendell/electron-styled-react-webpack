import webpack from 'webpack';
import config from './webpack.config';
import WebpackDevServer from 'webpack-dev-server/lib/Server';
import { spawn } from 'child_process';

const webpackConfig = {
    ...config,
    mode: process.env.NODE_ENV || 'development',
}

const port = process.env.PORT || 3000;

let server;

const compiler = webpack({
    ...webpackConfig,
    entry: [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        webpackConfig.entry,
    ],
});

compiler.run((err, stats) => {
    if (err | stats.hasErrors()) {
        console.log(stats.compilation.errors);
        return;
    }

    if (webpackConfig.mode === 'development') {
        server = new WebpackDevServer(compiler, {
            contentBase: webpackConfig.output.path,
            stats: {
                colors: true,
                chunks: false,
                children: false
            },
            publicPath: webpackConfig.output.publicPath,
            hot: true,
            historyApiFallback: true,
        });

        server.listen(port, 'localhost', () => {
            process.env.ELECTRON_START_URL = `http://localhost:${server.listeningApp.address().port}`;
            spawn(
                'electron',
                ['.'], {
                    shell: true,
                    env: process.env,
                    stdio: 'inherit',
                }
            )
                .on('close', code => process.exit(0))
                .on('error', spawnError => console.error(spawnError))
        });
    }
});
