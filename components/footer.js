import React from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography  } from '@material-ui/core'

function footer(){
    return (
        <>
            <footer>
                <Container>
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <p>PT. Prosper Kapital Ventura<br/>
                            Vinotti Living Building, 3rd Floor<br/>
                            Jl. Cipinang Muara Raya No. 8, RT. 4,<br/>
                            Cipinang Besar Sel., Kecamatan Jatinegara,<br/>
                            Jakarta Timur, DKI Jakarta 13460</p>
                            <br/>
                            <p>contact@prosperventura.com</p>
                            <p>+62813 8459 2625</p>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <ul>
                                <li><a><img src="/images/icon_fb.png"/></a></li>
                                <li><a><img src="/images/icon_ig.png"/></a></li>
                                <li><a><img src="/images/icon_linkedin.png"/></a></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
            <div className="sitemap">
                <ul>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/team"><a>Our Team</a></Link></li>
                    <li><Link href="/services"><a>Our Service</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
                <p>Copyright @ 2020 Prosper Kapital Ventura. All Rights Reserved.</p>
                <p>Website developed by Dignite Studio  </p>
            </div>
        </>
    )
}

export default footer
