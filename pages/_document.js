import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import App from 'next/app';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

        return { 
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()], 
        }
    }
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}
                    <meta name="description" content="Together to a Better Tommorow"/>
                    <meta name="og:description" content="Together to a Better Tommorow"/>
                    <meta name="author" content="Prosper Ventura"/>
                    <meta name="copyright" content="Prosper Ventura" />
                    <meta name="creator" content="Prosper Ventura" />
                    {/* favicon */}
                    <link rel="shortcut icon" href="../static/image/logofavicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="../static/favicon.ico" type="image/x-icon"></link>
                    <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i|Lato:400,700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossOrigin="anonymous" />
                    {/* Import CSS for nprogress */}
                    <link rel='stylesheet' type='text/css' href='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}


