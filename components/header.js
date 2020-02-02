import React from 'react'
import { Container,Grid,Button  } from '@material-ui/core'
import Link from 'next/link'

const header = (props) => {
    return (
        <header className={props}>
            <Container maxWidth='xl'>
                <menu>
                    <Grid container>
                        <Grid item xs={3}>
                            <Link href="/"><a><img src="/images/logo-prosper-putih.png" /></a></Link>
                        </Grid>
                        <Grid item xs={9} className="list_menu">
                            <ul>
                                <li><Link href="/about"><a className="border-init">About</a></Link></li>
                                <li><Link href="/team"><a>Our Team</a></Link></li>
                                <li><Link href="/services"><a>Our Services</a></Link></li>
                                <li><Link href="/contact"><a>Contact</a></Link></li>
                            </ul>
                        </Grid>
                    </Grid>
                </menu>
            </Container>
        </header>
    )
}

export default header
