import React, { Component, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography  } from '@material-ui/core'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Footer from '../components/footer'

const useScroll = () => {
    const htmlElRef = useRef(null)
    const executeScroll = () => window.scrollTo({behavior:'smooth', top: htmlElRef.current.offsetTop - 100})

    return [executeScroll, htmlElRef]
}

function index () {
    const { scrollYProgress } = useViewportScroll()
    const [executeScroll, elementToScrollRef] = useScroll()
    const [trans, setTrans] = useState(0);

    function handleScroll() {
        let valueScroll = window.scrollY
        if(valueScroll){
            setTrans(valueScroll/5)
        }
    }

    useEffect(() => {
        // window.location.replace(`/${getInitialLocale()}`)

        function watchScroll() {
          window.addEventListener("scroll", handleScroll);
        }

        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

      });
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
        return (
            <React.Fragment>
                <header className="header_home">
                    <Container>
                        <menu>
                            <Grid container>
                                <Grid item xs={3}>
                                    <img src="/images/logo-prosper-putih.png" />
                                </Grid>
                                <Grid item xs={9} className="list_menu">
                                    <ul>
                                        <li><Link href="/about"><a>About</a></Link></li>
                                        <li><Link href="/team"><a>Our Team</a></Link></li>
                                        <li><Link href="/services"><a>Our Services</a></Link></li>
                                        <li><Link href="/contact"><a>Contact</a></Link></li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </menu>
                        <motion.div className="header_text">
                            <h1>Together to <br/> a Better Tommorow</h1>
                            <p>With experience at the helm, and innovation as the <br/>engine.</p>
                            <br/>
                            <br/>
                        </motion.div>
                        <div className="explore" onClick={executeScroll}>
                            <p>explore now</p>
                            <img src="/images/dropdown-arrow-white.png" />
                        </div>
                    </Container>
                </header>
                <main className="home">
                    {/* <Container> */}
                        <section id="products" ref={elementToScrollRef} className="section_products_home">
                        <Container style={{position:'relative',height:'100%'}}>
                            <div className="offset-up">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={4}>
                                        <div className="box_wrapper">
                                            <div className="box_wrapper-item">
                                                <img src="/photos/kevin-ku.jpg"/>
                                                <div className="overlay"></div>
                                                <div className="desc">
                                                    <h3>Asset Management</h3>
                                                    <br/>
                                                    <p>Our dedicated team of analysts and traders collaborate under consumer directives in managing the growth of allocated client equity</p>
                                                    <br/>
                                                    <br/>
                                                    <Link href="/services#assets-management"><a><Button variant="outlined" color="primary">Learn More</Button></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <div className="box_wrapper">
                                            <div className="box_wrapper-item">
                                                <img src="/photos/austin-distel.jpg"/>
                                                <div className="overlay"></div>
                                                <div className="desc">
                                                    <h3>Capital Fundraising</h3>
                                                    <br/>
                                                    <p>Connect new promising ventures in early-stage enterprise with the appropriate source of capital from experienced clients</p>
                                                    <br/>
                                                    <br/>
                                                    <Link href="/services#capital-fundraising"><a><Button variant="outlined" color="primary">Learn More</Button></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <div className="box_wrapper">
                                            <div className="box_wrapper-item">
                                                <img src="/photos/markus-spiske.jpg"/>
                                                <div className="overlay"></div>
                                                <div className="desc">
                                                    <h3>Fixed Rate Notes</h3>
                                                    <br/>
                                                    <p>Provide a long term investment service to expand your portfolio in the form of fixed returns of 12.5% annually.</p>
                                                    <br/>
                                                    <br/>
                                                    <Link href="/services#fixes-rate-notes"><a><Button variant="outlined" color="primary">Learn More</Button></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                        </section>
                        <section className="section_about_home">
                            <Container maxWidth='xl'>
                            <Grid container>
                                <Grid item xs={12} lg={6} className="dp-center dp-block">
                                    <div className="section_about_home-desc">
                                        <h2>About Us</h2>
                                        <p>Prosper Ventura manifested in March 2019, the era of the digital economy. Where unicorns are born and giants recede. Working together with companies and start-ups that are in the mold of potential unicorns. Ranging from retail, services, tech, and construction as their initial investments.</p>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <Link href="/about"><a className="link_button"><Button variant="outlined" color="primary">Read More</Button></a></Link>
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                <div className="section_about_home-photo">
                                    <img src="/photos/nik-macmillan.jpg" width="100%"/>
                                </div>
                                </Grid>
                            </Grid>
                            </Container>
                        </section>
                        <section className="section_partners_home">
                            <Container>
                            <h2>Our Partners</h2>
                            <p>We value the partnerships we haave built over the years. View <br/> some of the partners that we work with:</p>
                            <Grid container>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/gkinvest.png" width="180px" alt="gkinvest-logo"/>
                                </Grid>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/NorthCliff.png" width="180px" alt="NorthCliff-logo"/>
                                </Grid>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/spotless.png" width="180px" alt="spotless-logo"/>
                                </Grid>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/TSM.png" width="180px" alt="TSM-logo"/>
                                </Grid>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/CollabstoreJKT.png" width="180px" alt="CollabstoreJKT-logo"/>
                                </Grid>
                                <Grid item xs={6} lg={4} className="dp-center box_img">
                                    <img className="img_partner" src="/images/SDT.png" width="180px" alt="SDT-logo"/>
                                </Grid>
                            </Grid>
                            </Container>
                        </section>
                        <section className="section_find_home">
                            <Container>
                            <h2>Find Your Best Investment</h2>
                            <p>Our services cover investments in a while range of <br/> global, regional and country specific strategies.</p>
                            <div className="dp-center">
                                <Link href="/services#upload"><a className="link_button"><Button variant="outlined" color="primary">Get Started</Button></a></Link>
                            </div>
                            </Container>
                        </section>
                        <section className="section_img_home">
                            <img src="/photos/gunung.png" width="100%"/>
                        </section>
                    {/* </Container> */}
                </main>
                <Footer />
            </React.Fragment>
        )
}

export default index
