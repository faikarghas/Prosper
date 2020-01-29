import React, { Component, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Container,Grid,Button,GridListTile,Typography, Divider  } from '@material-ui/core'
import Footer from '../components/footer'

function Team () {
    return (
        <React.Fragment>
            <header className="header_team">
                <Container>
                    <menu>
                        <Grid container>
                            <Grid item xs={3}>
                                <Link href="/"><a><img src="/images/logo-prosper-putih.png" /></a></Link>
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
                    <div className="header_text-team">
                        <h1>World-class Investing Team <br/>in Indonesia Since 2019</h1>
                        <p>Armed with a like-minded team of professionals, utilizing strong <br/>networks to collaborate in tapping unseen opportunities, and a valuable<br/> backbone in research and data-driven investment strategies.</p>
                    </div>
                </Container>
            </header>
            <main className="team">
                <section className="section_commissioner_team">
                    <Container>
                        <div className="cm">
                            <h2>Dr. Ir. Bambang Nariyono, MM.</h2>
                            <h3>Head Commissioner</h3>
                            <ul>
                                <li>Assistant Logistical Commander, Rear Admiral, Indonesian National Armed Forces</li>
                                <li>Business Management Doctorate, Sekolah Bisnis Institut Pertanian Bogor</li>
                                <li>Program Sastra 2, Universitas Krisna Dwipayana, Jakarta</li>
                                <li>Program Sastra 1, Sekolah Tinggi Teknologi Angkatan Laut, Surabaya</li>
                            </ul>
                            <p>With fourty years of field and industry experience in the operational division of the Indonesian Navy. Bamban Nariyono is a decorated officer with numerous awards and medals for his service, including; Bintang Yudha Dharma Pratama, Satya Lencana Kesetiaan XXXII Tahun, and Saya Lencana Dharma Samudra. His lengthy career spans within the logistical ranks of the Indonesian Navy with stations across the country and overseas, and a position in Indonesia’s strategic and defense institution: the National Resilience Institution.</p>
                            <br/>
                            <br/>
                            <p>Bambang Nariyono is current head commissioner of Prosper Ventura, providing experience and leadership within the organization</p>
                        </div>
                        <div className="cm">
                            <h2>Ir. Bosmen Halomoan Silalahi M.Si</h2>
                            <h3>Commissioner</h3>
                            <ul>
                                <li>General Contractor, PT. Tangguh Swakarsa Mandiri</li>
                                <li>Post Graduate International Business Administration, University of Indonesia</li>
                                <li>Former Coordinator and Steering Committee, BNI Bank, Integrated Centralized Online Systems Team</li>
                            </ul>
                        </div>
                    </Container>
                </section>
                <Container> <div className="divider"></div></Container>
                <section className="section_founder_team">
                    <Container>
                        <Grid container>
                            <Grid item xs={12} md={3}>
                                <div className="photo">
                                    <img src="/photos/dika.jpg"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <div className="cm">
                                    <h2>Prabadika Hadyan Romadhona</h2>
                                    <h3>Executive Director</h3>
                                    <ul>
                                        <li>Co-Founder, Prosper Ventura</li>
                                        <li>President Commissioner, PT. Mata Aer Makmurindo</li>
                                        <li>Bachelor of Economics, Business Management, University of Prasetiya Mulya</li>
                                    </ul>
                                    <p>A young and experienced leader, Prabadika has a proven business aptitude in recent years over the growth management of several consumer retail brands, overseeing and direction of multiple sectors of industry in his experience at Mata Aer in fields such as; procurement, media, import-export, and construction. A true analytical observer, his role in Prosper Ventura leads the overall path of growth for general investment strategies through both qualitative and data analytic strategies.</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="photo">
                                    <img src="/photos/david.jpg"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <div className="cm">
                                    <h2>David William Hamonangan Silala</h2>
                                    <h3>Investment Director</h3>
                                    <ul>
                                        <li>Co-Founder, Prosper Ventura</li>
                                        <li>Former CEO, PT. Nomaden Teknologi Indonesia</li>
                                        <li>Bachelor of Economics, Business Management, University of Prasetiya Mulya</li>
                                    </ul>
                                    <p>Strong organizational experience has decorated David’ s promising career, with talents ranging from operational, marketing, and human capital management. A keen eye for key opportunities remains the key strategies implemented within Propser Ventura. His experience in fields such as tech, retail, consumer goods, and human resource has equipped David in the establishment of a wide network of partnerships within the rapidly changing industrial sectors.</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="photo">
                                    <img src="/photos/rayhan.jpg"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <div className="cm">
                                    <h2>Rayhan Ramlan Esfa</h2>
                                    <h3>Portfolio Director</h3>
                                    <ul>
                                        <li>Co-Founder and Head Trader, Prosper Ventura</li>
                                        <li>Founder and Head Trader, Fortune FX</li>
                                        <li>Bachelor of Economics, Accounting, University of Trisakti</li>
                                    </ul>
                                    <p>Utilization of data approach for proper investment planning is the main backbone of Prosper Ventura, this approach is undoubtedly led by Rayhan. His implementation of stable and sustainable investment strategies has been the main strength that carries Prosper Ventura. Along with directing a proven and agile team of traders, Rayhan is the main strategist on all on ground investment planning within the company.</p>
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

export default Team
