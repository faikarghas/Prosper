import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* OPEN GRAP */}
                    {/* <meta name="description" content="We craft experiences for your digital needs."/> */}
                    {/* <meta name="og:description" content="We craft experiences for your digital needs."/> */}
                    {/* <meta name="author" content="DIGNITE STUDIO"/> */}
                    {/* <meta name="copyright" content="DIGNITE STUDIO" /> */}
                    {/* <meta name="creator" content="DIGNITE STUDIO" /> */}
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


