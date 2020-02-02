import React, {useState,useEffect} from 'react'
import { Container,Grid,Button  } from '@material-ui/core'
import Link from 'next/link'

function menu_mobile() {
    // const [logo,setLogo] = useState('logo-prosper-grd.png')
    const [open, setstate] = useState(false)

    let logo = 'logo-prosper-grd.png'
    if(open){
        logo ='logo-prosper-putih.png'
    } else {
        logo ='logo-prosper-grd.png'
    }


    return (
        <div className="menu_mobile">
            <Container maxWidth="xl" style={{height:'100%'}}>
                <Grid container style={{height:'100%'}}>
                    <Grid item xs={6} style={{zIndex:10}}>
                        <div className="menu_mobile-logo">
                            <Link href="/"><a><img src={`/images/${logo}`} /></a></Link>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{zIndex:10}}>
                        <div className="menu_mobile-wrapper">
                            <div id="nav-icon3" className={open ? 'open' : ''} onClick={() => setstate(!open)}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className={open ? 'menu_init menu_list' : 'menu_list'}>
                <ul>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/team"><a>Our Team</a></Link></li>
                    <li><Link href="/services"><a>Our Services</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default menu_mobile
