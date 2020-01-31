import React, { Component, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography  } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Slider from 'react-slick'
import Footer from '../components/footer'

const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: '10px',
    focusOnSelect: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            variableWidth: false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            variableWidth: false
          }
        }
      ]
};

function About ({deviceType}) {
    return (
        <React.Fragment>
            <div className="header_about">
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
            </div>
            <main className="about">
                <section className="section_about_about">
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid item xs={12} md={6} className="dp-start">
                                <div className="section_about_about-title">
                                    <h1>About<br/>
                                    Prosper Kapital<br/>
                                    Ventura</h1>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="section_about_about-desc">
                                    <p>Prosper Ventura is an analytical based financial services
                                    firm specializing in foreign exchange based asset
                                    management, and controlled risk capital investments.
                                    Managing an extensively growing investment portfolio,
                                    Prosper Ventura prides in providing a clear consulting
                                    service, with the aim of a definite growth of value for its
                                    clients.
                                    </p>
                                    <br/>
                                    <br/>
                                    <p>The ingrained investment philosophy is “Together to a better tomorrow.”</p>
                                    <br/>
                                    <br/>
                                    <p>Promising calculated risk and return in appropriate opportunities towards our customer’s interest. Using data-driven results, tailoring the customer investment needs with a great degree of control, and instilling an investment approach towards direct asset ownership of tangible value.</p>
                                    <br/>
                                    <br/>
                                    <p>Prosper Ventura holds an accreditation of (JENIS AKREDITASI OJK) issued by the Financial Services Authority (OJK). Independent, trusted, and progressive. Meaning that we are not controlled, directly or otherwise, by any financial services entity. Valuing customer interest as our main goal.</p>
                                    <br/>
                                    <br/>
                                    <p>Prosper Ventura services are fee-based with an utmost important focus to client interests. Tailoring the needs and objectives to each individual client’s specific investment strategies. Putting consulting first, in favor of directed investment decision making actions. Empowering both clients and us, in a sustainable and profitable future.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_visi_about">
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className="section_visi_about-desc">
                                    <div className="visimisi">
                                        <h2>Our Vision</h2>
                                        <ul>
                                            <li>Increasing the value of investments through long-term strategic partnerships.</li>
                                            <li>Establishment as market leader in private equity services in numerous new industry sectors.</li>
                                            <li>Developing and front lining the growth of future industrial sectors.</li>
                                            <li>Building the solid foundations of a greater national economy through future-oriented partnerships.</li>
                                        </ul>
                                    </div>
                                    <div className="visimisi">
                                        <h2>Our Mission</h2>
                                        <ul>
                                            <li>Creating a better future throughout all stakeholders.</li>
                                            <li>Maintaining consistent growth of assets for all partners.</li>
                                            <li>Utilization of Low Risk – High Return strategies within all client assets.</li>
                                            <li>Promising sustainable growth of equity using proven methods.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="section_visi_about-img">
                                    <img src="/photos/phil-desforges.jpg" alt=""/>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_why_about">
                    <Container maxWidth="xl">
                        <Grid container >
                            <Grid item xs={12}>
                                <div className="section_why_about-title">
                                    <h2>Why Us</h2>
                                    <p>"Only the knowledgeable tread new territories, and<br/> through the unfamiliar they are rewarded."</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="section_why_about-content">
                                    <img src="/photos/andrew-neel.jpg"/>
                                    <p>Our philosophy, system, and relationship building blends client individual decision making with our team’s guidance in analytical data calculations. Adding a customized design approach. Ensuring investments are consistent with the objectives and limitations set to the clear growth for our client’s portfolios.</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="section_why_about-content">
                                    <img src="/photos/dylan-gillis.jpg"/>
                                    <p>Our relationship with clients are treated as valuable collaborations, recognizing detailed concerns and needs Prosper Ventura provides a team of seasoned investment professionals with recognizable track records. Who continuously monitor and evaluate all financial markets who are in touch with the current trends, enabling an effective pinpoint of the increasingly dynamic and changing market condition.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_download_about">
                    <Container maxWidth='xl'>
                    <Grid container>
                        <Grid item xs={12}>
                            <div className="download">
                                <h4>Download our company profile</h4>
                                <a className="link_button" href="/pdf/compro-prosper.pdf" download><Button variant="outlined" color="primary">Download</Button></a>
                            </div>
                        </Grid>
                    </Grid>
                    </Container>
                </section>
                <section className="section_say_about">
                    <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12}>
                            <div className="section_say_about-content">
                                <h2>What They Say</h2>
                                <div className="section_say_about-content--slider">
                                    <Slider {...settings}>
                                        <div className="section_say_about-content--slider-item" style={{width:'800px'}}>
                                            <div className="text">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                            </div>
                                            <Avatar alt="Remy Sharp" src="/photos/austin-distel.jpg"/>
                                            <h5 className="cm">Client Name</h5>
                                            <p>Company</p>
                                        </div>
                                        <div className="section_say_about-content--slider-item" style={{width:'800px'}}>
                                            <div className="text">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                            </div>
                                            <Avatar alt="Remy Sharp" src="/photos/austin-distel.jpg"/>
                                            <h5 className="cm">Client Name</h5>
                                            <p>Company</p>
                                        </div>
                                        <div className="section_say_about-content--slider-item" style={{width:'800px'}}>
                                            <div className="text">
                                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                            </div>
                                            <Avatar alt="Remy Sharp" src="/photos/austin-distel.jpg"/>
                                            <h5 className="cm">Client Name</h5>
                                            <p>Company</p>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    </Container>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default About
